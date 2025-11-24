// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#metadata DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#metadata}
  */
  readonly metadata: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestMetadata;
  /**
  * Spec defines the desired state of HealthCheckPolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#spec DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#spec}
  */
  readonly spec: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpec;
}
export interface DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#annotations DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#labels DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#name DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#namespace DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestMetadataToTerraform(struct?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestMetadataToHclTerraform(struct?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigGrpcHealthCheck {
  /**
  * The gRPC service name for the health check. This field is optional. The value of grpcServiceName has the following meanings by convention: - Empty serviceName means the overall status of all services at the backend. - Non-empty serviceName means the health of that gRPC service, as defined by the owner of the service. The grpcServiceName can only be ASCII.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#grpc_service_name DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#grpc_service_name}
  */
  readonly grpcServiceName?: string;
  /**
  * The TCP port number for the health check request. Valid values are 1 through 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#port DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#port}
  */
  readonly port?: number;
  /**
  * Port name as defined in InstanceGroup#NamedPort#name. If both port and portName are defined, port takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#port_name DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#port_name}
  */
  readonly portName?: string;
  /**
  * Specifies how port is selected for health checking, can be one of following values: USE_FIXED_PORT: The port number in port is used for health checking. USE_NAMED_PORT: The portName is used for health checking. USE_SERVING_PORT: For NetworkEndpointGroup, the port specified for each network endpoint is used for health checking. For other backends, the port or named port specified in the Backend Service is used for health checking. If not specified, Protocol health check follows behavior specified in port and portName fields. If neither Port nor PortName is specified, this defaults to USE_SERVING_PORT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#port_specification DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#port_specification}
  */
  readonly portSpecification?: string;
}

export function dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigGrpcHealthCheckToTerraform(struct?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigGrpcHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc_service_name: cdktf.stringToTerraform(struct!.grpcServiceName),
    port: cdktf.numberToTerraform(struct!.port),
    port_name: cdktf.stringToTerraform(struct!.portName),
    port_specification: cdktf.stringToTerraform(struct!.portSpecification),
  }
}


