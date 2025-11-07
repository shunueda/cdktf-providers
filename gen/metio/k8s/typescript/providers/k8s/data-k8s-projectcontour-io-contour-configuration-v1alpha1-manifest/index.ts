// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#metadata DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestMetadata;
  /**
  * ContourConfigurationSpec represents a configuration of a Contour controller. It contains most of all the options that can be customized, the other remaining options being command line flags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#spec DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpec;
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#annotations DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#labels DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#name DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#namespace DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecDebug {
  /**
  * Defines the Contour debug address interface. Contour's default is '127.0.0.1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#address DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#address}
  */
  readonly address?: string;
  /**
  * Defines the Contour debug address port. Contour's default is 6060.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#port DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecDebugToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecDebug | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecDebugToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecDebug | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecDebugOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecDebug | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecDebug | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._port = value.port;
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
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClientCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#name DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#namespace DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClientCertificateToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClientCertificateToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClientCertificate | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClientCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClientCertificate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClientCertificate | cdktf.IResolvable | undefined) {
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
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterCircuitBreakers {
  /**
  * The maximum number of connections that a single Envoy instance allows to the Kubernetes Service; defaults to 1024.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#max_connections DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * The maximum number of pending requests that a single Envoy instance allows to the Kubernetes Service; defaults to 1024.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#max_pending_requests DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#max_pending_requests}
  */
  readonly maxPendingRequests?: number;
  /**
  * The maximum parallel requests a single Envoy instance allows to the Kubernetes Service; defaults to 1024
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#max_requests DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#max_requests}
  */
  readonly maxRequests?: number;
  /**
  * The maximum number of parallel retries a single Envoy instance allows to the Kubernetes Service; defaults to 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#max_retries DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * PerHostMaxConnections is the maximum number of connections that Envoy will allow to each individual host in a cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#per_host_max_connections DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#per_host_max_connections}
  */
  readonly perHostMaxConnections?: number;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterCircuitBreakersToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterCircuitBreakers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    per_host_max_connections: cdktf.numberToTerraform(struct!.perHostMaxConnections),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterCircuitBreakersToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterCircuitBreakers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_pending_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxPendingRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_host_max_connections: {
      value: cdktf.numberToHclTerraform(struct!.perHostMaxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterCircuitBreakersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterCircuitBreakers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._maxPendingRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPendingRequests = this._maxPendingRequests;
    }
    if (this._maxRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequests = this._maxRequests;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._perHostMaxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.perHostMaxConnections = this._perHostMaxConnections;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterCircuitBreakers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConnections = undefined;
      this._maxPendingRequests = undefined;
      this._maxRequests = undefined;
      this._maxRetries = undefined;
      this._perHostMaxConnections = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxConnections = value.maxConnections;
      this._maxPendingRequests = value.maxPendingRequests;
      this._maxRequests = value.maxRequests;
      this._maxRetries = value.maxRetries;
      this._perHostMaxConnections = value.perHostMaxConnections;
    }
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_pending_requests - computed: false, optional: true, required: false
  private _maxPendingRequests?: number; 
  public get maxPendingRequests() {
    return this.getNumberAttribute('max_pending_requests');
  }
  public set maxPendingRequests(value: number) {
    this._maxPendingRequests = value;
  }
  public resetMaxPendingRequests() {
    this._maxPendingRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPendingRequestsInput() {
    return this._maxPendingRequests;
  }

  // max_requests - computed: false, optional: true, required: false
  private _maxRequests?: number; 
  public get maxRequests() {
    return this.getNumberAttribute('max_requests');
  }
  public set maxRequests(value: number) {
    this._maxRequests = value;
  }
  public resetMaxRequests() {
    this._maxRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsInput() {
    return this._maxRequests;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // per_host_max_connections - computed: false, optional: true, required: false
  private _perHostMaxConnections?: number; 
  public get perHostMaxConnections() {
    return this.getNumberAttribute('per_host_max_connections');
  }
  public set perHostMaxConnections(value: number) {
    this._perHostMaxConnections = value;
  }
  public resetPerHostMaxConnections() {
    this._perHostMaxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perHostMaxConnectionsInput() {
    return this._perHostMaxConnections;
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterUpstreamTls {
  /**
  * CipherSuites defines the TLS ciphers to be supported by Envoy TLS listeners when negotiating TLS 1.2. Ciphers are validated against the set that Envoy supports by default. This parameter should only be used by advanced users. Note that these will be ignored when TLS 1.3 is in use. This field is optional; when it is undefined, a Contour-managed ciphersuite list will be used, which may be updated to keep it secure. Contour's default list is: - '[ECDHE-ECDSA-AES128-GCM-SHA256|ECDHE-ECDSA-CHACHA20-POLY1305]' - '[ECDHE-RSA-AES128-GCM-SHA256|ECDHE-RSA-CHACHA20-POLY1305]' - 'ECDHE-ECDSA-AES256-GCM-SHA384' - 'ECDHE-RSA-AES256-GCM-SHA384' Ciphers provided are validated against the following list: - '[ECDHE-ECDSA-AES128-GCM-SHA256|ECDHE-ECDSA-CHACHA20-POLY1305]' - '[ECDHE-RSA-AES128-GCM-SHA256|ECDHE-RSA-CHACHA20-POLY1305]' - 'ECDHE-ECDSA-AES128-GCM-SHA256' - 'ECDHE-RSA-AES128-GCM-SHA256' - 'ECDHE-ECDSA-AES128-SHA' - 'ECDHE-RSA-AES128-SHA' - 'AES128-GCM-SHA256' - 'AES128-SHA' - 'ECDHE-ECDSA-AES256-GCM-SHA384' - 'ECDHE-RSA-AES256-GCM-SHA384' - 'ECDHE-ECDSA-AES256-SHA' - 'ECDHE-RSA-AES256-SHA' - 'AES256-GCM-SHA384' - 'AES256-SHA' Contour recommends leaving this undefined unless you are sure you must. See: https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/transport_sockets/tls/v3/common.proto#extensions-transport-sockets-tls-v3-tlsparameters Note: This list is a superset of what is valid for stock Envoy builds and those using BoringSSL FIPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#cipher_suites DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#cipher_suites}
  */
  readonly cipherSuites?: string[];
  /**
  * MaximumProtocolVersion is the maximum TLS version this vhost should negotiate. Values: '1.2', '1.3'(default). Other values will produce an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#maximum_protocol_version DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#maximum_protocol_version}
  */
  readonly maximumProtocolVersion?: string;
  /**
  * MinimumProtocolVersion is the minimum TLS version this vhost should negotiate. Values: '1.2' (default), '1.3'. Other values will produce an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#minimum_protocol_version DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#minimum_protocol_version}
  */
  readonly minimumProtocolVersion?: string;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterUpstreamTlsToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterUpstreamTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    maximum_protocol_version: cdktf.stringToTerraform(struct!.maximumProtocolVersion),
    minimum_protocol_version: cdktf.stringToTerraform(struct!.minimumProtocolVersion),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterUpstreamTlsToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterUpstreamTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    maximum_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.maximumProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.minimumProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterUpstreamTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterUpstreamTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._maximumProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumProtocolVersion = this._maximumProtocolVersion;
    }
    if (this._minimumProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumProtocolVersion = this._minimumProtocolVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterUpstreamTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cipherSuites = undefined;
      this._maximumProtocolVersion = undefined;
      this._minimumProtocolVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cipherSuites = value.cipherSuites;
      this._maximumProtocolVersion = value.maximumProtocolVersion;
      this._minimumProtocolVersion = value.minimumProtocolVersion;
    }
  }

  // cipher_suites - computed: false, optional: true, required: false
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  public resetCipherSuites() {
    this._cipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // maximum_protocol_version - computed: false, optional: true, required: false
  private _maximumProtocolVersion?: string; 
  public get maximumProtocolVersion() {
    return this.getStringAttribute('maximum_protocol_version');
  }
  public set maximumProtocolVersion(value: string) {
    this._maximumProtocolVersion = value;
  }
  public resetMaximumProtocolVersion() {
    this._maximumProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumProtocolVersionInput() {
    return this._maximumProtocolVersion;
  }

  // minimum_protocol_version - computed: false, optional: true, required: false
  private _minimumProtocolVersion?: string; 
  public get minimumProtocolVersion() {
    return this.getStringAttribute('minimum_protocol_version');
  }
  public set minimumProtocolVersion(value: string) {
    this._minimumProtocolVersion = value;
  }
  public resetMinimumProtocolVersion() {
    this._minimumProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumProtocolVersionInput() {
    return this._minimumProtocolVersion;
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyCluster {
  /**
  * GlobalCircuitBreakerDefaults specifies default circuit breaker budget across all services. If defined, this will be used as the default for all services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#circuit_breakers DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#circuit_breakers}
  */
  readonly circuitBreakers?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterCircuitBreakers;
  /**
  * DNSLookupFamily defines how external names are looked up When configured as V4, the DNS resolver will only perform a lookup for addresses in the IPv4 family. If V6 is configured, the DNS resolver will only perform a lookup for addresses in the IPv6 family. If AUTO is configured, the DNS resolver will first perform a lookup for addresses in the IPv6 family and fallback to a lookup for addresses in the IPv4 family. If ALL is specified, the DNS resolver will perform a lookup for both IPv4 and IPv6 families, and return all resolved addresses. When this is used, Happy Eyeballs will be enabled for upstream connections. Refer to Happy Eyeballs Support for more information. Note: This only applies to externalName clusters. See https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto.html#envoy-v3-api-enum-config-cluster-v3-cluster-dnslookupfamily for more information. Values: 'auto' (default), 'v4', 'v6', 'all'. Other values will produce an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#dns_lookup_family DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#dns_lookup_family}
  */
  readonly dnsLookupFamily?: string;
  /**
  * Defines the maximum requests for upstream connections. If not specified, there is no limit. see https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/protocol.proto#envoy-v3-api-msg-config-core-v3-httpprotocoloptions for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#max_requests_per_connection DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#max_requests_per_connection}
  */
  readonly maxRequestsPerConnection?: number;
  /**
  * Defines the soft limit on size of the cluster’s new connection read and write buffers in bytes. If unspecified, an implementation defined default is applied (1MiB). see https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-field-config-cluster-v3-cluster-per-connection-buffer-limit-bytes for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#per_connection_buffer_limit_bytes DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#per_connection_buffer_limit_bytes}
  */
  readonly perConnectionBufferLimitBytes?: number;
  /**
  * UpstreamTLS contains the TLS policy parameters for upstream connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#upstream_tls DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#upstream_tls}
  */
  readonly upstreamTls?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterUpstreamTls;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    circuit_breakers: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterCircuitBreakersToTerraform(struct!.circuitBreakers),
    dns_lookup_family: cdktf.stringToTerraform(struct!.dnsLookupFamily),
    max_requests_per_connection: cdktf.numberToTerraform(struct!.maxRequestsPerConnection),
    per_connection_buffer_limit_bytes: cdktf.numberToTerraform(struct!.perConnectionBufferLimitBytes),
    upstream_tls: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterUpstreamTlsToTerraform(struct!.upstreamTls),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    circuit_breakers: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterCircuitBreakersToHclTerraform(struct!.circuitBreakers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterCircuitBreakers",
    },
    dns_lookup_family: {
      value: cdktf.stringToHclTerraform(struct!.dnsLookupFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_requests_per_connection: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestsPerConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_connection_buffer_limit_bytes: {
      value: cdktf.numberToHclTerraform(struct!.perConnectionBufferLimitBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upstream_tls: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterUpstreamTlsToHclTerraform(struct!.upstreamTls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterUpstreamTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._circuitBreakers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitBreakers = this._circuitBreakers?.internalValue;
    }
    if (this._dnsLookupFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsLookupFamily = this._dnsLookupFamily;
    }
    if (this._maxRequestsPerConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestsPerConnection = this._maxRequestsPerConnection;
    }
    if (this._perConnectionBufferLimitBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.perConnectionBufferLimitBytes = this._perConnectionBufferLimitBytes;
    }
    if (this._upstreamTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamTls = this._upstreamTls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._circuitBreakers.internalValue = undefined;
      this._dnsLookupFamily = undefined;
      this._maxRequestsPerConnection = undefined;
      this._perConnectionBufferLimitBytes = undefined;
      this._upstreamTls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._circuitBreakers.internalValue = value.circuitBreakers;
      this._dnsLookupFamily = value.dnsLookupFamily;
      this._maxRequestsPerConnection = value.maxRequestsPerConnection;
      this._perConnectionBufferLimitBytes = value.perConnectionBufferLimitBytes;
      this._upstreamTls.internalValue = value.upstreamTls;
    }
  }

  // circuit_breakers - computed: false, optional: true, required: false
  private _circuitBreakers = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterCircuitBreakersOutputReference(this, "circuit_breakers");
  public get circuitBreakers() {
    return this._circuitBreakers;
  }
  public putCircuitBreakers(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterCircuitBreakers) {
    this._circuitBreakers.internalValue = value;
  }
  public resetCircuitBreakers() {
    this._circuitBreakers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitBreakersInput() {
    return this._circuitBreakers.internalValue;
  }

  // dns_lookup_family - computed: false, optional: true, required: false
  private _dnsLookupFamily?: string; 
  public get dnsLookupFamily() {
    return this.getStringAttribute('dns_lookup_family');
  }
  public set dnsLookupFamily(value: string) {
    this._dnsLookupFamily = value;
  }
  public resetDnsLookupFamily() {
    this._dnsLookupFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsLookupFamilyInput() {
    return this._dnsLookupFamily;
  }

  // max_requests_per_connection - computed: false, optional: true, required: false
  private _maxRequestsPerConnection?: number; 
  public get maxRequestsPerConnection() {
    return this.getNumberAttribute('max_requests_per_connection');
  }
  public set maxRequestsPerConnection(value: number) {
    this._maxRequestsPerConnection = value;
  }
  public resetMaxRequestsPerConnection() {
    this._maxRequestsPerConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsPerConnectionInput() {
    return this._maxRequestsPerConnection;
  }

  // per_connection_buffer_limit_bytes - computed: false, optional: true, required: false
  private _perConnectionBufferLimitBytes?: number; 
  public get perConnectionBufferLimitBytes() {
    return this.getNumberAttribute('per_connection_buffer_limit_bytes');
  }
  public set perConnectionBufferLimitBytes(value: number) {
    this._perConnectionBufferLimitBytes = value;
  }
  public resetPerConnectionBufferLimitBytes() {
    this._perConnectionBufferLimitBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perConnectionBufferLimitBytesInput() {
    return this._perConnectionBufferLimitBytes;
  }

  // upstream_tls - computed: false, optional: true, required: false
  private _upstreamTls = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterUpstreamTlsOutputReference(this, "upstream_tls");
  public get upstreamTls() {
    return this._upstreamTls;
  }
  public putUpstreamTls(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterUpstreamTls) {
    this._upstreamTls.internalValue = value;
  }
  public resetUpstreamTls() {
    this._upstreamTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamTlsInput() {
    return this._upstreamTls.internalValue;
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHealth {
  /**
  * Defines the health address interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#address DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#address}
  */
  readonly address?: string;
  /**
  * Defines the health port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#port DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHealthToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHealth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHealthToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHealth | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHealth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHealth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._port = value.port;
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
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttp {
  /**
  * AccessLog defines where Envoy logs are outputted for this listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#access_log DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#access_log}
  */
  readonly accessLog?: string;
  /**
  * Defines an Envoy Listener Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#address DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#address}
  */
  readonly address?: string;
  /**
  * Defines an Envoy listener Port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#port DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttpToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_log: cdktf.stringToTerraform(struct!.accessLog),
    address: cdktf.stringToTerraform(struct!.address),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttpToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_log: {
      value: cdktf.stringToHclTerraform(struct!.accessLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
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

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLog = this._accessLog;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLog = undefined;
      this._address = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLog = value.accessLog;
      this._address = value.address;
      this._port = value.port;
    }
  }

  // access_log - computed: false, optional: true, required: false
  private _accessLog?: string; 
  public get accessLog() {
    return this.getStringAttribute('access_log');
  }
  public set accessLog(value: string) {
    this._accessLog = value;
  }
  public resetAccessLog() {
    this._accessLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogInput() {
    return this._accessLog;
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
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttps {
  /**
  * AccessLog defines where Envoy logs are outputted for this listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#access_log DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#access_log}
  */
  readonly accessLog?: string;
  /**
  * Defines an Envoy Listener Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#address DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#address}
  */
  readonly address?: string;
  /**
  * Defines an Envoy listener Port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#port DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttpsToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_log: cdktf.stringToTerraform(struct!.accessLog),
    address: cdktf.stringToTerraform(struct!.address),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttpsToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_log: {
      value: cdktf.stringToHclTerraform(struct!.accessLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
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

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLog = this._accessLog;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLog = undefined;
      this._address = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLog = value.accessLog;
      this._address = value.address;
      this._port = value.port;
    }
  }

  // access_log - computed: false, optional: true, required: false
  private _accessLog?: string; 
  public get accessLog() {
    return this.getStringAttribute('access_log');
  }
  public set accessLog(value: string) {
    this._accessLog = value;
  }
  public resetAccessLog() {
    this._accessLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogInput() {
    return this._accessLog;
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
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerSocketOptions {
  /**
  * Defines the value for IPv4 TOS field (including 6 bit DSCP field) for IP packets originating from Envoy listeners. Single value is applied to all listeners. If listeners are bound to IPv6-only addresses, setting this option will cause an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#tos DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#tos}
  */
  readonly tos?: number;
  /**
  * Defines the value for IPv6 Traffic Class field (including 6 bit DSCP field) for IP packets originating from the Envoy listeners. Single value is applied to all listeners. If listeners are bound to IPv4-only addresses, setting this option will cause an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#traffic_class DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#traffic_class}
  */
  readonly trafficClass?: number;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerSocketOptionsToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerSocketOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tos: cdktf.numberToTerraform(struct!.tos),
    traffic_class: cdktf.numberToTerraform(struct!.trafficClass),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerSocketOptionsToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerSocketOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tos: {
      value: cdktf.numberToHclTerraform(struct!.tos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traffic_class: {
      value: cdktf.numberToHclTerraform(struct!.trafficClass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerSocketOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerSocketOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tos !== undefined) {
      hasAnyValues = true;
      internalValueResult.tos = this._tos;
    }
    if (this._trafficClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficClass = this._trafficClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerSocketOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tos = undefined;
      this._trafficClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tos = value.tos;
      this._trafficClass = value.trafficClass;
    }
  }

  // tos - computed: false, optional: true, required: false
  private _tos?: number; 
  public get tos() {
    return this.getNumberAttribute('tos');
  }
  public set tos(value: number) {
    this._tos = value;
  }
  public resetTos() {
    this._tos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosInput() {
    return this._tos;
  }

  // traffic_class - computed: false, optional: true, required: false
  private _trafficClass?: number; 
  public get trafficClass() {
    return this.getNumberAttribute('traffic_class');
  }
  public set trafficClass(value: number) {
    this._trafficClass = value;
  }
  public resetTrafficClass() {
    this._trafficClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficClassInput() {
    return this._trafficClass;
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerTls {
  /**
  * CipherSuites defines the TLS ciphers to be supported by Envoy TLS listeners when negotiating TLS 1.2. Ciphers are validated against the set that Envoy supports by default. This parameter should only be used by advanced users. Note that these will be ignored when TLS 1.3 is in use. This field is optional; when it is undefined, a Contour-managed ciphersuite list will be used, which may be updated to keep it secure. Contour's default list is: - '[ECDHE-ECDSA-AES128-GCM-SHA256|ECDHE-ECDSA-CHACHA20-POLY1305]' - '[ECDHE-RSA-AES128-GCM-SHA256|ECDHE-RSA-CHACHA20-POLY1305]' - 'ECDHE-ECDSA-AES256-GCM-SHA384' - 'ECDHE-RSA-AES256-GCM-SHA384' Ciphers provided are validated against the following list: - '[ECDHE-ECDSA-AES128-GCM-SHA256|ECDHE-ECDSA-CHACHA20-POLY1305]' - '[ECDHE-RSA-AES128-GCM-SHA256|ECDHE-RSA-CHACHA20-POLY1305]' - 'ECDHE-ECDSA-AES128-GCM-SHA256' - 'ECDHE-RSA-AES128-GCM-SHA256' - 'ECDHE-ECDSA-AES128-SHA' - 'ECDHE-RSA-AES128-SHA' - 'AES128-GCM-SHA256' - 'AES128-SHA' - 'ECDHE-ECDSA-AES256-GCM-SHA384' - 'ECDHE-RSA-AES256-GCM-SHA384' - 'ECDHE-ECDSA-AES256-SHA' - 'ECDHE-RSA-AES256-SHA' - 'AES256-GCM-SHA384' - 'AES256-SHA' Contour recommends leaving this undefined unless you are sure you must. See: https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/transport_sockets/tls/v3/common.proto#extensions-transport-sockets-tls-v3-tlsparameters Note: This list is a superset of what is valid for stock Envoy builds and those using BoringSSL FIPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#cipher_suites DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#cipher_suites}
  */
  readonly cipherSuites?: string[];
  /**
  * MaximumProtocolVersion is the maximum TLS version this vhost should negotiate. Values: '1.2', '1.3'(default). Other values will produce an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#maximum_protocol_version DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#maximum_protocol_version}
  */
  readonly maximumProtocolVersion?: string;
  /**
  * MinimumProtocolVersion is the minimum TLS version this vhost should negotiate. Values: '1.2' (default), '1.3'. Other values will produce an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#minimum_protocol_version DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#minimum_protocol_version}
  */
  readonly minimumProtocolVersion?: string;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerTlsToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    maximum_protocol_version: cdktf.stringToTerraform(struct!.maximumProtocolVersion),
    minimum_protocol_version: cdktf.stringToTerraform(struct!.minimumProtocolVersion),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerTlsToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    maximum_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.maximumProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.minimumProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._maximumProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumProtocolVersion = this._maximumProtocolVersion;
    }
    if (this._minimumProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumProtocolVersion = this._minimumProtocolVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cipherSuites = undefined;
      this._maximumProtocolVersion = undefined;
      this._minimumProtocolVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cipherSuites = value.cipherSuites;
      this._maximumProtocolVersion = value.maximumProtocolVersion;
      this._minimumProtocolVersion = value.minimumProtocolVersion;
    }
  }

  // cipher_suites - computed: false, optional: true, required: false
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  public resetCipherSuites() {
    this._cipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // maximum_protocol_version - computed: false, optional: true, required: false
  private _maximumProtocolVersion?: string; 
  public get maximumProtocolVersion() {
    return this.getStringAttribute('maximum_protocol_version');
  }
  public set maximumProtocolVersion(value: string) {
    this._maximumProtocolVersion = value;
  }
  public resetMaximumProtocolVersion() {
    this._maximumProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumProtocolVersionInput() {
    return this._maximumProtocolVersion;
  }

  // minimum_protocol_version - computed: false, optional: true, required: false
  private _minimumProtocolVersion?: string; 
  public get minimumProtocolVersion() {
    return this.getStringAttribute('minimum_protocol_version');
  }
  public set minimumProtocolVersion(value: string) {
    this._minimumProtocolVersion = value;
  }
  public resetMinimumProtocolVersion() {
    this._minimumProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumProtocolVersionInput() {
    return this._minimumProtocolVersion;
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListener {
  /**
  * ConnectionBalancer. If the value is exact, the listener will use the exact connection balancer See https://www.envoyproxy.io/docs/envoy/latest/api-v2/api/v2/listener.proto#envoy-api-msg-listener-connectionbalanceconfig for more information. Values: (empty string): use the default ConnectionBalancer, 'exact': use the Exact ConnectionBalancer. Other values will produce an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#connection_balancer DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#connection_balancer}
  */
  readonly connectionBalancer?: string;
  /**
  * DisableAllowChunkedLength disables the RFC-compliant Envoy behavior to strip the 'Content-Length' header if 'Transfer-Encoding: chunked' is also set. This is an emergency off-switch to revert back to Envoy's default behavior in case of failures. Please file an issue if failures are encountered. See: https://github.com/projectcontour/contour/issues/3221 Contour's default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#disable_allow_chunked_length DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#disable_allow_chunked_length}
  */
  readonly disableAllowChunkedLength?: boolean | cdktf.IResolvable;
  /**
  * DisableMergeSlashes disables Envoy's non-standard merge_slashes path transformation option which strips duplicate slashes from request URL paths. Contour's default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#disable_merge_slashes DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#disable_merge_slashes}
  */
  readonly disableMergeSlashes?: boolean | cdktf.IResolvable;
  /**
  * Defines the value for SETTINGS_MAX_CONCURRENT_STREAMS Envoy will advertise in the SETTINGS frame in HTTP/2 connections and the limit for concurrent streams allowed for a peer on a single HTTP/2 connection. It is recommended to not set this lower than 100 but this field can be used to bound resource usage by HTTP/2 connections and mitigate attacks like CVE-2023-44487. The default value when this is not set is unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#http_max_concurrent_streams DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#http_max_concurrent_streams}
  */
  readonly httpMaxConcurrentStreams?: number;
  /**
  * Defines the limit on number of active connections to a listener. The limit is applied per listener. The default value when this is not set is unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#max_connections_per_listener DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#max_connections_per_listener}
  */
  readonly maxConnectionsPerListener?: number;
  /**
  * Defines the maximum requests for downstream connections. If not specified, there is no limit. see https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/protocol.proto#envoy-v3-api-msg-config-core-v3-httpprotocoloptions for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#max_requests_per_connection DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#max_requests_per_connection}
  */
  readonly maxRequestsPerConnection?: number;
  /**
  * Defines the limit on number of HTTP requests that Envoy will process from a single connection in a single I/O cycle. Requests over this limit are processed in subsequent I/O cycles. Can be used as a mitigation for CVE-2023-44487 when abusive traffic is detected. Configures the http.max_requests_per_io_cycle Envoy runtime setting. The default value when this is not set is no limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#max_requests_per_io_cycle DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#max_requests_per_io_cycle}
  */
  readonly maxRequestsPerIoCycle?: number;
  /**
  * Defines the soft limit on size of the listener’s new connection read and write buffers in bytes. If unspecified, an implementation defined default is applied (1MiB). see https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener.proto#envoy-v3-api-field-config-listener-v3-listener-per-connection-buffer-limit-bytes for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#per_connection_buffer_limit_bytes DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#per_connection_buffer_limit_bytes}
  */
  readonly perConnectionBufferLimitBytes?: number;
  /**
  * Defines the action to be applied to the Server header on the response path. When configured as overwrite, overwrites any Server header with 'envoy'. When configured as append_if_absent, if a Server header is present, pass it through, otherwise set it to 'envoy'. When configured as pass_through, pass through the value of the Server header, and do not append a header if none is present. Values: 'overwrite' (default), 'append_if_absent', 'pass_through' Other values will produce an error. Contour's default is overwrite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#server_header_transformation DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#server_header_transformation}
  */
  readonly serverHeaderTransformation?: string;
  /**
  * SocketOptions defines configurable socket options for the listeners. Single set of options are applied to all listeners.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#socket_options DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#socket_options}
  */
  readonly socketOptions?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerSocketOptions;
  /**
  * TLS holds various configurable Envoy TLS listener values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#tls DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerTls;
  /**
  * Use PROXY protocol for all listeners. Contour's default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#use_proxy_protocol DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#use_proxy_protocol}
  */
  readonly useProxyProtocol?: boolean | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_balancer: cdktf.stringToTerraform(struct!.connectionBalancer),
    disable_allow_chunked_length: cdktf.booleanToTerraform(struct!.disableAllowChunkedLength),
    disable_merge_slashes: cdktf.booleanToTerraform(struct!.disableMergeSlashes),
    http_max_concurrent_streams: cdktf.numberToTerraform(struct!.httpMaxConcurrentStreams),
    max_connections_per_listener: cdktf.numberToTerraform(struct!.maxConnectionsPerListener),
    max_requests_per_connection: cdktf.numberToTerraform(struct!.maxRequestsPerConnection),
    max_requests_per_io_cycle: cdktf.numberToTerraform(struct!.maxRequestsPerIoCycle),
    per_connection_buffer_limit_bytes: cdktf.numberToTerraform(struct!.perConnectionBufferLimitBytes),
    server_header_transformation: cdktf.stringToTerraform(struct!.serverHeaderTransformation),
    socket_options: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerSocketOptionsToTerraform(struct!.socketOptions),
    tls: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerTlsToTerraform(struct!.tls),
    use_proxy_protocol: cdktf.booleanToTerraform(struct!.useProxyProtocol),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_balancer: {
      value: cdktf.stringToHclTerraform(struct!.connectionBalancer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_allow_chunked_length: {
      value: cdktf.booleanToHclTerraform(struct!.disableAllowChunkedLength),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_merge_slashes: {
      value: cdktf.booleanToHclTerraform(struct!.disableMergeSlashes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_max_concurrent_streams: {
      value: cdktf.numberToHclTerraform(struct!.httpMaxConcurrentStreams),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_connections_per_listener: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectionsPerListener),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_requests_per_connection: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestsPerConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_requests_per_io_cycle: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestsPerIoCycle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_connection_buffer_limit_bytes: {
      value: cdktf.numberToHclTerraform(struct!.perConnectionBufferLimitBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_header_transformation: {
      value: cdktf.stringToHclTerraform(struct!.serverHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    socket_options: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerSocketOptionsToHclTerraform(struct!.socketOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerSocketOptions",
    },
    tls: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerTls",
    },
    use_proxy_protocol: {
      value: cdktf.booleanToHclTerraform(struct!.useProxyProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListener | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionBalancer !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionBalancer = this._connectionBalancer;
    }
    if (this._disableAllowChunkedLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAllowChunkedLength = this._disableAllowChunkedLength;
    }
    if (this._disableMergeSlashes !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableMergeSlashes = this._disableMergeSlashes;
    }
    if (this._httpMaxConcurrentStreams !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMaxConcurrentStreams = this._httpMaxConcurrentStreams;
    }
    if (this._maxConnectionsPerListener !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionsPerListener = this._maxConnectionsPerListener;
    }
    if (this._maxRequestsPerConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestsPerConnection = this._maxRequestsPerConnection;
    }
    if (this._maxRequestsPerIoCycle !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestsPerIoCycle = this._maxRequestsPerIoCycle;
    }
    if (this._perConnectionBufferLimitBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.perConnectionBufferLimitBytes = this._perConnectionBufferLimitBytes;
    }
    if (this._serverHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverHeaderTransformation = this._serverHeaderTransformation;
    }
    if (this._socketOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketOptions = this._socketOptions?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._useProxyProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.useProxyProtocol = this._useProxyProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListener | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionBalancer = undefined;
      this._disableAllowChunkedLength = undefined;
      this._disableMergeSlashes = undefined;
      this._httpMaxConcurrentStreams = undefined;
      this._maxConnectionsPerListener = undefined;
      this._maxRequestsPerConnection = undefined;
      this._maxRequestsPerIoCycle = undefined;
      this._perConnectionBufferLimitBytes = undefined;
      this._serverHeaderTransformation = undefined;
      this._socketOptions.internalValue = undefined;
      this._tls.internalValue = undefined;
      this._useProxyProtocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionBalancer = value.connectionBalancer;
      this._disableAllowChunkedLength = value.disableAllowChunkedLength;
      this._disableMergeSlashes = value.disableMergeSlashes;
      this._httpMaxConcurrentStreams = value.httpMaxConcurrentStreams;
      this._maxConnectionsPerListener = value.maxConnectionsPerListener;
      this._maxRequestsPerConnection = value.maxRequestsPerConnection;
      this._maxRequestsPerIoCycle = value.maxRequestsPerIoCycle;
      this._perConnectionBufferLimitBytes = value.perConnectionBufferLimitBytes;
      this._serverHeaderTransformation = value.serverHeaderTransformation;
      this._socketOptions.internalValue = value.socketOptions;
      this._tls.internalValue = value.tls;
      this._useProxyProtocol = value.useProxyProtocol;
    }
  }

  // connection_balancer - computed: false, optional: true, required: false
  private _connectionBalancer?: string; 
  public get connectionBalancer() {
    return this.getStringAttribute('connection_balancer');
  }
  public set connectionBalancer(value: string) {
    this._connectionBalancer = value;
  }
  public resetConnectionBalancer() {
    this._connectionBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionBalancerInput() {
    return this._connectionBalancer;
  }

  // disable_allow_chunked_length - computed: false, optional: true, required: false
  private _disableAllowChunkedLength?: boolean | cdktf.IResolvable; 
  public get disableAllowChunkedLength() {
    return this.getBooleanAttribute('disable_allow_chunked_length');
  }
  public set disableAllowChunkedLength(value: boolean | cdktf.IResolvable) {
    this._disableAllowChunkedLength = value;
  }
  public resetDisableAllowChunkedLength() {
    this._disableAllowChunkedLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAllowChunkedLengthInput() {
    return this._disableAllowChunkedLength;
  }

  // disable_merge_slashes - computed: false, optional: true, required: false
  private _disableMergeSlashes?: boolean | cdktf.IResolvable; 
  public get disableMergeSlashes() {
    return this.getBooleanAttribute('disable_merge_slashes');
  }
  public set disableMergeSlashes(value: boolean | cdktf.IResolvable) {
    this._disableMergeSlashes = value;
  }
  public resetDisableMergeSlashes() {
    this._disableMergeSlashes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableMergeSlashesInput() {
    return this._disableMergeSlashes;
  }

  // http_max_concurrent_streams - computed: false, optional: true, required: false
  private _httpMaxConcurrentStreams?: number; 
  public get httpMaxConcurrentStreams() {
    return this.getNumberAttribute('http_max_concurrent_streams');
  }
  public set httpMaxConcurrentStreams(value: number) {
    this._httpMaxConcurrentStreams = value;
  }
  public resetHttpMaxConcurrentStreams() {
    this._httpMaxConcurrentStreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMaxConcurrentStreamsInput() {
    return this._httpMaxConcurrentStreams;
  }

  // max_connections_per_listener - computed: false, optional: true, required: false
  private _maxConnectionsPerListener?: number; 
  public get maxConnectionsPerListener() {
    return this.getNumberAttribute('max_connections_per_listener');
  }
  public set maxConnectionsPerListener(value: number) {
    this._maxConnectionsPerListener = value;
  }
  public resetMaxConnectionsPerListener() {
    this._maxConnectionsPerListener = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsPerListenerInput() {
    return this._maxConnectionsPerListener;
  }

  // max_requests_per_connection - computed: false, optional: true, required: false
  private _maxRequestsPerConnection?: number; 
  public get maxRequestsPerConnection() {
    return this.getNumberAttribute('max_requests_per_connection');
  }
  public set maxRequestsPerConnection(value: number) {
    this._maxRequestsPerConnection = value;
  }
  public resetMaxRequestsPerConnection() {
    this._maxRequestsPerConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsPerConnectionInput() {
    return this._maxRequestsPerConnection;
  }

  // max_requests_per_io_cycle - computed: false, optional: true, required: false
  private _maxRequestsPerIoCycle?: number; 
  public get maxRequestsPerIoCycle() {
    return this.getNumberAttribute('max_requests_per_io_cycle');
  }
  public set maxRequestsPerIoCycle(value: number) {
    this._maxRequestsPerIoCycle = value;
  }
  public resetMaxRequestsPerIoCycle() {
    this._maxRequestsPerIoCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsPerIoCycleInput() {
    return this._maxRequestsPerIoCycle;
  }

  // per_connection_buffer_limit_bytes - computed: false, optional: true, required: false
  private _perConnectionBufferLimitBytes?: number; 
  public get perConnectionBufferLimitBytes() {
    return this.getNumberAttribute('per_connection_buffer_limit_bytes');
  }
  public set perConnectionBufferLimitBytes(value: number) {
    this._perConnectionBufferLimitBytes = value;
  }
  public resetPerConnectionBufferLimitBytes() {
    this._perConnectionBufferLimitBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perConnectionBufferLimitBytesInput() {
    return this._perConnectionBufferLimitBytes;
  }

  // server_header_transformation - computed: false, optional: true, required: false
  private _serverHeaderTransformation?: string; 
  public get serverHeaderTransformation() {
    return this.getStringAttribute('server_header_transformation');
  }
  public set serverHeaderTransformation(value: string) {
    this._serverHeaderTransformation = value;
  }
  public resetServerHeaderTransformation() {
    this._serverHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHeaderTransformationInput() {
    return this._serverHeaderTransformation;
  }

  // socket_options - computed: false, optional: true, required: false
  private _socketOptions = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerSocketOptionsOutputReference(this, "socket_options");
  public get socketOptions() {
    return this._socketOptions;
  }
  public putSocketOptions(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerSocketOptions) {
    this._socketOptions.internalValue = value;
  }
  public resetSocketOptions() {
    this._socketOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketOptionsInput() {
    return this._socketOptions.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // use_proxy_protocol - computed: false, optional: true, required: false
  private _useProxyProtocol?: boolean | cdktf.IResolvable; 
  public get useProxyProtocol() {
    return this.getBooleanAttribute('use_proxy_protocol');
  }
  public set useProxyProtocol(value: boolean | cdktf.IResolvable) {
    this._useProxyProtocol = value;
  }
  public resetUseProxyProtocol() {
    this._useProxyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProxyProtocolInput() {
    return this._useProxyProtocol;
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyLogging {
  /**
  * AccessLogFormat sets the global access log format. Values: 'envoy' (default), 'json'. Other values will produce an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#access_log_format DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#access_log_format}
  */
  readonly accessLogFormat?: string;
  /**
  * AccessLogFormatString sets the access log format when format is set to 'envoy'. When empty, Envoy's default format is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#access_log_format_string DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#access_log_format_string}
  */
  readonly accessLogFormatString?: string;
  /**
  * AccessLogJSONFields sets the fields that JSON logging will output when AccessLogFormat is json.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#access_log_json_fields DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#access_log_json_fields}
  */
  readonly accessLogJsonFields?: string[];
  /**
  * AccessLogLevel sets the verbosity level of the access log. Values: 'info' (default, all requests are logged), 'error' (all non-success requests, i.e. 300+ response code, are logged), 'critical' (all 5xx requests are logged) and 'disabled'. Other values will produce an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#access_log_level DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#access_log_level}
  */
  readonly accessLogLevel?: string;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyLoggingToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_log_format: cdktf.stringToTerraform(struct!.accessLogFormat),
    access_log_format_string: cdktf.stringToTerraform(struct!.accessLogFormatString),
    access_log_json_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessLogJsonFields),
    access_log_level: cdktf.stringToTerraform(struct!.accessLogLevel),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyLoggingToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_log_format: {
      value: cdktf.stringToHclTerraform(struct!.accessLogFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_log_format_string: {
      value: cdktf.stringToHclTerraform(struct!.accessLogFormatString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_log_json_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessLogJsonFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_log_level: {
      value: cdktf.stringToHclTerraform(struct!.accessLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLogFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLogFormat = this._accessLogFormat;
    }
    if (this._accessLogFormatString !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLogFormatString = this._accessLogFormatString;
    }
    if (this._accessLogJsonFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLogJsonFields = this._accessLogJsonFields;
    }
    if (this._accessLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLogLevel = this._accessLogLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLogFormat = undefined;
      this._accessLogFormatString = undefined;
      this._accessLogJsonFields = undefined;
      this._accessLogLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLogFormat = value.accessLogFormat;
      this._accessLogFormatString = value.accessLogFormatString;
      this._accessLogJsonFields = value.accessLogJsonFields;
      this._accessLogLevel = value.accessLogLevel;
    }
  }

  // access_log_format - computed: false, optional: true, required: false
  private _accessLogFormat?: string; 
  public get accessLogFormat() {
    return this.getStringAttribute('access_log_format');
  }
  public set accessLogFormat(value: string) {
    this._accessLogFormat = value;
  }
  public resetAccessLogFormat() {
    this._accessLogFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogFormatInput() {
    return this._accessLogFormat;
  }

  // access_log_format_string - computed: false, optional: true, required: false
  private _accessLogFormatString?: string; 
  public get accessLogFormatString() {
    return this.getStringAttribute('access_log_format_string');
  }
  public set accessLogFormatString(value: string) {
    this._accessLogFormatString = value;
  }
  public resetAccessLogFormatString() {
    this._accessLogFormatString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogFormatStringInput() {
    return this._accessLogFormatString;
  }

  // access_log_json_fields - computed: false, optional: true, required: false
  private _accessLogJsonFields?: string[]; 
  public get accessLogJsonFields() {
    return this.getListAttribute('access_log_json_fields');
  }
  public set accessLogJsonFields(value: string[]) {
    this._accessLogJsonFields = value;
  }
  public resetAccessLogJsonFields() {
    this._accessLogJsonFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogJsonFieldsInput() {
    return this._accessLogJsonFields;
  }

  // access_log_level - computed: false, optional: true, required: false
  private _accessLogLevel?: string; 
  public get accessLogLevel() {
    return this.getStringAttribute('access_log_level');
  }
  public set accessLogLevel(value: string) {
    this._accessLogLevel = value;
  }
  public resetAccessLogLevel() {
    this._accessLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogLevelInput() {
    return this._accessLogLevel;
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetricsTls {
  /**
  * CA filename.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#ca_file DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#ca_file}
  */
  readonly caFile?: string;
  /**
  * Client certificate filename.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#cert_file DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * Client key filename.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#key_file DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#key_file}
  */
  readonly keyFile?: string;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetricsTlsToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetricsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetricsTlsToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetricsTls | cdktf.IResolvable): any {
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
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetricsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetricsTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetricsTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._certFile = undefined;
      this._keyFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._certFile = value.certFile;
      this._keyFile = value.keyFile;
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

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
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
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetrics {
  /**
  * Defines the metrics address interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#address DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#address}
  */
  readonly address?: string;
  /**
  * Defines the metrics port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#port DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * TLS holds TLS file config details. Metrics and health endpoints cannot have same port number when metrics is served over HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#tls DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetricsTls;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetricsToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    port: cdktf.numberToTerraform(struct!.port),
    tls: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetricsTlsToTerraform(struct!.tls),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetricsToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetrics | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetricsTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetricsTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._port = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._port = value.port;
      this._tls.internalValue = value.tls;
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

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetricsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetricsTls) {
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
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyNetwork {
  /**
  * Configure the port used to access the Envoy Admin interface. If configured to port '0' then the admin interface is disabled. Contour's default is 9001.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#admin_port DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#admin_port}
  */
  readonly adminPort?: number;
  /**
  * XffNumTrustedHops defines the number of additional ingress proxy hops from the right side of the x-forwarded-for HTTP header to trust when determining the origin client’s IP address. See https://www.envoyproxy.io/docs/envoy/v1.17.0/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto?highlight=xff_num_trusted_hops for more information. Contour's default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#num_trusted_hops DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#num_trusted_hops}
  */
  readonly numTrustedHops?: number;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyNetworkToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_port: cdktf.numberToTerraform(struct!.adminPort),
    num_trusted_hops: cdktf.numberToTerraform(struct!.numTrustedHops),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyNetworkToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_port: {
      value: cdktf.numberToHclTerraform(struct!.adminPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_trusted_hops: {
      value: cdktf.numberToHclTerraform(struct!.numTrustedHops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPort = this._adminPort;
    }
    if (this._numTrustedHops !== undefined) {
      hasAnyValues = true;
      internalValueResult.numTrustedHops = this._numTrustedHops;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminPort = undefined;
      this._numTrustedHops = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminPort = value.adminPort;
      this._numTrustedHops = value.numTrustedHops;
    }
  }

  // admin_port - computed: false, optional: true, required: false
  private _adminPort?: number; 
  public get adminPort() {
    return this.getNumberAttribute('admin_port');
  }
  public set adminPort(value: number) {
    this._adminPort = value;
  }
  public resetAdminPort() {
    this._adminPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPortInput() {
    return this._adminPort;
  }

  // num_trusted_hops - computed: false, optional: true, required: false
  private _numTrustedHops?: number; 
  public get numTrustedHops() {
    return this.getNumberAttribute('num_trusted_hops');
  }
  public set numTrustedHops(value: number) {
    this._numTrustedHops = value;
  }
  public resetNumTrustedHops() {
    this._numTrustedHops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numTrustedHopsInput() {
    return this._numTrustedHops;
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#name DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#namespace DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyServiceToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyServiceToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyService | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyService | cdktf.IResolvable | undefined) {
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
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyTimeouts {
  /**
  * ConnectTimeout defines how long the proxy should wait when establishing connection to upstream service. If not set, a default value of 2 seconds will be used. See https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-field-config-cluster-v3-cluster-connect-timeout for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#connect_timeout DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#connect_timeout}
  */
  readonly connectTimeout?: string;
  /**
  * ConnectionIdleTimeout defines how long the proxy should wait while there are no active requests (for HTTP/1.1) or streams (for HTTP/2) before terminating an HTTP connection. Set to 'infinity' to disable the timeout entirely. See https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/protocol.proto#envoy-v3-api-field-config-core-v3-httpprotocoloptions-idle-timeout for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#connection_idle_timeout DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#connection_idle_timeout}
  */
  readonly connectionIdleTimeout?: string;
  /**
  * ConnectionShutdownGracePeriod defines how long the proxy will wait between sending an initial GOAWAY frame and a second, final GOAWAY frame when terminating an HTTP/2 connection. During this grace period, the proxy will continue to respond to new streams. After the final GOAWAY frame has been sent, the proxy will refuse new streams. See https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-field-extensions-filters-network-http-connection-manager-v3-httpconnectionmanager-drain-timeout for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#connection_shutdown_grace_period DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#connection_shutdown_grace_period}
  */
  readonly connectionShutdownGracePeriod?: string;
  /**
  * DelayedCloseTimeout defines how long envoy will wait, once connection close processing has been initiated, for the downstream peer to close the connection before Envoy closes the socket associated with the connection. Setting this timeout to 'infinity' will disable it, equivalent to setting it to '0' in Envoy. Leaving it unset will result in the Envoy default value being used. See https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-field-extensions-filters-network-http-connection-manager-v3-httpconnectionmanager-delayed-close-timeout for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#delayed_close_timeout DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#delayed_close_timeout}
  */
  readonly delayedCloseTimeout?: string;
  /**
  * MaxConnectionDuration defines the maximum period of time after an HTTP connection has been established from the client to the proxy before it is closed by the proxy, regardless of whether there has been activity or not. Omit or set to 'infinity' for no max duration. See https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/protocol.proto#envoy-v3-api-field-config-core-v3-httpprotocoloptions-max-connection-duration for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#max_connection_duration DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#max_connection_duration}
  */
  readonly maxConnectionDuration?: string;
  /**
  * RequestTimeout sets the client request timeout globally for Contour. Note that this is a timeout for the entire request, not an idle timeout. Omit or set to 'infinity' to disable the timeout entirely. See https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-field-extensions-filters-network-http-connection-manager-v3-httpconnectionmanager-request-timeout for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#request_timeout DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#request_timeout}
  */
  readonly requestTimeout?: string;
  /**
  * StreamIdleTimeout defines how long the proxy should wait while there is no request activity (for HTTP/1.1) or stream activity (for HTTP/2) before terminating the HTTP request or stream. Set to 'infinity' to disable the timeout entirely. See https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-field-extensions-filters-network-http-connection-manager-v3-httpconnectionmanager-stream-idle-timeout for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#stream_idle_timeout DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#stream_idle_timeout}
  */
  readonly streamIdleTimeout?: string;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyTimeoutsToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_timeout: cdktf.stringToTerraform(struct!.connectTimeout),
    connection_idle_timeout: cdktf.stringToTerraform(struct!.connectionIdleTimeout),
    connection_shutdown_grace_period: cdktf.stringToTerraform(struct!.connectionShutdownGracePeriod),
    delayed_close_timeout: cdktf.stringToTerraform(struct!.delayedCloseTimeout),
    max_connection_duration: cdktf.stringToTerraform(struct!.maxConnectionDuration),
    request_timeout: cdktf.stringToTerraform(struct!.requestTimeout),
    stream_idle_timeout: cdktf.stringToTerraform(struct!.streamIdleTimeout),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyTimeoutsToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.connectionIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_shutdown_grace_period: {
      value: cdktf.stringToHclTerraform(struct!.connectionShutdownGracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delayed_close_timeout: {
      value: cdktf.stringToHclTerraform(struct!.delayedCloseTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connection_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxConnectionDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_timeout: {
      value: cdktf.stringToHclTerraform(struct!.requestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.streamIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._connectionIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionIdleTimeout = this._connectionIdleTimeout;
    }
    if (this._connectionShutdownGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionShutdownGracePeriod = this._connectionShutdownGracePeriod;
    }
    if (this._delayedCloseTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayedCloseTimeout = this._delayedCloseTimeout;
    }
    if (this._maxConnectionDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionDuration = this._maxConnectionDuration;
    }
    if (this._requestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTimeout = this._requestTimeout;
    }
    if (this._streamIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamIdleTimeout = this._streamIdleTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectTimeout = undefined;
      this._connectionIdleTimeout = undefined;
      this._connectionShutdownGracePeriod = undefined;
      this._delayedCloseTimeout = undefined;
      this._maxConnectionDuration = undefined;
      this._requestTimeout = undefined;
      this._streamIdleTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectTimeout = value.connectTimeout;
      this._connectionIdleTimeout = value.connectionIdleTimeout;
      this._connectionShutdownGracePeriod = value.connectionShutdownGracePeriod;
      this._delayedCloseTimeout = value.delayedCloseTimeout;
      this._maxConnectionDuration = value.maxConnectionDuration;
      this._requestTimeout = value.requestTimeout;
      this._streamIdleTimeout = value.streamIdleTimeout;
    }
  }

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: string; 
  public get connectTimeout() {
    return this.getStringAttribute('connect_timeout');
  }
  public set connectTimeout(value: string) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // connection_idle_timeout - computed: false, optional: true, required: false
  private _connectionIdleTimeout?: string; 
  public get connectionIdleTimeout() {
    return this.getStringAttribute('connection_idle_timeout');
  }
  public set connectionIdleTimeout(value: string) {
    this._connectionIdleTimeout = value;
  }
  public resetConnectionIdleTimeout() {
    this._connectionIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdleTimeoutInput() {
    return this._connectionIdleTimeout;
  }

  // connection_shutdown_grace_period - computed: false, optional: true, required: false
  private _connectionShutdownGracePeriod?: string; 
  public get connectionShutdownGracePeriod() {
    return this.getStringAttribute('connection_shutdown_grace_period');
  }
  public set connectionShutdownGracePeriod(value: string) {
    this._connectionShutdownGracePeriod = value;
  }
  public resetConnectionShutdownGracePeriod() {
    this._connectionShutdownGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionShutdownGracePeriodInput() {
    return this._connectionShutdownGracePeriod;
  }

  // delayed_close_timeout - computed: false, optional: true, required: false
  private _delayedCloseTimeout?: string; 
  public get delayedCloseTimeout() {
    return this.getStringAttribute('delayed_close_timeout');
  }
  public set delayedCloseTimeout(value: string) {
    this._delayedCloseTimeout = value;
  }
  public resetDelayedCloseTimeout() {
    this._delayedCloseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayedCloseTimeoutInput() {
    return this._delayedCloseTimeout;
  }

  // max_connection_duration - computed: false, optional: true, required: false
  private _maxConnectionDuration?: string; 
  public get maxConnectionDuration() {
    return this.getStringAttribute('max_connection_duration');
  }
  public set maxConnectionDuration(value: string) {
    this._maxConnectionDuration = value;
  }
  public resetMaxConnectionDuration() {
    this._maxConnectionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionDurationInput() {
    return this._maxConnectionDuration;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: string; 
  public get requestTimeout() {
    return this.getStringAttribute('request_timeout');
  }
  public set requestTimeout(value: string) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // stream_idle_timeout - computed: false, optional: true, required: false
  private _streamIdleTimeout?: string; 
  public get streamIdleTimeout() {
    return this.getStringAttribute('stream_idle_timeout');
  }
  public set streamIdleTimeout(value: string) {
    this._streamIdleTimeout = value;
  }
  public resetStreamIdleTimeout() {
    this._streamIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdleTimeoutInput() {
    return this._streamIdleTimeout;
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoy {
  /**
  * ClientCertificate defines the namespace/name of the Kubernetes secret containing the client certificate and private key to be used when establishing TLS connection to upstream cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#client_certificate DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#client_certificate}
  */
  readonly clientCertificate?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClientCertificate;
  /**
  * Cluster holds various configurable Envoy cluster values that can be set in the config file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#cluster DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#cluster}
  */
  readonly cluster?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyCluster;
  /**
  * DefaultHTTPVersions defines the default set of HTTPS versions the proxy should accept. HTTP versions are strings of the form 'HTTP/xx'. Supported versions are 'HTTP/1.1' and 'HTTP/2'. Values: 'HTTP/1.1', 'HTTP/2' (default: both). Other values will produce an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#default_http_versions DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#default_http_versions}
  */
  readonly defaultHttpVersions?: string[];
  /**
  * Health defines the endpoint Envoy uses to serve health checks. Contour's default is { address: '0.0.0.0', port: 8002 }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#health DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#health}
  */
  readonly health?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHealth;
  /**
  * Defines the HTTP Listener for Envoy. Contour's default is { address: '0.0.0.0', port: 8080, accessLog: '/dev/stdout' }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#http DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#http}
  */
  readonly http?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttp;
  /**
  * Defines the HTTPS Listener for Envoy. Contour's default is { address: '0.0.0.0', port: 8443, accessLog: '/dev/stdout' }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#https DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#https}
  */
  readonly https?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttps;
  /**
  * Listener hold various configurable Envoy listener values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#listener DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#listener}
  */
  readonly listener?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListener;
  /**
  * Logging defines how Envoy's logs can be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#logging DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyLogging;
  /**
  * Metrics defines the endpoint Envoy uses to serve metrics. Contour's default is { address: '0.0.0.0', port: 8002 }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#metrics DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#metrics}
  */
  readonly metrics?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetrics;
  /**
  * Network holds various configurable Envoy network values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#network DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#network}
  */
  readonly network?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyNetwork;
  /**
  * Service holds Envoy service parameters for setting Ingress status. Contour's default is { namespace: 'projectcontour', name: 'envoy' }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#service DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#service}
  */
  readonly service?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyService;
  /**
  * Timeouts holds various configurable timeouts that can be set in the config file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#timeouts DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#timeouts}
  */
  readonly timeouts?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyTimeouts;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClientCertificateToTerraform(struct!.clientCertificate),
    cluster: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterToTerraform(struct!.cluster),
    default_http_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultHttpVersions),
    health: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHealthToTerraform(struct!.health),
    http: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttpToTerraform(struct!.http),
    https: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttpsToTerraform(struct!.https),
    listener: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerToTerraform(struct!.listener),
    logging: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyLoggingToTerraform(struct!.logging),
    metrics: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetricsToTerraform(struct!.metrics),
    network: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyNetworkToTerraform(struct!.network),
    service: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyServiceToTerraform(struct!.service),
    timeouts: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyTimeoutsToTerraform(struct!.timeouts),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClientCertificateToHclTerraform(struct!.clientCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClientCertificate",
    },
    cluster: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyCluster",
    },
    default_http_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultHttpVersions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    health: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHealthToHclTerraform(struct!.health),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHealth",
    },
    http: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttp",
    },
    https: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttpsToHclTerraform(struct!.https),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttps",
    },
    listener: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerToHclTerraform(struct!.listener),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListener",
    },
    logging: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyLogging",
    },
    metrics: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetricsToHclTerraform(struct!.metrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetrics",
    },
    network: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyNetwork",
    },
    service: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyService",
    },
    timeouts: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyTimeoutsToHclTerraform(struct!.timeouts),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyTimeouts",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate?.internalValue;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._defaultHttpVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultHttpVersions = this._defaultHttpVersions;
    }
    if (this._health?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._https?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.https = this._https?.internalValue;
    }
    if (this._listener?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listener = this._listener?.internalValue;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._timeouts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeouts = this._timeouts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientCertificate.internalValue = undefined;
      this._cluster.internalValue = undefined;
      this._defaultHttpVersions = undefined;
      this._health.internalValue = undefined;
      this._http.internalValue = undefined;
      this._https.internalValue = undefined;
      this._listener.internalValue = undefined;
      this._logging.internalValue = undefined;
      this._metrics.internalValue = undefined;
      this._network.internalValue = undefined;
      this._service.internalValue = undefined;
      this._timeouts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientCertificate.internalValue = value.clientCertificate;
      this._cluster.internalValue = value.cluster;
      this._defaultHttpVersions = value.defaultHttpVersions;
      this._health.internalValue = value.health;
      this._http.internalValue = value.http;
      this._https.internalValue = value.https;
      this._listener.internalValue = value.listener;
      this._logging.internalValue = value.logging;
      this._metrics.internalValue = value.metrics;
      this._network.internalValue = value.network;
      this._service.internalValue = value.service;
      this._timeouts.internalValue = value.timeouts;
    }
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClientCertificateOutputReference(this, "client_certificate");
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public putClientCertificate(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClientCertificate) {
    this._clientCertificate.internalValue = value;
  }
  public resetClientCertificate() {
    this._clientCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate.internalValue;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // default_http_versions - computed: false, optional: true, required: false
  private _defaultHttpVersions?: string[]; 
  public get defaultHttpVersions() {
    return this.getListAttribute('default_http_versions');
  }
  public set defaultHttpVersions(value: string[]) {
    this._defaultHttpVersions = value;
  }
  public resetDefaultHttpVersions() {
    this._defaultHttpVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHttpVersionsInput() {
    return this._defaultHttpVersions;
  }

  // health - computed: false, optional: true, required: false
  private _health = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }
  public putHealth(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHealth) {
    this._health.internalValue = value;
  }
  public resetHealth() {
    this._health.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // https - computed: false, optional: true, required: false
  private _https = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttpsOutputReference(this, "https");
  public get https() {
    return this._https;
  }
  public putHttps(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyHttps) {
    this._https.internalValue = value;
  }
  public resetHttps() {
    this._https.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsInput() {
    return this._https.internalValue;
  }

  // listener - computed: false, optional: true, required: false
  private _listener = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListenerOutputReference(this, "listener");
  public get listener() {
    return this._listener;
  }
  public putListener(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyListener) {
    this._listener.internalValue = value;
  }
  public resetListener() {
    this._listener.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerInput() {
    return this._listener.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGatewayGatewayRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#name DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#namespace DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGatewayGatewayRefToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGatewayGatewayRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGatewayGatewayRefToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGatewayGatewayRef | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGatewayGatewayRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGatewayGatewayRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGatewayGatewayRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGateway {
  /**
  * GatewayRef defines the specific Gateway that this Contour instance corresponds to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#gateway_ref DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#gateway_ref}
  */
  readonly gatewayRef: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGatewayGatewayRef;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGatewayToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway_ref: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGatewayGatewayRefToTerraform(struct!.gatewayRef),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGatewayToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway_ref: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGatewayGatewayRefToHclTerraform(struct!.gatewayRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGatewayGatewayRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewayRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayRef = this._gatewayRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gatewayRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gatewayRef.internalValue = value.gatewayRef;
    }
  }

  // gateway_ref - computed: false, optional: false, required: true
  private _gatewayRef = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGatewayGatewayRefOutputReference(this, "gateway_ref");
  public get gatewayRef() {
    return this._gatewayRef;
  }
  public putGatewayRef(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGatewayGatewayRef) {
    this._gatewayRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayRefInput() {
    return this._gatewayRef.internalValue;
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthAuthPolicy {
  /**
  * Context is a set of key/value pairs that are sent to the authentication server in the check request. If a context is provided at an enclosing scope, the entries are merged such that the inner scope overrides matching keys from the outer scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#context DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#context}
  */
  readonly context?: { [key: string]: string };
  /**
  * When true, this field disables client request authentication for the scope of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#disabled DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthAuthPolicyToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthAuthPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.context),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthAuthPolicyToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthAuthPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.context),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthAuthPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthAuthPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthAuthPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._disabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._disabled = value.disabled;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: { [key: string]: string }; 
  public get context() {
    return this.getStringMapAttribute('context');
  }
  public set context(value: { [key: string]: string }) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthExtensionRef {
  /**
  * API version of the referent. If this field is not specified, the default 'projectcontour.io/v1alpha1' will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#api_version DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#name DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. If this field is not specifies, the namespace of the resource that targets the referent will be used. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#namespace DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthExtensionRefToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthExtensionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthExtensionRefToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthExtensionRef | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthExtensionRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthExtensionRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
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

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthExtensionRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
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
      this._apiVersion = value.apiVersion;
      this._name = value.name;
      this._namespace = value.namespace;
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
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthWithRequestBody {
  /**
  * If AllowPartialMessage is true, then Envoy will buffer the body until MaxRequestBytes are reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#allow_partial_message DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#allow_partial_message}
  */
  readonly allowPartialMessage?: boolean | cdktf.IResolvable;
  /**
  * MaxRequestBytes sets the maximum size of message body ExtAuthz filter will hold in-memory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#max_request_bytes DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#max_request_bytes}
  */
  readonly maxRequestBytes?: number;
  /**
  * If PackAsBytes is true, the body sent to Authorization Server is in raw bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#pack_as_bytes DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#pack_as_bytes}
  */
  readonly packAsBytes?: boolean | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthWithRequestBodyToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthWithRequestBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_partial_message: cdktf.booleanToTerraform(struct!.allowPartialMessage),
    max_request_bytes: cdktf.numberToTerraform(struct!.maxRequestBytes),
    pack_as_bytes: cdktf.booleanToTerraform(struct!.packAsBytes),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthWithRequestBodyToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthWithRequestBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_partial_message: {
      value: cdktf.booleanToHclTerraform(struct!.allowPartialMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_request_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pack_as_bytes: {
      value: cdktf.booleanToHclTerraform(struct!.packAsBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthWithRequestBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthWithRequestBody | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPartialMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPartialMessage = this._allowPartialMessage;
    }
    if (this._maxRequestBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestBytes = this._maxRequestBytes;
    }
    if (this._packAsBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.packAsBytes = this._packAsBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthWithRequestBody | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPartialMessage = undefined;
      this._maxRequestBytes = undefined;
      this._packAsBytes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPartialMessage = value.allowPartialMessage;
      this._maxRequestBytes = value.maxRequestBytes;
      this._packAsBytes = value.packAsBytes;
    }
  }

  // allow_partial_message - computed: false, optional: true, required: false
  private _allowPartialMessage?: boolean | cdktf.IResolvable; 
  public get allowPartialMessage() {
    return this.getBooleanAttribute('allow_partial_message');
  }
  public set allowPartialMessage(value: boolean | cdktf.IResolvable) {
    this._allowPartialMessage = value;
  }
  public resetAllowPartialMessage() {
    this._allowPartialMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPartialMessageInput() {
    return this._allowPartialMessage;
  }

  // max_request_bytes - computed: false, optional: true, required: false
  private _maxRequestBytes?: number; 
  public get maxRequestBytes() {
    return this.getNumberAttribute('max_request_bytes');
  }
  public set maxRequestBytes(value: number) {
    this._maxRequestBytes = value;
  }
  public resetMaxRequestBytes() {
    this._maxRequestBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestBytesInput() {
    return this._maxRequestBytes;
  }

  // pack_as_bytes - computed: false, optional: true, required: false
  private _packAsBytes?: boolean | cdktf.IResolvable; 
  public get packAsBytes() {
    return this.getBooleanAttribute('pack_as_bytes');
  }
  public set packAsBytes(value: boolean | cdktf.IResolvable) {
    this._packAsBytes = value;
  }
  public resetPackAsBytes() {
    this._packAsBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packAsBytesInput() {
    return this._packAsBytes;
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuth {
  /**
  * AuthPolicy sets a default authorization policy for client requests. This policy will be used unless overridden by individual routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#auth_policy DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#auth_policy}
  */
  readonly authPolicy?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthAuthPolicy;
  /**
  * ExtensionServiceRef specifies the extension resource that will authorize client requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#extension_ref DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#extension_ref}
  */
  readonly extensionRef?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthExtensionRef;
  /**
  * If FailOpen is true, the client request is forwarded to the upstream service even if the authorization server fails to respond. This field should not be set in most cases. It is intended for use only while migrating applications from internal authorization to Contour external authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#fail_open DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#fail_open}
  */
  readonly failOpen?: boolean | cdktf.IResolvable;
  /**
  * ResponseTimeout configures maximum time to wait for a check response from the authorization server. Timeout durations are expressed in the Go [Duration format](https://godoc.org/time#ParseDuration). Valid time units are 'ns', 'us' (or 'µs'), 'ms', 's', 'm', 'h'. The string 'infinity' is also a valid input and specifies no timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#response_timeout DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#response_timeout}
  */
  readonly responseTimeout?: string;
  /**
  * WithRequestBody specifies configuration for sending the client request's body to authorization server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#with_request_body DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#with_request_body}
  */
  readonly withRequestBody?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthWithRequestBody;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_policy: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthAuthPolicyToTerraform(struct!.authPolicy),
    extension_ref: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthExtensionRefToTerraform(struct!.extensionRef),
    fail_open: cdktf.booleanToTerraform(struct!.failOpen),
    response_timeout: cdktf.stringToTerraform(struct!.responseTimeout),
    with_request_body: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthWithRequestBodyToTerraform(struct!.withRequestBody),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_policy: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthAuthPolicyToHclTerraform(struct!.authPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthAuthPolicy",
    },
    extension_ref: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthExtensionRefToHclTerraform(struct!.extensionRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthExtensionRef",
    },
    fail_open: {
      value: cdktf.booleanToHclTerraform(struct!.failOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response_timeout: {
      value: cdktf.stringToHclTerraform(struct!.responseTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    with_request_body: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthWithRequestBodyToHclTerraform(struct!.withRequestBody),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthWithRequestBody",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPolicy = this._authPolicy?.internalValue;
    }
    if (this._extensionRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionRef = this._extensionRef?.internalValue;
    }
    if (this._failOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOpen = this._failOpen;
    }
    if (this._responseTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTimeout = this._responseTimeout;
    }
    if (this._withRequestBody?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.withRequestBody = this._withRequestBody?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authPolicy.internalValue = undefined;
      this._extensionRef.internalValue = undefined;
      this._failOpen = undefined;
      this._responseTimeout = undefined;
      this._withRequestBody.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authPolicy.internalValue = value.authPolicy;
      this._extensionRef.internalValue = value.extensionRef;
      this._failOpen = value.failOpen;
      this._responseTimeout = value.responseTimeout;
      this._withRequestBody.internalValue = value.withRequestBody;
    }
  }

  // auth_policy - computed: false, optional: true, required: false
  private _authPolicy = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthAuthPolicyOutputReference(this, "auth_policy");
  public get authPolicy() {
    return this._authPolicy;
  }
  public putAuthPolicy(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthAuthPolicy) {
    this._authPolicy.internalValue = value;
  }
  public resetAuthPolicy() {
    this._authPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPolicyInput() {
    return this._authPolicy.internalValue;
  }

  // extension_ref - computed: false, optional: true, required: false
  private _extensionRef = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthExtensionRefOutputReference(this, "extension_ref");
  public get extensionRef() {
    return this._extensionRef;
  }
  public putExtensionRef(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthExtensionRef) {
    this._extensionRef.internalValue = value;
  }
  public resetExtensionRef() {
    this._extensionRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionRefInput() {
    return this._extensionRef.internalValue;
  }

  // fail_open - computed: false, optional: true, required: false
  private _failOpen?: boolean | cdktf.IResolvable; 
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }
  public set failOpen(value: boolean | cdktf.IResolvable) {
    this._failOpen = value;
  }
  public resetFailOpen() {
    this._failOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOpenInput() {
    return this._failOpen;
  }

  // response_timeout - computed: false, optional: true, required: false
  private _responseTimeout?: string; 
  public get responseTimeout() {
    return this.getStringAttribute('response_timeout');
  }
  public set responseTimeout(value: string) {
    this._responseTimeout = value;
  }
  public resetResponseTimeout() {
    this._responseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeoutInput() {
    return this._responseTimeout;
  }

  // with_request_body - computed: false, optional: true, required: false
  private _withRequestBody = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthWithRequestBodyOutputReference(this, "with_request_body");
  public get withRequestBody() {
    return this._withRequestBody;
  }
  public putWithRequestBody(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthWithRequestBody) {
    this._withRequestBody.internalValue = value;
  }
  public resetWithRequestBody() {
    this._withRequestBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withRequestBodyInput() {
    return this._withRequestBody.internalValue;
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHealth {
  /**
  * Defines the health address interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#address DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#address}
  */
  readonly address?: string;
  /**
  * Defines the health port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#port DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHealthToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHealth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHealthToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHealth | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHealth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHealth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._port = value.port;
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
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxyFallbackCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#name DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#namespace DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxyFallbackCertificateToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxyFallbackCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxyFallbackCertificateToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxyFallbackCertificate | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxyFallbackCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxyFallbackCertificate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxyFallbackCertificate | cdktf.IResolvable | undefined) {
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
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxy {
  /**
  * DisablePermitInsecure disables the use of the permitInsecure field in HTTPProxy. Contour's default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#disable_permit_insecure DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#disable_permit_insecure}
  */
  readonly disablePermitInsecure?: boolean | cdktf.IResolvable;
  /**
  * FallbackCertificate defines the namespace/name of the Kubernetes secret to use as fallback when a non-SNI request is received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#fallback_certificate DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#fallback_certificate}
  */
  readonly fallbackCertificate?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxyFallbackCertificate;
  /**
  * Restrict Contour to searching these namespaces for root ingress routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#root_namespaces DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#root_namespaces}
  */
  readonly rootNamespaces?: string[];
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxyToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_permit_insecure: cdktf.booleanToTerraform(struct!.disablePermitInsecure),
    fallback_certificate: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxyFallbackCertificateToTerraform(struct!.fallbackCertificate),
    root_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rootNamespaces),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxyToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_permit_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.disablePermitInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fallback_certificate: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxyFallbackCertificateToHclTerraform(struct!.fallbackCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxyFallbackCertificate",
    },
    root_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rootNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disablePermitInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePermitInsecure = this._disablePermitInsecure;
    }
    if (this._fallbackCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackCertificate = this._fallbackCertificate?.internalValue;
    }
    if (this._rootNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootNamespaces = this._rootNamespaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disablePermitInsecure = undefined;
      this._fallbackCertificate.internalValue = undefined;
      this._rootNamespaces = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disablePermitInsecure = value.disablePermitInsecure;
      this._fallbackCertificate.internalValue = value.fallbackCertificate;
      this._rootNamespaces = value.rootNamespaces;
    }
  }

  // disable_permit_insecure - computed: false, optional: true, required: false
  private _disablePermitInsecure?: boolean | cdktf.IResolvable; 
  public get disablePermitInsecure() {
    return this.getBooleanAttribute('disable_permit_insecure');
  }
  public set disablePermitInsecure(value: boolean | cdktf.IResolvable) {
    this._disablePermitInsecure = value;
  }
  public resetDisablePermitInsecure() {
    this._disablePermitInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePermitInsecureInput() {
    return this._disablePermitInsecure;
  }

  // fallback_certificate - computed: false, optional: true, required: false
  private _fallbackCertificate = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxyFallbackCertificateOutputReference(this, "fallback_certificate");
  public get fallbackCertificate() {
    return this._fallbackCertificate;
  }
  public putFallbackCertificate(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxyFallbackCertificate) {
    this._fallbackCertificate.internalValue = value;
  }
  public resetFallbackCertificate() {
    this._fallbackCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackCertificateInput() {
    return this._fallbackCertificate.internalValue;
  }

  // root_namespaces - computed: false, optional: true, required: false
  private _rootNamespaces?: string[]; 
  public get rootNamespaces() {
    return this.getListAttribute('root_namespaces');
  }
  public set rootNamespaces(value: string[]) {
    this._rootNamespaces = value;
  }
  public resetRootNamespaces() {
    this._rootNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootNamespacesInput() {
    return this._rootNamespaces;
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecIngress {
  /**
  * Ingress Class Names Contour should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#class_names DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#class_names}
  */
  readonly classNames?: string[];
  /**
  * Address to set in Ingress object status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#status_address DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#status_address}
  */
  readonly statusAddress?: string;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecIngressToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classNames),
    status_address: cdktf.stringToTerraform(struct!.statusAddress),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecIngressToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    status_address: {
      value: cdktf.stringToHclTerraform(struct!.statusAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.classNames = this._classNames;
    }
    if (this._statusAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusAddress = this._statusAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classNames = undefined;
      this._statusAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classNames = value.classNames;
      this._statusAddress = value.statusAddress;
    }
  }

  // class_names - computed: false, optional: true, required: false
  private _classNames?: string[]; 
  public get classNames() {
    return this.getListAttribute('class_names');
  }
  public set classNames(value: string[]) {
    this._classNames = value;
  }
  public resetClassNames() {
    this._classNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classNamesInput() {
    return this._classNames;
  }

  // status_address - computed: false, optional: true, required: false
  private _statusAddress?: string; 
  public get statusAddress() {
    return this.getStringAttribute('status_address');
  }
  public set statusAddress(value: string) {
    this._statusAddress = value;
  }
  public resetStatusAddress() {
    this._statusAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusAddressInput() {
    return this._statusAddress;
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetricsTls {
  /**
  * CA filename.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#ca_file DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#ca_file}
  */
  readonly caFile?: string;
  /**
  * Client certificate filename.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#cert_file DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * Client key filename.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#key_file DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#key_file}
  */
  readonly keyFile?: string;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetricsTlsToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetricsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetricsTlsToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetricsTls | cdktf.IResolvable): any {
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
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetricsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetricsTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetricsTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._certFile = undefined;
      this._keyFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._certFile = value.certFile;
      this._keyFile = value.keyFile;
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

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
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
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetrics {
  /**
  * Defines the metrics address interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#address DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#address}
  */
  readonly address?: string;
  /**
  * Defines the metrics port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#port DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * TLS holds TLS file config details. Metrics and health endpoints cannot have same port number when metrics is served over HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#tls DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetricsTls;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetricsToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    port: cdktf.numberToTerraform(struct!.port),
    tls: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetricsTlsToTerraform(struct!.tls),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetricsToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetrics | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetricsTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetricsTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._port = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._port = value.port;
      this._tls.internalValue = value.tls;
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

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetricsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetricsTls) {
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
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyRequestHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#remove DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#set DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#set}
  */
  readonly set?: { [key: string]: string };
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyRequestHeadersToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.set),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyRequestHeadersToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.set),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._set !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyRequestHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._remove = undefined;
      this._set = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._remove = value.remove;
      this._set = value.set;
    }
  }

  // remove - computed: false, optional: true, required: false
  private _remove?: string[]; 
  public get remove() {
    return this.getListAttribute('remove');
  }
  public set remove(value: string[]) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // set - computed: false, optional: true, required: false
  private _set?: { [key: string]: string }; 
  public get set() {
    return this.getStringMapAttribute('set');
  }
  public set set(value: { [key: string]: string }) {
    this._set = value;
  }
  public resetSet() {
    this._set = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set;
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyResponseHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#remove DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#set DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#set}
  */
  readonly set?: { [key: string]: string };
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyResponseHeadersToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.set),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyResponseHeadersToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.set),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyResponseHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyResponseHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._set !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyResponseHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._remove = undefined;
      this._set = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._remove = value.remove;
      this._set = value.set;
    }
  }

  // remove - computed: false, optional: true, required: false
  private _remove?: string[]; 
  public get remove() {
    return this.getListAttribute('remove');
  }
  public set remove(value: string[]) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // set - computed: false, optional: true, required: false
  private _set?: { [key: string]: string }; 
  public get set() {
    return this.getStringMapAttribute('set');
  }
  public set set(value: { [key: string]: string }) {
    this._set = value;
  }
  public resetSet() {
    this._set = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set;
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicy {
  /**
  * ApplyToIngress determines if the Policies will apply to ingress objects Contour's default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#apply_to_ingress DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#apply_to_ingress}
  */
  readonly applyToIngress?: boolean | cdktf.IResolvable;
  /**
  * RequestHeadersPolicy defines the request headers set/removed on all routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#request_headers DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#request_headers}
  */
  readonly requestHeaders?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyRequestHeaders;
  /**
  * ResponseHeadersPolicy defines the response headers set/removed on all routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#response_headers DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#response_headers}
  */
  readonly responseHeaders?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyResponseHeaders;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_to_ingress: cdktf.booleanToTerraform(struct!.applyToIngress),
    request_headers: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyRequestHeadersToTerraform(struct!.requestHeaders),
    response_headers: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyResponseHeadersToTerraform(struct!.responseHeaders),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_to_ingress: {
      value: cdktf.booleanToHclTerraform(struct!.applyToIngress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_headers: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyRequestHeadersToHclTerraform(struct!.requestHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyRequestHeaders",
    },
    response_headers: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyResponseHeadersToHclTerraform(struct!.responseHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyResponseHeaders",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyToIngress !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyToIngress = this._applyToIngress;
    }
    if (this._requestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders?.internalValue;
    }
    if (this._responseHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaders = this._responseHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applyToIngress = undefined;
      this._requestHeaders.internalValue = undefined;
      this._responseHeaders.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applyToIngress = value.applyToIngress;
      this._requestHeaders.internalValue = value.requestHeaders;
      this._responseHeaders.internalValue = value.responseHeaders;
    }
  }

  // apply_to_ingress - computed: false, optional: true, required: false
  private _applyToIngress?: boolean | cdktf.IResolvable; 
  public get applyToIngress() {
    return this.getBooleanAttribute('apply_to_ingress');
  }
  public set applyToIngress(value: boolean | cdktf.IResolvable) {
    this._applyToIngress = value;
  }
  public resetApplyToIngress() {
    this._applyToIngress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyToIngressInput() {
    return this._applyToIngress;
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyRequestHeadersOutputReference(this, "request_headers");
  public get requestHeaders() {
    return this._requestHeaders;
  }
  public putRequestHeaders(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyRequestHeaders) {
    this._requestHeaders.internalValue = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders.internalValue;
  }

  // response_headers - computed: false, optional: true, required: false
  private _responseHeaders = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyResponseHeadersOutputReference(this, "response_headers");
  public get responseHeaders() {
    return this._responseHeaders;
  }
  public putResponseHeaders(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyResponseHeaders) {
    this._responseHeaders.internalValue = value;
  }
  public resetResponseHeaders() {
    this._responseHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersInput() {
    return this._responseHeaders.internalValue;
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesGenericKey {
  /**
  * Key defines the key of the descriptor entry. If not set, the key is set to 'generic_key'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#key DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Value defines the value of the descriptor entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#value DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesGenericKeyToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesGenericKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesGenericKeyToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesGenericKey | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesGenericKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesGenericKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesGenericKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeader {
  /**
  * DescriptorKey defines the key to use on the descriptor entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#descriptor_key DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#descriptor_key}
  */
  readonly descriptorKey?: string;
  /**
  * HeaderName defines the name of the header to look for on the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#header_name DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#header_name}
  */
  readonly headerName?: string;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    descriptor_key: cdktf.stringToTerraform(struct!.descriptorKey),
    header_name: cdktf.stringToTerraform(struct!.headerName),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    descriptor_key: {
      value: cdktf.stringToHclTerraform(struct!.descriptorKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._descriptorKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptorKey = this._descriptorKey;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._descriptorKey = undefined;
      this._headerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._descriptorKey = value.descriptorKey;
      this._headerName = value.headerName;
    }
  }

  // descriptor_key - computed: false, optional: true, required: false
  private _descriptorKey?: string; 
  public get descriptorKey() {
    return this.getStringAttribute('descriptor_key');
  }
  public set descriptorKey(value: string) {
    this._descriptorKey = value;
  }
  public resetDescriptorKey() {
    this._descriptorKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptorKeyInput() {
    return this._descriptorKey;
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatchHeaders {
  /**
  * Contains specifies a substring that must be present in the header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#contains DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#contains}
  */
  readonly contains?: string;
  /**
  * Exact specifies a string that the header value must be equal to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#exact DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * IgnoreCase specifies that string matching should be case insensitive. Note that this has no effect on the Regex parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#ignore_case DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Name is the name of the header to match against. Name is required. Header names are case insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#name DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * NotContains specifies a substring that must not be present in the header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#notcontains DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#notcontains}
  */
  readonly notcontains?: string;
  /**
  * NoExact specifies a string that the header value must not be equal to. The condition is true if the header has any other value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#notexact DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#notexact}
  */
  readonly notexact?: string;
  /**
  * NotPresent specifies that condition is true when the named header is not present. Note that setting NotPresent to false does not make the condition true if the named header is present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#notpresent DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#notpresent}
  */
  readonly notpresent?: boolean | cdktf.IResolvable;
  /**
  * Present specifies that condition is true when the named header is present, regardless of its value. Note that setting Present to false does not make the condition true if the named header is absent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#present DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#present}
  */
  readonly present?: boolean | cdktf.IResolvable;
  /**
  * Regex specifies a regular expression pattern that must match the header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#regex DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#regex}
  */
  readonly regex?: string;
  /**
  * TreatMissingAsEmpty specifies if the header match rule specified header does not exist, this header value will be treated as empty. Defaults to false. Unlike the underlying Envoy implementation this is **only** supported for negative matches (e.g. NotContains, NotExact).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#treat_missing_as_empty DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#treat_missing_as_empty}
  */
  readonly treatMissingAsEmpty?: boolean | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatchHeadersToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    name: cdktf.stringToTerraform(struct!.name),
    notcontains: cdktf.stringToTerraform(struct!.notcontains),
    notexact: cdktf.stringToTerraform(struct!.notexact),
    notpresent: cdktf.booleanToTerraform(struct!.notpresent),
    present: cdktf.booleanToTerraform(struct!.present),
    regex: cdktf.stringToTerraform(struct!.regex),
    treat_missing_as_empty: cdktf.booleanToTerraform(struct!.treatMissingAsEmpty),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatchHeadersToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notcontains: {
      value: cdktf.stringToHclTerraform(struct!.notcontains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notexact: {
      value: cdktf.stringToHclTerraform(struct!.notexact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notpresent: {
      value: cdktf.booleanToHclTerraform(struct!.notpresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    present: {
      value: cdktf.booleanToHclTerraform(struct!.present),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    treat_missing_as_empty: {
      value: cdktf.booleanToHclTerraform(struct!.treatMissingAsEmpty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatchHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatchHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notcontains !== undefined) {
      hasAnyValues = true;
      internalValueResult.notcontains = this._notcontains;
    }
    if (this._notexact !== undefined) {
      hasAnyValues = true;
      internalValueResult.notexact = this._notexact;
    }
    if (this._notpresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.notpresent = this._notpresent;
    }
    if (this._present !== undefined) {
      hasAnyValues = true;
      internalValueResult.present = this._present;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._treatMissingAsEmpty !== undefined) {
      hasAnyValues = true;
      internalValueResult.treatMissingAsEmpty = this._treatMissingAsEmpty;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatchHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._name = undefined;
      this._notcontains = undefined;
      this._notexact = undefined;
      this._notpresent = undefined;
      this._present = undefined;
      this._regex = undefined;
      this._treatMissingAsEmpty = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._name = value.name;
      this._notcontains = value.notcontains;
      this._notexact = value.notexact;
      this._notpresent = value.notpresent;
      this._present = value.present;
      this._regex = value.regex;
      this._treatMissingAsEmpty = value.treatMissingAsEmpty;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
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

  // notcontains - computed: false, optional: true, required: false
  private _notcontains?: string; 
  public get notcontains() {
    return this.getStringAttribute('notcontains');
  }
  public set notcontains(value: string) {
    this._notcontains = value;
  }
  public resetNotcontains() {
    this._notcontains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notcontainsInput() {
    return this._notcontains;
  }

  // notexact - computed: false, optional: true, required: false
  private _notexact?: string; 
  public get notexact() {
    return this.getStringAttribute('notexact');
  }
  public set notexact(value: string) {
    this._notexact = value;
  }
  public resetNotexact() {
    this._notexact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notexactInput() {
    return this._notexact;
  }

  // notpresent - computed: false, optional: true, required: false
  private _notpresent?: boolean | cdktf.IResolvable; 
  public get notpresent() {
    return this.getBooleanAttribute('notpresent');
  }
  public set notpresent(value: boolean | cdktf.IResolvable) {
    this._notpresent = value;
  }
  public resetNotpresent() {
    this._notpresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notpresentInput() {
    return this._notpresent;
  }

  // present - computed: false, optional: true, required: false
  private _present?: boolean | cdktf.IResolvable; 
  public get present() {
    return this.getBooleanAttribute('present');
  }
  public set present(value: boolean | cdktf.IResolvable) {
    this._present = value;
  }
  public resetPresent() {
    this._present = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentInput() {
    return this._present;
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

  // treat_missing_as_empty - computed: false, optional: true, required: false
  private _treatMissingAsEmpty?: boolean | cdktf.IResolvable; 
  public get treatMissingAsEmpty() {
    return this.getBooleanAttribute('treat_missing_as_empty');
  }
  public set treatMissingAsEmpty(value: boolean | cdktf.IResolvable) {
    this._treatMissingAsEmpty = value;
  }
  public resetTreatMissingAsEmpty() {
    this._treatMissingAsEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treatMissingAsEmptyInput() {
    return this._treatMissingAsEmpty;
  }
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatchHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatchHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatchHeadersOutputReference {
    return new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatchHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatch {
  /**
  * ExpectMatch defines whether the request must positively match the match criteria in order to generate a descriptor entry (i.e. true), or not match the match criteria in order to generate a descriptor entry (i.e. false). The default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#expect_match DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#expect_match}
  */
  readonly expectMatch?: boolean | cdktf.IResolvable;
  /**
  * Headers is a list of 1+ match criteria to apply against the request to determine whether to populate the descriptor entry or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#headers DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#headers}
  */
  readonly headers?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatchHeaders[] | cdktf.IResolvable;
  /**
  * Value defines the value of the descriptor entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#value DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatchToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expect_match: cdktf.booleanToTerraform(struct!.expectMatch),
    headers: cdktf.listMapper(dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatchHeadersToTerraform, false)(struct!.headers),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatchToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expect_match: {
      value: cdktf.booleanToHclTerraform(struct!.expectMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headers: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatchHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatchHeadersList",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectMatch = this._expectMatch;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expectMatch = undefined;
      this._headers.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expectMatch = value.expectMatch;
      this._headers.internalValue = value.headers;
      this._value = value.value;
    }
  }

  // expect_match - computed: false, optional: true, required: false
  private _expectMatch?: boolean | cdktf.IResolvable; 
  public get expectMatch() {
    return this.getBooleanAttribute('expect_match');
  }
  public set expectMatch(value: boolean | cdktf.IResolvable) {
    this._expectMatch = value;
  }
  public resetExpectMatch() {
    this._expectMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectMatchInput() {
    return this._expectMatch;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatchHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatchHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntries {
  /**
  * GenericKey defines a descriptor entry with a static key and value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#generic_key DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#generic_key}
  */
  readonly genericKey?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesGenericKey;
  /**
  * RemoteAddress defines a descriptor entry with a key of 'remote_address' and a value equal to the client's IP address (from x-forwarded-for).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#remote_address DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#remote_address}
  */
  readonly remoteAddress?: { [key: string]: string };
  /**
  * RequestHeader defines a descriptor entry that's populated only if a given header is present on the request. The descriptor key is static, and the descriptor value is equal to the value of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#request_header DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#request_header}
  */
  readonly requestHeader?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeader;
  /**
  * RequestHeaderValueMatch defines a descriptor entry that's populated if the request's headers match a set of 1+ match criteria. The descriptor key is 'header_match', and the descriptor value is static.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#request_header_value_match DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#request_header_value_match}
  */
  readonly requestHeaderValueMatch?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatch;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generic_key: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesGenericKeyToTerraform(struct!.genericKey),
    remote_address: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.remoteAddress),
    request_header: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderToTerraform(struct!.requestHeader),
    request_header_value_match: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatchToTerraform(struct!.requestHeaderValueMatch),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generic_key: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesGenericKeyToHclTerraform(struct!.genericKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesGenericKey",
    },
    remote_address: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.remoteAddress),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    request_header: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderToHclTerraform(struct!.requestHeader),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeader",
    },
    request_header_value_match: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatchToHclTerraform(struct!.requestHeaderValueMatch),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatch",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._genericKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.genericKey = this._genericKey?.internalValue;
    }
    if (this._remoteAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAddress = this._remoteAddress;
    }
    if (this._requestHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeader = this._requestHeader?.internalValue;
    }
    if (this._requestHeaderValueMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaderValueMatch = this._requestHeaderValueMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._genericKey.internalValue = undefined;
      this._remoteAddress = undefined;
      this._requestHeader.internalValue = undefined;
      this._requestHeaderValueMatch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._genericKey.internalValue = value.genericKey;
      this._remoteAddress = value.remoteAddress;
      this._requestHeader.internalValue = value.requestHeader;
      this._requestHeaderValueMatch.internalValue = value.requestHeaderValueMatch;
    }
  }

  // generic_key - computed: false, optional: true, required: false
  private _genericKey = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesGenericKeyOutputReference(this, "generic_key");
  public get genericKey() {
    return this._genericKey;
  }
  public putGenericKey(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesGenericKey) {
    this._genericKey.internalValue = value;
  }
  public resetGenericKey() {
    this._genericKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericKeyInput() {
    return this._genericKey.internalValue;
  }

  // remote_address - computed: false, optional: true, required: false
  private _remoteAddress?: { [key: string]: string }; 
  public get remoteAddress() {
    return this.getStringMapAttribute('remote_address');
  }
  public set remoteAddress(value: { [key: string]: string }) {
    this._remoteAddress = value;
  }
  public resetRemoteAddress() {
    this._remoteAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressInput() {
    return this._remoteAddress;
  }

  // request_header - computed: false, optional: true, required: false
  private _requestHeader = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderOutputReference(this, "request_header");
  public get requestHeader() {
    return this._requestHeader;
  }
  public putRequestHeader(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeader) {
    this._requestHeader.internalValue = value;
  }
  public resetRequestHeader() {
    this._requestHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderInput() {
    return this._requestHeader.internalValue;
  }

  // request_header_value_match - computed: false, optional: true, required: false
  private _requestHeaderValueMatch = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatchOutputReference(this, "request_header_value_match");
  public get requestHeaderValueMatch() {
    return this._requestHeaderValueMatch;
  }
  public putRequestHeaderValueMatch(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesRequestHeaderValueMatch) {
    this._requestHeaderValueMatch.internalValue = value;
  }
  public resetRequestHeaderValueMatch() {
    this._requestHeaderValueMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderValueMatchInput() {
    return this._requestHeaderValueMatch.internalValue;
  }
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntries[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesOutputReference {
    return new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptors {
  /**
  * Entries is the list of key-value pair generators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#entries DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#entries}
  */
  readonly entries?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntries[] | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entries: cdktf.listMapper(dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesToTerraform, false)(struct!.entries),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entries: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesToHclTerraform, false)(struct!.entries),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entries = this._entries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entries.internalValue = value.entries;
    }
  }

  // entries - computed: false, optional: true, required: false
  private _entries = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsOutputReference {
    return new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicy {
  /**
  * Descriptors defines the list of descriptors that will be generated and sent to the rate limit service. Each descriptor contains 1+ key-value pair entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#descriptors DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#descriptors}
  */
  readonly descriptors?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptors[] | cdktf.IResolvable;
  /**
  * Disabled configures the HTTPProxy to not use the default global rate limit policy defined by the Contour configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#disabled DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    descriptors: cdktf.listMapper(dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsToTerraform, false)(struct!.descriptors),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    descriptors: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsToHclTerraform, false)(struct!.descriptors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._descriptors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptors = this._descriptors?.internalValue;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._descriptors.internalValue = undefined;
      this._disabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._descriptors.internalValue = value.descriptors;
      this._disabled = value.disabled;
    }
  }

  // descriptors - computed: false, optional: true, required: false
  private _descriptors = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptorsList(this, "descriptors", false);
  public get descriptors() {
    return this._descriptors;
  }
  public putDescriptors(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyDescriptors[] | cdktf.IResolvable) {
    this._descriptors.internalValue = value;
  }
  public resetDescriptors() {
    this._descriptors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptorsInput() {
    return this._descriptors.internalValue;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceExtensionService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#name DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#namespace DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceExtensionServiceToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceExtensionService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceExtensionServiceToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceExtensionService | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceExtensionServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceExtensionService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceExtensionService | cdktf.IResolvable | undefined) {
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
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitService {
  /**
  * DefaultGlobalRateLimitPolicy allows setting a default global rate limit policy for every HTTPProxy. HTTPProxy can overwrite this configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#default_global_rate_limit_policy DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#default_global_rate_limit_policy}
  */
  readonly defaultGlobalRateLimitPolicy?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicy;
  /**
  * Domain is passed to the Rate Limit Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#domain DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#domain}
  */
  readonly domain?: string;
  /**
  * EnableResourceExhaustedCode enables translating error code 429 to grpc code RESOURCE_EXHAUSTED. When disabled it's translated to UNAVAILABLE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#enable_resource_exhausted_code DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#enable_resource_exhausted_code}
  */
  readonly enableResourceExhaustedCode?: boolean | cdktf.IResolvable;
  /**
  * EnableXRateLimitHeaders defines whether to include the X-RateLimit headers X-RateLimit-Limit, X-RateLimit-Remaining, and X-RateLimit-Reset (as defined by the IETF Internet-Draft linked below), on responses to clients when the Rate Limit Service is consulted for a request. ref. https://tools.ietf.org/id/draft-polli-ratelimit-headers-03.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#enable_x_rate_limit_headers DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#enable_x_rate_limit_headers}
  */
  readonly enableXRateLimitHeaders?: boolean | cdktf.IResolvable;
  /**
  * ExtensionService identifies the extension service defining the RLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#extension_service DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#extension_service}
  */
  readonly extensionService: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceExtensionService;
  /**
  * FailOpen defines whether to allow requests to proceed when the Rate Limit Service fails to respond with a valid rate limit decision within the timeout defined on the extension service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#fail_open DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#fail_open}
  */
  readonly failOpen?: boolean | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_global_rate_limit_policy: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyToTerraform(struct!.defaultGlobalRateLimitPolicy),
    domain: cdktf.stringToTerraform(struct!.domain),
    enable_resource_exhausted_code: cdktf.booleanToTerraform(struct!.enableResourceExhaustedCode),
    enable_x_rate_limit_headers: cdktf.booleanToTerraform(struct!.enableXRateLimitHeaders),
    extension_service: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceExtensionServiceToTerraform(struct!.extensionService),
    fail_open: cdktf.booleanToTerraform(struct!.failOpen),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_global_rate_limit_policy: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyToHclTerraform(struct!.defaultGlobalRateLimitPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicy",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_resource_exhausted_code: {
      value: cdktf.booleanToHclTerraform(struct!.enableResourceExhaustedCode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_x_rate_limit_headers: {
      value: cdktf.booleanToHclTerraform(struct!.enableXRateLimitHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extension_service: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceExtensionServiceToHclTerraform(struct!.extensionService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceExtensionService",
    },
    fail_open: {
      value: cdktf.booleanToHclTerraform(struct!.failOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGlobalRateLimitPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGlobalRateLimitPolicy = this._defaultGlobalRateLimitPolicy?.internalValue;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._enableResourceExhaustedCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableResourceExhaustedCode = this._enableResourceExhaustedCode;
    }
    if (this._enableXRateLimitHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableXRateLimitHeaders = this._enableXRateLimitHeaders;
    }
    if (this._extensionService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionService = this._extensionService?.internalValue;
    }
    if (this._failOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOpen = this._failOpen;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultGlobalRateLimitPolicy.internalValue = undefined;
      this._domain = undefined;
      this._enableResourceExhaustedCode = undefined;
      this._enableXRateLimitHeaders = undefined;
      this._extensionService.internalValue = undefined;
      this._failOpen = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultGlobalRateLimitPolicy.internalValue = value.defaultGlobalRateLimitPolicy;
      this._domain = value.domain;
      this._enableResourceExhaustedCode = value.enableResourceExhaustedCode;
      this._enableXRateLimitHeaders = value.enableXRateLimitHeaders;
      this._extensionService.internalValue = value.extensionService;
      this._failOpen = value.failOpen;
    }
  }

  // default_global_rate_limit_policy - computed: false, optional: true, required: false
  private _defaultGlobalRateLimitPolicy = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicyOutputReference(this, "default_global_rate_limit_policy");
  public get defaultGlobalRateLimitPolicy() {
    return this._defaultGlobalRateLimitPolicy;
  }
  public putDefaultGlobalRateLimitPolicy(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceDefaultGlobalRateLimitPolicy) {
    this._defaultGlobalRateLimitPolicy.internalValue = value;
  }
  public resetDefaultGlobalRateLimitPolicy() {
    this._defaultGlobalRateLimitPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGlobalRateLimitPolicyInput() {
    return this._defaultGlobalRateLimitPolicy.internalValue;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // enable_resource_exhausted_code - computed: false, optional: true, required: false
  private _enableResourceExhaustedCode?: boolean | cdktf.IResolvable; 
  public get enableResourceExhaustedCode() {
    return this.getBooleanAttribute('enable_resource_exhausted_code');
  }
  public set enableResourceExhaustedCode(value: boolean | cdktf.IResolvable) {
    this._enableResourceExhaustedCode = value;
  }
  public resetEnableResourceExhaustedCode() {
    this._enableResourceExhaustedCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableResourceExhaustedCodeInput() {
    return this._enableResourceExhaustedCode;
  }

  // enable_x_rate_limit_headers - computed: false, optional: true, required: false
  private _enableXRateLimitHeaders?: boolean | cdktf.IResolvable; 
  public get enableXRateLimitHeaders() {
    return this.getBooleanAttribute('enable_x_rate_limit_headers');
  }
  public set enableXRateLimitHeaders(value: boolean | cdktf.IResolvable) {
    this._enableXRateLimitHeaders = value;
  }
  public resetEnableXRateLimitHeaders() {
    this._enableXRateLimitHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableXRateLimitHeadersInput() {
    return this._enableXRateLimitHeaders;
  }

  // extension_service - computed: false, optional: false, required: true
  private _extensionService = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceExtensionServiceOutputReference(this, "extension_service");
  public get extensionService() {
    return this._extensionService;
  }
  public putExtensionService(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceExtensionService) {
    this._extensionService.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionServiceInput() {
    return this._extensionService.internalValue;
  }

  // fail_open - computed: false, optional: true, required: false
  private _failOpen?: boolean | cdktf.IResolvable; 
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }
  public set failOpen(value: boolean | cdktf.IResolvable) {
    this._failOpen = value;
  }
  public resetFailOpen() {
    this._failOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOpenInput() {
    return this._failOpen;
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingCustomTags {
  /**
  * Literal is a static custom tag value. Precisely one of Literal, RequestHeaderName must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#literal DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#literal}
  */
  readonly literal?: string;
  /**
  * RequestHeaderName indicates which request header the label value is obtained from. Precisely one of Literal, RequestHeaderName must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#request_header_name DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#request_header_name}
  */
  readonly requestHeaderName?: string;
  /**
  * TagName is the unique name of the custom tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#tag_name DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#tag_name}
  */
  readonly tagName: string;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingCustomTagsToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingCustomTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    request_header_name: cdktf.stringToTerraform(struct!.requestHeaderName),
    tag_name: cdktf.stringToTerraform(struct!.tagName),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingCustomTagsToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingCustomTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_header_name: {
      value: cdktf.stringToHclTerraform(struct!.requestHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_name: {
      value: cdktf.stringToHclTerraform(struct!.tagName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingCustomTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingCustomTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._requestHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaderName = this._requestHeaderName;
    }
    if (this._tagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagName = this._tagName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingCustomTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._requestHeaderName = undefined;
      this._tagName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._requestHeaderName = value.requestHeaderName;
      this._tagName = value.tagName;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // request_header_name - computed: false, optional: true, required: false
  private _requestHeaderName?: string; 
  public get requestHeaderName() {
    return this.getStringAttribute('request_header_name');
  }
  public set requestHeaderName(value: string) {
    this._requestHeaderName = value;
  }
  public resetRequestHeaderName() {
    this._requestHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderNameInput() {
    return this._requestHeaderName;
  }

  // tag_name - computed: false, optional: false, required: true
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingCustomTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingCustomTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingCustomTagsOutputReference {
    return new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingCustomTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingExtensionService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#name DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#namespace DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingExtensionServiceToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingExtensionService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingExtensionServiceToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingExtensionService | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingExtensionServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingExtensionService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingExtensionService | cdktf.IResolvable | undefined) {
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
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracing {
  /**
  * CustomTags defines a list of custom tags with unique tag name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#custom_tags DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#custom_tags}
  */
  readonly customTags?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingCustomTags[] | cdktf.IResolvable;
  /**
  * ExtensionService identifies the extension service defining the otel-collector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#extension_service DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#extension_service}
  */
  readonly extensionService: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingExtensionService;
  /**
  * IncludePodDetail defines a flag. If it is true, contour will add the pod name and namespace to the span of the trace. the default is true. Note: The Envoy pods MUST have the HOSTNAME and CONTOUR_NAMESPACE environment variables set for this to work properly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#include_pod_detail DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#include_pod_detail}
  */
  readonly includePodDetail?: boolean | cdktf.IResolvable;
  /**
  * MaxPathTagLength defines maximum length of the request path to extract and include in the HttpUrl tag. contour's default is 256.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#max_path_tag_length DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#max_path_tag_length}
  */
  readonly maxPathTagLength?: number;
  /**
  * OverallSampling defines the sampling rate of trace data. contour's default is 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#overall_sampling DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#overall_sampling}
  */
  readonly overallSampling?: string;
  /**
  * ServiceName defines the name for the service. contour's default is contour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#service_name DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#service_name}
  */
  readonly serviceName?: string;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_tags: cdktf.listMapper(dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingCustomTagsToTerraform, false)(struct!.customTags),
    extension_service: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingExtensionServiceToTerraform(struct!.extensionService),
    include_pod_detail: cdktf.booleanToTerraform(struct!.includePodDetail),
    max_path_tag_length: cdktf.numberToTerraform(struct!.maxPathTagLength),
    overall_sampling: cdktf.stringToTerraform(struct!.overallSampling),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_tags: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingCustomTagsToHclTerraform, false)(struct!.customTags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingCustomTagsList",
    },
    extension_service: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingExtensionServiceToHclTerraform(struct!.extensionService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingExtensionService",
    },
    include_pod_detail: {
      value: cdktf.booleanToHclTerraform(struct!.includePodDetail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_path_tag_length: {
      value: cdktf.numberToHclTerraform(struct!.maxPathTagLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    overall_sampling: {
      value: cdktf.stringToHclTerraform(struct!.overallSampling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTags = this._customTags?.internalValue;
    }
    if (this._extensionService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionService = this._extensionService?.internalValue;
    }
    if (this._includePodDetail !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePodDetail = this._includePodDetail;
    }
    if (this._maxPathTagLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPathTagLength = this._maxPathTagLength;
    }
    if (this._overallSampling !== undefined) {
      hasAnyValues = true;
      internalValueResult.overallSampling = this._overallSampling;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customTags.internalValue = undefined;
      this._extensionService.internalValue = undefined;
      this._includePodDetail = undefined;
      this._maxPathTagLength = undefined;
      this._overallSampling = undefined;
      this._serviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customTags.internalValue = value.customTags;
      this._extensionService.internalValue = value.extensionService;
      this._includePodDetail = value.includePodDetail;
      this._maxPathTagLength = value.maxPathTagLength;
      this._overallSampling = value.overallSampling;
      this._serviceName = value.serviceName;
    }
  }

  // custom_tags - computed: false, optional: true, required: false
  private _customTags = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingCustomTagsList(this, "custom_tags", false);
  public get customTags() {
    return this._customTags;
  }
  public putCustomTags(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingCustomTags[] | cdktf.IResolvable) {
    this._customTags.internalValue = value;
  }
  public resetCustomTags() {
    this._customTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags.internalValue;
  }

  // extension_service - computed: false, optional: false, required: true
  private _extensionService = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingExtensionServiceOutputReference(this, "extension_service");
  public get extensionService() {
    return this._extensionService;
  }
  public putExtensionService(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingExtensionService) {
    this._extensionService.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionServiceInput() {
    return this._extensionService.internalValue;
  }

  // include_pod_detail - computed: false, optional: true, required: false
  private _includePodDetail?: boolean | cdktf.IResolvable; 
  public get includePodDetail() {
    return this.getBooleanAttribute('include_pod_detail');
  }
  public set includePodDetail(value: boolean | cdktf.IResolvable) {
    this._includePodDetail = value;
  }
  public resetIncludePodDetail() {
    this._includePodDetail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePodDetailInput() {
    return this._includePodDetail;
  }

  // max_path_tag_length - computed: false, optional: true, required: false
  private _maxPathTagLength?: number; 
  public get maxPathTagLength() {
    return this.getNumberAttribute('max_path_tag_length');
  }
  public set maxPathTagLength(value: number) {
    this._maxPathTagLength = value;
  }
  public resetMaxPathTagLength() {
    this._maxPathTagLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPathTagLengthInput() {
    return this._maxPathTagLength;
  }

  // overall_sampling - computed: false, optional: true, required: false
  private _overallSampling?: string; 
  public get overallSampling() {
    return this.getStringAttribute('overall_sampling');
  }
  public set overallSampling(value: string) {
    this._overallSampling = value;
  }
  public resetOverallSampling() {
    this._overallSampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overallSamplingInput() {
    return this._overallSampling;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServerTls {
  /**
  * CA filename.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#ca_file DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#ca_file}
  */
  readonly caFile?: string;
  /**
  * Client certificate filename.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#cert_file DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * Allow serving the xDS gRPC API without TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#insecure DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Client key filename.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#key_file DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#key_file}
  */
  readonly keyFile?: string;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServerTlsToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServerTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServerTlsToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServerTls | cdktf.IResolvable): any {
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
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServerTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServerTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServerTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._certFile = undefined;
      this._insecure = undefined;
      this._keyFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._certFile = value.certFile;
      this._insecure = value.insecure;
      this._keyFile = value.keyFile;
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

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
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
}
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServer {
  /**
  * Defines the xDS gRPC API address which Contour will serve. Contour's default is '0.0.0.0'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#address DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#address}
  */
  readonly address?: string;
  /**
  * Defines the xDS gRPC API port which Contour will serve. Contour's default is 8001.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#port DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * TLS holds TLS file config details. Contour's default is { caFile: '/certs/ca.crt', certFile: '/certs/tls.cert', keyFile: '/certs/tls.key', insecure: false }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#tls DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServerTls;
  /**
  * Defines the XDSServer to use for 'contour serve'. Values: 'envoy' (default), 'contour (deprecated)'. Other values will produce an error. Deprecated: this field will be removed in a future release when the 'contour' xDS server implementation is removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#type DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServerToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    port: cdktf.numberToTerraform(struct!.port),
    tls: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServerTlsToTerraform(struct!.tls),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServerToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServer | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServerTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServerTls",
    },
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

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._port = undefined;
      this._tls.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._port = value.port;
      this._tls.internalValue = value.tls;
      this._type = value.type;
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

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServerTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServerTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
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
export interface DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpec {
  /**
  * Debug contains parameters to enable debug logging and debug interfaces inside Contour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#debug DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#debug}
  */
  readonly debug?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecDebug;
  /**
  * EnableExternalNameService allows processing of ExternalNameServices Contour's default is false for security reasons.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#enable_external_name_service DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#enable_external_name_service}
  */
  readonly enableExternalNameService?: boolean | cdktf.IResolvable;
  /**
  * Envoy contains parameters for Envoy as well as how to optionally configure a managed Envoy fleet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#envoy DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#envoy}
  */
  readonly envoy?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoy;
  /**
  * FeatureFlags defines toggle to enable new contour features. Available toggles are: useEndpointSlices - Configures contour to fetch endpoint data from k8s endpoint slices. defaults to true, If false then reads endpoint data from the k8s endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#feature_flags DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#feature_flags}
  */
  readonly featureFlags?: string[];
  /**
  * Gateway contains parameters for the gateway-api Gateway that Contour is configured to serve traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#gateway DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#gateway}
  */
  readonly gateway?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGateway;
  /**
  * GlobalExternalAuthorization allows envoys external authorization filter to be enabled for all virtual hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#global_ext_auth DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#global_ext_auth}
  */
  readonly globalExtAuth?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuth;
  /**
  * Health defines the endpoints Contour uses to serve health checks. Contour's default is { address: '0.0.0.0', port: 8000 }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#health DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#health}
  */
  readonly health?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHealth;
  /**
  * HTTPProxy defines parameters on HTTPProxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#httpproxy DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#httpproxy}
  */
  readonly httpproxy?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxy;
  /**
  * Ingress contains parameters for ingress options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#ingress DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#ingress}
  */
  readonly ingress?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecIngress;
  /**
  * Metrics defines the endpoint Contour uses to serve metrics. Contour's default is { address: '0.0.0.0', port: 8000 }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#metrics DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#metrics}
  */
  readonly metrics?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetrics;
  /**
  * Policy specifies default policy applied if not overridden by the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#policy DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#policy}
  */
  readonly policy?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicy;
  /**
  * RateLimitService optionally holds properties of the Rate Limit Service to be used for global rate limiting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#rate_limit_service DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#rate_limit_service}
  */
  readonly rateLimitService?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitService;
  /**
  * Tracing defines properties for exporting trace data to OpenTelemetry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#tracing DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#tracing}
  */
  readonly tracing?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracing;
  /**
  * XDSServer contains parameters for the xDS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#xds_server DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest#xds_server}
  */
  readonly xdsServer?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServer;
}

export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecToTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecDebugToTerraform(struct!.debug),
    enable_external_name_service: cdktf.booleanToTerraform(struct!.enableExternalNameService),
    envoy: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyToTerraform(struct!.envoy),
    feature_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.featureFlags),
    gateway: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGatewayToTerraform(struct!.gateway),
    global_ext_auth: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthToTerraform(struct!.globalExtAuth),
    health: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHealthToTerraform(struct!.health),
    httpproxy: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxyToTerraform(struct!.httpproxy),
    ingress: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecIngressToTerraform(struct!.ingress),
    metrics: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetricsToTerraform(struct!.metrics),
    policy: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyToTerraform(struct!.policy),
    rate_limit_service: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceToTerraform(struct!.rateLimitService),
    tracing: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingToTerraform(struct!.tracing),
    xds_server: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServerToTerraform(struct!.xdsServer),
  }
}


export function dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecDebugToHclTerraform(struct!.debug),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecDebug",
    },
    enable_external_name_service: {
      value: cdktf.booleanToHclTerraform(struct!.enableExternalNameService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    envoy: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyToHclTerraform(struct!.envoy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoy",
    },
    feature_flags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.featureFlags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gateway: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGatewayToHclTerraform(struct!.gateway),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGateway",
    },
    global_ext_auth: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthToHclTerraform(struct!.globalExtAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuth",
    },
    health: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHealthToHclTerraform(struct!.health),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHealth",
    },
    httpproxy: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxyToHclTerraform(struct!.httpproxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxy",
    },
    ingress: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecIngressToHclTerraform(struct!.ingress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecIngress",
    },
    metrics: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetricsToHclTerraform(struct!.metrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetrics",
    },
    policy: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyToHclTerraform(struct!.policy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicy",
    },
    rate_limit_service: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceToHclTerraform(struct!.rateLimitService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitService",
    },
    tracing: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingToHclTerraform(struct!.tracing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracing",
    },
    xds_server: {
      value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServerToHclTerraform(struct!.xdsServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debug?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug?.internalValue;
    }
    if (this._enableExternalNameService !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableExternalNameService = this._enableExternalNameService;
    }
    if (this._envoy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envoy = this._envoy?.internalValue;
    }
    if (this._featureFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureFlags = this._featureFlags;
    }
    if (this._gateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway?.internalValue;
    }
    if (this._globalExtAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalExtAuth = this._globalExtAuth?.internalValue;
    }
    if (this._health?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health?.internalValue;
    }
    if (this._httpproxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpproxy = this._httpproxy?.internalValue;
    }
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._policy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy?.internalValue;
    }
    if (this._rateLimitService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitService = this._rateLimitService?.internalValue;
    }
    if (this._tracing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracing = this._tracing?.internalValue;
    }
    if (this._xdsServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xdsServer = this._xdsServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._debug.internalValue = undefined;
      this._enableExternalNameService = undefined;
      this._envoy.internalValue = undefined;
      this._featureFlags = undefined;
      this._gateway.internalValue = undefined;
      this._globalExtAuth.internalValue = undefined;
      this._health.internalValue = undefined;
      this._httpproxy.internalValue = undefined;
      this._ingress.internalValue = undefined;
      this._metrics.internalValue = undefined;
      this._policy.internalValue = undefined;
      this._rateLimitService.internalValue = undefined;
      this._tracing.internalValue = undefined;
      this._xdsServer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._debug.internalValue = value.debug;
      this._enableExternalNameService = value.enableExternalNameService;
      this._envoy.internalValue = value.envoy;
      this._featureFlags = value.featureFlags;
      this._gateway.internalValue = value.gateway;
      this._globalExtAuth.internalValue = value.globalExtAuth;
      this._health.internalValue = value.health;
      this._httpproxy.internalValue = value.httpproxy;
      this._ingress.internalValue = value.ingress;
      this._metrics.internalValue = value.metrics;
      this._policy.internalValue = value.policy;
      this._rateLimitService.internalValue = value.rateLimitService;
      this._tracing.internalValue = value.tracing;
      this._xdsServer.internalValue = value.xdsServer;
    }
  }

  // debug - computed: false, optional: true, required: false
  private _debug = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecDebugOutputReference(this, "debug");
  public get debug() {
    return this._debug;
  }
  public putDebug(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecDebug) {
    this._debug.internalValue = value;
  }
  public resetDebug() {
    this._debug.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug.internalValue;
  }

  // enable_external_name_service - computed: false, optional: true, required: false
  private _enableExternalNameService?: boolean | cdktf.IResolvable; 
  public get enableExternalNameService() {
    return this.getBooleanAttribute('enable_external_name_service');
  }
  public set enableExternalNameService(value: boolean | cdktf.IResolvable) {
    this._enableExternalNameService = value;
  }
  public resetEnableExternalNameService() {
    this._enableExternalNameService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExternalNameServiceInput() {
    return this._enableExternalNameService;
  }

  // envoy - computed: false, optional: true, required: false
  private _envoy = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoyOutputReference(this, "envoy");
  public get envoy() {
    return this._envoy;
  }
  public putEnvoy(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecEnvoy) {
    this._envoy.internalValue = value;
  }
  public resetEnvoy() {
    this._envoy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envoyInput() {
    return this._envoy.internalValue;
  }

  // feature_flags - computed: false, optional: true, required: false
  private _featureFlags?: string[]; 
  public get featureFlags() {
    return this.getListAttribute('feature_flags');
  }
  public set featureFlags(value: string[]) {
    this._featureFlags = value;
  }
  public resetFeatureFlags() {
    this._featureFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureFlagsInput() {
    return this._featureFlags;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGateway) {
    this._gateway.internalValue = value;
  }
  public resetGateway() {
    this._gateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // global_ext_auth - computed: false, optional: true, required: false
  private _globalExtAuth = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuthOutputReference(this, "global_ext_auth");
  public get globalExtAuth() {
    return this._globalExtAuth;
  }
  public putGlobalExtAuth(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecGlobalExtAuth) {
    this._globalExtAuth.internalValue = value;
  }
  public resetGlobalExtAuth() {
    this._globalExtAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalExtAuthInput() {
    return this._globalExtAuth.internalValue;
  }

  // health - computed: false, optional: true, required: false
  private _health = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }
  public putHealth(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHealth) {
    this._health.internalValue = value;
  }
  public resetHealth() {
    this._health.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health.internalValue;
  }

  // httpproxy - computed: false, optional: true, required: false
  private _httpproxy = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxyOutputReference(this, "httpproxy");
  public get httpproxy() {
    return this._httpproxy;
  }
  public putHttpproxy(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecHttpproxy) {
    this._httpproxy.internalValue = value;
  }
  public resetHttpproxy() {
    this._httpproxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpproxyInput() {
    return this._httpproxy.internalValue;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecPolicy) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // rate_limit_service - computed: false, optional: true, required: false
  private _rateLimitService = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitServiceOutputReference(this, "rate_limit_service");
  public get rateLimitService() {
    return this._rateLimitService;
  }
  public putRateLimitService(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecRateLimitService) {
    this._rateLimitService.internalValue = value;
  }
  public resetRateLimitService() {
    this._rateLimitService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitServiceInput() {
    return this._rateLimitService.internalValue;
  }

  // tracing - computed: false, optional: true, required: false
  private _tracing = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracingOutputReference(this, "tracing");
  public get tracing() {
    return this._tracing;
  }
  public putTracing(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecTracing) {
    this._tracing.internalValue = value;
  }
  public resetTracing() {
    this._tracing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingInput() {
    return this._tracing.internalValue;
  }

  // xds_server - computed: false, optional: true, required: false
  private _xdsServer = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServerOutputReference(this, "xds_server");
  public get xdsServer() {
    return this._xdsServer;
  }
  public putXdsServer(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecXdsServer) {
    this._xdsServer.internalValue = value;
  }
  public resetXdsServer() {
    this._xdsServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xdsServerInput() {
    return this._xdsServer.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest k8s_projectcontour_io_contour_configuration_v1alpha1_manifest}
*/
export class DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_projectcontour_io_contour_configuration_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SProjectcontourIoContourConfigurationV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_projectcontour_io_contour_configuration_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/projectcontour_io_contour_configuration_v1alpha1_manifest k8s_projectcontour_io_contour_configuration_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_projectcontour_io_contour_configuration_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
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
  private _metadata = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SProjectcontourIoContourConfigurationV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
