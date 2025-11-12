// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#metadata DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestMetadata;
  /**
  * IBMPowerVSClusterTemplateSpec defines the desired state of IBMPowerVSClusterTemplate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#spec DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpec;
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#annotations DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#labels DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#namespace DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestMetadataToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#annotations DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#labels DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateMetadataToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateMetadataToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecControlPlaneEndpoint {
  /**
  * The hostname on which the API server is serving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#host DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#host}
  */
  readonly host: string;
  /**
  * The port on which the API server is serving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#port DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#port}
  */
  readonly port: number;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecControlPlaneEndpointToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecControlPlaneEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecControlPlaneEndpointToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecControlPlaneEndpoint | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecControlPlaneEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecControlPlaneEndpoint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecControlPlaneEndpoint | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecCosInstance {
  /**
  * bucketName is IBM cloud COS bucket name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#bucket_name DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * bucketRegion is IBM cloud COS bucket region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#bucket_region DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#bucket_region}
  */
  readonly bucketRegion?: string;
  /**
  * name defines name of IBM cloud COS instance to be created. when IBMPowerVSCluster.Ignition is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecCosInstanceToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecCosInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_region: cdktf.stringToTerraform(struct!.bucketRegion),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecCosInstanceToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecCosInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_region: {
      value: cdktf.stringToHclTerraform(struct!.bucketRegion),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecCosInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecCosInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketRegion = this._bucketRegion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecCosInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._bucketRegion = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._bucketRegion = value.bucketRegion;
      this._name = value.name;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_region - computed: false, optional: true, required: false
  private _bucketRegion?: string; 
  public get bucketRegion() {
    return this.getStringAttribute('bucket_region');
  }
  public set bucketRegion(value: string) {
    this._bucketRegion = value;
  }
  public resetBucketRegion() {
    this._bucketRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketRegionInput() {
    return this._bucketRegion;
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
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecDhcpServer {
  /**
  * Optional cidr for DHCP private network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#cidr DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#cidr}
  */
  readonly cidr?: string;
  /**
  * Optional DNS Server for DHCP service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#dns_server DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Optional id of the existing DHCPServer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional name of DHCP Service. Only alphanumeric characters and dashes are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Optional indicates if SNAT will be enabled for DHCP service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#snat DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#snat}
  */
  readonly snat?: boolean | cdktf.IResolvable;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecDhcpServerToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecDhcpServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    snat: cdktf.booleanToTerraform(struct!.snat),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecDhcpServerToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecDhcpServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    snat: {
      value: cdktf.booleanToHclTerraform(struct!.snat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecDhcpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecDhcpServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._snat !== undefined) {
      hasAnyValues = true;
      internalValueResult.snat = this._snat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecDhcpServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._dnsServer = undefined;
      this._id = undefined;
      this._name = undefined;
      this._snat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._dnsServer = value.dnsServer;
      this._id = value.id;
      this._name = value.name;
      this._snat = value.snat;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // id - computed: false, optional: true, required: false
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

  // snat - computed: false, optional: true, required: false
  private _snat?: boolean | cdktf.IResolvable; 
  public get snat() {
    return this.getBooleanAttribute('snat');
  }
  public set snat(value: boolean | cdktf.IResolvable) {
    this._snat = value;
  }
  public resetSnat() {
    this._snat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatInput() {
    return this._snat;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecIgnition {
  /**
  * Version defines which version of Ignition will be used to generate bootstrap data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#version DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecIgnitionToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecIgnition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecIgnitionToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecIgnition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecIgnitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecIgnition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecIgnition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersAdditionalListeners {
  /**
  * defaultPoolName defines the name of a VPC Load Balancer Backend Pool to use for the VPC Load Balancer Listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#default_pool_name DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#default_pool_name}
  */
  readonly defaultPoolName?: string;
  /**
  * Port sets the port for the additional listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#port DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#port}
  */
  readonly port: number;
  /**
  * protocol defines the protocol to use for the VPC Load Balancer Listener. Will default to TCP protocol if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#protocol DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersAdditionalListenersToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersAdditionalListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_pool_name: cdktf.stringToTerraform(struct!.defaultPoolName),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersAdditionalListenersToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersAdditionalListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.defaultPoolName),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersAdditionalListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersAdditionalListeners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPoolName = this._defaultPoolName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersAdditionalListeners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultPoolName = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultPoolName = value.defaultPoolName;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // default_pool_name - computed: false, optional: true, required: false
  private _defaultPoolName?: string; 
  public get defaultPoolName() {
    return this.getStringAttribute('default_pool_name');
  }
  public set defaultPoolName(value: string) {
    this._defaultPoolName = value;
  }
  public resetDefaultPoolName() {
    this._defaultPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPoolNameInput() {
    return this._defaultPoolName;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersAdditionalListenersList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersAdditionalListeners[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersAdditionalListenersOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersAdditionalListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPoolsHealthMonitor {
  /**
  * delay defines the seconds to wait between health checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#delay DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#delay}
  */
  readonly delay: number;
  /**
  * port defines the port to perform health monitoring on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#port DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#port}
  */
  readonly port?: number;
  /**
  * retries defines the max retries for health check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#retries DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#retries}
  */
  readonly retries: number;
  /**
  * timeout defines the seconds to wait for a health check response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#timeout DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#timeout}
  */
  readonly timeout: number;
  /**
  * type defines the protocol used for health checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#type DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#type}
  */
  readonly type: string;
  /**
  * urlPath defines the URL to use for health monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#url_path DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#url_path}
  */
  readonly urlPath?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPoolsHealthMonitorToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPoolsHealthMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: cdktf.numberToTerraform(struct!.delay),
    port: cdktf.numberToTerraform(struct!.port),
    retries: cdktf.numberToTerraform(struct!.retries),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
    url_path: cdktf.stringToTerraform(struct!.urlPath),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPoolsHealthMonitorToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPoolsHealthMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay: {
      value: cdktf.numberToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_path: {
      value: cdktf.stringToHclTerraform(struct!.urlPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPoolsHealthMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPoolsHealthMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._urlPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlPath = this._urlPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPoolsHealthMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delay = undefined;
      this._port = undefined;
      this._retries = undefined;
      this._timeout = undefined;
      this._type = undefined;
      this._urlPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delay = value.delay;
      this._port = value.port;
      this._retries = value.retries;
      this._timeout = value.timeout;
      this._type = value.type;
      this._urlPath = value.urlPath;
    }
  }

  // delay - computed: false, optional: false, required: true
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
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

  // retries - computed: false, optional: false, required: true
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url_path - computed: false, optional: true, required: false
  private _urlPath?: string; 
  public get urlPath() {
    return this.getStringAttribute('url_path');
  }
  public set urlPath(value: string) {
    this._urlPath = value;
  }
  public resetUrlPath() {
    this._urlPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPathInput() {
    return this._urlPath;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPools {
  /**
  * algorithm defines the load balancing algorithm to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#algorithm DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#algorithm}
  */
  readonly algorithm: string;
  /**
  * healthMonitor defines the backend pool's health monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#health_monitor DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#health_monitor}
  */
  readonly healthMonitor: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPoolsHealthMonitor;
  /**
  * name defines the name of the Backend Pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * protocol defines the protocol to use for the Backend Pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#protocol DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#protocol}
  */
  readonly protocol: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPoolsToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    health_monitor: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPoolsHealthMonitorToTerraform(struct!.healthMonitor),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPoolsToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_monitor: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPoolsHealthMonitorToHclTerraform(struct!.healthMonitor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPoolsHealthMonitor",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._healthMonitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthMonitor = this._healthMonitor?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._healthMonitor.internalValue = undefined;
      this._name = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._healthMonitor.internalValue = value.healthMonitor;
      this._name = value.name;
      this._protocol = value.protocol;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // health_monitor - computed: false, optional: false, required: true
  private _healthMonitor = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPoolsHealthMonitorOutputReference(this, "health_monitor");
  public get healthMonitor() {
    return this._healthMonitor;
  }
  public putHealthMonitor(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPoolsHealthMonitor) {
    this._healthMonitor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorInput() {
    return this._healthMonitor.internalValue;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPoolsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPools[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPoolsOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSecurityGroups {
  /**
  * id of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSecurityGroupsToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSecurityGroupsToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSecurityGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSecurityGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSecurityGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSecurityGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSecurityGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSecurityGroupsOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSecurityGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSubnets {
  /**
  * id of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSubnetsToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSubnetsToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSubnetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSubnets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSubnetsOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancers {
  /**
  * AdditionalListeners sets the additional listeners for the control plane load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#additional_listeners DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#additional_listeners}
  */
  readonly additionalListeners?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersAdditionalListeners[] | cdktf.IResolvable;
  /**
  * backendPools defines the load balancer's backend pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#backend_pools DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#backend_pools}
  */
  readonly backendPools?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPools[] | cdktf.IResolvable;
  /**
  * id of the loadbalancer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name sets the name of the VPC load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * public indicates that load balancer is public or private
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#public DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#public}
  */
  readonly public?: boolean | cdktf.IResolvable;
  /**
  * securityGroups defines the Security Groups to attach to the load balancer. Security Groups defined here are expected to already exist when the load balancer is reconciled (these do not get created when reconciling the load balancer).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#security_groups DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#security_groups}
  */
  readonly securityGroups?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSecurityGroups[] | cdktf.IResolvable;
  /**
  * subnets defines the VPC Subnets to attach to the load balancer. Subnets defiens here are expected to already exist when the load balancer is reconciled (these do not get created when reconciling the load balancer).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#subnets DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#subnets}
  */
  readonly subnets?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSubnets[] | cdktf.IResolvable;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_listeners: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersAdditionalListenersToTerraform, false)(struct!.additionalListeners),
    backend_pools: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPoolsToTerraform, false)(struct!.backendPools),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    public: cdktf.booleanToTerraform(struct!.public),
    security_groups: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSecurityGroupsToTerraform, false)(struct!.securityGroups),
    subnets: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSubnetsToTerraform, false)(struct!.subnets),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_listeners: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersAdditionalListenersToHclTerraform, false)(struct!.additionalListeners),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersAdditionalListenersList",
    },
    backend_pools: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPoolsToHclTerraform, false)(struct!.backendPools),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPoolsList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    public: {
      value: cdktf.booleanToHclTerraform(struct!.public),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_groups: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSecurityGroupsToHclTerraform, false)(struct!.securityGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSecurityGroupsList",
    },
    subnets: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSubnetsToHclTerraform, false)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalListeners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalListeners = this._additionalListeners?.internalValue;
    }
    if (this._backendPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendPools = this._backendPools?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._public !== undefined) {
      hasAnyValues = true;
      internalValueResult.public = this._public;
    }
    if (this._securityGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups?.internalValue;
    }
    if (this._subnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalListeners.internalValue = undefined;
      this._backendPools.internalValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._public = undefined;
      this._securityGroups.internalValue = undefined;
      this._subnets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalListeners.internalValue = value.additionalListeners;
      this._backendPools.internalValue = value.backendPools;
      this._id = value.id;
      this._name = value.name;
      this._public = value.public;
      this._securityGroups.internalValue = value.securityGroups;
      this._subnets.internalValue = value.subnets;
    }
  }

  // additional_listeners - computed: false, optional: true, required: false
  private _additionalListeners = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersAdditionalListenersList(this, "additional_listeners", false);
  public get additionalListeners() {
    return this._additionalListeners;
  }
  public putAdditionalListeners(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersAdditionalListeners[] | cdktf.IResolvable) {
    this._additionalListeners.internalValue = value;
  }
  public resetAdditionalListeners() {
    this._additionalListeners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalListenersInput() {
    return this._additionalListeners.internalValue;
  }

  // backend_pools - computed: false, optional: true, required: false
  private _backendPools = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPoolsList(this, "backend_pools", false);
  public get backendPools() {
    return this._backendPools;
  }
  public putBackendPools(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersBackendPools[] | cdktf.IResolvable) {
    this._backendPools.internalValue = value;
  }
  public resetBackendPools() {
    this._backendPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPoolsInput() {
    return this._backendPools.internalValue;
  }

  // id - computed: false, optional: true, required: false
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

  // public - computed: false, optional: true, required: false
  private _public?: boolean | cdktf.IResolvable; 
  public get public() {
    return this.getBooleanAttribute('public');
  }
  public set public(value: boolean | cdktf.IResolvable) {
    this._public = value;
  }
  public resetPublic() {
    this._public = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSecurityGroupsList(this, "security_groups", false);
  public get securityGroups() {
    return this._securityGroups;
  }
  public putSecurityGroups(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSecurityGroups[] | cdktf.IResolvable) {
    this._securityGroups.internalValue = value;
  }
  public resetSecurityGroups() {
    this._securityGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups.internalValue;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  public resetSubnets() {
    this._subnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecNetwork {
  /**
  * ID of resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Regular expression to match resource, In case of multiple resources matches the provided regular expression the first matched resource will be selected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#regex DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecNetworkToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecNetworkToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._regex = value.regex;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecResourceGroup {
  /**
  * ID of resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Regular expression to match resource, In case of multiple resources matches the provided regular expression the first matched resource will be selected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#regex DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecResourceGroupToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecResourceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecResourceGroupToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecResourceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecResourceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecResourceGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecResourceGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._regex = value.regex;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecServiceInstance {
  /**
  * ID of resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Regular expression to match resource, In case of multiple resources matches the provided regular expression the first matched resource will be selected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#regex DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecServiceInstanceToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecServiceInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecServiceInstanceToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecServiceInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecServiceInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecServiceInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecServiceInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._regex = value.regex;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecTransitGateway {
  /**
  * globalRouting indicates whether to set global routing true or not while creating the transit gateway. set this field to true only when PowerVS and VPC are from different regions, if they are same it's suggested to use local routing by setting the field to false. when the field is omitted, based on PowerVS region (region associated with IBMPowerVSCluster.Spec.Zone) and VPC region(IBMPowerVSCluster.Spec.VPC.Region) system will decide whether to enable globalRouting or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#global_routing DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#global_routing}
  */
  readonly globalRouting?: boolean | cdktf.IResolvable;
  /**
  * id of resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecTransitGatewayToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecTransitGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_routing: cdktf.booleanToTerraform(struct!.globalRouting),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecTransitGatewayToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecTransitGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_routing: {
      value: cdktf.booleanToHclTerraform(struct!.globalRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecTransitGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecTransitGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalRouting = this._globalRouting;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecTransitGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._globalRouting = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._globalRouting = value.globalRouting;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // global_routing - computed: false, optional: true, required: false
  private _globalRouting?: boolean | cdktf.IResolvable; 
  public get globalRouting() {
    return this.getBooleanAttribute('global_routing');
  }
  public set globalRouting(value: boolean | cdktf.IResolvable) {
    this._globalRouting = value;
  }
  public resetGlobalRouting() {
    this._globalRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalRoutingInput() {
    return this._globalRouting;
  }

  // id - computed: false, optional: true, required: false
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
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpc {
  /**
  * id of resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * region of IBM Cloud VPC. when powervs.cluster.x-k8s.io/create-infra=true annotation is set on IBMPowerVSCluster resource, it is expected to set the region, not setting will result in webhook error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#region DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#region}
  */
  readonly region?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._region = value.region;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationPortRange {
  /**
  * maximumPort is the inclusive upper range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#maximum_port DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#maximum_port}
  */
  readonly maximumPort?: number;
  /**
  * minimumPort is the inclusive lower range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#minimum_port DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#minimum_port}
  */
  readonly minimumPort?: number;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationPortRangeToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_port: cdktf.numberToTerraform(struct!.maximumPort),
    minimum_port: cdktf.numberToTerraform(struct!.minimumPort),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationPortRangeToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_port: {
      value: cdktf.numberToHclTerraform(struct!.maximumPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_port: {
      value: cdktf.numberToHclTerraform(struct!.minimumPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationPortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationPortRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPort = this._maximumPort;
    }
    if (this._minimumPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumPort = this._minimumPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationPortRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumPort = undefined;
      this._minimumPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumPort = value.maximumPort;
      this._minimumPort = value.minimumPort;
    }
  }

  // maximum_port - computed: false, optional: true, required: false
  private _maximumPort?: number; 
  public get maximumPort() {
    return this.getNumberAttribute('maximum_port');
  }
  public set maximumPort(value: number) {
    this._maximumPort = value;
  }
  public resetMaximumPort() {
    this._maximumPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPortInput() {
    return this._maximumPort;
  }

  // minimum_port - computed: false, optional: true, required: false
  private _minimumPort?: number; 
  public get minimumPort() {
    return this.getNumberAttribute('minimum_port');
  }
  public set minimumPort(value: number) {
    this._minimumPort = value;
  }
  public resetMinimumPort() {
    this._minimumPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumPortInput() {
    return this._minimumPort;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationRemotes {
  /**
  *  address is the address to use for the remote's destination/source. Only used when remoteType is VPCSecurityGroupRuleRemoteTypeAddress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#address DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#address}
  */
  readonly address?: string;
  /**
  * cidrSubnetName is the name of the VPC Subnet to retrieve the CIDR from, to use for the remote's destination/source. Only used when remoteType is VPCSecurityGroupRuleRemoteTypeCIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#cidr_subnet_name DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#cidr_subnet_name}
  */
  readonly cidrSubnetName?: string;
  /**
  * remoteType defines the type of filter to define for the remote's destination/source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#remote_type DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#remote_type}
  */
  readonly remoteType: string;
  /**
  * securityGroupName is the name of the VPC Security Group to use for the remote's destination/source. Only used when remoteType is VPCSecurityGroupRuleRemoteTypeSG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#security_group_name DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#security_group_name}
  */
  readonly securityGroupName?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationRemotesToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationRemotes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    cidr_subnet_name: cdktf.stringToTerraform(struct!.cidrSubnetName),
    remote_type: cdktf.stringToTerraform(struct!.remoteType),
    security_group_name: cdktf.stringToTerraform(struct!.securityGroupName),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationRemotesToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationRemotes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr_subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.cidrSubnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_type: {
      value: cdktf.stringToHclTerraform(struct!.remoteType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_name: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationRemotesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationRemotes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._cidrSubnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrSubnetName = this._cidrSubnetName;
    }
    if (this._remoteType !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteType = this._remoteType;
    }
    if (this._securityGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupName = this._securityGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationRemotes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._cidrSubnetName = undefined;
      this._remoteType = undefined;
      this._securityGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._cidrSubnetName = value.cidrSubnetName;
      this._remoteType = value.remoteType;
      this._securityGroupName = value.securityGroupName;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // cidr_subnet_name - computed: false, optional: true, required: false
  private _cidrSubnetName?: string; 
  public get cidrSubnetName() {
    return this.getStringAttribute('cidr_subnet_name');
  }
  public set cidrSubnetName(value: string) {
    this._cidrSubnetName = value;
  }
  public resetCidrSubnetName() {
    this._cidrSubnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrSubnetNameInput() {
    return this._cidrSubnetName;
  }

  // remote_type - computed: false, optional: false, required: true
  private _remoteType?: string; 
  public get remoteType() {
    return this.getStringAttribute('remote_type');
  }
  public set remoteType(value: string) {
    this._remoteType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteTypeInput() {
    return this._remoteType;
  }

  // security_group_name - computed: false, optional: true, required: false
  private _securityGroupName?: string; 
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }
  public set securityGroupName(value: string) {
    this._securityGroupName = value;
  }
  public resetSecurityGroupName() {
    this._securityGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupNameInput() {
    return this._securityGroupName;
  }
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationRemotesList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationRemotes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationRemotesOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationRemotesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestination {
  /**
  * icmpCode is the ICMP code for the Rule. Only used when Protocol is VPCSecurityGroupRuleProtocolIcmp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#icmp_code DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#icmp_code}
  */
  readonly icmpCode?: number;
  /**
  * icmpType is the ICMP type for the Rule. Only used when Protocol is VPCSecurityGroupRuleProtocolIcmp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#icmp_type DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#icmp_type}
  */
  readonly icmpType?: number;
  /**
  * portRange is a range of ports allowed for the Rule's remote.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#port_range DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#port_range}
  */
  readonly portRange?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationPortRange;
  /**
  * protocol defines the traffic protocol used for the Security Group Rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#protocol DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#protocol}
  */
  readonly protocol: string;
  /**
  * remotes is a set of VPCSecurityGroupRuleRemote's that define the traffic allowed by the Rule's remote. Specifying multiple VPCSecurityGroupRuleRemote's creates a unique Security Group Rule with the shared Protocol, PortRange, etc. This allows for easier management of Security Group Rule's for sets of CIDR's, IP's, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#remotes DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#remotes}
  */
  readonly remotes: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationRemotes[] | cdktf.IResolvable;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_code: cdktf.numberToTerraform(struct!.icmpCode),
    icmp_type: cdktf.numberToTerraform(struct!.icmpType),
    port_range: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationPortRangeToTerraform(struct!.portRange),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    remotes: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationRemotesToTerraform, false)(struct!.remotes),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_code: {
      value: cdktf.numberToHclTerraform(struct!.icmpCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_type: {
      value: cdktf.numberToHclTerraform(struct!.icmpType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_range: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationPortRangeToHclTerraform(struct!.portRange),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationPortRange",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remotes: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationRemotesToHclTerraform, false)(struct!.remotes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationRemotesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCode = this._icmpCode;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    if (this._portRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange?.internalValue;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._remotes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remotes = this._remotes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmpCode = undefined;
      this._icmpType = undefined;
      this._portRange.internalValue = undefined;
      this._protocol = undefined;
      this._remotes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmpCode = value.icmpCode;
      this._icmpType = value.icmpType;
      this._portRange.internalValue = value.portRange;
      this._protocol = value.protocol;
      this._remotes.internalValue = value.remotes;
    }
  }

  // icmp_code - computed: false, optional: true, required: false
  private _icmpCode?: number; 
  public get icmpCode() {
    return this.getNumberAttribute('icmp_code');
  }
  public set icmpCode(value: number) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_type - computed: false, optional: true, required: false
  private _icmpType?: number; 
  public get icmpType() {
    return this.getNumberAttribute('icmp_type');
  }
  public set icmpType(value: number) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationPortRangeOutputReference(this, "port_range");
  public get portRange() {
    return this._portRange;
  }
  public putPortRange(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationPortRange) {
    this._portRange.internalValue = value;
  }
  public resetPortRange() {
    this._portRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange.internalValue;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // remotes - computed: false, optional: false, required: true
  private _remotes = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationRemotesList(this, "remotes", false);
  public get remotes() {
    return this._remotes;
  }
  public putRemotes(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationRemotes[] | cdktf.IResolvable) {
    this._remotes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remotesInput() {
    return this._remotes.internalValue;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourcePortRange {
  /**
  * maximumPort is the inclusive upper range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#maximum_port DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#maximum_port}
  */
  readonly maximumPort?: number;
  /**
  * minimumPort is the inclusive lower range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#minimum_port DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#minimum_port}
  */
  readonly minimumPort?: number;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourcePortRangeToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourcePortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_port: cdktf.numberToTerraform(struct!.maximumPort),
    minimum_port: cdktf.numberToTerraform(struct!.minimumPort),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourcePortRangeToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourcePortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_port: {
      value: cdktf.numberToHclTerraform(struct!.maximumPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_port: {
      value: cdktf.numberToHclTerraform(struct!.minimumPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourcePortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourcePortRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPort = this._maximumPort;
    }
    if (this._minimumPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumPort = this._minimumPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourcePortRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumPort = undefined;
      this._minimumPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumPort = value.maximumPort;
      this._minimumPort = value.minimumPort;
    }
  }

  // maximum_port - computed: false, optional: true, required: false
  private _maximumPort?: number; 
  public get maximumPort() {
    return this.getNumberAttribute('maximum_port');
  }
  public set maximumPort(value: number) {
    this._maximumPort = value;
  }
  public resetMaximumPort() {
    this._maximumPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPortInput() {
    return this._maximumPort;
  }

  // minimum_port - computed: false, optional: true, required: false
  private _minimumPort?: number; 
  public get minimumPort() {
    return this.getNumberAttribute('minimum_port');
  }
  public set minimumPort(value: number) {
    this._minimumPort = value;
  }
  public resetMinimumPort() {
    this._minimumPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumPortInput() {
    return this._minimumPort;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourceRemotes {
  /**
  *  address is the address to use for the remote's destination/source. Only used when remoteType is VPCSecurityGroupRuleRemoteTypeAddress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#address DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#address}
  */
  readonly address?: string;
  /**
  * cidrSubnetName is the name of the VPC Subnet to retrieve the CIDR from, to use for the remote's destination/source. Only used when remoteType is VPCSecurityGroupRuleRemoteTypeCIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#cidr_subnet_name DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#cidr_subnet_name}
  */
  readonly cidrSubnetName?: string;
  /**
  * remoteType defines the type of filter to define for the remote's destination/source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#remote_type DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#remote_type}
  */
  readonly remoteType: string;
  /**
  * securityGroupName is the name of the VPC Security Group to use for the remote's destination/source. Only used when remoteType is VPCSecurityGroupRuleRemoteTypeSG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#security_group_name DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#security_group_name}
  */
  readonly securityGroupName?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourceRemotesToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourceRemotes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    cidr_subnet_name: cdktf.stringToTerraform(struct!.cidrSubnetName),
    remote_type: cdktf.stringToTerraform(struct!.remoteType),
    security_group_name: cdktf.stringToTerraform(struct!.securityGroupName),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourceRemotesToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourceRemotes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr_subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.cidrSubnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_type: {
      value: cdktf.stringToHclTerraform(struct!.remoteType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_name: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourceRemotesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourceRemotes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._cidrSubnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrSubnetName = this._cidrSubnetName;
    }
    if (this._remoteType !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteType = this._remoteType;
    }
    if (this._securityGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupName = this._securityGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourceRemotes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._cidrSubnetName = undefined;
      this._remoteType = undefined;
      this._securityGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._cidrSubnetName = value.cidrSubnetName;
      this._remoteType = value.remoteType;
      this._securityGroupName = value.securityGroupName;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // cidr_subnet_name - computed: false, optional: true, required: false
  private _cidrSubnetName?: string; 
  public get cidrSubnetName() {
    return this.getStringAttribute('cidr_subnet_name');
  }
  public set cidrSubnetName(value: string) {
    this._cidrSubnetName = value;
  }
  public resetCidrSubnetName() {
    this._cidrSubnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrSubnetNameInput() {
    return this._cidrSubnetName;
  }

  // remote_type - computed: false, optional: false, required: true
  private _remoteType?: string; 
  public get remoteType() {
    return this.getStringAttribute('remote_type');
  }
  public set remoteType(value: string) {
    this._remoteType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteTypeInput() {
    return this._remoteType;
  }

  // security_group_name - computed: false, optional: true, required: false
  private _securityGroupName?: string; 
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }
  public set securityGroupName(value: string) {
    this._securityGroupName = value;
  }
  public resetSecurityGroupName() {
    this._securityGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupNameInput() {
    return this._securityGroupName;
  }
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourceRemotesList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourceRemotes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourceRemotesOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourceRemotesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSource {
  /**
  * icmpCode is the ICMP code for the Rule. Only used when Protocol is VPCSecurityGroupRuleProtocolIcmp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#icmp_code DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#icmp_code}
  */
  readonly icmpCode?: number;
  /**
  * icmpType is the ICMP type for the Rule. Only used when Protocol is VPCSecurityGroupRuleProtocolIcmp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#icmp_type DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#icmp_type}
  */
  readonly icmpType?: number;
  /**
  * portRange is a range of ports allowed for the Rule's remote.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#port_range DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#port_range}
  */
  readonly portRange?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourcePortRange;
  /**
  * protocol defines the traffic protocol used for the Security Group Rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#protocol DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#protocol}
  */
  readonly protocol: string;
  /**
  * remotes is a set of VPCSecurityGroupRuleRemote's that define the traffic allowed by the Rule's remote. Specifying multiple VPCSecurityGroupRuleRemote's creates a unique Security Group Rule with the shared Protocol, PortRange, etc. This allows for easier management of Security Group Rule's for sets of CIDR's, IP's, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#remotes DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#remotes}
  */
  readonly remotes: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourceRemotes[] | cdktf.IResolvable;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourceToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_code: cdktf.numberToTerraform(struct!.icmpCode),
    icmp_type: cdktf.numberToTerraform(struct!.icmpType),
    port_range: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourcePortRangeToTerraform(struct!.portRange),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    remotes: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourceRemotesToTerraform, false)(struct!.remotes),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourceToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_code: {
      value: cdktf.numberToHclTerraform(struct!.icmpCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_type: {
      value: cdktf.numberToHclTerraform(struct!.icmpType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_range: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourcePortRangeToHclTerraform(struct!.portRange),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourcePortRange",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remotes: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourceRemotesToHclTerraform, false)(struct!.remotes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourceRemotesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCode = this._icmpCode;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    if (this._portRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange?.internalValue;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._remotes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remotes = this._remotes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmpCode = undefined;
      this._icmpType = undefined;
      this._portRange.internalValue = undefined;
      this._protocol = undefined;
      this._remotes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmpCode = value.icmpCode;
      this._icmpType = value.icmpType;
      this._portRange.internalValue = value.portRange;
      this._protocol = value.protocol;
      this._remotes.internalValue = value.remotes;
    }
  }

  // icmp_code - computed: false, optional: true, required: false
  private _icmpCode?: number; 
  public get icmpCode() {
    return this.getNumberAttribute('icmp_code');
  }
  public set icmpCode(value: number) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_type - computed: false, optional: true, required: false
  private _icmpType?: number; 
  public get icmpType() {
    return this.getNumberAttribute('icmp_type');
  }
  public set icmpType(value: number) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourcePortRangeOutputReference(this, "port_range");
  public get portRange() {
    return this._portRange;
  }
  public putPortRange(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourcePortRange) {
    this._portRange.internalValue = value;
  }
  public resetPortRange() {
    this._portRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange.internalValue;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // remotes - computed: false, optional: false, required: true
  private _remotes = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourceRemotesList(this, "remotes", false);
  public get remotes() {
    return this._remotes;
  }
  public putRemotes(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourceRemotes[] | cdktf.IResolvable) {
    this._remotes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remotesInput() {
    return this._remotes.internalValue;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRules {
  /**
  * action defines whether to allow or deny traffic defined by the Security Group Rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#action DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#action}
  */
  readonly action: string;
  /**
  * destination is a VPCSecurityGroupRulePrototype which defines the destination of outbound traffic for the Security Group Rule. Only used when direction is VPCSecurityGroupRuleDirectionOutbound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#destination DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#destination}
  */
  readonly destination?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestination;
  /**
  * direction defines whether the traffic is inbound or outbound for the Security Group Rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#direction DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#direction}
  */
  readonly direction: string;
  /**
  * securityGroupID is the ID of the Security Group for the Security Group Rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#security_group_id DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * source is a VPCSecurityGroupRulePrototype which defines the source of inbound traffic for the Security Group Rule. Only used when direction is VPCSecurityGroupRuleDirectionInbound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#source DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#source}
  */
  readonly source?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSource;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    destination: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationToTerraform(struct!.destination),
    direction: cdktf.stringToTerraform(struct!.direction),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    source: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourceToTerraform(struct!.source),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestination",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._securityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupId = this._securityGroupId;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._destination.internalValue = undefined;
      this._direction = undefined;
      this._securityGroupId = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._destination.internalValue = value.destination;
      this._direction = value.direction;
      this._securityGroupId = value.securityGroupId;
      this._source.internalValue = value.source;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // security_group_id - computed: false, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // source - computed: false, optional: true, required: false
  private _source = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroups {
  /**
  * id of the Security Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of the Security Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * rules are the Security Group Rules for the Security Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#rules DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#rules}
  */
  readonly rules?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRules[] | cdktf.IResolvable;
  /**
  * tags are tags to add to the Security Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#tags DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#tags}
  */
  readonly tags?: string[];
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    rules: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesToTerraform, false)(struct!.rules),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    rules: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesList",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._rules.internalValue = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._rules.internalValue = value.rules;
      this._tags = value.tags;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#cidr DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#zone DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#zone}
  */
  readonly zone?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSubnetsToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSubnetsToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._id = undefined;
      this._name = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._id = value.id;
      this._name = value.name;
      this._zone = value.zone;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // id - computed: false, optional: true, required: false
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

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSubnetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSubnets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSubnetsOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpec {
  /**
  * ControlPlaneEndpoint represents the endpoint used to communicate with the control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#control_plane_endpoint DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#control_plane_endpoint}
  */
  readonly controlPlaneEndpoint?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecControlPlaneEndpoint;
  /**
  * cosInstance contains options to configure a supporting IBM Cloud COS bucket for this cluster - currently used for nodes requiring Ignition (https://coreos.github.io/ignition/) for bootstrapping (requires BootstrapFormatIgnition feature flag to be enabled). when powervs.cluster.x-k8s.io/create-infra=true annotation is set on IBMPowerVSCluster resource and Ignition is set, then 1. CosInstance.Name should be set not setting will result in webhook error. 2. CosInstance.BucketName should be set not setting will result in webhook error. 3. CosInstance.BucketRegion should be set not setting will result in webhook error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#cos_instance DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#cos_instance}
  */
  readonly cosInstance?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecCosInstance;
  /**
  * dhcpServer is contains the configuration to be used while creating a new DHCP server in PowerVS workspace. when the field is omitted, CLUSTER_NAME will be used as DHCPServer.Name and DHCP server will be created. it will automatically create network with name DHCPSERVER<DHCPServer.Name>_Private in PowerVS workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#dhcp_server DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#dhcp_server}
  */
  readonly dhcpServer?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecDhcpServer;
  /**
  * Ignition defined options related to the bootstrapping systems where Ignition is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#ignition DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#ignition}
  */
  readonly ignition?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecIgnition;
  /**
  * loadBalancers is optional configuration for configuring loadbalancers to control plane or data plane nodes. when omitted system will create a default public loadbalancer with name CLUSTER_NAME-loadbalancer. when specified a vpc loadbalancer will be created and controlPlaneEndpoint will be set with associated hostname of loadbalancer. ControlPlaneEndpoint will be set with associated hostname of public loadbalancer. when LoadBalancers[].ID is set, its expected that there exist a loadbalancer with ID or else system will give error. when LoadBalancers[].Name is set, system will first check for loadbalancer with Name, if not exist system will create new loadbalancer. For each loadbalancer a default backed pool and front listener will be configured with port 6443.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#load_balancers DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#load_balancers}
  */
  readonly loadBalancers?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancers[] | cdktf.IResolvable;
  /**
  * Network is the reference to the Network to use for this cluster. when the field is omitted, A DHCP service will be created in the Power VS workspace and its private network will be used. the DHCP service created network will have the following name format 1. in the case of DHCPServer.Name is not set the name will be DHCPSERVER<CLUSTER_NAME>_Private. 2. if DHCPServer.Name is set the name will be DHCPSERVER<DHCPServer.Name>_Private. when Network.ID is set, its expected that there exist a network in PowerVS workspace with id or else system will give error. when Network.Name is set, system will first check for network with Name in PowerVS workspace, if not exist network will be created by DHCP service. Network.RegEx is not yet supported and system will ignore the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#network DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#network}
  */
  readonly network: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecNetwork;
  /**
  * resourceGroup name under which the resources will be created. when powervs.cluster.x-k8s.io/create-infra=true annotation is set on IBMPowerVSCluster resource, 1. it is expected to set the ResourceGroup.Name, not setting will result in webhook error. ResourceGroup.ID and ResourceGroup.Regex is not yet supported and system will ignore the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#resource_group DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#resource_group}
  */
  readonly resourceGroup?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecResourceGroup;
  /**
  * serviceInstance is the reference to the Power VS server workspace on which the server instance(VM) will be created. Power VS server workspace is a container for all Power VS instances at a specific geographic region. serviceInstance can be created via IBM Cloud catalog or CLI. supported serviceInstance identifier in PowerVSResource are Name and ID and that can be obtained from IBM Cloud UI or IBM Cloud cli. More detail about Power VS service instance. https://cloud.ibm.com/docs/power-iaas?topic=power-iaas-creating-power-virtual-server when omitted system will dynamically create the service instance with name CLUSTER_NAME-serviceInstance. when ServiceInstance.ID is set, its expected that there exist a service instance in PowerVS workspace with id or else system will give error. when ServiceInstance.Name is set, system will first check for service instance with Name in PowerVS workspace, if not exist system will create new instance. if there are more than one service instance exist with the ServiceInstance.Name in given Zone, installation fails with an error. Use ServiceInstance.ID in those situations to use the specific service instance. ServiceInstance.Regex is not yet supported not yet supported and system will ignore the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#service_instance DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#service_instance}
  */
  readonly serviceInstance?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecServiceInstance;
  /**
  * ServiceInstanceID is the id of the power cloud instance where the vsi instance will get deployed. Deprecated: use ServiceInstance instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#service_instance_id DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#service_instance_id}
  */
  readonly serviceInstanceId: string;
  /**
  * transitGateway contains information about IBM Cloud TransitGateway IBM Cloud TransitGateway helps in establishing network connectivity between IBM Cloud Power VS and VPC infrastructure more information about TransitGateway can be found here https://www.ibm.com/products/transit-gateway. when TransitGateway.ID is set, its expected that there exist a TransitGateway with ID or else system will give error. when TransitGateway.Name is set, system will first check for TransitGateway with Name, if not exist system will create new TransitGateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#transit_gateway DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#transit_gateway}
  */
  readonly transitGateway?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecTransitGateway;
  /**
  * vpc contains information about IBM Cloud VPC resources. when omitted system will dynamically create the VPC with name CLUSTER_NAME-vpc. when VPC.ID is set, its expected that there exist a VPC with ID or else system will give error. when VPC.Name is set, system will first check for VPC with Name, if not exist system will create new VPC. when powervs.cluster.x-k8s.io/create-infra=true annotation is set on IBMPowerVSCluster resource, 1. it is expected to set the VPC.Region, not setting will result in webhook error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#vpc DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#vpc}
  */
  readonly vpc?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpc;
  /**
  * VPCSecurityGroups to attach it to the VPC resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#vpc_security_groups DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#vpc_security_groups}
  */
  readonly vpcSecurityGroups?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroups[] | cdktf.IResolvable;
  /**
  * vpcSubnets contains information about IBM Cloud VPC Subnet resources. when omitted system will create the subnets in all the zone corresponding to VPC.Region, with name CLUSTER_NAME-vpcsubnet-ZONE_NAME. possible values can be found here https://cloud.ibm.com/docs/power-iaas?topic=power-iaas-creating-power-virtual-server. when VPCSubnets[].ID is set, its expected that there exist a subnet with ID or else system will give error. when VPCSubnets[].Zone is not set, a random zone is picked from available zones of VPC.Region. when VPCSubnets[].Name is not set, system will set name as CLUSTER_NAME-vpcsubnet-INDEX. if subnet with name VPCSubnets[].Name not found, system will create new subnet in VPCSubnets[].Zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#vpc_subnets DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#vpc_subnets}
  */
  readonly vpcSubnets?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSubnets[] | cdktf.IResolvable;
  /**
  * zone is the name of Power VS zone where the cluster will be created possible values can be found here https://cloud.ibm.com/docs/power-iaas?topic=power-iaas-creating-power-virtual-server. when powervs.cluster.x-k8s.io/create-infra=true annotation is set on IBMPowerVSCluster resource, 1. it is expected to set the zone, not setting will result in webhook error. 2. the zone should have PER capabilities, or else system will give error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#zone DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#zone}
  */
  readonly zone?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane_endpoint: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecControlPlaneEndpointToTerraform(struct!.controlPlaneEndpoint),
    cos_instance: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecCosInstanceToTerraform(struct!.cosInstance),
    dhcp_server: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecDhcpServerToTerraform(struct!.dhcpServer),
    ignition: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecIgnitionToTerraform(struct!.ignition),
    load_balancers: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersToTerraform, false)(struct!.loadBalancers),
    network: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecNetworkToTerraform(struct!.network),
    resource_group: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecResourceGroupToTerraform(struct!.resourceGroup),
    service_instance: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecServiceInstanceToTerraform(struct!.serviceInstance),
    service_instance_id: cdktf.stringToTerraform(struct!.serviceInstanceId),
    transit_gateway: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecTransitGatewayToTerraform(struct!.transitGateway),
    vpc: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcToTerraform(struct!.vpc),
    vpc_security_groups: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsToTerraform, false)(struct!.vpcSecurityGroups),
    vpc_subnets: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSubnetsToTerraform, false)(struct!.vpcSubnets),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane_endpoint: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecControlPlaneEndpointToHclTerraform(struct!.controlPlaneEndpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecControlPlaneEndpoint",
    },
    cos_instance: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecCosInstanceToHclTerraform(struct!.cosInstance),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecCosInstance",
    },
    dhcp_server: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecDhcpServerToHclTerraform(struct!.dhcpServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecDhcpServer",
    },
    ignition: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecIgnitionToHclTerraform(struct!.ignition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecIgnition",
    },
    load_balancers: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersToHclTerraform, false)(struct!.loadBalancers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersList",
    },
    network: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecNetwork",
    },
    resource_group: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecResourceGroupToHclTerraform(struct!.resourceGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecResourceGroup",
    },
    service_instance: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecServiceInstanceToHclTerraform(struct!.serviceInstance),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecServiceInstance",
    },
    service_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transit_gateway: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecTransitGatewayToHclTerraform(struct!.transitGateway),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecTransitGateway",
    },
    vpc: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcToHclTerraform(struct!.vpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpc",
    },
    vpc_security_groups: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsToHclTerraform, false)(struct!.vpcSecurityGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsList",
    },
    vpc_subnets: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSubnetsToHclTerraform, false)(struct!.vpcSubnets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSubnetsList",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlaneEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneEndpoint = this._controlPlaneEndpoint?.internalValue;
    }
    if (this._cosInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosInstance = this._cosInstance?.internalValue;
    }
    if (this._dhcpServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServer = this._dhcpServer?.internalValue;
    }
    if (this._ignition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignition = this._ignition?.internalValue;
    }
    if (this._loadBalancers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancers = this._loadBalancers?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._resourceGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup?.internalValue;
    }
    if (this._serviceInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceInstance = this._serviceInstance?.internalValue;
    }
    if (this._serviceInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceInstanceId = this._serviceInstanceId;
    }
    if (this._transitGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitGateway = this._transitGateway?.internalValue;
    }
    if (this._vpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc?.internalValue;
    }
    if (this._vpcSecurityGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcSecurityGroups = this._vpcSecurityGroups?.internalValue;
    }
    if (this._vpcSubnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcSubnets = this._vpcSubnets?.internalValue;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controlPlaneEndpoint.internalValue = undefined;
      this._cosInstance.internalValue = undefined;
      this._dhcpServer.internalValue = undefined;
      this._ignition.internalValue = undefined;
      this._loadBalancers.internalValue = undefined;
      this._network.internalValue = undefined;
      this._resourceGroup.internalValue = undefined;
      this._serviceInstance.internalValue = undefined;
      this._serviceInstanceId = undefined;
      this._transitGateway.internalValue = undefined;
      this._vpc.internalValue = undefined;
      this._vpcSecurityGroups.internalValue = undefined;
      this._vpcSubnets.internalValue = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controlPlaneEndpoint.internalValue = value.controlPlaneEndpoint;
      this._cosInstance.internalValue = value.cosInstance;
      this._dhcpServer.internalValue = value.dhcpServer;
      this._ignition.internalValue = value.ignition;
      this._loadBalancers.internalValue = value.loadBalancers;
      this._network.internalValue = value.network;
      this._resourceGroup.internalValue = value.resourceGroup;
      this._serviceInstance.internalValue = value.serviceInstance;
      this._serviceInstanceId = value.serviceInstanceId;
      this._transitGateway.internalValue = value.transitGateway;
      this._vpc.internalValue = value.vpc;
      this._vpcSecurityGroups.internalValue = value.vpcSecurityGroups;
      this._vpcSubnets.internalValue = value.vpcSubnets;
      this._zone = value.zone;
    }
  }

  // control_plane_endpoint - computed: false, optional: true, required: false
  private _controlPlaneEndpoint = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecControlPlaneEndpointOutputReference(this, "control_plane_endpoint");
  public get controlPlaneEndpoint() {
    return this._controlPlaneEndpoint;
  }
  public putControlPlaneEndpoint(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecControlPlaneEndpoint) {
    this._controlPlaneEndpoint.internalValue = value;
  }
  public resetControlPlaneEndpoint() {
    this._controlPlaneEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneEndpointInput() {
    return this._controlPlaneEndpoint.internalValue;
  }

  // cos_instance - computed: false, optional: true, required: false
  private _cosInstance = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecCosInstanceOutputReference(this, "cos_instance");
  public get cosInstance() {
    return this._cosInstance;
  }
  public putCosInstance(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecCosInstance) {
    this._cosInstance.internalValue = value;
  }
  public resetCosInstance() {
    this._cosInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosInstanceInput() {
    return this._cosInstance.internalValue;
  }

  // dhcp_server - computed: false, optional: true, required: false
  private _dhcpServer = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecDhcpServerOutputReference(this, "dhcp_server");
  public get dhcpServer() {
    return this._dhcpServer;
  }
  public putDhcpServer(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecDhcpServer) {
    this._dhcpServer.internalValue = value;
  }
  public resetDhcpServer() {
    this._dhcpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerInput() {
    return this._dhcpServer.internalValue;
  }

  // ignition - computed: false, optional: true, required: false
  private _ignition = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecIgnitionOutputReference(this, "ignition");
  public get ignition() {
    return this._ignition;
  }
  public putIgnition(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecIgnition) {
    this._ignition.internalValue = value;
  }
  public resetIgnition() {
    this._ignition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignitionInput() {
    return this._ignition.internalValue;
  }

  // load_balancers - computed: false, optional: true, required: false
  private _loadBalancers = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancersList(this, "load_balancers", false);
  public get loadBalancers() {
    return this._loadBalancers;
  }
  public putLoadBalancers(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecLoadBalancers[] | cdktf.IResolvable) {
    this._loadBalancers.internalValue = value;
  }
  public resetLoadBalancers() {
    this._loadBalancers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancersInput() {
    return this._loadBalancers.internalValue;
  }

  // network - computed: false, optional: false, required: true
  private _network = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecNetwork) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecResourceGroupOutputReference(this, "resource_group");
  public get resourceGroup() {
    return this._resourceGroup;
  }
  public putResourceGroup(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecResourceGroup) {
    this._resourceGroup.internalValue = value;
  }
  public resetResourceGroup() {
    this._resourceGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup.internalValue;
  }

  // service_instance - computed: false, optional: true, required: false
  private _serviceInstance = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecServiceInstanceOutputReference(this, "service_instance");
  public get serviceInstance() {
    return this._serviceInstance;
  }
  public putServiceInstance(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecServiceInstance) {
    this._serviceInstance.internalValue = value;
  }
  public resetServiceInstance() {
    this._serviceInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInstanceInput() {
    return this._serviceInstance.internalValue;
  }

  // service_instance_id - computed: false, optional: false, required: true
  private _serviceInstanceId?: string; 
  public get serviceInstanceId() {
    return this.getStringAttribute('service_instance_id');
  }
  public set serviceInstanceId(value: string) {
    this._serviceInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInstanceIdInput() {
    return this._serviceInstanceId;
  }

  // transit_gateway - computed: false, optional: true, required: false
  private _transitGateway = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecTransitGatewayOutputReference(this, "transit_gateway");
  public get transitGateway() {
    return this._transitGateway;
  }
  public putTransitGateway(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecTransitGateway) {
    this._transitGateway.internalValue = value;
  }
  public resetTransitGateway() {
    this._transitGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayInput() {
    return this._transitGateway.internalValue;
  }

  // vpc - computed: false, optional: true, required: false
  private _vpc = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcOutputReference(this, "vpc");
  public get vpc() {
    return this._vpc;
  }
  public putVpc(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpc) {
    this._vpc.internalValue = value;
  }
  public resetVpc() {
    this._vpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc.internalValue;
  }

  // vpc_security_groups - computed: false, optional: true, required: false
  private _vpcSecurityGroups = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroupsList(this, "vpc_security_groups", false);
  public get vpcSecurityGroups() {
    return this._vpcSecurityGroups;
  }
  public putVpcSecurityGroups(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSecurityGroups[] | cdktf.IResolvable) {
    this._vpcSecurityGroups.internalValue = value;
  }
  public resetVpcSecurityGroups() {
    this._vpcSecurityGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSecurityGroupsInput() {
    return this._vpcSecurityGroups.internalValue;
  }

  // vpc_subnets - computed: false, optional: true, required: false
  private _vpcSubnets = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSubnetsList(this, "vpc_subnets", false);
  public get vpcSubnets() {
    return this._vpcSubnets;
  }
  public putVpcSubnets(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecVpcSubnets[] | cdktf.IResolvable) {
    this._vpcSubnets.internalValue = value;
  }
  public resetVpcSubnets() {
    this._vpcSubnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSubnetsInput() {
    return this._vpcSubnets.internalValue;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplate {
  /**
  * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#metadata DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#metadata}
  */
  readonly metadata?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateMetadata;
  /**
  * IBMPowerVSClusterSpec defines the desired state of IBMPowerVSCluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#spec DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#spec}
  */
  readonly spec: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpec;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateMetadataToTerraform(struct!.metadata),
    spec: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateMetadata",
    },
    spec: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpec {
  /**
  * IBMPowerVSClusterTemplateResource describes the data needed to create an IBMPowerVSCluster from a template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#template DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest#template}
  */
  readonly template: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplate;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template.internalValue = value.template;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest k8s_infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest}
*/
export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest k8s_infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_infrastructure_cluster_x_k8s_io_ibm_power_vs_cluster_template_v1beta2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
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
  private _metadata = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpec) {
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
      metadata: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsClusterTemplateV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
