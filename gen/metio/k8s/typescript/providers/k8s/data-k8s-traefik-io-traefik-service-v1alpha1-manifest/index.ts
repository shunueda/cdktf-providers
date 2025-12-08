// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STraefikIoTraefikServiceV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#metadata DataK8STraefikIoTraefikServiceV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8STraefikIoTraefikServiceV1Alpha1ManifestMetadata;
  /**
  * TraefikServiceSpec defines the desired state of a TraefikService.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#spec DataK8STraefikIoTraefikServiceV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpec;
}
export interface DataK8STraefikIoTraefikServiceV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#annotations DataK8STraefikIoTraefikServiceV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#labels DataK8STraefikIoTraefikServiceV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#name DataK8STraefikIoTraefikServiceV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#namespace DataK8STraefikIoTraefikServiceV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestMetadataToTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STraefikIoTraefikServiceV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoTraefikServiceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringHealthCheck {
  /**
  * FollowRedirects defines whether redirects should be followed during the health check calls. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#follow_redirects DataK8STraefikIoTraefikServiceV1Alpha1Manifest#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * Headers defines custom headers to be sent to the health check endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#headers DataK8STraefikIoTraefikServiceV1Alpha1Manifest#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Hostname defines the value of hostname in the Host header of the health check request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#hostname DataK8STraefikIoTraefikServiceV1Alpha1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Interval defines the frequency of the health check calls. Default: 30s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#interval DataK8STraefikIoTraefikServiceV1Alpha1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Method defines the healthcheck method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#method DataK8STraefikIoTraefikServiceV1Alpha1Manifest#method}
  */
  readonly method?: string;
  /**
  * Mode defines the health check mode. If defined to grpc, will use the gRPC health check protocol to probe the server. Default: http
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#mode DataK8STraefikIoTraefikServiceV1Alpha1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Path defines the server URL path for the health check endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#path DataK8STraefikIoTraefikServiceV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Port defines the server URL port for the health check endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#port DataK8STraefikIoTraefikServiceV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Scheme replaces the server URL scheme for the health check endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#scheme DataK8STraefikIoTraefikServiceV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
  /**
  * Status defines the expected HTTP status code of the response to the health check request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#status DataK8STraefikIoTraefikServiceV1Alpha1Manifest#status}
  */
  readonly status?: number;
  /**
  * Timeout defines the maximum duration Traefik will wait for a health check request before considering the server unhealthy. Default: 5s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#timeout DataK8STraefikIoTraefikServiceV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringHealthCheckToTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    follow_redirects: cdktf.booleanToTerraform(struct!.followRedirects),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    interval: cdktf.stringToTerraform(struct!.interval),
    method: cdktf.stringToTerraform(struct!.method),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    status: cdktf.numberToTerraform(struct!.status),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringHealthCheckToHclTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    follow_redirects: {
      value: cdktf.booleanToHclTerraform(struct!.followRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.numberToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._followRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirects = this._followRedirects;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._followRedirects = undefined;
      this._headers = undefined;
      this._hostname = undefined;
      this._interval = undefined;
      this._method = undefined;
      this._mode = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
      this._status = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._followRedirects = value.followRedirects;
      this._headers = value.headers;
      this._hostname = value.hostname;
      this._interval = value.interval;
      this._method = value.method;
      this._mode = value.mode;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
      this._status = value.status;
      this._timeout = value.timeout;
    }
  }

  // follow_redirects - computed: false, optional: true, required: false
  private _followRedirects?: boolean | cdktf.IResolvable; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean | cdktf.IResolvable) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsHealthCheck {
  /**
  * FollowRedirects defines whether redirects should be followed during the health check calls. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#follow_redirects DataK8STraefikIoTraefikServiceV1Alpha1Manifest#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * Headers defines custom headers to be sent to the health check endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#headers DataK8STraefikIoTraefikServiceV1Alpha1Manifest#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Hostname defines the value of hostname in the Host header of the health check request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#hostname DataK8STraefikIoTraefikServiceV1Alpha1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Interval defines the frequency of the health check calls. Default: 30s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#interval DataK8STraefikIoTraefikServiceV1Alpha1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Method defines the healthcheck method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#method DataK8STraefikIoTraefikServiceV1Alpha1Manifest#method}
  */
  readonly method?: string;
  /**
  * Mode defines the health check mode. If defined to grpc, will use the gRPC health check protocol to probe the server. Default: http
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#mode DataK8STraefikIoTraefikServiceV1Alpha1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Path defines the server URL path for the health check endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#path DataK8STraefikIoTraefikServiceV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Port defines the server URL port for the health check endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#port DataK8STraefikIoTraefikServiceV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Scheme replaces the server URL scheme for the health check endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#scheme DataK8STraefikIoTraefikServiceV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
  /**
  * Status defines the expected HTTP status code of the response to the health check request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#status DataK8STraefikIoTraefikServiceV1Alpha1Manifest#status}
  */
  readonly status?: number;
  /**
  * Timeout defines the maximum duration Traefik will wait for a health check request before considering the server unhealthy. Default: 5s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#timeout DataK8STraefikIoTraefikServiceV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsHealthCheckToTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    follow_redirects: cdktf.booleanToTerraform(struct!.followRedirects),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    interval: cdktf.stringToTerraform(struct!.interval),
    method: cdktf.stringToTerraform(struct!.method),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    status: cdktf.numberToTerraform(struct!.status),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsHealthCheckToHclTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    follow_redirects: {
      value: cdktf.booleanToHclTerraform(struct!.followRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.numberToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._followRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirects = this._followRedirects;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._followRedirects = undefined;
      this._headers = undefined;
      this._hostname = undefined;
      this._interval = undefined;
      this._method = undefined;
      this._mode = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
      this._status = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._followRedirects = value.followRedirects;
      this._headers = value.headers;
      this._hostname = value.hostname;
      this._interval = value.interval;
      this._method = value.method;
      this._mode = value.mode;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
      this._status = value.status;
      this._timeout = value.timeout;
    }
  }

  // follow_redirects - computed: false, optional: true, required: false
  private _followRedirects?: boolean | cdktf.IResolvable; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean | cdktf.IResolvable) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsResponseForwarding {
  /**
  * FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body. A negative value means to flush immediately after each write to the client. This configuration is ignored when ReverseProxy recognizes a response as a streaming response; for such responses, writes are flushed to the client immediately. Default: 100ms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#flush_interval DataK8STraefikIoTraefikServiceV1Alpha1Manifest#flush_interval}
  */
  readonly flushInterval?: string;
}

export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsResponseForwardingToTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsResponseForwarding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flush_interval: cdktf.stringToTerraform(struct!.flushInterval),
  }
}


