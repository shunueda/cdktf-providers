// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networking_gke_io_lb_policy_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SNetworkingGkeIoLbPolicyV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networking_gke_io_lb_policy_v1_manifest#metadata DataK8SNetworkingGkeIoLbPolicyV1Manifest#metadata}
  */
  readonly metadata: DataK8SNetworkingGkeIoLbPolicyV1ManifestMetadata;
  /**
  * Spec defines the desired state of LBPolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networking_gke_io_lb_policy_v1_manifest#spec DataK8SNetworkingGkeIoLbPolicyV1Manifest#spec}
  */
  readonly spec: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpec;
}
export interface DataK8SNetworkingGkeIoLbPolicyV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networking_gke_io_lb_policy_v1_manifest#annotations DataK8SNetworkingGkeIoLbPolicyV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networking_gke_io_lb_policy_v1_manifest#labels DataK8SNetworkingGkeIoLbPolicyV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networking_gke_io_lb_policy_v1_manifest#name DataK8SNetworkingGkeIoLbPolicyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networking_gke_io_lb_policy_v1_manifest#namespace DataK8SNetworkingGkeIoLbPolicyV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SNetworkingGkeIoLbPolicyV1ManifestMetadataToTerraform(struct?: DataK8SNetworkingGkeIoLbPolicyV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SNetworkingGkeIoLbPolicyV1ManifestMetadataToHclTerraform(struct?: DataK8SNetworkingGkeIoLbPolicyV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SNetworkingGkeIoLbPolicyV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingGkeIoLbPolicyV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingGkeIoLbPolicyV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultConnectionDraining {
  /**
  * DrainingTimeoutSec is a BackendService parameter. It is used during removal of VMs from instance groups. This guarantees that for the specified time all existing connections to a VM will remain untouched, but no new connections will be accepted. Set timeout to zero to disable connection draining. Enable the feature by specifying a timeout of up to one hour. If the field is omitted, a default value (0s) will be used. See https://cloud.google.com/compute/docs/reference/rest/v1/backendServices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networking_gke_io_lb_policy_v1_manifest#draining_timeout_sec DataK8SNetworkingGkeIoLbPolicyV1Manifest#draining_timeout_sec}
  */
  readonly drainingTimeoutSec?: number;
}

export function dataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultConnectionDrainingToTerraform(struct?: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultConnectionDraining | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    draining_timeout_sec: cdktf.numberToTerraform(struct!.drainingTimeoutSec),
  }
}


export function dataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultConnectionDrainingToHclTerraform(struct?: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultConnectionDraining | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    draining_timeout_sec: {
      value: cdktf.numberToHclTerraform(struct!.drainingTimeoutSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultConnectionDrainingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultConnectionDraining | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drainingTimeoutSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainingTimeoutSec = this._drainingTimeoutSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultConnectionDraining | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._drainingTimeoutSec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._drainingTimeoutSec = value.drainingTimeoutSec;
    }
  }

  // draining_timeout_sec - computed: false, optional: true, required: false
  private _drainingTimeoutSec?: number; 
  public get drainingTimeoutSec() {
    return this.getNumberAttribute('draining_timeout_sec');
  }
  public set drainingTimeoutSec(value: number) {
    this._drainingTimeoutSec = value;
  }
  public resetDrainingTimeoutSec() {
    this._drainingTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainingTimeoutSecInput() {
    return this._drainingTimeoutSec;
  }
}
export interface DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultLogging {
  /**
  * Enabled denotes whether to enable logging for the load balancer traffic served by this backend service. If not specified, this defaults to false, which means logging is disabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networking_gke_io_lb_policy_v1_manifest#enabled DataK8SNetworkingGkeIoLbPolicyV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * This field can only be specified if logging is enabled for this backend service. The value of the field must be in range [0, 1e6]. This is converted to a floating point value in the range [0, 1] by dividing by 1e6 for use with the GCE api and interpreted as the proportion of requests that will be logged. By default all requests will be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networking_gke_io_lb_policy_v1_manifest#sample_rate DataK8SNetworkingGkeIoLbPolicyV1Manifest#sample_rate}
  */
  readonly sampleRate?: number;
}

export function dataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultLoggingToTerraform(struct?: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
  }
}


