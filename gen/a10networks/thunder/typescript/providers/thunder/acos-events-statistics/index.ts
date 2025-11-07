// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_statistics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AcosEventsStatisticsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_statistics#id AcosEventsStatistics#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_statistics#uuid AcosEventsStatistics#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_statistics#sampling_enable AcosEventsStatistics#sampling_enable}
  */
  readonly samplingEnable?: AcosEventsStatisticsSamplingEnable[] | cdktf.IResolvable;
}
export interface AcosEventsStatisticsSamplingEnable {
  /**
  * 'all': all; 'msg_sent': Messages sent, to Remote; 'msg_sent_logdb': Messages sent, to LogDB; 'msg_dropped_format_not_defined': Messages Dropped, format not defined; 'msg_dropped_malloc_failure': Messages Dropped, malloc failure; 'msg_dropped_no_template': Messages Dropped, no active template; 'msg_dropped_selector': Messages Dropped, selector does not enable msg; 'msg_dropped_too_long': Messages Dropped, invalid length; 'msg_dropped_craft_fail': Messages Dropped, msg crafting failed; 'msg_dropped_local_log_ratelimit': Messages Dropped, local log ratelimited; 'msg_dropped_remote_log_ratelimit': Messages Dropped, remote log ratelimited; 'msg_dropped_send_failed': Messages Dropped, send failed; 'msg_dropped_no_active_member': Messages Dropped, no active member in collector grp; 'msg_dropped_route_fail': Messages Dropped, Route lookup failed; 'msg_dropped_other': Messages Dropped, unexpected error; 'no_template': Message API called, with no active template; 'msg_dropped_lost_during_config_change': Messages Dropped, lost during config change; 'local_enqueue_pass': Messages enqueue to Logd passed; 'msg_sent_to_logd': Messages sent to Logd via IPC; 'msg_retry_after_socket_fail': Messages retried to be sent to Logd via IPC; 'msg_sent_direct_syslog': Messages sent to syslog directly from axlog; 'msg_dropped_send_to_logd_fail': Messages Dropped, send to Logd via IPC failed; 'msg_dropped_trylock_fail': Messages Dropped, Trylock failed in axlog; 'msg_dropped_remote_cplane_log_ratelimit': Messages Dropped, Remote cplane log ratelimited; 'msg_dropped_remote_dplane_log_ratelimit': Messages Dropped, Remote dplane log ratelimited; 'msg_dropped_local_enqueue_failed': Messages Dropped, Enqueue to Logd failed; 'msg_dropped_grp_not_used': Messages Dropped, Collector group not used; 'msg_sent_remote_cplane': Messages Sent, to remote in logd; 'msg_dropped_no_template_logd': Messages Dropped, no active template in Logd; 'msg_dropped_lost_during_config_change_logd': Messages Dropped, lost during config change in Logd; 'msg_dropped_craft_fail_logd': Messages Dropped, msg crafting failed in Logd; 'msg_dropped_send_failed_logd': Messages Dropped, send failed in Logd; 'msg_dropped_no_active_member_logd': Messages Dropped, no active member in collector grp in Logd; 'msg_dropped_other_logd': Messages Dropped, unexpected error in Logd; 'msg_dropped_invalid_part': Messages Dropped, Invalid partition Id; 'acos_evt_test_logs_ticks': Number of ticks when running ACOS Event Test Logs; 'param_msg_sent_to_hc': Parameterized log sent to HC; 'param_msg_sent_fail': Parameterized log send to HC failed; 'param_msg_encode_fail': Parameterized log AVRO encoding failed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_statistics#counters1 AcosEventsStatistics#counters1}
  */
  readonly counters1?: string;
}

export function acosEventsStatisticsSamplingEnableToTerraform(struct?: AcosEventsStatisticsSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function acosEventsStatisticsSamplingEnableToHclTerraform(struct?: AcosEventsStatisticsSamplingEnable | cdktf.IResolvable): any {
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

export class AcosEventsStatisticsSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AcosEventsStatisticsSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AcosEventsStatisticsSamplingEnable | cdktf.IResolvable | undefined) {
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

export class AcosEventsStatisticsSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : AcosEventsStatisticsSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): AcosEventsStatisticsSamplingEnableOutputReference {
    return new AcosEventsStatisticsSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_statistics thunder_acos_events_statistics}
*/
export class AcosEventsStatistics extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_acos_events_statistics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AcosEventsStatistics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AcosEventsStatistics to import
  * @param importFromId The id of the existing AcosEventsStatistics that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_statistics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AcosEventsStatistics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_acos_events_statistics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_statistics thunder_acos_events_statistics} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AcosEventsStatisticsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AcosEventsStatisticsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_acos_events_statistics',
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
  private _samplingEnable = new AcosEventsStatisticsSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AcosEventsStatisticsSamplingEnable[] | cdktf.IResolvable) {
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
      sampling_enable: cdktf.listMapper(acosEventsStatisticsSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
        value: cdktf.listMapperHcl(acosEventsStatisticsSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AcosEventsStatisticsSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
