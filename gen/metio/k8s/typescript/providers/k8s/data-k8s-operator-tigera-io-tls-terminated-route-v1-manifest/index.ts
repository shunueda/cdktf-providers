// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest#metadata DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest#metadata}
  */
  readonly metadata: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest#spec DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpec;
}
export interface DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest#annotations DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest#labels DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest#name DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest#namespace DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestMetadataToTerraform(struct?: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestMetadataToHclTerraform(struct?: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecCaBundle {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest#key DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest#name DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest#optional DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecCaBundleToTerraform(struct?: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecCaBundle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecCaBundleToHclTerraform(struct?: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecCaBundle | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecCaBundleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecCaBundle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecCaBundle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsCert {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest#key DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest#name DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest#optional DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsCertToTerraform(struct?: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsCertToHclTerraform(struct?: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsCert | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsKey {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest#key DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest#name DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest#optional DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsKeyToTerraform(struct?: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsKeyToHclTerraform(struct?: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsKey | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecPathMatch {
  /**
  * Path is the path portion of the URL based on which we proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest#path DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest#path}
  */
  readonly path: string;
  /**
  * PathRegexp, if not nil, checks if Regexp matches the path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest#path_regexp DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest#path_regexp}
  */
  readonly pathRegexp?: string;
  /**
  * PathReplace if not nil will be used to replace PathRegexp matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest#path_replace DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest#path_replace}
  */
  readonly pathReplace?: string;
}

export function dataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecPathMatchToTerraform(struct?: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecPathMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    path_regexp: cdktf.stringToTerraform(struct!.pathRegexp),
    path_replace: cdktf.stringToTerraform(struct!.pathReplace),
  }
}


