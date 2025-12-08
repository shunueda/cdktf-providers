// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#metadata DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestMetadata;
  /**
  * AuthorinoSpec defines the desired state of Authorino
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#spec DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpec;
}
export interface DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#annotations DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#labels DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#name DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#namespace DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestMetadataToTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecHealthz {
  /**
  * Port number of the health/readiness probe endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#port DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecHealthzToTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecHealthz | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecHealthzToHclTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecHealthz | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecHealthzOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecHealthz | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecHealthz | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
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
}
export interface DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#grpc DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#grpc}
  */
  readonly grpc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#http DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#http}
  */
  readonly http?: number;
}

export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerPortsToTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc: cdktf.numberToTerraform(struct!.grpc),
    http: cdktf.numberToTerraform(struct!.http),
  }
}


export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerPortsToHclTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grpc: {
      value: cdktf.numberToHclTerraform(struct!.grpc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http: {
      value: cdktf.numberToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grpc = undefined;
      this._http = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grpc = value.grpc;
      this._http = value.http;
    }
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc?: number; 
  public get grpc() {
    return this.getNumberAttribute('grpc');
  }
  public set grpc(value: number) {
    this._grpc = value;
  }
  public resetGrpc() {
    this._grpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc;
  }

  // http - computed: false, optional: true, required: false
  private _http?: number; 
  public get http() {
    return this.getNumberAttribute('http');
  }
  public set http(value: number) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }
}
export interface DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTlsCertSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#name DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTlsCertSecretRefToTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTlsCertSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTlsCertSecretRefToHclTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTlsCertSecretRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTlsCertSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTlsCertSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTlsCertSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}
export interface DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTls {
  /**
  * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#cert_secret_ref DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#cert_secret_ref}
  */
  readonly certSecretRef?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTlsCertSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#enabled DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTlsToTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_secret_ref: dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTlsCertSecretRefToTerraform(struct!.certSecretRef),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTlsToHclTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_secret_ref: {
      value: dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTlsCertSecretRefToHclTerraform(struct!.certSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTlsCertSecretRef",
    },
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

export class DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certSecretRef = this._certSecretRef?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certSecretRef.internalValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certSecretRef.internalValue = value.certSecretRef;
      this._enabled = value.enabled;
    }
  }

  // cert_secret_ref - computed: false, optional: true, required: false
  private _certSecretRef = new DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTlsCertSecretRefOutputReference(this, "cert_secret_ref");
  public get certSecretRef() {
    return this._certSecretRef;
  }
  public putCertSecretRef(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTlsCertSecretRef) {
    this._certSecretRef.internalValue = value;
  }
  public resetCertSecretRef() {
    this._certSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certSecretRefInput() {
    return this._certSecretRef.internalValue;
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
export interface DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListener {
  /**
  * Maximum payload (request body) size for the auth service (HTTP interface), in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#max_http_request_body_size DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#max_http_request_body_size}
  */
  readonly maxHttpRequestBodySize?: number;
  /**
  * Port number of the GRPC interface. DEPRECATED: use 'ports.grpc' instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#port DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#port}
  */
  readonly port?: number;
  /**
  * Port numbers of the GRPC and HTTP auth interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#ports DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#ports}
  */
  readonly ports?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerPorts;
  /**
  * Timeout of the auth service (GRPC and HTTP interfaces), in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#timeout DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#timeout}
  */
  readonly timeout?: number;
  /**
  * TLS configuration of the auth service (GRPC and HTTP interfaces).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#tls DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#tls}
  */
  readonly tls: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTls;
}

export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerToTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_http_request_body_size: cdktf.numberToTerraform(struct!.maxHttpRequestBodySize),
    port: cdktf.numberToTerraform(struct!.port),
    ports: dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerPortsToTerraform(struct!.ports),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    tls: dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTlsToTerraform(struct!.tls),
  }
}


