// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemBfdStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats#id DataThunderSystemBfdStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats#stats DataThunderSystemBfdStats#stats}
  */
  readonly stats?: DataThunderSystemBfdStatsStats;
}
export interface DataThunderSystemBfdStatsStats {
  /**
  * Authentication failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats#auth_failed DataThunderSystemBfdStats#auth_failed}
  */
  readonly authFailed?: number;
  /**
  * Authentication key-id mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats#auth_key_id_mismatch DataThunderSystemBfdStats#auth_key_id_mismatch}
  */
  readonly authKeyIdMismatch?: number;
  /**
  * Authentication key mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats#auth_key_mismatch DataThunderSystemBfdStats#auth_key_mismatch}
  */
  readonly authKeyMismatch?: number;
  /**
  * Invalid authentication length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats#auth_length_invalid DataThunderSystemBfdStats#auth_length_invalid}
  */
  readonly authLengthInvalid?: number;
  /**
  * Authentication mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats#auth_mismatch DataThunderSystemBfdStats#auth_mismatch}
  */
  readonly authMismatch?: number;
  /**
  * Invalid authentication sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats#auth_seqnum_invalid DataThunderSystemBfdStats#auth_seqnum_invalid}
  */
  readonly authSeqnumInvalid?: number;
  /**
  * Authentication type mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats#auth_type_mismatch DataThunderSystemBfdStats#auth_type_mismatch}
  */
  readonly authTypeMismatch?: number;
  /**
  * Packet data length too short
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats#data_is_short DataThunderSystemBfdStats#data_is_short}
  */
  readonly dataIsShort?: number;
  /**
  * Destination unreachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats#dest_unreachable DataThunderSystemBfdStats#dest_unreachable}
  */
  readonly destUnreachable?: number;
  /**
  * Invalid detect multiplier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats#invalid_detect_mult DataThunderSystemBfdStats#invalid_detect_mult}
  */
  readonly invalidDetectMult?: number;
  /**
  * Invalid multipoint setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats#invalid_multipoint DataThunderSystemBfdStats#invalid_multipoint}
  */
  readonly invalidMultipoint?: number;
  /**
  * Invalid my descriptor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats#invalid_my_disc DataThunderSystemBfdStats#invalid_my_disc}
  */
  readonly invalidMyDisc?: number;
  /**
  * Invalid TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats#invalid_ttl DataThunderSystemBfdStats#invalid_ttl}
  */
  readonly invalidTtl?: number;
  /**
  * IP packet checksum errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats#ip_checksum_error DataThunderSystemBfdStats#ip_checksum_error}
  */
  readonly ipChecksumError?: number;
  /**
  * Packets too small
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats#length_too_small DataThunderSystemBfdStats#length_too_small}
  */
  readonly lengthTooSmall?: number;
  /**
  * Local admin down session state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats#local_state_admin_down DataThunderSystemBfdStats#local_state_admin_down}
  */
  readonly localStateAdminDown?: number;
  /**
  * Multihop session or packet mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats#multihop_mismatch DataThunderSystemBfdStats#multihop_mismatch}
  */
  readonly multihopMismatch?: number;
  /**
  * No IPv6 enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats#no_ipv6_enable DataThunderSystemBfdStats#no_ipv6_enable}
  */
  readonly noIpv6Enable?: number;
  /**
  * Other errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats#other_error DataThunderSystemBfdStats#other_error}
  */
  readonly otherError?: number;
  /**
  * Session not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats#session_not_found DataThunderSystemBfdStats#session_not_found}
  */
  readonly sessionNotFound?: number;
  /**
  * UDP packet checksum errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats#udp_checksum_error DataThunderSystemBfdStats#udp_checksum_error}
  */
  readonly udpChecksumError?: number;
  /**
  * BFD version mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats#version_mismatch DataThunderSystemBfdStats#version_mismatch}
  */
  readonly versionMismatch?: number;
}

