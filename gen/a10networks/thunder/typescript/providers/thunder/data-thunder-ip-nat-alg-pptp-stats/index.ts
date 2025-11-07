// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ip_nat_alg_pptp_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderIpNatAlgPptpStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ip_nat_alg_pptp_stats#id DataThunderIpNatAlgPptpStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ip_nat_alg_pptp_stats#stats DataThunderIpNatAlgPptpStats#stats}
  */
  readonly stats?: DataThunderIpNatAlgPptpStatsStats;
}
export interface DataThunderIpNatAlgPptpStatsStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ip_nat_alg_pptp_stats#current_gre_sessions DataThunderIpNatAlgPptpStats#current_gre_sessions}
  */
  readonly currentGreSessions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ip_nat_alg_pptp_stats#current_smp_sessions DataThunderIpNatAlgPptpStats#current_smp_sessions}
  */
  readonly currentSmpSessions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ip_nat_alg_pptp_stats#mismatched_pac_call_id DataThunderIpNatAlgPptpStats#mismatched_pac_call_id}
  */
  readonly mismatchedPacCallId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ip_nat_alg_pptp_stats#mismatched_pns_call_id DataThunderIpNatAlgPptpStats#mismatched_pns_call_id}
  */
  readonly mismatchedPnsCallId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ip_nat_alg_pptp_stats#no_matching_gre_session DataThunderIpNatAlgPptpStats#no_matching_gre_session}
  */
  readonly noMatchingGreSession?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ip_nat_alg_pptp_stats#retransmitted_pac_message DataThunderIpNatAlgPptpStats#retransmitted_pac_message}
  */
  readonly retransmittedPacMessage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ip_nat_alg_pptp_stats#retransmitted_pns_message DataThunderIpNatAlgPptpStats#retransmitted_pns_message}
  */
  readonly retransmittedPnsMessage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ip_nat_alg_pptp_stats#smp_session_creation_failure DataThunderIpNatAlgPptpStats#smp_session_creation_failure}
  */
  readonly smpSessionCreationFailure?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ip_nat_alg_pptp_stats#truncated_gre_packet DataThunderIpNatAlgPptpStats#truncated_gre_packet}
  */
  readonly truncatedGrePacket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ip_nat_alg_pptp_stats#truncated_pac_message DataThunderIpNatAlgPptpStats#truncated_pac_message}
  */
  readonly truncatedPacMessage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ip_nat_alg_pptp_stats#truncated_pns_message DataThunderIpNatAlgPptpStats#truncated_pns_message}
  */
  readonly truncatedPnsMessage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ip_nat_alg_pptp_stats#unknown_gre_version DataThunderIpNatAlgPptpStats#unknown_gre_version}
  */
  readonly unknownGreVersion?: number;
}

export function dataThunderIpNatAlgPptpStatsStatsToTerraform(struct?: DataThunderIpNatAlgPptpStatsStatsOutputReference | DataThunderIpNatAlgPptpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_gre_sessions: cdktf.numberToTerraform(struct!.currentGreSessions),
    current_smp_sessions: cdktf.numberToTerraform(struct!.currentSmpSessions),
    mismatched_pac_call_id: cdktf.numberToTerraform(struct!.mismatchedPacCallId),
    mismatched_pns_call_id: cdktf.numberToTerraform(struct!.mismatchedPnsCallId),
    no_matching_gre_session: cdktf.numberToTerraform(struct!.noMatchingGreSession),
    retransmitted_pac_message: cdktf.numberToTerraform(struct!.retransmittedPacMessage),
    retransmitted_pns_message: cdktf.numberToTerraform(struct!.retransmittedPnsMessage),
    smp_session_creation_failure: cdktf.numberToTerraform(struct!.smpSessionCreationFailure),
    truncated_gre_packet: cdktf.numberToTerraform(struct!.truncatedGrePacket),
    truncated_pac_message: cdktf.numberToTerraform(struct!.truncatedPacMessage),
    truncated_pns_message: cdktf.numberToTerraform(struct!.truncatedPnsMessage),
    unknown_gre_version: cdktf.numberToTerraform(struct!.unknownGreVersion),
  }
}


