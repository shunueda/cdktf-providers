// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest#metadata DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestMetadata;
  /**
  * DiscoveryServiceCertificateSpec defines the desired state of DiscoveryServiceCertificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest#spec DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpec;
}
export interface DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest#annotations DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest#labels DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest#name DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest#namespace DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecCertificateRenewal {
  /**
  * Enabled is a flag to enable or disable renewal of the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest#enabled DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecCertificateRenewalToTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecCertificateRenewal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecCertificateRenewalToHclTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecCertificateRenewal | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecCertificateRenewalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecCertificateRenewal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecCertificateRenewal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSecretRef {
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest#name DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest#namespace DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSecretRefToTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSecretRefToHclTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSecretRef | cdktf.IResolvable): any {
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

export class DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSecretRef | cdktf.IResolvable | undefined) {
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
}
export interface DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSignedCaSecretRef {
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest#name DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest#namespace DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSignedCaSecretRefToTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSignedCaSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSignedCaSecretRefToHclTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSignedCaSecretRef | cdktf.IResolvable): any {
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

export class DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSignedCaSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSignedCaSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSignedCaSecretRef | cdktf.IResolvable | undefined) {
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
}
export interface DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSigned {
  /**
  * A reference to a Secret containing the CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest#ca_secret_ref DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest#ca_secret_ref}
  */
  readonly caSecretRef: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSignedCaSecretRef;
}

export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSignedToTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSigned | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_secret_ref: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSignedCaSecretRefToTerraform(struct!.caSecretRef),
  }
}


export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSignedToHclTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSigned | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_secret_ref: {
      value: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSignedCaSecretRefToHclTerraform(struct!.caSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSignedCaSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSignedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSigned | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caSecretRef = this._caSecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSigned | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caSecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caSecretRef.internalValue = value.caSecretRef;
    }
  }

  // ca_secret_ref - computed: false, optional: false, required: true
  private _caSecretRef = new DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSignedCaSecretRefOutputReference(this, "ca_secret_ref");
  public get caSecretRef() {
    return this._caSecretRef;
  }
  public putCaSecretRef(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSignedCaSecretRef) {
    this._caSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caSecretRefInput() {
    return this._caSecretRef.internalValue;
  }
}
export interface DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSigner {
  /**
  * CASigned holds specific configuration for the CASigned signer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest#ca_signed DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest#ca_signed}
  */
  readonly caSigned?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSigned;
  /**
  * SelfSigned holds specific configuration for the SelfSigned signer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest#self_signed DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest#self_signed}
  */
  readonly selfSigned?: { [key: string]: string };
}

export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerToTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSigner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_signed: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSignedToTerraform(struct!.caSigned),
    self_signed: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.selfSigned),
  }
}


export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerToHclTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSigner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_signed: {
      value: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSignedToHclTerraform(struct!.caSigned),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSigned",
    },
    self_signed: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.selfSigned),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSigner | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caSigned?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caSigned = this._caSigned?.internalValue;
    }
    if (this._selfSigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfSigned = this._selfSigned;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSigner | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caSigned.internalValue = undefined;
      this._selfSigned = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caSigned.internalValue = value.caSigned;
      this._selfSigned = value.selfSigned;
    }
  }

  // ca_signed - computed: false, optional: true, required: false
  private _caSigned = new DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSignedOutputReference(this, "ca_signed");
  public get caSigned() {
    return this._caSigned;
  }
  public putCaSigned(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerCaSigned) {
    this._caSigned.internalValue = value;
  }
  public resetCaSigned() {
    this._caSigned.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caSignedInput() {
    return this._caSigned.internalValue;
  }

  // self_signed - computed: false, optional: true, required: false
  private _selfSigned?: { [key: string]: string }; 
  public get selfSigned() {
    return this.getStringMapAttribute('self_signed');
  }
  public set selfSigned(value: { [key: string]: string }) {
    this._selfSigned = value;
  }
  public resetSelfSigned() {
    this._selfSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfSignedInput() {
    return this._selfSigned;
  }
}
export interface DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpec {
  /**
  * CertificateRenewalConfig configures the certificate renewal process. If unset default behavior is to renew the certificate but not notify of renewals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest#certificate_renewal DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest#certificate_renewal}
  */
  readonly certificateRenewal?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecCertificateRenewal;
  /**
  * CommonName is the CommonName of the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest#common_name DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest#common_name}
  */
  readonly commonName: string;
  /**
  * Hosts is the list of hosts the certificate is valid for. Only use when 'IsServerCertificate' is true. If unset, the CommonName field will be used to populate the valid hosts of the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest#hosts DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest#hosts}
  */
  readonly hosts?: string[];
  /**
  * IsCA is a boolean specifying that the certificate is a CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest#is_ca DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest#is_ca}
  */
  readonly isCa?: boolean | cdktf.IResolvable;
  /**
  * SecretRef is a reference to the secret that will hold the certificate and the private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest#secret_ref DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSecretRef;
  /**
  * IsServerCertificate is a boolean specifying if the certificate should be issued with server auth usage enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest#server DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest#server}
  */
  readonly server?: boolean | cdktf.IResolvable;
  /**
  * Signer specifies the signer to use to create this certificate. Supported signers are CertManager and SelfSigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest#signer DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest#signer}
  */
  readonly signer: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSigner;
  /**
  * ValidFor specifies the validity of the certificate in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest#valid_for DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest#valid_for}
  */
  readonly validFor: number;
}

export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecToTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_renewal: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecCertificateRenewalToTerraform(struct!.certificateRenewal),
    common_name: cdktf.stringToTerraform(struct!.commonName),
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    is_ca: cdktf.booleanToTerraform(struct!.isCa),
    secret_ref: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSecretRefToTerraform(struct!.secretRef),
    server: cdktf.booleanToTerraform(struct!.server),
    signer: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerToTerraform(struct!.signer),
    valid_for: cdktf.numberToTerraform(struct!.validFor),
  }
}


