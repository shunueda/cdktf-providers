// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateQuicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Create connection on QUIC Initial Packets Only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#create_conn_on_initial_only DdosZoneTemplateQuic#create_conn_on_initial_only}
  */
  readonly createConnOnInitialOnly?: number;
  /**
  * Drop packets that do not match a defined version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#drop_on_no_version_match DdosZoneTemplateQuic#drop_on_no_version_match}
  */
  readonly dropOnNoVersionMatch?: number;
  /**
  * Disable fixed-bit malform check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#fixed_bit_check_disable DdosZoneTemplateQuic#fixed_bit_check_disable}
  */
  readonly fixedBitCheckDisable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#id DdosZoneTemplateQuic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * DDOS QUIC Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#quic_tmpl_name DdosZoneTemplateQuic#quic_tmpl_name}
  */
  readonly quicTmplName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#user_tag DdosZoneTemplateQuic#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#uuid DdosZoneTemplateQuic#uuid}
  */
  readonly uuid?: string;
  /**
  * action_on_initial block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#action_on_initial DdosZoneTemplateQuic#action_on_initial}
  */
  readonly actionOnInitial?: DdosZoneTemplateQuicActionOnInitial;
  /**
  * pkt_rate_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#pkt_rate_cfg DdosZoneTemplateQuic#pkt_rate_cfg}
  */
  readonly pktRateCfg?: DdosZoneTemplateQuicPktRateCfg;
  /**
  * version_supported_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#version_supported_list DdosZoneTemplateQuic#version_supported_list}
  */
  readonly versionSupportedList?: DdosZoneTemplateQuicVersionSupportedListStruct[] | cdktf.IResolvable;
}
export interface DdosZoneTemplateQuicActionOnInitial {
  /**
  * 'cid-hash': Dynamic retry token based on Destination and Source CID;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#retry_token_authentication_dynamic DdosZoneTemplateQuic#retry_token_authentication_dynamic}
  */
  readonly retryTokenAuthenticationDynamic?: string;
  /**
  * Static retry token (Maximum of 4 bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#retry_token_authentication_static DdosZoneTemplateQuic#retry_token_authentication_static}
  */
  readonly retryTokenAuthenticationStatic?: string;
  /**
  * Decrypt incoming initial packets for unauthenticated clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#retry_unauthenticated_initial_decrypt DdosZoneTemplateQuic#retry_unauthenticated_initial_decrypt}
  */
  readonly retryUnauthenticatedInitialDecrypt?: number;
  /**
  * Set Max SCID length for SCID generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#scid_length DdosZoneTemplateQuic#scid_length}
  */
  readonly scidLength?: number;
  /**
  * 'drop': Drop short header packet;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#unauth_short_hdr_action DdosZoneTemplateQuic#unauth_short_hdr_action}
  */
  readonly unauthShortHdrAction?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#uuid DdosZoneTemplateQuic#uuid}
  */
  readonly uuid?: string;
}

