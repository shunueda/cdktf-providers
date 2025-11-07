// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/so_counters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SoCountersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/so_counters#id SoCounters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/so_counters#uuid SoCounters#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/so_counters#sampling_enable SoCounters#sampling_enable}
  */
  readonly samplingEnable?: SoCountersSamplingEnable[] | cdktf.IResolvable;
}
export interface SoCountersSamplingEnable {
  /**
  * 'all': all; 'so_pkts_rcvd': Total data packets received; 'so_redirect_pkts_sent': Total packets redirected out of node; 'so_pkts_dropped': Total packets dropped; 'so_redirected_pkts_rcvd': Total redirected packets received on node; 'so_fw_shadow_session_created': FW Shadow Session created; 'so_pkts_traffic_map_not_found_drop': Traffic MAP Not Found Drop; 'so_slb_pkts_redirect_conn_aged_out': Total SLB redirect conns aged out; 'so_pkts_scaleout_not_active_drop': Scaleout Not Active Drop; 'so_pkts_slb_nat_reserve_fail': Total SLB NAT reserve failures; 'so_pkts_slb_nat_release_fail': Total SLB NAT release failures; 'so_pkts_dest_mac_mismatch_drop': Destination MAC Mistmatch Drop; 'so_pkts_l2redirect_dest_mac_zero_drop': Destination MAC Address zero Drop; 'so_pkts_l2redirect_interface_not_up': L2redirect Intf is not UP; 'so_pkts_l2redirect_invalid_redirect_info_error': Redirect Table Error due to invalid redirect info; 'so_pkts_l3_redirect_encap_error_drop': L3 Redirect encap error drop during transmission; 'so_pkts_l3_redirect_inner_mac_zero_drop': L3 Redirect inner mac zero drop during transmission; 'so_pkts_l3_redirect_decap_vlan_sanity_drop': L3 Redirect Decap VLAN Sanity Drop during receipt; 'so_pkts_l3_redirect_decap_non_ipv4_vxlan_drop': L3 Redirect received non ipv4 VXLAN packet; 'so_pkts_l3_redirect_decap_rx_encap_params_drop': L3 Redirect decap Rx encap params error Drop; 'so_pkts_l3_redirect_table_error': L3 Redirect Table error Drop; 'so_pkts_l3_redirect_rcvd_in_l2_mode_drop': Recevied l3 redirect packets in L2 mode Drop; 'so_pkts_l3_redirect_fragmentation_error': L3 redirect encap Fragmentation error; 'so_pkts_l3_redirect_table_no_entry_found': L3 redirect Table no redirect entry found error; 'so_pkts_l3_redirect_invalid_dev_dir': L3 Redirect Invalid Device direction during transmission; 'so_pkts_l3_redirect_chassis_dest_mac_error': L3 Redirect RX multi-slot Destination MAC Error; 'so_pkts_l3_redirect_encap_ipv4_jumbo_frag_drop': L3 Redirect ipv4 packet after encap more than max jumbo size; 'so_pkts_l3_redirect_encap_ipv6_jumbo_frag_drop': L3 Redirect tx ipv6 packet after encap more than max jumbo size; 'so_pkts_l3_redirect_too_large_pkts_in_drop': Received L3 Redirected fragmented packets too large; 'so_sync_fw_shadow_session_create': Sent Sync message for FW Shadow session creation; 'so_sync_fw_shadow_session_delete': Sent Sync message for FW Shadow session deletion; 'so_sync_fw_shadow_ext': Sync FW Shadow extension creation/updation; 'so_sync_shadow_stats_to_active': Sync Shadow session stats from shadow to active; 'so_fw_internal_rule_count': FW internal rule count; 'so_hc_registration_done': Scaleout stats block registered with HC; 'so_hc_deregistration_done': Scaleout stats block de-registered with HC; 'so_pkts_l2redirect_vlan_retrieval_error': L2 redirect pkt vlan not retrieved; 'so_pkts_l2redirect_port_retrieval_error': L2 redirect pkt port not retrieved; 'so_slb_shadow_session_created': SLB Shadow Session created; 'so_sync_slb_shadow_session_create': Sent Sync message for SLB Shadow session creation; 'so_sync_slb_shadow_session_delete': Sent Sync message for SLB Shadow session deletion;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/so_counters#counters1 SoCounters#counters1}
  */
  readonly counters1?: string;
}

export function soCountersSamplingEnableToTerraform(struct?: SoCountersSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function soCountersSamplingEnableToHclTerraform(struct?: SoCountersSamplingEnable | cdktf.IResolvable): any {
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

export class SoCountersSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SoCountersSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SoCountersSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SoCountersSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SoCountersSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SoCountersSamplingEnableOutputReference {
    return new SoCountersSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/so_counters thunder_so_counters}
*/
export class SoCounters extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_so_counters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SoCounters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SoCounters to import
  * @param importFromId The id of the existing SoCounters that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/so_counters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SoCounters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_so_counters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/so_counters thunder_so_counters} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SoCountersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SoCountersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_so_counters',
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
    this._uuid = config.uuid;
    this._samplingEnable.internalValue = config.samplingEnable;
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
  private _samplingEnable = new SoCountersSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SoCountersSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(soCountersSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(soCountersSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SoCountersSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
