// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_cluster_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_cluster_v1beta1_manifest#metadata DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestMetadata;
  /**
  * TinkerbellClusterSpec defines the desired state of TinkerbellCluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_cluster_v1beta1_manifest#spec DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpec;
}
export interface DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_cluster_v1beta1_manifest#annotations DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_cluster_v1beta1_manifest#labels DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_cluster_v1beta1_manifest#name DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_cluster_v1beta1_manifest#namespace DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestMetadataToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpecControlPlaneEndpoint {
  /**
  * The hostname on which the API server is serving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_cluster_v1beta1_manifest#host DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1Manifest#host}
  */
  readonly host: string;
  /**
  * The port on which the API server is serving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_cluster_v1beta1_manifest#port DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1Manifest#port}
  */
  readonly port: number;
}

export function dataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpecControlPlaneEndpointToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpecControlPlaneEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpecControlPlaneEndpointToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpecControlPlaneEndpoint | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpecControlPlaneEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpecControlPlaneEndpoint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpecControlPlaneEndpoint | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpec {
  /**
  * ControlPlaneEndpoint is a required field by ClusterAPI v1beta1. See https://cluster-api.sigs.k8s.io/developer/architecture/controllers/cluster.html for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_cluster_v1beta1_manifest#control_plane_endpoint DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1Manifest#control_plane_endpoint}
  */
  readonly controlPlaneEndpoint?: DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpecControlPlaneEndpoint;
  /**
  * ImageLookupBaseRegistry is the base Registry URL that is used for pulling images, if not set, the default will be to use ghcr.io/tinkerbell/cluster-api-provider-tinkerbell.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_cluster_v1beta1_manifest#image_lookup_base_registry DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1Manifest#image_lookup_base_registry}
  */
  readonly imageLookupBaseRegistry?: string;
  /**
  * ImageLookupFormat is the URL naming format to use for machine images when a machine does not specify. When set, this will be used for all cluster machines unless a machine specifies a different ImageLookupFormat. Supports substitutions for {{.BaseRegistry}}, {{.OSDistro}}, {{.OSVersion}} and {{.KubernetesVersion}} with the basse URL, OS distribution, OS version, and kubernetes version, respectively. BaseRegistry will be the value in ImageLookupBaseRegistry or ghcr.io/tinkerbell/cluster-api-provider-tinkerbell (the default), OSDistro will be the value in ImageLookupOSDistro or ubuntu (the default), OSVersion will be the value in ImageLookupOSVersion or default based on the OSDistro (if known), and the kubernetes version as defined by the packages produced by kubernetes/release: v1.13.0, v1.12.5-mybuild.1, or v1.17.3. For example, the default image format of {{.BaseRegistry}}/{{.OSDistro}}-{{.OSVersion}}:{{.KubernetesVersion}}.gz will attempt to pull the image from that location. See also: https://golang.org/pkg/text/template/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_cluster_v1beta1_manifest#image_lookup_format DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1Manifest#image_lookup_format}
  */
  readonly imageLookupFormat?: string;
  /**
  * ImageLookupOSDistro is the name of the OS distro to use when fetching machine images, if not set it will default to ubuntu.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_cluster_v1beta1_manifest#image_lookup_os_distro DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1Manifest#image_lookup_os_distro}
  */
  readonly imageLookupOsDistro?: string;
  /**
  * ImageLookupOSVersion is the version of the OS distribution to use when fetching machine images. If not set it will default based on ImageLookupOSDistro.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_cluster_v1beta1_manifest#image_lookup_os_version DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1Manifest#image_lookup_os_version}
  */
  readonly imageLookupOsVersion?: string;
}

export function dataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpecToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane_endpoint: dataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpecControlPlaneEndpointToTerraform(struct!.controlPlaneEndpoint),
    image_lookup_base_registry: cdktf.stringToTerraform(struct!.imageLookupBaseRegistry),
    image_lookup_format: cdktf.stringToTerraform(struct!.imageLookupFormat),
    image_lookup_os_distro: cdktf.stringToTerraform(struct!.imageLookupOsDistro),
    image_lookup_os_version: cdktf.stringToTerraform(struct!.imageLookupOsVersion),
  }
}


