// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_strimzi_io_kafka_connector_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_strimzi_io_kafka_connector_v1beta2_manifest#metadata DataK8SKafkaStrimziIoKafkaConnectorV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestMetadata;
  /**
  * The specification of the Kafka Connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_strimzi_io_kafka_connector_v1beta2_manifest#spec DataK8SKafkaStrimziIoKafkaConnectorV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpec;
}
export interface DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_strimzi_io_kafka_connector_v1beta2_manifest#annotations DataK8SKafkaStrimziIoKafkaConnectorV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_strimzi_io_kafka_connector_v1beta2_manifest#labels DataK8SKafkaStrimziIoKafkaConnectorV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_strimzi_io_kafka_connector_v1beta2_manifest#name DataK8SKafkaStrimziIoKafkaConnectorV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_strimzi_io_kafka_connector_v1beta2_manifest#namespace DataK8SKafkaStrimziIoKafkaConnectorV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestMetadataToTerraform(struct?: DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpecAutoRestart {
  /**
  * Whether automatic restart for failed connectors and tasks should be enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_strimzi_io_kafka_connector_v1beta2_manifest#enabled DataK8SKafkaStrimziIoKafkaConnectorV1Beta2Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of connector restarts that the operator will try. If the connector remains in a failed state after reaching this limit, it must be restarted manually by the user. Defaults to an unlimited number of restarts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_strimzi_io_kafka_connector_v1beta2_manifest#max_restarts DataK8SKafkaStrimziIoKafkaConnectorV1Beta2Manifest#max_restarts}
  */
  readonly maxRestarts?: number;
}

export function dataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpecAutoRestartToTerraform(struct?: DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpecAutoRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_restarts: cdktf.numberToTerraform(struct!.maxRestarts),
  }
}


export function dataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpecAutoRestartToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpecAutoRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_restarts: {
      value: cdktf.numberToHclTerraform(struct!.maxRestarts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpecAutoRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpecAutoRestart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxRestarts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRestarts = this._maxRestarts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpecAutoRestart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._maxRestarts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._maxRestarts = value.maxRestarts;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // max_restarts - computed: false, optional: true, required: false
  private _maxRestarts?: number; 
  public get maxRestarts() {
    return this.getNumberAttribute('max_restarts');
  }
  public set maxRestarts(value: number) {
    this._maxRestarts = value;
  }
  public resetMaxRestarts() {
    this._maxRestarts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRestartsInput() {
    return this._maxRestarts;
  }
}
export interface DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpec {
  /**
  * Automatic restart of connector and tasks configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_strimzi_io_kafka_connector_v1beta2_manifest#auto_restart DataK8SKafkaStrimziIoKafkaConnectorV1Beta2Manifest#auto_restart}
  */
  readonly autoRestart?: DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpecAutoRestart;
  /**
  * The Class for the Kafka Connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_strimzi_io_kafka_connector_v1beta2_manifest#class DataK8SKafkaStrimziIoKafkaConnectorV1Beta2Manifest#class}
  */
  readonly class?: string;
  /**
  * The Kafka Connector configuration. The following properties cannot be set: name, connector.class, tasks.max.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_strimzi_io_kafka_connector_v1beta2_manifest#config DataK8SKafkaStrimziIoKafkaConnectorV1Beta2Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Whether the connector should be paused. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_strimzi_io_kafka_connector_v1beta2_manifest#pause DataK8SKafkaStrimziIoKafkaConnectorV1Beta2Manifest#pause}
  */
  readonly pause?: boolean | cdktf.IResolvable;
  /**
  * The state the connector should be in. Defaults to running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_strimzi_io_kafka_connector_v1beta2_manifest#state DataK8SKafkaStrimziIoKafkaConnectorV1Beta2Manifest#state}
  */
  readonly state?: string;
  /**
  * The maximum number of tasks for the Kafka Connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_strimzi_io_kafka_connector_v1beta2_manifest#tasks_max DataK8SKafkaStrimziIoKafkaConnectorV1Beta2Manifest#tasks_max}
  */
  readonly tasksMax?: number;
}

export function dataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpecToTerraform(struct?: DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_restart: dataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpecAutoRestartToTerraform(struct!.autoRestart),
    class: cdktf.stringToTerraform(struct!.class),
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    pause: cdktf.booleanToTerraform(struct!.pause),
    state: cdktf.stringToTerraform(struct!.state),
    tasks_max: cdktf.numberToTerraform(struct!.tasksMax),
  }
}


export function dataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_restart: {
      value: dataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpecAutoRestartToHclTerraform(struct!.autoRestart),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpecAutoRestart",
    },
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pause: {
      value: cdktf.booleanToHclTerraform(struct!.pause),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tasks_max: {
      value: cdktf.numberToHclTerraform(struct!.tasksMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRestart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRestart = this._autoRestart?.internalValue;
    }
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._pause !== undefined) {
      hasAnyValues = true;
      internalValueResult.pause = this._pause;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._tasksMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasksMax = this._tasksMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoRestart.internalValue = undefined;
      this._class = undefined;
      this._config = undefined;
      this._pause = undefined;
      this._state = undefined;
      this._tasksMax = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoRestart.internalValue = value.autoRestart;
      this._class = value.class;
      this._config = value.config;
      this._pause = value.pause;
      this._state = value.state;
      this._tasksMax = value.tasksMax;
    }
  }

  // auto_restart - computed: false, optional: true, required: false
  private _autoRestart = new DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpecAutoRestartOutputReference(this, "auto_restart");
  public get autoRestart() {
    return this._autoRestart;
  }
  public putAutoRestart(value: DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpecAutoRestart) {
    this._autoRestart.internalValue = value;
  }
  public resetAutoRestart() {
    this._autoRestart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRestartInput() {
    return this._autoRestart.internalValue;
  }

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // pause - computed: false, optional: true, required: false
  private _pause?: boolean | cdktf.IResolvable; 
  public get pause() {
    return this.getBooleanAttribute('pause');
  }
  public set pause(value: boolean | cdktf.IResolvable) {
    this._pause = value;
  }
  public resetPause() {
    this._pause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseInput() {
    return this._pause;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // tasks_max - computed: false, optional: true, required: false
  private _tasksMax?: number; 
  public get tasksMax() {
    return this.getNumberAttribute('tasks_max');
  }
  public set tasksMax(value: number) {
    this._tasksMax = value;
  }
  public resetTasksMax() {
    this._tasksMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksMaxInput() {
    return this._tasksMax;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_strimzi_io_kafka_connector_v1beta2_manifest k8s_kafka_strimzi_io_kafka_connector_v1beta2_manifest}
*/
export class DataK8SKafkaStrimziIoKafkaConnectorV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kafka_strimzi_io_kafka_connector_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKafkaStrimziIoKafkaConnectorV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKafkaStrimziIoKafkaConnectorV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SKafkaStrimziIoKafkaConnectorV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_strimzi_io_kafka_connector_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKafkaStrimziIoKafkaConnectorV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kafka_strimzi_io_kafka_connector_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_strimzi_io_kafka_connector_v1beta2_manifest k8s_kafka_strimzi_io_kafka_connector_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kafka_strimzi_io_kafka_connector_v1beta2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
  private _metadata = new DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpec) {
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
      metadata: dataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKafkaStrimziIoKafkaConnectorV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
