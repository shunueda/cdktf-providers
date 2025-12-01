// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_banzaicloud_io_kafka_topic_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_banzaicloud_io_kafka_topic_v1alpha1_manifest#metadata DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestMetadata;
  /**
  * KafkaTopicSpec defines the desired state of KafkaTopic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_banzaicloud_io_kafka_topic_v1alpha1_manifest#spec DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpec;
}
export interface DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_banzaicloud_io_kafka_topic_v1alpha1_manifest#annotations DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_banzaicloud_io_kafka_topic_v1alpha1_manifest#labels DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_banzaicloud_io_kafka_topic_v1alpha1_manifest#name DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_banzaicloud_io_kafka_topic_v1alpha1_manifest#namespace DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpecClusterRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_banzaicloud_io_kafka_topic_v1alpha1_manifest#name DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_banzaicloud_io_kafka_topic_v1alpha1_manifest#namespace DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpecClusterRefToTerraform(struct?: DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpecClusterRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpecClusterRefToHclTerraform(struct?: DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpecClusterRef | cdktf.IResolvable): any {
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

export class DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpecClusterRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpecClusterRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpecClusterRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpec {
  /**
  * ClusterReference states a reference to a cluster for topic/user provisioning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_banzaicloud_io_kafka_topic_v1alpha1_manifest#cluster_ref DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1Manifest#cluster_ref}
  */
  readonly clusterRef: DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpecClusterRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_banzaicloud_io_kafka_topic_v1alpha1_manifest#config DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_banzaicloud_io_kafka_topic_v1alpha1_manifest#name DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Partitions defines the desired number of partitions; must be positive, or -1 to signify using the broker's default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_banzaicloud_io_kafka_topic_v1alpha1_manifest#partitions DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1Manifest#partitions}
  */
  readonly partitions: number;
  /**
  * ReplicationFactor defines the desired replication factor; must be positive, or -1 to signify using the broker's default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_banzaicloud_io_kafka_topic_v1alpha1_manifest#replication_factor DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1Manifest#replication_factor}
  */
  readonly replicationFactor: number;
}

export function dataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_ref: dataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpecClusterRefToTerraform(struct!.clusterRef),
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    name: cdktf.stringToTerraform(struct!.name),
    partitions: cdktf.numberToTerraform(struct!.partitions),
    replication_factor: cdktf.numberToTerraform(struct!.replicationFactor),
  }
}


export function dataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_ref: {
      value: dataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpecClusterRefToHclTerraform(struct!.clusterRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpecClusterRef",
    },
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
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
    partitions: {
      value: cdktf.numberToHclTerraform(struct!.partitions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replication_factor: {
      value: cdktf.numberToHclTerraform(struct!.replicationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRef = this._clusterRef?.internalValue;
    }
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._partitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitions = this._partitions;
    }
    if (this._replicationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationFactor = this._replicationFactor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterRef.internalValue = undefined;
      this._config = undefined;
      this._name = undefined;
      this._partitions = undefined;
      this._replicationFactor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterRef.internalValue = value.clusterRef;
      this._config = value.config;
      this._name = value.name;
      this._partitions = value.partitions;
      this._replicationFactor = value.replicationFactor;
    }
  }

  // cluster_ref - computed: false, optional: false, required: true
  private _clusterRef = new DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpecClusterRefOutputReference(this, "cluster_ref");
  public get clusterRef() {
    return this._clusterRef;
  }
  public putClusterRef(value: DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpecClusterRef) {
    this._clusterRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRefInput() {
    return this._clusterRef.internalValue;
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

  // partitions - computed: false, optional: false, required: true
  private _partitions?: number; 
  public get partitions() {
    return this.getNumberAttribute('partitions');
  }
  public set partitions(value: number) {
    this._partitions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionsInput() {
    return this._partitions;
  }

  // replication_factor - computed: false, optional: false, required: true
  private _replicationFactor?: number; 
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }
  public set replicationFactor(value: number) {
    this._replicationFactor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationFactorInput() {
    return this._replicationFactor;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_banzaicloud_io_kafka_topic_v1alpha1_manifest k8s_kafka_banzaicloud_io_kafka_topic_v1alpha1_manifest}
*/
export class DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kafka_banzaicloud_io_kafka_topic_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_banzaicloud_io_kafka_topic_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kafka_banzaicloud_io_kafka_topic_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kafka_banzaicloud_io_kafka_topic_v1alpha1_manifest k8s_kafka_banzaicloud_io_kafka_topic_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kafka_banzaicloud_io_kafka_topic_v1alpha1_manifest',
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
  private _metadata = new DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKafkaBanzaicloudIoKafkaTopicV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
