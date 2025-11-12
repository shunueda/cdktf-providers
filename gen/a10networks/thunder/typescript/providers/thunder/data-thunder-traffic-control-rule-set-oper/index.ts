// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/traffic_control_rule_set_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderTrafficControlRuleSetOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/traffic_control_rule_set_oper#id DataThunderTrafficControlRuleSetOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rule set name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/traffic_control_rule_set_oper#name DataThunderTrafficControlRuleSetOper#name}
  */
  readonly name: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/traffic_control_rule_set_oper#oper DataThunderTrafficControlRuleSetOper#oper}
  */
  readonly oper?: DataThunderTrafficControlRuleSetOperOper;
  /**
  * rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/traffic_control_rule_set_oper#rule_list DataThunderTrafficControlRuleSetOper#rule_list}
  */
  readonly ruleList?: DataThunderTrafficControlRuleSetOperRuleListStruct[] | cdktf.IResolvable;
}
export interface DataThunderTrafficControlRuleSetOperOperRuleStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/traffic_control_rule_set_oper#rule_hitcount DataThunderTrafficControlRuleSetOper#rule_hitcount}
  */
  readonly ruleHitcount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/traffic_control_rule_set_oper#rule_name DataThunderTrafficControlRuleSetOper#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/traffic_control_rule_set_oper#rule_status DataThunderTrafficControlRuleSetOper#rule_status}
  */
  readonly ruleStatus?: string;
}

export function dataThunderTrafficControlRuleSetOperOperRuleStatsToTerraform(struct?: DataThunderTrafficControlRuleSetOperOperRuleStats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_hitcount: cdktf.numberToTerraform(struct!.ruleHitcount),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    rule_status: cdktf.stringToTerraform(struct!.ruleStatus),
  }
}


export function dataThunderTrafficControlRuleSetOperOperRuleStatsToHclTerraform(struct?: DataThunderTrafficControlRuleSetOperOperRuleStats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataThunderTrafficControlRuleSetOperOperRuleStatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderTrafficControlRuleSetOperOperRuleStats | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataThunderTrafficControlRuleSetOperOperRuleStats | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._ruleHitcount = value.ruleHitcount;
      this._ruleName = value.ruleName;
      this._ruleStatus = value.ruleStatus;
    }
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

export class DataThunderTrafficControlRuleSetOperOperRuleStatsList extends cdktf.ComplexList {
  public internalValue? : DataThunderTrafficControlRuleSetOperOperRuleStats[] | cdktf.IResolvable

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
  public get(index: number): DataThunderTrafficControlRuleSetOperOperRuleStatsOutputReference {
    return new DataThunderTrafficControlRuleSetOperOperRuleStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderTrafficControlRuleSetOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/traffic_control_rule_set_oper#policy_rule_count DataThunderTrafficControlRuleSetOper#policy_rule_count}
  */
  readonly policyRuleCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/traffic_control_rule_set_oper#policy_status DataThunderTrafficControlRuleSetOper#policy_status}
  */
  readonly policyStatus?: string;
  /**
  * rule_stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/traffic_control_rule_set_oper#rule_stats DataThunderTrafficControlRuleSetOper#rule_stats}
  */
  readonly ruleStats?: DataThunderTrafficControlRuleSetOperOperRuleStats[] | cdktf.IResolvable;
}

export function dataThunderTrafficControlRuleSetOperOperToTerraform(struct?: DataThunderTrafficControlRuleSetOperOperOutputReference | DataThunderTrafficControlRuleSetOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_rule_count: cdktf.numberToTerraform(struct!.policyRuleCount),
    policy_status: cdktf.stringToTerraform(struct!.policyStatus),
    rule_stats: cdktf.listMapper(dataThunderTrafficControlRuleSetOperOperRuleStatsToTerraform, true)(struct!.ruleStats),
  }
}


