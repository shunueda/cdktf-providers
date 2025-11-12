// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/net_mgmt_snmp_stats_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderNetMgmtSnmpStatsOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/net_mgmt_snmp_stats_oper#id DataThunderNetMgmtSnmpStatsOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/net_mgmt_snmp_stats_oper#oper DataThunderNetMgmtSnmpStatsOper#oper}
  */
  readonly oper?: DataThunderNetMgmtSnmpStatsOperOper;
}
export interface DataThunderNetMgmtSnmpStatsOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/net_mgmt_snmp_stats_oper#bad_values_errors DataThunderNetMgmtSnmpStatsOper#bad_values_errors}
  */
  readonly badValuesErrors?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/net_mgmt_snmp_stats_oper#bad_version DataThunderNetMgmtSnmpStatsOper#bad_version}
  */
  readonly badVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/net_mgmt_snmp_stats_oper#encoding_error DataThunderNetMgmtSnmpStatsOper#encoding_error}
  */
  readonly encodingError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/net_mgmt_snmp_stats_oper#general_errors DataThunderNetMgmtSnmpStatsOper#general_errors}
  */
  readonly generalErrors?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/net_mgmt_snmp_stats_oper#get_next_pdu DataThunderNetMgmtSnmpStatsOper#get_next_pdu}
  */
  readonly fetchNextPdu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/net_mgmt_snmp_stats_oper#get_req_pdu DataThunderNetMgmtSnmpStatsOper#get_req_pdu}
  */
  readonly fetchReqPdu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/net_mgmt_snmp_stats_oper#get_resp_pdu DataThunderNetMgmtSnmpStatsOper#get_resp_pdu}
  */
  readonly fetchRespPdu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/net_mgmt_snmp_stats_oper#illegal_operation DataThunderNetMgmtSnmpStatsOper#illegal_operation}
  */
  readonly illegalOperation?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/net_mgmt_snmp_stats_oper#input_packets DataThunderNetMgmtSnmpStatsOper#input_packets}
  */
  readonly inputPackets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/net_mgmt_snmp_stats_oper#invalid_id DataThunderNetMgmtSnmpStatsOper#invalid_id}
  */
  readonly invalidId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/net_mgmt_snmp_stats_oper#no_such_name_errors DataThunderNetMgmtSnmpStatsOper#no_such_name_errors}
  */
  readonly noSuchNameErrors?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/net_mgmt_snmp_stats_oper#number_of_req_var DataThunderNetMgmtSnmpStatsOper#number_of_req_var}
  */
  readonly numberOfReqVar?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/net_mgmt_snmp_stats_oper#output_packets DataThunderNetMgmtSnmpStatsOper#output_packets}
  */
  readonly outputPackets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/net_mgmt_snmp_stats_oper#output_traps DataThunderNetMgmtSnmpStatsOper#output_traps}
  */
  readonly outputTraps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/net_mgmt_snmp_stats_oper#packet_drop DataThunderNetMgmtSnmpStatsOper#packet_drop}
  */
  readonly packetDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/net_mgmt_snmp_stats_oper#too_big_errors DataThunderNetMgmtSnmpStatsOper#too_big_errors}
  */
  readonly tooBigErrors?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/net_mgmt_snmp_stats_oper#unknown_community DataThunderNetMgmtSnmpStatsOper#unknown_community}
  */
  readonly unknownCommunity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/net_mgmt_snmp_stats_oper#unknown_security_models DataThunderNetMgmtSnmpStatsOper#unknown_security_models}
  */
  readonly unknownSecurityModels?: number;
}

export function dataThunderNetMgmtSnmpStatsOperOperToTerraform(struct?: DataThunderNetMgmtSnmpStatsOperOperOutputReference | DataThunderNetMgmtSnmpStatsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_values_errors: cdktf.numberToTerraform(struct!.badValuesErrors),
    bad_version: cdktf.numberToTerraform(struct!.badVersion),
    encoding_error: cdktf.numberToTerraform(struct!.encodingError),
    general_errors: cdktf.numberToTerraform(struct!.generalErrors),
    get_next_pdu: cdktf.numberToTerraform(struct!.fetchNextPdu),
    get_req_pdu: cdktf.numberToTerraform(struct!.fetchReqPdu),
    get_resp_pdu: cdktf.numberToTerraform(struct!.fetchRespPdu),
    illegal_operation: cdktf.numberToTerraform(struct!.illegalOperation),
    input_packets: cdktf.numberToTerraform(struct!.inputPackets),
    invalid_id: cdktf.numberToTerraform(struct!.invalidId),
    no_such_name_errors: cdktf.numberToTerraform(struct!.noSuchNameErrors),
    number_of_req_var: cdktf.numberToTerraform(struct!.numberOfReqVar),
    output_packets: cdktf.numberToTerraform(struct!.outputPackets),
    output_traps: cdktf.numberToTerraform(struct!.outputTraps),
    packet_drop: cdktf.numberToTerraform(struct!.packetDrop),
    too_big_errors: cdktf.numberToTerraform(struct!.tooBigErrors),
    unknown_community: cdktf.numberToTerraform(struct!.unknownCommunity),
    unknown_security_models: cdktf.numberToTerraform(struct!.unknownSecurityModels),
  }
}


