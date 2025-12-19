// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/event_notification_kafka_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventNotificationKafkaServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set kafka Broker ip address or hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/event_notification_kafka_server#host_ipv4 EventNotificationKafkaServer#host_ipv4}
  */
  readonly hostIpv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/event_notification_kafka_server#id EventNotificationKafkaServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set remote kafka port number (Remote kafka port number 1-32767, default is 9092)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/event_notification_kafka_server#port EventNotificationKafkaServer#port}
  */
  readonly port?: number;
  /**
  * Use management port for connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/event_notification_kafka_server#use_mgmt_port EventNotificationKafkaServer#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/event_notification_kafka_server#uuid EventNotificationKafkaServer#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/event_notification_kafka_server#sampling_enable EventNotificationKafkaServer#sampling_enable}
  */
  readonly samplingEnable?: EventNotificationKafkaServerSamplingEnable[] | cdktf.IResolvable;
}
export interface EventNotificationKafkaServerSamplingEnable {
  /**
  * 'all': all; 'pr-acos-harmony-topic': L7 PR logs sent; 'avro-device-status-topic': Device Status Metrics sent; 'avro-partition-metrics-topic': Partition Metrics sent; 'avro-generic-sent': Generic Metrics sent; 'pr-acos-harmony-topic-enqueue-err': L7 PR dropped,enq error on acos queues; 'pr-acos-harmony-topic-dequeue-err': L7 PR dropped,enq error analytics queues; 'avro-generic-failed-encoding': Generic Metrics dropped,encoding error; 'avro-generic-failed-sending': Generic Metrics dropped,sending failure; 'avro-device-status-topic-enqueue-err': Device Status dropped,enq error on acos queues; 'avro-device-status-topic-dequeue-err': Device Status dropped,enq error analytics queues; 'avro-partition-metrics-topic-enqueue-err': Part metrics dropped,enq error on acos queues; 'avro-partition-metrics-topic-dequeue-err': Part metrics dropped,enq error analytics queues; 'kafka-unknown-topic-dequeue-err': Unknown type dropped,enq error analytics queues; 'kafka-broker-down': Messages dropped,analytics down; 'kafka-queue-full-err': Messages dropped,acos analytics queue full; 'pr-throttle-drop': L7 PR dropped,log throttling; 'pr-not-allowed-drop': L7 PR dropped, not allowed to be sent; 'pr-be-ttfb-anomaly': L7 PR back-end ttfb is negative; 'pr-be-ttlb-anomaly': L7 PR back-end ttlb is negative; 'pr-in-latency-threshold-exceed': L7 PR on latency threshold exceeded; 'pr-out-latency-threshold-exceed': L7 PR out latency threshold exceeded; 'pr-out-latency-anomaly': L7 PR out latency negative; 'pr-in-latency-anomaly': L7 PR on latency negative; 'kafka-topic-error': Module not supported by analytics; 'pc-encoding-failed': L4 PC logs dropped,encoding error; 'pc-acos-harmony-topic': L4 PC logs sent; 'pc-acos-harmony-topic-dequeue-err': L4 PC logs dropped,enq error analytics queues; 'cgn-pc-acos-harmony-topic': CGN PC logs sent; 'cgn-pc-acos-harmony-topic-dequeue-err': CGN PC logs dropped,enq error analytics queues; 'cgn-pe-acos-harmony-topic': CGN PE logs sent; 'cgn-pe-acos-harmony-topic-dequeue-err': CGN PE logs dropped,enq error analytics queues; 'fw-pc-acos-harmony-topic': FW PC logs sent; 'fw-pc-acos-harmony-topic-dequeue-err': FW PC logs dropped,enq error analytics queues; 'fw-deny-pc-acos-harmony-topic': FW DENY PC logs sent; 'fw-deny-pc-acos-harmony-topic-dequeue-err': FW DENY PC logs dropped,enq error analytics queues; 'fw-rst-pc-acos-harmony-topic': FW RST PC logs sent; 'fw-rst-pc-acos-harmony-topic-dequeue-err': FW RST PC logs dropped,enq error analytics queues; 'cgn-summary-error-acos-harmony-topic': CGN PE logs sent; 'cgn-summary-error-acos-harmony-topic-dequeue-err': CGN PE logs dropped,enq error analytics queues; 'rule-set-application-metrics-topic': AppFW metrics sent; 'rule-set-application-metrics-topic-dequeue-err': AppFW metrics dropped,enq error analytics queues; 'slb-ssl-stats-metrics-topic': SSL metrics sent; 'slb-ssl-stats-metrics-topic-dequeue-err': SSL metrics dropped,enq error analytics queues; 'slb-client-ssl-counters-metrics-topic': Client SSL metrics sent; 'slb-client-ssl-counters-metrics-topic-dequeue-err': Cilent SSL metrics dropped,enq error analytics qs; 'slb-server-ssl-counters-metrics-topic': Server SSL metrics sent; 'slb-server-ssl-counters-metrics-topic-dequeue-err': Server SSL metrics dropped,enq error analytics qs; 'pc-throttle-drop': L4 PC logs dropped,throttling; 'metrics-dropped-pt-missing': Metrics dropped,missing partition tenant mapping; 'ssli-pc-acos-harmony-topic': SSLi PC topic counter from acos to harmony; 'ssli-pc-acos-harmony-topic-dequeue-err': SSLi PC topic to harmony dequeue error; 'ssli-pe-acos-harmony-topic': SSLi PE topic counter from acos to harmony; 'ssli-pe-acos-harmony-topic-dequeue-err': SSLi PE topic to harmony dequeue error; 'analytics-bus-restart': Analytics bus restart count; 'waf-learn-pr-topic': WAF learn topic counter; 'waf-learn-pr-topic-dequeue-err': WAF learn metrics dropped,enq error analytics qs; 'waf-events-topic': WAF events topic counter; 'waf-events-topic-dequeue-err': WAF events metrics dropped,enq error analytics qs; 'visibility-topn-harmony-topic': Visibility TopN sent; 'visibility-topn-harmony-topic-dequeue-err': Visibility TopN metrics dropped,enq error analytics qs; 'hc-logs-sent-to-master': HC logs sent to master; 'hc-logs-received-from-blade': HC logs received from blade; 'hc-oper-sent-to-master': HC oper to master; 'hc-oper-received-from-blade': HC oper received from blade; 'hc-counters-sent-to-master': HC counters sent to master; 'hc-counters-received-from-blade': HC counters received from blade; 'hc-counters-dropped-from-blade': HC counters dropped from blade (uuid or size mismatch); 'pe-acos-harmony-topic': L7 PE logs sent; 'pe-acos-harmony-topic-enqueue-err': L7 PE dropped,enq error on acos queues; 'pe-acos-harmony-topic-dequeue-err': L7 PE dropped,enq error analytics queues; 'vpn-ipsec-sa-metrics-topic': IPSec SA metrics sent; 'vpn-ipsec-sa-metrics-topic-dequeue-err': IPSec SA metrics dropped,enq error analytics qs; 'vpn-ike-gateway-metrics-topic': IKE gateway metrics sent; 'vpn-ike-gateway-metrics-topic-dequeue-err': IKE gateway metrics dropped,enq error analytics qs; 'vpn-stats-metrics-topic': VPN STATS metrics sent; 'vpn-stats-metrics-topic-dequeue-err': VPN STATS metrics dropped,enq error analytics qs; 'cgn-port-usage-hstgrm-acos-harmony-topic': CGN Port Usage Histogram HC Export; 'cgn-port-usage-hstgrm-acos-harmony-topic-dequeue-err': CGN Port Usage Histogram HC Export Failed; 'avro-system-env-topic': System environment sent; 'avro-system-env-dequeue-err': System Environmet dropped,enq error analytics queues; 'cert-pinning-list-topic': Cert-pinning candidate list sent; 'cert-pinning-list-topic-dequeue-err': Cert-pinning candidate list dropped,enq error analytics queues; 'ngwaf-hc-ep-topic': NGWAF HC PE export; 'ngwaf-hc-ep-topic-dequeue-err': NGWAF HC PE export failed; 'ngwaf-hc-metrics-topic': NGWAF HC metrics export; 'ngwaf-hc-metrics-topic-dequeue-err': NGWAF HC metrics export failed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/event_notification_kafka_server#counters1 EventNotificationKafkaServer#counters1}
  */
  readonly counters1?: string;
}

