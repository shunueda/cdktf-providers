// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFwResourceUsageOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#id DataThunderFwResourceUsageOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#oper DataThunderFwResourceUsageOper#oper}
  */
  readonly oper?: DataThunderFwResourceUsageOperOper;
}
export interface DataThunderFwResourceUsageOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#clause_per_obj_grp DataThunderFwResourceUsageOper#clause_per_obj_grp}
  */
  readonly clausePerObjGrp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#clause_per_obj_grp_current_count DataThunderFwResourceUsageOper#clause_per_obj_grp_current_count}
  */
  readonly clausePerObjGrpCurrentCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#clause_per_obj_grp_total_count DataThunderFwResourceUsageOper#clause_per_obj_grp_total_count}
  */
  readonly clausePerObjGrpTotalCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#fw_helper_sessions_current_count DataThunderFwResourceUsageOper#fw_helper_sessions_current_count}
  */
  readonly fwHelperSessionsCurrentCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#fw_helper_sessions_total_count DataThunderFwResourceUsageOper#fw_helper_sessions_total_count}
  */
  readonly fwHelperSessionsTotalCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#fw_ip_range_current_count DataThunderFwResourceUsageOper#fw_ip_range_current_count}
  */
  readonly fwIpRangeCurrentCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#fw_ip_range_total_count DataThunderFwResourceUsageOper#fw_ip_range_total_count}
  */
  readonly fwIpRangeTotalCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#fw_object_current_count DataThunderFwResourceUsageOper#fw_object_current_count}
  */
  readonly fwObjectCurrentCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#fw_object_group_current_count DataThunderFwResourceUsageOper#fw_object_group_current_count}
  */
  readonly fwObjectGroupCurrentCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#fw_object_group_total_count DataThunderFwResourceUsageOper#fw_object_group_total_count}
  */
  readonly fwObjectGroupTotalCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#fw_object_total_count DataThunderFwResourceUsageOper#fw_object_total_count}
  */
  readonly fwObjectTotalCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#fw_rule_current_count DataThunderFwResourceUsageOper#fw_rule_current_count}
  */
  readonly fwRuleCurrentCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#fw_rule_set_current_count DataThunderFwResourceUsageOper#fw_rule_set_current_count}
  */
  readonly fwRuleSetCurrentCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#fw_rule_set_total_count DataThunderFwResourceUsageOper#fw_rule_set_total_count}
  */
  readonly fwRuleSetTotalCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#fw_rule_total_count DataThunderFwResourceUsageOper#fw_rule_total_count}
  */
  readonly fwRuleTotalCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#fw_zone_current_count DataThunderFwResourceUsageOper#fw_zone_current_count}
  */
  readonly fwZoneCurrentCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#fw_zone_total_count DataThunderFwResourceUsageOper#fw_zone_total_count}
  */
  readonly fwZoneTotalCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#helper_sessions DataThunderFwResourceUsageOper#helper_sessions}
  */
  readonly helperSessions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#ip_range DataThunderFwResourceUsageOper#ip_range}
  */
  readonly ipRange?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#object DataThunderFwResourceUsageOper#object}
  */
  readonly object?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#object_group DataThunderFwResourceUsageOper#object_group}
  */
  readonly objectGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#radius_table_current_count DataThunderFwResourceUsageOper#radius_table_current_count}
  */
  readonly radiusTableCurrentCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#radius_table_size DataThunderFwResourceUsageOper#radius_table_size}
  */
  readonly radiusTableSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#radius_table_total_count DataThunderFwResourceUsageOper#radius_table_total_count}
  */
  readonly radiusTableTotalCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#rule DataThunderFwResourceUsageOper#rule}
  */
  readonly rule?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#rule_set DataThunderFwResourceUsageOper#rule_set}
  */
  readonly ruleSet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#zone DataThunderFwResourceUsageOper#zone}
  */
  readonly zone?: number;
}