export function dataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultLoggingToHclTerraform(struct?: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultLogging | cdktf.IResolvable): any {
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
    sample_rate: {
      value: cdktf.numberToHclTerraform(struct!.sampleRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._sampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRate = this._sampleRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._sampleRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._sampleRate = value.sampleRate;
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

  // sample_rate - computed: false, optional: true, required: false
  private _sampleRate?: number; 
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
  public set sampleRate(value: number) {
    this._sampleRate = value;
  }
  public resetSampleRate() {
    this._sampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate;
  }
}
export interface DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultSessionAffinity {
  /**
  * CookieTTLSec specifies the lifetime of cookies in seconds. This setting requires GENERATED_COOKIE or HTTP_COOKIE session affinity. If set to 0, the cookie is non-persistent and lasts only until the end of the browser session (or equivalent). The maximum allowed value is two weeks (1,209,600).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networking_gke_io_lb_policy_v1_manifest#cookie_ttl_sec DataK8SNetworkingGkeIoLbPolicyV1Manifest#cookie_ttl_sec}
  */
  readonly cookieTtlSec?: number;
  /**
  * Type specifies the type of session affinity to use. If not specified, this defaults to NONE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networking_gke_io_lb_policy_v1_manifest#type DataK8SNetworkingGkeIoLbPolicyV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultSessionAffinityToTerraform(struct?: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultSessionAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_ttl_sec: cdktf.numberToTerraform(struct!.cookieTtlSec),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultSessionAffinityToHclTerraform(struct?: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultSessionAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_ttl_sec: {
      value: cdktf.numberToHclTerraform(struct!.cookieTtlSec),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultSessionAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultSessionAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieTtlSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieTtlSec = this._cookieTtlSec;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultSessionAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookieTtlSec = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookieTtlSec = value.cookieTtlSec;
      this._type = value.type;
    }
  }

  // cookie_ttl_sec - computed: false, optional: true, required: false
  private _cookieTtlSec?: number; 
  public get cookieTtlSec() {
    return this.getNumberAttribute('cookie_ttl_sec');
  }
  public set cookieTtlSec(value: number) {
    this._cookieTtlSec = value;
  }
  public resetCookieTtlSec() {
    this._cookieTtlSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieTtlSecInput() {
    return this._cookieTtlSec;
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
export interface DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefault {
  /**
  * ConnectionDraining contains configuration for connection draining
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networking_gke_io_lb_policy_v1_manifest#connection_draining DataK8SNetworkingGkeIoLbPolicyV1Manifest#connection_draining}
  */
  readonly connectionDraining?: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultConnectionDraining;
  /**
  * LoggingConfig contains configuration for logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networking_gke_io_lb_policy_v1_manifest#logging DataK8SNetworkingGkeIoLbPolicyV1Manifest#logging}
  */
  readonly logging?: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultLogging;
  /**
  * SessionAffinityConfig contains configuration for stickiness parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networking_gke_io_lb_policy_v1_manifest#session_affinity DataK8SNetworkingGkeIoLbPolicyV1Manifest#session_affinity}
  */
  readonly sessionAffinity?: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultSessionAffinity;
  /**
  * TimeoutSec is a BackendService parameter. See https://cloud.google.com/compute/docs/reference/rest/v1/backendServices. If the field is omitted, a default value (30s) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networking_gke_io_lb_policy_v1_manifest#timeout_sec DataK8SNetworkingGkeIoLbPolicyV1Manifest#timeout_sec}
  */
  readonly timeoutSec?: number;
}

export function dataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultToTerraform(struct?: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_draining: dataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultConnectionDrainingToTerraform(struct!.connectionDraining),
    logging: dataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultLoggingToTerraform(struct!.logging),
    session_affinity: dataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultSessionAffinityToTerraform(struct!.sessionAffinity),
    timeout_sec: cdktf.numberToTerraform(struct!.timeoutSec),
  }
}


export function dataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultToHclTerraform(struct?: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_draining: {
      value: dataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultConnectionDrainingToHclTerraform(struct!.connectionDraining),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultConnectionDraining",
    },
    logging: {
      value: dataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultLogging",
    },
    session_affinity: {
      value: dataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultSessionAffinityToHclTerraform(struct!.sessionAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultSessionAffinity",
    },
    timeout_sec: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionDraining?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionDraining = this._connectionDraining?.internalValue;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._sessionAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinity = this._sessionAffinity?.internalValue;
    }
    if (this._timeoutSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSec = this._timeoutSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionDraining.internalValue = undefined;
      this._logging.internalValue = undefined;
      this._sessionAffinity.internalValue = undefined;
      this._timeoutSec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionDraining.internalValue = value.connectionDraining;
      this._logging.internalValue = value.logging;
      this._sessionAffinity.internalValue = value.sessionAffinity;
      this._timeoutSec = value.timeoutSec;
    }
  }

  // connection_draining - computed: false, optional: true, required: false
  private _connectionDraining = new DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultConnectionDrainingOutputReference(this, "connection_draining");
  public get connectionDraining() {
    return this._connectionDraining;
  }
  public putConnectionDraining(value: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultConnectionDraining) {
    this._connectionDraining.internalValue = value;
  }
  public resetConnectionDraining() {
    this._connectionDraining.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDrainingInput() {
    return this._connectionDraining.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // session_affinity - computed: false, optional: true, required: false
  private _sessionAffinity = new DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultSessionAffinityOutputReference(this, "session_affinity");
  public get sessionAffinity() {
    return this._sessionAffinity;
  }
  public putSessionAffinity(value: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultSessionAffinity) {
    this._sessionAffinity.internalValue = value;
  }
  public resetSessionAffinity() {
    this._sessionAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityInput() {
    return this._sessionAffinity.internalValue;
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
}
export interface DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecTargetRef {
  /**
  * Group is the group of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networking_gke_io_lb_policy_v1_manifest#group DataK8SNetworkingGkeIoLbPolicyV1Manifest#group}
  */
  readonly group: string;
  /**
  * Kind is kind of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networking_gke_io_lb_policy_v1_manifest#kind DataK8SNetworkingGkeIoLbPolicyV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networking_gke_io_lb_policy_v1_manifest#name DataK8SNetworkingGkeIoLbPolicyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of the referent. When unspecified, the local namespace is inferred. Even when policy targets a resource in a different namespace, it MUST only apply to traffic originating from the same namespace as the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networking_gke_io_lb_policy_v1_manifest#namespace DataK8SNetworkingGkeIoLbPolicyV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SNetworkingGkeIoLbPolicyV1ManifestSpecTargetRefToTerraform(struct?: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecTargetRef | cdktf.IResolvable): any {
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


export function dataK8SNetworkingGkeIoLbPolicyV1ManifestSpecTargetRefToHclTerraform(struct?: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecTargetRef | cdktf.IResolvable): any {
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

export class DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecTargetRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecTargetRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SNetworkingGkeIoLbPolicyV1ManifestSpec {
  /**
  * Default defines default policy configuration for the targeted resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networking_gke_io_lb_policy_v1_manifest#default DataK8SNetworkingGkeIoLbPolicyV1Manifest#default}
  */
  readonly default?: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefault;
  /**
  * TargetRef identifies an API object to apply policy to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networking_gke_io_lb_policy_v1_manifest#target_ref DataK8SNetworkingGkeIoLbPolicyV1Manifest#target_ref}
  */
  readonly targetRef: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecTargetRef;
}

export function dataK8SNetworkingGkeIoLbPolicyV1ManifestSpecToTerraform(struct?: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: dataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultToTerraform(struct!.default),
    target_ref: dataK8SNetworkingGkeIoLbPolicyV1ManifestSpecTargetRefToTerraform(struct!.targetRef),
  }
}


export function dataK8SNetworkingGkeIoLbPolicyV1ManifestSpecToHclTerraform(struct?: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: dataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefault",
    },
    target_ref: {
      value: dataK8SNetworkingGkeIoLbPolicyV1ManifestSpecTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecTargetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingGkeIoLbPolicyV1ManifestSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpec | cdktf.IResolvable | undefined) {
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
  private _default = new DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecDefault) {
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
  private _targetRef = new DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecTargetRef) {
    this._targetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networking_gke_io_lb_policy_v1_manifest k8s_networking_gke_io_lb_policy_v1_manifest}
*/
export class DataK8SNetworkingGkeIoLbPolicyV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_networking_gke_io_lb_policy_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SNetworkingGkeIoLbPolicyV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SNetworkingGkeIoLbPolicyV1Manifest to import
  * @param importFromId The id of the existing DataK8SNetworkingGkeIoLbPolicyV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networking_gke_io_lb_policy_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SNetworkingGkeIoLbPolicyV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_networking_gke_io_lb_policy_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networking_gke_io_lb_policy_v1_manifest k8s_networking_gke_io_lb_policy_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SNetworkingGkeIoLbPolicyV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SNetworkingGkeIoLbPolicyV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_networking_gke_io_lb_policy_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SNetworkingGkeIoLbPolicyV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SNetworkingGkeIoLbPolicyV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SNetworkingGkeIoLbPolicyV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SNetworkingGkeIoLbPolicyV1ManifestSpec) {
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
      metadata: dataK8SNetworkingGkeIoLbPolicyV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SNetworkingGkeIoLbPolicyV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SNetworkingGkeIoLbPolicyV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNetworkingGkeIoLbPolicyV1ManifestMetadata",
      },
      spec: {
        value: dataK8SNetworkingGkeIoLbPolicyV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNetworkingGkeIoLbPolicyV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
