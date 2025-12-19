// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_alg_sip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6LsnAlgSipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_alg_sip#id Cgnv6LsnAlgSip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * RTP/RTCP STUN timeout in minutes (Default is 5 minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_alg_sip#rtp_stun_timeout Cgnv6LsnAlgSip#rtp_stun_timeout}
  */
  readonly rtpStunTimeout?: number;
  /**
  * 'enable': Enable SIP ALG for LSN;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_alg_sip#sip_value Cgnv6LsnAlgSip#sip_value}
  */
  readonly sipValue?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_alg_sip#uuid Cgnv6LsnAlgSip#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_alg_sip#sampling_enable Cgnv6LsnAlgSip#sampling_enable}
  */
  readonly samplingEnable?: Cgnv6LsnAlgSipSamplingEnable[] | cdktf.IResolvable;
}
export interface Cgnv6LsnAlgSipSamplingEnable {
  /**
  * 'all': all; 'method-register': SIP Method REGISTER; 'method-invite': SIP Method INVITE; 'method-ack': SIP Method ACK; 'method-cancel': SIP Method CANCEL; 'method-bye': SIP Method BYE; 'method-options': SIP Method OPTIONS; 'method-prack': SIP Method PRACK; 'method-subscribe': SIP Method SUBSCRIBE; 'method-notify': SIP Method NOTIFY; 'method-publish': SIP Method PUBLISH; 'method-info': SIP Method INFO; 'method-refer': SIP Method REFER; 'method-message': SIP Method MESSAGE; 'method-update': SIP Method UPDATE; 'method-unknown': SIP Method UNKNOWN; 'parse-error': SIP Message Parse Error; 'req-uri-op-failrue': SIP Operate Request Uri Failure; 'via-hdr-op-failrue': SIP Operate Via Header Failure; 'contact-hdr-op-failrue': SIP Operate Contact Header Failure; 'from-hdr-op-failrue': SIP Operate From Header Failure; 'to-hdr-op-failrue': SIP Operate To Header Failure; 'route-hdr-op-failrue': SIP Operate Route Header Failure; 'record-route-hdr-op-failrue': SIP Operate Record-Route Header Failure; 'content-length-hdr-op-failrue': SIP Operate Content-Length Failure; 'third-party-registration': SIP Third-Party Registration; 'conn-ext-creation-failure': SIP Create Connection Extension Failure; 'alloc-contact-port-failure': SIP Alloc Contact Port Failure; 'outside-contact-port-mismatch': SIP Outside Contact Port Mismatch NAT Port; 'inside-contact-port-mismatch': SIP Inside Contact Port Mismatch; 'third-party-sdp': SIP Third-Party SDP; 'sdp-process-candidate-failure': SIP Operate SDP Media Candidate Attribute Failure; 'sdp-op-failure': SIP Operate SDP Failure; 'sdp-alloc-port-map-success': SIP Alloc SDP Port Map Success; 'sdp-alloc-port-map-failure': SIP Alloc SDP Port Map Failure; 'modify-failure': SIP Message Modify Failure; 'rewrite-failure': SIP Message Rewrite Failure; 'tcp-out-of-order-drop': TCP Out-of-Order Drop; 'smp-conn-alloc-failure': SMP Helper Conn Alloc Failure; 'helper-found': SMP Helper Conn Found; 'helper-created': SMP Helper Conn Created; 'helper-deleted': SMP Helper Conn Already Deleted; 'helper-freed': SMP Helper Conn Freed; 'helper-failure': SMP Helper Failure;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_alg_sip#counters1 Cgnv6LsnAlgSip#counters1}
  */
  readonly counters1?: string;
}

export function cgnv6LsnAlgSipSamplingEnableToTerraform(struct?: Cgnv6LsnAlgSipSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function cgnv6LsnAlgSipSamplingEnableToHclTerraform(struct?: Cgnv6LsnAlgSipSamplingEnable | cdktf.IResolvable): any {
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

export class Cgnv6LsnAlgSipSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6LsnAlgSipSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Cgnv6LsnAlgSipSamplingEnable | cdktf.IResolvable | undefined) {
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

export class Cgnv6LsnAlgSipSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : Cgnv6LsnAlgSipSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6LsnAlgSipSamplingEnableOutputReference {
    return new Cgnv6LsnAlgSipSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_alg_sip thunder_cgnv6_lsn_alg_sip}
*/
export class Cgnv6LsnAlgSip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lsn_alg_sip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6LsnAlgSip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6LsnAlgSip to import
  * @param importFromId The id of the existing Cgnv6LsnAlgSip that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_alg_sip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6LsnAlgSip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lsn_alg_sip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_alg_sip thunder_cgnv6_lsn_alg_sip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6LsnAlgSipConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6LsnAlgSipConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lsn_alg_sip',
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
    this._id = config.id;
    this._rtpStunTimeout = config.rtpStunTimeout;
    this._sipValue = config.sipValue;
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

  // rtp_stun_timeout - computed: false, optional: true, required: false
  private _rtpStunTimeout?: number; 
  public get rtpStunTimeout() {
    return this.getNumberAttribute('rtp_stun_timeout');
  }
  public set rtpStunTimeout(value: number) {
    this._rtpStunTimeout = value;
  }
  public resetRtpStunTimeout() {
    this._rtpStunTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtpStunTimeoutInput() {
    return this._rtpStunTimeout;
  }

  // sip_value - computed: false, optional: true, required: false
  private _sipValue?: string; 
  public get sipValue() {
    return this.getStringAttribute('sip_value');
  }
  public set sipValue(value: string) {
    this._sipValue = value;
  }
  public resetSipValue() {
    this._sipValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipValueInput() {
    return this._sipValue;
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
  private _samplingEnable = new Cgnv6LsnAlgSipSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: Cgnv6LsnAlgSipSamplingEnable[] | cdktf.IResolvable) {
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
      rtp_stun_timeout: cdktf.numberToTerraform(this._rtpStunTimeout),
      sip_value: cdktf.stringToTerraform(this._sipValue),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(cgnv6LsnAlgSipSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
      rtp_stun_timeout: {
        value: cdktf.numberToHclTerraform(this._rtpStunTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sip_value: {
        value: cdktf.stringToHclTerraform(this._sipValue),
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
        value: cdktf.listMapperHcl(cgnv6LsnAlgSipSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LsnAlgSipSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