export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerToHclTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_http_request_body_size: {
      value: cdktf.numberToHclTerraform(struct!.maxHttpRequestBodySize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports: {
      value: dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerPortsToHclTerraform(struct!.ports),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerPorts",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls: {
      value: dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListener | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxHttpRequestBodySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHttpRequestBodySize = this._maxHttpRequestBodySize;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListener | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxHttpRequestBodySize = undefined;
      this._port = undefined;
      this._ports.internalValue = undefined;
      this._timeout = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxHttpRequestBodySize = value.maxHttpRequestBodySize;
      this._port = value.port;
      this._ports.internalValue = value.ports;
      this._timeout = value.timeout;
      this._tls.internalValue = value.tls;
    }
  }

  // max_http_request_body_size - computed: false, optional: true, required: false
  private _maxHttpRequestBodySize?: number; 
  public get maxHttpRequestBodySize() {
    return this.getNumberAttribute('max_http_request_body_size');
  }
  public set maxHttpRequestBodySize(value: number) {
    this._maxHttpRequestBodySize = value;
  }
  public resetMaxHttpRequestBodySize() {
    this._maxHttpRequestBodySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHttpRequestBodySizeInput() {
    return this._maxHttpRequestBodySize;
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

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerPortsOutputReference(this, "ports");
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerPorts) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tls - computed: false, optional: false, required: true
  private _tls = new DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerTls) {
    this._tls.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#deep DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#deep}
  */
  readonly deep?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#port DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecMetricsToTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deep: cdktf.booleanToTerraform(struct!.deep),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecMetricsToHclTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deep: {
      value: cdktf.booleanToHclTerraform(struct!.deep),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deep !== undefined) {
      hasAnyValues = true;
      internalValueResult.deep = this._deep;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deep = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deep = value.deep;
      this._port = value.port;
    }
  }

  // deep - computed: false, optional: true, required: false
  private _deep?: boolean | cdktf.IResolvable; 
  public get deep() {
    return this.getBooleanAttribute('deep');
  }
  public set deep(value: boolean | cdktf.IResolvable) {
    this._deep = value;
  }
  public resetDeep() {
    this._deep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deepInput() {
    return this._deep;
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
export interface DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTlsCertSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#name DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTlsCertSecretRefToTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTlsCertSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTlsCertSecretRefToHclTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTlsCertSecretRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTlsCertSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTlsCertSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTlsCertSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}
export interface DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTls {
  /**
  * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#cert_secret_ref DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#cert_secret_ref}
  */
  readonly certSecretRef?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTlsCertSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#enabled DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTlsToTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_secret_ref: dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTlsCertSecretRefToTerraform(struct!.certSecretRef),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTlsToHclTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_secret_ref: {
      value: dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTlsCertSecretRefToHclTerraform(struct!.certSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTlsCertSecretRef",
    },
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

export class DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certSecretRef = this._certSecretRef?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certSecretRef.internalValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certSecretRef.internalValue = value.certSecretRef;
      this._enabled = value.enabled;
    }
  }

  // cert_secret_ref - computed: false, optional: true, required: false
  private _certSecretRef = new DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTlsCertSecretRefOutputReference(this, "cert_secret_ref");
  public get certSecretRef() {
    return this._certSecretRef;
  }
  public putCertSecretRef(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTlsCertSecretRef) {
    this._certSecretRef.internalValue = value;
  }
  public resetCertSecretRef() {
    this._certSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certSecretRefInput() {
    return this._certSecretRef.internalValue;
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
export interface DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#port DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#tls DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#tls}
  */
  readonly tls: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTls;
}

export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerToTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    tls: dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTlsToTerraform(struct!.tls),
  }
}


