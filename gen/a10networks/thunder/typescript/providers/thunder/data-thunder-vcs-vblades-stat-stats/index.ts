// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vblades_stat_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVcsVbladesStatStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vblades_stat_stats#id DataThunderVcsVbladesStatStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * vBlade-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vblades_stat_stats#vblade_id DataThunderVcsVbladesStatStats#vblade_id}
  */
  readonly vbladeId: number;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vblades_stat_stats#stats DataThunderVcsVbladesStatStats#stats}
  */
  readonly stats?: DataThunderVcsVbladesStatStatsStats;
}
export interface DataThunderVcsVbladesStatStatsStats {
  /**
  * vBlade Received Configuration Updates counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vblades_stat_stats#slave_cfg_upd DataThunderVcsVbladesStatStats#slave_cfg_upd}
  */
  readonly slaveCfgUpd?: number;
  /**
  * vBlade Local Configuration Update Errors (1) counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vblades_stat_stats#slave_cfg_upd_l1_fail DataThunderVcsVbladesStatStats#slave_cfg_upd_l1_fail}
  */
  readonly slaveCfgUpdL1Fail?: number;
  /**
  * vBlade Local Configuration Update Errors (2) counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vblades_stat_stats#slave_cfg_upd_l2_fail DataThunderVcsVbladesStatStats#slave_cfg_upd_l2_fail}
  */
  readonly slaveCfgUpdL2Fail?: number;
  /**
  * vBlade Configuration Update Notif Errors counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vblades_stat_stats#slave_cfg_upd_notif_err DataThunderVcsVbladesStatStats#slave_cfg_upd_notif_err}
  */
  readonly slaveCfgUpdNotifErr?: number;
  /**
  * vBlade Remote Configuration Update Errors counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vblades_stat_stats#slave_cfg_upd_r_fail DataThunderVcsVbladesStatStats#slave_cfg_upd_r_fail}
  */
  readonly slaveCfgUpdRFail?: number;
  /**
  * vBlade Configuration Update Result Errors counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vblades_stat_stats#slave_cfg_upd_result_err DataThunderVcsVbladesStatStats#slave_cfg_upd_result_err}
  */
  readonly slaveCfgUpdResultErr?: number;
  /**
  * vBlade Received Keepalives counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vblades_stat_stats#slave_keepalive DataThunderVcsVbladesStatStats#slave_keepalive}
  */
  readonly slaveKeepalive?: number;
  /**
  * vBlade Invalid Messages counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vblades_stat_stats#slave_msg_inval DataThunderVcsVbladesStatStats#slave_msg_inval}
  */
  readonly slaveMsgInval?: number;
  /**
  * vBlade Received Messages counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vblades_stat_stats#slave_n_recv DataThunderVcsVbladesStatStats#slave_n_recv}
  */
  readonly slaveNRecv?: number;
  /**
  * vBlade Sent Messages counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vblades_stat_stats#slave_n_sent DataThunderVcsVbladesStatStats#slave_n_sent}
  */
  readonly slaveNSent?: number;
  /**
  * vBlade Received Bytes counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vblades_stat_stats#slave_recv_bytes DataThunderVcsVbladesStatStats#slave_recv_bytes}
  */
  readonly slaveRecvBytes?: number;
  /**
  * vBlade Receive Errors counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vblades_stat_stats#slave_recv_err DataThunderVcsVbladesStatStats#slave_recv_err}
  */
  readonly slaveRecvErr?: number;
  /**
  * vBlade Send Errors counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vblades_stat_stats#slave_send_err DataThunderVcsVbladesStatStats#slave_send_err}
  */
  readonly slaveSendErr?: number;
  /**
  * vBlade Sent Bytes counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vblades_stat_stats#slave_sent_bytes DataThunderVcsVbladesStatStats#slave_sent_bytes}
  */
  readonly slaveSentBytes?: number;
}

