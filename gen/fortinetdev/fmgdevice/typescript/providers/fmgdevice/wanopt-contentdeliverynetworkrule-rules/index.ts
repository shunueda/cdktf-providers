// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WanoptContentdeliverynetworkruleRulesAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules#content_delivery_network_rule WanoptContentdeliverynetworkruleRulesA#content_delivery_network_rule}
  */
  readonly contentDeliveryNetworkRule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules#device_name WanoptContentdeliverynetworkruleRulesA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules#dynamic_sort_subtable WanoptContentdeliverynetworkruleRulesA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules#id WanoptContentdeliverynetworkruleRulesA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules#match_mode WanoptContentdeliverynetworkruleRulesA#match_mode}
  */
  readonly matchMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules#name WanoptContentdeliverynetworkruleRulesA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules#skip_rule_mode WanoptContentdeliverynetworkruleRulesA#skip_rule_mode}
  */
  readonly skipRuleMode?: string;
  /**
  * content_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules#content_id WanoptContentdeliverynetworkruleRulesA#content_id}
  */
  readonly contentId?: WanoptContentdeliverynetworkruleRulesContentIdA;
  /**
  * match_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules#match_entries WanoptContentdeliverynetworkruleRulesA#match_entries}
  */
  readonly matchEntries?: WanoptContentdeliverynetworkruleRulesMatchEntriesA[] | cdktf.IResolvable;
  /**
  * skip_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules#skip_entries WanoptContentdeliverynetworkruleRulesA#skip_entries}
  */
  readonly skipEntries?: WanoptContentdeliverynetworkruleRulesSkipEntriesA[] | cdktf.IResolvable;
}
export interface WanoptContentdeliverynetworkruleRulesContentIdA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules#end_direction WanoptContentdeliverynetworkruleRulesA#end_direction}
  */
  readonly endDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules#end_skip WanoptContentdeliverynetworkruleRulesA#end_skip}
  */
  readonly endSkip?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules#end_str WanoptContentdeliverynetworkruleRulesA#end_str}
  */
  readonly endStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules#range_str WanoptContentdeliverynetworkruleRulesA#range_str}
  */
  readonly rangeStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules#start_direction WanoptContentdeliverynetworkruleRulesA#start_direction}
  */
  readonly startDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules#start_skip WanoptContentdeliverynetworkruleRulesA#start_skip}
  */
  readonly startSkip?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules#start_str WanoptContentdeliverynetworkruleRulesA#start_str}
  */
  readonly startStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules#target WanoptContentdeliverynetworkruleRulesA#target}
  */
  readonly target?: string;
}

