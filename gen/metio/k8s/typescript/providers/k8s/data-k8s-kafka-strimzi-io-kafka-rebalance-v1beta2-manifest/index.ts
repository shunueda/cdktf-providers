// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kafka_strimzi_io_kafka_rebalance_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kafka_strimzi_io_kafka_rebalance_v1beta2_manifest#metadata DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestMetadata;
  /**
  * The specification of the Kafka rebalance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kafka_strimzi_io_kafka_rebalance_v1beta2_manifest#spec DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestSpec;
}
export interface DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kafka_strimzi_io_kafka_rebalance_v1beta2_manifest#annotations DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kafka_strimzi_io_kafka_rebalance_v1beta2_manifest#labels DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kafka_strimzi_io_kafka_rebalance_v1beta2_manifest#name DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kafka_strimzi_io_kafka_rebalance_v1beta2_manifest#namespace DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestMetadataToTerraform(struct?: DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestSpec {
  /**
  * The list of newly added brokers in case of scaling up or the ones to be removed in case of scaling down to use for rebalancing. This list can be used only with rebalancing mode 'add-brokers' and 'removed-brokers'. It is ignored with 'full' mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kafka_strimzi_io_kafka_rebalance_v1beta2_manifest#brokers DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2Manifest#brokers}
  */
  readonly brokers?: string[];
  /**
  * The upper bound of ongoing partition replica movements between disks within each broker. Default is 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kafka_strimzi_io_kafka_rebalance_v1beta2_manifest#concurrent_intra_broker_partition_movements DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2Manifest#concurrent_intra_broker_partition_movements}
  */
  readonly concurrentIntraBrokerPartitionMovements?: number;
  /**
  * The upper bound of ongoing partition leadership movements. Default is 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kafka_strimzi_io_kafka_rebalance_v1beta2_manifest#concurrent_leader_movements DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2Manifest#concurrent_leader_movements}
  */
  readonly concurrentLeaderMovements?: number;
  /**
  * The upper bound of ongoing partition replica movements going into/out of each broker. Default is 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kafka_strimzi_io_kafka_rebalance_v1beta2_manifest#concurrent_partition_movements_per_broker DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2Manifest#concurrent_partition_movements_per_broker}
  */
  readonly concurrentPartitionMovementsPerBroker?: number;
  /**
  * A regular expression where any matching topics will be excluded from the calculation of optimization proposals. This expression will be parsed by the java.util.regex.Pattern class; for more information on the supported format consult the documentation for that class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kafka_strimzi_io_kafka_rebalance_v1beta2_manifest#excluded_topics DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2Manifest#excluded_topics}
  */
  readonly excludedTopics?: string;
  /**
  * A list of goals, ordered by decreasing priority, to use for generating and executing the rebalance proposal. The supported goals are available at https://github.com/linkedin/cruise-control#goals. If an empty goals list is provided, the goals declared in the default.goals Cruise Control configuration parameter are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kafka_strimzi_io_kafka_rebalance_v1beta2_manifest#goals DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2Manifest#goals}
  */
  readonly goals?: string[];
  /**
  * Mode to run the rebalancing. The supported modes are 'full', 'add-brokers', 'remove-brokers'. If not specified, the 'full' mode is used by default. * 'full' mode runs the rebalancing across all the brokers in the cluster. * 'add-brokers' mode can be used after scaling up the cluster to move some replicas to the newly added brokers. * 'remove-brokers' mode can be used before scaling down the cluster to move replicas out of the brokers to be removed. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kafka_strimzi_io_kafka_rebalance_v1beta2_manifest#mode DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Enables intra-broker disk balancing, which balances disk space utilization between disks on the same broker. Only applies to Kafka deployments that use JBOD storage with multiple disks. When enabled, inter-broker balancing is disabled. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kafka_strimzi_io_kafka_rebalance_v1beta2_manifest#rebalance_disk DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2Manifest#rebalance_disk}
  */
  readonly rebalanceDisk?: boolean | cdktf.IResolvable;
  /**
  * A list of strategy class names used to determine the execution order for the replica movements in the generated optimization proposal. By default BaseReplicaMovementStrategy is used, which will execute the replica movements in the order that they were generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kafka_strimzi_io_kafka_rebalance_v1beta2_manifest#replica_movement_strategies DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2Manifest#replica_movement_strategies}
  */
  readonly replicaMovementStrategies?: string[];
  /**
  * The upper bound, in bytes per second, on the bandwidth used to move replicas. There is no limit by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kafka_strimzi_io_kafka_rebalance_v1beta2_manifest#replication_throttle DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2Manifest#replication_throttle}
  */
  readonly replicationThrottle?: number;
  /**
  * Whether to allow the hard goals specified in the Kafka CR to be skipped in optimization proposal generation. This can be useful when some of those hard goals are preventing a balance solution being found. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kafka_strimzi_io_kafka_rebalance_v1beta2_manifest#skip_hard_goal_check DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2Manifest#skip_hard_goal_check}
  */
  readonly skipHardGoalCheck?: boolean | cdktf.IResolvable;
}