export function ddosZoneTemplateQuicActionOnInitialToTerraform(struct?: DdosZoneTemplateQuicActionOnInitialOutputReference | DdosZoneTemplateQuicActionOnInitial): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retry_token_authentication_dynamic: cdktf.stringToTerraform(struct!.retryTokenAuthenticationDynamic),
    retry_token_authentication_static: cdktf.stringToTerraform(struct!.retryTokenAuthenticationStatic),
    retry_unauthenticated_initial_decrypt: cdktf.numberToTerraform(struct!.retryUnauthenticatedInitialDecrypt),
    scid_length: cdktf.numberToTerraform(struct!.scidLength),
    unauth_short_hdr_action: cdktf.stringToTerraform(struct!.unauthShortHdrAction),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosZoneTemplateQuicActionOnInitialToHclTerraform(struct?: DdosZoneTemplateQuicActionOnInitialOutputReference | DdosZoneTemplateQuicActionOnInitial): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retry_token_authentication_dynamic: {
      value: cdktf.stringToHclTerraform(struct!.retryTokenAuthenticationDynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_token_authentication_static: {
      value: cdktf.stringToHclTerraform(struct!.retryTokenAuthenticationStatic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_unauthenticated_initial_decrypt: {
      value: cdktf.numberToHclTerraform(struct!.retryUnauthenticatedInitialDecrypt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scid_length: {
      value: cdktf.numberToHclTerraform(struct!.scidLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unauth_short_hdr_action: {
      value: cdktf.stringToHclTerraform(struct!.unauthShortHdrAction),
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

export class DdosZoneTemplateQuicActionOnInitialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateQuicActionOnInitial | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retryTokenAuthenticationDynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryTokenAuthenticationDynamic = this._retryTokenAuthenticationDynamic;
    }
    if (this._retryTokenAuthenticationStatic !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryTokenAuthenticationStatic = this._retryTokenAuthenticationStatic;
    }
    if (this._retryUnauthenticatedInitialDecrypt !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryUnauthenticatedInitialDecrypt = this._retryUnauthenticatedInitialDecrypt;
    }
    if (this._scidLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.scidLength = this._scidLength;
    }
    if (this._unauthShortHdrAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.unauthShortHdrAction = this._unauthShortHdrAction;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateQuicActionOnInitial | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retryTokenAuthenticationDynamic = undefined;
      this._retryTokenAuthenticationStatic = undefined;
      this._retryUnauthenticatedInitialDecrypt = undefined;
      this._scidLength = undefined;
      this._unauthShortHdrAction = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retryTokenAuthenticationDynamic = value.retryTokenAuthenticationDynamic;
      this._retryTokenAuthenticationStatic = value.retryTokenAuthenticationStatic;
      this._retryUnauthenticatedInitialDecrypt = value.retryUnauthenticatedInitialDecrypt;
      this._scidLength = value.scidLength;
      this._unauthShortHdrAction = value.unauthShortHdrAction;
      this._uuid = value.uuid;
    }
  }

  // retry_token_authentication_dynamic - computed: false, optional: true, required: false
  private _retryTokenAuthenticationDynamic?: string; 
  public get retryTokenAuthenticationDynamic() {
    return this.getStringAttribute('retry_token_authentication_dynamic');
  }
  public set retryTokenAuthenticationDynamic(value: string) {
    this._retryTokenAuthenticationDynamic = value;
  }
  public resetRetryTokenAuthenticationDynamic() {
    this._retryTokenAuthenticationDynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryTokenAuthenticationDynamicInput() {
    return this._retryTokenAuthenticationDynamic;
  }

  // retry_token_authentication_static - computed: false, optional: true, required: false
  private _retryTokenAuthenticationStatic?: string; 
  public get retryTokenAuthenticationStatic() {
    return this.getStringAttribute('retry_token_authentication_static');
  }
  public set retryTokenAuthenticationStatic(value: string) {
    this._retryTokenAuthenticationStatic = value;
  }
  public resetRetryTokenAuthenticationStatic() {
    this._retryTokenAuthenticationStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryTokenAuthenticationStaticInput() {
    return this._retryTokenAuthenticationStatic;
  }

  // retry_unauthenticated_initial_decrypt - computed: false, optional: true, required: false
  private _retryUnauthenticatedInitialDecrypt?: number; 
  public get retryUnauthenticatedInitialDecrypt() {
    return this.getNumberAttribute('retry_unauthenticated_initial_decrypt');
  }
  public set retryUnauthenticatedInitialDecrypt(value: number) {
    this._retryUnauthenticatedInitialDecrypt = value;
  }
  public resetRetryUnauthenticatedInitialDecrypt() {
    this._retryUnauthenticatedInitialDecrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryUnauthenticatedInitialDecryptInput() {
    return this._retryUnauthenticatedInitialDecrypt;
  }

  // scid_length - computed: false, optional: true, required: false
  private _scidLength?: number; 
  public get scidLength() {
    return this.getNumberAttribute('scid_length');
  }
  public set scidLength(value: number) {
    this._scidLength = value;
  }
  public resetScidLength() {
    this._scidLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scidLengthInput() {
    return this._scidLength;
  }

  // unauth_short_hdr_action - computed: false, optional: true, required: false
  private _unauthShortHdrAction?: string; 
  public get unauthShortHdrAction() {
    return this.getStringAttribute('unauth_short_hdr_action');
  }
  public set unauthShortHdrAction(value: string) {
    this._unauthShortHdrAction = value;
  }
  public resetUnauthShortHdrAction() {
    this._unauthShortHdrAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthShortHdrActionInput() {
    return this._unauthShortHdrAction;
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
export interface DdosZoneTemplateQuicPktRateCfg {
  /**
  * 'aead-tag': AEAD Tag; 'dcid': Destination Connection ID;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#per DdosZoneTemplateQuic#per}
  */
  readonly per?: string;
  /**
  * Limiting rate (Range: 5-16000000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#quic_pkt_rate DdosZoneTemplateQuic#quic_pkt_rate}
  */
  readonly quicPktRate?: number;
  /**
  * QUIC Packet Source Rate Limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#quic_pkt_rate_limit DdosZoneTemplateQuic#quic_pkt_rate_limit}
  */
  readonly quicPktRateLimit?: number;
}

export function ddosZoneTemplateQuicPktRateCfgToTerraform(struct?: DdosZoneTemplateQuicPktRateCfgOutputReference | DdosZoneTemplateQuicPktRateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    per: cdktf.stringToTerraform(struct!.per),
    quic_pkt_rate: cdktf.numberToTerraform(struct!.quicPktRate),
    quic_pkt_rate_limit: cdktf.numberToTerraform(struct!.quicPktRateLimit),
  }
}


export function ddosZoneTemplateQuicPktRateCfgToHclTerraform(struct?: DdosZoneTemplateQuicPktRateCfgOutputReference | DdosZoneTemplateQuicPktRateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    per: {
      value: cdktf.stringToHclTerraform(struct!.per),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quic_pkt_rate: {
      value: cdktf.numberToHclTerraform(struct!.quicPktRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_pkt_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.quicPktRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateQuicPktRateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateQuicPktRateCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._per !== undefined) {
      hasAnyValues = true;
      internalValueResult.per = this._per;
    }
    if (this._quicPktRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicPktRate = this._quicPktRate;
    }
    if (this._quicPktRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicPktRateLimit = this._quicPktRateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateQuicPktRateCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._per = undefined;
      this._quicPktRate = undefined;
      this._quicPktRateLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._per = value.per;
      this._quicPktRate = value.quicPktRate;
      this._quicPktRateLimit = value.quicPktRateLimit;
    }
  }

  // per - computed: false, optional: true, required: false
  private _per?: string; 
  public get per() {
    return this.getStringAttribute('per');
  }
  public set per(value: string) {
    this._per = value;
  }
  public resetPer() {
    this._per = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perInput() {
    return this._per;
  }

  // quic_pkt_rate - computed: false, optional: true, required: false
  private _quicPktRate?: number; 
  public get quicPktRate() {
    return this.getNumberAttribute('quic_pkt_rate');
  }
  public set quicPktRate(value: number) {
    this._quicPktRate = value;
  }
  public resetQuicPktRate() {
    this._quicPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicPktRateInput() {
    return this._quicPktRate;
  }

  // quic_pkt_rate_limit - computed: false, optional: true, required: false
  private _quicPktRateLimit?: number; 
  public get quicPktRateLimit() {
    return this.getNumberAttribute('quic_pkt_rate_limit');
  }
  public set quicPktRateLimit(value: number) {
    this._quicPktRateLimit = value;
  }
  public resetQuicPktRateLimit() {
    this._quicPktRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicPktRateLimitInput() {
    return this._quicPktRateLimit;
  }
}
export interface DdosZoneTemplateQuicVersionSupportedListMalformedCheck {
  /**
  * 'drop': Drop packets (Default); 'blacklist-src': Blacklist-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#malformed_check_action DdosZoneTemplateQuic#malformed_check_action}
  */
  readonly malformedCheckAction?: string;
  /**
  * Configure action-list to take. Overwrites version action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#malformed_check_action_list_name DdosZoneTemplateQuic#malformed_check_action_list_name}
  */
  readonly malformedCheckActionListName?: string;
  /**
  * 'enable': Enable malformed check;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#malformed_enable DdosZoneTemplateQuic#malformed_enable}
  */
  readonly malformedEnable?: string;
  /**
  * Set the maximum destination CID length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#max_destination_cid_length DdosZoneTemplateQuic#max_destination_cid_length}
  */
  readonly maxDestinationCidLength?: number;
  /**
  * Set the maximum source CID length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#max_source_cid_length DdosZoneTemplateQuic#max_source_cid_length}
  */
  readonly maxSourceCidLength?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#uuid DdosZoneTemplateQuic#uuid}
  */
  readonly uuid?: string;
}

export function ddosZoneTemplateQuicVersionSupportedListMalformedCheckToTerraform(struct?: DdosZoneTemplateQuicVersionSupportedListMalformedCheckOutputReference | DdosZoneTemplateQuicVersionSupportedListMalformedCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    malformed_check_action: cdktf.stringToTerraform(struct!.malformedCheckAction),
    malformed_check_action_list_name: cdktf.stringToTerraform(struct!.malformedCheckActionListName),
    malformed_enable: cdktf.stringToTerraform(struct!.malformedEnable),
    max_destination_cid_length: cdktf.numberToTerraform(struct!.maxDestinationCidLength),
    max_source_cid_length: cdktf.numberToTerraform(struct!.maxSourceCidLength),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosZoneTemplateQuicVersionSupportedListMalformedCheckToHclTerraform(struct?: DdosZoneTemplateQuicVersionSupportedListMalformedCheckOutputReference | DdosZoneTemplateQuicVersionSupportedListMalformedCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    malformed_check_action: {
      value: cdktf.stringToHclTerraform(struct!.malformedCheckAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_check_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.malformedCheckActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_enable: {
      value: cdktf.stringToHclTerraform(struct!.malformedEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_destination_cid_length: {
      value: cdktf.numberToHclTerraform(struct!.maxDestinationCidLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_source_cid_length: {
      value: cdktf.numberToHclTerraform(struct!.maxSourceCidLength),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateQuicVersionSupportedListMalformedCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateQuicVersionSupportedListMalformedCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._malformedCheckAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedCheckAction = this._malformedCheckAction;
    }
    if (this._malformedCheckActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedCheckActionListName = this._malformedCheckActionListName;
    }
    if (this._malformedEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedEnable = this._malformedEnable;
    }
    if (this._maxDestinationCidLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDestinationCidLength = this._maxDestinationCidLength;
    }
    if (this._maxSourceCidLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSourceCidLength = this._maxSourceCidLength;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateQuicVersionSupportedListMalformedCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._malformedCheckAction = undefined;
      this._malformedCheckActionListName = undefined;
      this._malformedEnable = undefined;
      this._maxDestinationCidLength = undefined;
      this._maxSourceCidLength = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._malformedCheckAction = value.malformedCheckAction;
      this._malformedCheckActionListName = value.malformedCheckActionListName;
      this._malformedEnable = value.malformedEnable;
      this._maxDestinationCidLength = value.maxDestinationCidLength;
      this._maxSourceCidLength = value.maxSourceCidLength;
      this._uuid = value.uuid;
    }
  }

  // malformed_check_action - computed: false, optional: true, required: false
  private _malformedCheckAction?: string; 
  public get malformedCheckAction() {
    return this.getStringAttribute('malformed_check_action');
  }
  public set malformedCheckAction(value: string) {
    this._malformedCheckAction = value;
  }
  public resetMalformedCheckAction() {
    this._malformedCheckAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedCheckActionInput() {
    return this._malformedCheckAction;
  }

  // malformed_check_action_list_name - computed: false, optional: true, required: false
  private _malformedCheckActionListName?: string; 
  public get malformedCheckActionListName() {
    return this.getStringAttribute('malformed_check_action_list_name');
  }
  public set malformedCheckActionListName(value: string) {
    this._malformedCheckActionListName = value;
  }
  public resetMalformedCheckActionListName() {
    this._malformedCheckActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedCheckActionListNameInput() {
    return this._malformedCheckActionListName;
  }

  // malformed_enable - computed: false, optional: true, required: false
  private _malformedEnable?: string; 
  public get malformedEnable() {
    return this.getStringAttribute('malformed_enable');
  }
  public set malformedEnable(value: string) {
    this._malformedEnable = value;
  }
  public resetMalformedEnable() {
    this._malformedEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedEnableInput() {
    return this._malformedEnable;
  }

  // max_destination_cid_length - computed: false, optional: true, required: false
  private _maxDestinationCidLength?: number; 
  public get maxDestinationCidLength() {
    return this.getNumberAttribute('max_destination_cid_length');
  }
  public set maxDestinationCidLength(value: number) {
    this._maxDestinationCidLength = value;
  }
  public resetMaxDestinationCidLength() {
    this._maxDestinationCidLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDestinationCidLengthInput() {
    return this._maxDestinationCidLength;
  }

  // max_source_cid_length - computed: false, optional: true, required: false
  private _maxSourceCidLength?: number; 
  public get maxSourceCidLength() {
    return this.getNumberAttribute('max_source_cid_length');
  }
  public set maxSourceCidLength(value: number) {
    this._maxSourceCidLength = value;
  }
  public resetMaxSourceCidLength() {
    this._maxSourceCidLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSourceCidLengthInput() {
    return this._maxSourceCidLength;
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
export interface DdosZoneTemplateQuicVersionSupportedListStruct {
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#user_tag DdosZoneTemplateQuic#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#uuid DdosZoneTemplateQuic#uuid}
  */
  readonly uuid?: string;
  /**
  * 'drop': Drop packets; 'blacklist-src': Blacklist-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#version_action DdosZoneTemplateQuic#version_action}
  */
  readonly versionAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#version_action_list_name DdosZoneTemplateQuic#version_action_list_name}
  */
  readonly versionActionListName?: string;
  /**
  * Version supported range end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#version_end DdosZoneTemplateQuic#version_end}
  */
  readonly versionEnd: string;
  /**
  * Configure versions supported in hex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#version_start DdosZoneTemplateQuic#version_start}
  */
  readonly versionStart: string;
  /**
  * malformed_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#malformed_check DdosZoneTemplateQuic#malformed_check}
  */
  readonly malformedCheck?: DdosZoneTemplateQuicVersionSupportedListMalformedCheck;
}

export function ddosZoneTemplateQuicVersionSupportedListStructToTerraform(struct?: DdosZoneTemplateQuicVersionSupportedListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    version_action: cdktf.stringToTerraform(struct!.versionAction),
    version_action_list_name: cdktf.stringToTerraform(struct!.versionActionListName),
    version_end: cdktf.stringToTerraform(struct!.versionEnd),
    version_start: cdktf.stringToTerraform(struct!.versionStart),
    malformed_check: ddosZoneTemplateQuicVersionSupportedListMalformedCheckToTerraform(struct!.malformedCheck),
  }
}


export function ddosZoneTemplateQuicVersionSupportedListStructToHclTerraform(struct?: DdosZoneTemplateQuicVersionSupportedListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    version_action: {
      value: cdktf.stringToHclTerraform(struct!.versionAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.versionActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_end: {
      value: cdktf.stringToHclTerraform(struct!.versionEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_start: {
      value: cdktf.stringToHclTerraform(struct!.versionStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_check: {
      value: ddosZoneTemplateQuicVersionSupportedListMalformedCheckToHclTerraform(struct!.malformedCheck),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateQuicVersionSupportedListMalformedCheckList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateQuicVersionSupportedListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateQuicVersionSupportedListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._versionAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionAction = this._versionAction;
    }
    if (this._versionActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionActionListName = this._versionActionListName;
    }
    if (this._versionEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionEnd = this._versionEnd;
    }
    if (this._versionStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStart = this._versionStart;
    }
    if (this._malformedCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedCheck = this._malformedCheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateQuicVersionSupportedListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._versionAction = undefined;
      this._versionActionListName = undefined;
      this._versionEnd = undefined;
      this._versionStart = undefined;
      this._malformedCheck.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._versionAction = value.versionAction;
      this._versionActionListName = value.versionActionListName;
      this._versionEnd = value.versionEnd;
      this._versionStart = value.versionStart;
      this._malformedCheck.internalValue = value.malformedCheck;
    }
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

  // version_action - computed: false, optional: true, required: false
  private _versionAction?: string; 
  public get versionAction() {
    return this.getStringAttribute('version_action');
  }
  public set versionAction(value: string) {
    this._versionAction = value;
  }
  public resetVersionAction() {
    this._versionAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionActionInput() {
    return this._versionAction;
  }

  // version_action_list_name - computed: false, optional: true, required: false
  private _versionActionListName?: string; 
  public get versionActionListName() {
    return this.getStringAttribute('version_action_list_name');
  }
  public set versionActionListName(value: string) {
    this._versionActionListName = value;
  }
  public resetVersionActionListName() {
    this._versionActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionActionListNameInput() {
    return this._versionActionListName;
  }

  // version_end - computed: false, optional: false, required: true
  private _versionEnd?: string; 
  public get versionEnd() {
    return this.getStringAttribute('version_end');
  }
  public set versionEnd(value: string) {
    this._versionEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionEndInput() {
    return this._versionEnd;
  }

  // version_start - computed: false, optional: false, required: true
  private _versionStart?: string; 
  public get versionStart() {
    return this.getStringAttribute('version_start');
  }
  public set versionStart(value: string) {
    this._versionStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStartInput() {
    return this._versionStart;
  }

  // malformed_check - computed: false, optional: true, required: false
  private _malformedCheck = new DdosZoneTemplateQuicVersionSupportedListMalformedCheckOutputReference(this, "malformed_check");
  public get malformedCheck() {
    return this._malformedCheck;
  }
  public putMalformedCheck(value: DdosZoneTemplateQuicVersionSupportedListMalformedCheck) {
    this._malformedCheck.internalValue = value;
  }
  public resetMalformedCheck() {
    this._malformedCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedCheckInput() {
    return this._malformedCheck.internalValue;
  }
}

export class DdosZoneTemplateQuicVersionSupportedListStructList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateQuicVersionSupportedListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateQuicVersionSupportedListStructOutputReference {
    return new DdosZoneTemplateQuicVersionSupportedListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic thunder_ddos_zone_template_quic}
*/
export class DdosZoneTemplateQuic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_quic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateQuic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateQuic to import
  * @param importFromId The id of the existing DdosZoneTemplateQuic that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateQuic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_quic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic thunder_ddos_zone_template_quic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateQuicConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateQuicConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_quic',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createConnOnInitialOnly = config.createConnOnInitialOnly;
    this._dropOnNoVersionMatch = config.dropOnNoVersionMatch;
    this._fixedBitCheckDisable = config.fixedBitCheckDisable;
    this._id = config.id;
    this._quicTmplName = config.quicTmplName;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._actionOnInitial.internalValue = config.actionOnInitial;
    this._pktRateCfg.internalValue = config.pktRateCfg;
    this._versionSupportedList.internalValue = config.versionSupportedList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_conn_on_initial_only - computed: false, optional: true, required: false
  private _createConnOnInitialOnly?: number; 
  public get createConnOnInitialOnly() {
    return this.getNumberAttribute('create_conn_on_initial_only');
  }
  public set createConnOnInitialOnly(value: number) {
    this._createConnOnInitialOnly = value;
  }
  public resetCreateConnOnInitialOnly() {
    this._createConnOnInitialOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createConnOnInitialOnlyInput() {
    return this._createConnOnInitialOnly;
  }

  // drop_on_no_version_match - computed: false, optional: true, required: false
  private _dropOnNoVersionMatch?: number; 
  public get dropOnNoVersionMatch() {
    return this.getNumberAttribute('drop_on_no_version_match');
  }
  public set dropOnNoVersionMatch(value: number) {
    this._dropOnNoVersionMatch = value;
  }
  public resetDropOnNoVersionMatch() {
    this._dropOnNoVersionMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropOnNoVersionMatchInput() {
    return this._dropOnNoVersionMatch;
  }

  // fixed_bit_check_disable - computed: false, optional: true, required: false
  private _fixedBitCheckDisable?: number; 
  public get fixedBitCheckDisable() {
    return this.getNumberAttribute('fixed_bit_check_disable');
  }
  public set fixedBitCheckDisable(value: number) {
    this._fixedBitCheckDisable = value;
  }
  public resetFixedBitCheckDisable() {
    this._fixedBitCheckDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedBitCheckDisableInput() {
    return this._fixedBitCheckDisable;
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

  // quic_tmpl_name - computed: false, optional: false, required: true
  private _quicTmplName?: string; 
  public get quicTmplName() {
    return this.getStringAttribute('quic_tmpl_name');
  }
  public set quicTmplName(value: string) {
    this._quicTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quicTmplNameInput() {
    return this._quicTmplName;
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

  // action_on_initial - computed: false, optional: true, required: false
  private _actionOnInitial = new DdosZoneTemplateQuicActionOnInitialOutputReference(this, "action_on_initial");
  public get actionOnInitial() {
    return this._actionOnInitial;
  }
  public putActionOnInitial(value: DdosZoneTemplateQuicActionOnInitial) {
    this._actionOnInitial.internalValue = value;
  }
  public resetActionOnInitial() {
    this._actionOnInitial.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnInitialInput() {
    return this._actionOnInitial.internalValue;
  }

  // pkt_rate_cfg - computed: false, optional: true, required: false
  private _pktRateCfg = new DdosZoneTemplateQuicPktRateCfgOutputReference(this, "pkt_rate_cfg");
  public get pktRateCfg() {
    return this._pktRateCfg;
  }
  public putPktRateCfg(value: DdosZoneTemplateQuicPktRateCfg) {
    this._pktRateCfg.internalValue = value;
  }
  public resetPktRateCfg() {
    this._pktRateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktRateCfgInput() {
    return this._pktRateCfg.internalValue;
  }

  // version_supported_list - computed: false, optional: true, required: false
  private _versionSupportedList = new DdosZoneTemplateQuicVersionSupportedListStructList(this, "version_supported_list", false);
  public get versionSupportedList() {
    return this._versionSupportedList;
  }
  public putVersionSupportedList(value: DdosZoneTemplateQuicVersionSupportedListStruct[] | cdktf.IResolvable) {
    this._versionSupportedList.internalValue = value;
  }
  public resetVersionSupportedList() {
    this._versionSupportedList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionSupportedListInput() {
    return this._versionSupportedList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_conn_on_initial_only: cdktf.numberToTerraform(this._createConnOnInitialOnly),
      drop_on_no_version_match: cdktf.numberToTerraform(this._dropOnNoVersionMatch),
      fixed_bit_check_disable: cdktf.numberToTerraform(this._fixedBitCheckDisable),
      id: cdktf.stringToTerraform(this._id),
      quic_tmpl_name: cdktf.stringToTerraform(this._quicTmplName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      action_on_initial: ddosZoneTemplateQuicActionOnInitialToTerraform(this._actionOnInitial.internalValue),
      pkt_rate_cfg: ddosZoneTemplateQuicPktRateCfgToTerraform(this._pktRateCfg.internalValue),
      version_supported_list: cdktf.listMapper(ddosZoneTemplateQuicVersionSupportedListStructToTerraform, true)(this._versionSupportedList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_conn_on_initial_only: {
        value: cdktf.numberToHclTerraform(this._createConnOnInitialOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_on_no_version_match: {
        value: cdktf.numberToHclTerraform(this._dropOnNoVersionMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fixed_bit_check_disable: {
        value: cdktf.numberToHclTerraform(this._fixedBitCheckDisable),
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
      quic_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._quicTmplName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      action_on_initial: {
        value: ddosZoneTemplateQuicActionOnInitialToHclTerraform(this._actionOnInitial.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateQuicActionOnInitialList",
      },
      pkt_rate_cfg: {
        value: ddosZoneTemplateQuicPktRateCfgToHclTerraform(this._pktRateCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateQuicPktRateCfgList",
      },
      version_supported_list: {
        value: cdktf.listMapperHcl(ddosZoneTemplateQuicVersionSupportedListStructToHclTerraform, true)(this._versionSupportedList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateQuicVersionSupportedListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
