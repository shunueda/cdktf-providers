// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WanoptContentdeliverynetworkruleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#category WanoptContentdeliverynetworkrule#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#comment WanoptContentdeliverynetworkrule#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#dynamic_sort_subtable WanoptContentdeliverynetworkrule#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#get_all_tables WanoptContentdeliverynetworkrule#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#id WanoptContentdeliverynetworkrule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#name WanoptContentdeliverynetworkrule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#request_cache_control WanoptContentdeliverynetworkrule#request_cache_control}
  */
  readonly requestCacheControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#response_cache_control WanoptContentdeliverynetworkrule#response_cache_control}
  */
  readonly responseCacheControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#response_expires WanoptContentdeliverynetworkrule#response_expires}
  */
  readonly responseExpires?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#status WanoptContentdeliverynetworkrule#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#text_response_vcache WanoptContentdeliverynetworkrule#text_response_vcache}
  */
  readonly textResponseVcache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#updateserver WanoptContentdeliverynetworkrule#updateserver}
  */
  readonly updateserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#vdomparam WanoptContentdeliverynetworkrule#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * host_domain_name_suffix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#host_domain_name_suffix WanoptContentdeliverynetworkrule#host_domain_name_suffix}
  */
  readonly hostDomainNameSuffix?: WanoptContentdeliverynetworkruleHostDomainNameSuffix[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#rules WanoptContentdeliverynetworkrule#rules}
  */
  readonly rules?: WanoptContentdeliverynetworkruleRules[] | cdktf.IResolvable;
}
export interface WanoptContentdeliverynetworkruleHostDomainNameSuffix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#name WanoptContentdeliverynetworkrule#name}
  */
  readonly name?: string;
}