export function dataThunderIpNatAlgPptpStatsStatsToHclTerraform(struct?: DataThunderIpNatAlgPptpStatsStatsOutputReference | DataThunderIpNatAlgPptpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_gre_sessions: {
      value: cdktf.numberToHclTerraform(struct!.currentGreSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_smp_sessions: {
      value: cdktf.numberToHclTerraform(struct!.currentSmpSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mismatched_pac_call_id: {
      value: cdktf.numberToHclTerraform(struct!.mismatchedPacCallId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mismatched_pns_call_id: {
      value: cdktf.numberToHclTerraform(struct!.mismatchedPnsCallId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_matching_gre_session: {
      value: cdktf.numberToHclTerraform(struct!.noMatchingGreSession),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmitted_pac_message: {
      value: cdktf.numberToHclTerraform(struct!.retransmittedPacMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmitted_pns_message: {
      value: cdktf.numberToHclTerraform(struct!.retransmittedPnsMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smp_session_creation_failure: {
      value: cdktf.numberToHclTerraform(struct!.smpSessionCreationFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    truncated_gre_packet: {
      value: cdktf.numberToHclTerraform(struct!.truncatedGrePacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    truncated_pac_message: {
      value: cdktf.numberToHclTerraform(struct!.truncatedPacMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    truncated_pns_message: {
      value: cdktf.numberToHclTerraform(struct!.truncatedPnsMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_gre_version: {
      value: cdktf.numberToHclTerraform(struct!.unknownGreVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderIpNatAlgPptpStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderIpNatAlgPptpStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentGreSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentGreSessions = this._currentGreSessions;
    }
    if (this._currentSmpSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentSmpSessions = this._currentSmpSessions;
    }
    if (this._mismatchedPacCallId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchedPacCallId = this._mismatchedPacCallId;
    }
    if (this._mismatchedPnsCallId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchedPnsCallId = this._mismatchedPnsCallId;
    }
    if (this._noMatchingGreSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMatchingGreSession = this._noMatchingGreSession;
    }
    if (this._retransmittedPacMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmittedPacMessage = this._retransmittedPacMessage;
    }
    if (this._retransmittedPnsMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmittedPnsMessage = this._retransmittedPnsMessage;
    }
    if (this._smpSessionCreationFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.smpSessionCreationFailure = this._smpSessionCreationFailure;
    }
    if (this._truncatedGrePacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.truncatedGrePacket = this._truncatedGrePacket;
    }
    if (this._truncatedPacMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.truncatedPacMessage = this._truncatedPacMessage;
    }
    if (this._truncatedPnsMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.truncatedPnsMessage = this._truncatedPnsMessage;
    }
    if (this._unknownGreVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownGreVersion = this._unknownGreVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderIpNatAlgPptpStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currentGreSessions = undefined;
      this._currentSmpSessions = undefined;
      this._mismatchedPacCallId = undefined;
      this._mismatchedPnsCallId = undefined;
      this._noMatchingGreSession = undefined;
      this._retransmittedPacMessage = undefined;
      this._retransmittedPnsMessage = undefined;
      this._smpSessionCreationFailure = undefined;
      this._truncatedGrePacket = undefined;
      this._truncatedPacMessage = undefined;
      this._truncatedPnsMessage = undefined;
      this._unknownGreVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currentGreSessions = value.currentGreSessions;
      this._currentSmpSessions = value.currentSmpSessions;
      this._mismatchedPacCallId = value.mismatchedPacCallId;
      this._mismatchedPnsCallId = value.mismatchedPnsCallId;
      this._noMatchingGreSession = value.noMatchingGreSession;
      this._retransmittedPacMessage = value.retransmittedPacMessage;
      this._retransmittedPnsMessage = value.retransmittedPnsMessage;
      this._smpSessionCreationFailure = value.smpSessionCreationFailure;
      this._truncatedGrePacket = value.truncatedGrePacket;
      this._truncatedPacMessage = value.truncatedPacMessage;
      this._truncatedPnsMessage = value.truncatedPnsMessage;
      this._unknownGreVersion = value.unknownGreVersion;
    }
  }

  // current_gre_sessions - computed: false, optional: true, required: false
  private _currentGreSessions?: number; 
  public get currentGreSessions() {
    return this.getNumberAttribute('current_gre_sessions');
  }
  public set currentGreSessions(value: number) {
    this._currentGreSessions = value;
  }
  public resetCurrentGreSessions() {
    this._currentGreSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentGreSessionsInput() {
    return this._currentGreSessions;
  }

  // current_smp_sessions - computed: false, optional: true, required: false
  private _currentSmpSessions?: number; 
  public get currentSmpSessions() {
    return this.getNumberAttribute('current_smp_sessions');
  }
  public set currentSmpSessions(value: number) {
    this._currentSmpSessions = value;
  }
  public resetCurrentSmpSessions() {
    this._currentSmpSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentSmpSessionsInput() {
    return this._currentSmpSessions;
  }

  // mismatched_pac_call_id - computed: false, optional: true, required: false
  private _mismatchedPacCallId?: number; 
  public get mismatchedPacCallId() {
    return this.getNumberAttribute('mismatched_pac_call_id');
  }
  public set mismatchedPacCallId(value: number) {
    this._mismatchedPacCallId = value;
  }
  public resetMismatchedPacCallId() {
    this._mismatchedPacCallId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchedPacCallIdInput() {
    return this._mismatchedPacCallId;
  }

  // mismatched_pns_call_id - computed: false, optional: true, required: false
  private _mismatchedPnsCallId?: number; 
  public get mismatchedPnsCallId() {
    return this.getNumberAttribute('mismatched_pns_call_id');
  }
  public set mismatchedPnsCallId(value: number) {
    this._mismatchedPnsCallId = value;
  }
  public resetMismatchedPnsCallId() {
    this._mismatchedPnsCallId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchedPnsCallIdInput() {
    return this._mismatchedPnsCallId;
  }

  // no_matching_gre_session - computed: false, optional: true, required: false
  private _noMatchingGreSession?: number; 
  public get noMatchingGreSession() {
    return this.getNumberAttribute('no_matching_gre_session');
  }
  public set noMatchingGreSession(value: number) {
    this._noMatchingGreSession = value;
  }
  public resetNoMatchingGreSession() {
    this._noMatchingGreSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMatchingGreSessionInput() {
    return this._noMatchingGreSession;
  }

  // retransmitted_pac_message - computed: false, optional: true, required: false
  private _retransmittedPacMessage?: number; 
  public get retransmittedPacMessage() {
    return this.getNumberAttribute('retransmitted_pac_message');
  }
  public set retransmittedPacMessage(value: number) {
    this._retransmittedPacMessage = value;
  }
  public resetRetransmittedPacMessage() {
    this._retransmittedPacMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmittedPacMessageInput() {
    return this._retransmittedPacMessage;
  }

  // retransmitted_pns_message - computed: false, optional: true, required: false
  private _retransmittedPnsMessage?: number; 
  public get retransmittedPnsMessage() {
    return this.getNumberAttribute('retransmitted_pns_message');
  }
  public set retransmittedPnsMessage(value: number) {
    this._retransmittedPnsMessage = value;
  }
  public resetRetransmittedPnsMessage() {
    this._retransmittedPnsMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmittedPnsMessageInput() {
    return this._retransmittedPnsMessage;
  }

  // smp_session_creation_failure - computed: false, optional: true, required: false
  private _smpSessionCreationFailure?: number; 
  public get smpSessionCreationFailure() {
    return this.getNumberAttribute('smp_session_creation_failure');
  }
  public set smpSessionCreationFailure(value: number) {
    this._smpSessionCreationFailure = value;
  }
  public resetSmpSessionCreationFailure() {
    this._smpSessionCreationFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpSessionCreationFailureInput() {
    return this._smpSessionCreationFailure;
  }

  // truncated_gre_packet - computed: false, optional: true, required: false
  private _truncatedGrePacket?: number; 
  public get truncatedGrePacket() {
    return this.getNumberAttribute('truncated_gre_packet');
  }
  public set truncatedGrePacket(value: number) {
    this._truncatedGrePacket = value;
  }
  public resetTruncatedGrePacket() {
    this._truncatedGrePacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truncatedGrePacketInput() {
    return this._truncatedGrePacket;
  }

  // truncated_pac_message - computed: false, optional: true, required: false
  private _truncatedPacMessage?: number; 
  public get truncatedPacMessage() {
    return this.getNumberAttribute('truncated_pac_message');
  }
  public set truncatedPacMessage(value: number) {
    this._truncatedPacMessage = value;
  }
  public resetTruncatedPacMessage() {
    this._truncatedPacMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truncatedPacMessageInput() {
    return this._truncatedPacMessage;
  }

  // truncated_pns_message - computed: false, optional: true, required: false
  private _truncatedPnsMessage?: number; 
  public get truncatedPnsMessage() {
    return this.getNumberAttribute('truncated_pns_message');
  }
  public set truncatedPnsMessage(value: number) {
    this._truncatedPnsMessage = value;
  }
  public resetTruncatedPnsMessage() {
    this._truncatedPnsMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truncatedPnsMessageInput() {
    return this._truncatedPnsMessage;
  }

  // unknown_gre_version - computed: false, optional: true, required: false
  private _unknownGreVersion?: number; 
  public get unknownGreVersion() {
    return this.getNumberAttribute('unknown_gre_version');
  }
  public set unknownGreVersion(value: number) {
    this._unknownGreVersion = value;
  }
  public resetUnknownGreVersion() {
    this._unknownGreVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownGreVersionInput() {
    return this._unknownGreVersion;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ip_nat_alg_pptp_stats thunder_ip_nat_alg_pptp_stats}
*/
export class DataThunderIpNatAlgPptpStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ip_nat_alg_pptp_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderIpNatAlgPptpStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderIpNatAlgPptpStats to import
  * @param importFromId The id of the existing DataThunderIpNatAlgPptpStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ip_nat_alg_pptp_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderIpNatAlgPptpStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ip_nat_alg_pptp_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ip_nat_alg_pptp_stats thunder_ip_nat_alg_pptp_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderIpNatAlgPptpStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderIpNatAlgPptpStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ip_nat_alg_pptp_stats',
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
  private _stats = new DataThunderIpNatAlgPptpStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderIpNatAlgPptpStatsStats) {
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
      stats: dataThunderIpNatAlgPptpStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderIpNatAlgPptpStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderIpNatAlgPptpStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
