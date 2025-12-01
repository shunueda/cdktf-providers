// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#metadata DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestMetadata;
  /**
  * DiscoveryServiceSpec defines the desired state of DiscoveryService
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#spec DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpec;
}
export interface DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#annotations DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#labels DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#name DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#namespace DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgRootCertificateAuthority {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#duration DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#duration}
  */
  readonly duration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#secret_name DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgRootCertificateAuthorityToTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgRootCertificateAuthority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgRootCertificateAuthorityToHclTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgRootCertificateAuthority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgRootCertificateAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgRootCertificateAuthority | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgRootCertificateAuthority | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._secretName = value.secretName;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgServerCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#duration DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#duration}
  */
  readonly duration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#secret_name DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgServerCertificateToTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgServerCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgServerCertificateToHclTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgServerCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgServerCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgServerCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgServerCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._secretName = value.secretName;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfg {
  /**
  * CertificateOptions specifies options to generate the server certificate used both for the xDS server and the mutating webhook server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#root_certificate_authority DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#root_certificate_authority}
  */
  readonly rootCertificateAuthority: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgRootCertificateAuthority;
  /**
  * CertificateOptions specifies options to generate the server certificate used both for the xDS server and the mutating webhook server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#server_certificate DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#server_certificate}
  */
  readonly serverCertificate: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgServerCertificate;
}

export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgToTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    root_certificate_authority: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgRootCertificateAuthorityToTerraform(struct!.rootCertificateAuthority),
    server_certificate: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgServerCertificateToTerraform(struct!.serverCertificate),
  }
}


export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgToHclTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    root_certificate_authority: {
      value: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgRootCertificateAuthorityToHclTerraform(struct!.rootCertificateAuthority),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgRootCertificateAuthority",
    },
    server_certificate: {
      value: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgServerCertificateToHclTerraform(struct!.serverCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgServerCertificate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rootCertificateAuthority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootCertificateAuthority = this._rootCertificateAuthority?.internalValue;
    }
    if (this._serverCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertificate = this._serverCertificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rootCertificateAuthority.internalValue = undefined;
      this._serverCertificate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rootCertificateAuthority.internalValue = value.rootCertificateAuthority;
      this._serverCertificate.internalValue = value.serverCertificate;
    }
  }

  // root_certificate_authority - computed: false, optional: false, required: true
  private _rootCertificateAuthority = new DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgRootCertificateAuthorityOutputReference(this, "root_certificate_authority");
  public get rootCertificateAuthority() {
    return this._rootCertificateAuthority;
  }
  public putRootCertificateAuthority(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgRootCertificateAuthority) {
    this._rootCertificateAuthority.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCertificateAuthorityInput() {
    return this._rootCertificateAuthority.internalValue;
  }

  // server_certificate - computed: false, optional: false, required: true
  private _serverCertificate = new DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgServerCertificateOutputReference(this, "server_certificate");
  public get serverCertificate() {
    return this._serverCertificate;
  }
  public putServerCertificate(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgServerCertificate) {
    this._serverCertificate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateInput() {
    return this._serverCertificate.internalValue;
  }
}
export interface DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#name DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResourcesClaimsToTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResourcesClaimsToHclTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResourcesClaimsOutputReference {
    return new DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#claims DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#limits DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#requests DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResourcesToTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResourcesToHclTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecServiceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#name DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * ServiceType is an enum with the available discovery service Service types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#type DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecServiceConfigToTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecServiceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecServiceConfigToHclTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecServiceConfig | cdktf.IResolvable): any {
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

export class DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecServiceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecServiceConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecServiceConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
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
export interface DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpec {
  /**
  * Debug enables debugging log level for the discovery service controllers. It is safe to use since secret data is never shown in the logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#debug DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Image holds the image to use for the discovery service Deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#image DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * MetricsPort is the port where metrics are served. Defaults to 8383.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#metrics_port DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#metrics_port}
  */
  readonly metricsPort?: number;
  /**
  * PKIConfig has configuration for the PKI that marin3r manages for the different certificates it requires
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#pki_confg DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#pki_confg}
  */
  readonly pkiConfg?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfg;
  /**
  * PriorityClass to assign the discovery service Pod to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#pod_priority_class DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#pod_priority_class}
  */
  readonly podPriorityClass?: string;
  /**
  * ProbePort is the port where healthz endpoint is served. Defaults to 8384.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#probe_port DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#probe_port}
  */
  readonly probePort?: number;
  /**
  * Resources holds the Resource Requirements to use for the discovery service Deployment. When not set it defaults to no resource requests nor limits. CPU and Memory resources are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#resources DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResources;
  /**
  * ServiceConfig configures the way the DiscoveryService endpoints are exposed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#service_config DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#service_config}
  */
  readonly serviceConfig?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecServiceConfig;
  /**
  * XdsServerPort is the port where the xDS server listens. Defaults to 18000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#xds_server_port DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest#xds_server_port}
  */
  readonly xdsServerPort?: number;
}

export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecToTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug: cdktf.booleanToTerraform(struct!.debug),
    image: cdktf.stringToTerraform(struct!.image),
    metrics_port: cdktf.numberToTerraform(struct!.metricsPort),
    pki_confg: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgToTerraform(struct!.pkiConfg),
    pod_priority_class: cdktf.stringToTerraform(struct!.podPriorityClass),
    probe_port: cdktf.numberToTerraform(struct!.probePort),
    resources: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResourcesToTerraform(struct!.resources),
    service_config: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecServiceConfigToTerraform(struct!.serviceConfig),
    xds_server_port: cdktf.numberToTerraform(struct!.xdsServerPort),
  }
}