export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsResponseForwardingToHclTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsResponseForwarding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flush_interval: {
      value: cdktf.stringToHclTerraform(struct!.flushInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsResponseForwardingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsResponseForwarding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flushInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushInterval = this._flushInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsResponseForwarding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flushInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flushInterval = value.flushInterval;
    }
  }

  // flush_interval - computed: false, optional: true, required: false
  private _flushInterval?: string; 
  public get flushInterval() {
    return this.getStringAttribute('flush_interval');
  }
  public set flushInterval(value: string) {
    this._flushInterval = value;
  }
  public resetFlushInterval() {
    this._flushInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushIntervalInput() {
    return this._flushInterval;
  }
}
export interface DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsStickyCookie {
  /**
  * HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#http_only DataK8STraefikIoTraefikServiceV1Alpha1Manifest#http_only}
  */
  readonly httpOnly?: boolean | cdktf.IResolvable;
  /**
  * MaxAge indicates the number of seconds until the cookie expires. When set to a negative number, the cookie expires immediately. When set to zero, the cookie never expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#max_age DataK8STraefikIoTraefikServiceV1Alpha1Manifest#max_age}
  */
  readonly maxAge?: number;
  /**
  * Name defines the Cookie name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#name DataK8STraefikIoTraefikServiceV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * SameSite defines the same site policy. More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#same_site DataK8STraefikIoTraefikServiceV1Alpha1Manifest#same_site}
  */
  readonly sameSite?: string;
  /**
  * Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#secure DataK8STraefikIoTraefikServiceV1Alpha1Manifest#secure}
  */
  readonly secure?: boolean | cdktf.IResolvable;
}

export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsStickyCookieToTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsStickyCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_only: cdktf.booleanToTerraform(struct!.httpOnly),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
    name: cdktf.stringToTerraform(struct!.name),
    same_site: cdktf.stringToTerraform(struct!.sameSite),
    secure: cdktf.booleanToTerraform(struct!.secure),
  }
}


export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsStickyCookieToHclTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsStickyCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_only: {
      value: cdktf.booleanToHclTerraform(struct!.httpOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    same_site: {
      value: cdktf.stringToHclTerraform(struct!.sameSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure: {
      value: cdktf.booleanToHclTerraform(struct!.secure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsStickyCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsStickyCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpOnly = this._httpOnly;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sameSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameSite = this._sameSite;
    }
    if (this._secure !== undefined) {
      hasAnyValues = true;
      internalValueResult.secure = this._secure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsStickyCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpOnly = undefined;
      this._maxAge = undefined;
      this._name = undefined;
      this._sameSite = undefined;
      this._secure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpOnly = value.httpOnly;
      this._maxAge = value.maxAge;
      this._name = value.name;
      this._sameSite = value.sameSite;
      this._secure = value.secure;
    }
  }

  // http_only - computed: false, optional: true, required: false
  private _httpOnly?: boolean | cdktf.IResolvable; 
  public get httpOnly() {
    return this.getBooleanAttribute('http_only');
  }
  public set httpOnly(value: boolean | cdktf.IResolvable) {
    this._httpOnly = value;
  }
  public resetHttpOnly() {
    this._httpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpOnlyInput() {
    return this._httpOnly;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
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

  // same_site - computed: false, optional: true, required: false
  private _sameSite?: string; 
  public get sameSite() {
    return this.getStringAttribute('same_site');
  }
  public set sameSite(value: string) {
    this._sameSite = value;
  }
  public resetSameSite() {
    this._sameSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameSiteInput() {
    return this._sameSite;
  }

  // secure - computed: false, optional: true, required: false
  private _secure?: boolean | cdktf.IResolvable; 
  public get secure() {
    return this.getBooleanAttribute('secure');
  }
  public set secure(value: boolean | cdktf.IResolvable) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }
}
export interface DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsSticky {
  /**
  * Cookie defines the sticky cookie configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#cookie DataK8STraefikIoTraefikServiceV1Alpha1Manifest#cookie}
  */
  readonly cookie?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsStickyCookie;
}

export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsStickyToTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsSticky | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsStickyCookieToTerraform(struct!.cookie),
  }
}


export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsStickyToHclTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsSticky | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsStickyCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsStickyCookie",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsStickyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsSticky | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsSticky | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookie.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookie.internalValue = value.cookie;
    }
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsStickyCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsStickyCookie) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }
}
export interface DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrors {
  /**
  * Healthcheck defines health checks for ExternalName services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#health_check DataK8STraefikIoTraefikServiceV1Alpha1Manifest#health_check}
  */
  readonly healthCheck?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsHealthCheck;
  /**
  * Kind defines the kind of the Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#kind DataK8STraefikIoTraefikServiceV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name defines the name of the referenced Kubernetes Service or TraefikService. The differentiation between the two is specified in the Kind field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#name DataK8STraefikIoTraefikServiceV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#namespace DataK8STraefikIoTraefikServiceV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * NativeLB controls, when creating the load-balancer, whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP. The Kubernetes Service itself does load-balance to the pods. By default, NativeLB is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#native_lb DataK8STraefikIoTraefikServiceV1Alpha1Manifest#native_lb}
  */
  readonly nativeLb?: boolean | cdktf.IResolvable;
  /**
  * NodePortLB controls, when creating the load-balancer, whether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort. It allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes. By default, NodePortLB is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#node_port_lb DataK8STraefikIoTraefikServiceV1Alpha1Manifest#node_port_lb}
  */
  readonly nodePortLb?: boolean | cdktf.IResolvable;
  /**
  * PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service. By default, passHostHeader is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#pass_host_header DataK8STraefikIoTraefikServiceV1Alpha1Manifest#pass_host_header}
  */
  readonly passHostHeader?: boolean | cdktf.IResolvable;
  /**
  * Percent defines the part of the traffic to mirror. Supported values: 0 to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#percent DataK8STraefikIoTraefikServiceV1Alpha1Manifest#percent}
  */
  readonly percent?: number;
  /**
  * Port defines the port of a Kubernetes Service. This can be a reference to a named port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#port DataK8STraefikIoTraefikServiceV1Alpha1Manifest#port}
  */
  readonly port?: string;
  /**
  * ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#response_forwarding DataK8STraefikIoTraefikServiceV1Alpha1Manifest#response_forwarding}
  */
  readonly responseForwarding?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsResponseForwarding;
  /**
  * Scheme defines the scheme to use for the request to the upstream Kubernetes Service. It defaults to https when Kubernetes Service port is 443, http otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#scheme DataK8STraefikIoTraefikServiceV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
  /**
  * ServersTransport defines the name of ServersTransport resource to use. It allows to configure the transport between Traefik and your servers. Can only be used on a Kubernetes Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#servers_transport DataK8STraefikIoTraefikServiceV1Alpha1Manifest#servers_transport}
  */
  readonly serversTransport?: string;
  /**
  * Sticky defines the sticky sessions configuration. More info: https://doc.traefik.io/traefik/v3.2/routing/services/#sticky-sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#sticky DataK8STraefikIoTraefikServiceV1Alpha1Manifest#sticky}
  */
  readonly sticky?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsSticky;
  /**
  * Strategy defines the load balancing strategy between the servers. RoundRobin is the only supported value at the moment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#strategy DataK8STraefikIoTraefikServiceV1Alpha1Manifest#strategy}
  */
  readonly strategy?: string;
  /**
  * Weight defines the weight and should only be specified when Name references a TraefikService object (and to be precise, one that embeds a Weighted Round Robin).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#weight DataK8STraefikIoTraefikServiceV1Alpha1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsToTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsHealthCheckToTerraform(struct!.healthCheck),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    native_lb: cdktf.booleanToTerraform(struct!.nativeLb),
    node_port_lb: cdktf.booleanToTerraform(struct!.nodePortLb),
    pass_host_header: cdktf.booleanToTerraform(struct!.passHostHeader),
    percent: cdktf.numberToTerraform(struct!.percent),
    port: cdktf.stringToTerraform(struct!.port),
    response_forwarding: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsResponseForwardingToTerraform(struct!.responseForwarding),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    servers_transport: cdktf.stringToTerraform(struct!.serversTransport),
    sticky: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsStickyToTerraform(struct!.sticky),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsToHclTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check: {
      value: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsHealthCheck",
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
    native_lb: {
      value: cdktf.booleanToHclTerraform(struct!.nativeLb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_port_lb: {
      value: cdktf.booleanToHclTerraform(struct!.nodePortLb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pass_host_header: {
      value: cdktf.booleanToHclTerraform(struct!.passHostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    percent: {
      value: cdktf.numberToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_forwarding: {
      value: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsResponseForwardingToHclTerraform(struct!.responseForwarding),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsResponseForwarding",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servers_transport: {
      value: cdktf.stringToHclTerraform(struct!.serversTransport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sticky: {
      value: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsStickyToHclTerraform(struct!.sticky),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsSticky",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
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
    if (this._nativeLb !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeLb = this._nativeLb;
    }
    if (this._nodePortLb !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePortLb = this._nodePortLb;
    }
    if (this._passHostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.passHostHeader = this._passHostHeader;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._responseForwarding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseForwarding = this._responseForwarding?.internalValue;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._serversTransport !== undefined) {
      hasAnyValues = true;
      internalValueResult.serversTransport = this._serversTransport;
    }
    if (this._sticky?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sticky = this._sticky?.internalValue;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthCheck.internalValue = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._nativeLb = undefined;
      this._nodePortLb = undefined;
      this._passHostHeader = undefined;
      this._percent = undefined;
      this._port = undefined;
      this._responseForwarding.internalValue = undefined;
      this._scheme = undefined;
      this._serversTransport = undefined;
      this._sticky.internalValue = undefined;
      this._strategy = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthCheck.internalValue = value.healthCheck;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._nativeLb = value.nativeLb;
      this._nodePortLb = value.nodePortLb;
      this._passHostHeader = value.passHostHeader;
      this._percent = value.percent;
      this._port = value.port;
      this._responseForwarding.internalValue = value.responseForwarding;
      this._scheme = value.scheme;
      this._serversTransport = value.serversTransport;
      this._sticky.internalValue = value.sticky;
      this._strategy = value.strategy;
      this._weight = value.weight;
    }
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
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

  // native_lb - computed: false, optional: true, required: false
  private _nativeLb?: boolean | cdktf.IResolvable; 
  public get nativeLb() {
    return this.getBooleanAttribute('native_lb');
  }
  public set nativeLb(value: boolean | cdktf.IResolvable) {
    this._nativeLb = value;
  }
  public resetNativeLb() {
    this._nativeLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeLbInput() {
    return this._nativeLb;
  }

  // node_port_lb - computed: false, optional: true, required: false
  private _nodePortLb?: boolean | cdktf.IResolvable; 
  public get nodePortLb() {
    return this.getBooleanAttribute('node_port_lb');
  }
  public set nodePortLb(value: boolean | cdktf.IResolvable) {
    this._nodePortLb = value;
  }
  public resetNodePortLb() {
    this._nodePortLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePortLbInput() {
    return this._nodePortLb;
  }

  // pass_host_header - computed: false, optional: true, required: false
  private _passHostHeader?: boolean | cdktf.IResolvable; 
  public get passHostHeader() {
    return this.getBooleanAttribute('pass_host_header');
  }
  public set passHostHeader(value: boolean | cdktf.IResolvable) {
    this._passHostHeader = value;
  }
  public resetPassHostHeader() {
    this._passHostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passHostHeaderInput() {
    return this._passHostHeader;
  }

  // percent - computed: false, optional: true, required: false
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  public resetPercent() {
    this._percent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // response_forwarding - computed: false, optional: true, required: false
  private _responseForwarding = new DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsResponseForwardingOutputReference(this, "response_forwarding");
  public get responseForwarding() {
    return this._responseForwarding;
  }
  public putResponseForwarding(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsResponseForwarding) {
    this._responseForwarding.internalValue = value;
  }
  public resetResponseForwarding() {
    this._responseForwarding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseForwardingInput() {
    return this._responseForwarding.internalValue;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // servers_transport - computed: false, optional: true, required: false
  private _serversTransport?: string; 
  public get serversTransport() {
    return this.getStringAttribute('servers_transport');
  }
  public set serversTransport(value: string) {
    this._serversTransport = value;
  }
  public resetServersTransport() {
    this._serversTransport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversTransportInput() {
    return this._serversTransport;
  }

  // sticky - computed: false, optional: true, required: false
  private _sticky = new DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsStickyOutputReference(this, "sticky");
  public get sticky() {
    return this._sticky;
  }
  public putSticky(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsSticky) {
    this._sticky.internalValue = value;
  }
  public resetSticky() {
    this._sticky.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickyInput() {
    return this._sticky.internalValue;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsList extends cdktf.ComplexList {
  public internalValue? : DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrors[] | cdktf.IResolvable

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
  public get(index: number): DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsOutputReference {
    return new DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringResponseForwarding {
  /**
  * FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body. A negative value means to flush immediately after each write to the client. This configuration is ignored when ReverseProxy recognizes a response as a streaming response; for such responses, writes are flushed to the client immediately. Default: 100ms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#flush_interval DataK8STraefikIoTraefikServiceV1Alpha1Manifest#flush_interval}
  */
  readonly flushInterval?: string;
}

