// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVcsStatStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#id DataThunderVcsStatStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#stats DataThunderVcsStatStats#stats}
  */
  readonly stats?: DataThunderVcsStatStatsStats;
}
export interface DataThunderVcsStatStatsStats {
  /**
  * counter of aVCS daemon message handle failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#daemon_msg_handle_failure DataThunderVcsStatStats#daemon_msg_handle_failure}
  */
  readonly daemonMsgHandleFailure?: number;
  /**
  * counter of aVCS daemon invalid message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#daemon_msg_inval DataThunderVcsStatStats#daemon_msg_inval}
  */
  readonly daemonMsgInval?: number;
  /**
  * times of aVCS election start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#daemon_n_elec_start DataThunderVcsStatStats#daemon_n_elec_start}
  */
  readonly daemonNElecStart?: number;
  /**
  * times of aVCS election stop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#daemon_n_elec_stop DataThunderVcsStatStats#daemon_n_elec_stop}
  */
  readonly daemonNElecStop?: number;
  /**
  * counter of aVCS daemon receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#daemon_n_recv DataThunderVcsStatStats#daemon_n_recv}
  */
  readonly daemonNRecv?: number;
  /**
  * counter of aVCS daemon sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#daemon_n_sent DataThunderVcsStatStats#daemon_n_sent}
  */
  readonly daemonNSent?: number;
  /**
  * bytes of aVCS daemon receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#daemon_recv_bytes DataThunderVcsStatStats#daemon_recv_bytes}
  */
  readonly daemonRecvBytes?: number;
  /**
  * counter of aVCS daemon receive error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#daemon_recv_err DataThunderVcsStatStats#daemon_recv_err}
  */
  readonly daemonRecvErr?: number;
  /**
  * counter of aVCS daemon sent error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#daemon_send_err DataThunderVcsStatStats#daemon_send_err}
  */
  readonly daemonSendErr?: number;
  /**
  * bytes of aVCS daemon sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#daemon_sent_bytes DataThunderVcsStatStats#daemon_sent_bytes}
  */
  readonly daemonSentBytes?: number;
  /**
  * Enter vMaster counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_enter_master DataThunderVcsStatStats#elect_enter_master}
  */
  readonly electEnterMaster?: number;
  /**
  * Enter MC counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_enter_master_cand_stat DataThunderVcsStatStats#elect_enter_master_cand_stat}
  */
  readonly electEnterMasterCandStat?: number;
  /**
  * Enter MTO counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_enter_master_take_over DataThunderVcsStatStats#elect_enter_master_take_over}
  */
  readonly electEnterMasterTakeOver?: number;
  /**
  * Enter vBlade counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_enter_slave DataThunderVcsStatStats#elect_enter_slave}
  */
  readonly electEnterSlave?: number;
  /**
  * Leave vMaster counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_leave_master DataThunderVcsStatStats#elect_leave_master}
  */
  readonly electLeaveMaster?: number;
  /**
  * Leave MC counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_leave_master_cand DataThunderVcsStatStats#elect_leave_master_cand}
  */
  readonly electLeaveMasterCand?: number;
  /**
  * Leave MTO counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_leave_master_take_over DataThunderVcsStatStats#elect_leave_master_take_over}
  */
  readonly electLeaveMasterTakeOver?: number;
  /**
  * Leave vBlade counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_leave_slave DataThunderVcsStatStats#elect_leave_slave}
  */
  readonly electLeaveSlave?: number;
  /**
  * vMaster discard challenger counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_master_discard_challenger DataThunderVcsStatStats#elect_master_discard_challenger}
  */
  readonly electMasterDiscardChallenger?: number;
  /**
  * vMaster discard neighbour counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_master_discard_neighbour DataThunderVcsStatStats#elect_master_discard_neighbour}
  */
  readonly electMasterDiscardNeighbour?: number;
  /**
  * vMaster duplicate challenger counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_master_dup_challenger DataThunderVcsStatStats#elect_master_dup_challenger}
  */
  readonly electMasterDupChallenger?: number;
  /**
  * vMaster duplicate neighbours counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_master_dup_neighbour DataThunderVcsStatStats#elect_master_dup_neighbour}
  */
  readonly electMasterDupNeighbour?: number;
  /**
  * vMaster new challenger counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_master_new_challenger DataThunderVcsStatStats#elect_master_new_challenger}
  */
  readonly electMasterNewChallenger?: number;
  /**
  * vMaster replace challenger counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_master_replace_challenger DataThunderVcsStatStats#elect_master_replace_challenger}
  */
  readonly electMasterReplaceChallenger?: number;
  /**
  * vMaster too many neighbours counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_master_too_many_neighbour DataThunderVcsStatStats#elect_master_too_many_neighbour}
  */
  readonly electMasterTooManyNeighbour?: number;
  /**
  * MC discarded vMaster-PDU counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_mc_discard_master DataThunderVcsStatStats#elect_mc_discard_master}
  */
  readonly electMcDiscardMaster?: number;
  /**
  * MC duplicate vMaster-PDU counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_mc_dup_masterr DataThunderVcsStatStats#elect_mc_dup_masterr}
  */
  readonly electMcDupMasterr?: number;
  /**
  * MC replaced vMaster-PDU counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_mc_replace_master DataThunderVcsStatStats#elect_mc_replace_master}
  */
  readonly electMcReplaceMaster?: number;
  /**
  * MC timers reset by MC-PDU counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_mc_reset_timer_by_mc DataThunderVcsStatStats#elect_mc_reset_timer_by_mc}
  */
  readonly electMcResetTimerByMc?: number;
  /**
  * MC timers reset by MTO-PDU counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_mc_reset_timer_by_mto DataThunderVcsStatStats#elect_mc_reset_timer_by_mto}
  */
  readonly electMcResetTimerByMto?: number;
  /**
  * PDU Chassis-ID mismatch counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_pdu_cluster_mismatch DataThunderVcsStatStats#elect_pdu_cluster_mismatch}
  */
  readonly electPduClusterMismatch?: number;
  /**
  * PDU Device-ID collision counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_pdu_dev_id_collision DataThunderVcsStatStats#elect_pdu_dev_id_collision}
  */
  readonly electPduDevIdCollision?: number;
  /**
  * PDU HW mismatch counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_pdu_hw_mismatch DataThunderVcsStatStats#elect_pdu_hw_mismatch}
  */
  readonly electPduHwMismatch?: number;
  /**
  * Invalid PDU counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_pdu_inval DataThunderVcsStatStats#elect_pdu_inval}
  */
  readonly electPduInval?: number;
  /**
  * Received MC-PDU counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_pdu_master_cand_recv DataThunderVcsStatStats#elect_pdu_master_cand_recv}
  */
  readonly electPduMasterCandRecv?: number;
  /**
  * Sent MC-PDU counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_pdu_master_cand_sent DataThunderVcsStatStats#elect_pdu_master_cand_sent}
  */
  readonly electPduMasterCandSent?: number;
  /**
  * Received vMaster-PDU counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_pdu_master_recv DataThunderVcsStatStats#elect_pdu_master_recv}
  */
  readonly electPduMasterRecv?: number;
  /**
  * Sent vMaster-PDU counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_pdu_master_sent DataThunderVcsStatStats#elect_pdu_master_sent}
  */
  readonly electPduMasterSent?: number;
  /**
  * Received MTO-PDU counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_pdu_master_take_over_recv DataThunderVcsStatStats#elect_pdu_master_take_over_recv}
  */
  readonly electPduMasterTakeOverRecv?: number;
  /**
  * Sent MTO-PDU counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_pdu_master_take_over_sent DataThunderVcsStatStats#elect_pdu_master_take_over_sent}
  */
  readonly electPduMasterTakeOverSent?: number;
  /**
  * Received vBlade-PDU counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_pdu_slave_recv DataThunderVcsStatStats#elect_pdu_slave_recv}
  */
  readonly electPduSlaveRecv?: number;
  /**
  * Sent vBlade-PDU counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_pdu_slave_sent DataThunderVcsStatStats#elect_pdu_slave_sent}
  */
  readonly electPduSlaveSent?: number;
  /**
  * Received Unknown-PDU counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_pdu_unknown_recv DataThunderVcsStatStats#elect_pdu_unknown_recv}
  */
  readonly electPduUnknownRecv?: number;
  /**
  * Sent Unknown-PDU counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_pdu_unknown_sent DataThunderVcsStatStats#elect_pdu_unknown_sent}
  */
  readonly electPduUnknownSent?: number;
  /**
  * Receive bytes counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_recv_byte DataThunderVcsStatStats#elect_recv_byte}
  */
  readonly electRecvByte?: number;
  /**
  * Receive error counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_recv_err DataThunderVcsStatStats#elect_recv_err}
  */
  readonly electRecvErr?: number;
  /**
  * Send bytes counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_send_byte DataThunderVcsStatStats#elect_send_byte}
  */
  readonly electSendByte?: number;
  /**
  * Send error counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_send_err DataThunderVcsStatStats#elect_send_err}
  */
  readonly electSendErr?: number;
  /**
  * vBlade discard challenger counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_slave_discard_challenger DataThunderVcsStatStats#elect_slave_discard_challenger}
  */
  readonly electSlaveDiscardChallenger?: number;
  /**
  * vBlade discard neighbour counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_slave_discard_neighbour DataThunderVcsStatStats#elect_slave_discard_neighbour}
  */
  readonly electSlaveDiscardNeighbour?: number;
  /**
  * vBlade duplicate challenger counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_slave_dup_challenger DataThunderVcsStatStats#elect_slave_dup_challenger}
  */
  readonly electSlaveDupChallenger?: number;
  /**
  * vBlade duplicate vMaster-PDU counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_slave_dup_master DataThunderVcsStatStats#elect_slave_dup_master}
  */
  readonly electSlaveDupMaster?: number;
  /**
  * send vBlade duplicate neighbours of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_slave_dup_neighbour DataThunderVcsStatStats#elect_slave_dup_neighbour}
  */
  readonly electSlaveDupNeighbour?: number;
  /**
  * vBlade replace challenger counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_slave_replace_challenger DataThunderVcsStatStats#elect_slave_replace_challenger}
  */
  readonly electSlaveReplaceChallenger?: number;
  /**
  * vBlade too many neighbours counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#elect_slave_too_many_neighbour DataThunderVcsStatStats#elect_slave_too_many_neighbour}
  */
  readonly electSlaveTooManyNeighbour?: number;
  /**
  * Received vMaster Configuration Updates counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#master_cfg_upd DataThunderVcsStatStats#master_cfg_upd}
  */
  readonly masterCfgUpd?: number;
  /**
  * vMaster Local Configuration Update Errors counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#master_cfg_upd_l_fail DataThunderVcsStatStats#master_cfg_upd_l_fail}
  */
  readonly masterCfgUpdLFail?: number;
  /**
  * vMaster Configuration Update Notif Errors counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#master_cfg_upd_notif_err DataThunderVcsStatStats#master_cfg_upd_notif_err}
  */
  readonly masterCfgUpdNotifErr?: number;
  /**
  * vMaster Remote Configuration Update Errors counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#master_cfg_upd_r_fail DataThunderVcsStatStats#master_cfg_upd_r_fail}
  */
  readonly masterCfgUpdRFail?: number;
  /**
  * vMaster Configuration Update Result Errors counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#master_cfg_upd_result_err DataThunderVcsStatStats#master_cfg_upd_result_err}
  */
  readonly masterCfgUpdResultErr?: number;
  /**
  * vMaster vBlades Started counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#master_slave_start DataThunderVcsStatStats#master_slave_start}
  */
  readonly masterSlaveStart?: number;
  /**
  * vMaster Start vBlade Errors counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#master_slave_start_err DataThunderVcsStatStats#master_slave_start_err}
  */
  readonly masterSlaveStartErr?: number;
  /**
  * vMaster vBlades stopped counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#master_slave_stop DataThunderVcsStatStats#master_slave_stop}
  */
  readonly masterSlaveStop?: number;
  /**
  * vBlade Received Configuration Updates counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#slave_cfg_upd DataThunderVcsStatStats#slave_cfg_upd}
  */
  readonly slaveCfgUpd?: number;
  /**
  * vBlade Configuration Update Failures counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#slave_cfg_upd_fail DataThunderVcsStatStats#slave_cfg_upd_fail}
  */
  readonly slaveCfgUpdFail?: number;
  /**
  * vBlade Received Keepalives counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#slave_keepalive DataThunderVcsStatStats#slave_keepalive}
  */
  readonly slaveKeepalive?: number;
  /**
  * vBlade Invalid Messages counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#slave_msg_inval DataThunderVcsStatStats#slave_msg_inval}
  */
  readonly slaveMsgInval?: number;
  /**
  * vBlade Received Messages counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#slave_n_recv DataThunderVcsStatStats#slave_n_recv}
  */
  readonly slaveNRecv?: number;
  /**
  * vBlade Sent Messages counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#slave_n_sent DataThunderVcsStatStats#slave_n_sent}
  */
  readonly slaveNSent?: number;
  /**
  * vBlade Received Bytes counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#slave_recv_bytes DataThunderVcsStatStats#slave_recv_bytes}
  */
  readonly slaveRecvBytes?: number;
  /**
  * vBlade Receive Errors counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#slave_recv_err DataThunderVcsStatStats#slave_recv_err}
  */
  readonly slaveRecvErr?: number;
  /**
  * vBlade Send Errors counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#slave_send_err DataThunderVcsStatStats#slave_send_err}
  */
  readonly slaveSendErr?: number;
  /**
  * vBlade Sent Bytes counter of aVCS election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#slave_sent_bytes DataThunderVcsStatStats#slave_sent_bytes}
  */
  readonly slaveSentBytes?: number;
}

