// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/kafka_cluster_client_metric_subscriptions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrKafkaClusterClientMetricSubscriptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifiers of clients to collect metrics from. Wild card values are supported here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/kafka_cluster_client_metric_subscriptions#clients DataInstaclustrKafkaClusterClientMetricSubscriptions#clients}
  */
  readonly clients?: string;
  /**
  * ID of the Kafka cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/kafka_cluster_client_metric_subscriptions#cluster_id DataInstaclustrKafkaClusterClientMetricSubscriptions#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/kafka_cluster_client_metric_subscriptions#id DataInstaclustrKafkaClusterClientMetricSubscriptions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The interval to collect client metrics in milliseconds. Default value for this is 5 minutes. The minimum value is 20000 milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/kafka_cluster_client_metric_subscriptions#interval DataInstaclustrKafkaClusterClientMetricSubscriptions#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/kafka_cluster_client_metric_subscriptions#kafka_cluster_id DataInstaclustrKafkaClusterClientMetricSubscriptions#kafka_cluster_id}
  */
  readonly kafkaClusterId: string;
  /**
  * The metrics to subscribe to. Wild card values are supported here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/kafka_cluster_client_metric_subscriptions#metrics DataInstaclustrKafkaClusterClientMetricSubscriptions#metrics}
  */
  readonly metrics?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/kafka_cluster_client_metric_subscriptions#filter DataInstaclustrKafkaClusterClientMetricSubscriptions#filter}
  */
  readonly filter?: DataInstaclustrKafkaClusterClientMetricSubscriptionsFilter[] | cdktf.IResolvable;
}
export interface DataInstaclustrKafkaClusterClientMetricSubscriptionsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/kafka_cluster_client_metric_subscriptions#name DataInstaclustrKafkaClusterClientMetricSubscriptions#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/kafka_cluster_client_metric_subscriptions#values DataInstaclustrKafkaClusterClientMetricSubscriptions#values}
  */
  readonly values: string[];
}

export function dataInstaclustrKafkaClusterClientMetricSubscriptionsFilterToTerraform(struct?: DataInstaclustrKafkaClusterClientMetricSubscriptionsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataInstaclustrKafkaClusterClientMetricSubscriptionsFilterToHclTerraform(struct?: DataInstaclustrKafkaClusterClientMetricSubscriptionsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaClusterClientMetricSubscriptionsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaClusterClientMetricSubscriptionsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterClientMetricSubscriptionsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataInstaclustrKafkaClusterClientMetricSubscriptionsFilterList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterClientMetricSubscriptionsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterClientMetricSubscriptionsFilterOutputReference {
    return new DataInstaclustrKafkaClusterClientMetricSubscriptionsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/kafka_cluster_client_metric_subscriptions instaclustr_kafka_cluster_client_metric_subscriptions}
*/
export class DataInstaclustrKafkaClusterClientMetricSubscriptions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_kafka_cluster_client_metric_subscriptions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrKafkaClusterClientMetricSubscriptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrKafkaClusterClientMetricSubscriptions to import
  * @param importFromId The id of the existing DataInstaclustrKafkaClusterClientMetricSubscriptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/kafka_cluster_client_metric_subscriptions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrKafkaClusterClientMetricSubscriptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_kafka_cluster_client_metric_subscriptions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/kafka_cluster_client_metric_subscriptions instaclustr_kafka_cluster_client_metric_subscriptions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrKafkaClusterClientMetricSubscriptionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrKafkaClusterClientMetricSubscriptionsConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_kafka_cluster_client_metric_subscriptions',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.39',
        providerVersionConstraint: '2.1.39'
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
    this._kafkaClusterId = config.kafkaClusterId;
    this._metrics = config.metrics;
    this._filter.internalValue = config.filter;
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

  // kafka_cluster_id - computed: false, optional: false, required: true
  private _kafkaClusterId?: string; 
  public get kafkaClusterId() {
    return this.getStringAttribute('kafka_cluster_id');
  }
  public set kafkaClusterId(value: string) {
    this._kafkaClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaClusterIdInput() {
    return this._kafkaClusterId;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataInstaclustrKafkaClusterClientMetricSubscriptionsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataInstaclustrKafkaClusterClientMetricSubscriptionsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
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
      kafka_cluster_id: cdktf.stringToTerraform(this._kafkaClusterId),
      metrics: cdktf.stringToTerraform(this._metrics),
      filter: cdktf.listMapper(dataInstaclustrKafkaClusterClientMetricSubscriptionsFilterToTerraform, true)(this._filter.internalValue),
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
      kafka_cluster_id: {
        value: cdktf.stringToHclTerraform(this._kafkaClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metrics: {
        value: cdktf.stringToHclTerraform(this._metrics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterClientMetricSubscriptionsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInstaclustrKafkaClusterClientMetricSubscriptionsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
