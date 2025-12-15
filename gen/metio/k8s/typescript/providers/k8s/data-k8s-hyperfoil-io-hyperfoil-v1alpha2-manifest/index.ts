// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest#metadata DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest#metadata}
  */
  readonly metadata: DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestMetadata;
  /**
  * HyperfoilSpec defines the desired state of Hyperfoil.It Configures Hyperfoil Controller and related resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest#spec DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest#spec}
  */
  readonly spec?: DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpec;
}
export interface DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest#annotations DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest#labels DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest#name DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest#namespace DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SHyperfoilIoHyperfoilV1Alpha2ManifestMetadataToTerraform(struct?: DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SHyperfoilIoHyperfoilV1Alpha2ManifestMetadataToHclTerraform(struct?: DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecAuth {
  /**
  * Optional; Name of secret used for basic authentication. Must contain key 'password'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest#secret DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest#secret}
  */
  readonly secret?: string;
}

export function dataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecAuthToTerraform(struct?: DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecAuthToHclTerraform(struct?: DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secret = value.secret;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecRoute {
  /**
  * Host for the route leading to Controller REST endpoint. Example: hyperfoil.apps.cloud.example.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest#host DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest#host}
  */
  readonly host?: string;
  /**
  * Optional for edge and reencrypt routes, required for passthrough; Name of the secret hosting 'tls.crt', 'tls.key' and optionally 'ca.crt'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest#tls DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest#tls}
  */
  readonly tls?: string;
  /**
  * Either 'http' (for plain-text routes - not recommended), 'edge', 'reencrypt' or 'passthrough'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest#type DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecRouteToTerraform(struct?: DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    tls: cdktf.stringToTerraform(struct!.tls),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecRouteToHclTerraform(struct?: DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecRoute | cdktf.IResolvable): any {
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
    tls: {
      value: cdktf.stringToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._tls = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._tls = value.tls;
      this._type = value.type;
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

  // tls - computed: false, optional: true, required: false
  private _tls?: string; 
  public get tls() {
    return this.getStringAttribute('tls');
  }
  public set tls(value: string) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
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
export interface DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpec {
  /**
  * AdditionalArgs specifies additional arguments to pass to the Hyperfoil controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest#additional_args DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest#additional_args}
  */
  readonly additionalArgs?: string[];
  /**
  * Deploy timeout for agents, in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest#agent_deploy_timeout DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest#agent_deploy_timeout}
  */
  readonly agentDeployTimeout?: number;
  /**
  * Authentication/authorization settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest#auth DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest#auth}
  */
  readonly auth?: DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecAuth;
  /**
  * Controller image. If 'version' is defined, too, the tag is replaced (or appended). Defaults to 'quay.io/hyperfoil/hyperfoil'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest#image DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest#image}
  */
  readonly image?: string;
  /**
  * Name of the config map and optionally its entry (separated by '/': e.g myconfigmap/log4j2-superverbose.xml) storing Log4j2 configuration file. By default the Controller uses its embedded configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest#log DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest#log}
  */
  readonly log?: string;
  /**
  * Name of the PVC hyperfoil should mount for its workdir.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest#persistent_volume_claim DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: string;
  /**
  * Names of config maps and optionally keys (separated by '/') holding hooks that run after the run finishes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest#post_hooks DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest#post_hooks}
  */
  readonly postHooks?: string[];
  /**
  * Names of config maps and optionally keys (separated by '/') holding hooks that run before the run starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest#pre_hooks DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest#pre_hooks}
  */
  readonly preHooks?: string[];
  /**
  * Specification of the exposed route. This setting is ignored when Openshift Routes are not available (on vanilla Kubernetes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest#route DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest#route}
  */
  readonly route?: DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecRoute;
  /**
  * List of secrets in this namespace; each entry from those secrets will be mapped as environment variable, using the key as variable name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest#secret_env_vars DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest#secret_env_vars}
  */
  readonly secretEnvVars?: string[];
  /**
  * Type of the service being exposed. By default this is ClusterIP if Openshift Route resource is available (the route will target this service). If Openshift Routes are not available (on vanilla Kubernetes) the default is NodePort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest#service_type DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest#service_type}
  */
  readonly serviceType?: string;
  /**
  * If this is set the controller does not start benchmark run right away after hitting /benchmark/my-benchmark/start ; instead it responds with status 301 and header Location set to concatenation of this string and 'BENCHMARK=my-benchmark&RUN_ID=xxxx'. CLI interprets that response as a request to hit CI instance on this URL, assuming that CI will trigger a new job that will eventually call /benchmark/my-benchmark/start?runId=xxxx with header 'x-trigger-job'. This is useful if the the CI has to synchronize Hyperfoil to other benchmarks that don't use this controller instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest#trigger_url DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest#trigger_url}
  */
  readonly triggerUrl?: string;
  /**
  * Tag for controller image. Defaults to version matching the operator version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest#version DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecToTerraform(struct?: DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalArgs),
    agent_deploy_timeout: cdktf.numberToTerraform(struct!.agentDeployTimeout),
    auth: dataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecAuthToTerraform(struct!.auth),
    image: cdktf.stringToTerraform(struct!.image),
    log: cdktf.stringToTerraform(struct!.log),
    persistent_volume_claim: cdktf.stringToTerraform(struct!.persistentVolumeClaim),
    post_hooks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.postHooks),
    pre_hooks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preHooks),
    route: dataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecRouteToTerraform(struct!.route),
    secret_env_vars: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secretEnvVars),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
    trigger_url: cdktf.stringToTerraform(struct!.triggerUrl),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalArgs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    agent_deploy_timeout: {
      value: cdktf.numberToHclTerraform(struct!.agentDeployTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth: {
      value: dataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecAuth",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent_volume_claim: {
      value: cdktf.stringToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_hooks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.postHooks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pre_hooks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preHooks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    route: {
      value: dataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecRouteToHclTerraform(struct!.route),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecRoute",
    },
    secret_env_vars: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secretEnvVars),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_url: {
      value: cdktf.stringToHclTerraform(struct!.triggerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalArgs = this._additionalArgs;
    }
    if (this._agentDeployTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentDeployTimeout = this._agentDeployTimeout;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._persistentVolumeClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaim = this._persistentVolumeClaim;
    }
    if (this._postHooks !== undefined) {
      hasAnyValues = true;
      internalValueResult.postHooks = this._postHooks;
    }
    if (this._preHooks !== undefined) {
      hasAnyValues = true;
      internalValueResult.preHooks = this._preHooks;
    }
    if (this._route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route?.internalValue;
    }
    if (this._secretEnvVars !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEnvVars = this._secretEnvVars;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    if (this._triggerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerUrl = this._triggerUrl;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalArgs = undefined;
      this._agentDeployTimeout = undefined;
      this._auth.internalValue = undefined;
      this._image = undefined;
      this._log = undefined;
      this._persistentVolumeClaim = undefined;
      this._postHooks = undefined;
      this._preHooks = undefined;
      this._route.internalValue = undefined;
      this._secretEnvVars = undefined;
      this._serviceType = undefined;
      this._triggerUrl = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalArgs = value.additionalArgs;
      this._agentDeployTimeout = value.agentDeployTimeout;
      this._auth.internalValue = value.auth;
      this._image = value.image;
      this._log = value.log;
      this._persistentVolumeClaim = value.persistentVolumeClaim;
      this._postHooks = value.postHooks;
      this._preHooks = value.preHooks;
      this._route.internalValue = value.route;
      this._secretEnvVars = value.secretEnvVars;
      this._serviceType = value.serviceType;
      this._triggerUrl = value.triggerUrl;
      this._version = value.version;
    }
  }

  // additional_args - computed: false, optional: true, required: false
  private _additionalArgs?: string[]; 
  public get additionalArgs() {
    return this.getListAttribute('additional_args');
  }
  public set additionalArgs(value: string[]) {
    this._additionalArgs = value;
  }
  public resetAdditionalArgs() {
    this._additionalArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalArgsInput() {
    return this._additionalArgs;
  }

  // agent_deploy_timeout - computed: false, optional: true, required: false
  private _agentDeployTimeout?: number; 
  public get agentDeployTimeout() {
    return this.getNumberAttribute('agent_deploy_timeout');
  }
  public set agentDeployTimeout(value: number) {
    this._agentDeployTimeout = value;
  }
  public resetAgentDeployTimeout() {
    this._agentDeployTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentDeployTimeoutInput() {
    return this._agentDeployTimeout;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // log - computed: false, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // persistent_volume_claim - computed: false, optional: true, required: false
  private _persistentVolumeClaim?: string; 
  public get persistentVolumeClaim() {
    return this.getStringAttribute('persistent_volume_claim');
  }
  public set persistentVolumeClaim(value: string) {
    this._persistentVolumeClaim = value;
  }
  public resetPersistentVolumeClaim() {
    this._persistentVolumeClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimInput() {
    return this._persistentVolumeClaim;
  }

  // post_hooks - computed: false, optional: true, required: false
  private _postHooks?: string[]; 
  public get postHooks() {
    return this.getListAttribute('post_hooks');
  }
  public set postHooks(value: string[]) {
    this._postHooks = value;
  }
  public resetPostHooks() {
    this._postHooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postHooksInput() {
    return this._postHooks;
  }

  // pre_hooks - computed: false, optional: true, required: false
  private _preHooks?: string[]; 
  public get preHooks() {
    return this.getListAttribute('pre_hooks');
  }
  public set preHooks(value: string[]) {
    this._preHooks = value;
  }
  public resetPreHooks() {
    this._preHooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preHooksInput() {
    return this._preHooks;
  }

  // route - computed: false, optional: true, required: false
  private _route = new DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // secret_env_vars - computed: false, optional: true, required: false
  private _secretEnvVars?: string[]; 
  public get secretEnvVars() {
    return this.getListAttribute('secret_env_vars');
  }
  public set secretEnvVars(value: string[]) {
    this._secretEnvVars = value;
  }
  public resetSecretEnvVars() {
    this._secretEnvVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEnvVarsInput() {
    return this._secretEnvVars;
  }

  // service_type - computed: false, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // trigger_url - computed: false, optional: true, required: false
  private _triggerUrl?: string; 
  public get triggerUrl() {
    return this.getStringAttribute('trigger_url');
  }
  public set triggerUrl(value: string) {
    this._triggerUrl = value;
  }
  public resetTriggerUrl() {
    this._triggerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerUrlInput() {
    return this._triggerUrl;
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest k8s_hyperfoil_io_hyperfoil_v1alpha2_manifest}
*/
export class DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_hyperfoil_io_hyperfoil_v1alpha2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest to import
  * @param importFromId The id of the existing DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SHyperfoilIoHyperfoilV1Alpha2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_hyperfoil_io_hyperfoil_v1alpha2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hyperfoil_io_hyperfoil_v1alpha2_manifest k8s_hyperfoil_io_hyperfoil_v1alpha2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_hyperfoil_io_hyperfoil_v1alpha2_manifest',
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
  private _metadata = new DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpec) {
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
      metadata: dataK8SHyperfoilIoHyperfoilV1Alpha2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SHyperfoilIoHyperfoilV1Alpha2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestMetadata",
      },
      spec: {
        value: dataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHyperfoilIoHyperfoilV1Alpha2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
