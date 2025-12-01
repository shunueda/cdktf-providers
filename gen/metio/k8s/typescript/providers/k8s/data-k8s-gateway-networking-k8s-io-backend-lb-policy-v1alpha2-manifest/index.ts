// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_networking_k8s_io_backend_lb_policy_v1alpha2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_networking_k8s_io_backend_lb_policy_v1alpha2_manifest#metadata DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2Manifest#metadata}
  */
  readonly metadata: DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestMetadata;
  /**
  * Spec defines the desired state of BackendLBPolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_networking_k8s_io_backend_lb_policy_v1alpha2_manifest#spec DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2Manifest#spec}
  */
  readonly spec: DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpec;
}
export interface DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_networking_k8s_io_backend_lb_policy_v1alpha2_manifest#annotations DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_networking_k8s_io_backend_lb_policy_v1alpha2_manifest#labels DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_networking_k8s_io_backend_lb_policy_v1alpha2_manifest#name DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_networking_k8s_io_backend_lb_policy_v1alpha2_manifest#namespace DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestMetadataToTerraform(struct?: DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestMetadataToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistenceCookieConfig {
  /**
  * LifetimeType specifies whether the cookie has a permanent or session-based lifetime. A permanent cookie persists until its specified expiry time, defined by the Expires or Max-Age cookie attributes, while a session cookie is deleted when the current session ends. When set to 'Permanent', AbsoluteTimeout indicates the cookie's lifetime via the Expires or Max-Age cookie attributes and is required. When set to 'Session', AbsoluteTimeout indicates the absolute lifetime of the cookie tracked by the gateway and is optional. Support: Core for 'Session' type Support: Extended for 'Permanent' type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_networking_k8s_io_backend_lb_policy_v1alpha2_manifest#lifetime_type DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2Manifest#lifetime_type}
  */
  readonly lifetimeType?: string;
}

export function dataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistenceCookieConfigToTerraform(struct?: DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistenceCookieConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime_type: cdktf.stringToTerraform(struct!.lifetimeType),
  }
}


export function dataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistenceCookieConfigToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistenceCookieConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifetime_type: {
      value: cdktf.stringToHclTerraform(struct!.lifetimeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistenceCookieConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistenceCookieConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifetimeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetimeType = this._lifetimeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistenceCookieConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lifetimeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lifetimeType = value.lifetimeType;
    }
  }

  // lifetime_type - computed: false, optional: true, required: false
  private _lifetimeType?: string; 
  public get lifetimeType() {
    return this.getStringAttribute('lifetime_type');
  }
  public set lifetimeType(value: string) {
    this._lifetimeType = value;
  }
  public resetLifetimeType() {
    this._lifetimeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeTypeInput() {
    return this._lifetimeType;
  }
}
export interface DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistence {
  /**
  * AbsoluteTimeout defines the absolute timeout of the persistent session. Once the AbsoluteTimeout duration has elapsed, the session becomes invalid. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_networking_k8s_io_backend_lb_policy_v1alpha2_manifest#absolute_timeout DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2Manifest#absolute_timeout}
  */
  readonly absoluteTimeout?: string;
  /**
  * CookieConfig provides configuration settings that are specific to cookie-based session persistence. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_networking_k8s_io_backend_lb_policy_v1alpha2_manifest#cookie_config DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2Manifest#cookie_config}
  */
  readonly cookieConfig?: DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistenceCookieConfig;
  /**
  * IdleTimeout defines the idle timeout of the persistent session. Once the session has been idle for more than the specified IdleTimeout duration, the session becomes invalid. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_networking_k8s_io_backend_lb_policy_v1alpha2_manifest#idle_timeout DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2Manifest#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * SessionName defines the name of the persistent session token which may be reflected in the cookie or the header. Users should avoid reusing session names to prevent unintended consequences, such as rejection or unpredictable behavior. Support: Implementation-specific
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_networking_k8s_io_backend_lb_policy_v1alpha2_manifest#session_name DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2Manifest#session_name}
  */
  readonly sessionName?: string;
  /**
  * Type defines the type of session persistence such as through the use a header or cookie. Defaults to cookie based session persistence. Support: Core for 'Cookie' type Support: Extended for 'Header' type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_networking_k8s_io_backend_lb_policy_v1alpha2_manifest#type DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistenceToTerraform(struct?: DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absolute_timeout: cdktf.stringToTerraform(struct!.absoluteTimeout),
    cookie_config: dataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistenceCookieConfigToTerraform(struct!.cookieConfig),
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
    session_name: cdktf.stringToTerraform(struct!.sessionName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistenceToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    absolute_timeout: {
      value: cdktf.stringToHclTerraform(struct!.absoluteTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_config: {
      value: dataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistenceCookieConfigToHclTerraform(struct!.cookieConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistenceCookieConfig",
    },
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionName),
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

export class DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistence | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absoluteTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.absoluteTimeout = this._absoluteTimeout;
    }
    if (this._cookieConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieConfig = this._cookieConfig?.internalValue;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._sessionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionName = this._sessionName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistence | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._absoluteTimeout = undefined;
      this._cookieConfig.internalValue = undefined;
      this._idleTimeout = undefined;
      this._sessionName = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._absoluteTimeout = value.absoluteTimeout;
      this._cookieConfig.internalValue = value.cookieConfig;
      this._idleTimeout = value.idleTimeout;
      this._sessionName = value.sessionName;
      this._type = value.type;
    }
  }

  // absolute_timeout - computed: false, optional: true, required: false
  private _absoluteTimeout?: string; 
  public get absoluteTimeout() {
    return this.getStringAttribute('absolute_timeout');
  }
  public set absoluteTimeout(value: string) {
    this._absoluteTimeout = value;
  }
  public resetAbsoluteTimeout() {
    this._absoluteTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteTimeoutInput() {
    return this._absoluteTimeout;
  }

  // cookie_config - computed: false, optional: true, required: false
  private _cookieConfig = new DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistenceCookieConfigOutputReference(this, "cookie_config");
  public get cookieConfig() {
    return this._cookieConfig;
  }
  public putCookieConfig(value: DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistenceCookieConfig) {
    this._cookieConfig.internalValue = value;
  }
  public resetCookieConfig() {
    this._cookieConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieConfigInput() {
    return this._cookieConfig.internalValue;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // session_name - computed: false, optional: true, required: false
  private _sessionName?: string; 
  public get sessionName() {
    return this.getStringAttribute('session_name');
  }
  public set sessionName(value: string) {
    this._sessionName = value;
  }
  public resetSessionName() {
    this._sessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionNameInput() {
    return this._sessionName;
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
export interface DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecTargetRefs {
  /**
  * Group is the group of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_networking_k8s_io_backend_lb_policy_v1alpha2_manifest#group DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2Manifest#group}
  */
  readonly group: string;
  /**
  * Kind is kind of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_networking_k8s_io_backend_lb_policy_v1alpha2_manifest#kind DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_networking_k8s_io_backend_lb_policy_v1alpha2_manifest#name DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecTargetRefsToTerraform(struct?: DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecTargetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecTargetRefsToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecTargetRefs | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecTargetRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecTargetRefs | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecTargetRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._name = undefined;
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
}

export class DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecTargetRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecTargetRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecTargetRefsOutputReference {
    return new DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecTargetRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpec {
  /**
  * SessionPersistence defines and configures session persistence for the backend. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_networking_k8s_io_backend_lb_policy_v1alpha2_manifest#session_persistence DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2Manifest#session_persistence}
  */
  readonly sessionPersistence?: DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistence;
  /**
  * TargetRef identifies an API object to apply policy to. Currently, Backends (i.e. Service, ServiceImport, or any implementation-specific backendRef) are the only valid API target references.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_networking_k8s_io_backend_lb_policy_v1alpha2_manifest#target_refs DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2Manifest#target_refs}
  */
  readonly targetRefs: DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecTargetRefs[] | cdktf.IResolvable;
}

