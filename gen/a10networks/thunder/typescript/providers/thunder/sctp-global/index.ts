// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sctp_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SctpGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sctp_global#id SctpGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sctp_global#uuid SctpGlobal#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sctp_global#sampling_enable SctpGlobal#sampling_enable}
  */
  readonly samplingEnable?: SctpGlobalSamplingEnable[] | cdktf.IResolvable;
}
export interface SctpGlobalSamplingEnable {
  /**
  * 'all': all; 'sctp-static-nat-session-created': SCTP Static NAT Session Created; 'sctp-static-nat-session-deleted': SCTP Static NAT Session Deleted; 'sctp-fw-session-created': SCTP Firewall Session Created; 'sctp-fw-session-deleted': SCTP Firewall Session Deleted; 'pkt-err-drop': Packet Error Drop; 'bad-csum': Bad Checksum; 'bad-payload-drop': Bad Payload Drop; 'bad-alignment-drop': Bad Alignment Drop; 'oos-pkt-drop': Out-of-state Packet Drop; 'max-multi-home-drop': Maximum Multi-homing IP Addresses Drop; 'multi-home-remove-ip-skip': Multi-homing Remove IP Parameter Skip; 'multi-home-addr-not-found-drop': Multi-homing IP Address Not Found Drop; 'static-nat-cfg-not-found': Static NAT Config Not Found Drop; 'cfg-err-drop': Configuration Error Drop; 'vrrp-standby-drop': NAT Resource VRRP-A Standby Drop; 'invalid-frag-chunk-drop': Invalid Fragmented Chunks Drop; 'disallowed-chunk-filtered': Disallowed Chunk Filtered; 'disallowed-pkt-drop': Disallowed Packet Drop; 'rate-limit-drop': Rate-limit Drop; 'sby-session-created': Standby Session Created; 'sby-session-create-fail': Standby Session Create Failed; 'sby-session-updated': Standby Session Updated; 'sby-session-update-fail': Standby Session Update Failed; 'sby-static-nat-cfg-not-found': Static NAT Config Not Found on Standby; 'sctp-out-of-system-memory': Out of System Memory; 'conn_ext_size_max': Max Conn Extension Size; 'bad-csum-shadow': Bad Checksum Shadow; 'bad-payload-drop-shadow': Bad Packet Payload Drop Shadow; 'bad-alignment-drop-shadow': Bad Packet Alignment Drop Shadow; 'sctp-chunk-type-init': SCTP Chunk Type INIT; 'sctp-chunk-type-init-ack': SCTP Chunk Type INIT-ACK; 'sctp-chunk-type-cookie-echo': SCTP Chunk Type COOKIE-ECHO; 'sctp-chunk-type-cookie-ack': SCTP Chunk Type COOKIE-ACK; 'sctp-chunk-type-sack': SCTP Chunk Type SACK; 'sctp-chunk-type-asconf': SCTP Chunk Type ASCONF; 'sctp-chunk-type-asconf-ack': SCTP Chunk Type ASCONF-ACK; 'sctp-chunk-type-data': SCTP Chunk Type DATA; 'sctp-chunk-type-abort': SCTP Chunk Type ABORT; 'sctp-chunk-type-shutdown': SCTP Chunk Type SHUTDOWN; 'sctp-chunk-type-shutdown-ack': SCTP Chunk Type SHUTDOWN-ACK; 'sctp-chunk-type-shutdown-complete': SCTP Chunk Type SHUTDOWN-COMPLETE; 'sctp-chunk-type-error-op': SCTP Chunk Type ERROR-OP; 'sctp-chunk-type-heartbeat': SCTP Chunk Type HEARTBEAT; 'sctp-chunk-type-heartbeat-ack': SCTP Chunk Type HEARTBEAT-ACK; 'sctp-chunk-type-other': SCTP Chunk Type OTHER; 'sctp-heartbeat-no-tuple': SCTP HEARTBEAT/ACK no tuple found; 'sctp-data-no-tuple': SCTP DATA chunk no tuple found; 'sctp-data-no-ext-match': SCTP DATA no extended match found; 'sctp-chunk-type-init-drop': SCTP Chunk Type INIT drop; 'sctp-chunk-type-init-ack-drop': SCTP Chunk Type INIT-ACK drop; 'sctp-chunk-type-shutdown-complete-drop': SCTP Chunk Type SHUTDOWN-COMPLETE drop; 'sctp-chunk-type-abort-data-drop': SCTP Chunk Type with ABORT and DATA drop; 'sctp-chunk-heart-beat-clubbed': SCTP HEARTBEAT chunk with other chunk; 'sctp-retx-init-ack-drop': SCTP Chunk Type INIT_ACK with retx mismatched vtag drop; 'sctp-route-err-heartbeat-drop': SCTP HEARTBEAT ROUTE lookup failed drop; 'sctp-reroute-failover': SCTP REROUTE lookup for chunks other than HEARTBEAT; 'sctp-route-err-drop': SCTP ROUTE lookup failed for chunks other than HEARTBEAT drop; 'sctp-no-ext-match': SCTP no extended match found; 'sctp-retx-init-ack': SCTP Chunk Type INIT_ACK retransmitted; 'sctp-retx-init-drop': SCTP Retransmitted INIT drop; 'sctp-retx-init': SCTP Retransmitted INIT; 'sctp-asconf-process-drop': SCTP ASCONF process drop; 'sctp-init-vtag-zero-drop': SCTP INIT VTAG ZERO drop; 'pkt-len-err-drop': Invalid Packet Length Drop; 'pkt-chunk-len-err-drop': Invalid Chunk Length Drop; 'pkt-asconf-param-len-err-drop': Invalid Parameter Length Drop;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sctp_global#counters1 SctpGlobal#counters1}
  */
  readonly counters1?: string;
}

export function sctpGlobalSamplingEnableToTerraform(struct?: SctpGlobalSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function sctpGlobalSamplingEnableToHclTerraform(struct?: SctpGlobalSamplingEnable | cdktf.IResolvable): any {
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

export class SctpGlobalSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SctpGlobalSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SctpGlobalSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SctpGlobalSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SctpGlobalSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SctpGlobalSamplingEnableOutputReference {
    return new SctpGlobalSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sctp_global thunder_sctp_global}
*/
export class SctpGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sctp_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SctpGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SctpGlobal to import
  * @param importFromId The id of the existing SctpGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sctp_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SctpGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sctp_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sctp_global thunder_sctp_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SctpGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SctpGlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_sctp_global',
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
  private _samplingEnable = new SctpGlobalSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SctpGlobalSamplingEnable[] | cdktf.IResolvable) {
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
      sampling_enable: cdktf.listMapper(sctpGlobalSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
        value: cdktf.listMapperHcl(sctpGlobalSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SctpGlobalSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