export function dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug: {
      value: cdktf.booleanToHclTerraform(struct!.debug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics_port: {
      value: cdktf.numberToHclTerraform(struct!.metricsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pki_confg: {
      value: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgToHclTerraform(struct!.pkiConfg),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfg",
    },
    pod_priority_class: {
      value: cdktf.stringToHclTerraform(struct!.podPriorityClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probe_port: {
      value: cdktf.numberToHclTerraform(struct!.probePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResources",
    },
    service_config: {
      value: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecServiceConfigToHclTerraform(struct!.serviceConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecServiceConfig",
    },
    xds_server_port: {
      value: cdktf.numberToHclTerraform(struct!.xdsServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._metricsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPort = this._metricsPort;
    }
    if (this._pkiConfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiConfg = this._pkiConfg?.internalValue;
    }
    if (this._podPriorityClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.podPriorityClass = this._podPriorityClass;
    }
    if (this._probePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.probePort = this._probePort;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._serviceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceConfig = this._serviceConfig?.internalValue;
    }
    if (this._xdsServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.xdsServerPort = this._xdsServerPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._debug = undefined;
      this._image = undefined;
      this._metricsPort = undefined;
      this._pkiConfg.internalValue = undefined;
      this._podPriorityClass = undefined;
      this._probePort = undefined;
      this._resources.internalValue = undefined;
      this._serviceConfig.internalValue = undefined;
      this._xdsServerPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._debug = value.debug;
      this._image = value.image;
      this._metricsPort = value.metricsPort;
      this._pkiConfg.internalValue = value.pkiConfg;
      this._podPriorityClass = value.podPriorityClass;
      this._probePort = value.probePort;
      this._resources.internalValue = value.resources;
      this._serviceConfig.internalValue = value.serviceConfig;
      this._xdsServerPort = value.xdsServerPort;
    }
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
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

  // metrics_port - computed: false, optional: true, required: false
  private _metricsPort?: number; 
  public get metricsPort() {
    return this.getNumberAttribute('metrics_port');
  }
  public set metricsPort(value: number) {
    this._metricsPort = value;
  }
  public resetMetricsPort() {
    this._metricsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPortInput() {
    return this._metricsPort;
  }

  // pki_confg - computed: false, optional: true, required: false
  private _pkiConfg = new DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfgOutputReference(this, "pki_confg");
  public get pkiConfg() {
    return this._pkiConfg;
  }
  public putPkiConfg(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecPkiConfg) {
    this._pkiConfg.internalValue = value;
  }
  public resetPkiConfg() {
    this._pkiConfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiConfgInput() {
    return this._pkiConfg.internalValue;
  }

  // pod_priority_class - computed: false, optional: true, required: false
  private _podPriorityClass?: string; 
  public get podPriorityClass() {
    return this.getStringAttribute('pod_priority_class');
  }
  public set podPriorityClass(value: string) {
    this._podPriorityClass = value;
  }
  public resetPodPriorityClass() {
    this._podPriorityClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podPriorityClassInput() {
    return this._podPriorityClass;
  }

  // probe_port - computed: false, optional: true, required: false
  private _probePort?: number; 
  public get probePort() {
    return this.getNumberAttribute('probe_port');
  }
  public set probePort(value: number) {
    this._probePort = value;
  }
  public resetProbePort() {
    this._probePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probePortInput() {
    return this._probePort;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // service_config - computed: false, optional: true, required: false
  private _serviceConfig = new DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecServiceConfigOutputReference(this, "service_config");
  public get serviceConfig() {
    return this._serviceConfig;
  }
  public putServiceConfig(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecServiceConfig) {
    this._serviceConfig.internalValue = value;
  }
  public resetServiceConfig() {
    this._serviceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigInput() {
    return this._serviceConfig.internalValue;
  }

  // xds_server_port - computed: false, optional: true, required: false
  private _xdsServerPort?: number; 
  public get xdsServerPort() {
    return this.getNumberAttribute('xds_server_port');
  }
  public set xdsServerPort(value: number) {
    this._xdsServerPort = value;
  }
  public resetXdsServerPort() {
    this._xdsServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xdsServerPortInput() {
    return this._xdsServerPort;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest k8s_operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest}
*/
export class DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest k8s_operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_operator_marin3r_3scale_net_discovery_service_v1alpha1_manifest',
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
  private _metadata = new DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpec) {
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
      metadata: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorMarin3R3ScaleNetDiscoveryServiceV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