export function dataThunderNetMgmtSnmpStatsOperOperToHclTerraform(struct?: DataThunderNetMgmtSnmpStatsOperOperOutputReference | DataThunderNetMgmtSnmpStatsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bad_values_errors: {
      value: cdktf.numberToHclTerraform(struct!.badValuesErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_version: {
      value: cdktf.numberToHclTerraform(struct!.badVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encoding_error: {
      value: cdktf.numberToHclTerraform(struct!.encodingError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    general_errors: {
      value: cdktf.numberToHclTerraform(struct!.generalErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    get_next_pdu: {
      value: cdktf.numberToHclTerraform(struct!.fetchNextPdu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    get_req_pdu: {
      value: cdktf.numberToHclTerraform(struct!.fetchReqPdu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    get_resp_pdu: {
      value: cdktf.numberToHclTerraform(struct!.fetchRespPdu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    illegal_operation: {
      value: cdktf.numberToHclTerraform(struct!.illegalOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    input_packets: {
      value: cdktf.numberToHclTerraform(struct!.inputPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_id: {
      value: cdktf.numberToHclTerraform(struct!.invalidId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_such_name_errors: {
      value: cdktf.numberToHclTerraform(struct!.noSuchNameErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_req_var: {
      value: cdktf.numberToHclTerraform(struct!.numberOfReqVar),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_packets: {
      value: cdktf.numberToHclTerraform(struct!.outputPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_traps: {
      value: cdktf.numberToHclTerraform(struct!.outputTraps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_drop: {
      value: cdktf.numberToHclTerraform(struct!.packetDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    too_big_errors: {
      value: cdktf.numberToHclTerraform(struct!.tooBigErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_community: {
      value: cdktf.numberToHclTerraform(struct!.unknownCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_security_models: {
      value: cdktf.numberToHclTerraform(struct!.unknownSecurityModels),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetMgmtSnmpStatsOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNetMgmtSnmpStatsOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badValuesErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.badValuesErrors = this._badValuesErrors;
    }
    if (this._badVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.badVersion = this._badVersion;
    }
    if (this._encodingError !== undefined) {
      hasAnyValues = true;
      internalValueResult.encodingError = this._encodingError;
    }
    if (this._generalErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.generalErrors = this._generalErrors;
    }
    if (this._getNextPdu !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchNextPdu = this._getNextPdu;
    }
    if (this._getReqPdu !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchReqPdu = this._getReqPdu;
    }
    if (this._getRespPdu !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchRespPdu = this._getRespPdu;
    }
    if (this._illegalOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.illegalOperation = this._illegalOperation;
    }
    if (this._inputPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputPackets = this._inputPackets;
    }
    if (this._invalidId !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidId = this._invalidId;
    }
    if (this._noSuchNameErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSuchNameErrors = this._noSuchNameErrors;
    }
    if (this._numberOfReqVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfReqVar = this._numberOfReqVar;
    }
    if (this._outputPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputPackets = this._outputPackets;
    }
    if (this._outputTraps !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputTraps = this._outputTraps;
    }
    if (this._packetDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetDrop = this._packetDrop;
    }
    if (this._tooBigErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooBigErrors = this._tooBigErrors;
    }
    if (this._unknownCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownCommunity = this._unknownCommunity;
    }
    if (this._unknownSecurityModels !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownSecurityModels = this._unknownSecurityModels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetMgmtSnmpStatsOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._badValuesErrors = undefined;
      this._badVersion = undefined;
      this._encodingError = undefined;
      this._generalErrors = undefined;
      this._getNextPdu = undefined;
      this._getReqPdu = undefined;
      this._getRespPdu = undefined;
      this._illegalOperation = undefined;
      this._inputPackets = undefined;
      this._invalidId = undefined;
      this._noSuchNameErrors = undefined;
      this._numberOfReqVar = undefined;
      this._outputPackets = undefined;
      this._outputTraps = undefined;
      this._packetDrop = undefined;
      this._tooBigErrors = undefined;
      this._unknownCommunity = undefined;
      this._unknownSecurityModels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._badValuesErrors = value.badValuesErrors;
      this._badVersion = value.badVersion;
      this._encodingError = value.encodingError;
      this._generalErrors = value.generalErrors;
      this._getNextPdu = value.fetchNextPdu;
      this._getReqPdu = value.fetchReqPdu;
      this._getRespPdu = value.fetchRespPdu;
      this._illegalOperation = value.illegalOperation;
      this._inputPackets = value.inputPackets;
      this._invalidId = value.invalidId;
      this._noSuchNameErrors = value.noSuchNameErrors;
      this._numberOfReqVar = value.numberOfReqVar;
      this._outputPackets = value.outputPackets;
      this._outputTraps = value.outputTraps;
      this._packetDrop = value.packetDrop;
      this._tooBigErrors = value.tooBigErrors;
      this._unknownCommunity = value.unknownCommunity;
      this._unknownSecurityModels = value.unknownSecurityModels;
    }
  }

  // bad_values_errors - computed: false, optional: true, required: false
  private _badValuesErrors?: number; 
  public get badValuesErrors() {
    return this.getNumberAttribute('bad_values_errors');
  }
  public set badValuesErrors(value: number) {
    this._badValuesErrors = value;
  }
  public resetBadValuesErrors() {
    this._badValuesErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badValuesErrorsInput() {
    return this._badValuesErrors;
  }

  // bad_version - computed: false, optional: true, required: false
  private _badVersion?: number; 
  public get badVersion() {
    return this.getNumberAttribute('bad_version');
  }
  public set badVersion(value: number) {
    this._badVersion = value;
  }
  public resetBadVersion() {
    this._badVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badVersionInput() {
    return this._badVersion;
  }

  // encoding_error - computed: false, optional: true, required: false
  private _encodingError?: number; 
  public get encodingError() {
    return this.getNumberAttribute('encoding_error');
  }
  public set encodingError(value: number) {
    this._encodingError = value;
  }
  public resetEncodingError() {
    this._encodingError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingErrorInput() {
    return this._encodingError;
  }

  // general_errors - computed: false, optional: true, required: false
  private _generalErrors?: number; 
  public get generalErrors() {
    return this.getNumberAttribute('general_errors');
  }
  public set generalErrors(value: number) {
    this._generalErrors = value;
  }
  public resetGeneralErrors() {
    this._generalErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generalErrorsInput() {
    return this._generalErrors;
  }

  // get_next_pdu - computed: false, optional: true, required: false
  private _getNextPdu?: number; 
  public get fetchNextPdu() {
    return this.getNumberAttribute('get_next_pdu');
  }
  public set fetchNextPdu(value: number) {
    this._getNextPdu = value;
  }
  public resetFetchNextPdu() {
    this._getNextPdu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchNextPduInput() {
    return this._getNextPdu;
  }

  // get_req_pdu - computed: false, optional: true, required: false
  private _getReqPdu?: number; 
  public get fetchReqPdu() {
    return this.getNumberAttribute('get_req_pdu');
  }
  public set fetchReqPdu(value: number) {
    this._getReqPdu = value;
  }
  public resetFetchReqPdu() {
    this._getReqPdu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchReqPduInput() {
    return this._getReqPdu;
  }

  // get_resp_pdu - computed: false, optional: true, required: false
  private _getRespPdu?: number; 
  public get fetchRespPdu() {
    return this.getNumberAttribute('get_resp_pdu');
  }
  public set fetchRespPdu(value: number) {
    this._getRespPdu = value;
  }
  public resetFetchRespPdu() {
    this._getRespPdu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchRespPduInput() {
    return this._getRespPdu;
  }

  // illegal_operation - computed: false, optional: true, required: false
  private _illegalOperation?: number; 
  public get illegalOperation() {
    return this.getNumberAttribute('illegal_operation');
  }
  public set illegalOperation(value: number) {
    this._illegalOperation = value;
  }
  public resetIllegalOperation() {
    this._illegalOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get illegalOperationInput() {
    return this._illegalOperation;
  }

  // input_packets - computed: false, optional: true, required: false
  private _inputPackets?: number; 
  public get inputPackets() {
    return this.getNumberAttribute('input_packets');
  }
  public set inputPackets(value: number) {
    this._inputPackets = value;
  }
  public resetInputPackets() {
    this._inputPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputPacketsInput() {
    return this._inputPackets;
  }

  // invalid_id - computed: false, optional: true, required: false
  private _invalidId?: number; 
  public get invalidId() {
    return this.getNumberAttribute('invalid_id');
  }
  public set invalidId(value: number) {
    this._invalidId = value;
  }
  public resetInvalidId() {
    this._invalidId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidIdInput() {
    return this._invalidId;
  }

  // no_such_name_errors - computed: false, optional: true, required: false
  private _noSuchNameErrors?: number; 
  public get noSuchNameErrors() {
    return this.getNumberAttribute('no_such_name_errors');
  }
  public set noSuchNameErrors(value: number) {
    this._noSuchNameErrors = value;
  }
  public resetNoSuchNameErrors() {
    this._noSuchNameErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSuchNameErrorsInput() {
    return this._noSuchNameErrors;
  }

  // number_of_req_var - computed: false, optional: true, required: false
  private _numberOfReqVar?: number; 
  public get numberOfReqVar() {
    return this.getNumberAttribute('number_of_req_var');
  }
  public set numberOfReqVar(value: number) {
    this._numberOfReqVar = value;
  }
  public resetNumberOfReqVar() {
    this._numberOfReqVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfReqVarInput() {
    return this._numberOfReqVar;
  }

  // output_packets - computed: false, optional: true, required: false
  private _outputPackets?: number; 
  public get outputPackets() {
    return this.getNumberAttribute('output_packets');
  }
  public set outputPackets(value: number) {
    this._outputPackets = value;
  }
  public resetOutputPackets() {
    this._outputPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputPacketsInput() {
    return this._outputPackets;
  }

  // output_traps - computed: false, optional: true, required: false
  private _outputTraps?: number; 
  public get outputTraps() {
    return this.getNumberAttribute('output_traps');
  }
  public set outputTraps(value: number) {
    this._outputTraps = value;
  }
  public resetOutputTraps() {
    this._outputTraps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTrapsInput() {
    return this._outputTraps;
  }

  // packet_drop - computed: false, optional: true, required: false
  private _packetDrop?: number; 
  public get packetDrop() {
    return this.getNumberAttribute('packet_drop');
  }
  public set packetDrop(value: number) {
    this._packetDrop = value;
  }
  public resetPacketDrop() {
    this._packetDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetDropInput() {
    return this._packetDrop;
  }

  // too_big_errors - computed: false, optional: true, required: false
  private _tooBigErrors?: number; 
  public get tooBigErrors() {
    return this.getNumberAttribute('too_big_errors');
  }
  public set tooBigErrors(value: number) {
    this._tooBigErrors = value;
  }
  public resetTooBigErrors() {
    this._tooBigErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooBigErrorsInput() {
    return this._tooBigErrors;
  }

  // unknown_community - computed: false, optional: true, required: false
  private _unknownCommunity?: number; 
  public get unknownCommunity() {
    return this.getNumberAttribute('unknown_community');
  }
  public set unknownCommunity(value: number) {
    this._unknownCommunity = value;
  }
  public resetUnknownCommunity() {
    this._unknownCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownCommunityInput() {
    return this._unknownCommunity;
  }

  // unknown_security_models - computed: false, optional: true, required: false
  private _unknownSecurityModels?: number; 
  public get unknownSecurityModels() {
    return this.getNumberAttribute('unknown_security_models');
  }
  public set unknownSecurityModels(value: number) {
    this._unknownSecurityModels = value;
  }
  public resetUnknownSecurityModels() {
    this._unknownSecurityModels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownSecurityModelsInput() {
    return this._unknownSecurityModels;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/net_mgmt_snmp_stats_oper thunder_net_mgmt_snmp_stats_oper}
*/
export class DataThunderNetMgmtSnmpStatsOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_net_mgmt_snmp_stats_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderNetMgmtSnmpStatsOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderNetMgmtSnmpStatsOper to import
  * @param importFromId The id of the existing DataThunderNetMgmtSnmpStatsOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/net_mgmt_snmp_stats_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderNetMgmtSnmpStatsOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_net_mgmt_snmp_stats_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/net_mgmt_snmp_stats_oper thunder_net_mgmt_snmp_stats_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderNetMgmtSnmpStatsOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderNetMgmtSnmpStatsOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_net_mgmt_snmp_stats_oper',
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
  private _oper = new DataThunderNetMgmtSnmpStatsOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderNetMgmtSnmpStatsOperOper) {
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
      oper: dataThunderNetMgmtSnmpStatsOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderNetMgmtSnmpStatsOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNetMgmtSnmpStatsOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