export function dataThunderSystemBfdStatsStatsToTerraform(struct?: DataThunderSystemBfdStatsStatsOutputReference | DataThunderSystemBfdStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_failed: cdktf.numberToTerraform(struct!.authFailed),
    auth_key_id_mismatch: cdktf.numberToTerraform(struct!.authKeyIdMismatch),
    auth_key_mismatch: cdktf.numberToTerraform(struct!.authKeyMismatch),
    auth_length_invalid: cdktf.numberToTerraform(struct!.authLengthInvalid),
    auth_mismatch: cdktf.numberToTerraform(struct!.authMismatch),
    auth_seqnum_invalid: cdktf.numberToTerraform(struct!.authSeqnumInvalid),
    auth_type_mismatch: cdktf.numberToTerraform(struct!.authTypeMismatch),
    data_is_short: cdktf.numberToTerraform(struct!.dataIsShort),
    dest_unreachable: cdktf.numberToTerraform(struct!.destUnreachable),
    invalid_detect_mult: cdktf.numberToTerraform(struct!.invalidDetectMult),
    invalid_multipoint: cdktf.numberToTerraform(struct!.invalidMultipoint),
    invalid_my_disc: cdktf.numberToTerraform(struct!.invalidMyDisc),
    invalid_ttl: cdktf.numberToTerraform(struct!.invalidTtl),
    ip_checksum_error: cdktf.numberToTerraform(struct!.ipChecksumError),
    length_too_small: cdktf.numberToTerraform(struct!.lengthTooSmall),
    local_state_admin_down: cdktf.numberToTerraform(struct!.localStateAdminDown),
    multihop_mismatch: cdktf.numberToTerraform(struct!.multihopMismatch),
    no_ipv6_enable: cdktf.numberToTerraform(struct!.noIpv6Enable),
    other_error: cdktf.numberToTerraform(struct!.otherError),
    session_not_found: cdktf.numberToTerraform(struct!.sessionNotFound),
    udp_checksum_error: cdktf.numberToTerraform(struct!.udpChecksumError),
    version_mismatch: cdktf.numberToTerraform(struct!.versionMismatch),
  }
}


