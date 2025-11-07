// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSdwanServiceAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#addr_mode SystemSdwanServiceA#addr_mode}
  */
  readonly addrMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#agent_exclusive SystemSdwanServiceA#agent_exclusive}
  */
  readonly agentExclusive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#bandwidth_weight SystemSdwanServiceA#bandwidth_weight}
  */
  readonly bandwidthWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#comment SystemSdwanServiceA#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#default SystemSdwanServiceA#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#device_name SystemSdwanServiceA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#device_vdom SystemSdwanServiceA#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#dscp_forward SystemSdwanServiceA#dscp_forward}
  */
  readonly dscpForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#dscp_forward_tag SystemSdwanServiceA#dscp_forward_tag}
  */
  readonly dscpForwardTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#dscp_reverse SystemSdwanServiceA#dscp_reverse}
  */
  readonly dscpReverse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#dscp_reverse_tag SystemSdwanServiceA#dscp_reverse_tag}
  */
  readonly dscpReverseTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#dst SystemSdwanServiceA#dst}
  */
  readonly dst?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#dst6 SystemSdwanServiceA#dst6}
  */
  readonly dst6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#dst_negate SystemSdwanServiceA#dst_negate}
  */
  readonly dstNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#dynamic_sort_subtable SystemSdwanServiceA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#end_port SystemSdwanServiceA#end_port}
  */
  readonly endPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#end_src_port SystemSdwanServiceA#end_src_port}
  */
  readonly endSrcPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#fosid SystemSdwanServiceA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#gateway SystemSdwanServiceA#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#groups SystemSdwanServiceA#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#hash_mode SystemSdwanServiceA#hash_mode}
  */
  readonly hashMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#health_check SystemSdwanServiceA#health_check}
  */
  readonly healthCheck?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#hold_down_time SystemSdwanServiceA#hold_down_time}
  */
  readonly holdDownTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#id SystemSdwanServiceA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#input_device SystemSdwanServiceA#input_device}
  */
  readonly inputDevice?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#input_device_negate SystemSdwanServiceA#input_device_negate}
  */
  readonly inputDeviceNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#input_zone SystemSdwanServiceA#input_zone}
  */
  readonly inputZone?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#internet_service SystemSdwanServiceA#internet_service}
  */
  readonly internetService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#internet_service_app_ctrl SystemSdwanServiceA#internet_service_app_ctrl}
  */
  readonly internetServiceAppCtrl?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#internet_service_app_ctrl_category SystemSdwanServiceA#internet_service_app_ctrl_category}
  */
  readonly internetServiceAppCtrlCategory?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#internet_service_app_ctrl_group SystemSdwanServiceA#internet_service_app_ctrl_group}
  */
  readonly internetServiceAppCtrlGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#internet_service_custom SystemSdwanServiceA#internet_service_custom}
  */
  readonly internetServiceCustom?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#internet_service_custom_group SystemSdwanServiceA#internet_service_custom_group}
  */
  readonly internetServiceCustomGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#internet_service_group SystemSdwanServiceA#internet_service_group}
  */
  readonly internetServiceGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#internet_service_name SystemSdwanServiceA#internet_service_name}
  */
  readonly internetServiceName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#jitter_weight SystemSdwanServiceA#jitter_weight}
  */
  readonly jitterWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#latency_weight SystemSdwanServiceA#latency_weight}
  */
  readonly latencyWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#link_cost_factor SystemSdwanServiceA#link_cost_factor}
  */
  readonly linkCostFactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#link_cost_threshold SystemSdwanServiceA#link_cost_threshold}
  */
  readonly linkCostThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#load_balance SystemSdwanServiceA#load_balance}
  */
  readonly loadBalance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#minimum_sla_meet_members SystemSdwanServiceA#minimum_sla_meet_members}
  */
  readonly minimumSlaMeetMembers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#mode SystemSdwanServiceA#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#name SystemSdwanServiceA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#packet_loss_weight SystemSdwanServiceA#packet_loss_weight}
  */
  readonly packetLossWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#passive_measurement SystemSdwanServiceA#passive_measurement}
  */
  readonly passiveMeasurement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#priority_members SystemSdwanServiceA#priority_members}
  */
  readonly priorityMembers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#priority_zone SystemSdwanServiceA#priority_zone}
  */
  readonly priorityZone?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#protocol SystemSdwanServiceA#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#quality_link SystemSdwanServiceA#quality_link}
  */
  readonly qualityLink?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#role SystemSdwanServiceA#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#route_tag SystemSdwanServiceA#route_tag}
  */
  readonly routeTag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#shortcut SystemSdwanServiceA#shortcut}
  */
  readonly shortcut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#shortcut_priority SystemSdwanServiceA#shortcut_priority}
  */
  readonly shortcutPriority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#sla_compare_method SystemSdwanServiceA#sla_compare_method}
  */
  readonly slaCompareMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#sla_stickiness SystemSdwanServiceA#sla_stickiness}
  */
  readonly slaStickiness?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#src SystemSdwanServiceA#src}
  */
  readonly src?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#src6 SystemSdwanServiceA#src6}
  */
  readonly src6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#src_negate SystemSdwanServiceA#src_negate}
  */
  readonly srcNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#standalone_action SystemSdwanServiceA#standalone_action}
  */
  readonly standaloneAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#start_port SystemSdwanServiceA#start_port}
  */
  readonly startPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#start_src_port SystemSdwanServiceA#start_src_port}
  */
  readonly startSrcPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#status SystemSdwanServiceA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#tie_break SystemSdwanServiceA#tie_break}
  */
  readonly tieBreak?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#tos SystemSdwanServiceA#tos}
  */
  readonly tos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#tos_mask SystemSdwanServiceA#tos_mask}
  */
  readonly tosMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#use_shortcut_sla SystemSdwanServiceA#use_shortcut_sla}
  */
  readonly useShortcutSla?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#users SystemSdwanServiceA#users}
  */
  readonly users?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#zone_mode SystemSdwanServiceA#zone_mode}
  */
  readonly zoneMode?: string;
  /**
  * sla block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#sla SystemSdwanServiceA#sla}
  */
  readonly sla?: SystemSdwanServiceSlaA[] | cdktf.IResolvable;
}
export interface SystemSdwanServiceSlaA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#health_check SystemSdwanServiceA#health_check}
  */
  readonly healthCheck?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#id SystemSdwanServiceA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function systemSdwanServiceSlaAToTerraform(struct?: SystemSdwanServiceSlaA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.healthCheck),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function systemSdwanServiceSlaAToHclTerraform(struct?: SystemSdwanServiceSlaA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.healthCheck),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSdwanServiceSlaAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSdwanServiceSlaA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSdwanServiceSlaA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthCheck = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthCheck = value.healthCheck;
      this._id = value.id;
    }
  }

  // health_check - computed: true, optional: true, required: false
  private _healthCheck?: string[]; 
  public get healthCheck() {
    return cdktf.Fn.tolist(this.getListAttribute('health_check'));
  }
  public set healthCheck(value: string[]) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
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
}

