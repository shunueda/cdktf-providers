// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_mon_entity_telemetry_data
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityMonEntityTelemetryDataAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_mon_entity_telemetry_data#id VisibilityMonEntityTelemetryDataA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_mon_entity_telemetry_data#uuid VisibilityMonEntityTelemetryDataA#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_mon_entity_telemetry_data#sampling_enable VisibilityMonEntityTelemetryDataA#sampling_enable}
  */
  readonly samplingEnable?: VisibilityMonEntityTelemetryDataSamplingEnableA[] | cdktf.IResolvable;
}
export interface VisibilityMonEntityTelemetryDataSamplingEnableA {
  /**
  * 'all': all; 'in_pkts': Monitored Entity telemetry Metric IN pkts; 'out_pkts': Monitored Entity telemetry Metric OUT pkts; 'in_bytes': Monitored Entity telemetry Metric IN bytes; 'out_bytes': Monitored Entity telemetry Metric OUT bytes; 'errors': Monitored Entity telemetry Metric ERRORS; 'in_small_pkt': Monitored Entity telemetry Metric IN SMALL pkt; 'in_frag': Monitored Entity telemetry Metric IN frag; 'out_small_pkt': Monitored Entity telemetry Metric OUT SMALL pkt; 'out_frag': Monitored Entity telemetry Metric OUT frag; 'new-conn': Monitored Entity telemetry Metric New Sessions; 'avg_data_cpu_util': Monitored Entity telemetry Metric Average data CPU utilization; 'outside_intf_util': Monitored Entity telemetry Metric Outside interface utilization; 'concurrent-conn': concurrent-conn; 'in_bytes_per_out_bytes': Monitored Entity telemetry Metric IN bytes per OUT bytes; 'drop_pkts_per_pkts': Monitored Entity telemetry Metric Drop pkts per pkts; 'tcp_in_syn': Monitored Entity telemetry Metric TCP IN syn; 'tcp_out_syn': Monitored Entity telemetry Metric TCP OUT syn; 'tcp_in_fin': Monitored Entity telemetry Metric TCP IN fin; 'tcp_out_fin': Monitored Entity telemetry Metric TCP OUT fin; 'tcp_in_payload': Monitored Entity telemetry Metric TCP IN payload; 'tcp_out_payload': Monitored Entity telemetry Metric TCP OUT payload; 'tcp_in_rexmit': Monitored Entity telemetry Metric TCP IN rexmit; 'tcp_out_rexmit': Monitored Entity telemetry Metric TCP OUT rexmit; 'tcp_in_rst': Monitored Entity telemetry Metric TCP IN rst; 'tcp_out_rst': Monitored Entity telemetry Metric TCP OUT rst; 'tcp_in_empty_ack': Monitored Entity telemetry Metric TCP_IN EMPTY ack; 'tcp_out_empty_ack': Monitored Entity telemetry Metric TCP OUT EMPTY ack; 'tcp_in_zero_wnd': Monitored Entity telemetry Metric TCP IN ZERO wnd; 'tcp_out_zero_wnd': Monitored Entity telemetry Metric TCP OUT ZERO wnd; 'tcp_conn_miss': Monitored Entity telemetry Metric TCP connection miss; 'tcp_fwd_syn_per_fin': Monitored Entity telemetry Metric TCP FWD SYN per FIN;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_mon_entity_telemetry_data#counters1 VisibilityMonEntityTelemetryDataA#counters1}
  */
  readonly counters1?: string;
}

export function visibilityMonEntityTelemetryDataSamplingEnableAToTerraform(struct?: VisibilityMonEntityTelemetryDataSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function visibilityMonEntityTelemetryDataSamplingEnableAToHclTerraform(struct?: VisibilityMonEntityTelemetryDataSamplingEnableA | cdktf.IResolvable): any {
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

export class VisibilityMonEntityTelemetryDataSamplingEnableAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VisibilityMonEntityTelemetryDataSamplingEnableA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VisibilityMonEntityTelemetryDataSamplingEnableA | cdktf.IResolvable | undefined) {
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

export class VisibilityMonEntityTelemetryDataSamplingEnableAList extends cdktf.ComplexList {
  public internalValue? : VisibilityMonEntityTelemetryDataSamplingEnableA[] | cdktf.IResolvable

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
  public get(index: number): VisibilityMonEntityTelemetryDataSamplingEnableAOutputReference {
    return new VisibilityMonEntityTelemetryDataSamplingEnableAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_mon_entity_telemetry_data thunder_visibility_mon_entity_telemetry_data}
*/
export class VisibilityMonEntityTelemetryDataA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_mon_entity_telemetry_data";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityMonEntityTelemetryDataA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityMonEntityTelemetryDataA to import
  * @param importFromId The id of the existing VisibilityMonEntityTelemetryDataA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_mon_entity_telemetry_data#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityMonEntityTelemetryDataA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_mon_entity_telemetry_data", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_mon_entity_telemetry_data thunder_visibility_mon_entity_telemetry_data} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityMonEntityTelemetryDataAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VisibilityMonEntityTelemetryDataAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_mon_entity_telemetry_data',
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
  private _samplingEnable = new VisibilityMonEntityTelemetryDataSamplingEnableAList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: VisibilityMonEntityTelemetryDataSamplingEnableA[] | cdktf.IResolvable) {
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
      sampling_enable: cdktf.listMapper(visibilityMonEntityTelemetryDataSamplingEnableAToTerraform, true)(this._samplingEnable.internalValue),
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
        value: cdktf.listMapperHcl(visibilityMonEntityTelemetryDataSamplingEnableAToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityMonEntityTelemetryDataSamplingEnableAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
