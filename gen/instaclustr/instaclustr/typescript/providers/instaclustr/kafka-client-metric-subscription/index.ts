// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/kafka_client_metric_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KafkaClientMetricSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifiers of clients to collect metrics from. Wild card values are supported here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/kafka_client_metric_subscription#clients KafkaClientMetricSubscription#clients}
  */
  readonly clients?: string;
  /**
  * ID of the Kafka cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/kafka_client_metric_subscription#cluster_id KafkaClientMetricSubscription#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/kafka_client_metric_subscription#id KafkaClientMetricSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The interval to collect client metrics in milliseconds. Default value for this is 5 minutes. The minimum value is 20000 milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/kafka_client_metric_subscription#interval KafkaClientMetricSubscription#interval}
  */
  readonly interval?: number;
  /**
  * The metrics to subscribe to. Wild card values are supported here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/kafka_client_metric_subscription#metrics KafkaClientMetricSubscription#metrics}
  */
  readonly metrics?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/kafka_client_metric_subscription#timeouts KafkaClientMetricSubscription#timeouts}
  */
  readonly timeouts?: KafkaClientMetricSubscriptionTimeouts;
}
export interface KafkaClientMetricSubscriptionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/kafka_client_metric_subscription#default KafkaClientMetricSubscription#default}
  */
  readonly default?: string;
}

export function kafkaClientMetricSubscriptionTimeoutsToTerraform(struct?: KafkaClientMetricSubscriptionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function kafkaClientMetricSubscriptionTimeoutsToHclTerraform(struct?: KafkaClientMetricSubscriptionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClientMetricSubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KafkaClientMetricSubscriptionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClientMetricSubscriptionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/kafka_client_metric_subscription instaclustr_kafka_client_metric_subscription}
*/
export class KafkaClientMetricSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_kafka_client_metric_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KafkaClientMetricSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KafkaClientMetricSubscription to import
  * @param importFromId The id of the existing KafkaClientMetricSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/kafka_client_metric_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KafkaClientMetricSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_kafka_client_metric_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/resources/kafka_client_metric_subscription instaclustr_kafka_client_metric_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KafkaClientMetricSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: KafkaClientMetricSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_kafka_client_metric_subscription',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.28',
        providerVersionConstraint: '2.1.28'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clients = config.clients;
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._interval = config.interval;
    this._metrics = config.metrics;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clients - computed: false, optional: true, required: false
  private _clients?: string; 
  public get clients() {
    return this.getStringAttribute('clients');
  }
  public set clients(value: string) {
    this._clients = value;
  }
  public resetClients() {
    this._clients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsInput() {
    return this._clients;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics?: string; 
  public get metrics() {
    return this.getStringAttribute('metrics');
  }
  public set metrics(value: string) {
    this._metrics = value;
  }
  public resetMetrics() {
    this._metrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KafkaClientMetricSubscriptionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KafkaClientMetricSubscriptionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clients: cdktf.stringToTerraform(this._clients),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      metrics: cdktf.stringToTerraform(this._metrics),
      timeouts: kafkaClientMetricSubscriptionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clients: {
        value: cdktf.stringToHclTerraform(this._clients),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metrics: {
        value: cdktf.stringToHclTerraform(this._metrics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: kafkaClientMetricSubscriptionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KafkaClientMetricSubscriptionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
