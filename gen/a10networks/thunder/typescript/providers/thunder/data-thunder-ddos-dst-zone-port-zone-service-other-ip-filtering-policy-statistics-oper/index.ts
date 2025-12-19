// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_other_ip_filtering_policy_statistics_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_other_ip_filtering_policy_statistics_oper#id DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * PortOther
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_other_ip_filtering_policy_statistics_oper#port_other DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOper#port_other}
  */
  readonly portOther: string;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_other_ip_filtering_policy_statistics_oper#protocol DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOper#protocol}
  */
  readonly protocol: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_other_ip_filtering_policy_statistics_oper#zone_name DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOper#zone_name}
  */
  readonly zoneName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_other_ip_filtering_policy_statistics_oper#oper DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOper#oper}
  */
  readonly oper?: DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOper;
}
export interface DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperRuleListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_other_ip_filtering_policy_statistics_oper#blacklisted_src_count DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOper#blacklisted_src_count}
  */
  readonly blacklistedSrcCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_other_ip_filtering_policy_statistics_oper#hits DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_other_ip_filtering_policy_statistics_oper#seq DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOper#seq}
  */
  readonly seq?: number;
}

export function dataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperRuleListStructToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blacklisted_src_count: cdktf.numberToTerraform(struct!.blacklistedSrcCount),
    hits: cdktf.numberToTerraform(struct!.hits),
    seq: cdktf.numberToTerraform(struct!.seq),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperRuleListStructToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blacklisted_src_count: {
      value: cdktf.numberToHclTerraform(struct!.blacklistedSrcCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seq: {
      value: cdktf.numberToHclTerraform(struct!.seq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperRuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperRuleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blacklistedSrcCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.blacklistedSrcCount = this._blacklistedSrcCount;
    }
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    if (this._seq !== undefined) {
      hasAnyValues = true;
      internalValueResult.seq = this._seq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperRuleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blacklistedSrcCount = undefined;
      this._hits = undefined;
      this._seq = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blacklistedSrcCount = value.blacklistedSrcCount;
      this._hits = value.hits;
      this._seq = value.seq;
    }
  }

  // blacklisted_src_count - computed: false, optional: true, required: false
  private _blacklistedSrcCount?: number; 
  public get blacklistedSrcCount() {
    return this.getNumberAttribute('blacklisted_src_count');
  }
  public set blacklistedSrcCount(value: number) {
    this._blacklistedSrcCount = value;
  }
  public resetBlacklistedSrcCount() {
    this._blacklistedSrcCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistedSrcCountInput() {
    return this._blacklistedSrcCount;
  }

  // hits - computed: false, optional: true, required: false
  private _hits?: number; 
  public get hits() {
    return this.getNumberAttribute('hits');
  }
  public set hits(value: number) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
  }

  // seq - computed: false, optional: true, required: false
  private _seq?: number; 
  public get seq() {
    return this.getNumberAttribute('seq');
  }
  public set seq(value: number) {
    this._seq = value;
  }
  public resetSeq() {
    this._seq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqInput() {
    return this._seq;
  }
}

export class DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperRuleListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperRuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperRuleListStructOutputReference {
    return new DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOper {
  /**
  * rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_other_ip_filtering_policy_statistics_oper#rule_list DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOper#rule_list}
  */
  readonly ruleList?: DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperRuleListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperOutputReference | DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_list: cdktf.listMapper(dataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperRuleListStructToTerraform, true)(struct!.ruleList),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperOutputReference | DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperRuleListStructToHclTerraform, true)(struct!.ruleList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperRuleListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleList = this._ruleList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOper | undefined) {
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
  private _ruleList = new DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperRuleListStructList(this, "rule_list", false);
  public get ruleList() {
    return this._ruleList;
  }
  public putRuleList(value: DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperRuleListStruct[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_other_ip_filtering_policy_statistics_oper thunder_ddos_dst_zone_port_zone_service_other_ip_filtering_policy_statistics_oper}
*/
export class DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_port_zone_service_other_ip_filtering_policy_statistics_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOper to import
  * @param importFromId The id of the existing DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_other_ip_filtering_policy_statistics_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_port_zone_service_other_ip_filtering_policy_statistics_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_other_ip_filtering_policy_statistics_oper thunder_ddos_dst_zone_port_zone_service_other_ip_filtering_policy_statistics_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_port_zone_service_other_ip_filtering_policy_statistics_oper',
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
    this._portOther = config.portOther;
    this._protocol = config.protocol;
    this._zoneName = config.zoneName;
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

  // port_other - computed: false, optional: false, required: true
  private _portOther?: string; 
  public get portOther() {
    return this.getStringAttribute('port_other');
  }
  public set portOther(value: string) {
    this._portOther = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portOtherInput() {
    return this._portOther;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOper) {
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
      port_other: cdktf.stringToTerraform(this._portOther),
      protocol: cdktf.stringToTerraform(this._protocol),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      oper: dataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperToTerraform(this._oper.internalValue),
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
      port_other: {
        value: cdktf.stringToHclTerraform(this._portOther),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZonePortZoneServiceOtherIpFilteringPolicyStatisticsOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