export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringResponseForwardingToTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringResponseForwarding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flush_interval: cdktf.stringToTerraform(struct!.flushInterval),
  }
}


export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringResponseForwardingToHclTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringResponseForwarding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flush_interval: {
      value: cdktf.stringToHclTerraform(struct!.flushInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringResponseForwardingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringResponseForwarding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flushInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushInterval = this._flushInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringResponseForwarding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flushInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flushInterval = value.flushInterval;
    }
  }

  // flush_interval - computed: false, optional: true, required: false
  private _flushInterval?: string; 
  public get flushInterval() {
    return this.getStringAttribute('flush_interval');
  }
  public set flushInterval(value: string) {
    this._flushInterval = value;
  }
  public resetFlushInterval() {
    this._flushInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushIntervalInput() {
    return this._flushInterval;
  }
}
export interface DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringStickyCookie {
  /**
  * HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#http_only DataK8STraefikIoTraefikServiceV1Alpha1Manifest#http_only}
  */
  readonly httpOnly?: boolean | cdktf.IResolvable;
  /**
  * MaxAge indicates the number of seconds until the cookie expires. When set to a negative number, the cookie expires immediately. When set to zero, the cookie never expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#max_age DataK8STraefikIoTraefikServiceV1Alpha1Manifest#max_age}
  */
  readonly maxAge?: number;
  /**
  * Name defines the Cookie name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#name DataK8STraefikIoTraefikServiceV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * SameSite defines the same site policy. More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#same_site DataK8STraefikIoTraefikServiceV1Alpha1Manifest#same_site}
  */
  readonly sameSite?: string;
  /**
  * Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#secure DataK8STraefikIoTraefikServiceV1Alpha1Manifest#secure}
  */
  readonly secure?: boolean | cdktf.IResolvable;
}

export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringStickyCookieToTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringStickyCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_only: cdktf.booleanToTerraform(struct!.httpOnly),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
    name: cdktf.stringToTerraform(struct!.name),
    same_site: cdktf.stringToTerraform(struct!.sameSite),
    secure: cdktf.booleanToTerraform(struct!.secure),
  }
}


