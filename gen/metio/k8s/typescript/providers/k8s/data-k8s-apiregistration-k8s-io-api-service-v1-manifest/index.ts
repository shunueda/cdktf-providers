// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiregistration_k8s_io_api_service_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SApiregistrationK8SIoApiServiceV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiregistration_k8s_io_api_service_v1_manifest#metadata DataK8SApiregistrationK8SIoApiServiceV1Manifest#metadata}
  */
  readonly metadata: DataK8SApiregistrationK8SIoApiServiceV1ManifestMetadata;
  /**
  * APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiregistration_k8s_io_api_service_v1_manifest#spec DataK8SApiregistrationK8SIoApiServiceV1Manifest#spec}
  */
  readonly spec?: DataK8SApiregistrationK8SIoApiServiceV1ManifestSpec;
}
export interface DataK8SApiregistrationK8SIoApiServiceV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiregistration_k8s_io_api_service_v1_manifest#annotations DataK8SApiregistrationK8SIoApiServiceV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiregistration_k8s_io_api_service_v1_manifest#labels DataK8SApiregistrationK8SIoApiServiceV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiregistration_k8s_io_api_service_v1_manifest#name DataK8SApiregistrationK8SIoApiServiceV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SApiregistrationK8SIoApiServiceV1ManifestMetadataToTerraform(struct?: DataK8SApiregistrationK8SIoApiServiceV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SApiregistrationK8SIoApiServiceV1ManifestMetadataToHclTerraform(struct?: DataK8SApiregistrationK8SIoApiServiceV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SApiregistrationK8SIoApiServiceV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiregistrationK8SIoApiServiceV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApiregistrationK8SIoApiServiceV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SApiregistrationK8SIoApiServiceV1ManifestSpecService {
  /**
  * Name is the name of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiregistration_k8s_io_api_service_v1_manifest#name DataK8SApiregistrationK8SIoApiServiceV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace is the namespace of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiregistration_k8s_io_api_service_v1_manifest#namespace DataK8SApiregistrationK8SIoApiServiceV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. 'port' should be a valid port number (1-65535, inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiregistration_k8s_io_api_service_v1_manifest#port DataK8SApiregistrationK8SIoApiServiceV1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SApiregistrationK8SIoApiServiceV1ManifestSpecServiceToTerraform(struct?: DataK8SApiregistrationK8SIoApiServiceV1ManifestSpecService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SApiregistrationK8SIoApiServiceV1ManifestSpecServiceToHclTerraform(struct?: DataK8SApiregistrationK8SIoApiServiceV1ManifestSpecService | cdktf.IResolvable): any {
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

export class DataK8SApiregistrationK8SIoApiServiceV1ManifestSpecServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiregistrationK8SIoApiServiceV1ManifestSpecService | cdktf.IResolvable | undefined {
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
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiregistrationK8SIoApiServiceV1ManifestSpecService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._port = undefined;
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
      this._port = value.port;
    }
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
export interface DataK8SApiregistrationK8SIoApiServiceV1ManifestSpec {
  /**
  * CABundle is a PEM encoded CA bundle which will be used to validate an API server's serving certificate. If unspecified, system trust roots on the apiserver are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiregistration_k8s_io_api_service_v1_manifest#ca_bundle DataK8SApiregistrationK8SIoApiServiceV1Manifest#ca_bundle}
  */
  readonly caBundle?: string;
  /**
  * Group is the API group name this server hosts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiregistration_k8s_io_api_service_v1_manifest#group DataK8SApiregistrationK8SIoApiServiceV1Manifest#group}
  */
  readonly group?: string;
  /**
  * GroupPriorityMinimum is the priority this group should have at least. Higher priority means that the group is preferred by clients over lower priority ones. Note that other versions of this group might specify even higher GroupPriorityMinimum values such that the whole group gets a higher priority. The primary sort is based on GroupPriorityMinimum, ordered highest number to lowest (20 before 10). The secondary sort is based on the alphabetical comparison of the name of the object. (v1.bar before v1.foo) We'd recommend something like: *.k8s.io (except extensions) at 18000 and PaaSes (OpenShift, Deis) are recommended to be in the 2000s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiregistration_k8s_io_api_service_v1_manifest#group_priority_minimum DataK8SApiregistrationK8SIoApiServiceV1Manifest#group_priority_minimum}
  */
  readonly groupPriorityMinimum: number;
  /**
  * InsecureSkipTLSVerify disables TLS certificate verification when communicating with this server. This is strongly discouraged. You should use the CABundle instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiregistration_k8s_io_api_service_v1_manifest#insecure_skip_tls_verify DataK8SApiregistrationK8SIoApiServiceV1Manifest#insecure_skip_tls_verify}
  */
  readonly insecureSkipTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * ServiceReference holds a reference to Service.legacy.k8s.io
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiregistration_k8s_io_api_service_v1_manifest#service DataK8SApiregistrationK8SIoApiServiceV1Manifest#service}
  */
  readonly service?: DataK8SApiregistrationK8SIoApiServiceV1ManifestSpecService;
  /**
  * Version is the API version this server hosts. For example, 'v1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiregistration_k8s_io_api_service_v1_manifest#version DataK8SApiregistrationK8SIoApiServiceV1Manifest#version}
  */
  readonly version?: string;
  /**
  * VersionPriority controls the ordering of this API version inside of its group. Must be greater than zero. The primary sort is based on VersionPriority, ordered highest to lowest (20 before 10). Since it's inside of a group, the number can be small, probably in the 10s. In case of equal version priorities, the version string will be used to compute the order inside a group. If the version string is 'kube-like', it will sort above non 'kube-like' version strings, which are ordered lexicographically. 'Kube-like' versions start with a 'v', then are followed by a number (the major version), then optionally the string 'alpha' or 'beta' and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiregistration_k8s_io_api_service_v1_manifest#version_priority DataK8SApiregistrationK8SIoApiServiceV1Manifest#version_priority}
  */
  readonly versionPriority: number;
}