export function dataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestSpecToTerraform(struct?: DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    brokers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.brokers),
    concurrent_intra_broker_partition_movements: cdktf.numberToTerraform(struct!.concurrentIntraBrokerPartitionMovements),
    concurrent_leader_movements: cdktf.numberToTerraform(struct!.concurrentLeaderMovements),
    concurrent_partition_movements_per_broker: cdktf.numberToTerraform(struct!.concurrentPartitionMovementsPerBroker),
    excluded_topics: cdktf.stringToTerraform(struct!.excludedTopics),
    goals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.goals),
    mode: cdktf.stringToTerraform(struct!.mode),
    rebalance_disk: cdktf.booleanToTerraform(struct!.rebalanceDisk),
    replica_movement_strategies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.replicaMovementStrategies),
    replication_throttle: cdktf.numberToTerraform(struct!.replicationThrottle),
    skip_hard_goal_check: cdktf.booleanToTerraform(struct!.skipHardGoalCheck),
  }
}


export function dataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    brokers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.brokers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    concurrent_intra_broker_partition_movements: {
      value: cdktf.numberToHclTerraform(struct!.concurrentIntraBrokerPartitionMovements),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_leader_movements: {
      value: cdktf.numberToHclTerraform(struct!.concurrentLeaderMovements),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_partition_movements_per_broker: {
      value: cdktf.numberToHclTerraform(struct!.concurrentPartitionMovementsPerBroker),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    excluded_topics: {
      value: cdktf.stringToHclTerraform(struct!.excludedTopics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    goals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.goals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rebalance_disk: {
      value: cdktf.booleanToHclTerraform(struct!.rebalanceDisk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replica_movement_strategies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.replicaMovementStrategies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    replication_throttle: {
      value: cdktf.numberToHclTerraform(struct!.replicationThrottle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip_hard_goal_check: {
      value: cdktf.booleanToHclTerraform(struct!.skipHardGoalCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brokers !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokers = this._brokers;
    }
    if (this._concurrentIntraBrokerPartitionMovements !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentIntraBrokerPartitionMovements = this._concurrentIntraBrokerPartitionMovements;
    }
    if (this._concurrentLeaderMovements !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentLeaderMovements = this._concurrentLeaderMovements;
    }
    if (this._concurrentPartitionMovementsPerBroker !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentPartitionMovementsPerBroker = this._concurrentPartitionMovementsPerBroker;
    }
    if (this._excludedTopics !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedTopics = this._excludedTopics;
    }
    if (this._goals !== undefined) {
      hasAnyValues = true;
      internalValueResult.goals = this._goals;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._rebalanceDisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebalanceDisk = this._rebalanceDisk;
    }
    if (this._replicaMovementStrategies !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaMovementStrategies = this._replicaMovementStrategies;
    }
    if (this._replicationThrottle !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationThrottle = this._replicationThrottle;
    }
    if (this._skipHardGoalCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipHardGoalCheck = this._skipHardGoalCheck;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._brokers = undefined;
      this._concurrentIntraBrokerPartitionMovements = undefined;
      this._concurrentLeaderMovements = undefined;
      this._concurrentPartitionMovementsPerBroker = undefined;
      this._excludedTopics = undefined;
      this._goals = undefined;
      this._mode = undefined;
      this._rebalanceDisk = undefined;
      this._replicaMovementStrategies = undefined;
      this._replicationThrottle = undefined;
      this._skipHardGoalCheck = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._brokers = value.brokers;
      this._concurrentIntraBrokerPartitionMovements = value.concurrentIntraBrokerPartitionMovements;
      this._concurrentLeaderMovements = value.concurrentLeaderMovements;
      this._concurrentPartitionMovementsPerBroker = value.concurrentPartitionMovementsPerBroker;
      this._excludedTopics = value.excludedTopics;
      this._goals = value.goals;
      this._mode = value.mode;
      this._rebalanceDisk = value.rebalanceDisk;
      this._replicaMovementStrategies = value.replicaMovementStrategies;
      this._replicationThrottle = value.replicationThrottle;
      this._skipHardGoalCheck = value.skipHardGoalCheck;
    }
  }

  // brokers - computed: false, optional: true, required: false
  private _brokers?: string[]; 
  public get brokers() {
    return this.getListAttribute('brokers');
  }
  public set brokers(value: string[]) {
    this._brokers = value;
  }
  public resetBrokers() {
    this._brokers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokersInput() {
    return this._brokers;
  }

  // concurrent_intra_broker_partition_movements - computed: false, optional: true, required: false
  private _concurrentIntraBrokerPartitionMovements?: number; 
  public get concurrentIntraBrokerPartitionMovements() {
    return this.getNumberAttribute('concurrent_intra_broker_partition_movements');
  }
  public set concurrentIntraBrokerPartitionMovements(value: number) {
    this._concurrentIntraBrokerPartitionMovements = value;
  }
  public resetConcurrentIntraBrokerPartitionMovements() {
    this._concurrentIntraBrokerPartitionMovements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentIntraBrokerPartitionMovementsInput() {
    return this._concurrentIntraBrokerPartitionMovements;
  }

  // concurrent_leader_movements - computed: false, optional: true, required: false
  private _concurrentLeaderMovements?: number; 
  public get concurrentLeaderMovements() {
    return this.getNumberAttribute('concurrent_leader_movements');
  }
  public set concurrentLeaderMovements(value: number) {
    this._concurrentLeaderMovements = value;
  }
  public resetConcurrentLeaderMovements() {
    this._concurrentLeaderMovements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentLeaderMovementsInput() {
    return this._concurrentLeaderMovements;
  }

  // concurrent_partition_movements_per_broker - computed: false, optional: true, required: false
  private _concurrentPartitionMovementsPerBroker?: number; 
  public get concurrentPartitionMovementsPerBroker() {
    return this.getNumberAttribute('concurrent_partition_movements_per_broker');
  }
  public set concurrentPartitionMovementsPerBroker(value: number) {
    this._concurrentPartitionMovementsPerBroker = value;
  }
  public resetConcurrentPartitionMovementsPerBroker() {
    this._concurrentPartitionMovementsPerBroker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentPartitionMovementsPerBrokerInput() {
    return this._concurrentPartitionMovementsPerBroker;
  }

  // excluded_topics - computed: false, optional: true, required: false
  private _excludedTopics?: string; 
  public get excludedTopics() {
    return this.getStringAttribute('excluded_topics');
  }
  public set excludedTopics(value: string) {
    this._excludedTopics = value;
  }
  public resetExcludedTopics() {
    this._excludedTopics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedTopicsInput() {
    return this._excludedTopics;
  }

  // goals - computed: false, optional: true, required: false
  private _goals?: string[]; 
  public get goals() {
    return this.getListAttribute('goals');
  }
  public set goals(value: string[]) {
    this._goals = value;
  }
  public resetGoals() {
    this._goals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goalsInput() {
    return this._goals;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // rebalance_disk - computed: false, optional: true, required: false
  private _rebalanceDisk?: boolean | cdktf.IResolvable; 
  public get rebalanceDisk() {
    return this.getBooleanAttribute('rebalance_disk');
  }
  public set rebalanceDisk(value: boolean | cdktf.IResolvable) {
    this._rebalanceDisk = value;
  }
  public resetRebalanceDisk() {
    this._rebalanceDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebalanceDiskInput() {
    return this._rebalanceDisk;
  }

  // replica_movement_strategies - computed: false, optional: true, required: false
  private _replicaMovementStrategies?: string[]; 
  public get replicaMovementStrategies() {
    return this.getListAttribute('replica_movement_strategies');
  }
  public set replicaMovementStrategies(value: string[]) {
    this._replicaMovementStrategies = value;
  }
  public resetReplicaMovementStrategies() {
    this._replicaMovementStrategies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaMovementStrategiesInput() {
    return this._replicaMovementStrategies;
  }

  // replication_throttle - computed: false, optional: true, required: false
  private _replicationThrottle?: number; 
  public get replicationThrottle() {
    return this.getNumberAttribute('replication_throttle');
  }
  public set replicationThrottle(value: number) {
    this._replicationThrottle = value;
  }
  public resetReplicationThrottle() {
    this._replicationThrottle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationThrottleInput() {
    return this._replicationThrottle;
  }

  // skip_hard_goal_check - computed: false, optional: true, required: false
  private _skipHardGoalCheck?: boolean | cdktf.IResolvable; 
  public get skipHardGoalCheck() {
    return this.getBooleanAttribute('skip_hard_goal_check');
  }
  public set skipHardGoalCheck(value: boolean | cdktf.IResolvable) {
    this._skipHardGoalCheck = value;
  }
  public resetSkipHardGoalCheck() {
    this._skipHardGoalCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipHardGoalCheckInput() {
    return this._skipHardGoalCheck;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kafka_strimzi_io_kafka_rebalance_v1beta2_manifest k8s_kafka_strimzi_io_kafka_rebalance_v1beta2_manifest}
*/
export class DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kafka_strimzi_io_kafka_rebalance_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kafka_strimzi_io_kafka_rebalance_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kafka_strimzi_io_kafka_rebalance_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kafka_strimzi_io_kafka_rebalance_v1beta2_manifest k8s_kafka_strimzi_io_kafka_rebalance_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kafka_strimzi_io_kafka_rebalance_v1beta2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKafkaStrimziIoKafkaRebalanceV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
