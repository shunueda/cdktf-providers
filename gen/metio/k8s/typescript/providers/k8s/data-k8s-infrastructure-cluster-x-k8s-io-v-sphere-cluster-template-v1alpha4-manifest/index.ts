// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_template_v1alpha4_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_template_v1alpha4_manifest#metadata DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4Manifest#metadata}
  */
  readonly metadata: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestMetadata;
  /**
  * VSphereClusterTemplateSpec defines the desired state of VSphereClusterTemplate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_template_v1alpha4_manifest#spec DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4Manifest#spec}
  */
  readonly spec?: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpec;
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_template_v1alpha4_manifest#annotations DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_template_v1alpha4_manifest#labels DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_template_v1alpha4_manifest#name DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_template_v1alpha4_manifest#namespace DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestMetadataToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestMetadataToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecControlPlaneEndpoint {
  /**
  * The hostname on which the API server is serving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_template_v1alpha4_manifest#host DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4Manifest#host}
  */
  readonly host: string;
  /**
  * The port on which the API server is serving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_template_v1alpha4_manifest#port DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4Manifest#port}
  */
  readonly port: number;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecControlPlaneEndpointToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecControlPlaneEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecControlPlaneEndpointToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecControlPlaneEndpoint | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecControlPlaneEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecControlPlaneEndpoint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecControlPlaneEndpoint | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecIdentityRef {
  /**
  * Kind of the identity. Can either be VSphereClusterIdentity or Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_template_v1alpha4_manifest#kind DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_template_v1alpha4_manifest#name DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4Manifest#name}
  */
  readonly name: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecIdentityRefToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecIdentityRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecIdentityRefToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecIdentityRef | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecIdentityRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecIdentityRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecIdentityRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._kind = value.kind;
      this._name = value.name;
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
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpec {
  /**
  * ControlPlaneEndpoint represents the endpoint used to communicate with the control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_template_v1alpha4_manifest#control_plane_endpoint DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4Manifest#control_plane_endpoint}
  */
  readonly controlPlaneEndpoint?: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecControlPlaneEndpoint;
  /**
  * IdentityRef is a reference to either a Secret or VSphereClusterIdentity that contains the identity to use when reconciling the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_template_v1alpha4_manifest#identity_ref DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4Manifest#identity_ref}
  */
  readonly identityRef?: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecIdentityRef;
  /**
  * Server is the address of the vSphere endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_template_v1alpha4_manifest#server DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4Manifest#server}
  */
  readonly server?: string;
  /**
  * Thumbprint is the colon-separated SHA-1 checksum of the given vCenter server's host certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_template_v1alpha4_manifest#thumbprint DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4Manifest#thumbprint}
  */
  readonly thumbprint?: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane_endpoint: dataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecControlPlaneEndpointToTerraform(struct!.controlPlaneEndpoint),
    identity_ref: dataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecIdentityRefToTerraform(struct!.identityRef),
    server: cdktf.stringToTerraform(struct!.server),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane_endpoint: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecControlPlaneEndpointToHclTerraform(struct!.controlPlaneEndpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecControlPlaneEndpoint",
    },
    identity_ref: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecIdentityRefToHclTerraform(struct!.identityRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecIdentityRef",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.thumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlaneEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneEndpoint = this._controlPlaneEndpoint?.internalValue;
    }
    if (this._identityRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityRef = this._identityRef?.internalValue;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._thumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprint = this._thumbprint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controlPlaneEndpoint.internalValue = undefined;
      this._identityRef.internalValue = undefined;
      this._server = undefined;
      this._thumbprint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controlPlaneEndpoint.internalValue = value.controlPlaneEndpoint;
      this._identityRef.internalValue = value.identityRef;
      this._server = value.server;
      this._thumbprint = value.thumbprint;
    }
  }

  // control_plane_endpoint - computed: false, optional: true, required: false
  private _controlPlaneEndpoint = new DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecControlPlaneEndpointOutputReference(this, "control_plane_endpoint");
  public get controlPlaneEndpoint() {
    return this._controlPlaneEndpoint;
  }
  public putControlPlaneEndpoint(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecControlPlaneEndpoint) {
    this._controlPlaneEndpoint.internalValue = value;
  }
  public resetControlPlaneEndpoint() {
    this._controlPlaneEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneEndpointInput() {
    return this._controlPlaneEndpoint.internalValue;
  }

  // identity_ref - computed: false, optional: true, required: false
  private _identityRef = new DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecIdentityRefOutputReference(this, "identity_ref");
  public get identityRef() {
    return this._identityRef;
  }
  public putIdentityRef(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecIdentityRef) {
    this._identityRef.internalValue = value;
  }
  public resetIdentityRef() {
    this._identityRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityRefInput() {
    return this._identityRef.internalValue;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // thumbprint - computed: false, optional: true, required: false
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  public resetThumbprint() {
    this._thumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplate {
  /**
  * VSphereClusterSpec defines the desired state of VSphereCluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_template_v1alpha4_manifest#spec DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4Manifest#spec}
  */
  readonly spec: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpec;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spec.internalValue = value.spec;
    }
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_template_v1alpha4_manifest#template DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4Manifest#template}
  */
  readonly template: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplate;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: dataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpec | cdktf.IResolvable | undefined) {
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
  private _template = new DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_template_v1alpha4_manifest k8s_infrastructure_cluster_x_k8s_io_v_sphere_cluster_template_v1alpha4_manifest}
*/
export class DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_infrastructure_cluster_x_k8s_io_v_sphere_cluster_template_v1alpha4_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4Manifest to import
  * @param importFromId The id of the existing DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_template_v1alpha4_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_infrastructure_cluster_x_k8s_io_v_sphere_cluster_template_v1alpha4_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_template_v1alpha4_manifest k8s_infrastructure_cluster_x_k8s_io_v_sphere_cluster_template_v1alpha4_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_infrastructure_cluster_x_k8s_io_v_sphere_cluster_template_v1alpha4_manifest',
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
  private _metadata = new DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpec) {
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
      metadata: dataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestMetadata",
      },
      spec: {
        value: dataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterTemplateV1Alpha4ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
