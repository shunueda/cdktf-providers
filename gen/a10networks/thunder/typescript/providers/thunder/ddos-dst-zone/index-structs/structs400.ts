import * as cdktf from 'cdktf';
import { DdosDstZonePortZoneServiceOtherListSrcBasedPolicyListPolicyClassListListStruct,
ddosDstZonePortZoneServiceOtherListSrcBasedPolicyListPolicyClassListListStructToTerraform,
ddosDstZonePortZoneServiceOtherListSrcBasedPolicyListPolicyClassListListStructToHclTerraform,
DdosDstZonePortZoneServiceOtherListSrcBasedPolicyListPolicyClassListListStructList,
DdosDstZonePortZoneServiceOtherListDynamicEntryOverflowPolicyListStruct,
ddosDstZonePortZoneServiceOtherListDynamicEntryOverflowPolicyListStructToTerraform,
ddosDstZonePortZoneServiceOtherListDynamicEntryOverflowPolicyListStructToHclTerraform,
DdosDstZonePortZoneServiceOtherListDynamicEntryOverflowPolicyListStructList,
DdosDstZonePortZoneServiceOtherListGlidCfg,
ddosDstZonePortZoneServiceOtherListGlidCfgToTerraform,
ddosDstZonePortZoneServiceOtherListGlidCfgToHclTerraform,
DdosDstZonePortZoneServiceOtherListGlidCfgOutputReference,
DdosDstZonePortZoneServiceOtherListIpFilteringPolicyOper,
ddosDstZonePortZoneServiceOtherListIpFilteringPolicyOperToTerraform,
ddosDstZonePortZoneServiceOtherListIpFilteringPolicyOperToHclTerraform,
DdosDstZonePortZoneServiceOtherListIpFilteringPolicyOperOutputReference,
DdosDstZonePortZoneServiceOtherListLevelListStruct,
ddosDstZonePortZoneServiceOtherListLevelListStructToTerraform,
ddosDstZonePortZoneServiceOtherListLevelListStructToHclTerraform,
DdosDstZonePortZoneServiceOtherListLevelListStructList,
DdosDstZonePortZoneServiceOtherListManualModeListStruct,
ddosDstZonePortZoneServiceOtherListManualModeListStructToTerraform,
ddosDstZonePortZoneServiceOtherListManualModeListStructToHclTerraform,
DdosDstZonePortZoneServiceOtherListManualModeListStructList,
DdosDstZonePortZoneServiceOtherListPatternRecognition,
ddosDstZonePortZoneServiceOtherListPatternRecognitionToTerraform,
ddosDstZonePortZoneServiceOtherListPatternRecognitionToHclTerraform,
DdosDstZonePortZoneServiceOtherListPatternRecognitionOutputReference,
DdosDstZonePortZoneServiceOtherListPatternRecognitionPuDetails,
ddosDstZonePortZoneServiceOtherListPatternRecognitionPuDetailsToTerraform,
ddosDstZonePortZoneServiceOtherListPatternRecognitionPuDetailsToHclTerraform,
DdosDstZonePortZoneServiceOtherListPatternRecognitionPuDetailsOutputReference,
DdosDstZonePortZoneServiceOtherListPortInd,
ddosDstZonePortZoneServiceOtherListPortIndToTerraform,
ddosDstZonePortZoneServiceOtherListPortIndToHclTerraform,
DdosDstZonePortZoneServiceOtherListPortIndOutputReference,
DdosDstZonePortZoneServiceOtherListProgressionTracking,
ddosDstZonePortZoneServiceOtherListProgressionTrackingToTerraform,
ddosDstZonePortZoneServiceOtherListProgressionTrackingToHclTerraform,
DdosDstZonePortZoneServiceOtherListProgressionTrackingOutputReference,
DdosDstZonePortZoneServiceOtherListSflowTcp,
ddosDstZonePortZoneServiceOtherListSflowTcpToTerraform,
ddosDstZonePortZoneServiceOtherListSflowTcpToHclTerraform,
DdosDstZonePortZoneServiceOtherListSflowTcpOutputReference,
DdosDstZonePortZoneServiceListStruct,
ddosDstZonePortZoneServiceListStructToTerraform,
ddosDstZonePortZoneServiceListStructToHclTerraform,
DdosDstZonePortZoneServiceListStructList } from './structs0'
export interface DdosDstZonePortZoneServiceOtherListSrcBasedPolicyListStruct {
  /**
  * Specify name of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#src_based_policy_name DdosDstZone#src_based_policy_name}
  */
  readonly srcBasedPolicyName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#user_tag DdosDstZone#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
  /**
  * policy_class_list_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#policy_class_list_list DdosDstZone#policy_class_list_list}
  */
  readonly policyClassListList?: DdosDstZonePortZoneServiceOtherListSrcBasedPolicyListPolicyClassListListStruct[] | cdktf.IResolvable;
}

export function ddosDstZonePortZoneServiceOtherListSrcBasedPolicyListStructToTerraform(struct?: DdosDstZonePortZoneServiceOtherListSrcBasedPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_based_policy_name: cdktf.stringToTerraform(struct!.srcBasedPolicyName),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    policy_class_list_list: cdktf.listMapper(ddosDstZonePortZoneServiceOtherListSrcBasedPolicyListPolicyClassListListStructToTerraform, true)(struct!.policyClassListList),
  }
}