export function dataThunderVcsVbladesStatStatsStatsToTerraform(struct?: DataThunderVcsVbladesStatStatsStatsOutputReference | DataThunderVcsVbladesStatStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slave_cfg_upd: cdktf.numberToTerraform(struct!.slaveCfgUpd),
    slave_cfg_upd_l1_fail: cdktf.numberToTerraform(struct!.slaveCfgUpdL1Fail),
    slave_cfg_upd_l2_fail: cdktf.numberToTerraform(struct!.slaveCfgUpdL2Fail),
    slave_cfg_upd_notif_err: cdktf.numberToTerraform(struct!.slaveCfgUpdNotifErr),
    slave_cfg_upd_r_fail: cdktf.numberToTerraform(struct!.slaveCfgUpdRFail),
    slave_cfg_upd_result_err: cdktf.numberToTerraform(struct!.slaveCfgUpdResultErr),
    slave_keepalive: cdktf.numberToTerraform(struct!.slaveKeepalive),
    slave_msg_inval: cdktf.numberToTerraform(struct!.slaveMsgInval),
    slave_n_recv: cdktf.numberToTerraform(struct!.slaveNRecv),
    slave_n_sent: cdktf.numberToTerraform(struct!.slaveNSent),
    slave_recv_bytes: cdktf.numberToTerraform(struct!.slaveRecvBytes),
    slave_recv_err: cdktf.numberToTerraform(struct!.slaveRecvErr),
    slave_send_err: cdktf.numberToTerraform(struct!.slaveSendErr),
    slave_sent_bytes: cdktf.numberToTerraform(struct!.slaveSentBytes),
  }
}