export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerToHclTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServer | cdktf.IResolvable): any {
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
    tls: {
      value: dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._port = value.port;
      this._tls.internalValue = value.tls;
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

  // tls - computed: false, optional: false, required: true
  private _tls = new DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerTls) {
    this._tls.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecTracing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#endpoint DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#insecure DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#tags DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecTracingToTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecTracingToHclTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
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
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecTracingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecTracing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecTracing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._insecure = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._insecure = value.insecure;
      this._tags = value.tags;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#key DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#mode DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#path DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsItemsToTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsItemsToHclTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsItemsOutputReference {
    return new DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItems {
  /**
  * Allow multiple configmaps to mount to the same directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#config_maps DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#config_maps}
  */
  readonly configMaps?: string[];
  /**
  * Mount details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#items DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#items}
  */
  readonly items?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsItems[] | cdktf.IResolvable;
  /**
  * An absolute path where to mount it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#mount_path DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * Volume name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#name DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Secret mount
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#secrets DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#secrets}
  */
  readonly secrets?: string[];
}

export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsToTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_maps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.configMaps),
    items: cdktf.listMapper(dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsItemsToTerraform, false)(struct!.items),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    secrets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secrets),
  }
}


export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsToHclTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_maps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.configMaps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsItemsList",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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
    secrets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secrets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMaps = this._configMaps;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMaps = undefined;
      this._items.internalValue = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._secrets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMaps = value.configMaps;
      this._items.internalValue = value.items;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._secrets = value.secrets;
    }
  }

  // config_maps - computed: false, optional: true, required: false
  private _configMaps?: string[]; 
  public get configMaps() {
    return this.getListAttribute('config_maps');
  }
  public set configMaps(value: string[]) {
    this._configMaps = value;
  }
  public resetConfigMaps() {
    this._configMaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapsInput() {
    return this._configMaps;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

  // secrets - computed: false, optional: true, required: false
  private _secrets?: string[]; 
  public get secrets() {
    return this.getListAttribute('secrets');
  }
  public set secrets(value: string[]) {
    this._secrets = value;
  }
  public resetSecrets() {
    this._secrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets;
  }
}

export class DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsOutputReference {
    return new DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumes {
  /**
  * Permissions mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#default_mode DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#items DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#items}
  */
  readonly items?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItems[] | cdktf.IResolvable;
}

export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesToTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesToHclTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#auth_config_label_selectors DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#auth_config_label_selectors}
  */
  readonly authConfigLabelSelectors?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#cluster_wide DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#cluster_wide}
  */
  readonly clusterWide?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#evaluator_cache_size DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#evaluator_cache_size}
  */
  readonly evaluatorCacheSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#healthz DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#healthz}
  */
  readonly healthz?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecHealthz;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#image DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#image}
  */
  readonly image?: string;
  /**
  * PullPolicy describes a policy for if/when to pull a container image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#image_pull_policy DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#listener DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#listener}
  */
  readonly listener: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListener;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#log_level DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#log_mode DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#log_mode}
  */
  readonly logMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#metrics DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#metrics}
  */
  readonly metrics?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecMetrics;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#oidc_server DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#oidc_server}
  */
  readonly oidcServer: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#replicas DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#secret_label_selectors DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#secret_label_selectors}
  */
  readonly secretLabelSelectors?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#superseding_host_subsets DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#superseding_host_subsets}
  */
  readonly supersedingHostSubsets?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#tracing DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#tracing}
  */
  readonly tracing?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecTracing;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#volumes DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest#volumes}
  */
  readonly volumes?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumes;
}

export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecToTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_config_label_selectors: cdktf.stringToTerraform(struct!.authConfigLabelSelectors),
    cluster_wide: cdktf.booleanToTerraform(struct!.clusterWide),
    evaluator_cache_size: cdktf.numberToTerraform(struct!.evaluatorCacheSize),
    healthz: dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecHealthzToTerraform(struct!.healthz),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    listener: dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerToTerraform(struct!.listener),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    log_mode: cdktf.stringToTerraform(struct!.logMode),
    metrics: dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecMetricsToTerraform(struct!.metrics),
    oidc_server: dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerToTerraform(struct!.oidcServer),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    secret_label_selectors: cdktf.stringToTerraform(struct!.secretLabelSelectors),
    superseding_host_subsets: cdktf.booleanToTerraform(struct!.supersedingHostSubsets),
    tracing: dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecTracingToTerraform(struct!.tracing),
    volumes: dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesToTerraform(struct!.volumes),
  }
}