export function ddosDstZonePortZoneServiceOtherListSrcBasedPolicyListStructToHclTerraform(struct?: DdosDstZonePortZoneServiceOtherListSrcBasedPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_based_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.srcBasedPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_class_list_list: {
      value: cdktf.listMapperHcl(ddosDstZonePortZoneServiceOtherListSrcBasedPolicyListPolicyClassListListStructToHclTerraform, true)(struct!.policyClassListList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceOtherListSrcBasedPolicyListPolicyClassListListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServiceOtherListSrcBasedPolicyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortZoneServiceOtherListSrcBasedPolicyListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcBasedPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcBasedPolicyName = this._srcBasedPolicyName;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._policyClassListList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyClassListList = this._policyClassListList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceOtherListSrcBasedPolicyListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._srcBasedPolicyName = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._policyClassListList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._srcBasedPolicyName = value.srcBasedPolicyName;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._policyClassListList.internalValue = value.policyClassListList;
    }
  }

  // src_based_policy_name - computed: false, optional: false, required: true
  private _srcBasedPolicyName?: string; 
  public get srcBasedPolicyName() {
    return this.getStringAttribute('src_based_policy_name');
  }
  public set srcBasedPolicyName(value: string) {
    this._srcBasedPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcBasedPolicyNameInput() {
    return this._srcBasedPolicyName;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // policy_class_list_list - computed: false, optional: true, required: false
  private _policyClassListList = new DdosDstZonePortZoneServiceOtherListSrcBasedPolicyListPolicyClassListListStructList(this, "policy_class_list_list", false);
  public get policyClassListList() {
    return this._policyClassListList;
  }
  public putPolicyClassListList(value: DdosDstZonePortZoneServiceOtherListSrcBasedPolicyListPolicyClassListListStruct[] | cdktf.IResolvable) {
    this._policyClassListList.internalValue = value;
  }
  public resetPolicyClassListList() {
    this._policyClassListList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyClassListListInput() {
    return this._policyClassListList.internalValue;
  }
}

export class DdosDstZonePortZoneServiceOtherListSrcBasedPolicyListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortZoneServiceOtherListSrcBasedPolicyListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortZoneServiceOtherListSrcBasedPolicyListStructOutputReference {
    return new DdosDstZonePortZoneServiceOtherListSrcBasedPolicyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortZoneServiceOtherListTopkDestinations {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZonePortZoneServiceOtherListTopkDestinationsToTerraform(struct?: DdosDstZonePortZoneServiceOtherListTopkDestinationsOutputReference | DdosDstZonePortZoneServiceOtherListTopkDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZonePortZoneServiceOtherListTopkDestinationsToHclTerraform(struct?: DdosDstZonePortZoneServiceOtherListTopkDestinationsOutputReference | DdosDstZonePortZoneServiceOtherListTopkDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServiceOtherListTopkDestinationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortZoneServiceOtherListTopkDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceOtherListTopkDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DdosDstZonePortZoneServiceOtherListTopkSources {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZonePortZoneServiceOtherListTopkSourcesToTerraform(struct?: DdosDstZonePortZoneServiceOtherListTopkSourcesOutputReference | DdosDstZonePortZoneServiceOtherListTopkSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZonePortZoneServiceOtherListTopkSourcesToHclTerraform(struct?: DdosDstZonePortZoneServiceOtherListTopkSourcesOutputReference | DdosDstZonePortZoneServiceOtherListTopkSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServiceOtherListTopkSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortZoneServiceOtherListTopkSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceOtherListTopkSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DdosDstZonePortZoneServiceOtherListStruct {
  /**
  * Idle age for ip entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#age DdosDstZone#age}
  */
  readonly age?: number;
  /**
  * Enable this flag to apply overflow policy when dynamic entry count overflows
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#apply_policy_on_overflow DdosDstZone#apply_policy_on_overflow}
  */
  readonly applyPolicyOnOverflow?: number;
  /**
  * Configure default-action-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#default_action_list DdosDstZone#default_action_list}
  */
  readonly defaultActionList?: string;
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#deny DdosDstZone#deny}
  */
  readonly deny?: number;
  /**
  * Apply class-list overflow policy upon exceeding dynamic entry count specified for this zone port or each class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#enable_class_list_overflow DdosDstZone#enable_class_list_overflow}
  */
  readonly enableClassListOverflow?: number;
  /**
  * Enable ddos top-k source IP detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#enable_top_k DdosDstZone#enable_top_k}
  */
  readonly enableTopK?: number;
  /**
  * Enable ddos top-k destination IP detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#enable_top_k_destination DdosDstZone#enable_top_k_destination}
  */
  readonly enableTopKDestination?: number;
  /**
  * De-escalate faster in standalone mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#faster_de_escalation DdosDstZone#faster_de_escalation}
  */
  readonly fasterDeEscalation?: number;
  /**
  * Configure IP Filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#ip_filtering_policy DdosDstZone#ip_filtering_policy}
  */
  readonly ipFilteringPolicy?: string;
  /**
  * Toggle manual mode to use fix templates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#manual_mode_enable DdosDstZone#manual_mode_enable}
  */
  readonly manualModeEnable?: number;
  /**
  * Maximum count for dynamic source zone service entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#max_dynamic_entry_count DdosDstZone#max_dynamic_entry_count}
  */
  readonly maxDynamicEntryCount?: number;
  /**
  * Only allow outbound traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#outbound_only DdosDstZone#outbound_only}
  */
  readonly outboundOnly?: number;
  /**
  * 'other': other;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#port_other DdosDstZone#port_other}
  */
  readonly portOther: string;
  /**
  * 'tcp': TCP Port; 'udp': UDP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#protocol DdosDstZone#protocol}
  */
  readonly protocol: string;
  /**
  * Set T2 counter value of current context to specified value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#set_counter_base_val DdosDstZone#set_counter_base_val}
  */
  readonly setCounterBaseVal?: number;
  /**
  * Enable all sFlow polling options under this zone port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#sflow_common DdosDstZone#sflow_common}
  */
  readonly sflowCommon?: number;
  /**
  * Enable sFlow packet-level counter polling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#sflow_packets DdosDstZone#sflow_packets}
  */
  readonly sflowPackets?: number;
  /**
  * Enable stateful tracking of sessions (Default is stateless)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#stateful DdosDstZone#stateful}
  */
  readonly stateful?: number;
  /**
  * Maximum number of records to show in topk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#topk_dst_num_records DdosDstZone#topk_dst_num_records}
  */
  readonly topkDstNumRecords?: number;
  /**
  * Maximum number of records to show in topk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#topk_num_records DdosDstZone#topk_num_records}
  */
  readonly topkNumRecords?: number;
  /**
  * No limit for maximum dynamic src entry count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#unlimited_dynamic_entry_count DdosDstZone#unlimited_dynamic_entry_count}
  */
  readonly unlimitedDynamicEntryCount?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
  /**
  * dynamic_entry_overflow_policy_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#dynamic_entry_overflow_policy_list DdosDstZone#dynamic_entry_overflow_policy_list}
  */
  readonly dynamicEntryOverflowPolicyList?: DdosDstZonePortZoneServiceOtherListDynamicEntryOverflowPolicyListStruct[] | cdktf.IResolvable;
  /**
  * glid_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#glid_cfg DdosDstZone#glid_cfg}
  */
  readonly glidCfg?: DdosDstZonePortZoneServiceOtherListGlidCfg;
  /**
  * ip_filtering_policy_oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#ip_filtering_policy_oper DdosDstZone#ip_filtering_policy_oper}
  */
  readonly ipFilteringPolicyOper?: DdosDstZonePortZoneServiceOtherListIpFilteringPolicyOper;
  /**
  * level_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#level_list DdosDstZone#level_list}
  */
  readonly levelList?: DdosDstZonePortZoneServiceOtherListLevelListStruct[] | cdktf.IResolvable;
  /**
  * manual_mode_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#manual_mode_list DdosDstZone#manual_mode_list}
  */
  readonly manualModeList?: DdosDstZonePortZoneServiceOtherListManualModeListStruct[] | cdktf.IResolvable;
  /**
  * pattern_recognition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#pattern_recognition DdosDstZone#pattern_recognition}
  */
  readonly patternRecognition?: DdosDstZonePortZoneServiceOtherListPatternRecognition;
  /**
  * pattern_recognition_pu_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#pattern_recognition_pu_details DdosDstZone#pattern_recognition_pu_details}
  */
  readonly patternRecognitionPuDetails?: DdosDstZonePortZoneServiceOtherListPatternRecognitionPuDetails;
  /**
  * port_ind block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#port_ind DdosDstZone#port_ind}
  */
  readonly portInd?: DdosDstZonePortZoneServiceOtherListPortInd;
  /**
  * progression_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#progression_tracking DdosDstZone#progression_tracking}
  */
  readonly progressionTracking?: DdosDstZonePortZoneServiceOtherListProgressionTracking;
  /**
  * sflow_tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#sflow_tcp DdosDstZone#sflow_tcp}
  */
  readonly sflowTcp?: DdosDstZonePortZoneServiceOtherListSflowTcp;
  /**
  * src_based_policy_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#src_based_policy_list DdosDstZone#src_based_policy_list}
  */
  readonly srcBasedPolicyList?: DdosDstZonePortZoneServiceOtherListSrcBasedPolicyListStruct[] | cdktf.IResolvable;
  /**
  * topk_destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#topk_destinations DdosDstZone#topk_destinations}
  */
  readonly topkDestinations?: DdosDstZonePortZoneServiceOtherListTopkDestinations;
  /**
  * topk_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#topk_sources DdosDstZone#topk_sources}
  */
  readonly topkSources?: DdosDstZonePortZoneServiceOtherListTopkSources;
}

export function ddosDstZonePortZoneServiceOtherListStructToTerraform(struct?: DdosDstZonePortZoneServiceOtherListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.numberToTerraform(struct!.age),
    apply_policy_on_overflow: cdktf.numberToTerraform(struct!.applyPolicyOnOverflow),
    default_action_list: cdktf.stringToTerraform(struct!.defaultActionList),
    deny: cdktf.numberToTerraform(struct!.deny),
    enable_class_list_overflow: cdktf.numberToTerraform(struct!.enableClassListOverflow),
    enable_top_k: cdktf.numberToTerraform(struct!.enableTopK),
    enable_top_k_destination: cdktf.numberToTerraform(struct!.enableTopKDestination),
    faster_de_escalation: cdktf.numberToTerraform(struct!.fasterDeEscalation),
    ip_filtering_policy: cdktf.stringToTerraform(struct!.ipFilteringPolicy),
    manual_mode_enable: cdktf.numberToTerraform(struct!.manualModeEnable),
    max_dynamic_entry_count: cdktf.numberToTerraform(struct!.maxDynamicEntryCount),
    outbound_only: cdktf.numberToTerraform(struct!.outboundOnly),
    port_other: cdktf.stringToTerraform(struct!.portOther),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    set_counter_base_val: cdktf.numberToTerraform(struct!.setCounterBaseVal),
    sflow_common: cdktf.numberToTerraform(struct!.sflowCommon),
    sflow_packets: cdktf.numberToTerraform(struct!.sflowPackets),
    stateful: cdktf.numberToTerraform(struct!.stateful),
    topk_dst_num_records: cdktf.numberToTerraform(struct!.topkDstNumRecords),
    topk_num_records: cdktf.numberToTerraform(struct!.topkNumRecords),
    unlimited_dynamic_entry_count: cdktf.numberToTerraform(struct!.unlimitedDynamicEntryCount),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    dynamic_entry_overflow_policy_list: cdktf.listMapper(ddosDstZonePortZoneServiceOtherListDynamicEntryOverflowPolicyListStructToTerraform, true)(struct!.dynamicEntryOverflowPolicyList),
    glid_cfg: ddosDstZonePortZoneServiceOtherListGlidCfgToTerraform(struct!.glidCfg),
    ip_filtering_policy_oper: ddosDstZonePortZoneServiceOtherListIpFilteringPolicyOperToTerraform(struct!.ipFilteringPolicyOper),
    level_list: cdktf.listMapper(ddosDstZonePortZoneServiceOtherListLevelListStructToTerraform, true)(struct!.levelList),
    manual_mode_list: cdktf.listMapper(ddosDstZonePortZoneServiceOtherListManualModeListStructToTerraform, true)(struct!.manualModeList),
    pattern_recognition: ddosDstZonePortZoneServiceOtherListPatternRecognitionToTerraform(struct!.patternRecognition),
    pattern_recognition_pu_details: ddosDstZonePortZoneServiceOtherListPatternRecognitionPuDetailsToTerraform(struct!.patternRecognitionPuDetails),
    port_ind: ddosDstZonePortZoneServiceOtherListPortIndToTerraform(struct!.portInd),
    progression_tracking: ddosDstZonePortZoneServiceOtherListProgressionTrackingToTerraform(struct!.progressionTracking),
    sflow_tcp: ddosDstZonePortZoneServiceOtherListSflowTcpToTerraform(struct!.sflowTcp),
    src_based_policy_list: cdktf.listMapper(ddosDstZonePortZoneServiceOtherListSrcBasedPolicyListStructToTerraform, true)(struct!.srcBasedPolicyList),
    topk_destinations: ddosDstZonePortZoneServiceOtherListTopkDestinationsToTerraform(struct!.topkDestinations),
    topk_sources: ddosDstZonePortZoneServiceOtherListTopkSourcesToTerraform(struct!.topkSources),
  }
}


export function ddosDstZonePortZoneServiceOtherListStructToHclTerraform(struct?: DdosDstZonePortZoneServiceOtherListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age: {
      value: cdktf.numberToHclTerraform(struct!.age),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    apply_policy_on_overflow: {
      value: cdktf.numberToHclTerraform(struct!.applyPolicyOnOverflow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_action_list: {
      value: cdktf.stringToHclTerraform(struct!.defaultActionList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny: {
      value: cdktf.numberToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_class_list_overflow: {
      value: cdktf.numberToHclTerraform(struct!.enableClassListOverflow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_top_k: {
      value: cdktf.numberToHclTerraform(struct!.enableTopK),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_top_k_destination: {
      value: cdktf.numberToHclTerraform(struct!.enableTopKDestination),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    faster_de_escalation: {
      value: cdktf.numberToHclTerraform(struct!.fasterDeEscalation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_filtering_policy: {
      value: cdktf.stringToHclTerraform(struct!.ipFilteringPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manual_mode_enable: {
      value: cdktf.numberToHclTerraform(struct!.manualModeEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_dynamic_entry_count: {
      value: cdktf.numberToHclTerraform(struct!.maxDynamicEntryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_only: {
      value: cdktf.numberToHclTerraform(struct!.outboundOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_other: {
      value: cdktf.stringToHclTerraform(struct!.portOther),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_counter_base_val: {
      value: cdktf.numberToHclTerraform(struct!.setCounterBaseVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_common: {
      value: cdktf.numberToHclTerraform(struct!.sflowCommon),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_packets: {
      value: cdktf.numberToHclTerraform(struct!.sflowPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stateful: {
      value: cdktf.numberToHclTerraform(struct!.stateful),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topk_dst_num_records: {
      value: cdktf.numberToHclTerraform(struct!.topkDstNumRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topk_num_records: {
      value: cdktf.numberToHclTerraform(struct!.topkNumRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unlimited_dynamic_entry_count: {
      value: cdktf.numberToHclTerraform(struct!.unlimitedDynamicEntryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_entry_overflow_policy_list: {
      value: cdktf.listMapperHcl(ddosDstZonePortZoneServiceOtherListDynamicEntryOverflowPolicyListStructToHclTerraform, true)(struct!.dynamicEntryOverflowPolicyList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceOtherListDynamicEntryOverflowPolicyListStructList",
    },
    glid_cfg: {
      value: ddosDstZonePortZoneServiceOtherListGlidCfgToHclTerraform(struct!.glidCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceOtherListGlidCfgList",
    },
    ip_filtering_policy_oper: {
      value: ddosDstZonePortZoneServiceOtherListIpFilteringPolicyOperToHclTerraform(struct!.ipFilteringPolicyOper),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceOtherListIpFilteringPolicyOperList",
    },
    level_list: {
      value: cdktf.listMapperHcl(ddosDstZonePortZoneServiceOtherListLevelListStructToHclTerraform, true)(struct!.levelList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceOtherListLevelListStructList",
    },
    manual_mode_list: {
      value: cdktf.listMapperHcl(ddosDstZonePortZoneServiceOtherListManualModeListStructToHclTerraform, true)(struct!.manualModeList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceOtherListManualModeListStructList",
    },
    pattern_recognition: {
      value: ddosDstZonePortZoneServiceOtherListPatternRecognitionToHclTerraform(struct!.patternRecognition),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceOtherListPatternRecognitionList",
    },
    pattern_recognition_pu_details: {
      value: ddosDstZonePortZoneServiceOtherListPatternRecognitionPuDetailsToHclTerraform(struct!.patternRecognitionPuDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceOtherListPatternRecognitionPuDetailsList",
    },
    port_ind: {
      value: ddosDstZonePortZoneServiceOtherListPortIndToHclTerraform(struct!.portInd),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceOtherListPortIndList",
    },
    progression_tracking: {
      value: ddosDstZonePortZoneServiceOtherListProgressionTrackingToHclTerraform(struct!.progressionTracking),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceOtherListProgressionTrackingList",
    },
    sflow_tcp: {
      value: ddosDstZonePortZoneServiceOtherListSflowTcpToHclTerraform(struct!.sflowTcp),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceOtherListSflowTcpList",
    },
    src_based_policy_list: {
      value: cdktf.listMapperHcl(ddosDstZonePortZoneServiceOtherListSrcBasedPolicyListStructToHclTerraform, true)(struct!.srcBasedPolicyList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceOtherListSrcBasedPolicyListStructList",
    },
    topk_destinations: {
      value: ddosDstZonePortZoneServiceOtherListTopkDestinationsToHclTerraform(struct!.topkDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceOtherListTopkDestinationsList",
    },
    topk_sources: {
      value: ddosDstZonePortZoneServiceOtherListTopkSourcesToHclTerraform(struct!.topkSources),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceOtherListTopkSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServiceOtherListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortZoneServiceOtherListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age !== undefined) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._applyPolicyOnOverflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyPolicyOnOverflow = this._applyPolicyOnOverflow;
    }
    if (this._defaultActionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultActionList = this._defaultActionList;
    }
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    if (this._enableClassListOverflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableClassListOverflow = this._enableClassListOverflow;
    }
    if (this._enableTopK !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTopK = this._enableTopK;
    }
    if (this._enableTopKDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTopKDestination = this._enableTopKDestination;
    }
    if (this._fasterDeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.fasterDeEscalation = this._fasterDeEscalation;
    }
    if (this._ipFilteringPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilteringPolicy = this._ipFilteringPolicy;
    }
    if (this._manualModeEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualModeEnable = this._manualModeEnable;
    }
    if (this._maxDynamicEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDynamicEntryCount = this._maxDynamicEntryCount;
    }
    if (this._outboundOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundOnly = this._outboundOnly;
    }
    if (this._portOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.portOther = this._portOther;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._setCounterBaseVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCounterBaseVal = this._setCounterBaseVal;
    }
    if (this._sflowCommon !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowCommon = this._sflowCommon;
    }
    if (this._sflowPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowPackets = this._sflowPackets;
    }
    if (this._stateful !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateful = this._stateful;
    }
    if (this._topkDstNumRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkDstNumRecords = this._topkDstNumRecords;
    }
    if (this._topkNumRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkNumRecords = this._topkNumRecords;
    }
    if (this._unlimitedDynamicEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.unlimitedDynamicEntryCount = this._unlimitedDynamicEntryCount;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._dynamicEntryOverflowPolicyList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicEntryOverflowPolicyList = this._dynamicEntryOverflowPolicyList?.internalValue;
    }
    if (this._glidCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidCfg = this._glidCfg?.internalValue;
    }
    if (this._ipFilteringPolicyOper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilteringPolicyOper = this._ipFilteringPolicyOper?.internalValue;
    }
    if (this._levelList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelList = this._levelList?.internalValue;
    }
    if (this._manualModeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualModeList = this._manualModeList?.internalValue;
    }
    if (this._patternRecognition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRecognition = this._patternRecognition?.internalValue;
    }
    if (this._patternRecognitionPuDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRecognitionPuDetails = this._patternRecognitionPuDetails?.internalValue;
    }
    if (this._portInd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portInd = this._portInd?.internalValue;
    }
    if (this._progressionTracking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTracking = this._progressionTracking?.internalValue;
    }
    if (this._sflowTcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowTcp = this._sflowTcp?.internalValue;
    }
    if (this._srcBasedPolicyList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcBasedPolicyList = this._srcBasedPolicyList?.internalValue;
    }
    if (this._topkDestinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkDestinations = this._topkDestinations?.internalValue;
    }
    if (this._topkSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkSources = this._topkSources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceOtherListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._age = undefined;
      this._applyPolicyOnOverflow = undefined;
      this._defaultActionList = undefined;
      this._deny = undefined;
      this._enableClassListOverflow = undefined;
      this._enableTopK = undefined;
      this._enableTopKDestination = undefined;
      this._fasterDeEscalation = undefined;
      this._ipFilteringPolicy = undefined;
      this._manualModeEnable = undefined;
      this._maxDynamicEntryCount = undefined;
      this._outboundOnly = undefined;
      this._portOther = undefined;
      this._protocol = undefined;
      this._setCounterBaseVal = undefined;
      this._sflowCommon = undefined;
      this._sflowPackets = undefined;
      this._stateful = undefined;
      this._topkDstNumRecords = undefined;
      this._topkNumRecords = undefined;
      this._unlimitedDynamicEntryCount = undefined;
      this._uuid = undefined;
      this._dynamicEntryOverflowPolicyList.internalValue = undefined;
      this._glidCfg.internalValue = undefined;
      this._ipFilteringPolicyOper.internalValue = undefined;
      this._levelList.internalValue = undefined;
      this._manualModeList.internalValue = undefined;
      this._patternRecognition.internalValue = undefined;
      this._patternRecognitionPuDetails.internalValue = undefined;
      this._portInd.internalValue = undefined;
      this._progressionTracking.internalValue = undefined;
      this._sflowTcp.internalValue = undefined;
      this._srcBasedPolicyList.internalValue = undefined;
      this._topkDestinations.internalValue = undefined;
      this._topkSources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._age = value.age;
      this._applyPolicyOnOverflow = value.applyPolicyOnOverflow;
      this._defaultActionList = value.defaultActionList;
      this._deny = value.deny;
      this._enableClassListOverflow = value.enableClassListOverflow;
      this._enableTopK = value.enableTopK;
      this._enableTopKDestination = value.enableTopKDestination;
      this._fasterDeEscalation = value.fasterDeEscalation;
      this._ipFilteringPolicy = value.ipFilteringPolicy;
      this._manualModeEnable = value.manualModeEnable;
      this._maxDynamicEntryCount = value.maxDynamicEntryCount;
      this._outboundOnly = value.outboundOnly;
      this._portOther = value.portOther;
      this._protocol = value.protocol;
      this._setCounterBaseVal = value.setCounterBaseVal;
      this._sflowCommon = value.sflowCommon;
      this._sflowPackets = value.sflowPackets;
      this._stateful = value.stateful;
      this._topkDstNumRecords = value.topkDstNumRecords;
      this._topkNumRecords = value.topkNumRecords;
      this._unlimitedDynamicEntryCount = value.unlimitedDynamicEntryCount;
      this._uuid = value.uuid;
      this._dynamicEntryOverflowPolicyList.internalValue = value.dynamicEntryOverflowPolicyList;
      this._glidCfg.internalValue = value.glidCfg;
      this._ipFilteringPolicyOper.internalValue = value.ipFilteringPolicyOper;
      this._levelList.internalValue = value.levelList;
      this._manualModeList.internalValue = value.manualModeList;
      this._patternRecognition.internalValue = value.patternRecognition;
      this._patternRecognitionPuDetails.internalValue = value.patternRecognitionPuDetails;
      this._portInd.internalValue = value.portInd;
      this._progressionTracking.internalValue = value.progressionTracking;
      this._sflowTcp.internalValue = value.sflowTcp;
      this._srcBasedPolicyList.internalValue = value.srcBasedPolicyList;
      this._topkDestinations.internalValue = value.topkDestinations;
      this._topkSources.internalValue = value.topkSources;
    }
  }

  // age - computed: false, optional: true, required: false
  private _age?: number; 
  public get age() {
    return this.getNumberAttribute('age');
  }
  public set age(value: number) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // apply_policy_on_overflow - computed: false, optional: true, required: false
  private _applyPolicyOnOverflow?: number; 
  public get applyPolicyOnOverflow() {
    return this.getNumberAttribute('apply_policy_on_overflow');
  }
  public set applyPolicyOnOverflow(value: number) {
    this._applyPolicyOnOverflow = value;
  }
  public resetApplyPolicyOnOverflow() {
    this._applyPolicyOnOverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyPolicyOnOverflowInput() {
    return this._applyPolicyOnOverflow;
  }

  // default_action_list - computed: false, optional: true, required: false
  private _defaultActionList?: string; 
  public get defaultActionList() {
    return this.getStringAttribute('default_action_list');
  }
  public set defaultActionList(value: string) {
    this._defaultActionList = value;
  }
  public resetDefaultActionList() {
    this._defaultActionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionListInput() {
    return this._defaultActionList;
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: number; 
  public get deny() {
    return this.getNumberAttribute('deny');
  }
  public set deny(value: number) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }

  // enable_class_list_overflow - computed: false, optional: true, required: false
  private _enableClassListOverflow?: number; 
  public get enableClassListOverflow() {
    return this.getNumberAttribute('enable_class_list_overflow');
  }
  public set enableClassListOverflow(value: number) {
    this._enableClassListOverflow = value;
  }
  public resetEnableClassListOverflow() {
    this._enableClassListOverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableClassListOverflowInput() {
    return this._enableClassListOverflow;
  }

  // enable_top_k - computed: false, optional: true, required: false
  private _enableTopK?: number; 
  public get enableTopK() {
    return this.getNumberAttribute('enable_top_k');
  }
  public set enableTopK(value: number) {
    this._enableTopK = value;
  }
  public resetEnableTopK() {
    this._enableTopK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTopKInput() {
    return this._enableTopK;
  }

  // enable_top_k_destination - computed: false, optional: true, required: false
  private _enableTopKDestination?: number; 
  public get enableTopKDestination() {
    return this.getNumberAttribute('enable_top_k_destination');
  }
  public set enableTopKDestination(value: number) {
    this._enableTopKDestination = value;
  }
  public resetEnableTopKDestination() {
    this._enableTopKDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTopKDestinationInput() {
    return this._enableTopKDestination;
  }

  // faster_de_escalation - computed: false, optional: true, required: false
  private _fasterDeEscalation?: number; 
  public get fasterDeEscalation() {
    return this.getNumberAttribute('faster_de_escalation');
  }
  public set fasterDeEscalation(value: number) {
    this._fasterDeEscalation = value;
  }
  public resetFasterDeEscalation() {
    this._fasterDeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fasterDeEscalationInput() {
    return this._fasterDeEscalation;
  }

  // ip_filtering_policy - computed: false, optional: true, required: false
  private _ipFilteringPolicy?: string; 
  public get ipFilteringPolicy() {
    return this.getStringAttribute('ip_filtering_policy');
  }
  public set ipFilteringPolicy(value: string) {
    this._ipFilteringPolicy = value;
  }
  public resetIpFilteringPolicy() {
    this._ipFilteringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilteringPolicyInput() {
    return this._ipFilteringPolicy;
  }

  // manual_mode_enable - computed: false, optional: true, required: false
  private _manualModeEnable?: number; 
  public get manualModeEnable() {
    return this.getNumberAttribute('manual_mode_enable');
  }
  public set manualModeEnable(value: number) {
    this._manualModeEnable = value;
  }
  public resetManualModeEnable() {
    this._manualModeEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualModeEnableInput() {
    return this._manualModeEnable;
  }

  // max_dynamic_entry_count - computed: false, optional: true, required: false
  private _maxDynamicEntryCount?: number; 
  public get maxDynamicEntryCount() {
    return this.getNumberAttribute('max_dynamic_entry_count');
  }
  public set maxDynamicEntryCount(value: number) {
    this._maxDynamicEntryCount = value;
  }
  public resetMaxDynamicEntryCount() {
    this._maxDynamicEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDynamicEntryCountInput() {
    return this._maxDynamicEntryCount;
  }

  // outbound_only - computed: false, optional: true, required: false
  private _outboundOnly?: number; 
  public get outboundOnly() {
    return this.getNumberAttribute('outbound_only');
  }
  public set outboundOnly(value: number) {
    this._outboundOnly = value;
  }
  public resetOutboundOnly() {
    this._outboundOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundOnlyInput() {
    return this._outboundOnly;
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

  // set_counter_base_val - computed: false, optional: true, required: false
  private _setCounterBaseVal?: number; 
  public get setCounterBaseVal() {
    return this.getNumberAttribute('set_counter_base_val');
  }
  public set setCounterBaseVal(value: number) {
    this._setCounterBaseVal = value;
  }
  public resetSetCounterBaseVal() {
    this._setCounterBaseVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCounterBaseValInput() {
    return this._setCounterBaseVal;
  }

  // sflow_common - computed: false, optional: true, required: false
  private _sflowCommon?: number; 
  public get sflowCommon() {
    return this.getNumberAttribute('sflow_common');
  }
  public set sflowCommon(value: number) {
    this._sflowCommon = value;
  }
  public resetSflowCommon() {
    this._sflowCommon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowCommonInput() {
    return this._sflowCommon;
  }

  // sflow_packets - computed: false, optional: true, required: false
  private _sflowPackets?: number; 
  public get sflowPackets() {
    return this.getNumberAttribute('sflow_packets');
  }
  public set sflowPackets(value: number) {
    this._sflowPackets = value;
  }
  public resetSflowPackets() {
    this._sflowPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowPacketsInput() {
    return this._sflowPackets;
  }

  // stateful - computed: false, optional: true, required: false
  private _stateful?: number; 
  public get stateful() {
    return this.getNumberAttribute('stateful');
  }
  public set stateful(value: number) {
    this._stateful = value;
  }
  public resetStateful() {
    this._stateful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulInput() {
    return this._stateful;
  }

  // topk_dst_num_records - computed: false, optional: true, required: false
  private _topkDstNumRecords?: number; 
  public get topkDstNumRecords() {
    return this.getNumberAttribute('topk_dst_num_records');
  }
  public set topkDstNumRecords(value: number) {
    this._topkDstNumRecords = value;
  }
  public resetTopkDstNumRecords() {
    this._topkDstNumRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkDstNumRecordsInput() {
    return this._topkDstNumRecords;
  }

  // topk_num_records - computed: false, optional: true, required: false
  private _topkNumRecords?: number; 
  public get topkNumRecords() {
    return this.getNumberAttribute('topk_num_records');
  }
  public set topkNumRecords(value: number) {
    this._topkNumRecords = value;
  }
  public resetTopkNumRecords() {
    this._topkNumRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkNumRecordsInput() {
    return this._topkNumRecords;
  }

  // unlimited_dynamic_entry_count - computed: false, optional: true, required: false
  private _unlimitedDynamicEntryCount?: number; 
  public get unlimitedDynamicEntryCount() {
    return this.getNumberAttribute('unlimited_dynamic_entry_count');
  }
  public set unlimitedDynamicEntryCount(value: number) {
    this._unlimitedDynamicEntryCount = value;
  }
  public resetUnlimitedDynamicEntryCount() {
    this._unlimitedDynamicEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unlimitedDynamicEntryCountInput() {
    return this._unlimitedDynamicEntryCount;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // dynamic_entry_overflow_policy_list - computed: false, optional: true, required: false
  private _dynamicEntryOverflowPolicyList = new DdosDstZonePortZoneServiceOtherListDynamicEntryOverflowPolicyListStructList(this, "dynamic_entry_overflow_policy_list", false);
  public get dynamicEntryOverflowPolicyList() {
    return this._dynamicEntryOverflowPolicyList;
  }
  public putDynamicEntryOverflowPolicyList(value: DdosDstZonePortZoneServiceOtherListDynamicEntryOverflowPolicyListStruct[] | cdktf.IResolvable) {
    this._dynamicEntryOverflowPolicyList.internalValue = value;
  }
  public resetDynamicEntryOverflowPolicyList() {
    this._dynamicEntryOverflowPolicyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEntryOverflowPolicyListInput() {
    return this._dynamicEntryOverflowPolicyList.internalValue;
  }

  // glid_cfg - computed: false, optional: true, required: false
  private _glidCfg = new DdosDstZonePortZoneServiceOtherListGlidCfgOutputReference(this, "glid_cfg");
  public get glidCfg() {
    return this._glidCfg;
  }
  public putGlidCfg(value: DdosDstZonePortZoneServiceOtherListGlidCfg) {
    this._glidCfg.internalValue = value;
  }
  public resetGlidCfg() {
    this._glidCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidCfgInput() {
    return this._glidCfg.internalValue;
  }

  // ip_filtering_policy_oper - computed: false, optional: true, required: false
  private _ipFilteringPolicyOper = new DdosDstZonePortZoneServiceOtherListIpFilteringPolicyOperOutputReference(this, "ip_filtering_policy_oper");
  public get ipFilteringPolicyOper() {
    return this._ipFilteringPolicyOper;
  }
  public putIpFilteringPolicyOper(value: DdosDstZonePortZoneServiceOtherListIpFilteringPolicyOper) {
    this._ipFilteringPolicyOper.internalValue = value;
  }
  public resetIpFilteringPolicyOper() {
    this._ipFilteringPolicyOper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilteringPolicyOperInput() {
    return this._ipFilteringPolicyOper.internalValue;
  }

  // level_list - computed: false, optional: true, required: false
  private _levelList = new DdosDstZonePortZoneServiceOtherListLevelListStructList(this, "level_list", false);
  public get levelList() {
    return this._levelList;
  }
  public putLevelList(value: DdosDstZonePortZoneServiceOtherListLevelListStruct[] | cdktf.IResolvable) {
    this._levelList.internalValue = value;
  }
  public resetLevelList() {
    this._levelList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelListInput() {
    return this._levelList.internalValue;
  }

  // manual_mode_list - computed: false, optional: true, required: false
  private _manualModeList = new DdosDstZonePortZoneServiceOtherListManualModeListStructList(this, "manual_mode_list", false);
  public get manualModeList() {
    return this._manualModeList;
  }
  public putManualModeList(value: DdosDstZonePortZoneServiceOtherListManualModeListStruct[] | cdktf.IResolvable) {
    this._manualModeList.internalValue = value;
  }
  public resetManualModeList() {
    this._manualModeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualModeListInput() {
    return this._manualModeList.internalValue;
  }

  // pattern_recognition - computed: false, optional: true, required: false
  private _patternRecognition = new DdosDstZonePortZoneServiceOtherListPatternRecognitionOutputReference(this, "pattern_recognition");
  public get patternRecognition() {
    return this._patternRecognition;
  }
  public putPatternRecognition(value: DdosDstZonePortZoneServiceOtherListPatternRecognition) {
    this._patternRecognition.internalValue = value;
  }
  public resetPatternRecognition() {
    this._patternRecognition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionInput() {
    return this._patternRecognition.internalValue;
  }

  // pattern_recognition_pu_details - computed: false, optional: true, required: false
  private _patternRecognitionPuDetails = new DdosDstZonePortZoneServiceOtherListPatternRecognitionPuDetailsOutputReference(this, "pattern_recognition_pu_details");
  public get patternRecognitionPuDetails() {
    return this._patternRecognitionPuDetails;
  }
  public putPatternRecognitionPuDetails(value: DdosDstZonePortZoneServiceOtherListPatternRecognitionPuDetails) {
    this._patternRecognitionPuDetails.internalValue = value;
  }
  public resetPatternRecognitionPuDetails() {
    this._patternRecognitionPuDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionPuDetailsInput() {
    return this._patternRecognitionPuDetails.internalValue;
  }

  // port_ind - computed: false, optional: true, required: false
  private _portInd = new DdosDstZonePortZoneServiceOtherListPortIndOutputReference(this, "port_ind");
  public get portInd() {
    return this._portInd;
  }
  public putPortInd(value: DdosDstZonePortZoneServiceOtherListPortInd) {
    this._portInd.internalValue = value;
  }
  public resetPortInd() {
    this._portInd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIndInput() {
    return this._portInd.internalValue;
  }

  // progression_tracking - computed: false, optional: true, required: false
  private _progressionTracking = new DdosDstZonePortZoneServiceOtherListProgressionTrackingOutputReference(this, "progression_tracking");
  public get progressionTracking() {
    return this._progressionTracking;
  }
  public putProgressionTracking(value: DdosDstZonePortZoneServiceOtherListProgressionTracking) {
    this._progressionTracking.internalValue = value;
  }
  public resetProgressionTracking() {
    this._progressionTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingInput() {
    return this._progressionTracking.internalValue;
  }

  // sflow_tcp - computed: false, optional: true, required: false
  private _sflowTcp = new DdosDstZonePortZoneServiceOtherListSflowTcpOutputReference(this, "sflow_tcp");
  public get sflowTcp() {
    return this._sflowTcp;
  }
  public putSflowTcp(value: DdosDstZonePortZoneServiceOtherListSflowTcp) {
    this._sflowTcp.internalValue = value;
  }
  public resetSflowTcp() {
    this._sflowTcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowTcpInput() {
    return this._sflowTcp.internalValue;
  }

  // src_based_policy_list - computed: false, optional: true, required: false
  private _srcBasedPolicyList = new DdosDstZonePortZoneServiceOtherListSrcBasedPolicyListStructList(this, "src_based_policy_list", false);
  public get srcBasedPolicyList() {
    return this._srcBasedPolicyList;
  }
  public putSrcBasedPolicyList(value: DdosDstZonePortZoneServiceOtherListSrcBasedPolicyListStruct[] | cdktf.IResolvable) {
    this._srcBasedPolicyList.internalValue = value;
  }
  public resetSrcBasedPolicyList() {
    this._srcBasedPolicyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcBasedPolicyListInput() {
    return this._srcBasedPolicyList.internalValue;
  }

  // topk_destinations - computed: false, optional: true, required: false
  private _topkDestinations = new DdosDstZonePortZoneServiceOtherListTopkDestinationsOutputReference(this, "topk_destinations");
  public get topkDestinations() {
    return this._topkDestinations;
  }
  public putTopkDestinations(value: DdosDstZonePortZoneServiceOtherListTopkDestinations) {
    this._topkDestinations.internalValue = value;
  }
  public resetTopkDestinations() {
    this._topkDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkDestinationsInput() {
    return this._topkDestinations.internalValue;
  }

  // topk_sources - computed: false, optional: true, required: false
  private _topkSources = new DdosDstZonePortZoneServiceOtherListTopkSourcesOutputReference(this, "topk_sources");
  public get topkSources() {
    return this._topkSources;
  }
  public putTopkSources(value: DdosDstZonePortZoneServiceOtherListTopkSources) {
    this._topkSources.internalValue = value;
  }
  public resetTopkSources() {
    this._topkSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkSourcesInput() {
    return this._topkSources.internalValue;
  }
}

export class DdosDstZonePortZoneServiceOtherListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortZoneServiceOtherListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortZoneServiceOtherListStructOutputReference {
    return new DdosDstZonePortZoneServiceOtherListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePort {
  /**
  * zone_service_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#zone_service_list DdosDstZone#zone_service_list}
  */
  readonly zoneServiceList?: DdosDstZonePortZoneServiceListStruct[] | cdktf.IResolvable;
  /**
  * zone_service_other_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#zone_service_other_list DdosDstZone#zone_service_other_list}
  */
  readonly zoneServiceOtherList?: DdosDstZonePortZoneServiceOtherListStruct[] | cdktf.IResolvable;
}

export function ddosDstZonePortToTerraform(struct?: DdosDstZonePortOutputReference | DdosDstZonePort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    zone_service_list: cdktf.listMapper(ddosDstZonePortZoneServiceListStructToTerraform, true)(struct!.zoneServiceList),
    zone_service_other_list: cdktf.listMapper(ddosDstZonePortZoneServiceOtherListStructToTerraform, true)(struct!.zoneServiceOtherList),
  }
}


export function ddosDstZonePortToHclTerraform(struct?: DdosDstZonePortOutputReference | DdosDstZonePort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    zone_service_list: {
      value: cdktf.listMapperHcl(ddosDstZonePortZoneServiceListStructToHclTerraform, true)(struct!.zoneServiceList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceListStructList",
    },
    zone_service_other_list: {
      value: cdktf.listMapperHcl(ddosDstZonePortZoneServiceOtherListStructToHclTerraform, true)(struct!.zoneServiceOtherList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceOtherListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._zoneServiceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneServiceList = this._zoneServiceList?.internalValue;
    }
    if (this._zoneServiceOtherList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneServiceOtherList = this._zoneServiceOtherList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._zoneServiceList.internalValue = undefined;
      this._zoneServiceOtherList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._zoneServiceList.internalValue = value.zoneServiceList;
      this._zoneServiceOtherList.internalValue = value.zoneServiceOtherList;
    }
  }

  // zone_service_list - computed: false, optional: true, required: false
  private _zoneServiceList = new DdosDstZonePortZoneServiceListStructList(this, "zone_service_list", false);
  public get zoneServiceList() {
    return this._zoneServiceList;
  }
  public putZoneServiceList(value: DdosDstZonePortZoneServiceListStruct[] | cdktf.IResolvable) {
    this._zoneServiceList.internalValue = value;
  }
  public resetZoneServiceList() {
    this._zoneServiceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneServiceListInput() {
    return this._zoneServiceList.internalValue;
  }

  // zone_service_other_list - computed: false, optional: true, required: false
  private _zoneServiceOtherList = new DdosDstZonePortZoneServiceOtherListStructList(this, "zone_service_other_list", false);
  public get zoneServiceOtherList() {
    return this._zoneServiceOtherList;
  }
  public putZoneServiceOtherList(value: DdosDstZonePortZoneServiceOtherListStruct[] | cdktf.IResolvable) {
    this._zoneServiceOtherList.internalValue = value;
  }
  public resetZoneServiceOtherList() {
    this._zoneServiceOtherList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneServiceOtherListInput() {
    return this._zoneServiceOtherList.internalValue;
  }
}
export interface DdosDstZonePortRangeListDynamicEntryOverflowPolicyListZoneTemplate {
  /**
  * DDOS dns template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#dns DdosDstZone#dns}
  */
  readonly dns?: string;
  /**
  * DDOS encap template (IPv6-over-IPv4 / IPv4-over-IPv6 are not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#encap DdosDstZone#encap}
  */
  readonly encap?: string;
  /**
  * DDOS http template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#http DdosDstZone#http}
  */
  readonly http?: string;
  /**
  * DDOS logging template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#logging DdosDstZone#logging}
  */
  readonly logging?: string;
  /**
  * DDOS quic template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#quic DdosDstZone#quic}
  */
  readonly quic?: string;
  /**
  * DDOS sip template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#sip DdosDstZone#sip}
  */
  readonly sip?: string;
  /**
  * DDOS ssl-l4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#ssl_l4 DdosDstZone#ssl_l4}
  */
  readonly sslL4?: string;
  /**
  * DDOS tcp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#tcp DdosDstZone#tcp}
  */
  readonly tcp?: string;
  /**
  * DDOS udp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#udp DdosDstZone#udp}
  */
  readonly udp?: string;
}

export function ddosDstZonePortRangeListDynamicEntryOverflowPolicyListZoneTemplateToTerraform(struct?: DdosDstZonePortRangeListDynamicEntryOverflowPolicyListZoneTemplateOutputReference | DdosDstZonePortRangeListDynamicEntryOverflowPolicyListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    encap: cdktf.stringToTerraform(struct!.encap),
    http: cdktf.stringToTerraform(struct!.http),
    logging: cdktf.stringToTerraform(struct!.logging),
    quic: cdktf.stringToTerraform(struct!.quic),
    sip: cdktf.stringToTerraform(struct!.sip),
    ssl_l4: cdktf.stringToTerraform(struct!.sslL4),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    udp: cdktf.stringToTerraform(struct!.udp),
  }
}


export function ddosDstZonePortRangeListDynamicEntryOverflowPolicyListZoneTemplateToHclTerraform(struct?: DdosDstZonePortRangeListDynamicEntryOverflowPolicyListZoneTemplateOutputReference | DdosDstZonePortRangeListDynamicEntryOverflowPolicyListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encap: {
      value: cdktf.stringToHclTerraform(struct!.encap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: cdktf.stringToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: cdktf.stringToHclTerraform(struct!.logging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quic: {
      value: cdktf.stringToHclTerraform(struct!.quic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip: {
      value: cdktf.stringToHclTerraform(struct!.sip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_l4: {
      value: cdktf.stringToHclTerraform(struct!.sslL4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp: {
      value: cdktf.stringToHclTerraform(struct!.udp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeListDynamicEntryOverflowPolicyListZoneTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortRangeListDynamicEntryOverflowPolicyListZoneTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._encap !== undefined) {
      hasAnyValues = true;
      internalValueResult.encap = this._encap;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    if (this._quic !== undefined) {
      hasAnyValues = true;
      internalValueResult.quic = this._quic;
    }
    if (this._sip !== undefined) {
      hasAnyValues = true;
      internalValueResult.sip = this._sip;
    }
    if (this._sslL4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4 = this._sslL4;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeListDynamicEntryOverflowPolicyListZoneTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dns = undefined;
      this._encap = undefined;
      this._http = undefined;
      this._logging = undefined;
      this._quic = undefined;
      this._sip = undefined;
      this._sslL4 = undefined;
      this._tcp = undefined;
      this._udp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dns = value.dns;
      this._encap = value.encap;
      this._http = value.http;
      this._logging = value.logging;
      this._quic = value.quic;
      this._sip = value.sip;
      this._sslL4 = value.sslL4;
      this._tcp = value.tcp;
      this._udp = value.udp;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // encap - computed: false, optional: true, required: false
  private _encap?: string; 
  public get encap() {
    return this.getStringAttribute('encap');
  }
  public set encap(value: string) {
    this._encap = value;
  }
  public resetEncap() {
    this._encap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
  }

  // http - computed: false, optional: true, required: false
  private _http?: string; 
  public get http() {
    return this.getStringAttribute('http');
  }
  public set http(value: string) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }

  // quic - computed: false, optional: true, required: false
  private _quic?: string; 
  public get quic() {
    return this.getStringAttribute('quic');
  }
  public set quic(value: string) {
    this._quic = value;
  }
  public resetQuic() {
    this._quic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicInput() {
    return this._quic;
  }

  // sip - computed: false, optional: true, required: false
  private _sip?: string; 
  public get sip() {
    return this.getStringAttribute('sip');
  }
  public set sip(value: string) {
    this._sip = value;
  }
  public resetSip() {
    this._sip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipInput() {
    return this._sip;
  }

  // ssl_l4 - computed: false, optional: true, required: false
  private _sslL4?: string; 
  public get sslL4() {
    return this.getStringAttribute('ssl_l4');
  }
  public set sslL4(value: string) {
    this._sslL4 = value;
  }
  public resetSslL4() {
    this._sslL4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4Input() {
    return this._sslL4;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: string; 
  public get tcp() {
    return this.getStringAttribute('tcp');
  }
  public set tcp(value: string) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // udp - computed: false, optional: true, required: false
  private _udp?: string; 
  public get udp() {
    return this.getStringAttribute('udp');
  }
  public set udp(value: string) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
  }
}
export interface DdosDstZonePortRangeListDynamicEntryOverflowPolicyListStruct {
  /**
  * 'bypass': Always permit for the Source to bypass all feature & limit checks; 'deny': Blacklist incoming packets for service;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#action DdosDstZone#action}
  */
  readonly action?: string;
  /**
  * 'configuration': Configure overflow policy;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#dummy_name DdosDstZone#dummy_name}
  */
  readonly dummyName: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#glid DdosDstZone#glid}
  */
  readonly glid?: string;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#log_enable DdosDstZone#log_enable}
  */
  readonly logEnable?: number;
  /**
  * Enable log periodic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#log_periodic DdosDstZone#log_periodic}
  */
  readonly logPeriodic?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#user_tag DdosDstZone#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
  /**
  * zone_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#zone_template DdosDstZone#zone_template}
  */
  readonly zoneTemplate?: DdosDstZonePortRangeListDynamicEntryOverflowPolicyListZoneTemplate;
}

export function ddosDstZonePortRangeListDynamicEntryOverflowPolicyListStructToTerraform(struct?: DdosDstZonePortRangeListDynamicEntryOverflowPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    dummy_name: cdktf.stringToTerraform(struct!.dummyName),
    glid: cdktf.stringToTerraform(struct!.glid),
    log_enable: cdktf.numberToTerraform(struct!.logEnable),
    log_periodic: cdktf.numberToTerraform(struct!.logPeriodic),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    zone_template: ddosDstZonePortRangeListDynamicEntryOverflowPolicyListZoneTemplateToTerraform(struct!.zoneTemplate),
  }
}


export function ddosDstZonePortRangeListDynamicEntryOverflowPolicyListStructToHclTerraform(struct?: DdosDstZonePortRangeListDynamicEntryOverflowPolicyListStruct | cdktf.IResolvable): any {
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
    dummy_name: {
      value: cdktf.stringToHclTerraform(struct!.dummyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid: {
      value: cdktf.stringToHclTerraform(struct!.glid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_enable: {
      value: cdktf.numberToHclTerraform(struct!.logEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_periodic: {
      value: cdktf.numberToHclTerraform(struct!.logPeriodic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_template: {
      value: ddosDstZonePortRangeListDynamicEntryOverflowPolicyListZoneTemplateToHclTerraform(struct!.zoneTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeListDynamicEntryOverflowPolicyListZoneTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeListDynamicEntryOverflowPolicyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortRangeListDynamicEntryOverflowPolicyListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._dummyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dummyName = this._dummyName;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._logEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEnable = this._logEnable;
    }
    if (this._logPeriodic !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPeriodic = this._logPeriodic;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._zoneTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTemplate = this._zoneTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeListDynamicEntryOverflowPolicyListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._dummyName = undefined;
      this._glid = undefined;
      this._logEnable = undefined;
      this._logPeriodic = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._zoneTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._dummyName = value.dummyName;
      this._glid = value.glid;
      this._logEnable = value.logEnable;
      this._logPeriodic = value.logPeriodic;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._zoneTemplate.internalValue = value.zoneTemplate;
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

  // dummy_name - computed: false, optional: false, required: true
  private _dummyName?: string; 
  public get dummyName() {
    return this.getStringAttribute('dummy_name');
  }
  public set dummyName(value: string) {
    this._dummyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dummyNameInput() {
    return this._dummyName;
  }

  // glid - computed: false, optional: true, required: false
  private _glid?: string; 
  public get glid() {
    return this.getStringAttribute('glid');
  }
  public set glid(value: string) {
    this._glid = value;
  }
  public resetGlid() {
    this._glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidInput() {
    return this._glid;
  }

  // log_enable - computed: false, optional: true, required: false
  private _logEnable?: number; 
  public get logEnable() {
    return this.getNumberAttribute('log_enable');
  }
  public set logEnable(value: number) {
    this._logEnable = value;
  }
  public resetLogEnable() {
    this._logEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEnableInput() {
    return this._logEnable;
  }

  // log_periodic - computed: false, optional: true, required: false
  private _logPeriodic?: number; 
  public get logPeriodic() {
    return this.getNumberAttribute('log_periodic');
  }
  public set logPeriodic(value: number) {
    this._logPeriodic = value;
  }
  public resetLogPeriodic() {
    this._logPeriodic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPeriodicInput() {
    return this._logPeriodic;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // zone_template - computed: false, optional: true, required: false
  private _zoneTemplate = new DdosDstZonePortRangeListDynamicEntryOverflowPolicyListZoneTemplateOutputReference(this, "zone_template");
  public get zoneTemplate() {
    return this._zoneTemplate;
  }
  public putZoneTemplate(value: DdosDstZonePortRangeListDynamicEntryOverflowPolicyListZoneTemplate) {
    this._zoneTemplate.internalValue = value;
  }
  public resetZoneTemplate() {
    this._zoneTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTemplateInput() {
    return this._zoneTemplate.internalValue;
  }
}

export class DdosDstZonePortRangeListDynamicEntryOverflowPolicyListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortRangeListDynamicEntryOverflowPolicyListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortRangeListDynamicEntryOverflowPolicyListStructOutputReference {
    return new DdosDstZonePortRangeListDynamicEntryOverflowPolicyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortRangeListGlidCfg {
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#action_list DdosDstZone#action_list}
  */
  readonly actionList?: string;
  /**
  * Global limit ID for the whole zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#glid DdosDstZone#glid}
  */
  readonly glid?: string;
  /**
  * 'drop': Drop packets for glid exceed (Default if default-action-list is not configured); 'ignore': Do nothing for glid exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#glid_action DdosDstZone#glid_action}
  */
  readonly glidAction?: string;
  /**
  * Global limit ID per address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#per_addr_glid DdosDstZone#per_addr_glid}
  */
  readonly perAddrGlid?: string;
}

export function ddosDstZonePortRangeListGlidCfgToTerraform(struct?: DdosDstZonePortRangeListGlidCfgOutputReference | DdosDstZonePortRangeListGlidCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_list: cdktf.stringToTerraform(struct!.actionList),
    glid: cdktf.stringToTerraform(struct!.glid),
    glid_action: cdktf.stringToTerraform(struct!.glidAction),
    per_addr_glid: cdktf.stringToTerraform(struct!.perAddrGlid),
  }
}


export function ddosDstZonePortRangeListGlidCfgToHclTerraform(struct?: DdosDstZonePortRangeListGlidCfgOutputReference | DdosDstZonePortRangeListGlidCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_list: {
      value: cdktf.stringToHclTerraform(struct!.actionList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid: {
      value: cdktf.stringToHclTerraform(struct!.glid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid_action: {
      value: cdktf.stringToHclTerraform(struct!.glidAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_addr_glid: {
      value: cdktf.stringToHclTerraform(struct!.perAddrGlid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeListGlidCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortRangeListGlidCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionList = this._actionList;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._glidAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidAction = this._glidAction;
    }
    if (this._perAddrGlid !== undefined) {
      hasAnyValues = true;
      internalValueResult.perAddrGlid = this._perAddrGlid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeListGlidCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionList = undefined;
      this._glid = undefined;
      this._glidAction = undefined;
      this._perAddrGlid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionList = value.actionList;
      this._glid = value.glid;
      this._glidAction = value.glidAction;
      this._perAddrGlid = value.perAddrGlid;
    }
  }

  // action_list - computed: false, optional: true, required: false
  private _actionList?: string; 
  public get actionList() {
    return this.getStringAttribute('action_list');
  }
  public set actionList(value: string) {
    this._actionList = value;
  }
  public resetActionList() {
    this._actionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionListInput() {
    return this._actionList;
  }

  // glid - computed: false, optional: true, required: false
  private _glid?: string; 
  public get glid() {
    return this.getStringAttribute('glid');
  }
  public set glid(value: string) {
    this._glid = value;
  }
  public resetGlid() {
    this._glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidInput() {
    return this._glid;
  }

  // glid_action - computed: false, optional: true, required: false
  private _glidAction?: string; 
  public get glidAction() {
    return this.getStringAttribute('glid_action');
  }
  public set glidAction(value: string) {
    this._glidAction = value;
  }
  public resetGlidAction() {
    this._glidAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidActionInput() {
    return this._glidAction;
  }

  // per_addr_glid - computed: false, optional: true, required: false
  private _perAddrGlid?: string; 
  public get perAddrGlid() {
    return this.getStringAttribute('per_addr_glid');
  }
  public set perAddrGlid(value: string) {
    this._perAddrGlid = value;
  }
  public resetPerAddrGlid() {
    this._perAddrGlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perAddrGlidInput() {
    return this._perAddrGlid;
  }
}
export interface DdosDstZonePortRangeListIpFilteringPolicyOper {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZonePortRangeListIpFilteringPolicyOperToTerraform(struct?: DdosDstZonePortRangeListIpFilteringPolicyOperOutputReference | DdosDstZonePortRangeListIpFilteringPolicyOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZonePortRangeListIpFilteringPolicyOperToHclTerraform(struct?: DdosDstZonePortRangeListIpFilteringPolicyOperOutputReference | DdosDstZonePortRangeListIpFilteringPolicyOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeListIpFilteringPolicyOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortRangeListIpFilteringPolicyOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeListIpFilteringPolicyOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DdosDstZonePortRangeListIpsSamplingEnable {
  /**
  * 'all': all; 'ips_matched_total': IPS Matched Total; 'ips_matched_action_pass': IPS Matched Action Pass; 'ips_matched_action_drop': IPS Matched Action Drop; 'ips_matched_action_blacklist': IPS Matched Action Blacklist; 'ips_matched_severity_high': IPS Matched Severity High; 'ips_matched_severity_medium': IPS Matched Severity Medium; 'ips_matched_severity_low': IPS Matched Severity Low; 'src_ips_matched_action_pass': Src IPS Matched Action Pass; 'src_ips_matched_action_drop': Src IPS Matched Action Drop; 'src_ips_matched_action_blacklist': Src IPS Matched Action Blacklist; 'src_ips_matched_severity_high': Src IPS Matched Severity High; 'src_ips_matched_severity_medium': Src IPS Matched Severity Medium; 'src_ips_matched_severity_low': Src IPS Matched Severity Low;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#counters1 DdosDstZone#counters1}
  */
  readonly counters1?: string;
}

export function ddosDstZonePortRangeListIpsSamplingEnableToTerraform(struct?: DdosDstZonePortRangeListIpsSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ddosDstZonePortRangeListIpsSamplingEnableToHclTerraform(struct?: DdosDstZonePortRangeListIpsSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeListIpsSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortRangeListIpsSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeListIpsSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class DdosDstZonePortRangeListIpsSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortRangeListIpsSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortRangeListIpsSamplingEnableOutputReference {
    return new DdosDstZonePortRangeListIpsSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortRangeListIps {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#sampling_enable DdosDstZone#sampling_enable}
  */
  readonly samplingEnable?: DdosDstZonePortRangeListIpsSamplingEnable[] | cdktf.IResolvable;
}

export function ddosDstZonePortRangeListIpsToTerraform(struct?: DdosDstZonePortRangeListIpsOutputReference | DdosDstZonePortRangeListIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(ddosDstZonePortRangeListIpsSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function ddosDstZonePortRangeListIpsToHclTerraform(struct?: DdosDstZonePortRangeListIpsOutputReference | DdosDstZonePortRangeListIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(ddosDstZonePortRangeListIpsSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeListIpsSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeListIpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortRangeListIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeListIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new DdosDstZonePortRangeListIpsSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosDstZonePortRangeListIpsSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface DdosDstZonePortRangeListLevelListIndicatorListStruct {
  /**
  * Expected minimal data size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#data_packet_size DdosDstZone#data_packet_size}
  */
  readonly dataPacketSize?: number;
  /**
  * Score corresponding to the indicator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#score DdosDstZone#score}
  */
  readonly score?: number;
  /**
  * Indicator per-src threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#src_threshold_large_num DdosDstZone#src_threshold_large_num}
  */
  readonly srcThresholdLargeNum?: number;
  /**
  * Indicator per-src threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#src_threshold_num DdosDstZone#src_threshold_num}
  */
  readonly srcThresholdNum?: number;
  /**
  * Indicator per-src threshold (Non-zero floating point)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#src_threshold_str DdosDstZone#src_threshold_str}
  */
  readonly srcThresholdStr?: string;
  /**
  * Violation actions to use when this src indicator threshold reaches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#src_violation_actions DdosDstZone#src_violation_actions}
  */
  readonly srcViolationActions?: string;
  /**
  * Expected minimal window size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#tcp_window_size DdosDstZone#tcp_window_size}
  */
  readonly tcpWindowSize?: number;
  /**
  * 'pkt-rate': rate of incoming packets; 'pkt-drop-rate': rate of packets got dropped; 'bit-rate': rate of incoming bits; 'pkt-drop-ratio': ratio of incoming packet rate divided by the rate of dropping packets; 'bytes-to-bytes-from-ratio': ratio of incoming packet rate divided by the rate of outgoing packets; 'concurrent-conns': number of concurrent connections; 'conn-miss-rate': rate of incoming packets for which no previously established connection exists; 'syn-rate': rate on incoming SYN packets; 'fin-rate': rate on incoming FIN packets; 'rst-rate': rate of incoming RST packets; 'small-window-ack-rate': rate of small window advertisement; 'empty-ack-rate': rate of incoming packets which have no payload; 'small-payload-rate': rate of short payload packet; 'syn-fin-ratio': ratio of incoming SYN packet rate divided by the rate of incoming FIN packets; 'cpu-utilization': average data CPU utilization; 'interface-utilization': outside interface utilization;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#type DdosDstZone#type}
  */
  readonly type: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#user_tag DdosDstZone#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
  /**
  * Threshold for the entire zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#zone_threshold_large_num DdosDstZone#zone_threshold_large_num}
  */
  readonly zoneThresholdLargeNum?: number;
  /**
  * Threshold for the entire zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#zone_threshold_num DdosDstZone#zone_threshold_num}
  */
  readonly zoneThresholdNum?: number;
  /**
  * Threshold for the entire zone (Non-zero floating point)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#zone_threshold_str DdosDstZone#zone_threshold_str}
  */
  readonly zoneThresholdStr?: string;
  /**
  * Violation actions to use when this zone indicator threshold reaches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#zone_violation_actions DdosDstZone#zone_violation_actions}
  */
  readonly zoneViolationActions?: string;
}

export function ddosDstZonePortRangeListLevelListIndicatorListStructToTerraform(struct?: DdosDstZonePortRangeListLevelListIndicatorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_packet_size: cdktf.numberToTerraform(struct!.dataPacketSize),
    score: cdktf.numberToTerraform(struct!.score),
    src_threshold_large_num: cdktf.numberToTerraform(struct!.srcThresholdLargeNum),
    src_threshold_num: cdktf.numberToTerraform(struct!.srcThresholdNum),
    src_threshold_str: cdktf.stringToTerraform(struct!.srcThresholdStr),
    src_violation_actions: cdktf.stringToTerraform(struct!.srcViolationActions),
    tcp_window_size: cdktf.numberToTerraform(struct!.tcpWindowSize),
    type: cdktf.stringToTerraform(struct!.type),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    zone_threshold_large_num: cdktf.numberToTerraform(struct!.zoneThresholdLargeNum),
    zone_threshold_num: cdktf.numberToTerraform(struct!.zoneThresholdNum),
    zone_threshold_str: cdktf.stringToTerraform(struct!.zoneThresholdStr),
    zone_violation_actions: cdktf.stringToTerraform(struct!.zoneViolationActions),
  }
}


export function ddosDstZonePortRangeListLevelListIndicatorListStructToHclTerraform(struct?: DdosDstZonePortRangeListLevelListIndicatorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_packet_size: {
      value: cdktf.numberToHclTerraform(struct!.dataPacketSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    score: {
      value: cdktf.numberToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_threshold_large_num: {
      value: cdktf.numberToHclTerraform(struct!.srcThresholdLargeNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_threshold_num: {
      value: cdktf.numberToHclTerraform(struct!.srcThresholdNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_threshold_str: {
      value: cdktf.stringToHclTerraform(struct!.srcThresholdStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_violation_actions: {
      value: cdktf.stringToHclTerraform(struct!.srcViolationActions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_window_size: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_threshold_large_num: {
      value: cdktf.numberToHclTerraform(struct!.zoneThresholdLargeNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_threshold_num: {
      value: cdktf.numberToHclTerraform(struct!.zoneThresholdNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_threshold_str: {
      value: cdktf.stringToHclTerraform(struct!.zoneThresholdStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_violation_actions: {
      value: cdktf.stringToHclTerraform(struct!.zoneViolationActions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeListLevelListIndicatorListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortRangeListLevelListIndicatorListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataPacketSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPacketSize = this._dataPacketSize;
    }
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    if (this._srcThresholdLargeNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcThresholdLargeNum = this._srcThresholdLargeNum;
    }
    if (this._srcThresholdNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcThresholdNum = this._srcThresholdNum;
    }
    if (this._srcThresholdStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcThresholdStr = this._srcThresholdStr;
    }
    if (this._srcViolationActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcViolationActions = this._srcViolationActions;
    }
    if (this._tcpWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowSize = this._tcpWindowSize;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._zoneThresholdLargeNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneThresholdLargeNum = this._zoneThresholdLargeNum;
    }
    if (this._zoneThresholdNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneThresholdNum = this._zoneThresholdNum;
    }
    if (this._zoneThresholdStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneThresholdStr = this._zoneThresholdStr;
    }
    if (this._zoneViolationActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneViolationActions = this._zoneViolationActions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeListLevelListIndicatorListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataPacketSize = undefined;
      this._score = undefined;
      this._srcThresholdLargeNum = undefined;
      this._srcThresholdNum = undefined;
      this._srcThresholdStr = undefined;
      this._srcViolationActions = undefined;
      this._tcpWindowSize = undefined;
      this._type = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._zoneThresholdLargeNum = undefined;
      this._zoneThresholdNum = undefined;
      this._zoneThresholdStr = undefined;
      this._zoneViolationActions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataPacketSize = value.dataPacketSize;
      this._score = value.score;
      this._srcThresholdLargeNum = value.srcThresholdLargeNum;
      this._srcThresholdNum = value.srcThresholdNum;
      this._srcThresholdStr = value.srcThresholdStr;
      this._srcViolationActions = value.srcViolationActions;
      this._tcpWindowSize = value.tcpWindowSize;
      this._type = value.type;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._zoneThresholdLargeNum = value.zoneThresholdLargeNum;
      this._zoneThresholdNum = value.zoneThresholdNum;
      this._zoneThresholdStr = value.zoneThresholdStr;
      this._zoneViolationActions = value.zoneViolationActions;
    }
  }

  // data_packet_size - computed: false, optional: true, required: false
  private _dataPacketSize?: number; 
  public get dataPacketSize() {
    return this.getNumberAttribute('data_packet_size');
  }
  public set dataPacketSize(value: number) {
    this._dataPacketSize = value;
  }
  public resetDataPacketSize() {
    this._dataPacketSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPacketSizeInput() {
    return this._dataPacketSize;
  }

  // score - computed: false, optional: true, required: false
  private _score?: number; 
  public get score() {
    return this.getNumberAttribute('score');
  }
  public set score(value: number) {
    this._score = value;
  }
  public resetScore() {
    this._score = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }

  // src_threshold_large_num - computed: false, optional: true, required: false
  private _srcThresholdLargeNum?: number; 
  public get srcThresholdLargeNum() {
    return this.getNumberAttribute('src_threshold_large_num');
  }
  public set srcThresholdLargeNum(value: number) {
    this._srcThresholdLargeNum = value;
  }
  public resetSrcThresholdLargeNum() {
    this._srcThresholdLargeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcThresholdLargeNumInput() {
    return this._srcThresholdLargeNum;
  }

  // src_threshold_num - computed: false, optional: true, required: false
  private _srcThresholdNum?: number; 
  public get srcThresholdNum() {
    return this.getNumberAttribute('src_threshold_num');
  }
  public set srcThresholdNum(value: number) {
    this._srcThresholdNum = value;
  }
  public resetSrcThresholdNum() {
    this._srcThresholdNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcThresholdNumInput() {
    return this._srcThresholdNum;
  }

  // src_threshold_str - computed: false, optional: true, required: false
  private _srcThresholdStr?: string; 
  public get srcThresholdStr() {
    return this.getStringAttribute('src_threshold_str');
  }
  public set srcThresholdStr(value: string) {
    this._srcThresholdStr = value;
  }
  public resetSrcThresholdStr() {
    this._srcThresholdStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcThresholdStrInput() {
    return this._srcThresholdStr;
  }

  // src_violation_actions - computed: false, optional: true, required: false
  private _srcViolationActions?: string; 
  public get srcViolationActions() {
    return this.getStringAttribute('src_violation_actions');
  }
  public set srcViolationActions(value: string) {
    this._srcViolationActions = value;
  }
  public resetSrcViolationActions() {
    this._srcViolationActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcViolationActionsInput() {
    return this._srcViolationActions;
  }

  // tcp_window_size - computed: false, optional: true, required: false
  private _tcpWindowSize?: number; 
  public get tcpWindowSize() {
    return this.getNumberAttribute('tcp_window_size');
  }
  public set tcpWindowSize(value: number) {
    this._tcpWindowSize = value;
  }
  public resetTcpWindowSize() {
    this._tcpWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowSizeInput() {
    return this._tcpWindowSize;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // zone_threshold_large_num - computed: false, optional: true, required: false
  private _zoneThresholdLargeNum?: number; 
  public get zoneThresholdLargeNum() {
    return this.getNumberAttribute('zone_threshold_large_num');
  }
  public set zoneThresholdLargeNum(value: number) {
    this._zoneThresholdLargeNum = value;
  }
  public resetZoneThresholdLargeNum() {
    this._zoneThresholdLargeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneThresholdLargeNumInput() {
    return this._zoneThresholdLargeNum;
  }

  // zone_threshold_num - computed: false, optional: true, required: false
  private _zoneThresholdNum?: number; 
  public get zoneThresholdNum() {
    return this.getNumberAttribute('zone_threshold_num');
  }
  public set zoneThresholdNum(value: number) {
    this._zoneThresholdNum = value;
  }
  public resetZoneThresholdNum() {
    this._zoneThresholdNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneThresholdNumInput() {
    return this._zoneThresholdNum;
  }

  // zone_threshold_str - computed: false, optional: true, required: false
  private _zoneThresholdStr?: string; 
  public get zoneThresholdStr() {
    return this.getStringAttribute('zone_threshold_str');
  }
  public set zoneThresholdStr(value: string) {
    this._zoneThresholdStr = value;
  }
  public resetZoneThresholdStr() {
    this._zoneThresholdStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneThresholdStrInput() {
    return this._zoneThresholdStr;
  }

  // zone_violation_actions - computed: false, optional: true, required: false
  private _zoneViolationActions?: string; 
  public get zoneViolationActions() {
    return this.getStringAttribute('zone_violation_actions');
  }
  public set zoneViolationActions(value: string) {
    this._zoneViolationActions = value;
  }
  public resetZoneViolationActions() {
    this._zoneViolationActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneViolationActionsInput() {
    return this._zoneViolationActions;
  }
}

export class DdosDstZonePortRangeListLevelListIndicatorListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortRangeListLevelListIndicatorListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortRangeListLevelListIndicatorListStructOutputReference {
    return new DdosDstZonePortRangeListLevelListIndicatorListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortRangeListLevelListZoneTemplate {
  /**
  * DDOS dns template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#dns DdosDstZone#dns}
  */
  readonly dns?: string;
  /**
  * DDOS encap template (IPv6-over-IPv4 / IPv4-over-IPv6 are not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#encap DdosDstZone#encap}
  */
  readonly encap?: string;
  /**
  * DDOS http template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#http DdosDstZone#http}
  */
  readonly http?: string;
  /**
  * DDOS quic template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#quic DdosDstZone#quic}
  */
  readonly quic?: string;
  /**
  * DDOS sip template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#sip DdosDstZone#sip}
  */
  readonly sip?: string;
  /**
  * DDOS ssl-l4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#ssl_l4 DdosDstZone#ssl_l4}
  */
  readonly sslL4?: string;
  /**
  * DDOS tcp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#tcp DdosDstZone#tcp}
  */
  readonly tcp?: string;
  /**
  * DDOS udp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#udp DdosDstZone#udp}
  */
  readonly udp?: string;
}

export function ddosDstZonePortRangeListLevelListZoneTemplateToTerraform(struct?: DdosDstZonePortRangeListLevelListZoneTemplateOutputReference | DdosDstZonePortRangeListLevelListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    encap: cdktf.stringToTerraform(struct!.encap),
    http: cdktf.stringToTerraform(struct!.http),
    quic: cdktf.stringToTerraform(struct!.quic),
    sip: cdktf.stringToTerraform(struct!.sip),
    ssl_l4: cdktf.stringToTerraform(struct!.sslL4),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    udp: cdktf.stringToTerraform(struct!.udp),
  }
}


export function ddosDstZonePortRangeListLevelListZoneTemplateToHclTerraform(struct?: DdosDstZonePortRangeListLevelListZoneTemplateOutputReference | DdosDstZonePortRangeListLevelListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encap: {
      value: cdktf.stringToHclTerraform(struct!.encap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: cdktf.stringToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quic: {
      value: cdktf.stringToHclTerraform(struct!.quic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip: {
      value: cdktf.stringToHclTerraform(struct!.sip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_l4: {
      value: cdktf.stringToHclTerraform(struct!.sslL4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp: {
      value: cdktf.stringToHclTerraform(struct!.udp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeListLevelListZoneTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortRangeListLevelListZoneTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._encap !== undefined) {
      hasAnyValues = true;
      internalValueResult.encap = this._encap;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._quic !== undefined) {
      hasAnyValues = true;
      internalValueResult.quic = this._quic;
    }
    if (this._sip !== undefined) {
      hasAnyValues = true;
      internalValueResult.sip = this._sip;
    }
    if (this._sslL4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4 = this._sslL4;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeListLevelListZoneTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dns = undefined;
      this._encap = undefined;
      this._http = undefined;
      this._quic = undefined;
      this._sip = undefined;
      this._sslL4 = undefined;
      this._tcp = undefined;
      this._udp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dns = value.dns;
      this._encap = value.encap;
      this._http = value.http;
      this._quic = value.quic;
      this._sip = value.sip;
      this._sslL4 = value.sslL4;
      this._tcp = value.tcp;
      this._udp = value.udp;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // encap - computed: false, optional: true, required: false
  private _encap?: string; 
  public get encap() {
    return this.getStringAttribute('encap');
  }
  public set encap(value: string) {
    this._encap = value;
  }
  public resetEncap() {
    this._encap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
  }

  // http - computed: false, optional: true, required: false
  private _http?: string; 
  public get http() {
    return this.getStringAttribute('http');
  }
  public set http(value: string) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // quic - computed: false, optional: true, required: false
  private _quic?: string; 
  public get quic() {
    return this.getStringAttribute('quic');
  }
  public set quic(value: string) {
    this._quic = value;
  }
  public resetQuic() {
    this._quic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicInput() {
    return this._quic;
  }

  // sip - computed: false, optional: true, required: false
  private _sip?: string; 
  public get sip() {
    return this.getStringAttribute('sip');
  }
  public set sip(value: string) {
    this._sip = value;
  }
  public resetSip() {
    this._sip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipInput() {
    return this._sip;
  }

  // ssl_l4 - computed: false, optional: true, required: false
  private _sslL4?: string; 
  public get sslL4() {
    return this.getStringAttribute('ssl_l4');
  }
  public set sslL4(value: string) {
    this._sslL4 = value;
  }
  public resetSslL4() {
    this._sslL4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4Input() {
    return this._sslL4;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: string; 
  public get tcp() {
    return this.getStringAttribute('tcp');
  }
  public set tcp(value: string) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // udp - computed: false, optional: true, required: false
  private _udp?: string; 
  public get udp() {
    return this.getStringAttribute('udp');
  }
  public set udp(value: string) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
  }
}
export interface DdosDstZonePortRangeListLevelListStruct {
  /**
  * Apply extracted filters from this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#apply_extracted_filters DdosDstZone#apply_extracted_filters}
  */
  readonly applyExtractedFilters?: number;
  /**
  * Close session for unauthenticated sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#close_sessions_for_unauth_sources DdosDstZone#close_sessions_for_unauth_sources}
  */
  readonly closeSessionsForUnauthSources?: number;
  /**
  * 'drop': Drop packets for glid exceed (Default); 'blacklist-src': Blacklist-src for glid exceed; 'ignore': Do nothing for glid exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#glid_action DdosDstZone#glid_action}
  */
  readonly glidAction?: string;
  /**
  * '0': Default policy level; '1': Policy level 1; '2': Policy level 2; '3': Policy level 3; '4': Policy level 4;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#level_num DdosDstZone#level_num}
  */
  readonly levelNum: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#src_default_glid DdosDstZone#src_default_glid}
  */
  readonly srcDefaultGlid?: string;
  /**
  * Source activation score of this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#src_escalation_score DdosDstZone#src_escalation_score}
  */
  readonly srcEscalationScore?: number;
  /**
  * Violation actions apply due to source escalate from this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#src_violation_actions DdosDstZone#src_violation_actions}
  */
  readonly srcViolationActions?: string;
  /**
  * Start pattern recognition from this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#start_pattern_recognition DdosDstZone#start_pattern_recognition}
  */
  readonly startPatternRecognition?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#user_tag DdosDstZone#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
  /**
  * Zone activation score of this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#zone_escalation_score DdosDstZone#zone_escalation_score}
  */
  readonly zoneEscalationScore?: number;
  /**
  * Violation actions apply due to zone escalate from this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#zone_violation_actions DdosDstZone#zone_violation_actions}
  */
  readonly zoneViolationActions?: string;
  /**
  * indicator_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#indicator_list DdosDstZone#indicator_list}
  */
  readonly indicatorList?: DdosDstZonePortRangeListLevelListIndicatorListStruct[] | cdktf.IResolvable;
  /**
  * zone_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#zone_template DdosDstZone#zone_template}
  */
  readonly zoneTemplate?: DdosDstZonePortRangeListLevelListZoneTemplate;
}

export function ddosDstZonePortRangeListLevelListStructToTerraform(struct?: DdosDstZonePortRangeListLevelListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_extracted_filters: cdktf.numberToTerraform(struct!.applyExtractedFilters),
    close_sessions_for_unauth_sources: cdktf.numberToTerraform(struct!.closeSessionsForUnauthSources),
    glid_action: cdktf.stringToTerraform(struct!.glidAction),
    level_num: cdktf.stringToTerraform(struct!.levelNum),
    src_default_glid: cdktf.stringToTerraform(struct!.srcDefaultGlid),
    src_escalation_score: cdktf.numberToTerraform(struct!.srcEscalationScore),
    src_violation_actions: cdktf.stringToTerraform(struct!.srcViolationActions),
    start_pattern_recognition: cdktf.numberToTerraform(struct!.startPatternRecognition),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    zone_escalation_score: cdktf.numberToTerraform(struct!.zoneEscalationScore),
    zone_violation_actions: cdktf.stringToTerraform(struct!.zoneViolationActions),
    indicator_list: cdktf.listMapper(ddosDstZonePortRangeListLevelListIndicatorListStructToTerraform, true)(struct!.indicatorList),
    zone_template: ddosDstZonePortRangeListLevelListZoneTemplateToTerraform(struct!.zoneTemplate),
  }
}


export function ddosDstZonePortRangeListLevelListStructToHclTerraform(struct?: DdosDstZonePortRangeListLevelListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_extracted_filters: {
      value: cdktf.numberToHclTerraform(struct!.applyExtractedFilters),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    close_sessions_for_unauth_sources: {
      value: cdktf.numberToHclTerraform(struct!.closeSessionsForUnauthSources),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    glid_action: {
      value: cdktf.stringToHclTerraform(struct!.glidAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level_num: {
      value: cdktf.stringToHclTerraform(struct!.levelNum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_default_glid: {
      value: cdktf.stringToHclTerraform(struct!.srcDefaultGlid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_escalation_score: {
      value: cdktf.numberToHclTerraform(struct!.srcEscalationScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_violation_actions: {
      value: cdktf.stringToHclTerraform(struct!.srcViolationActions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_pattern_recognition: {
      value: cdktf.numberToHclTerraform(struct!.startPatternRecognition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_escalation_score: {
      value: cdktf.numberToHclTerraform(struct!.zoneEscalationScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_violation_actions: {
      value: cdktf.stringToHclTerraform(struct!.zoneViolationActions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indicator_list: {
      value: cdktf.listMapperHcl(ddosDstZonePortRangeListLevelListIndicatorListStructToHclTerraform, true)(struct!.indicatorList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeListLevelListIndicatorListStructList",
    },
    zone_template: {
      value: ddosDstZonePortRangeListLevelListZoneTemplateToHclTerraform(struct!.zoneTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeListLevelListZoneTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeListLevelListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortRangeListLevelListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyExtractedFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyExtractedFilters = this._applyExtractedFilters;
    }
    if (this._closeSessionsForUnauthSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.closeSessionsForUnauthSources = this._closeSessionsForUnauthSources;
    }
    if (this._glidAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidAction = this._glidAction;
    }
    if (this._levelNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNum = this._levelNum;
    }
    if (this._srcDefaultGlid !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDefaultGlid = this._srcDefaultGlid;
    }
    if (this._srcEscalationScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcEscalationScore = this._srcEscalationScore;
    }
    if (this._srcViolationActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcViolationActions = this._srcViolationActions;
    }
    if (this._startPatternRecognition !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPatternRecognition = this._startPatternRecognition;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._zoneEscalationScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneEscalationScore = this._zoneEscalationScore;
    }
    if (this._zoneViolationActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneViolationActions = this._zoneViolationActions;
    }
    if (this._indicatorList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorList = this._indicatorList?.internalValue;
    }
    if (this._zoneTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTemplate = this._zoneTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeListLevelListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applyExtractedFilters = undefined;
      this._closeSessionsForUnauthSources = undefined;
      this._glidAction = undefined;
      this._levelNum = undefined;
      this._srcDefaultGlid = undefined;
      this._srcEscalationScore = undefined;
      this._srcViolationActions = undefined;
      this._startPatternRecognition = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._zoneEscalationScore = undefined;
      this._zoneViolationActions = undefined;
      this._indicatorList.internalValue = undefined;
      this._zoneTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applyExtractedFilters = value.applyExtractedFilters;
      this._closeSessionsForUnauthSources = value.closeSessionsForUnauthSources;
      this._glidAction = value.glidAction;
      this._levelNum = value.levelNum;
      this._srcDefaultGlid = value.srcDefaultGlid;
      this._srcEscalationScore = value.srcEscalationScore;
      this._srcViolationActions = value.srcViolationActions;
      this._startPatternRecognition = value.startPatternRecognition;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._zoneEscalationScore = value.zoneEscalationScore;
      this._zoneViolationActions = value.zoneViolationActions;
      this._indicatorList.internalValue = value.indicatorList;
      this._zoneTemplate.internalValue = value.zoneTemplate;
    }
  }

  // apply_extracted_filters - computed: false, optional: true, required: false
  private _applyExtractedFilters?: number; 
  public get applyExtractedFilters() {
    return this.getNumberAttribute('apply_extracted_filters');
  }
  public set applyExtractedFilters(value: number) {
    this._applyExtractedFilters = value;
  }
  public resetApplyExtractedFilters() {
    this._applyExtractedFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyExtractedFiltersInput() {
    return this._applyExtractedFilters;
  }

  // close_sessions_for_unauth_sources - computed: false, optional: true, required: false
  private _closeSessionsForUnauthSources?: number; 
  public get closeSessionsForUnauthSources() {
    return this.getNumberAttribute('close_sessions_for_unauth_sources');
  }
  public set closeSessionsForUnauthSources(value: number) {
    this._closeSessionsForUnauthSources = value;
  }
  public resetCloseSessionsForUnauthSources() {
    this._closeSessionsForUnauthSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeSessionsForUnauthSourcesInput() {
    return this._closeSessionsForUnauthSources;
  }

  // glid_action - computed: false, optional: true, required: false
  private _glidAction?: string; 
  public get glidAction() {
    return this.getStringAttribute('glid_action');
  }
  public set glidAction(value: string) {
    this._glidAction = value;
  }
  public resetGlidAction() {
    this._glidAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidActionInput() {
    return this._glidAction;
  }

  // level_num - computed: false, optional: false, required: true
  private _levelNum?: string; 
  public get levelNum() {
    return this.getStringAttribute('level_num');
  }
  public set levelNum(value: string) {
    this._levelNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumInput() {
    return this._levelNum;
  }

  // src_default_glid - computed: false, optional: true, required: false
  private _srcDefaultGlid?: string; 
  public get srcDefaultGlid() {
    return this.getStringAttribute('src_default_glid');
  }
  public set srcDefaultGlid(value: string) {
    this._srcDefaultGlid = value;
  }
  public resetSrcDefaultGlid() {
    this._srcDefaultGlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDefaultGlidInput() {
    return this._srcDefaultGlid;
  }

  // src_escalation_score - computed: false, optional: true, required: false
  private _srcEscalationScore?: number; 
  public get srcEscalationScore() {
    return this.getNumberAttribute('src_escalation_score');
  }
  public set srcEscalationScore(value: number) {
    this._srcEscalationScore = value;
  }
  public resetSrcEscalationScore() {
    this._srcEscalationScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcEscalationScoreInput() {
    return this._srcEscalationScore;
  }

  // src_violation_actions - computed: false, optional: true, required: false
  private _srcViolationActions?: string; 
  public get srcViolationActions() {
    return this.getStringAttribute('src_violation_actions');
  }
  public set srcViolationActions(value: string) {
    this._srcViolationActions = value;
  }
  public resetSrcViolationActions() {
    this._srcViolationActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcViolationActionsInput() {
    return this._srcViolationActions;
  }

  // start_pattern_recognition - computed: false, optional: true, required: false
  private _startPatternRecognition?: number; 
  public get startPatternRecognition() {
    return this.getNumberAttribute('start_pattern_recognition');
  }
  public set startPatternRecognition(value: number) {
    this._startPatternRecognition = value;
  }
  public resetStartPatternRecognition() {
    this._startPatternRecognition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPatternRecognitionInput() {
    return this._startPatternRecognition;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // zone_escalation_score - computed: false, optional: true, required: false
  private _zoneEscalationScore?: number; 
  public get zoneEscalationScore() {
    return this.getNumberAttribute('zone_escalation_score');
  }
  public set zoneEscalationScore(value: number) {
    this._zoneEscalationScore = value;
  }
  public resetZoneEscalationScore() {
    this._zoneEscalationScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneEscalationScoreInput() {
    return this._zoneEscalationScore;
  }

  // zone_violation_actions - computed: false, optional: true, required: false
  private _zoneViolationActions?: string; 
  public get zoneViolationActions() {
    return this.getStringAttribute('zone_violation_actions');
  }
  public set zoneViolationActions(value: string) {
    this._zoneViolationActions = value;
  }
  public resetZoneViolationActions() {
    this._zoneViolationActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneViolationActionsInput() {
    return this._zoneViolationActions;
  }

  // indicator_list - computed: false, optional: true, required: false
  private _indicatorList = new DdosDstZonePortRangeListLevelListIndicatorListStructList(this, "indicator_list", false);
  public get indicatorList() {
    return this._indicatorList;
  }
  public putIndicatorList(value: DdosDstZonePortRangeListLevelListIndicatorListStruct[] | cdktf.IResolvable) {
    this._indicatorList.internalValue = value;
  }
  public resetIndicatorList() {
    this._indicatorList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorListInput() {
    return this._indicatorList.internalValue;
  }

  // zone_template - computed: false, optional: true, required: false
  private _zoneTemplate = new DdosDstZonePortRangeListLevelListZoneTemplateOutputReference(this, "zone_template");
  public get zoneTemplate() {
    return this._zoneTemplate;
  }
  public putZoneTemplate(value: DdosDstZonePortRangeListLevelListZoneTemplate) {
    this._zoneTemplate.internalValue = value;
  }
  public resetZoneTemplate() {
    this._zoneTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTemplateInput() {
    return this._zoneTemplate.internalValue;
  }
}

export class DdosDstZonePortRangeListLevelListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortRangeListLevelListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortRangeListLevelListStructOutputReference {
    return new DdosDstZonePortRangeListLevelListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortRangeListManualModeListZoneTemplate {
  /**
  * DDOS dns template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#dns DdosDstZone#dns}
  */
  readonly dns?: string;
  /**
  * DDOS encap template (IPv6-over-IPv4 / IPv4-over-IPv6 are not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#encap DdosDstZone#encap}
  */
  readonly encap?: string;
  /**
  * DDOS http template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#http DdosDstZone#http}
  */
  readonly http?: string;
  /**
  * DDOS quic template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#quic DdosDstZone#quic}
  */
  readonly quic?: string;
  /**
  * DDOS sip template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#sip DdosDstZone#sip}
  */
  readonly sip?: string;
  /**
  * DDOS ssl-l4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#ssl_l4 DdosDstZone#ssl_l4}
  */
  readonly sslL4?: string;
  /**
  * DDOS tcp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#tcp DdosDstZone#tcp}
  */
  readonly tcp?: string;
  /**
  * DDOS udp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#udp DdosDstZone#udp}
  */
  readonly udp?: string;
}

export function ddosDstZonePortRangeListManualModeListZoneTemplateToTerraform(struct?: DdosDstZonePortRangeListManualModeListZoneTemplateOutputReference | DdosDstZonePortRangeListManualModeListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    encap: cdktf.stringToTerraform(struct!.encap),
    http: cdktf.stringToTerraform(struct!.http),
    quic: cdktf.stringToTerraform(struct!.quic),
    sip: cdktf.stringToTerraform(struct!.sip),
    ssl_l4: cdktf.stringToTerraform(struct!.sslL4),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    udp: cdktf.stringToTerraform(struct!.udp),
  }
}


export function ddosDstZonePortRangeListManualModeListZoneTemplateToHclTerraform(struct?: DdosDstZonePortRangeListManualModeListZoneTemplateOutputReference | DdosDstZonePortRangeListManualModeListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encap: {
      value: cdktf.stringToHclTerraform(struct!.encap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: cdktf.stringToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quic: {
      value: cdktf.stringToHclTerraform(struct!.quic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip: {
      value: cdktf.stringToHclTerraform(struct!.sip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_l4: {
      value: cdktf.stringToHclTerraform(struct!.sslL4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp: {
      value: cdktf.stringToHclTerraform(struct!.udp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeListManualModeListZoneTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortRangeListManualModeListZoneTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._encap !== undefined) {
      hasAnyValues = true;
      internalValueResult.encap = this._encap;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._quic !== undefined) {
      hasAnyValues = true;
      internalValueResult.quic = this._quic;
    }
    if (this._sip !== undefined) {
      hasAnyValues = true;
      internalValueResult.sip = this._sip;
    }
    if (this._sslL4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4 = this._sslL4;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeListManualModeListZoneTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dns = undefined;
      this._encap = undefined;
      this._http = undefined;
      this._quic = undefined;
      this._sip = undefined;
      this._sslL4 = undefined;
      this._tcp = undefined;
      this._udp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dns = value.dns;
      this._encap = value.encap;
      this._http = value.http;
      this._quic = value.quic;
      this._sip = value.sip;
      this._sslL4 = value.sslL4;
      this._tcp = value.tcp;
      this._udp = value.udp;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // encap - computed: false, optional: true, required: false
  private _encap?: string; 
  public get encap() {
    return this.getStringAttribute('encap');
  }
  public set encap(value: string) {
    this._encap = value;
  }
  public resetEncap() {
    this._encap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
  }

  // http - computed: false, optional: true, required: false
  private _http?: string; 
  public get http() {
    return this.getStringAttribute('http');
  }
  public set http(value: string) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // quic - computed: false, optional: true, required: false
  private _quic?: string; 
  public get quic() {
    return this.getStringAttribute('quic');
  }
  public set quic(value: string) {
    this._quic = value;
  }
  public resetQuic() {
    this._quic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicInput() {
    return this._quic;
  }

  // sip - computed: false, optional: true, required: false
  private _sip?: string; 
  public get sip() {
    return this.getStringAttribute('sip');
  }
  public set sip(value: string) {
    this._sip = value;
  }
  public resetSip() {
    this._sip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipInput() {
    return this._sip;
  }

  // ssl_l4 - computed: false, optional: true, required: false
  private _sslL4?: string; 
  public get sslL4() {
    return this.getStringAttribute('ssl_l4');
  }
  public set sslL4(value: string) {
    this._sslL4 = value;
  }
  public resetSslL4() {
    this._sslL4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4Input() {
    return this._sslL4;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: string; 
  public get tcp() {
    return this.getStringAttribute('tcp');
  }
  public set tcp(value: string) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // udp - computed: false, optional: true, required: false
  private _udp?: string; 
  public get udp() {
    return this.getStringAttribute('udp');
  }
  public set udp(value: string) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
  }
}
export interface DdosDstZonePortRangeListManualModeListStruct {
  /**
  * Close session for unauthenticated sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#close_sessions_for_unauth_sources DdosDstZone#close_sessions_for_unauth_sources}
  */
  readonly closeSessionsForUnauthSources?: number;
  /**
  * 'configuration': Manual-mode configuration;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#config DdosDstZone#config}
  */
  readonly config: string;
  /**
  * 'drop': Drop packets for glid exceed (Default); 'blacklist-src': Blacklist-src for glid exceed; 'ignore': Do nothing for glid exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#glid_action DdosDstZone#glid_action}
  */
  readonly glidAction?: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#src_default_glid DdosDstZone#src_default_glid}
  */
  readonly srcDefaultGlid?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#user_tag DdosDstZone#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
  /**
  * zone_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#zone_template DdosDstZone#zone_template}
  */
  readonly zoneTemplate?: DdosDstZonePortRangeListManualModeListZoneTemplate;
}

export function ddosDstZonePortRangeListManualModeListStructToTerraform(struct?: DdosDstZonePortRangeListManualModeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    close_sessions_for_unauth_sources: cdktf.numberToTerraform(struct!.closeSessionsForUnauthSources),
    config: cdktf.stringToTerraform(struct!.config),
    glid_action: cdktf.stringToTerraform(struct!.glidAction),
    src_default_glid: cdktf.stringToTerraform(struct!.srcDefaultGlid),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    zone_template: ddosDstZonePortRangeListManualModeListZoneTemplateToTerraform(struct!.zoneTemplate),
  }
}


export function ddosDstZonePortRangeListManualModeListStructToHclTerraform(struct?: DdosDstZonePortRangeListManualModeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    close_sessions_for_unauth_sources: {
      value: cdktf.numberToHclTerraform(struct!.closeSessionsForUnauthSources),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid_action: {
      value: cdktf.stringToHclTerraform(struct!.glidAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_default_glid: {
      value: cdktf.stringToHclTerraform(struct!.srcDefaultGlid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_template: {
      value: ddosDstZonePortRangeListManualModeListZoneTemplateToHclTerraform(struct!.zoneTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeListManualModeListZoneTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeListManualModeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortRangeListManualModeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._closeSessionsForUnauthSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.closeSessionsForUnauthSources = this._closeSessionsForUnauthSources;
    }
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._glidAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidAction = this._glidAction;
    }
    if (this._srcDefaultGlid !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDefaultGlid = this._srcDefaultGlid;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._zoneTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTemplate = this._zoneTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeListManualModeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._closeSessionsForUnauthSources = undefined;
      this._config = undefined;
      this._glidAction = undefined;
      this._srcDefaultGlid = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._zoneTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._closeSessionsForUnauthSources = value.closeSessionsForUnauthSources;
      this._config = value.config;
      this._glidAction = value.glidAction;
      this._srcDefaultGlid = value.srcDefaultGlid;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._zoneTemplate.internalValue = value.zoneTemplate;
    }
  }

  // close_sessions_for_unauth_sources - computed: false, optional: true, required: false
  private _closeSessionsForUnauthSources?: number; 
  public get closeSessionsForUnauthSources() {
    return this.getNumberAttribute('close_sessions_for_unauth_sources');
  }
  public set closeSessionsForUnauthSources(value: number) {
    this._closeSessionsForUnauthSources = value;
  }
  public resetCloseSessionsForUnauthSources() {
    this._closeSessionsForUnauthSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeSessionsForUnauthSourcesInput() {
    return this._closeSessionsForUnauthSources;
  }

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // glid_action - computed: false, optional: true, required: false
  private _glidAction?: string; 
  public get glidAction() {
    return this.getStringAttribute('glid_action');
  }
  public set glidAction(value: string) {
    this._glidAction = value;
  }
  public resetGlidAction() {
    this._glidAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidActionInput() {
    return this._glidAction;
  }

  // src_default_glid - computed: false, optional: true, required: false
  private _srcDefaultGlid?: string; 
  public get srcDefaultGlid() {
    return this.getStringAttribute('src_default_glid');
  }
  public set srcDefaultGlid(value: string) {
    this._srcDefaultGlid = value;
  }
  public resetSrcDefaultGlid() {
    this._srcDefaultGlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDefaultGlidInput() {
    return this._srcDefaultGlid;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // zone_template - computed: false, optional: true, required: false
  private _zoneTemplate = new DdosDstZonePortRangeListManualModeListZoneTemplateOutputReference(this, "zone_template");
  public get zoneTemplate() {
    return this._zoneTemplate;
  }
  public putZoneTemplate(value: DdosDstZonePortRangeListManualModeListZoneTemplate) {
    this._zoneTemplate.internalValue = value;
  }
  public resetZoneTemplate() {
    this._zoneTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTemplateInput() {
    return this._zoneTemplate.internalValue;
  }
}

export class DdosDstZonePortRangeListManualModeListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortRangeListManualModeListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortRangeListManualModeListStructOutputReference {
    return new DdosDstZonePortRangeListManualModeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortRangeListPatternRecognition {
  /**
  * 'heuristic': heuristic algorithm;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#algorithm DdosDstZone#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Set offset of the payload, default 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#app_payload_offset DdosDstZone#app_payload_offset}
  */
  readonly appPayloadOffset?: number;
  /**
  * 'all': Capture all packets; 'dropped': Capture dropped packets (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#capture_traffic DdosDstZone#capture_traffic}
  */
  readonly captureTraffic?: string;
  /**
  * Extracted filter inactive threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#filter_inactive_threshold DdosDstZone#filter_inactive_threshold}
  */
  readonly filterInactiveThreshold?: number;
  /**
  * Extracted filter threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#filter_threshold DdosDstZone#filter_threshold}
  */
  readonly filterThreshold?: number;
  /**
  * 'capture-never-expire': War-time capture without rate exceeding and never expires; 'manual': Manual mode;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#mode DdosDstZone#mode}
  */
  readonly mode?: string;
  /**
  * 'high': High Sensitivity; 'medium': Medium Sensitivity; 'low': Low Sensitivity;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#sensitivity DdosDstZone#sensitivity}
  */
  readonly sensitivity?: string;
  /**
  * 'zone-escalation': Zone escalation trigger pattern recognition; 'packet-rate-exceeds': Packet rate limit exceeds trigger pattern recognition (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#triggered_by DdosDstZone#triggered_by}
  */
  readonly triggeredBy?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZonePortRangeListPatternRecognitionToTerraform(struct?: DdosDstZonePortRangeListPatternRecognitionOutputReference | DdosDstZonePortRangeListPatternRecognition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    app_payload_offset: cdktf.numberToTerraform(struct!.appPayloadOffset),
    capture_traffic: cdktf.stringToTerraform(struct!.captureTraffic),
    filter_inactive_threshold: cdktf.numberToTerraform(struct!.filterInactiveThreshold),
    filter_threshold: cdktf.numberToTerraform(struct!.filterThreshold),
    mode: cdktf.stringToTerraform(struct!.mode),
    sensitivity: cdktf.stringToTerraform(struct!.sensitivity),
    triggered_by: cdktf.stringToTerraform(struct!.triggeredBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZonePortRangeListPatternRecognitionToHclTerraform(struct?: DdosDstZonePortRangeListPatternRecognitionOutputReference | DdosDstZonePortRangeListPatternRecognition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_payload_offset: {
      value: cdktf.numberToHclTerraform(struct!.appPayloadOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    capture_traffic: {
      value: cdktf.stringToHclTerraform(struct!.captureTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_inactive_threshold: {
      value: cdktf.numberToHclTerraform(struct!.filterInactiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_threshold: {
      value: cdktf.numberToHclTerraform(struct!.filterThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity: {
      value: cdktf.stringToHclTerraform(struct!.sensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    triggered_by: {
      value: cdktf.stringToHclTerraform(struct!.triggeredBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeListPatternRecognitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortRangeListPatternRecognition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._appPayloadOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.appPayloadOffset = this._appPayloadOffset;
    }
    if (this._captureTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureTraffic = this._captureTraffic;
    }
    if (this._filterInactiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterInactiveThreshold = this._filterInactiveThreshold;
    }
    if (this._filterThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterThreshold = this._filterThreshold;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._sensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivity = this._sensitivity;
    }
    if (this._triggeredBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggeredBy = this._triggeredBy;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeListPatternRecognition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._appPayloadOffset = undefined;
      this._captureTraffic = undefined;
      this._filterInactiveThreshold = undefined;
      this._filterThreshold = undefined;
      this._mode = undefined;
      this._sensitivity = undefined;
      this._triggeredBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._appPayloadOffset = value.appPayloadOffset;
      this._captureTraffic = value.captureTraffic;
      this._filterInactiveThreshold = value.filterInactiveThreshold;
      this._filterThreshold = value.filterThreshold;
      this._mode = value.mode;
      this._sensitivity = value.sensitivity;
      this._triggeredBy = value.triggeredBy;
      this._uuid = value.uuid;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // app_payload_offset - computed: false, optional: true, required: false
  private _appPayloadOffset?: number; 
  public get appPayloadOffset() {
    return this.getNumberAttribute('app_payload_offset');
  }
  public set appPayloadOffset(value: number) {
    this._appPayloadOffset = value;
  }
  public resetAppPayloadOffset() {
    this._appPayloadOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPayloadOffsetInput() {
    return this._appPayloadOffset;
  }

  // capture_traffic - computed: false, optional: true, required: false
  private _captureTraffic?: string; 
  public get captureTraffic() {
    return this.getStringAttribute('capture_traffic');
  }
  public set captureTraffic(value: string) {
    this._captureTraffic = value;
  }
  public resetCaptureTraffic() {
    this._captureTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureTrafficInput() {
    return this._captureTraffic;
  }

  // filter_inactive_threshold - computed: false, optional: true, required: false
  private _filterInactiveThreshold?: number; 
  public get filterInactiveThreshold() {
    return this.getNumberAttribute('filter_inactive_threshold');
  }
  public set filterInactiveThreshold(value: number) {
    this._filterInactiveThreshold = value;
  }
  public resetFilterInactiveThreshold() {
    this._filterInactiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInactiveThresholdInput() {
    return this._filterInactiveThreshold;
  }

  // filter_threshold - computed: false, optional: true, required: false
  private _filterThreshold?: number; 
  public get filterThreshold() {
    return this.getNumberAttribute('filter_threshold');
  }
  public set filterThreshold(value: number) {
    this._filterThreshold = value;
  }
  public resetFilterThreshold() {
    this._filterThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterThresholdInput() {
    return this._filterThreshold;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // sensitivity - computed: false, optional: true, required: false
  private _sensitivity?: string; 
  public get sensitivity() {
    return this.getStringAttribute('sensitivity');
  }
  public set sensitivity(value: string) {
    this._sensitivity = value;
  }
  public resetSensitivity() {
    this._sensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity;
  }

  // triggered_by - computed: false, optional: true, required: false
  private _triggeredBy?: string; 
  public get triggeredBy() {
    return this.getStringAttribute('triggered_by');
  }
  public set triggeredBy(value: string) {
    this._triggeredBy = value;
  }
  public resetTriggeredBy() {
    this._triggeredBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggeredByInput() {
    return this._triggeredBy;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DdosDstZonePortRangeListPatternRecognitionPuDetails {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZonePortRangeListPatternRecognitionPuDetailsToTerraform(struct?: DdosDstZonePortRangeListPatternRecognitionPuDetailsOutputReference | DdosDstZonePortRangeListPatternRecognitionPuDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZonePortRangeListPatternRecognitionPuDetailsToHclTerraform(struct?: DdosDstZonePortRangeListPatternRecognitionPuDetailsOutputReference | DdosDstZonePortRangeListPatternRecognitionPuDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeListPatternRecognitionPuDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortRangeListPatternRecognitionPuDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeListPatternRecognitionPuDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DdosDstZonePortRangeListPortIndSamplingEnable {
  /**
  * 'all': all; 'ip-proto-type': IP Protocol Type; 'ddet_ind_pkt_rate_current': Pkt Rate Current; 'ddet_ind_pkt_rate_min': Pkt Rate Min; 'ddet_ind_pkt_rate_max': Pkt Rate Max; 'ddet_ind_pkt_rate_adaptive_threshold': Pkt Rate Adaptive Threshold; 'ddet_ind_pkt_drop_rate_current': Pkt Drop Rate Current; 'ddet_ind_pkt_drop_rate_min': Pkt Drop Rate Min; 'ddet_ind_pkt_drop_rate_max': Pkt Drop Rate Max; 'ddet_ind_pkt_drop_rate_adaptive_threshold': Pkt Drop Rate Adaptive Threshold; 'ddet_ind_syn_rate_current': TCP SYN Rate Current; 'ddet_ind_syn_rate_min': TCP SYN Rate Min; 'ddet_ind_syn_rate_max': TCP SYN Rate Max; 'ddet_ind_syn_rate_adaptive_threshold': TCP SYN Rate Adaptive Threshold; 'ddet_ind_fin_rate_current': TCP FIN Rate Current; 'ddet_ind_fin_rate_min': TCP FIN Rate Min; 'ddet_ind_fin_rate_max': TCP FIN Rate Max; 'ddet_ind_fin_rate_adaptive_threshold': TCP FIN Rate Adaptive Threshold; 'ddet_ind_rst_rate_current': TCP RST Rate Current; 'ddet_ind_rst_rate_min': TCP RST Rate Min; 'ddet_ind_rst_rate_max': TCP RST Rate Max; 'ddet_ind_rst_rate_adaptive_threshold': TCP RST Rate Adaptive Threshold; 'ddet_ind_small_window_ack_rate_current': TCP Small Window ACK Rate Current; 'ddet_ind_small_window_ack_rate_min': TCP Small Window ACK Rate Min; 'ddet_ind_small_window_ack_rate_max': TCP Small Window ACK Rate Max; 'ddet_ind_small_window_ack_rate_adaptive_threshold': TCP Small Window ACK Rate Adaptive Threshold; 'ddet_ind_empty_ack_rate_current': TCP Empty ACK Rate Current; 'ddet_ind_empty_ack_rate_min': TCP Empty ACK Rate Min; 'ddet_ind_empty_ack_rate_max': TCP Empty ACK Rate Max; 'ddet_ind_empty_ack_rate_adaptive_threshold': TCP Empty ACK Rate Adaptive Threshold; 'ddet_ind_small_payload_rate_current': TCP Small Payload Rate Current; 'ddet_ind_small_payload_rate_min': TCP Small Payload Rate Min; 'ddet_ind_small_payload_rate_max': TCP Small Payload Rate Max; 'ddet_ind_small_payload_rate_adaptive_threshold': TCP Small Payload Rate Adaptive Threshold; 'ddet_ind_pkt_drop_ratio_current': Pkt Drop / Pkt Rcvd Current; 'ddet_ind_pkt_drop_ratio_min': Pkt Drop / Pkt Rcvd Min; 'ddet_ind_pkt_drop_ratio_max': Pkt Drop / Pkt Rcvd Max; 'ddet_ind_pkt_drop_ratio_adaptive_threshold': Pkt Drop / Pkt Rcvd Adaptive Threshold; 'ddet_ind_inb_per_outb_current': Bytes-to / Bytes-from Current; 'ddet_ind_inb_per_outb_min': Bytes-to / Bytes-from Min; 'ddet_ind_inb_per_outb_max': Bytes-to / Bytes-from Max; 'ddet_ind_inb_per_outb_adaptive_threshold': Bytes-to / Bytes-from Adaptive Threshold; 'ddet_ind_syn_per_fin_rate_current': TCP SYN Rate / FIN Rate Current; 'ddet_ind_syn_per_fin_rate_min': TCP SYN Rate / FIN Rate Min; 'ddet_ind_syn_per_fin_rate_max': TCP SYN Rate / FIN Rate Max; 'ddet_ind_syn_per_fin_rate_adaptive_threshold': TCP SYN Rate / FIN Rate Adaptive Threshold; 'ddet_ind_conn_miss_rate_current': TCP Session Miss Rate Current; 'ddet_ind_conn_miss_rate_min': TCP Session Miss Rate Min; 'ddet_ind_conn_miss_rate_max': TCP Session Miss Rate Max; 'ddet_ind_conn_miss_rate_adaptive_threshold': TCP Session Miss Rate Adaptive Threshold; 'ddet_ind_concurrent_conns_current': TCP/UDP Concurrent Sessions Current; 'ddet_ind_concurrent_conns_min': TCP/UDP Concurrent Sessions Min; 'ddet_ind_concurrent_conns_max': TCP/UDP Concurrent Sessions Max; 'ddet_ind_concurrent_conns_adaptive_threshold': TCP/UDP Concurrent Sessions Adaptive Threshold; 'ddet_ind_data_cpu_util_current': Data CPU Utilization Current; 'ddet_ind_data_cpu_util_min': Data CPU Utilization Min; 'ddet_ind_data_cpu_util_max': Data CPU Utilization Max; 'ddet_ind_data_cpu_util_adaptive_threshold': Data CPU Utilization Adaptive Threshold; 'ddet_ind_outside_intf_util_current': Outside Interface Utilization Current; 'ddet_ind_outside_intf_util_min': Outside Interface Utilization Min; 'ddet_ind_outside_intf_util_max': Outside Interface Utilization Max; 'ddet_ind_outside_intf_util_adaptive_threshold': Outside Interface Utilization Adaptive Threshold; 'ddet_ind_frag_rate_current': Frag Pkt Rate Current; 'ddet_ind_frag_rate_min': Frag Pkt Rate Min; 'ddet_ind_frag_rate_max': Frag Pkt Rate Max; 'ddet_ind_frag_rate_adaptive_threshold': Frag Pkt Rate Adaptive Threshold; 'ddet_ind_bit_rate_current': Bit Rate Current; 'ddet_ind_bit_rate_min': Bit Rate Min; 'ddet_ind_bit_rate_max': Bit Rate Max; 'ddet_ind_bit_rate_adaptive_threshold': Bit Rate Adaptive Threshold;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#counters1 DdosDstZone#counters1}
  */
  readonly counters1?: string;
}

export function ddosDstZonePortRangeListPortIndSamplingEnableToTerraform(struct?: DdosDstZonePortRangeListPortIndSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ddosDstZonePortRangeListPortIndSamplingEnableToHclTerraform(struct?: DdosDstZonePortRangeListPortIndSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeListPortIndSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortRangeListPortIndSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeListPortIndSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class DdosDstZonePortRangeListPortIndSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortRangeListPortIndSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortRangeListPortIndSamplingEnableOutputReference {
    return new DdosDstZonePortRangeListPortIndSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortRangeListPortInd {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#sampling_enable DdosDstZone#sampling_enable}
  */
  readonly samplingEnable?: DdosDstZonePortRangeListPortIndSamplingEnable[] | cdktf.IResolvable;
}

export function ddosDstZonePortRangeListPortIndToTerraform(struct?: DdosDstZonePortRangeListPortIndOutputReference | DdosDstZonePortRangeListPortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(ddosDstZonePortRangeListPortIndSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function ddosDstZonePortRangeListPortIndToHclTerraform(struct?: DdosDstZonePortRangeListPortIndOutputReference | DdosDstZonePortRangeListPortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(ddosDstZonePortRangeListPortIndSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeListPortIndSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeListPortIndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortRangeListPortInd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeListPortInd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new DdosDstZonePortRangeListPortIndSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosDstZonePortRangeListPortIndSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface DdosDstZonePortRangeListProgressionTracking {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZonePortRangeListProgressionTrackingToTerraform(struct?: DdosDstZonePortRangeListProgressionTrackingOutputReference | DdosDstZonePortRangeListProgressionTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZonePortRangeListProgressionTrackingToHclTerraform(struct?: DdosDstZonePortRangeListProgressionTrackingOutputReference | DdosDstZonePortRangeListProgressionTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeListProgressionTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortRangeListProgressionTracking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeListProgressionTracking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DdosDstZonePortRangeListSflowTcp {
  /**
  * Enable sFlow basic TCP counter polling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#sflow_tcp_basic DdosDstZone#sflow_tcp_basic}
  */
  readonly sflowTcpBasic?: number;
  /**
  * Enable sFlow stateful TCP counter polling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#sflow_tcp_stateful DdosDstZone#sflow_tcp_stateful}
  */
  readonly sflowTcpStateful?: number;
}

export function ddosDstZonePortRangeListSflowTcpToTerraform(struct?: DdosDstZonePortRangeListSflowTcpOutputReference | DdosDstZonePortRangeListSflowTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sflow_tcp_basic: cdktf.numberToTerraform(struct!.sflowTcpBasic),
    sflow_tcp_stateful: cdktf.numberToTerraform(struct!.sflowTcpStateful),
  }
}


export function ddosDstZonePortRangeListSflowTcpToHclTerraform(struct?: DdosDstZonePortRangeListSflowTcpOutputReference | DdosDstZonePortRangeListSflowTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sflow_tcp_basic: {
      value: cdktf.numberToHclTerraform(struct!.sflowTcpBasic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_tcp_stateful: {
      value: cdktf.numberToHclTerraform(struct!.sflowTcpStateful),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeListSflowTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortRangeListSflowTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sflowTcpBasic !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowTcpBasic = this._sflowTcpBasic;
    }
    if (this._sflowTcpStateful !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowTcpStateful = this._sflowTcpStateful;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeListSflowTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sflowTcpBasic = undefined;
      this._sflowTcpStateful = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sflowTcpBasic = value.sflowTcpBasic;
      this._sflowTcpStateful = value.sflowTcpStateful;
    }
  }

  // sflow_tcp_basic - computed: false, optional: true, required: false
  private _sflowTcpBasic?: number; 
  public get sflowTcpBasic() {
    return this.getNumberAttribute('sflow_tcp_basic');
  }
  public set sflowTcpBasic(value: number) {
    this._sflowTcpBasic = value;
  }
  public resetSflowTcpBasic() {
    this._sflowTcpBasic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowTcpBasicInput() {
    return this._sflowTcpBasic;
  }

  // sflow_tcp_stateful - computed: false, optional: true, required: false
  private _sflowTcpStateful?: number; 
  public get sflowTcpStateful() {
    return this.getNumberAttribute('sflow_tcp_stateful');
  }
  public set sflowTcpStateful(value: number) {
    this._sflowTcpStateful = value;
  }
  public resetSflowTcpStateful() {
    this._sflowTcpStateful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowTcpStatefulInput() {
    return this._sflowTcpStateful;
  }
}
export interface DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplate {
  /**
  * DDOS dns template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#dns DdosDstZone#dns}
  */
  readonly dns?: string;
  /**
  * DDOS encap template (IPv6-over-IPv4 / IPv4-over-IPv6 are not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#encap DdosDstZone#encap}
  */
  readonly encap?: string;
  /**
  * DDOS http template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#http DdosDstZone#http}
  */
  readonly http?: string;
  /**
  * DDOS logging template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#logging DdosDstZone#logging}
  */
  readonly logging?: string;
  /**
  * DDOS quic template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#quic DdosDstZone#quic}
  */
  readonly quic?: string;
  /**
  * DDOS sip template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#sip DdosDstZone#sip}
  */
  readonly sip?: string;
  /**
  * DDOS ssl-l4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#ssl_l4 DdosDstZone#ssl_l4}
  */
  readonly sslL4?: string;
  /**
  * DDOS tcp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#tcp DdosDstZone#tcp}
  */
  readonly tcp?: string;
  /**
  * DDOS udp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#udp DdosDstZone#udp}
  */
  readonly udp?: string;
}

export function ddosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplateToTerraform(struct?: DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplateOutputReference | DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    encap: cdktf.stringToTerraform(struct!.encap),
    http: cdktf.stringToTerraform(struct!.http),
    logging: cdktf.stringToTerraform(struct!.logging),
    quic: cdktf.stringToTerraform(struct!.quic),
    sip: cdktf.stringToTerraform(struct!.sip),
    ssl_l4: cdktf.stringToTerraform(struct!.sslL4),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    udp: cdktf.stringToTerraform(struct!.udp),
  }
}


export function ddosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplateToHclTerraform(struct?: DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplateOutputReference | DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encap: {
      value: cdktf.stringToHclTerraform(struct!.encap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: cdktf.stringToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: cdktf.stringToHclTerraform(struct!.logging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quic: {
      value: cdktf.stringToHclTerraform(struct!.quic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip: {
      value: cdktf.stringToHclTerraform(struct!.sip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_l4: {
      value: cdktf.stringToHclTerraform(struct!.sslL4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp: {
      value: cdktf.stringToHclTerraform(struct!.udp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._encap !== undefined) {
      hasAnyValues = true;
      internalValueResult.encap = this._encap;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    if (this._quic !== undefined) {
      hasAnyValues = true;
      internalValueResult.quic = this._quic;
    }
    if (this._sip !== undefined) {
      hasAnyValues = true;
      internalValueResult.sip = this._sip;
    }
    if (this._sslL4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4 = this._sslL4;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dns = undefined;
      this._encap = undefined;
      this._http = undefined;
      this._logging = undefined;
      this._quic = undefined;
      this._sip = undefined;
      this._sslL4 = undefined;
      this._tcp = undefined;
      this._udp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dns = value.dns;
      this._encap = value.encap;
      this._http = value.http;
      this._logging = value.logging;
      this._quic = value.quic;
      this._sip = value.sip;
      this._sslL4 = value.sslL4;
      this._tcp = value.tcp;
      this._udp = value.udp;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // encap - computed: false, optional: true, required: false
  private _encap?: string; 
  public get encap() {
    return this.getStringAttribute('encap');
  }
  public set encap(value: string) {
    this._encap = value;
  }
  public resetEncap() {
    this._encap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
  }

  // http - computed: false, optional: true, required: false
  private _http?: string; 
  public get http() {
    return this.getStringAttribute('http');
  }
  public set http(value: string) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }

  // quic - computed: false, optional: true, required: false
  private _quic?: string; 
  public get quic() {
    return this.getStringAttribute('quic');
  }
  public set quic(value: string) {
    this._quic = value;
  }
  public resetQuic() {
    this._quic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicInput() {
    return this._quic;
  }

  // sip - computed: false, optional: true, required: false
  private _sip?: string; 
  public get sip() {
    return this.getStringAttribute('sip');
  }
  public set sip(value: string) {
    this._sip = value;
  }
  public resetSip() {
    this._sip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipInput() {
    return this._sip;
  }

  // ssl_l4 - computed: false, optional: true, required: false
  private _sslL4?: string; 
  public get sslL4() {
    return this.getStringAttribute('ssl_l4');
  }
  public set sslL4(value: string) {
    this._sslL4 = value;
  }
  public resetSslL4() {
    this._sslL4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4Input() {
    return this._sslL4;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: string; 
  public get tcp() {
    return this.getStringAttribute('tcp');
  }
  public set tcp(value: string) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // udp - computed: false, optional: true, required: false
  private _udp?: string; 
  public get udp() {
    return this.getStringAttribute('udp');
  }
  public set udp(value: string) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
  }
}
export interface DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStruct {
  /**
  * 'bypass': Always permit for the Source to bypass all feature & limit checks; 'deny': Blacklist incoming packets for service;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#action DdosDstZone#action}
  */
  readonly action?: string;
  /**
  * 'configuration': Configure overflow policy for class-list;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#dummy_name DdosDstZone#dummy_name}
  */
  readonly dummyName: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#glid DdosDstZone#glid}
  */
  readonly glid?: string;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#log_enable DdosDstZone#log_enable}
  */
  readonly logEnable?: number;
  /**
  * Enable log periodic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#log_periodic DdosDstZone#log_periodic}
  */
  readonly logPeriodic?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#user_tag DdosDstZone#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
  /**
  * zone_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#zone_template DdosDstZone#zone_template}
  */
  readonly zoneTemplate?: DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplate;
}

export function ddosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStructToTerraform(struct?: DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    dummy_name: cdktf.stringToTerraform(struct!.dummyName),
    glid: cdktf.stringToTerraform(struct!.glid),
    log_enable: cdktf.numberToTerraform(struct!.logEnable),
    log_periodic: cdktf.numberToTerraform(struct!.logPeriodic),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    zone_template: ddosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplateToTerraform(struct!.zoneTemplate),
  }
}


export function ddosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStructToHclTerraform(struct?: DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStruct | cdktf.IResolvable): any {
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
    dummy_name: {
      value: cdktf.stringToHclTerraform(struct!.dummyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid: {
      value: cdktf.stringToHclTerraform(struct!.glid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_enable: {
      value: cdktf.numberToHclTerraform(struct!.logEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_periodic: {
      value: cdktf.numberToHclTerraform(struct!.logPeriodic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_template: {
      value: ddosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplateToHclTerraform(struct!.zoneTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._dummyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dummyName = this._dummyName;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._logEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEnable = this._logEnable;
    }
    if (this._logPeriodic !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPeriodic = this._logPeriodic;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._zoneTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTemplate = this._zoneTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._dummyName = undefined;
      this._glid = undefined;
      this._logEnable = undefined;
      this._logPeriodic = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._zoneTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._dummyName = value.dummyName;
      this._glid = value.glid;
      this._logEnable = value.logEnable;
      this._logPeriodic = value.logPeriodic;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._zoneTemplate.internalValue = value.zoneTemplate;
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

  // dummy_name - computed: false, optional: false, required: true
  private _dummyName?: string; 
  public get dummyName() {
    return this.getStringAttribute('dummy_name');
  }
  public set dummyName(value: string) {
    this._dummyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dummyNameInput() {
    return this._dummyName;
  }

  // glid - computed: false, optional: true, required: false
  private _glid?: string; 
  public get glid() {
    return this.getStringAttribute('glid');
  }
  public set glid(value: string) {
    this._glid = value;
  }
  public resetGlid() {
    this._glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidInput() {
    return this._glid;
  }

  // log_enable - computed: false, optional: true, required: false
  private _logEnable?: number; 
  public get logEnable() {
    return this.getNumberAttribute('log_enable');
  }
  public set logEnable(value: number) {
    this._logEnable = value;
  }
  public resetLogEnable() {
    this._logEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEnableInput() {
    return this._logEnable;
  }

  // log_periodic - computed: false, optional: true, required: false
  private _logPeriodic?: number; 
  public get logPeriodic() {
    return this.getNumberAttribute('log_periodic');
  }
  public set logPeriodic(value: number) {
    this._logPeriodic = value;
  }
  public resetLogPeriodic() {
    this._logPeriodic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPeriodicInput() {
    return this._logPeriodic;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // zone_template - computed: false, optional: true, required: false
  private _zoneTemplate = new DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplateOutputReference(this, "zone_template");
  public get zoneTemplate() {
    return this._zoneTemplate;
  }
  public putZoneTemplate(value: DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplate) {
    this._zoneTemplate.internalValue = value;
  }
  public resetZoneTemplate() {
    this._zoneTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTemplateInput() {
    return this._zoneTemplate.internalValue;
  }
}

export class DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStructOutputReference {
    return new DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListSamplingEnable {
  /**
  * 'all': all; 'packet_received': Packets Received; 'packet_dropped': Packets Dropped; 'entry_learned': Entry Learned; 'entry_count_overflow': Entry Count Overflow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#counters1 DdosDstZone#counters1}
  */
  readonly counters1?: string;
}

export function ddosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListSamplingEnableToTerraform(struct?: DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ddosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListSamplingEnableToHclTerraform(struct?: DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListSamplingEnableOutputReference {
    return new DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListZoneTemplate {
  /**
  * DDOS dns template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#dns DdosDstZone#dns}
  */
  readonly dns?: string;
  /**
  * DDOS encap template (IPv6-over-IPv4 / IPv4-over-IPv6 are not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#encap DdosDstZone#encap}
  */
  readonly encap?: string;
  /**
  * DDOS http template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#http DdosDstZone#http}
  */
  readonly http?: string;
  /**
  * DDOS logging template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#logging DdosDstZone#logging}
  */
  readonly logging?: string;
  /**
  * DDOS quic template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#quic DdosDstZone#quic}
  */
  readonly quic?: string;
  /**
  * DDOS sip template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#sip DdosDstZone#sip}
  */
  readonly sip?: string;
  /**
  * DDOS ssl-l4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#ssl_l4 DdosDstZone#ssl_l4}
  */
  readonly sslL4?: string;
  /**
  * DDOS tcp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#tcp DdosDstZone#tcp}
  */
  readonly tcp?: string;
  /**
  * DDOS udp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#udp DdosDstZone#udp}
  */
  readonly udp?: string;
}

export function ddosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListZoneTemplateToTerraform(struct?: DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListZoneTemplateOutputReference | DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    encap: cdktf.stringToTerraform(struct!.encap),
    http: cdktf.stringToTerraform(struct!.http),
    logging: cdktf.stringToTerraform(struct!.logging),
    quic: cdktf.stringToTerraform(struct!.quic),
    sip: cdktf.stringToTerraform(struct!.sip),
    ssl_l4: cdktf.stringToTerraform(struct!.sslL4),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    udp: cdktf.stringToTerraform(struct!.udp),
  }
}


export function ddosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListZoneTemplateToHclTerraform(struct?: DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListZoneTemplateOutputReference | DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encap: {
      value: cdktf.stringToHclTerraform(struct!.encap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: cdktf.stringToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: cdktf.stringToHclTerraform(struct!.logging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quic: {
      value: cdktf.stringToHclTerraform(struct!.quic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip: {
      value: cdktf.stringToHclTerraform(struct!.sip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_l4: {
      value: cdktf.stringToHclTerraform(struct!.sslL4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp: {
      value: cdktf.stringToHclTerraform(struct!.udp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListZoneTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListZoneTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._encap !== undefined) {
      hasAnyValues = true;
      internalValueResult.encap = this._encap;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    if (this._quic !== undefined) {
      hasAnyValues = true;
      internalValueResult.quic = this._quic;
    }
    if (this._sip !== undefined) {
      hasAnyValues = true;
      internalValueResult.sip = this._sip;
    }
    if (this._sslL4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4 = this._sslL4;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListZoneTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dns = undefined;
      this._encap = undefined;
      this._http = undefined;
      this._logging = undefined;
      this._quic = undefined;
      this._sip = undefined;
      this._sslL4 = undefined;
      this._tcp = undefined;
      this._udp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dns = value.dns;
      this._encap = value.encap;
      this._http = value.http;
      this._logging = value.logging;
      this._quic = value.quic;
      this._sip = value.sip;
      this._sslL4 = value.sslL4;
      this._tcp = value.tcp;
      this._udp = value.udp;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // encap - computed: false, optional: true, required: false
  private _encap?: string; 
  public get encap() {
    return this.getStringAttribute('encap');
  }
  public set encap(value: string) {
    this._encap = value;
  }
  public resetEncap() {
    this._encap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
  }

  // http - computed: false, optional: true, required: false
  private _http?: string; 
  public get http() {
    return this.getStringAttribute('http');
  }
  public set http(value: string) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }

  // quic - computed: false, optional: true, required: false
  private _quic?: string; 
  public get quic() {
    return this.getStringAttribute('quic');
  }
  public set quic(value: string) {
    this._quic = value;
  }
  public resetQuic() {
    this._quic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicInput() {
    return this._quic;
  }

  // sip - computed: false, optional: true, required: false
  private _sip?: string; 
  public get sip() {
    return this.getStringAttribute('sip');
  }
  public set sip(value: string) {
    this._sip = value;
  }
  public resetSip() {
    this._sip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipInput() {
    return this._sip;
  }

  // ssl_l4 - computed: false, optional: true, required: false
  private _sslL4?: string; 
  public get sslL4() {
    return this.getStringAttribute('ssl_l4');
  }
  public set sslL4(value: string) {
    this._sslL4 = value;
  }
  public resetSslL4() {
    this._sslL4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4Input() {
    return this._sslL4;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: string; 
  public get tcp() {
    return this.getStringAttribute('tcp');
  }
  public set tcp(value: string) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // udp - computed: false, optional: true, required: false
  private _udp?: string; 
  public get udp() {
    return this.getStringAttribute('udp');
  }
  public set udp(value: string) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
  }
}
export interface DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListStruct {
  /**
  * 'bypass': Always permit for the Source to bypass all feature & limit checks; 'deny': Blacklist incoming packets for service;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#action DdosDstZone#action}
  */
  readonly action?: string;
  /**
  * Class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#class_list_name DdosDstZone#class_list_name}
  */
  readonly classListName: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#glid DdosDstZone#glid}
  */
  readonly glid?: string;
  /**
  * 'drop': Drop packets for glid exceed (Default); 'blacklist-src': Blacklist-src for glid exceed; 'ignore': Do nothing for glid exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#glid_action DdosDstZone#glid_action}
  */
  readonly glidAction?: string;
  /**
  * Maximum count for dynamic source zone service entry allowed for this class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#max_dynamic_entry_count DdosDstZone#max_dynamic_entry_count}
  */
  readonly maxDynamicEntryCount?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#user_tag DdosDstZone#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
  /**
  * class_list_overflow_policy_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#class_list_overflow_policy_list DdosDstZone#class_list_overflow_policy_list}
  */
  readonly classListOverflowPolicyList?: DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStruct[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#sampling_enable DdosDstZone#sampling_enable}
  */
  readonly samplingEnable?: DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListSamplingEnable[] | cdktf.IResolvable;
  /**
  * zone_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#zone_template DdosDstZone#zone_template}
  */
  readonly zoneTemplate?: DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListZoneTemplate;
}

export function ddosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListStructToTerraform(struct?: DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    class_list_name: cdktf.stringToTerraform(struct!.classListName),
    glid: cdktf.stringToTerraform(struct!.glid),
    glid_action: cdktf.stringToTerraform(struct!.glidAction),
    max_dynamic_entry_count: cdktf.numberToTerraform(struct!.maxDynamicEntryCount),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    class_list_overflow_policy_list: cdktf.listMapper(ddosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStructToTerraform, true)(struct!.classListOverflowPolicyList),
    sampling_enable: cdktf.listMapper(ddosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListSamplingEnableToTerraform, true)(struct!.samplingEnable),
    zone_template: ddosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListZoneTemplateToTerraform(struct!.zoneTemplate),
  }
}


export function ddosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListStructToHclTerraform(struct?: DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListStruct | cdktf.IResolvable): any {
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
    class_list_name: {
      value: cdktf.stringToHclTerraform(struct!.classListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid: {
      value: cdktf.stringToHclTerraform(struct!.glid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid_action: {
      value: cdktf.stringToHclTerraform(struct!.glidAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_dynamic_entry_count: {
      value: cdktf.numberToHclTerraform(struct!.maxDynamicEntryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_list_overflow_policy_list: {
      value: cdktf.listMapperHcl(ddosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStructToHclTerraform, true)(struct!.classListOverflowPolicyList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStructList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(ddosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListSamplingEnableList",
    },
    zone_template: {
      value: ddosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListZoneTemplateToHclTerraform(struct!.zoneTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListZoneTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._classListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListName = this._classListName;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._glidAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidAction = this._glidAction;
    }
    if (this._maxDynamicEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDynamicEntryCount = this._maxDynamicEntryCount;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._classListOverflowPolicyList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListOverflowPolicyList = this._classListOverflowPolicyList?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    if (this._zoneTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTemplate = this._zoneTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._classListName = undefined;
      this._glid = undefined;
      this._glidAction = undefined;
      this._maxDynamicEntryCount = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._classListOverflowPolicyList.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
      this._zoneTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._classListName = value.classListName;
      this._glid = value.glid;
      this._glidAction = value.glidAction;
      this._maxDynamicEntryCount = value.maxDynamicEntryCount;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._classListOverflowPolicyList.internalValue = value.classListOverflowPolicyList;
      this._samplingEnable.internalValue = value.samplingEnable;
      this._zoneTemplate.internalValue = value.zoneTemplate;
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

  // class_list_name - computed: false, optional: false, required: true
  private _classListName?: string; 
  public get classListName() {
    return this.getStringAttribute('class_list_name');
  }
  public set classListName(value: string) {
    this._classListName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classListNameInput() {
    return this._classListName;
  }

  // glid - computed: false, optional: true, required: false
  private _glid?: string; 
  public get glid() {
    return this.getStringAttribute('glid');
  }
  public set glid(value: string) {
    this._glid = value;
  }
  public resetGlid() {
    this._glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidInput() {
    return this._glid;
  }

  // glid_action - computed: false, optional: true, required: false
  private _glidAction?: string; 
  public get glidAction() {
    return this.getStringAttribute('glid_action');
  }
  public set glidAction(value: string) {
    this._glidAction = value;
  }
  public resetGlidAction() {
    this._glidAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidActionInput() {
    return this._glidAction;
  }

  // max_dynamic_entry_count - computed: false, optional: true, required: false
  private _maxDynamicEntryCount?: number; 
  public get maxDynamicEntryCount() {
    return this.getNumberAttribute('max_dynamic_entry_count');
  }
  public set maxDynamicEntryCount(value: number) {
    this._maxDynamicEntryCount = value;
  }
  public resetMaxDynamicEntryCount() {
    this._maxDynamicEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDynamicEntryCountInput() {
    return this._maxDynamicEntryCount;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // class_list_overflow_policy_list - computed: false, optional: true, required: false
  private _classListOverflowPolicyList = new DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStructList(this, "class_list_overflow_policy_list", false);
  public get classListOverflowPolicyList() {
    return this._classListOverflowPolicyList;
  }
  public putClassListOverflowPolicyList(value: DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStruct[] | cdktf.IResolvable) {
    this._classListOverflowPolicyList.internalValue = value;
  }
  public resetClassListOverflowPolicyList() {
    this._classListOverflowPolicyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListOverflowPolicyListInput() {
    return this._classListOverflowPolicyList.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // zone_template - computed: false, optional: true, required: false
  private _zoneTemplate = new DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListZoneTemplateOutputReference(this, "zone_template");
  public get zoneTemplate() {
    return this._zoneTemplate;
  }
  public putZoneTemplate(value: DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListZoneTemplate) {
    this._zoneTemplate.internalValue = value;
  }
  public resetZoneTemplate() {
    this._zoneTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTemplateInput() {
    return this._zoneTemplate.internalValue;
  }
}

export class DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListStructOutputReference {
    return new DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortRangeListSrcBasedPolicyListStruct {
  /**
  * Specify name of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#src_based_policy_name DdosDstZone#src_based_policy_name}
  */
  readonly srcBasedPolicyName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#user_tag DdosDstZone#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
  /**
  * policy_class_list_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#policy_class_list_list DdosDstZone#policy_class_list_list}
  */
  readonly policyClassListList?: DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListStruct[] | cdktf.IResolvable;
}

export function ddosDstZonePortRangeListSrcBasedPolicyListStructToTerraform(struct?: DdosDstZonePortRangeListSrcBasedPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_based_policy_name: cdktf.stringToTerraform(struct!.srcBasedPolicyName),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    policy_class_list_list: cdktf.listMapper(ddosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListStructToTerraform, true)(struct!.policyClassListList),
  }
}


export function ddosDstZonePortRangeListSrcBasedPolicyListStructToHclTerraform(struct?: DdosDstZonePortRangeListSrcBasedPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_based_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.srcBasedPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_class_list_list: {
      value: cdktf.listMapperHcl(ddosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListStructToHclTerraform, true)(struct!.policyClassListList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeListSrcBasedPolicyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortRangeListSrcBasedPolicyListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcBasedPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcBasedPolicyName = this._srcBasedPolicyName;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._policyClassListList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyClassListList = this._policyClassListList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeListSrcBasedPolicyListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._srcBasedPolicyName = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._policyClassListList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._srcBasedPolicyName = value.srcBasedPolicyName;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._policyClassListList.internalValue = value.policyClassListList;
    }
  }

  // src_based_policy_name - computed: false, optional: false, required: true
  private _srcBasedPolicyName?: string; 
  public get srcBasedPolicyName() {
    return this.getStringAttribute('src_based_policy_name');
  }
  public set srcBasedPolicyName(value: string) {
    this._srcBasedPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcBasedPolicyNameInput() {
    return this._srcBasedPolicyName;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // policy_class_list_list - computed: false, optional: true, required: false
  private _policyClassListList = new DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListStructList(this, "policy_class_list_list", false);
  public get policyClassListList() {
    return this._policyClassListList;
  }
  public putPolicyClassListList(value: DdosDstZonePortRangeListSrcBasedPolicyListPolicyClassListListStruct[] | cdktf.IResolvable) {
    this._policyClassListList.internalValue = value;
  }
  public resetPolicyClassListList() {
    this._policyClassListList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyClassListListInput() {
    return this._policyClassListList.internalValue;
  }
}

export class DdosDstZonePortRangeListSrcBasedPolicyListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortRangeListSrcBasedPolicyListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortRangeListSrcBasedPolicyListStructOutputReference {
    return new DdosDstZonePortRangeListSrcBasedPolicyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortRangeListTopkDestinations {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZonePortRangeListTopkDestinationsToTerraform(struct?: DdosDstZonePortRangeListTopkDestinationsOutputReference | DdosDstZonePortRangeListTopkDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZonePortRangeListTopkDestinationsToHclTerraform(struct?: DdosDstZonePortRangeListTopkDestinationsOutputReference | DdosDstZonePortRangeListTopkDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeListTopkDestinationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortRangeListTopkDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeListTopkDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DdosDstZonePortRangeListTopkSources {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZonePortRangeListTopkSourcesToTerraform(struct?: DdosDstZonePortRangeListTopkSourcesOutputReference | DdosDstZonePortRangeListTopkSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZonePortRangeListTopkSourcesToHclTerraform(struct?: DdosDstZonePortRangeListTopkSourcesOutputReference | DdosDstZonePortRangeListTopkSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeListTopkSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortRangeListTopkSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeListTopkSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DdosDstZonePortRangeListStruct {
  /**
  * Idle age for ip entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#age DdosDstZone#age}
  */
  readonly age?: number;
  /**
  * Enable this flag to apply overflow policy when dynamic entry count overflows
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#apply_policy_on_overflow DdosDstZone#apply_policy_on_overflow}
  */
  readonly applyPolicyOnOverflow?: number;
  /**
  * Configure default-action-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#default_action_list DdosDstZone#default_action_list}
  */
  readonly defaultActionList?: string;
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#deny DdosDstZone#deny}
  */
  readonly deny?: number;
  /**
  * Apply class-list overflow policy upon exceeding dynamic entry count specified under zone port or each class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#enable_class_list_overflow DdosDstZone#enable_class_list_overflow}
  */
  readonly enableClassListOverflow?: number;
  /**
  * Enable ddos top-k source IP detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#enable_top_k DdosDstZone#enable_top_k}
  */
  readonly enableTopK?: number;
  /**
  * Enable ddos top-k destination IP detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#enable_top_k_destination DdosDstZone#enable_top_k_destination}
  */
  readonly enableTopKDestination?: number;
  /**
  * De-escalate faster in standalone mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#faster_de_escalation DdosDstZone#faster_de_escalation}
  */
  readonly fasterDeEscalation?: number;
  /**
  * Configure IP Filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#ip_filtering_policy DdosDstZone#ip_filtering_policy}
  */
  readonly ipFilteringPolicy?: string;
  /**
  * Toggle manual mode to use fix templates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#manual_mode_enable DdosDstZone#manual_mode_enable}
  */
  readonly manualModeEnable?: number;
  /**
  * Maximum count for dynamic source zone service entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#max_dynamic_entry_count DdosDstZone#max_dynamic_entry_count}
  */
  readonly maxDynamicEntryCount?: number;
  /**
  * Only allow outbound traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#outbound_only DdosDstZone#outbound_only}
  */
  readonly outboundOnly?: number;
  /**
  * Port-Range End Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#port_range_end DdosDstZone#port_range_end}
  */
  readonly portRangeEnd: number;
  /**
  * Port-Range Start Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#port_range_start DdosDstZone#port_range_start}
  */
  readonly portRangeStart: number;
  /**
  * 'dns-tcp': DNS-TCP Port; 'dns-udp': DNS-UDP Port; 'http': HTTP Port; 'tcp': TCP Port; 'udp': UDP Port; 'ssl-l4': SSL-L4 Port; 'sip-udp': SIP-UDP Port; 'sip-tcp': SIP-TCP Port; 'quic': QUIC Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#protocol DdosDstZone#protocol}
  */
  readonly protocol: string;
  /**
  * Set T2 counter value of current context to specified value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#set_counter_base_val DdosDstZone#set_counter_base_val}
  */
  readonly setCounterBaseVal?: number;
  /**
  * Enable all sFlow polling options under this zone port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#sflow_common DdosDstZone#sflow_common}
  */
  readonly sflowCommon?: number;
  /**
  * Enable sFlow HTTP counter polling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#sflow_http DdosDstZone#sflow_http}
  */
  readonly sflowHttp?: number;
  /**
  * Enable sFlow packet-level counter polling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#sflow_packets DdosDstZone#sflow_packets}
  */
  readonly sflowPackets?: number;
  /**
  * Enable stateful tracking of sessions (Default is stateless)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#stateful DdosDstZone#stateful}
  */
  readonly stateful?: number;
  /**
  * Maximum number of records to show in topk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#topk_dst_num_records DdosDstZone#topk_dst_num_records}
  */
  readonly topkDstNumRecords?: number;
  /**
  * Maximum number of records to show in topk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#topk_num_records DdosDstZone#topk_num_records}
  */
  readonly topkNumRecords?: number;
  /**
  * No limit for maximum dynamic src entry count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#unlimited_dynamic_entry_count DdosDstZone#unlimited_dynamic_entry_count}
  */
  readonly unlimitedDynamicEntryCount?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#user_tag DdosDstZone#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
  /**
  * dynamic_entry_overflow_policy_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#dynamic_entry_overflow_policy_list DdosDstZone#dynamic_entry_overflow_policy_list}
  */
  readonly dynamicEntryOverflowPolicyList?: DdosDstZonePortRangeListDynamicEntryOverflowPolicyListStruct[] | cdktf.IResolvable;
  /**
  * glid_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#glid_cfg DdosDstZone#glid_cfg}
  */
  readonly glidCfg?: DdosDstZonePortRangeListGlidCfg;
  /**
  * ip_filtering_policy_oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#ip_filtering_policy_oper DdosDstZone#ip_filtering_policy_oper}
  */
  readonly ipFilteringPolicyOper?: DdosDstZonePortRangeListIpFilteringPolicyOper;
  /**
  * ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#ips DdosDstZone#ips}
  */
  readonly ips?: DdosDstZonePortRangeListIps;
  /**
  * level_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#level_list DdosDstZone#level_list}
  */
  readonly levelList?: DdosDstZonePortRangeListLevelListStruct[] | cdktf.IResolvable;
  /**
  * manual_mode_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#manual_mode_list DdosDstZone#manual_mode_list}
  */
  readonly manualModeList?: DdosDstZonePortRangeListManualModeListStruct[] | cdktf.IResolvable;
  /**
  * pattern_recognition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#pattern_recognition DdosDstZone#pattern_recognition}
  */
  readonly patternRecognition?: DdosDstZonePortRangeListPatternRecognition;
  /**
  * pattern_recognition_pu_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#pattern_recognition_pu_details DdosDstZone#pattern_recognition_pu_details}
  */
  readonly patternRecognitionPuDetails?: DdosDstZonePortRangeListPatternRecognitionPuDetails;
  /**
  * port_ind block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#port_ind DdosDstZone#port_ind}
  */
  readonly portInd?: DdosDstZonePortRangeListPortInd;
  /**
  * progression_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#progression_tracking DdosDstZone#progression_tracking}
  */
  readonly progressionTracking?: DdosDstZonePortRangeListProgressionTracking;
  /**
  * sflow_tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#sflow_tcp DdosDstZone#sflow_tcp}
  */
  readonly sflowTcp?: DdosDstZonePortRangeListSflowTcp;
  /**
  * src_based_policy_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#src_based_policy_list DdosDstZone#src_based_policy_list}
  */
  readonly srcBasedPolicyList?: DdosDstZonePortRangeListSrcBasedPolicyListStruct[] | cdktf.IResolvable;
  /**
  * topk_destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#topk_destinations DdosDstZone#topk_destinations}
  */
  readonly topkDestinations?: DdosDstZonePortRangeListTopkDestinations;
  /**
  * topk_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#topk_sources DdosDstZone#topk_sources}
  */
  readonly topkSources?: DdosDstZonePortRangeListTopkSources;
}

export function ddosDstZonePortRangeListStructToTerraform(struct?: DdosDstZonePortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.numberToTerraform(struct!.age),
    apply_policy_on_overflow: cdktf.numberToTerraform(struct!.applyPolicyOnOverflow),
    default_action_list: cdktf.stringToTerraform(struct!.defaultActionList),
    deny: cdktf.numberToTerraform(struct!.deny),
    enable_class_list_overflow: cdktf.numberToTerraform(struct!.enableClassListOverflow),
    enable_top_k: cdktf.numberToTerraform(struct!.enableTopK),
    enable_top_k_destination: cdktf.numberToTerraform(struct!.enableTopKDestination),
    faster_de_escalation: cdktf.numberToTerraform(struct!.fasterDeEscalation),
    ip_filtering_policy: cdktf.stringToTerraform(struct!.ipFilteringPolicy),
    manual_mode_enable: cdktf.numberToTerraform(struct!.manualModeEnable),
    max_dynamic_entry_count: cdktf.numberToTerraform(struct!.maxDynamicEntryCount),
    outbound_only: cdktf.numberToTerraform(struct!.outboundOnly),
    port_range_end: cdktf.numberToTerraform(struct!.portRangeEnd),
    port_range_start: cdktf.numberToTerraform(struct!.portRangeStart),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    set_counter_base_val: cdktf.numberToTerraform(struct!.setCounterBaseVal),
    sflow_common: cdktf.numberToTerraform(struct!.sflowCommon),
    sflow_http: cdktf.numberToTerraform(struct!.sflowHttp),
    sflow_packets: cdktf.numberToTerraform(struct!.sflowPackets),
    stateful: cdktf.numberToTerraform(struct!.stateful),
    topk_dst_num_records: cdktf.numberToTerraform(struct!.topkDstNumRecords),
    topk_num_records: cdktf.numberToTerraform(struct!.topkNumRecords),
    unlimited_dynamic_entry_count: cdktf.numberToTerraform(struct!.unlimitedDynamicEntryCount),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    dynamic_entry_overflow_policy_list: cdktf.listMapper(ddosDstZonePortRangeListDynamicEntryOverflowPolicyListStructToTerraform, true)(struct!.dynamicEntryOverflowPolicyList),
    glid_cfg: ddosDstZonePortRangeListGlidCfgToTerraform(struct!.glidCfg),
    ip_filtering_policy_oper: ddosDstZonePortRangeListIpFilteringPolicyOperToTerraform(struct!.ipFilteringPolicyOper),
    ips: ddosDstZonePortRangeListIpsToTerraform(struct!.ips),
    level_list: cdktf.listMapper(ddosDstZonePortRangeListLevelListStructToTerraform, true)(struct!.levelList),
    manual_mode_list: cdktf.listMapper(ddosDstZonePortRangeListManualModeListStructToTerraform, true)(struct!.manualModeList),
    pattern_recognition: ddosDstZonePortRangeListPatternRecognitionToTerraform(struct!.patternRecognition),
    pattern_recognition_pu_details: ddosDstZonePortRangeListPatternRecognitionPuDetailsToTerraform(struct!.patternRecognitionPuDetails),
    port_ind: ddosDstZonePortRangeListPortIndToTerraform(struct!.portInd),
    progression_tracking: ddosDstZonePortRangeListProgressionTrackingToTerraform(struct!.progressionTracking),
    sflow_tcp: ddosDstZonePortRangeListSflowTcpToTerraform(struct!.sflowTcp),
    src_based_policy_list: cdktf.listMapper(ddosDstZonePortRangeListSrcBasedPolicyListStructToTerraform, true)(struct!.srcBasedPolicyList),
    topk_destinations: ddosDstZonePortRangeListTopkDestinationsToTerraform(struct!.topkDestinations),
    topk_sources: ddosDstZonePortRangeListTopkSourcesToTerraform(struct!.topkSources),
  }
}


export function ddosDstZonePortRangeListStructToHclTerraform(struct?: DdosDstZonePortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age: {
      value: cdktf.numberToHclTerraform(struct!.age),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    apply_policy_on_overflow: {
      value: cdktf.numberToHclTerraform(struct!.applyPolicyOnOverflow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_action_list: {
      value: cdktf.stringToHclTerraform(struct!.defaultActionList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny: {
      value: cdktf.numberToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_class_list_overflow: {
      value: cdktf.numberToHclTerraform(struct!.enableClassListOverflow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_top_k: {
      value: cdktf.numberToHclTerraform(struct!.enableTopK),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_top_k_destination: {
      value: cdktf.numberToHclTerraform(struct!.enableTopKDestination),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    faster_de_escalation: {
      value: cdktf.numberToHclTerraform(struct!.fasterDeEscalation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_filtering_policy: {
      value: cdktf.stringToHclTerraform(struct!.ipFilteringPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manual_mode_enable: {
      value: cdktf.numberToHclTerraform(struct!.manualModeEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_dynamic_entry_count: {
      value: cdktf.numberToHclTerraform(struct!.maxDynamicEntryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_only: {
      value: cdktf.numberToHclTerraform(struct!.outboundOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_range_end: {
      value: cdktf.numberToHclTerraform(struct!.portRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_range_start: {
      value: cdktf.numberToHclTerraform(struct!.portRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_counter_base_val: {
      value: cdktf.numberToHclTerraform(struct!.setCounterBaseVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_common: {
      value: cdktf.numberToHclTerraform(struct!.sflowCommon),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_http: {
      value: cdktf.numberToHclTerraform(struct!.sflowHttp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_packets: {
      value: cdktf.numberToHclTerraform(struct!.sflowPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stateful: {
      value: cdktf.numberToHclTerraform(struct!.stateful),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topk_dst_num_records: {
      value: cdktf.numberToHclTerraform(struct!.topkDstNumRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topk_num_records: {
      value: cdktf.numberToHclTerraform(struct!.topkNumRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unlimited_dynamic_entry_count: {
      value: cdktf.numberToHclTerraform(struct!.unlimitedDynamicEntryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_entry_overflow_policy_list: {
      value: cdktf.listMapperHcl(ddosDstZonePortRangeListDynamicEntryOverflowPolicyListStructToHclTerraform, true)(struct!.dynamicEntryOverflowPolicyList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeListDynamicEntryOverflowPolicyListStructList",
    },
    glid_cfg: {
      value: ddosDstZonePortRangeListGlidCfgToHclTerraform(struct!.glidCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeListGlidCfgList",
    },
    ip_filtering_policy_oper: {
      value: ddosDstZonePortRangeListIpFilteringPolicyOperToHclTerraform(struct!.ipFilteringPolicyOper),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeListIpFilteringPolicyOperList",
    },
    ips: {
      value: ddosDstZonePortRangeListIpsToHclTerraform(struct!.ips),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeListIpsList",
    },
    level_list: {
      value: cdktf.listMapperHcl(ddosDstZonePortRangeListLevelListStructToHclTerraform, true)(struct!.levelList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeListLevelListStructList",
    },
    manual_mode_list: {
      value: cdktf.listMapperHcl(ddosDstZonePortRangeListManualModeListStructToHclTerraform, true)(struct!.manualModeList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeListManualModeListStructList",
    },
    pattern_recognition: {
      value: ddosDstZonePortRangeListPatternRecognitionToHclTerraform(struct!.patternRecognition),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeListPatternRecognitionList",
    },
    pattern_recognition_pu_details: {
      value: ddosDstZonePortRangeListPatternRecognitionPuDetailsToHclTerraform(struct!.patternRecognitionPuDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeListPatternRecognitionPuDetailsList",
    },
    port_ind: {
      value: ddosDstZonePortRangeListPortIndToHclTerraform(struct!.portInd),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeListPortIndList",
    },
    progression_tracking: {
      value: ddosDstZonePortRangeListProgressionTrackingToHclTerraform(struct!.progressionTracking),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeListProgressionTrackingList",
    },
    sflow_tcp: {
      value: ddosDstZonePortRangeListSflowTcpToHclTerraform(struct!.sflowTcp),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeListSflowTcpList",
    },
    src_based_policy_list: {
      value: cdktf.listMapperHcl(ddosDstZonePortRangeListSrcBasedPolicyListStructToHclTerraform, true)(struct!.srcBasedPolicyList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeListSrcBasedPolicyListStructList",
    },
    topk_destinations: {
      value: ddosDstZonePortRangeListTopkDestinationsToHclTerraform(struct!.topkDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeListTopkDestinationsList",
    },
    topk_sources: {
      value: ddosDstZonePortRangeListTopkSourcesToHclTerraform(struct!.topkSources),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeListTopkSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortRangeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age !== undefined) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._applyPolicyOnOverflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyPolicyOnOverflow = this._applyPolicyOnOverflow;
    }
    if (this._defaultActionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultActionList = this._defaultActionList;
    }
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    if (this._enableClassListOverflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableClassListOverflow = this._enableClassListOverflow;
    }
    if (this._enableTopK !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTopK = this._enableTopK;
    }
    if (this._enableTopKDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTopKDestination = this._enableTopKDestination;
    }
    if (this._fasterDeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.fasterDeEscalation = this._fasterDeEscalation;
    }
    if (this._ipFilteringPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilteringPolicy = this._ipFilteringPolicy;
    }
    if (this._manualModeEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualModeEnable = this._manualModeEnable;
    }
    if (this._maxDynamicEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDynamicEntryCount = this._maxDynamicEntryCount;
    }
    if (this._outboundOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundOnly = this._outboundOnly;
    }
    if (this._portRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRangeEnd = this._portRangeEnd;
    }
    if (this._portRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRangeStart = this._portRangeStart;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._setCounterBaseVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCounterBaseVal = this._setCounterBaseVal;
    }
    if (this._sflowCommon !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowCommon = this._sflowCommon;
    }
    if (this._sflowHttp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowHttp = this._sflowHttp;
    }
    if (this._sflowPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowPackets = this._sflowPackets;
    }
    if (this._stateful !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateful = this._stateful;
    }
    if (this._topkDstNumRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkDstNumRecords = this._topkDstNumRecords;
    }
    if (this._topkNumRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkNumRecords = this._topkNumRecords;
    }
    if (this._unlimitedDynamicEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.unlimitedDynamicEntryCount = this._unlimitedDynamicEntryCount;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._dynamicEntryOverflowPolicyList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicEntryOverflowPolicyList = this._dynamicEntryOverflowPolicyList?.internalValue;
    }
    if (this._glidCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidCfg = this._glidCfg?.internalValue;
    }
    if (this._ipFilteringPolicyOper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilteringPolicyOper = this._ipFilteringPolicyOper?.internalValue;
    }
    if (this._ips?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips?.internalValue;
    }
    if (this._levelList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelList = this._levelList?.internalValue;
    }
    if (this._manualModeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualModeList = this._manualModeList?.internalValue;
    }
    if (this._patternRecognition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRecognition = this._patternRecognition?.internalValue;
    }
    if (this._patternRecognitionPuDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRecognitionPuDetails = this._patternRecognitionPuDetails?.internalValue;
    }
    if (this._portInd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portInd = this._portInd?.internalValue;
    }
    if (this._progressionTracking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTracking = this._progressionTracking?.internalValue;
    }
    if (this._sflowTcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowTcp = this._sflowTcp?.internalValue;
    }
    if (this._srcBasedPolicyList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcBasedPolicyList = this._srcBasedPolicyList?.internalValue;
    }
    if (this._topkDestinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkDestinations = this._topkDestinations?.internalValue;
    }
    if (this._topkSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkSources = this._topkSources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._age = undefined;
      this._applyPolicyOnOverflow = undefined;
      this._defaultActionList = undefined;
      this._deny = undefined;
      this._enableClassListOverflow = undefined;
      this._enableTopK = undefined;
      this._enableTopKDestination = undefined;
      this._fasterDeEscalation = undefined;
      this._ipFilteringPolicy = undefined;
      this._manualModeEnable = undefined;
      this._maxDynamicEntryCount = undefined;
      this._outboundOnly = undefined;
      this._portRangeEnd = undefined;
      this._portRangeStart = undefined;
      this._protocol = undefined;
      this._setCounterBaseVal = undefined;
      this._sflowCommon = undefined;
      this._sflowHttp = undefined;
      this._sflowPackets = undefined;
      this._stateful = undefined;
      this._topkDstNumRecords = undefined;
      this._topkNumRecords = undefined;
      this._unlimitedDynamicEntryCount = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._dynamicEntryOverflowPolicyList.internalValue = undefined;
      this._glidCfg.internalValue = undefined;
      this._ipFilteringPolicyOper.internalValue = undefined;
      this._ips.internalValue = undefined;
      this._levelList.internalValue = undefined;
      this._manualModeList.internalValue = undefined;
      this._patternRecognition.internalValue = undefined;
      this._patternRecognitionPuDetails.internalValue = undefined;
      this._portInd.internalValue = undefined;
      this._progressionTracking.internalValue = undefined;
      this._sflowTcp.internalValue = undefined;
      this._srcBasedPolicyList.internalValue = undefined;
      this._topkDestinations.internalValue = undefined;
      this._topkSources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._age = value.age;
      this._applyPolicyOnOverflow = value.applyPolicyOnOverflow;
      this._defaultActionList = value.defaultActionList;
      this._deny = value.deny;
      this._enableClassListOverflow = value.enableClassListOverflow;
      this._enableTopK = value.enableTopK;
      this._enableTopKDestination = value.enableTopKDestination;
      this._fasterDeEscalation = value.fasterDeEscalation;
      this._ipFilteringPolicy = value.ipFilteringPolicy;
      this._manualModeEnable = value.manualModeEnable;
      this._maxDynamicEntryCount = value.maxDynamicEntryCount;
      this._outboundOnly = value.outboundOnly;
      this._portRangeEnd = value.portRangeEnd;
      this._portRangeStart = value.portRangeStart;
      this._protocol = value.protocol;
      this._setCounterBaseVal = value.setCounterBaseVal;
      this._sflowCommon = value.sflowCommon;
      this._sflowHttp = value.sflowHttp;
      this._sflowPackets = value.sflowPackets;
      this._stateful = value.stateful;
      this._topkDstNumRecords = value.topkDstNumRecords;
      this._topkNumRecords = value.topkNumRecords;
      this._unlimitedDynamicEntryCount = value.unlimitedDynamicEntryCount;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._dynamicEntryOverflowPolicyList.internalValue = value.dynamicEntryOverflowPolicyList;
      this._glidCfg.internalValue = value.glidCfg;
      this._ipFilteringPolicyOper.internalValue = value.ipFilteringPolicyOper;
      this._ips.internalValue = value.ips;
      this._levelList.internalValue = value.levelList;
      this._manualModeList.internalValue = value.manualModeList;
      this._patternRecognition.internalValue = value.patternRecognition;
      this._patternRecognitionPuDetails.internalValue = value.patternRecognitionPuDetails;
      this._portInd.internalValue = value.portInd;
      this._progressionTracking.internalValue = value.progressionTracking;
      this._sflowTcp.internalValue = value.sflowTcp;
      this._srcBasedPolicyList.internalValue = value.srcBasedPolicyList;
      this._topkDestinations.internalValue = value.topkDestinations;
      this._topkSources.internalValue = value.topkSources;
    }
  }

  // age - computed: false, optional: true, required: false
  private _age?: number; 
  public get age() {
    return this.getNumberAttribute('age');
  }
  public set age(value: number) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // apply_policy_on_overflow - computed: false, optional: true, required: false
  private _applyPolicyOnOverflow?: number; 
  public get applyPolicyOnOverflow() {
    return this.getNumberAttribute('apply_policy_on_overflow');
  }
  public set applyPolicyOnOverflow(value: number) {
    this._applyPolicyOnOverflow = value;
  }
  public resetApplyPolicyOnOverflow() {
    this._applyPolicyOnOverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyPolicyOnOverflowInput() {
    return this._applyPolicyOnOverflow;
  }

  // default_action_list - computed: false, optional: true, required: false
  private _defaultActionList?: string; 
  public get defaultActionList() {
    return this.getStringAttribute('default_action_list');
  }
  public set defaultActionList(value: string) {
    this._defaultActionList = value;
  }
  public resetDefaultActionList() {
    this._defaultActionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionListInput() {
    return this._defaultActionList;
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: number; 
  public get deny() {
    return this.getNumberAttribute('deny');
  }
  public set deny(value: number) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }

  // enable_class_list_overflow - computed: false, optional: true, required: false
  private _enableClassListOverflow?: number; 
  public get enableClassListOverflow() {
    return this.getNumberAttribute('enable_class_list_overflow');
  }
  public set enableClassListOverflow(value: number) {
    this._enableClassListOverflow = value;
  }
  public resetEnableClassListOverflow() {
    this._enableClassListOverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableClassListOverflowInput() {
    return this._enableClassListOverflow;
  }

  // enable_top_k - computed: false, optional: true, required: false
  private _enableTopK?: number; 
  public get enableTopK() {
    return this.getNumberAttribute('enable_top_k');
  }
  public set enableTopK(value: number) {
    this._enableTopK = value;
  }
  public resetEnableTopK() {
    this._enableTopK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTopKInput() {
    return this._enableTopK;
  }

  // enable_top_k_destination - computed: false, optional: true, required: false
  private _enableTopKDestination?: number; 
  public get enableTopKDestination() {
    return this.getNumberAttribute('enable_top_k_destination');
  }
  public set enableTopKDestination(value: number) {
    this._enableTopKDestination = value;
  }
  public resetEnableTopKDestination() {
    this._enableTopKDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTopKDestinationInput() {
    return this._enableTopKDestination;
  }

  // faster_de_escalation - computed: false, optional: true, required: false
  private _fasterDeEscalation?: number; 
  public get fasterDeEscalation() {
    return this.getNumberAttribute('faster_de_escalation');
  }
  public set fasterDeEscalation(value: number) {
    this._fasterDeEscalation = value;
  }
  public resetFasterDeEscalation() {
    this._fasterDeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fasterDeEscalationInput() {
    return this._fasterDeEscalation;
  }

  // ip_filtering_policy - computed: false, optional: true, required: false
  private _ipFilteringPolicy?: string; 
  public get ipFilteringPolicy() {
    return this.getStringAttribute('ip_filtering_policy');
  }
  public set ipFilteringPolicy(value: string) {
    this._ipFilteringPolicy = value;
  }
  public resetIpFilteringPolicy() {
    this._ipFilteringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilteringPolicyInput() {
    return this._ipFilteringPolicy;
  }

  // manual_mode_enable - computed: false, optional: true, required: false
  private _manualModeEnable?: number; 
  public get manualModeEnable() {
    return this.getNumberAttribute('manual_mode_enable');
  }
  public set manualModeEnable(value: number) {
    this._manualModeEnable = value;
  }
  public resetManualModeEnable() {
    this._manualModeEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualModeEnableInput() {
    return this._manualModeEnable;
  }

  // max_dynamic_entry_count - computed: false, optional: true, required: false
  private _maxDynamicEntryCount?: number; 
  public get maxDynamicEntryCount() {
    return this.getNumberAttribute('max_dynamic_entry_count');
  }
  public set maxDynamicEntryCount(value: number) {
    this._maxDynamicEntryCount = value;
  }
  public resetMaxDynamicEntryCount() {
    this._maxDynamicEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDynamicEntryCountInput() {
    return this._maxDynamicEntryCount;
  }

  // outbound_only - computed: false, optional: true, required: false
  private _outboundOnly?: number; 
  public get outboundOnly() {
    return this.getNumberAttribute('outbound_only');
  }
  public set outboundOnly(value: number) {
    this._outboundOnly = value;
  }
  public resetOutboundOnly() {
    this._outboundOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundOnlyInput() {
    return this._outboundOnly;
  }

  // port_range_end - computed: false, optional: false, required: true
  private _portRangeEnd?: number; 
  public get portRangeEnd() {
    return this.getNumberAttribute('port_range_end');
  }
  public set portRangeEnd(value: number) {
    this._portRangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeEndInput() {
    return this._portRangeEnd;
  }

  // port_range_start - computed: false, optional: false, required: true
  private _portRangeStart?: number; 
  public get portRangeStart() {
    return this.getNumberAttribute('port_range_start');
  }
  public set portRangeStart(value: number) {
    this._portRangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeStartInput() {
    return this._portRangeStart;
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

  // set_counter_base_val - computed: false, optional: true, required: false
  private _setCounterBaseVal?: number; 
  public get setCounterBaseVal() {
    return this.getNumberAttribute('set_counter_base_val');
  }
  public set setCounterBaseVal(value: number) {
    this._setCounterBaseVal = value;
  }
  public resetSetCounterBaseVal() {
    this._setCounterBaseVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCounterBaseValInput() {
    return this._setCounterBaseVal;
  }

  // sflow_common - computed: false, optional: true, required: false
  private _sflowCommon?: number; 
  public get sflowCommon() {
    return this.getNumberAttribute('sflow_common');
  }
  public set sflowCommon(value: number) {
    this._sflowCommon = value;
  }
  public resetSflowCommon() {
    this._sflowCommon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowCommonInput() {
    return this._sflowCommon;
  }

  // sflow_http - computed: false, optional: true, required: false
  private _sflowHttp?: number; 
  public get sflowHttp() {
    return this.getNumberAttribute('sflow_http');
  }
  public set sflowHttp(value: number) {
    this._sflowHttp = value;
  }
  public resetSflowHttp() {
    this._sflowHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowHttpInput() {
    return this._sflowHttp;
  }

  // sflow_packets - computed: false, optional: true, required: false
  private _sflowPackets?: number; 
  public get sflowPackets() {
    return this.getNumberAttribute('sflow_packets');
  }
  public set sflowPackets(value: number) {
    this._sflowPackets = value;
  }
  public resetSflowPackets() {
    this._sflowPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowPacketsInput() {
    return this._sflowPackets;
  }

  // stateful - computed: false, optional: true, required: false
  private _stateful?: number; 
  public get stateful() {
    return this.getNumberAttribute('stateful');
  }
  public set stateful(value: number) {
    this._stateful = value;
  }
  public resetStateful() {
    this._stateful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulInput() {
    return this._stateful;
  }

  // topk_dst_num_records - computed: false, optional: true, required: false
  private _topkDstNumRecords?: number; 
  public get topkDstNumRecords() {
    return this.getNumberAttribute('topk_dst_num_records');
  }
  public set topkDstNumRecords(value: number) {
    this._topkDstNumRecords = value;
  }
  public resetTopkDstNumRecords() {
    this._topkDstNumRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkDstNumRecordsInput() {
    return this._topkDstNumRecords;
  }

  // topk_num_records - computed: false, optional: true, required: false
  private _topkNumRecords?: number; 
  public get topkNumRecords() {
    return this.getNumberAttribute('topk_num_records');
  }
  public set topkNumRecords(value: number) {
    this._topkNumRecords = value;
  }
  public resetTopkNumRecords() {
    this._topkNumRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkNumRecordsInput() {
    return this._topkNumRecords;
  }

  // unlimited_dynamic_entry_count - computed: false, optional: true, required: false
  private _unlimitedDynamicEntryCount?: number; 
  public get unlimitedDynamicEntryCount() {
    return this.getNumberAttribute('unlimited_dynamic_entry_count');
  }
  public set unlimitedDynamicEntryCount(value: number) {
    this._unlimitedDynamicEntryCount = value;
  }
  public resetUnlimitedDynamicEntryCount() {
    this._unlimitedDynamicEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unlimitedDynamicEntryCountInput() {
    return this._unlimitedDynamicEntryCount;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // dynamic_entry_overflow_policy_list - computed: false, optional: true, required: false
  private _dynamicEntryOverflowPolicyList = new DdosDstZonePortRangeListDynamicEntryOverflowPolicyListStructList(this, "dynamic_entry_overflow_policy_list", false);
  public get dynamicEntryOverflowPolicyList() {
    return this._dynamicEntryOverflowPolicyList;
  }
  public putDynamicEntryOverflowPolicyList(value: DdosDstZonePortRangeListDynamicEntryOverflowPolicyListStruct[] | cdktf.IResolvable) {
    this._dynamicEntryOverflowPolicyList.internalValue = value;
  }
  public resetDynamicEntryOverflowPolicyList() {
    this._dynamicEntryOverflowPolicyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEntryOverflowPolicyListInput() {
    return this._dynamicEntryOverflowPolicyList.internalValue;
  }

  // glid_cfg - computed: false, optional: true, required: false
  private _glidCfg = new DdosDstZonePortRangeListGlidCfgOutputReference(this, "glid_cfg");
  public get glidCfg() {
    return this._glidCfg;
  }
  public putGlidCfg(value: DdosDstZonePortRangeListGlidCfg) {
    this._glidCfg.internalValue = value;
  }
  public resetGlidCfg() {
    this._glidCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidCfgInput() {
    return this._glidCfg.internalValue;
  }

  // ip_filtering_policy_oper - computed: false, optional: true, required: false
  private _ipFilteringPolicyOper = new DdosDstZonePortRangeListIpFilteringPolicyOperOutputReference(this, "ip_filtering_policy_oper");
  public get ipFilteringPolicyOper() {
    return this._ipFilteringPolicyOper;
  }
  public putIpFilteringPolicyOper(value: DdosDstZonePortRangeListIpFilteringPolicyOper) {
    this._ipFilteringPolicyOper.internalValue = value;
  }
  public resetIpFilteringPolicyOper() {
    this._ipFilteringPolicyOper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilteringPolicyOperInput() {
    return this._ipFilteringPolicyOper.internalValue;
  }

  // ips - computed: false, optional: true, required: false
  private _ips = new DdosDstZonePortRangeListIpsOutputReference(this, "ips");
  public get ips() {
    return this._ips;
  }
  public putIps(value: DdosDstZonePortRangeListIps) {
    this._ips.internalValue = value;
  }
  public resetIps() {
    this._ips.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips.internalValue;
  }

  // level_list - computed: false, optional: true, required: false
  private _levelList = new DdosDstZonePortRangeListLevelListStructList(this, "level_list", false);
  public get levelList() {
    return this._levelList;
  }
  public putLevelList(value: DdosDstZonePortRangeListLevelListStruct[] | cdktf.IResolvable) {
    this._levelList.internalValue = value;
  }
  public resetLevelList() {
    this._levelList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelListInput() {
    return this._levelList.internalValue;
  }

  // manual_mode_list - computed: false, optional: true, required: false
  private _manualModeList = new DdosDstZonePortRangeListManualModeListStructList(this, "manual_mode_list", false);
  public get manualModeList() {
    return this._manualModeList;
  }
  public putManualModeList(value: DdosDstZonePortRangeListManualModeListStruct[] | cdktf.IResolvable) {
    this._manualModeList.internalValue = value;
  }
  public resetManualModeList() {
    this._manualModeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualModeListInput() {
    return this._manualModeList.internalValue;
  }

  // pattern_recognition - computed: false, optional: true, required: false
  private _patternRecognition = new DdosDstZonePortRangeListPatternRecognitionOutputReference(this, "pattern_recognition");
  public get patternRecognition() {
    return this._patternRecognition;
  }
  public putPatternRecognition(value: DdosDstZonePortRangeListPatternRecognition) {
    this._patternRecognition.internalValue = value;
  }
  public resetPatternRecognition() {
    this._patternRecognition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionInput() {
    return this._patternRecognition.internalValue;
  }

  // pattern_recognition_pu_details - computed: false, optional: true, required: false
  private _patternRecognitionPuDetails = new DdosDstZonePortRangeListPatternRecognitionPuDetailsOutputReference(this, "pattern_recognition_pu_details");
  public get patternRecognitionPuDetails() {
    return this._patternRecognitionPuDetails;
  }
  public putPatternRecognitionPuDetails(value: DdosDstZonePortRangeListPatternRecognitionPuDetails) {
    this._patternRecognitionPuDetails.internalValue = value;
  }
  public resetPatternRecognitionPuDetails() {
    this._patternRecognitionPuDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionPuDetailsInput() {
    return this._patternRecognitionPuDetails.internalValue;
  }

  // port_ind - computed: false, optional: true, required: false
  private _portInd = new DdosDstZonePortRangeListPortIndOutputReference(this, "port_ind");
  public get portInd() {
    return this._portInd;
  }
  public putPortInd(value: DdosDstZonePortRangeListPortInd) {
    this._portInd.internalValue = value;
  }
  public resetPortInd() {
    this._portInd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIndInput() {
    return this._portInd.internalValue;
  }

  // progression_tracking - computed: false, optional: true, required: false
  private _progressionTracking = new DdosDstZonePortRangeListProgressionTrackingOutputReference(this, "progression_tracking");
  public get progressionTracking() {
    return this._progressionTracking;
  }
  public putProgressionTracking(value: DdosDstZonePortRangeListProgressionTracking) {
    this._progressionTracking.internalValue = value;
  }
  public resetProgressionTracking() {
    this._progressionTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingInput() {
    return this._progressionTracking.internalValue;
  }

  // sflow_tcp - computed: false, optional: true, required: false
  private _sflowTcp = new DdosDstZonePortRangeListSflowTcpOutputReference(this, "sflow_tcp");
  public get sflowTcp() {
    return this._sflowTcp;
  }
  public putSflowTcp(value: DdosDstZonePortRangeListSflowTcp) {
    this._sflowTcp.internalValue = value;
  }
  public resetSflowTcp() {
    this._sflowTcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowTcpInput() {
    return this._sflowTcp.internalValue;
  }

  // src_based_policy_list - computed: false, optional: true, required: false
  private _srcBasedPolicyList = new DdosDstZonePortRangeListSrcBasedPolicyListStructList(this, "src_based_policy_list", false);
  public get srcBasedPolicyList() {
    return this._srcBasedPolicyList;
  }
  public putSrcBasedPolicyList(value: DdosDstZonePortRangeListSrcBasedPolicyListStruct[] | cdktf.IResolvable) {
    this._srcBasedPolicyList.internalValue = value;
  }
  public resetSrcBasedPolicyList() {
    this._srcBasedPolicyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcBasedPolicyListInput() {
    return this._srcBasedPolicyList.internalValue;
  }

  // topk_destinations - computed: false, optional: true, required: false
  private _topkDestinations = new DdosDstZonePortRangeListTopkDestinationsOutputReference(this, "topk_destinations");
  public get topkDestinations() {
    return this._topkDestinations;
  }
  public putTopkDestinations(value: DdosDstZonePortRangeListTopkDestinations) {
    this._topkDestinations.internalValue = value;
  }
  public resetTopkDestinations() {
    this._topkDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkDestinationsInput() {
    return this._topkDestinations.internalValue;
  }

  // topk_sources - computed: false, optional: true, required: false
  private _topkSources = new DdosDstZonePortRangeListTopkSourcesOutputReference(this, "topk_sources");
  public get topkSources() {
    return this._topkSources;
  }
  public putTopkSources(value: DdosDstZonePortRangeListTopkSources) {
    this._topkSources.internalValue = value;
  }
  public resetTopkSources() {
    this._topkSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkSourcesInput() {
    return this._topkSources.internalValue;
  }
}

export class DdosDstZonePortRangeListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortRangeListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortRangeListStructOutputReference {
    return new DdosDstZonePortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneSamplingEnable {
  /**
  * 'all': all; 'zone_tcp_any_exceed': TCP Dst IP-Proto Rate: Total Exceeded; 'zone_tcp_pkt_rate_exceed': TCP Dst IP-Proto Rate: Packet Exceeded; 'zone_tcp_conn_rate_exceed': TCP Dst IP-Proto Rate: Conn Exceeded; 'zone_udp_any_exceed': UDP Dst IP-Proto Rate: Total Exceeded; 'zone_udp_pkt_rate_exceed': UDP Dst IP-Proto Rate: Packet Exceeded; 'zone_udp_conn_limit_exceed': UDP Dst IP-Proto Limit: Conn Exceeded; 'zone_udp_conn_rate_exceed': UDP Dst IP-Proto Rate: Conn Exceeded; 'zone_icmp_pkt_rate_exceed': ICMP Dst Rate: Packet Exceeded; 'zone_other_pkt_rate_exceed': OTHER Dst IP-Proto Rate: Packet Exceeded; 'zone_other_frag_pkt_rate_exceed': OTHER Dst IP-Proto Rate: Frag Exceeded; 'zone_port_pkt_rate_exceed': Port Rate: Packet Exceeded; 'zone_port_conn_limit_exceed': Port Limit: Conn Exceeded; 'zone_port_conn_rate_exceed': Port Rate: Conn Exceeded; 'zone_pkt_sent': Inbound: Packets Forwarded; 'zone_udp_pkt_sent': UDP Total Packets Forwarded; 'zone_tcp_pkt_sent': TCP Total Packets Forwarded; 'zone_icmp_pkt_sent': ICMP Total Packets Forwarded; 'zone_other_pkt_sent': OTHER Total Packets Forwarded; 'zone_tcp_conn_limit_exceed': TCP Dst IP-Proto Limit: Conn Exceeded; 'zone_tcp_pkt_rcvd': TCP Total Packets Received; 'zone_udp_pkt_rcvd': UDP Total Packets Received; 'zone_icmp_pkt_rcvd': ICMP Total Packets Received; 'zone_other_pkt_rcvd': OTHER Total Packets Received; 'zone_udp_filter_match': UDP Filter Match; 'zone_udp_filter_not_match': UDP Filter Not Matched on Pkt; 'zone_udp_filter_action_blacklist': UDP Filter Action Blacklist; 'zone_udp_filter_action_drop': UDP Filter Action Drop; 'zone_tcp_syn': TCP Total SYN Received; 'zone_tcp_syn_drop': TCP SYN Packets Dropped; 'zone_tcp_src_rate_drop': TCP Src Rate: Total Exceeded; 'zone_udp_src_rate_drop': UDP Src Rate: Total Exceeded; 'zone_icmp_src_rate_drop': ICMP Src Rate: Total Exceeded; 'zone_other_frag_src_rate_drop': OTHER Src Rate: Frag Exceeded; 'zone_other_src_rate_drop': OTHER Src Rate: Total Exceeded; 'zone_tcp_drop': TCP Total Packets Dropped; 'zone_udp_drop': UDP Total Packets Dropped; 'zone_icmp_drop': ICMP Total Packets Dropped; 'zone_frag_drop': Fragmented Packets Dropped; 'zone_other_drop': OTHER Total Packets Dropped; 'zone_tcp_auth': TCP Auth: SYN Cookie Sent; 'zone_udp_filter_action_default_pass': UDP Filter Action Default Pass; 'zone_tcp_filter_match': TCP Filter Match; 'zone_tcp_filter_not_match': TCP Filter Not Matched on Pkt; 'zone_tcp_filter_action_blacklist': TCP Filter Action Blacklist; 'zone_tcp_filter_action_drop': TCP Filter Action Drop; 'zone_tcp_filter_action_default_pass': TCP Filter Action Default Pass; 'zone_udp_filter_action_whitelist': UDP Filter Action WL; 'zone_over_limit_on': Zone overlimit Trigger ON; 'zone_over_limit_off': Zone overlimit Trigger OFF; 'zone_port_over_limit_on': Zone port overlimit Trigger ON; 'zone_port_over_limit_off': Zone port overlimit Trigger OFF; 'zone_over_limit_action': Zone overlimit action; 'zone_port_over_limit_action': Zone port overlimit action; 'scanning_detected_drop': Scanning Detected drop (deprecated); 'scanning_detected_blacklist': Scanning Detected blacklist (deprecated); 'zone_udp_kibit_rate_drop': UDP Dst IP-Proto Rate: KiBit Exceeded; 'zone_tcp_kibit_rate_drop': TCP Dst IP-Proto Rate: KiBit Exceeded; 'zone_icmp_kibit_rate_drop': ICMP Dst Rate: KiBit Exceeded; 'zone_other_kibit_rate_drop': OTHER Dst IP-Proto Rate: KiBit Exceeded; 'zone_port_undef_drop': Dst Port Undefined Dropped; 'zone_port_bl': Dst Port Blacklist Packets Dropped; 'zone_src_port_bl': Dst SrcPort Blacklist Packets Dropped; 'zone_port_kbit_rate_exceed': Port Rate: KiBit Exceeded; 'zone_tcp_src_drop': TCP Src Packets Dropped; 'zone_udp_src_drop': UDP Src Packets Dropped; 'zone_icmp_src_drop': ICMP Src Packets Dropped; 'zone_other_src_drop': OTHER Src Packets Dropped; 'tcp_syn_rcvd': TCP Inbound SYN Received; 'tcp_syn_ack_rcvd': TCP SYN ACK Received; 'tcp_ack_rcvd': TCP ACK Received; 'tcp_fin_rcvd': TCP FIN Received; 'tcp_rst_rcvd': TCP RST Received; 'ingress_bytes': Inbound: Bytes Received; 'egress_bytes': Outbound: Bytes Received; 'ingress_packets': Inbound: Packets Received; 'egress_packets': Outbound: Packets Received; 'tcp_fwd_recv': TCP Inbound Packets Received; 'udp_fwd_recv': UDP Inbound Packets Received; 'icmp_fwd_recv': ICMP Inbound Packets Received; 'tcp_syn_cookie_fail': TCP Auth: SYN Cookie Failed; 'zone_tcp_session_created': TCP Sessions Created; 'zone_udp_session_created': UDP Sessions Created; 'zone_tcp_filter_action_whitelist': TCP Filter Action WL; 'zone_other_filter_match': OTHER Filter Match; 'zone_other_filter_not_match': OTHER Filter Not Matched on Pkt; 'zone_other_filter_action_blacklist': OTHER Filter Action Blacklist; 'zone_other_filter_action_drop': OTHER Filter Action Drop; 'zone_other_filter_action_whitelist': OTHER Filter Action WL; 'zone_other_filter_action_default_pass': OTHER Filter Action Default Pass; 'zone_blackhole_inject': Dst Blackhole Inject; 'zone_blackhole_withdraw': Dst Blackhole Withdraw; 'zone_tcp_out_of_seq_excd': TCP Out-Of-Seq Exceeded; 'zone_tcp_retransmit_excd': TCP Retransmit Exceeded; 'zone_tcp_zero_window_excd': TCP Zero-Window Exceeded; 'zone_tcp_conn_prate_excd': TCP Rate: Conn Pkt Exceeded; 'zone_tcp_action_on_ack_init': TCP Auth: ACK Retry Init; 'zone_tcp_action_on_ack_gap_drop': TCP Auth: ACK Retry Retry-Gap Dropped; 'zone_tcp_action_on_ack_fail': TCP Auth: ACK Retry Dropped; 'zone_tcp_action_on_ack_pass': TCP Auth: ACK Retry Passed; 'zone_tcp_action_on_syn_init': TCP Auth: SYN Retry Init; 'zone_tcp_action_on_syn_gap_drop': TCP Auth: SYN Retry-Gap Dropped; 'zone_tcp_action_on_syn_fail': TCP Auth: SYN Retry Dropped; 'zone_tcp_action_on_syn_pass': TCP Auth: SYN Retry Passed; 'zone_payload_too_small': UDP Payload Too Small; 'zone_payload_too_big': UDP Payload Too Large; 'zone_udp_conn_prate_excd': UDP Rate: Conn Pkt Exceeded; 'zone_udp_ntp_monlist_req': UDP NTP Monlist Request; 'zone_udp_ntp_monlist_resp': UDP NTP Monlist Response; 'zone_udp_wellknown_sport_drop': UDP SrcPort Wellknown; 'zone_udp_retry_init': UDP Auth: Retry Init; 'zone_udp_retry_pass': UDP Auth: Retry Passed; 'zone_tcp_bytes_drop': TCP Total Bytes Dropped; 'zone_udp_bytes_drop': UDP Total Bytes Dropped; 'zone_icmp_bytes_drop': ICMP Total Bytes Dropped; 'zone_other_bytes_drop': OTHER Total Bytes Dropped; 'zone_out_no_route': Dst IPv4/v6 Out No Route; 'outbound_bytes_sent': Outbound: Bytes Forwarded; 'outbound_drop': Outbound: Packets Dropped; 'outbound_bytes_drop': Outbound: Bytes Dropped; 'outbound_pkt_sent': Outbound: Packets Forwarded; 'inbound_bytes_sent': Inbound: Bytes Forwarded; 'inbound_bytes_drop': Inbound: Bytes Dropped; 'zone_src_port_pkt_rate_exceed': SrcPort Rate: Packet Exceeded; 'zone_src_port_kbit_rate_exceed': SrcPort Rate: KiBit Exceeded; 'zone_src_port_conn_limit_exceed': SrcPort Limit: Conn Exceeded; 'zone_src_port_conn_rate_exceed': SrcPort Rate: Conn Exceeded; 'zone_ip_proto_pkt_rate_exceed': IP-Proto Rate: Packet Exceeded; 'zone_ip_proto_kbit_rate_exceed': IP-Proto Rate: KiBit Exceeded; 'zone_tcp_port_any_exceed': TCP Port Rate: Total Exceed; 'zone_udp_port_any_exceed': UDP Port Rate: Total Exceed; 'zone_tcp_auth_pass': TCP Auth: SYN Auth Passed; 'zone_tcp_rst_cookie_fail': TCP Auth: RST Cookie Failed; 'zone_tcp_unauth_drop': TCP Auth: Unauth Dropped; 'src_tcp_syn_auth_fail': Src TCP Auth: SYN Auth Failed; 'src_tcp_syn_cookie_sent': Src TCP Auth: SYN Cookie Sent; 'src_tcp_syn_cookie_fail': Src TCP Auth: SYN Cookie Failed; 'src_tcp_rst_cookie_fail': Src TCP Auth: RST Cookie Failed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#counters1 DdosDstZone#counters1}
  */
  readonly counters1?: string;
  /**
  * 'src_tcp_unauth_drop': Src TCP Auth: Unauth Dropped; 'src_tcp_action_on_syn_init': Src TCP Auth: SYN Retry Init; 'src_tcp_action_on_syn_gap_drop': Src TCP Auth: SYN Retry-Gap Dropped; 'src_tcp_action_on_syn_fail': Src TCP Auth: SYN Retry Dropped; 'src_tcp_action_on_ack_init': Src TCP Auth: ACK Retry Init; 'src_tcp_action_on_ack_gap_drop': Src TCP Auth: ACK Retry Retry-Gap Dropped; 'src_tcp_action_on_ack_fail': Src TCP Auth: ACK Retry Dropped; 'src_tcp_out_of_seq_excd': Src TCP Out-Of-Seq Exceeded; 'src_tcp_retransmit_excd': Src TCP Retransmit Exceeded; 'src_tcp_zero_window_excd': Src TCP Zero-Window Exceeded; 'src_tcp_conn_prate_excd': Src TCP Rate: Conn Pkt Exceeded; 'src_udp_min_payload': Src UDP Payload Too Small; 'src_udp_max_payload': Src UDP Payload Too Large; 'src_udp_conn_prate_excd': Src UDP Rate: Conn Pkt Exceeded; 'src_udp_ntp_monlist_req': Src UDP NTP Monlist Request; 'src_udp_ntp_monlist_resp': Src UDP NTP Monlist Response; 'src_udp_wellknown_sport_drop': Src UDP SrcPort Wellknown; 'src_udp_retry_init': Src UDP Auth: Retry Init; 'dst_udp_retry_gap_drop': UDP Auth: Retry-Gap Dropped; 'dst_udp_retry_fail': UDP Auth: Retry Timeout; 'dst_tcp_session_aged': TCP Sessions Aged; 'dst_udp_session_aged': UDP Sessions Aged; 'dst_tcp_conn_close': TCP Connections Closed; 'dst_tcp_conn_close_half_open': TCP Half Open Connections Closed; 'dst_drop_frag_pkt': Fragmented Packets Dropped; 'src_tcp_filter_action_blacklist': Src TCP Filter Action Blacklist; 'src_tcp_filter_action_whitelist': Src TCP Filter Action WL; 'src_tcp_filter_action_drop': Src TCP Filter Action Drop; 'src_tcp_filter_action_default_pass': Src TCP Filter Action Default Pass; 'src_udp_filter_action_blacklist': Src UDP Filter Action Blacklist; 'src_udp_filter_action_whitelist': Src UDP Filter Action WL; 'src_udp_filter_action_drop': Src UDP Filter Action Drop; 'src_udp_filter_action_default_pass': Src UDP Filter Action Default Pass; 'src_other_filter_action_blacklist': Src OTHER Filter Action Blacklist; 'src_other_filter_action_whitelist': Src OTHER Filter Action WL; 'src_other_filter_action_drop': Src OTHER Filter Action Drop; 'src_other_filter_action_default_pass': Src OTHER Filter Action Default Pass; 'tcp_invalid_syn': TCP Invalid SYN Received; 'dst_tcp_conn_close_w_rst': TCP RST Connections Closed; 'dst_tcp_conn_close_w_fin': TCP FIN Connections Closed; 'dst_tcp_conn_close_w_idle': TCP Idle Connections Closed; 'dst_tcp_conn_create_from_syn': TCP Connections Created From SYN; 'dst_tcp_conn_create_from_ack': TCP Connections Created From ACK; 'src_frag_drop': Src Fragmented Packets Dropped; 'zone_port_kbit_rate_exceed_pkt': Port Rate: KiBit Pkt Exceeded; 'dst_tcp_bytes_rcv': TCP Total Bytes Received; 'dst_udp_bytes_rcv': UDP Total Bytes Received; 'dst_icmp_bytes_rcv': ICMP Total Bytes Received; 'dst_other_bytes_rcv': OTHER Total Bytes Received; 'dst_tcp_bytes_sent': TCP Total Bytes Forwarded; 'dst_udp_bytes_sent': UDP Total Bytes Forwarded; 'dst_icmp_bytes_sent': ICMP Total Bytes Forwarded; 'dst_other_bytes_sent': OTHER Total Bytes Forwarded; 'dst_udp_auth_drop': UDP Auth: Dropped; 'dst_tcp_auth_drop': TCP Auth: Dropped; 'dst_tcp_auth_resp': TCP Auth: Responded; 'dst_drop': Inbound: Packets Dropped; 'dst_entry_pkt_rate_exceed': Entry Rate: Packet Exceeded; 'dst_entry_kbit_rate_exceed': Entry Rate: KiBit Exceeded; 'dst_entry_conn_limit_exceed': Entry Limit: Conn Exceeded; 'dst_entry_conn_rate_exceed': Entry Rate: Conn Exceeded; 'dst_entry_frag_pkt_rate_exceed': Entry Rate: Frag Packet Exceeded; 'dst_l4_tcp_blacklist_drop': Dst TCP IP-Proto Blacklist Dropped; 'dst_l4_udp_blacklist_drop': Dst UDP IP-Proto Blacklist Dropped; 'dst_l4_icmp_blacklist_drop': Dst ICMP IP-Proto Blacklist Dropped; 'dst_l4_other_blacklist_drop': Dst OTHER IP-Proto Blacklist Dropped; 'dst_frag_timeout_drop': Fragment Reassemble Timeout Drop; 'dst_icmp_any_exceed': ICMP Rate: Total Exceed; 'dst_other_any_exceed': OTHER Rate: Total Exceed; 'tcp_rexmit_syn_limit_drop': TCP SYN Retransmit Exceeded Drop; 'tcp_rexmit_syn_limit_bl': TCP SYN Retransmit Exceeded Blacklist; 'dst_clist_overflow_policy_at_learning': Dst Src-Based Overflow Policy Hit; 'zone_frag_rcvd': Fragmented Packets Received; 'zone_tcp_wellknown_sport_drop': TCP SrcPort Wellknown; 'src_tcp_wellknown_sport_drop': Src TCP SrcPort Wellknown; 'secondary_dst_entry_pkt_rate_exceed': Per Addr Rate: Packet Exceeded; 'secondary_dst_entry_kbit_rate_exceed': Per Addr Rate: KiBit Exceeded; 'secondary_dst_entry_conn_limit_exceed': Per Addr Limit: Conn Exceeded; 'secondary_dst_entry_conn_rate_exceed': Per Addr Rate: Conn Exceeded; 'secondary_dst_entry_frag_pkt_rate_exceed': Per Addr Rate: Frag Packet Exceeded; 'src_udp_retry_gap_drop': Src UDP Auth: Retry-Gap Dropped; 'dst_entry_kbit_rate_exceed_count': Entry Rate: KiBit Exceeded Count; 'secondary_entry_learn': Per Addr Entry Learned; 'secondary_entry_hit': Per Addr Entry Hit; 'secondary_entry_miss': Per Addr Entry Missed; 'secondary_entry_aged': Per Addr Entry Aged; 'secondary_entry_learning_thre_exceed': Per Addr Entry Count Overflow; 'zone_port_undef_hit': Dst Port undefined Hit; 'zone_tcp_action_on_ack_timeout': TCP Auth: ACK Retry Timeout; 'zone_tcp_action_on_ack_reset': TCP Auth: ACK Retry Timeout Reset; 'zone_tcp_action_on_ack_blacklist': TCP Auth: ACK Retry Timeout Blacklisted; 'src_tcp_action_on_ack_timeout': Src TCP Auth: ACK Retry Timeout; 'src_tcp_action_on_ack_reset': Src TCP Auth: ACK Retry Timeout Reset; 'src_tcp_action_on_ack_blacklist': Src TCP Auth: ACK Retry Timeout Blacklisted; 'zone_tcp_action_on_syn_timeout': TCP Auth: SYN Retry Timeout; 'zone_tcp_action_on_syn_reset': TCP Auth: SYN Retry Timeout Reset; 'zone_tcp_action_on_syn_blacklist': TCP Auth: SYN Retry Timeout Blacklisted; 'src_tcp_action_on_syn_timeout': Src TCP Auth: SYN Retry Timeout; 'src_tcp_action_on_syn_reset': Src TCP Auth: SYN Retry Timeout Reset; 'src_tcp_action_on_syn_blacklist': Src TCP Auth: SYN Retry Timeout Blacklisted; 'zone_udp_frag_pkt_rate_exceed': UDP Dst IP-Proto Rate: Frag Exceeded; 'zone_udp_frag_src_rate_drop': UDP Src Rate: Frag Exceeded; 'zone_tcp_frag_pkt_rate_exceed': TCP Dst IP-Proto Rate: Frag Exceeded; 'zone_tcp_frag_src_rate_drop': TCP Src Rate: Frag Exceeded; 'zone_icmp_frag_pkt_rate_exceed': ICMP Dst IP-Proto Rate: Frag Exceeded; 'zone_icmp_frag_src_rate_drop': ICMP Src Rate: Frag Exceeded; 'sflow_internal_samples_packed': Sflow Internal Samples Packed; 'sflow_external_samples_packed': Sflow External Samples Packed; 'sflow_internal_packets_sent': Sflow Internal Packets Sent; 'sflow_external_packets_sent': Sflow External Packets Sent; 'dns_outbound_total_query': DNS Outbound Total Query; 'dns_outbound_query_malformed': DNS Outbound Query Malformed; 'dns_outbound_query_resp_chk_failed': DNS Outbound Query Resp Check Failed; 'dns_outbound_query_resp_chk_blacklisted': DNS Outbound Query Resp Check Blacklisted; 'dns_outbound_query_resp_chk_refused_sent': DNS Outbound Query Resp Check REFUSED Sent; 'dns_outbound_query_resp_chk_reset_sent': DNS Outbound Query Resp Check RESET Sent; 'dns_outbound_query_resp_chk_no_resp_sent': DNS Outbound Query Resp Check No Response Sent; 'dns_outbound_query_resp_size_exceed': DNS Outbound Query Response Size Exceed; 'dns_outbound_query_sess_timed_out': DNS Outbound Query Session Timed Out; 'source_entry_total': Source Entry Total Count; 'source_entry_udp': Source Entry UDP Count; 'source_entry_tcp': Source Entry TCP Count; 'source_entry_icmp': Source Entry ICMP Count; 'source_entry_other': Source Entry OTHER Count; 'dst_exceed_action_tunnel': Entry Exceed Action: Tunnel;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#counters2 DdosDstZone#counters2}
  */
  readonly counters2?: string;
  /**
  * 'dst_udp_retry_timeout_blacklist': UDP Auth: Retry Timeout Blacklisted; 'src_udp_auth_timeout': Src UDP Auth: Retry Timeout; 'zone_src_udp_retry_timeout_blacklist': Src UDP Auth: Retry Timeout Blacklisted; 'src_udp_retry_pass': Src UDP Retry Passed; 'secondary_port_learn': Per Addr Port Learned; 'secondary_port_aged': Per Addr Port Aged; 'dst_entry_outbound_udp_session_created': Outbound: UDP Sessions Created; 'dst_entry_outbound_udp_session_aged': Outbound: UDP Sessions Aged; 'dst_entry_outbound_tcp_session_created': Outbound: TCP Sessions Created; 'dst_entry_outbound_tcp_session_aged': Outbound: TCP Sessions Aged; 'dst_entry_outbound_pkt_rate_exceed': Outbound Rate: Packet Exceeded; 'dst_entry_outbound_kbit_rate_exceed': Outbound Rate: KiBit Exceeded; 'dst_entry_outbound_kbit_rate_exceed_count': Outbound Rate: KiBit Exceeded Count; 'dst_entry_outbound_conn_limit_exceed': Outbound Limit: Conn Exceeded; 'dst_entry_outbound_conn_rate_exceed': Outbound Rate: Conn Exceeded; 'dst_entry_outbound_frag_pkt_rate_exceed': Outbound Rate: Frag Packet Exceeded; 'prog_first_req_time_exceed': Req-Resp: First Request Time Exceed; 'prog_req_resp_time_exceed': Req-Resp: Request to Response Time Exceed; 'prog_request_len_exceed': Req-Resp: Request Length Exceed; 'prog_response_len_exceed': Req-Resp: Response Length Exceed; 'prog_resp_req_ratio_exceed': Req-Resp: Response to Request Ratio Exceed; 'prog_resp_req_time_exceed': Req-Resp: Response to Request Time Exceed; 'entry_sync_message_received': Entry Sync Message Received; 'entry_sync_message_sent': Entry Sync Message Sent; 'prog_conn_sent_exceed': Connection: Sent Exceed; 'prog_conn_rcvd_exceed': Connection: Received Exceed; 'prog_conn_time_exceed': Connection: Time Exceed; 'prog_conn_rcvd_sent_ratio_exceed': Connection: Received to Sent Ratio Exceed; 'prog_win_sent_exceed': Time Window: Sent Exceed; 'prog_win_rcvd_exceed': Time Window: Received Exceed; 'prog_win_rcvd_sent_ratio_exceed': Time Window: Received to Sent Exceed; 'prog_exceed_drop': Req-Resp: Violation Exceed Dropped; 'prog_exceed_bl': Req-Resp: Violation Exceed Blacklisted; 'prog_conn_exceed_drop': Connection: Violation Exceed Dropped; 'prog_conn_exceed_bl': Connection: Violation Exceed Blacklisted; 'prog_win_exceed_drop': Time Window: Violation Exceed Dropped; 'prog_win_exceed_bl': Time Window: Violation Exceed Blacklisted; 'east_west_inbound_rcv_pkt': East West: Inbound Packets Received; 'east_west_inbound_drop_pkt': East West: Inbound Packets Dropped; 'east_west_inbound_fwd_pkt': East West: Inbound Packets Forwarded; 'east_west_inbound_rcv_byte': East West: Inbound Bytes Received; 'east_west_inbound_drop_byte': East West: Inbound Bytes Dropped; 'east_west_inbound_fwd_byte': East West: Inbound Bytes Forwarded; 'east_west_outbound_rcv_pkt': East West: Outbound Packets Received; 'east_west_outbound_drop_pkt': East West: Outbound Packets Dropped; 'east_west_outbound_fwd_pkt': East West: Outbound Packets Forwarded; 'east_west_outbound_rcv_byte': East West: Outbound Bytes Received; 'east_west_outbound_drop_byte': East West: Outbound Bytes Dropped; 'east_west_outbound_fwd_byte': East West: Outbound Bytes Forwarded; 'dst_exceed_action_drop': Entry Exceed Action: Dropped; 'prog_conn_samples': Sample Collected: Connection; 'prog_req_samples': Sample Collected: Req-Resp; 'prog_win_samples': Sample Collected: Time Window; 'victim_ip_learned': Victim Identification: IP Entry Learned; 'victim_ip_aged': Victim Identification: IP Entry Aged; 'prog_conn_samples_processed': Sample Processed: Connnection; 'prog_req_samples_processed': Sample Processed: Req-Resp; 'prog_win_samples_processed': Sample Processed: Time Window; 'dst_src_learn_overflow': Src Dynamic Entry Count Overflow; 'dst_tcp_auth_rst': TCP Auth: Reset;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#counters3 DdosDstZone#counters3}
  */
  readonly counters3?: string;
}

export function ddosDstZoneSamplingEnableToTerraform(struct?: DdosDstZoneSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
    counters2: cdktf.stringToTerraform(struct!.counters2),
    counters3: cdktf.stringToTerraform(struct!.counters3),
  }
}


export function ddosDstZoneSamplingEnableToHclTerraform(struct?: DdosDstZoneSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    counters2: {
      value: cdktf.stringToHclTerraform(struct!.counters2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    counters3: {
      value: cdktf.stringToHclTerraform(struct!.counters3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    if (this._counters2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters2 = this._counters2;
    }
    if (this._counters3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters3 = this._counters3;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
      this._counters2 = undefined;
      this._counters3 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
      this._counters2 = value.counters2;
      this._counters3 = value.counters3;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }

  // counters2 - computed: false, optional: true, required: false
  private _counters2?: string; 
  public get counters2() {
    return this.getStringAttribute('counters2');
  }
  public set counters2(value: string) {
    this._counters2 = value;
  }
  public resetCounters2() {
    this._counters2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters2Input() {
    return this._counters2;
  }

  // counters3 - computed: false, optional: true, required: false
  private _counters3?: string; 
  public get counters3() {
    return this.getStringAttribute('counters3');
  }
  public set counters3(value: string) {
    this._counters3 = value;
  }
  public resetCounters3() {
    this._counters3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters3Input() {
    return this._counters3;
  }
}

export class DdosDstZoneSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneSamplingEnableOutputReference {
    return new DdosDstZoneSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneSflowTcp {
  /**
  * Enable sFlow basic TCP counter polling. WARNING: Zone level Sflow polling might induce heavy CPU load depending on the total nu
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#sflow_tcp_basic DdosDstZone#sflow_tcp_basic}
  */
  readonly sflowTcpBasic?: number;
  /**
  * Enable sFlow stateful TCP counter polling. WARNING: Zone level Sflow polling might induce heavy CPU load depending on the total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#sflow_tcp_stateful DdosDstZone#sflow_tcp_stateful}
  */
  readonly sflowTcpStateful?: number;
}

export function ddosDstZoneSflowTcpToTerraform(struct?: DdosDstZoneSflowTcpOutputReference | DdosDstZoneSflowTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sflow_tcp_basic: cdktf.numberToTerraform(struct!.sflowTcpBasic),
    sflow_tcp_stateful: cdktf.numberToTerraform(struct!.sflowTcpStateful),
  }
}


export function ddosDstZoneSflowTcpToHclTerraform(struct?: DdosDstZoneSflowTcpOutputReference | DdosDstZoneSflowTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sflow_tcp_basic: {
      value: cdktf.numberToHclTerraform(struct!.sflowTcpBasic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_tcp_stateful: {
      value: cdktf.numberToHclTerraform(struct!.sflowTcpStateful),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSflowTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneSflowTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sflowTcpBasic !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowTcpBasic = this._sflowTcpBasic;
    }
    if (this._sflowTcpStateful !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowTcpStateful = this._sflowTcpStateful;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSflowTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sflowTcpBasic = undefined;
      this._sflowTcpStateful = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sflowTcpBasic = value.sflowTcpBasic;
      this._sflowTcpStateful = value.sflowTcpStateful;
    }
  }

  // sflow_tcp_basic - computed: false, optional: true, required: false
  private _sflowTcpBasic?: number; 
  public get sflowTcpBasic() {
    return this.getNumberAttribute('sflow_tcp_basic');
  }
  public set sflowTcpBasic(value: number) {
    this._sflowTcpBasic = value;
  }
  public resetSflowTcpBasic() {
    this._sflowTcpBasic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowTcpBasicInput() {
    return this._sflowTcpBasic;
  }

  // sflow_tcp_stateful - computed: false, optional: true, required: false
  private _sflowTcpStateful?: number; 
  public get sflowTcpStateful() {
    return this.getNumberAttribute('sflow_tcp_stateful');
  }
  public set sflowTcpStateful(value: number) {
    this._sflowTcpStateful = value;
  }
  public resetSflowTcpStateful() {
    this._sflowTcpStateful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowTcpStatefulInput() {
    return this._sflowTcpStateful;
  }
}
export interface DdosDstZoneSrcPortZoneSrcPortListGlidCfg {
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#glid DdosDstZone#glid}
  */
  readonly glid?: string;
  /**
  * 'drop': Drop packets for glid exceed (Default); 'ignore': Do nothing for glid exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#glid_action DdosDstZone#glid_action}
  */
  readonly glidAction?: string;
}

export function ddosDstZoneSrcPortZoneSrcPortListGlidCfgToTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortListGlidCfgOutputReference | DdosDstZoneSrcPortZoneSrcPortListGlidCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    glid: cdktf.stringToTerraform(struct!.glid),
    glid_action: cdktf.stringToTerraform(struct!.glidAction),
  }
}


export function ddosDstZoneSrcPortZoneSrcPortListGlidCfgToHclTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortListGlidCfgOutputReference | DdosDstZoneSrcPortZoneSrcPortListGlidCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    glid: {
      value: cdktf.stringToHclTerraform(struct!.glid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid_action: {
      value: cdktf.stringToHclTerraform(struct!.glidAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortZoneSrcPortListGlidCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneSrcPortZoneSrcPortListGlidCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._glidAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidAction = this._glidAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortZoneSrcPortListGlidCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._glid = undefined;
      this._glidAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._glid = value.glid;
      this._glidAction = value.glidAction;
    }
  }

  // glid - computed: false, optional: true, required: false
  private _glid?: string; 
  public get glid() {
    return this.getStringAttribute('glid');
  }
  public set glid(value: string) {
    this._glid = value;
  }
  public resetGlid() {
    this._glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidInput() {
    return this._glid;
  }

  // glid_action - computed: false, optional: true, required: false
  private _glidAction?: string; 
  public get glidAction() {
    return this.getStringAttribute('glid_action');
  }
  public set glidAction(value: string) {
    this._glidAction = value;
  }
  public resetGlidAction() {
    this._glidAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidActionInput() {
    return this._glidAction;
  }
}
export interface DdosDstZoneSrcPortZoneSrcPortListLevelListIndicatorListStruct {
  /**
  * 'pkt-rate': rate of incoming packets; 'bit-rate': rate of incoming bits;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#type DdosDstZone#type}
  */
  readonly type: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#user_tag DdosDstZone#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
  /**
  * Threshold of the entire zone for the src-port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#zone_threshold_large_num DdosDstZone#zone_threshold_large_num}
  */
  readonly zoneThresholdLargeNum?: number;
  /**
  * Threshold of the entire zone for the src-port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#zone_threshold_num DdosDstZone#zone_threshold_num}
  */
  readonly zoneThresholdNum?: number;
}

export function ddosDstZoneSrcPortZoneSrcPortListLevelListIndicatorListStructToTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortListLevelListIndicatorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    zone_threshold_large_num: cdktf.numberToTerraform(struct!.zoneThresholdLargeNum),
    zone_threshold_num: cdktf.numberToTerraform(struct!.zoneThresholdNum),
  }
}


export function ddosDstZoneSrcPortZoneSrcPortListLevelListIndicatorListStructToHclTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortListLevelListIndicatorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_threshold_large_num: {
      value: cdktf.numberToHclTerraform(struct!.zoneThresholdLargeNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_threshold_num: {
      value: cdktf.numberToHclTerraform(struct!.zoneThresholdNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortZoneSrcPortListLevelListIndicatorListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneSrcPortZoneSrcPortListLevelListIndicatorListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._zoneThresholdLargeNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneThresholdLargeNum = this._zoneThresholdLargeNum;
    }
    if (this._zoneThresholdNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneThresholdNum = this._zoneThresholdNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortZoneSrcPortListLevelListIndicatorListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._zoneThresholdLargeNum = undefined;
      this._zoneThresholdNum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._zoneThresholdLargeNum = value.zoneThresholdLargeNum;
      this._zoneThresholdNum = value.zoneThresholdNum;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // zone_threshold_large_num - computed: false, optional: true, required: false
  private _zoneThresholdLargeNum?: number; 
  public get zoneThresholdLargeNum() {
    return this.getNumberAttribute('zone_threshold_large_num');
  }
  public set zoneThresholdLargeNum(value: number) {
    this._zoneThresholdLargeNum = value;
  }
  public resetZoneThresholdLargeNum() {
    this._zoneThresholdLargeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneThresholdLargeNumInput() {
    return this._zoneThresholdLargeNum;
  }

  // zone_threshold_num - computed: false, optional: true, required: false
  private _zoneThresholdNum?: number; 
  public get zoneThresholdNum() {
    return this.getNumberAttribute('zone_threshold_num');
  }
  public set zoneThresholdNum(value: number) {
    this._zoneThresholdNum = value;
  }
  public resetZoneThresholdNum() {
    this._zoneThresholdNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneThresholdNumInput() {
    return this._zoneThresholdNum;
  }
}

export class DdosDstZoneSrcPortZoneSrcPortListLevelListIndicatorListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneSrcPortZoneSrcPortListLevelListIndicatorListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneSrcPortZoneSrcPortListLevelListIndicatorListStructOutputReference {
    return new DdosDstZoneSrcPortZoneSrcPortListLevelListIndicatorListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneSrcPortZoneSrcPortListLevelListStruct {
  /**
  * '0': Default policy level; '1': Policy level 1;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#level_num DdosDstZone#level_num}
  */
  readonly levelNum: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#user_tag DdosDstZone#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
  /**
  * indicator_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#indicator_list DdosDstZone#indicator_list}
  */
  readonly indicatorList?: DdosDstZoneSrcPortZoneSrcPortListLevelListIndicatorListStruct[] | cdktf.IResolvable;
}

export function ddosDstZoneSrcPortZoneSrcPortListLevelListStructToTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortListLevelListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_num: cdktf.stringToTerraform(struct!.levelNum),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    indicator_list: cdktf.listMapper(ddosDstZoneSrcPortZoneSrcPortListLevelListIndicatorListStructToTerraform, true)(struct!.indicatorList),
  }
}


export function ddosDstZoneSrcPortZoneSrcPortListLevelListStructToHclTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortListLevelListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_num: {
      value: cdktf.stringToHclTerraform(struct!.levelNum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indicator_list: {
      value: cdktf.listMapperHcl(ddosDstZoneSrcPortZoneSrcPortListLevelListIndicatorListStructToHclTerraform, true)(struct!.indicatorList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneSrcPortZoneSrcPortListLevelListIndicatorListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortZoneSrcPortListLevelListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneSrcPortZoneSrcPortListLevelListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNum = this._levelNum;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._indicatorList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorList = this._indicatorList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortZoneSrcPortListLevelListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._levelNum = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._indicatorList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._levelNum = value.levelNum;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._indicatorList.internalValue = value.indicatorList;
    }
  }

  // level_num - computed: false, optional: false, required: true
  private _levelNum?: string; 
  public get levelNum() {
    return this.getStringAttribute('level_num');
  }
  public set levelNum(value: string) {
    this._levelNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumInput() {
    return this._levelNum;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // indicator_list - computed: false, optional: true, required: false
  private _indicatorList = new DdosDstZoneSrcPortZoneSrcPortListLevelListIndicatorListStructList(this, "indicator_list", false);
  public get indicatorList() {
    return this._indicatorList;
  }
  public putIndicatorList(value: DdosDstZoneSrcPortZoneSrcPortListLevelListIndicatorListStruct[] | cdktf.IResolvable) {
    this._indicatorList.internalValue = value;
  }
  public resetIndicatorList() {
    this._indicatorList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorListInput() {
    return this._indicatorList.internalValue;
  }
}

export class DdosDstZoneSrcPortZoneSrcPortListLevelListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneSrcPortZoneSrcPortListLevelListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneSrcPortZoneSrcPortListLevelListStructOutputReference {
    return new DdosDstZoneSrcPortZoneSrcPortListLevelListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneSrcPortZoneSrcPortListPortInd {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZoneSrcPortZoneSrcPortListPortIndToTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortListPortIndOutputReference | DdosDstZoneSrcPortZoneSrcPortListPortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZoneSrcPortZoneSrcPortListPortIndToHclTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortListPortIndOutputReference | DdosDstZoneSrcPortZoneSrcPortListPortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortZoneSrcPortListPortIndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneSrcPortZoneSrcPortListPortInd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortZoneSrcPortListPortInd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DdosDstZoneSrcPortZoneSrcPortListZoneTemplate {
  /**
  * DDOS dns src template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#src_dns DdosDstZone#src_dns}
  */
  readonly srcDns?: string;
  /**
  * DDOS tcp src template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#src_tcp DdosDstZone#src_tcp}
  */
  readonly srcTcp?: string;
  /**
  * DDOS udp src template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#src_udp DdosDstZone#src_udp}
  */
  readonly srcUdp?: string;
}

export function ddosDstZoneSrcPortZoneSrcPortListZoneTemplateToTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortListZoneTemplateOutputReference | DdosDstZoneSrcPortZoneSrcPortListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_dns: cdktf.stringToTerraform(struct!.srcDns),
    src_tcp: cdktf.stringToTerraform(struct!.srcTcp),
    src_udp: cdktf.stringToTerraform(struct!.srcUdp),
  }
}


export function ddosDstZoneSrcPortZoneSrcPortListZoneTemplateToHclTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortListZoneTemplateOutputReference | DdosDstZoneSrcPortZoneSrcPortListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_dns: {
      value: cdktf.stringToHclTerraform(struct!.srcDns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_tcp: {
      value: cdktf.stringToHclTerraform(struct!.srcTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_udp: {
      value: cdktf.stringToHclTerraform(struct!.srcUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortZoneSrcPortListZoneTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneSrcPortZoneSrcPortListZoneTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDns = this._srcDns;
    }
    if (this._srcTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcp = this._srcTcp;
    }
    if (this._srcUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdp = this._srcUdp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortZoneSrcPortListZoneTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcDns = undefined;
      this._srcTcp = undefined;
      this._srcUdp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcDns = value.srcDns;
      this._srcTcp = value.srcTcp;
      this._srcUdp = value.srcUdp;
    }
  }

  // src_dns - computed: false, optional: true, required: false
  private _srcDns?: string; 
  public get srcDns() {
    return this.getStringAttribute('src_dns');
  }
  public set srcDns(value: string) {
    this._srcDns = value;
  }
  public resetSrcDns() {
    this._srcDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDnsInput() {
    return this._srcDns;
  }

  // src_tcp - computed: false, optional: true, required: false
  private _srcTcp?: string; 
  public get srcTcp() {
    return this.getStringAttribute('src_tcp');
  }
  public set srcTcp(value: string) {
    this._srcTcp = value;
  }
  public resetSrcTcp() {
    this._srcTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpInput() {
    return this._srcTcp;
  }

  // src_udp - computed: false, optional: true, required: false
  private _srcUdp?: string; 
  public get srcUdp() {
    return this.getStringAttribute('src_udp');
  }
  public set srcUdp(value: string) {
    this._srcUdp = value;
  }
  public resetSrcUdp() {
    this._srcUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpInput() {
    return this._srcUdp;
  }
}
export interface DdosDstZoneSrcPortZoneSrcPortListStruct {
  /**
  * Configure default-action-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#default_action_list DdosDstZone#default_action_list}
  */
  readonly defaultActionList?: string;
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#deny DdosDstZone#deny}
  */
  readonly deny?: number;
  /**
  * 'enable': enable; 'disable': disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#outbound_src_tracking DdosDstZone#outbound_src_tracking}
  */
  readonly outboundSrcTracking?: string;
  /**
  * Source Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#port_num DdosDstZone#port_num}
  */
  readonly portNum: number;
  /**
  * 'dns-udp': DNS-UDP Port; 'dns-tcp': DNS-TCP Port; 'udp': UDP port; 'tcp': TCP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#protocol DdosDstZone#protocol}
  */
  readonly protocol: string;
  /**
  * Set T2 counter value of current context to specified value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#set_counter_base_val DdosDstZone#set_counter_base_val}
  */
  readonly setCounterBaseVal?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
  /**
  * glid_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#glid_cfg DdosDstZone#glid_cfg}
  */
  readonly glidCfg?: DdosDstZoneSrcPortZoneSrcPortListGlidCfg;
  /**
  * level_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#level_list DdosDstZone#level_list}
  */
  readonly levelList?: DdosDstZoneSrcPortZoneSrcPortListLevelListStruct[] | cdktf.IResolvable;
  /**
  * port_ind block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#port_ind DdosDstZone#port_ind}
  */
  readonly portInd?: DdosDstZoneSrcPortZoneSrcPortListPortInd;
  /**
  * zone_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#zone_template DdosDstZone#zone_template}
  */
  readonly zoneTemplate?: DdosDstZoneSrcPortZoneSrcPortListZoneTemplate;
}

export function ddosDstZoneSrcPortZoneSrcPortListStructToTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_action_list: cdktf.stringToTerraform(struct!.defaultActionList),
    deny: cdktf.numberToTerraform(struct!.deny),
    outbound_src_tracking: cdktf.stringToTerraform(struct!.outboundSrcTracking),
    port_num: cdktf.numberToTerraform(struct!.portNum),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    set_counter_base_val: cdktf.numberToTerraform(struct!.setCounterBaseVal),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    glid_cfg: ddosDstZoneSrcPortZoneSrcPortListGlidCfgToTerraform(struct!.glidCfg),
    level_list: cdktf.listMapper(ddosDstZoneSrcPortZoneSrcPortListLevelListStructToTerraform, true)(struct!.levelList),
    port_ind: ddosDstZoneSrcPortZoneSrcPortListPortIndToTerraform(struct!.portInd),
    zone_template: ddosDstZoneSrcPortZoneSrcPortListZoneTemplateToTerraform(struct!.zoneTemplate),
  }
}


export function ddosDstZoneSrcPortZoneSrcPortListStructToHclTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_action_list: {
      value: cdktf.stringToHclTerraform(struct!.defaultActionList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny: {
      value: cdktf.numberToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_src_tracking: {
      value: cdktf.stringToHclTerraform(struct!.outboundSrcTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_num: {
      value: cdktf.numberToHclTerraform(struct!.portNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_counter_base_val: {
      value: cdktf.numberToHclTerraform(struct!.setCounterBaseVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid_cfg: {
      value: ddosDstZoneSrcPortZoneSrcPortListGlidCfgToHclTerraform(struct!.glidCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneSrcPortZoneSrcPortListGlidCfgList",
    },
    level_list: {
      value: cdktf.listMapperHcl(ddosDstZoneSrcPortZoneSrcPortListLevelListStructToHclTerraform, true)(struct!.levelList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneSrcPortZoneSrcPortListLevelListStructList",
    },
    port_ind: {
      value: ddosDstZoneSrcPortZoneSrcPortListPortIndToHclTerraform(struct!.portInd),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneSrcPortZoneSrcPortListPortIndList",
    },
    zone_template: {
      value: ddosDstZoneSrcPortZoneSrcPortListZoneTemplateToHclTerraform(struct!.zoneTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneSrcPortZoneSrcPortListZoneTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortZoneSrcPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneSrcPortZoneSrcPortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultActionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultActionList = this._defaultActionList;
    }
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    if (this._outboundSrcTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundSrcTracking = this._outboundSrcTracking;
    }
    if (this._portNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNum = this._portNum;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._setCounterBaseVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCounterBaseVal = this._setCounterBaseVal;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._glidCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidCfg = this._glidCfg?.internalValue;
    }
    if (this._levelList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelList = this._levelList?.internalValue;
    }
    if (this._portInd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portInd = this._portInd?.internalValue;
    }
    if (this._zoneTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTemplate = this._zoneTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortZoneSrcPortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultActionList = undefined;
      this._deny = undefined;
      this._outboundSrcTracking = undefined;
      this._portNum = undefined;
      this._protocol = undefined;
      this._setCounterBaseVal = undefined;
      this._uuid = undefined;
      this._glidCfg.internalValue = undefined;
      this._levelList.internalValue = undefined;
      this._portInd.internalValue = undefined;
      this._zoneTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultActionList = value.defaultActionList;
      this._deny = value.deny;
      this._outboundSrcTracking = value.outboundSrcTracking;
      this._portNum = value.portNum;
      this._protocol = value.protocol;
      this._setCounterBaseVal = value.setCounterBaseVal;
      this._uuid = value.uuid;
      this._glidCfg.internalValue = value.glidCfg;
      this._levelList.internalValue = value.levelList;
      this._portInd.internalValue = value.portInd;
      this._zoneTemplate.internalValue = value.zoneTemplate;
    }
  }

  // default_action_list - computed: false, optional: true, required: false
  private _defaultActionList?: string; 
  public get defaultActionList() {
    return this.getStringAttribute('default_action_list');
  }
  public set defaultActionList(value: string) {
    this._defaultActionList = value;
  }
  public resetDefaultActionList() {
    this._defaultActionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionListInput() {
    return this._defaultActionList;
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: number; 
  public get deny() {
    return this.getNumberAttribute('deny');
  }
  public set deny(value: number) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }

  // outbound_src_tracking - computed: false, optional: true, required: false
  private _outboundSrcTracking?: string; 
  public get outboundSrcTracking() {
    return this.getStringAttribute('outbound_src_tracking');
  }
  public set outboundSrcTracking(value: string) {
    this._outboundSrcTracking = value;
  }
  public resetOutboundSrcTracking() {
    this._outboundSrcTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundSrcTrackingInput() {
    return this._outboundSrcTracking;
  }

  // port_num - computed: false, optional: false, required: true
  private _portNum?: number; 
  public get portNum() {
    return this.getNumberAttribute('port_num');
  }
  public set portNum(value: number) {
    this._portNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumInput() {
    return this._portNum;
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

  // set_counter_base_val - computed: false, optional: true, required: false
  private _setCounterBaseVal?: number; 
  public get setCounterBaseVal() {
    return this.getNumberAttribute('set_counter_base_val');
  }
  public set setCounterBaseVal(value: number) {
    this._setCounterBaseVal = value;
  }
  public resetSetCounterBaseVal() {
    this._setCounterBaseVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCounterBaseValInput() {
    return this._setCounterBaseVal;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // glid_cfg - computed: false, optional: true, required: false
  private _glidCfg = new DdosDstZoneSrcPortZoneSrcPortListGlidCfgOutputReference(this, "glid_cfg");
  public get glidCfg() {
    return this._glidCfg;
  }
  public putGlidCfg(value: DdosDstZoneSrcPortZoneSrcPortListGlidCfg) {
    this._glidCfg.internalValue = value;
  }
  public resetGlidCfg() {
    this._glidCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidCfgInput() {
    return this._glidCfg.internalValue;
  }

  // level_list - computed: false, optional: true, required: false
  private _levelList = new DdosDstZoneSrcPortZoneSrcPortListLevelListStructList(this, "level_list", false);
  public get levelList() {
    return this._levelList;
  }
  public putLevelList(value: DdosDstZoneSrcPortZoneSrcPortListLevelListStruct[] | cdktf.IResolvable) {
    this._levelList.internalValue = value;
  }
  public resetLevelList() {
    this._levelList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelListInput() {
    return this._levelList.internalValue;
  }

  // port_ind - computed: false, optional: true, required: false
  private _portInd = new DdosDstZoneSrcPortZoneSrcPortListPortIndOutputReference(this, "port_ind");
  public get portInd() {
    return this._portInd;
  }
  public putPortInd(value: DdosDstZoneSrcPortZoneSrcPortListPortInd) {
    this._portInd.internalValue = value;
  }
  public resetPortInd() {
    this._portInd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIndInput() {
    return this._portInd.internalValue;
  }

  // zone_template - computed: false, optional: true, required: false
  private _zoneTemplate = new DdosDstZoneSrcPortZoneSrcPortListZoneTemplateOutputReference(this, "zone_template");
  public get zoneTemplate() {
    return this._zoneTemplate;
  }
  public putZoneTemplate(value: DdosDstZoneSrcPortZoneSrcPortListZoneTemplate) {
    this._zoneTemplate.internalValue = value;
  }
  public resetZoneTemplate() {
    this._zoneTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTemplateInput() {
    return this._zoneTemplate.internalValue;
  }
}

export class DdosDstZoneSrcPortZoneSrcPortListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneSrcPortZoneSrcPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneSrcPortZoneSrcPortListStructOutputReference {
    return new DdosDstZoneSrcPortZoneSrcPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneSrcPortZoneSrcPortOtherListGlidCfg {
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#glid DdosDstZone#glid}
  */
  readonly glid?: string;
  /**
  * 'drop': Drop packets for glid exceed (Default); 'ignore': Do nothing for glid exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#glid_action DdosDstZone#glid_action}
  */
  readonly glidAction?: string;
}

export function ddosDstZoneSrcPortZoneSrcPortOtherListGlidCfgToTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortOtherListGlidCfgOutputReference | DdosDstZoneSrcPortZoneSrcPortOtherListGlidCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    glid: cdktf.stringToTerraform(struct!.glid),
    glid_action: cdktf.stringToTerraform(struct!.glidAction),
  }
}


export function ddosDstZoneSrcPortZoneSrcPortOtherListGlidCfgToHclTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortOtherListGlidCfgOutputReference | DdosDstZoneSrcPortZoneSrcPortOtherListGlidCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    glid: {
      value: cdktf.stringToHclTerraform(struct!.glid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid_action: {
      value: cdktf.stringToHclTerraform(struct!.glidAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortZoneSrcPortOtherListGlidCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneSrcPortZoneSrcPortOtherListGlidCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._glidAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidAction = this._glidAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortZoneSrcPortOtherListGlidCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._glid = undefined;
      this._glidAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._glid = value.glid;
      this._glidAction = value.glidAction;
    }
  }

  // glid - computed: false, optional: true, required: false
  private _glid?: string; 
  public get glid() {
    return this.getStringAttribute('glid');
  }
  public set glid(value: string) {
    this._glid = value;
  }
  public resetGlid() {
    this._glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidInput() {
    return this._glid;
  }

  // glid_action - computed: false, optional: true, required: false
  private _glidAction?: string; 
  public get glidAction() {
    return this.getStringAttribute('glid_action');
  }
  public set glidAction(value: string) {
    this._glidAction = value;
  }
  public resetGlidAction() {
    this._glidAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidActionInput() {
    return this._glidAction;
  }
}
export interface DdosDstZoneSrcPortZoneSrcPortOtherListLevelListIndicatorListStruct {
  /**
  * 'pkt-rate': rate of incoming packets; 'bit-rate': rate of incoming bits;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#type DdosDstZone#type}
  */
  readonly type: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#user_tag DdosDstZone#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
  /**
  * Threshold of the entire zone for the src-port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#zone_threshold_large_num DdosDstZone#zone_threshold_large_num}
  */
  readonly zoneThresholdLargeNum?: number;
  /**
  * Threshold of the entire zone for the src-port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#zone_threshold_num DdosDstZone#zone_threshold_num}
  */
  readonly zoneThresholdNum?: number;
}

export function ddosDstZoneSrcPortZoneSrcPortOtherListLevelListIndicatorListStructToTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortOtherListLevelListIndicatorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    zone_threshold_large_num: cdktf.numberToTerraform(struct!.zoneThresholdLargeNum),
    zone_threshold_num: cdktf.numberToTerraform(struct!.zoneThresholdNum),
  }
}


export function ddosDstZoneSrcPortZoneSrcPortOtherListLevelListIndicatorListStructToHclTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortOtherListLevelListIndicatorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_threshold_large_num: {
      value: cdktf.numberToHclTerraform(struct!.zoneThresholdLargeNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_threshold_num: {
      value: cdktf.numberToHclTerraform(struct!.zoneThresholdNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortZoneSrcPortOtherListLevelListIndicatorListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneSrcPortZoneSrcPortOtherListLevelListIndicatorListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._zoneThresholdLargeNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneThresholdLargeNum = this._zoneThresholdLargeNum;
    }
    if (this._zoneThresholdNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneThresholdNum = this._zoneThresholdNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortZoneSrcPortOtherListLevelListIndicatorListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._zoneThresholdLargeNum = undefined;
      this._zoneThresholdNum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._zoneThresholdLargeNum = value.zoneThresholdLargeNum;
      this._zoneThresholdNum = value.zoneThresholdNum;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // zone_threshold_large_num - computed: false, optional: true, required: false
  private _zoneThresholdLargeNum?: number; 
  public get zoneThresholdLargeNum() {
    return this.getNumberAttribute('zone_threshold_large_num');
  }
  public set zoneThresholdLargeNum(value: number) {
    this._zoneThresholdLargeNum = value;
  }
  public resetZoneThresholdLargeNum() {
    this._zoneThresholdLargeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneThresholdLargeNumInput() {
    return this._zoneThresholdLargeNum;
  }

  // zone_threshold_num - computed: false, optional: true, required: false
  private _zoneThresholdNum?: number; 
  public get zoneThresholdNum() {
    return this.getNumberAttribute('zone_threshold_num');
  }
  public set zoneThresholdNum(value: number) {
    this._zoneThresholdNum = value;
  }
  public resetZoneThresholdNum() {
    this._zoneThresholdNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneThresholdNumInput() {
    return this._zoneThresholdNum;
  }
}

export class DdosDstZoneSrcPortZoneSrcPortOtherListLevelListIndicatorListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneSrcPortZoneSrcPortOtherListLevelListIndicatorListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneSrcPortZoneSrcPortOtherListLevelListIndicatorListStructOutputReference {
    return new DdosDstZoneSrcPortZoneSrcPortOtherListLevelListIndicatorListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneSrcPortZoneSrcPortOtherListLevelListStruct {
  /**
  * '0': Default policy level; '1': Policy level 1;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#level_num DdosDstZone#level_num}
  */
  readonly levelNum: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#user_tag DdosDstZone#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
  /**
  * indicator_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#indicator_list DdosDstZone#indicator_list}
  */
  readonly indicatorList?: DdosDstZoneSrcPortZoneSrcPortOtherListLevelListIndicatorListStruct[] | cdktf.IResolvable;
}

export function ddosDstZoneSrcPortZoneSrcPortOtherListLevelListStructToTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortOtherListLevelListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_num: cdktf.stringToTerraform(struct!.levelNum),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    indicator_list: cdktf.listMapper(ddosDstZoneSrcPortZoneSrcPortOtherListLevelListIndicatorListStructToTerraform, true)(struct!.indicatorList),
  }
}


export function ddosDstZoneSrcPortZoneSrcPortOtherListLevelListStructToHclTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortOtherListLevelListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_num: {
      value: cdktf.stringToHclTerraform(struct!.levelNum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indicator_list: {
      value: cdktf.listMapperHcl(ddosDstZoneSrcPortZoneSrcPortOtherListLevelListIndicatorListStructToHclTerraform, true)(struct!.indicatorList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneSrcPortZoneSrcPortOtherListLevelListIndicatorListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortZoneSrcPortOtherListLevelListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneSrcPortZoneSrcPortOtherListLevelListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNum = this._levelNum;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._indicatorList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorList = this._indicatorList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortZoneSrcPortOtherListLevelListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._levelNum = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._indicatorList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._levelNum = value.levelNum;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._indicatorList.internalValue = value.indicatorList;
    }
  }

  // level_num - computed: false, optional: false, required: true
  private _levelNum?: string; 
  public get levelNum() {
    return this.getStringAttribute('level_num');
  }
  public set levelNum(value: string) {
    this._levelNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumInput() {
    return this._levelNum;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // indicator_list - computed: false, optional: true, required: false
  private _indicatorList = new DdosDstZoneSrcPortZoneSrcPortOtherListLevelListIndicatorListStructList(this, "indicator_list", false);
  public get indicatorList() {
    return this._indicatorList;
  }
  public putIndicatorList(value: DdosDstZoneSrcPortZoneSrcPortOtherListLevelListIndicatorListStruct[] | cdktf.IResolvable) {
    this._indicatorList.internalValue = value;
  }
  public resetIndicatorList() {
    this._indicatorList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorListInput() {
    return this._indicatorList.internalValue;
  }
}

export class DdosDstZoneSrcPortZoneSrcPortOtherListLevelListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneSrcPortZoneSrcPortOtherListLevelListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneSrcPortZoneSrcPortOtherListLevelListStructOutputReference {
    return new DdosDstZoneSrcPortZoneSrcPortOtherListLevelListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneSrcPortZoneSrcPortOtherListPortInd {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZoneSrcPortZoneSrcPortOtherListPortIndToTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortOtherListPortIndOutputReference | DdosDstZoneSrcPortZoneSrcPortOtherListPortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZoneSrcPortZoneSrcPortOtherListPortIndToHclTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortOtherListPortIndOutputReference | DdosDstZoneSrcPortZoneSrcPortOtherListPortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortZoneSrcPortOtherListPortIndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneSrcPortZoneSrcPortOtherListPortInd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortZoneSrcPortOtherListPortInd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DdosDstZoneSrcPortZoneSrcPortOtherListZoneTemplate {
  /**
  * DDOS tcp src template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#src_tcp DdosDstZone#src_tcp}
  */
  readonly srcTcp?: string;
  /**
  * DDOS udp src template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#src_udp DdosDstZone#src_udp}
  */
  readonly srcUdp?: string;
}

export function ddosDstZoneSrcPortZoneSrcPortOtherListZoneTemplateToTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortOtherListZoneTemplateOutputReference | DdosDstZoneSrcPortZoneSrcPortOtherListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_tcp: cdktf.stringToTerraform(struct!.srcTcp),
    src_udp: cdktf.stringToTerraform(struct!.srcUdp),
  }
}


export function ddosDstZoneSrcPortZoneSrcPortOtherListZoneTemplateToHclTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortOtherListZoneTemplateOutputReference | DdosDstZoneSrcPortZoneSrcPortOtherListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_tcp: {
      value: cdktf.stringToHclTerraform(struct!.srcTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_udp: {
      value: cdktf.stringToHclTerraform(struct!.srcUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortZoneSrcPortOtherListZoneTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneSrcPortZoneSrcPortOtherListZoneTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcp = this._srcTcp;
    }
    if (this._srcUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdp = this._srcUdp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortZoneSrcPortOtherListZoneTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcTcp = undefined;
      this._srcUdp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcTcp = value.srcTcp;
      this._srcUdp = value.srcUdp;
    }
  }

  // src_tcp - computed: false, optional: true, required: false
  private _srcTcp?: string; 
  public get srcTcp() {
    return this.getStringAttribute('src_tcp');
  }
  public set srcTcp(value: string) {
    this._srcTcp = value;
  }
  public resetSrcTcp() {
    this._srcTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpInput() {
    return this._srcTcp;
  }

  // src_udp - computed: false, optional: true, required: false
  private _srcUdp?: string; 
  public get srcUdp() {
    return this.getStringAttribute('src_udp');
  }
  public set srcUdp(value: string) {
    this._srcUdp = value;
  }
  public resetSrcUdp() {
    this._srcUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpInput() {
    return this._srcUdp;
  }
}
export interface DdosDstZoneSrcPortZoneSrcPortOtherListStruct {
  /**
  * Configure default-action-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#default_action_list DdosDstZone#default_action_list}
  */
  readonly defaultActionList?: string;
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#deny DdosDstZone#deny}
  */
  readonly deny?: number;
  /**
  * 'other': other;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#port_other DdosDstZone#port_other}
  */
  readonly portOther: string;
  /**
  * 'udp': UDP port; 'tcp': TCP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#protocol DdosDstZone#protocol}
  */
  readonly protocol: string;
  /**
  * Set T2 counter value of current context to specified value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#set_counter_base_val DdosDstZone#set_counter_base_val}
  */
  readonly setCounterBaseVal?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
  /**
  * glid_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#glid_cfg DdosDstZone#glid_cfg}
  */
  readonly glidCfg?: DdosDstZoneSrcPortZoneSrcPortOtherListGlidCfg;
  /**
  * level_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#level_list DdosDstZone#level_list}
  */
  readonly levelList?: DdosDstZoneSrcPortZoneSrcPortOtherListLevelListStruct[] | cdktf.IResolvable;
  /**
  * port_ind block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#port_ind DdosDstZone#port_ind}
  */
  readonly portInd?: DdosDstZoneSrcPortZoneSrcPortOtherListPortInd;
  /**
  * zone_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#zone_template DdosDstZone#zone_template}
  */
  readonly zoneTemplate?: DdosDstZoneSrcPortZoneSrcPortOtherListZoneTemplate;
}

export function ddosDstZoneSrcPortZoneSrcPortOtherListStructToTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortOtherListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_action_list: cdktf.stringToTerraform(struct!.defaultActionList),
    deny: cdktf.numberToTerraform(struct!.deny),
    port_other: cdktf.stringToTerraform(struct!.portOther),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    set_counter_base_val: cdktf.numberToTerraform(struct!.setCounterBaseVal),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    glid_cfg: ddosDstZoneSrcPortZoneSrcPortOtherListGlidCfgToTerraform(struct!.glidCfg),
    level_list: cdktf.listMapper(ddosDstZoneSrcPortZoneSrcPortOtherListLevelListStructToTerraform, true)(struct!.levelList),
    port_ind: ddosDstZoneSrcPortZoneSrcPortOtherListPortIndToTerraform(struct!.portInd),
    zone_template: ddosDstZoneSrcPortZoneSrcPortOtherListZoneTemplateToTerraform(struct!.zoneTemplate),
  }
}


export function ddosDstZoneSrcPortZoneSrcPortOtherListStructToHclTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortOtherListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_action_list: {
      value: cdktf.stringToHclTerraform(struct!.defaultActionList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny: {
      value: cdktf.numberToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_other: {
      value: cdktf.stringToHclTerraform(struct!.portOther),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_counter_base_val: {
      value: cdktf.numberToHclTerraform(struct!.setCounterBaseVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid_cfg: {
      value: ddosDstZoneSrcPortZoneSrcPortOtherListGlidCfgToHclTerraform(struct!.glidCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneSrcPortZoneSrcPortOtherListGlidCfgList",
    },
    level_list: {
      value: cdktf.listMapperHcl(ddosDstZoneSrcPortZoneSrcPortOtherListLevelListStructToHclTerraform, true)(struct!.levelList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneSrcPortZoneSrcPortOtherListLevelListStructList",
    },
    port_ind: {
      value: ddosDstZoneSrcPortZoneSrcPortOtherListPortIndToHclTerraform(struct!.portInd),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneSrcPortZoneSrcPortOtherListPortIndList",
    },
    zone_template: {
      value: ddosDstZoneSrcPortZoneSrcPortOtherListZoneTemplateToHclTerraform(struct!.zoneTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneSrcPortZoneSrcPortOtherListZoneTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortZoneSrcPortOtherListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneSrcPortZoneSrcPortOtherListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultActionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultActionList = this._defaultActionList;
    }
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    if (this._portOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.portOther = this._portOther;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._setCounterBaseVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCounterBaseVal = this._setCounterBaseVal;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._glidCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidCfg = this._glidCfg?.internalValue;
    }
    if (this._levelList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelList = this._levelList?.internalValue;
    }
    if (this._portInd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portInd = this._portInd?.internalValue;
    }
    if (this._zoneTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTemplate = this._zoneTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortZoneSrcPortOtherListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultActionList = undefined;
      this._deny = undefined;
      this._portOther = undefined;
      this._protocol = undefined;
      this._setCounterBaseVal = undefined;
      this._uuid = undefined;
      this._glidCfg.internalValue = undefined;
      this._levelList.internalValue = undefined;
      this._portInd.internalValue = undefined;
      this._zoneTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultActionList = value.defaultActionList;
      this._deny = value.deny;
      this._portOther = value.portOther;
      this._protocol = value.protocol;
      this._setCounterBaseVal = value.setCounterBaseVal;
      this._uuid = value.uuid;
      this._glidCfg.internalValue = value.glidCfg;
      this._levelList.internalValue = value.levelList;
      this._portInd.internalValue = value.portInd;
      this._zoneTemplate.internalValue = value.zoneTemplate;
    }
  }

  // default_action_list - computed: false, optional: true, required: false
  private _defaultActionList?: string; 
  public get defaultActionList() {
    return this.getStringAttribute('default_action_list');
  }
  public set defaultActionList(value: string) {
    this._defaultActionList = value;
  }
  public resetDefaultActionList() {
    this._defaultActionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionListInput() {
    return this._defaultActionList;
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: number; 
  public get deny() {
    return this.getNumberAttribute('deny');
  }
  public set deny(value: number) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
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

  // set_counter_base_val - computed: false, optional: true, required: false
  private _setCounterBaseVal?: number; 
  public get setCounterBaseVal() {
    return this.getNumberAttribute('set_counter_base_val');
  }
  public set setCounterBaseVal(value: number) {
    this._setCounterBaseVal = value;
  }
  public resetSetCounterBaseVal() {
    this._setCounterBaseVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCounterBaseValInput() {
    return this._setCounterBaseVal;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // glid_cfg - computed: false, optional: true, required: false
  private _glidCfg = new DdosDstZoneSrcPortZoneSrcPortOtherListGlidCfgOutputReference(this, "glid_cfg");
  public get glidCfg() {
    return this._glidCfg;
  }
  public putGlidCfg(value: DdosDstZoneSrcPortZoneSrcPortOtherListGlidCfg) {
    this._glidCfg.internalValue = value;
  }
  public resetGlidCfg() {
    this._glidCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidCfgInput() {
    return this._glidCfg.internalValue;
  }

  // level_list - computed: false, optional: true, required: false
  private _levelList = new DdosDstZoneSrcPortZoneSrcPortOtherListLevelListStructList(this, "level_list", false);
  public get levelList() {
    return this._levelList;
  }
  public putLevelList(value: DdosDstZoneSrcPortZoneSrcPortOtherListLevelListStruct[] | cdktf.IResolvable) {
    this._levelList.internalValue = value;
  }
  public resetLevelList() {
    this._levelList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelListInput() {
    return this._levelList.internalValue;
  }

  // port_ind - computed: false, optional: true, required: false
  private _portInd = new DdosDstZoneSrcPortZoneSrcPortOtherListPortIndOutputReference(this, "port_ind");
  public get portInd() {
    return this._portInd;
  }
  public putPortInd(value: DdosDstZoneSrcPortZoneSrcPortOtherListPortInd) {
    this._portInd.internalValue = value;
  }
  public resetPortInd() {
    this._portInd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIndInput() {
    return this._portInd.internalValue;
  }

  // zone_template - computed: false, optional: true, required: false
  private _zoneTemplate = new DdosDstZoneSrcPortZoneSrcPortOtherListZoneTemplateOutputReference(this, "zone_template");
  public get zoneTemplate() {
    return this._zoneTemplate;
  }
  public putZoneTemplate(value: DdosDstZoneSrcPortZoneSrcPortOtherListZoneTemplate) {
    this._zoneTemplate.internalValue = value;
  }
  public resetZoneTemplate() {
    this._zoneTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTemplateInput() {
    return this._zoneTemplate.internalValue;
  }
}

export class DdosDstZoneSrcPortZoneSrcPortOtherListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneSrcPortZoneSrcPortOtherListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneSrcPortZoneSrcPortOtherListStructOutputReference {
    return new DdosDstZoneSrcPortZoneSrcPortOtherListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneSrcPort {
  /**
  * zone_src_port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#zone_src_port_list DdosDstZone#zone_src_port_list}
  */
  readonly zoneSrcPortList?: DdosDstZoneSrcPortZoneSrcPortListStruct[] | cdktf.IResolvable;
  /**
  * zone_src_port_other_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#zone_src_port_other_list DdosDstZone#zone_src_port_other_list}
  */
  readonly zoneSrcPortOtherList?: DdosDstZoneSrcPortZoneSrcPortOtherListStruct[] | cdktf.IResolvable;
}

export function ddosDstZoneSrcPortToTerraform(struct?: DdosDstZoneSrcPortOutputReference | DdosDstZoneSrcPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    zone_src_port_list: cdktf.listMapper(ddosDstZoneSrcPortZoneSrcPortListStructToTerraform, true)(struct!.zoneSrcPortList),
    zone_src_port_other_list: cdktf.listMapper(ddosDstZoneSrcPortZoneSrcPortOtherListStructToTerraform, true)(struct!.zoneSrcPortOtherList),
  }
}


export function ddosDstZoneSrcPortToHclTerraform(struct?: DdosDstZoneSrcPortOutputReference | DdosDstZoneSrcPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    zone_src_port_list: {
      value: cdktf.listMapperHcl(ddosDstZoneSrcPortZoneSrcPortListStructToHclTerraform, true)(struct!.zoneSrcPortList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneSrcPortZoneSrcPortListStructList",
    },
    zone_src_port_other_list: {
      value: cdktf.listMapperHcl(ddosDstZoneSrcPortZoneSrcPortOtherListStructToHclTerraform, true)(struct!.zoneSrcPortOtherList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneSrcPortZoneSrcPortOtherListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneSrcPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._zoneSrcPortList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneSrcPortList = this._zoneSrcPortList?.internalValue;
    }
    if (this._zoneSrcPortOtherList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneSrcPortOtherList = this._zoneSrcPortOtherList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._zoneSrcPortList.internalValue = undefined;
      this._zoneSrcPortOtherList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._zoneSrcPortList.internalValue = value.zoneSrcPortList;
      this._zoneSrcPortOtherList.internalValue = value.zoneSrcPortOtherList;
    }
  }

  // zone_src_port_list - computed: false, optional: true, required: false
  private _zoneSrcPortList = new DdosDstZoneSrcPortZoneSrcPortListStructList(this, "zone_src_port_list", false);
  public get zoneSrcPortList() {
    return this._zoneSrcPortList;
  }
  public putZoneSrcPortList(value: DdosDstZoneSrcPortZoneSrcPortListStruct[] | cdktf.IResolvable) {
    this._zoneSrcPortList.internalValue = value;
  }
  public resetZoneSrcPortList() {
    this._zoneSrcPortList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneSrcPortListInput() {
    return this._zoneSrcPortList.internalValue;
  }

  // zone_src_port_other_list - computed: false, optional: true, required: false
  private _zoneSrcPortOtherList = new DdosDstZoneSrcPortZoneSrcPortOtherListStructList(this, "zone_src_port_other_list", false);
  public get zoneSrcPortOtherList() {
    return this._zoneSrcPortOtherList;
  }
  public putZoneSrcPortOtherList(value: DdosDstZoneSrcPortZoneSrcPortOtherListStruct[] | cdktf.IResolvable) {
    this._zoneSrcPortOtherList.internalValue = value;
  }
  public resetZoneSrcPortOtherList() {
    this._zoneSrcPortOtherList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneSrcPortOtherListInput() {
    return this._zoneSrcPortOtherList.internalValue;
  }
}
export interface DdosDstZoneSrcPortRangeListCaptureConfig {
  /**
  * 'drop': Apply capture-config to dropped packets; 'forward': Apply capture-config to forwarded packets; 'all': Apply capture-config to both dropped and forwarded packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#capture_config_mode DdosDstZone#capture_config_mode}
  */
  readonly captureConfigMode?: string;
  /**
  * Capture-config name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#capture_config_name DdosDstZone#capture_config_name}
  */
  readonly captureConfigName?: string;
}

export function ddosDstZoneSrcPortRangeListCaptureConfigToTerraform(struct?: DdosDstZoneSrcPortRangeListCaptureConfigOutputReference | DdosDstZoneSrcPortRangeListCaptureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture_config_mode: cdktf.stringToTerraform(struct!.captureConfigMode),
    capture_config_name: cdktf.stringToTerraform(struct!.captureConfigName),
  }
}


export function ddosDstZoneSrcPortRangeListCaptureConfigToHclTerraform(struct?: DdosDstZoneSrcPortRangeListCaptureConfigOutputReference | DdosDstZoneSrcPortRangeListCaptureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture_config_mode: {
      value: cdktf.stringToHclTerraform(struct!.captureConfigMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capture_config_name: {
      value: cdktf.stringToHclTerraform(struct!.captureConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortRangeListCaptureConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneSrcPortRangeListCaptureConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureConfigMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureConfigMode = this._captureConfigMode;
    }
    if (this._captureConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureConfigName = this._captureConfigName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortRangeListCaptureConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._captureConfigMode = undefined;
      this._captureConfigName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._captureConfigMode = value.captureConfigMode;
      this._captureConfigName = value.captureConfigName;
    }
  }

  // capture_config_mode - computed: false, optional: true, required: false
  private _captureConfigMode?: string; 
  public get captureConfigMode() {
    return this.getStringAttribute('capture_config_mode');
  }
  public set captureConfigMode(value: string) {
    this._captureConfigMode = value;
  }
  public resetCaptureConfigMode() {
    this._captureConfigMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigModeInput() {
    return this._captureConfigMode;
  }

  // capture_config_name - computed: false, optional: true, required: false
  private _captureConfigName?: string; 
  public get captureConfigName() {
    return this.getStringAttribute('capture_config_name');
  }
  public set captureConfigName(value: string) {
    this._captureConfigName = value;
  }
  public resetCaptureConfigName() {
    this._captureConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigNameInput() {
    return this._captureConfigName;
  }
}
export interface DdosDstZoneSrcPortRangeListGlidCfg {
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#glid DdosDstZone#glid}
  */
  readonly glid?: string;
  /**
  * 'drop': Drop packets for glid exceed (Default); 'ignore': Do nothing for glid exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#glid_action DdosDstZone#glid_action}
  */
  readonly glidAction?: string;
}

export function ddosDstZoneSrcPortRangeListGlidCfgToTerraform(struct?: DdosDstZoneSrcPortRangeListGlidCfgOutputReference | DdosDstZoneSrcPortRangeListGlidCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    glid: cdktf.stringToTerraform(struct!.glid),
    glid_action: cdktf.stringToTerraform(struct!.glidAction),
  }
}


export function ddosDstZoneSrcPortRangeListGlidCfgToHclTerraform(struct?: DdosDstZoneSrcPortRangeListGlidCfgOutputReference | DdosDstZoneSrcPortRangeListGlidCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    glid: {
      value: cdktf.stringToHclTerraform(struct!.glid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid_action: {
      value: cdktf.stringToHclTerraform(struct!.glidAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortRangeListGlidCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneSrcPortRangeListGlidCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._glidAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidAction = this._glidAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortRangeListGlidCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._glid = undefined;
      this._glidAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._glid = value.glid;
      this._glidAction = value.glidAction;
    }
  }

  // glid - computed: false, optional: true, required: false
  private _glid?: string; 
  public get glid() {
    return this.getStringAttribute('glid');
  }
  public set glid(value: string) {
    this._glid = value;
  }
  public resetGlid() {
    this._glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidInput() {
    return this._glid;
  }

  // glid_action - computed: false, optional: true, required: false
  private _glidAction?: string; 
  public get glidAction() {
    return this.getStringAttribute('glid_action');
  }
  public set glidAction(value: string) {
    this._glidAction = value;
  }
  public resetGlidAction() {
    this._glidAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidActionInput() {
    return this._glidAction;
  }
}
export interface DdosDstZoneSrcPortRangeListLevelListIndicatorListStruct {
  /**
  * 'pkt-rate': rate of incoming packets; 'bit-rate': rate of incoming bits;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#type DdosDstZone#type}
  */
  readonly type: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#user_tag DdosDstZone#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
  /**
  * Threshold of the entire zone for the port-range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#zone_threshold_large_num DdosDstZone#zone_threshold_large_num}
  */
  readonly zoneThresholdLargeNum?: number;
  /**
  * Threshold of the entire zone for the port-range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#zone_threshold_num DdosDstZone#zone_threshold_num}
  */
  readonly zoneThresholdNum?: number;
}

export function ddosDstZoneSrcPortRangeListLevelListIndicatorListStructToTerraform(struct?: DdosDstZoneSrcPortRangeListLevelListIndicatorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    zone_threshold_large_num: cdktf.numberToTerraform(struct!.zoneThresholdLargeNum),
    zone_threshold_num: cdktf.numberToTerraform(struct!.zoneThresholdNum),
  }
}


export function ddosDstZoneSrcPortRangeListLevelListIndicatorListStructToHclTerraform(struct?: DdosDstZoneSrcPortRangeListLevelListIndicatorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_threshold_large_num: {
      value: cdktf.numberToHclTerraform(struct!.zoneThresholdLargeNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_threshold_num: {
      value: cdktf.numberToHclTerraform(struct!.zoneThresholdNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortRangeListLevelListIndicatorListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneSrcPortRangeListLevelListIndicatorListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._zoneThresholdLargeNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneThresholdLargeNum = this._zoneThresholdLargeNum;
    }
    if (this._zoneThresholdNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneThresholdNum = this._zoneThresholdNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortRangeListLevelListIndicatorListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._zoneThresholdLargeNum = undefined;
      this._zoneThresholdNum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._zoneThresholdLargeNum = value.zoneThresholdLargeNum;
      this._zoneThresholdNum = value.zoneThresholdNum;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // zone_threshold_large_num - computed: false, optional: true, required: false
  private _zoneThresholdLargeNum?: number; 
  public get zoneThresholdLargeNum() {
    return this.getNumberAttribute('zone_threshold_large_num');
  }
  public set zoneThresholdLargeNum(value: number) {
    this._zoneThresholdLargeNum = value;
  }
  public resetZoneThresholdLargeNum() {
    this._zoneThresholdLargeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneThresholdLargeNumInput() {
    return this._zoneThresholdLargeNum;
  }

  // zone_threshold_num - computed: false, optional: true, required: false
  private _zoneThresholdNum?: number; 
  public get zoneThresholdNum() {
    return this.getNumberAttribute('zone_threshold_num');
  }
  public set zoneThresholdNum(value: number) {
    this._zoneThresholdNum = value;
  }
  public resetZoneThresholdNum() {
    this._zoneThresholdNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneThresholdNumInput() {
    return this._zoneThresholdNum;
  }
}

export class DdosDstZoneSrcPortRangeListLevelListIndicatorListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneSrcPortRangeListLevelListIndicatorListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneSrcPortRangeListLevelListIndicatorListStructOutputReference {
    return new DdosDstZoneSrcPortRangeListLevelListIndicatorListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneSrcPortRangeListLevelListStruct {
  /**
  * '0': Default policy level; '1': Policy level 1;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#level_num DdosDstZone#level_num}
  */
  readonly levelNum: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#user_tag DdosDstZone#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
  /**
  * indicator_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#indicator_list DdosDstZone#indicator_list}
  */
  readonly indicatorList?: DdosDstZoneSrcPortRangeListLevelListIndicatorListStruct[] | cdktf.IResolvable;
}

export function ddosDstZoneSrcPortRangeListLevelListStructToTerraform(struct?: DdosDstZoneSrcPortRangeListLevelListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_num: cdktf.stringToTerraform(struct!.levelNum),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    indicator_list: cdktf.listMapper(ddosDstZoneSrcPortRangeListLevelListIndicatorListStructToTerraform, true)(struct!.indicatorList),
  }
}


export function ddosDstZoneSrcPortRangeListLevelListStructToHclTerraform(struct?: DdosDstZoneSrcPortRangeListLevelListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_num: {
      value: cdktf.stringToHclTerraform(struct!.levelNum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indicator_list: {
      value: cdktf.listMapperHcl(ddosDstZoneSrcPortRangeListLevelListIndicatorListStructToHclTerraform, true)(struct!.indicatorList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneSrcPortRangeListLevelListIndicatorListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortRangeListLevelListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneSrcPortRangeListLevelListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNum = this._levelNum;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._indicatorList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorList = this._indicatorList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortRangeListLevelListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._levelNum = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._indicatorList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._levelNum = value.levelNum;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._indicatorList.internalValue = value.indicatorList;
    }
  }

  // level_num - computed: false, optional: false, required: true
  private _levelNum?: string; 
  public get levelNum() {
    return this.getStringAttribute('level_num');
  }
  public set levelNum(value: string) {
    this._levelNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumInput() {
    return this._levelNum;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // indicator_list - computed: false, optional: true, required: false
  private _indicatorList = new DdosDstZoneSrcPortRangeListLevelListIndicatorListStructList(this, "indicator_list", false);
  public get indicatorList() {
    return this._indicatorList;
  }
  public putIndicatorList(value: DdosDstZoneSrcPortRangeListLevelListIndicatorListStruct[] | cdktf.IResolvable) {
    this._indicatorList.internalValue = value;
  }
  public resetIndicatorList() {
    this._indicatorList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorListInput() {
    return this._indicatorList.internalValue;
  }
}

export class DdosDstZoneSrcPortRangeListLevelListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneSrcPortRangeListLevelListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneSrcPortRangeListLevelListStructOutputReference {
    return new DdosDstZoneSrcPortRangeListLevelListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneSrcPortRangeListPortInd {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZoneSrcPortRangeListPortIndToTerraform(struct?: DdosDstZoneSrcPortRangeListPortIndOutputReference | DdosDstZoneSrcPortRangeListPortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZoneSrcPortRangeListPortIndToHclTerraform(struct?: DdosDstZoneSrcPortRangeListPortIndOutputReference | DdosDstZoneSrcPortRangeListPortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortRangeListPortIndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneSrcPortRangeListPortInd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortRangeListPortInd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DdosDstZoneSrcPortRangeListZoneTemplate {
  /**
  * DDOS tcp src template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#src_tcp DdosDstZone#src_tcp}
  */
  readonly srcTcp?: string;
  /**
  * DDOS udp src template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#src_udp DdosDstZone#src_udp}
  */
  readonly srcUdp?: string;
}

export function ddosDstZoneSrcPortRangeListZoneTemplateToTerraform(struct?: DdosDstZoneSrcPortRangeListZoneTemplateOutputReference | DdosDstZoneSrcPortRangeListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_tcp: cdktf.stringToTerraform(struct!.srcTcp),
    src_udp: cdktf.stringToTerraform(struct!.srcUdp),
  }
}


export function ddosDstZoneSrcPortRangeListZoneTemplateToHclTerraform(struct?: DdosDstZoneSrcPortRangeListZoneTemplateOutputReference | DdosDstZoneSrcPortRangeListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_tcp: {
      value: cdktf.stringToHclTerraform(struct!.srcTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_udp: {
      value: cdktf.stringToHclTerraform(struct!.srcUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortRangeListZoneTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneSrcPortRangeListZoneTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcp = this._srcTcp;
    }
    if (this._srcUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdp = this._srcUdp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortRangeListZoneTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcTcp = undefined;
      this._srcUdp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcTcp = value.srcTcp;
      this._srcUdp = value.srcUdp;
    }
  }

  // src_tcp - computed: false, optional: true, required: false
  private _srcTcp?: string; 
  public get srcTcp() {
    return this.getStringAttribute('src_tcp');
  }
  public set srcTcp(value: string) {
    this._srcTcp = value;
  }
  public resetSrcTcp() {
    this._srcTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpInput() {
    return this._srcTcp;
  }

  // src_udp - computed: false, optional: true, required: false
  private _srcUdp?: string; 
  public get srcUdp() {
    return this.getStringAttribute('src_udp');
  }
  public set srcUdp(value: string) {
    this._srcUdp = value;
  }
  public resetSrcUdp() {
    this._srcUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpInput() {
    return this._srcUdp;
  }
}
export interface DdosDstZoneSrcPortRangeListStruct {
  /**
  * Configure default-action-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#default_action_list DdosDstZone#default_action_list}
  */
  readonly defaultActionList?: string;
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#deny DdosDstZone#deny}
  */
  readonly deny?: number;
  /**
  * 'udp': UDP port; 'tcp': TCP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#protocol DdosDstZone#protocol}
  */
  readonly protocol: string;
  /**
  * Set T2 counter value of current context to specified value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#set_counter_base_val DdosDstZone#set_counter_base_val}
  */
  readonly setCounterBaseVal?: number;
  /**
  * Src Port-Range End Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#src_port_range_end DdosDstZone#src_port_range_end}
  */
  readonly srcPortRangeEnd: number;
  /**
  * Src Port-Range Start Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#src_port_range_start DdosDstZone#src_port_range_start}
  */
  readonly srcPortRangeStart: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#user_tag DdosDstZone#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
  /**
  * capture_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#capture_config DdosDstZone#capture_config}
  */
  readonly captureConfig?: DdosDstZoneSrcPortRangeListCaptureConfig;
  /**
  * glid_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#glid_cfg DdosDstZone#glid_cfg}
  */
  readonly glidCfg?: DdosDstZoneSrcPortRangeListGlidCfg;
  /**
  * level_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#level_list DdosDstZone#level_list}
  */
  readonly levelList?: DdosDstZoneSrcPortRangeListLevelListStruct[] | cdktf.IResolvable;
  /**
  * port_ind block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#port_ind DdosDstZone#port_ind}
  */
  readonly portInd?: DdosDstZoneSrcPortRangeListPortInd;
  /**
  * zone_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#zone_template DdosDstZone#zone_template}
  */
  readonly zoneTemplate?: DdosDstZoneSrcPortRangeListZoneTemplate;
}

export function ddosDstZoneSrcPortRangeListStructToTerraform(struct?: DdosDstZoneSrcPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_action_list: cdktf.stringToTerraform(struct!.defaultActionList),
    deny: cdktf.numberToTerraform(struct!.deny),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    set_counter_base_val: cdktf.numberToTerraform(struct!.setCounterBaseVal),
    src_port_range_end: cdktf.numberToTerraform(struct!.srcPortRangeEnd),
    src_port_range_start: cdktf.numberToTerraform(struct!.srcPortRangeStart),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    capture_config: ddosDstZoneSrcPortRangeListCaptureConfigToTerraform(struct!.captureConfig),
    glid_cfg: ddosDstZoneSrcPortRangeListGlidCfgToTerraform(struct!.glidCfg),
    level_list: cdktf.listMapper(ddosDstZoneSrcPortRangeListLevelListStructToTerraform, true)(struct!.levelList),
    port_ind: ddosDstZoneSrcPortRangeListPortIndToTerraform(struct!.portInd),
    zone_template: ddosDstZoneSrcPortRangeListZoneTemplateToTerraform(struct!.zoneTemplate),
  }
}


export function ddosDstZoneSrcPortRangeListStructToHclTerraform(struct?: DdosDstZoneSrcPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_action_list: {
      value: cdktf.stringToHclTerraform(struct!.defaultActionList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny: {
      value: cdktf.numberToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_counter_base_val: {
      value: cdktf.numberToHclTerraform(struct!.setCounterBaseVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_port_range_end: {
      value: cdktf.numberToHclTerraform(struct!.srcPortRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_port_range_start: {
      value: cdktf.numberToHclTerraform(struct!.srcPortRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capture_config: {
      value: ddosDstZoneSrcPortRangeListCaptureConfigToHclTerraform(struct!.captureConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneSrcPortRangeListCaptureConfigList",
    },
    glid_cfg: {
      value: ddosDstZoneSrcPortRangeListGlidCfgToHclTerraform(struct!.glidCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneSrcPortRangeListGlidCfgList",
    },
    level_list: {
      value: cdktf.listMapperHcl(ddosDstZoneSrcPortRangeListLevelListStructToHclTerraform, true)(struct!.levelList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneSrcPortRangeListLevelListStructList",
    },
    port_ind: {
      value: ddosDstZoneSrcPortRangeListPortIndToHclTerraform(struct!.portInd),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneSrcPortRangeListPortIndList",
    },
    zone_template: {
      value: ddosDstZoneSrcPortRangeListZoneTemplateToHclTerraform(struct!.zoneTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneSrcPortRangeListZoneTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneSrcPortRangeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultActionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultActionList = this._defaultActionList;
    }
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._setCounterBaseVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCounterBaseVal = this._setCounterBaseVal;
    }
    if (this._srcPortRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortRangeEnd = this._srcPortRangeEnd;
    }
    if (this._srcPortRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortRangeStart = this._srcPortRangeStart;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._captureConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureConfig = this._captureConfig?.internalValue;
    }
    if (this._glidCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidCfg = this._glidCfg?.internalValue;
    }
    if (this._levelList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelList = this._levelList?.internalValue;
    }
    if (this._portInd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portInd = this._portInd?.internalValue;
    }
    if (this._zoneTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTemplate = this._zoneTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortRangeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultActionList = undefined;
      this._deny = undefined;
      this._protocol = undefined;
      this._setCounterBaseVal = undefined;
      this._srcPortRangeEnd = undefined;
      this._srcPortRangeStart = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._captureConfig.internalValue = undefined;
      this._glidCfg.internalValue = undefined;
      this._levelList.internalValue = undefined;
      this._portInd.internalValue = undefined;
      this._zoneTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultActionList = value.defaultActionList;
      this._deny = value.deny;
      this._protocol = value.protocol;
      this._setCounterBaseVal = value.setCounterBaseVal;
      this._srcPortRangeEnd = value.srcPortRangeEnd;
      this._srcPortRangeStart = value.srcPortRangeStart;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._captureConfig.internalValue = value.captureConfig;
      this._glidCfg.internalValue = value.glidCfg;
      this._levelList.internalValue = value.levelList;
      this._portInd.internalValue = value.portInd;
      this._zoneTemplate.internalValue = value.zoneTemplate;
    }
  }

  // default_action_list - computed: false, optional: true, required: false
  private _defaultActionList?: string; 
  public get defaultActionList() {
    return this.getStringAttribute('default_action_list');
  }
  public set defaultActionList(value: string) {
    this._defaultActionList = value;
  }
  public resetDefaultActionList() {
    this._defaultActionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionListInput() {
    return this._defaultActionList;
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: number; 
  public get deny() {
    return this.getNumberAttribute('deny');
  }
  public set deny(value: number) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
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

  // set_counter_base_val - computed: false, optional: true, required: false
  private _setCounterBaseVal?: number; 
  public get setCounterBaseVal() {
    return this.getNumberAttribute('set_counter_base_val');
  }
  public set setCounterBaseVal(value: number) {
    this._setCounterBaseVal = value;
  }
  public resetSetCounterBaseVal() {
    this._setCounterBaseVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCounterBaseValInput() {
    return this._setCounterBaseVal;
  }

  // src_port_range_end - computed: false, optional: false, required: true
  private _srcPortRangeEnd?: number; 
  public get srcPortRangeEnd() {
    return this.getNumberAttribute('src_port_range_end');
  }
  public set srcPortRangeEnd(value: number) {
    this._srcPortRangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortRangeEndInput() {
    return this._srcPortRangeEnd;
  }

  // src_port_range_start - computed: false, optional: false, required: true
  private _srcPortRangeStart?: number; 
  public get srcPortRangeStart() {
    return this.getNumberAttribute('src_port_range_start');
  }
  public set srcPortRangeStart(value: number) {
    this._srcPortRangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortRangeStartInput() {
    return this._srcPortRangeStart;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // capture_config - computed: false, optional: true, required: false
  private _captureConfig = new DdosDstZoneSrcPortRangeListCaptureConfigOutputReference(this, "capture_config");
  public get captureConfig() {
    return this._captureConfig;
  }
  public putCaptureConfig(value: DdosDstZoneSrcPortRangeListCaptureConfig) {
    this._captureConfig.internalValue = value;
  }
  public resetCaptureConfig() {
    this._captureConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigInput() {
    return this._captureConfig.internalValue;
  }

  // glid_cfg - computed: false, optional: true, required: false
  private _glidCfg = new DdosDstZoneSrcPortRangeListGlidCfgOutputReference(this, "glid_cfg");
  public get glidCfg() {
    return this._glidCfg;
  }
  public putGlidCfg(value: DdosDstZoneSrcPortRangeListGlidCfg) {
    this._glidCfg.internalValue = value;
  }
  public resetGlidCfg() {
    this._glidCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidCfgInput() {
    return this._glidCfg.internalValue;
  }

  // level_list - computed: false, optional: true, required: false
  private _levelList = new DdosDstZoneSrcPortRangeListLevelListStructList(this, "level_list", false);
  public get levelList() {
    return this._levelList;
  }
  public putLevelList(value: DdosDstZoneSrcPortRangeListLevelListStruct[] | cdktf.IResolvable) {
    this._levelList.internalValue = value;
  }
  public resetLevelList() {
    this._levelList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelListInput() {
    return this._levelList.internalValue;
  }

  // port_ind - computed: false, optional: true, required: false
  private _portInd = new DdosDstZoneSrcPortRangeListPortIndOutputReference(this, "port_ind");
  public get portInd() {
    return this._portInd;
  }
  public putPortInd(value: DdosDstZoneSrcPortRangeListPortInd) {
    this._portInd.internalValue = value;
  }
  public resetPortInd() {
    this._portInd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIndInput() {
    return this._portInd.internalValue;
  }

  // zone_template - computed: false, optional: true, required: false
  private _zoneTemplate = new DdosDstZoneSrcPortRangeListZoneTemplateOutputReference(this, "zone_template");
  public get zoneTemplate() {
    return this._zoneTemplate;
  }
  public putZoneTemplate(value: DdosDstZoneSrcPortRangeListZoneTemplate) {
    this._zoneTemplate.internalValue = value;
  }
  public resetZoneTemplate() {
    this._zoneTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTemplateInput() {
    return this._zoneTemplate.internalValue;
  }
}

export class DdosDstZoneSrcPortRangeListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneSrcPortRangeListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneSrcPortRangeListStructOutputReference {
    return new DdosDstZoneSrcPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneTopkDestinations {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZoneTopkDestinationsToTerraform(struct?: DdosDstZoneTopkDestinationsOutputReference | DdosDstZoneTopkDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZoneTopkDestinationsToHclTerraform(struct?: DdosDstZoneTopkDestinationsOutputReference | DdosDstZoneTopkDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneTopkDestinationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneTopkDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneTopkDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DdosDstZoneWebGuiLearning {
  /**
  * '1minute': 1 minute; '6hour': 6 hours; '12hour': 12 hours; '24hour': 24 hours; '7day': 7 days;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#duration DdosDstZone#duration}
  */
  readonly duration?: string;
  /**
  * Configure learning starting time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#starting_time DdosDstZone#starting_time}
  */
  readonly startingTime?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZoneWebGuiLearningToTerraform(struct?: DdosDstZoneWebGuiLearningOutputReference | DdosDstZoneWebGuiLearning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    starting_time: cdktf.stringToTerraform(struct!.startingTime),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZoneWebGuiLearningToHclTerraform(struct?: DdosDstZoneWebGuiLearningOutputReference | DdosDstZoneWebGuiLearning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starting_time: {
      value: cdktf.stringToHclTerraform(struct!.startingTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneWebGuiLearningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneWebGuiLearning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._startingTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingTime = this._startingTime;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneWebGuiLearning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._startingTime = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._startingTime = value.startingTime;
      this._uuid = value.uuid;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // starting_time - computed: false, optional: true, required: false
  private _startingTime?: string; 
  public get startingTime() {
    return this.getStringAttribute('starting_time');
  }
  public set startingTime(value: string) {
    this._startingTime = value;
  }
  public resetStartingTime() {
    this._startingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingTimeInput() {
    return this._startingTime;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DdosDstZoneWebGuiProtectionIpProtoProtoNameListStruct {
  /**
  * Peak Bandwidth Expected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#pbe DdosDstZone#pbe}
  */
  readonly pbe?: string;
  /**
  * 'icmp-v4': ip-proto icmp-v4; 'icmp-v6': ip-proto icmp-v6;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#protocol DdosDstZone#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#user_tag DdosDstZone#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZoneWebGuiProtectionIpProtoProtoNameListStructToTerraform(struct?: DdosDstZoneWebGuiProtectionIpProtoProtoNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pbe: cdktf.stringToTerraform(struct!.pbe),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZoneWebGuiProtectionIpProtoProtoNameListStructToHclTerraform(struct?: DdosDstZoneWebGuiProtectionIpProtoProtoNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pbe: {
      value: cdktf.stringToHclTerraform(struct!.pbe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneWebGuiProtectionIpProtoProtoNameListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneWebGuiProtectionIpProtoProtoNameListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbe = this._pbe;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneWebGuiProtectionIpProtoProtoNameListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pbe = undefined;
      this._protocol = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pbe = value.pbe;
      this._protocol = value.protocol;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

  // pbe - computed: false, optional: true, required: false
  private _pbe?: string; 
  public get pbe() {
    return this.getStringAttribute('pbe');
  }
  public set pbe(value: string) {
    this._pbe = value;
  }
  public resetPbe() {
    this._pbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbeInput() {
    return this._pbe;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class DdosDstZoneWebGuiProtectionIpProtoProtoNameListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneWebGuiProtectionIpProtoProtoNameListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneWebGuiProtectionIpProtoProtoNameListStructOutputReference {
    return new DdosDstZoneWebGuiProtectionIpProtoProtoNameListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneWebGuiProtectionIpProto {
  /**
  * proto_name_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#proto_name_list DdosDstZone#proto_name_list}
  */
  readonly protoNameList?: DdosDstZoneWebGuiProtectionIpProtoProtoNameListStruct[] | cdktf.IResolvable;
}

export function ddosDstZoneWebGuiProtectionIpProtoToTerraform(struct?: DdosDstZoneWebGuiProtectionIpProtoOutputReference | DdosDstZoneWebGuiProtectionIpProto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proto_name_list: cdktf.listMapper(ddosDstZoneWebGuiProtectionIpProtoProtoNameListStructToTerraform, true)(struct!.protoNameList),
  }
}


export function ddosDstZoneWebGuiProtectionIpProtoToHclTerraform(struct?: DdosDstZoneWebGuiProtectionIpProtoOutputReference | DdosDstZoneWebGuiProtectionIpProto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proto_name_list: {
      value: cdktf.listMapperHcl(ddosDstZoneWebGuiProtectionIpProtoProtoNameListStructToHclTerraform, true)(struct!.protoNameList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneWebGuiProtectionIpProtoProtoNameListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneWebGuiProtectionIpProtoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneWebGuiProtectionIpProto | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protoNameList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoNameList = this._protoNameList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneWebGuiProtectionIpProto | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._protoNameList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._protoNameList.internalValue = value.protoNameList;
    }
  }

  // proto_name_list - computed: false, optional: true, required: false
  private _protoNameList = new DdosDstZoneWebGuiProtectionIpProtoProtoNameListStructList(this, "proto_name_list", false);
  public get protoNameList() {
    return this._protoNameList;
  }
  public putProtoNameList(value: DdosDstZoneWebGuiProtectionIpProtoProtoNameListStruct[] | cdktf.IResolvable) {
    this._protoNameList.internalValue = value;
  }
  public resetProtoNameList() {
    this._protoNameList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoNameListInput() {
    return this._protoNameList.internalValue;
  }
}
export interface DdosDstZoneWebGuiProtectionPortZoneServiceListStruct {
  /**
  * Peak Bandwidth Expected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#pbe DdosDstZone#pbe}
  */
  readonly pbe?: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#port_num DdosDstZone#port_num}
  */
  readonly portNum: number;
  /**
  * 'dns-tcp': DNS-TCP Port; 'dns-udp': DNS-UDP Port; 'http': HTTP Port; 'tcp': TCP Port; 'udp': UDP Port; 'ssl-l4': SSL-L4 Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#protocol DdosDstZone#protocol}
  */
  readonly protocol: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZoneWebGuiProtectionPortZoneServiceListStructToTerraform(struct?: DdosDstZoneWebGuiProtectionPortZoneServiceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pbe: cdktf.stringToTerraform(struct!.pbe),
    port_num: cdktf.numberToTerraform(struct!.portNum),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZoneWebGuiProtectionPortZoneServiceListStructToHclTerraform(struct?: DdosDstZoneWebGuiProtectionPortZoneServiceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pbe: {
      value: cdktf.stringToHclTerraform(struct!.pbe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_num: {
      value: cdktf.numberToHclTerraform(struct!.portNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneWebGuiProtectionPortZoneServiceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneWebGuiProtectionPortZoneServiceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbe = this._pbe;
    }
    if (this._portNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNum = this._portNum;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneWebGuiProtectionPortZoneServiceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pbe = undefined;
      this._portNum = undefined;
      this._protocol = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pbe = value.pbe;
      this._portNum = value.portNum;
      this._protocol = value.protocol;
      this._uuid = value.uuid;
    }
  }

  // pbe - computed: false, optional: true, required: false
  private _pbe?: string; 
  public get pbe() {
    return this.getStringAttribute('pbe');
  }
  public set pbe(value: string) {
    this._pbe = value;
  }
  public resetPbe() {
    this._pbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbeInput() {
    return this._pbe;
  }

  // port_num - computed: false, optional: false, required: true
  private _portNum?: number; 
  public get portNum() {
    return this.getNumberAttribute('port_num');
  }
  public set portNum(value: number) {
    this._portNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumInput() {
    return this._portNum;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class DdosDstZoneWebGuiProtectionPortZoneServiceListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneWebGuiProtectionPortZoneServiceListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneWebGuiProtectionPortZoneServiceListStructOutputReference {
    return new DdosDstZoneWebGuiProtectionPortZoneServiceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStruct {
  /**
  * Peak Bandwidth Expected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#pbe DdosDstZone#pbe}
  */
  readonly pbe?: string;
  /**
  * 'other': other;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#port_other DdosDstZone#port_other}
  */
  readonly portOther: string;
  /**
  * 'tcp': TCP Port; 'udp': UDP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#protocol DdosDstZone#protocol}
  */
  readonly protocol: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZoneWebGuiProtectionPortZoneServiceOtherListStructToTerraform(struct?: DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pbe: cdktf.stringToTerraform(struct!.pbe),
    port_other: cdktf.stringToTerraform(struct!.portOther),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZoneWebGuiProtectionPortZoneServiceOtherListStructToHclTerraform(struct?: DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pbe: {
      value: cdktf.stringToHclTerraform(struct!.pbe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_other: {
      value: cdktf.stringToHclTerraform(struct!.portOther),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbe = this._pbe;
    }
    if (this._portOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.portOther = this._portOther;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pbe = undefined;
      this._portOther = undefined;
      this._protocol = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pbe = value.pbe;
      this._portOther = value.portOther;
      this._protocol = value.protocol;
      this._uuid = value.uuid;
    }
  }

  // pbe - computed: false, optional: true, required: false
  private _pbe?: string; 
  public get pbe() {
    return this.getStringAttribute('pbe');
  }
  public set pbe(value: string) {
    this._pbe = value;
  }
  public resetPbe() {
    this._pbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbeInput() {
    return this._pbe;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStructOutputReference {
    return new DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneWebGuiProtectionPort {
  /**
  * zone_service_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#zone_service_list DdosDstZone#zone_service_list}
  */
  readonly zoneServiceList?: DdosDstZoneWebGuiProtectionPortZoneServiceListStruct[] | cdktf.IResolvable;
  /**
  * zone_service_other_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#zone_service_other_list DdosDstZone#zone_service_other_list}
  */
  readonly zoneServiceOtherList?: DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStruct[] | cdktf.IResolvable;
}

export function ddosDstZoneWebGuiProtectionPortToTerraform(struct?: DdosDstZoneWebGuiProtectionPortOutputReference | DdosDstZoneWebGuiProtectionPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    zone_service_list: cdktf.listMapper(ddosDstZoneWebGuiProtectionPortZoneServiceListStructToTerraform, true)(struct!.zoneServiceList),
    zone_service_other_list: cdktf.listMapper(ddosDstZoneWebGuiProtectionPortZoneServiceOtherListStructToTerraform, true)(struct!.zoneServiceOtherList),
  }
}


export function ddosDstZoneWebGuiProtectionPortToHclTerraform(struct?: DdosDstZoneWebGuiProtectionPortOutputReference | DdosDstZoneWebGuiProtectionPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    zone_service_list: {
      value: cdktf.listMapperHcl(ddosDstZoneWebGuiProtectionPortZoneServiceListStructToHclTerraform, true)(struct!.zoneServiceList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneWebGuiProtectionPortZoneServiceListStructList",
    },
    zone_service_other_list: {
      value: cdktf.listMapperHcl(ddosDstZoneWebGuiProtectionPortZoneServiceOtherListStructToHclTerraform, true)(struct!.zoneServiceOtherList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneWebGuiProtectionPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneWebGuiProtectionPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._zoneServiceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneServiceList = this._zoneServiceList?.internalValue;
    }
    if (this._zoneServiceOtherList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneServiceOtherList = this._zoneServiceOtherList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneWebGuiProtectionPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._zoneServiceList.internalValue = undefined;
      this._zoneServiceOtherList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._zoneServiceList.internalValue = value.zoneServiceList;
      this._zoneServiceOtherList.internalValue = value.zoneServiceOtherList;
    }
  }

  // zone_service_list - computed: false, optional: true, required: false
  private _zoneServiceList = new DdosDstZoneWebGuiProtectionPortZoneServiceListStructList(this, "zone_service_list", false);
  public get zoneServiceList() {
    return this._zoneServiceList;
  }
  public putZoneServiceList(value: DdosDstZoneWebGuiProtectionPortZoneServiceListStruct[] | cdktf.IResolvable) {
    this._zoneServiceList.internalValue = value;
  }
  public resetZoneServiceList() {
    this._zoneServiceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneServiceListInput() {
    return this._zoneServiceList.internalValue;
  }

  // zone_service_other_list - computed: false, optional: true, required: false
  private _zoneServiceOtherList = new DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStructList(this, "zone_service_other_list", false);
  public get zoneServiceOtherList() {
    return this._zoneServiceOtherList;
  }
  public putZoneServiceOtherList(value: DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStruct[] | cdktf.IResolvable) {
    this._zoneServiceOtherList.internalValue = value;
  }
  public resetZoneServiceOtherList() {
    this._zoneServiceOtherList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneServiceOtherListInput() {
    return this._zoneServiceOtherList.internalValue;
  }
}
export interface DdosDstZoneWebGuiProtectionPortRangeListStruct {
  /**
  * Peak Bandwidth Expected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#pbe DdosDstZone#pbe}
  */
  readonly pbe?: string;
  /**
  * Port-Range End Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#port_range_end DdosDstZone#port_range_end}
  */
  readonly portRangeEnd: number;
  /**
  * Port-Range Start Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#port_range_start DdosDstZone#port_range_start}
  */
  readonly portRangeStart: number;
  /**
  * 'dns-tcp': DNS-TCP Port; 'dns-udp': DNS-UDP Port; 'http': HTTP Port; 'tcp': TCP Port; 'udp': UDP Port; 'ssl-l4': SSL-L4 Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#protocol DdosDstZone#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#user_tag DdosDstZone#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZoneWebGuiProtectionPortRangeListStructToTerraform(struct?: DdosDstZoneWebGuiProtectionPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pbe: cdktf.stringToTerraform(struct!.pbe),
    port_range_end: cdktf.numberToTerraform(struct!.portRangeEnd),
    port_range_start: cdktf.numberToTerraform(struct!.portRangeStart),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZoneWebGuiProtectionPortRangeListStructToHclTerraform(struct?: DdosDstZoneWebGuiProtectionPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pbe: {
      value: cdktf.stringToHclTerraform(struct!.pbe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_range_end: {
      value: cdktf.numberToHclTerraform(struct!.portRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_range_start: {
      value: cdktf.numberToHclTerraform(struct!.portRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneWebGuiProtectionPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneWebGuiProtectionPortRangeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbe = this._pbe;
    }
    if (this._portRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRangeEnd = this._portRangeEnd;
    }
    if (this._portRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRangeStart = this._portRangeStart;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneWebGuiProtectionPortRangeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pbe = undefined;
      this._portRangeEnd = undefined;
      this._portRangeStart = undefined;
      this._protocol = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pbe = value.pbe;
      this._portRangeEnd = value.portRangeEnd;
      this._portRangeStart = value.portRangeStart;
      this._protocol = value.protocol;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

  // pbe - computed: false, optional: true, required: false
  private _pbe?: string; 
  public get pbe() {
    return this.getStringAttribute('pbe');
  }
  public set pbe(value: string) {
    this._pbe = value;
  }
  public resetPbe() {
    this._pbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbeInput() {
    return this._pbe;
  }

  // port_range_end - computed: false, optional: false, required: true
  private _portRangeEnd?: number; 
  public get portRangeEnd() {
    return this.getNumberAttribute('port_range_end');
  }
  public set portRangeEnd(value: number) {
    this._portRangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeEndInput() {
    return this._portRangeEnd;
  }

  // port_range_start - computed: false, optional: false, required: true
  private _portRangeStart?: number; 
  public get portRangeStart() {
    return this.getNumberAttribute('port_range_start');
  }
  public set portRangeStart(value: number) {
    this._portRangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeStartInput() {
    return this._portRangeStart;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class DdosDstZoneWebGuiProtectionPortRangeListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneWebGuiProtectionPortRangeListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneWebGuiProtectionPortRangeListStructOutputReference {
    return new DdosDstZoneWebGuiProtectionPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneWebGuiProtection {
  /**
  * ip_proto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#ip_proto DdosDstZone#ip_proto}
  */
  readonly ipProto?: DdosDstZoneWebGuiProtectionIpProto;
  /**
  * port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#port DdosDstZone#port}
  */
  readonly port?: DdosDstZoneWebGuiProtectionPort;
  /**
  * port_range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#port_range_list DdosDstZone#port_range_list}
  */
  readonly portRangeList?: DdosDstZoneWebGuiProtectionPortRangeListStruct[] | cdktf.IResolvable;
}

export function ddosDstZoneWebGuiProtectionToTerraform(struct?: DdosDstZoneWebGuiProtectionOutputReference | DdosDstZoneWebGuiProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_proto: ddosDstZoneWebGuiProtectionIpProtoToTerraform(struct!.ipProto),
    port: ddosDstZoneWebGuiProtectionPortToTerraform(struct!.port),
    port_range_list: cdktf.listMapper(ddosDstZoneWebGuiProtectionPortRangeListStructToTerraform, true)(struct!.portRangeList),
  }
}


export function ddosDstZoneWebGuiProtectionToHclTerraform(struct?: DdosDstZoneWebGuiProtectionOutputReference | DdosDstZoneWebGuiProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_proto: {
      value: ddosDstZoneWebGuiProtectionIpProtoToHclTerraform(struct!.ipProto),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneWebGuiProtectionIpProtoList",
    },
    port: {
      value: ddosDstZoneWebGuiProtectionPortToHclTerraform(struct!.port),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneWebGuiProtectionPortList",
    },
    port_range_list: {
      value: cdktf.listMapperHcl(ddosDstZoneWebGuiProtectionPortRangeListStructToHclTerraform, true)(struct!.portRangeList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneWebGuiProtectionPortRangeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneWebGuiProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneWebGuiProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipProto?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProto = this._ipProto?.internalValue;
    }
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    if (this._portRangeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRangeList = this._portRangeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneWebGuiProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipProto.internalValue = undefined;
      this._port.internalValue = undefined;
      this._portRangeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipProto.internalValue = value.ipProto;
      this._port.internalValue = value.port;
      this._portRangeList.internalValue = value.portRangeList;
    }
  }

  // ip_proto - computed: false, optional: true, required: false
  private _ipProto = new DdosDstZoneWebGuiProtectionIpProtoOutputReference(this, "ip_proto");
  public get ipProto() {
    return this._ipProto;
  }
  public putIpProto(value: DdosDstZoneWebGuiProtectionIpProto) {
    this._ipProto.internalValue = value;
  }
  public resetIpProto() {
    this._ipProto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtoInput() {
    return this._ipProto.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port = new DdosDstZoneWebGuiProtectionPortOutputReference(this, "port");
  public get port() {
    return this._port;
  }
  public putPort(value: DdosDstZoneWebGuiProtectionPort) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // port_range_list - computed: false, optional: true, required: false
  private _portRangeList = new DdosDstZoneWebGuiProtectionPortRangeListStructList(this, "port_range_list", false);
  public get portRangeList() {
    return this._portRangeList;
  }
  public putPortRangeList(value: DdosDstZoneWebGuiProtectionPortRangeListStruct[] | cdktf.IResolvable) {
    this._portRangeList.internalValue = value;
  }
  public resetPortRangeList() {
    this._portRangeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeListInput() {
    return this._portRangeList.internalValue;
  }
}
export interface DdosDstZoneWebGui {
  /**
  * Activate it after learning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#activated_after_learning DdosDstZone#activated_after_learning}
  */
  readonly activatedAfterLearning?: number;
  /**
  * Configure create time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#create_time DdosDstZone#create_time}
  */
  readonly createTime?: string;
  /**
  * Configure modify time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#modify_time DdosDstZone#modify_time}
  */
  readonly modifyTime?: string;
  /**
  * '5': Low; '3': Medium; '1.5': High;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#sensitivity DdosDstZone#sensitivity}
  */
  readonly sensitivity?: string;
  /**
  * 'newly': newly; 'learning': learning; 'learned': learned; 'activated': activated;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#status DdosDstZone#status}
  */
  readonly status?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
  /**
  * learning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#learning DdosDstZone#learning}
  */
  readonly learning?: DdosDstZoneWebGuiLearning;
  /**
  * protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#protection DdosDstZone#protection}
  */
  readonly protection?: DdosDstZoneWebGuiProtection;
}

export function ddosDstZoneWebGuiToTerraform(struct?: DdosDstZoneWebGuiOutputReference | DdosDstZoneWebGui): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activated_after_learning: cdktf.numberToTerraform(struct!.activatedAfterLearning),
    create_time: cdktf.stringToTerraform(struct!.createTime),
    modify_time: cdktf.stringToTerraform(struct!.modifyTime),
    sensitivity: cdktf.stringToTerraform(struct!.sensitivity),
    status: cdktf.stringToTerraform(struct!.status),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    learning: ddosDstZoneWebGuiLearningToTerraform(struct!.learning),
    protection: ddosDstZoneWebGuiProtectionToTerraform(struct!.protection),
  }
}


export function ddosDstZoneWebGuiToHclTerraform(struct?: DdosDstZoneWebGuiOutputReference | DdosDstZoneWebGui): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activated_after_learning: {
      value: cdktf.numberToHclTerraform(struct!.activatedAfterLearning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    create_time: {
      value: cdktf.stringToHclTerraform(struct!.createTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modify_time: {
      value: cdktf.stringToHclTerraform(struct!.modifyTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity: {
      value: cdktf.stringToHclTerraform(struct!.sensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    learning: {
      value: ddosDstZoneWebGuiLearningToHclTerraform(struct!.learning),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneWebGuiLearningList",
    },
    protection: {
      value: ddosDstZoneWebGuiProtectionToHclTerraform(struct!.protection),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneWebGuiProtectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneWebGuiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneWebGui | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activatedAfterLearning !== undefined) {
      hasAnyValues = true;
      internalValueResult.activatedAfterLearning = this._activatedAfterLearning;
    }
    if (this._createTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.createTime = this._createTime;
    }
    if (this._modifyTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyTime = this._modifyTime;
    }
    if (this._sensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivity = this._sensitivity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._learning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.learning = this._learning?.internalValue;
    }
    if (this._protection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protection = this._protection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneWebGui | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activatedAfterLearning = undefined;
      this._createTime = undefined;
      this._modifyTime = undefined;
      this._sensitivity = undefined;
      this._status = undefined;
      this._uuid = undefined;
      this._learning.internalValue = undefined;
      this._protection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activatedAfterLearning = value.activatedAfterLearning;
      this._createTime = value.createTime;
      this._modifyTime = value.modifyTime;
      this._sensitivity = value.sensitivity;
      this._status = value.status;
      this._uuid = value.uuid;
      this._learning.internalValue = value.learning;
      this._protection.internalValue = value.protection;
    }
  }

  // activated_after_learning - computed: false, optional: true, required: false
  private _activatedAfterLearning?: number; 
  public get activatedAfterLearning() {
    return this.getNumberAttribute('activated_after_learning');
  }
  public set activatedAfterLearning(value: number) {
    this._activatedAfterLearning = value;
  }
  public resetActivatedAfterLearning() {
    this._activatedAfterLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activatedAfterLearningInput() {
    return this._activatedAfterLearning;
  }

  // create_time - computed: false, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
  }

  // modify_time - computed: false, optional: true, required: false
  private _modifyTime?: string; 
  public get modifyTime() {
    return this.getStringAttribute('modify_time');
  }
  public set modifyTime(value: string) {
    this._modifyTime = value;
  }
  public resetModifyTime() {
    this._modifyTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyTimeInput() {
    return this._modifyTime;
  }

  // sensitivity - computed: false, optional: true, required: false
  private _sensitivity?: string; 
  public get sensitivity() {
    return this.getStringAttribute('sensitivity');
  }
  public set sensitivity(value: string) {
    this._sensitivity = value;
  }
  public resetSensitivity() {
    this._sensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // learning - computed: false, optional: true, required: false
  private _learning = new DdosDstZoneWebGuiLearningOutputReference(this, "learning");
  public get learning() {
    return this._learning;
  }
  public putLearning(value: DdosDstZoneWebGuiLearning) {
    this._learning.internalValue = value;
  }
  public resetLearning() {
    this._learning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learningInput() {
    return this._learning.internalValue;
  }

  // protection - computed: false, optional: true, required: false
  private _protection = new DdosDstZoneWebGuiProtectionOutputReference(this, "protection");
  public get protection() {
    return this._protection;
  }
  public putProtection(value: DdosDstZoneWebGuiProtection) {
    this._protection.internalValue = value;
  }
  public resetProtection() {
    this._protection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionInput() {
    return this._protection.internalValue;
  }
}
export interface DdosDstZoneZoneTemplate {
  /**
  * DDOS logging template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone#logging DdosDstZone#logging}
  */
  readonly logging?: string;
}

export function ddosDstZoneZoneTemplateToTerraform(struct?: DdosDstZoneZoneTemplateOutputReference | DdosDstZoneZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logging: cdktf.stringToTerraform(struct!.logging),
  }
}


export function ddosDstZoneZoneTemplateToHclTerraform(struct?: DdosDstZoneZoneTemplateOutputReference | DdosDstZoneZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logging: {
      value: cdktf.stringToHclTerraform(struct!.logging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneZoneTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneZoneTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneZoneTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logging = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logging = value.logging;
    }
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }
}