export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringStickyCookieToHclTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringStickyCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_only: {
      value: cdktf.booleanToHclTerraform(struct!.httpOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    same_site: {
      value: cdktf.stringToHclTerraform(struct!.sameSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure: {
      value: cdktf.booleanToHclTerraform(struct!.secure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringStickyCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringStickyCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpOnly = this._httpOnly;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sameSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameSite = this._sameSite;
    }
    if (this._secure !== undefined) {
      hasAnyValues = true;
      internalValueResult.secure = this._secure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringStickyCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpOnly = undefined;
      this._maxAge = undefined;
      this._name = undefined;
      this._sameSite = undefined;
      this._secure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpOnly = value.httpOnly;
      this._maxAge = value.maxAge;
      this._name = value.name;
      this._sameSite = value.sameSite;
      this._secure = value.secure;
    }
  }

  // http_only - computed: false, optional: true, required: false
  private _httpOnly?: boolean | cdktf.IResolvable; 
  public get httpOnly() {
    return this.getBooleanAttribute('http_only');
  }
  public set httpOnly(value: boolean | cdktf.IResolvable) {
    this._httpOnly = value;
  }
  public resetHttpOnly() {
    this._httpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpOnlyInput() {
    return this._httpOnly;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
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

  // same_site - computed: false, optional: true, required: false
  private _sameSite?: string; 
  public get sameSite() {
    return this.getStringAttribute('same_site');
  }
  public set sameSite(value: string) {
    this._sameSite = value;
  }
  public resetSameSite() {
    this._sameSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameSiteInput() {
    return this._sameSite;
  }

  // secure - computed: false, optional: true, required: false
  private _secure?: boolean | cdktf.IResolvable; 
  public get secure() {
    return this.getBooleanAttribute('secure');
  }
  public set secure(value: boolean | cdktf.IResolvable) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }
}
export interface DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringSticky {
  /**
  * Cookie defines the sticky cookie configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#cookie DataK8STraefikIoTraefikServiceV1Alpha1Manifest#cookie}
  */
  readonly cookie?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringStickyCookie;
}

export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringStickyToTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringSticky | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringStickyCookieToTerraform(struct!.cookie),
  }
}


export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringStickyToHclTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringSticky | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringStickyCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringStickyCookie",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringStickyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringSticky | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringSticky | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookie.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookie.internalValue = value.cookie;
    }
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringStickyCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringStickyCookie) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }
}
export interface DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroring {
  /**
  * Healthcheck defines health checks for ExternalName services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#health_check DataK8STraefikIoTraefikServiceV1Alpha1Manifest#health_check}
  */
  readonly healthCheck?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringHealthCheck;
  /**
  * Kind defines the kind of the Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#kind DataK8STraefikIoTraefikServiceV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * MaxBodySize defines the maximum size allowed for the body of the request. If the body is larger, the request is not mirrored. Default value is -1, which means unlimited size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#max_body_size DataK8STraefikIoTraefikServiceV1Alpha1Manifest#max_body_size}
  */
  readonly maxBodySize?: number;
  /**
  * MirrorBody defines whether the body of the request should be mirrored. Default value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#mirror_body DataK8STraefikIoTraefikServiceV1Alpha1Manifest#mirror_body}
  */
  readonly mirrorBody?: boolean | cdktf.IResolvable;
  /**
  * Mirrors defines the list of mirrors where Traefik will duplicate the traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#mirrors DataK8STraefikIoTraefikServiceV1Alpha1Manifest#mirrors}
  */
  readonly mirrors?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrors[] | cdktf.IResolvable;
  /**
  * Name defines the name of the referenced Kubernetes Service or TraefikService. The differentiation between the two is specified in the Kind field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#name DataK8STraefikIoTraefikServiceV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#namespace DataK8STraefikIoTraefikServiceV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * NativeLB controls, when creating the load-balancer, whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP. The Kubernetes Service itself does load-balance to the pods. By default, NativeLB is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#native_lb DataK8STraefikIoTraefikServiceV1Alpha1Manifest#native_lb}
  */
  readonly nativeLb?: boolean | cdktf.IResolvable;
  /**
  * NodePortLB controls, when creating the load-balancer, whether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort. It allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes. By default, NodePortLB is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#node_port_lb DataK8STraefikIoTraefikServiceV1Alpha1Manifest#node_port_lb}
  */
  readonly nodePortLb?: boolean | cdktf.IResolvable;
  /**
  * PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service. By default, passHostHeader is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#pass_host_header DataK8STraefikIoTraefikServiceV1Alpha1Manifest#pass_host_header}
  */
  readonly passHostHeader?: boolean | cdktf.IResolvable;
  /**
  * Port defines the port of a Kubernetes Service. This can be a reference to a named port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#port DataK8STraefikIoTraefikServiceV1Alpha1Manifest#port}
  */
  readonly port?: string;
  /**
  * ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#response_forwarding DataK8STraefikIoTraefikServiceV1Alpha1Manifest#response_forwarding}
  */
  readonly responseForwarding?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringResponseForwarding;
  /**
  * Scheme defines the scheme to use for the request to the upstream Kubernetes Service. It defaults to https when Kubernetes Service port is 443, http otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#scheme DataK8STraefikIoTraefikServiceV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
  /**
  * ServersTransport defines the name of ServersTransport resource to use. It allows to configure the transport between Traefik and your servers. Can only be used on a Kubernetes Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#servers_transport DataK8STraefikIoTraefikServiceV1Alpha1Manifest#servers_transport}
  */
  readonly serversTransport?: string;
  /**
  * Sticky defines the sticky sessions configuration. More info: https://doc.traefik.io/traefik/v3.2/routing/services/#sticky-sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#sticky DataK8STraefikIoTraefikServiceV1Alpha1Manifest#sticky}
  */
  readonly sticky?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringSticky;
  /**
  * Strategy defines the load balancing strategy between the servers. RoundRobin is the only supported value at the moment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#strategy DataK8STraefikIoTraefikServiceV1Alpha1Manifest#strategy}
  */
  readonly strategy?: string;
  /**
  * Weight defines the weight and should only be specified when Name references a TraefikService object (and to be precise, one that embeds a Weighted Round Robin).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#weight DataK8STraefikIoTraefikServiceV1Alpha1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringToTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringHealthCheckToTerraform(struct!.healthCheck),
    kind: cdktf.stringToTerraform(struct!.kind),
    max_body_size: cdktf.numberToTerraform(struct!.maxBodySize),
    mirror_body: cdktf.booleanToTerraform(struct!.mirrorBody),
    mirrors: cdktf.listMapper(dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsToTerraform, false)(struct!.mirrors),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    native_lb: cdktf.booleanToTerraform(struct!.nativeLb),
    node_port_lb: cdktf.booleanToTerraform(struct!.nodePortLb),
    pass_host_header: cdktf.booleanToTerraform(struct!.passHostHeader),
    port: cdktf.stringToTerraform(struct!.port),
    response_forwarding: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringResponseForwardingToTerraform(struct!.responseForwarding),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    servers_transport: cdktf.stringToTerraform(struct!.serversTransport),
    sticky: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringStickyToTerraform(struct!.sticky),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringToHclTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check: {
      value: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringHealthCheck",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_body_size: {
      value: cdktf.numberToHclTerraform(struct!.maxBodySize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mirror_body: {
      value: cdktf.booleanToHclTerraform(struct!.mirrorBody),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mirrors: {
      value: cdktf.listMapperHcl(dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsToHclTerraform, false)(struct!.mirrors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsList",
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
    native_lb: {
      value: cdktf.booleanToHclTerraform(struct!.nativeLb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_port_lb: {
      value: cdktf.booleanToHclTerraform(struct!.nodePortLb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pass_host_header: {
      value: cdktf.booleanToHclTerraform(struct!.passHostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_forwarding: {
      value: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringResponseForwardingToHclTerraform(struct!.responseForwarding),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringResponseForwarding",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servers_transport: {
      value: cdktf.stringToHclTerraform(struct!.serversTransport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sticky: {
      value: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringStickyToHclTerraform(struct!.sticky),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringSticky",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._maxBodySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBodySize = this._maxBodySize;
    }
    if (this._mirrorBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorBody = this._mirrorBody;
    }
    if (this._mirrors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrors = this._mirrors?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._nativeLb !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeLb = this._nativeLb;
    }
    if (this._nodePortLb !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePortLb = this._nodePortLb;
    }
    if (this._passHostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.passHostHeader = this._passHostHeader;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._responseForwarding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseForwarding = this._responseForwarding?.internalValue;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._serversTransport !== undefined) {
      hasAnyValues = true;
      internalValueResult.serversTransport = this._serversTransport;
    }
    if (this._sticky?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sticky = this._sticky?.internalValue;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthCheck.internalValue = undefined;
      this._kind = undefined;
      this._maxBodySize = undefined;
      this._mirrorBody = undefined;
      this._mirrors.internalValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._nativeLb = undefined;
      this._nodePortLb = undefined;
      this._passHostHeader = undefined;
      this._port = undefined;
      this._responseForwarding.internalValue = undefined;
      this._scheme = undefined;
      this._serversTransport = undefined;
      this._sticky.internalValue = undefined;
      this._strategy = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthCheck.internalValue = value.healthCheck;
      this._kind = value.kind;
      this._maxBodySize = value.maxBodySize;
      this._mirrorBody = value.mirrorBody;
      this._mirrors.internalValue = value.mirrors;
      this._name = value.name;
      this._namespace = value.namespace;
      this._nativeLb = value.nativeLb;
      this._nodePortLb = value.nodePortLb;
      this._passHostHeader = value.passHostHeader;
      this._port = value.port;
      this._responseForwarding.internalValue = value.responseForwarding;
      this._scheme = value.scheme;
      this._serversTransport = value.serversTransport;
      this._sticky.internalValue = value.sticky;
      this._strategy = value.strategy;
      this._weight = value.weight;
    }
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
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

  // max_body_size - computed: false, optional: true, required: false
  private _maxBodySize?: number; 
  public get maxBodySize() {
    return this.getNumberAttribute('max_body_size');
  }
  public set maxBodySize(value: number) {
    this._maxBodySize = value;
  }
  public resetMaxBodySize() {
    this._maxBodySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBodySizeInput() {
    return this._maxBodySize;
  }

  // mirror_body - computed: false, optional: true, required: false
  private _mirrorBody?: boolean | cdktf.IResolvable; 
  public get mirrorBody() {
    return this.getBooleanAttribute('mirror_body');
  }
  public set mirrorBody(value: boolean | cdktf.IResolvable) {
    this._mirrorBody = value;
  }
  public resetMirrorBody() {
    this._mirrorBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorBodyInput() {
    return this._mirrorBody;
  }

  // mirrors - computed: false, optional: true, required: false
  private _mirrors = new DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrorsList(this, "mirrors", false);
  public get mirrors() {
    return this._mirrors;
  }
  public putMirrors(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringMirrors[] | cdktf.IResolvable) {
    this._mirrors.internalValue = value;
  }
  public resetMirrors() {
    this._mirrors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorsInput() {
    return this._mirrors.internalValue;
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

  // native_lb - computed: false, optional: true, required: false
  private _nativeLb?: boolean | cdktf.IResolvable; 
  public get nativeLb() {
    return this.getBooleanAttribute('native_lb');
  }
  public set nativeLb(value: boolean | cdktf.IResolvable) {
    this._nativeLb = value;
  }
  public resetNativeLb() {
    this._nativeLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeLbInput() {
    return this._nativeLb;
  }

  // node_port_lb - computed: false, optional: true, required: false
  private _nodePortLb?: boolean | cdktf.IResolvable; 
  public get nodePortLb() {
    return this.getBooleanAttribute('node_port_lb');
  }
  public set nodePortLb(value: boolean | cdktf.IResolvable) {
    this._nodePortLb = value;
  }
  public resetNodePortLb() {
    this._nodePortLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePortLbInput() {
    return this._nodePortLb;
  }

  // pass_host_header - computed: false, optional: true, required: false
  private _passHostHeader?: boolean | cdktf.IResolvable; 
  public get passHostHeader() {
    return this.getBooleanAttribute('pass_host_header');
  }
  public set passHostHeader(value: boolean | cdktf.IResolvable) {
    this._passHostHeader = value;
  }
  public resetPassHostHeader() {
    this._passHostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passHostHeaderInput() {
    return this._passHostHeader;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // response_forwarding - computed: false, optional: true, required: false
  private _responseForwarding = new DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringResponseForwardingOutputReference(this, "response_forwarding");
  public get responseForwarding() {
    return this._responseForwarding;
  }
  public putResponseForwarding(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringResponseForwarding) {
    this._responseForwarding.internalValue = value;
  }
  public resetResponseForwarding() {
    this._responseForwarding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseForwardingInput() {
    return this._responseForwarding.internalValue;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // servers_transport - computed: false, optional: true, required: false
  private _serversTransport?: string; 
  public get serversTransport() {
    return this.getStringAttribute('servers_transport');
  }
  public set serversTransport(value: string) {
    this._serversTransport = value;
  }
  public resetServersTransport() {
    this._serversTransport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversTransportInput() {
    return this._serversTransport;
  }

  // sticky - computed: false, optional: true, required: false
  private _sticky = new DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringStickyOutputReference(this, "sticky");
  public get sticky() {
    return this._sticky;
  }
  public putSticky(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringSticky) {
    this._sticky.internalValue = value;
  }
  public resetSticky() {
    this._sticky.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickyInput() {
    return this._sticky.internalValue;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}
export interface DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesHealthCheck {
  /**
  * FollowRedirects defines whether redirects should be followed during the health check calls. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#follow_redirects DataK8STraefikIoTraefikServiceV1Alpha1Manifest#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * Headers defines custom headers to be sent to the health check endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#headers DataK8STraefikIoTraefikServiceV1Alpha1Manifest#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Hostname defines the value of hostname in the Host header of the health check request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#hostname DataK8STraefikIoTraefikServiceV1Alpha1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Interval defines the frequency of the health check calls. Default: 30s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#interval DataK8STraefikIoTraefikServiceV1Alpha1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Method defines the healthcheck method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#method DataK8STraefikIoTraefikServiceV1Alpha1Manifest#method}
  */
  readonly method?: string;
  /**
  * Mode defines the health check mode. If defined to grpc, will use the gRPC health check protocol to probe the server. Default: http
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#mode DataK8STraefikIoTraefikServiceV1Alpha1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Path defines the server URL path for the health check endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#path DataK8STraefikIoTraefikServiceV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Port defines the server URL port for the health check endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#port DataK8STraefikIoTraefikServiceV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Scheme replaces the server URL scheme for the health check endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#scheme DataK8STraefikIoTraefikServiceV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
  /**
  * Status defines the expected HTTP status code of the response to the health check request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#status DataK8STraefikIoTraefikServiceV1Alpha1Manifest#status}
  */
  readonly status?: number;
  /**
  * Timeout defines the maximum duration Traefik will wait for a health check request before considering the server unhealthy. Default: 5s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#timeout DataK8STraefikIoTraefikServiceV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesHealthCheckToTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    follow_redirects: cdktf.booleanToTerraform(struct!.followRedirects),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    interval: cdktf.stringToTerraform(struct!.interval),
    method: cdktf.stringToTerraform(struct!.method),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    status: cdktf.numberToTerraform(struct!.status),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesHealthCheckToHclTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    follow_redirects: {
      value: cdktf.booleanToHclTerraform(struct!.followRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.numberToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._followRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirects = this._followRedirects;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._followRedirects = undefined;
      this._headers = undefined;
      this._hostname = undefined;
      this._interval = undefined;
      this._method = undefined;
      this._mode = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
      this._status = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._followRedirects = value.followRedirects;
      this._headers = value.headers;
      this._hostname = value.hostname;
      this._interval = value.interval;
      this._method = value.method;
      this._mode = value.mode;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
      this._status = value.status;
      this._timeout = value.timeout;
    }
  }

  // follow_redirects - computed: false, optional: true, required: false
  private _followRedirects?: boolean | cdktf.IResolvable; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean | cdktf.IResolvable) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesResponseForwarding {
  /**
  * FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body. A negative value means to flush immediately after each write to the client. This configuration is ignored when ReverseProxy recognizes a response as a streaming response; for such responses, writes are flushed to the client immediately. Default: 100ms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#flush_interval DataK8STraefikIoTraefikServiceV1Alpha1Manifest#flush_interval}
  */
  readonly flushInterval?: string;
}