export function eventNotificationKafkaServerSamplingEnableToTerraform(struct?: EventNotificationKafkaServerSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function eventNotificationKafkaServerSamplingEnableToHclTerraform(struct?: EventNotificationKafkaServerSamplingEnable | cdktf.IResolvable): any {
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

export class EventNotificationKafkaServerSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventNotificationKafkaServerSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventNotificationKafkaServerSamplingEnable | cdktf.IResolvable | undefined) {
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

export class EventNotificationKafkaServerSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : EventNotificationKafkaServerSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): EventNotificationKafkaServerSamplingEnableOutputReference {
    return new EventNotificationKafkaServerSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/event_notification_kafka_server thunder_event_notification_kafka_server}
*/
export class EventNotificationKafkaServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_event_notification_kafka_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventNotificationKafkaServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventNotificationKafkaServer to import
  * @param importFromId The id of the existing EventNotificationKafkaServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/event_notification_kafka_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventNotificationKafkaServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_event_notification_kafka_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/event_notification_kafka_server thunder_event_notification_kafka_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventNotificationKafkaServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EventNotificationKafkaServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_event_notification_kafka_server',
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
    this._hostIpv4 = config.hostIpv4;
    this._id = config.id;
    this._port = config.port;
    this._useMgmtPort = config.useMgmtPort;
    this._uuid = config.uuid;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host_ipv4 - computed: false, optional: true, required: false
  private _hostIpv4?: string; 
  public get hostIpv4() {
    return this.getStringAttribute('host_ipv4');
  }
  public set hostIpv4(value: string) {
    this._hostIpv4 = value;
  }
  public resetHostIpv4() {
    this._hostIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpv4Input() {
    return this._hostIpv4;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
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
  private _samplingEnable = new EventNotificationKafkaServerSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: EventNotificationKafkaServerSamplingEnable[] | cdktf.IResolvable) {
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
      host_ipv4: cdktf.stringToTerraform(this._hostIpv4),
      id: cdktf.stringToTerraform(this._id),
      port: cdktf.numberToTerraform(this._port),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(eventNotificationKafkaServerSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host_ipv4: {
        value: cdktf.stringToHclTerraform(this._hostIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._useMgmtPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(eventNotificationKafkaServerSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventNotificationKafkaServerSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