export class SystemSdwanServiceSlaAList extends cdktf.ComplexList {
  public internalValue? : SystemSdwanServiceSlaA[] | cdktf.IResolvable

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
  public get(index: number): SystemSdwanServiceSlaAOutputReference {
    return new SystemSdwanServiceSlaAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service fmgdevice_system_sdwan_service}
*/
export class SystemSdwanServiceA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_sdwan_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSdwanServiceA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSdwanServiceA to import
  * @param importFromId The id of the existing SystemSdwanServiceA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSdwanServiceA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_sdwan_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_service fmgdevice_system_sdwan_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSdwanServiceAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSdwanServiceAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_sdwan_service',
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
    this._addrMode = config.addrMode;
    this._agentExclusive = config.agentExclusive;
    this._bandwidthWeight = config.bandwidthWeight;
    this._comment = config.comment;
    this._default = config.default;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dscpForward = config.dscpForward;
    this._dscpForwardTag = config.dscpForwardTag;
    this._dscpReverse = config.dscpReverse;
    this._dscpReverseTag = config.dscpReverseTag;
    this._dst = config.dst;
    this._dst6 = config.dst6;
    this._dstNegate = config.dstNegate;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._endPort = config.endPort;
    this._endSrcPort = config.endSrcPort;
    this._fosid = config.fosid;
    this._gateway = config.gateway;
    this._groups = config.groups;
    this._hashMode = config.hashMode;
    this._healthCheck = config.healthCheck;
    this._holdDownTime = config.holdDownTime;
    this._id = config.id;
    this._inputDevice = config.inputDevice;
    this._inputDeviceNegate = config.inputDeviceNegate;
    this._inputZone = config.inputZone;
    this._internetService = config.internetService;
    this._internetServiceAppCtrl = config.internetServiceAppCtrl;
    this._internetServiceAppCtrlCategory = config.internetServiceAppCtrlCategory;
    this._internetServiceAppCtrlGroup = config.internetServiceAppCtrlGroup;
    this._internetServiceCustom = config.internetServiceCustom;
    this._internetServiceCustomGroup = config.internetServiceCustomGroup;
    this._internetServiceGroup = config.internetServiceGroup;
    this._internetServiceName = config.internetServiceName;
    this._jitterWeight = config.jitterWeight;
    this._latencyWeight = config.latencyWeight;
    this._linkCostFactor = config.linkCostFactor;
    this._linkCostThreshold = config.linkCostThreshold;
    this._loadBalance = config.loadBalance;
    this._minimumSlaMeetMembers = config.minimumSlaMeetMembers;
    this._mode = config.mode;
    this._name = config.name;
    this._packetLossWeight = config.packetLossWeight;
    this._passiveMeasurement = config.passiveMeasurement;
    this._priorityMembers = config.priorityMembers;
    this._priorityZone = config.priorityZone;
    this._protocol = config.protocol;
    this._qualityLink = config.qualityLink;
    this._role = config.role;
    this._routeTag = config.routeTag;
    this._shortcut = config.shortcut;
    this._shortcutPriority = config.shortcutPriority;
    this._slaCompareMethod = config.slaCompareMethod;
    this._slaStickiness = config.slaStickiness;
    this._src = config.src;
    this._src6 = config.src6;
    this._srcNegate = config.srcNegate;
    this._standaloneAction = config.standaloneAction;
    this._startPort = config.startPort;
    this._startSrcPort = config.startSrcPort;
    this._status = config.status;
    this._tieBreak = config.tieBreak;
    this._tos = config.tos;
    this._tosMask = config.tosMask;
    this._useShortcutSla = config.useShortcutSla;
    this._users = config.users;
    this._zoneMode = config.zoneMode;
    this._sla.internalValue = config.sla;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr_mode - computed: true, optional: true, required: false
  private _addrMode?: string; 
  public get addrMode() {
    return this.getStringAttribute('addr_mode');
  }
  public set addrMode(value: string) {
    this._addrMode = value;
  }
  public resetAddrMode() {
    this._addrMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrModeInput() {
    return this._addrMode;
  }

  // agent_exclusive - computed: true, optional: true, required: false
  private _agentExclusive?: string; 
  public get agentExclusive() {
    return this.getStringAttribute('agent_exclusive');
  }
  public set agentExclusive(value: string) {
    this._agentExclusive = value;
  }
  public resetAgentExclusive() {
    this._agentExclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentExclusiveInput() {
    return this._agentExclusive;
  }

  // bandwidth_weight - computed: false, optional: true, required: false
  private _bandwidthWeight?: number; 
  public get bandwidthWeight() {
    return this.getNumberAttribute('bandwidth_weight');
  }
  public set bandwidthWeight(value: number) {
    this._bandwidthWeight = value;
  }
  public resetBandwidthWeight() {
    this._bandwidthWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthWeightInput() {
    return this._bandwidthWeight;
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

  // default - computed: true, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // dscp_forward - computed: true, optional: true, required: false
  private _dscpForward?: string; 
  public get dscpForward() {
    return this.getStringAttribute('dscp_forward');
  }
  public set dscpForward(value: string) {
    this._dscpForward = value;
  }
  public resetDscpForward() {
    this._dscpForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpForwardInput() {
    return this._dscpForward;
  }

  // dscp_forward_tag - computed: false, optional: true, required: false
  private _dscpForwardTag?: string; 
  public get dscpForwardTag() {
    return this.getStringAttribute('dscp_forward_tag');
  }
  public set dscpForwardTag(value: string) {
    this._dscpForwardTag = value;
  }
  public resetDscpForwardTag() {
    this._dscpForwardTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpForwardTagInput() {
    return this._dscpForwardTag;
  }

  // dscp_reverse - computed: true, optional: true, required: false
  private _dscpReverse?: string; 
  public get dscpReverse() {
    return this.getStringAttribute('dscp_reverse');
  }
  public set dscpReverse(value: string) {
    this._dscpReverse = value;
  }
  public resetDscpReverse() {
    this._dscpReverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpReverseInput() {
    return this._dscpReverse;
  }

  // dscp_reverse_tag - computed: false, optional: true, required: false
  private _dscpReverseTag?: string; 
  public get dscpReverseTag() {
    return this.getStringAttribute('dscp_reverse_tag');
  }
  public set dscpReverseTag(value: string) {
    this._dscpReverseTag = value;
  }
  public resetDscpReverseTag() {
    this._dscpReverseTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpReverseTagInput() {
    return this._dscpReverseTag;
  }

  // dst - computed: true, optional: true, required: false
  private _dst?: string[]; 
  public get dst() {
    return cdktf.Fn.tolist(this.getListAttribute('dst'));
  }
  public set dst(value: string[]) {
    this._dst = value;
  }
  public resetDst() {
    this._dst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst;
  }

  // dst6 - computed: true, optional: true, required: false
  private _dst6?: string[]; 
  public get dst6() {
    return cdktf.Fn.tolist(this.getListAttribute('dst6'));
  }
  public set dst6(value: string[]) {
    this._dst6 = value;
  }
  public resetDst6() {
    this._dst6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dst6Input() {
    return this._dst6;
  }

  // dst_negate - computed: true, optional: true, required: false
  private _dstNegate?: string; 
  public get dstNegate() {
    return this.getStringAttribute('dst_negate');
  }
  public set dstNegate(value: string) {
    this._dstNegate = value;
  }
  public resetDstNegate() {
    this._dstNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstNegateInput() {
    return this._dstNegate;
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

  // end_port - computed: true, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // end_src_port - computed: true, optional: true, required: false
  private _endSrcPort?: number; 
  public get endSrcPort() {
    return this.getNumberAttribute('end_src_port');
  }
  public set endSrcPort(value: number) {
    this._endSrcPort = value;
  }
  public resetEndSrcPort() {
    this._endSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endSrcPortInput() {
    return this._endSrcPort;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // groups - computed: true, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // hash_mode - computed: false, optional: true, required: false
  private _hashMode?: string; 
  public get hashMode() {
    return this.getStringAttribute('hash_mode');
  }
  public set hashMode(value: string) {
    this._hashMode = value;
  }
  public resetHashMode() {
    this._hashMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashModeInput() {
    return this._hashMode;
  }

  // health_check - computed: true, optional: true, required: false
  private _healthCheck?: string[]; 
  public get healthCheck() {
    return cdktf.Fn.tolist(this.getListAttribute('health_check'));
  }
  public set healthCheck(value: string[]) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // hold_down_time - computed: false, optional: true, required: false
  private _holdDownTime?: number; 
  public get holdDownTime() {
    return this.getNumberAttribute('hold_down_time');
  }
  public set holdDownTime(value: number) {
    this._holdDownTime = value;
  }
  public resetHoldDownTime() {
    this._holdDownTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdDownTimeInput() {
    return this._holdDownTime;
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

  // input_device - computed: true, optional: true, required: false
  private _inputDevice?: string[]; 
  public get inputDevice() {
    return cdktf.Fn.tolist(this.getListAttribute('input_device'));
  }
  public set inputDevice(value: string[]) {
    this._inputDevice = value;
  }
  public resetInputDevice() {
    this._inputDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDeviceInput() {
    return this._inputDevice;
  }

  // input_device_negate - computed: true, optional: true, required: false
  private _inputDeviceNegate?: string; 
  public get inputDeviceNegate() {
    return this.getStringAttribute('input_device_negate');
  }
  public set inputDeviceNegate(value: string) {
    this._inputDeviceNegate = value;
  }
  public resetInputDeviceNegate() {
    this._inputDeviceNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDeviceNegateInput() {
    return this._inputDeviceNegate;
  }

  // input_zone - computed: true, optional: true, required: false
  private _inputZone?: string[]; 
  public get inputZone() {
    return cdktf.Fn.tolist(this.getListAttribute('input_zone'));
  }
  public set inputZone(value: string[]) {
    this._inputZone = value;
  }
  public resetInputZone() {
    this._inputZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputZoneInput() {
    return this._inputZone;
  }

  // internet_service - computed: true, optional: true, required: false
  private _internetService?: string; 
  public get internetService() {
    return this.getStringAttribute('internet_service');
  }
  public set internetService(value: string) {
    this._internetService = value;
  }
  public resetInternetService() {
    this._internetService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceInput() {
    return this._internetService;
  }

  // internet_service_app_ctrl - computed: true, optional: true, required: false
  private _internetServiceAppCtrl?: number[]; 
  public get internetServiceAppCtrl() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('internet_service_app_ctrl')));
  }
  public set internetServiceAppCtrl(value: number[]) {
    this._internetServiceAppCtrl = value;
  }
  public resetInternetServiceAppCtrl() {
    this._internetServiceAppCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceAppCtrlInput() {
    return this._internetServiceAppCtrl;
  }

  // internet_service_app_ctrl_category - computed: true, optional: true, required: false
  private _internetServiceAppCtrlCategory?: number[]; 
  public get internetServiceAppCtrlCategory() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('internet_service_app_ctrl_category')));
  }
  public set internetServiceAppCtrlCategory(value: number[]) {
    this._internetServiceAppCtrlCategory = value;
  }
  public resetInternetServiceAppCtrlCategory() {
    this._internetServiceAppCtrlCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceAppCtrlCategoryInput() {
    return this._internetServiceAppCtrlCategory;
  }

  // internet_service_app_ctrl_group - computed: true, optional: true, required: false
  private _internetServiceAppCtrlGroup?: string[]; 
  public get internetServiceAppCtrlGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_app_ctrl_group'));
  }
  public set internetServiceAppCtrlGroup(value: string[]) {
    this._internetServiceAppCtrlGroup = value;
  }
  public resetInternetServiceAppCtrlGroup() {
    this._internetServiceAppCtrlGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceAppCtrlGroupInput() {
    return this._internetServiceAppCtrlGroup;
  }

  // internet_service_custom - computed: true, optional: true, required: false
  private _internetServiceCustom?: string[]; 
  public get internetServiceCustom() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_custom'));
  }
  public set internetServiceCustom(value: string[]) {
    this._internetServiceCustom = value;
  }
  public resetInternetServiceCustom() {
    this._internetServiceCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceCustomInput() {
    return this._internetServiceCustom;
  }

  // internet_service_custom_group - computed: true, optional: true, required: false
  private _internetServiceCustomGroup?: string[]; 
  public get internetServiceCustomGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_custom_group'));
  }
  public set internetServiceCustomGroup(value: string[]) {
    this._internetServiceCustomGroup = value;
  }
  public resetInternetServiceCustomGroup() {
    this._internetServiceCustomGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceCustomGroupInput() {
    return this._internetServiceCustomGroup;
  }

  // internet_service_group - computed: true, optional: true, required: false
  private _internetServiceGroup?: string[]; 
  public get internetServiceGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_group'));
  }
  public set internetServiceGroup(value: string[]) {
    this._internetServiceGroup = value;
  }
  public resetInternetServiceGroup() {
    this._internetServiceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceGroupInput() {
    return this._internetServiceGroup;
  }

  // internet_service_name - computed: true, optional: true, required: false
  private _internetServiceName?: string[]; 
  public get internetServiceName() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_name'));
  }
  public set internetServiceName(value: string[]) {
    this._internetServiceName = value;
  }
  public resetInternetServiceName() {
    this._internetServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceNameInput() {
    return this._internetServiceName;
  }

  // jitter_weight - computed: false, optional: true, required: false
  private _jitterWeight?: number; 
  public get jitterWeight() {
    return this.getNumberAttribute('jitter_weight');
  }
  public set jitterWeight(value: number) {
    this._jitterWeight = value;
  }
  public resetJitterWeight() {
    this._jitterWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterWeightInput() {
    return this._jitterWeight;
  }

  // latency_weight - computed: false, optional: true, required: false
  private _latencyWeight?: number; 
  public get latencyWeight() {
    return this.getNumberAttribute('latency_weight');
  }
  public set latencyWeight(value: number) {
    this._latencyWeight = value;
  }
  public resetLatencyWeight() {
    this._latencyWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyWeightInput() {
    return this._latencyWeight;
  }

  // link_cost_factor - computed: false, optional: true, required: false
  private _linkCostFactor?: string; 
  public get linkCostFactor() {
    return this.getStringAttribute('link_cost_factor');
  }
  public set linkCostFactor(value: string) {
    this._linkCostFactor = value;
  }
  public resetLinkCostFactor() {
    this._linkCostFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkCostFactorInput() {
    return this._linkCostFactor;
  }

  // link_cost_threshold - computed: true, optional: true, required: false
  private _linkCostThreshold?: number; 
  public get linkCostThreshold() {
    return this.getNumberAttribute('link_cost_threshold');
  }
  public set linkCostThreshold(value: number) {
    this._linkCostThreshold = value;
  }
  public resetLinkCostThreshold() {
    this._linkCostThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkCostThresholdInput() {
    return this._linkCostThreshold;
  }

  // load_balance - computed: true, optional: true, required: false
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

  // minimum_sla_meet_members - computed: false, optional: true, required: false
  private _minimumSlaMeetMembers?: number; 
  public get minimumSlaMeetMembers() {
    return this.getNumberAttribute('minimum_sla_meet_members');
  }
  public set minimumSlaMeetMembers(value: number) {
    this._minimumSlaMeetMembers = value;
  }
  public resetMinimumSlaMeetMembers() {
    this._minimumSlaMeetMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSlaMeetMembersInput() {
    return this._minimumSlaMeetMembers;
  }

  // mode - computed: true, optional: true, required: false
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

  // packet_loss_weight - computed: false, optional: true, required: false
  private _packetLossWeight?: number; 
  public get packetLossWeight() {
    return this.getNumberAttribute('packet_loss_weight');
  }
  public set packetLossWeight(value: number) {
    this._packetLossWeight = value;
  }
  public resetPacketLossWeight() {
    this._packetLossWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLossWeightInput() {
    return this._packetLossWeight;
  }

  // passive_measurement - computed: true, optional: true, required: false
  private _passiveMeasurement?: string; 
  public get passiveMeasurement() {
    return this.getStringAttribute('passive_measurement');
  }
  public set passiveMeasurement(value: string) {
    this._passiveMeasurement = value;
  }
  public resetPassiveMeasurement() {
    this._passiveMeasurement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveMeasurementInput() {
    return this._passiveMeasurement;
  }

  // priority_members - computed: true, optional: true, required: false
  private _priorityMembers?: string[]; 
  public get priorityMembers() {
    return cdktf.Fn.tolist(this.getListAttribute('priority_members'));
  }
  public set priorityMembers(value: string[]) {
    this._priorityMembers = value;
  }
  public resetPriorityMembers() {
    this._priorityMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityMembersInput() {
    return this._priorityMembers;
  }

  // priority_zone - computed: true, optional: true, required: false
  private _priorityZone?: string[]; 
  public get priorityZone() {
    return cdktf.Fn.tolist(this.getListAttribute('priority_zone'));
  }
  public set priorityZone(value: string[]) {
    this._priorityZone = value;
  }
  public resetPriorityZone() {
    this._priorityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityZoneInput() {
    return this._priorityZone;
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

  // quality_link - computed: false, optional: true, required: false
  private _qualityLink?: number; 
  public get qualityLink() {
    return this.getNumberAttribute('quality_link');
  }
  public set qualityLink(value: number) {
    this._qualityLink = value;
  }
  public resetQualityLink() {
    this._qualityLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualityLinkInput() {
    return this._qualityLink;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // route_tag - computed: false, optional: true, required: false
  private _routeTag?: number; 
  public get routeTag() {
    return this.getNumberAttribute('route_tag');
  }
  public set routeTag(value: number) {
    this._routeTag = value;
  }
  public resetRouteTag() {
    this._routeTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTagInput() {
    return this._routeTag;
  }

  // shortcut - computed: true, optional: true, required: false
  private _shortcut?: string; 
  public get shortcut() {
    return this.getStringAttribute('shortcut');
  }
  public set shortcut(value: string) {
    this._shortcut = value;
  }
  public resetShortcut() {
    this._shortcut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortcutInput() {
    return this._shortcut;
  }

  // shortcut_priority - computed: true, optional: true, required: false
  private _shortcutPriority?: string; 
  public get shortcutPriority() {
    return this.getStringAttribute('shortcut_priority');
  }
  public set shortcutPriority(value: string) {
    this._shortcutPriority = value;
  }
  public resetShortcutPriority() {
    this._shortcutPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortcutPriorityInput() {
    return this._shortcutPriority;
  }

  // sla_compare_method - computed: false, optional: true, required: false
  private _slaCompareMethod?: string; 
  public get slaCompareMethod() {
    return this.getStringAttribute('sla_compare_method');
  }
  public set slaCompareMethod(value: string) {
    this._slaCompareMethod = value;
  }
  public resetSlaCompareMethod() {
    this._slaCompareMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaCompareMethodInput() {
    return this._slaCompareMethod;
  }

  // sla_stickiness - computed: false, optional: true, required: false
  private _slaStickiness?: string; 
  public get slaStickiness() {
    return this.getStringAttribute('sla_stickiness');
  }
  public set slaStickiness(value: string) {
    this._slaStickiness = value;
  }
  public resetSlaStickiness() {
    this._slaStickiness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaStickinessInput() {
    return this._slaStickiness;
  }

  // src - computed: true, optional: true, required: false
  private _src?: string[]; 
  public get src() {
    return cdktf.Fn.tolist(this.getListAttribute('src'));
  }
  public set src(value: string[]) {
    this._src = value;
  }
  public resetSrc() {
    this._src = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src;
  }

  // src6 - computed: true, optional: true, required: false
  private _src6?: string[]; 
  public get src6() {
    return cdktf.Fn.tolist(this.getListAttribute('src6'));
  }
  public set src6(value: string[]) {
    this._src6 = value;
  }
  public resetSrc6() {
    this._src6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get src6Input() {
    return this._src6;
  }

  // src_negate - computed: true, optional: true, required: false
  private _srcNegate?: string; 
  public get srcNegate() {
    return this.getStringAttribute('src_negate');
  }
  public set srcNegate(value: string) {
    this._srcNegate = value;
  }
  public resetSrcNegate() {
    this._srcNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcNegateInput() {
    return this._srcNegate;
  }

  // standalone_action - computed: true, optional: true, required: false
  private _standaloneAction?: string; 
  public get standaloneAction() {
    return this.getStringAttribute('standalone_action');
  }
  public set standaloneAction(value: string) {
    this._standaloneAction = value;
  }
  public resetStandaloneAction() {
    this._standaloneAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standaloneActionInput() {
    return this._standaloneAction;
  }

  // start_port - computed: true, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }

  // start_src_port - computed: true, optional: true, required: false
  private _startSrcPort?: number; 
  public get startSrcPort() {
    return this.getNumberAttribute('start_src_port');
  }
  public set startSrcPort(value: number) {
    this._startSrcPort = value;
  }
  public resetStartSrcPort() {
    this._startSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startSrcPortInput() {
    return this._startSrcPort;
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

  // tie_break - computed: true, optional: true, required: false
  private _tieBreak?: string; 
  public get tieBreak() {
    return this.getStringAttribute('tie_break');
  }
  public set tieBreak(value: string) {
    this._tieBreak = value;
  }
  public resetTieBreak() {
    this._tieBreak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieBreakInput() {
    return this._tieBreak;
  }

  // tos - computed: true, optional: true, required: false
  private _tos?: string; 
  public get tos() {
    return this.getStringAttribute('tos');
  }
  public set tos(value: string) {
    this._tos = value;
  }
  public resetTos() {
    this._tos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosInput() {
    return this._tos;
  }

  // tos_mask - computed: true, optional: true, required: false
  private _tosMask?: string; 
  public get tosMask() {
    return this.getStringAttribute('tos_mask');
  }
  public set tosMask(value: string) {
    this._tosMask = value;
  }
  public resetTosMask() {
    this._tosMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosMaskInput() {
    return this._tosMask;
  }

  // use_shortcut_sla - computed: true, optional: true, required: false
  private _useShortcutSla?: string; 
  public get useShortcutSla() {
    return this.getStringAttribute('use_shortcut_sla');
  }
  public set useShortcutSla(value: string) {
    this._useShortcutSla = value;
  }
  public resetUseShortcutSla() {
    this._useShortcutSla = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useShortcutSlaInput() {
    return this._useShortcutSla;
  }

  // users - computed: true, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // zone_mode - computed: true, optional: true, required: false
  private _zoneMode?: string; 
  public get zoneMode() {
    return this.getStringAttribute('zone_mode');
  }
  public set zoneMode(value: string) {
    this._zoneMode = value;
  }
  public resetZoneMode() {
    this._zoneMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneModeInput() {
    return this._zoneMode;
  }

  // sla - computed: false, optional: true, required: false
  private _sla = new SystemSdwanServiceSlaAList(this, "sla", false);
  public get sla() {
    return this._sla;
  }
  public putSla(value: SystemSdwanServiceSlaA[] | cdktf.IResolvable) {
    this._sla.internalValue = value;
  }
  public resetSla() {
    this._sla.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaInput() {
    return this._sla.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr_mode: cdktf.stringToTerraform(this._addrMode),
      agent_exclusive: cdktf.stringToTerraform(this._agentExclusive),
      bandwidth_weight: cdktf.numberToTerraform(this._bandwidthWeight),
      comment: cdktf.stringToTerraform(this._comment),
      default: cdktf.stringToTerraform(this._default),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dscp_forward: cdktf.stringToTerraform(this._dscpForward),
      dscp_forward_tag: cdktf.stringToTerraform(this._dscpForwardTag),
      dscp_reverse: cdktf.stringToTerraform(this._dscpReverse),
      dscp_reverse_tag: cdktf.stringToTerraform(this._dscpReverseTag),
      dst: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dst),
      dst6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dst6),
      dst_negate: cdktf.stringToTerraform(this._dstNegate),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      end_port: cdktf.numberToTerraform(this._endPort),
      end_src_port: cdktf.numberToTerraform(this._endSrcPort),
      fosid: cdktf.numberToTerraform(this._fosid),
      gateway: cdktf.stringToTerraform(this._gateway),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      hash_mode: cdktf.stringToTerraform(this._hashMode),
      health_check: cdktf.listMapper(cdktf.stringToTerraform, false)(this._healthCheck),
      hold_down_time: cdktf.numberToTerraform(this._holdDownTime),
      id: cdktf.stringToTerraform(this._id),
      input_device: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inputDevice),
      input_device_negate: cdktf.stringToTerraform(this._inputDeviceNegate),
      input_zone: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inputZone),
      internet_service: cdktf.stringToTerraform(this._internetService),
      internet_service_app_ctrl: cdktf.listMapper(cdktf.numberToTerraform, false)(this._internetServiceAppCtrl),
      internet_service_app_ctrl_category: cdktf.listMapper(cdktf.numberToTerraform, false)(this._internetServiceAppCtrlCategory),
      internet_service_app_ctrl_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceAppCtrlGroup),
      internet_service_custom: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceCustom),
      internet_service_custom_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceCustomGroup),
      internet_service_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceGroup),
      internet_service_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceName),
      jitter_weight: cdktf.numberToTerraform(this._jitterWeight),
      latency_weight: cdktf.numberToTerraform(this._latencyWeight),
      link_cost_factor: cdktf.stringToTerraform(this._linkCostFactor),
      link_cost_threshold: cdktf.numberToTerraform(this._linkCostThreshold),
      load_balance: cdktf.stringToTerraform(this._loadBalance),
      minimum_sla_meet_members: cdktf.numberToTerraform(this._minimumSlaMeetMembers),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      packet_loss_weight: cdktf.numberToTerraform(this._packetLossWeight),
      passive_measurement: cdktf.stringToTerraform(this._passiveMeasurement),
      priority_members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._priorityMembers),
      priority_zone: cdktf.listMapper(cdktf.stringToTerraform, false)(this._priorityZone),
      protocol: cdktf.numberToTerraform(this._protocol),
      quality_link: cdktf.numberToTerraform(this._qualityLink),
      role: cdktf.stringToTerraform(this._role),
      route_tag: cdktf.numberToTerraform(this._routeTag),
      shortcut: cdktf.stringToTerraform(this._shortcut),
      shortcut_priority: cdktf.stringToTerraform(this._shortcutPriority),
      sla_compare_method: cdktf.stringToTerraform(this._slaCompareMethod),
      sla_stickiness: cdktf.stringToTerraform(this._slaStickiness),
      src: cdktf.listMapper(cdktf.stringToTerraform, false)(this._src),
      src6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._src6),
      src_negate: cdktf.stringToTerraform(this._srcNegate),
      standalone_action: cdktf.stringToTerraform(this._standaloneAction),
      start_port: cdktf.numberToTerraform(this._startPort),
      start_src_port: cdktf.numberToTerraform(this._startSrcPort),
      status: cdktf.stringToTerraform(this._status),
      tie_break: cdktf.stringToTerraform(this._tieBreak),
      tos: cdktf.stringToTerraform(this._tos),
      tos_mask: cdktf.stringToTerraform(this._tosMask),
      use_shortcut_sla: cdktf.stringToTerraform(this._useShortcutSla),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
      zone_mode: cdktf.stringToTerraform(this._zoneMode),
      sla: cdktf.listMapper(systemSdwanServiceSlaAToTerraform, true)(this._sla.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addr_mode: {
        value: cdktf.stringToHclTerraform(this._addrMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_exclusive: {
        value: cdktf.stringToHclTerraform(this._agentExclusive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth_weight: {
        value: cdktf.numberToHclTerraform(this._bandwidthWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default: {
        value: cdktf.stringToHclTerraform(this._default),
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
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dscp_forward: {
        value: cdktf.stringToHclTerraform(this._dscpForward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dscp_forward_tag: {
        value: cdktf.stringToHclTerraform(this._dscpForwardTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dscp_reverse: {
        value: cdktf.stringToHclTerraform(this._dscpReverse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dscp_reverse_tag: {
        value: cdktf.stringToHclTerraform(this._dscpReverseTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dst),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dst6: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dst6),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dst_negate: {
        value: cdktf.stringToHclTerraform(this._dstNegate),
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
      end_port: {
        value: cdktf.numberToHclTerraform(this._endPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      end_src_port: {
        value: cdktf.numberToHclTerraform(this._endSrcPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      hash_mode: {
        value: cdktf.stringToHclTerraform(this._hashMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._healthCheck),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      hold_down_time: {
        value: cdktf.numberToHclTerraform(this._holdDownTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_device: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inputDevice),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      input_device_negate: {
        value: cdktf.stringToHclTerraform(this._inputDeviceNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_zone: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inputZone),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service: {
        value: cdktf.stringToHclTerraform(this._internetService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_app_ctrl: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._internetServiceAppCtrl),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      internet_service_app_ctrl_category: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._internetServiceAppCtrlCategory),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      internet_service_app_ctrl_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceAppCtrlGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service_custom: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceCustom),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service_custom_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceCustomGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      jitter_weight: {
        value: cdktf.numberToHclTerraform(this._jitterWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      latency_weight: {
        value: cdktf.numberToHclTerraform(this._latencyWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      link_cost_factor: {
        value: cdktf.stringToHclTerraform(this._linkCostFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_cost_threshold: {
        value: cdktf.numberToHclTerraform(this._linkCostThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      load_balance: {
        value: cdktf.stringToHclTerraform(this._loadBalance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_sla_meet_members: {
        value: cdktf.numberToHclTerraform(this._minimumSlaMeetMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      packet_loss_weight: {
        value: cdktf.numberToHclTerraform(this._packetLossWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      passive_measurement: {
        value: cdktf.stringToHclTerraform(this._passiveMeasurement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority_members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._priorityMembers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      priority_zone: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._priorityZone),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      protocol: {
        value: cdktf.numberToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quality_link: {
        value: cdktf.numberToHclTerraform(this._qualityLink),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_tag: {
        value: cdktf.numberToHclTerraform(this._routeTag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shortcut: {
        value: cdktf.stringToHclTerraform(this._shortcut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shortcut_priority: {
        value: cdktf.stringToHclTerraform(this._shortcutPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sla_compare_method: {
        value: cdktf.stringToHclTerraform(this._slaCompareMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sla_stickiness: {
        value: cdktf.stringToHclTerraform(this._slaStickiness),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._src),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      src6: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._src6),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      src_negate: {
        value: cdktf.stringToHclTerraform(this._srcNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standalone_action: {
        value: cdktf.stringToHclTerraform(this._standaloneAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_port: {
        value: cdktf.numberToHclTerraform(this._startPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start_src_port: {
        value: cdktf.numberToHclTerraform(this._startSrcPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tie_break: {
        value: cdktf.stringToHclTerraform(this._tieBreak),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tos: {
        value: cdktf.stringToHclTerraform(this._tos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tos_mask: {
        value: cdktf.stringToHclTerraform(this._tosMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_shortcut_sla: {
        value: cdktf.stringToHclTerraform(this._useShortcutSla),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._users),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      zone_mode: {
        value: cdktf.stringToHclTerraform(this._zoneMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sla: {
        value: cdktf.listMapperHcl(systemSdwanServiceSlaAToHclTerraform, true)(this._sla.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemSdwanServiceSlaAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