export function wanoptContentdeliverynetworkruleHostDomainNameSuffixToTerraform(struct?: WanoptContentdeliverynetworkruleHostDomainNameSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function wanoptContentdeliverynetworkruleHostDomainNameSuffixToHclTerraform(struct?: WanoptContentdeliverynetworkruleHostDomainNameSuffix | cdktf.IResolvable): any {
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

export class WanoptContentdeliverynetworkruleHostDomainNameSuffixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WanoptContentdeliverynetworkruleHostDomainNameSuffix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WanoptContentdeliverynetworkruleHostDomainNameSuffix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class WanoptContentdeliverynetworkruleHostDomainNameSuffixList extends cdktf.ComplexList {
  public internalValue? : WanoptContentdeliverynetworkruleHostDomainNameSuffix[] | cdktf.IResolvable

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
  public get(index: number): WanoptContentdeliverynetworkruleHostDomainNameSuffixOutputReference {
    return new WanoptContentdeliverynetworkruleHostDomainNameSuffixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WanoptContentdeliverynetworkruleRulesContentId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#end_direction WanoptContentdeliverynetworkrule#end_direction}
  */
  readonly endDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#end_skip WanoptContentdeliverynetworkrule#end_skip}
  */
  readonly endSkip?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#end_str WanoptContentdeliverynetworkrule#end_str}
  */
  readonly endStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#range_str WanoptContentdeliverynetworkrule#range_str}
  */
  readonly rangeStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#start_direction WanoptContentdeliverynetworkrule#start_direction}
  */
  readonly startDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#start_skip WanoptContentdeliverynetworkrule#start_skip}
  */
  readonly startSkip?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#start_str WanoptContentdeliverynetworkrule#start_str}
  */
  readonly startStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#target WanoptContentdeliverynetworkrule#target}
  */
  readonly target?: string;
}

export function wanoptContentdeliverynetworkruleRulesContentIdToTerraform(struct?: WanoptContentdeliverynetworkruleRulesContentIdOutputReference | WanoptContentdeliverynetworkruleRulesContentId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_direction: cdktf.stringToTerraform(struct!.endDirection),
    end_skip: cdktf.numberToTerraform(struct!.endSkip),
    end_str: cdktf.stringToTerraform(struct!.endStr),
    range_str: cdktf.stringToTerraform(struct!.rangeStr),
    start_direction: cdktf.stringToTerraform(struct!.startDirection),
    start_skip: cdktf.numberToTerraform(struct!.startSkip),
    start_str: cdktf.stringToTerraform(struct!.startStr),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function wanoptContentdeliverynetworkruleRulesContentIdToHclTerraform(struct?: WanoptContentdeliverynetworkruleRulesContentIdOutputReference | WanoptContentdeliverynetworkruleRulesContentId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_direction: {
      value: cdktf.stringToHclTerraform(struct!.endDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_skip: {
      value: cdktf.numberToHclTerraform(struct!.endSkip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_str: {
      value: cdktf.stringToHclTerraform(struct!.endStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_str: {
      value: cdktf.stringToHclTerraform(struct!.rangeStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_direction: {
      value: cdktf.stringToHclTerraform(struct!.startDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_skip: {
      value: cdktf.numberToHclTerraform(struct!.startSkip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_str: {
      value: cdktf.stringToHclTerraform(struct!.startStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WanoptContentdeliverynetworkruleRulesContentIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WanoptContentdeliverynetworkruleRulesContentId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDirection = this._endDirection;
    }
    if (this._endSkip !== undefined) {
      hasAnyValues = true;
      internalValueResult.endSkip = this._endSkip;
    }
    if (this._endStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.endStr = this._endStr;
    }
    if (this._rangeStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeStr = this._rangeStr;
    }
    if (this._startDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDirection = this._startDirection;
    }
    if (this._startSkip !== undefined) {
      hasAnyValues = true;
      internalValueResult.startSkip = this._startSkip;
    }
    if (this._startStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStr = this._startStr;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WanoptContentdeliverynetworkruleRulesContentId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endDirection = undefined;
      this._endSkip = undefined;
      this._endStr = undefined;
      this._rangeStr = undefined;
      this._startDirection = undefined;
      this._startSkip = undefined;
      this._startStr = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endDirection = value.endDirection;
      this._endSkip = value.endSkip;
      this._endStr = value.endStr;
      this._rangeStr = value.rangeStr;
      this._startDirection = value.startDirection;
      this._startSkip = value.startSkip;
      this._startStr = value.startStr;
      this._target = value.target;
    }
  }

  // end_direction - computed: true, optional: true, required: false
  private _endDirection?: string; 
  public get endDirection() {
    return this.getStringAttribute('end_direction');
  }
  public set endDirection(value: string) {
    this._endDirection = value;
  }
  public resetEndDirection() {
    this._endDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDirectionInput() {
    return this._endDirection;
  }

  // end_skip - computed: false, optional: true, required: false
  private _endSkip?: number; 
  public get endSkip() {
    return this.getNumberAttribute('end_skip');
  }
  public set endSkip(value: number) {
    this._endSkip = value;
  }
  public resetEndSkip() {
    this._endSkip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endSkipInput() {
    return this._endSkip;
  }

  // end_str - computed: false, optional: true, required: false
  private _endStr?: string; 
  public get endStr() {
    return this.getStringAttribute('end_str');
  }
  public set endStr(value: string) {
    this._endStr = value;
  }
  public resetEndStr() {
    this._endStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endStrInput() {
    return this._endStr;
  }

  // range_str - computed: false, optional: true, required: false
  private _rangeStr?: string; 
  public get rangeStr() {
    return this.getStringAttribute('range_str');
  }
  public set rangeStr(value: string) {
    this._rangeStr = value;
  }
  public resetRangeStr() {
    this._rangeStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeStrInput() {
    return this._rangeStr;
  }

  // start_direction - computed: true, optional: true, required: false
  private _startDirection?: string; 
  public get startDirection() {
    return this.getStringAttribute('start_direction');
  }
  public set startDirection(value: string) {
    this._startDirection = value;
  }
  public resetStartDirection() {
    this._startDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDirectionInput() {
    return this._startDirection;
  }

  // start_skip - computed: false, optional: true, required: false
  private _startSkip?: number; 
  public get startSkip() {
    return this.getNumberAttribute('start_skip');
  }
  public set startSkip(value: number) {
    this._startSkip = value;
  }
  public resetStartSkip() {
    this._startSkip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startSkipInput() {
    return this._startSkip;
  }

  // start_str - computed: true, optional: true, required: false
  private _startStr?: string; 
  public get startStr() {
    return this.getStringAttribute('start_str');
  }
  public set startStr(value: string) {
    this._startStr = value;
  }
  public resetStartStr() {
    this._startStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStrInput() {
    return this._startStr;
  }

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface WanoptContentdeliverynetworkruleRulesMatchEntriesPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#string WanoptContentdeliverynetworkrule#string}
  */
  readonly string?: string;
}

export function wanoptContentdeliverynetworkruleRulesMatchEntriesPatternToTerraform(struct?: WanoptContentdeliverynetworkruleRulesMatchEntriesPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string: cdktf.stringToTerraform(struct!.string),
  }
}


export function wanoptContentdeliverynetworkruleRulesMatchEntriesPatternToHclTerraform(struct?: WanoptContentdeliverynetworkruleRulesMatchEntriesPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WanoptContentdeliverynetworkruleRulesMatchEntriesPatternOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WanoptContentdeliverynetworkruleRulesMatchEntriesPattern | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WanoptContentdeliverynetworkruleRulesMatchEntriesPattern | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._string = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._string = value.string;
    }
  }

  // string - computed: false, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }
}

export class WanoptContentdeliverynetworkruleRulesMatchEntriesPatternList extends cdktf.ComplexList {
  public internalValue? : WanoptContentdeliverynetworkruleRulesMatchEntriesPattern[] | cdktf.IResolvable

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
  public get(index: number): WanoptContentdeliverynetworkruleRulesMatchEntriesPatternOutputReference {
    return new WanoptContentdeliverynetworkruleRulesMatchEntriesPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WanoptContentdeliverynetworkruleRulesMatchEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#id WanoptContentdeliverynetworkrule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#target WanoptContentdeliverynetworkrule#target}
  */
  readonly target?: string;
  /**
  * pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#pattern WanoptContentdeliverynetworkrule#pattern}
  */
  readonly pattern?: WanoptContentdeliverynetworkruleRulesMatchEntriesPattern[] | cdktf.IResolvable;
}

export function wanoptContentdeliverynetworkruleRulesMatchEntriesToTerraform(struct?: WanoptContentdeliverynetworkruleRulesMatchEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    target: cdktf.stringToTerraform(struct!.target),
    pattern: cdktf.listMapper(wanoptContentdeliverynetworkruleRulesMatchEntriesPatternToTerraform, true)(struct!.pattern),
  }
}


export function wanoptContentdeliverynetworkruleRulesMatchEntriesToHclTerraform(struct?: WanoptContentdeliverynetworkruleRulesMatchEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.listMapperHcl(wanoptContentdeliverynetworkruleRulesMatchEntriesPatternToHclTerraform, true)(struct!.pattern),
      isBlock: true,
      type: "set",
      storageClassType: "WanoptContentdeliverynetworkruleRulesMatchEntriesPatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WanoptContentdeliverynetworkruleRulesMatchEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WanoptContentdeliverynetworkruleRulesMatchEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._pattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WanoptContentdeliverynetworkruleRulesMatchEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._target = undefined;
      this._pattern.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._target = value.target;
      this._pattern.internalValue = value.pattern;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern = new WanoptContentdeliverynetworkruleRulesMatchEntriesPatternList(this, "pattern", true);
  public get pattern() {
    return this._pattern;
  }
  public putPattern(value: WanoptContentdeliverynetworkruleRulesMatchEntriesPattern[] | cdktf.IResolvable) {
    this._pattern.internalValue = value;
  }
  public resetPattern() {
    this._pattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern.internalValue;
  }
}

export class WanoptContentdeliverynetworkruleRulesMatchEntriesList extends cdktf.ComplexList {
  public internalValue? : WanoptContentdeliverynetworkruleRulesMatchEntries[] | cdktf.IResolvable

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
  public get(index: number): WanoptContentdeliverynetworkruleRulesMatchEntriesOutputReference {
    return new WanoptContentdeliverynetworkruleRulesMatchEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WanoptContentdeliverynetworkruleRulesSkipEntriesPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#string WanoptContentdeliverynetworkrule#string}
  */
  readonly string?: string;
}

export function wanoptContentdeliverynetworkruleRulesSkipEntriesPatternToTerraform(struct?: WanoptContentdeliverynetworkruleRulesSkipEntriesPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string: cdktf.stringToTerraform(struct!.string),
  }
}


export function wanoptContentdeliverynetworkruleRulesSkipEntriesPatternToHclTerraform(struct?: WanoptContentdeliverynetworkruleRulesSkipEntriesPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WanoptContentdeliverynetworkruleRulesSkipEntriesPatternOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WanoptContentdeliverynetworkruleRulesSkipEntriesPattern | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WanoptContentdeliverynetworkruleRulesSkipEntriesPattern | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._string = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._string = value.string;
    }
  }

  // string - computed: false, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }
}

export class WanoptContentdeliverynetworkruleRulesSkipEntriesPatternList extends cdktf.ComplexList {
  public internalValue? : WanoptContentdeliverynetworkruleRulesSkipEntriesPattern[] | cdktf.IResolvable

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
  public get(index: number): WanoptContentdeliverynetworkruleRulesSkipEntriesPatternOutputReference {
    return new WanoptContentdeliverynetworkruleRulesSkipEntriesPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WanoptContentdeliverynetworkruleRulesSkipEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#id WanoptContentdeliverynetworkrule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#target WanoptContentdeliverynetworkrule#target}
  */
  readonly target?: string;
  /**
  * pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#pattern WanoptContentdeliverynetworkrule#pattern}
  */
  readonly pattern?: WanoptContentdeliverynetworkruleRulesSkipEntriesPattern[] | cdktf.IResolvable;
}

export function wanoptContentdeliverynetworkruleRulesSkipEntriesToTerraform(struct?: WanoptContentdeliverynetworkruleRulesSkipEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    target: cdktf.stringToTerraform(struct!.target),
    pattern: cdktf.listMapper(wanoptContentdeliverynetworkruleRulesSkipEntriesPatternToTerraform, true)(struct!.pattern),
  }
}


export function wanoptContentdeliverynetworkruleRulesSkipEntriesToHclTerraform(struct?: WanoptContentdeliverynetworkruleRulesSkipEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.listMapperHcl(wanoptContentdeliverynetworkruleRulesSkipEntriesPatternToHclTerraform, true)(struct!.pattern),
      isBlock: true,
      type: "set",
      storageClassType: "WanoptContentdeliverynetworkruleRulesSkipEntriesPatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WanoptContentdeliverynetworkruleRulesSkipEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WanoptContentdeliverynetworkruleRulesSkipEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._pattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WanoptContentdeliverynetworkruleRulesSkipEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._target = undefined;
      this._pattern.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._target = value.target;
      this._pattern.internalValue = value.pattern;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern = new WanoptContentdeliverynetworkruleRulesSkipEntriesPatternList(this, "pattern", true);
  public get pattern() {
    return this._pattern;
  }
  public putPattern(value: WanoptContentdeliverynetworkruleRulesSkipEntriesPattern[] | cdktf.IResolvable) {
    this._pattern.internalValue = value;
  }
  public resetPattern() {
    this._pattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern.internalValue;
  }
}

export class WanoptContentdeliverynetworkruleRulesSkipEntriesList extends cdktf.ComplexList {
  public internalValue? : WanoptContentdeliverynetworkruleRulesSkipEntries[] | cdktf.IResolvable

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
  public get(index: number): WanoptContentdeliverynetworkruleRulesSkipEntriesOutputReference {
    return new WanoptContentdeliverynetworkruleRulesSkipEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WanoptContentdeliverynetworkruleRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#match_mode WanoptContentdeliverynetworkrule#match_mode}
  */
  readonly matchMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#name WanoptContentdeliverynetworkrule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#skip_rule_mode WanoptContentdeliverynetworkrule#skip_rule_mode}
  */
  readonly skipRuleMode?: string;
  /**
  * content_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#content_id WanoptContentdeliverynetworkrule#content_id}
  */
  readonly contentId?: WanoptContentdeliverynetworkruleRulesContentId;
  /**
  * match_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#match_entries WanoptContentdeliverynetworkrule#match_entries}
  */
  readonly matchEntries?: WanoptContentdeliverynetworkruleRulesMatchEntries[] | cdktf.IResolvable;
  /**
  * skip_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#skip_entries WanoptContentdeliverynetworkrule#skip_entries}
  */
  readonly skipEntries?: WanoptContentdeliverynetworkruleRulesSkipEntries[] | cdktf.IResolvable;
}

export function wanoptContentdeliverynetworkruleRulesToTerraform(struct?: WanoptContentdeliverynetworkruleRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_mode: cdktf.stringToTerraform(struct!.matchMode),
    name: cdktf.stringToTerraform(struct!.name),
    skip_rule_mode: cdktf.stringToTerraform(struct!.skipRuleMode),
    content_id: wanoptContentdeliverynetworkruleRulesContentIdToTerraform(struct!.contentId),
    match_entries: cdktf.listMapper(wanoptContentdeliverynetworkruleRulesMatchEntriesToTerraform, true)(struct!.matchEntries),
    skip_entries: cdktf.listMapper(wanoptContentdeliverynetworkruleRulesSkipEntriesToTerraform, true)(struct!.skipEntries),
  }
}


export function wanoptContentdeliverynetworkruleRulesToHclTerraform(struct?: WanoptContentdeliverynetworkruleRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_mode: {
      value: cdktf.stringToHclTerraform(struct!.matchMode),
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
    skip_rule_mode: {
      value: cdktf.stringToHclTerraform(struct!.skipRuleMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_id: {
      value: wanoptContentdeliverynetworkruleRulesContentIdToHclTerraform(struct!.contentId),
      isBlock: true,
      type: "list",
      storageClassType: "WanoptContentdeliverynetworkruleRulesContentIdList",
    },
    match_entries: {
      value: cdktf.listMapperHcl(wanoptContentdeliverynetworkruleRulesMatchEntriesToHclTerraform, true)(struct!.matchEntries),
      isBlock: true,
      type: "list",
      storageClassType: "WanoptContentdeliverynetworkruleRulesMatchEntriesList",
    },
    skip_entries: {
      value: cdktf.listMapperHcl(wanoptContentdeliverynetworkruleRulesSkipEntriesToHclTerraform, true)(struct!.skipEntries),
      isBlock: true,
      type: "list",
      storageClassType: "WanoptContentdeliverynetworkruleRulesSkipEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WanoptContentdeliverynetworkruleRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WanoptContentdeliverynetworkruleRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchMode = this._matchMode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._skipRuleMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipRuleMode = this._skipRuleMode;
    }
    if (this._contentId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentId = this._contentId?.internalValue;
    }
    if (this._matchEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchEntries = this._matchEntries?.internalValue;
    }
    if (this._skipEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipEntries = this._skipEntries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WanoptContentdeliverynetworkruleRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchMode = undefined;
      this._name = undefined;
      this._skipRuleMode = undefined;
      this._contentId.internalValue = undefined;
      this._matchEntries.internalValue = undefined;
      this._skipEntries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchMode = value.matchMode;
      this._name = value.name;
      this._skipRuleMode = value.skipRuleMode;
      this._contentId.internalValue = value.contentId;
      this._matchEntries.internalValue = value.matchEntries;
      this._skipEntries.internalValue = value.skipEntries;
    }
  }

  // match_mode - computed: true, optional: true, required: false
  private _matchMode?: string; 
  public get matchMode() {
    return this.getStringAttribute('match_mode');
  }
  public set matchMode(value: string) {
    this._matchMode = value;
  }
  public resetMatchMode() {
    this._matchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchModeInput() {
    return this._matchMode;
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

  // skip_rule_mode - computed: true, optional: true, required: false
  private _skipRuleMode?: string; 
  public get skipRuleMode() {
    return this.getStringAttribute('skip_rule_mode');
  }
  public set skipRuleMode(value: string) {
    this._skipRuleMode = value;
  }
  public resetSkipRuleMode() {
    this._skipRuleMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRuleModeInput() {
    return this._skipRuleMode;
  }

  // content_id - computed: false, optional: true, required: false
  private _contentId = new WanoptContentdeliverynetworkruleRulesContentIdOutputReference(this, "content_id");
  public get contentId() {
    return this._contentId;
  }
  public putContentId(value: WanoptContentdeliverynetworkruleRulesContentId) {
    this._contentId.internalValue = value;
  }
  public resetContentId() {
    this._contentId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentIdInput() {
    return this._contentId.internalValue;
  }

  // match_entries - computed: false, optional: true, required: false
  private _matchEntries = new WanoptContentdeliverynetworkruleRulesMatchEntriesList(this, "match_entries", false);
  public get matchEntries() {
    return this._matchEntries;
  }
  public putMatchEntries(value: WanoptContentdeliverynetworkruleRulesMatchEntries[] | cdktf.IResolvable) {
    this._matchEntries.internalValue = value;
  }
  public resetMatchEntries() {
    this._matchEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchEntriesInput() {
    return this._matchEntries.internalValue;
  }

  // skip_entries - computed: false, optional: true, required: false
  private _skipEntries = new WanoptContentdeliverynetworkruleRulesSkipEntriesList(this, "skip_entries", false);
  public get skipEntries() {
    return this._skipEntries;
  }
  public putSkipEntries(value: WanoptContentdeliverynetworkruleRulesSkipEntries[] | cdktf.IResolvable) {
    this._skipEntries.internalValue = value;
  }
  public resetSkipEntries() {
    this._skipEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipEntriesInput() {
    return this._skipEntries.internalValue;
  }
}

export class WanoptContentdeliverynetworkruleRulesList extends cdktf.ComplexList {
  public internalValue? : WanoptContentdeliverynetworkruleRules[] | cdktf.IResolvable

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
  public get(index: number): WanoptContentdeliverynetworkruleRulesOutputReference {
    return new WanoptContentdeliverynetworkruleRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule fortios_wanopt_contentdeliverynetworkrule}
*/
export class WanoptContentdeliverynetworkrule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_wanopt_contentdeliverynetworkrule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WanoptContentdeliverynetworkrule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WanoptContentdeliverynetworkrule to import
  * @param importFromId The id of the existing WanoptContentdeliverynetworkrule that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WanoptContentdeliverynetworkrule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_wanopt_contentdeliverynetworkrule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_contentdeliverynetworkrule fortios_wanopt_contentdeliverynetworkrule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WanoptContentdeliverynetworkruleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WanoptContentdeliverynetworkruleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_wanopt_contentdeliverynetworkrule',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._comment = config.comment;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._name = config.name;
    this._requestCacheControl = config.requestCacheControl;
    this._responseCacheControl = config.responseCacheControl;
    this._responseExpires = config.responseExpires;
    this._status = config.status;
    this._textResponseVcache = config.textResponseVcache;
    this._updateserver = config.updateserver;
    this._vdomparam = config.vdomparam;
    this._hostDomainNameSuffix.internalValue = config.hostDomainNameSuffix;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // name - computed: true, optional: true, required: false
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

  // request_cache_control - computed: true, optional: true, required: false
  private _requestCacheControl?: string; 
  public get requestCacheControl() {
    return this.getStringAttribute('request_cache_control');
  }
  public set requestCacheControl(value: string) {
    this._requestCacheControl = value;
  }
  public resetRequestCacheControl() {
    this._requestCacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCacheControlInput() {
    return this._requestCacheControl;
  }

  // response_cache_control - computed: true, optional: true, required: false
  private _responseCacheControl?: string; 
  public get responseCacheControl() {
    return this.getStringAttribute('response_cache_control');
  }
  public set responseCacheControl(value: string) {
    this._responseCacheControl = value;
  }
  public resetResponseCacheControl() {
    this._responseCacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCacheControlInput() {
    return this._responseCacheControl;
  }

  // response_expires - computed: true, optional: true, required: false
  private _responseExpires?: string; 
  public get responseExpires() {
    return this.getStringAttribute('response_expires');
  }
  public set responseExpires(value: string) {
    this._responseExpires = value;
  }
  public resetResponseExpires() {
    this._responseExpires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseExpiresInput() {
    return this._responseExpires;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // text_response_vcache - computed: false, optional: true, required: false
  private _textResponseVcache?: string; 
  public get textResponseVcache() {
    return this.getStringAttribute('text_response_vcache');
  }
  public set textResponseVcache(value: string) {
    this._textResponseVcache = value;
  }
  public resetTextResponseVcache() {
    this._textResponseVcache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textResponseVcacheInput() {
    return this._textResponseVcache;
  }

  // updateserver - computed: true, optional: true, required: false
  private _updateserver?: string; 
  public get updateserver() {
    return this.getStringAttribute('updateserver');
  }
  public set updateserver(value: string) {
    this._updateserver = value;
  }
  public resetUpdateserver() {
    this._updateserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateserverInput() {
    return this._updateserver;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // host_domain_name_suffix - computed: false, optional: true, required: false
  private _hostDomainNameSuffix = new WanoptContentdeliverynetworkruleHostDomainNameSuffixList(this, "host_domain_name_suffix", true);
  public get hostDomainNameSuffix() {
    return this._hostDomainNameSuffix;
  }
  public putHostDomainNameSuffix(value: WanoptContentdeliverynetworkruleHostDomainNameSuffix[] | cdktf.IResolvable) {
    this._hostDomainNameSuffix.internalValue = value;
  }
  public resetHostDomainNameSuffix() {
    this._hostDomainNameSuffix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostDomainNameSuffixInput() {
    return this._hostDomainNameSuffix.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new WanoptContentdeliverynetworkruleRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: WanoptContentdeliverynetworkruleRules[] | cdktf.IResolvable) {
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
      category: cdktf.stringToTerraform(this._category),
      comment: cdktf.stringToTerraform(this._comment),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      request_cache_control: cdktf.stringToTerraform(this._requestCacheControl),
      response_cache_control: cdktf.stringToTerraform(this._responseCacheControl),
      response_expires: cdktf.stringToTerraform(this._responseExpires),
      status: cdktf.stringToTerraform(this._status),
      text_response_vcache: cdktf.stringToTerraform(this._textResponseVcache),
      updateserver: cdktf.stringToTerraform(this._updateserver),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      host_domain_name_suffix: cdktf.listMapper(wanoptContentdeliverynetworkruleHostDomainNameSuffixToTerraform, true)(this._hostDomainNameSuffix.internalValue),
      rules: cdktf.listMapper(wanoptContentdeliverynetworkruleRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_cache_control: {
        value: cdktf.stringToHclTerraform(this._requestCacheControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_cache_control: {
        value: cdktf.stringToHclTerraform(this._responseCacheControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_expires: {
        value: cdktf.stringToHclTerraform(this._responseExpires),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text_response_vcache: {
        value: cdktf.stringToHclTerraform(this._textResponseVcache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updateserver: {
        value: cdktf.stringToHclTerraform(this._updateserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_domain_name_suffix: {
        value: cdktf.listMapperHcl(wanoptContentdeliverynetworkruleHostDomainNameSuffixToHclTerraform, true)(this._hostDomainNameSuffix.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WanoptContentdeliverynetworkruleHostDomainNameSuffixList",
      },
      rules: {
        value: cdktf.listMapperHcl(wanoptContentdeliverynetworkruleRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WanoptContentdeliverynetworkruleRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