export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesResponseForwardingToTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesResponseForwarding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flush_interval: cdktf.stringToTerraform(struct!.flushInterval),
  }
}


export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesResponseForwardingToHclTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesResponseForwarding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flush_interval: {
      value: cdktf.stringToHclTerraform(struct!.flushInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesResponseForwardingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesResponseForwarding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flushInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushInterval = this._flushInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesResponseForwarding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flushInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flushInterval = value.flushInterval;
    }
  }

  // flush_interval - computed: false, optional: true, required: false
  private _flushInterval?: string; 
  public get flushInterval() {
    return this.getStringAttribute('flush_interval');
  }
  public set flushInterval(value: string) {
    this._flushInterval = value;
  }
  public resetFlushInterval() {
    this._flushInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushIntervalInput() {
    return this._flushInterval;
  }
}
export interface DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesStickyCookie {
  /**
  * HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#http_only DataK8STraefikIoTraefikServiceV1Alpha1Manifest#http_only}
  */
  readonly httpOnly?: boolean | cdktf.IResolvable;
  /**
  * MaxAge indicates the number of seconds until the cookie expires. When set to a negative number, the cookie expires immediately. When set to zero, the cookie never expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#max_age DataK8STraefikIoTraefikServiceV1Alpha1Manifest#max_age}
  */
  readonly maxAge?: number;
  /**
  * Name defines the Cookie name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#name DataK8STraefikIoTraefikServiceV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * SameSite defines the same site policy. More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#same_site DataK8STraefikIoTraefikServiceV1Alpha1Manifest#same_site}
  */
  readonly sameSite?: string;
  /**
  * Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#secure DataK8STraefikIoTraefikServiceV1Alpha1Manifest#secure}
  */
  readonly secure?: boolean | cdktf.IResolvable;
}