export function dataThunderFwResourceUsageOperOperToTerraform(struct?: DataThunderFwResourceUsageOperOperOutputReference | DataThunderFwResourceUsageOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clause_per_obj_grp: cdktf.numberToTerraform(struct!.clausePerObjGrp),
    clause_per_obj_grp_current_count: cdktf.stringToTerraform(struct!.clausePerObjGrpCurrentCount),
    clause_per_obj_grp_total_count: cdktf.numberToTerraform(struct!.clausePerObjGrpTotalCount),
    fw_helper_sessions_current_count: cdktf.numberToTerraform(struct!.fwHelperSessionsCurrentCount),
    fw_helper_sessions_total_count: cdktf.numberToTerraform(struct!.fwHelperSessionsTotalCount),
    fw_ip_range_current_count: cdktf.numberToTerraform(struct!.fwIpRangeCurrentCount),
    fw_ip_range_total_count: cdktf.numberToTerraform(struct!.fwIpRangeTotalCount),
    fw_object_current_count: cdktf.numberToTerraform(struct!.fwObjectCurrentCount),
    fw_object_group_current_count: cdktf.numberToTerraform(struct!.fwObjectGroupCurrentCount),
    fw_object_group_total_count: cdktf.numberToTerraform(struct!.fwObjectGroupTotalCount),
    fw_object_total_count: cdktf.numberToTerraform(struct!.fwObjectTotalCount),
    fw_rule_current_count: cdktf.numberToTerraform(struct!.fwRuleCurrentCount),
    fw_rule_set_current_count: cdktf.numberToTerraform(struct!.fwRuleSetCurrentCount),
    fw_rule_set_total_count: cdktf.numberToTerraform(struct!.fwRuleSetTotalCount),
    fw_rule_total_count: cdktf.numberToTerraform(struct!.fwRuleTotalCount),
    fw_zone_current_count: cdktf.numberToTerraform(struct!.fwZoneCurrentCount),
    fw_zone_total_count: cdktf.numberToTerraform(struct!.fwZoneTotalCount),
    helper_sessions: cdktf.numberToTerraform(struct!.helperSessions),
    ip_range: cdktf.numberToTerraform(struct!.ipRange),
    object: cdktf.numberToTerraform(struct!.object),
    object_group: cdktf.numberToTerraform(struct!.objectGroup),
    radius_table_current_count: cdktf.numberToTerraform(struct!.radiusTableCurrentCount),
    radius_table_size: cdktf.numberToTerraform(struct!.radiusTableSize),
    radius_table_total_count: cdktf.numberToTerraform(struct!.radiusTableTotalCount),
    rule: cdktf.numberToTerraform(struct!.rule),
    rule_set: cdktf.numberToTerraform(struct!.ruleSet),
    zone: cdktf.numberToTerraform(struct!.zone),
  }
}