export function dataThunderSystemBfdStatsStatsToHclTerraform(struct?: DataThunderSystemBfdStatsStatsOutputReference | DataThunderSystemBfdStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_failed: {
      value: cdktf.numberToHclTerraform(struct!.authFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_key_id_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.authKeyIdMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_key_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.authKeyMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_length_invalid: {
      value: cdktf.numberToHclTerraform(struct!.authLengthInvalid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.authMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_seqnum_invalid: {
      value: cdktf.numberToHclTerraform(struct!.authSeqnumInvalid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_type_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.authTypeMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_is_short: {
      value: cdktf.numberToHclTerraform(struct!.dataIsShort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dest_unreachable: {
      value: cdktf.numberToHclTerraform(struct!.destUnreachable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_detect_mult: {
      value: cdktf.numberToHclTerraform(struct!.invalidDetectMult),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_multipoint: {
      value: cdktf.numberToHclTerraform(struct!.invalidMultipoint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_my_disc: {
      value: cdktf.numberToHclTerraform(struct!.invalidMyDisc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_ttl: {
      value: cdktf.numberToHclTerraform(struct!.invalidTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_checksum_error: {
      value: cdktf.numberToHclTerraform(struct!.ipChecksumError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    length_too_small: {
      value: cdktf.numberToHclTerraform(struct!.lengthTooSmall),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_state_admin_down: {
      value: cdktf.numberToHclTerraform(struct!.localStateAdminDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multihop_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.multihopMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_ipv6_enable: {
      value: cdktf.numberToHclTerraform(struct!.noIpv6Enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_error: {
      value: cdktf.numberToHclTerraform(struct!.otherError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_not_found: {
      value: cdktf.numberToHclTerraform(struct!.sessionNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_checksum_error: {
      value: cdktf.numberToHclTerraform(struct!.udpChecksumError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.versionMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemBfdStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemBfdStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.authFailed = this._authFailed;
    }
    if (this._authKeyIdMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.authKeyIdMismatch = this._authKeyIdMismatch;
    }
    if (this._authKeyMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.authKeyMismatch = this._authKeyMismatch;
    }
    if (this._authLengthInvalid !== undefined) {
      hasAnyValues = true;
      internalValueResult.authLengthInvalid = this._authLengthInvalid;
    }
    if (this._authMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMismatch = this._authMismatch;
    }
    if (this._authSeqnumInvalid !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSeqnumInvalid = this._authSeqnumInvalid;
    }
    if (this._authTypeMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.authTypeMismatch = this._authTypeMismatch;
    }
    if (this._dataIsShort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataIsShort = this._dataIsShort;
    }
    if (this._destUnreachable !== undefined) {
      hasAnyValues = true;
      internalValueResult.destUnreachable = this._destUnreachable;
    }
    if (this._invalidDetectMult !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidDetectMult = this._invalidDetectMult;
    }
    if (this._invalidMultipoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidMultipoint = this._invalidMultipoint;
    }
    if (this._invalidMyDisc !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidMyDisc = this._invalidMyDisc;
    }
    if (this._invalidTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidTtl = this._invalidTtl;
    }
    if (this._ipChecksumError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipChecksumError = this._ipChecksumError;
    }
    if (this._lengthTooSmall !== undefined) {
      hasAnyValues = true;
      internalValueResult.lengthTooSmall = this._lengthTooSmall;
    }
    if (this._localStateAdminDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.localStateAdminDown = this._localStateAdminDown;
    }
    if (this._multihopMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.multihopMismatch = this._multihopMismatch;
    }
    if (this._noIpv6Enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpv6Enable = this._noIpv6Enable;
    }
    if (this._otherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherError = this._otherError;
    }
    if (this._sessionNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionNotFound = this._sessionNotFound;
    }
    if (this._udpChecksumError !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpChecksumError = this._udpChecksumError;
    }
    if (this._versionMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionMismatch = this._versionMismatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemBfdStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authFailed = undefined;
      this._authKeyIdMismatch = undefined;
      this._authKeyMismatch = undefined;
      this._authLengthInvalid = undefined;
      this._authMismatch = undefined;
      this._authSeqnumInvalid = undefined;
      this._authTypeMismatch = undefined;
      this._dataIsShort = undefined;
      this._destUnreachable = undefined;
      this._invalidDetectMult = undefined;
      this._invalidMultipoint = undefined;
      this._invalidMyDisc = undefined;
      this._invalidTtl = undefined;
      this._ipChecksumError = undefined;
      this._lengthTooSmall = undefined;
      this._localStateAdminDown = undefined;
      this._multihopMismatch = undefined;
      this._noIpv6Enable = undefined;
      this._otherError = undefined;
      this._sessionNotFound = undefined;
      this._udpChecksumError = undefined;
      this._versionMismatch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authFailed = value.authFailed;
      this._authKeyIdMismatch = value.authKeyIdMismatch;
      this._authKeyMismatch = value.authKeyMismatch;
      this._authLengthInvalid = value.authLengthInvalid;
      this._authMismatch = value.authMismatch;
      this._authSeqnumInvalid = value.authSeqnumInvalid;
      this._authTypeMismatch = value.authTypeMismatch;
      this._dataIsShort = value.dataIsShort;
      this._destUnreachable = value.destUnreachable;
      this._invalidDetectMult = value.invalidDetectMult;
      this._invalidMultipoint = value.invalidMultipoint;
      this._invalidMyDisc = value.invalidMyDisc;
      this._invalidTtl = value.invalidTtl;
      this._ipChecksumError = value.ipChecksumError;
      this._lengthTooSmall = value.lengthTooSmall;
      this._localStateAdminDown = value.localStateAdminDown;
      this._multihopMismatch = value.multihopMismatch;
      this._noIpv6Enable = value.noIpv6Enable;
      this._otherError = value.otherError;
      this._sessionNotFound = value.sessionNotFound;
      this._udpChecksumError = value.udpChecksumError;
      this._versionMismatch = value.versionMismatch;
    }
  }

  // auth_failed - computed: false, optional: true, required: false
  private _authFailed?: number; 
  public get authFailed() {
    return this.getNumberAttribute('auth_failed');
  }
  public set authFailed(value: number) {
    this._authFailed = value;
  }
  public resetAuthFailed() {
    this._authFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFailedInput() {
    return this._authFailed;
  }

  // auth_key_id_mismatch - computed: false, optional: true, required: false
  private _authKeyIdMismatch?: number; 
  public get authKeyIdMismatch() {
    return this.getNumberAttribute('auth_key_id_mismatch');
  }
  public set authKeyIdMismatch(value: number) {
    this._authKeyIdMismatch = value;
  }
  public resetAuthKeyIdMismatch() {
    this._authKeyIdMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyIdMismatchInput() {
    return this._authKeyIdMismatch;
  }

  // auth_key_mismatch - computed: false, optional: true, required: false
  private _authKeyMismatch?: number; 
  public get authKeyMismatch() {
    return this.getNumberAttribute('auth_key_mismatch');
  }
  public set authKeyMismatch(value: number) {
    this._authKeyMismatch = value;
  }
  public resetAuthKeyMismatch() {
    this._authKeyMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyMismatchInput() {
    return this._authKeyMismatch;
  }

  // auth_length_invalid - computed: false, optional: true, required: false
  private _authLengthInvalid?: number; 
  public get authLengthInvalid() {
    return this.getNumberAttribute('auth_length_invalid');
  }
  public set authLengthInvalid(value: number) {
    this._authLengthInvalid = value;
  }
  public resetAuthLengthInvalid() {
    this._authLengthInvalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLengthInvalidInput() {
    return this._authLengthInvalid;
  }

  // auth_mismatch - computed: false, optional: true, required: false
  private _authMismatch?: number; 
  public get authMismatch() {
    return this.getNumberAttribute('auth_mismatch');
  }
  public set authMismatch(value: number) {
    this._authMismatch = value;
  }
  public resetAuthMismatch() {
    this._authMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMismatchInput() {
    return this._authMismatch;
  }

  // auth_seqnum_invalid - computed: false, optional: true, required: false
  private _authSeqnumInvalid?: number; 
  public get authSeqnumInvalid() {
    return this.getNumberAttribute('auth_seqnum_invalid');
  }
  public set authSeqnumInvalid(value: number) {
    this._authSeqnumInvalid = value;
  }
  public resetAuthSeqnumInvalid() {
    this._authSeqnumInvalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSeqnumInvalidInput() {
    return this._authSeqnumInvalid;
  }

  // auth_type_mismatch - computed: false, optional: true, required: false
  private _authTypeMismatch?: number; 
  public get authTypeMismatch() {
    return this.getNumberAttribute('auth_type_mismatch');
  }
  public set authTypeMismatch(value: number) {
    this._authTypeMismatch = value;
  }
  public resetAuthTypeMismatch() {
    this._authTypeMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeMismatchInput() {
    return this._authTypeMismatch;
  }

  // data_is_short - computed: false, optional: true, required: false
  private _dataIsShort?: number; 
  public get dataIsShort() {
    return this.getNumberAttribute('data_is_short');
  }
  public set dataIsShort(value: number) {
    this._dataIsShort = value;
  }
  public resetDataIsShort() {
    this._dataIsShort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataIsShortInput() {
    return this._dataIsShort;
  }

  // dest_unreachable - computed: false, optional: true, required: false
  private _destUnreachable?: number; 
  public get destUnreachable() {
    return this.getNumberAttribute('dest_unreachable');
  }
  public set destUnreachable(value: number) {
    this._destUnreachable = value;
  }
  public resetDestUnreachable() {
    this._destUnreachable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destUnreachableInput() {
    return this._destUnreachable;
  }

  // invalid_detect_mult - computed: false, optional: true, required: false
  private _invalidDetectMult?: number; 
  public get invalidDetectMult() {
    return this.getNumberAttribute('invalid_detect_mult');
  }
  public set invalidDetectMult(value: number) {
    this._invalidDetectMult = value;
  }
  public resetInvalidDetectMult() {
    this._invalidDetectMult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidDetectMultInput() {
    return this._invalidDetectMult;
  }

  // invalid_multipoint - computed: false, optional: true, required: false
  private _invalidMultipoint?: number; 
  public get invalidMultipoint() {
    return this.getNumberAttribute('invalid_multipoint');
  }
  public set invalidMultipoint(value: number) {
    this._invalidMultipoint = value;
  }
  public resetInvalidMultipoint() {
    this._invalidMultipoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidMultipointInput() {
    return this._invalidMultipoint;
  }

  // invalid_my_disc - computed: false, optional: true, required: false
  private _invalidMyDisc?: number; 
  public get invalidMyDisc() {
    return this.getNumberAttribute('invalid_my_disc');
  }
  public set invalidMyDisc(value: number) {
    this._invalidMyDisc = value;
  }
  public resetInvalidMyDisc() {
    this._invalidMyDisc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidMyDiscInput() {
    return this._invalidMyDisc;
  }

  // invalid_ttl - computed: false, optional: true, required: false
  private _invalidTtl?: number; 
  public get invalidTtl() {
    return this.getNumberAttribute('invalid_ttl');
  }
  public set invalidTtl(value: number) {
    this._invalidTtl = value;
  }
  public resetInvalidTtl() {
    this._invalidTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidTtlInput() {
    return this._invalidTtl;
  }

  // ip_checksum_error - computed: false, optional: true, required: false
  private _ipChecksumError?: number; 
  public get ipChecksumError() {
    return this.getNumberAttribute('ip_checksum_error');
  }
  public set ipChecksumError(value: number) {
    this._ipChecksumError = value;
  }
  public resetIpChecksumError() {
    this._ipChecksumError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipChecksumErrorInput() {
    return this._ipChecksumError;
  }

  // length_too_small - computed: false, optional: true, required: false
  private _lengthTooSmall?: number; 
  public get lengthTooSmall() {
    return this.getNumberAttribute('length_too_small');
  }
  public set lengthTooSmall(value: number) {
    this._lengthTooSmall = value;
  }
  public resetLengthTooSmall() {
    this._lengthTooSmall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthTooSmallInput() {
    return this._lengthTooSmall;
  }

  // local_state_admin_down - computed: false, optional: true, required: false
  private _localStateAdminDown?: number; 
  public get localStateAdminDown() {
    return this.getNumberAttribute('local_state_admin_down');
  }
  public set localStateAdminDown(value: number) {
    this._localStateAdminDown = value;
  }
  public resetLocalStateAdminDown() {
    this._localStateAdminDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localStateAdminDownInput() {
    return this._localStateAdminDown;
  }

  // multihop_mismatch - computed: false, optional: true, required: false
  private _multihopMismatch?: number; 
  public get multihopMismatch() {
    return this.getNumberAttribute('multihop_mismatch');
  }
  public set multihopMismatch(value: number) {
    this._multihopMismatch = value;
  }
  public resetMultihopMismatch() {
    this._multihopMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multihopMismatchInput() {
    return this._multihopMismatch;
  }

  // no_ipv6_enable - computed: false, optional: true, required: false
  private _noIpv6Enable?: number; 
  public get noIpv6Enable() {
    return this.getNumberAttribute('no_ipv6_enable');
  }
  public set noIpv6Enable(value: number) {
    this._noIpv6Enable = value;
  }
  public resetNoIpv6Enable() {
    this._noIpv6Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpv6EnableInput() {
    return this._noIpv6Enable;
  }

  // other_error - computed: false, optional: true, required: false
  private _otherError?: number; 
  public get otherError() {
    return this.getNumberAttribute('other_error');
  }
  public set otherError(value: number) {
    this._otherError = value;
  }
  public resetOtherError() {
    this._otherError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherErrorInput() {
    return this._otherError;
  }

  // session_not_found - computed: false, optional: true, required: false
  private _sessionNotFound?: number; 
  public get sessionNotFound() {
    return this.getNumberAttribute('session_not_found');
  }
  public set sessionNotFound(value: number) {
    this._sessionNotFound = value;
  }
  public resetSessionNotFound() {
    this._sessionNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionNotFoundInput() {
    return this._sessionNotFound;
  }

  // udp_checksum_error - computed: false, optional: true, required: false
  private _udpChecksumError?: number; 
  public get udpChecksumError() {
    return this.getNumberAttribute('udp_checksum_error');
  }
  public set udpChecksumError(value: number) {
    this._udpChecksumError = value;
  }
  public resetUdpChecksumError() {
    this._udpChecksumError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpChecksumErrorInput() {
    return this._udpChecksumError;
  }

  // version_mismatch - computed: false, optional: true, required: false
  private _versionMismatch?: number; 
  public get versionMismatch() {
    return this.getNumberAttribute('version_mismatch');
  }
  public set versionMismatch(value: number) {
    this._versionMismatch = value;
  }
  public resetVersionMismatch() {
    this._versionMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionMismatchInput() {
    return this._versionMismatch;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats thunder_system_bfd_stats}
*/
export class DataThunderSystemBfdStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_bfd_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemBfdStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemBfdStats to import
  * @param importFromId The id of the existing DataThunderSystemBfdStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemBfdStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_bfd_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bfd_stats thunder_system_bfd_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemBfdStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemBfdStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_bfd_stats',
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
  private _stats = new DataThunderSystemBfdStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSystemBfdStatsStats) {
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
      stats: dataThunderSystemBfdStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSystemBfdStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemBfdStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