export function dataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecPathMatchToHclTerraform(struct?: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecPathMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_regexp: {
      value: cdktf.stringToHclTerraform(struct!.pathRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_replace: {
      value: cdktf.stringToHclTerraform(struct!.pathReplace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecPathMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecPathMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._pathRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRegexp = this._pathRegexp;
    }
    if (this._pathReplace !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathReplace = this._pathReplace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecPathMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._pathRegexp = undefined;
      this._pathReplace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._pathRegexp = value.pathRegexp;
      this._pathReplace = value.pathReplace;
    }
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

  // path_regexp - computed: false, optional: true, required: false
  private _pathRegexp?: string; 
  public get pathRegexp() {
    return this.getStringAttribute('path_regexp');
  }
  public set pathRegexp(value: string) {
    this._pathRegexp = value;
  }
  public resetPathRegexp() {
    this._pathRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRegexpInput() {
    return this._pathRegexp;
  }

  // path_replace - computed: false, optional: true, required: false
  private _pathReplace?: string; 
  public get pathReplace() {
    return this.getStringAttribute('path_replace');
  }
  public set pathReplace(value: string) {
    this._pathReplace = value;
  }
  public resetPathReplace() {
    this._pathReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathReplaceInput() {
    return this._pathReplace;
  }
}
export interface DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpec {
  /**
  * CABundle is where we read the CA bundle from to authenticate the destination (if non-empty)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest#ca_bundle DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest#ca_bundle}
  */
  readonly caBundle?: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecCaBundle;
  /**
  * Destination is the destination URL where matching traffic is routed to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest#destination DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest#destination}
  */
  readonly destination: string;
  /**
  * ForwardingMTLSCert is the certificate used for mTLS between voltron and the destination. Either both ForwardingMTLSCert and ForwardingMTLSKey must be specified, or neither can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest#mtls_cert DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest#mtls_cert}
  */
  readonly mtlsCert?: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsCert;
  /**
  * ForwardingMTLSKey is the key used for mTLS between voltron and the destination. Either both ForwardingMTLSCert and ForwardingMTLSKey must be specified, or neither can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest#mtls_key DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest#mtls_key}
  */
  readonly mtlsKey?: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsKey;
  /**
  * PathMatch is used to match requests based on what's in the path. Matching requests will be proxied to the Destination defined in this structure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest#path_match DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest#path_match}
  */
  readonly pathMatch: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecPathMatch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest#target DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest#target}
  */
  readonly target: string;
  /**
  * Unauthenticated says whether the request should go through authentication. This is only applicable if the Target is UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest#unauthenticated DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest#unauthenticated}
  */
  readonly unauthenticated?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecToTerraform(struct?: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_bundle: dataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecCaBundleToTerraform(struct!.caBundle),
    destination: cdktf.stringToTerraform(struct!.destination),
    mtls_cert: dataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsCertToTerraform(struct!.mtlsCert),
    mtls_key: dataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsKeyToTerraform(struct!.mtlsKey),
    path_match: dataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecPathMatchToTerraform(struct!.pathMatch),
    target: cdktf.stringToTerraform(struct!.target),
    unauthenticated: cdktf.booleanToTerraform(struct!.unauthenticated),
  }
}


export function dataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_bundle: {
      value: dataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecCaBundleToHclTerraform(struct!.caBundle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecCaBundle",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtls_cert: {
      value: dataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsCertToHclTerraform(struct!.mtlsCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsCert",
    },
    mtls_key: {
      value: dataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsKeyToHclTerraform(struct!.mtlsKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsKey",
    },
    path_match: {
      value: dataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecPathMatchToHclTerraform(struct!.pathMatch),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecPathMatch",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unauthenticated: {
      value: cdktf.booleanToHclTerraform(struct!.unauthenticated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caBundle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caBundle = this._caBundle?.internalValue;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._mtlsCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsCert = this._mtlsCert?.internalValue;
    }
    if (this._mtlsKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsKey = this._mtlsKey?.internalValue;
    }
    if (this._pathMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathMatch = this._pathMatch?.internalValue;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._unauthenticated !== undefined) {
      hasAnyValues = true;
      internalValueResult.unauthenticated = this._unauthenticated;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caBundle.internalValue = undefined;
      this._destination = undefined;
      this._mtlsCert.internalValue = undefined;
      this._mtlsKey.internalValue = undefined;
      this._pathMatch.internalValue = undefined;
      this._target = undefined;
      this._unauthenticated = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caBundle.internalValue = value.caBundle;
      this._destination = value.destination;
      this._mtlsCert.internalValue = value.mtlsCert;
      this._mtlsKey.internalValue = value.mtlsKey;
      this._pathMatch.internalValue = value.pathMatch;
      this._target = value.target;
      this._unauthenticated = value.unauthenticated;
    }
  }

  // ca_bundle - computed: false, optional: true, required: false
  private _caBundle = new DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecCaBundleOutputReference(this, "ca_bundle");
  public get caBundle() {
    return this._caBundle;
  }
  public putCaBundle(value: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecCaBundle) {
    this._caBundle.internalValue = value;
  }
  public resetCaBundle() {
    this._caBundle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caBundleInput() {
    return this._caBundle.internalValue;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // mtls_cert - computed: false, optional: true, required: false
  private _mtlsCert = new DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsCertOutputReference(this, "mtls_cert");
  public get mtlsCert() {
    return this._mtlsCert;
  }
  public putMtlsCert(value: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsCert) {
    this._mtlsCert.internalValue = value;
  }
  public resetMtlsCert() {
    this._mtlsCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsCertInput() {
    return this._mtlsCert.internalValue;
  }

  // mtls_key - computed: false, optional: true, required: false
  private _mtlsKey = new DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsKeyOutputReference(this, "mtls_key");
  public get mtlsKey() {
    return this._mtlsKey;
  }
  public putMtlsKey(value: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecMtlsKey) {
    this._mtlsKey.internalValue = value;
  }
  public resetMtlsKey() {
    this._mtlsKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsKeyInput() {
    return this._mtlsKey.internalValue;
  }

  // path_match - computed: false, optional: false, required: true
  private _pathMatch = new DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecPathMatchOutputReference(this, "path_match");
  public get pathMatch() {
    return this._pathMatch;
  }
  public putPathMatch(value: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecPathMatch) {
    this._pathMatch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMatchInput() {
    return this._pathMatch.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // unauthenticated - computed: false, optional: true, required: false
  private _unauthenticated?: boolean | cdktf.IResolvable; 
  public get unauthenticated() {
    return this.getBooleanAttribute('unauthenticated');
  }
  public set unauthenticated(value: boolean | cdktf.IResolvable) {
    this._unauthenticated = value;
  }
  public resetUnauthenticated() {
    this._unauthenticated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthenticatedInput() {
    return this._unauthenticated;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest k8s_operator_tigera_io_tls_terminated_route_v1_manifest}
*/
export class DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_operator_tigera_io_tls_terminated_route_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest to import
  * @param importFromId The id of the existing DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOperatorTigeraIoTlsTerminatedRouteV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_operator_tigera_io_tls_terminated_route_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_tls_terminated_route_v1_manifest k8s_operator_tigera_io_tls_terminated_route_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_operator_tigera_io_tls_terminated_route_v1_manifest',
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
  private _metadata = new DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpec) {
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
      metadata: dataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestMetadata",
      },
      spec: {
        value: dataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorTigeraIoTlsTerminatedRouteV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