export function dataThunderFwResourceUsageOperOperToHclTerraform(struct?: DataThunderFwResourceUsageOperOperOutputReference | DataThunderFwResourceUsageOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clause_per_obj_grp: {
      value: cdktf.numberToHclTerraform(struct!.clausePerObjGrp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clause_per_obj_grp_current_count: {
      value: cdktf.stringToHclTerraform(struct!.clausePerObjGrpCurrentCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clause_per_obj_grp_total_count: {
      value: cdktf.numberToHclTerraform(struct!.clausePerObjGrpTotalCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_helper_sessions_current_count: {
      value: cdktf.numberToHclTerraform(struct!.fwHelperSessionsCurrentCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_helper_sessions_total_count: {
      value: cdktf.numberToHclTerraform(struct!.fwHelperSessionsTotalCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_ip_range_current_count: {
      value: cdktf.numberToHclTerraform(struct!.fwIpRangeCurrentCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_ip_range_total_count: {
      value: cdktf.numberToHclTerraform(struct!.fwIpRangeTotalCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_object_current_count: {
      value: cdktf.numberToHclTerraform(struct!.fwObjectCurrentCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_object_group_current_count: {
      value: cdktf.numberToHclTerraform(struct!.fwObjectGroupCurrentCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_object_group_total_count: {
      value: cdktf.numberToHclTerraform(struct!.fwObjectGroupTotalCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_object_total_count: {
      value: cdktf.numberToHclTerraform(struct!.fwObjectTotalCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_rule_current_count: {
      value: cdktf.numberToHclTerraform(struct!.fwRuleCurrentCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_rule_set_current_count: {
      value: cdktf.numberToHclTerraform(struct!.fwRuleSetCurrentCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_rule_set_total_count: {
      value: cdktf.numberToHclTerraform(struct!.fwRuleSetTotalCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_rule_total_count: {
      value: cdktf.numberToHclTerraform(struct!.fwRuleTotalCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_zone_current_count: {
      value: cdktf.numberToHclTerraform(struct!.fwZoneCurrentCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_zone_total_count: {
      value: cdktf.numberToHclTerraform(struct!.fwZoneTotalCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    helper_sessions: {
      value: cdktf.numberToHclTerraform(struct!.helperSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_range: {
      value: cdktf.numberToHclTerraform(struct!.ipRange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object: {
      value: cdktf.numberToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_group: {
      value: cdktf.numberToHclTerraform(struct!.objectGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_table_current_count: {
      value: cdktf.numberToHclTerraform(struct!.radiusTableCurrentCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_table_size: {
      value: cdktf.numberToHclTerraform(struct!.radiusTableSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_table_total_count: {
      value: cdktf.numberToHclTerraform(struct!.radiusTableTotalCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule: {
      value: cdktf.numberToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_set: {
      value: cdktf.numberToHclTerraform(struct!.ruleSet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone: {
      value: cdktf.numberToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwResourceUsageOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwResourceUsageOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clausePerObjGrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clausePerObjGrp = this._clausePerObjGrp;
    }
    if (this._clausePerObjGrpCurrentCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.clausePerObjGrpCurrentCount = this._clausePerObjGrpCurrentCount;
    }
    if (this._clausePerObjGrpTotalCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.clausePerObjGrpTotalCount = this._clausePerObjGrpTotalCount;
    }
    if (this._fwHelperSessionsCurrentCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwHelperSessionsCurrentCount = this._fwHelperSessionsCurrentCount;
    }
    if (this._fwHelperSessionsTotalCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwHelperSessionsTotalCount = this._fwHelperSessionsTotalCount;
    }
    if (this._fwIpRangeCurrentCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwIpRangeCurrentCount = this._fwIpRangeCurrentCount;
    }
    if (this._fwIpRangeTotalCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwIpRangeTotalCount = this._fwIpRangeTotalCount;
    }
    if (this._fwObjectCurrentCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwObjectCurrentCount = this._fwObjectCurrentCount;
    }
    if (this._fwObjectGroupCurrentCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwObjectGroupCurrentCount = this._fwObjectGroupCurrentCount;
    }
    if (this._fwObjectGroupTotalCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwObjectGroupTotalCount = this._fwObjectGroupTotalCount;
    }
    if (this._fwObjectTotalCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwObjectTotalCount = this._fwObjectTotalCount;
    }
    if (this._fwRuleCurrentCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwRuleCurrentCount = this._fwRuleCurrentCount;
    }
    if (this._fwRuleSetCurrentCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwRuleSetCurrentCount = this._fwRuleSetCurrentCount;
    }
    if (this._fwRuleSetTotalCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwRuleSetTotalCount = this._fwRuleSetTotalCount;
    }
    if (this._fwRuleTotalCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwRuleTotalCount = this._fwRuleTotalCount;
    }
    if (this._fwZoneCurrentCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwZoneCurrentCount = this._fwZoneCurrentCount;
    }
    if (this._fwZoneTotalCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwZoneTotalCount = this._fwZoneTotalCount;
    }
    if (this._helperSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.helperSessions = this._helperSessions;
    }
    if (this._ipRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRange = this._ipRange;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._objectGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectGroup = this._objectGroup;
    }
    if (this._radiusTableCurrentCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusTableCurrentCount = this._radiusTableCurrentCount;
    }
    if (this._radiusTableSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusTableSize = this._radiusTableSize;
    }
    if (this._radiusTableTotalCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusTableTotalCount = this._radiusTableTotalCount;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._ruleSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleSet = this._ruleSet;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwResourceUsageOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clausePerObjGrp = undefined;
      this._clausePerObjGrpCurrentCount = undefined;
      this._clausePerObjGrpTotalCount = undefined;
      this._fwHelperSessionsCurrentCount = undefined;
      this._fwHelperSessionsTotalCount = undefined;
      this._fwIpRangeCurrentCount = undefined;
      this._fwIpRangeTotalCount = undefined;
      this._fwObjectCurrentCount = undefined;
      this._fwObjectGroupCurrentCount = undefined;
      this._fwObjectGroupTotalCount = undefined;
      this._fwObjectTotalCount = undefined;
      this._fwRuleCurrentCount = undefined;
      this._fwRuleSetCurrentCount = undefined;
      this._fwRuleSetTotalCount = undefined;
      this._fwRuleTotalCount = undefined;
      this._fwZoneCurrentCount = undefined;
      this._fwZoneTotalCount = undefined;
      this._helperSessions = undefined;
      this._ipRange = undefined;
      this._object = undefined;
      this._objectGroup = undefined;
      this._radiusTableCurrentCount = undefined;
      this._radiusTableSize = undefined;
      this._radiusTableTotalCount = undefined;
      this._rule = undefined;
      this._ruleSet = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clausePerObjGrp = value.clausePerObjGrp;
      this._clausePerObjGrpCurrentCount = value.clausePerObjGrpCurrentCount;
      this._clausePerObjGrpTotalCount = value.clausePerObjGrpTotalCount;
      this._fwHelperSessionsCurrentCount = value.fwHelperSessionsCurrentCount;
      this._fwHelperSessionsTotalCount = value.fwHelperSessionsTotalCount;
      this._fwIpRangeCurrentCount = value.fwIpRangeCurrentCount;
      this._fwIpRangeTotalCount = value.fwIpRangeTotalCount;
      this._fwObjectCurrentCount = value.fwObjectCurrentCount;
      this._fwObjectGroupCurrentCount = value.fwObjectGroupCurrentCount;
      this._fwObjectGroupTotalCount = value.fwObjectGroupTotalCount;
      this._fwObjectTotalCount = value.fwObjectTotalCount;
      this._fwRuleCurrentCount = value.fwRuleCurrentCount;
      this._fwRuleSetCurrentCount = value.fwRuleSetCurrentCount;
      this._fwRuleSetTotalCount = value.fwRuleSetTotalCount;
      this._fwRuleTotalCount = value.fwRuleTotalCount;
      this._fwZoneCurrentCount = value.fwZoneCurrentCount;
      this._fwZoneTotalCount = value.fwZoneTotalCount;
      this._helperSessions = value.helperSessions;
      this._ipRange = value.ipRange;
      this._object = value.object;
      this._objectGroup = value.objectGroup;
      this._radiusTableCurrentCount = value.radiusTableCurrentCount;
      this._radiusTableSize = value.radiusTableSize;
      this._radiusTableTotalCount = value.radiusTableTotalCount;
      this._rule = value.rule;
      this._ruleSet = value.ruleSet;
      this._zone = value.zone;
    }
  }

  // clause_per_obj_grp - computed: false, optional: true, required: false
  private _clausePerObjGrp?: number; 
  public get clausePerObjGrp() {
    return this.getNumberAttribute('clause_per_obj_grp');
  }
  public set clausePerObjGrp(value: number) {
    this._clausePerObjGrp = value;
  }
  public resetClausePerObjGrp() {
    this._clausePerObjGrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clausePerObjGrpInput() {
    return this._clausePerObjGrp;
  }

  // clause_per_obj_grp_current_count - computed: false, optional: true, required: false
  private _clausePerObjGrpCurrentCount?: string; 
  public get clausePerObjGrpCurrentCount() {
    return this.getStringAttribute('clause_per_obj_grp_current_count');
  }
  public set clausePerObjGrpCurrentCount(value: string) {
    this._clausePerObjGrpCurrentCount = value;
  }
  public resetClausePerObjGrpCurrentCount() {
    this._clausePerObjGrpCurrentCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clausePerObjGrpCurrentCountInput() {
    return this._clausePerObjGrpCurrentCount;
  }

  // clause_per_obj_grp_total_count - computed: false, optional: true, required: false
  private _clausePerObjGrpTotalCount?: number; 
  public get clausePerObjGrpTotalCount() {
    return this.getNumberAttribute('clause_per_obj_grp_total_count');
  }
  public set clausePerObjGrpTotalCount(value: number) {
    this._clausePerObjGrpTotalCount = value;
  }
  public resetClausePerObjGrpTotalCount() {
    this._clausePerObjGrpTotalCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clausePerObjGrpTotalCountInput() {
    return this._clausePerObjGrpTotalCount;
  }

  // fw_helper_sessions_current_count - computed: false, optional: true, required: false
  private _fwHelperSessionsCurrentCount?: number; 
  public get fwHelperSessionsCurrentCount() {
    return this.getNumberAttribute('fw_helper_sessions_current_count');
  }
  public set fwHelperSessionsCurrentCount(value: number) {
    this._fwHelperSessionsCurrentCount = value;
  }
  public resetFwHelperSessionsCurrentCount() {
    this._fwHelperSessionsCurrentCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwHelperSessionsCurrentCountInput() {
    return this._fwHelperSessionsCurrentCount;
  }

  // fw_helper_sessions_total_count - computed: false, optional: true, required: false
  private _fwHelperSessionsTotalCount?: number; 
  public get fwHelperSessionsTotalCount() {
    return this.getNumberAttribute('fw_helper_sessions_total_count');
  }
  public set fwHelperSessionsTotalCount(value: number) {
    this._fwHelperSessionsTotalCount = value;
  }
  public resetFwHelperSessionsTotalCount() {
    this._fwHelperSessionsTotalCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwHelperSessionsTotalCountInput() {
    return this._fwHelperSessionsTotalCount;
  }

  // fw_ip_range_current_count - computed: false, optional: true, required: false
  private _fwIpRangeCurrentCount?: number; 
  public get fwIpRangeCurrentCount() {
    return this.getNumberAttribute('fw_ip_range_current_count');
  }
  public set fwIpRangeCurrentCount(value: number) {
    this._fwIpRangeCurrentCount = value;
  }
  public resetFwIpRangeCurrentCount() {
    this._fwIpRangeCurrentCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwIpRangeCurrentCountInput() {
    return this._fwIpRangeCurrentCount;
  }

  // fw_ip_range_total_count - computed: false, optional: true, required: false
  private _fwIpRangeTotalCount?: number; 
  public get fwIpRangeTotalCount() {
    return this.getNumberAttribute('fw_ip_range_total_count');
  }
  public set fwIpRangeTotalCount(value: number) {
    this._fwIpRangeTotalCount = value;
  }
  public resetFwIpRangeTotalCount() {
    this._fwIpRangeTotalCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwIpRangeTotalCountInput() {
    return this._fwIpRangeTotalCount;
  }

  // fw_object_current_count - computed: false, optional: true, required: false
  private _fwObjectCurrentCount?: number; 
  public get fwObjectCurrentCount() {
    return this.getNumberAttribute('fw_object_current_count');
  }
  public set fwObjectCurrentCount(value: number) {
    this._fwObjectCurrentCount = value;
  }
  public resetFwObjectCurrentCount() {
    this._fwObjectCurrentCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwObjectCurrentCountInput() {
    return this._fwObjectCurrentCount;
  }

  // fw_object_group_current_count - computed: false, optional: true, required: false
  private _fwObjectGroupCurrentCount?: number; 
  public get fwObjectGroupCurrentCount() {
    return this.getNumberAttribute('fw_object_group_current_count');
  }
  public set fwObjectGroupCurrentCount(value: number) {
    this._fwObjectGroupCurrentCount = value;
  }
  public resetFwObjectGroupCurrentCount() {
    this._fwObjectGroupCurrentCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwObjectGroupCurrentCountInput() {
    return this._fwObjectGroupCurrentCount;
  }

  // fw_object_group_total_count - computed: false, optional: true, required: false
  private _fwObjectGroupTotalCount?: number; 
  public get fwObjectGroupTotalCount() {
    return this.getNumberAttribute('fw_object_group_total_count');
  }
  public set fwObjectGroupTotalCount(value: number) {
    this._fwObjectGroupTotalCount = value;
  }
  public resetFwObjectGroupTotalCount() {
    this._fwObjectGroupTotalCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwObjectGroupTotalCountInput() {
    return this._fwObjectGroupTotalCount;
  }

  // fw_object_total_count - computed: false, optional: true, required: false
  private _fwObjectTotalCount?: number; 
  public get fwObjectTotalCount() {
    return this.getNumberAttribute('fw_object_total_count');
  }
  public set fwObjectTotalCount(value: number) {
    this._fwObjectTotalCount = value;
  }
  public resetFwObjectTotalCount() {
    this._fwObjectTotalCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwObjectTotalCountInput() {
    return this._fwObjectTotalCount;
  }

  // fw_rule_current_count - computed: false, optional: true, required: false
  private _fwRuleCurrentCount?: number; 
  public get fwRuleCurrentCount() {
    return this.getNumberAttribute('fw_rule_current_count');
  }
  public set fwRuleCurrentCount(value: number) {
    this._fwRuleCurrentCount = value;
  }
  public resetFwRuleCurrentCount() {
    this._fwRuleCurrentCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwRuleCurrentCountInput() {
    return this._fwRuleCurrentCount;
  }

  // fw_rule_set_current_count - computed: false, optional: true, required: false
  private _fwRuleSetCurrentCount?: number; 
  public get fwRuleSetCurrentCount() {
    return this.getNumberAttribute('fw_rule_set_current_count');
  }
  public set fwRuleSetCurrentCount(value: number) {
    this._fwRuleSetCurrentCount = value;
  }
  public resetFwRuleSetCurrentCount() {
    this._fwRuleSetCurrentCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwRuleSetCurrentCountInput() {
    return this._fwRuleSetCurrentCount;
  }

  // fw_rule_set_total_count - computed: false, optional: true, required: false
  private _fwRuleSetTotalCount?: number; 
  public get fwRuleSetTotalCount() {
    return this.getNumberAttribute('fw_rule_set_total_count');
  }
  public set fwRuleSetTotalCount(value: number) {
    this._fwRuleSetTotalCount = value;
  }
  public resetFwRuleSetTotalCount() {
    this._fwRuleSetTotalCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwRuleSetTotalCountInput() {
    return this._fwRuleSetTotalCount;
  }

  // fw_rule_total_count - computed: false, optional: true, required: false
  private _fwRuleTotalCount?: number; 
  public get fwRuleTotalCount() {
    return this.getNumberAttribute('fw_rule_total_count');
  }
  public set fwRuleTotalCount(value: number) {
    this._fwRuleTotalCount = value;
  }
  public resetFwRuleTotalCount() {
    this._fwRuleTotalCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwRuleTotalCountInput() {
    return this._fwRuleTotalCount;
  }

  // fw_zone_current_count - computed: false, optional: true, required: false
  private _fwZoneCurrentCount?: number; 
  public get fwZoneCurrentCount() {
    return this.getNumberAttribute('fw_zone_current_count');
  }
  public set fwZoneCurrentCount(value: number) {
    this._fwZoneCurrentCount = value;
  }
  public resetFwZoneCurrentCount() {
    this._fwZoneCurrentCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwZoneCurrentCountInput() {
    return this._fwZoneCurrentCount;
  }

  // fw_zone_total_count - computed: false, optional: true, required: false
  private _fwZoneTotalCount?: number; 
  public get fwZoneTotalCount() {
    return this.getNumberAttribute('fw_zone_total_count');
  }
  public set fwZoneTotalCount(value: number) {
    this._fwZoneTotalCount = value;
  }
  public resetFwZoneTotalCount() {
    this._fwZoneTotalCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwZoneTotalCountInput() {
    return this._fwZoneTotalCount;
  }

  // helper_sessions - computed: false, optional: true, required: false
  private _helperSessions?: number; 
  public get helperSessions() {
    return this.getNumberAttribute('helper_sessions');
  }
  public set helperSessions(value: number) {
    this._helperSessions = value;
  }
  public resetHelperSessions() {
    this._helperSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helperSessionsInput() {
    return this._helperSessions;
  }

  // ip_range - computed: false, optional: true, required: false
  private _ipRange?: number; 
  public get ipRange() {
    return this.getNumberAttribute('ip_range');
  }
  public set ipRange(value: number) {
    this._ipRange = value;
  }
  public resetIpRange() {
    this._ipRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange;
  }

  // object - computed: false, optional: true, required: false
  private _object?: number; 
  public get object() {
    return this.getNumberAttribute('object');
  }
  public set object(value: number) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // object_group - computed: false, optional: true, required: false
  private _objectGroup?: number; 
  public get objectGroup() {
    return this.getNumberAttribute('object_group');
  }
  public set objectGroup(value: number) {
    this._objectGroup = value;
  }
  public resetObjectGroup() {
    this._objectGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectGroupInput() {
    return this._objectGroup;
  }

  // radius_table_current_count - computed: false, optional: true, required: false
  private _radiusTableCurrentCount?: number; 
  public get radiusTableCurrentCount() {
    return this.getNumberAttribute('radius_table_current_count');
  }
  public set radiusTableCurrentCount(value: number) {
    this._radiusTableCurrentCount = value;
  }
  public resetRadiusTableCurrentCount() {
    this._radiusTableCurrentCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusTableCurrentCountInput() {
    return this._radiusTableCurrentCount;
  }

  // radius_table_size - computed: false, optional: true, required: false
  private _radiusTableSize?: number; 
  public get radiusTableSize() {
    return this.getNumberAttribute('radius_table_size');
  }
  public set radiusTableSize(value: number) {
    this._radiusTableSize = value;
  }
  public resetRadiusTableSize() {
    this._radiusTableSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusTableSizeInput() {
    return this._radiusTableSize;
  }

  // radius_table_total_count - computed: false, optional: true, required: false
  private _radiusTableTotalCount?: number; 
  public get radiusTableTotalCount() {
    return this.getNumberAttribute('radius_table_total_count');
  }
  public set radiusTableTotalCount(value: number) {
    this._radiusTableTotalCount = value;
  }
  public resetRadiusTableTotalCount() {
    this._radiusTableTotalCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusTableTotalCountInput() {
    return this._radiusTableTotalCount;
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: number; 
  public get rule() {
    return this.getNumberAttribute('rule');
  }
  public set rule(value: number) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // rule_set - computed: false, optional: true, required: false
  private _ruleSet?: number; 
  public get ruleSet() {
    return this.getNumberAttribute('rule_set');
  }
  public set ruleSet(value: number) {
    this._ruleSet = value;
  }
  public resetRuleSet() {
    this._ruleSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetInput() {
    return this._ruleSet;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: number; 
  public get zone() {
    return this.getNumberAttribute('zone');
  }
  public set zone(value: number) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper thunder_fw_resource_usage_oper}
*/
export class DataThunderFwResourceUsageOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_resource_usage_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFwResourceUsageOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFwResourceUsageOper to import
  * @param importFromId The id of the existing DataThunderFwResourceUsageOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFwResourceUsageOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_resource_usage_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_resource_usage_oper thunder_fw_resource_usage_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFwResourceUsageOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderFwResourceUsageOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_resource_usage_oper',
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderFwResourceUsageOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderFwResourceUsageOperOper) {
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
      oper: dataThunderFwResourceUsageOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderFwResourceUsageOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwResourceUsageOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