export function dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_config_label_selectors: {
      value: cdktf.stringToHclTerraform(struct!.authConfigLabelSelectors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_wide: {
      value: cdktf.booleanToHclTerraform(struct!.clusterWide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    evaluator_cache_size: {
      value: cdktf.numberToHclTerraform(struct!.evaluatorCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    healthz: {
      value: dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecHealthzToHclTerraform(struct!.healthz),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecHealthz",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listener: {
      value: dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerToHclTerraform(struct!.listener),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListener",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_mode: {
      value: cdktf.stringToHclTerraform(struct!.logMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics: {
      value: dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecMetricsToHclTerraform(struct!.metrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecMetrics",
    },
    oidc_server: {
      value: dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerToHclTerraform(struct!.oidcServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServer",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_label_selectors: {
      value: cdktf.stringToHclTerraform(struct!.secretLabelSelectors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    superseding_host_subsets: {
      value: cdktf.booleanToHclTerraform(struct!.supersedingHostSubsets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tracing: {
      value: dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecTracingToHclTerraform(struct!.tracing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecTracing",
    },
    volumes: {
      value: dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesToHclTerraform(struct!.volumes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authConfigLabelSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.authConfigLabelSelectors = this._authConfigLabelSelectors;
    }
    if (this._clusterWide !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterWide = this._clusterWide;
    }
    if (this._evaluatorCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluatorCacheSize = this._evaluatorCacheSize;
    }
    if (this._healthz?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthz = this._healthz?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._listener?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listener = this._listener?.internalValue;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._logMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.logMode = this._logMode;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._oidcServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcServer = this._oidcServer?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._secretLabelSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretLabelSelectors = this._secretLabelSelectors;
    }
    if (this._supersedingHostSubsets !== undefined) {
      hasAnyValues = true;
      internalValueResult.supersedingHostSubsets = this._supersedingHostSubsets;
    }
    if (this._tracing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracing = this._tracing?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authConfigLabelSelectors = undefined;
      this._clusterWide = undefined;
      this._evaluatorCacheSize = undefined;
      this._healthz.internalValue = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._listener.internalValue = undefined;
      this._logLevel = undefined;
      this._logMode = undefined;
      this._metrics.internalValue = undefined;
      this._oidcServer.internalValue = undefined;
      this._replicas = undefined;
      this._secretLabelSelectors = undefined;
      this._supersedingHostSubsets = undefined;
      this._tracing.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authConfigLabelSelectors = value.authConfigLabelSelectors;
      this._clusterWide = value.clusterWide;
      this._evaluatorCacheSize = value.evaluatorCacheSize;
      this._healthz.internalValue = value.healthz;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._listener.internalValue = value.listener;
      this._logLevel = value.logLevel;
      this._logMode = value.logMode;
      this._metrics.internalValue = value.metrics;
      this._oidcServer.internalValue = value.oidcServer;
      this._replicas = value.replicas;
      this._secretLabelSelectors = value.secretLabelSelectors;
      this._supersedingHostSubsets = value.supersedingHostSubsets;
      this._tracing.internalValue = value.tracing;
      this._volumes.internalValue = value.volumes;
    }
  }

  // auth_config_label_selectors - computed: false, optional: true, required: false
  private _authConfigLabelSelectors?: string; 
  public get authConfigLabelSelectors() {
    return this.getStringAttribute('auth_config_label_selectors');
  }
  public set authConfigLabelSelectors(value: string) {
    this._authConfigLabelSelectors = value;
  }
  public resetAuthConfigLabelSelectors() {
    this._authConfigLabelSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigLabelSelectorsInput() {
    return this._authConfigLabelSelectors;
  }

  // cluster_wide - computed: false, optional: true, required: false
  private _clusterWide?: boolean | cdktf.IResolvable; 
  public get clusterWide() {
    return this.getBooleanAttribute('cluster_wide');
  }
  public set clusterWide(value: boolean | cdktf.IResolvable) {
    this._clusterWide = value;
  }
  public resetClusterWide() {
    this._clusterWide = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterWideInput() {
    return this._clusterWide;
  }

  // evaluator_cache_size - computed: false, optional: true, required: false
  private _evaluatorCacheSize?: number; 
  public get evaluatorCacheSize() {
    return this.getNumberAttribute('evaluator_cache_size');
  }
  public set evaluatorCacheSize(value: number) {
    this._evaluatorCacheSize = value;
  }
  public resetEvaluatorCacheSize() {
    this._evaluatorCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorCacheSizeInput() {
    return this._evaluatorCacheSize;
  }

  // healthz - computed: false, optional: true, required: false
  private _healthz = new DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecHealthzOutputReference(this, "healthz");
  public get healthz() {
    return this._healthz;
  }
  public putHealthz(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecHealthz) {
    this._healthz.internalValue = value;
  }
  public resetHealthz() {
    this._healthz.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthzInput() {
    return this._healthz.internalValue;
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

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // listener - computed: false, optional: false, required: true
  private _listener = new DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListenerOutputReference(this, "listener");
  public get listener() {
    return this._listener;
  }
  public putListener(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecListener) {
    this._listener.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerInput() {
    return this._listener.internalValue;
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

  // log_mode - computed: false, optional: true, required: false
  private _logMode?: string; 
  public get logMode() {
    return this.getStringAttribute('log_mode');
  }
  public set logMode(value: string) {
    this._logMode = value;
  }
  public resetLogMode() {
    this._logMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logModeInput() {
    return this._logMode;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // oidc_server - computed: false, optional: false, required: true
  private _oidcServer = new DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServerOutputReference(this, "oidc_server");
  public get oidcServer() {
    return this._oidcServer;
  }
  public putOidcServer(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOidcServer) {
    this._oidcServer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcServerInput() {
    return this._oidcServer.internalValue;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // secret_label_selectors - computed: false, optional: true, required: false
  private _secretLabelSelectors?: string; 
  public get secretLabelSelectors() {
    return this.getStringAttribute('secret_label_selectors');
  }
  public set secretLabelSelectors(value: string) {
    this._secretLabelSelectors = value;
  }
  public resetSecretLabelSelectors() {
    this._secretLabelSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretLabelSelectorsInput() {
    return this._secretLabelSelectors;
  }

  // superseding_host_subsets - computed: false, optional: true, required: false
  private _supersedingHostSubsets?: boolean | cdktf.IResolvable; 
  public get supersedingHostSubsets() {
    return this.getBooleanAttribute('superseding_host_subsets');
  }
  public set supersedingHostSubsets(value: boolean | cdktf.IResolvable) {
    this._supersedingHostSubsets = value;
  }
  public resetSupersedingHostSubsets() {
    this._supersedingHostSubsets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supersedingHostSubsetsInput() {
    return this._supersedingHostSubsets;
  }

  // tracing - computed: false, optional: true, required: false
  private _tracing = new DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecTracingOutputReference(this, "tracing");
  public get tracing() {
    return this._tracing;
  }
  public putTracing(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecTracing) {
    this._tracing.internalValue = value;
  }
  public resetTracing() {
    this._tracing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingInput() {
    return this._tracing.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumesOutputReference(this, "volumes");
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecVolumes) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest k8s_operator_authorino_kuadrant_io_authorino_v1beta1_manifest}
*/
export class DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_operator_authorino_kuadrant_io_authorino_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_operator_authorino_kuadrant_io_authorino_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/operator_authorino_kuadrant_io_authorino_v1beta1_manifest k8s_operator_authorino_kuadrant_io_authorino_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_operator_authorino_kuadrant_io_authorino_v1beta1_manifest',
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
  private _metadata = new DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpec) {
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
      metadata: dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorAuthorinoKuadrantIoAuthorinoV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