export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesStickyCookieToTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesStickyCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_only: cdktf.booleanToTerraform(struct!.httpOnly),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
    name: cdktf.stringToTerraform(struct!.name),
    same_site: cdktf.stringToTerraform(struct!.sameSite),
    secure: cdktf.booleanToTerraform(struct!.secure),
  }
}


export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesStickyCookieToHclTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesStickyCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_only: {
      value: cdktf.booleanToHclTerraform(struct!.httpOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    same_site: {
      value: cdktf.stringToHclTerraform(struct!.sameSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure: {
      value: cdktf.booleanToHclTerraform(struct!.secure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesStickyCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesStickyCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpOnly = this._httpOnly;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sameSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameSite = this._sameSite;
    }
    if (this._secure !== undefined) {
      hasAnyValues = true;
      internalValueResult.secure = this._secure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesStickyCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpOnly = undefined;
      this._maxAge = undefined;
      this._name = undefined;
      this._sameSite = undefined;
      this._secure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpOnly = value.httpOnly;
      this._maxAge = value.maxAge;
      this._name = value.name;
      this._sameSite = value.sameSite;
      this._secure = value.secure;
    }
  }

  // http_only - computed: false, optional: true, required: false
  private _httpOnly?: boolean | cdktf.IResolvable; 
  public get httpOnly() {
    return this.getBooleanAttribute('http_only');
  }
  public set httpOnly(value: boolean | cdktf.IResolvable) {
    this._httpOnly = value;
  }
  public resetHttpOnly() {
    this._httpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpOnlyInput() {
    return this._httpOnly;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
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

  // same_site - computed: false, optional: true, required: false
  private _sameSite?: string; 
  public get sameSite() {
    return this.getStringAttribute('same_site');
  }
  public set sameSite(value: string) {
    this._sameSite = value;
  }
  public resetSameSite() {
    this._sameSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameSiteInput() {
    return this._sameSite;
  }

  // secure - computed: false, optional: true, required: false
  private _secure?: boolean | cdktf.IResolvable; 
  public get secure() {
    return this.getBooleanAttribute('secure');
  }
  public set secure(value: boolean | cdktf.IResolvable) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }
}
export interface DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesSticky {
  /**
  * Cookie defines the sticky cookie configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#cookie DataK8STraefikIoTraefikServiceV1Alpha1Manifest#cookie}
  */
  readonly cookie?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesStickyCookie;
}

export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesStickyToTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesSticky | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesStickyCookieToTerraform(struct!.cookie),
  }
}


export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesStickyToHclTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesSticky | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesStickyCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesStickyCookie",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesStickyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesSticky | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesSticky | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookie.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookie.internalValue = value.cookie;
    }
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesStickyCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesStickyCookie) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }
}
export interface DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServices {
  /**
  * Healthcheck defines health checks for ExternalName services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#health_check DataK8STraefikIoTraefikServiceV1Alpha1Manifest#health_check}
  */
  readonly healthCheck?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesHealthCheck;
  /**
  * Kind defines the kind of the Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#kind DataK8STraefikIoTraefikServiceV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name defines the name of the referenced Kubernetes Service or TraefikService. The differentiation between the two is specified in the Kind field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#name DataK8STraefikIoTraefikServiceV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#namespace DataK8STraefikIoTraefikServiceV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * NativeLB controls, when creating the load-balancer, whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP. The Kubernetes Service itself does load-balance to the pods. By default, NativeLB is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#native_lb DataK8STraefikIoTraefikServiceV1Alpha1Manifest#native_lb}
  */
  readonly nativeLb?: boolean | cdktf.IResolvable;
  /**
  * NodePortLB controls, when creating the load-balancer, whether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort. It allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes. By default, NodePortLB is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#node_port_lb DataK8STraefikIoTraefikServiceV1Alpha1Manifest#node_port_lb}
  */
  readonly nodePortLb?: boolean | cdktf.IResolvable;
  /**
  * PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service. By default, passHostHeader is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#pass_host_header DataK8STraefikIoTraefikServiceV1Alpha1Manifest#pass_host_header}
  */
  readonly passHostHeader?: boolean | cdktf.IResolvable;
  /**
  * Port defines the port of a Kubernetes Service. This can be a reference to a named port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#port DataK8STraefikIoTraefikServiceV1Alpha1Manifest#port}
  */
  readonly port?: string;
  /**
  * ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#response_forwarding DataK8STraefikIoTraefikServiceV1Alpha1Manifest#response_forwarding}
  */
  readonly responseForwarding?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesResponseForwarding;
  /**
  * Scheme defines the scheme to use for the request to the upstream Kubernetes Service. It defaults to https when Kubernetes Service port is 443, http otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#scheme DataK8STraefikIoTraefikServiceV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
  /**
  * ServersTransport defines the name of ServersTransport resource to use. It allows to configure the transport between Traefik and your servers. Can only be used on a Kubernetes Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#servers_transport DataK8STraefikIoTraefikServiceV1Alpha1Manifest#servers_transport}
  */
  readonly serversTransport?: string;
  /**
  * Sticky defines the sticky sessions configuration. More info: https://doc.traefik.io/traefik/v3.2/routing/services/#sticky-sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#sticky DataK8STraefikIoTraefikServiceV1Alpha1Manifest#sticky}
  */
  readonly sticky?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesSticky;
  /**
  * Strategy defines the load balancing strategy between the servers. RoundRobin is the only supported value at the moment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#strategy DataK8STraefikIoTraefikServiceV1Alpha1Manifest#strategy}
  */
  readonly strategy?: string;
  /**
  * Weight defines the weight and should only be specified when Name references a TraefikService object (and to be precise, one that embeds a Weighted Round Robin).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#weight DataK8STraefikIoTraefikServiceV1Alpha1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesToTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesHealthCheckToTerraform(struct!.healthCheck),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    native_lb: cdktf.booleanToTerraform(struct!.nativeLb),
    node_port_lb: cdktf.booleanToTerraform(struct!.nodePortLb),
    pass_host_header: cdktf.booleanToTerraform(struct!.passHostHeader),
    port: cdktf.stringToTerraform(struct!.port),
    response_forwarding: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesResponseForwardingToTerraform(struct!.responseForwarding),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    servers_transport: cdktf.stringToTerraform(struct!.serversTransport),
    sticky: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesStickyToTerraform(struct!.sticky),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesToHclTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check: {
      value: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesHealthCheck",
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
    native_lb: {
      value: cdktf.booleanToHclTerraform(struct!.nativeLb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_port_lb: {
      value: cdktf.booleanToHclTerraform(struct!.nodePortLb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pass_host_header: {
      value: cdktf.booleanToHclTerraform(struct!.passHostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_forwarding: {
      value: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesResponseForwardingToHclTerraform(struct!.responseForwarding),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesResponseForwarding",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servers_transport: {
      value: cdktf.stringToHclTerraform(struct!.serversTransport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sticky: {
      value: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesStickyToHclTerraform(struct!.sticky),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesSticky",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
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
    if (this._nativeLb !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeLb = this._nativeLb;
    }
    if (this._nodePortLb !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePortLb = this._nodePortLb;
    }
    if (this._passHostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.passHostHeader = this._passHostHeader;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._responseForwarding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseForwarding = this._responseForwarding?.internalValue;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._serversTransport !== undefined) {
      hasAnyValues = true;
      internalValueResult.serversTransport = this._serversTransport;
    }
    if (this._sticky?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sticky = this._sticky?.internalValue;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthCheck.internalValue = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._nativeLb = undefined;
      this._nodePortLb = undefined;
      this._passHostHeader = undefined;
      this._port = undefined;
      this._responseForwarding.internalValue = undefined;
      this._scheme = undefined;
      this._serversTransport = undefined;
      this._sticky.internalValue = undefined;
      this._strategy = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthCheck.internalValue = value.healthCheck;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._nativeLb = value.nativeLb;
      this._nodePortLb = value.nodePortLb;
      this._passHostHeader = value.passHostHeader;
      this._port = value.port;
      this._responseForwarding.internalValue = value.responseForwarding;
      this._scheme = value.scheme;
      this._serversTransport = value.serversTransport;
      this._sticky.internalValue = value.sticky;
      this._strategy = value.strategy;
      this._weight = value.weight;
    }
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
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

  // native_lb - computed: false, optional: true, required: false
  private _nativeLb?: boolean | cdktf.IResolvable; 
  public get nativeLb() {
    return this.getBooleanAttribute('native_lb');
  }
  public set nativeLb(value: boolean | cdktf.IResolvable) {
    this._nativeLb = value;
  }
  public resetNativeLb() {
    this._nativeLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeLbInput() {
    return this._nativeLb;
  }

  // node_port_lb - computed: false, optional: true, required: false
  private _nodePortLb?: boolean | cdktf.IResolvable; 
  public get nodePortLb() {
    return this.getBooleanAttribute('node_port_lb');
  }
  public set nodePortLb(value: boolean | cdktf.IResolvable) {
    this._nodePortLb = value;
  }
  public resetNodePortLb() {
    this._nodePortLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePortLbInput() {
    return this._nodePortLb;
  }

  // pass_host_header - computed: false, optional: true, required: false
  private _passHostHeader?: boolean | cdktf.IResolvable; 
  public get passHostHeader() {
    return this.getBooleanAttribute('pass_host_header');
  }
  public set passHostHeader(value: boolean | cdktf.IResolvable) {
    this._passHostHeader = value;
  }
  public resetPassHostHeader() {
    this._passHostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passHostHeaderInput() {
    return this._passHostHeader;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // response_forwarding - computed: false, optional: true, required: false
  private _responseForwarding = new DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesResponseForwardingOutputReference(this, "response_forwarding");
  public get responseForwarding() {
    return this._responseForwarding;
  }
  public putResponseForwarding(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesResponseForwarding) {
    this._responseForwarding.internalValue = value;
  }
  public resetResponseForwarding() {
    this._responseForwarding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseForwardingInput() {
    return this._responseForwarding.internalValue;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // servers_transport - computed: false, optional: true, required: false
  private _serversTransport?: string; 
  public get serversTransport() {
    return this.getStringAttribute('servers_transport');
  }
  public set serversTransport(value: string) {
    this._serversTransport = value;
  }
  public resetServersTransport() {
    this._serversTransport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversTransportInput() {
    return this._serversTransport;
  }

  // sticky - computed: false, optional: true, required: false
  private _sticky = new DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesStickyOutputReference(this, "sticky");
  public get sticky() {
    return this._sticky;
  }
  public putSticky(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesSticky) {
    this._sticky.internalValue = value;
  }
  public resetSticky() {
    this._sticky.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickyInput() {
    return this._sticky.internalValue;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesList extends cdktf.ComplexList {
  public internalValue? : DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServices[] | cdktf.IResolvable

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
  public get(index: number): DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesOutputReference {
    return new DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedStickyCookie {
  /**
  * HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#http_only DataK8STraefikIoTraefikServiceV1Alpha1Manifest#http_only}
  */
  readonly httpOnly?: boolean | cdktf.IResolvable;
  /**
  * MaxAge indicates the number of seconds until the cookie expires. When set to a negative number, the cookie expires immediately. When set to zero, the cookie never expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#max_age DataK8STraefikIoTraefikServiceV1Alpha1Manifest#max_age}
  */
  readonly maxAge?: number;
  /**
  * Name defines the Cookie name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#name DataK8STraefikIoTraefikServiceV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * SameSite defines the same site policy. More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#same_site DataK8STraefikIoTraefikServiceV1Alpha1Manifest#same_site}
  */
  readonly sameSite?: string;
  /**
  * Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#secure DataK8STraefikIoTraefikServiceV1Alpha1Manifest#secure}
  */
  readonly secure?: boolean | cdktf.IResolvable;
}