export function dataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane_endpoint: {
      value: dataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpecControlPlaneEndpointToHclTerraform(struct!.controlPlaneEndpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpecControlPlaneEndpoint",
    },
    image_lookup_base_registry: {
      value: cdktf.stringToHclTerraform(struct!.imageLookupBaseRegistry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_lookup_format: {
      value: cdktf.stringToHclTerraform(struct!.imageLookupFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_lookup_os_distro: {
      value: cdktf.stringToHclTerraform(struct!.imageLookupOsDistro),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_lookup_os_version: {
      value: cdktf.stringToHclTerraform(struct!.imageLookupOsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlaneEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneEndpoint = this._controlPlaneEndpoint?.internalValue;
    }
    if (this._imageLookupBaseRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageLookupBaseRegistry = this._imageLookupBaseRegistry;
    }
    if (this._imageLookupFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageLookupFormat = this._imageLookupFormat;
    }
    if (this._imageLookupOsDistro !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageLookupOsDistro = this._imageLookupOsDistro;
    }
    if (this._imageLookupOsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageLookupOsVersion = this._imageLookupOsVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controlPlaneEndpoint.internalValue = undefined;
      this._imageLookupBaseRegistry = undefined;
      this._imageLookupFormat = undefined;
      this._imageLookupOsDistro = undefined;
      this._imageLookupOsVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controlPlaneEndpoint.internalValue = value.controlPlaneEndpoint;
      this._imageLookupBaseRegistry = value.imageLookupBaseRegistry;
      this._imageLookupFormat = value.imageLookupFormat;
      this._imageLookupOsDistro = value.imageLookupOsDistro;
      this._imageLookupOsVersion = value.imageLookupOsVersion;
    }
  }

  // control_plane_endpoint - computed: false, optional: true, required: false
  private _controlPlaneEndpoint = new DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpecControlPlaneEndpointOutputReference(this, "control_plane_endpoint");
  public get controlPlaneEndpoint() {
    return this._controlPlaneEndpoint;
  }
  public putControlPlaneEndpoint(value: DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpecControlPlaneEndpoint) {
    this._controlPlaneEndpoint.internalValue = value;
  }
  public resetControlPlaneEndpoint() {
    this._controlPlaneEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneEndpointInput() {
    return this._controlPlaneEndpoint.internalValue;
  }

  // image_lookup_base_registry - computed: false, optional: true, required: false
  private _imageLookupBaseRegistry?: string; 
  public get imageLookupBaseRegistry() {
    return this.getStringAttribute('image_lookup_base_registry');
  }
  public set imageLookupBaseRegistry(value: string) {
    this._imageLookupBaseRegistry = value;
  }
  public resetImageLookupBaseRegistry() {
    this._imageLookupBaseRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageLookupBaseRegistryInput() {
    return this._imageLookupBaseRegistry;
  }

  // image_lookup_format - computed: false, optional: true, required: false
  private _imageLookupFormat?: string; 
  public get imageLookupFormat() {
    return this.getStringAttribute('image_lookup_format');
  }
  public set imageLookupFormat(value: string) {
    this._imageLookupFormat = value;
  }
  public resetImageLookupFormat() {
    this._imageLookupFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageLookupFormatInput() {
    return this._imageLookupFormat;
  }

  // image_lookup_os_distro - computed: false, optional: true, required: false
  private _imageLookupOsDistro?: string; 
  public get imageLookupOsDistro() {
    return this.getStringAttribute('image_lookup_os_distro');
  }
  public set imageLookupOsDistro(value: string) {
    this._imageLookupOsDistro = value;
  }
  public resetImageLookupOsDistro() {
    this._imageLookupOsDistro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageLookupOsDistroInput() {
    return this._imageLookupOsDistro;
  }

  // image_lookup_os_version - computed: false, optional: true, required: false
  private _imageLookupOsVersion?: string; 
  public get imageLookupOsVersion() {
    return this.getStringAttribute('image_lookup_os_version');
  }
  public set imageLookupOsVersion(value: string) {
    this._imageLookupOsVersion = value;
  }
  public resetImageLookupOsVersion() {
    this._imageLookupOsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageLookupOsVersionInput() {
    return this._imageLookupOsVersion;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_cluster_v1beta1_manifest k8s_infrastructure_cluster_x_k8s_io_tinkerbell_cluster_v1beta1_manifest}
*/
export class DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_infrastructure_cluster_x_k8s_io_tinkerbell_cluster_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_cluster_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_infrastructure_cluster_x_k8s_io_tinkerbell_cluster_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_tinkerbell_cluster_v1beta1_manifest k8s_infrastructure_cluster_x_k8s_io_tinkerbell_cluster_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_infrastructure_cluster_x_k8s_io_tinkerbell_cluster_v1beta1_manifest',
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
  private _metadata = new DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpec) {
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
      metadata: dataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoTinkerbellClusterV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