export function dataThunderVcsStatStatsStatsToTerraform(struct?: DataThunderVcsStatStatsStatsOutputReference | DataThunderVcsStatStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daemon_msg_handle_failure: cdktf.numberToTerraform(struct!.daemonMsgHandleFailure),
    daemon_msg_inval: cdktf.numberToTerraform(struct!.daemonMsgInval),
    daemon_n_elec_start: cdktf.numberToTerraform(struct!.daemonNElecStart),
    daemon_n_elec_stop: cdktf.numberToTerraform(struct!.daemonNElecStop),
    daemon_n_recv: cdktf.numberToTerraform(struct!.daemonNRecv),
    daemon_n_sent: cdktf.numberToTerraform(struct!.daemonNSent),
    daemon_recv_bytes: cdktf.numberToTerraform(struct!.daemonRecvBytes),
    daemon_recv_err: cdktf.numberToTerraform(struct!.daemonRecvErr),
    daemon_send_err: cdktf.numberToTerraform(struct!.daemonSendErr),
    daemon_sent_bytes: cdktf.numberToTerraform(struct!.daemonSentBytes),
    elect_enter_master: cdktf.numberToTerraform(struct!.electEnterMaster),
    elect_enter_master_cand_stat: cdktf.numberToTerraform(struct!.electEnterMasterCandStat),
    elect_enter_master_take_over: cdktf.numberToTerraform(struct!.electEnterMasterTakeOver),
    elect_enter_slave: cdktf.numberToTerraform(struct!.electEnterSlave),
    elect_leave_master: cdktf.numberToTerraform(struct!.electLeaveMaster),
    elect_leave_master_cand: cdktf.numberToTerraform(struct!.electLeaveMasterCand),
    elect_leave_master_take_over: cdktf.numberToTerraform(struct!.electLeaveMasterTakeOver),
    elect_leave_slave: cdktf.numberToTerraform(struct!.electLeaveSlave),
    elect_master_discard_challenger: cdktf.numberToTerraform(struct!.electMasterDiscardChallenger),
    elect_master_discard_neighbour: cdktf.numberToTerraform(struct!.electMasterDiscardNeighbour),
    elect_master_dup_challenger: cdktf.numberToTerraform(struct!.electMasterDupChallenger),
    elect_master_dup_neighbour: cdktf.numberToTerraform(struct!.electMasterDupNeighbour),
    elect_master_new_challenger: cdktf.numberToTerraform(struct!.electMasterNewChallenger),
    elect_master_replace_challenger: cdktf.numberToTerraform(struct!.electMasterReplaceChallenger),
    elect_master_too_many_neighbour: cdktf.numberToTerraform(struct!.electMasterTooManyNeighbour),
    elect_mc_discard_master: cdktf.numberToTerraform(struct!.electMcDiscardMaster),
    elect_mc_dup_masterr: cdktf.numberToTerraform(struct!.electMcDupMasterr),
    elect_mc_replace_master: cdktf.numberToTerraform(struct!.electMcReplaceMaster),
    elect_mc_reset_timer_by_mc: cdktf.numberToTerraform(struct!.electMcResetTimerByMc),
    elect_mc_reset_timer_by_mto: cdktf.numberToTerraform(struct!.electMcResetTimerByMto),
    elect_pdu_cluster_mismatch: cdktf.numberToTerraform(struct!.electPduClusterMismatch),
    elect_pdu_dev_id_collision: cdktf.numberToTerraform(struct!.electPduDevIdCollision),
    elect_pdu_hw_mismatch: cdktf.numberToTerraform(struct!.electPduHwMismatch),
    elect_pdu_inval: cdktf.numberToTerraform(struct!.electPduInval),
    elect_pdu_master_cand_recv: cdktf.numberToTerraform(struct!.electPduMasterCandRecv),
    elect_pdu_master_cand_sent: cdktf.numberToTerraform(struct!.electPduMasterCandSent),
    elect_pdu_master_recv: cdktf.numberToTerraform(struct!.electPduMasterRecv),
    elect_pdu_master_sent: cdktf.numberToTerraform(struct!.electPduMasterSent),
    elect_pdu_master_take_over_recv: cdktf.numberToTerraform(struct!.electPduMasterTakeOverRecv),
    elect_pdu_master_take_over_sent: cdktf.numberToTerraform(struct!.electPduMasterTakeOverSent),
    elect_pdu_slave_recv: cdktf.numberToTerraform(struct!.electPduSlaveRecv),
    elect_pdu_slave_sent: cdktf.numberToTerraform(struct!.electPduSlaveSent),
    elect_pdu_unknown_recv: cdktf.numberToTerraform(struct!.electPduUnknownRecv),
    elect_pdu_unknown_sent: cdktf.numberToTerraform(struct!.electPduUnknownSent),
    elect_recv_byte: cdktf.numberToTerraform(struct!.electRecvByte),
    elect_recv_err: cdktf.numberToTerraform(struct!.electRecvErr),
    elect_send_byte: cdktf.numberToTerraform(struct!.electSendByte),
    elect_send_err: cdktf.numberToTerraform(struct!.electSendErr),
    elect_slave_discard_challenger: cdktf.numberToTerraform(struct!.electSlaveDiscardChallenger),
    elect_slave_discard_neighbour: cdktf.numberToTerraform(struct!.electSlaveDiscardNeighbour),
    elect_slave_dup_challenger: cdktf.numberToTerraform(struct!.electSlaveDupChallenger),
    elect_slave_dup_master: cdktf.numberToTerraform(struct!.electSlaveDupMaster),
    elect_slave_dup_neighbour: cdktf.numberToTerraform(struct!.electSlaveDupNeighbour),
    elect_slave_replace_challenger: cdktf.numberToTerraform(struct!.electSlaveReplaceChallenger),
    elect_slave_too_many_neighbour: cdktf.numberToTerraform(struct!.electSlaveTooManyNeighbour),
    master_cfg_upd: cdktf.numberToTerraform(struct!.masterCfgUpd),
    master_cfg_upd_l_fail: cdktf.numberToTerraform(struct!.masterCfgUpdLFail),
    master_cfg_upd_notif_err: cdktf.numberToTerraform(struct!.masterCfgUpdNotifErr),
    master_cfg_upd_r_fail: cdktf.numberToTerraform(struct!.masterCfgUpdRFail),
    master_cfg_upd_result_err: cdktf.numberToTerraform(struct!.masterCfgUpdResultErr),
    master_slave_start: cdktf.numberToTerraform(struct!.masterSlaveStart),
    master_slave_start_err: cdktf.numberToTerraform(struct!.masterSlaveStartErr),
    master_slave_stop: cdktf.numberToTerraform(struct!.masterSlaveStop),
    slave_cfg_upd: cdktf.numberToTerraform(struct!.slaveCfgUpd),
    slave_cfg_upd_fail: cdktf.numberToTerraform(struct!.slaveCfgUpdFail),
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


export function dataThunderVcsStatStatsStatsToHclTerraform(struct?: DataThunderVcsStatStatsStatsOutputReference | DataThunderVcsStatStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daemon_msg_handle_failure: {
      value: cdktf.numberToHclTerraform(struct!.daemonMsgHandleFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    daemon_msg_inval: {
      value: cdktf.numberToHclTerraform(struct!.daemonMsgInval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    daemon_n_elec_start: {
      value: cdktf.numberToHclTerraform(struct!.daemonNElecStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    daemon_n_elec_stop: {
      value: cdktf.numberToHclTerraform(struct!.daemonNElecStop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    daemon_n_recv: {
      value: cdktf.numberToHclTerraform(struct!.daemonNRecv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    daemon_n_sent: {
      value: cdktf.numberToHclTerraform(struct!.daemonNSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    daemon_recv_bytes: {
      value: cdktf.numberToHclTerraform(struct!.daemonRecvBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    daemon_recv_err: {
      value: cdktf.numberToHclTerraform(struct!.daemonRecvErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    daemon_send_err: {
      value: cdktf.numberToHclTerraform(struct!.daemonSendErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    daemon_sent_bytes: {
      value: cdktf.numberToHclTerraform(struct!.daemonSentBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_enter_master: {
      value: cdktf.numberToHclTerraform(struct!.electEnterMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_enter_master_cand_stat: {
      value: cdktf.numberToHclTerraform(struct!.electEnterMasterCandStat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_enter_master_take_over: {
      value: cdktf.numberToHclTerraform(struct!.electEnterMasterTakeOver),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_enter_slave: {
      value: cdktf.numberToHclTerraform(struct!.electEnterSlave),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_leave_master: {
      value: cdktf.numberToHclTerraform(struct!.electLeaveMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_leave_master_cand: {
      value: cdktf.numberToHclTerraform(struct!.electLeaveMasterCand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_leave_master_take_over: {
      value: cdktf.numberToHclTerraform(struct!.electLeaveMasterTakeOver),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_leave_slave: {
      value: cdktf.numberToHclTerraform(struct!.electLeaveSlave),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_master_discard_challenger: {
      value: cdktf.numberToHclTerraform(struct!.electMasterDiscardChallenger),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_master_discard_neighbour: {
      value: cdktf.numberToHclTerraform(struct!.electMasterDiscardNeighbour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_master_dup_challenger: {
      value: cdktf.numberToHclTerraform(struct!.electMasterDupChallenger),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_master_dup_neighbour: {
      value: cdktf.numberToHclTerraform(struct!.electMasterDupNeighbour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_master_new_challenger: {
      value: cdktf.numberToHclTerraform(struct!.electMasterNewChallenger),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_master_replace_challenger: {
      value: cdktf.numberToHclTerraform(struct!.electMasterReplaceChallenger),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_master_too_many_neighbour: {
      value: cdktf.numberToHclTerraform(struct!.electMasterTooManyNeighbour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_mc_discard_master: {
      value: cdktf.numberToHclTerraform(struct!.electMcDiscardMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_mc_dup_masterr: {
      value: cdktf.numberToHclTerraform(struct!.electMcDupMasterr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_mc_replace_master: {
      value: cdktf.numberToHclTerraform(struct!.electMcReplaceMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_mc_reset_timer_by_mc: {
      value: cdktf.numberToHclTerraform(struct!.electMcResetTimerByMc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_mc_reset_timer_by_mto: {
      value: cdktf.numberToHclTerraform(struct!.electMcResetTimerByMto),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_pdu_cluster_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.electPduClusterMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_pdu_dev_id_collision: {
      value: cdktf.numberToHclTerraform(struct!.electPduDevIdCollision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_pdu_hw_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.electPduHwMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_pdu_inval: {
      value: cdktf.numberToHclTerraform(struct!.electPduInval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_pdu_master_cand_recv: {
      value: cdktf.numberToHclTerraform(struct!.electPduMasterCandRecv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_pdu_master_cand_sent: {
      value: cdktf.numberToHclTerraform(struct!.electPduMasterCandSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_pdu_master_recv: {
      value: cdktf.numberToHclTerraform(struct!.electPduMasterRecv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_pdu_master_sent: {
      value: cdktf.numberToHclTerraform(struct!.electPduMasterSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_pdu_master_take_over_recv: {
      value: cdktf.numberToHclTerraform(struct!.electPduMasterTakeOverRecv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_pdu_master_take_over_sent: {
      value: cdktf.numberToHclTerraform(struct!.electPduMasterTakeOverSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_pdu_slave_recv: {
      value: cdktf.numberToHclTerraform(struct!.electPduSlaveRecv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_pdu_slave_sent: {
      value: cdktf.numberToHclTerraform(struct!.electPduSlaveSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_pdu_unknown_recv: {
      value: cdktf.numberToHclTerraform(struct!.electPduUnknownRecv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_pdu_unknown_sent: {
      value: cdktf.numberToHclTerraform(struct!.electPduUnknownSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_recv_byte: {
      value: cdktf.numberToHclTerraform(struct!.electRecvByte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_recv_err: {
      value: cdktf.numberToHclTerraform(struct!.electRecvErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_send_byte: {
      value: cdktf.numberToHclTerraform(struct!.electSendByte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_send_err: {
      value: cdktf.numberToHclTerraform(struct!.electSendErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_slave_discard_challenger: {
      value: cdktf.numberToHclTerraform(struct!.electSlaveDiscardChallenger),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_slave_discard_neighbour: {
      value: cdktf.numberToHclTerraform(struct!.electSlaveDiscardNeighbour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_slave_dup_challenger: {
      value: cdktf.numberToHclTerraform(struct!.electSlaveDupChallenger),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_slave_dup_master: {
      value: cdktf.numberToHclTerraform(struct!.electSlaveDupMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_slave_dup_neighbour: {
      value: cdktf.numberToHclTerraform(struct!.electSlaveDupNeighbour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_slave_replace_challenger: {
      value: cdktf.numberToHclTerraform(struct!.electSlaveReplaceChallenger),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_slave_too_many_neighbour: {
      value: cdktf.numberToHclTerraform(struct!.electSlaveTooManyNeighbour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    master_cfg_upd: {
      value: cdktf.numberToHclTerraform(struct!.masterCfgUpd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    master_cfg_upd_l_fail: {
      value: cdktf.numberToHclTerraform(struct!.masterCfgUpdLFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    master_cfg_upd_notif_err: {
      value: cdktf.numberToHclTerraform(struct!.masterCfgUpdNotifErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    master_cfg_upd_r_fail: {
      value: cdktf.numberToHclTerraform(struct!.masterCfgUpdRFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    master_cfg_upd_result_err: {
      value: cdktf.numberToHclTerraform(struct!.masterCfgUpdResultErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    master_slave_start: {
      value: cdktf.numberToHclTerraform(struct!.masterSlaveStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    master_slave_start_err: {
      value: cdktf.numberToHclTerraform(struct!.masterSlaveStartErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    master_slave_stop: {
      value: cdktf.numberToHclTerraform(struct!.masterSlaveStop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slave_cfg_upd: {
      value: cdktf.numberToHclTerraform(struct!.slaveCfgUpd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slave_cfg_upd_fail: {
      value: cdktf.numberToHclTerraform(struct!.slaveCfgUpdFail),
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

export class DataThunderVcsStatStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVcsStatStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daemonMsgHandleFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.daemonMsgHandleFailure = this._daemonMsgHandleFailure;
    }
    if (this._daemonMsgInval !== undefined) {
      hasAnyValues = true;
      internalValueResult.daemonMsgInval = this._daemonMsgInval;
    }
    if (this._daemonNElecStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.daemonNElecStart = this._daemonNElecStart;
    }
    if (this._daemonNElecStop !== undefined) {
      hasAnyValues = true;
      internalValueResult.daemonNElecStop = this._daemonNElecStop;
    }
    if (this._daemonNRecv !== undefined) {
      hasAnyValues = true;
      internalValueResult.daemonNRecv = this._daemonNRecv;
    }
    if (this._daemonNSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.daemonNSent = this._daemonNSent;
    }
    if (this._daemonRecvBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.daemonRecvBytes = this._daemonRecvBytes;
    }
    if (this._daemonRecvErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.daemonRecvErr = this._daemonRecvErr;
    }
    if (this._daemonSendErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.daemonSendErr = this._daemonSendErr;
    }
    if (this._daemonSentBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.daemonSentBytes = this._daemonSentBytes;
    }
    if (this._electEnterMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.electEnterMaster = this._electEnterMaster;
    }
    if (this._electEnterMasterCandStat !== undefined) {
      hasAnyValues = true;
      internalValueResult.electEnterMasterCandStat = this._electEnterMasterCandStat;
    }
    if (this._electEnterMasterTakeOver !== undefined) {
      hasAnyValues = true;
      internalValueResult.electEnterMasterTakeOver = this._electEnterMasterTakeOver;
    }
    if (this._electEnterSlave !== undefined) {
      hasAnyValues = true;
      internalValueResult.electEnterSlave = this._electEnterSlave;
    }
    if (this._electLeaveMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.electLeaveMaster = this._electLeaveMaster;
    }
    if (this._electLeaveMasterCand !== undefined) {
      hasAnyValues = true;
      internalValueResult.electLeaveMasterCand = this._electLeaveMasterCand;
    }
    if (this._electLeaveMasterTakeOver !== undefined) {
      hasAnyValues = true;
      internalValueResult.electLeaveMasterTakeOver = this._electLeaveMasterTakeOver;
    }
    if (this._electLeaveSlave !== undefined) {
      hasAnyValues = true;
      internalValueResult.electLeaveSlave = this._electLeaveSlave;
    }
    if (this._electMasterDiscardChallenger !== undefined) {
      hasAnyValues = true;
      internalValueResult.electMasterDiscardChallenger = this._electMasterDiscardChallenger;
    }
    if (this._electMasterDiscardNeighbour !== undefined) {
      hasAnyValues = true;
      internalValueResult.electMasterDiscardNeighbour = this._electMasterDiscardNeighbour;
    }
    if (this._electMasterDupChallenger !== undefined) {
      hasAnyValues = true;
      internalValueResult.electMasterDupChallenger = this._electMasterDupChallenger;
    }
    if (this._electMasterDupNeighbour !== undefined) {
      hasAnyValues = true;
      internalValueResult.electMasterDupNeighbour = this._electMasterDupNeighbour;
    }
    if (this._electMasterNewChallenger !== undefined) {
      hasAnyValues = true;
      internalValueResult.electMasterNewChallenger = this._electMasterNewChallenger;
    }
    if (this._electMasterReplaceChallenger !== undefined) {
      hasAnyValues = true;
      internalValueResult.electMasterReplaceChallenger = this._electMasterReplaceChallenger;
    }
    if (this._electMasterTooManyNeighbour !== undefined) {
      hasAnyValues = true;
      internalValueResult.electMasterTooManyNeighbour = this._electMasterTooManyNeighbour;
    }
    if (this._electMcDiscardMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.electMcDiscardMaster = this._electMcDiscardMaster;
    }
    if (this._electMcDupMasterr !== undefined) {
      hasAnyValues = true;
      internalValueResult.electMcDupMasterr = this._electMcDupMasterr;
    }
    if (this._electMcReplaceMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.electMcReplaceMaster = this._electMcReplaceMaster;
    }
    if (this._electMcResetTimerByMc !== undefined) {
      hasAnyValues = true;
      internalValueResult.electMcResetTimerByMc = this._electMcResetTimerByMc;
    }
    if (this._electMcResetTimerByMto !== undefined) {
      hasAnyValues = true;
      internalValueResult.electMcResetTimerByMto = this._electMcResetTimerByMto;
    }
    if (this._electPduClusterMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.electPduClusterMismatch = this._electPduClusterMismatch;
    }
    if (this._electPduDevIdCollision !== undefined) {
      hasAnyValues = true;
      internalValueResult.electPduDevIdCollision = this._electPduDevIdCollision;
    }
    if (this._electPduHwMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.electPduHwMismatch = this._electPduHwMismatch;
    }
    if (this._electPduInval !== undefined) {
      hasAnyValues = true;
      internalValueResult.electPduInval = this._electPduInval;
    }
    if (this._electPduMasterCandRecv !== undefined) {
      hasAnyValues = true;
      internalValueResult.electPduMasterCandRecv = this._electPduMasterCandRecv;
    }
    if (this._electPduMasterCandSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.electPduMasterCandSent = this._electPduMasterCandSent;
    }
    if (this._electPduMasterRecv !== undefined) {
      hasAnyValues = true;
      internalValueResult.electPduMasterRecv = this._electPduMasterRecv;
    }
    if (this._electPduMasterSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.electPduMasterSent = this._electPduMasterSent;
    }
    if (this._electPduMasterTakeOverRecv !== undefined) {
      hasAnyValues = true;
      internalValueResult.electPduMasterTakeOverRecv = this._electPduMasterTakeOverRecv;
    }
    if (this._electPduMasterTakeOverSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.electPduMasterTakeOverSent = this._electPduMasterTakeOverSent;
    }
    if (this._electPduSlaveRecv !== undefined) {
      hasAnyValues = true;
      internalValueResult.electPduSlaveRecv = this._electPduSlaveRecv;
    }
    if (this._electPduSlaveSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.electPduSlaveSent = this._electPduSlaveSent;
    }
    if (this._electPduUnknownRecv !== undefined) {
      hasAnyValues = true;
      internalValueResult.electPduUnknownRecv = this._electPduUnknownRecv;
    }
    if (this._electPduUnknownSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.electPduUnknownSent = this._electPduUnknownSent;
    }
    if (this._electRecvByte !== undefined) {
      hasAnyValues = true;
      internalValueResult.electRecvByte = this._electRecvByte;
    }
    if (this._electRecvErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.electRecvErr = this._electRecvErr;
    }
    if (this._electSendByte !== undefined) {
      hasAnyValues = true;
      internalValueResult.electSendByte = this._electSendByte;
    }
    if (this._electSendErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.electSendErr = this._electSendErr;
    }
    if (this._electSlaveDiscardChallenger !== undefined) {
      hasAnyValues = true;
      internalValueResult.electSlaveDiscardChallenger = this._electSlaveDiscardChallenger;
    }
    if (this._electSlaveDiscardNeighbour !== undefined) {
      hasAnyValues = true;
      internalValueResult.electSlaveDiscardNeighbour = this._electSlaveDiscardNeighbour;
    }
    if (this._electSlaveDupChallenger !== undefined) {
      hasAnyValues = true;
      internalValueResult.electSlaveDupChallenger = this._electSlaveDupChallenger;
    }
    if (this._electSlaveDupMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.electSlaveDupMaster = this._electSlaveDupMaster;
    }
    if (this._electSlaveDupNeighbour !== undefined) {
      hasAnyValues = true;
      internalValueResult.electSlaveDupNeighbour = this._electSlaveDupNeighbour;
    }
    if (this._electSlaveReplaceChallenger !== undefined) {
      hasAnyValues = true;
      internalValueResult.electSlaveReplaceChallenger = this._electSlaveReplaceChallenger;
    }
    if (this._electSlaveTooManyNeighbour !== undefined) {
      hasAnyValues = true;
      internalValueResult.electSlaveTooManyNeighbour = this._electSlaveTooManyNeighbour;
    }
    if (this._masterCfgUpd !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterCfgUpd = this._masterCfgUpd;
    }
    if (this._masterCfgUpdLFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterCfgUpdLFail = this._masterCfgUpdLFail;
    }
    if (this._masterCfgUpdNotifErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterCfgUpdNotifErr = this._masterCfgUpdNotifErr;
    }
    if (this._masterCfgUpdRFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterCfgUpdRFail = this._masterCfgUpdRFail;
    }
    if (this._masterCfgUpdResultErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterCfgUpdResultErr = this._masterCfgUpdResultErr;
    }
    if (this._masterSlaveStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterSlaveStart = this._masterSlaveStart;
    }
    if (this._masterSlaveStartErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterSlaveStartErr = this._masterSlaveStartErr;
    }
    if (this._masterSlaveStop !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterSlaveStop = this._masterSlaveStop;
    }
    if (this._slaveCfgUpd !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaveCfgUpd = this._slaveCfgUpd;
    }
    if (this._slaveCfgUpdFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaveCfgUpdFail = this._slaveCfgUpdFail;
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

  public set internalValue(value: DataThunderVcsStatStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daemonMsgHandleFailure = undefined;
      this._daemonMsgInval = undefined;
      this._daemonNElecStart = undefined;
      this._daemonNElecStop = undefined;
      this._daemonNRecv = undefined;
      this._daemonNSent = undefined;
      this._daemonRecvBytes = undefined;
      this._daemonRecvErr = undefined;
      this._daemonSendErr = undefined;
      this._daemonSentBytes = undefined;
      this._electEnterMaster = undefined;
      this._electEnterMasterCandStat = undefined;
      this._electEnterMasterTakeOver = undefined;
      this._electEnterSlave = undefined;
      this._electLeaveMaster = undefined;
      this._electLeaveMasterCand = undefined;
      this._electLeaveMasterTakeOver = undefined;
      this._electLeaveSlave = undefined;
      this._electMasterDiscardChallenger = undefined;
      this._electMasterDiscardNeighbour = undefined;
      this._electMasterDupChallenger = undefined;
      this._electMasterDupNeighbour = undefined;
      this._electMasterNewChallenger = undefined;
      this._electMasterReplaceChallenger = undefined;
      this._electMasterTooManyNeighbour = undefined;
      this._electMcDiscardMaster = undefined;
      this._electMcDupMasterr = undefined;
      this._electMcReplaceMaster = undefined;
      this._electMcResetTimerByMc = undefined;
      this._electMcResetTimerByMto = undefined;
      this._electPduClusterMismatch = undefined;
      this._electPduDevIdCollision = undefined;
      this._electPduHwMismatch = undefined;
      this._electPduInval = undefined;
      this._electPduMasterCandRecv = undefined;
      this._electPduMasterCandSent = undefined;
      this._electPduMasterRecv = undefined;
      this._electPduMasterSent = undefined;
      this._electPduMasterTakeOverRecv = undefined;
      this._electPduMasterTakeOverSent = undefined;
      this._electPduSlaveRecv = undefined;
      this._electPduSlaveSent = undefined;
      this._electPduUnknownRecv = undefined;
      this._electPduUnknownSent = undefined;
      this._electRecvByte = undefined;
      this._electRecvErr = undefined;
      this._electSendByte = undefined;
      this._electSendErr = undefined;
      this._electSlaveDiscardChallenger = undefined;
      this._electSlaveDiscardNeighbour = undefined;
      this._electSlaveDupChallenger = undefined;
      this._electSlaveDupMaster = undefined;
      this._electSlaveDupNeighbour = undefined;
      this._electSlaveReplaceChallenger = undefined;
      this._electSlaveTooManyNeighbour = undefined;
      this._masterCfgUpd = undefined;
      this._masterCfgUpdLFail = undefined;
      this._masterCfgUpdNotifErr = undefined;
      this._masterCfgUpdRFail = undefined;
      this._masterCfgUpdResultErr = undefined;
      this._masterSlaveStart = undefined;
      this._masterSlaveStartErr = undefined;
      this._masterSlaveStop = undefined;
      this._slaveCfgUpd = undefined;
      this._slaveCfgUpdFail = undefined;
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
      this._daemonMsgHandleFailure = value.daemonMsgHandleFailure;
      this._daemonMsgInval = value.daemonMsgInval;
      this._daemonNElecStart = value.daemonNElecStart;
      this._daemonNElecStop = value.daemonNElecStop;
      this._daemonNRecv = value.daemonNRecv;
      this._daemonNSent = value.daemonNSent;
      this._daemonRecvBytes = value.daemonRecvBytes;
      this._daemonRecvErr = value.daemonRecvErr;
      this._daemonSendErr = value.daemonSendErr;
      this._daemonSentBytes = value.daemonSentBytes;
      this._electEnterMaster = value.electEnterMaster;
      this._electEnterMasterCandStat = value.electEnterMasterCandStat;
      this._electEnterMasterTakeOver = value.electEnterMasterTakeOver;
      this._electEnterSlave = value.electEnterSlave;
      this._electLeaveMaster = value.electLeaveMaster;
      this._electLeaveMasterCand = value.electLeaveMasterCand;
      this._electLeaveMasterTakeOver = value.electLeaveMasterTakeOver;
      this._electLeaveSlave = value.electLeaveSlave;
      this._electMasterDiscardChallenger = value.electMasterDiscardChallenger;
      this._electMasterDiscardNeighbour = value.electMasterDiscardNeighbour;
      this._electMasterDupChallenger = value.electMasterDupChallenger;
      this._electMasterDupNeighbour = value.electMasterDupNeighbour;
      this._electMasterNewChallenger = value.electMasterNewChallenger;
      this._electMasterReplaceChallenger = value.electMasterReplaceChallenger;
      this._electMasterTooManyNeighbour = value.electMasterTooManyNeighbour;
      this._electMcDiscardMaster = value.electMcDiscardMaster;
      this._electMcDupMasterr = value.electMcDupMasterr;
      this._electMcReplaceMaster = value.electMcReplaceMaster;
      this._electMcResetTimerByMc = value.electMcResetTimerByMc;
      this._electMcResetTimerByMto = value.electMcResetTimerByMto;
      this._electPduClusterMismatch = value.electPduClusterMismatch;
      this._electPduDevIdCollision = value.electPduDevIdCollision;
      this._electPduHwMismatch = value.electPduHwMismatch;
      this._electPduInval = value.electPduInval;
      this._electPduMasterCandRecv = value.electPduMasterCandRecv;
      this._electPduMasterCandSent = value.electPduMasterCandSent;
      this._electPduMasterRecv = value.electPduMasterRecv;
      this._electPduMasterSent = value.electPduMasterSent;
      this._electPduMasterTakeOverRecv = value.electPduMasterTakeOverRecv;
      this._electPduMasterTakeOverSent = value.electPduMasterTakeOverSent;
      this._electPduSlaveRecv = value.electPduSlaveRecv;
      this._electPduSlaveSent = value.electPduSlaveSent;
      this._electPduUnknownRecv = value.electPduUnknownRecv;
      this._electPduUnknownSent = value.electPduUnknownSent;
      this._electRecvByte = value.electRecvByte;
      this._electRecvErr = value.electRecvErr;
      this._electSendByte = value.electSendByte;
      this._electSendErr = value.electSendErr;
      this._electSlaveDiscardChallenger = value.electSlaveDiscardChallenger;
      this._electSlaveDiscardNeighbour = value.electSlaveDiscardNeighbour;
      this._electSlaveDupChallenger = value.electSlaveDupChallenger;
      this._electSlaveDupMaster = value.electSlaveDupMaster;
      this._electSlaveDupNeighbour = value.electSlaveDupNeighbour;
      this._electSlaveReplaceChallenger = value.electSlaveReplaceChallenger;
      this._electSlaveTooManyNeighbour = value.electSlaveTooManyNeighbour;
      this._masterCfgUpd = value.masterCfgUpd;
      this._masterCfgUpdLFail = value.masterCfgUpdLFail;
      this._masterCfgUpdNotifErr = value.masterCfgUpdNotifErr;
      this._masterCfgUpdRFail = value.masterCfgUpdRFail;
      this._masterCfgUpdResultErr = value.masterCfgUpdResultErr;
      this._masterSlaveStart = value.masterSlaveStart;
      this._masterSlaveStartErr = value.masterSlaveStartErr;
      this._masterSlaveStop = value.masterSlaveStop;
      this._slaveCfgUpd = value.slaveCfgUpd;
      this._slaveCfgUpdFail = value.slaveCfgUpdFail;
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

  // daemon_msg_handle_failure - computed: false, optional: true, required: false
  private _daemonMsgHandleFailure?: number; 
  public get daemonMsgHandleFailure() {
    return this.getNumberAttribute('daemon_msg_handle_failure');
  }
  public set daemonMsgHandleFailure(value: number) {
    this._daemonMsgHandleFailure = value;
  }
  public resetDaemonMsgHandleFailure() {
    this._daemonMsgHandleFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonMsgHandleFailureInput() {
    return this._daemonMsgHandleFailure;
  }

  // daemon_msg_inval - computed: false, optional: true, required: false
  private _daemonMsgInval?: number; 
  public get daemonMsgInval() {
    return this.getNumberAttribute('daemon_msg_inval');
  }
  public set daemonMsgInval(value: number) {
    this._daemonMsgInval = value;
  }
  public resetDaemonMsgInval() {
    this._daemonMsgInval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonMsgInvalInput() {
    return this._daemonMsgInval;
  }

  // daemon_n_elec_start - computed: false, optional: true, required: false
  private _daemonNElecStart?: number; 
  public get daemonNElecStart() {
    return this.getNumberAttribute('daemon_n_elec_start');
  }
  public set daemonNElecStart(value: number) {
    this._daemonNElecStart = value;
  }
  public resetDaemonNElecStart() {
    this._daemonNElecStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonNElecStartInput() {
    return this._daemonNElecStart;
  }

  // daemon_n_elec_stop - computed: false, optional: true, required: false
  private _daemonNElecStop?: number; 
  public get daemonNElecStop() {
    return this.getNumberAttribute('daemon_n_elec_stop');
  }
  public set daemonNElecStop(value: number) {
    this._daemonNElecStop = value;
  }
  public resetDaemonNElecStop() {
    this._daemonNElecStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonNElecStopInput() {
    return this._daemonNElecStop;
  }

  // daemon_n_recv - computed: false, optional: true, required: false
  private _daemonNRecv?: number; 
  public get daemonNRecv() {
    return this.getNumberAttribute('daemon_n_recv');
  }
  public set daemonNRecv(value: number) {
    this._daemonNRecv = value;
  }
  public resetDaemonNRecv() {
    this._daemonNRecv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonNRecvInput() {
    return this._daemonNRecv;
  }

  // daemon_n_sent - computed: false, optional: true, required: false
  private _daemonNSent?: number; 
  public get daemonNSent() {
    return this.getNumberAttribute('daemon_n_sent');
  }
  public set daemonNSent(value: number) {
    this._daemonNSent = value;
  }
  public resetDaemonNSent() {
    this._daemonNSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonNSentInput() {
    return this._daemonNSent;
  }

  // daemon_recv_bytes - computed: false, optional: true, required: false
  private _daemonRecvBytes?: number; 
  public get daemonRecvBytes() {
    return this.getNumberAttribute('daemon_recv_bytes');
  }
  public set daemonRecvBytes(value: number) {
    this._daemonRecvBytes = value;
  }
  public resetDaemonRecvBytes() {
    this._daemonRecvBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonRecvBytesInput() {
    return this._daemonRecvBytes;
  }

  // daemon_recv_err - computed: false, optional: true, required: false
  private _daemonRecvErr?: number; 
  public get daemonRecvErr() {
    return this.getNumberAttribute('daemon_recv_err');
  }
  public set daemonRecvErr(value: number) {
    this._daemonRecvErr = value;
  }
  public resetDaemonRecvErr() {
    this._daemonRecvErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonRecvErrInput() {
    return this._daemonRecvErr;
  }

  // daemon_send_err - computed: false, optional: true, required: false
  private _daemonSendErr?: number; 
  public get daemonSendErr() {
    return this.getNumberAttribute('daemon_send_err');
  }
  public set daemonSendErr(value: number) {
    this._daemonSendErr = value;
  }
  public resetDaemonSendErr() {
    this._daemonSendErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonSendErrInput() {
    return this._daemonSendErr;
  }

  // daemon_sent_bytes - computed: false, optional: true, required: false
  private _daemonSentBytes?: number; 
  public get daemonSentBytes() {
    return this.getNumberAttribute('daemon_sent_bytes');
  }
  public set daemonSentBytes(value: number) {
    this._daemonSentBytes = value;
  }
  public resetDaemonSentBytes() {
    this._daemonSentBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonSentBytesInput() {
    return this._daemonSentBytes;
  }

  // elect_enter_master - computed: false, optional: true, required: false
  private _electEnterMaster?: number; 
  public get electEnterMaster() {
    return this.getNumberAttribute('elect_enter_master');
  }
  public set electEnterMaster(value: number) {
    this._electEnterMaster = value;
  }
  public resetElectEnterMaster() {
    this._electEnterMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electEnterMasterInput() {
    return this._electEnterMaster;
  }

  // elect_enter_master_cand_stat - computed: false, optional: true, required: false
  private _electEnterMasterCandStat?: number; 
  public get electEnterMasterCandStat() {
    return this.getNumberAttribute('elect_enter_master_cand_stat');
  }
  public set electEnterMasterCandStat(value: number) {
    this._electEnterMasterCandStat = value;
  }
  public resetElectEnterMasterCandStat() {
    this._electEnterMasterCandStat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electEnterMasterCandStatInput() {
    return this._electEnterMasterCandStat;
  }

  // elect_enter_master_take_over - computed: false, optional: true, required: false
  private _electEnterMasterTakeOver?: number; 
  public get electEnterMasterTakeOver() {
    return this.getNumberAttribute('elect_enter_master_take_over');
  }
  public set electEnterMasterTakeOver(value: number) {
    this._electEnterMasterTakeOver = value;
  }
  public resetElectEnterMasterTakeOver() {
    this._electEnterMasterTakeOver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electEnterMasterTakeOverInput() {
    return this._electEnterMasterTakeOver;
  }

  // elect_enter_slave - computed: false, optional: true, required: false
  private _electEnterSlave?: number; 
  public get electEnterSlave() {
    return this.getNumberAttribute('elect_enter_slave');
  }
  public set electEnterSlave(value: number) {
    this._electEnterSlave = value;
  }
  public resetElectEnterSlave() {
    this._electEnterSlave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electEnterSlaveInput() {
    return this._electEnterSlave;
  }

  // elect_leave_master - computed: false, optional: true, required: false
  private _electLeaveMaster?: number; 
  public get electLeaveMaster() {
    return this.getNumberAttribute('elect_leave_master');
  }
  public set electLeaveMaster(value: number) {
    this._electLeaveMaster = value;
  }
  public resetElectLeaveMaster() {
    this._electLeaveMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electLeaveMasterInput() {
    return this._electLeaveMaster;
  }

  // elect_leave_master_cand - computed: false, optional: true, required: false
  private _electLeaveMasterCand?: number; 
  public get electLeaveMasterCand() {
    return this.getNumberAttribute('elect_leave_master_cand');
  }
  public set electLeaveMasterCand(value: number) {
    this._electLeaveMasterCand = value;
  }
  public resetElectLeaveMasterCand() {
    this._electLeaveMasterCand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electLeaveMasterCandInput() {
    return this._electLeaveMasterCand;
  }

  // elect_leave_master_take_over - computed: false, optional: true, required: false
  private _electLeaveMasterTakeOver?: number; 
  public get electLeaveMasterTakeOver() {
    return this.getNumberAttribute('elect_leave_master_take_over');
  }
  public set electLeaveMasterTakeOver(value: number) {
    this._electLeaveMasterTakeOver = value;
  }
  public resetElectLeaveMasterTakeOver() {
    this._electLeaveMasterTakeOver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electLeaveMasterTakeOverInput() {
    return this._electLeaveMasterTakeOver;
  }

  // elect_leave_slave - computed: false, optional: true, required: false
  private _electLeaveSlave?: number; 
  public get electLeaveSlave() {
    return this.getNumberAttribute('elect_leave_slave');
  }
  public set electLeaveSlave(value: number) {
    this._electLeaveSlave = value;
  }
  public resetElectLeaveSlave() {
    this._electLeaveSlave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electLeaveSlaveInput() {
    return this._electLeaveSlave;
  }

  // elect_master_discard_challenger - computed: false, optional: true, required: false
  private _electMasterDiscardChallenger?: number; 
  public get electMasterDiscardChallenger() {
    return this.getNumberAttribute('elect_master_discard_challenger');
  }
  public set electMasterDiscardChallenger(value: number) {
    this._electMasterDiscardChallenger = value;
  }
  public resetElectMasterDiscardChallenger() {
    this._electMasterDiscardChallenger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electMasterDiscardChallengerInput() {
    return this._electMasterDiscardChallenger;
  }

  // elect_master_discard_neighbour - computed: false, optional: true, required: false
  private _electMasterDiscardNeighbour?: number; 
  public get electMasterDiscardNeighbour() {
    return this.getNumberAttribute('elect_master_discard_neighbour');
  }
  public set electMasterDiscardNeighbour(value: number) {
    this._electMasterDiscardNeighbour = value;
  }
  public resetElectMasterDiscardNeighbour() {
    this._electMasterDiscardNeighbour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electMasterDiscardNeighbourInput() {
    return this._electMasterDiscardNeighbour;
  }

  // elect_master_dup_challenger - computed: false, optional: true, required: false
  private _electMasterDupChallenger?: number; 
  public get electMasterDupChallenger() {
    return this.getNumberAttribute('elect_master_dup_challenger');
  }
  public set electMasterDupChallenger(value: number) {
    this._electMasterDupChallenger = value;
  }
  public resetElectMasterDupChallenger() {
    this._electMasterDupChallenger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electMasterDupChallengerInput() {
    return this._electMasterDupChallenger;
  }

  // elect_master_dup_neighbour - computed: false, optional: true, required: false
  private _electMasterDupNeighbour?: number; 
  public get electMasterDupNeighbour() {
    return this.getNumberAttribute('elect_master_dup_neighbour');
  }
  public set electMasterDupNeighbour(value: number) {
    this._electMasterDupNeighbour = value;
  }
  public resetElectMasterDupNeighbour() {
    this._electMasterDupNeighbour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electMasterDupNeighbourInput() {
    return this._electMasterDupNeighbour;
  }

  // elect_master_new_challenger - computed: false, optional: true, required: false
  private _electMasterNewChallenger?: number; 
  public get electMasterNewChallenger() {
    return this.getNumberAttribute('elect_master_new_challenger');
  }
  public set electMasterNewChallenger(value: number) {
    this._electMasterNewChallenger = value;
  }
  public resetElectMasterNewChallenger() {
    this._electMasterNewChallenger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electMasterNewChallengerInput() {
    return this._electMasterNewChallenger;
  }

  // elect_master_replace_challenger - computed: false, optional: true, required: false
  private _electMasterReplaceChallenger?: number; 
  public get electMasterReplaceChallenger() {
    return this.getNumberAttribute('elect_master_replace_challenger');
  }
  public set electMasterReplaceChallenger(value: number) {
    this._electMasterReplaceChallenger = value;
  }
  public resetElectMasterReplaceChallenger() {
    this._electMasterReplaceChallenger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electMasterReplaceChallengerInput() {
    return this._electMasterReplaceChallenger;
  }

  // elect_master_too_many_neighbour - computed: false, optional: true, required: false
  private _electMasterTooManyNeighbour?: number; 
  public get electMasterTooManyNeighbour() {
    return this.getNumberAttribute('elect_master_too_many_neighbour');
  }
  public set electMasterTooManyNeighbour(value: number) {
    this._electMasterTooManyNeighbour = value;
  }
  public resetElectMasterTooManyNeighbour() {
    this._electMasterTooManyNeighbour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electMasterTooManyNeighbourInput() {
    return this._electMasterTooManyNeighbour;
  }

  // elect_mc_discard_master - computed: false, optional: true, required: false
  private _electMcDiscardMaster?: number; 
  public get electMcDiscardMaster() {
    return this.getNumberAttribute('elect_mc_discard_master');
  }
  public set electMcDiscardMaster(value: number) {
    this._electMcDiscardMaster = value;
  }
  public resetElectMcDiscardMaster() {
    this._electMcDiscardMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electMcDiscardMasterInput() {
    return this._electMcDiscardMaster;
  }

  // elect_mc_dup_masterr - computed: false, optional: true, required: false
  private _electMcDupMasterr?: number; 
  public get electMcDupMasterr() {
    return this.getNumberAttribute('elect_mc_dup_masterr');
  }
  public set electMcDupMasterr(value: number) {
    this._electMcDupMasterr = value;
  }
  public resetElectMcDupMasterr() {
    this._electMcDupMasterr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electMcDupMasterrInput() {
    return this._electMcDupMasterr;
  }

  // elect_mc_replace_master - computed: false, optional: true, required: false
  private _electMcReplaceMaster?: number; 
  public get electMcReplaceMaster() {
    return this.getNumberAttribute('elect_mc_replace_master');
  }
  public set electMcReplaceMaster(value: number) {
    this._electMcReplaceMaster = value;
  }
  public resetElectMcReplaceMaster() {
    this._electMcReplaceMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electMcReplaceMasterInput() {
    return this._electMcReplaceMaster;
  }

  // elect_mc_reset_timer_by_mc - computed: false, optional: true, required: false
  private _electMcResetTimerByMc?: number; 
  public get electMcResetTimerByMc() {
    return this.getNumberAttribute('elect_mc_reset_timer_by_mc');
  }
  public set electMcResetTimerByMc(value: number) {
    this._electMcResetTimerByMc = value;
  }
  public resetElectMcResetTimerByMc() {
    this._electMcResetTimerByMc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electMcResetTimerByMcInput() {
    return this._electMcResetTimerByMc;
  }

  // elect_mc_reset_timer_by_mto - computed: false, optional: true, required: false
  private _electMcResetTimerByMto?: number; 
  public get electMcResetTimerByMto() {
    return this.getNumberAttribute('elect_mc_reset_timer_by_mto');
  }
  public set electMcResetTimerByMto(value: number) {
    this._electMcResetTimerByMto = value;
  }
  public resetElectMcResetTimerByMto() {
    this._electMcResetTimerByMto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electMcResetTimerByMtoInput() {
    return this._electMcResetTimerByMto;
  }

  // elect_pdu_cluster_mismatch - computed: false, optional: true, required: false
  private _electPduClusterMismatch?: number; 
  public get electPduClusterMismatch() {
    return this.getNumberAttribute('elect_pdu_cluster_mismatch');
  }
  public set electPduClusterMismatch(value: number) {
    this._electPduClusterMismatch = value;
  }
  public resetElectPduClusterMismatch() {
    this._electPduClusterMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electPduClusterMismatchInput() {
    return this._electPduClusterMismatch;
  }

  // elect_pdu_dev_id_collision - computed: false, optional: true, required: false
  private _electPduDevIdCollision?: number; 
  public get electPduDevIdCollision() {
    return this.getNumberAttribute('elect_pdu_dev_id_collision');
  }
  public set electPduDevIdCollision(value: number) {
    this._electPduDevIdCollision = value;
  }
  public resetElectPduDevIdCollision() {
    this._electPduDevIdCollision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electPduDevIdCollisionInput() {
    return this._electPduDevIdCollision;
  }

  // elect_pdu_hw_mismatch - computed: false, optional: true, required: false
  private _electPduHwMismatch?: number; 
  public get electPduHwMismatch() {
    return this.getNumberAttribute('elect_pdu_hw_mismatch');
  }
  public set electPduHwMismatch(value: number) {
    this._electPduHwMismatch = value;
  }
  public resetElectPduHwMismatch() {
    this._electPduHwMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electPduHwMismatchInput() {
    return this._electPduHwMismatch;
  }

  // elect_pdu_inval - computed: false, optional: true, required: false
  private _electPduInval?: number; 
  public get electPduInval() {
    return this.getNumberAttribute('elect_pdu_inval');
  }
  public set electPduInval(value: number) {
    this._electPduInval = value;
  }
  public resetElectPduInval() {
    this._electPduInval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electPduInvalInput() {
    return this._electPduInval;
  }

  // elect_pdu_master_cand_recv - computed: false, optional: true, required: false
  private _electPduMasterCandRecv?: number; 
  public get electPduMasterCandRecv() {
    return this.getNumberAttribute('elect_pdu_master_cand_recv');
  }
  public set electPduMasterCandRecv(value: number) {
    this._electPduMasterCandRecv = value;
  }
  public resetElectPduMasterCandRecv() {
    this._electPduMasterCandRecv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electPduMasterCandRecvInput() {
    return this._electPduMasterCandRecv;
  }

  // elect_pdu_master_cand_sent - computed: false, optional: true, required: false
  private _electPduMasterCandSent?: number; 
  public get electPduMasterCandSent() {
    return this.getNumberAttribute('elect_pdu_master_cand_sent');
  }
  public set electPduMasterCandSent(value: number) {
    this._electPduMasterCandSent = value;
  }
  public resetElectPduMasterCandSent() {
    this._electPduMasterCandSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electPduMasterCandSentInput() {
    return this._electPduMasterCandSent;
  }

  // elect_pdu_master_recv - computed: false, optional: true, required: false
  private _electPduMasterRecv?: number; 
  public get electPduMasterRecv() {
    return this.getNumberAttribute('elect_pdu_master_recv');
  }
  public set electPduMasterRecv(value: number) {
    this._electPduMasterRecv = value;
  }
  public resetElectPduMasterRecv() {
    this._electPduMasterRecv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electPduMasterRecvInput() {
    return this._electPduMasterRecv;
  }

  // elect_pdu_master_sent - computed: false, optional: true, required: false
  private _electPduMasterSent?: number; 
  public get electPduMasterSent() {
    return this.getNumberAttribute('elect_pdu_master_sent');
  }
  public set electPduMasterSent(value: number) {
    this._electPduMasterSent = value;
  }
  public resetElectPduMasterSent() {
    this._electPduMasterSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electPduMasterSentInput() {
    return this._electPduMasterSent;
  }

  // elect_pdu_master_take_over_recv - computed: false, optional: true, required: false
  private _electPduMasterTakeOverRecv?: number; 
  public get electPduMasterTakeOverRecv() {
    return this.getNumberAttribute('elect_pdu_master_take_over_recv');
  }
  public set electPduMasterTakeOverRecv(value: number) {
    this._electPduMasterTakeOverRecv = value;
  }
  public resetElectPduMasterTakeOverRecv() {
    this._electPduMasterTakeOverRecv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electPduMasterTakeOverRecvInput() {
    return this._electPduMasterTakeOverRecv;
  }

  // elect_pdu_master_take_over_sent - computed: false, optional: true, required: false
  private _electPduMasterTakeOverSent?: number; 
  public get electPduMasterTakeOverSent() {
    return this.getNumberAttribute('elect_pdu_master_take_over_sent');
  }
  public set electPduMasterTakeOverSent(value: number) {
    this._electPduMasterTakeOverSent = value;
  }
  public resetElectPduMasterTakeOverSent() {
    this._electPduMasterTakeOverSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electPduMasterTakeOverSentInput() {
    return this._electPduMasterTakeOverSent;
  }

  // elect_pdu_slave_recv - computed: false, optional: true, required: false
  private _electPduSlaveRecv?: number; 
  public get electPduSlaveRecv() {
    return this.getNumberAttribute('elect_pdu_slave_recv');
  }
  public set electPduSlaveRecv(value: number) {
    this._electPduSlaveRecv = value;
  }
  public resetElectPduSlaveRecv() {
    this._electPduSlaveRecv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electPduSlaveRecvInput() {
    return this._electPduSlaveRecv;
  }

  // elect_pdu_slave_sent - computed: false, optional: true, required: false
  private _electPduSlaveSent?: number; 
  public get electPduSlaveSent() {
    return this.getNumberAttribute('elect_pdu_slave_sent');
  }
  public set electPduSlaveSent(value: number) {
    this._electPduSlaveSent = value;
  }
  public resetElectPduSlaveSent() {
    this._electPduSlaveSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electPduSlaveSentInput() {
    return this._electPduSlaveSent;
  }

  // elect_pdu_unknown_recv - computed: false, optional: true, required: false
  private _electPduUnknownRecv?: number; 
  public get electPduUnknownRecv() {
    return this.getNumberAttribute('elect_pdu_unknown_recv');
  }
  public set electPduUnknownRecv(value: number) {
    this._electPduUnknownRecv = value;
  }
  public resetElectPduUnknownRecv() {
    this._electPduUnknownRecv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electPduUnknownRecvInput() {
    return this._electPduUnknownRecv;
  }

  // elect_pdu_unknown_sent - computed: false, optional: true, required: false
  private _electPduUnknownSent?: number; 
  public get electPduUnknownSent() {
    return this.getNumberAttribute('elect_pdu_unknown_sent');
  }
  public set electPduUnknownSent(value: number) {
    this._electPduUnknownSent = value;
  }
  public resetElectPduUnknownSent() {
    this._electPduUnknownSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electPduUnknownSentInput() {
    return this._electPduUnknownSent;
  }

  // elect_recv_byte - computed: false, optional: true, required: false
  private _electRecvByte?: number; 
  public get electRecvByte() {
    return this.getNumberAttribute('elect_recv_byte');
  }
  public set electRecvByte(value: number) {
    this._electRecvByte = value;
  }
  public resetElectRecvByte() {
    this._electRecvByte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electRecvByteInput() {
    return this._electRecvByte;
  }

  // elect_recv_err - computed: false, optional: true, required: false
  private _electRecvErr?: number; 
  public get electRecvErr() {
    return this.getNumberAttribute('elect_recv_err');
  }
  public set electRecvErr(value: number) {
    this._electRecvErr = value;
  }
  public resetElectRecvErr() {
    this._electRecvErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electRecvErrInput() {
    return this._electRecvErr;
  }

  // elect_send_byte - computed: false, optional: true, required: false
  private _electSendByte?: number; 
  public get electSendByte() {
    return this.getNumberAttribute('elect_send_byte');
  }
  public set electSendByte(value: number) {
    this._electSendByte = value;
  }
  public resetElectSendByte() {
    this._electSendByte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electSendByteInput() {
    return this._electSendByte;
  }

  // elect_send_err - computed: false, optional: true, required: false
  private _electSendErr?: number; 
  public get electSendErr() {
    return this.getNumberAttribute('elect_send_err');
  }
  public set electSendErr(value: number) {
    this._electSendErr = value;
  }
  public resetElectSendErr() {
    this._electSendErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electSendErrInput() {
    return this._electSendErr;
  }

  // elect_slave_discard_challenger - computed: false, optional: true, required: false
  private _electSlaveDiscardChallenger?: number; 
  public get electSlaveDiscardChallenger() {
    return this.getNumberAttribute('elect_slave_discard_challenger');
  }
  public set electSlaveDiscardChallenger(value: number) {
    this._electSlaveDiscardChallenger = value;
  }
  public resetElectSlaveDiscardChallenger() {
    this._electSlaveDiscardChallenger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electSlaveDiscardChallengerInput() {
    return this._electSlaveDiscardChallenger;
  }

  // elect_slave_discard_neighbour - computed: false, optional: true, required: false
  private _electSlaveDiscardNeighbour?: number; 
  public get electSlaveDiscardNeighbour() {
    return this.getNumberAttribute('elect_slave_discard_neighbour');
  }
  public set electSlaveDiscardNeighbour(value: number) {
    this._electSlaveDiscardNeighbour = value;
  }
  public resetElectSlaveDiscardNeighbour() {
    this._electSlaveDiscardNeighbour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electSlaveDiscardNeighbourInput() {
    return this._electSlaveDiscardNeighbour;
  }

  // elect_slave_dup_challenger - computed: false, optional: true, required: false
  private _electSlaveDupChallenger?: number; 
  public get electSlaveDupChallenger() {
    return this.getNumberAttribute('elect_slave_dup_challenger');
  }
  public set electSlaveDupChallenger(value: number) {
    this._electSlaveDupChallenger = value;
  }
  public resetElectSlaveDupChallenger() {
    this._electSlaveDupChallenger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electSlaveDupChallengerInput() {
    return this._electSlaveDupChallenger;
  }

  // elect_slave_dup_master - computed: false, optional: true, required: false
  private _electSlaveDupMaster?: number; 
  public get electSlaveDupMaster() {
    return this.getNumberAttribute('elect_slave_dup_master');
  }
  public set electSlaveDupMaster(value: number) {
    this._electSlaveDupMaster = value;
  }
  public resetElectSlaveDupMaster() {
    this._electSlaveDupMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electSlaveDupMasterInput() {
    return this._electSlaveDupMaster;
  }

  // elect_slave_dup_neighbour - computed: false, optional: true, required: false
  private _electSlaveDupNeighbour?: number; 
  public get electSlaveDupNeighbour() {
    return this.getNumberAttribute('elect_slave_dup_neighbour');
  }
  public set electSlaveDupNeighbour(value: number) {
    this._electSlaveDupNeighbour = value;
  }
  public resetElectSlaveDupNeighbour() {
    this._electSlaveDupNeighbour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electSlaveDupNeighbourInput() {
    return this._electSlaveDupNeighbour;
  }

  // elect_slave_replace_challenger - computed: false, optional: true, required: false
  private _electSlaveReplaceChallenger?: number; 
  public get electSlaveReplaceChallenger() {
    return this.getNumberAttribute('elect_slave_replace_challenger');
  }
  public set electSlaveReplaceChallenger(value: number) {
    this._electSlaveReplaceChallenger = value;
  }
  public resetElectSlaveReplaceChallenger() {
    this._electSlaveReplaceChallenger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electSlaveReplaceChallengerInput() {
    return this._electSlaveReplaceChallenger;
  }

  // elect_slave_too_many_neighbour - computed: false, optional: true, required: false
  private _electSlaveTooManyNeighbour?: number; 
  public get electSlaveTooManyNeighbour() {
    return this.getNumberAttribute('elect_slave_too_many_neighbour');
  }
  public set electSlaveTooManyNeighbour(value: number) {
    this._electSlaveTooManyNeighbour = value;
  }
  public resetElectSlaveTooManyNeighbour() {
    this._electSlaveTooManyNeighbour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electSlaveTooManyNeighbourInput() {
    return this._electSlaveTooManyNeighbour;
  }

  // master_cfg_upd - computed: false, optional: true, required: false
  private _masterCfgUpd?: number; 
  public get masterCfgUpd() {
    return this.getNumberAttribute('master_cfg_upd');
  }
  public set masterCfgUpd(value: number) {
    this._masterCfgUpd = value;
  }
  public resetMasterCfgUpd() {
    this._masterCfgUpd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterCfgUpdInput() {
    return this._masterCfgUpd;
  }

  // master_cfg_upd_l_fail - computed: false, optional: true, required: false
  private _masterCfgUpdLFail?: number; 
  public get masterCfgUpdLFail() {
    return this.getNumberAttribute('master_cfg_upd_l_fail');
  }
  public set masterCfgUpdLFail(value: number) {
    this._masterCfgUpdLFail = value;
  }
  public resetMasterCfgUpdLFail() {
    this._masterCfgUpdLFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterCfgUpdLFailInput() {
    return this._masterCfgUpdLFail;
  }

  // master_cfg_upd_notif_err - computed: false, optional: true, required: false
  private _masterCfgUpdNotifErr?: number; 
  public get masterCfgUpdNotifErr() {
    return this.getNumberAttribute('master_cfg_upd_notif_err');
  }
  public set masterCfgUpdNotifErr(value: number) {
    this._masterCfgUpdNotifErr = value;
  }
  public resetMasterCfgUpdNotifErr() {
    this._masterCfgUpdNotifErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterCfgUpdNotifErrInput() {
    return this._masterCfgUpdNotifErr;
  }

  // master_cfg_upd_r_fail - computed: false, optional: true, required: false
  private _masterCfgUpdRFail?: number; 
  public get masterCfgUpdRFail() {
    return this.getNumberAttribute('master_cfg_upd_r_fail');
  }
  public set masterCfgUpdRFail(value: number) {
    this._masterCfgUpdRFail = value;
  }
  public resetMasterCfgUpdRFail() {
    this._masterCfgUpdRFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterCfgUpdRFailInput() {
    return this._masterCfgUpdRFail;
  }

  // master_cfg_upd_result_err - computed: false, optional: true, required: false
  private _masterCfgUpdResultErr?: number; 
  public get masterCfgUpdResultErr() {
    return this.getNumberAttribute('master_cfg_upd_result_err');
  }
  public set masterCfgUpdResultErr(value: number) {
    this._masterCfgUpdResultErr = value;
  }
  public resetMasterCfgUpdResultErr() {
    this._masterCfgUpdResultErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterCfgUpdResultErrInput() {
    return this._masterCfgUpdResultErr;
  }

  // master_slave_start - computed: false, optional: true, required: false
  private _masterSlaveStart?: number; 
  public get masterSlaveStart() {
    return this.getNumberAttribute('master_slave_start');
  }
  public set masterSlaveStart(value: number) {
    this._masterSlaveStart = value;
  }
  public resetMasterSlaveStart() {
    this._masterSlaveStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterSlaveStartInput() {
    return this._masterSlaveStart;
  }

  // master_slave_start_err - computed: false, optional: true, required: false
  private _masterSlaveStartErr?: number; 
  public get masterSlaveStartErr() {
    return this.getNumberAttribute('master_slave_start_err');
  }
  public set masterSlaveStartErr(value: number) {
    this._masterSlaveStartErr = value;
  }
  public resetMasterSlaveStartErr() {
    this._masterSlaveStartErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterSlaveStartErrInput() {
    return this._masterSlaveStartErr;
  }

  // master_slave_stop - computed: false, optional: true, required: false
  private _masterSlaveStop?: number; 
  public get masterSlaveStop() {
    return this.getNumberAttribute('master_slave_stop');
  }
  public set masterSlaveStop(value: number) {
    this._masterSlaveStop = value;
  }
  public resetMasterSlaveStop() {
    this._masterSlaveStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterSlaveStopInput() {
    return this._masterSlaveStop;
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

  // slave_cfg_upd_fail - computed: false, optional: true, required: false
  private _slaveCfgUpdFail?: number; 
  public get slaveCfgUpdFail() {
    return this.getNumberAttribute('slave_cfg_upd_fail');
  }
  public set slaveCfgUpdFail(value: number) {
    this._slaveCfgUpdFail = value;
  }
  public resetSlaveCfgUpdFail() {
    this._slaveCfgUpdFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveCfgUpdFailInput() {
    return this._slaveCfgUpdFail;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats thunder_vcs_stat_stats}
*/
export class DataThunderVcsStatStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vcs_stat_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVcsStatStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVcsStatStats to import
  * @param importFromId The id of the existing DataThunderVcsStatStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVcsStatStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vcs_stat_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_stat_stats thunder_vcs_stat_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVcsStatStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVcsStatStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vcs_stat_stats',
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderVcsStatStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVcsStatStatsStats) {
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
      stats: dataThunderVcsStatStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderVcsStatStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVcsStatStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
