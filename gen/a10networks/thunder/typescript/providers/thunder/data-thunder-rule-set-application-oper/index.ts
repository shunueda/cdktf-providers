// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_application_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderRuleSetApplicationOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_application_oper#id DataThunderRuleSetApplicationOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_application_oper#name DataThunderRuleSetApplicationOper#name}
  */
  readonly name: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_application_oper#oper DataThunderRuleSetApplicationOper#oper}
  */
  readonly oper?: DataThunderRuleSetApplicationOperOper;
}
export interface DataThunderRuleSetApplicationOperOperRuleListStatListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_application_oper#bytes DataThunderRuleSetApplicationOper#bytes}
  */
  readonly bytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_application_oper#category DataThunderRuleSetApplicationOper#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_application_oper#conns DataThunderRuleSetApplicationOper#conns}
  */
  readonly conns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_application_oper#name DataThunderRuleSetApplicationOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_application_oper#type DataThunderRuleSetApplicationOper#type}
  */
  readonly type?: string;
}

export function dataThunderRuleSetApplicationOperOperRuleListStatListStructToTerraform(struct?: DataThunderRuleSetApplicationOperOperRuleListStatListStruct | cdktf.IResolvable): any {
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


export function dataThunderRuleSetApplicationOperOperRuleListStatListStructToHclTerraform(struct?: DataThunderRuleSetApplicationOperOperRuleListStatListStruct | cdktf.IResolvable): any {
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

export class DataThunderRuleSetApplicationOperOperRuleListStatListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderRuleSetApplicationOperOperRuleListStatListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderRuleSetApplicationOperOperRuleListStatListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderRuleSetApplicationOperOperRuleListStatListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderRuleSetApplicationOperOperRuleListStatListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderRuleSetApplicationOperOperRuleListStatListStructOutputReference {
    return new DataThunderRuleSetApplicationOperOperRuleListStatListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderRuleSetApplicationOperOperRuleListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_application_oper#name DataThunderRuleSetApplicationOper#name}
  */
  readonly name?: string;
  /**
  * stat_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_application_oper#stat_list DataThunderRuleSetApplicationOper#stat_list}
  */
  readonly statList?: DataThunderRuleSetApplicationOperOperRuleListStatListStruct[] | cdktf.IResolvable;
}

export function dataThunderRuleSetApplicationOperOperRuleListStructToTerraform(struct?: DataThunderRuleSetApplicationOperOperRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    stat_list: cdktf.listMapper(dataThunderRuleSetApplicationOperOperRuleListStatListStructToTerraform, true)(struct!.statList),
  }
}


export function dataThunderRuleSetApplicationOperOperRuleListStructToHclTerraform(struct?: DataThunderRuleSetApplicationOperOperRuleListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataThunderRuleSetApplicationOperOperRuleListStatListStructToHclTerraform, true)(struct!.statList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRuleSetApplicationOperOperRuleListStatListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetApplicationOperOperRuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderRuleSetApplicationOperOperRuleListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderRuleSetApplicationOperOperRuleListStruct | cdktf.IResolvable | undefined) {
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
  private _statList = new DataThunderRuleSetApplicationOperOperRuleListStatListStructList(this, "stat_list", false);
  public get statList() {
    return this._statList;
  }
  public putStatList(value: DataThunderRuleSetApplicationOperOperRuleListStatListStruct[] | cdktf.IResolvable) {
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

export class DataThunderRuleSetApplicationOperOperRuleListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderRuleSetApplicationOperOperRuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderRuleSetApplicationOperOperRuleListStructOutputReference {
    return new DataThunderRuleSetApplicationOperOperRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderRuleSetApplicationOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_application_oper#app_stat DataThunderRuleSetApplicationOper#app_stat}
  */
  readonly appStat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_application_oper#category_stat DataThunderRuleSetApplicationOper#category_stat}
  */
  readonly categoryStat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_application_oper#protocol DataThunderRuleSetApplicationOper#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_application_oper#rule DataThunderRuleSetApplicationOper#rule}
  */
  readonly rule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_application_oper#rule_set_only DataThunderRuleSetApplicationOper#rule_set_only}
  */
  readonly ruleSetOnly?: number;
  /**
  * rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_application_oper#rule_list DataThunderRuleSetApplicationOper#rule_list}
  */
  readonly ruleList?: DataThunderRuleSetApplicationOperOperRuleListStruct[] | cdktf.IResolvable;
}

export function dataThunderRuleSetApplicationOperOperToTerraform(struct?: DataThunderRuleSetApplicationOperOperOutputReference | DataThunderRuleSetApplicationOperOper): any {
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
    rule_list: cdktf.listMapper(dataThunderRuleSetApplicationOperOperRuleListStructToTerraform, true)(struct!.ruleList),
  }
}


export function dataThunderRuleSetApplicationOperOperToHclTerraform(struct?: DataThunderRuleSetApplicationOperOperOutputReference | DataThunderRuleSetApplicationOperOper): any {
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
      value: cdktf.listMapperHcl(dataThunderRuleSetApplicationOperOperRuleListStructToHclTerraform, true)(struct!.ruleList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRuleSetApplicationOperOperRuleListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetApplicationOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRuleSetApplicationOperOper | undefined {
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

  public set internalValue(value: DataThunderRuleSetApplicationOperOper | undefined) {
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
  private _ruleList = new DataThunderRuleSetApplicationOperOperRuleListStructList(this, "rule_list", false);
  public get ruleList() {
    return this._ruleList;
  }
  public putRuleList(value: DataThunderRuleSetApplicationOperOperRuleListStruct[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_application_oper thunder_rule_set_application_oper}
*/
export class DataThunderRuleSetApplicationOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_rule_set_application_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderRuleSetApplicationOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderRuleSetApplicationOper to import
  * @param importFromId The id of the existing DataThunderRuleSetApplicationOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_application_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderRuleSetApplicationOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_rule_set_application_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_application_oper thunder_rule_set_application_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderRuleSetApplicationOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderRuleSetApplicationOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_rule_set_application_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderRuleSetApplicationOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderRuleSetApplicationOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      oper: dataThunderRuleSetApplicationOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderRuleSetApplicationOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderRuleSetApplicationOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