export function dataThunderVcsVbladesStatStatsStatsToHclTerraform(struct?: DataThunderVcsVbladesStatStatsStatsOutputReference | DataThunderVcsVbladesStatStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    slave_cfg_upd: {
      value: cdktf.numberToHclTerraform(struct!.slaveCfgUpd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slave_cfg_upd_l1_fail: {
      value: cdktf.numberToHclTerraform(struct!.slaveCfgUpdL1Fail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slave_cfg_upd_l2_fail: {
      value: cdktf.numberToHclTerraform(struct!.slaveCfgUpdL2Fail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slave_cfg_upd_notif_err: {
      value: cdktf.numberToHclTerraform(struct!.slaveCfgUpdNotifErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slave_cfg_upd_r_fail: {
      value: cdktf.numberToHclTerraform(struct!.slaveCfgUpdRFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slave_cfg_upd_result_err: {
      value: cdktf.numberToHclTerraform(struct!.slaveCfgUpdResultErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slave_keepalive: {
      value: cdktf.numberToHclTerraform(struct!.slaveKeepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slave_msg_inval: {
      value: cdktf.numberToHclTerraform(struct!.slaveMsgInval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slave_n_recv: {
      value: cdktf.numberToHclTerraform(struct!.slaveNRecv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slave_n_sent: {
      value: cdktf.numberToHclTerraform(struct!.slaveNSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slave_recv_bytes: {
      value: cdktf.numberToHclTerraform(struct!.slaveRecvBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slave_recv_err: {
      value: cdktf.numberToHclTerraform(struct!.slaveRecvErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slave_send_err: {
      value: cdktf.numberToHclTerraform(struct!.slaveSendErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slave_sent_bytes: {
      value: cdktf.numberToHclTerraform(struct!.slaveSentBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVcsVbladesStatStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVcsVbladesStatStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slaveCfgUpd !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaveCfgUpd = this._slaveCfgUpd;
    }
    if (this._slaveCfgUpdL1Fail !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaveCfgUpdL1Fail = this._slaveCfgUpdL1Fail;
    }
    if (this._slaveCfgUpdL2Fail !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaveCfgUpdL2Fail = this._slaveCfgUpdL2Fail;
    }
    if (this._slaveCfgUpdNotifErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaveCfgUpdNotifErr = this._slaveCfgUpdNotifErr;
    }
    if (this._slaveCfgUpdRFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaveCfgUpdRFail = this._slaveCfgUpdRFail;
    }
    if (this._slaveCfgUpdResultErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaveCfgUpdResultErr = this._slaveCfgUpdResultErr;
    }
    if (this._slaveKeepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaveKeepalive = this._slaveKeepalive;
    }
    if (this._slaveMsgInval !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaveMsgInval = this._slaveMsgInval;
    }
    if (this._slaveNRecv !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaveNRecv = this._slaveNRecv;
    }
    if (this._slaveNSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaveNSent = this._slaveNSent;
    }
    if (this._slaveRecvBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaveRecvBytes = this._slaveRecvBytes;
    }
    if (this._slaveRecvErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaveRecvErr = this._slaveRecvErr;
    }
    if (this._slaveSendErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaveSendErr = this._slaveSendErr;
    }
    if (this._slaveSentBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaveSentBytes = this._slaveSentBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVcsVbladesStatStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._slaveCfgUpd = undefined;
      this._slaveCfgUpdL1Fail = undefined;
      this._slaveCfgUpdL2Fail = undefined;
      this._slaveCfgUpdNotifErr = undefined;
      this._slaveCfgUpdRFail = undefined;
      this._slaveCfgUpdResultErr = undefined;
      this._slaveKeepalive = undefined;
      this._slaveMsgInval = undefined;
      this._slaveNRecv = undefined;
      this._slaveNSent = undefined;
      this._slaveRecvBytes = undefined;
      this._slaveRecvErr = undefined;
      this._slaveSendErr = undefined;
      this._slaveSentBytes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._slaveCfgUpd = value.slaveCfgUpd;
      this._slaveCfgUpdL1Fail = value.slaveCfgUpdL1Fail;
      this._slaveCfgUpdL2Fail = value.slaveCfgUpdL2Fail;
      this._slaveCfgUpdNotifErr = value.slaveCfgUpdNotifErr;
      this._slaveCfgUpdRFail = value.slaveCfgUpdRFail;
      this._slaveCfgUpdResultErr = value.slaveCfgUpdResultErr;
      this._slaveKeepalive = value.slaveKeepalive;
      this._slaveMsgInval = value.slaveMsgInval;
      this._slaveNRecv = value.slaveNRecv;
      this._slaveNSent = value.slaveNSent;
      this._slaveRecvBytes = value.slaveRecvBytes;
      this._slaveRecvErr = value.slaveRecvErr;
      this._slaveSendErr = value.slaveSendErr;
      this._slaveSentBytes = value.slaveSentBytes;
    }
  }

  // slave_cfg_upd - computed: false, optional: true, required: false
  private _slaveCfgUpd?: number; 
  public get slaveCfgUpd() {
    return this.getNumberAttribute('slave_cfg_upd');
  }
  public set slaveCfgUpd(value: number) {
    this._slaveCfgUpd = value;
  }
  public resetSlaveCfgUpd() {
    this._slaveCfgUpd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveCfgUpdInput() {
    return this._slaveCfgUpd;
  }

  // slave_cfg_upd_l1_fail - computed: false, optional: true, required: false
  private _slaveCfgUpdL1Fail?: number; 
  public get slaveCfgUpdL1Fail() {
    return this.getNumberAttribute('slave_cfg_upd_l1_fail');
  }
  public set slaveCfgUpdL1Fail(value: number) {
    this._slaveCfgUpdL1Fail = value;
  }
  public resetSlaveCfgUpdL1Fail() {
    this._slaveCfgUpdL1Fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveCfgUpdL1FailInput() {
    return this._slaveCfgUpdL1Fail;
  }

  // slave_cfg_upd_l2_fail - computed: false, optional: true, required: false
  private _slaveCfgUpdL2Fail?: number; 
  public get slaveCfgUpdL2Fail() {
    return this.getNumberAttribute('slave_cfg_upd_l2_fail');
  }
  public set slaveCfgUpdL2Fail(value: number) {
    this._slaveCfgUpdL2Fail = value;
  }
  public resetSlaveCfgUpdL2Fail() {
    this._slaveCfgUpdL2Fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveCfgUpdL2FailInput() {
    return this._slaveCfgUpdL2Fail;
  }

  // slave_cfg_upd_notif_err - computed: false, optional: true, required: false
  private _slaveCfgUpdNotifErr?: number; 
  public get slaveCfgUpdNotifErr() {
    return this.getNumberAttribute('slave_cfg_upd_notif_err');
  }
  public set slaveCfgUpdNotifErr(value: number) {
    this._slaveCfgUpdNotifErr = value;
  }
  public resetSlaveCfgUpdNotifErr() {
    this._slaveCfgUpdNotifErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveCfgUpdNotifErrInput() {
    return this._slaveCfgUpdNotifErr;
  }

  // slave_cfg_upd_r_fail - computed: false, optional: true, required: false
  private _slaveCfgUpdRFail?: number; 
  public get slaveCfgUpdRFail() {
    return this.getNumberAttribute('slave_cfg_upd_r_fail');
  }
  public set slaveCfgUpdRFail(value: number) {
    this._slaveCfgUpdRFail = value;
  }
  public resetSlaveCfgUpdRFail() {
    this._slaveCfgUpdRFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveCfgUpdRFailInput() {
    return this._slaveCfgUpdRFail;
  }

  // slave_cfg_upd_result_err - computed: false, optional: true, required: false
  private _slaveCfgUpdResultErr?: number; 
  public get slaveCfgUpdResultErr() {
    return this.getNumberAttribute('slave_cfg_upd_result_err');
  }
  public set slaveCfgUpdResultErr(value: number) {
    this._slaveCfgUpdResultErr = value;
  }
  public resetSlaveCfgUpdResultErr() {
    this._slaveCfgUpdResultErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveCfgUpdResultErrInput() {
    return this._slaveCfgUpdResultErr;
  }

  // slave_keepalive - computed: false, optional: true, required: false
  private _slaveKeepalive?: number; 
  public get slaveKeepalive() {
    return this.getNumberAttribute('slave_keepalive');
  }
  public set slaveKeepalive(value: number) {
    this._slaveKeepalive = value;
  }
  public resetSlaveKeepalive() {
    this._slaveKeepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveKeepaliveInput() {
    return this._slaveKeepalive;
  }

  // slave_msg_inval - computed: false, optional: true, required: false
  private _slaveMsgInval?: number; 
  public get slaveMsgInval() {
    return this.getNumberAttribute('slave_msg_inval');
  }
  public set slaveMsgInval(value: number) {
    this._slaveMsgInval = value;
  }
  public resetSlaveMsgInval() {
    this._slaveMsgInval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveMsgInvalInput() {
    return this._slaveMsgInval;
  }

  // slave_n_recv - computed: false, optional: true, required: false
  private _slaveNRecv?: number; 
  public get slaveNRecv() {
    return this.getNumberAttribute('slave_n_recv');
  }
  public set slaveNRecv(value: number) {
    this._slaveNRecv = value;
  }
  public resetSlaveNRecv() {
    this._slaveNRecv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveNRecvInput() {
    return this._slaveNRecv;
  }

  // slave_n_sent - computed: false, optional: true, required: false
  private _slaveNSent?: number; 
  public get slaveNSent() {
    return this.getNumberAttribute('slave_n_sent');
  }
  public set slaveNSent(value: number) {
    this._slaveNSent = value;
  }
  public resetSlaveNSent() {
    this._slaveNSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveNSentInput() {
    return this._slaveNSent;
  }

  // slave_recv_bytes - computed: false, optional: true, required: false
  private _slaveRecvBytes?: number; 
  public get slaveRecvBytes() {
    return this.getNumberAttribute('slave_recv_bytes');
  }
  public set slaveRecvBytes(value: number) {
    this._slaveRecvBytes = value;
  }
  public resetSlaveRecvBytes() {
    this._slaveRecvBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveRecvBytesInput() {
    return this._slaveRecvBytes;
  }

  // slave_recv_err - computed: false, optional: true, required: false
  private _slaveRecvErr?: number; 
  public get slaveRecvErr() {
    return this.getNumberAttribute('slave_recv_err');
  }
  public set slaveRecvErr(value: number) {
    this._slaveRecvErr = value;
  }
  public resetSlaveRecvErr() {
    this._slaveRecvErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveRecvErrInput() {
    return this._slaveRecvErr;
  }

  // slave_send_err - computed: false, optional: true, required: false
  private _slaveSendErr?: number; 
  public get slaveSendErr() {
    return this.getNumberAttribute('slave_send_err');
  }
  public set slaveSendErr(value: number) {
    this._slaveSendErr = value;
  }
  public resetSlaveSendErr() {
    this._slaveSendErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveSendErrInput() {
    return this._slaveSendErr;
  }

  // slave_sent_bytes - computed: false, optional: true, required: false
  private _slaveSentBytes?: number; 
  public get slaveSentBytes() {
    return this.getNumberAttribute('slave_sent_bytes');
  }
  public set slaveSentBytes(value: number) {
    this._slaveSentBytes = value;
  }
  public resetSlaveSentBytes() {
    this._slaveSentBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveSentBytesInput() {
    return this._slaveSentBytes;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vblades_stat_stats thunder_vcs_vblades_stat_stats}
*/
export class DataThunderVcsVbladesStatStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vcs_vblades_stat_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVcsVbladesStatStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVcsVbladesStatStats to import
  * @param importFromId The id of the existing DataThunderVcsVbladesStatStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vblades_stat_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVcsVbladesStatStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vcs_vblades_stat_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vblades_stat_stats thunder_vcs_vblades_stat_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVcsVbladesStatStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderVcsVbladesStatStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_vcs_vblades_stat_stats',
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
    this._vbladeId = config.vbladeId;
    this._stats.internalValue = config.stats;
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

  // vblade_id - computed: false, optional: false, required: true
  private _vbladeId?: number; 
  public get vbladeId() {
    return this.getNumberAttribute('vblade_id');
  }
  public set vbladeId(value: number) {
    this._vbladeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vbladeIdInput() {
    return this._vbladeId;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderVcsVbladesStatStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVcsVbladesStatStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vblade_id: cdktf.numberToTerraform(this._vbladeId),
      stats: dataThunderVcsVbladesStatStatsStatsToTerraform(this._stats.internalValue),
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
      vblade_id: {
        value: cdktf.numberToHclTerraform(this._vbladeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stats: {
        value: dataThunderVcsVbladesStatStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVcsVbladesStatStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
