// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STraefikIoIngressRouteV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#metadata DataK8STraefikIoIngressRouteV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8STraefikIoIngressRouteV1Alpha1ManifestMetadata;
  /**
  * IngressRouteSpec defines the desired state of IngressRoute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#spec DataK8STraefikIoIngressRouteV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpec;
}
export interface DataK8STraefikIoIngressRouteV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#annotations DataK8STraefikIoIngressRouteV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#labels DataK8STraefikIoIngressRouteV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#name DataK8STraefikIoIngressRouteV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#namespace DataK8STraefikIoIngressRouteV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STraefikIoIngressRouteV1Alpha1ManifestMetadataToTerraform(struct?: DataK8STraefikIoIngressRouteV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STraefikIoIngressRouteV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8STraefikIoIngressRouteV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STraefikIoIngressRouteV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoIngressRouteV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STraefikIoIngressRouteV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesMiddlewares {
  /**
  * Name defines the name of the referenced Middleware resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#name DataK8STraefikIoIngressRouteV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace defines the namespace of the referenced Middleware resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#namespace DataK8STraefikIoIngressRouteV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesMiddlewaresToTerraform(struct?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesMiddlewares | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesMiddlewaresToHclTerraform(struct?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesMiddlewares | cdktf.IResolvable): any {
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

export class DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesMiddlewaresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesMiddlewares | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesMiddlewares | cdktf.IResolvable | undefined) {
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

export class DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesMiddlewaresList extends cdktf.ComplexList {
  public internalValue? : DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesMiddlewares[] | cdktf.IResolvable

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
  public get(index: number): DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesMiddlewaresOutputReference {
    return new DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesMiddlewaresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesHealthCheck {
  /**
  * FollowRedirects defines whether redirects should be followed during the health check calls. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#follow_redirects DataK8STraefikIoIngressRouteV1Alpha1Manifest#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * Headers defines custom headers to be sent to the health check endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#headers DataK8STraefikIoIngressRouteV1Alpha1Manifest#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Hostname defines the value of hostname in the Host header of the health check request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#hostname DataK8STraefikIoIngressRouteV1Alpha1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Interval defines the frequency of the health check calls. Default: 30s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#interval DataK8STraefikIoIngressRouteV1Alpha1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Method defines the healthcheck method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#method DataK8STraefikIoIngressRouteV1Alpha1Manifest#method}
  */
  readonly method?: string;
  /**
  * Mode defines the health check mode. If defined to grpc, will use the gRPC health check protocol to probe the server. Default: http
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#mode DataK8STraefikIoIngressRouteV1Alpha1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Path defines the server URL path for the health check endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#path DataK8STraefikIoIngressRouteV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Port defines the server URL port for the health check endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#port DataK8STraefikIoIngressRouteV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Scheme replaces the server URL scheme for the health check endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#scheme DataK8STraefikIoIngressRouteV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
  /**
  * Status defines the expected HTTP status code of the response to the health check request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#status DataK8STraefikIoIngressRouteV1Alpha1Manifest#status}
  */
  readonly status?: number;
  /**
  * Timeout defines the maximum duration Traefik will wait for a health check request before considering the server unhealthy. Default: 5s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#timeout DataK8STraefikIoIngressRouteV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesHealthCheckToTerraform(struct?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesHealthCheck | cdktf.IResolvable): any {
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


export function dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesHealthCheckToHclTerraform(struct?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesHealthCheck | cdktf.IResolvable): any {
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

export class DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesHealthCheck | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesHealthCheck | cdktf.IResolvable | undefined) {
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
export interface DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesResponseForwarding {
  /**
  * FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body. A negative value means to flush immediately after each write to the client. This configuration is ignored when ReverseProxy recognizes a response as a streaming response; for such responses, writes are flushed to the client immediately. Default: 100ms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#flush_interval DataK8STraefikIoIngressRouteV1Alpha1Manifest#flush_interval}
  */
  readonly flushInterval?: string;
}

export function dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesResponseForwardingToTerraform(struct?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesResponseForwarding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flush_interval: cdktf.stringToTerraform(struct!.flushInterval),
  }
}


