// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#metadata DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#metadata}
  */
  readonly metadata: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestMetadata;
  /**
  * InputSpec defines the desired state of ClusterInput
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#spec DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#spec}
  */
  readonly spec?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpec;
}
export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#annotations DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#labels DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#name DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestMetadataToTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestMetadataToHclTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
}
export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCollectd {
  /**
  * Set the address to listen to, default: 0.0.0.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#listen DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#listen}
  */
  readonly listen?: string;
  /**
  * Set the port to listen to, default: 25826
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#port DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#port}
  */
  readonly port?: number;
  /**
  * Set the data specification file,default: /usr/share/collectd/types.db
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#types_db DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#types_db}
  */
  readonly typesDb?: string;
}

export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCollectdToTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCollectd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listen: cdktf.stringToTerraform(struct!.listen),
    port: cdktf.numberToTerraform(struct!.port),
    types_db: cdktf.stringToTerraform(struct!.typesDb),
  }
}


export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCollectdToHclTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCollectd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listen: {
      value: cdktf.stringToHclTerraform(struct!.listen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    types_db: {
      value: cdktf.stringToHclTerraform(struct!.typesDb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCollectdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCollectd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listen !== undefined) {
      hasAnyValues = true;
      internalValueResult.listen = this._listen;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._typesDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.typesDb = this._typesDb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCollectd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listen = undefined;
      this._port = undefined;
      this._typesDb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listen = value.listen;
      this._port = value.port;
      this._typesDb = value.typesDb;
    }
  }

  // listen - computed: false, optional: true, required: false
  private _listen?: string; 
  public get listen() {
    return this.getStringAttribute('listen');
  }
  public set listen(value: string) {
    this._listen = value;
  }
  public resetListen() {
    this._listen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenInput() {
    return this._listen;
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

  // types_db - computed: false, optional: true, required: false
  private _typesDb?: string; 
  public get typesDb() {
    return this.getStringAttribute('types_db');
  }
  public set typesDb(value: string) {
    this._typesDb = value;
  }
  public resetTypesDb() {
    this._typesDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesDbInput() {
    return this._typesDb;
  }
}
export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCustomPlugin {
  /**
  * Config holds any unsupported plugins classic configurations, if ConfigFileFormat is set to yaml, this filed will be ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#config DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#config}
  */
  readonly config?: string;
  /**
  * YamlConfig holds the unsupported plugins yaml configurations, it only works when the ConfigFileFormat is yaml
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#yaml_config DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#yaml_config}
  */
  readonly yamlConfig?: { [key: string]: string };
}

export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCustomPluginToTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCustomPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    yaml_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.yamlConfig),
  }
}


export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCustomPluginToHclTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCustomPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    yaml_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.yamlConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCustomPluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCustomPlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._yamlConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.yamlConfig = this._yamlConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCustomPlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._yamlConfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._yamlConfig = value.yamlConfig;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // yaml_config - computed: false, optional: true, required: false
  private _yamlConfig?: { [key: string]: string }; 
  public get yamlConfig() {
    return this.getStringMapAttribute('yaml_config');
  }
  public set yamlConfig(value: { [key: string]: string }) {
    this._yamlConfig = value;
  }
  public resetYamlConfig() {
    this._yamlConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yamlConfigInput() {
    return this._yamlConfig;
  }
}
export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecDummy {
  /**
  * Dummy JSON record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#dummy DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#dummy}
  */
  readonly dummy?: string;
  /**
  * Events number generated per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#rate DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#rate}
  */
  readonly rate?: number;
  /**
  * Sample events to generate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#samples DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#samples}
  */
  readonly samples?: number;
  /**
  * Tag name associated to all records comming from this plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#tag DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecDummyToTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecDummy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dummy: cdktf.stringToTerraform(struct!.dummy),
    rate: cdktf.numberToTerraform(struct!.rate),
    samples: cdktf.numberToTerraform(struct!.samples),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecDummyToHclTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecDummy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dummy: {
      value: cdktf.stringToHclTerraform(struct!.dummy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    samples: {
      value: cdktf.numberToHclTerraform(struct!.samples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecDummyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecDummy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dummy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dummy = this._dummy;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    if (this._samples !== undefined) {
      hasAnyValues = true;
      internalValueResult.samples = this._samples;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecDummy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dummy = undefined;
      this._rate = undefined;
      this._samples = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dummy = value.dummy;
      this._rate = value.rate;
      this._samples = value.samples;
      this._tag = value.tag;
    }
  }

  // dummy - computed: false, optional: true, required: false
  private _dummy?: string; 
  public get dummy() {
    return this.getStringAttribute('dummy');
  }
  public set dummy(value: string) {
    this._dummy = value;
  }
  public resetDummy() {
    this._dummy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dummyInput() {
    return this._dummy;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // samples - computed: false, optional: true, required: false
  private _samples?: number; 
  public get samples() {
    return this.getNumberAttribute('samples');
  }
  public set samples(value: number) {
    this._samples = value;
  }
  public resetSamples() {
    this._samples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplesInput() {
    return this._samples;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecExecWasi {
  /**
  * Specify the whitelist of paths to be able to access paths from WASM programs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#accessible_paths DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#accessible_paths}
  */
  readonly accessiblePaths?: string[];
  /**
  * Size of the buffer (check unit sizes for allowed values)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#buf_size DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#buf_size}
  */
  readonly bufSize?: string;
  /**
  * Polling interval (nanoseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#interval_n_sec DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#interval_n_sec}
  */
  readonly intervalNSec?: number;
  /**
  * Polling interval (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#interval_sec DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#interval_sec}
  */
  readonly intervalSec?: number;
  /**
  * Specify the name of a parser to interpret the entry as a structured message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#parser DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#parser}
  */
  readonly parser?: string;
  /**
  * Indicates whether to run this input in its own thread. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#threaded DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#threaded}
  */
  readonly threaded?: boolean | cdktf.IResolvable;
  /**
  * The place of a WASM program file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#wasi_path DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#wasi_path}
  */
  readonly wasiPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#wasm_heap_size DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#wasm_heap_size}
  */
  readonly wasmHeapSize?: string;
  /**
  * Size of the stack size of Wasm execution. Review unit sizes for allowed values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#wasm_stack_size DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#wasm_stack_size}
  */
  readonly wasmStackSize?: string;
}

export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecExecWasiToTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecExecWasi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accessible_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessiblePaths),
    buf_size: cdktf.stringToTerraform(struct!.bufSize),
    interval_n_sec: cdktf.numberToTerraform(struct!.intervalNSec),
    interval_sec: cdktf.numberToTerraform(struct!.intervalSec),
    parser: cdktf.stringToTerraform(struct!.parser),
    threaded: cdktf.booleanToTerraform(struct!.threaded),
    wasi_path: cdktf.stringToTerraform(struct!.wasiPath),
    wasm_heap_size: cdktf.stringToTerraform(struct!.wasmHeapSize),
    wasm_stack_size: cdktf.stringToTerraform(struct!.wasmStackSize),
  }
}


