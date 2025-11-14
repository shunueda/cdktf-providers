// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WantempSystemVirtualwanlinkServiceAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#addr_mode WantempSystemVirtualwanlinkServiceA#addr_mode}
  */
  readonly addrMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#adom WantempSystemVirtualwanlinkServiceA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#bandwidth_weight WantempSystemVirtualwanlinkServiceA#bandwidth_weight}
  */
  readonly bandwidthWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#default WantempSystemVirtualwanlinkServiceA#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#dscp_forward WantempSystemVirtualwanlinkServiceA#dscp_forward}
  */
  readonly dscpForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#dscp_forward_tag WantempSystemVirtualwanlinkServiceA#dscp_forward_tag}
  */
  readonly dscpForwardTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#dscp_reverse WantempSystemVirtualwanlinkServiceA#dscp_reverse}
  */
  readonly dscpReverse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#dscp_reverse_tag WantempSystemVirtualwanlinkServiceA#dscp_reverse_tag}
  */
  readonly dscpReverseTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#dst WantempSystemVirtualwanlinkServiceA#dst}
  */
  readonly dst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#dst6 WantempSystemVirtualwanlinkServiceA#dst6}
  */
  readonly dst6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#dst_negate WantempSystemVirtualwanlinkServiceA#dst_negate}
  */
  readonly dstNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#dynamic_sort_subtable WantempSystemVirtualwanlinkServiceA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#end_port WantempSystemVirtualwanlinkServiceA#end_port}
  */
  readonly endPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#fosid WantempSystemVirtualwanlinkServiceA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#gateway WantempSystemVirtualwanlinkServiceA#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#groups WantempSystemVirtualwanlinkServiceA#groups}
  */
  readonly groups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#health_check WantempSystemVirtualwanlinkServiceA#health_check}
  */
  readonly healthCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#hold_down_time WantempSystemVirtualwanlinkServiceA#hold_down_time}
  */
  readonly holdDownTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#id WantempSystemVirtualwanlinkServiceA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#input_device WantempSystemVirtualwanlinkServiceA#input_device}
  */
  readonly inputDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#input_device_negate WantempSystemVirtualwanlinkServiceA#input_device_negate}
  */
  readonly inputDeviceNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#internet_service WantempSystemVirtualwanlinkServiceA#internet_service}
  */
  readonly internetService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#internet_service_app_ctrl WantempSystemVirtualwanlinkServiceA#internet_service_app_ctrl}
  */
  readonly internetServiceAppCtrl?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#internet_service_app_ctrl_group WantempSystemVirtualwanlinkServiceA#internet_service_app_ctrl_group}
  */
  readonly internetServiceAppCtrlGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#internet_service_ctrl WantempSystemVirtualwanlinkServiceA#internet_service_ctrl}
  */
  readonly internetServiceCtrl?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#internet_service_ctrl_group WantempSystemVirtualwanlinkServiceA#internet_service_ctrl_group}
  */
  readonly internetServiceCtrlGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#internet_service_custom WantempSystemVirtualwanlinkServiceA#internet_service_custom}
  */
  readonly internetServiceCustom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#internet_service_custom_group WantempSystemVirtualwanlinkServiceA#internet_service_custom_group}
  */
  readonly internetServiceCustomGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#internet_service_group WantempSystemVirtualwanlinkServiceA#internet_service_group}
  */
  readonly internetServiceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#internet_service_id WantempSystemVirtualwanlinkServiceA#internet_service_id}
  */
  readonly internetServiceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#jitter_weight WantempSystemVirtualwanlinkServiceA#jitter_weight}
  */
  readonly jitterWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#latency_weight WantempSystemVirtualwanlinkServiceA#latency_weight}
  */
  readonly latencyWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#link_cost_factor WantempSystemVirtualwanlinkServiceA#link_cost_factor}
  */
  readonly linkCostFactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#link_cost_threshold WantempSystemVirtualwanlinkServiceA#link_cost_threshold}
  */
  readonly linkCostThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#member WantempSystemVirtualwanlinkServiceA#member}
  */
  readonly member?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#mode WantempSystemVirtualwanlinkServiceA#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#name WantempSystemVirtualwanlinkServiceA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#packet_loss_weight WantempSystemVirtualwanlinkServiceA#packet_loss_weight}
  */
  readonly packetLossWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#priority_members WantempSystemVirtualwanlinkServiceA#priority_members}
  */
  readonly priorityMembers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#protocol WantempSystemVirtualwanlinkServiceA#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#quality_link WantempSystemVirtualwanlinkServiceA#quality_link}
  */
  readonly qualityLink?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#role WantempSystemVirtualwanlinkServiceA#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#route_tag WantempSystemVirtualwanlinkServiceA#route_tag}
  */
  readonly routeTag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#scopetype WantempSystemVirtualwanlinkServiceA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#sla_compare_method WantempSystemVirtualwanlinkServiceA#sla_compare_method}
  */
  readonly slaCompareMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#src WantempSystemVirtualwanlinkServiceA#src}
  */
  readonly src?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#src6 WantempSystemVirtualwanlinkServiceA#src6}
  */
  readonly src6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#src_negate WantempSystemVirtualwanlinkServiceA#src_negate}
  */
  readonly srcNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#standalone_action WantempSystemVirtualwanlinkServiceA#standalone_action}
  */
  readonly standaloneAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#start_port WantempSystemVirtualwanlinkServiceA#start_port}
  */
  readonly startPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#status WantempSystemVirtualwanlinkServiceA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#tos WantempSystemVirtualwanlinkServiceA#tos}
  */
  readonly tos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#tos_mask WantempSystemVirtualwanlinkServiceA#tos_mask}
  */
  readonly tosMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#users WantempSystemVirtualwanlinkServiceA#users}
  */
  readonly users?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#wanprof WantempSystemVirtualwanlinkServiceA#wanprof}
  */
  readonly wanprof: string;
  /**
  * sla block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#sla WantempSystemVirtualwanlinkServiceA#sla}
  */
  readonly sla?: WantempSystemVirtualwanlinkServiceSlaA[] | cdktf.IResolvable;
}
export interface WantempSystemVirtualwanlinkServiceSlaA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#health_check WantempSystemVirtualwanlinkServiceA#health_check}
  */
  readonly healthCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#id WantempSystemVirtualwanlinkServiceA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function wantempSystemVirtualwanlinkServiceSlaAToTerraform(struct?: WantempSystemVirtualwanlinkServiceSlaA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check: cdktf.stringToTerraform(struct!.healthCheck),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function wantempSystemVirtualwanlinkServiceSlaAToHclTerraform(struct?: WantempSystemVirtualwanlinkServiceSlaA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check: {
      value: cdktf.stringToHclTerraform(struct!.healthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class WantempSystemVirtualwanlinkServiceSlaAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WantempSystemVirtualwanlinkServiceSlaA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WantempSystemVirtualwanlinkServiceSlaA | cdktf.IResolvable | undefined) {
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

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
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

export class WantempSystemVirtualwanlinkServiceSlaAList extends cdktf.ComplexList {
  public internalValue? : WantempSystemVirtualwanlinkServiceSlaA[] | cdktf.IResolvable

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
  public get(index: number): WantempSystemVirtualwanlinkServiceSlaAOutputReference {
    return new WantempSystemVirtualwanlinkServiceSlaAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service fortimanager_wantemp_system_virtualwanlink_service}
*/
export class WantempSystemVirtualwanlinkServiceA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_wantemp_system_virtualwanlink_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WantempSystemVirtualwanlinkServiceA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WantempSystemVirtualwanlinkServiceA to import
  * @param importFromId The id of the existing WantempSystemVirtualwanlinkServiceA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WantempSystemVirtualwanlinkServiceA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_wantemp_system_virtualwanlink_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/wantemp_system_virtualwanlink_service fortimanager_wantemp_system_virtualwanlink_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WantempSystemVirtualwanlinkServiceAConfig
  */
  public constructor(scope: Construct, id: string, config: WantempSystemVirtualwanlinkServiceAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_wantemp_system_virtualwanlink_service',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
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
    this._adom = config.adom;
    this._bandwidthWeight = config.bandwidthWeight;
    this._default = config.default;
    this._dscpForward = config.dscpForward;
    this._dscpForwardTag = config.dscpForwardTag;
    this._dscpReverse = config.dscpReverse;
    this._dscpReverseTag = config.dscpReverseTag;
    this._dst = config.dst;
    this._dst6 = config.dst6;
    this._dstNegate = config.dstNegate;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._endPort = config.endPort;
    this._fosid = config.fosid;
    this._gateway = config.gateway;
    this._groups = config.groups;
    this._healthCheck = config.healthCheck;
    this._holdDownTime = config.holdDownTime;
    this._id = config.id;
    this._inputDevice = config.inputDevice;
    this._inputDeviceNegate = config.inputDeviceNegate;
    this._internetService = config.internetService;
    this._internetServiceAppCtrl = config.internetServiceAppCtrl;
    this._internetServiceAppCtrlGroup = config.internetServiceAppCtrlGroup;
    this._internetServiceCtrl = config.internetServiceCtrl;
    this._internetServiceCtrlGroup = config.internetServiceCtrlGroup;
    this._internetServiceCustom = config.internetServiceCustom;
    this._internetServiceCustomGroup = config.internetServiceCustomGroup;
    this._internetServiceGroup = config.internetServiceGroup;
    this._internetServiceId = config.internetServiceId;
    this._jitterWeight = config.jitterWeight;
    this._latencyWeight = config.latencyWeight;
    this._linkCostFactor = config.linkCostFactor;
    this._linkCostThreshold = config.linkCostThreshold;
    this._member = config.member;
    this._mode = config.mode;
    this._name = config.name;
    this._packetLossWeight = config.packetLossWeight;
    this._priorityMembers = config.priorityMembers;
    this._protocol = config.protocol;
    this._qualityLink = config.qualityLink;
    this._role = config.role;
    this._routeTag = config.routeTag;
    this._scopetype = config.scopetype;
    this._slaCompareMethod = config.slaCompareMethod;
    this._src = config.src;
    this._src6 = config.src6;
    this._srcNegate = config.srcNegate;
    this._standaloneAction = config.standaloneAction;
    this._startPort = config.startPort;
    this._status = config.status;
    this._tos = config.tos;
    this._tosMask = config.tosMask;
    this._users = config.users;
    this._wanprof = config.wanprof;
    this._sla.internalValue = config.sla;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr_mode - computed: false, optional: true, required: false
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

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
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

  // default - computed: false, optional: true, required: false
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

  // dscp_forward - computed: false, optional: true, required: false
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

  // dscp_reverse - computed: false, optional: true, required: false
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

  // dst - computed: false, optional: true, required: false
  private _dst?: string; 
  public get dst() {
    return this.getStringAttribute('dst');
  }
  public set dst(value: string) {
    this._dst = value;
  }
  public resetDst() {
    this._dst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst;
  }

  // dst6 - computed: false, optional: true, required: false
  private _dst6?: string; 
  public get dst6() {
    return this.getStringAttribute('dst6');
  }
  public set dst6(value: string) {
    this._dst6 = value;
  }
  public resetDst6() {
    this._dst6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dst6Input() {
    return this._dst6;
  }

  // dst_negate - computed: false, optional: true, required: false
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

  // end_port - computed: false, optional: true, required: false
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

  // gateway - computed: false, optional: true, required: false
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

  // groups - computed: false, optional: true, required: false
  private _groups?: string; 
  public get groups() {
    return this.getStringAttribute('groups');
  }
  public set groups(value: string) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
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

  // input_device - computed: false, optional: true, required: false
  private _inputDevice?: string; 
  public get inputDevice() {
    return this.getStringAttribute('input_device');
  }
  public set inputDevice(value: string) {
    this._inputDevice = value;
  }
  public resetInputDevice() {
    this._inputDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDeviceInput() {
    return this._inputDevice;
  }

  // input_device_negate - computed: false, optional: true, required: false
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

  // internet_service - computed: false, optional: true, required: false
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

  // internet_service_app_ctrl_group - computed: false, optional: true, required: false
  private _internetServiceAppCtrlGroup?: string; 
  public get internetServiceAppCtrlGroup() {
    return this.getStringAttribute('internet_service_app_ctrl_group');
  }
  public set internetServiceAppCtrlGroup(value: string) {
    this._internetServiceAppCtrlGroup = value;
  }
  public resetInternetServiceAppCtrlGroup() {
    this._internetServiceAppCtrlGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceAppCtrlGroupInput() {
    return this._internetServiceAppCtrlGroup;
  }

  // internet_service_ctrl - computed: true, optional: true, required: false
  private _internetServiceCtrl?: number[]; 
  public get internetServiceCtrl() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('internet_service_ctrl')));
  }
  public set internetServiceCtrl(value: number[]) {
    this._internetServiceCtrl = value;
  }
  public resetInternetServiceCtrl() {
    this._internetServiceCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceCtrlInput() {
    return this._internetServiceCtrl;
  }

  // internet_service_ctrl_group - computed: false, optional: true, required: false
  private _internetServiceCtrlGroup?: string; 
  public get internetServiceCtrlGroup() {
    return this.getStringAttribute('internet_service_ctrl_group');
  }
  public set internetServiceCtrlGroup(value: string) {
    this._internetServiceCtrlGroup = value;
  }
  public resetInternetServiceCtrlGroup() {
    this._internetServiceCtrlGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceCtrlGroupInput() {
    return this._internetServiceCtrlGroup;
  }

  // internet_service_custom - computed: false, optional: true, required: false
  private _internetServiceCustom?: string; 
  public get internetServiceCustom() {
    return this.getStringAttribute('internet_service_custom');
  }
  public set internetServiceCustom(value: string) {
    this._internetServiceCustom = value;
  }
  public resetInternetServiceCustom() {
    this._internetServiceCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceCustomInput() {
    return this._internetServiceCustom;
  }

  // internet_service_custom_group - computed: false, optional: true, required: false
  private _internetServiceCustomGroup?: string; 
  public get internetServiceCustomGroup() {
    return this.getStringAttribute('internet_service_custom_group');
  }
  public set internetServiceCustomGroup(value: string) {
    this._internetServiceCustomGroup = value;
  }
  public resetInternetServiceCustomGroup() {
    this._internetServiceCustomGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceCustomGroupInput() {
    return this._internetServiceCustomGroup;
  }

  // internet_service_group - computed: false, optional: true, required: false
  private _internetServiceGroup?: string; 
  public get internetServiceGroup() {
    return this.getStringAttribute('internet_service_group');
  }
  public set internetServiceGroup(value: string) {
    this._internetServiceGroup = value;
  }
  public resetInternetServiceGroup() {
    this._internetServiceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceGroupInput() {
    return this._internetServiceGroup;
  }

  // internet_service_id - computed: false, optional: true, required: false
  private _internetServiceId?: string; 
  public get internetServiceId() {
    return this.getStringAttribute('internet_service_id');
  }
  public set internetServiceId(value: string) {
    this._internetServiceId = value;
  }
  public resetInternetServiceId() {
    this._internetServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceIdInput() {
    return this._internetServiceId;
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

  // link_cost_threshold - computed: false, optional: true, required: false
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

  // member - computed: false, optional: true, required: false
  private _member?: string; 
  public get member() {
    return this.getStringAttribute('member');
  }
  public set member(value: string) {
    this._member = value;
  }
  public resetMember() {
    this._member = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
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

  // priority_members - computed: false, optional: true, required: false
  private _priorityMembers?: string; 
  public get priorityMembers() {
    return this.getStringAttribute('priority_members');
  }
  public set priorityMembers(value: string) {
    this._priorityMembers = value;
  }
  public resetPriorityMembers() {
    this._priorityMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityMembersInput() {
    return this._priorityMembers;
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

  // role - computed: false, optional: true, required: false
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
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

  // src - computed: false, optional: true, required: false
  private _src?: string; 
  public get src() {
    return this.getStringAttribute('src');
  }
  public set src(value: string) {
    this._src = value;
  }
  public resetSrc() {
    this._src = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src;
  }

  // src6 - computed: false, optional: true, required: false
  private _src6?: string; 
  public get src6() {
    return this.getStringAttribute('src6');
  }
  public set src6(value: string) {
    this._src6 = value;
  }
  public resetSrc6() {
    this._src6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get src6Input() {
    return this._src6;
  }

  // src_negate - computed: false, optional: true, required: false
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

  // standalone_action - computed: false, optional: true, required: false
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

  // start_port - computed: false, optional: true, required: false
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

  // tos - computed: false, optional: true, required: false
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

  // tos_mask - computed: false, optional: true, required: false
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

  // users - computed: false, optional: true, required: false
  private _users?: string; 
  public get users() {
    return this.getStringAttribute('users');
  }
  public set users(value: string) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // wanprof - computed: false, optional: false, required: true
  private _wanprof?: string; 
  public get wanprof() {
    return this.getStringAttribute('wanprof');
  }
  public set wanprof(value: string) {
    this._wanprof = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wanprofInput() {
    return this._wanprof;
  }

  // sla - computed: false, optional: true, required: false
  private _sla = new WantempSystemVirtualwanlinkServiceSlaAList(this, "sla", false);
  public get sla() {
    return this._sla;
  }
  public putSla(value: WantempSystemVirtualwanlinkServiceSlaA[] | cdktf.IResolvable) {
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
      adom: cdktf.stringToTerraform(this._adom),
      bandwidth_weight: cdktf.numberToTerraform(this._bandwidthWeight),
      default: cdktf.stringToTerraform(this._default),
      dscp_forward: cdktf.stringToTerraform(this._dscpForward),
      dscp_forward_tag: cdktf.stringToTerraform(this._dscpForwardTag),
      dscp_reverse: cdktf.stringToTerraform(this._dscpReverse),
      dscp_reverse_tag: cdktf.stringToTerraform(this._dscpReverseTag),
      dst: cdktf.stringToTerraform(this._dst),
      dst6: cdktf.stringToTerraform(this._dst6),
      dst_negate: cdktf.stringToTerraform(this._dstNegate),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      end_port: cdktf.numberToTerraform(this._endPort),
      fosid: cdktf.numberToTerraform(this._fosid),
      gateway: cdktf.stringToTerraform(this._gateway),
      groups: cdktf.stringToTerraform(this._groups),
      health_check: cdktf.stringToTerraform(this._healthCheck),
      hold_down_time: cdktf.numberToTerraform(this._holdDownTime),
      id: cdktf.stringToTerraform(this._id),
      input_device: cdktf.stringToTerraform(this._inputDevice),
      input_device_negate: cdktf.stringToTerraform(this._inputDeviceNegate),
      internet_service: cdktf.stringToTerraform(this._internetService),
      internet_service_app_ctrl: cdktf.listMapper(cdktf.numberToTerraform, false)(this._internetServiceAppCtrl),
      internet_service_app_ctrl_group: cdktf.stringToTerraform(this._internetServiceAppCtrlGroup),
      internet_service_ctrl: cdktf.listMapper(cdktf.numberToTerraform, false)(this._internetServiceCtrl),
      internet_service_ctrl_group: cdktf.stringToTerraform(this._internetServiceCtrlGroup),
      internet_service_custom: cdktf.stringToTerraform(this._internetServiceCustom),
      internet_service_custom_group: cdktf.stringToTerraform(this._internetServiceCustomGroup),
      internet_service_group: cdktf.stringToTerraform(this._internetServiceGroup),
      internet_service_id: cdktf.stringToTerraform(this._internetServiceId),
      jitter_weight: cdktf.numberToTerraform(this._jitterWeight),
      latency_weight: cdktf.numberToTerraform(this._latencyWeight),
      link_cost_factor: cdktf.stringToTerraform(this._linkCostFactor),
      link_cost_threshold: cdktf.numberToTerraform(this._linkCostThreshold),
      member: cdktf.stringToTerraform(this._member),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      packet_loss_weight: cdktf.numberToTerraform(this._packetLossWeight),
      priority_members: cdktf.stringToTerraform(this._priorityMembers),
      protocol: cdktf.numberToTerraform(this._protocol),
      quality_link: cdktf.numberToTerraform(this._qualityLink),
      role: cdktf.stringToTerraform(this._role),
      route_tag: cdktf.numberToTerraform(this._routeTag),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      sla_compare_method: cdktf.stringToTerraform(this._slaCompareMethod),
      src: cdktf.stringToTerraform(this._src),
      src6: cdktf.stringToTerraform(this._src6),
      src_negate: cdktf.stringToTerraform(this._srcNegate),
      standalone_action: cdktf.stringToTerraform(this._standaloneAction),
      start_port: cdktf.numberToTerraform(this._startPort),
      status: cdktf.stringToTerraform(this._status),
      tos: cdktf.stringToTerraform(this._tos),
      tos_mask: cdktf.stringToTerraform(this._tosMask),
      users: cdktf.stringToTerraform(this._users),
      wanprof: cdktf.stringToTerraform(this._wanprof),
      sla: cdktf.listMapper(wantempSystemVirtualwanlinkServiceSlaAToTerraform, true)(this._sla.internalValue),
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
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
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
      default: {
        value: cdktf.stringToHclTerraform(this._default),
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
        value: cdktf.stringToHclTerraform(this._dst),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst6: {
        value: cdktf.stringToHclTerraform(this._dst6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: cdktf.stringToHclTerraform(this._groups),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check: {
        value: cdktf.stringToHclTerraform(this._healthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: cdktf.stringToHclTerraform(this._inputDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_device_negate: {
        value: cdktf.stringToHclTerraform(this._inputDeviceNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      internet_service_app_ctrl_group: {
        value: cdktf.stringToHclTerraform(this._internetServiceAppCtrlGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_ctrl: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._internetServiceCtrl),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      internet_service_ctrl_group: {
        value: cdktf.stringToHclTerraform(this._internetServiceCtrlGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_custom: {
        value: cdktf.stringToHclTerraform(this._internetServiceCustom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_custom_group: {
        value: cdktf.stringToHclTerraform(this._internetServiceCustomGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_group: {
        value: cdktf.stringToHclTerraform(this._internetServiceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_id: {
        value: cdktf.stringToHclTerraform(this._internetServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      member: {
        value: cdktf.stringToHclTerraform(this._member),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      priority_members: {
        value: cdktf.stringToHclTerraform(this._priorityMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
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
      src: {
        value: cdktf.stringToHclTerraform(this._src),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src6: {
        value: cdktf.stringToHclTerraform(this._src6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      users: {
        value: cdktf.stringToHclTerraform(this._users),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wanprof: {
        value: cdktf.stringToHclTerraform(this._wanprof),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sla: {
        value: cdktf.listMapperHcl(wantempSystemVirtualwanlinkServiceSlaAToHclTerraform, true)(this._sla.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WantempSystemVirtualwanlinkServiceSlaAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
