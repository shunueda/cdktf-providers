// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderRuleSetOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#id DataThunderRuleSetOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rule set name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#name DataThunderRuleSetOper#name}
  */
  readonly name: string;
  /**
  * application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#application DataThunderRuleSetOper#application}
  */
  readonly application?: DataThunderRuleSetOperApplication;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#oper DataThunderRuleSetOper#oper}
  */
  readonly oper?: DataThunderRuleSetOperOper;
  /**
  * rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#rule_list DataThunderRuleSetOper#rule_list}
  */
  readonly ruleList?: DataThunderRuleSetOperRuleListStruct[] | cdktf.IResolvable;
  /**
  * rules_by_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#rules_by_zone DataThunderRuleSetOper#rules_by_zone}
  */
  readonly rulesByZone?: DataThunderRuleSetOperRulesByZone;
  /**
  * track_app_rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#track_app_rule_list DataThunderRuleSetOper#track_app_rule_list}
  */
  readonly trackAppRuleList?: DataThunderRuleSetOperTrackAppRuleListStruct;
}
export interface DataThunderRuleSetOperApplicationOperRuleListStatListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#bytes DataThunderRuleSetOper#bytes}
  */
  readonly bytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#category DataThunderRuleSetOper#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#conns DataThunderRuleSetOper#conns}
  */
  readonly conns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#name DataThunderRuleSetOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#type DataThunderRuleSetOper#type}
  */
  readonly type?: string;
}

