// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/stunner_l7mp_io_gateway_config_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SStunnerL7MpIoGatewayConfigV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/stunner_l7mp_io_gateway_config_v1_manifest#metadata DataK8SStunnerL7MpIoGatewayConfigV1Manifest#metadata}
  */
  readonly metadata: DataK8SStunnerL7MpIoGatewayConfigV1ManifestMetadata;
  /**
  * GatewayConfigSpec defines the desired state of GatewayConfig
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/stunner_l7mp_io_gateway_config_v1_manifest#spec DataK8SStunnerL7MpIoGatewayConfigV1Manifest#spec}
  */
  readonly spec?: DataK8SStunnerL7MpIoGatewayConfigV1ManifestSpec;
}
export interface DataK8SStunnerL7MpIoGatewayConfigV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/stunner_l7mp_io_gateway_config_v1_manifest#annotations DataK8SStunnerL7MpIoGatewayConfigV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/stunner_l7mp_io_gateway_config_v1_manifest#labels DataK8SStunnerL7MpIoGatewayConfigV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/stunner_l7mp_io_gateway_config_v1_manifest#name DataK8SStunnerL7MpIoGatewayConfigV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/stunner_l7mp_io_gateway_config_v1_manifest#namespace DataK8SStunnerL7MpIoGatewayConfigV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SStunnerL7MpIoGatewayConfigV1ManifestMetadataToTerraform(struct?: DataK8SStunnerL7MpIoGatewayConfigV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SStunnerL7MpIoGatewayConfigV1ManifestMetadataToHclTerraform(struct?: DataK8SStunnerL7MpIoGatewayConfigV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SStunnerL7MpIoGatewayConfigV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStunnerL7MpIoGatewayConfigV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SStunnerL7MpIoGatewayConfigV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SStunnerL7MpIoGatewayConfigV1ManifestSpecAuthRef {
  /**
  * Group is the group of the referent. For example, 'gateway.networking.k8s.io'. When unspecified or empty string, core API group is inferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/stunner_l7mp_io_gateway_config_v1_manifest#group DataK8SStunnerL7MpIoGatewayConfigV1Manifest#group}
  */
  readonly group?: string;
  /**
  * Kind is kind of the referent. For example 'Secret'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/stunner_l7mp_io_gateway_config_v1_manifest#kind DataK8SStunnerL7MpIoGatewayConfigV1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/stunner_l7mp_io_gateway_config_v1_manifest#name DataK8SStunnerL7MpIoGatewayConfigV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of the referenced object. When unspecified, the local namespace is inferred. Note that when a namespace different than the local namespace is specified, a ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/stunner_l7mp_io_gateway_config_v1_manifest#namespace DataK8SStunnerL7MpIoGatewayConfigV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SStunnerL7MpIoGatewayConfigV1ManifestSpecAuthRefToTerraform(struct?: DataK8SStunnerL7MpIoGatewayConfigV1ManifestSpecAuthRef | cdktf.IResolvable): any {
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


export function dataK8SStunnerL7MpIoGatewayConfigV1ManifestSpecAuthRefToHclTerraform(struct?: DataK8SStunnerL7MpIoGatewayConfigV1ManifestSpecAuthRef | cdktf.IResolvable): any {
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

export class DataK8SStunnerL7MpIoGatewayConfigV1ManifestSpecAuthRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStunnerL7MpIoGatewayConfigV1ManifestSpecAuthRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SStunnerL7MpIoGatewayConfigV1ManifestSpecAuthRef | cdktf.IResolvable | undefined) {
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
}
export interface DataK8SStunnerL7MpIoGatewayConfigV1ManifestSpec {
  /**
  * AuthLifetime defines the lifetime of 'longterm' authentication credentials in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/stunner_l7mp_io_gateway_config_v1_manifest#auth_lifetime DataK8SStunnerL7MpIoGatewayConfigV1Manifest#auth_lifetime}
  */
  readonly authLifetime?: number;
  /**
  * Note that externally set credentials override any inline auth credentials (AuthType, AuthUsername, etc.): if AuthRef is nonempty then it is expected that the referenced Secret exists and *all* authentication credentials are correctly set in the referenced Secret (username/password or shared secret). Mixing of credential sources (inline/external) is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/stunner_l7mp_io_gateway_config_v1_manifest#auth_ref DataK8SStunnerL7MpIoGatewayConfigV1Manifest#auth_ref}
  */
  readonly authRef?: DataK8SStunnerL7MpIoGatewayConfigV1ManifestSpecAuthRef;
  /**
  * AuthType is the type of the STUN/TURN authentication mechanism.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/stunner_l7mp_io_gateway_config_v1_manifest#auth_type DataK8SStunnerL7MpIoGatewayConfigV1Manifest#auth_type}
  */
  readonly authType?: string;
  /**
  * Dataplane defines the dataplane (stunnerd image, version, etc) for STUNner gateways using this GatewayConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/stunner_l7mp_io_gateway_config_v1_manifest#dataplane DataK8SStunnerL7MpIoGatewayConfigV1Manifest#dataplane}
  */
  readonly dataplane?: string;
  /**
  * LoadBalancerServiceAnnotations is a list of annotations that will go into the LoadBalancer services created automatically by the operator to wrap Gateways. NOTE: removing annotations from a GatewayConfig will not result in the removal of the corresponding annotations from the LoadBalancer service, in order to prevent the accidental removal of an annotation installed there by Kubernetes or the cloud provider. If you really want to remove an annotation, do this manually or simply remove all Gateways (which will remove the corresponding LoadBalancer services), update the GatewayConfig and then recreate the Gateways, so that the newly created LoadBalancer services will contain the required annotations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/stunner_l7mp_io_gateway_config_v1_manifest#load_balancer_service_annotations DataK8SStunnerL7MpIoGatewayConfigV1Manifest#load_balancer_service_annotations}
  */
  readonly loadBalancerServiceAnnotations?: { [key: string]: string };
  /**
  * LogLevel specifies the default loglevel for the STUNner daemon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/stunner_l7mp_io_gateway_config_v1_manifest#log_level DataK8SStunnerL7MpIoGatewayConfigV1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * Password defines the 'password' credential for 'plaintext' authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/stunner_l7mp_io_gateway_config_v1_manifest#password DataK8SStunnerL7MpIoGatewayConfigV1Manifest#password}
  */
  readonly password?: string;
  /**
  * Realm defines the STUN/TURN authentication realm to be used for clients toauthenticate with STUNner. The realm must consist of lower case alphanumeric characters or '-', and must start and end with an alphanumeric character. No other punctuation is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/stunner_l7mp_io_gateway_config_v1_manifest#realm DataK8SStunnerL7MpIoGatewayConfigV1Manifest#realm}
  */
  readonly realm?: string;
  /**
  * SharedSecret defines the shared secret to be used for 'longterm' authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/stunner_l7mp_io_gateway_config_v1_manifest#shared_secret DataK8SStunnerL7MpIoGatewayConfigV1Manifest#shared_secret}
  */
  readonly sharedSecret?: string;
  /**
  * Username defines the 'username' credential for 'plaintext' authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/stunner_l7mp_io_gateway_config_v1_manifest#user_name DataK8SStunnerL7MpIoGatewayConfigV1Manifest#user_name}
  */
  readonly userName?: string;
}