export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_renewal: {
      value: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecCertificateRenewalToHclTerraform(struct!.certificateRenewal),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecCertificateRenewal",
    },
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_ca: {
      value: cdktf.booleanToHclTerraform(struct!.isCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSecretRef",
    },
    server: {
      value: cdktf.booleanToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    signer: {
      value: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerToHclTerraform(struct!.signer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSigner",
    },
    valid_for: {
      value: cdktf.numberToHclTerraform(struct!.validFor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateRenewal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateRenewal = this._certificateRenewal?.internalValue;
    }
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._isCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCa = this._isCa;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._signer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signer = this._signer?.internalValue;
    }
    if (this._validFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.validFor = this._validFor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateRenewal.internalValue = undefined;
      this._commonName = undefined;
      this._hosts = undefined;
      this._isCa = undefined;
      this._secretRef.internalValue = undefined;
      this._server = undefined;
      this._signer.internalValue = undefined;
      this._validFor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateRenewal.internalValue = value.certificateRenewal;
      this._commonName = value.commonName;
      this._hosts = value.hosts;
      this._isCa = value.isCa;
      this._secretRef.internalValue = value.secretRef;
      this._server = value.server;
      this._signer.internalValue = value.signer;
      this._validFor = value.validFor;
    }
  }

  // certificate_renewal - computed: false, optional: true, required: false
  private _certificateRenewal = new DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecCertificateRenewalOutputReference(this, "certificate_renewal");
  public get certificateRenewal() {
    return this._certificateRenewal;
  }
  public putCertificateRenewal(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecCertificateRenewal) {
    this._certificateRenewal.internalValue = value;
  }
  public resetCertificateRenewal() {
    this._certificateRenewal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateRenewalInput() {
    return this._certificateRenewal.internalValue;
  }

  // common_name - computed: false, optional: false, required: true
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // is_ca - computed: false, optional: true, required: false
  private _isCa?: boolean | cdktf.IResolvable; 
  public get isCa() {
    return this.getBooleanAttribute('is_ca');
  }
  public set isCa(value: boolean | cdktf.IResolvable) {
    this._isCa = value;
  }
  public resetIsCa() {
    this._isCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCaInput() {
    return this._isCa;
  }

  // secret_ref - computed: false, optional: false, required: true
  private _secretRef = new DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // server - computed: false, optional: true, required: false
  private _server?: boolean | cdktf.IResolvable; 
  public get server() {
    return this.getBooleanAttribute('server');
  }
  public set server(value: boolean | cdktf.IResolvable) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // signer - computed: false, optional: false, required: true
  private _signer = new DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSignerOutputReference(this, "signer");
  public get signer() {
    return this._signer;
  }
  public putSigner(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecSigner) {
    this._signer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signerInput() {
    return this._signer.internalValue;
  }

  // valid_for - computed: false, optional: false, required: true
  private _validFor?: number; 
  public get validFor() {
    return this.getNumberAttribute('valid_for');
  }
  public set validFor(value: number) {
    this._validFor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validForInput() {
    return this._validFor;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest k8s_operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest}
*/
export class DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest k8s_operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_operator_marin3r_3scale_net_discovery_service_certificate_v1alpha1_manifest',
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
  private _metadata = new DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpec) {
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
      metadata: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceCertificateV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