export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedStickyCookieToTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedStickyCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_only: cdktf.booleanToTerraform(struct!.httpOnly),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
    name: cdktf.stringToTerraform(struct!.name),
    same_site: cdktf.stringToTerraform(struct!.sameSite),
    secure: cdktf.booleanToTerraform(struct!.secure),
  }
}


export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedStickyCookieToHclTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedStickyCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_only: {
      value: cdktf.booleanToHclTerraform(struct!.httpOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    same_site: {
      value: cdktf.stringToHclTerraform(struct!.sameSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure: {
      value: cdktf.booleanToHclTerraform(struct!.secure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedStickyCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedStickyCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpOnly = this._httpOnly;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sameSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameSite = this._sameSite;
    }
    if (this._secure !== undefined) {
      hasAnyValues = true;
      internalValueResult.secure = this._secure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedStickyCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpOnly = undefined;
      this._maxAge = undefined;
      this._name = undefined;
      this._sameSite = undefined;
      this._secure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpOnly = value.httpOnly;
      this._maxAge = value.maxAge;
      this._name = value.name;
      this._sameSite = value.sameSite;
      this._secure = value.secure;
    }
  }

  // http_only - computed: false, optional: true, required: false
  private _httpOnly?: boolean | cdktf.IResolvable; 
  public get httpOnly() {
    return this.getBooleanAttribute('http_only');
  }
  public set httpOnly(value: boolean | cdktf.IResolvable) {
    this._httpOnly = value;
  }
  public resetHttpOnly() {
    this._httpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpOnlyInput() {
    return this._httpOnly;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
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

  // same_site - computed: false, optional: true, required: false
  private _sameSite?: string; 
  public get sameSite() {
    return this.getStringAttribute('same_site');
  }
  public set sameSite(value: string) {
    this._sameSite = value;
  }
  public resetSameSite() {
    this._sameSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameSiteInput() {
    return this._sameSite;
  }

  // secure - computed: false, optional: true, required: false
  private _secure?: boolean | cdktf.IResolvable; 
  public get secure() {
    return this.getBooleanAttribute('secure');
  }
  public set secure(value: boolean | cdktf.IResolvable) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }
}
export interface DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedSticky {
  /**
  * Cookie defines the sticky cookie configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#cookie DataK8STraefikIoTraefikServiceV1Alpha1Manifest#cookie}
  */
  readonly cookie?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedStickyCookie;
}

export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedStickyToTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedSticky | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedStickyCookieToTerraform(struct!.cookie),
  }
}


export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedStickyToHclTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedSticky | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedStickyCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedStickyCookie",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedStickyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedSticky | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedSticky | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookie.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookie.internalValue = value.cookie;
    }
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedStickyCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedStickyCookie) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }
}
export interface DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeighted {
  /**
  * Services defines the list of Kubernetes Service and/or TraefikService to load-balance, with weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#services DataK8STraefikIoTraefikServiceV1Alpha1Manifest#services}
  */
  readonly services?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServices[] | cdktf.IResolvable;
  /**
  * Sticky defines whether sticky sessions are enabled. More info: https://doc.traefik.io/traefik/v3.2/routing/providers/kubernetes-crd/#stickiness-and-load-balancing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#sticky DataK8STraefikIoTraefikServiceV1Alpha1Manifest#sticky}
  */
  readonly sticky?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedSticky;
}

