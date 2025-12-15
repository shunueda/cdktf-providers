// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#metadata DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestMetadata;
  /**
  * KubevirtClusterSpec defines the desired state of KubevirtCluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#spec DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpec;
}
export interface DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#annotations DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#labels DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#name DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#namespace DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneEndpoint {
  /**
  * Host is the hostname on which the API server is serving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#host DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#host}
  */
  readonly host: string;
  /**
  * Port is the port on which the API server is serving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#port DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#port}
  */
  readonly port: number;
}

export function dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneEndpointToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneEndpointToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneEndpoint | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplateSpec {
  /**
  * Type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#type DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplateSpecToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplateSpecToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplate {
  /**
  * Service metadata allows to set labels, annotations and namespace for the service. When infraClusterSecretRef is used, ControlPlaneService take the kubeconfig namespace by default if metadata.namespace is not specified. This field is optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#metadata DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Service specification allows to override some fields in the service spec. Note, it does not aim cover all fields of the service spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#spec DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplateSpec;
}

export function dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplateToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    spec: dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplateToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    spec: {
      value: dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplateSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecInfraClusterSecretRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#api_version DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#field_path DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#kind DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#name DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#namespace DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#resource_version DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#uid DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecInfraClusterSecretRefToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecInfraClusterSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecInfraClusterSecretRefToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecInfraClusterSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecInfraClusterSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecInfraClusterSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecInfraClusterSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeysConfigRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#api_version DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#field_path DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#kind DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#name DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#namespace DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#resource_version DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#uid DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeysConfigRefToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeysConfigRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeysConfigRefToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeysConfigRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeysConfigRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeysConfigRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeysConfigRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeys {
  /**
  * ConfigRef is a reference to a resource containing the keys. The reference is optional to allow users/operators to specify Bootstrap.DataSecretName without the need of a controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#config_ref DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#config_ref}
  */
  readonly configRef?: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeysConfigRef;
  /**
  * DataSecretName is the name of the secret that stores ssh keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#data_secret_name DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#data_secret_name}
  */
  readonly dataSecretName?: string;
}

export function dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeysToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_ref: dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeysConfigRefToTerraform(struct!.configRef),
    data_secret_name: cdktf.stringToTerraform(struct!.dataSecretName),
  }
}