export function dataThunderRuleSetOperApplicationOperRuleListStatListStructToTerraform(struct?: DataThunderRuleSetOperApplicationOperRuleListStatListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bytes: cdktf.numberToTerraform(struct!.bytes),
    category: cdktf.stringToTerraform(struct!.category),
    conns: cdktf.numberToTerraform(struct!.conns),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataThunderRuleSetOperApplicationOperRuleListStatListStructToHclTerraform(struct?: DataThunderRuleSetOperApplicationOperRuleListStatListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bytes: {
      value: cdktf.numberToHclTerraform(struct!.bytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conns: {
      value: cdktf.numberToHclTerraform(struct!.conns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetOperApplicationOperRuleListStatListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderRuleSetOperApplicationOperRuleListStatListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytes = this._bytes;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._conns !== undefined) {
      hasAnyValues = true;
      internalValueResult.conns = this._conns;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetOperApplicationOperRuleListStatListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bytes = undefined;
      this._category = undefined;
      this._conns = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bytes = value.bytes;
      this._category = value.category;
      this._conns = value.conns;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // bytes - computed: false, optional: true, required: false
  private _bytes?: number; 
  public get bytes() {
    return this.getNumberAttribute('bytes');
  }
  public set bytes(value: number) {
    this._bytes = value;
  }
  public resetBytes() {
    this._bytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesInput() {
    return this._bytes;
  }

  // category - computed: false, optional: true, required: false
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

  // conns - computed: false, optional: true, required: false
  private _conns?: number; 
  public get conns() {
    return this.getNumberAttribute('conns');
  }
  public set conns(value: number) {
    this._conns = value;
  }
  public resetConns() {
    this._conns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connsInput() {
    return this._conns;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataThunderRuleSetOperApplicationOperRuleListStatListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderRuleSetOperApplicationOperRuleListStatListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderRuleSetOperApplicationOperRuleListStatListStructOutputReference {
    return new DataThunderRuleSetOperApplicationOperRuleListStatListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderRuleSetOperApplicationOperRuleListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#name DataThunderRuleSetOper#name}
  */
  readonly name?: string;
  /**
  * stat_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#stat_list DataThunderRuleSetOper#stat_list}
  */
  readonly statList?: DataThunderRuleSetOperApplicationOperRuleListStatListStruct[] | cdktf.IResolvable;
}

export function dataThunderRuleSetOperApplicationOperRuleListStructToTerraform(struct?: DataThunderRuleSetOperApplicationOperRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    stat_list: cdktf.listMapper(dataThunderRuleSetOperApplicationOperRuleListStatListStructToTerraform, true)(struct!.statList),
  }
}


export function dataThunderRuleSetOperApplicationOperRuleListStructToHclTerraform(struct?: DataThunderRuleSetOperApplicationOperRuleListStruct | cdktf.IResolvable): any {
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
    stat_list: {
      value: cdktf.listMapperHcl(dataThunderRuleSetOperApplicationOperRuleListStatListStructToHclTerraform, true)(struct!.statList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRuleSetOperApplicationOperRuleListStatListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetOperApplicationOperRuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderRuleSetOperApplicationOperRuleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._statList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statList = this._statList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetOperApplicationOperRuleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._statList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._statList.internalValue = value.statList;
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

  // stat_list - computed: false, optional: true, required: false
  private _statList = new DataThunderRuleSetOperApplicationOperRuleListStatListStructList(this, "stat_list", false);
  public get statList() {
    return this._statList;
  }
  public putStatList(value: DataThunderRuleSetOperApplicationOperRuleListStatListStruct[] | cdktf.IResolvable) {
    this._statList.internalValue = value;
  }
  public resetStatList() {
    this._statList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statListInput() {
    return this._statList.internalValue;
  }
}

export class DataThunderRuleSetOperApplicationOperRuleListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderRuleSetOperApplicationOperRuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderRuleSetOperApplicationOperRuleListStructOutputReference {
    return new DataThunderRuleSetOperApplicationOperRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderRuleSetOperApplicationOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#app_stat DataThunderRuleSetOper#app_stat}
  */
  readonly appStat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#category_stat DataThunderRuleSetOper#category_stat}
  */
  readonly categoryStat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#protocol DataThunderRuleSetOper#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#rule DataThunderRuleSetOper#rule}
  */
  readonly rule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#rule_set_only DataThunderRuleSetOper#rule_set_only}
  */
  readonly ruleSetOnly?: number;
  /**
  * rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#rule_list DataThunderRuleSetOper#rule_list}
  */
  readonly ruleList?: DataThunderRuleSetOperApplicationOperRuleListStruct[] | cdktf.IResolvable;
}

export function dataThunderRuleSetOperApplicationOperToTerraform(struct?: DataThunderRuleSetOperApplicationOperOutputReference | DataThunderRuleSetOperApplicationOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_stat: cdktf.stringToTerraform(struct!.appStat),
    category_stat: cdktf.stringToTerraform(struct!.categoryStat),
    protocol: cdktf.numberToTerraform(struct!.protocol),
    rule: cdktf.stringToTerraform(struct!.rule),
    rule_set_only: cdktf.numberToTerraform(struct!.ruleSetOnly),
    rule_list: cdktf.listMapper(dataThunderRuleSetOperApplicationOperRuleListStructToTerraform, true)(struct!.ruleList),
  }
}


export function dataThunderRuleSetOperApplicationOperToHclTerraform(struct?: DataThunderRuleSetOperApplicationOperOutputReference | DataThunderRuleSetOperApplicationOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_stat: {
      value: cdktf.stringToHclTerraform(struct!.appStat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category_stat: {
      value: cdktf.stringToHclTerraform(struct!.categoryStat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_set_only: {
      value: cdktf.numberToHclTerraform(struct!.ruleSetOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_list: {
      value: cdktf.listMapperHcl(dataThunderRuleSetOperApplicationOperRuleListStructToHclTerraform, true)(struct!.ruleList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRuleSetOperApplicationOperRuleListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetOperApplicationOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRuleSetOperApplicationOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appStat !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat = this._appStat;
    }
    if (this._categoryStat !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryStat = this._categoryStat;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._ruleSetOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleSetOnly = this._ruleSetOnly;
    }
    if (this._ruleList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleList = this._ruleList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetOperApplicationOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appStat = undefined;
      this._categoryStat = undefined;
      this._protocol = undefined;
      this._rule = undefined;
      this._ruleSetOnly = undefined;
      this._ruleList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appStat = value.appStat;
      this._categoryStat = value.categoryStat;
      this._protocol = value.protocol;
      this._rule = value.rule;
      this._ruleSetOnly = value.ruleSetOnly;
      this._ruleList.internalValue = value.ruleList;
    }
  }

  // app_stat - computed: false, optional: true, required: false
  private _appStat?: string; 
  public get appStat() {
    return this.getStringAttribute('app_stat');
  }
  public set appStat(value: string) {
    this._appStat = value;
  }
  public resetAppStat() {
    this._appStat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStatInput() {
    return this._appStat;
  }

  // category_stat - computed: false, optional: true, required: false
  private _categoryStat?: string; 
  public get categoryStat() {
    return this.getStringAttribute('category_stat');
  }
  public set categoryStat(value: string) {
    this._categoryStat = value;
  }
  public resetCategoryStat() {
    this._categoryStat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryStatInput() {
    return this._categoryStat;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // rule_set_only - computed: false, optional: true, required: false
  private _ruleSetOnly?: number; 
  public get ruleSetOnly() {
    return this.getNumberAttribute('rule_set_only');
  }
  public set ruleSetOnly(value: number) {
    this._ruleSetOnly = value;
  }
  public resetRuleSetOnly() {
    this._ruleSetOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetOnlyInput() {
    return this._ruleSetOnly;
  }

  // rule_list - computed: false, optional: true, required: false
  private _ruleList = new DataThunderRuleSetOperApplicationOperRuleListStructList(this, "rule_list", false);
  public get ruleList() {
    return this._ruleList;
  }
  public putRuleList(value: DataThunderRuleSetOperApplicationOperRuleListStruct[] | cdktf.IResolvable) {
    this._ruleList.internalValue = value;
  }
  public resetRuleList() {
    this._ruleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleListInput() {
    return this._ruleList.internalValue;
  }
}
export interface DataThunderRuleSetOperApplication {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#oper DataThunderRuleSetOper#oper}
  */
  readonly oper?: DataThunderRuleSetOperApplicationOper;
}

export function dataThunderRuleSetOperApplicationToTerraform(struct?: DataThunderRuleSetOperApplicationOutputReference | DataThunderRuleSetOperApplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderRuleSetOperApplicationOperToTerraform(struct!.oper),
  }
}


export function dataThunderRuleSetOperApplicationToHclTerraform(struct?: DataThunderRuleSetOperApplicationOutputReference | DataThunderRuleSetOperApplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderRuleSetOperApplicationOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRuleSetOperApplicationOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetOperApplicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRuleSetOperApplication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetOperApplication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderRuleSetOperApplicationOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderRuleSetOperApplicationOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderRuleSetOperOperRuleStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#rule_action DataThunderRuleSetOper#rule_action}
  */
  readonly ruleAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#rule_hitcount DataThunderRuleSetOper#rule_hitcount}
  */
  readonly ruleHitcount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#rule_name DataThunderRuleSetOper#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#rule_status DataThunderRuleSetOper#rule_status}
  */
  readonly ruleStatus?: string;
}

export function dataThunderRuleSetOperOperRuleStatsToTerraform(struct?: DataThunderRuleSetOperOperRuleStats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_action: cdktf.stringToTerraform(struct!.ruleAction),
    rule_hitcount: cdktf.numberToTerraform(struct!.ruleHitcount),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    rule_status: cdktf.stringToTerraform(struct!.ruleStatus),
  }
}


export function dataThunderRuleSetOperOperRuleStatsToHclTerraform(struct?: DataThunderRuleSetOperOperRuleStats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_action: {
      value: cdktf.stringToHclTerraform(struct!.ruleAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_hitcount: {
      value: cdktf.numberToHclTerraform(struct!.ruleHitcount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_status: {
      value: cdktf.stringToHclTerraform(struct!.ruleStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetOperOperRuleStatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderRuleSetOperOperRuleStats | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleAction = this._ruleAction;
    }
    if (this._ruleHitcount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleHitcount = this._ruleHitcount;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._ruleStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleStatus = this._ruleStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetOperOperRuleStats | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleAction = undefined;
      this._ruleHitcount = undefined;
      this._ruleName = undefined;
      this._ruleStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleAction = value.ruleAction;
      this._ruleHitcount = value.ruleHitcount;
      this._ruleName = value.ruleName;
      this._ruleStatus = value.ruleStatus;
    }
  }

  // rule_action - computed: false, optional: true, required: false
  private _ruleAction?: string; 
  public get ruleAction() {
    return this.getStringAttribute('rule_action');
  }
  public set ruleAction(value: string) {
    this._ruleAction = value;
  }
  public resetRuleAction() {
    this._ruleAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleActionInput() {
    return this._ruleAction;
  }

  // rule_hitcount - computed: false, optional: true, required: false
  private _ruleHitcount?: number; 
  public get ruleHitcount() {
    return this.getNumberAttribute('rule_hitcount');
  }
  public set ruleHitcount(value: number) {
    this._ruleHitcount = value;
  }
  public resetRuleHitcount() {
    this._ruleHitcount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleHitcountInput() {
    return this._ruleHitcount;
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // rule_status - computed: false, optional: true, required: false
  private _ruleStatus?: string; 
  public get ruleStatus() {
    return this.getStringAttribute('rule_status');
  }
  public set ruleStatus(value: string) {
    this._ruleStatus = value;
  }
  public resetRuleStatus() {
    this._ruleStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleStatusInput() {
    return this._ruleStatus;
  }
}

export class DataThunderRuleSetOperOperRuleStatsList extends cdktf.ComplexList {
  public internalValue? : DataThunderRuleSetOperOperRuleStats[] | cdktf.IResolvable

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
  public get(index: number): DataThunderRuleSetOperOperRuleStatsOutputReference {
    return new DataThunderRuleSetOperOperRuleStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderRuleSetOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#policy_deny DataThunderRuleSetOper#policy_deny}
  */
  readonly policyDeny?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#policy_permit DataThunderRuleSetOper#policy_permit}
  */
  readonly policyPermit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#policy_reset DataThunderRuleSetOper#policy_reset}
  */
  readonly policyReset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#policy_rule_count DataThunderRuleSetOper#policy_rule_count}
  */
  readonly policyRuleCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#policy_status DataThunderRuleSetOper#policy_status}
  */
  readonly policyStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#policy_unmatched_drop DataThunderRuleSetOper#policy_unmatched_drop}
  */
  readonly policyUnmatchedDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#show_total_stats DataThunderRuleSetOper#show_total_stats}
  */
  readonly showTotalStats?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#topn_rules DataThunderRuleSetOper#topn_rules}
  */
  readonly topnRules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#total_active_icmp DataThunderRuleSetOper#total_active_icmp}
  */
  readonly totalActiveIcmp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#total_active_others DataThunderRuleSetOper#total_active_others}
  */
  readonly totalActiveOthers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#total_active_tcp DataThunderRuleSetOper#total_active_tcp}
  */
  readonly totalActiveTcp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#total_active_udp DataThunderRuleSetOper#total_active_udp}
  */
  readonly totalActiveUdp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#total_bytes DataThunderRuleSetOper#total_bytes}
  */
  readonly totalBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#total_deny_bytes DataThunderRuleSetOper#total_deny_bytes}
  */
  readonly totalDenyBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#total_deny_packets DataThunderRuleSetOper#total_deny_packets}
  */
  readonly totalDenyPackets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#total_hit DataThunderRuleSetOper#total_hit}
  */
  readonly totalHit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#total_packets DataThunderRuleSetOper#total_packets}
  */
  readonly totalPackets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#total_permit_bytes DataThunderRuleSetOper#total_permit_bytes}
  */
  readonly totalPermitBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#total_permit_packets DataThunderRuleSetOper#total_permit_packets}
  */
  readonly totalPermitPackets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#total_reset_bytes DataThunderRuleSetOper#total_reset_bytes}
  */
  readonly totalResetBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#total_reset_packets DataThunderRuleSetOper#total_reset_packets}
  */
  readonly totalResetPackets?: number;
  /**
  * rule_stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#rule_stats DataThunderRuleSetOper#rule_stats}
  */
  readonly ruleStats?: DataThunderRuleSetOperOperRuleStats[] | cdktf.IResolvable;
}

export function dataThunderRuleSetOperOperToTerraform(struct?: DataThunderRuleSetOperOperOutputReference | DataThunderRuleSetOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_deny: cdktf.numberToTerraform(struct!.policyDeny),
    policy_permit: cdktf.numberToTerraform(struct!.policyPermit),
    policy_reset: cdktf.numberToTerraform(struct!.policyReset),
    policy_rule_count: cdktf.numberToTerraform(struct!.policyRuleCount),
    policy_status: cdktf.stringToTerraform(struct!.policyStatus),
    policy_unmatched_drop: cdktf.numberToTerraform(struct!.policyUnmatchedDrop),
    show_total_stats: cdktf.stringToTerraform(struct!.showTotalStats),
    topn_rules: cdktf.stringToTerraform(struct!.topnRules),
    total_active_icmp: cdktf.numberToTerraform(struct!.totalActiveIcmp),
    total_active_others: cdktf.numberToTerraform(struct!.totalActiveOthers),
    total_active_tcp: cdktf.numberToTerraform(struct!.totalActiveTcp),
    total_active_udp: cdktf.numberToTerraform(struct!.totalActiveUdp),
    total_bytes: cdktf.numberToTerraform(struct!.totalBytes),
    total_deny_bytes: cdktf.numberToTerraform(struct!.totalDenyBytes),
    total_deny_packets: cdktf.numberToTerraform(struct!.totalDenyPackets),
    total_hit: cdktf.numberToTerraform(struct!.totalHit),
    total_packets: cdktf.numberToTerraform(struct!.totalPackets),
    total_permit_bytes: cdktf.numberToTerraform(struct!.totalPermitBytes),
    total_permit_packets: cdktf.numberToTerraform(struct!.totalPermitPackets),
    total_reset_bytes: cdktf.numberToTerraform(struct!.totalResetBytes),
    total_reset_packets: cdktf.numberToTerraform(struct!.totalResetPackets),
    rule_stats: cdktf.listMapper(dataThunderRuleSetOperOperRuleStatsToTerraform, true)(struct!.ruleStats),
  }
}


export function dataThunderRuleSetOperOperToHclTerraform(struct?: DataThunderRuleSetOperOperOutputReference | DataThunderRuleSetOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_deny: {
      value: cdktf.numberToHclTerraform(struct!.policyDeny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_permit: {
      value: cdktf.numberToHclTerraform(struct!.policyPermit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_reset: {
      value: cdktf.numberToHclTerraform(struct!.policyReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_rule_count: {
      value: cdktf.numberToHclTerraform(struct!.policyRuleCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_status: {
      value: cdktf.stringToHclTerraform(struct!.policyStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_unmatched_drop: {
      value: cdktf.numberToHclTerraform(struct!.policyUnmatchedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    show_total_stats: {
      value: cdktf.stringToHclTerraform(struct!.showTotalStats),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topn_rules: {
      value: cdktf.stringToHclTerraform(struct!.topnRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_active_icmp: {
      value: cdktf.numberToHclTerraform(struct!.totalActiveIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_active_others: {
      value: cdktf.numberToHclTerraform(struct!.totalActiveOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_active_tcp: {
      value: cdktf.numberToHclTerraform(struct!.totalActiveTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_active_udp: {
      value: cdktf.numberToHclTerraform(struct!.totalActiveUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_bytes: {
      value: cdktf.numberToHclTerraform(struct!.totalBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_deny_bytes: {
      value: cdktf.numberToHclTerraform(struct!.totalDenyBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_deny_packets: {
      value: cdktf.numberToHclTerraform(struct!.totalDenyPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_hit: {
      value: cdktf.numberToHclTerraform(struct!.totalHit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_packets: {
      value: cdktf.numberToHclTerraform(struct!.totalPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_permit_bytes: {
      value: cdktf.numberToHclTerraform(struct!.totalPermitBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_permit_packets: {
      value: cdktf.numberToHclTerraform(struct!.totalPermitPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_reset_bytes: {
      value: cdktf.numberToHclTerraform(struct!.totalResetBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_reset_packets: {
      value: cdktf.numberToHclTerraform(struct!.totalResetPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_stats: {
      value: cdktf.listMapperHcl(dataThunderRuleSetOperOperRuleStatsToHclTerraform, true)(struct!.ruleStats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRuleSetOperOperRuleStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRuleSetOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyDeny !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyDeny = this._policyDeny;
    }
    if (this._policyPermit !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyPermit = this._policyPermit;
    }
    if (this._policyReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyReset = this._policyReset;
    }
    if (this._policyRuleCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyRuleCount = this._policyRuleCount;
    }
    if (this._policyStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyStatus = this._policyStatus;
    }
    if (this._policyUnmatchedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyUnmatchedDrop = this._policyUnmatchedDrop;
    }
    if (this._showTotalStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.showTotalStats = this._showTotalStats;
    }
    if (this._topnRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.topnRules = this._topnRules;
    }
    if (this._totalActiveIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalActiveIcmp = this._totalActiveIcmp;
    }
    if (this._totalActiveOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalActiveOthers = this._totalActiveOthers;
    }
    if (this._totalActiveTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalActiveTcp = this._totalActiveTcp;
    }
    if (this._totalActiveUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalActiveUdp = this._totalActiveUdp;
    }
    if (this._totalBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalBytes = this._totalBytes;
    }
    if (this._totalDenyBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalDenyBytes = this._totalDenyBytes;
    }
    if (this._totalDenyPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalDenyPackets = this._totalDenyPackets;
    }
    if (this._totalHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalHit = this._totalHit;
    }
    if (this._totalPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalPackets = this._totalPackets;
    }
    if (this._totalPermitBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalPermitBytes = this._totalPermitBytes;
    }
    if (this._totalPermitPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalPermitPackets = this._totalPermitPackets;
    }
    if (this._totalResetBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalResetBytes = this._totalResetBytes;
    }
    if (this._totalResetPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalResetPackets = this._totalResetPackets;
    }
    if (this._ruleStats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleStats = this._ruleStats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policyDeny = undefined;
      this._policyPermit = undefined;
      this._policyReset = undefined;
      this._policyRuleCount = undefined;
      this._policyStatus = undefined;
      this._policyUnmatchedDrop = undefined;
      this._showTotalStats = undefined;
      this._topnRules = undefined;
      this._totalActiveIcmp = undefined;
      this._totalActiveOthers = undefined;
      this._totalActiveTcp = undefined;
      this._totalActiveUdp = undefined;
      this._totalBytes = undefined;
      this._totalDenyBytes = undefined;
      this._totalDenyPackets = undefined;
      this._totalHit = undefined;
      this._totalPackets = undefined;
      this._totalPermitBytes = undefined;
      this._totalPermitPackets = undefined;
      this._totalResetBytes = undefined;
      this._totalResetPackets = undefined;
      this._ruleStats.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyDeny = value.policyDeny;
      this._policyPermit = value.policyPermit;
      this._policyReset = value.policyReset;
      this._policyRuleCount = value.policyRuleCount;
      this._policyStatus = value.policyStatus;
      this._policyUnmatchedDrop = value.policyUnmatchedDrop;
      this._showTotalStats = value.showTotalStats;
      this._topnRules = value.topnRules;
      this._totalActiveIcmp = value.totalActiveIcmp;
      this._totalActiveOthers = value.totalActiveOthers;
      this._totalActiveTcp = value.totalActiveTcp;
      this._totalActiveUdp = value.totalActiveUdp;
      this._totalBytes = value.totalBytes;
      this._totalDenyBytes = value.totalDenyBytes;
      this._totalDenyPackets = value.totalDenyPackets;
      this._totalHit = value.totalHit;
      this._totalPackets = value.totalPackets;
      this._totalPermitBytes = value.totalPermitBytes;
      this._totalPermitPackets = value.totalPermitPackets;
      this._totalResetBytes = value.totalResetBytes;
      this._totalResetPackets = value.totalResetPackets;
      this._ruleStats.internalValue = value.ruleStats;
    }
  }

  // policy_deny - computed: false, optional: true, required: false
  private _policyDeny?: number; 
  public get policyDeny() {
    return this.getNumberAttribute('policy_deny');
  }
  public set policyDeny(value: number) {
    this._policyDeny = value;
  }
  public resetPolicyDeny() {
    this._policyDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDenyInput() {
    return this._policyDeny;
  }

  // policy_permit - computed: false, optional: true, required: false
  private _policyPermit?: number; 
  public get policyPermit() {
    return this.getNumberAttribute('policy_permit');
  }
  public set policyPermit(value: number) {
    this._policyPermit = value;
  }
  public resetPolicyPermit() {
    this._policyPermit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyPermitInput() {
    return this._policyPermit;
  }

  // policy_reset - computed: false, optional: true, required: false
  private _policyReset?: number; 
  public get policyReset() {
    return this.getNumberAttribute('policy_reset');
  }
  public set policyReset(value: number) {
    this._policyReset = value;
  }
  public resetPolicyReset() {
    this._policyReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyResetInput() {
    return this._policyReset;
  }

  // policy_rule_count - computed: false, optional: true, required: false
  private _policyRuleCount?: number; 
  public get policyRuleCount() {
    return this.getNumberAttribute('policy_rule_count');
  }
  public set policyRuleCount(value: number) {
    this._policyRuleCount = value;
  }
  public resetPolicyRuleCount() {
    this._policyRuleCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRuleCountInput() {
    return this._policyRuleCount;
  }

  // policy_status - computed: false, optional: true, required: false
  private _policyStatus?: string; 
  public get policyStatus() {
    return this.getStringAttribute('policy_status');
  }
  public set policyStatus(value: string) {
    this._policyStatus = value;
  }
  public resetPolicyStatus() {
    this._policyStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyStatusInput() {
    return this._policyStatus;
  }

  // policy_unmatched_drop - computed: false, optional: true, required: false
  private _policyUnmatchedDrop?: number; 
  public get policyUnmatchedDrop() {
    return this.getNumberAttribute('policy_unmatched_drop');
  }
  public set policyUnmatchedDrop(value: number) {
    this._policyUnmatchedDrop = value;
  }
  public resetPolicyUnmatchedDrop() {
    this._policyUnmatchedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyUnmatchedDropInput() {
    return this._policyUnmatchedDrop;
  }

  // show_total_stats - computed: false, optional: true, required: false
  private _showTotalStats?: string; 
  public get showTotalStats() {
    return this.getStringAttribute('show_total_stats');
  }
  public set showTotalStats(value: string) {
    this._showTotalStats = value;
  }
  public resetShowTotalStats() {
    this._showTotalStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showTotalStatsInput() {
    return this._showTotalStats;
  }

  // topn_rules - computed: false, optional: true, required: false
  private _topnRules?: string; 
  public get topnRules() {
    return this.getStringAttribute('topn_rules');
  }
  public set topnRules(value: string) {
    this._topnRules = value;
  }
  public resetTopnRules() {
    this._topnRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topnRulesInput() {
    return this._topnRules;
  }

  // total_active_icmp - computed: false, optional: true, required: false
  private _totalActiveIcmp?: number; 
  public get totalActiveIcmp() {
    return this.getNumberAttribute('total_active_icmp');
  }
  public set totalActiveIcmp(value: number) {
    this._totalActiveIcmp = value;
  }
  public resetTotalActiveIcmp() {
    this._totalActiveIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalActiveIcmpInput() {
    return this._totalActiveIcmp;
  }

  // total_active_others - computed: false, optional: true, required: false
  private _totalActiveOthers?: number; 
  public get totalActiveOthers() {
    return this.getNumberAttribute('total_active_others');
  }
  public set totalActiveOthers(value: number) {
    this._totalActiveOthers = value;
  }
  public resetTotalActiveOthers() {
    this._totalActiveOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalActiveOthersInput() {
    return this._totalActiveOthers;
  }

  // total_active_tcp - computed: false, optional: true, required: false
  private _totalActiveTcp?: number; 
  public get totalActiveTcp() {
    return this.getNumberAttribute('total_active_tcp');
  }
  public set totalActiveTcp(value: number) {
    this._totalActiveTcp = value;
  }
  public resetTotalActiveTcp() {
    this._totalActiveTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalActiveTcpInput() {
    return this._totalActiveTcp;
  }

  // total_active_udp - computed: false, optional: true, required: false
  private _totalActiveUdp?: number; 
  public get totalActiveUdp() {
    return this.getNumberAttribute('total_active_udp');
  }
  public set totalActiveUdp(value: number) {
    this._totalActiveUdp = value;
  }
  public resetTotalActiveUdp() {
    this._totalActiveUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalActiveUdpInput() {
    return this._totalActiveUdp;
  }

  // total_bytes - computed: false, optional: true, required: false
  private _totalBytes?: number; 
  public get totalBytes() {
    return this.getNumberAttribute('total_bytes');
  }
  public set totalBytes(value: number) {
    this._totalBytes = value;
  }
  public resetTotalBytes() {
    this._totalBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBytesInput() {
    return this._totalBytes;
  }

  // total_deny_bytes - computed: false, optional: true, required: false
  private _totalDenyBytes?: number; 
  public get totalDenyBytes() {
    return this.getNumberAttribute('total_deny_bytes');
  }
  public set totalDenyBytes(value: number) {
    this._totalDenyBytes = value;
  }
  public resetTotalDenyBytes() {
    this._totalDenyBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalDenyBytesInput() {
    return this._totalDenyBytes;
  }

  // total_deny_packets - computed: false, optional: true, required: false
  private _totalDenyPackets?: number; 
  public get totalDenyPackets() {
    return this.getNumberAttribute('total_deny_packets');
  }
  public set totalDenyPackets(value: number) {
    this._totalDenyPackets = value;
  }
  public resetTotalDenyPackets() {
    this._totalDenyPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalDenyPacketsInput() {
    return this._totalDenyPackets;
  }

  // total_hit - computed: false, optional: true, required: false
  private _totalHit?: number; 
  public get totalHit() {
    return this.getNumberAttribute('total_hit');
  }
  public set totalHit(value: number) {
    this._totalHit = value;
  }
  public resetTotalHit() {
    this._totalHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalHitInput() {
    return this._totalHit;
  }

  // total_packets - computed: false, optional: true, required: false
  private _totalPackets?: number; 
  public get totalPackets() {
    return this.getNumberAttribute('total_packets');
  }
  public set totalPackets(value: number) {
    this._totalPackets = value;
  }
  public resetTotalPackets() {
    this._totalPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalPacketsInput() {
    return this._totalPackets;
  }

  // total_permit_bytes - computed: false, optional: true, required: false
  private _totalPermitBytes?: number; 
  public get totalPermitBytes() {
    return this.getNumberAttribute('total_permit_bytes');
  }
  public set totalPermitBytes(value: number) {
    this._totalPermitBytes = value;
  }
  public resetTotalPermitBytes() {
    this._totalPermitBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalPermitBytesInput() {
    return this._totalPermitBytes;
  }

  // total_permit_packets - computed: false, optional: true, required: false
  private _totalPermitPackets?: number; 
  public get totalPermitPackets() {
    return this.getNumberAttribute('total_permit_packets');
  }
  public set totalPermitPackets(value: number) {
    this._totalPermitPackets = value;
  }
  public resetTotalPermitPackets() {
    this._totalPermitPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalPermitPacketsInput() {
    return this._totalPermitPackets;
  }

  // total_reset_bytes - computed: false, optional: true, required: false
  private _totalResetBytes?: number; 
  public get totalResetBytes() {
    return this.getNumberAttribute('total_reset_bytes');
  }
  public set totalResetBytes(value: number) {
    this._totalResetBytes = value;
  }
  public resetTotalResetBytes() {
    this._totalResetBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalResetBytesInput() {
    return this._totalResetBytes;
  }

  // total_reset_packets - computed: false, optional: true, required: false
  private _totalResetPackets?: number; 
  public get totalResetPackets() {
    return this.getNumberAttribute('total_reset_packets');
  }
  public set totalResetPackets(value: number) {
    this._totalResetPackets = value;
  }
  public resetTotalResetPackets() {
    this._totalResetPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalResetPacketsInput() {
    return this._totalResetPackets;
  }

  // rule_stats - computed: false, optional: true, required: false
  private _ruleStats = new DataThunderRuleSetOperOperRuleStatsList(this, "rule_stats", false);
  public get ruleStats() {
    return this._ruleStats;
  }
  public putRuleStats(value: DataThunderRuleSetOperOperRuleStats[] | cdktf.IResolvable) {
    this._ruleStats.internalValue = value;
  }
  public resetRuleStats() {
    this._ruleStats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleStatsInput() {
    return this._ruleStats.internalValue;
  }
}
export interface DataThunderRuleSetOperRuleListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#action DataThunderRuleSetOper#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#activesessionicmp DataThunderRuleSetOper#activesessionicmp}
  */
  readonly activesessionicmp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#activesessionother DataThunderRuleSetOper#activesessionother}
  */
  readonly activesessionother?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#activesessionsctp DataThunderRuleSetOper#activesessionsctp}
  */
  readonly activesessionsctp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#activesessiontcp DataThunderRuleSetOper#activesessiontcp}
  */
  readonly activesessiontcp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#activesessiontotal DataThunderRuleSetOper#activesessiontotal}
  */
  readonly activesessiontotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#activesessionudp DataThunderRuleSetOper#activesessionudp}
  */
  readonly activesessionudp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#denybytes DataThunderRuleSetOper#denybytes}
  */
  readonly denybytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#denypackets DataThunderRuleSetOper#denypackets}
  */
  readonly denypackets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#hitcount DataThunderRuleSetOper#hitcount}
  */
  readonly hitcount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#last_hitcount_time DataThunderRuleSetOper#last_hitcount_time}
  */
  readonly lastHitcountTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#permitbytes DataThunderRuleSetOper#permitbytes}
  */
  readonly permitbytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#permitpackets DataThunderRuleSetOper#permitpackets}
  */
  readonly permitpackets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#ratelimitdrops DataThunderRuleSetOper#ratelimitdrops}
  */
  readonly ratelimitdrops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#resetbytes DataThunderRuleSetOper#resetbytes}
  */
  readonly resetbytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#resetpackets DataThunderRuleSetOper#resetpackets}
  */
  readonly resetpackets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#sessionicmp DataThunderRuleSetOper#sessionicmp}
  */
  readonly sessionicmp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#sessionother DataThunderRuleSetOper#sessionother}
  */
  readonly sessionother?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#sessionsctp DataThunderRuleSetOper#sessionsctp}
  */
  readonly sessionsctp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#sessiontcp DataThunderRuleSetOper#sessiontcp}
  */
  readonly sessiontcp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#sessiontotal DataThunderRuleSetOper#sessiontotal}
  */
  readonly sessiontotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#sessionudp DataThunderRuleSetOper#sessionudp}
  */
  readonly sessionudp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#status DataThunderRuleSetOper#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#synacksent DataThunderRuleSetOper#synacksent}
  */
  readonly synacksent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#syncookieon DataThunderRuleSetOper#syncookieon}
  */
  readonly syncookieon?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#tcphalfopencount DataThunderRuleSetOper#tcphalfopencount}
  */
  readonly tcphalfopencount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#totalbytes DataThunderRuleSetOper#totalbytes}
  */
  readonly totalbytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#totalpackets DataThunderRuleSetOper#totalpackets}
  */
  readonly totalpackets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#verificationfailed DataThunderRuleSetOper#verificationfailed}
  */
  readonly verificationfailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#verificationpassed DataThunderRuleSetOper#verificationpassed}
  */
  readonly verificationpassed?: number;
}

export function dataThunderRuleSetOperRuleListOperToTerraform(struct?: DataThunderRuleSetOperRuleListOperOutputReference | DataThunderRuleSetOperRuleListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    activesessionicmp: cdktf.numberToTerraform(struct!.activesessionicmp),
    activesessionother: cdktf.numberToTerraform(struct!.activesessionother),
    activesessionsctp: cdktf.numberToTerraform(struct!.activesessionsctp),
    activesessiontcp: cdktf.numberToTerraform(struct!.activesessiontcp),
    activesessiontotal: cdktf.numberToTerraform(struct!.activesessiontotal),
    activesessionudp: cdktf.numberToTerraform(struct!.activesessionudp),
    denybytes: cdktf.numberToTerraform(struct!.denybytes),
    denypackets: cdktf.numberToTerraform(struct!.denypackets),
    hitcount: cdktf.numberToTerraform(struct!.hitcount),
    last_hitcount_time: cdktf.stringToTerraform(struct!.lastHitcountTime),
    permitbytes: cdktf.numberToTerraform(struct!.permitbytes),
    permitpackets: cdktf.numberToTerraform(struct!.permitpackets),
    ratelimitdrops: cdktf.numberToTerraform(struct!.ratelimitdrops),
    resetbytes: cdktf.numberToTerraform(struct!.resetbytes),
    resetpackets: cdktf.numberToTerraform(struct!.resetpackets),
    sessionicmp: cdktf.numberToTerraform(struct!.sessionicmp),
    sessionother: cdktf.numberToTerraform(struct!.sessionother),
    sessionsctp: cdktf.numberToTerraform(struct!.sessionsctp),
    sessiontcp: cdktf.numberToTerraform(struct!.sessiontcp),
    sessiontotal: cdktf.numberToTerraform(struct!.sessiontotal),
    sessionudp: cdktf.numberToTerraform(struct!.sessionudp),
    status: cdktf.stringToTerraform(struct!.status),
    synacksent: cdktf.numberToTerraform(struct!.synacksent),
    syncookieon: cdktf.numberToTerraform(struct!.syncookieon),
    tcphalfopencount: cdktf.numberToTerraform(struct!.tcphalfopencount),
    totalbytes: cdktf.numberToTerraform(struct!.totalbytes),
    totalpackets: cdktf.numberToTerraform(struct!.totalpackets),
    verificationfailed: cdktf.numberToTerraform(struct!.verificationfailed),
    verificationpassed: cdktf.numberToTerraform(struct!.verificationpassed),
  }
}


export function dataThunderRuleSetOperRuleListOperToHclTerraform(struct?: DataThunderRuleSetOperRuleListOperOutputReference | DataThunderRuleSetOperRuleListOper): any {
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
    activesessionicmp: {
      value: cdktf.numberToHclTerraform(struct!.activesessionicmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    activesessionother: {
      value: cdktf.numberToHclTerraform(struct!.activesessionother),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    activesessionsctp: {
      value: cdktf.numberToHclTerraform(struct!.activesessionsctp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    activesessiontcp: {
      value: cdktf.numberToHclTerraform(struct!.activesessiontcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    activesessiontotal: {
      value: cdktf.numberToHclTerraform(struct!.activesessiontotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    activesessionudp: {
      value: cdktf.numberToHclTerraform(struct!.activesessionudp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    denybytes: {
      value: cdktf.numberToHclTerraform(struct!.denybytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    denypackets: {
      value: cdktf.numberToHclTerraform(struct!.denypackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hitcount: {
      value: cdktf.numberToHclTerraform(struct!.hitcount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_hitcount_time: {
      value: cdktf.stringToHclTerraform(struct!.lastHitcountTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permitbytes: {
      value: cdktf.numberToHclTerraform(struct!.permitbytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permitpackets: {
      value: cdktf.numberToHclTerraform(struct!.permitpackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratelimitdrops: {
      value: cdktf.numberToHclTerraform(struct!.ratelimitdrops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resetbytes: {
      value: cdktf.numberToHclTerraform(struct!.resetbytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resetpackets: {
      value: cdktf.numberToHclTerraform(struct!.resetpackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sessionicmp: {
      value: cdktf.numberToHclTerraform(struct!.sessionicmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sessionother: {
      value: cdktf.numberToHclTerraform(struct!.sessionother),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sessionsctp: {
      value: cdktf.numberToHclTerraform(struct!.sessionsctp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sessiontcp: {
      value: cdktf.numberToHclTerraform(struct!.sessiontcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sessiontotal: {
      value: cdktf.numberToHclTerraform(struct!.sessiontotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sessionudp: {
      value: cdktf.numberToHclTerraform(struct!.sessionudp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synacksent: {
      value: cdktf.numberToHclTerraform(struct!.synacksent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syncookieon: {
      value: cdktf.numberToHclTerraform(struct!.syncookieon),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcphalfopencount: {
      value: cdktf.numberToHclTerraform(struct!.tcphalfopencount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    totalbytes: {
      value: cdktf.numberToHclTerraform(struct!.totalbytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    totalpackets: {
      value: cdktf.numberToHclTerraform(struct!.totalpackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    verificationfailed: {
      value: cdktf.numberToHclTerraform(struct!.verificationfailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    verificationpassed: {
      value: cdktf.numberToHclTerraform(struct!.verificationpassed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetOperRuleListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRuleSetOperRuleListOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._activesessionicmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.activesessionicmp = this._activesessionicmp;
    }
    if (this._activesessionother !== undefined) {
      hasAnyValues = true;
      internalValueResult.activesessionother = this._activesessionother;
    }
    if (this._activesessionsctp !== undefined) {
      hasAnyValues = true;
      internalValueResult.activesessionsctp = this._activesessionsctp;
    }
    if (this._activesessiontcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.activesessiontcp = this._activesessiontcp;
    }
    if (this._activesessiontotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.activesessiontotal = this._activesessiontotal;
    }
    if (this._activesessionudp !== undefined) {
      hasAnyValues = true;
      internalValueResult.activesessionudp = this._activesessionudp;
    }
    if (this._denybytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.denybytes = this._denybytes;
    }
    if (this._denypackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.denypackets = this._denypackets;
    }
    if (this._hitcount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hitcount = this._hitcount;
    }
    if (this._lastHitcountTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastHitcountTime = this._lastHitcountTime;
    }
    if (this._permitbytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitbytes = this._permitbytes;
    }
    if (this._permitpackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitpackets = this._permitpackets;
    }
    if (this._ratelimitdrops !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitdrops = this._ratelimitdrops;
    }
    if (this._resetbytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetbytes = this._resetbytes;
    }
    if (this._resetpackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetpackets = this._resetpackets;
    }
    if (this._sessionicmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionicmp = this._sessionicmp;
    }
    if (this._sessionother !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionother = this._sessionother;
    }
    if (this._sessionsctp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionsctp = this._sessionsctp;
    }
    if (this._sessiontcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessiontcp = this._sessiontcp;
    }
    if (this._sessiontotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessiontotal = this._sessiontotal;
    }
    if (this._sessionudp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionudp = this._sessionudp;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._synacksent !== undefined) {
      hasAnyValues = true;
      internalValueResult.synacksent = this._synacksent;
    }
    if (this._syncookieon !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncookieon = this._syncookieon;
    }
    if (this._tcphalfopencount !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcphalfopencount = this._tcphalfopencount;
    }
    if (this._totalbytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalbytes = this._totalbytes;
    }
    if (this._totalpackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalpackets = this._totalpackets;
    }
    if (this._verificationfailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.verificationfailed = this._verificationfailed;
    }
    if (this._verificationpassed !== undefined) {
      hasAnyValues = true;
      internalValueResult.verificationpassed = this._verificationpassed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetOperRuleListOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._activesessionicmp = undefined;
      this._activesessionother = undefined;
      this._activesessionsctp = undefined;
      this._activesessiontcp = undefined;
      this._activesessiontotal = undefined;
      this._activesessionudp = undefined;
      this._denybytes = undefined;
      this._denypackets = undefined;
      this._hitcount = undefined;
      this._lastHitcountTime = undefined;
      this._permitbytes = undefined;
      this._permitpackets = undefined;
      this._ratelimitdrops = undefined;
      this._resetbytes = undefined;
      this._resetpackets = undefined;
      this._sessionicmp = undefined;
      this._sessionother = undefined;
      this._sessionsctp = undefined;
      this._sessiontcp = undefined;
      this._sessiontotal = undefined;
      this._sessionudp = undefined;
      this._status = undefined;
      this._synacksent = undefined;
      this._syncookieon = undefined;
      this._tcphalfopencount = undefined;
      this._totalbytes = undefined;
      this._totalpackets = undefined;
      this._verificationfailed = undefined;
      this._verificationpassed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._activesessionicmp = value.activesessionicmp;
      this._activesessionother = value.activesessionother;
      this._activesessionsctp = value.activesessionsctp;
      this._activesessiontcp = value.activesessiontcp;
      this._activesessiontotal = value.activesessiontotal;
      this._activesessionudp = value.activesessionudp;
      this._denybytes = value.denybytes;
      this._denypackets = value.denypackets;
      this._hitcount = value.hitcount;
      this._lastHitcountTime = value.lastHitcountTime;
      this._permitbytes = value.permitbytes;
      this._permitpackets = value.permitpackets;
      this._ratelimitdrops = value.ratelimitdrops;
      this._resetbytes = value.resetbytes;
      this._resetpackets = value.resetpackets;
      this._sessionicmp = value.sessionicmp;
      this._sessionother = value.sessionother;
      this._sessionsctp = value.sessionsctp;
      this._sessiontcp = value.sessiontcp;
      this._sessiontotal = value.sessiontotal;
      this._sessionudp = value.sessionudp;
      this._status = value.status;
      this._synacksent = value.synacksent;
      this._syncookieon = value.syncookieon;
      this._tcphalfopencount = value.tcphalfopencount;
      this._totalbytes = value.totalbytes;
      this._totalpackets = value.totalpackets;
      this._verificationfailed = value.verificationfailed;
      this._verificationpassed = value.verificationpassed;
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

  // activesessionicmp - computed: false, optional: true, required: false
  private _activesessionicmp?: number; 
  public get activesessionicmp() {
    return this.getNumberAttribute('activesessionicmp');
  }
  public set activesessionicmp(value: number) {
    this._activesessionicmp = value;
  }
  public resetActivesessionicmp() {
    this._activesessionicmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activesessionicmpInput() {
    return this._activesessionicmp;
  }

  // activesessionother - computed: false, optional: true, required: false
  private _activesessionother?: number; 
  public get activesessionother() {
    return this.getNumberAttribute('activesessionother');
  }
  public set activesessionother(value: number) {
    this._activesessionother = value;
  }
  public resetActivesessionother() {
    this._activesessionother = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activesessionotherInput() {
    return this._activesessionother;
  }

  // activesessionsctp - computed: false, optional: true, required: false
  private _activesessionsctp?: number; 
  public get activesessionsctp() {
    return this.getNumberAttribute('activesessionsctp');
  }
  public set activesessionsctp(value: number) {
    this._activesessionsctp = value;
  }
  public resetActivesessionsctp() {
    this._activesessionsctp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activesessionsctpInput() {
    return this._activesessionsctp;
  }

  // activesessiontcp - computed: false, optional: true, required: false
  private _activesessiontcp?: number; 
  public get activesessiontcp() {
    return this.getNumberAttribute('activesessiontcp');
  }
  public set activesessiontcp(value: number) {
    this._activesessiontcp = value;
  }
  public resetActivesessiontcp() {
    this._activesessiontcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activesessiontcpInput() {
    return this._activesessiontcp;
  }

  // activesessiontotal - computed: false, optional: true, required: false
  private _activesessiontotal?: number; 
  public get activesessiontotal() {
    return this.getNumberAttribute('activesessiontotal');
  }
  public set activesessiontotal(value: number) {
    this._activesessiontotal = value;
  }
  public resetActivesessiontotal() {
    this._activesessiontotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activesessiontotalInput() {
    return this._activesessiontotal;
  }

  // activesessionudp - computed: false, optional: true, required: false
  private _activesessionudp?: number; 
  public get activesessionudp() {
    return this.getNumberAttribute('activesessionudp');
  }
  public set activesessionudp(value: number) {
    this._activesessionudp = value;
  }
  public resetActivesessionudp() {
    this._activesessionudp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activesessionudpInput() {
    return this._activesessionudp;
  }

  // denybytes - computed: false, optional: true, required: false
  private _denybytes?: number; 
  public get denybytes() {
    return this.getNumberAttribute('denybytes');
  }
  public set denybytes(value: number) {
    this._denybytes = value;
  }
  public resetDenybytes() {
    this._denybytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denybytesInput() {
    return this._denybytes;
  }

  // denypackets - computed: false, optional: true, required: false
  private _denypackets?: number; 
  public get denypackets() {
    return this.getNumberAttribute('denypackets');
  }
  public set denypackets(value: number) {
    this._denypackets = value;
  }
  public resetDenypackets() {
    this._denypackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denypacketsInput() {
    return this._denypackets;
  }

  // hitcount - computed: false, optional: true, required: false
  private _hitcount?: number; 
  public get hitcount() {
    return this.getNumberAttribute('hitcount');
  }
  public set hitcount(value: number) {
    this._hitcount = value;
  }
  public resetHitcount() {
    this._hitcount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitcountInput() {
    return this._hitcount;
  }

  // last_hitcount_time - computed: false, optional: true, required: false
  private _lastHitcountTime?: string; 
  public get lastHitcountTime() {
    return this.getStringAttribute('last_hitcount_time');
  }
  public set lastHitcountTime(value: string) {
    this._lastHitcountTime = value;
  }
  public resetLastHitcountTime() {
    this._lastHitcountTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastHitcountTimeInput() {
    return this._lastHitcountTime;
  }

  // permitbytes - computed: false, optional: true, required: false
  private _permitbytes?: number; 
  public get permitbytes() {
    return this.getNumberAttribute('permitbytes');
  }
  public set permitbytes(value: number) {
    this._permitbytes = value;
  }
  public resetPermitbytes() {
    this._permitbytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitbytesInput() {
    return this._permitbytes;
  }

  // permitpackets - computed: false, optional: true, required: false
  private _permitpackets?: number; 
  public get permitpackets() {
    return this.getNumberAttribute('permitpackets');
  }
  public set permitpackets(value: number) {
    this._permitpackets = value;
  }
  public resetPermitpackets() {
    this._permitpackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitpacketsInput() {
    return this._permitpackets;
  }

  // ratelimitdrops - computed: false, optional: true, required: false
  private _ratelimitdrops?: number; 
  public get ratelimitdrops() {
    return this.getNumberAttribute('ratelimitdrops');
  }
  public set ratelimitdrops(value: number) {
    this._ratelimitdrops = value;
  }
  public resetRatelimitdrops() {
    this._ratelimitdrops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitdropsInput() {
    return this._ratelimitdrops;
  }

  // resetbytes - computed: false, optional: true, required: false
  private _resetbytes?: number; 
  public get resetbytes() {
    return this.getNumberAttribute('resetbytes');
  }
  public set resetbytes(value: number) {
    this._resetbytes = value;
  }
  public resetResetbytes() {
    this._resetbytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetbytesInput() {
    return this._resetbytes;
  }

  // resetpackets - computed: false, optional: true, required: false
  private _resetpackets?: number; 
  public get resetpackets() {
    return this.getNumberAttribute('resetpackets');
  }
  public set resetpackets(value: number) {
    this._resetpackets = value;
  }
  public resetResetpackets() {
    this._resetpackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetpacketsInput() {
    return this._resetpackets;
  }

  // sessionicmp - computed: false, optional: true, required: false
  private _sessionicmp?: number; 
  public get sessionicmp() {
    return this.getNumberAttribute('sessionicmp');
  }
  public set sessionicmp(value: number) {
    this._sessionicmp = value;
  }
  public resetSessionicmp() {
    this._sessionicmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionicmpInput() {
    return this._sessionicmp;
  }

  // sessionother - computed: false, optional: true, required: false
  private _sessionother?: number; 
  public get sessionother() {
    return this.getNumberAttribute('sessionother');
  }
  public set sessionother(value: number) {
    this._sessionother = value;
  }
  public resetSessionother() {
    this._sessionother = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionotherInput() {
    return this._sessionother;
  }

  // sessionsctp - computed: false, optional: true, required: false
  private _sessionsctp?: number; 
  public get sessionsctp() {
    return this.getNumberAttribute('sessionsctp');
  }
  public set sessionsctp(value: number) {
    this._sessionsctp = value;
  }
  public resetSessionsctp() {
    this._sessionsctp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsctpInput() {
    return this._sessionsctp;
  }

  // sessiontcp - computed: false, optional: true, required: false
  private _sessiontcp?: number; 
  public get sessiontcp() {
    return this.getNumberAttribute('sessiontcp');
  }
  public set sessiontcp(value: number) {
    this._sessiontcp = value;
  }
  public resetSessiontcp() {
    this._sessiontcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessiontcpInput() {
    return this._sessiontcp;
  }

  // sessiontotal - computed: false, optional: true, required: false
  private _sessiontotal?: number; 
  public get sessiontotal() {
    return this.getNumberAttribute('sessiontotal');
  }
  public set sessiontotal(value: number) {
    this._sessiontotal = value;
  }
  public resetSessiontotal() {
    this._sessiontotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessiontotalInput() {
    return this._sessiontotal;
  }

  // sessionudp - computed: false, optional: true, required: false
  private _sessionudp?: number; 
  public get sessionudp() {
    return this.getNumberAttribute('sessionudp');
  }
  public set sessionudp(value: number) {
    this._sessionudp = value;
  }
  public resetSessionudp() {
    this._sessionudp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionudpInput() {
    return this._sessionudp;
  }

  // status - computed: false, optional: true, required: false
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

  // synacksent - computed: false, optional: true, required: false
  private _synacksent?: number; 
  public get synacksent() {
    return this.getNumberAttribute('synacksent');
  }
  public set synacksent(value: number) {
    this._synacksent = value;
  }
  public resetSynacksent() {
    this._synacksent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synacksentInput() {
    return this._synacksent;
  }

  // syncookieon - computed: false, optional: true, required: false
  private _syncookieon?: number; 
  public get syncookieon() {
    return this.getNumberAttribute('syncookieon');
  }
  public set syncookieon(value: number) {
    this._syncookieon = value;
  }
  public resetSyncookieon() {
    this._syncookieon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncookieonInput() {
    return this._syncookieon;
  }

  // tcphalfopencount - computed: false, optional: true, required: false
  private _tcphalfopencount?: number; 
  public get tcphalfopencount() {
    return this.getNumberAttribute('tcphalfopencount');
  }
  public set tcphalfopencount(value: number) {
    this._tcphalfopencount = value;
  }
  public resetTcphalfopencount() {
    this._tcphalfopencount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcphalfopencountInput() {
    return this._tcphalfopencount;
  }

  // totalbytes - computed: false, optional: true, required: false
  private _totalbytes?: number; 
  public get totalbytes() {
    return this.getNumberAttribute('totalbytes');
  }
  public set totalbytes(value: number) {
    this._totalbytes = value;
  }
  public resetTotalbytes() {
    this._totalbytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalbytesInput() {
    return this._totalbytes;
  }

  // totalpackets - computed: false, optional: true, required: false
  private _totalpackets?: number; 
  public get totalpackets() {
    return this.getNumberAttribute('totalpackets');
  }
  public set totalpackets(value: number) {
    this._totalpackets = value;
  }
  public resetTotalpackets() {
    this._totalpackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalpacketsInput() {
    return this._totalpackets;
  }

  // verificationfailed - computed: false, optional: true, required: false
  private _verificationfailed?: number; 
  public get verificationfailed() {
    return this.getNumberAttribute('verificationfailed');
  }
  public set verificationfailed(value: number) {
    this._verificationfailed = value;
  }
  public resetVerificationfailed() {
    this._verificationfailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationfailedInput() {
    return this._verificationfailed;
  }

  // verificationpassed - computed: false, optional: true, required: false
  private _verificationpassed?: number; 
  public get verificationpassed() {
    return this.getNumberAttribute('verificationpassed');
  }
  public set verificationpassed(value: number) {
    this._verificationpassed = value;
  }
  public resetVerificationpassed() {
    this._verificationpassed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationpassedInput() {
    return this._verificationpassed;
  }
}
export interface DataThunderRuleSetOperRuleListStruct {
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#name DataThunderRuleSetOper#name}
  */
  readonly name: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#oper DataThunderRuleSetOper#oper}
  */
  readonly oper?: DataThunderRuleSetOperRuleListOper;
}

export function dataThunderRuleSetOperRuleListStructToTerraform(struct?: DataThunderRuleSetOperRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    oper: dataThunderRuleSetOperRuleListOperToTerraform(struct!.oper),
  }
}


export function dataThunderRuleSetOperRuleListStructToHclTerraform(struct?: DataThunderRuleSetOperRuleListStruct | cdktf.IResolvable): any {
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
    oper: {
      value: dataThunderRuleSetOperRuleListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRuleSetOperRuleListOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetOperRuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderRuleSetOperRuleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetOperRuleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._oper.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._oper.internalValue = value.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderRuleSetOperRuleListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderRuleSetOperRuleListOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}

export class DataThunderRuleSetOperRuleListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderRuleSetOperRuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderRuleSetOperRuleListStructOutputReference {
    return new DataThunderRuleSetOperRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDestListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#dest DataThunderRuleSetOper#dest}
  */
  readonly dest?: string;
}

export function dataThunderRuleSetOperRulesByZoneOperGroupListRuleListDestListStructToTerraform(struct?: DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDestListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest: cdktf.stringToTerraform(struct!.dest),
  }
}


export function dataThunderRuleSetOperRulesByZoneOperGroupListRuleListDestListStructToHclTerraform(struct?: DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDestListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest: {
      value: cdktf.stringToHclTerraform(struct!.dest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDestListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDestListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dest !== undefined) {
      hasAnyValues = true;
      internalValueResult.dest = this._dest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDestListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dest = value.dest;
    }
  }

  // dest - computed: false, optional: true, required: false
  private _dest?: string; 
  public get dest() {
    return this.getStringAttribute('dest');
  }
  public set dest(value: string) {
    this._dest = value;
  }
  public resetDest() {
    this._dest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destInput() {
    return this._dest;
  }
}

export class DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDestListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDestListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDestListStructOutputReference {
    return new DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDestListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDscpListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#dscp DataThunderRuleSetOper#dscp}
  */
  readonly dscp?: string;
}

export function dataThunderRuleSetOperRulesByZoneOperGroupListRuleListDscpListStructToTerraform(struct?: DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDscpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dscp: cdktf.stringToTerraform(struct!.dscp),
  }
}


export function dataThunderRuleSetOperRulesByZoneOperGroupListRuleListDscpListStructToHclTerraform(struct?: DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDscpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dscp: {
      value: cdktf.stringToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDscpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDscpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDscpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dscp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dscp = value.dscp;
    }
  }

  // dscp - computed: false, optional: true, required: false
  private _dscp?: string; 
  public get dscp() {
    return this.getStringAttribute('dscp');
  }
  public set dscp(value: string) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }
}

export class DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDscpListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDscpListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDscpListStructOutputReference {
    return new DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDscpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderRuleSetOperRulesByZoneOperGroupListRuleListServiceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#service DataThunderRuleSetOper#service}
  */
  readonly service?: string;
}

export function dataThunderRuleSetOperRulesByZoneOperGroupListRuleListServiceListStructToTerraform(struct?: DataThunderRuleSetOperRulesByZoneOperGroupListRuleListServiceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataThunderRuleSetOperRulesByZoneOperGroupListRuleListServiceListStructToHclTerraform(struct?: DataThunderRuleSetOperRulesByZoneOperGroupListRuleListServiceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetOperRulesByZoneOperGroupListRuleListServiceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderRuleSetOperRulesByZoneOperGroupListRuleListServiceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetOperRulesByZoneOperGroupListRuleListServiceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._service = value.service;
    }
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}

export class DataThunderRuleSetOperRulesByZoneOperGroupListRuleListServiceListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderRuleSetOperRulesByZoneOperGroupListRuleListServiceListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderRuleSetOperRulesByZoneOperGroupListRuleListServiceListStructOutputReference {
    return new DataThunderRuleSetOperRulesByZoneOperGroupListRuleListServiceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderRuleSetOperRulesByZoneOperGroupListRuleListSourceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#source DataThunderRuleSetOper#source}
  */
  readonly source?: string;
}

export function dataThunderRuleSetOperRulesByZoneOperGroupListRuleListSourceListStructToTerraform(struct?: DataThunderRuleSetOperRulesByZoneOperGroupListRuleListSourceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dataThunderRuleSetOperRulesByZoneOperGroupListRuleListSourceListStructToHclTerraform(struct?: DataThunderRuleSetOperRulesByZoneOperGroupListRuleListSourceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetOperRulesByZoneOperGroupListRuleListSourceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderRuleSetOperRulesByZoneOperGroupListRuleListSourceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetOperRulesByZoneOperGroupListRuleListSourceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
    }
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class DataThunderRuleSetOperRulesByZoneOperGroupListRuleListSourceListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderRuleSetOperRulesByZoneOperGroupListRuleListSourceListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderRuleSetOperRulesByZoneOperGroupListRuleListSourceListStructOutputReference {
    return new DataThunderRuleSetOperRulesByZoneOperGroupListRuleListSourceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderRuleSetOperRulesByZoneOperGroupListRuleListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#action DataThunderRuleSetOper#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#name DataThunderRuleSetOper#name}
  */
  readonly name?: string;
  /**
  * dest_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#dest_list DataThunderRuleSetOper#dest_list}
  */
  readonly destList?: DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDestListStruct[] | cdktf.IResolvable;
  /**
  * dscp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#dscp_list DataThunderRuleSetOper#dscp_list}
  */
  readonly dscpList?: DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDscpListStruct[] | cdktf.IResolvable;
  /**
  * service_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#service_list DataThunderRuleSetOper#service_list}
  */
  readonly serviceList?: DataThunderRuleSetOperRulesByZoneOperGroupListRuleListServiceListStruct[] | cdktf.IResolvable;
  /**
  * source_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#source_list DataThunderRuleSetOper#source_list}
  */
  readonly sourceList?: DataThunderRuleSetOperRulesByZoneOperGroupListRuleListSourceListStruct[] | cdktf.IResolvable;
}

export function dataThunderRuleSetOperRulesByZoneOperGroupListRuleListStructToTerraform(struct?: DataThunderRuleSetOperRulesByZoneOperGroupListRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    dest_list: cdktf.listMapper(dataThunderRuleSetOperRulesByZoneOperGroupListRuleListDestListStructToTerraform, true)(struct!.destList),
    dscp_list: cdktf.listMapper(dataThunderRuleSetOperRulesByZoneOperGroupListRuleListDscpListStructToTerraform, true)(struct!.dscpList),
    service_list: cdktf.listMapper(dataThunderRuleSetOperRulesByZoneOperGroupListRuleListServiceListStructToTerraform, true)(struct!.serviceList),
    source_list: cdktf.listMapper(dataThunderRuleSetOperRulesByZoneOperGroupListRuleListSourceListStructToTerraform, true)(struct!.sourceList),
  }
}


export function dataThunderRuleSetOperRulesByZoneOperGroupListRuleListStructToHclTerraform(struct?: DataThunderRuleSetOperRulesByZoneOperGroupListRuleListStruct | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_list: {
      value: cdktf.listMapperHcl(dataThunderRuleSetOperRulesByZoneOperGroupListRuleListDestListStructToHclTerraform, true)(struct!.destList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDestListStructList",
    },
    dscp_list: {
      value: cdktf.listMapperHcl(dataThunderRuleSetOperRulesByZoneOperGroupListRuleListDscpListStructToHclTerraform, true)(struct!.dscpList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDscpListStructList",
    },
    service_list: {
      value: cdktf.listMapperHcl(dataThunderRuleSetOperRulesByZoneOperGroupListRuleListServiceListStructToHclTerraform, true)(struct!.serviceList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRuleSetOperRulesByZoneOperGroupListRuleListServiceListStructList",
    },
    source_list: {
      value: cdktf.listMapperHcl(dataThunderRuleSetOperRulesByZoneOperGroupListRuleListSourceListStructToHclTerraform, true)(struct!.sourceList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRuleSetOperRulesByZoneOperGroupListRuleListSourceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetOperRulesByZoneOperGroupListRuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderRuleSetOperRulesByZoneOperGroupListRuleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._destList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destList = this._destList?.internalValue;
    }
    if (this._dscpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpList = this._dscpList?.internalValue;
    }
    if (this._serviceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceList = this._serviceList?.internalValue;
    }
    if (this._sourceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceList = this._sourceList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetOperRulesByZoneOperGroupListRuleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
      this._destList.internalValue = undefined;
      this._dscpList.internalValue = undefined;
      this._serviceList.internalValue = undefined;
      this._sourceList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
      this._destList.internalValue = value.destList;
      this._dscpList.internalValue = value.dscpList;
      this._serviceList.internalValue = value.serviceList;
      this._sourceList.internalValue = value.sourceList;
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

  // dest_list - computed: false, optional: true, required: false
  private _destList = new DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDestListStructList(this, "dest_list", false);
  public get destList() {
    return this._destList;
  }
  public putDestList(value: DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDestListStruct[] | cdktf.IResolvable) {
    this._destList.internalValue = value;
  }
  public resetDestList() {
    this._destList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destListInput() {
    return this._destList.internalValue;
  }

  // dscp_list - computed: false, optional: true, required: false
  private _dscpList = new DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDscpListStructList(this, "dscp_list", false);
  public get dscpList() {
    return this._dscpList;
  }
  public putDscpList(value: DataThunderRuleSetOperRulesByZoneOperGroupListRuleListDscpListStruct[] | cdktf.IResolvable) {
    this._dscpList.internalValue = value;
  }
  public resetDscpList() {
    this._dscpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpListInput() {
    return this._dscpList.internalValue;
  }

  // service_list - computed: false, optional: true, required: false
  private _serviceList = new DataThunderRuleSetOperRulesByZoneOperGroupListRuleListServiceListStructList(this, "service_list", false);
  public get serviceList() {
    return this._serviceList;
  }
  public putServiceList(value: DataThunderRuleSetOperRulesByZoneOperGroupListRuleListServiceListStruct[] | cdktf.IResolvable) {
    this._serviceList.internalValue = value;
  }
  public resetServiceList() {
    this._serviceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceListInput() {
    return this._serviceList.internalValue;
  }

  // source_list - computed: false, optional: true, required: false
  private _sourceList = new DataThunderRuleSetOperRulesByZoneOperGroupListRuleListSourceListStructList(this, "source_list", false);
  public get sourceList() {
    return this._sourceList;
  }
  public putSourceList(value: DataThunderRuleSetOperRulesByZoneOperGroupListRuleListSourceListStruct[] | cdktf.IResolvable) {
    this._sourceList.internalValue = value;
  }
  public resetSourceList() {
    this._sourceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceListInput() {
    return this._sourceList.internalValue;
  }
}

export class DataThunderRuleSetOperRulesByZoneOperGroupListRuleListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderRuleSetOperRulesByZoneOperGroupListRuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderRuleSetOperRulesByZoneOperGroupListRuleListStructOutputReference {
    return new DataThunderRuleSetOperRulesByZoneOperGroupListRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderRuleSetOperRulesByZoneOperGroupListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#from DataThunderRuleSetOper#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#to DataThunderRuleSetOper#to}
  */
  readonly to?: string;
  /**
  * rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#rule_list DataThunderRuleSetOper#rule_list}
  */
  readonly ruleList?: DataThunderRuleSetOperRulesByZoneOperGroupListRuleListStruct[] | cdktf.IResolvable;
}

export function dataThunderRuleSetOperRulesByZoneOperGroupListStructToTerraform(struct?: DataThunderRuleSetOperRulesByZoneOperGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
    rule_list: cdktf.listMapper(dataThunderRuleSetOperRulesByZoneOperGroupListRuleListStructToTerraform, true)(struct!.ruleList),
  }
}


export function dataThunderRuleSetOperRulesByZoneOperGroupListStructToHclTerraform(struct?: DataThunderRuleSetOperRulesByZoneOperGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_list: {
      value: cdktf.listMapperHcl(dataThunderRuleSetOperRulesByZoneOperGroupListRuleListStructToHclTerraform, true)(struct!.ruleList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRuleSetOperRulesByZoneOperGroupListRuleListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetOperRulesByZoneOperGroupListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderRuleSetOperRulesByZoneOperGroupListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    if (this._ruleList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleList = this._ruleList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetOperRulesByZoneOperGroupListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
      this._ruleList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
      this._ruleList.internalValue = value.ruleList;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }

  // rule_list - computed: false, optional: true, required: false
  private _ruleList = new DataThunderRuleSetOperRulesByZoneOperGroupListRuleListStructList(this, "rule_list", false);
  public get ruleList() {
    return this._ruleList;
  }
  public putRuleList(value: DataThunderRuleSetOperRulesByZoneOperGroupListRuleListStruct[] | cdktf.IResolvable) {
    this._ruleList.internalValue = value;
  }
  public resetRuleList() {
    this._ruleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleListInput() {
    return this._ruleList.internalValue;
  }
}

export class DataThunderRuleSetOperRulesByZoneOperGroupListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderRuleSetOperRulesByZoneOperGroupListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderRuleSetOperRulesByZoneOperGroupListStructOutputReference {
    return new DataThunderRuleSetOperRulesByZoneOperGroupListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderRuleSetOperRulesByZoneOper {
  /**
  * group_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#group_list DataThunderRuleSetOper#group_list}
  */
  readonly groupList?: DataThunderRuleSetOperRulesByZoneOperGroupListStruct[] | cdktf.IResolvable;
}

export function dataThunderRuleSetOperRulesByZoneOperToTerraform(struct?: DataThunderRuleSetOperRulesByZoneOperOutputReference | DataThunderRuleSetOperRulesByZoneOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_list: cdktf.listMapper(dataThunderRuleSetOperRulesByZoneOperGroupListStructToTerraform, true)(struct!.groupList),
  }
}


export function dataThunderRuleSetOperRulesByZoneOperToHclTerraform(struct?: DataThunderRuleSetOperRulesByZoneOperOutputReference | DataThunderRuleSetOperRulesByZoneOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_list: {
      value: cdktf.listMapperHcl(dataThunderRuleSetOperRulesByZoneOperGroupListStructToHclTerraform, true)(struct!.groupList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRuleSetOperRulesByZoneOperGroupListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetOperRulesByZoneOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRuleSetOperRulesByZoneOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupList = this._groupList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetOperRulesByZoneOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupList.internalValue = value.groupList;
    }
  }

  // group_list - computed: false, optional: true, required: false
  private _groupList = new DataThunderRuleSetOperRulesByZoneOperGroupListStructList(this, "group_list", false);
  public get groupList() {
    return this._groupList;
  }
  public putGroupList(value: DataThunderRuleSetOperRulesByZoneOperGroupListStruct[] | cdktf.IResolvable) {
    this._groupList.internalValue = value;
  }
  public resetGroupList() {
    this._groupList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupListInput() {
    return this._groupList.internalValue;
  }
}
export interface DataThunderRuleSetOperRulesByZone {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#oper DataThunderRuleSetOper#oper}
  */
  readonly oper?: DataThunderRuleSetOperRulesByZoneOper;
}

export function dataThunderRuleSetOperRulesByZoneToTerraform(struct?: DataThunderRuleSetOperRulesByZoneOutputReference | DataThunderRuleSetOperRulesByZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderRuleSetOperRulesByZoneOperToTerraform(struct!.oper),
  }
}


export function dataThunderRuleSetOperRulesByZoneToHclTerraform(struct?: DataThunderRuleSetOperRulesByZoneOutputReference | DataThunderRuleSetOperRulesByZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderRuleSetOperRulesByZoneOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRuleSetOperRulesByZoneOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetOperRulesByZoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRuleSetOperRulesByZone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetOperRulesByZone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderRuleSetOperRulesByZoneOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderRuleSetOperRulesByZoneOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderRuleSetOperTrackAppRuleListOperRuleListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#name DataThunderRuleSetOper#name}
  */
  readonly name?: string;
}

export function dataThunderRuleSetOperTrackAppRuleListOperRuleListStructToTerraform(struct?: DataThunderRuleSetOperTrackAppRuleListOperRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataThunderRuleSetOperTrackAppRuleListOperRuleListStructToHclTerraform(struct?: DataThunderRuleSetOperTrackAppRuleListOperRuleListStruct | cdktf.IResolvable): any {
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

export class DataThunderRuleSetOperTrackAppRuleListOperRuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderRuleSetOperTrackAppRuleListOperRuleListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderRuleSetOperTrackAppRuleListOperRuleListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderRuleSetOperTrackAppRuleListOperRuleListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderRuleSetOperTrackAppRuleListOperRuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderRuleSetOperTrackAppRuleListOperRuleListStructOutputReference {
    return new DataThunderRuleSetOperTrackAppRuleListOperRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderRuleSetOperTrackAppRuleListOper {
  /**
  * rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#rule_list DataThunderRuleSetOper#rule_list}
  */
  readonly ruleList?: DataThunderRuleSetOperTrackAppRuleListOperRuleListStruct[] | cdktf.IResolvable;
}

export function dataThunderRuleSetOperTrackAppRuleListOperToTerraform(struct?: DataThunderRuleSetOperTrackAppRuleListOperOutputReference | DataThunderRuleSetOperTrackAppRuleListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_list: cdktf.listMapper(dataThunderRuleSetOperTrackAppRuleListOperRuleListStructToTerraform, true)(struct!.ruleList),
  }
}


export function dataThunderRuleSetOperTrackAppRuleListOperToHclTerraform(struct?: DataThunderRuleSetOperTrackAppRuleListOperOutputReference | DataThunderRuleSetOperTrackAppRuleListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_list: {
      value: cdktf.listMapperHcl(dataThunderRuleSetOperTrackAppRuleListOperRuleListStructToHclTerraform, true)(struct!.ruleList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRuleSetOperTrackAppRuleListOperRuleListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetOperTrackAppRuleListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRuleSetOperTrackAppRuleListOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleList = this._ruleList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetOperTrackAppRuleListOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ruleList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ruleList.internalValue = value.ruleList;
    }
  }

  // rule_list - computed: false, optional: true, required: false
  private _ruleList = new DataThunderRuleSetOperTrackAppRuleListOperRuleListStructList(this, "rule_list", false);
  public get ruleList() {
    return this._ruleList;
  }
  public putRuleList(value: DataThunderRuleSetOperTrackAppRuleListOperRuleListStruct[] | cdktf.IResolvable) {
    this._ruleList.internalValue = value;
  }
  public resetRuleList() {
    this._ruleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleListInput() {
    return this._ruleList.internalValue;
  }
}
export interface DataThunderRuleSetOperTrackAppRuleListStruct {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#oper DataThunderRuleSetOper#oper}
  */
  readonly oper?: DataThunderRuleSetOperTrackAppRuleListOper;
}

export function dataThunderRuleSetOperTrackAppRuleListStructToTerraform(struct?: DataThunderRuleSetOperTrackAppRuleListStructOutputReference | DataThunderRuleSetOperTrackAppRuleListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderRuleSetOperTrackAppRuleListOperToTerraform(struct!.oper),
  }
}


export function dataThunderRuleSetOperTrackAppRuleListStructToHclTerraform(struct?: DataThunderRuleSetOperTrackAppRuleListStructOutputReference | DataThunderRuleSetOperTrackAppRuleListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderRuleSetOperTrackAppRuleListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRuleSetOperTrackAppRuleListOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetOperTrackAppRuleListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRuleSetOperTrackAppRuleListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetOperTrackAppRuleListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderRuleSetOperTrackAppRuleListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderRuleSetOperTrackAppRuleListOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper thunder_rule_set_oper}
*/
export class DataThunderRuleSetOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_rule_set_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderRuleSetOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderRuleSetOper to import
  * @param importFromId The id of the existing DataThunderRuleSetOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderRuleSetOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_rule_set_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_oper thunder_rule_set_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderRuleSetOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderRuleSetOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_rule_set_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._name = config.name;
    this._application.internalValue = config.application;
    this._oper.internalValue = config.oper;
    this._ruleList.internalValue = config.ruleList;
    this._rulesByZone.internalValue = config.rulesByZone;
    this._trackAppRuleList.internalValue = config.trackAppRuleList;
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

  // application - computed: false, optional: true, required: false
  private _application = new DataThunderRuleSetOperApplicationOutputReference(this, "application");
  public get application() {
    return this._application;
  }
  public putApplication(value: DataThunderRuleSetOperApplication) {
    this._application.internalValue = value;
  }
  public resetApplication() {
    this._application.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application.internalValue;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderRuleSetOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderRuleSetOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // rule_list - computed: false, optional: true, required: false
  private _ruleList = new DataThunderRuleSetOperRuleListStructList(this, "rule_list", false);
  public get ruleList() {
    return this._ruleList;
  }
  public putRuleList(value: DataThunderRuleSetOperRuleListStruct[] | cdktf.IResolvable) {
    this._ruleList.internalValue = value;
  }
  public resetRuleList() {
    this._ruleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleListInput() {
    return this._ruleList.internalValue;
  }

  // rules_by_zone - computed: false, optional: true, required: false
  private _rulesByZone = new DataThunderRuleSetOperRulesByZoneOutputReference(this, "rules_by_zone");
  public get rulesByZone() {
    return this._rulesByZone;
  }
  public putRulesByZone(value: DataThunderRuleSetOperRulesByZone) {
    this._rulesByZone.internalValue = value;
  }
  public resetRulesByZone() {
    this._rulesByZone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesByZoneInput() {
    return this._rulesByZone.internalValue;
  }

  // track_app_rule_list - computed: false, optional: true, required: false
  private _trackAppRuleList = new DataThunderRuleSetOperTrackAppRuleListStructOutputReference(this, "track_app_rule_list");
  public get trackAppRuleList() {
    return this._trackAppRuleList;
  }
  public putTrackAppRuleList(value: DataThunderRuleSetOperTrackAppRuleListStruct) {
    this._trackAppRuleList.internalValue = value;
  }
  public resetTrackAppRuleList() {
    this._trackAppRuleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackAppRuleListInput() {
    return this._trackAppRuleList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      application: dataThunderRuleSetOperApplicationToTerraform(this._application.internalValue),
      oper: dataThunderRuleSetOperOperToTerraform(this._oper.internalValue),
      rule_list: cdktf.listMapper(dataThunderRuleSetOperRuleListStructToTerraform, true)(this._ruleList.internalValue),
      rules_by_zone: dataThunderRuleSetOperRulesByZoneToTerraform(this._rulesByZone.internalValue),
      track_app_rule_list: dataThunderRuleSetOperTrackAppRuleListStructToTerraform(this._trackAppRuleList.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application: {
        value: dataThunderRuleSetOperApplicationToHclTerraform(this._application.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderRuleSetOperApplicationList",
      },
      oper: {
        value: dataThunderRuleSetOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderRuleSetOperOperList",
      },
      rule_list: {
        value: cdktf.listMapperHcl(dataThunderRuleSetOperRuleListStructToHclTerraform, true)(this._ruleList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderRuleSetOperRuleListStructList",
      },
      rules_by_zone: {
        value: dataThunderRuleSetOperRulesByZoneToHclTerraform(this._rulesByZone.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderRuleSetOperRulesByZoneList",
      },
      track_app_rule_list: {
        value: dataThunderRuleSetOperTrackAppRuleListStructToHclTerraform(this._trackAppRuleList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderRuleSetOperTrackAppRuleListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
