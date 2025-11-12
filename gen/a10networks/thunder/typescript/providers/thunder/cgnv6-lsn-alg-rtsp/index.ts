// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_alg_rtsp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6LsnAlgRtspConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_alg_rtsp#id Cgnv6LsnAlgRtsp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'enable': Enable RTSP ALG for LSN;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_alg_rtsp#rtsp_value Cgnv6LsnAlgRtsp#rtsp_value}
  */
  readonly rtspValue?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_alg_rtsp#uuid Cgnv6LsnAlgRtsp#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_alg_rtsp#sampling_enable Cgnv6LsnAlgRtsp#sampling_enable}
  */
  readonly samplingEnable?: Cgnv6LsnAlgRtspSamplingEnable[] | cdktf.IResolvable;
}
export interface Cgnv6LsnAlgRtspSamplingEnable {
  /**
  * 'all': all; 'streams-created': Streams Created; 'streams-freed': Streams Freed; 'stream-creation-failure': Stream Creation Failures; 'ports-allocated': Stream Client Ports Allocated; 'ports-freed': Stream Client Ports Freed; 'port-allocation-failure': Stream Client Port Allocation Failures; 'unknown-client-port-from-server': Server Replies With Unknown Client Ports; 'data-session-created': Data Session Created; 'data-session-freed': Data Session Freed; 'no-session-mem': Data Session Creation Failures; 'ha-sent': HA Sent; 'ha-rcv': HA RCV; 'smp-inserted': SMP Session Inserted; 'smp-removed': SMP Session Removed; 'smp-reused': SMP Session Reused; 'nat-pool-standby': New Session NAT Pool Standby; 'smp-deleted': New Session SMP Already Deleted; 'control-closed': New Session Closed; 'data-session-exists': New Session Already Exists; 'data-session-creation-failure': New Data Session Creation Failure; 'rtp-reversed': RTP Reverse Creation; 'rtcp-reversed': RTCP Reverse Creation; 'cross-cpu-sent': Cross CPU Sent; 'cross-cpu-rcv': Cross CPU Received; 'cross-cpu-no-session': Cross CPU No Session Found; 'cross-cpu-created': Cross CPU Creation; 'cross-cpu-rcv-failure': Cross CPU Receive Failure; 'data-free-smp-retry-lookup': Data Session Free SMP Retry Lookup; 'data-free-smp-not-found': Data Session Free SMP Not Found; 'ha-streams-sent': HA Streams Sent; 'ha-streams-rcv': HA Streams Received; 'ha-stream-incompatible': HA Incompatible Streams Received; 'ha-stream-exists': HA Stream Already Exists; 'ha-port-allocation-failure': HA Stream Port Allocation Failure; 'ha-data-session-sent': HA Data Session Sent; 'ha-data-session-rcv': HA Data Session Received; 'ha-data-no-smp': HA Data Session SMP Not Found; 'ha-control-closed': HA New Data Control Session Closed; 'ha-data-exists': HA New Data Session Already Exists; 'ha-extension-failure': HA Conn Extension Failure; 'ha-stream-smp-reused': HA SMP Session Reused; 'ha-stream-smp-acquire-failure': HA SMP Session Acquire Failure; 'smp-app-type-mismatch': SMP ALG App Type Mismatch;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_alg_rtsp#counters1 Cgnv6LsnAlgRtsp#counters1}
  */
  readonly counters1?: string;
}

export function cgnv6LsnAlgRtspSamplingEnableToTerraform(struct?: Cgnv6LsnAlgRtspSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function cgnv6LsnAlgRtspSamplingEnableToHclTerraform(struct?: Cgnv6LsnAlgRtspSamplingEnable | cdktf.IResolvable): any {
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

export class Cgnv6LsnAlgRtspSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6LsnAlgRtspSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Cgnv6LsnAlgRtspSamplingEnable | cdktf.IResolvable | undefined) {
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

export class Cgnv6LsnAlgRtspSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : Cgnv6LsnAlgRtspSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6LsnAlgRtspSamplingEnableOutputReference {
    return new Cgnv6LsnAlgRtspSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_alg_rtsp thunder_cgnv6_lsn_alg_rtsp}
*/
export class Cgnv6LsnAlgRtsp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lsn_alg_rtsp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6LsnAlgRtsp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6LsnAlgRtsp to import
  * @param importFromId The id of the existing Cgnv6LsnAlgRtsp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_alg_rtsp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6LsnAlgRtsp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lsn_alg_rtsp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_alg_rtsp thunder_cgnv6_lsn_alg_rtsp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6LsnAlgRtspConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6LsnAlgRtspConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lsn_alg_rtsp',
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
    this._rtspValue = config.rtspValue;
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

  // rtsp_value - computed: false, optional: true, required: false
  private _rtspValue?: string; 
  public get rtspValue() {
    return this.getStringAttribute('rtsp_value');
  }
  public set rtspValue(value: string) {
    this._rtspValue = value;
  }
  public resetRtspValue() {
    this._rtspValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtspValueInput() {
    return this._rtspValue;
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
  private _samplingEnable = new Cgnv6LsnAlgRtspSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: Cgnv6LsnAlgRtspSamplingEnable[] | cdktf.IResolvable) {
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
      rtsp_value: cdktf.stringToTerraform(this._rtspValue),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(cgnv6LsnAlgRtspSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
      rtsp_value: {
        value: cdktf.stringToHclTerraform(this._rtspValue),
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
        value: cdktf.listMapperHcl(cgnv6LsnAlgRtspSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LsnAlgRtspSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