export function dataK8SStunnerL7MpIoGatewayConfigV1ManifestSpecToTerraform(struct?: DataK8SStunnerL7MpIoGatewayConfigV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_lifetime: cdktf.numberToTerraform(struct!.authLifetime),
    auth_ref: dataK8SStunnerL7MpIoGatewayConfigV1ManifestSpecAuthRefToTerraform(struct!.authRef),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    dataplane: cdktf.stringToTerraform(struct!.dataplane),
    load_balancer_service_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.loadBalancerServiceAnnotations),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    password: cdktf.stringToTerraform(struct!.password),
    realm: cdktf.stringToTerraform(struct!.realm),
    shared_secret: cdktf.stringToTerraform(struct!.sharedSecret),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function dataK8SStunnerL7MpIoGatewayConfigV1ManifestSpecToHclTerraform(struct?: DataK8SStunnerL7MpIoGatewayConfigV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.authLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_ref: {
      value: dataK8SStunnerL7MpIoGatewayConfigV1ManifestSpecAuthRefToHclTerraform(struct!.authRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStunnerL7MpIoGatewayConfigV1ManifestSpecAuthRef",
    },
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataplane: {
      value: cdktf.stringToHclTerraform(struct!.dataplane),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_service_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.loadBalancerServiceAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realm: {
      value: cdktf.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_secret: {
      value: cdktf.stringToHclTerraform(struct!.sharedSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStunnerL7MpIoGatewayConfigV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStunnerL7MpIoGatewayConfigV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.authLifetime = this._authLifetime;
    }
    if (this._authRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authRef = this._authRef?.internalValue;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._dataplane !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataplane = this._dataplane;
    }
    if (this._loadBalancerServiceAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerServiceAnnotations = this._loadBalancerServiceAnnotations;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    if (this._sharedSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedSecret = this._sharedSecret;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStunnerL7MpIoGatewayConfigV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authLifetime = undefined;
      this._authRef.internalValue = undefined;
      this._authType = undefined;
      this._dataplane = undefined;
      this._loadBalancerServiceAnnotations = undefined;
      this._logLevel = undefined;
      this._password = undefined;
      this._realm = undefined;
      this._sharedSecret = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authLifetime = value.authLifetime;
      this._authRef.internalValue = value.authRef;
      this._authType = value.authType;
      this._dataplane = value.dataplane;
      this._loadBalancerServiceAnnotations = value.loadBalancerServiceAnnotations;
      this._logLevel = value.logLevel;
      this._password = value.password;
      this._realm = value.realm;
      this._sharedSecret = value.sharedSecret;
      this._userName = value.userName;
    }
  }

  // auth_lifetime - computed: false, optional: true, required: false
  private _authLifetime?: number; 
  public get authLifetime() {
    return this.getNumberAttribute('auth_lifetime');
  }
  public set authLifetime(value: number) {
    this._authLifetime = value;
  }
  public resetAuthLifetime() {
    this._authLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLifetimeInput() {
    return this._authLifetime;
  }

  // auth_ref - computed: false, optional: true, required: false
  private _authRef = new DataK8SStunnerL7MpIoGatewayConfigV1ManifestSpecAuthRefOutputReference(this, "auth_ref");
  public get authRef() {
    return this._authRef;
  }
  public putAuthRef(value: DataK8SStunnerL7MpIoGatewayConfigV1ManifestSpecAuthRef) {
    this._authRef.internalValue = value;
  }
  public resetAuthRef() {
    this._authRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authRefInput() {
    return this._authRef.internalValue;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // dataplane - computed: false, optional: true, required: false
  private _dataplane?: string; 
  public get dataplane() {
    return this.getStringAttribute('dataplane');
  }
  public set dataplane(value: string) {
    this._dataplane = value;
  }
  public resetDataplane() {
    this._dataplane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataplaneInput() {
    return this._dataplane;
  }

  // load_balancer_service_annotations - computed: false, optional: true, required: false
  private _loadBalancerServiceAnnotations?: { [key: string]: string }; 
  public get loadBalancerServiceAnnotations() {
    return this.getStringMapAttribute('load_balancer_service_annotations');
  }
  public set loadBalancerServiceAnnotations(value: { [key: string]: string }) {
    this._loadBalancerServiceAnnotations = value;
  }
  public resetLoadBalancerServiceAnnotations() {
    this._loadBalancerServiceAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerServiceAnnotationsInput() {
    return this._loadBalancerServiceAnnotations;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // shared_secret - computed: false, optional: true, required: false
  private _sharedSecret?: string; 
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }
  public set sharedSecret(value: string) {
    this._sharedSecret = value;
  }
  public resetSharedSecret() {
    this._sharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretInput() {
    return this._sharedSecret;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/stunner_l7mp_io_gateway_config_v1_manifest k8s_stunner_l7mp_io_gateway_config_v1_manifest}
*/
export class DataK8SStunnerL7MpIoGatewayConfigV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_stunner_l7mp_io_gateway_config_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SStunnerL7MpIoGatewayConfigV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SStunnerL7MpIoGatewayConfigV1Manifest to import
  * @param importFromId The id of the existing DataK8SStunnerL7MpIoGatewayConfigV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/stunner_l7mp_io_gateway_config_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SStunnerL7MpIoGatewayConfigV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_stunner_l7mp_io_gateway_config_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/stunner_l7mp_io_gateway_config_v1_manifest k8s_stunner_l7mp_io_gateway_config_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SStunnerL7MpIoGatewayConfigV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SStunnerL7MpIoGatewayConfigV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_stunner_l7mp_io_gateway_config_v1_manifest',
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
  private _metadata = new DataK8SStunnerL7MpIoGatewayConfigV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SStunnerL7MpIoGatewayConfigV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SStunnerL7MpIoGatewayConfigV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SStunnerL7MpIoGatewayConfigV1ManifestSpec) {
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
      metadata: dataK8SStunnerL7MpIoGatewayConfigV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SStunnerL7MpIoGatewayConfigV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SStunnerL7MpIoGatewayConfigV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SStunnerL7MpIoGatewayConfigV1ManifestMetadata",
      },
      spec: {
        value: dataK8SStunnerL7MpIoGatewayConfigV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SStunnerL7MpIoGatewayConfigV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