export function wanoptContentdeliverynetworkruleRulesContentIdAToTerraform(struct?: WanoptContentdeliverynetworkruleRulesContentIdAOutputReference | WanoptContentdeliverynetworkruleRulesContentIdA): any {
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


export function wanoptContentdeliverynetworkruleRulesContentIdAToHclTerraform(struct?: WanoptContentdeliverynetworkruleRulesContentIdAOutputReference | WanoptContentdeliverynetworkruleRulesContentIdA): any {
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

export class WanoptContentdeliverynetworkruleRulesContentIdAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WanoptContentdeliverynetworkruleRulesContentIdA | undefined {
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

  public set internalValue(value: WanoptContentdeliverynetworkruleRulesContentIdA | undefined) {
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

  // start_str - computed: false, optional: true, required: false
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
export interface WanoptContentdeliverynetworkruleRulesMatchEntriesA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules#id WanoptContentdeliverynetworkruleRulesA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules#pattern WanoptContentdeliverynetworkruleRulesA#pattern}
  */
  readonly pattern?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules#target WanoptContentdeliverynetworkruleRulesA#target}
  */
  readonly target?: string;
}

export function wanoptContentdeliverynetworkruleRulesMatchEntriesAToTerraform(struct?: WanoptContentdeliverynetworkruleRulesMatchEntriesA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pattern),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function wanoptContentdeliverynetworkruleRulesMatchEntriesAToHclTerraform(struct?: WanoptContentdeliverynetworkruleRulesMatchEntriesA | cdktf.IResolvable): any {
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
    pattern: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pattern),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class WanoptContentdeliverynetworkruleRulesMatchEntriesAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WanoptContentdeliverynetworkruleRulesMatchEntriesA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WanoptContentdeliverynetworkruleRulesMatchEntriesA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._pattern = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._pattern = value.pattern;
      this._target = value.target;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // pattern - computed: true, optional: true, required: false
  private _pattern?: string[]; 
  public get pattern() {
    return cdktf.Fn.tolist(this.getListAttribute('pattern'));
  }
  public set pattern(value: string[]) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
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

export class WanoptContentdeliverynetworkruleRulesMatchEntriesAList extends cdktf.ComplexList {
  public internalValue? : WanoptContentdeliverynetworkruleRulesMatchEntriesA[] | cdktf.IResolvable

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
  public get(index: number): WanoptContentdeliverynetworkruleRulesMatchEntriesAOutputReference {
    return new WanoptContentdeliverynetworkruleRulesMatchEntriesAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WanoptContentdeliverynetworkruleRulesSkipEntriesA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules#id WanoptContentdeliverynetworkruleRulesA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules#pattern WanoptContentdeliverynetworkruleRulesA#pattern}
  */
  readonly pattern?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules#target WanoptContentdeliverynetworkruleRulesA#target}
  */
  readonly target?: string;
}

export function wanoptContentdeliverynetworkruleRulesSkipEntriesAToTerraform(struct?: WanoptContentdeliverynetworkruleRulesSkipEntriesA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pattern),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function wanoptContentdeliverynetworkruleRulesSkipEntriesAToHclTerraform(struct?: WanoptContentdeliverynetworkruleRulesSkipEntriesA | cdktf.IResolvable): any {
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
    pattern: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pattern),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class WanoptContentdeliverynetworkruleRulesSkipEntriesAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WanoptContentdeliverynetworkruleRulesSkipEntriesA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WanoptContentdeliverynetworkruleRulesSkipEntriesA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._pattern = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._pattern = value.pattern;
      this._target = value.target;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // pattern - computed: true, optional: true, required: false
  private _pattern?: string[]; 
  public get pattern() {
    return cdktf.Fn.tolist(this.getListAttribute('pattern'));
  }
  public set pattern(value: string[]) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
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

export class WanoptContentdeliverynetworkruleRulesSkipEntriesAList extends cdktf.ComplexList {
  public internalValue? : WanoptContentdeliverynetworkruleRulesSkipEntriesA[] | cdktf.IResolvable

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
  public get(index: number): WanoptContentdeliverynetworkruleRulesSkipEntriesAOutputReference {
    return new WanoptContentdeliverynetworkruleRulesSkipEntriesAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules fmgdevice_wanopt_contentdeliverynetworkrule_rules}
*/
export class WanoptContentdeliverynetworkruleRulesA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wanopt_contentdeliverynetworkrule_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WanoptContentdeliverynetworkruleRulesA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WanoptContentdeliverynetworkruleRulesA to import
  * @param importFromId The id of the existing WanoptContentdeliverynetworkruleRulesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WanoptContentdeliverynetworkruleRulesA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wanopt_contentdeliverynetworkrule_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules fmgdevice_wanopt_contentdeliverynetworkrule_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WanoptContentdeliverynetworkruleRulesAConfig
  */
  public constructor(scope: Construct, id: string, config: WanoptContentdeliverynetworkruleRulesAConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wanopt_contentdeliverynetworkrule_rules',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contentDeliveryNetworkRule = config.contentDeliveryNetworkRule;
    this._deviceName = config.deviceName;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._matchMode = config.matchMode;
    this._name = config.name;
    this._skipRuleMode = config.skipRuleMode;
    this._contentId.internalValue = config.contentId;
    this._matchEntries.internalValue = config.matchEntries;
    this._skipEntries.internalValue = config.skipEntries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_delivery_network_rule - computed: false, optional: false, required: true
  private _contentDeliveryNetworkRule?: string; 
  public get contentDeliveryNetworkRule() {
    return this.getStringAttribute('content_delivery_network_rule');
  }
  public set contentDeliveryNetworkRule(value: string) {
    this._contentDeliveryNetworkRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDeliveryNetworkRuleInput() {
    return this._contentDeliveryNetworkRule;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
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
  private _contentId = new WanoptContentdeliverynetworkruleRulesContentIdAOutputReference(this, "content_id");
  public get contentId() {
    return this._contentId;
  }
  public putContentId(value: WanoptContentdeliverynetworkruleRulesContentIdA) {
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
  private _matchEntries = new WanoptContentdeliverynetworkruleRulesMatchEntriesAList(this, "match_entries", false);
  public get matchEntries() {
    return this._matchEntries;
  }
  public putMatchEntries(value: WanoptContentdeliverynetworkruleRulesMatchEntriesA[] | cdktf.IResolvable) {
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
  private _skipEntries = new WanoptContentdeliverynetworkruleRulesSkipEntriesAList(this, "skip_entries", false);
  public get skipEntries() {
    return this._skipEntries;
  }
  public putSkipEntries(value: WanoptContentdeliverynetworkruleRulesSkipEntriesA[] | cdktf.IResolvable) {
    this._skipEntries.internalValue = value;
  }
  public resetSkipEntries() {
    this._skipEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipEntriesInput() {
    return this._skipEntries.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content_delivery_network_rule: cdktf.stringToTerraform(this._contentDeliveryNetworkRule),
      device_name: cdktf.stringToTerraform(this._deviceName),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      match_mode: cdktf.stringToTerraform(this._matchMode),
      name: cdktf.stringToTerraform(this._name),
      skip_rule_mode: cdktf.stringToTerraform(this._skipRuleMode),
      content_id: wanoptContentdeliverynetworkruleRulesContentIdAToTerraform(this._contentId.internalValue),
      match_entries: cdktf.listMapper(wanoptContentdeliverynetworkruleRulesMatchEntriesAToTerraform, true)(this._matchEntries.internalValue),
      skip_entries: cdktf.listMapper(wanoptContentdeliverynetworkruleRulesSkipEntriesAToTerraform, true)(this._skipEntries.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content_delivery_network_rule: {
        value: cdktf.stringToHclTerraform(this._contentDeliveryNetworkRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_mode: {
        value: cdktf.stringToHclTerraform(this._matchMode),
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
      skip_rule_mode: {
        value: cdktf.stringToHclTerraform(this._skipRuleMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_id: {
        value: wanoptContentdeliverynetworkruleRulesContentIdAToHclTerraform(this._contentId.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WanoptContentdeliverynetworkruleRulesContentIdAList",
      },
      match_entries: {
        value: cdktf.listMapperHcl(wanoptContentdeliverynetworkruleRulesMatchEntriesAToHclTerraform, true)(this._matchEntries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WanoptContentdeliverynetworkruleRulesMatchEntriesAList",
      },
      skip_entries: {
        value: cdktf.listMapperHcl(wanoptContentdeliverynetworkruleRulesSkipEntriesAToHclTerraform, true)(this._skipEntries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WanoptContentdeliverynetworkruleRulesSkipEntriesAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
