// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/kafka_client_metric_subscription_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrKafkaClientMetricSubscriptionInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifiers of clients to collect metrics from. Wild card values are supported here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/kafka_client_metric_subscription_instance#clients DataInstaclustrKafkaClientMetricSubscriptionInstance#clients}
  */
  readonly clients?: string;
  /**
  * ID of the Kafka cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/kafka_client_metric_subscription_instance#cluster_id DataInstaclustrKafkaClientMetricSubscriptionInstance#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/kafka_client_metric_subscription_instance#id DataInstaclustrKafkaClientMetricSubscriptionInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The interval to collect client metrics in milliseconds. Default value for this is 5 minutes. The minimum value is 20000 milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/kafka_client_metric_subscription_instance#interval DataInstaclustrKafkaClientMetricSubscriptionInstance#interval}
  */
  readonly interval?: number;
  /**
  * The metrics to subscribe to. Wild card values are supported here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/kafka_client_metric_subscription_instance#metrics DataInstaclustrKafkaClientMetricSubscriptionInstance#metrics}
  */
  readonly metrics?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/kafka_client_metric_subscription_instance instaclustr_kafka_client_metric_subscription_instance}
*/
export class DataInstaclustrKafkaClientMetricSubscriptionInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_kafka_client_metric_subscription_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrKafkaClientMetricSubscriptionInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrKafkaClientMetricSubscriptionInstance to import
  * @param importFromId The id of the existing DataInstaclustrKafkaClientMetricSubscriptionInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/kafka_client_metric_subscription_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrKafkaClientMetricSubscriptionInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_kafka_client_metric_subscription_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/kafka_client_metric_subscription_instance instaclustr_kafka_client_metric_subscription_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrKafkaClientMetricSubscriptionInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrKafkaClientMetricSubscriptionInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_kafka_client_metric_subscription_instance',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.32',
        providerVersionConstraint: '2.1.32'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clients - computed: true, optional: true, required: false
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

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // interval - computed: true, optional: true, required: false
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

  // metrics - computed: true, optional: true, required: false
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