export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecExecWasiToHclTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecExecWasi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accessible_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessiblePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    buf_size: {
      value: cdktf.stringToHclTerraform(struct!.bufSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval_n_sec: {
      value: cdktf.numberToHclTerraform(struct!.intervalNSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_sec: {
      value: cdktf.numberToHclTerraform(struct!.intervalSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parser: {
      value: cdktf.stringToHclTerraform(struct!.parser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threaded: {
      value: cdktf.booleanToHclTerraform(struct!.threaded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wasi_path: {
      value: cdktf.stringToHclTerraform(struct!.wasiPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wasm_heap_size: {
      value: cdktf.stringToHclTerraform(struct!.wasmHeapSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wasm_stack_size: {
      value: cdktf.stringToHclTerraform(struct!.wasmStackSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecExecWasiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecExecWasi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessiblePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessiblePaths = this._accessiblePaths;
    }
    if (this._bufSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufSize = this._bufSize;
    }
    if (this._intervalNSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalNSec = this._intervalNSec;
    }
    if (this._intervalSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSec = this._intervalSec;
    }
    if (this._parser !== undefined) {
      hasAnyValues = true;
      internalValueResult.parser = this._parser;
    }
    if (this._threaded !== undefined) {
      hasAnyValues = true;
      internalValueResult.threaded = this._threaded;
    }
    if (this._wasiPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.wasiPath = this._wasiPath;
    }
    if (this._wasmHeapSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.wasmHeapSize = this._wasmHeapSize;
    }
    if (this._wasmStackSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.wasmStackSize = this._wasmStackSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecExecWasi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessiblePaths = undefined;
      this._bufSize = undefined;
      this._intervalNSec = undefined;
      this._intervalSec = undefined;
      this._parser = undefined;
      this._threaded = undefined;
      this._wasiPath = undefined;
      this._wasmHeapSize = undefined;
      this._wasmStackSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessiblePaths = value.accessiblePaths;
      this._bufSize = value.bufSize;
      this._intervalNSec = value.intervalNSec;
      this._intervalSec = value.intervalSec;
      this._parser = value.parser;
      this._threaded = value.threaded;
      this._wasiPath = value.wasiPath;
      this._wasmHeapSize = value.wasmHeapSize;
      this._wasmStackSize = value.wasmStackSize;
    }
  }

  // accessible_paths - computed: false, optional: true, required: false
  private _accessiblePaths?: string[]; 
  public get accessiblePaths() {
    return this.getListAttribute('accessible_paths');
  }
  public set accessiblePaths(value: string[]) {
    this._accessiblePaths = value;
  }
  public resetAccessiblePaths() {
    this._accessiblePaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessiblePathsInput() {
    return this._accessiblePaths;
  }

  // buf_size - computed: false, optional: true, required: false
  private _bufSize?: string; 
  public get bufSize() {
    return this.getStringAttribute('buf_size');
  }
  public set bufSize(value: string) {
    this._bufSize = value;
  }
  public resetBufSize() {
    this._bufSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufSizeInput() {
    return this._bufSize;
  }

  // interval_n_sec - computed: false, optional: true, required: false
  private _intervalNSec?: number; 
  public get intervalNSec() {
    return this.getNumberAttribute('interval_n_sec');
  }
  public set intervalNSec(value: number) {
    this._intervalNSec = value;
  }
  public resetIntervalNSec() {
    this._intervalNSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalNSecInput() {
    return this._intervalNSec;
  }

  // interval_sec - computed: false, optional: true, required: false
  private _intervalSec?: number; 
  public get intervalSec() {
    return this.getNumberAttribute('interval_sec');
  }
  public set intervalSec(value: number) {
    this._intervalSec = value;
  }
  public resetIntervalSec() {
    this._intervalSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecInput() {
    return this._intervalSec;
  }

  // parser - computed: false, optional: true, required: false
  private _parser?: string; 
  public get parser() {
    return this.getStringAttribute('parser');
  }
  public set parser(value: string) {
    this._parser = value;
  }
  public resetParser() {
    this._parser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parserInput() {
    return this._parser;
  }

  // threaded - computed: false, optional: true, required: false
  private _threaded?: boolean | cdktf.IResolvable; 
  public get threaded() {
    return this.getBooleanAttribute('threaded');
  }
  public set threaded(value: boolean | cdktf.IResolvable) {
    this._threaded = value;
  }
  public resetThreaded() {
    this._threaded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadedInput() {
    return this._threaded;
  }

  // wasi_path - computed: false, optional: true, required: false
  private _wasiPath?: string; 
  public get wasiPath() {
    return this.getStringAttribute('wasi_path');
  }
  public set wasiPath(value: string) {
    this._wasiPath = value;
  }
  public resetWasiPath() {
    this._wasiPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wasiPathInput() {
    return this._wasiPath;
  }

  // wasm_heap_size - computed: false, optional: true, required: false
  private _wasmHeapSize?: string; 
  public get wasmHeapSize() {
    return this.getStringAttribute('wasm_heap_size');
  }
  public set wasmHeapSize(value: string) {
    this._wasmHeapSize = value;
  }
  public resetWasmHeapSize() {
    this._wasmHeapSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wasmHeapSizeInput() {
    return this._wasmHeapSize;
  }

  // wasm_stack_size - computed: false, optional: true, required: false
  private _wasmStackSize?: string; 
  public get wasmStackSize() {
    return this.getStringAttribute('wasm_stack_size');
  }
  public set wasmStackSize(value: string) {
    this._wasmStackSize = value;
  }
  public resetWasmStackSize() {
    this._wasmStackSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wasmStackSizeInput() {
    return this._wasmStackSize;
  }
}
export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecFluentBitMetrics {
  /**
  * The rate at which metrics are collected from the host operating system. default is 2 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#scrape_interval DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#scrape_interval}
  */
  readonly scrapeInterval?: string;
  /**
  * Scrape metrics upon start, useful to avoid waiting for 'scrape_interval' for the first round of metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#scrape_on_start DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#scrape_on_start}
  */
  readonly scrapeOnStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#tag DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecFluentBitMetricsToTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecFluentBitMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scrape_interval: cdktf.stringToTerraform(struct!.scrapeInterval),
    scrape_on_start: cdktf.booleanToTerraform(struct!.scrapeOnStart),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecFluentBitMetricsToHclTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecFluentBitMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scrape_interval: {
      value: cdktf.stringToHclTerraform(struct!.scrapeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scrape_on_start: {
      value: cdktf.booleanToHclTerraform(struct!.scrapeOnStart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecFluentBitMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecFluentBitMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scrapeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeInterval = this._scrapeInterval;
    }
    if (this._scrapeOnStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeOnStart = this._scrapeOnStart;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecFluentBitMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scrapeInterval = undefined;
      this._scrapeOnStart = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scrapeInterval = value.scrapeInterval;
      this._scrapeOnStart = value.scrapeOnStart;
      this._tag = value.tag;
    }
  }

  // scrape_interval - computed: false, optional: true, required: false
  private _scrapeInterval?: string; 
  public get scrapeInterval() {
    return this.getStringAttribute('scrape_interval');
  }
  public set scrapeInterval(value: string) {
    this._scrapeInterval = value;
  }
  public resetScrapeInterval() {
    this._scrapeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeIntervalInput() {
    return this._scrapeInterval;
  }

  // scrape_on_start - computed: false, optional: true, required: false
  private _scrapeOnStart?: boolean | cdktf.IResolvable; 
  public get scrapeOnStart() {
    return this.getBooleanAttribute('scrape_on_start');
  }
  public set scrapeOnStart(value: boolean | cdktf.IResolvable) {
    this._scrapeOnStart = value;
  }
  public resetScrapeOnStart() {
    this._scrapeOnStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeOnStartInput() {
    return this._scrapeOnStart;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecForward {
  /**
  * Specify maximum buffer memory size used to recieve a forward message. The value must be according to the Unit Size specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#buffer_max_size DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#buffer_max_size}
  */
  readonly bufferMaxSize?: string;
  /**
  * Set the initial buffer size to store incoming data. This value is used too to increase buffer size as required. The value must be according to the Unit Size specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#bufferchunk_size DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#bufferchunk_size}
  */
  readonly bufferchunkSize?: string;
  /**
  * Listener network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#listen DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#listen}
  */
  readonly listen?: string;
  /**
  * Port for forward plugin instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#port DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#port}
  */
  readonly port?: number;
  /**
  * in_forward uses the tag value for incoming logs. If not set it uses tag from incoming log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#tag DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#tag}
  */
  readonly tag?: string;
  /**
  * Adds the prefix to incoming event's tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#tag_prefix DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#tag_prefix}
  */
  readonly tagPrefix?: string;
  /**
  * Threaded mechanism allows input plugin to run in a separate thread which helps to desaturate the main pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#threaded DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#threaded}
  */
  readonly threaded?: string;
  /**
  * Specify the path to unix socket to recieve a forward message. If set, Listen and port are ignnored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#unix_path DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#unix_path}
  */
  readonly unixPath?: string;
  /**
  * Set the permission of unix socket file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#unix_perm DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#unix_perm}
  */
  readonly unixPerm?: string;
}

export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecForwardToTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecForward | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer_max_size: cdktf.stringToTerraform(struct!.bufferMaxSize),
    bufferchunk_size: cdktf.stringToTerraform(struct!.bufferchunkSize),
    listen: cdktf.stringToTerraform(struct!.listen),
    port: cdktf.numberToTerraform(struct!.port),
    tag: cdktf.stringToTerraform(struct!.tag),
    tag_prefix: cdktf.stringToTerraform(struct!.tagPrefix),
    threaded: cdktf.stringToTerraform(struct!.threaded),
    unix_path: cdktf.stringToTerraform(struct!.unixPath),
    unix_perm: cdktf.stringToTerraform(struct!.unixPerm),
  }
}


export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecForwardToHclTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecForward | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer_max_size: {
      value: cdktf.stringToHclTerraform(struct!.bufferMaxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bufferchunk_size: {
      value: cdktf.stringToHclTerraform(struct!.bufferchunkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listen: {
      value: cdktf.stringToHclTerraform(struct!.listen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_prefix: {
      value: cdktf.stringToHclTerraform(struct!.tagPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threaded: {
      value: cdktf.stringToHclTerraform(struct!.threaded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unix_path: {
      value: cdktf.stringToHclTerraform(struct!.unixPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unix_perm: {
      value: cdktf.stringToHclTerraform(struct!.unixPerm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecForwardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecForward | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferMaxSize = this._bufferMaxSize;
    }
    if (this._bufferchunkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferchunkSize = this._bufferchunkSize;
    }
    if (this._listen !== undefined) {
      hasAnyValues = true;
      internalValueResult.listen = this._listen;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._tagPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagPrefix = this._tagPrefix;
    }
    if (this._threaded !== undefined) {
      hasAnyValues = true;
      internalValueResult.threaded = this._threaded;
    }
    if (this._unixPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.unixPath = this._unixPath;
    }
    if (this._unixPerm !== undefined) {
      hasAnyValues = true;
      internalValueResult.unixPerm = this._unixPerm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecForward | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bufferMaxSize = undefined;
      this._bufferchunkSize = undefined;
      this._listen = undefined;
      this._port = undefined;
      this._tag = undefined;
      this._tagPrefix = undefined;
      this._threaded = undefined;
      this._unixPath = undefined;
      this._unixPerm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bufferMaxSize = value.bufferMaxSize;
      this._bufferchunkSize = value.bufferchunkSize;
      this._listen = value.listen;
      this._port = value.port;
      this._tag = value.tag;
      this._tagPrefix = value.tagPrefix;
      this._threaded = value.threaded;
      this._unixPath = value.unixPath;
      this._unixPerm = value.unixPerm;
    }
  }

  // buffer_max_size - computed: false, optional: true, required: false
  private _bufferMaxSize?: string; 
  public get bufferMaxSize() {
    return this.getStringAttribute('buffer_max_size');
  }
  public set bufferMaxSize(value: string) {
    this._bufferMaxSize = value;
  }
  public resetBufferMaxSize() {
    this._bufferMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferMaxSizeInput() {
    return this._bufferMaxSize;
  }

  // bufferchunk_size - computed: false, optional: true, required: false
  private _bufferchunkSize?: string; 
  public get bufferchunkSize() {
    return this.getStringAttribute('bufferchunk_size');
  }
  public set bufferchunkSize(value: string) {
    this._bufferchunkSize = value;
  }
  public resetBufferchunkSize() {
    this._bufferchunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferchunkSizeInput() {
    return this._bufferchunkSize;
  }

  // listen - computed: false, optional: true, required: false
  private _listen?: string; 
  public get listen() {
    return this.getStringAttribute('listen');
  }
  public set listen(value: string) {
    this._listen = value;
  }
  public resetListen() {
    this._listen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenInput() {
    return this._listen;
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

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // tag_prefix - computed: false, optional: true, required: false
  private _tagPrefix?: string; 
  public get tagPrefix() {
    return this.getStringAttribute('tag_prefix');
  }
  public set tagPrefix(value: string) {
    this._tagPrefix = value;
  }
  public resetTagPrefix() {
    this._tagPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagPrefixInput() {
    return this._tagPrefix;
  }

  // threaded - computed: false, optional: true, required: false
  private _threaded?: string; 
  public get threaded() {
    return this.getStringAttribute('threaded');
  }
  public set threaded(value: string) {
    this._threaded = value;
  }
  public resetThreaded() {
    this._threaded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadedInput() {
    return this._threaded;
  }

  // unix_path - computed: false, optional: true, required: false
  private _unixPath?: string; 
  public get unixPath() {
    return this.getStringAttribute('unix_path');
  }
  public set unixPath(value: string) {
    this._unixPath = value;
  }
  public resetUnixPath() {
    this._unixPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixPathInput() {
    return this._unixPath;
  }

  // unix_perm - computed: false, optional: true, required: false
  private _unixPerm?: string; 
  public get unixPerm() {
    return this.getStringAttribute('unix_perm');
  }
  public set unixPerm(value: string) {
    this._unixPerm = value;
  }
  public resetUnixPerm() {
    this._unixPerm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixPermInput() {
    return this._unixPerm;
  }
}
export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#key DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#name DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#optional DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#secret_key_ref DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFromSecretKeyRef;
}

export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFromToTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFromToHclTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPassword {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#value_from DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFrom;
}

export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordToTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordToHclTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTls {
  /**
  * Absolute path to CA certificate file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#ca_file DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#ca_file}
  */
  readonly caFile?: string;
  /**
  * Absolute path to scan for certificate files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#ca_path DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#ca_path}
  */
  readonly caPath?: string;
  /**
  * Absolute path to Certificate file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#crt_file DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#crt_file}
  */
  readonly crtFile?: string;
  /**
  * Set TLS debug verbosity level. It accept the following values: 0 (No debug), 1 (Error), 2 (State change), 3 (Informational) and 4 Verbose
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#debug DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#debug}
  */
  readonly debug?: number;
  /**
  * Absolute path to private Key file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#key_file DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#key_file}
  */
  readonly keyFile?: string;
  /**
  * Optional password for tls.key_file file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#key_password DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#key_password}
  */
  readonly keyPassword?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPassword;
  /**
  * Force certificate validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#verify DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#verify}
  */
  readonly verify?: boolean | cdktf.IResolvable;
  /**
  * Hostname to be used for TLS SNI extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#vhost DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#vhost}
  */
  readonly vhost?: string;
}

export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsToTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    ca_path: cdktf.stringToTerraform(struct!.caPath),
    crt_file: cdktf.stringToTerraform(struct!.crtFile),
    debug: cdktf.numberToTerraform(struct!.debug),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
    key_password: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordToTerraform(struct!.keyPassword),
    verify: cdktf.booleanToTerraform(struct!.verify),
    vhost: cdktf.stringToTerraform(struct!.vhost),
  }
}


export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsToHclTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_path: {
      value: cdktf.stringToHclTerraform(struct!.caPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktf.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug: {
      value: cdktf.numberToHclTerraform(struct!.debug),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_password: {
      value: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordToHclTerraform(struct!.keyPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPassword",
    },
    verify: {
      value: cdktf.booleanToHclTerraform(struct!.verify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vhost: {
      value: cdktf.stringToHclTerraform(struct!.vhost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._caPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.caPath = this._caPath;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._keyPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassword = this._keyPassword?.internalValue;
    }
    if (this._verify !== undefined) {
      hasAnyValues = true;
      internalValueResult.verify = this._verify;
    }
    if (this._vhost !== undefined) {
      hasAnyValues = true;
      internalValueResult.vhost = this._vhost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._caPath = undefined;
      this._crtFile = undefined;
      this._debug = undefined;
      this._keyFile = undefined;
      this._keyPassword.internalValue = undefined;
      this._verify = undefined;
      this._vhost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._caPath = value.caPath;
      this._crtFile = value.crtFile;
      this._debug = value.debug;
      this._keyFile = value.keyFile;
      this._keyPassword.internalValue = value.keyPassword;
      this._verify = value.verify;
      this._vhost = value.vhost;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // ca_path - computed: false, optional: true, required: false
  private _caPath?: string; 
  public get caPath() {
    return this.getStringAttribute('ca_path');
  }
  public set caPath(value: string) {
    this._caPath = value;
  }
  public resetCaPath() {
    this._caPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPathInput() {
    return this._caPath;
  }

  // crt_file - computed: false, optional: true, required: false
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  public resetCrtFile() {
    this._crtFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: number; 
  public get debug() {
    return this.getNumberAttribute('debug');
  }
  public set debug(value: number) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_password - computed: false, optional: true, required: false
  private _keyPassword = new DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPasswordOutputReference(this, "key_password");
  public get keyPassword() {
    return this._keyPassword;
  }
  public putKeyPassword(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsKeyPassword) {
    this._keyPassword.internalValue = value;
  }
  public resetKeyPassword() {
    this._keyPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPasswordInput() {
    return this._keyPassword.internalValue;
  }

  // verify - computed: false, optional: true, required: false
  private _verify?: boolean | cdktf.IResolvable; 
  public get verify() {
    return this.getBooleanAttribute('verify');
  }
  public set verify(value: boolean | cdktf.IResolvable) {
    this._verify = value;
  }
  public resetVerify() {
    this._verify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }

  // vhost - computed: false, optional: true, required: false
  private _vhost?: string; 
  public get vhost() {
    return this.getStringAttribute('vhost');
  }
  public set vhost(value: string) {
    this._vhost = value;
  }
  public resetVhost() {
    this._vhost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhostInput() {
    return this._vhost;
  }
}
export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttp {
  /**
  * This sets the chunk size for incoming incoming JSON messages. These chunks are then stored/managed in the space available by buffer_max_size,default 512K.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#buffer_chunk_size DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#buffer_chunk_size}
  */
  readonly bufferChunkSize?: string;
  /**
  * Specify the maximum buffer size in KB to receive a JSON message,default 4M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#buffer_max_size DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#buffer_max_size}
  */
  readonly bufferMaxSize?: string;
  /**
  * The address to listen on,default 0.0.0.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#listen DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#listen}
  */
  readonly listen?: string;
  /**
  * The port for Fluent Bit to listen on,default 9880
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#port DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#port}
  */
  readonly port?: number;
  /**
  * Add an HTTP header key/value pair on success. Multiple headers can be set. Example: X-Custom custom-answer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#successful_header DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#successful_header}
  */
  readonly successfulHeader?: string;
  /**
  * It allows to set successful response code. 200, 201 and 204 are supported,default 201.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#successful_response_code DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#successful_response_code}
  */
  readonly successfulResponseCode?: number;
  /**
  * Specify the key name to overwrite a tag. If set, the tag will be overwritten by a value of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#tag_key DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Fluent Bit provides integrated support for Transport Layer Security (TLS) and it predecessor Secure Sockets Layer (SSL) respectively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#tls DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#tls}
  */
  readonly tls?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTls;
}

export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpToTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer_chunk_size: cdktf.stringToTerraform(struct!.bufferChunkSize),
    buffer_max_size: cdktf.stringToTerraform(struct!.bufferMaxSize),
    listen: cdktf.stringToTerraform(struct!.listen),
    port: cdktf.numberToTerraform(struct!.port),
    successful_header: cdktf.stringToTerraform(struct!.successfulHeader),
    successful_response_code: cdktf.numberToTerraform(struct!.successfulResponseCode),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tls: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsToTerraform(struct!.tls),
  }
}


export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpToHclTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer_chunk_size: {
      value: cdktf.stringToHclTerraform(struct!.bufferChunkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffer_max_size: {
      value: cdktf.stringToHclTerraform(struct!.bufferMaxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listen: {
      value: cdktf.stringToHclTerraform(struct!.listen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    successful_header: {
      value: cdktf.stringToHclTerraform(struct!.successfulHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    successful_response_code: {
      value: cdktf.numberToHclTerraform(struct!.successfulResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferChunkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferChunkSize = this._bufferChunkSize;
    }
    if (this._bufferMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferMaxSize = this._bufferMaxSize;
    }
    if (this._listen !== undefined) {
      hasAnyValues = true;
      internalValueResult.listen = this._listen;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._successfulHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.successfulHeader = this._successfulHeader;
    }
    if (this._successfulResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.successfulResponseCode = this._successfulResponseCode;
    }
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bufferChunkSize = undefined;
      this._bufferMaxSize = undefined;
      this._listen = undefined;
      this._port = undefined;
      this._successfulHeader = undefined;
      this._successfulResponseCode = undefined;
      this._tagKey = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bufferChunkSize = value.bufferChunkSize;
      this._bufferMaxSize = value.bufferMaxSize;
      this._listen = value.listen;
      this._port = value.port;
      this._successfulHeader = value.successfulHeader;
      this._successfulResponseCode = value.successfulResponseCode;
      this._tagKey = value.tagKey;
      this._tls.internalValue = value.tls;
    }
  }

  // buffer_chunk_size - computed: false, optional: true, required: false
  private _bufferChunkSize?: string; 
  public get bufferChunkSize() {
    return this.getStringAttribute('buffer_chunk_size');
  }
  public set bufferChunkSize(value: string) {
    this._bufferChunkSize = value;
  }
  public resetBufferChunkSize() {
    this._bufferChunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferChunkSizeInput() {
    return this._bufferChunkSize;
  }

  // buffer_max_size - computed: false, optional: true, required: false
  private _bufferMaxSize?: string; 
  public get bufferMaxSize() {
    return this.getStringAttribute('buffer_max_size');
  }
  public set bufferMaxSize(value: string) {
    this._bufferMaxSize = value;
  }
  public resetBufferMaxSize() {
    this._bufferMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferMaxSizeInput() {
    return this._bufferMaxSize;
  }

  // listen - computed: false, optional: true, required: false
  private _listen?: string; 
  public get listen() {
    return this.getStringAttribute('listen');
  }
  public set listen(value: string) {
    this._listen = value;
  }
  public resetListen() {
    this._listen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenInput() {
    return this._listen;
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

  // successful_header - computed: false, optional: true, required: false
  private _successfulHeader?: string; 
  public get successfulHeader() {
    return this.getStringAttribute('successful_header');
  }
  public set successfulHeader(value: string) {
    this._successfulHeader = value;
  }
  public resetSuccessfulHeader() {
    this._successfulHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successfulHeaderInput() {
    return this._successfulHeader;
  }

  // successful_response_code - computed: false, optional: true, required: false
  private _successfulResponseCode?: number; 
  public get successfulResponseCode() {
    return this.getNumberAttribute('successful_response_code');
  }
  public set successfulResponseCode(value: number) {
    this._successfulResponseCode = value;
  }
  public resetSuccessfulResponseCode() {
    this._successfulResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successfulResponseCodeInput() {
    return this._successfulResponseCode;
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecKubernetesEvents {
  /**
  * Set a database file to keep track of recorded Kubernetes events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#db DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#db}
  */
  readonly db?: string;
  /**
  * Set a database sync method. values: extra, full, normal and off
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#db_sync DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#db_sync}
  */
  readonly dbSync?: string;
  /**
  * Set the polling interval for each channel (sub seconds: nanoseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#interval_nsec DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#interval_nsec}
  */
  readonly intervalNsec?: number;
  /**
  * Set the polling interval for each channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#interval_sec DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#interval_sec}
  */
  readonly intervalSec?: number;
  /**
  * CA certificate file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#kube_ca_file DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#kube_ca_file}
  */
  readonly kubeCaFile?: string;
  /**
  * Absolute path to scan for certificate files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#kube_ca_path DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#kube_ca_path}
  */
  readonly kubeCaPath?: string;
  /**
  * Kubernetes namespace to query events from. Gets events from all namespaces by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#kube_namespace DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#kube_namespace}
  */
  readonly kubeNamespace?: string;
  /**
  * kubernetes limit parameter for events query, no limit applied when set to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#kube_request_limit DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#kube_request_limit}
  */
  readonly kubeRequestLimit?: number;
  /**
  * Kubernetes retention time for events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#kube_retention_time DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#kube_retention_time}
  */
  readonly kubeRetentionTime?: string;
  /**
  * Token file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#kube_token_file DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#kube_token_file}
  */
  readonly kubeTokenFile?: string;
  /**
  * configurable 'time to live' for the K8s token. By default, it is set to 600 seconds. After this time, the token is reloaded from Kube_Token_File or the Kube_Token_Command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#kube_token_ttl DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#kube_token_ttl}
  */
  readonly kubeTokenTtl?: string;
  /**
  * API Server end-point
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#kube_url DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#kube_url}
  */
  readonly kubeUrl?: string;
  /**
  * Tag name associated to all records comming from this plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#tag DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#tag}
  */
  readonly tag?: string;
  /**
  * Debug level between 0 (nothing) and 4 (every detail).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#tls_debug DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#tls_debug}
  */
  readonly tlsDebug?: number;
  /**
  * When enabled, turns on certificate validation when connecting to the Kubernetes API server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#tls_verify DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#tls_verify}
  */
  readonly tlsVerify?: boolean | cdktf.IResolvable;
  /**
  * Set optional TLS virtual host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#tls_vhost DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#tls_vhost}
  */
  readonly tlsVhost?: string;
}

export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecKubernetesEventsToTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecKubernetesEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db: cdktf.stringToTerraform(struct!.db),
    db_sync: cdktf.stringToTerraform(struct!.dbSync),
    interval_nsec: cdktf.numberToTerraform(struct!.intervalNsec),
    interval_sec: cdktf.numberToTerraform(struct!.intervalSec),
    kube_ca_file: cdktf.stringToTerraform(struct!.kubeCaFile),
    kube_ca_path: cdktf.stringToTerraform(struct!.kubeCaPath),
    kube_namespace: cdktf.stringToTerraform(struct!.kubeNamespace),
    kube_request_limit: cdktf.numberToTerraform(struct!.kubeRequestLimit),
    kube_retention_time: cdktf.stringToTerraform(struct!.kubeRetentionTime),
    kube_token_file: cdktf.stringToTerraform(struct!.kubeTokenFile),
    kube_token_ttl: cdktf.stringToTerraform(struct!.kubeTokenTtl),
    kube_url: cdktf.stringToTerraform(struct!.kubeUrl),
    tag: cdktf.stringToTerraform(struct!.tag),
    tls_debug: cdktf.numberToTerraform(struct!.tlsDebug),
    tls_verify: cdktf.booleanToTerraform(struct!.tlsVerify),
    tls_vhost: cdktf.stringToTerraform(struct!.tlsVhost),
  }
}


export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecKubernetesEventsToHclTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecKubernetesEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db: {
      value: cdktf.stringToHclTerraform(struct!.db),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_sync: {
      value: cdktf.stringToHclTerraform(struct!.dbSync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval_nsec: {
      value: cdktf.numberToHclTerraform(struct!.intervalNsec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_sec: {
      value: cdktf.numberToHclTerraform(struct!.intervalSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kube_ca_file: {
      value: cdktf.stringToHclTerraform(struct!.kubeCaFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_ca_path: {
      value: cdktf.stringToHclTerraform(struct!.kubeCaPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_namespace: {
      value: cdktf.stringToHclTerraform(struct!.kubeNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_request_limit: {
      value: cdktf.numberToHclTerraform(struct!.kubeRequestLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kube_retention_time: {
      value: cdktf.stringToHclTerraform(struct!.kubeRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_token_file: {
      value: cdktf.stringToHclTerraform(struct!.kubeTokenFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_token_ttl: {
      value: cdktf.stringToHclTerraform(struct!.kubeTokenTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_url: {
      value: cdktf.stringToHclTerraform(struct!.kubeUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_debug: {
      value: cdktf.numberToHclTerraform(struct!.tlsDebug),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_verify: {
      value: cdktf.booleanToHclTerraform(struct!.tlsVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_vhost: {
      value: cdktf.stringToHclTerraform(struct!.tlsVhost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecKubernetesEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecKubernetesEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._db !== undefined) {
      hasAnyValues = true;
      internalValueResult.db = this._db;
    }
    if (this._dbSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbSync = this._dbSync;
    }
    if (this._intervalNsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalNsec = this._intervalNsec;
    }
    if (this._intervalSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSec = this._intervalSec;
    }
    if (this._kubeCaFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeCaFile = this._kubeCaFile;
    }
    if (this._kubeCaPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeCaPath = this._kubeCaPath;
    }
    if (this._kubeNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeNamespace = this._kubeNamespace;
    }
    if (this._kubeRequestLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeRequestLimit = this._kubeRequestLimit;
    }
    if (this._kubeRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeRetentionTime = this._kubeRetentionTime;
    }
    if (this._kubeTokenFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeTokenFile = this._kubeTokenFile;
    }
    if (this._kubeTokenTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeTokenTtl = this._kubeTokenTtl;
    }
    if (this._kubeUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeUrl = this._kubeUrl;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._tlsDebug !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsDebug = this._tlsDebug;
    }
    if (this._tlsVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVerify = this._tlsVerify;
    }
    if (this._tlsVhost !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVhost = this._tlsVhost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecKubernetesEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._db = undefined;
      this._dbSync = undefined;
      this._intervalNsec = undefined;
      this._intervalSec = undefined;
      this._kubeCaFile = undefined;
      this._kubeCaPath = undefined;
      this._kubeNamespace = undefined;
      this._kubeRequestLimit = undefined;
      this._kubeRetentionTime = undefined;
      this._kubeTokenFile = undefined;
      this._kubeTokenTtl = undefined;
      this._kubeUrl = undefined;
      this._tag = undefined;
      this._tlsDebug = undefined;
      this._tlsVerify = undefined;
      this._tlsVhost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._db = value.db;
      this._dbSync = value.dbSync;
      this._intervalNsec = value.intervalNsec;
      this._intervalSec = value.intervalSec;
      this._kubeCaFile = value.kubeCaFile;
      this._kubeCaPath = value.kubeCaPath;
      this._kubeNamespace = value.kubeNamespace;
      this._kubeRequestLimit = value.kubeRequestLimit;
      this._kubeRetentionTime = value.kubeRetentionTime;
      this._kubeTokenFile = value.kubeTokenFile;
      this._kubeTokenTtl = value.kubeTokenTtl;
      this._kubeUrl = value.kubeUrl;
      this._tag = value.tag;
      this._tlsDebug = value.tlsDebug;
      this._tlsVerify = value.tlsVerify;
      this._tlsVhost = value.tlsVhost;
    }
  }

  // db - computed: false, optional: true, required: false
  private _db?: string; 
  public get db() {
    return this.getStringAttribute('db');
  }
  public set db(value: string) {
    this._db = value;
  }
  public resetDb() {
    this._db = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db;
  }

  // db_sync - computed: false, optional: true, required: false
  private _dbSync?: string; 
  public get dbSync() {
    return this.getStringAttribute('db_sync');
  }
  public set dbSync(value: string) {
    this._dbSync = value;
  }
  public resetDbSync() {
    this._dbSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSyncInput() {
    return this._dbSync;
  }

  // interval_nsec - computed: false, optional: true, required: false
  private _intervalNsec?: number; 
  public get intervalNsec() {
    return this.getNumberAttribute('interval_nsec');
  }
  public set intervalNsec(value: number) {
    this._intervalNsec = value;
  }
  public resetIntervalNsec() {
    this._intervalNsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalNsecInput() {
    return this._intervalNsec;
  }

  // interval_sec - computed: false, optional: true, required: false
  private _intervalSec?: number; 
  public get intervalSec() {
    return this.getNumberAttribute('interval_sec');
  }
  public set intervalSec(value: number) {
    this._intervalSec = value;
  }
  public resetIntervalSec() {
    this._intervalSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecInput() {
    return this._intervalSec;
  }

  // kube_ca_file - computed: false, optional: true, required: false
  private _kubeCaFile?: string; 
  public get kubeCaFile() {
    return this.getStringAttribute('kube_ca_file');
  }
  public set kubeCaFile(value: string) {
    this._kubeCaFile = value;
  }
  public resetKubeCaFile() {
    this._kubeCaFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeCaFileInput() {
    return this._kubeCaFile;
  }

  // kube_ca_path - computed: false, optional: true, required: false
  private _kubeCaPath?: string; 
  public get kubeCaPath() {
    return this.getStringAttribute('kube_ca_path');
  }
  public set kubeCaPath(value: string) {
    this._kubeCaPath = value;
  }
  public resetKubeCaPath() {
    this._kubeCaPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeCaPathInput() {
    return this._kubeCaPath;
  }

  // kube_namespace - computed: false, optional: true, required: false
  private _kubeNamespace?: string; 
  public get kubeNamespace() {
    return this.getStringAttribute('kube_namespace');
  }
  public set kubeNamespace(value: string) {
    this._kubeNamespace = value;
  }
  public resetKubeNamespace() {
    this._kubeNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeNamespaceInput() {
    return this._kubeNamespace;
  }

  // kube_request_limit - computed: false, optional: true, required: false
  private _kubeRequestLimit?: number; 
  public get kubeRequestLimit() {
    return this.getNumberAttribute('kube_request_limit');
  }
  public set kubeRequestLimit(value: number) {
    this._kubeRequestLimit = value;
  }
  public resetKubeRequestLimit() {
    this._kubeRequestLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeRequestLimitInput() {
    return this._kubeRequestLimit;
  }

  // kube_retention_time - computed: false, optional: true, required: false
  private _kubeRetentionTime?: string; 
  public get kubeRetentionTime() {
    return this.getStringAttribute('kube_retention_time');
  }
  public set kubeRetentionTime(value: string) {
    this._kubeRetentionTime = value;
  }
  public resetKubeRetentionTime() {
    this._kubeRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeRetentionTimeInput() {
    return this._kubeRetentionTime;
  }

  // kube_token_file - computed: false, optional: true, required: false
  private _kubeTokenFile?: string; 
  public get kubeTokenFile() {
    return this.getStringAttribute('kube_token_file');
  }
  public set kubeTokenFile(value: string) {
    this._kubeTokenFile = value;
  }
  public resetKubeTokenFile() {
    this._kubeTokenFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeTokenFileInput() {
    return this._kubeTokenFile;
  }

  // kube_token_ttl - computed: false, optional: true, required: false
  private _kubeTokenTtl?: string; 
  public get kubeTokenTtl() {
    return this.getStringAttribute('kube_token_ttl');
  }
  public set kubeTokenTtl(value: string) {
    this._kubeTokenTtl = value;
  }
  public resetKubeTokenTtl() {
    this._kubeTokenTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeTokenTtlInput() {
    return this._kubeTokenTtl;
  }

  // kube_url - computed: false, optional: true, required: false
  private _kubeUrl?: string; 
  public get kubeUrl() {
    return this.getStringAttribute('kube_url');
  }
  public set kubeUrl(value: string) {
    this._kubeUrl = value;
  }
  public resetKubeUrl() {
    this._kubeUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeUrlInput() {
    return this._kubeUrl;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // tls_debug - computed: false, optional: true, required: false
  private _tlsDebug?: number; 
  public get tlsDebug() {
    return this.getNumberAttribute('tls_debug');
  }
  public set tlsDebug(value: number) {
    this._tlsDebug = value;
  }
  public resetTlsDebug() {
    this._tlsDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsDebugInput() {
    return this._tlsDebug;
  }

  // tls_verify - computed: false, optional: true, required: false
  private _tlsVerify?: boolean | cdktf.IResolvable; 
  public get tlsVerify() {
    return this.getBooleanAttribute('tls_verify');
  }
  public set tlsVerify(value: boolean | cdktf.IResolvable) {
    this._tlsVerify = value;
  }
  public resetTlsVerify() {
    this._tlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVerifyInput() {
    return this._tlsVerify;
  }

  // tls_vhost - computed: false, optional: true, required: false
  private _tlsVhost?: string; 
  public get tlsVhost() {
    return this.getStringAttribute('tls_vhost');
  }
  public set tlsVhost(value: string) {
    this._tlsVhost = value;
  }
  public resetTlsVhost() {
    this._tlsVhost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVhostInput() {
    return this._tlsVhost;
  }
}
export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecMqtt {
  /**
  * Listener network interface, default: 0.0.0.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#listen DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#listen}
  */
  readonly listen?: string;
  /**
  * TCP port where listening for connections, default: 1883
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#port DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecMqttToTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecMqtt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listen: cdktf.stringToTerraform(struct!.listen),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecMqttToHclTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecMqtt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listen: {
      value: cdktf.stringToHclTerraform(struct!.listen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecMqttOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecMqtt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listen !== undefined) {
      hasAnyValues = true;
      internalValueResult.listen = this._listen;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecMqtt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listen = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listen = value.listen;
      this._port = value.port;
    }
  }

  // listen - computed: false, optional: true, required: false
  private _listen?: string; 
  public get listen() {
    return this.getStringAttribute('listen');
  }
  public set listen(value: string) {
    this._listen = value;
  }
  public resetListen() {
    this._listen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenInput() {
    return this._listen;
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
}
export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNginx {
  /**
  * Name of the target host or IP address to check, default: localhost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#host DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#host}
  */
  readonly host?: string;
  /**
  * Turn on NGINX plus mode,default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#nginx_plus DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#nginx_plus}
  */
  readonly nginxPlus?: boolean | cdktf.IResolvable;
  /**
  * Port of the target nginx service to connect to, default: 80
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#port DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#port}
  */
  readonly port?: number;
  /**
  * The URL of the Stub Status Handler,default: /status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#status_url DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#status_url}
  */
  readonly statusUrl?: string;
}

export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNginxToTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNginx | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    nginx_plus: cdktf.booleanToTerraform(struct!.nginxPlus),
    port: cdktf.numberToTerraform(struct!.port),
    status_url: cdktf.stringToTerraform(struct!.statusUrl),
  }
}


export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNginxToHclTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNginx | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nginx_plus: {
      value: cdktf.booleanToHclTerraform(struct!.nginxPlus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_url: {
      value: cdktf.stringToHclTerraform(struct!.statusUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNginxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNginx | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._nginxPlus !== undefined) {
      hasAnyValues = true;
      internalValueResult.nginxPlus = this._nginxPlus;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._statusUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusUrl = this._statusUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNginx | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._nginxPlus = undefined;
      this._port = undefined;
      this._statusUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._nginxPlus = value.nginxPlus;
      this._port = value.port;
      this._statusUrl = value.statusUrl;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // nginx_plus - computed: false, optional: true, required: false
  private _nginxPlus?: boolean | cdktf.IResolvable; 
  public get nginxPlus() {
    return this.getBooleanAttribute('nginx_plus');
  }
  public set nginxPlus(value: boolean | cdktf.IResolvable) {
    this._nginxPlus = value;
  }
  public resetNginxPlus() {
    this._nginxPlus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nginxPlusInput() {
    return this._nginxPlus;
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

  // status_url - computed: false, optional: true, required: false
  private _statusUrl?: string; 
  public get statusUrl() {
    return this.getStringAttribute('status_url');
  }
  public set statusUrl(value: string) {
    this._statusUrl = value;
  }
  public resetStatusUrl() {
    this._statusUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusUrlInput() {
    return this._statusUrl;
  }
}
export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetricsPath {
  /**
  * The mount point used to collect process information and metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#procfs DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#procfs}
  */
  readonly procfs?: string;
  /**
  * The path in the filesystem used to collect system metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#sysfs DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#sysfs}
  */
  readonly sysfs?: string;
}

export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetricsPathToTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetricsPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    procfs: cdktf.stringToTerraform(struct!.procfs),
    sysfs: cdktf.stringToTerraform(struct!.sysfs),
  }
}


export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetricsPathToHclTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetricsPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    procfs: {
      value: cdktf.stringToHclTerraform(struct!.procfs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sysfs: {
      value: cdktf.stringToHclTerraform(struct!.sysfs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetricsPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetricsPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._procfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.procfs = this._procfs;
    }
    if (this._sysfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysfs = this._sysfs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetricsPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._procfs = undefined;
      this._sysfs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._procfs = value.procfs;
      this._sysfs = value.sysfs;
    }
  }

  // procfs - computed: false, optional: true, required: false
  private _procfs?: string; 
  public get procfs() {
    return this.getStringAttribute('procfs');
  }
  public set procfs(value: string) {
    this._procfs = value;
  }
  public resetProcfs() {
    this._procfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procfsInput() {
    return this._procfs;
  }

  // sysfs - computed: false, optional: true, required: false
  private _sysfs?: string; 
  public get sysfs() {
    return this.getStringAttribute('sysfs');
  }
  public set sysfs(value: string) {
    this._sysfs = value;
  }
  public resetSysfs() {
    this._sysfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysfsInput() {
    return this._sysfs;
  }
}
export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#path DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#path}
  */
  readonly path?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetricsPath;
  /**
  * The rate at which metrics are collected from the host operating system, default is 5 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#scrape_interval DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#scrape_interval}
  */
  readonly scrapeInterval?: string;
  /**
  * Tag name associated to all records comming from this plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#tag DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetricsToTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetricsPathToTerraform(struct!.path),
    scrape_interval: cdktf.stringToTerraform(struct!.scrapeInterval),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetricsToHclTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetricsPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetricsPath",
    },
    scrape_interval: {
      value: cdktf.stringToHclTerraform(struct!.scrapeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._scrapeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeInterval = this._scrapeInterval;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path.internalValue = undefined;
      this._scrapeInterval = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path.internalValue = value.path;
      this._scrapeInterval = value.scrapeInterval;
      this._tag = value.tag;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path = new DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetricsPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetricsPath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // scrape_interval - computed: false, optional: true, required: false
  private _scrapeInterval?: string; 
  public get scrapeInterval() {
    return this.getStringAttribute('scrape_interval');
  }
  public set scrapeInterval(value: string) {
    this._scrapeInterval = value;
  }
  public resetScrapeInterval() {
    this._scrapeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeIntervalInput() {
    return this._scrapeInterval;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecOpenTelemetry {
  /**
  * This sets the chunk size for incoming incoming JSON messages. These chunks are then stored/managed in the space available by buffer_max_size(default 512K).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#buffer_chunk_size DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#buffer_chunk_size}
  */
  readonly bufferChunkSize?: string;
  /**
  * Specify the maximum buffer size in KB to receive a JSON message(default 4M).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#buffer_max_size DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#buffer_max_size}
  */
  readonly bufferMaxSize?: string;
  /**
  * The address to listen on,default 0.0.0.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#listen DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#listen}
  */
  readonly listen?: string;
  /**
  * The port for Fluent Bit to listen on.default 4318.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#port DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#port}
  */
  readonly port?: number;
  /**
  * Route trace data as a log message(default false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#raw_traces DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#raw_traces}
  */
  readonly rawTraces?: boolean | cdktf.IResolvable;
  /**
  * It allows to set successful response code. 200, 201 and 204 are supported(default 201).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#successful_response_code DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#successful_response_code}
  */
  readonly successfulResponseCode?: number;
  /**
  * opentelemetry uses the tag value for incoming metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#tag DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#tag}
  */
  readonly tag?: string;
  /**
  * If true, tag will be created from uri. e.g. v1_metrics from /v1/metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#tag_from_uri DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#tag_from_uri}
  */
  readonly tagFromUri?: boolean | cdktf.IResolvable;
  /**
  * Specify the key name to overwrite a tag. If set, the tag will be overwritten by a value of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#tag_key DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#tag_key}
  */
  readonly tagKey?: string;
}

export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecOpenTelemetryToTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecOpenTelemetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer_chunk_size: cdktf.stringToTerraform(struct!.bufferChunkSize),
    buffer_max_size: cdktf.stringToTerraform(struct!.bufferMaxSize),
    listen: cdktf.stringToTerraform(struct!.listen),
    port: cdktf.numberToTerraform(struct!.port),
    raw_traces: cdktf.booleanToTerraform(struct!.rawTraces),
    successful_response_code: cdktf.numberToTerraform(struct!.successfulResponseCode),
    tag: cdktf.stringToTerraform(struct!.tag),
    tag_from_uri: cdktf.booleanToTerraform(struct!.tagFromUri),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
  }
}


export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecOpenTelemetryToHclTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecOpenTelemetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer_chunk_size: {
      value: cdktf.stringToHclTerraform(struct!.bufferChunkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffer_max_size: {
      value: cdktf.stringToHclTerraform(struct!.bufferMaxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listen: {
      value: cdktf.stringToHclTerraform(struct!.listen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    raw_traces: {
      value: cdktf.booleanToHclTerraform(struct!.rawTraces),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    successful_response_code: {
      value: cdktf.numberToHclTerraform(struct!.successfulResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_from_uri: {
      value: cdktf.booleanToHclTerraform(struct!.tagFromUri),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecOpenTelemetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecOpenTelemetry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferChunkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferChunkSize = this._bufferChunkSize;
    }
    if (this._bufferMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferMaxSize = this._bufferMaxSize;
    }
    if (this._listen !== undefined) {
      hasAnyValues = true;
      internalValueResult.listen = this._listen;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._rawTraces !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawTraces = this._rawTraces;
    }
    if (this._successfulResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.successfulResponseCode = this._successfulResponseCode;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._tagFromUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagFromUri = this._tagFromUri;
    }
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecOpenTelemetry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bufferChunkSize = undefined;
      this._bufferMaxSize = undefined;
      this._listen = undefined;
      this._port = undefined;
      this._rawTraces = undefined;
      this._successfulResponseCode = undefined;
      this._tag = undefined;
      this._tagFromUri = undefined;
      this._tagKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bufferChunkSize = value.bufferChunkSize;
      this._bufferMaxSize = value.bufferMaxSize;
      this._listen = value.listen;
      this._port = value.port;
      this._rawTraces = value.rawTraces;
      this._successfulResponseCode = value.successfulResponseCode;
      this._tag = value.tag;
      this._tagFromUri = value.tagFromUri;
      this._tagKey = value.tagKey;
    }
  }

  // buffer_chunk_size - computed: false, optional: true, required: false
  private _bufferChunkSize?: string; 
  public get bufferChunkSize() {
    return this.getStringAttribute('buffer_chunk_size');
  }
  public set bufferChunkSize(value: string) {
    this._bufferChunkSize = value;
  }
  public resetBufferChunkSize() {
    this._bufferChunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferChunkSizeInput() {
    return this._bufferChunkSize;
  }

  // buffer_max_size - computed: false, optional: true, required: false
  private _bufferMaxSize?: string; 
  public get bufferMaxSize() {
    return this.getStringAttribute('buffer_max_size');
  }
  public set bufferMaxSize(value: string) {
    this._bufferMaxSize = value;
  }
  public resetBufferMaxSize() {
    this._bufferMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferMaxSizeInput() {
    return this._bufferMaxSize;
  }

  // listen - computed: false, optional: true, required: false
  private _listen?: string; 
  public get listen() {
    return this.getStringAttribute('listen');
  }
  public set listen(value: string) {
    this._listen = value;
  }
  public resetListen() {
    this._listen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenInput() {
    return this._listen;
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

  // raw_traces - computed: false, optional: true, required: false
  private _rawTraces?: boolean | cdktf.IResolvable; 
  public get rawTraces() {
    return this.getBooleanAttribute('raw_traces');
  }
  public set rawTraces(value: boolean | cdktf.IResolvable) {
    this._rawTraces = value;
  }
  public resetRawTraces() {
    this._rawTraces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawTracesInput() {
    return this._rawTraces;
  }

  // successful_response_code - computed: false, optional: true, required: false
  private _successfulResponseCode?: number; 
  public get successfulResponseCode() {
    return this.getNumberAttribute('successful_response_code');
  }
  public set successfulResponseCode(value: number) {
    this._successfulResponseCode = value;
  }
  public resetSuccessfulResponseCode() {
    this._successfulResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successfulResponseCodeInput() {
    return this._successfulResponseCode;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // tag_from_uri - computed: false, optional: true, required: false
  private _tagFromUri?: boolean | cdktf.IResolvable; 
  public get tagFromUri() {
    return this.getBooleanAttribute('tag_from_uri');
  }
  public set tagFromUri(value: boolean | cdktf.IResolvable) {
    this._tagFromUri = value;
  }
  public resetTagFromUri() {
    this._tagFromUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFromUriInput() {
    return this._tagFromUri;
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }
}
export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecPrometheusScrapeMetrics {
  /**
  * The host of the prometheus metric endpoint that you want to scrape
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#host DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#host}
  */
  readonly host?: string;
  /**
  * The metrics URI endpoint, that must start with a forward slash, deflaut: /metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#metrics_path DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#metrics_path}
  */
  readonly metricsPath?: string;
  /**
  * The port of the promethes metric endpoint that you want to scrape
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#port DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#port}
  */
  readonly port?: number;
  /**
  * The interval to scrape metrics, default: 10s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#scrape_interval DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#scrape_interval}
  */
  readonly scrapeInterval?: string;
  /**
  * Tag name associated to all records comming from this plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#tag DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecPrometheusScrapeMetricsToTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecPrometheusScrapeMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    metrics_path: cdktf.stringToTerraform(struct!.metricsPath),
    port: cdktf.numberToTerraform(struct!.port),
    scrape_interval: cdktf.stringToTerraform(struct!.scrapeInterval),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecPrometheusScrapeMetricsToHclTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecPrometheusScrapeMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics_path: {
      value: cdktf.stringToHclTerraform(struct!.metricsPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scrape_interval: {
      value: cdktf.stringToHclTerraform(struct!.scrapeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecPrometheusScrapeMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecPrometheusScrapeMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._metricsPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPath = this._metricsPath;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scrapeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeInterval = this._scrapeInterval;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecPrometheusScrapeMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._metricsPath = undefined;
      this._port = undefined;
      this._scrapeInterval = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._metricsPath = value.metricsPath;
      this._port = value.port;
      this._scrapeInterval = value.scrapeInterval;
      this._tag = value.tag;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // metrics_path - computed: false, optional: true, required: false
  private _metricsPath?: string; 
  public get metricsPath() {
    return this.getStringAttribute('metrics_path');
  }
  public set metricsPath(value: string) {
    this._metricsPath = value;
  }
  public resetMetricsPath() {
    this._metricsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPathInput() {
    return this._metricsPath;
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

  // scrape_interval - computed: false, optional: true, required: false
  private _scrapeInterval?: string; 
  public get scrapeInterval() {
    return this.getStringAttribute('scrape_interval');
  }
  public set scrapeInterval(value: string) {
    this._scrapeInterval = value;
  }
  public resetScrapeInterval() {
    this._scrapeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeIntervalInput() {
    return this._scrapeInterval;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecStatsd {
  /**
  * Listener network interface, default: 0.0.0.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#listen DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#listen}
  */
  readonly listen?: string;
  /**
  * UDP port where listening for connections, default: 8125
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#port DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecStatsdToTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecStatsd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listen: cdktf.stringToTerraform(struct!.listen),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecStatsdToHclTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecStatsd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listen: {
      value: cdktf.stringToHclTerraform(struct!.listen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecStatsdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecStatsd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listen !== undefined) {
      hasAnyValues = true;
      internalValueResult.listen = this._listen;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecStatsd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listen = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listen = value.listen;
      this._port = value.port;
    }
  }

  // listen - computed: false, optional: true, required: false
  private _listen?: string; 
  public get listen() {
    return this.getStringAttribute('listen');
  }
  public set listen(value: string) {
    this._listen = value;
  }
  public resetListen() {
    this._listen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenInput() {
    return this._listen;
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
}
export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSyslog {
  /**
  * By default the buffer to store the incoming Syslog messages, do not allocate the maximum memory allowed, instead it allocate memory when is required. The rounds of allocations are set by Buffer_Chunk_Size. If not set, Buffer_Chunk_Size is equal to 32000 bytes (32KB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#buffer_chunk_size DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#buffer_chunk_size}
  */
  readonly bufferChunkSize?: string;
  /**
  * Specify the maximum buffer size to receive a Syslog message. If not set, the default size will be the value of Buffer_Chunk_Size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#buffer_max_size DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#buffer_max_size}
  */
  readonly bufferMaxSize?: string;
  /**
  * If Mode is set to tcp or udp, specify the network interface to bind, default: 0.0.0.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#listen DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#listen}
  */
  readonly listen?: string;
  /**
  * Defines transport protocol mode: unix_udp (UDP over Unix socket), unix_tcp (TCP over Unix socket), tcp or udp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#mode DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Specify an alternative parser for the message. If Mode is set to tcp or udp then the default parser is syslog-rfc5424 otherwise syslog-rfc3164-local is used. If your syslog messages have fractional seconds set this Parser value to syslog-rfc5424 instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#parser DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#parser}
  */
  readonly parser?: string;
  /**
  * If Mode is set to unix_tcp or unix_udp, set the absolute path to the Unix socket file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#path DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#path}
  */
  readonly path?: string;
  /**
  * If Mode is set to tcp or udp, specify the TCP port to listen for incoming connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#port DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#port}
  */
  readonly port?: number;
  /**
  * Specify the maximum socket receive buffer size. If not set, the default value is OS-dependant, but generally too low to accept thousands of syslog messages per second without loss on udp or unix_udp sockets. Note that on Linux the value is capped by sysctl net.core.rmem_max.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#receive_buffer_size DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#receive_buffer_size}
  */
  readonly receiveBufferSize?: string;
  /**
  * Specify the key where the source address will be injected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#source_address_key DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#source_address_key}
  */
  readonly sourceAddressKey?: string;
  /**
  * If Mode is set to unix_tcp or unix_udp, set the permission of the Unix socket file, default: 0644
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#unix_perm DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#unix_perm}
  */
  readonly unixPerm?: number;
}

export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSyslogToTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSyslog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer_chunk_size: cdktf.stringToTerraform(struct!.bufferChunkSize),
    buffer_max_size: cdktf.stringToTerraform(struct!.bufferMaxSize),
    listen: cdktf.stringToTerraform(struct!.listen),
    mode: cdktf.stringToTerraform(struct!.mode),
    parser: cdktf.stringToTerraform(struct!.parser),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    receive_buffer_size: cdktf.stringToTerraform(struct!.receiveBufferSize),
    source_address_key: cdktf.stringToTerraform(struct!.sourceAddressKey),
    unix_perm: cdktf.numberToTerraform(struct!.unixPerm),
  }
}


export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSyslogToHclTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSyslog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer_chunk_size: {
      value: cdktf.stringToHclTerraform(struct!.bufferChunkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffer_max_size: {
      value: cdktf.stringToHclTerraform(struct!.bufferMaxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listen: {
      value: cdktf.stringToHclTerraform(struct!.listen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parser: {
      value: cdktf.stringToHclTerraform(struct!.parser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    receive_buffer_size: {
      value: cdktf.stringToHclTerraform(struct!.receiveBufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address_key: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddressKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unix_perm: {
      value: cdktf.numberToHclTerraform(struct!.unixPerm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSyslogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSyslog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferChunkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferChunkSize = this._bufferChunkSize;
    }
    if (this._bufferMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferMaxSize = this._bufferMaxSize;
    }
    if (this._listen !== undefined) {
      hasAnyValues = true;
      internalValueResult.listen = this._listen;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._parser !== undefined) {
      hasAnyValues = true;
      internalValueResult.parser = this._parser;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._receiveBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiveBufferSize = this._receiveBufferSize;
    }
    if (this._sourceAddressKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddressKey = this._sourceAddressKey;
    }
    if (this._unixPerm !== undefined) {
      hasAnyValues = true;
      internalValueResult.unixPerm = this._unixPerm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSyslog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bufferChunkSize = undefined;
      this._bufferMaxSize = undefined;
      this._listen = undefined;
      this._mode = undefined;
      this._parser = undefined;
      this._path = undefined;
      this._port = undefined;
      this._receiveBufferSize = undefined;
      this._sourceAddressKey = undefined;
      this._unixPerm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bufferChunkSize = value.bufferChunkSize;
      this._bufferMaxSize = value.bufferMaxSize;
      this._listen = value.listen;
      this._mode = value.mode;
      this._parser = value.parser;
      this._path = value.path;
      this._port = value.port;
      this._receiveBufferSize = value.receiveBufferSize;
      this._sourceAddressKey = value.sourceAddressKey;
      this._unixPerm = value.unixPerm;
    }
  }

  // buffer_chunk_size - computed: false, optional: true, required: false
  private _bufferChunkSize?: string; 
  public get bufferChunkSize() {
    return this.getStringAttribute('buffer_chunk_size');
  }
  public set bufferChunkSize(value: string) {
    this._bufferChunkSize = value;
  }
  public resetBufferChunkSize() {
    this._bufferChunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferChunkSizeInput() {
    return this._bufferChunkSize;
  }

  // buffer_max_size - computed: false, optional: true, required: false
  private _bufferMaxSize?: string; 
  public get bufferMaxSize() {
    return this.getStringAttribute('buffer_max_size');
  }
  public set bufferMaxSize(value: string) {
    this._bufferMaxSize = value;
  }
  public resetBufferMaxSize() {
    this._bufferMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferMaxSizeInput() {
    return this._bufferMaxSize;
  }

  // listen - computed: false, optional: true, required: false
  private _listen?: string; 
  public get listen() {
    return this.getStringAttribute('listen');
  }
  public set listen(value: string) {
    this._listen = value;
  }
  public resetListen() {
    this._listen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenInput() {
    return this._listen;
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

  // parser - computed: false, optional: true, required: false
  private _parser?: string; 
  public get parser() {
    return this.getStringAttribute('parser');
  }
  public set parser(value: string) {
    this._parser = value;
  }
  public resetParser() {
    this._parser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parserInput() {
    return this._parser;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // receive_buffer_size - computed: false, optional: true, required: false
  private _receiveBufferSize?: string; 
  public get receiveBufferSize() {
    return this.getStringAttribute('receive_buffer_size');
  }
  public set receiveBufferSize(value: string) {
    this._receiveBufferSize = value;
  }
  public resetReceiveBufferSize() {
    this._receiveBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveBufferSizeInput() {
    return this._receiveBufferSize;
  }

  // source_address_key - computed: false, optional: true, required: false
  private _sourceAddressKey?: string; 
  public get sourceAddressKey() {
    return this.getStringAttribute('source_address_key');
  }
  public set sourceAddressKey(value: string) {
    this._sourceAddressKey = value;
  }
  public resetSourceAddressKey() {
    this._sourceAddressKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressKeyInput() {
    return this._sourceAddressKey;
  }

  // unix_perm - computed: false, optional: true, required: false
  private _unixPerm?: number; 
  public get unixPerm() {
    return this.getNumberAttribute('unix_perm');
  }
  public set unixPerm(value: number) {
    this._unixPerm = value;
  }
  public resetUnixPerm() {
    this._unixPerm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixPermInput() {
    return this._unixPerm;
  }
}
export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSystemd {
  /**
  * Specify the database file to keep track of monitored files and offsets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#db DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#db}
  */
  readonly db?: string;
  /**
  * Set a default synchronization (I/O) method. values: Extra, Full, Normal, Off. This flag affects how the internal SQLite engine do synchronization to disk, for more details about each option please refer to this section. note: this option was introduced on Fluent Bit v1.4.6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#db_sync DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#db_sync}
  */
  readonly dbSync?: string;
  /**
  * When Fluent Bit starts, the Journal might have a high number of logs in the queue. In order to avoid delays and reduce memory usage, this option allows to specify the maximum number of log entries that can be processed per round. Once the limit is reached, Fluent Bit will continue processing the remaining log entries once Journald performs the notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#max_entries DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#max_entries}
  */
  readonly maxEntries?: number;
  /**
  * Set a maximum number of fields (keys) allowed per record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#max_fields DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#max_fields}
  */
  readonly maxFields?: number;
  /**
  * Optional path to the Systemd journal directory, if not set, the plugin will use default paths to read local-only logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#path DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#path}
  */
  readonly path?: string;
  /**
  * Specifies if the input plugin should be paused (stop ingesting new data) when the storage.max_chunks_up value is reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#pause_on_chunks_overlimit DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#pause_on_chunks_overlimit}
  */
  readonly pauseOnChunksOverlimit?: string;
  /**
  * Start reading new entries. Skip entries already stored in Journald.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#read_from_tail DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#read_from_tail}
  */
  readonly readFromTail?: string;
  /**
  * Specify the buffering mechanism to use. It can be memory or filesystem
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#storage_type DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#storage_type}
  */
  readonly storageType?: string;
  /**
  * Remove the leading underscore of the Journald field (key). For example the Journald field _PID becomes the key PID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#strip_underscores DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#strip_underscores}
  */
  readonly stripUnderscores?: string;
  /**
  * Allows to perform a query over logs that contains a specific Journald key/value pairs, e.g: _SYSTEMD_UNIT=UNIT. The Systemd_Filter option can be specified multiple times in the input section to apply multiple filters as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#systemd_filter DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#systemd_filter}
  */
  readonly systemdFilter?: string[];
  /**
  * Define the filter type when Systemd_Filter is specified multiple times. Allowed values are And and Or. With And a record is matched only when all of the Systemd_Filter have a match. With Or a record is matched when any of the Systemd_Filter has a match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#systemd_filter_type DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#systemd_filter_type}
  */
  readonly systemdFilterType?: string;
  /**
  * The tag is used to route messages but on Systemd plugin there is an extra functionality: if the tag includes a star/wildcard, it will be expanded with the Systemd Unit file (e.g: host.* => host.UNIT_NAME).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#tag DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSystemdToTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSystemd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db: cdktf.stringToTerraform(struct!.db),
    db_sync: cdktf.stringToTerraform(struct!.dbSync),
    max_entries: cdktf.numberToTerraform(struct!.maxEntries),
    max_fields: cdktf.numberToTerraform(struct!.maxFields),
    path: cdktf.stringToTerraform(struct!.path),
    pause_on_chunks_overlimit: cdktf.stringToTerraform(struct!.pauseOnChunksOverlimit),
    read_from_tail: cdktf.stringToTerraform(struct!.readFromTail),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
    strip_underscores: cdktf.stringToTerraform(struct!.stripUnderscores),
    systemd_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.systemdFilter),
    systemd_filter_type: cdktf.stringToTerraform(struct!.systemdFilterType),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSystemdToHclTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSystemd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db: {
      value: cdktf.stringToHclTerraform(struct!.db),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_sync: {
      value: cdktf.stringToHclTerraform(struct!.dbSync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_entries: {
      value: cdktf.numberToHclTerraform(struct!.maxEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_fields: {
      value: cdktf.numberToHclTerraform(struct!.maxFields),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pause_on_chunks_overlimit: {
      value: cdktf.stringToHclTerraform(struct!.pauseOnChunksOverlimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_from_tail: {
      value: cdktf.stringToHclTerraform(struct!.readFromTail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strip_underscores: {
      value: cdktf.stringToHclTerraform(struct!.stripUnderscores),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    systemd_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.systemdFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    systemd_filter_type: {
      value: cdktf.stringToHclTerraform(struct!.systemdFilterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSystemdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSystemd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._db !== undefined) {
      hasAnyValues = true;
      internalValueResult.db = this._db;
    }
    if (this._dbSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbSync = this._dbSync;
    }
    if (this._maxEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEntries = this._maxEntries;
    }
    if (this._maxFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFields = this._maxFields;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._pauseOnChunksOverlimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseOnChunksOverlimit = this._pauseOnChunksOverlimit;
    }
    if (this._readFromTail !== undefined) {
      hasAnyValues = true;
      internalValueResult.readFromTail = this._readFromTail;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._stripUnderscores !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripUnderscores = this._stripUnderscores;
    }
    if (this._systemdFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemdFilter = this._systemdFilter;
    }
    if (this._systemdFilterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemdFilterType = this._systemdFilterType;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSystemd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._db = undefined;
      this._dbSync = undefined;
      this._maxEntries = undefined;
      this._maxFields = undefined;
      this._path = undefined;
      this._pauseOnChunksOverlimit = undefined;
      this._readFromTail = undefined;
      this._storageType = undefined;
      this._stripUnderscores = undefined;
      this._systemdFilter = undefined;
      this._systemdFilterType = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._db = value.db;
      this._dbSync = value.dbSync;
      this._maxEntries = value.maxEntries;
      this._maxFields = value.maxFields;
      this._path = value.path;
      this._pauseOnChunksOverlimit = value.pauseOnChunksOverlimit;
      this._readFromTail = value.readFromTail;
      this._storageType = value.storageType;
      this._stripUnderscores = value.stripUnderscores;
      this._systemdFilter = value.systemdFilter;
      this._systemdFilterType = value.systemdFilterType;
      this._tag = value.tag;
    }
  }

  // db - computed: false, optional: true, required: false
  private _db?: string; 
  public get db() {
    return this.getStringAttribute('db');
  }
  public set db(value: string) {
    this._db = value;
  }
  public resetDb() {
    this._db = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db;
  }

  // db_sync - computed: false, optional: true, required: false
  private _dbSync?: string; 
  public get dbSync() {
    return this.getStringAttribute('db_sync');
  }
  public set dbSync(value: string) {
    this._dbSync = value;
  }
  public resetDbSync() {
    this._dbSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSyncInput() {
    return this._dbSync;
  }

  // max_entries - computed: false, optional: true, required: false
  private _maxEntries?: number; 
  public get maxEntries() {
    return this.getNumberAttribute('max_entries');
  }
  public set maxEntries(value: number) {
    this._maxEntries = value;
  }
  public resetMaxEntries() {
    this._maxEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEntriesInput() {
    return this._maxEntries;
  }

  // max_fields - computed: false, optional: true, required: false
  private _maxFields?: number; 
  public get maxFields() {
    return this.getNumberAttribute('max_fields');
  }
  public set maxFields(value: number) {
    this._maxFields = value;
  }
  public resetMaxFields() {
    this._maxFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFieldsInput() {
    return this._maxFields;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // pause_on_chunks_overlimit - computed: false, optional: true, required: false
  private _pauseOnChunksOverlimit?: string; 
  public get pauseOnChunksOverlimit() {
    return this.getStringAttribute('pause_on_chunks_overlimit');
  }
  public set pauseOnChunksOverlimit(value: string) {
    this._pauseOnChunksOverlimit = value;
  }
  public resetPauseOnChunksOverlimit() {
    this._pauseOnChunksOverlimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseOnChunksOverlimitInput() {
    return this._pauseOnChunksOverlimit;
  }

  // read_from_tail - computed: false, optional: true, required: false
  private _readFromTail?: string; 
  public get readFromTail() {
    return this.getStringAttribute('read_from_tail');
  }
  public set readFromTail(value: string) {
    this._readFromTail = value;
  }
  public resetReadFromTail() {
    this._readFromTail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readFromTailInput() {
    return this._readFromTail;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // strip_underscores - computed: false, optional: true, required: false
  private _stripUnderscores?: string; 
  public get stripUnderscores() {
    return this.getStringAttribute('strip_underscores');
  }
  public set stripUnderscores(value: string) {
    this._stripUnderscores = value;
  }
  public resetStripUnderscores() {
    this._stripUnderscores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripUnderscoresInput() {
    return this._stripUnderscores;
  }

  // systemd_filter - computed: false, optional: true, required: false
  private _systemdFilter?: string[]; 
  public get systemdFilter() {
    return this.getListAttribute('systemd_filter');
  }
  public set systemdFilter(value: string[]) {
    this._systemdFilter = value;
  }
  public resetSystemdFilter() {
    this._systemdFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemdFilterInput() {
    return this._systemdFilter;
  }

  // systemd_filter_type - computed: false, optional: true, required: false
  private _systemdFilterType?: string; 
  public get systemdFilterType() {
    return this.getStringAttribute('systemd_filter_type');
  }
  public set systemdFilterType(value: string) {
    this._systemdFilterType = value;
  }
  public resetSystemdFilterType() {
    this._systemdFilterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemdFilterTypeInput() {
    return this._systemdFilterType;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTail {
  /**
  * Set the initial buffer size to read files data. This value is used too to increase buffer size. The value must be according to the Unit Size specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#buffer_chunk_size DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#buffer_chunk_size}
  */
  readonly bufferChunkSize?: string;
  /**
  * Set the limit of the buffer size per monitored file. When a buffer needs to be increased (e.g: very long lines), this value is used to restrict how much the memory buffer can grow. If reading a file exceed this limit, the file is removed from the monitored file list The value must be according to the Unit Size specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#buffer_max_size DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#buffer_max_size}
  */
  readonly bufferMaxSize?: string;
  /**
  * Specify the database file to keep track of monitored files and offsets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#db DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#db}
  */
  readonly db?: string;
  /**
  * Set a default synchronization (I/O) method. Values: Extra, Full, Normal, Off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#db_sync DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#db_sync}
  */
  readonly dbSync?: string;
  /**
  * DisableInotifyWatcher will disable inotify and use the file stat watcher instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#disable_inotify_watcher DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#disable_inotify_watcher}
  */
  readonly disableInotifyWatcher?: boolean | cdktf.IResolvable;
  /**
  * If enabled, the plugin will recombine split Docker log lines before passing them to any parser as configured above. This mode cannot be used at the same time as Multiline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#docker_mode DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#docker_mode}
  */
  readonly dockerMode?: boolean | cdktf.IResolvable;
  /**
  * Wait period time in seconds to flush queued unfinished split lines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#docker_mode_flush_seconds DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#docker_mode_flush_seconds}
  */
  readonly dockerModeFlushSeconds?: number;
  /**
  * Specify an optional parser for the first line of the docker multiline mode. The parser name to be specified must be registered in the parsers.conf file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#docker_mode_parser DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#docker_mode_parser}
  */
  readonly dockerModeParser?: string;
  /**
  * Set one or multiple shell patterns separated by commas to exclude files matching a certain criteria, e.g: exclude_path=*.gz,*.zip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#exclude_path DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#exclude_path}
  */
  readonly excludePath?: string;
  /**
  * Ignores records which are older than this time in seconds. Supports m,h,d (minutes, hours, days) syntax. Default behavior is to read all records from specified files. Only available when a Parser is specificied and it can parse the time of a record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#ignored_older DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#ignored_older}
  */
  readonly ignoredOlder?: string;
  /**
  * When a message is unstructured (no parser applied), it's appended as a string under the key name log. This option allows to define an alternative name for that key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#key DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#key}
  */
  readonly key?: string;
  /**
  * Set a limit of memory that Tail plugin can use when appending data to the Engine. If the limit is reach, it will be paused; when the data is flushed it resumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#mem_buf_limit DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#mem_buf_limit}
  */
  readonly memBufLimit?: string;
  /**
  * If enabled, the plugin will try to discover multiline messages and use the proper parsers to compose the outgoing messages. Note that when this option is enabled the Parser option is not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#multiline DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#multiline}
  */
  readonly multiline?: boolean | cdktf.IResolvable;
  /**
  * Wait period time in seconds to process queued multiline messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#multiline_flush_seconds DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#multiline_flush_seconds}
  */
  readonly multilineFlushSeconds?: number;
  /**
  * This will help to reassembly multiline messages originally split by Docker or CRI Specify one or Multiline Parser definition to apply to the content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#multiline_parser DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#multiline_parser}
  */
  readonly multilineParser?: string;
  /**
  * Specify the name of a parser to interpret the entry as a structured message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#parser DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#parser}
  */
  readonly parser?: string;
  /**
  * Name of the parser that matchs the beginning of a multiline message. Note that the regular expression defined in the parser must include a group name (named capture)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#parser_firstline DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#parser_firstline}
  */
  readonly parserFirstline?: string;
  /**
  * Optional-extra parser to interpret and structure multiline entries. This option can be used to define multiple parsers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#parser_n DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#parser_n}
  */
  readonly parserN?: string[];
  /**
  * Pattern specifying a specific log files or multiple ones through the use of common wildcards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#path DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#path}
  */
  readonly path?: string;
  /**
  * If enabled, it appends the name of the monitored file as part of the record. The value assigned becomes the key in the map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#path_key DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#path_key}
  */
  readonly pathKey?: string;
  /**
  * Specifies if the input plugin should be paused (stop ingesting new data) when the storage.max_chunks_up value is reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#pause_on_chunks_overlimit DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#pause_on_chunks_overlimit}
  */
  readonly pauseOnChunksOverlimit?: string;
  /**
  * For new discovered files on start (without a database offset/position), read the content from the head of the file, not tail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#read_from_head DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#read_from_head}
  */
  readonly readFromHead?: boolean | cdktf.IResolvable;
  /**
  * The interval of refreshing the list of watched files in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#refresh_interval_seconds DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#refresh_interval_seconds}
  */
  readonly refreshIntervalSeconds?: number;
  /**
  * Specify the number of extra time in seconds to monitor a file once is rotated in case some pending data is flushed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#rotate_wait_seconds DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#rotate_wait_seconds}
  */
  readonly rotateWaitSeconds?: number;
  /**
  * Skips empty lines in the log file from any further processing or output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#skip_empty_lines DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#skip_empty_lines}
  */
  readonly skipEmptyLines?: boolean | cdktf.IResolvable;
  /**
  * When a monitored file reach it buffer capacity due to a very long line (Buffer_Max_Size), the default behavior is to stop monitoring that file. Skip_Long_Lines alter that behavior and instruct Fluent Bit to skip long lines and continue processing other lines that fits into the buffer size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#skip_long_lines DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#skip_long_lines}
  */
  readonly skipLongLines?: boolean | cdktf.IResolvable;
  /**
  * Specify the buffering mechanism to use. It can be memory or filesystem
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#storage_type DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#storage_type}
  */
  readonly storageType?: string;
  /**
  * Set a tag (with regex-extract fields) that will be placed on lines read. E.g. kube.<namespace_name>.<pod_name>.<container_name>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#tag DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#tag}
  */
  readonly tag?: string;
  /**
  * Set a regex to exctract fields from the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#tag_regex DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#tag_regex}
  */
  readonly tagRegex?: string;
}

export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTailToTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer_chunk_size: cdktf.stringToTerraform(struct!.bufferChunkSize),
    buffer_max_size: cdktf.stringToTerraform(struct!.bufferMaxSize),
    db: cdktf.stringToTerraform(struct!.db),
    db_sync: cdktf.stringToTerraform(struct!.dbSync),
    disable_inotify_watcher: cdktf.booleanToTerraform(struct!.disableInotifyWatcher),
    docker_mode: cdktf.booleanToTerraform(struct!.dockerMode),
    docker_mode_flush_seconds: cdktf.numberToTerraform(struct!.dockerModeFlushSeconds),
    docker_mode_parser: cdktf.stringToTerraform(struct!.dockerModeParser),
    exclude_path: cdktf.stringToTerraform(struct!.excludePath),
    ignored_older: cdktf.stringToTerraform(struct!.ignoredOlder),
    key: cdktf.stringToTerraform(struct!.key),
    mem_buf_limit: cdktf.stringToTerraform(struct!.memBufLimit),
    multiline: cdktf.booleanToTerraform(struct!.multiline),
    multiline_flush_seconds: cdktf.numberToTerraform(struct!.multilineFlushSeconds),
    multiline_parser: cdktf.stringToTerraform(struct!.multilineParser),
    parser: cdktf.stringToTerraform(struct!.parser),
    parser_firstline: cdktf.stringToTerraform(struct!.parserFirstline),
    parser_n: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.parserN),
    path: cdktf.stringToTerraform(struct!.path),
    path_key: cdktf.stringToTerraform(struct!.pathKey),
    pause_on_chunks_overlimit: cdktf.stringToTerraform(struct!.pauseOnChunksOverlimit),
    read_from_head: cdktf.booleanToTerraform(struct!.readFromHead),
    refresh_interval_seconds: cdktf.numberToTerraform(struct!.refreshIntervalSeconds),
    rotate_wait_seconds: cdktf.numberToTerraform(struct!.rotateWaitSeconds),
    skip_empty_lines: cdktf.booleanToTerraform(struct!.skipEmptyLines),
    skip_long_lines: cdktf.booleanToTerraform(struct!.skipLongLines),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
    tag: cdktf.stringToTerraform(struct!.tag),
    tag_regex: cdktf.stringToTerraform(struct!.tagRegex),
  }
}


export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTailToHclTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer_chunk_size: {
      value: cdktf.stringToHclTerraform(struct!.bufferChunkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffer_max_size: {
      value: cdktf.stringToHclTerraform(struct!.bufferMaxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db: {
      value: cdktf.stringToHclTerraform(struct!.db),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_sync: {
      value: cdktf.stringToHclTerraform(struct!.dbSync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_inotify_watcher: {
      value: cdktf.booleanToHclTerraform(struct!.disableInotifyWatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    docker_mode: {
      value: cdktf.booleanToHclTerraform(struct!.dockerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    docker_mode_flush_seconds: {
      value: cdktf.numberToHclTerraform(struct!.dockerModeFlushSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    docker_mode_parser: {
      value: cdktf.stringToHclTerraform(struct!.dockerModeParser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_path: {
      value: cdktf.stringToHclTerraform(struct!.excludePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignored_older: {
      value: cdktf.stringToHclTerraform(struct!.ignoredOlder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mem_buf_limit: {
      value: cdktf.stringToHclTerraform(struct!.memBufLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multiline: {
      value: cdktf.booleanToHclTerraform(struct!.multiline),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    multiline_flush_seconds: {
      value: cdktf.numberToHclTerraform(struct!.multilineFlushSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiline_parser: {
      value: cdktf.stringToHclTerraform(struct!.multilineParser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parser: {
      value: cdktf.stringToHclTerraform(struct!.parser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parser_firstline: {
      value: cdktf.stringToHclTerraform(struct!.parserFirstline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parser_n: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.parserN),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_key: {
      value: cdktf.stringToHclTerraform(struct!.pathKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pause_on_chunks_overlimit: {
      value: cdktf.stringToHclTerraform(struct!.pauseOnChunksOverlimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_from_head: {
      value: cdktf.booleanToHclTerraform(struct!.readFromHead),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    refresh_interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.refreshIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rotate_wait_seconds: {
      value: cdktf.numberToHclTerraform(struct!.rotateWaitSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip_empty_lines: {
      value: cdktf.booleanToHclTerraform(struct!.skipEmptyLines),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_long_lines: {
      value: cdktf.booleanToHclTerraform(struct!.skipLongLines),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_regex: {
      value: cdktf.stringToHclTerraform(struct!.tagRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferChunkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferChunkSize = this._bufferChunkSize;
    }
    if (this._bufferMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferMaxSize = this._bufferMaxSize;
    }
    if (this._db !== undefined) {
      hasAnyValues = true;
      internalValueResult.db = this._db;
    }
    if (this._dbSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbSync = this._dbSync;
    }
    if (this._disableInotifyWatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableInotifyWatcher = this._disableInotifyWatcher;
    }
    if (this._dockerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerMode = this._dockerMode;
    }
    if (this._dockerModeFlushSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerModeFlushSeconds = this._dockerModeFlushSeconds;
    }
    if (this._dockerModeParser !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerModeParser = this._dockerModeParser;
    }
    if (this._excludePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePath = this._excludePath;
    }
    if (this._ignoredOlder !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoredOlder = this._ignoredOlder;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._memBufLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memBufLimit = this._memBufLimit;
    }
    if (this._multiline !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiline = this._multiline;
    }
    if (this._multilineFlushSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.multilineFlushSeconds = this._multilineFlushSeconds;
    }
    if (this._multilineParser !== undefined) {
      hasAnyValues = true;
      internalValueResult.multilineParser = this._multilineParser;
    }
    if (this._parser !== undefined) {
      hasAnyValues = true;
      internalValueResult.parser = this._parser;
    }
    if (this._parserFirstline !== undefined) {
      hasAnyValues = true;
      internalValueResult.parserFirstline = this._parserFirstline;
    }
    if (this._parserN !== undefined) {
      hasAnyValues = true;
      internalValueResult.parserN = this._parserN;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._pathKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathKey = this._pathKey;
    }
    if (this._pauseOnChunksOverlimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseOnChunksOverlimit = this._pauseOnChunksOverlimit;
    }
    if (this._readFromHead !== undefined) {
      hasAnyValues = true;
      internalValueResult.readFromHead = this._readFromHead;
    }
    if (this._refreshIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshIntervalSeconds = this._refreshIntervalSeconds;
    }
    if (this._rotateWaitSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotateWaitSeconds = this._rotateWaitSeconds;
    }
    if (this._skipEmptyLines !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipEmptyLines = this._skipEmptyLines;
    }
    if (this._skipLongLines !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipLongLines = this._skipLongLines;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._tagRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagRegex = this._tagRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bufferChunkSize = undefined;
      this._bufferMaxSize = undefined;
      this._db = undefined;
      this._dbSync = undefined;
      this._disableInotifyWatcher = undefined;
      this._dockerMode = undefined;
      this._dockerModeFlushSeconds = undefined;
      this._dockerModeParser = undefined;
      this._excludePath = undefined;
      this._ignoredOlder = undefined;
      this._key = undefined;
      this._memBufLimit = undefined;
      this._multiline = undefined;
      this._multilineFlushSeconds = undefined;
      this._multilineParser = undefined;
      this._parser = undefined;
      this._parserFirstline = undefined;
      this._parserN = undefined;
      this._path = undefined;
      this._pathKey = undefined;
      this._pauseOnChunksOverlimit = undefined;
      this._readFromHead = undefined;
      this._refreshIntervalSeconds = undefined;
      this._rotateWaitSeconds = undefined;
      this._skipEmptyLines = undefined;
      this._skipLongLines = undefined;
      this._storageType = undefined;
      this._tag = undefined;
      this._tagRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bufferChunkSize = value.bufferChunkSize;
      this._bufferMaxSize = value.bufferMaxSize;
      this._db = value.db;
      this._dbSync = value.dbSync;
      this._disableInotifyWatcher = value.disableInotifyWatcher;
      this._dockerMode = value.dockerMode;
      this._dockerModeFlushSeconds = value.dockerModeFlushSeconds;
      this._dockerModeParser = value.dockerModeParser;
      this._excludePath = value.excludePath;
      this._ignoredOlder = value.ignoredOlder;
      this._key = value.key;
      this._memBufLimit = value.memBufLimit;
      this._multiline = value.multiline;
      this._multilineFlushSeconds = value.multilineFlushSeconds;
      this._multilineParser = value.multilineParser;
      this._parser = value.parser;
      this._parserFirstline = value.parserFirstline;
      this._parserN = value.parserN;
      this._path = value.path;
      this._pathKey = value.pathKey;
      this._pauseOnChunksOverlimit = value.pauseOnChunksOverlimit;
      this._readFromHead = value.readFromHead;
      this._refreshIntervalSeconds = value.refreshIntervalSeconds;
      this._rotateWaitSeconds = value.rotateWaitSeconds;
      this._skipEmptyLines = value.skipEmptyLines;
      this._skipLongLines = value.skipLongLines;
      this._storageType = value.storageType;
      this._tag = value.tag;
      this._tagRegex = value.tagRegex;
    }
  }

  // buffer_chunk_size - computed: false, optional: true, required: false
  private _bufferChunkSize?: string; 
  public get bufferChunkSize() {
    return this.getStringAttribute('buffer_chunk_size');
  }
  public set bufferChunkSize(value: string) {
    this._bufferChunkSize = value;
  }
  public resetBufferChunkSize() {
    this._bufferChunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferChunkSizeInput() {
    return this._bufferChunkSize;
  }

  // buffer_max_size - computed: false, optional: true, required: false
  private _bufferMaxSize?: string; 
  public get bufferMaxSize() {
    return this.getStringAttribute('buffer_max_size');
  }
  public set bufferMaxSize(value: string) {
    this._bufferMaxSize = value;
  }
  public resetBufferMaxSize() {
    this._bufferMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferMaxSizeInput() {
    return this._bufferMaxSize;
  }

  // db - computed: false, optional: true, required: false
  private _db?: string; 
  public get db() {
    return this.getStringAttribute('db');
  }
  public set db(value: string) {
    this._db = value;
  }
  public resetDb() {
    this._db = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db;
  }

  // db_sync - computed: false, optional: true, required: false
  private _dbSync?: string; 
  public get dbSync() {
    return this.getStringAttribute('db_sync');
  }
  public set dbSync(value: string) {
    this._dbSync = value;
  }
  public resetDbSync() {
    this._dbSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSyncInput() {
    return this._dbSync;
  }

  // disable_inotify_watcher - computed: false, optional: true, required: false
  private _disableInotifyWatcher?: boolean | cdktf.IResolvable; 
  public get disableInotifyWatcher() {
    return this.getBooleanAttribute('disable_inotify_watcher');
  }
  public set disableInotifyWatcher(value: boolean | cdktf.IResolvable) {
    this._disableInotifyWatcher = value;
  }
  public resetDisableInotifyWatcher() {
    this._disableInotifyWatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInotifyWatcherInput() {
    return this._disableInotifyWatcher;
  }

  // docker_mode - computed: false, optional: true, required: false
  private _dockerMode?: boolean | cdktf.IResolvable; 
  public get dockerMode() {
    return this.getBooleanAttribute('docker_mode');
  }
  public set dockerMode(value: boolean | cdktf.IResolvable) {
    this._dockerMode = value;
  }
  public resetDockerMode() {
    this._dockerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerModeInput() {
    return this._dockerMode;
  }

  // docker_mode_flush_seconds - computed: false, optional: true, required: false
  private _dockerModeFlushSeconds?: number; 
  public get dockerModeFlushSeconds() {
    return this.getNumberAttribute('docker_mode_flush_seconds');
  }
  public set dockerModeFlushSeconds(value: number) {
    this._dockerModeFlushSeconds = value;
  }
  public resetDockerModeFlushSeconds() {
    this._dockerModeFlushSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerModeFlushSecondsInput() {
    return this._dockerModeFlushSeconds;
  }

  // docker_mode_parser - computed: false, optional: true, required: false
  private _dockerModeParser?: string; 
  public get dockerModeParser() {
    return this.getStringAttribute('docker_mode_parser');
  }
  public set dockerModeParser(value: string) {
    this._dockerModeParser = value;
  }
  public resetDockerModeParser() {
    this._dockerModeParser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerModeParserInput() {
    return this._dockerModeParser;
  }

  // exclude_path - computed: false, optional: true, required: false
  private _excludePath?: string; 
  public get excludePath() {
    return this.getStringAttribute('exclude_path');
  }
  public set excludePath(value: string) {
    this._excludePath = value;
  }
  public resetExcludePath() {
    this._excludePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePathInput() {
    return this._excludePath;
  }

  // ignored_older - computed: false, optional: true, required: false
  private _ignoredOlder?: string; 
  public get ignoredOlder() {
    return this.getStringAttribute('ignored_older');
  }
  public set ignoredOlder(value: string) {
    this._ignoredOlder = value;
  }
  public resetIgnoredOlder() {
    this._ignoredOlder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredOlderInput() {
    return this._ignoredOlder;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // mem_buf_limit - computed: false, optional: true, required: false
  private _memBufLimit?: string; 
  public get memBufLimit() {
    return this.getStringAttribute('mem_buf_limit');
  }
  public set memBufLimit(value: string) {
    this._memBufLimit = value;
  }
  public resetMemBufLimit() {
    this._memBufLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memBufLimitInput() {
    return this._memBufLimit;
  }

  // multiline - computed: false, optional: true, required: false
  private _multiline?: boolean | cdktf.IResolvable; 
  public get multiline() {
    return this.getBooleanAttribute('multiline');
  }
  public set multiline(value: boolean | cdktf.IResolvable) {
    this._multiline = value;
  }
  public resetMultiline() {
    this._multiline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multilineInput() {
    return this._multiline;
  }

  // multiline_flush_seconds - computed: false, optional: true, required: false
  private _multilineFlushSeconds?: number; 
  public get multilineFlushSeconds() {
    return this.getNumberAttribute('multiline_flush_seconds');
  }
  public set multilineFlushSeconds(value: number) {
    this._multilineFlushSeconds = value;
  }
  public resetMultilineFlushSeconds() {
    this._multilineFlushSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multilineFlushSecondsInput() {
    return this._multilineFlushSeconds;
  }

  // multiline_parser - computed: false, optional: true, required: false
  private _multilineParser?: string; 
  public get multilineParser() {
    return this.getStringAttribute('multiline_parser');
  }
  public set multilineParser(value: string) {
    this._multilineParser = value;
  }
  public resetMultilineParser() {
    this._multilineParser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multilineParserInput() {
    return this._multilineParser;
  }

  // parser - computed: false, optional: true, required: false
  private _parser?: string; 
  public get parser() {
    return this.getStringAttribute('parser');
  }
  public set parser(value: string) {
    this._parser = value;
  }
  public resetParser() {
    this._parser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parserInput() {
    return this._parser;
  }

  // parser_firstline - computed: false, optional: true, required: false
  private _parserFirstline?: string; 
  public get parserFirstline() {
    return this.getStringAttribute('parser_firstline');
  }
  public set parserFirstline(value: string) {
    this._parserFirstline = value;
  }
  public resetParserFirstline() {
    this._parserFirstline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parserFirstlineInput() {
    return this._parserFirstline;
  }

  // parser_n - computed: false, optional: true, required: false
  private _parserN?: string[]; 
  public get parserN() {
    return this.getListAttribute('parser_n');
  }
  public set parserN(value: string[]) {
    this._parserN = value;
  }
  public resetParserN() {
    this._parserN = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parserNInput() {
    return this._parserN;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // path_key - computed: false, optional: true, required: false
  private _pathKey?: string; 
  public get pathKey() {
    return this.getStringAttribute('path_key');
  }
  public set pathKey(value: string) {
    this._pathKey = value;
  }
  public resetPathKey() {
    this._pathKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathKeyInput() {
    return this._pathKey;
  }

  // pause_on_chunks_overlimit - computed: false, optional: true, required: false
  private _pauseOnChunksOverlimit?: string; 
  public get pauseOnChunksOverlimit() {
    return this.getStringAttribute('pause_on_chunks_overlimit');
  }
  public set pauseOnChunksOverlimit(value: string) {
    this._pauseOnChunksOverlimit = value;
  }
  public resetPauseOnChunksOverlimit() {
    this._pauseOnChunksOverlimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseOnChunksOverlimitInput() {
    return this._pauseOnChunksOverlimit;
  }

  // read_from_head - computed: false, optional: true, required: false
  private _readFromHead?: boolean | cdktf.IResolvable; 
  public get readFromHead() {
    return this.getBooleanAttribute('read_from_head');
  }
  public set readFromHead(value: boolean | cdktf.IResolvable) {
    this._readFromHead = value;
  }
  public resetReadFromHead() {
    this._readFromHead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readFromHeadInput() {
    return this._readFromHead;
  }

  // refresh_interval_seconds - computed: false, optional: true, required: false
  private _refreshIntervalSeconds?: number; 
  public get refreshIntervalSeconds() {
    return this.getNumberAttribute('refresh_interval_seconds');
  }
  public set refreshIntervalSeconds(value: number) {
    this._refreshIntervalSeconds = value;
  }
  public resetRefreshIntervalSeconds() {
    this._refreshIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalSecondsInput() {
    return this._refreshIntervalSeconds;
  }

  // rotate_wait_seconds - computed: false, optional: true, required: false
  private _rotateWaitSeconds?: number; 
  public get rotateWaitSeconds() {
    return this.getNumberAttribute('rotate_wait_seconds');
  }
  public set rotateWaitSeconds(value: number) {
    this._rotateWaitSeconds = value;
  }
  public resetRotateWaitSeconds() {
    this._rotateWaitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateWaitSecondsInput() {
    return this._rotateWaitSeconds;
  }

  // skip_empty_lines - computed: false, optional: true, required: false
  private _skipEmptyLines?: boolean | cdktf.IResolvable; 
  public get skipEmptyLines() {
    return this.getBooleanAttribute('skip_empty_lines');
  }
  public set skipEmptyLines(value: boolean | cdktf.IResolvable) {
    this._skipEmptyLines = value;
  }
  public resetSkipEmptyLines() {
    this._skipEmptyLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipEmptyLinesInput() {
    return this._skipEmptyLines;
  }

  // skip_long_lines - computed: false, optional: true, required: false
  private _skipLongLines?: boolean | cdktf.IResolvable; 
  public get skipLongLines() {
    return this.getBooleanAttribute('skip_long_lines');
  }
  public set skipLongLines(value: boolean | cdktf.IResolvable) {
    this._skipLongLines = value;
  }
  public resetSkipLongLines() {
    this._skipLongLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipLongLinesInput() {
    return this._skipLongLines;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // tag_regex - computed: false, optional: true, required: false
  private _tagRegex?: string; 
  public get tagRegex() {
    return this.getStringAttribute('tag_regex');
  }
  public set tagRegex(value: string) {
    this._tagRegex = value;
  }
  public resetTagRegex() {
    this._tagRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagRegexInput() {
    return this._tagRegex;
  }
}
export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTcp {
  /**
  * Specify the maximum buffer size in KB to receive a JSON message. If not set, the default size will be the value of Chunk_Size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#buffer_size DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#buffer_size}
  */
  readonly bufferSize?: string;
  /**
  * By default the buffer to store the incoming JSON messages, do not allocate the maximum memory allowed, instead it allocate memory when is required. The rounds of allocations are set by Chunk_Size in KB. If not set, Chunk_Size is equal to 32 (32KB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#chunk_size DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#chunk_size}
  */
  readonly chunkSize?: string;
  /**
  * Specify the expected payload format. It support the options json and none. When using json, it expects JSON maps, when is set to none, it will split every record using the defined Separator (option below).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#format DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#format}
  */
  readonly format?: string;
  /**
  * Listener network interface,default 0.0.0.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#listen DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#listen}
  */
  readonly listen?: string;
  /**
  * TCP port where listening for connections,default 5170
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#port DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#port}
  */
  readonly port?: number;
  /**
  * When the expected Format is set to none, Fluent Bit needs a separator string to split the records. By default it uses the breakline character (LF or 0x10).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#separator DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#separator}
  */
  readonly separator?: string;
}

export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTcpToTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer_size: cdktf.stringToTerraform(struct!.bufferSize),
    chunk_size: cdktf.stringToTerraform(struct!.chunkSize),
    format: cdktf.stringToTerraform(struct!.format),
    listen: cdktf.stringToTerraform(struct!.listen),
    port: cdktf.numberToTerraform(struct!.port),
    separator: cdktf.stringToTerraform(struct!.separator),
  }
}


export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTcpToHclTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer_size: {
      value: cdktf.stringToHclTerraform(struct!.bufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chunk_size: {
      value: cdktf.stringToHclTerraform(struct!.chunkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listen: {
      value: cdktf.stringToHclTerraform(struct!.listen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferSize = this._bufferSize;
    }
    if (this._chunkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSize = this._chunkSize;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._listen !== undefined) {
      hasAnyValues = true;
      internalValueResult.listen = this._listen;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bufferSize = undefined;
      this._chunkSize = undefined;
      this._format = undefined;
      this._listen = undefined;
      this._port = undefined;
      this._separator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bufferSize = value.bufferSize;
      this._chunkSize = value.chunkSize;
      this._format = value.format;
      this._listen = value.listen;
      this._port = value.port;
      this._separator = value.separator;
    }
  }

  // buffer_size - computed: false, optional: true, required: false
  private _bufferSize?: string; 
  public get bufferSize() {
    return this.getStringAttribute('buffer_size');
  }
  public set bufferSize(value: string) {
    this._bufferSize = value;
  }
  public resetBufferSize() {
    this._bufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferSizeInput() {
    return this._bufferSize;
  }

  // chunk_size - computed: false, optional: true, required: false
  private _chunkSize?: string; 
  public get chunkSize() {
    return this.getStringAttribute('chunk_size');
  }
  public set chunkSize(value: string) {
    this._chunkSize = value;
  }
  public resetChunkSize() {
    this._chunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSizeInput() {
    return this._chunkSize;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // listen - computed: false, optional: true, required: false
  private _listen?: string; 
  public get listen() {
    return this.getStringAttribute('listen');
  }
  public set listen(value: string) {
    this._listen = value;
  }
  public resetListen() {
    this._listen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenInput() {
    return this._listen;
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

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }
}
export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecUdp {
  /**
  * BufferSize Specify the maximum buffer size in KB to receive a JSON message. If not set, the default size will be the value of Chunk_Size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#buffer_size DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#buffer_size}
  */
  readonly bufferSize?: string;
  /**
  * By default the buffer to store the incoming JSON messages, do not allocate the maximum memory allowed, instead it allocate memory when is required. The rounds of allocations are set by Chunk_Size in KB. If not set, Chunk_Size is equal to 32 (32KB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#chunk_size DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#chunk_size}
  */
  readonly chunkSize?: string;
  /**
  * Format Specify the expected payload format. It support the options json and none. When using json, it expects JSON maps, when is set to none, it will split every record using the defined Separator (option below).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#format DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#format}
  */
  readonly format?: string;
  /**
  * Listen Listener network interface, default: 0.0.0.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#listen DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#listen}
  */
  readonly listen?: string;
  /**
  * Port Specify the UDP port where listening for connections, default: 5170
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#port DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#port}
  */
  readonly port?: number;
  /**
  * Separator When the expected Format is set to none, Fluent Bit needs a separator string to split the records. By default it uses the breakline character (LF or 0x10).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#separator DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#separator}
  */
  readonly separator?: string;
  /**
  * SourceAddressKey Specify the key where the source address will be injected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#source_address_key DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#source_address_key}
  */
  readonly sourceAddressKey?: string;
  /**
  * Threaded mechanism allows input plugin to run in a separate thread which helps to desaturate the main pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#threaded DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#threaded}
  */
  readonly threaded?: string;
}

export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecUdpToTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer_size: cdktf.stringToTerraform(struct!.bufferSize),
    chunk_size: cdktf.stringToTerraform(struct!.chunkSize),
    format: cdktf.stringToTerraform(struct!.format),
    listen: cdktf.stringToTerraform(struct!.listen),
    port: cdktf.numberToTerraform(struct!.port),
    separator: cdktf.stringToTerraform(struct!.separator),
    source_address_key: cdktf.stringToTerraform(struct!.sourceAddressKey),
    threaded: cdktf.stringToTerraform(struct!.threaded),
  }
}


export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecUdpToHclTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer_size: {
      value: cdktf.stringToHclTerraform(struct!.bufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chunk_size: {
      value: cdktf.stringToHclTerraform(struct!.chunkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listen: {
      value: cdktf.stringToHclTerraform(struct!.listen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address_key: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddressKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threaded: {
      value: cdktf.stringToHclTerraform(struct!.threaded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecUdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferSize = this._bufferSize;
    }
    if (this._chunkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSize = this._chunkSize;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._listen !== undefined) {
      hasAnyValues = true;
      internalValueResult.listen = this._listen;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    if (this._sourceAddressKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddressKey = this._sourceAddressKey;
    }
    if (this._threaded !== undefined) {
      hasAnyValues = true;
      internalValueResult.threaded = this._threaded;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecUdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bufferSize = undefined;
      this._chunkSize = undefined;
      this._format = undefined;
      this._listen = undefined;
      this._port = undefined;
      this._separator = undefined;
      this._sourceAddressKey = undefined;
      this._threaded = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bufferSize = value.bufferSize;
      this._chunkSize = value.chunkSize;
      this._format = value.format;
      this._listen = value.listen;
      this._port = value.port;
      this._separator = value.separator;
      this._sourceAddressKey = value.sourceAddressKey;
      this._threaded = value.threaded;
    }
  }

  // buffer_size - computed: false, optional: true, required: false
  private _bufferSize?: string; 
  public get bufferSize() {
    return this.getStringAttribute('buffer_size');
  }
  public set bufferSize(value: string) {
    this._bufferSize = value;
  }
  public resetBufferSize() {
    this._bufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferSizeInput() {
    return this._bufferSize;
  }

  // chunk_size - computed: false, optional: true, required: false
  private _chunkSize?: string; 
  public get chunkSize() {
    return this.getStringAttribute('chunk_size');
  }
  public set chunkSize(value: string) {
    this._chunkSize = value;
  }
  public resetChunkSize() {
    this._chunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSizeInput() {
    return this._chunkSize;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // listen - computed: false, optional: true, required: false
  private _listen?: string; 
  public get listen() {
    return this.getStringAttribute('listen');
  }
  public set listen(value: string) {
    this._listen = value;
  }
  public resetListen() {
    this._listen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenInput() {
    return this._listen;
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

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // source_address_key - computed: false, optional: true, required: false
  private _sourceAddressKey?: string; 
  public get sourceAddressKey() {
    return this.getStringAttribute('source_address_key');
  }
  public set sourceAddressKey(value: string) {
    this._sourceAddressKey = value;
  }
  public resetSourceAddressKey() {
    this._sourceAddressKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressKeyInput() {
    return this._sourceAddressKey;
  }

  // threaded - computed: false, optional: true, required: false
  private _threaded?: string; 
  public get threaded() {
    return this.getStringAttribute('threaded');
  }
  public set threaded(value: string) {
    this._threaded = value;
  }
  public resetThreaded() {
    this._threaded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadedInput() {
    return this._threaded;
  }
}
export interface DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpec {
  /**
  * A user friendly alias name for this input plugin. Used in metrics for distinction of each configured input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#alias DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#alias}
  */
  readonly alias?: string;
  /**
  * Collectd defines the Collectd input plugin configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#collectd DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#collectd}
  */
  readonly collectd?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCollectd;
  /**
  * CustomPlugin defines Custom Input configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#custom_plugin DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#custom_plugin}
  */
  readonly customPlugin?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCustomPlugin;
  /**
  * Dummy defines Dummy Input configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#dummy DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#dummy}
  */
  readonly dummy?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecDummy;
  /**
  * ExecWasi defines the exec wasi input plugin configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#exec_wasi DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#exec_wasi}
  */
  readonly execWasi?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecExecWasi;
  /**
  * FluentBitMetrics defines Fluent Bit Metrics Input configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#fluent_bit_metrics DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#fluent_bit_metrics}
  */
  readonly fluentBitMetrics?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecFluentBitMetrics;
  /**
  * Forward defines forward input plugin configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#forward DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#forward}
  */
  readonly forward?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecForward;
  /**
  * HTTP defines the HTTP input plugin configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#http DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#http}
  */
  readonly http?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttp;
  /**
  * KubernetesEvents defines the KubernetesEvents input plugin configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#kubernetes_events DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#kubernetes_events}
  */
  readonly kubernetesEvents?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecKubernetesEvents;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#log_level DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * MQTT defines the MQTT input plugin configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#mqtt DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#mqtt}
  */
  readonly mqtt?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecMqtt;
  /**
  * Nginx defines the Nginx input plugin configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#nginx DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#nginx}
  */
  readonly nginx?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNginx;
  /**
  * NodeExporterMetrics defines Node Exporter Metrics Input configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#node_exporter_metrics DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#node_exporter_metrics}
  */
  readonly nodeExporterMetrics?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetrics;
  /**
  * OpenTelemetry defines the OpenTelemetry input plugin configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#open_telemetry DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#open_telemetry}
  */
  readonly openTelemetry?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecOpenTelemetry;
  /**
  * Processors defines the processors configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#processors DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#processors}
  */
  readonly processors?: { [key: string]: string };
  /**
  * PrometheusScrapeMetrics defines Prometheus Scrape Metrics Input configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#prometheus_scrape_metrics DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#prometheus_scrape_metrics}
  */
  readonly prometheusScrapeMetrics?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecPrometheusScrapeMetrics;
  /**
  * StatsD defines the StatsD input plugin configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#statsd DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#statsd}
  */
  readonly statsd?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecStatsd;
  /**
  * Syslog defines the Syslog input plugin configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#syslog DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#syslog}
  */
  readonly syslog?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSyslog;
  /**
  * Systemd defines Systemd Input configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#systemd DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#systemd}
  */
  readonly systemd?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSystemd;
  /**
  * Tail defines Tail Input configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#tail DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#tail}
  */
  readonly tail?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTail;
  /**
  * TCP defines the TCP input plugin configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#tcp DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#tcp}
  */
  readonly tcp?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTcp;
  /**
  * UDP defines the UDP input plugin configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#udp DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest#udp}
  */
  readonly udp?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecUdp;
}

export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecToTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    collectd: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCollectdToTerraform(struct!.collectd),
    custom_plugin: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCustomPluginToTerraform(struct!.customPlugin),
    dummy: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecDummyToTerraform(struct!.dummy),
    exec_wasi: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecExecWasiToTerraform(struct!.execWasi),
    fluent_bit_metrics: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecFluentBitMetricsToTerraform(struct!.fluentBitMetrics),
    forward: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecForwardToTerraform(struct!.forward),
    http: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpToTerraform(struct!.http),
    kubernetes_events: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecKubernetesEventsToTerraform(struct!.kubernetesEvents),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    mqtt: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecMqttToTerraform(struct!.mqtt),
    nginx: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNginxToTerraform(struct!.nginx),
    node_exporter_metrics: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetricsToTerraform(struct!.nodeExporterMetrics),
    open_telemetry: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecOpenTelemetryToTerraform(struct!.openTelemetry),
    processors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.processors),
    prometheus_scrape_metrics: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecPrometheusScrapeMetricsToTerraform(struct!.prometheusScrapeMetrics),
    statsd: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecStatsdToTerraform(struct!.statsd),
    syslog: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSyslogToTerraform(struct!.syslog),
    systemd: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSystemdToTerraform(struct!.systemd),
    tail: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTailToTerraform(struct!.tail),
    tcp: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTcpToTerraform(struct!.tcp),
    udp: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecUdpToTerraform(struct!.udp),
  }
}


export function dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collectd: {
      value: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCollectdToHclTerraform(struct!.collectd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCollectd",
    },
    custom_plugin: {
      value: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCustomPluginToHclTerraform(struct!.customPlugin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCustomPlugin",
    },
    dummy: {
      value: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecDummyToHclTerraform(struct!.dummy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecDummy",
    },
    exec_wasi: {
      value: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecExecWasiToHclTerraform(struct!.execWasi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecExecWasi",
    },
    fluent_bit_metrics: {
      value: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecFluentBitMetricsToHclTerraform(struct!.fluentBitMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecFluentBitMetrics",
    },
    forward: {
      value: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecForwardToHclTerraform(struct!.forward),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecForward",
    },
    http: {
      value: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttp",
    },
    kubernetes_events: {
      value: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecKubernetesEventsToHclTerraform(struct!.kubernetesEvents),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecKubernetesEvents",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mqtt: {
      value: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecMqttToHclTerraform(struct!.mqtt),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecMqtt",
    },
    nginx: {
      value: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNginxToHclTerraform(struct!.nginx),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNginx",
    },
    node_exporter_metrics: {
      value: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetricsToHclTerraform(struct!.nodeExporterMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetrics",
    },
    open_telemetry: {
      value: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecOpenTelemetryToHclTerraform(struct!.openTelemetry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecOpenTelemetry",
    },
    processors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.processors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    prometheus_scrape_metrics: {
      value: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecPrometheusScrapeMetricsToHclTerraform(struct!.prometheusScrapeMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecPrometheusScrapeMetrics",
    },
    statsd: {
      value: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecStatsdToHclTerraform(struct!.statsd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecStatsd",
    },
    syslog: {
      value: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSyslogToHclTerraform(struct!.syslog),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSyslog",
    },
    systemd: {
      value: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSystemdToHclTerraform(struct!.systemd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSystemd",
    },
    tail: {
      value: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTailToHclTerraform(struct!.tail),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTail",
    },
    tcp: {
      value: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTcp",
    },
    udp: {
      value: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecUdpToHclTerraform(struct!.udp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecUdp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._collectd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectd = this._collectd?.internalValue;
    }
    if (this._customPlugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPlugin = this._customPlugin?.internalValue;
    }
    if (this._dummy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dummy = this._dummy?.internalValue;
    }
    if (this._execWasi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.execWasi = this._execWasi?.internalValue;
    }
    if (this._fluentBitMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fluentBitMetrics = this._fluentBitMetrics?.internalValue;
    }
    if (this._forward?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._kubernetesEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesEvents = this._kubernetesEvents?.internalValue;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._mqtt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mqtt = this._mqtt?.internalValue;
    }
    if (this._nginx?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nginx = this._nginx?.internalValue;
    }
    if (this._nodeExporterMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeExporterMetrics = this._nodeExporterMetrics?.internalValue;
    }
    if (this._openTelemetry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openTelemetry = this._openTelemetry?.internalValue;
    }
    if (this._processors !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors;
    }
    if (this._prometheusScrapeMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusScrapeMetrics = this._prometheusScrapeMetrics?.internalValue;
    }
    if (this._statsd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statsd = this._statsd?.internalValue;
    }
    if (this._syslog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslog = this._syslog?.internalValue;
    }
    if (this._systemd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemd = this._systemd?.internalValue;
    }
    if (this._tail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tail = this._tail?.internalValue;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    if (this._udp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._collectd.internalValue = undefined;
      this._customPlugin.internalValue = undefined;
      this._dummy.internalValue = undefined;
      this._execWasi.internalValue = undefined;
      this._fluentBitMetrics.internalValue = undefined;
      this._forward.internalValue = undefined;
      this._http.internalValue = undefined;
      this._kubernetesEvents.internalValue = undefined;
      this._logLevel = undefined;
      this._mqtt.internalValue = undefined;
      this._nginx.internalValue = undefined;
      this._nodeExporterMetrics.internalValue = undefined;
      this._openTelemetry.internalValue = undefined;
      this._processors = undefined;
      this._prometheusScrapeMetrics.internalValue = undefined;
      this._statsd.internalValue = undefined;
      this._syslog.internalValue = undefined;
      this._systemd.internalValue = undefined;
      this._tail.internalValue = undefined;
      this._tcp.internalValue = undefined;
      this._udp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._collectd.internalValue = value.collectd;
      this._customPlugin.internalValue = value.customPlugin;
      this._dummy.internalValue = value.dummy;
      this._execWasi.internalValue = value.execWasi;
      this._fluentBitMetrics.internalValue = value.fluentBitMetrics;
      this._forward.internalValue = value.forward;
      this._http.internalValue = value.http;
      this._kubernetesEvents.internalValue = value.kubernetesEvents;
      this._logLevel = value.logLevel;
      this._mqtt.internalValue = value.mqtt;
      this._nginx.internalValue = value.nginx;
      this._nodeExporterMetrics.internalValue = value.nodeExporterMetrics;
      this._openTelemetry.internalValue = value.openTelemetry;
      this._processors = value.processors;
      this._prometheusScrapeMetrics.internalValue = value.prometheusScrapeMetrics;
      this._statsd.internalValue = value.statsd;
      this._syslog.internalValue = value.syslog;
      this._systemd.internalValue = value.systemd;
      this._tail.internalValue = value.tail;
      this._tcp.internalValue = value.tcp;
      this._udp.internalValue = value.udp;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // collectd - computed: false, optional: true, required: false
  private _collectd = new DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCollectdOutputReference(this, "collectd");
  public get collectd() {
    return this._collectd;
  }
  public putCollectd(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCollectd) {
    this._collectd.internalValue = value;
  }
  public resetCollectd() {
    this._collectd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectdInput() {
    return this._collectd.internalValue;
  }

  // custom_plugin - computed: false, optional: true, required: false
  private _customPlugin = new DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCustomPluginOutputReference(this, "custom_plugin");
  public get customPlugin() {
    return this._customPlugin;
  }
  public putCustomPlugin(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecCustomPlugin) {
    this._customPlugin.internalValue = value;
  }
  public resetCustomPlugin() {
    this._customPlugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPluginInput() {
    return this._customPlugin.internalValue;
  }

  // dummy - computed: false, optional: true, required: false
  private _dummy = new DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecDummyOutputReference(this, "dummy");
  public get dummy() {
    return this._dummy;
  }
  public putDummy(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecDummy) {
    this._dummy.internalValue = value;
  }
  public resetDummy() {
    this._dummy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dummyInput() {
    return this._dummy.internalValue;
  }

  // exec_wasi - computed: false, optional: true, required: false
  private _execWasi = new DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecExecWasiOutputReference(this, "exec_wasi");
  public get execWasi() {
    return this._execWasi;
  }
  public putExecWasi(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecExecWasi) {
    this._execWasi.internalValue = value;
  }
  public resetExecWasi() {
    this._execWasi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execWasiInput() {
    return this._execWasi.internalValue;
  }

  // fluent_bit_metrics - computed: false, optional: true, required: false
  private _fluentBitMetrics = new DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecFluentBitMetricsOutputReference(this, "fluent_bit_metrics");
  public get fluentBitMetrics() {
    return this._fluentBitMetrics;
  }
  public putFluentBitMetrics(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecFluentBitMetrics) {
    this._fluentBitMetrics.internalValue = value;
  }
  public resetFluentBitMetrics() {
    this._fluentBitMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fluentBitMetricsInput() {
    return this._fluentBitMetrics.internalValue;
  }

  // forward - computed: false, optional: true, required: false
  private _forward = new DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecForwardOutputReference(this, "forward");
  public get forward() {
    return this._forward;
  }
  public putForward(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecForward) {
    this._forward.internalValue = value;
  }
  public resetForward() {
    this._forward.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // kubernetes_events - computed: false, optional: true, required: false
  private _kubernetesEvents = new DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecKubernetesEventsOutputReference(this, "kubernetes_events");
  public get kubernetesEvents() {
    return this._kubernetesEvents;
  }
  public putKubernetesEvents(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecKubernetesEvents) {
    this._kubernetesEvents.internalValue = value;
  }
  public resetKubernetesEvents() {
    this._kubernetesEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesEventsInput() {
    return this._kubernetesEvents.internalValue;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // mqtt - computed: false, optional: true, required: false
  private _mqtt = new DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecMqttOutputReference(this, "mqtt");
  public get mqtt() {
    return this._mqtt;
  }
  public putMqtt(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecMqtt) {
    this._mqtt.internalValue = value;
  }
  public resetMqtt() {
    this._mqtt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttInput() {
    return this._mqtt.internalValue;
  }

  // nginx - computed: false, optional: true, required: false
  private _nginx = new DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNginxOutputReference(this, "nginx");
  public get nginx() {
    return this._nginx;
  }
  public putNginx(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNginx) {
    this._nginx.internalValue = value;
  }
  public resetNginx() {
    this._nginx.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nginxInput() {
    return this._nginx.internalValue;
  }

  // node_exporter_metrics - computed: false, optional: true, required: false
  private _nodeExporterMetrics = new DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetricsOutputReference(this, "node_exporter_metrics");
  public get nodeExporterMetrics() {
    return this._nodeExporterMetrics;
  }
  public putNodeExporterMetrics(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecNodeExporterMetrics) {
    this._nodeExporterMetrics.internalValue = value;
  }
  public resetNodeExporterMetrics() {
    this._nodeExporterMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeExporterMetricsInput() {
    return this._nodeExporterMetrics.internalValue;
  }

  // open_telemetry - computed: false, optional: true, required: false
  private _openTelemetry = new DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecOpenTelemetryOutputReference(this, "open_telemetry");
  public get openTelemetry() {
    return this._openTelemetry;
  }
  public putOpenTelemetry(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecOpenTelemetry) {
    this._openTelemetry.internalValue = value;
  }
  public resetOpenTelemetry() {
    this._openTelemetry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openTelemetryInput() {
    return this._openTelemetry.internalValue;
  }

  // processors - computed: false, optional: true, required: false
  private _processors?: { [key: string]: string }; 
  public get processors() {
    return this.getStringMapAttribute('processors');
  }
  public set processors(value: { [key: string]: string }) {
    this._processors = value;
  }
  public resetProcessors() {
    this._processors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors;
  }

  // prometheus_scrape_metrics - computed: false, optional: true, required: false
  private _prometheusScrapeMetrics = new DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecPrometheusScrapeMetricsOutputReference(this, "prometheus_scrape_metrics");
  public get prometheusScrapeMetrics() {
    return this._prometheusScrapeMetrics;
  }
  public putPrometheusScrapeMetrics(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecPrometheusScrapeMetrics) {
    this._prometheusScrapeMetrics.internalValue = value;
  }
  public resetPrometheusScrapeMetrics() {
    this._prometheusScrapeMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusScrapeMetricsInput() {
    return this._prometheusScrapeMetrics.internalValue;
  }

  // statsd - computed: false, optional: true, required: false
  private _statsd = new DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecStatsdOutputReference(this, "statsd");
  public get statsd() {
    return this._statsd;
  }
  public putStatsd(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecStatsd) {
    this._statsd.internalValue = value;
  }
  public resetStatsd() {
    this._statsd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsdInput() {
    return this._statsd.internalValue;
  }

  // syslog - computed: false, optional: true, required: false
  private _syslog = new DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSyslogOutputReference(this, "syslog");
  public get syslog() {
    return this._syslog;
  }
  public putSyslog(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSyslog) {
    this._syslog.internalValue = value;
  }
  public resetSyslog() {
    this._syslog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogInput() {
    return this._syslog.internalValue;
  }

  // systemd - computed: false, optional: true, required: false
  private _systemd = new DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSystemdOutputReference(this, "systemd");
  public get systemd() {
    return this._systemd;
  }
  public putSystemd(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecSystemd) {
    this._systemd.internalValue = value;
  }
  public resetSystemd() {
    this._systemd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemdInput() {
    return this._systemd.internalValue;
  }

  // tail - computed: false, optional: true, required: false
  private _tail = new DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTailOutputReference(this, "tail");
  public get tail() {
    return this._tail;
  }
  public putTail(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTail) {
    this._tail.internalValue = value;
  }
  public resetTail() {
    this._tail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tailInput() {
    return this._tail.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }

  // udp - computed: false, optional: true, required: false
  private _udp = new DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecUdpOutputReference(this, "udp");
  public get udp() {
    return this._udp;
  }
  public putUdp(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecUdp) {
    this._udp.internalValue = value;
  }
  public resetUdp() {
    this._udp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest k8s_fluentbit_fluent_io_cluster_input_v1alpha2_manifest}
*/
export class DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_fluentbit_fluent_io_cluster_input_v1alpha2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest to import
  * @param importFromId The id of the existing DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SFluentbitFluentIoClusterInputV1Alpha2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_fluentbit_fluent_io_cluster_input_v1alpha2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/fluentbit_fluent_io_cluster_input_v1alpha2_manifest k8s_fluentbit_fluent_io_cluster_input_v1alpha2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_fluentbit_fluent_io_cluster_input_v1alpha2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpec) {
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
      metadata: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestMetadata",
      },
      spec: {
        value: dataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFluentbitFluentIoClusterInputV1Alpha2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