export function dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigGrpcHealthCheckToHclTerraform(struct?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigGrpcHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grpc_service_name: {
      value: cdktf.stringToHclTerraform(struct!.grpcServiceName),
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
    port_name: {
      value: cdktf.stringToHclTerraform(struct!.portName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_specification: {
      value: cdktf.stringToHclTerraform(struct!.portSpecification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigGrpcHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigGrpcHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpcServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcServiceName = this._grpcServiceName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._portSpecification !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSpecification = this._portSpecification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigGrpcHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grpcServiceName = undefined;
      this._port = undefined;
      this._portName = undefined;
      this._portSpecification = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grpcServiceName = value.grpcServiceName;
      this._port = value.port;
      this._portName = value.portName;
      this._portSpecification = value.portSpecification;
    }
  }

  // grpc_service_name - computed: false, optional: true, required: false
  private _grpcServiceName?: string; 
  public get grpcServiceName() {
    return this.getStringAttribute('grpc_service_name');
  }
  public set grpcServiceName(value: string) {
    this._grpcServiceName = value;
  }
  public resetGrpcServiceName() {
    this._grpcServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcServiceNameInput() {
    return this._grpcServiceName;
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

  // port_name - computed: false, optional: true, required: false
  private _portName?: string; 
  public get portName() {
    return this.getStringAttribute('port_name');
  }
  public set portName(value: string) {
    this._portName = value;
  }
  public resetPortName() {
    this._portName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNameInput() {
    return this._portName;
  }

  // port_specification - computed: false, optional: true, required: false
  private _portSpecification?: string; 
  public get portSpecification() {
    return this.getStringAttribute('port_specification');
  }
  public set portSpecification(value: string) {
    this._portSpecification = value;
  }
  public resetPortSpecification() {
    this._portSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSpecificationInput() {
    return this._portSpecification;
  }
}
export interface DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttp2HealthCheck {
  /**
  * Host is the value of the host header in the HTTP health check request. This matches the RFC 1123 definition of a hostname with 1 notable exception that numeric IP addresses are not allowed. If not specified or left empty, the IP on behalf of which this health check is performed will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#host DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#host}
  */
  readonly host?: string;
  /**
  * The TCP port number for the health check request. Valid values are 1 through 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#port DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#port}
  */
  readonly port?: number;
  /**
  * Port name as defined in InstanceGroup#NamedPort#name. If both port and portName are defined, port takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#port_name DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#port_name}
  */
  readonly portName?: string;
  /**
  * Specifies how port is selected for health checking, can be one of following values: USE_FIXED_PORT: The port number in port is used for health checking. USE_NAMED_PORT: The portName is used for health checking. USE_SERVING_PORT: For NetworkEndpointGroup, the port specified for each network endpoint is used for health checking. For other backends, the port or named port specified in the Backend Service is used for health checking. If not specified, Protocol health check follows behavior specified in port and portName fields. If neither Port nor PortName is specified, this defaults to USE_SERVING_PORT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#port_specification DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#port_specification}
  */
  readonly portSpecification?: string;
  /**
  * Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. If not specified, this defaults to NONE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#proxy_header DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#proxy_header}
  */
  readonly proxyHeader?: string;
  /**
  * The request path of the HTTP health check request. If not specified or left empty, a default value of '/' is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#request_path DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#request_path}
  */
  readonly requestPath?: string;
  /**
  * The string to match anywhere in the first 1024 bytes of the response body. If not specified or left empty, the status code determines health. The response data can only be ASCII.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#response DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#response}
  */
  readonly response?: string;
}

export function dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttp2HealthCheckToTerraform(struct?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttp2HealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    port_name: cdktf.stringToTerraform(struct!.portName),
    port_specification: cdktf.stringToTerraform(struct!.portSpecification),
    proxy_header: cdktf.stringToTerraform(struct!.proxyHeader),
    request_path: cdktf.stringToTerraform(struct!.requestPath),
    response: cdktf.stringToTerraform(struct!.response),
  }
}


export function dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttp2HealthCheckToHclTerraform(struct?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttp2HealthCheck | cdktf.IResolvable): any {
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
    port_name: {
      value: cdktf.stringToHclTerraform(struct!.portName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_specification: {
      value: cdktf.stringToHclTerraform(struct!.portSpecification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_header: {
      value: cdktf.stringToHclTerraform(struct!.proxyHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_path: {
      value: cdktf.stringToHclTerraform(struct!.requestPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response: {
      value: cdktf.stringToHclTerraform(struct!.response),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttp2HealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttp2HealthCheck | cdktf.IResolvable | undefined {
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
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._portSpecification !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSpecification = this._portSpecification;
    }
    if (this._proxyHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHeader = this._proxyHeader;
    }
    if (this._requestPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPath = this._requestPath;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttp2HealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._portName = undefined;
      this._portSpecification = undefined;
      this._proxyHeader = undefined;
      this._requestPath = undefined;
      this._response = undefined;
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
      this._portName = value.portName;
      this._portSpecification = value.portSpecification;
      this._proxyHeader = value.proxyHeader;
      this._requestPath = value.requestPath;
      this._response = value.response;
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

  // port_name - computed: false, optional: true, required: false
  private _portName?: string; 
  public get portName() {
    return this.getStringAttribute('port_name');
  }
  public set portName(value: string) {
    this._portName = value;
  }
  public resetPortName() {
    this._portName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNameInput() {
    return this._portName;
  }

  // port_specification - computed: false, optional: true, required: false
  private _portSpecification?: string; 
  public get portSpecification() {
    return this.getStringAttribute('port_specification');
  }
  public set portSpecification(value: string) {
    this._portSpecification = value;
  }
  public resetPortSpecification() {
    this._portSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSpecificationInput() {
    return this._portSpecification;
  }

  // proxy_header - computed: false, optional: true, required: false
  private _proxyHeader?: string; 
  public get proxyHeader() {
    return this.getStringAttribute('proxy_header');
  }
  public set proxyHeader(value: string) {
    this._proxyHeader = value;
  }
  public resetProxyHeader() {
    this._proxyHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHeaderInput() {
    return this._proxyHeader;
  }

  // request_path - computed: false, optional: true, required: false
  private _requestPath?: string; 
  public get requestPath() {
    return this.getStringAttribute('request_path');
  }
  public set requestPath(value: string) {
    this._requestPath = value;
  }
  public resetRequestPath() {
    this._requestPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPathInput() {
    return this._requestPath;
  }

  // response - computed: false, optional: true, required: false
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }
}
export interface DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpHealthCheck {
  /**
  * Host is the value of the host header in the HTTP health check request. This matches the RFC 1123 definition of a hostname with 1 notable exception that numeric IP addresses are not allowed. If not specified or left empty, the IP on behalf of which this health check is performed will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#host DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#host}
  */
  readonly host?: string;
  /**
  * The TCP port number for the health check request. Valid values are 1 through 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#port DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#port}
  */
  readonly port?: number;
  /**
  * Port name as defined in InstanceGroup#NamedPort#name. If both port and portName are defined, port takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#port_name DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#port_name}
  */
  readonly portName?: string;
  /**
  * Specifies how port is selected for health checking, can be one of following values: USE_FIXED_PORT: The port number in port is used for health checking. USE_NAMED_PORT: The portName is used for health checking. USE_SERVING_PORT: For NetworkEndpointGroup, the port specified for each network endpoint is used for health checking. For other backends, the port or named port specified in the Backend Service is used for health checking. If not specified, Protocol health check follows behavior specified in port and portName fields. If neither Port nor PortName is specified, this defaults to USE_SERVING_PORT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#port_specification DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#port_specification}
  */
  readonly portSpecification?: string;
  /**
  * Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. If not specified, this defaults to NONE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#proxy_header DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#proxy_header}
  */
  readonly proxyHeader?: string;
  /**
  * The request path of the HTTP health check request. If not specified or left empty, a default value of '/' is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#request_path DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#request_path}
  */
  readonly requestPath?: string;
  /**
  * The string to match anywhere in the first 1024 bytes of the response body. If not specified or left empty, the status code determines health. The response data can only be ASCII.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#response DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#response}
  */
  readonly response?: string;
}

export function dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpHealthCheckToTerraform(struct?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    port_name: cdktf.stringToTerraform(struct!.portName),
    port_specification: cdktf.stringToTerraform(struct!.portSpecification),
    proxy_header: cdktf.stringToTerraform(struct!.proxyHeader),
    request_path: cdktf.stringToTerraform(struct!.requestPath),
    response: cdktf.stringToTerraform(struct!.response),
  }
}


export function dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpHealthCheckToHclTerraform(struct?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpHealthCheck | cdktf.IResolvable): any {
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
    port_name: {
      value: cdktf.stringToHclTerraform(struct!.portName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_specification: {
      value: cdktf.stringToHclTerraform(struct!.portSpecification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_header: {
      value: cdktf.stringToHclTerraform(struct!.proxyHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_path: {
      value: cdktf.stringToHclTerraform(struct!.requestPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response: {
      value: cdktf.stringToHclTerraform(struct!.response),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpHealthCheck | cdktf.IResolvable | undefined {
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
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._portSpecification !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSpecification = this._portSpecification;
    }
    if (this._proxyHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHeader = this._proxyHeader;
    }
    if (this._requestPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPath = this._requestPath;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._portName = undefined;
      this._portSpecification = undefined;
      this._proxyHeader = undefined;
      this._requestPath = undefined;
      this._response = undefined;
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
      this._portName = value.portName;
      this._portSpecification = value.portSpecification;
      this._proxyHeader = value.proxyHeader;
      this._requestPath = value.requestPath;
      this._response = value.response;
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

  // port_name - computed: false, optional: true, required: false
  private _portName?: string; 
  public get portName() {
    return this.getStringAttribute('port_name');
  }
  public set portName(value: string) {
    this._portName = value;
  }
  public resetPortName() {
    this._portName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNameInput() {
    return this._portName;
  }

  // port_specification - computed: false, optional: true, required: false
  private _portSpecification?: string; 
  public get portSpecification() {
    return this.getStringAttribute('port_specification');
  }
  public set portSpecification(value: string) {
    this._portSpecification = value;
  }
  public resetPortSpecification() {
    this._portSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSpecificationInput() {
    return this._portSpecification;
  }

  // proxy_header - computed: false, optional: true, required: false
  private _proxyHeader?: string; 
  public get proxyHeader() {
    return this.getStringAttribute('proxy_header');
  }
  public set proxyHeader(value: string) {
    this._proxyHeader = value;
  }
  public resetProxyHeader() {
    this._proxyHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHeaderInput() {
    return this._proxyHeader;
  }

  // request_path - computed: false, optional: true, required: false
  private _requestPath?: string; 
  public get requestPath() {
    return this.getStringAttribute('request_path');
  }
  public set requestPath(value: string) {
    this._requestPath = value;
  }
  public resetRequestPath() {
    this._requestPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPathInput() {
    return this._requestPath;
  }

  // response - computed: false, optional: true, required: false
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }
}
export interface DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpsHealthCheck {
  /**
  * Host is the value of the host header in the HTTP health check request. This matches the RFC 1123 definition of a hostname with 1 notable exception that numeric IP addresses are not allowed. If not specified or left empty, the IP on behalf of which this health check is performed will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#host DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#host}
  */
  readonly host?: string;
  /**
  * The TCP port number for the health check request. Valid values are 1 through 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#port DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#port}
  */
  readonly port?: number;
  /**
  * Port name as defined in InstanceGroup#NamedPort#name. If both port and portName are defined, port takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#port_name DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#port_name}
  */
  readonly portName?: string;
  /**
  * Specifies how port is selected for health checking, can be one of following values: USE_FIXED_PORT: The port number in port is used for health checking. USE_NAMED_PORT: The portName is used for health checking. USE_SERVING_PORT: For NetworkEndpointGroup, the port specified for each network endpoint is used for health checking. For other backends, the port or named port specified in the Backend Service is used for health checking. If not specified, Protocol health check follows behavior specified in port and portName fields. If neither Port nor PortName is specified, this defaults to USE_SERVING_PORT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#port_specification DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#port_specification}
  */
  readonly portSpecification?: string;
  /**
  * Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. If not specified, this defaults to NONE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#proxy_header DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#proxy_header}
  */
  readonly proxyHeader?: string;
  /**
  * The request path of the HTTP health check request. If not specified or left empty, a default value of '/' is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#request_path DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#request_path}
  */
  readonly requestPath?: string;
  /**
  * The string to match anywhere in the first 1024 bytes of the response body. If not specified or left empty, the status code determines health. The response data can only be ASCII.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#response DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#response}
  */
  readonly response?: string;
}

export function dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpsHealthCheckToTerraform(struct?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpsHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    port_name: cdktf.stringToTerraform(struct!.portName),
    port_specification: cdktf.stringToTerraform(struct!.portSpecification),
    proxy_header: cdktf.stringToTerraform(struct!.proxyHeader),
    request_path: cdktf.stringToTerraform(struct!.requestPath),
    response: cdktf.stringToTerraform(struct!.response),
  }
}


export function dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpsHealthCheckToHclTerraform(struct?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpsHealthCheck | cdktf.IResolvable): any {
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
    port_name: {
      value: cdktf.stringToHclTerraform(struct!.portName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_specification: {
      value: cdktf.stringToHclTerraform(struct!.portSpecification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_header: {
      value: cdktf.stringToHclTerraform(struct!.proxyHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_path: {
      value: cdktf.stringToHclTerraform(struct!.requestPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response: {
      value: cdktf.stringToHclTerraform(struct!.response),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpsHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpsHealthCheck | cdktf.IResolvable | undefined {
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
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._portSpecification !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSpecification = this._portSpecification;
    }
    if (this._proxyHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHeader = this._proxyHeader;
    }
    if (this._requestPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPath = this._requestPath;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpsHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._portName = undefined;
      this._portSpecification = undefined;
      this._proxyHeader = undefined;
      this._requestPath = undefined;
      this._response = undefined;
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
      this._portName = value.portName;
      this._portSpecification = value.portSpecification;
      this._proxyHeader = value.proxyHeader;
      this._requestPath = value.requestPath;
      this._response = value.response;
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

  // port_name - computed: false, optional: true, required: false
  private _portName?: string; 
  public get portName() {
    return this.getStringAttribute('port_name');
  }
  public set portName(value: string) {
    this._portName = value;
  }
  public resetPortName() {
    this._portName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNameInput() {
    return this._portName;
  }

  // port_specification - computed: false, optional: true, required: false
  private _portSpecification?: string; 
  public get portSpecification() {
    return this.getStringAttribute('port_specification');
  }
  public set portSpecification(value: string) {
    this._portSpecification = value;
  }
  public resetPortSpecification() {
    this._portSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSpecificationInput() {
    return this._portSpecification;
  }

  // proxy_header - computed: false, optional: true, required: false
  private _proxyHeader?: string; 
  public get proxyHeader() {
    return this.getStringAttribute('proxy_header');
  }
  public set proxyHeader(value: string) {
    this._proxyHeader = value;
  }
  public resetProxyHeader() {
    this._proxyHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHeaderInput() {
    return this._proxyHeader;
  }

  // request_path - computed: false, optional: true, required: false
  private _requestPath?: string; 
  public get requestPath() {
    return this.getStringAttribute('request_path');
  }
  public set requestPath(value: string) {
    this._requestPath = value;
  }
  public resetRequestPath() {
    this._requestPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPathInput() {
    return this._requestPath;
  }

  // response - computed: false, optional: true, required: false
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }
}
export interface DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigTcpHealthCheck {
  /**
  * The TCP port number for the health check request. Valid values are 1 through 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#port DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#port}
  */
  readonly port?: number;
  /**
  * Port name as defined in InstanceGroup#NamedPort#name. If both port and portName are defined, port takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#port_name DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#port_name}
  */
  readonly portName?: string;
  /**
  * Specifies how port is selected for health checking, can be one of following values: USE_FIXED_PORT: The port number in port is used for health checking. USE_NAMED_PORT: The portName is used for health checking. USE_SERVING_PORT: For NetworkEndpointGroup, the port specified for each network endpoint is used for health checking. For other backends, the port or named port specified in the Backend Service is used for health checking. If not specified, Protocol health check follows behavior specified in port and portName fields. If neither Port nor PortName is specified, this defaults to USE_SERVING_PORT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#port_specification DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#port_specification}
  */
  readonly portSpecification?: string;
  /**
  * Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. If not specified, this defaults to NONE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#proxy_header DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#proxy_header}
  */
  readonly proxyHeader?: string;
  /**
  * The application data to send once the TCP connection has been established. If not specified, this defaults to empty. If both request and response are empty, the connection establishment alone will indicate health. The request data can only be ASCII.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#request DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#request}
  */
  readonly request?: string;
  /**
  * The bytes to match against the beginning of the response data. If not specified or left empty, any response will indicate health. The response data can only be ASCII.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#response DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#response}
  */
  readonly response?: string;
}

export function dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigTcpHealthCheckToTerraform(struct?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigTcpHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    port_name: cdktf.stringToTerraform(struct!.portName),
    port_specification: cdktf.stringToTerraform(struct!.portSpecification),
    proxy_header: cdktf.stringToTerraform(struct!.proxyHeader),
    request: cdktf.stringToTerraform(struct!.request),
    response: cdktf.stringToTerraform(struct!.response),
  }
}


export function dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigTcpHealthCheckToHclTerraform(struct?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigTcpHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_name: {
      value: cdktf.stringToHclTerraform(struct!.portName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_specification: {
      value: cdktf.stringToHclTerraform(struct!.portSpecification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_header: {
      value: cdktf.stringToHclTerraform(struct!.proxyHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response: {
      value: cdktf.stringToHclTerraform(struct!.response),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigTcpHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigTcpHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._portSpecification !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSpecification = this._portSpecification;
    }
    if (this._proxyHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHeader = this._proxyHeader;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigTcpHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._portName = undefined;
      this._portSpecification = undefined;
      this._proxyHeader = undefined;
      this._request = undefined;
      this._response = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._portName = value.portName;
      this._portSpecification = value.portSpecification;
      this._proxyHeader = value.proxyHeader;
      this._request = value.request;
      this._response = value.response;
    }
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

  // port_name - computed: false, optional: true, required: false
  private _portName?: string; 
  public get portName() {
    return this.getStringAttribute('port_name');
  }
  public set portName(value: string) {
    this._portName = value;
  }
  public resetPortName() {
    this._portName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNameInput() {
    return this._portName;
  }

  // port_specification - computed: false, optional: true, required: false
  private _portSpecification?: string; 
  public get portSpecification() {
    return this.getStringAttribute('port_specification');
  }
  public set portSpecification(value: string) {
    this._portSpecification = value;
  }
  public resetPortSpecification() {
    this._portSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSpecificationInput() {
    return this._portSpecification;
  }

  // proxy_header - computed: false, optional: true, required: false
  private _proxyHeader?: string; 
  public get proxyHeader() {
    return this.getStringAttribute('proxy_header');
  }
  public set proxyHeader(value: string) {
    this._proxyHeader = value;
  }
  public resetProxyHeader() {
    this._proxyHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHeaderInput() {
    return this._proxyHeader;
  }

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }

  // response - computed: false, optional: true, required: false
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }
}
export interface DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfig {
  /**
  * GRPC is the health check configuration of type GRPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#grpc_health_check DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#grpc_health_check}
  */
  readonly grpcHealthCheck?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigGrpcHealthCheck;
  /**
  * HTTP2 is the health check configuration of type HTTP2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#http2_health_check DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#http2_health_check}
  */
  readonly http2HealthCheck?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttp2HealthCheck;
  /**
  * HTTP is the health check configuration of type HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#http_health_check DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#http_health_check}
  */
  readonly httpHealthCheck?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpHealthCheck;
  /**
  * HTTPS is the health check configuration of type HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#https_health_check DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#https_health_check}
  */
  readonly httpsHealthCheck?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpsHealthCheck;
  /**
  * TCP is the health check configuration of type TCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#tcp_health_check DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#tcp_health_check}
  */
  readonly tcpHealthCheck?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigTcpHealthCheck;
  /**
  * Specifies the type of the healthCheck, either TCP, HTTP, HTTPS, HTTP2 or GRPC. Exactly one of the protocol-specific health check field must be specified, which must match type field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#type DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigToTerraform(struct?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc_health_check: dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigGrpcHealthCheckToTerraform(struct!.grpcHealthCheck),
    http2_health_check: dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttp2HealthCheckToTerraform(struct!.http2HealthCheck),
    http_health_check: dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpHealthCheckToTerraform(struct!.httpHealthCheck),
    https_health_check: dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpsHealthCheckToTerraform(struct!.httpsHealthCheck),
    tcp_health_check: dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigTcpHealthCheckToTerraform(struct!.tcpHealthCheck),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigToHclTerraform(struct?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grpc_health_check: {
      value: dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigGrpcHealthCheckToHclTerraform(struct!.grpcHealthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigGrpcHealthCheck",
    },
    http2_health_check: {
      value: dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttp2HealthCheckToHclTerraform(struct!.http2HealthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttp2HealthCheck",
    },
    http_health_check: {
      value: dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpHealthCheckToHclTerraform(struct!.httpHealthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpHealthCheck",
    },
    https_health_check: {
      value: dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpsHealthCheckToHclTerraform(struct!.httpsHealthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpsHealthCheck",
    },
    tcp_health_check: {
      value: dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigTcpHealthCheckToHclTerraform(struct!.tcpHealthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigTcpHealthCheck",
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

export class DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpcHealthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcHealthCheck = this._grpcHealthCheck?.internalValue;
    }
    if (this._http2HealthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2HealthCheck = this._http2HealthCheck?.internalValue;
    }
    if (this._httpHealthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHealthCheck = this._httpHealthCheck?.internalValue;
    }
    if (this._httpsHealthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsHealthCheck = this._httpsHealthCheck?.internalValue;
    }
    if (this._tcpHealthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpHealthCheck = this._tcpHealthCheck?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grpcHealthCheck.internalValue = undefined;
      this._http2HealthCheck.internalValue = undefined;
      this._httpHealthCheck.internalValue = undefined;
      this._httpsHealthCheck.internalValue = undefined;
      this._tcpHealthCheck.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grpcHealthCheck.internalValue = value.grpcHealthCheck;
      this._http2HealthCheck.internalValue = value.http2HealthCheck;
      this._httpHealthCheck.internalValue = value.httpHealthCheck;
      this._httpsHealthCheck.internalValue = value.httpsHealthCheck;
      this._tcpHealthCheck.internalValue = value.tcpHealthCheck;
      this._type = value.type;
    }
  }

  // grpc_health_check - computed: false, optional: true, required: false
  private _grpcHealthCheck = new DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigGrpcHealthCheckOutputReference(this, "grpc_health_check");
  public get grpcHealthCheck() {
    return this._grpcHealthCheck;
  }
  public putGrpcHealthCheck(value: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigGrpcHealthCheck) {
    this._grpcHealthCheck.internalValue = value;
  }
  public resetGrpcHealthCheck() {
    this._grpcHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcHealthCheckInput() {
    return this._grpcHealthCheck.internalValue;
  }

  // http2_health_check - computed: false, optional: true, required: false
  private _http2HealthCheck = new DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttp2HealthCheckOutputReference(this, "http2_health_check");
  public get http2HealthCheck() {
    return this._http2HealthCheck;
  }
  public putHttp2HealthCheck(value: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttp2HealthCheck) {
    this._http2HealthCheck.internalValue = value;
  }
  public resetHttp2HealthCheck() {
    this._http2HealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2HealthCheckInput() {
    return this._http2HealthCheck.internalValue;
  }

  // http_health_check - computed: false, optional: true, required: false
  private _httpHealthCheck = new DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpHealthCheckOutputReference(this, "http_health_check");
  public get httpHealthCheck() {
    return this._httpHealthCheck;
  }
  public putHttpHealthCheck(value: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpHealthCheck) {
    this._httpHealthCheck.internalValue = value;
  }
  public resetHttpHealthCheck() {
    this._httpHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHealthCheckInput() {
    return this._httpHealthCheck.internalValue;
  }

  // https_health_check - computed: false, optional: true, required: false
  private _httpsHealthCheck = new DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpsHealthCheckOutputReference(this, "https_health_check");
  public get httpsHealthCheck() {
    return this._httpsHealthCheck;
  }
  public putHttpsHealthCheck(value: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigHttpsHealthCheck) {
    this._httpsHealthCheck.internalValue = value;
  }
  public resetHttpsHealthCheck() {
    this._httpsHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsHealthCheckInput() {
    return this._httpsHealthCheck.internalValue;
  }

  // tcp_health_check - computed: false, optional: true, required: false
  private _tcpHealthCheck = new DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigTcpHealthCheckOutputReference(this, "tcp_health_check");
  public get tcpHealthCheck() {
    return this._tcpHealthCheck;
  }
  public putTcpHealthCheck(value: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigTcpHealthCheck) {
    this._tcpHealthCheck.internalValue = value;
  }
  public resetTcpHealthCheck() {
    this._tcpHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHealthCheckInput() {
    return this._tcpHealthCheck.internalValue;
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
export interface DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultLogConfig {
  /**
  * Enabled indicates whether or not to export health check logs. If not specified, this defaults to false, which means health check logging will be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#enabled DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultLogConfigToTerraform(struct?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultLogConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultLogConfigToHclTerraform(struct?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultLogConfig | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultLogConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultLogConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
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
}
export interface DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefault {
  /**
  * How often (in seconds) to send a health check. If not specified, a default value of 5 seconds will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#check_interval_sec DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#check_interval_sec}
  */
  readonly checkIntervalSec?: number;
  /**
  * Specifies the type of the healthCheck, either TCP, HTTP, HTTPS, HTTP2 or GRPC. Exactly one of the protocol-specific health check field must be specified, which must match type field. Config contains per protocol (i.e. HTTP, HTTPS, HTTP2, TCP, GRPC) configuration. If not specified, health check type defaults to HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#config DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#config}
  */
  readonly config?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfig;
  /**
  * A so-far unhealthy instance will be marked healthy after this many consecutive successes. If not specified, a default value of 2 will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#healthy_threshold DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * LogConfig configures logging on this health check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#log_config DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#log_config}
  */
  readonly logConfig?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultLogConfig;
  /**
  * How long (in seconds) to wait before claiming failure. If not specified, a default value of 5 seconds will be used. It is invalid for timeoutSec to have greater value than checkIntervalSec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#timeout_sec DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#timeout_sec}
  */
  readonly timeoutSec?: number;
  /**
  * A so-far healthy instance will be marked unhealthy after this many consecutive failures. If not specified, a default value of 2 will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#unhealthy_threshold DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
}

export function dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultToTerraform(struct?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_interval_sec: cdktf.numberToTerraform(struct!.checkIntervalSec),
    config: dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigToTerraform(struct!.config),
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    log_config: dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultLogConfigToTerraform(struct!.logConfig),
    timeout_sec: cdktf.numberToTerraform(struct!.timeoutSec),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
  }
}


export function dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultToHclTerraform(struct?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_interval_sec: {
      value: cdktf.numberToHclTerraform(struct!.checkIntervalSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    config: {
      value: dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfig",
    },
    healthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.healthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_config: {
      value: dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultLogConfigToHclTerraform(struct!.logConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultLogConfig",
    },
    timeout_sec: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhealthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkIntervalSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkIntervalSec = this._checkIntervalSec;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._healthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThreshold = this._healthyThreshold;
    }
    if (this._logConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logConfig = this._logConfig?.internalValue;
    }
    if (this._timeoutSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSec = this._timeoutSec;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkIntervalSec = undefined;
      this._config.internalValue = undefined;
      this._healthyThreshold = undefined;
      this._logConfig.internalValue = undefined;
      this._timeoutSec = undefined;
      this._unhealthyThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkIntervalSec = value.checkIntervalSec;
      this._config.internalValue = value.config;
      this._healthyThreshold = value.healthyThreshold;
      this._logConfig.internalValue = value.logConfig;
      this._timeoutSec = value.timeoutSec;
      this._unhealthyThreshold = value.unhealthyThreshold;
    }
  }

  // check_interval_sec - computed: false, optional: true, required: false
  private _checkIntervalSec?: number; 
  public get checkIntervalSec() {
    return this.getNumberAttribute('check_interval_sec');
  }
  public set checkIntervalSec(value: number) {
    this._checkIntervalSec = value;
  }
  public resetCheckIntervalSec() {
    this._checkIntervalSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIntervalSecInput() {
    return this._checkIntervalSec;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // healthy_threshold - computed: false, optional: true, required: false
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  public resetHealthyThreshold() {
    this._healthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig = new DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultLogConfigOutputReference(this, "log_config");
  public get logConfig() {
    return this._logConfig;
  }
  public putLogConfig(value: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultLogConfig) {
    this._logConfig.internalValue = value;
  }
  public resetLogConfig() {
    this._logConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig.internalValue;
  }

  // timeout_sec - computed: false, optional: true, required: false
  private _timeoutSec?: number; 
  public get timeoutSec() {
    return this.getNumberAttribute('timeout_sec');
  }
  public set timeoutSec(value: number) {
    this._timeoutSec = value;
  }
  public resetTimeoutSec() {
    this._timeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecInput() {
    return this._timeoutSec;
  }

  // unhealthy_threshold - computed: false, optional: true, required: false
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  public resetUnhealthyThreshold() {
    this._unhealthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }
}
export interface DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecTargetRef {
  /**
  * Group is the group of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#group DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#group}
  */
  readonly group: string;
  /**
  * Kind is kind of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#kind DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#name DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of the referent. When unspecified, the local namespace is inferred. Even when policy targets a resource in a different namespace, it MUST only apply to traffic originating from the same namespace as the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#namespace DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecTargetRefToTerraform(struct?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecTargetRefToHclTerraform(struct?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecTargetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
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
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpec {
  /**
  * Default defines default policy configuration for the targeted resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#default DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#default}
  */
  readonly default?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefault;
  /**
  * TargetRef identifies an API object to apply policy to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#target_ref DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest#target_ref}
  */
  readonly targetRef: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecTargetRef;
}

export function dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecToTerraform(struct?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultToTerraform(struct!.default),
    target_ref: dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecTargetRefToTerraform(struct!.targetRef),
  }
}


export function dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecToHclTerraform(struct?: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefault",
    },
    target_ref: {
      value: dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecTargetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default?.internalValue;
    }
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default.internalValue = undefined;
      this._targetRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default.internalValue = value.default;
      this._targetRef.internalValue = value.targetRef;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default = new DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // target_ref - computed: false, optional: false, required: true
  private _targetRef = new DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecTargetRef) {
    this._targetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest k8s_networking_gke_io_health_check_policy_v1_manifest}
*/
export class DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_networking_gke_io_health_check_policy_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest to import
  * @param importFromId The id of the existing DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SNetworkingGkeIoHealthCheckPolicyV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_networking_gke_io_health_check_policy_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_gke_io_health_check_policy_v1_manifest k8s_networking_gke_io_health_check_policy_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_networking_gke_io_health_check_policy_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
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
  private _metadata = new DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpec) {
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
      metadata: dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestMetadata",
      },
      spec: {
        value: dataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNetworkingGkeIoHealthCheckPolicyV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