export function dataK8SApiregistrationK8SIoApiServiceV1ManifestSpecToTerraform(struct?: DataK8SApiregistrationK8SIoApiServiceV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_bundle: cdktf.stringToTerraform(struct!.caBundle),
    group: cdktf.stringToTerraform(struct!.group),
    group_priority_minimum: cdktf.numberToTerraform(struct!.groupPriorityMinimum),
    insecure_skip_tls_verify: cdktf.booleanToTerraform(struct!.insecureSkipTlsVerify),
    service: dataK8SApiregistrationK8SIoApiServiceV1ManifestSpecServiceToTerraform(struct!.service),
    version: cdktf.stringToTerraform(struct!.version),
    version_priority: cdktf.numberToTerraform(struct!.versionPriority),
  }
}


export function dataK8SApiregistrationK8SIoApiServiceV1ManifestSpecToHclTerraform(struct?: DataK8SApiregistrationK8SIoApiServiceV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_bundle: {
      value: cdktf.stringToHclTerraform(struct!.caBundle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_priority_minimum: {
      value: cdktf.numberToHclTerraform(struct!.groupPriorityMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insecure_skip_tls_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipTlsVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service: {
      value: dataK8SApiregistrationK8SIoApiServiceV1ManifestSpecServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiregistrationK8SIoApiServiceV1ManifestSpecService",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_priority: {
      value: cdktf.numberToHclTerraform(struct!.versionPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiregistrationK8SIoApiServiceV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiregistrationK8SIoApiServiceV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.caBundle = this._caBundle;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._groupPriorityMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupPriorityMinimum = this._groupPriorityMinimum;
    }
    if (this._insecureSkipTlsVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipTlsVerify = this._insecureSkipTlsVerify;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._versionPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionPriority = this._versionPriority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiregistrationK8SIoApiServiceV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caBundle = undefined;
      this._group = undefined;
      this._groupPriorityMinimum = undefined;
      this._insecureSkipTlsVerify = undefined;
      this._service.internalValue = undefined;
      this._version = undefined;
      this._versionPriority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caBundle = value.caBundle;
      this._group = value.group;
      this._groupPriorityMinimum = value.groupPriorityMinimum;
      this._insecureSkipTlsVerify = value.insecureSkipTlsVerify;
      this._service.internalValue = value.service;
      this._version = value.version;
      this._versionPriority = value.versionPriority;
    }
  }

  // ca_bundle - computed: false, optional: true, required: false
  private _caBundle?: string; 
  public get caBundle() {
    return this.getStringAttribute('ca_bundle');
  }
  public set caBundle(value: string) {
    this._caBundle = value;
  }
  public resetCaBundle() {
    this._caBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caBundleInput() {
    return this._caBundle;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // group_priority_minimum - computed: false, optional: false, required: true
  private _groupPriorityMinimum?: number; 
  public get groupPriorityMinimum() {
    return this.getNumberAttribute('group_priority_minimum');
  }
  public set groupPriorityMinimum(value: number) {
    this._groupPriorityMinimum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupPriorityMinimumInput() {
    return this._groupPriorityMinimum;
  }

  // insecure_skip_tls_verify - computed: false, optional: true, required: false
  private _insecureSkipTlsVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipTlsVerify() {
    return this.getBooleanAttribute('insecure_skip_tls_verify');
  }
  public set insecureSkipTlsVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipTlsVerify = value;
  }
  public resetInsecureSkipTlsVerify() {
    this._insecureSkipTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipTlsVerifyInput() {
    return this._insecureSkipTlsVerify;
  }

  // service - computed: false, optional: true, required: false
  private _service = new DataK8SApiregistrationK8SIoApiServiceV1ManifestSpecServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SApiregistrationK8SIoApiServiceV1ManifestSpecService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
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

  // version_priority - computed: false, optional: false, required: true
  private _versionPriority?: number; 
  public get versionPriority() {
    return this.getNumberAttribute('version_priority');
  }
  public set versionPriority(value: number) {
    this._versionPriority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionPriorityInput() {
    return this._versionPriority;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiregistration_k8s_io_api_service_v1_manifest k8s_apiregistration_k8s_io_api_service_v1_manifest}
*/
export class DataK8SApiregistrationK8SIoApiServiceV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apiregistration_k8s_io_api_service_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SApiregistrationK8SIoApiServiceV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SApiregistrationK8SIoApiServiceV1Manifest to import
  * @param importFromId The id of the existing DataK8SApiregistrationK8SIoApiServiceV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiregistration_k8s_io_api_service_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SApiregistrationK8SIoApiServiceV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apiregistration_k8s_io_api_service_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiregistration_k8s_io_api_service_v1_manifest k8s_apiregistration_k8s_io_api_service_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SApiregistrationK8SIoApiServiceV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SApiregistrationK8SIoApiServiceV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apiregistration_k8s_io_api_service_v1_manifest',
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
  private _metadata = new DataK8SApiregistrationK8SIoApiServiceV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SApiregistrationK8SIoApiServiceV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SApiregistrationK8SIoApiServiceV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SApiregistrationK8SIoApiServiceV1ManifestSpec) {
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
      metadata: dataK8SApiregistrationK8SIoApiServiceV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SApiregistrationK8SIoApiServiceV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SApiregistrationK8SIoApiServiceV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApiregistrationK8SIoApiServiceV1ManifestMetadata",
      },
      spec: {
        value: dataK8SApiregistrationK8SIoApiServiceV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApiregistrationK8SIoApiServiceV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