export function dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeysToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_ref: {
      value: dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeysConfigRefToHclTerraform(struct!.configRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeysConfigRef",
    },
    data_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.dataSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configRef = this._configRef?.internalValue;
    }
    if (this._dataSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSecretName = this._dataSecretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configRef.internalValue = undefined;
      this._dataSecretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configRef.internalValue = value.configRef;
      this._dataSecretName = value.dataSecretName;
    }
  }

  // config_ref - computed: false, optional: true, required: false
  private _configRef = new DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeysConfigRefOutputReference(this, "config_ref");
  public get configRef() {
    return this._configRef;
  }
  public putConfigRef(value: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeysConfigRef) {
    this._configRef.internalValue = value;
  }
  public resetConfigRef() {
    this._configRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configRefInput() {
    return this._configRef.internalValue;
  }

  // data_secret_name - computed: false, optional: true, required: false
  private _dataSecretName?: string; 
  public get dataSecretName() {
    return this.getStringAttribute('data_secret_name');
  }
  public set dataSecretName(value: string) {
    this._dataSecretName = value;
  }
  public resetDataSecretName() {
    this._dataSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSecretNameInput() {
    return this._dataSecretName;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpec {
  /**
  * ControlPlaneEndpoint represents the endpoint used to communicate with the control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#control_plane_endpoint DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#control_plane_endpoint}
  */
  readonly controlPlaneEndpoint?: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneEndpoint;
  /**
  * ControlPlaneServiceTemplate can be used to modify service that fronts the control plane nodes to handle the api-server traffic (port 6443). This field is optional, by default control plane nodes will use a service of type ClusterIP, which will make workload cluster only accessible within the same cluster. Note, this does not aim to expose the entire Service spec to users, but only provides capability to modify the service metadata and the service type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#control_plane_service_template DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#control_plane_service_template}
  */
  readonly controlPlaneServiceTemplate?: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplate;
  /**
  * InfraClusterSecretRef is a reference to a secret with a kubeconfig for external cluster used for infra.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#infra_cluster_secret_ref DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#infra_cluster_secret_ref}
  */
  readonly infraClusterSecretRef?: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecInfraClusterSecretRef;
  /**
  * SSHKeys is a reference to a local struct for SSH keys persistence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#ssh_keys DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest#ssh_keys}
  */
  readonly sshKeys?: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeys;
}

export function dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane_endpoint: dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneEndpointToTerraform(struct!.controlPlaneEndpoint),
    control_plane_service_template: dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplateToTerraform(struct!.controlPlaneServiceTemplate),
    infra_cluster_secret_ref: dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecInfraClusterSecretRefToTerraform(struct!.infraClusterSecretRef),
    ssh_keys: dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeysToTerraform(struct!.sshKeys),
  }
}


export function dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane_endpoint: {
      value: dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneEndpointToHclTerraform(struct!.controlPlaneEndpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneEndpoint",
    },
    control_plane_service_template: {
      value: dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplateToHclTerraform(struct!.controlPlaneServiceTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplate",
    },
    infra_cluster_secret_ref: {
      value: dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecInfraClusterSecretRefToHclTerraform(struct!.infraClusterSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecInfraClusterSecretRef",
    },
    ssh_keys: {
      value: dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeysToHclTerraform(struct!.sshKeys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlaneEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneEndpoint = this._controlPlaneEndpoint?.internalValue;
    }
    if (this._controlPlaneServiceTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneServiceTemplate = this._controlPlaneServiceTemplate?.internalValue;
    }
    if (this._infraClusterSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infraClusterSecretRef = this._infraClusterSecretRef?.internalValue;
    }
    if (this._sshKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeys = this._sshKeys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controlPlaneEndpoint.internalValue = undefined;
      this._controlPlaneServiceTemplate.internalValue = undefined;
      this._infraClusterSecretRef.internalValue = undefined;
      this._sshKeys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controlPlaneEndpoint.internalValue = value.controlPlaneEndpoint;
      this._controlPlaneServiceTemplate.internalValue = value.controlPlaneServiceTemplate;
      this._infraClusterSecretRef.internalValue = value.infraClusterSecretRef;
      this._sshKeys.internalValue = value.sshKeys;
    }
  }

  // control_plane_endpoint - computed: false, optional: true, required: false
  private _controlPlaneEndpoint = new DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneEndpointOutputReference(this, "control_plane_endpoint");
  public get controlPlaneEndpoint() {
    return this._controlPlaneEndpoint;
  }
  public putControlPlaneEndpoint(value: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneEndpoint) {
    this._controlPlaneEndpoint.internalValue = value;
  }
  public resetControlPlaneEndpoint() {
    this._controlPlaneEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneEndpointInput() {
    return this._controlPlaneEndpoint.internalValue;
  }

  // control_plane_service_template - computed: false, optional: true, required: false
  private _controlPlaneServiceTemplate = new DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplateOutputReference(this, "control_plane_service_template");
  public get controlPlaneServiceTemplate() {
    return this._controlPlaneServiceTemplate;
  }
  public putControlPlaneServiceTemplate(value: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecControlPlaneServiceTemplate) {
    this._controlPlaneServiceTemplate.internalValue = value;
  }
  public resetControlPlaneServiceTemplate() {
    this._controlPlaneServiceTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneServiceTemplateInput() {
    return this._controlPlaneServiceTemplate.internalValue;
  }

  // infra_cluster_secret_ref - computed: false, optional: true, required: false
  private _infraClusterSecretRef = new DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecInfraClusterSecretRefOutputReference(this, "infra_cluster_secret_ref");
  public get infraClusterSecretRef() {
    return this._infraClusterSecretRef;
  }
  public putInfraClusterSecretRef(value: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecInfraClusterSecretRef) {
    this._infraClusterSecretRef.internalValue = value;
  }
  public resetInfraClusterSecretRef() {
    this._infraClusterSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infraClusterSecretRefInput() {
    return this._infraClusterSecretRef.internalValue;
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys = new DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeysOutputReference(this, "ssh_keys");
  public get sshKeys() {
    return this._sshKeys;
  }
  public putSshKeys(value: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecSshKeys) {
    this._sshKeys.internalValue = value;
  }
  public resetSshKeys() {
    this._sshKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest k8s_infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest}
*/
export class DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest k8s_infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_infrastructure_cluster_x_k8s_io_kubevirt_cluster_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpec) {
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
      metadata: dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoKubevirtClusterV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