export function dataThunderTrafficControlRuleSetOperOperToHclTerraform(struct?: DataThunderTrafficControlRuleSetOperOperOutputReference | DataThunderTrafficControlRuleSetOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    rule_stats: {
      value: cdktf.listMapperHcl(dataThunderTrafficControlRuleSetOperOperRuleStatsToHclTerraform, true)(struct!.ruleStats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderTrafficControlRuleSetOperOperRuleStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderTrafficControlRuleSetOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderTrafficControlRuleSetOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyRuleCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyRuleCount = this._policyRuleCount;
    }
    if (this._policyStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyStatus = this._policyStatus;
    }
    if (this._ruleStats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleStats = this._ruleStats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderTrafficControlRuleSetOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policyRuleCount = undefined;
      this._policyStatus = undefined;
      this._ruleStats.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyRuleCount = value.policyRuleCount;
      this._policyStatus = value.policyStatus;
      this._ruleStats.internalValue = value.ruleStats;
    }
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

  // rule_stats - computed: false, optional: true, required: false
  private _ruleStats = new DataThunderTrafficControlRuleSetOperOperRuleStatsList(this, "rule_stats", false);
  public get ruleStats() {
    return this._ruleStats;
  }
  public putRuleStats(value: DataThunderTrafficControlRuleSetOperOperRuleStats[] | cdktf.IResolvable) {
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
export interface DataThunderTrafficControlRuleSetOperRuleListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/traffic_control_rule_set_oper#hitcount DataThunderTrafficControlRuleSetOper#hitcount}
  */
  readonly hitcount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/traffic_control_rule_set_oper#status DataThunderTrafficControlRuleSetOper#status}
  */
  readonly status?: string;
}

export function dataThunderTrafficControlRuleSetOperRuleListOperToTerraform(struct?: DataThunderTrafficControlRuleSetOperRuleListOperOutputReference | DataThunderTrafficControlRuleSetOperRuleListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hitcount: cdktf.numberToTerraform(struct!.hitcount),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataThunderTrafficControlRuleSetOperRuleListOperToHclTerraform(struct?: DataThunderTrafficControlRuleSetOperRuleListOperOutputReference | DataThunderTrafficControlRuleSetOperRuleListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hitcount: {
      value: cdktf.numberToHclTerraform(struct!.hitcount),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderTrafficControlRuleSetOperRuleListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderTrafficControlRuleSetOperRuleListOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hitcount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hitcount = this._hitcount;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderTrafficControlRuleSetOperRuleListOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hitcount = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hitcount = value.hitcount;
      this._status = value.status;
    }
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
}
export interface DataThunderTrafficControlRuleSetOperRuleListStruct {
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/traffic_control_rule_set_oper#name DataThunderTrafficControlRuleSetOper#name}
  */
  readonly name: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/traffic_control_rule_set_oper#oper DataThunderTrafficControlRuleSetOper#oper}
  */
  readonly oper?: DataThunderTrafficControlRuleSetOperRuleListOper;
}

export function dataThunderTrafficControlRuleSetOperRuleListStructToTerraform(struct?: DataThunderTrafficControlRuleSetOperRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    oper: dataThunderTrafficControlRuleSetOperRuleListOperToTerraform(struct!.oper),
  }
}


export function dataThunderTrafficControlRuleSetOperRuleListStructToHclTerraform(struct?: DataThunderTrafficControlRuleSetOperRuleListStruct | cdktf.IResolvable): any {
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
      value: dataThunderTrafficControlRuleSetOperRuleListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderTrafficControlRuleSetOperRuleListOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderTrafficControlRuleSetOperRuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderTrafficControlRuleSetOperRuleListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderTrafficControlRuleSetOperRuleListStruct | cdktf.IResolvable | undefined) {
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
  private _oper = new DataThunderTrafficControlRuleSetOperRuleListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderTrafficControlRuleSetOperRuleListOper) {
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

export class DataThunderTrafficControlRuleSetOperRuleListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderTrafficControlRuleSetOperRuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderTrafficControlRuleSetOperRuleListStructOutputReference {
    return new DataThunderTrafficControlRuleSetOperRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/traffic_control_rule_set_oper thunder_traffic_control_rule_set_oper}
*/
export class DataThunderTrafficControlRuleSetOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_traffic_control_rule_set_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderTrafficControlRuleSetOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderTrafficControlRuleSetOper to import
  * @param importFromId The id of the existing DataThunderTrafficControlRuleSetOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/traffic_control_rule_set_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderTrafficControlRuleSetOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_traffic_control_rule_set_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/traffic_control_rule_set_oper thunder_traffic_control_rule_set_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderTrafficControlRuleSetOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderTrafficControlRuleSetOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_traffic_control_rule_set_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._ruleList.internalValue = config.ruleList;
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
  private _oper = new DataThunderTrafficControlRuleSetOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderTrafficControlRuleSetOperOper) {
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
  private _ruleList = new DataThunderTrafficControlRuleSetOperRuleListStructList(this, "rule_list", false);
  public get ruleList() {
    return this._ruleList;
  }
  public putRuleList(value: DataThunderTrafficControlRuleSetOperRuleListStruct[] | cdktf.IResolvable) {
    this._ruleList.internalValue = value;
  }
  public resetRuleList() {
    this._ruleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleListInput() {
    return this._ruleList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      oper: dataThunderTrafficControlRuleSetOperOperToTerraform(this._oper.internalValue),
      rule_list: cdktf.listMapper(dataThunderTrafficControlRuleSetOperRuleListStructToTerraform, true)(this._ruleList.internalValue),
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
        value: dataThunderTrafficControlRuleSetOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderTrafficControlRuleSetOperOperList",
      },
      rule_list: {
        value: cdktf.listMapperHcl(dataThunderTrafficControlRuleSetOperRuleListStructToHclTerraform, true)(this._ruleList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderTrafficControlRuleSetOperRuleListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