export function dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesResponseForwardingToHclTerraform(struct?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesResponseForwarding | cdktf.IResolvable): any {
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

export class DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesResponseForwardingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesResponseForwarding | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesResponseForwarding | cdktf.IResolvable | undefined) {
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
export interface DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesStickyCookie {
  /**
  * HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#http_only DataK8STraefikIoIngressRouteV1Alpha1Manifest#http_only}
  */
  readonly httpOnly?: boolean | cdktf.IResolvable;
  /**
  * MaxAge indicates the number of seconds until the cookie expires. When set to a negative number, the cookie expires immediately. When set to zero, the cookie never expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#max_age DataK8STraefikIoIngressRouteV1Alpha1Manifest#max_age}
  */
  readonly maxAge?: number;
  /**
  * Name defines the Cookie name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#name DataK8STraefikIoIngressRouteV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * SameSite defines the same site policy. More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#same_site DataK8STraefikIoIngressRouteV1Alpha1Manifest#same_site}
  */
  readonly sameSite?: string;
  /**
  * Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#secure DataK8STraefikIoIngressRouteV1Alpha1Manifest#secure}
  */
  readonly secure?: boolean | cdktf.IResolvable;
}

export function dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesStickyCookieToTerraform(struct?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesStickyCookie | cdktf.IResolvable): any {
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


export function dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesStickyCookieToHclTerraform(struct?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesStickyCookie | cdktf.IResolvable): any {
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

export class DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesStickyCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesStickyCookie | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesStickyCookie | cdktf.IResolvable | undefined) {
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
export interface DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesSticky {
  /**
  * Cookie defines the sticky cookie configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#cookie DataK8STraefikIoIngressRouteV1Alpha1Manifest#cookie}
  */
  readonly cookie?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesStickyCookie;
}

export function dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesStickyToTerraform(struct?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesSticky | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesStickyCookieToTerraform(struct!.cookie),
  }
}


export function dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesStickyToHclTerraform(struct?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesSticky | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesStickyCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesStickyCookie",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesStickyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesSticky | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesSticky | cdktf.IResolvable | undefined) {
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
  private _cookie = new DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesStickyCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesStickyCookie) {
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
export interface DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServices {
  /**
  * Healthcheck defines health checks for ExternalName services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#health_check DataK8STraefikIoIngressRouteV1Alpha1Manifest#health_check}
  */
  readonly healthCheck?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesHealthCheck;
  /**
  * Kind defines the kind of the Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#kind DataK8STraefikIoIngressRouteV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name defines the name of the referenced Kubernetes Service or TraefikService. The differentiation between the two is specified in the Kind field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#name DataK8STraefikIoIngressRouteV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#namespace DataK8STraefikIoIngressRouteV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * NativeLB controls, when creating the load-balancer, whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP. The Kubernetes Service itself does load-balance to the pods. By default, NativeLB is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#native_lb DataK8STraefikIoIngressRouteV1Alpha1Manifest#native_lb}
  */
  readonly nativeLb?: boolean | cdktf.IResolvable;
  /**
  * NodePortLB controls, when creating the load-balancer, whether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort. It allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes. By default, NodePortLB is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#node_port_lb DataK8STraefikIoIngressRouteV1Alpha1Manifest#node_port_lb}
  */
  readonly nodePortLb?: boolean | cdktf.IResolvable;
  /**
  * PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service. By default, passHostHeader is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#pass_host_header DataK8STraefikIoIngressRouteV1Alpha1Manifest#pass_host_header}
  */
  readonly passHostHeader?: boolean | cdktf.IResolvable;
  /**
  * Port defines the port of a Kubernetes Service. This can be a reference to a named port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#port DataK8STraefikIoIngressRouteV1Alpha1Manifest#port}
  */
  readonly port?: string;
  /**
  * ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#response_forwarding DataK8STraefikIoIngressRouteV1Alpha1Manifest#response_forwarding}
  */
  readonly responseForwarding?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesResponseForwarding;
  /**
  * Scheme defines the scheme to use for the request to the upstream Kubernetes Service. It defaults to https when Kubernetes Service port is 443, http otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#scheme DataK8STraefikIoIngressRouteV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
  /**
  * ServersTransport defines the name of ServersTransport resource to use. It allows to configure the transport between Traefik and your servers. Can only be used on a Kubernetes Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#servers_transport DataK8STraefikIoIngressRouteV1Alpha1Manifest#servers_transport}
  */
  readonly serversTransport?: string;
  /**
  * Sticky defines the sticky sessions configuration. More info: https://doc.traefik.io/traefik/v3.2/routing/services/#sticky-sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#sticky DataK8STraefikIoIngressRouteV1Alpha1Manifest#sticky}
  */
  readonly sticky?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesSticky;
  /**
  * Strategy defines the load balancing strategy between the servers. RoundRobin is the only supported value at the moment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#strategy DataK8STraefikIoIngressRouteV1Alpha1Manifest#strategy}
  */
  readonly strategy?: string;
  /**
  * Weight defines the weight and should only be specified when Name references a TraefikService object (and to be precise, one that embeds a Weighted Round Robin).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#weight DataK8STraefikIoIngressRouteV1Alpha1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesToTerraform(struct?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check: dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesHealthCheckToTerraform(struct!.healthCheck),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    native_lb: cdktf.booleanToTerraform(struct!.nativeLb),
    node_port_lb: cdktf.booleanToTerraform(struct!.nodePortLb),
    pass_host_header: cdktf.booleanToTerraform(struct!.passHostHeader),
    port: cdktf.stringToTerraform(struct!.port),
    response_forwarding: dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesResponseForwardingToTerraform(struct!.responseForwarding),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    servers_transport: cdktf.stringToTerraform(struct!.serversTransport),
    sticky: dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesStickyToTerraform(struct!.sticky),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesToHclTerraform(struct?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check: {
      value: dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesHealthCheck",
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
      value: dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesResponseForwardingToHclTerraform(struct!.responseForwarding),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesResponseForwarding",
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
      value: dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesStickyToHclTerraform(struct!.sticky),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesSticky",
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

export class DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServices | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServices | cdktf.IResolvable | undefined) {
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
  private _healthCheck = new DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesHealthCheck) {
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
  private _responseForwarding = new DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesResponseForwardingOutputReference(this, "response_forwarding");
  public get responseForwarding() {
    return this._responseForwarding;
  }
  public putResponseForwarding(value: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesResponseForwarding) {
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
  private _sticky = new DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesStickyOutputReference(this, "sticky");
  public get sticky() {
    return this._sticky;
  }
  public putSticky(value: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesSticky) {
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

export class DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesList extends cdktf.ComplexList {
  public internalValue? : DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServices[] | cdktf.IResolvable

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
  public get(index: number): DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesOutputReference {
    return new DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutes {
  /**
  * Kind defines the kind of the route. Rule is the only supported kind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#kind DataK8STraefikIoIngressRouteV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Match defines the router's rule. More info: https://doc.traefik.io/traefik/v3.2/routing/routers/#rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#match DataK8STraefikIoIngressRouteV1Alpha1Manifest#match}
  */
  readonly match: string;
  /**
  * Middlewares defines the list of references to Middleware resources. More info: https://doc.traefik.io/traefik/v3.2/routing/providers/kubernetes-crd/#kind-middleware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#middlewares DataK8STraefikIoIngressRouteV1Alpha1Manifest#middlewares}
  */
  readonly middlewares?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesMiddlewares[] | cdktf.IResolvable;
  /**
  * Priority defines the router's priority. More info: https://doc.traefik.io/traefik/v3.2/routing/routers/#priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#priority DataK8STraefikIoIngressRouteV1Alpha1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * Services defines the list of Service. It can contain any combination of TraefikService and/or reference to a Kubernetes Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#services DataK8STraefikIoIngressRouteV1Alpha1Manifest#services}
  */
  readonly services?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServices[] | cdktf.IResolvable;
  /**
  * Syntax defines the router's rule syntax. More info: https://doc.traefik.io/traefik/v3.2/routing/routers/#rulesyntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#syntax DataK8STraefikIoIngressRouteV1Alpha1Manifest#syntax}
  */
  readonly syntax?: string;
}

export function dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesToTerraform(struct?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    match: cdktf.stringToTerraform(struct!.match),
    middlewares: cdktf.listMapper(dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesMiddlewaresToTerraform, false)(struct!.middlewares),
    priority: cdktf.numberToTerraform(struct!.priority),
    services: cdktf.listMapper(dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesToTerraform, false)(struct!.services),
    syntax: cdktf.stringToTerraform(struct!.syntax),
  }
}


export function dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesToHclTerraform(struct?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    middlewares: {
      value: cdktf.listMapperHcl(dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesMiddlewaresToHclTerraform, false)(struct!.middlewares),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesMiddlewaresList",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    services: {
      value: cdktf.listMapperHcl(dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesToHclTerraform, false)(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesList",
    },
    syntax: {
      value: cdktf.stringToHclTerraform(struct!.syntax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._middlewares?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.middlewares = this._middlewares?.internalValue;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    if (this._syntax !== undefined) {
      hasAnyValues = true;
      internalValueResult.syntax = this._syntax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._match = undefined;
      this._middlewares.internalValue = undefined;
      this._priority = undefined;
      this._services.internalValue = undefined;
      this._syntax = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._match = value.match;
      this._middlewares.internalValue = value.middlewares;
      this._priority = value.priority;
      this._services.internalValue = value.services;
      this._syntax = value.syntax;
    }
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

  // match - computed: false, optional: false, required: true
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // middlewares - computed: false, optional: true, required: false
  private _middlewares = new DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesMiddlewaresList(this, "middlewares", false);
  public get middlewares() {
    return this._middlewares;
  }
  public putMiddlewares(value: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesMiddlewares[] | cdktf.IResolvable) {
    this._middlewares.internalValue = value;
  }
  public resetMiddlewares() {
    this._middlewares.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get middlewaresInput() {
    return this._middlewares.internalValue;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // services - computed: false, optional: true, required: false
  private _services = new DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // syntax - computed: false, optional: true, required: false
  private _syntax?: string; 
  public get syntax() {
    return this.getStringAttribute('syntax');
  }
  public set syntax(value: string) {
    this._syntax = value;
  }
  public resetSyntax() {
    this._syntax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntaxInput() {
    return this._syntax;
  }
}

export class DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesList extends cdktf.ComplexList {
  public internalValue? : DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutes[] | cdktf.IResolvable

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
  public get(index: number): DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesOutputReference {
    return new DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsDomains {
  /**
  * Main defines the main domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#main DataK8STraefikIoIngressRouteV1Alpha1Manifest#main}
  */
  readonly main?: string;
  /**
  * SANs defines the subject alternative domain names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#sans DataK8STraefikIoIngressRouteV1Alpha1Manifest#sans}
  */
  readonly sans?: string[];
}

export function dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsDomainsToTerraform(struct?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    main: cdktf.stringToTerraform(struct!.main),
    sans: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sans),
  }
}


export function dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsDomainsToHclTerraform(struct?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    main: {
      value: cdktf.stringToHclTerraform(struct!.main),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sans: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sans),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._main !== undefined) {
      hasAnyValues = true;
      internalValueResult.main = this._main;
    }
    if (this._sans !== undefined) {
      hasAnyValues = true;
      internalValueResult.sans = this._sans;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._main = undefined;
      this._sans = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._main = value.main;
      this._sans = value.sans;
    }
  }

  // main - computed: false, optional: true, required: false
  private _main?: string; 
  public get main() {
    return this.getStringAttribute('main');
  }
  public set main(value: string) {
    this._main = value;
  }
  public resetMain() {
    this._main = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainInput() {
    return this._main;
  }

  // sans - computed: false, optional: true, required: false
  private _sans?: string[]; 
  public get sans() {
    return this.getListAttribute('sans');
  }
  public set sans(value: string[]) {
    this._sans = value;
  }
  public resetSans() {
    this._sans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sansInput() {
    return this._sans;
  }
}

export class DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsDomainsList extends cdktf.ComplexList {
  public internalValue? : DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsDomains[] | cdktf.IResolvable

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
  public get(index: number): DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsDomainsOutputReference {
    return new DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsOptions {
  /**
  * Name defines the name of the referenced TLSOption. More info: https://doc.traefik.io/traefik/v3.2/routing/providers/kubernetes-crd/#kind-tlsoption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#name DataK8STraefikIoIngressRouteV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace defines the namespace of the referenced TLSOption. More info: https://doc.traefik.io/traefik/v3.2/routing/providers/kubernetes-crd/#kind-tlsoption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#namespace DataK8STraefikIoIngressRouteV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsOptionsToTerraform(struct?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsOptionsToHclTerraform(struct?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsOptions | cdktf.IResolvable): any {
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

export class DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsOptions | cdktf.IResolvable | undefined) {
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
export interface DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsStore {
  /**
  * Name defines the name of the referenced TLSStore. More info: https://doc.traefik.io/traefik/v3.2/routing/providers/kubernetes-crd/#kind-tlsstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#name DataK8STraefikIoIngressRouteV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace defines the namespace of the referenced TLSStore. More info: https://doc.traefik.io/traefik/v3.2/routing/providers/kubernetes-crd/#kind-tlsstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#namespace DataK8STraefikIoIngressRouteV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsStoreToTerraform(struct?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsStoreToHclTerraform(struct?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsStore | cdktf.IResolvable): any {
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

export class DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsStore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsStore | cdktf.IResolvable | undefined) {
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
export interface DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTls {
  /**
  * CertResolver defines the name of the certificate resolver to use. Cert resolvers have to be configured in the static configuration. More info: https://doc.traefik.io/traefik/v3.2/https/acme/#certificate-resolvers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#cert_resolver DataK8STraefikIoIngressRouteV1Alpha1Manifest#cert_resolver}
  */
  readonly certResolver?: string;
  /**
  * Domains defines the list of domains that will be used to issue certificates. More info: https://doc.traefik.io/traefik/v3.2/routing/routers/#domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#domains DataK8STraefikIoIngressRouteV1Alpha1Manifest#domains}
  */
  readonly domains?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsDomains[] | cdktf.IResolvable;
  /**
  * Options defines the reference to a TLSOption, that specifies the parameters of the TLS connection. If not defined, the 'default' TLSOption is used. More info: https://doc.traefik.io/traefik/v3.2/https/tls/#tls-options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#options DataK8STraefikIoIngressRouteV1Alpha1Manifest#options}
  */
  readonly options?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsOptions;
  /**
  * SecretName is the name of the referenced Kubernetes Secret to specify the certificate details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#secret_name DataK8STraefikIoIngressRouteV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
  /**
  * Store defines the reference to the TLSStore, that will be used to store certificates. Please note that only 'default' TLSStore can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#store DataK8STraefikIoIngressRouteV1Alpha1Manifest#store}
  */
  readonly store?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsStore;
}

export function dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsToTerraform(struct?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_resolver: cdktf.stringToTerraform(struct!.certResolver),
    domains: cdktf.listMapper(dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsDomainsToTerraform, false)(struct!.domains),
    options: dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsOptionsToTerraform(struct!.options),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    store: dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsStoreToTerraform(struct!.store),
  }
}


export function dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsToHclTerraform(struct?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_resolver: {
      value: cdktf.stringToHclTerraform(struct!.certResolver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domains: {
      value: cdktf.listMapperHcl(dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsDomainsToHclTerraform, false)(struct!.domains),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsDomainsList",
    },
    options: {
      value: dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsOptions",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store: {
      value: dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsStoreToHclTerraform(struct!.store),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsStore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certResolver !== undefined) {
      hasAnyValues = true;
      internalValueResult.certResolver = this._certResolver;
    }
    if (this._domains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._store?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.store = this._store?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certResolver = undefined;
      this._domains.internalValue = undefined;
      this._options.internalValue = undefined;
      this._secretName = undefined;
      this._store.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certResolver = value.certResolver;
      this._domains.internalValue = value.domains;
      this._options.internalValue = value.options;
      this._secretName = value.secretName;
      this._store.internalValue = value.store;
    }
  }

  // cert_resolver - computed: false, optional: true, required: false
  private _certResolver?: string; 
  public get certResolver() {
    return this.getStringAttribute('cert_resolver');
  }
  public set certResolver(value: string) {
    this._certResolver = value;
  }
  public resetCertResolver() {
    this._certResolver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certResolverInput() {
    return this._certResolver;
  }

  // domains - computed: false, optional: true, required: false
  private _domains = new DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsDomainsList(this, "domains", false);
  public get domains() {
    return this._domains;
  }
  public putDomains(value: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsDomains[] | cdktf.IResolvable) {
    this._domains.internalValue = value;
  }
  public resetDomains() {
    this._domains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // store - computed: false, optional: true, required: false
  private _store = new DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsStoreOutputReference(this, "store");
  public get store() {
    return this._store;
  }
  public putStore(value: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsStore) {
    this._store.internalValue = value;
  }
  public resetStore() {
    this._store.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeInput() {
    return this._store.internalValue;
  }
}
export interface DataK8STraefikIoIngressRouteV1Alpha1ManifestSpec {
  /**
  * EntryPoints defines the list of entry point names to bind to. Entry points have to be configured in the static configuration. More info: https://doc.traefik.io/traefik/v3.2/routing/entrypoints/ Default: all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#entry_points DataK8STraefikIoIngressRouteV1Alpha1Manifest#entry_points}
  */
  readonly entryPoints?: string[];
  /**
  * Routes defines the list of routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#routes DataK8STraefikIoIngressRouteV1Alpha1Manifest#routes}
  */
  readonly routes: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutes[] | cdktf.IResolvable;
  /**
  * TLS defines the TLS configuration. More info: https://doc.traefik.io/traefik/v3.2/routing/routers/#tls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#tls DataK8STraefikIoIngressRouteV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTls;
}

export function dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecToTerraform(struct?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_points: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entryPoints),
    routes: cdktf.listMapper(dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesToTerraform, false)(struct!.routes),
    tls: dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsToTerraform(struct!.tls),
  }
}


export function dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_points: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entryPoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    routes: {
      value: cdktf.listMapperHcl(dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesToHclTerraform, false)(struct!.routes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesList",
    },
    tls: {
      value: dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoIngressRouteV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryPoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryPoints = this._entryPoints;
    }
    if (this._routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entryPoints = undefined;
      this._routes.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entryPoints = value.entryPoints;
      this._routes.internalValue = value.routes;
      this._tls.internalValue = value.tls;
    }
  }

  // entry_points - computed: false, optional: true, required: false
  private _entryPoints?: string[]; 
  public get entryPoints() {
    return this.getListAttribute('entry_points');
  }
  public set entryPoints(value: string[]) {
    this._entryPoints = value;
  }
  public resetEntryPoints() {
    this._entryPoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointsInput() {
    return this._entryPoints;
  }

  // routes - computed: false, optional: false, required: true
  private _routes = new DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecTls) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest k8s_traefik_io_ingress_route_v1alpha1_manifest}
*/
export class DataK8STraefikIoIngressRouteV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_traefik_io_ingress_route_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STraefikIoIngressRouteV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STraefikIoIngressRouteV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8STraefikIoIngressRouteV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STraefikIoIngressRouteV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_traefik_io_ingress_route_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/traefik_io_ingress_route_v1alpha1_manifest k8s_traefik_io_ingress_route_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STraefikIoIngressRouteV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STraefikIoIngressRouteV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_traefik_io_ingress_route_v1alpha1_manifest',
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
  private _metadata = new DataK8STraefikIoIngressRouteV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STraefikIoIngressRouteV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8STraefikIoIngressRouteV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STraefikIoIngressRouteV1Alpha1ManifestSpec) {
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
      metadata: dataK8STraefikIoIngressRouteV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STraefikIoIngressRouteV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STraefikIoIngressRouteV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8STraefikIoIngressRouteV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STraefikIoIngressRouteV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
