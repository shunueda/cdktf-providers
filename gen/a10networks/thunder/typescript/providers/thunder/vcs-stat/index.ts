// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_stat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VcsStatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_stat#id VcsStat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_stat#uuid VcsStat#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_stat#sampling_enable VcsStat#sampling_enable}
  */
  readonly samplingEnable?: VcsStatSamplingEnable[] | cdktf.IResolvable;
}
export interface VcsStatSamplingEnable {
  /**
  * 'all': all; 'elect_recv_err': Receive error counter of aVCS election; 'elect_send_err': Send error counter of aVCS election; 'elect_recv_byte': Receive bytes counter of aVCS election; 'elect_send_byte': Send bytes counter of aVCS election; 'elect_pdu_master_recv': Received vMaster-PDU counter of aVCS election; 'elect_pdu_master_cand_recv': Received MC-PDU counter of aVCS election; 'elect_pdu_slave_recv': Received vBlade-PDU counter of aVCS election; 'elect_pdu_master_take_over_recv': Received MTO-PDU counter of aVCS election; 'elect_pdu_unknown_recv': Received Unknown-PDU counter of aVCS election; 'elect_pdu_master_sent': Sent vMaster-PDU counter of aVCS election; 'elect_pdu_master_cand_sent': Sent MC-PDU counter of aVCS election; 'elect_pdu_slave_sent': Sent vBlade-PDU counter of aVCS election; 'elect_pdu_master_take_over_sent': Sent MTO-PDU counter of aVCS election; 'elect_pdu_unknown_sent': Sent Unknown-PDU counter of aVCS election; 'elect_pdu_inval': Invalid PDU counter of aVCS election; 'elect_pdu_hw_mismatch': PDU HW mismatch counter of aVCS election; 'elect_pdu_cluster_mismatch': PDU Chassis-ID mismatch counter of aVCS election; 'elect_pdu_dev_id_collision': PDU Device-ID collision counter of aVCS election; 'elect_mc_discard_master': MC discarded vMaster-PDU counter of aVCS election; 'elect_mc_replace_master': MC replaced vMaster-PDU counter of aVCS election; 'elect_mc_dup_masterr': MC duplicate vMaster-PDU counter of aVCS election; 'elect_mc_reset_timer_by_mc': MC timers reset by MC-PDU counter of aVCS election; 'elect_mc_reset_timer_by_mto': MC timers reset by MTO-PDU counter of aVCS election; 'elect_slave_dup_master': vBlade duplicate vMaster-PDU counter of aVCS election; 'elect_slave_discard_challenger': vBlade discard challenger counter of aVCS election; 'elect_slave_replace_challenger': vBlade replace challenger counter of aVCS election; 'elect_slave_dup_challenger': vBlade duplicate challenger counter of aVCS election; 'elect_slave_discard_neighbour': vBlade discard neighbour counter of aVCS election; 'elect_slave_too_many_neighbour': vBlade too many neighbours counter of aVCS election; 'elect_slave_dup_neighbour': send vBlade duplicate neighbours of aVCS election; 'elect_master_discard_challenger': vMaster discard challenger counter of aVCS election; 'elect_master_new_challenger': vMaster new challenger counter of aVCS election; 'elect_master_replace_challenger': vMaster replace challenger counter of aVCS election; 'elect_master_dup_challenger': vMaster duplicate challenger counter of aVCS election; 'elect_master_discard_neighbour': vMaster discard neighbour counter of aVCS election; 'elect_master_too_many_neighbour': vMaster too many neighbours counter of aVCS election; 'elect_master_dup_neighbour': vMaster duplicate neighbours counter of aVCS election; 'elect_enter_master_cand_stat': Enter MC counter of aVCS election; 'elect_enter_slave': Enter vBlade counter of aVCS election; 'elect_enter_master': Enter vMaster counter of aVCS election; 'elect_enter_master_take_over': Enter MTO counter of aVCS election; 'elect_leave_master_cand': Leave MC counter of aVCS election; 'elect_leave_slave': Leave vBlade counter of aVCS election; 'elect_leave_master': Leave vMaster counter of aVCS election; 'elect_leave_master_take_over': Leave MTO counter of aVCS election; 'master_slave_start_err': vMaster Start vBlade Errors counter of aVCS election; 'master_slave_start': vMaster vBlades Started counter of aVCS election; 'master_slave_stop': vMaster vBlades stopped counter of aVCS election; 'master_cfg_upd': Received vMaster Configuration Updates counter of aVCS election; 'master_cfg_upd_l_fail': vMaster Local Configuration Update Errors counter of aVCS election; 'master_cfg_upd_r_fail': vMaster Remote Configuration Update Errors counter of aVCS election; 'master_cfg_upd_notif_err': vMaster Configuration Update Notif Errors counter of aVCS election; 'master_cfg_upd_result_err': vMaster Configuration Update Result Errors counter of aVCS election; 'slave_recv_err': vBlade Receive Errors counter of aVCS election; 'slave_send_err': vBlade Send Errors counter of aVCS election; 'slave_recv_bytes': vBlade Received Bytes counter of aVCS election; 'slave_sent_bytes': vBlade Sent Bytes counter of aVCS election; 'slave_n_recv': vBlade Received Messages counter of aVCS election; 'slave_n_sent': vBlade Sent Messages counter of aVCS election; 'slave_msg_inval': vBlade Invalid Messages counter of aVCS election; 'slave_keepalive': vBlade Received Keepalives counter of aVCS election; 'slave_cfg_upd': vBlade Received Configuration Updates counter of aVCS election; 'slave_cfg_upd_fail': vBlade Configuration Update Failures counter of aVCS election; 'daemon_n_elec_start': times of aVCS election start; 'daemon_n_elec_stop': times of aVCS election stop; 'daemon_recv_err': counter of aVCS daemon receive error; 'daemon_send_err': counter of aVCS daemon sent error; 'daemon_recv_bytes': bytes of aVCS daemon receive; 'daemon_sent_bytes': bytes of aVCS daemon sent; 'daemon_n_recv': counter of aVCS daemon receive; 'daemon_n_sent': counter of aVCS daemon sent; 'daemon_msg_inval': counter of aVCS daemon invalid message; 'daemon_msg_handle_failure': counter of aVCS daemon message handle failure;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_stat#counters1 VcsStat#counters1}
  */
  readonly counters1?: string;
}

export function vcsStatSamplingEnableToTerraform(struct?: VcsStatSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function vcsStatSamplingEnableToHclTerraform(struct?: VcsStatSamplingEnable | cdktf.IResolvable): any {
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

export class VcsStatSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VcsStatSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VcsStatSamplingEnable | cdktf.IResolvable | undefined) {
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

export class VcsStatSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : VcsStatSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): VcsStatSamplingEnableOutputReference {
    return new VcsStatSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_stat thunder_vcs_stat}
*/
export class VcsStat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vcs_stat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VcsStat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VcsStat to import
  * @param importFromId The id of the existing VcsStat that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_stat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VcsStat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vcs_stat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_stat thunder_vcs_stat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VcsStatConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VcsStatConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vcs_stat',
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
  private _samplingEnable = new VcsStatSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: VcsStatSamplingEnable[] | cdktf.IResolvable) {
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
      sampling_enable: cdktf.listMapper(vcsStatSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
        value: cdktf.listMapperHcl(vcsStatSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VcsStatSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