export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedToTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeighted | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    services: cdktf.listMapper(dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesToTerraform, false)(struct!.services),
    sticky: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedStickyToTerraform(struct!.sticky),
  }
}


export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedToHclTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeighted | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    services: {
      value: cdktf.listMapperHcl(dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesToHclTerraform, false)(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesList",
    },
    sticky: {
      value: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedStickyToHclTerraform(struct!.sticky),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedSticky",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeighted | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    if (this._sticky?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sticky = this._sticky?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeighted | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._services.internalValue = undefined;
      this._sticky.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._services.internalValue = value.services;
      this._sticky.internalValue = value.sticky;
    }
  }

  // services - computed: false, optional: true, required: false
  private _services = new DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // sticky - computed: false, optional: true, required: false
  private _sticky = new DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedStickyOutputReference(this, "sticky");
  public get sticky() {
    return this._sticky;
  }
  public putSticky(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedSticky) {
    this._sticky.internalValue = value;
  }
  public resetSticky() {
    this._sticky.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickyInput() {
    return this._sticky.internalValue;
  }
}
export interface DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpec {
  /**
  * Mirroring defines the Mirroring service configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#mirroring DataK8STraefikIoTraefikServiceV1Alpha1Manifest#mirroring}
  */
  readonly mirroring?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroring;
  /**
  * Weighted defines the Weighted Round Robin configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#weighted DataK8STraefikIoTraefikServiceV1Alpha1Manifest#weighted}
  */
  readonly weighted?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeighted;
}

export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecToTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mirroring: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringToTerraform(struct!.mirroring),
    weighted: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedToTerraform(struct!.weighted),
  }
}


export function dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mirroring: {
      value: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringToHclTerraform(struct!.mirroring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroring",
    },
    weighted: {
      value: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedToHclTerraform(struct!.weighted),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeighted",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mirroring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirroring = this._mirroring?.internalValue;
    }
    if (this._weighted?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weighted = this._weighted?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mirroring.internalValue = undefined;
      this._weighted.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mirroring.internalValue = value.mirroring;
      this._weighted.internalValue = value.weighted;
    }
  }

  // mirroring - computed: false, optional: true, required: false
  private _mirroring = new DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroringOutputReference(this, "mirroring");
  public get mirroring() {
    return this._mirroring;
  }
  public putMirroring(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecMirroring) {
    this._mirroring.internalValue = value;
  }
  public resetMirroring() {
    this._mirroring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirroringInput() {
    return this._mirroring.internalValue;
  }

  // weighted - computed: false, optional: true, required: false
  private _weighted = new DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeightedOutputReference(this, "weighted");
  public get weighted() {
    return this._weighted;
  }
  public putWeighted(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecWeighted) {
    this._weighted.internalValue = value;
  }
  public resetWeighted() {
    this._weighted.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedInput() {
    return this._weighted.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest k8s_traefik_io_traefik_service_v1alpha1_manifest}
*/
export class DataK8STraefikIoTraefikServiceV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_traefik_io_traefik_service_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STraefikIoTraefikServiceV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STraefikIoTraefikServiceV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8STraefikIoTraefikServiceV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STraefikIoTraefikServiceV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_traefik_io_traefik_service_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/traefik_io_traefik_service_v1alpha1_manifest k8s_traefik_io_traefik_service_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STraefikIoTraefikServiceV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STraefikIoTraefikServiceV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_traefik_io_traefik_service_v1alpha1_manifest',
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
  private _metadata = new DataK8STraefikIoTraefikServiceV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpec) {
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
      metadata: dataK8STraefikIoTraefikServiceV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STraefikIoTraefikServiceV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STraefikIoTraefikServiceV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8STraefikIoTraefikServiceV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STraefikIoTraefikServiceV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