export function dataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecToTerraform(struct?: DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_persistence: dataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistenceToTerraform(struct!.sessionPersistence),
    target_refs: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecTargetRefsToTerraform, false)(struct!.targetRefs),
  }
}


export function dataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_persistence: {
      value: dataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistenceToHclTerraform(struct!.sessionPersistence),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistence",
    },
    target_refs: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecTargetRefsToHclTerraform, false)(struct!.targetRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecTargetRefsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionPersistence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionPersistence = this._sessionPersistence?.internalValue;
    }
    if (this._targetRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRefs = this._targetRefs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sessionPersistence.internalValue = undefined;
      this._targetRefs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sessionPersistence.internalValue = value.sessionPersistence;
      this._targetRefs.internalValue = value.targetRefs;
    }
  }

  // session_persistence - computed: false, optional: true, required: false
  private _sessionPersistence = new DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistenceOutputReference(this, "session_persistence");
  public get sessionPersistence() {
    return this._sessionPersistence;
  }
  public putSessionPersistence(value: DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecSessionPersistence) {
    this._sessionPersistence.internalValue = value;
  }
  public resetSessionPersistence() {
    this._sessionPersistence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPersistenceInput() {
    return this._sessionPersistence.internalValue;
  }

  // target_refs - computed: false, optional: false, required: true
  private _targetRefs = new DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecTargetRefsList(this, "target_refs", false);
  public get targetRefs() {
    return this._targetRefs;
  }
  public putTargetRefs(value: DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecTargetRefs[] | cdktf.IResolvable) {
    this._targetRefs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefsInput() {
    return this._targetRefs.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_networking_k8s_io_backend_lb_policy_v1alpha2_manifest k8s_gateway_networking_k8s_io_backend_lb_policy_v1alpha2_manifest}
*/
export class DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_gateway_networking_k8s_io_backend_lb_policy_v1alpha2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2Manifest to import
  * @param importFromId The id of the existing DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_networking_k8s_io_backend_lb_policy_v1alpha2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_gateway_networking_k8s_io_backend_lb_policy_v1alpha2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/gateway_networking_k8s_io_backend_lb_policy_v1alpha2_manifest k8s_gateway_networking_k8s_io_backend_lb_policy_v1alpha2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_gateway_networking_k8s_io_backend_lb_policy_v1alpha2_manifest',
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
  private _metadata = new DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpec) {
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
      metadata: dataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestMetadata",
      },
      spec: {
        value: dataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGatewayNetworkingK8SIoBackendLbPolicyV1Alpha2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
