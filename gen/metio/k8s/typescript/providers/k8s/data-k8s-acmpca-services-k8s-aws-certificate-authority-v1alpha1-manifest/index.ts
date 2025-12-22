// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#metadata DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestMetadata;
  /**
  * CertificateAuthoritySpec defines the desired state of CertificateAuthority. Contains information about your private certificate authority (CA). Your private CA can issue and revoke X.509 digital certificates. Digital certificates verify that the entity named in the certificate Subject field owns or controls the public key contained in the Subject Public Key Info field. Call the CreateCertificateAuthority (https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html) action to create your private CA. You must then call the GetCertificateAuthorityCertificate (https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificateAuthorityCertificate.html) action to retrieve a private CA certificate signing request (CSR). Sign the CSR with your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA certificate. Call the ImportCertificateAuthorityCertificate (https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html) action to import the signed certificate into Certificate Manager (ACM).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#spec DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpec;
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#annotations DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#labels DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#name DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#namespace DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsKeyUsage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#crl_sign DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#crl_sign}
  */
  readonly crlSign?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#data_encipherment DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#data_encipherment}
  */
  readonly dataEncipherment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#decipher_only DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#decipher_only}
  */
  readonly decipherOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#digital_signature DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#digital_signature}
  */
  readonly digitalSignature?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#encipher_only DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#encipher_only}
  */
  readonly encipherOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#key_agreement DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#key_agreement}
  */
  readonly keyAgreement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#key_cert_sign DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#key_cert_sign}
  */
  readonly keyCertSign?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#key_encipherment DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#key_encipherment}
  */
  readonly keyEncipherment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#non_repudiation DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#non_repudiation}
  */
  readonly nonRepudiation?: boolean | cdktf.IResolvable;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsKeyUsageToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsKeyUsage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crl_sign: cdktf.booleanToTerraform(struct!.crlSign),
    data_encipherment: cdktf.booleanToTerraform(struct!.dataEncipherment),
    decipher_only: cdktf.booleanToTerraform(struct!.decipherOnly),
    digital_signature: cdktf.booleanToTerraform(struct!.digitalSignature),
    encipher_only: cdktf.booleanToTerraform(struct!.encipherOnly),
    key_agreement: cdktf.booleanToTerraform(struct!.keyAgreement),
    key_cert_sign: cdktf.booleanToTerraform(struct!.keyCertSign),
    key_encipherment: cdktf.booleanToTerraform(struct!.keyEncipherment),
    non_repudiation: cdktf.booleanToTerraform(struct!.nonRepudiation),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsKeyUsageToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsKeyUsage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crl_sign: {
      value: cdktf.booleanToHclTerraform(struct!.crlSign),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_encipherment: {
      value: cdktf.booleanToHclTerraform(struct!.dataEncipherment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    decipher_only: {
      value: cdktf.booleanToHclTerraform(struct!.decipherOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    digital_signature: {
      value: cdktf.booleanToHclTerraform(struct!.digitalSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encipher_only: {
      value: cdktf.booleanToHclTerraform(struct!.encipherOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_agreement: {
      value: cdktf.booleanToHclTerraform(struct!.keyAgreement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_cert_sign: {
      value: cdktf.booleanToHclTerraform(struct!.keyCertSign),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_encipherment: {
      value: cdktf.booleanToHclTerraform(struct!.keyEncipherment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    non_repudiation: {
      value: cdktf.booleanToHclTerraform(struct!.nonRepudiation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsKeyUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsKeyUsage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crlSign !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlSign = this._crlSign;
    }
    if (this._dataEncipherment !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataEncipherment = this._dataEncipherment;
    }
    if (this._decipherOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.decipherOnly = this._decipherOnly;
    }
    if (this._digitalSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.digitalSignature = this._digitalSignature;
    }
    if (this._encipherOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.encipherOnly = this._encipherOnly;
    }
    if (this._keyAgreement !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAgreement = this._keyAgreement;
    }
    if (this._keyCertSign !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyCertSign = this._keyCertSign;
    }
    if (this._keyEncipherment !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyEncipherment = this._keyEncipherment;
    }
    if (this._nonRepudiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonRepudiation = this._nonRepudiation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsKeyUsage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crlSign = undefined;
      this._dataEncipherment = undefined;
      this._decipherOnly = undefined;
      this._digitalSignature = undefined;
      this._encipherOnly = undefined;
      this._keyAgreement = undefined;
      this._keyCertSign = undefined;
      this._keyEncipherment = undefined;
      this._nonRepudiation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crlSign = value.crlSign;
      this._dataEncipherment = value.dataEncipherment;
      this._decipherOnly = value.decipherOnly;
      this._digitalSignature = value.digitalSignature;
      this._encipherOnly = value.encipherOnly;
      this._keyAgreement = value.keyAgreement;
      this._keyCertSign = value.keyCertSign;
      this._keyEncipherment = value.keyEncipherment;
      this._nonRepudiation = value.nonRepudiation;
    }
  }

  // crl_sign - computed: false, optional: true, required: false
  private _crlSign?: boolean | cdktf.IResolvable; 
  public get crlSign() {
    return this.getBooleanAttribute('crl_sign');
  }
  public set crlSign(value: boolean | cdktf.IResolvable) {
    this._crlSign = value;
  }
  public resetCrlSign() {
    this._crlSign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlSignInput() {
    return this._crlSign;
  }

  // data_encipherment - computed: false, optional: true, required: false
  private _dataEncipherment?: boolean | cdktf.IResolvable; 
  public get dataEncipherment() {
    return this.getBooleanAttribute('data_encipherment');
  }
  public set dataEncipherment(value: boolean | cdktf.IResolvable) {
    this._dataEncipherment = value;
  }
  public resetDataEncipherment() {
    this._dataEncipherment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEnciphermentInput() {
    return this._dataEncipherment;
  }

  // decipher_only - computed: false, optional: true, required: false
  private _decipherOnly?: boolean | cdktf.IResolvable; 
  public get decipherOnly() {
    return this.getBooleanAttribute('decipher_only');
  }
  public set decipherOnly(value: boolean | cdktf.IResolvable) {
    this._decipherOnly = value;
  }
  public resetDecipherOnly() {
    this._decipherOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decipherOnlyInput() {
    return this._decipherOnly;
  }

  // digital_signature - computed: false, optional: true, required: false
  private _digitalSignature?: boolean | cdktf.IResolvable; 
  public get digitalSignature() {
    return this.getBooleanAttribute('digital_signature');
  }
  public set digitalSignature(value: boolean | cdktf.IResolvable) {
    this._digitalSignature = value;
  }
  public resetDigitalSignature() {
    this._digitalSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalSignatureInput() {
    return this._digitalSignature;
  }

  // encipher_only - computed: false, optional: true, required: false
  private _encipherOnly?: boolean | cdktf.IResolvable; 
  public get encipherOnly() {
    return this.getBooleanAttribute('encipher_only');
  }
  public set encipherOnly(value: boolean | cdktf.IResolvable) {
    this._encipherOnly = value;
  }
  public resetEncipherOnly() {
    this._encipherOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encipherOnlyInput() {
    return this._encipherOnly;
  }

  // key_agreement - computed: false, optional: true, required: false
  private _keyAgreement?: boolean | cdktf.IResolvable; 
  public get keyAgreement() {
    return this.getBooleanAttribute('key_agreement');
  }
  public set keyAgreement(value: boolean | cdktf.IResolvable) {
    this._keyAgreement = value;
  }
  public resetKeyAgreement() {
    this._keyAgreement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAgreementInput() {
    return this._keyAgreement;
  }

  // key_cert_sign - computed: false, optional: true, required: false
  private _keyCertSign?: boolean | cdktf.IResolvable; 
  public get keyCertSign() {
    return this.getBooleanAttribute('key_cert_sign');
  }
  public set keyCertSign(value: boolean | cdktf.IResolvable) {
    this._keyCertSign = value;
  }
  public resetKeyCertSign() {
    this._keyCertSign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyCertSignInput() {
    return this._keyCertSign;
  }

  // key_encipherment - computed: false, optional: true, required: false
  private _keyEncipherment?: boolean | cdktf.IResolvable; 
  public get keyEncipherment() {
    return this.getBooleanAttribute('key_encipherment');
  }
  public set keyEncipherment(value: boolean | cdktf.IResolvable) {
    this._keyEncipherment = value;
  }
  public resetKeyEncipherment() {
    this._keyEncipherment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyEnciphermentInput() {
    return this._keyEncipherment;
  }

  // non_repudiation - computed: false, optional: true, required: false
  private _nonRepudiation?: boolean | cdktf.IResolvable; 
  public get nonRepudiation() {
    return this.getBooleanAttribute('non_repudiation');
  }
  public set nonRepudiation(value: boolean | cdktf.IResolvable) {
    this._nonRepudiation = value;
  }
  public resetNonRepudiation() {
    this._nonRepudiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonRepudiationInput() {
    return this._nonRepudiation;
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#object_identifier DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#object_identifier}
  */
  readonly objectIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#value DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_identifier: cdktf.stringToTerraform(struct!.objectIdentifier),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_identifier: {
      value: cdktf.stringToHclTerraform(struct!.objectIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectIdentifier = this._objectIdentifier;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectIdentifier = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectIdentifier = value.objectIdentifier;
      this._value = value.value;
    }
  }

  // object_identifier - computed: false, optional: true, required: false
  private _objectIdentifier?: string; 
  public get objectIdentifier() {
    return this.getStringAttribute('object_identifier');
  }
  public set objectIdentifier(value: string) {
    this._objectIdentifier = value;
  }
  public resetObjectIdentifier() {
    this._objectIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdentifierInput() {
    return this._objectIdentifier;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference {
    return new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#common_name DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#country DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#custom_attributes DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#custom_attributes}
  */
  readonly customAttributes?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#distinguished_name_qualifier DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#distinguished_name_qualifier}
  */
  readonly distinguishedNameQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#generation_qualifier DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#generation_qualifier}
  */
  readonly generationQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#given_name DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#given_name}
  */
  readonly givenName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#initials DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#initials}
  */
  readonly initials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#locality DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#locality}
  */
  readonly locality?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#organization DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#organizational_unit DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#pseudonym DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#pseudonym}
  */
  readonly pseudonym?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#serial_number DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#state DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#surname DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#surname}
  */
  readonly surname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#title DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#title}
  */
  readonly title?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    country: cdktf.stringToTerraform(struct!.country),
    custom_attributes: cdktf.listMapper(dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesToTerraform, false)(struct!.customAttributes),
    distinguished_name_qualifier: cdktf.stringToTerraform(struct!.distinguishedNameQualifier),
    generation_qualifier: cdktf.stringToTerraform(struct!.generationQualifier),
    given_name: cdktf.stringToTerraform(struct!.givenName),
    initials: cdktf.stringToTerraform(struct!.initials),
    locality: cdktf.stringToTerraform(struct!.locality),
    organization: cdktf.stringToTerraform(struct!.organization),
    organizational_unit: cdktf.stringToTerraform(struct!.organizationalUnit),
    pseudonym: cdktf.stringToTerraform(struct!.pseudonym),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    state: cdktf.stringToTerraform(struct!.state),
    surname: cdktf.stringToTerraform(struct!.surname),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_attributes: {
      value: cdktf.listMapperHcl(dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesToHclTerraform, false)(struct!.customAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList",
    },
    distinguished_name_qualifier: {
      value: cdktf.stringToHclTerraform(struct!.distinguishedNameQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generation_qualifier: {
      value: cdktf.stringToHclTerraform(struct!.generationQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    given_name: {
      value: cdktf.stringToHclTerraform(struct!.givenName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initials: {
      value: cdktf.stringToHclTerraform(struct!.initials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locality: {
      value: cdktf.stringToHclTerraform(struct!.locality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizational_unit: {
      value: cdktf.stringToHclTerraform(struct!.organizationalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pseudonym: {
      value: cdktf.stringToHclTerraform(struct!.pseudonym),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    surname: {
      value: cdktf.stringToHclTerraform(struct!.surname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._customAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAttributes = this._customAttributes?.internalValue;
    }
    if (this._distinguishedNameQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinguishedNameQualifier = this._distinguishedNameQualifier;
    }
    if (this._generationQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationQualifier = this._generationQualifier;
    }
    if (this._givenName !== undefined) {
      hasAnyValues = true;
      internalValueResult.givenName = this._givenName;
    }
    if (this._initials !== undefined) {
      hasAnyValues = true;
      internalValueResult.initials = this._initials;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._organizationalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit;
    }
    if (this._pseudonym !== undefined) {
      hasAnyValues = true;
      internalValueResult.pseudonym = this._pseudonym;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._surname !== undefined) {
      hasAnyValues = true;
      internalValueResult.surname = this._surname;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
      this._country = undefined;
      this._customAttributes.internalValue = undefined;
      this._distinguishedNameQualifier = undefined;
      this._generationQualifier = undefined;
      this._givenName = undefined;
      this._initials = undefined;
      this._locality = undefined;
      this._organization = undefined;
      this._organizationalUnit = undefined;
      this._pseudonym = undefined;
      this._serialNumber = undefined;
      this._state = undefined;
      this._surname = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
      this._country = value.country;
      this._customAttributes.internalValue = value.customAttributes;
      this._distinguishedNameQualifier = value.distinguishedNameQualifier;
      this._generationQualifier = value.generationQualifier;
      this._givenName = value.givenName;
      this._initials = value.initials;
      this._locality = value.locality;
      this._organization = value.organization;
      this._organizationalUnit = value.organizationalUnit;
      this._pseudonym = value.pseudonym;
      this._serialNumber = value.serialNumber;
      this._state = value.state;
      this._surname = value.surname;
      this._title = value.title;
    }
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // custom_attributes - computed: false, optional: true, required: false
  private _customAttributes = new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList(this, "custom_attributes", false);
  public get customAttributes() {
    return this._customAttributes;
  }
  public putCustomAttributes(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes[] | cdktf.IResolvable) {
    this._customAttributes.internalValue = value;
  }
  public resetCustomAttributes() {
    this._customAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributesInput() {
    return this._customAttributes.internalValue;
  }

  // distinguished_name_qualifier - computed: false, optional: true, required: false
  private _distinguishedNameQualifier?: string; 
  public get distinguishedNameQualifier() {
    return this.getStringAttribute('distinguished_name_qualifier');
  }
  public set distinguishedNameQualifier(value: string) {
    this._distinguishedNameQualifier = value;
  }
  public resetDistinguishedNameQualifier() {
    this._distinguishedNameQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguishedNameQualifierInput() {
    return this._distinguishedNameQualifier;
  }

  // generation_qualifier - computed: false, optional: true, required: false
  private _generationQualifier?: string; 
  public get generationQualifier() {
    return this.getStringAttribute('generation_qualifier');
  }
  public set generationQualifier(value: string) {
    this._generationQualifier = value;
  }
  public resetGenerationQualifier() {
    this._generationQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationQualifierInput() {
    return this._generationQualifier;
  }

  // given_name - computed: false, optional: true, required: false
  private _givenName?: string; 
  public get givenName() {
    return this.getStringAttribute('given_name');
  }
  public set givenName(value: string) {
    this._givenName = value;
  }
  public resetGivenName() {
    this._givenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get givenNameInput() {
    return this._givenName;
  }

  // initials - computed: false, optional: true, required: false
  private _initials?: string; 
  public get initials() {
    return this.getStringAttribute('initials');
  }
  public set initials(value: string) {
    this._initials = value;
  }
  public resetInitials() {
    this._initials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialsInput() {
    return this._initials;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // pseudonym - computed: false, optional: true, required: false
  private _pseudonym?: string; 
  public get pseudonym() {
    return this.getStringAttribute('pseudonym');
  }
  public set pseudonym(value: string) {
    this._pseudonym = value;
  }
  public resetPseudonym() {
    this._pseudonym = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pseudonymInput() {
    return this._pseudonym;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // surname - computed: false, optional: true, required: false
  private _surname?: string; 
  public get surname() {
    return this.getStringAttribute('surname');
  }
  public set surname(value: string) {
    this._surname = value;
  }
  public resetSurname() {
    this._surname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surnameInput() {
    return this._surname;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#name_assigner DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#name_assigner}
  */
  readonly nameAssigner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#party_name DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#party_name}
  */
  readonly partyName?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_assigner: cdktf.stringToTerraform(struct!.nameAssigner),
    party_name: cdktf.stringToTerraform(struct!.partyName),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name_assigner: {
      value: cdktf.stringToHclTerraform(struct!.nameAssigner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    party_name: {
      value: cdktf.stringToHclTerraform(struct!.partyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameAssigner !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameAssigner = this._nameAssigner;
    }
    if (this._partyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.partyName = this._partyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nameAssigner = undefined;
      this._partyName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nameAssigner = value.nameAssigner;
      this._partyName = value.partyName;
    }
  }

  // name_assigner - computed: false, optional: true, required: false
  private _nameAssigner?: string; 
  public get nameAssigner() {
    return this.getStringAttribute('name_assigner');
  }
  public set nameAssigner(value: string) {
    this._nameAssigner = value;
  }
  public resetNameAssigner() {
    this._nameAssigner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAssignerInput() {
    return this._nameAssigner;
  }

  // party_name - computed: false, optional: true, required: false
  private _partyName?: string; 
  public get partyName() {
    return this.getStringAttribute('party_name');
  }
  public set partyName(value: string) {
    this._partyName = value;
  }
  public resetPartyName() {
    this._partyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partyNameInput() {
    return this._partyName;
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationOtherName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#type_id DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#type_id}
  */
  readonly typeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#value DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationOtherNameToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationOtherName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type_id: cdktf.stringToTerraform(struct!.typeId),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationOtherNameToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationOtherName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type_id: {
      value: cdktf.stringToHclTerraform(struct!.typeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationOtherName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._typeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeId = this._typeId;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationOtherName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._typeId = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._typeId = value.typeId;
      this._value = value.value;
    }
  }

  // type_id - computed: false, optional: true, required: false
  private _typeId?: string; 
  public get typeId() {
    return this.getStringAttribute('type_id');
  }
  public set typeId(value: string) {
    this._typeId = value;
  }
  public resetTypeId() {
    this._typeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIdInput() {
    return this._typeId;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocation {
  /**
  * Contains information about the certificate subject. The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#directory_name DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#directory_name}
  */
  readonly directoryName?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#dns_name DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#dns_name}
  */
  readonly dnsName?: string;
  /**
  * Describes an Electronic Data Interchange (EDI) entity as described in as defined in Subject Alternative Name (https://datatracker.ietf.org/doc/html/rfc5280) in RFC 5280.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#edi_party_name DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#edi_party_name}
  */
  readonly ediPartyName?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#ip_address DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Defines a custom ASN.1 X.400 GeneralName using an object identifier (OID) and value. The OID must satisfy the regular expression shown below. For more information, see NIST's definition of Object Identifier (OID) (https://csrc.nist.gov/glossary/term/Object_Identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#other_name DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#other_name}
  */
  readonly otherName?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationOtherName;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#registered_id DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#registered_id}
  */
  readonly registeredId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#rfc822_name DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#rfc822_name}
  */
  readonly rfc822Name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#uniform_resource_identifier DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#uniform_resource_identifier}
  */
  readonly uniformResourceIdentifier?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory_name: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameToTerraform(struct!.directoryName),
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    edi_party_name: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameToTerraform(struct!.ediPartyName),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    other_name: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationOtherNameToTerraform(struct!.otherName),
    registered_id: cdktf.stringToTerraform(struct!.registeredId),
    rfc822_name: cdktf.stringToTerraform(struct!.rfc822Name),
    uniform_resource_identifier: cdktf.stringToTerraform(struct!.uniformResourceIdentifier),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory_name: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameToHclTerraform(struct!.directoryName),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName",
    },
    dns_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    edi_party_name: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameToHclTerraform(struct!.ediPartyName),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    other_name: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationOtherNameToHclTerraform(struct!.otherName),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationOtherName",
    },
    registered_id: {
      value: cdktf.stringToHclTerraform(struct!.registeredId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rfc822_name: {
      value: cdktf.stringToHclTerraform(struct!.rfc822Name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uniform_resource_identifier: {
      value: cdktf.stringToHclTerraform(struct!.uniformResourceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directoryName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryName = this._directoryName?.internalValue;
    }
    if (this._dnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsName = this._dnsName;
    }
    if (this._ediPartyName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ediPartyName = this._ediPartyName?.internalValue;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._otherName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherName = this._otherName?.internalValue;
    }
    if (this._registeredId !== undefined) {
      hasAnyValues = true;
      internalValueResult.registeredId = this._registeredId;
    }
    if (this._rfc822Name !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfc822Name = this._rfc822Name;
    }
    if (this._uniformResourceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniformResourceIdentifier = this._uniformResourceIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directoryName.internalValue = undefined;
      this._dnsName = undefined;
      this._ediPartyName.internalValue = undefined;
      this._ipAddress = undefined;
      this._otherName.internalValue = undefined;
      this._registeredId = undefined;
      this._rfc822Name = undefined;
      this._uniformResourceIdentifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directoryName.internalValue = value.directoryName;
      this._dnsName = value.dnsName;
      this._ediPartyName.internalValue = value.ediPartyName;
      this._ipAddress = value.ipAddress;
      this._otherName.internalValue = value.otherName;
      this._registeredId = value.registeredId;
      this._rfc822Name = value.rfc822Name;
      this._uniformResourceIdentifier = value.uniformResourceIdentifier;
    }
  }

  // directory_name - computed: false, optional: true, required: false
  private _directoryName = new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference(this, "directory_name");
  public get directoryName() {
    return this._directoryName;
  }
  public putDirectoryName(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName) {
    this._directoryName.internalValue = value;
  }
  public resetDirectoryName() {
    this._directoryName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryNameInput() {
    return this._directoryName.internalValue;
  }

  // dns_name - computed: false, optional: true, required: false
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  public resetDnsName() {
    this._dnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // edi_party_name - computed: false, optional: true, required: false
  private _ediPartyName = new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference(this, "edi_party_name");
  public get ediPartyName() {
    return this._ediPartyName;
  }
  public putEdiPartyName(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName) {
    this._ediPartyName.internalValue = value;
  }
  public resetEdiPartyName() {
    this._ediPartyName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ediPartyNameInput() {
    return this._ediPartyName.internalValue;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // other_name - computed: false, optional: true, required: false
  private _otherName = new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference(this, "other_name");
  public get otherName() {
    return this._otherName;
  }
  public putOtherName(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationOtherName) {
    this._otherName.internalValue = value;
  }
  public resetOtherName() {
    this._otherName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherNameInput() {
    return this._otherName.internalValue;
  }

  // registered_id - computed: false, optional: true, required: false
  private _registeredId?: string; 
  public get registeredId() {
    return this.getStringAttribute('registered_id');
  }
  public set registeredId(value: string) {
    this._registeredId = value;
  }
  public resetRegisteredId() {
    this._registeredId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registeredIdInput() {
    return this._registeredId;
  }

  // rfc822_name - computed: false, optional: true, required: false
  private _rfc822Name?: string; 
  public get rfc822Name() {
    return this.getStringAttribute('rfc822_name');
  }
  public set rfc822Name(value: string) {
    this._rfc822Name = value;
  }
  public resetRfc822Name() {
    this._rfc822Name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc822NameInput() {
    return this._rfc822Name;
  }

  // uniform_resource_identifier - computed: false, optional: true, required: false
  private _uniformResourceIdentifier?: string; 
  public get uniformResourceIdentifier() {
    return this.getStringAttribute('uniform_resource_identifier');
  }
  public set uniformResourceIdentifier(value: string) {
    this._uniformResourceIdentifier = value;
  }
  public resetUniformResourceIdentifier() {
    this._uniformResourceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformResourceIdentifierInput() {
    return this._uniformResourceIdentifier;
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#access_method_type DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#access_method_type}
  */
  readonly accessMethodType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#custom_object_identifier DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#custom_object_identifier}
  */
  readonly customObjectIdentifier?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessMethodToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_method_type: cdktf.stringToTerraform(struct!.accessMethodType),
    custom_object_identifier: cdktf.stringToTerraform(struct!.customObjectIdentifier),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessMethodToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_method_type: {
      value: cdktf.stringToHclTerraform(struct!.accessMethodType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_object_identifier: {
      value: cdktf.stringToHclTerraform(struct!.customObjectIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessMethodType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMethodType = this._accessMethodType;
    }
    if (this._customObjectIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.customObjectIdentifier = this._customObjectIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessMethodType = undefined;
      this._customObjectIdentifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessMethodType = value.accessMethodType;
      this._customObjectIdentifier = value.customObjectIdentifier;
    }
  }

  // access_method_type - computed: false, optional: true, required: false
  private _accessMethodType?: string; 
  public get accessMethodType() {
    return this.getStringAttribute('access_method_type');
  }
  public set accessMethodType(value: string) {
    this._accessMethodType = value;
  }
  public resetAccessMethodType() {
    this._accessMethodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessMethodTypeInput() {
    return this._accessMethodType;
  }

  // custom_object_identifier - computed: false, optional: true, required: false
  private _customObjectIdentifier?: string; 
  public get customObjectIdentifier() {
    return this.getStringAttribute('custom_object_identifier');
  }
  public set customObjectIdentifier(value: string) {
    this._customObjectIdentifier = value;
  }
  public resetCustomObjectIdentifier() {
    this._customObjectIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customObjectIdentifierInput() {
    return this._customObjectIdentifier;
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccess {
  /**
  * Describes an ASN.1 X.400 GeneralName as defined in RFC 5280 (https://datatracker.ietf.org/doc/html/rfc5280). Only one of the following naming options should be provided. Providing more than one option results in an InvalidArgsException error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#access_location DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#access_location}
  */
  readonly accessLocation?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocation;
  /**
  * Describes the type and format of extension access. Only one of CustomObjectIdentifier or AccessMethodType may be provided. Providing both results in InvalidArgsException.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#access_method DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#access_method}
  */
  readonly accessMethod?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessMethod;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_location: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationToTerraform(struct!.accessLocation),
    access_method: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessMethodToTerraform(struct!.accessMethod),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_location: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationToHclTerraform(struct!.accessLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocation",
    },
    access_method: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessMethodToHclTerraform(struct!.accessMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessMethod",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLocation = this._accessLocation?.internalValue;
    }
    if (this._accessMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMethod = this._accessMethod?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLocation.internalValue = undefined;
      this._accessMethod.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLocation.internalValue = value.accessLocation;
      this._accessMethod.internalValue = value.accessMethod;
    }
  }

  // access_location - computed: false, optional: true, required: false
  private _accessLocation = new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocationOutputReference(this, "access_location");
  public get accessLocation() {
    return this._accessLocation;
  }
  public putAccessLocation(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessLocation) {
    this._accessLocation.internalValue = value;
  }
  public resetAccessLocation() {
    this._accessLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLocationInput() {
    return this._accessLocation.internalValue;
  }

  // access_method - computed: false, optional: true, required: false
  private _accessMethod = new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessMethodOutputReference(this, "access_method");
  public get accessMethod() {
    return this._accessMethod;
  }
  public putAccessMethod(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessAccessMethod) {
    this._accessMethod.internalValue = value;
  }
  public resetAccessMethod() {
    this._accessMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessMethodInput() {
    return this._accessMethod.internalValue;
  }
}

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessList extends cdktf.ComplexList {
  public internalValue? : DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccess[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessOutputReference {
    return new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensions {
  /**
  * Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#key_usage DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#key_usage}
  */
  readonly keyUsage?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsKeyUsage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#subject_information_access DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#subject_information_access}
  */
  readonly subjectInformationAccess?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccess[] | cdktf.IResolvable;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_usage: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsKeyUsageToTerraform(struct!.keyUsage),
    subject_information_access: cdktf.listMapper(dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessToTerraform, false)(struct!.subjectInformationAccess),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_usage: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsKeyUsageToHclTerraform(struct!.keyUsage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsKeyUsage",
    },
    subject_information_access: {
      value: cdktf.listMapperHcl(dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessToHclTerraform, false)(struct!.subjectInformationAccess),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUsage = this._keyUsage?.internalValue;
    }
    if (this._subjectInformationAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectInformationAccess = this._subjectInformationAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyUsage.internalValue = undefined;
      this._subjectInformationAccess.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyUsage.internalValue = value.keyUsage;
      this._subjectInformationAccess.internalValue = value.subjectInformationAccess;
    }
  }

  // key_usage - computed: false, optional: true, required: false
  private _keyUsage = new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsKeyUsageOutputReference(this, "key_usage");
  public get keyUsage() {
    return this._keyUsage;
  }
  public putKeyUsage(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsKeyUsage) {
    this._keyUsage.internalValue = value;
  }
  public resetKeyUsage() {
    this._keyUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage.internalValue;
  }

  // subject_information_access - computed: false, optional: true, required: false
  private _subjectInformationAccess = new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccessList(this, "subject_information_access", false);
  public get subjectInformationAccess() {
    return this._subjectInformationAccess;
  }
  public putSubjectInformationAccess(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsSubjectInformationAccess[] | cdktf.IResolvable) {
    this._subjectInformationAccess.internalValue = value;
  }
  public resetSubjectInformationAccess() {
    this._subjectInformationAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInformationAccessInput() {
    return this._subjectInformationAccess.internalValue;
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubjectCustomAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#object_identifier DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#object_identifier}
  */
  readonly objectIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#value DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubjectCustomAttributesToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubjectCustomAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_identifier: cdktf.stringToTerraform(struct!.objectIdentifier),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubjectCustomAttributesToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubjectCustomAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_identifier: {
      value: cdktf.stringToHclTerraform(struct!.objectIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubjectCustomAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubjectCustomAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectIdentifier = this._objectIdentifier;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubjectCustomAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectIdentifier = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectIdentifier = value.objectIdentifier;
      this._value = value.value;
    }
  }

  // object_identifier - computed: false, optional: true, required: false
  private _objectIdentifier?: string; 
  public get objectIdentifier() {
    return this.getStringAttribute('object_identifier');
  }
  public set objectIdentifier(value: string) {
    this._objectIdentifier = value;
  }
  public resetObjectIdentifier() {
    this._objectIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdentifierInput() {
    return this._objectIdentifier;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubjectCustomAttributesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubjectCustomAttributes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubjectCustomAttributesOutputReference {
    return new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubjectCustomAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#common_name DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#country DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#custom_attributes DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#custom_attributes}
  */
  readonly customAttributes?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubjectCustomAttributes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#distinguished_name_qualifier DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#distinguished_name_qualifier}
  */
  readonly distinguishedNameQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#generation_qualifier DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#generation_qualifier}
  */
  readonly generationQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#given_name DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#given_name}
  */
  readonly givenName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#initials DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#initials}
  */
  readonly initials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#locality DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#locality}
  */
  readonly locality?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#organization DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#organizational_unit DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#pseudonym DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#pseudonym}
  */
  readonly pseudonym?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#serial_number DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#state DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#surname DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#surname}
  */
  readonly surname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#title DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#title}
  */
  readonly title?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubjectToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    country: cdktf.stringToTerraform(struct!.country),
    custom_attributes: cdktf.listMapper(dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubjectCustomAttributesToTerraform, false)(struct!.customAttributes),
    distinguished_name_qualifier: cdktf.stringToTerraform(struct!.distinguishedNameQualifier),
    generation_qualifier: cdktf.stringToTerraform(struct!.generationQualifier),
    given_name: cdktf.stringToTerraform(struct!.givenName),
    initials: cdktf.stringToTerraform(struct!.initials),
    locality: cdktf.stringToTerraform(struct!.locality),
    organization: cdktf.stringToTerraform(struct!.organization),
    organizational_unit: cdktf.stringToTerraform(struct!.organizationalUnit),
    pseudonym: cdktf.stringToTerraform(struct!.pseudonym),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    state: cdktf.stringToTerraform(struct!.state),
    surname: cdktf.stringToTerraform(struct!.surname),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubjectToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_attributes: {
      value: cdktf.listMapperHcl(dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubjectCustomAttributesToHclTerraform, false)(struct!.customAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubjectCustomAttributesList",
    },
    distinguished_name_qualifier: {
      value: cdktf.stringToHclTerraform(struct!.distinguishedNameQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generation_qualifier: {
      value: cdktf.stringToHclTerraform(struct!.generationQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    given_name: {
      value: cdktf.stringToHclTerraform(struct!.givenName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initials: {
      value: cdktf.stringToHclTerraform(struct!.initials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locality: {
      value: cdktf.stringToHclTerraform(struct!.locality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizational_unit: {
      value: cdktf.stringToHclTerraform(struct!.organizationalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pseudonym: {
      value: cdktf.stringToHclTerraform(struct!.pseudonym),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    surname: {
      value: cdktf.stringToHclTerraform(struct!.surname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._customAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAttributes = this._customAttributes?.internalValue;
    }
    if (this._distinguishedNameQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinguishedNameQualifier = this._distinguishedNameQualifier;
    }
    if (this._generationQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationQualifier = this._generationQualifier;
    }
    if (this._givenName !== undefined) {
      hasAnyValues = true;
      internalValueResult.givenName = this._givenName;
    }
    if (this._initials !== undefined) {
      hasAnyValues = true;
      internalValueResult.initials = this._initials;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._organizationalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit;
    }
    if (this._pseudonym !== undefined) {
      hasAnyValues = true;
      internalValueResult.pseudonym = this._pseudonym;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._surname !== undefined) {
      hasAnyValues = true;
      internalValueResult.surname = this._surname;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
      this._country = undefined;
      this._customAttributes.internalValue = undefined;
      this._distinguishedNameQualifier = undefined;
      this._generationQualifier = undefined;
      this._givenName = undefined;
      this._initials = undefined;
      this._locality = undefined;
      this._organization = undefined;
      this._organizationalUnit = undefined;
      this._pseudonym = undefined;
      this._serialNumber = undefined;
      this._state = undefined;
      this._surname = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
      this._country = value.country;
      this._customAttributes.internalValue = value.customAttributes;
      this._distinguishedNameQualifier = value.distinguishedNameQualifier;
      this._generationQualifier = value.generationQualifier;
      this._givenName = value.givenName;
      this._initials = value.initials;
      this._locality = value.locality;
      this._organization = value.organization;
      this._organizationalUnit = value.organizationalUnit;
      this._pseudonym = value.pseudonym;
      this._serialNumber = value.serialNumber;
      this._state = value.state;
      this._surname = value.surname;
      this._title = value.title;
    }
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // custom_attributes - computed: false, optional: true, required: false
  private _customAttributes = new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubjectCustomAttributesList(this, "custom_attributes", false);
  public get customAttributes() {
    return this._customAttributes;
  }
  public putCustomAttributes(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubjectCustomAttributes[] | cdktf.IResolvable) {
    this._customAttributes.internalValue = value;
  }
  public resetCustomAttributes() {
    this._customAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributesInput() {
    return this._customAttributes.internalValue;
  }

  // distinguished_name_qualifier - computed: false, optional: true, required: false
  private _distinguishedNameQualifier?: string; 
  public get distinguishedNameQualifier() {
    return this.getStringAttribute('distinguished_name_qualifier');
  }
  public set distinguishedNameQualifier(value: string) {
    this._distinguishedNameQualifier = value;
  }
  public resetDistinguishedNameQualifier() {
    this._distinguishedNameQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguishedNameQualifierInput() {
    return this._distinguishedNameQualifier;
  }

  // generation_qualifier - computed: false, optional: true, required: false
  private _generationQualifier?: string; 
  public get generationQualifier() {
    return this.getStringAttribute('generation_qualifier');
  }
  public set generationQualifier(value: string) {
    this._generationQualifier = value;
  }
  public resetGenerationQualifier() {
    this._generationQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationQualifierInput() {
    return this._generationQualifier;
  }

  // given_name - computed: false, optional: true, required: false
  private _givenName?: string; 
  public get givenName() {
    return this.getStringAttribute('given_name');
  }
  public set givenName(value: string) {
    this._givenName = value;
  }
  public resetGivenName() {
    this._givenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get givenNameInput() {
    return this._givenName;
  }

  // initials - computed: false, optional: true, required: false
  private _initials?: string; 
  public get initials() {
    return this.getStringAttribute('initials');
  }
  public set initials(value: string) {
    this._initials = value;
  }
  public resetInitials() {
    this._initials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialsInput() {
    return this._initials;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // pseudonym - computed: false, optional: true, required: false
  private _pseudonym?: string; 
  public get pseudonym() {
    return this.getStringAttribute('pseudonym');
  }
  public set pseudonym(value: string) {
    this._pseudonym = value;
  }
  public resetPseudonym() {
    this._pseudonym = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pseudonymInput() {
    return this._pseudonym;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // surname - computed: false, optional: true, required: false
  private _surname?: string; 
  public get surname() {
    return this.getStringAttribute('surname');
  }
  public set surname(value: string) {
    this._surname = value;
  }
  public resetSurname() {
    this._surname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surnameInput() {
    return this._surname;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfiguration {
  /**
  * Describes the certificate extensions to be added to the certificate signing request (CSR).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#csr_extensions DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#csr_extensions}
  */
  readonly csrExtensions?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#key_algorithm DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#key_algorithm}
  */
  readonly keyAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#signing_algorithm DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#signing_algorithm}
  */
  readonly signingAlgorithm?: string;
  /**
  * Contains information about the certificate subject. The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#subject DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#subject}
  */
  readonly subject?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubject;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    csr_extensions: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsToTerraform(struct!.csrExtensions),
    key_algorithm: cdktf.stringToTerraform(struct!.keyAlgorithm),
    signing_algorithm: cdktf.stringToTerraform(struct!.signingAlgorithm),
    subject: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubjectToTerraform(struct!.subject),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    csr_extensions: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsToHclTerraform(struct!.csrExtensions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensions",
    },
    key_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.keyAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.signingAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubjectToHclTerraform(struct!.subject),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubject",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csrExtensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csrExtensions = this._csrExtensions?.internalValue;
    }
    if (this._keyAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAlgorithm = this._keyAlgorithm;
    }
    if (this._signingAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingAlgorithm = this._signingAlgorithm;
    }
    if (this._subject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._csrExtensions.internalValue = undefined;
      this._keyAlgorithm = undefined;
      this._signingAlgorithm = undefined;
      this._subject.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._csrExtensions.internalValue = value.csrExtensions;
      this._keyAlgorithm = value.keyAlgorithm;
      this._signingAlgorithm = value.signingAlgorithm;
      this._subject.internalValue = value.subject;
    }
  }

  // csr_extensions - computed: false, optional: true, required: false
  private _csrExtensions = new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensionsOutputReference(this, "csr_extensions");
  public get csrExtensions() {
    return this._csrExtensions;
  }
  public putCsrExtensions(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationCsrExtensions) {
    this._csrExtensions.internalValue = value;
  }
  public resetCsrExtensions() {
    this._csrExtensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrExtensionsInput() {
    return this._csrExtensions.internalValue;
  }

  // key_algorithm - computed: false, optional: true, required: false
  private _keyAlgorithm?: string; 
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }
  public set keyAlgorithm(value: string) {
    this._keyAlgorithm = value;
  }
  public resetKeyAlgorithm() {
    this._keyAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAlgorithmInput() {
    return this._keyAlgorithm;
  }

  // signing_algorithm - computed: false, optional: true, required: false
  private _signingAlgorithm?: string; 
  public get signingAlgorithm() {
    return this.getStringAttribute('signing_algorithm');
  }
  public set signingAlgorithm(value: string) {
    this._signingAlgorithm = value;
  }
  public resetSigningAlgorithm() {
    this._signingAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingAlgorithmInput() {
    return this._signingAlgorithm;
  }

  // subject - computed: false, optional: true, required: false
  private _subject = new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubjectOutputReference(this, "subject");
  public get subject() {
    return this._subject;
  }
  public putSubject(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationSubject) {
    this._subject.internalValue = value;
  }
  public resetSubject() {
    this._subject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject.internalValue;
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationCrlConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#custom_cname DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#custom_cname}
  */
  readonly customCname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#enabled DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#expiration_in_days DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#expiration_in_days}
  */
  readonly expirationInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#s3_bucket_name DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#s3_bucket_name}
  */
  readonly s3BucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#s3_object_acl DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#s3_object_acl}
  */
  readonly s3ObjectAcl?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationCrlConfigurationToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationCrlConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_cname: cdktf.stringToTerraform(struct!.customCname),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    expiration_in_days: cdktf.numberToTerraform(struct!.expirationInDays),
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    s3_object_acl: cdktf.stringToTerraform(struct!.s3ObjectAcl),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationCrlConfigurationToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationCrlConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_cname: {
      value: cdktf.stringToHclTerraform(struct!.customCname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expiration_in_days: {
      value: cdktf.numberToHclTerraform(struct!.expirationInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s3_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.s3BucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_object_acl: {
      value: cdktf.stringToHclTerraform(struct!.s3ObjectAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationCrlConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationCrlConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customCname !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCname = this._customCname;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._expirationInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationInDays = this._expirationInDays;
    }
    if (this._s3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    if (this._s3ObjectAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ObjectAcl = this._s3ObjectAcl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationCrlConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customCname = undefined;
      this._enabled = undefined;
      this._expirationInDays = undefined;
      this._s3BucketName = undefined;
      this._s3ObjectAcl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customCname = value.customCname;
      this._enabled = value.enabled;
      this._expirationInDays = value.expirationInDays;
      this._s3BucketName = value.s3BucketName;
      this._s3ObjectAcl = value.s3ObjectAcl;
    }
  }

  // custom_cname - computed: false, optional: true, required: false
  private _customCname?: string; 
  public get customCname() {
    return this.getStringAttribute('custom_cname');
  }
  public set customCname(value: string) {
    this._customCname = value;
  }
  public resetCustomCname() {
    this._customCname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCnameInput() {
    return this._customCname;
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

  // expiration_in_days - computed: false, optional: true, required: false
  private _expirationInDays?: number; 
  public get expirationInDays() {
    return this.getNumberAttribute('expiration_in_days');
  }
  public set expirationInDays(value: number) {
    this._expirationInDays = value;
  }
  public resetExpirationInDays() {
    this._expirationInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInDaysInput() {
    return this._expirationInDays;
  }

  // s3_bucket_name - computed: false, optional: true, required: false
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  public resetS3BucketName() {
    this._s3BucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // s3_object_acl - computed: false, optional: true, required: false
  private _s3ObjectAcl?: string; 
  public get s3ObjectAcl() {
    return this.getStringAttribute('s3_object_acl');
  }
  public set s3ObjectAcl(value: string) {
    this._s3ObjectAcl = value;
  }
  public resetS3ObjectAcl() {
    this._s3ObjectAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectAclInput() {
    return this._s3ObjectAcl;
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationOcspConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#enabled DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#ocsp_custom_cname DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#ocsp_custom_cname}
  */
  readonly ocspCustomCname?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationOcspConfigurationToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationOcspConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ocsp_custom_cname: cdktf.stringToTerraform(struct!.ocspCustomCname),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationOcspConfigurationToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationOcspConfiguration | cdktf.IResolvable): any {
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
    ocsp_custom_cname: {
      value: cdktf.stringToHclTerraform(struct!.ocspCustomCname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationOcspConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationOcspConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ocspCustomCname !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspCustomCname = this._ocspCustomCname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationOcspConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._ocspCustomCname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._ocspCustomCname = value.ocspCustomCname;
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

  // ocsp_custom_cname - computed: false, optional: true, required: false
  private _ocspCustomCname?: string; 
  public get ocspCustomCname() {
    return this.getStringAttribute('ocsp_custom_cname');
  }
  public set ocspCustomCname(value: string) {
    this._ocspCustomCname = value;
  }
  public resetOcspCustomCname() {
    this._ocspCustomCname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspCustomCnameInput() {
    return this._ocspCustomCname;
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfiguration {
  /**
  * Contains configuration information for a certificate revocation list (CRL). Your private certificate authority (CA) creates base CRLs. Delta CRLs are not supported. You can enable CRLs for your new or an existing private CA by setting the Enabled parameter to true. Your private CA writes CRLs to an S3 bucket that you specify in the S3BucketName parameter. You can hide the name of your bucket by specifying a value for the CustomCname parameter. Your private CA copies the CNAME or the S3 bucket name to the CRL Distribution Points extension of each certificate it issues. Your S3 bucket policy must give write permission to Amazon Web Services Private CA. Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see Encrypting Your CRLs (https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#crl-encryption). Your private CA uses the value in the ExpirationInDays parameter to calculate the nextUpdate field in the CRL. The CRL is refreshed prior to a certificate's expiration date or when a certificate is revoked. When a certificate is revoked, it appears in the CRL until the certificate expires, and then in one additional CRL after expiration, and it always appears in the audit report. A CRL is typically updated approximately 30 minutes after a certificate is revoked. If for any reason a CRL update fails, Amazon Web Services Private CA makes further attempts every 15 minutes. CRLs contain the following fields: * Version: The current version number defined in RFC 5280 is V2. The integer value is 0x1. * Signature Algorithm: The name of the algorithm used to sign the CRL. * Issuer: The X.500 distinguished name of your private CA that issued the CRL. * Last Update: The issue date and time of this CRL. * Next Update: The day and time by which the next CRL will be issued. * Revoked Certificates: List of revoked certificates. Each list item contains the following information. Serial Number: The serial number, in hexadecimal format, of the revoked certificate. Revocation Date: Date and time the certificate was revoked. CRL Entry Extensions: Optional extensions for the CRL entry. X509v3 CRL Reason Code: Reason the certificate was revoked. * CRL Extensions: Optional extensions for the CRL. X509v3 Authority Key Identifier: Identifies the public key associated with the private key used to sign the certificate. X509v3 CRL Number:: Decimal sequence number for the CRL. * Signature Algorithm: Algorithm used by your private CA to sign the CRL. * Signature Value: Signature computed over the CRL. Certificate revocation lists created by Amazon Web Services Private CA are DER-encoded. You can use the following OpenSSL command to list a CRL. openssl crl -inform DER -text -in crl_path -noout For more information, see Planning a certificate revocation list (CRL) (https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html) in the Amazon Web Services Private Certificate Authority User Guide
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#crl_configuration DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#crl_configuration}
  */
  readonly crlConfiguration?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationCrlConfiguration;
  /**
  * Contains information to enable and configure Online Certificate Status Protocol (OCSP) for validating certificate revocation status. When you revoke a certificate, OCSP responses may take up to 60 minutes to reflect the new status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#ocsp_configuration DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#ocsp_configuration}
  */
  readonly ocspConfiguration?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationOcspConfiguration;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crl_configuration: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationCrlConfigurationToTerraform(struct!.crlConfiguration),
    ocsp_configuration: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationOcspConfigurationToTerraform(struct!.ocspConfiguration),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crl_configuration: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationCrlConfigurationToHclTerraform(struct!.crlConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationCrlConfiguration",
    },
    ocsp_configuration: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationOcspConfigurationToHclTerraform(struct!.ocspConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationOcspConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crlConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlConfiguration = this._crlConfiguration?.internalValue;
    }
    if (this._ocspConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspConfiguration = this._ocspConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crlConfiguration.internalValue = undefined;
      this._ocspConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crlConfiguration.internalValue = value.crlConfiguration;
      this._ocspConfiguration.internalValue = value.ocspConfiguration;
    }
  }

  // crl_configuration - computed: false, optional: true, required: false
  private _crlConfiguration = new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationCrlConfigurationOutputReference(this, "crl_configuration");
  public get crlConfiguration() {
    return this._crlConfiguration;
  }
  public putCrlConfiguration(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationCrlConfiguration) {
    this._crlConfiguration.internalValue = value;
  }
  public resetCrlConfiguration() {
    this._crlConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlConfigurationInput() {
    return this._crlConfiguration.internalValue;
  }

  // ocsp_configuration - computed: false, optional: true, required: false
  private _ocspConfiguration = new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationOcspConfigurationOutputReference(this, "ocsp_configuration");
  public get ocspConfiguration() {
    return this._ocspConfiguration;
  }
  public putOcspConfiguration(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationOcspConfiguration) {
    this._ocspConfiguration.internalValue = value;
  }
  public resetOcspConfiguration() {
    this._ocspConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspConfigurationInput() {
    return this._ocspConfiguration.internalValue;
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#key DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#value DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpec {
  /**
  * Name and bit size of the private key algorithm, the name of the signing algorithm, and X.500 certificate subject information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#certificate_authority_configuration DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#certificate_authority_configuration}
  */
  readonly certificateAuthorityConfiguration: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfiguration;
  /**
  * Specifies a cryptographic key management compliance standard used for handling CA keys. Default: FIPS_140_2_LEVEL_3_OR_HIGHER Some Amazon Web Services Regions do not support the default. When creating a CA in these Regions, you must provide FIPS_140_2_LEVEL_2_OR_HIGHER as the argument for KeyStorageSecurityStandard. Failure to do this results in an InvalidArgsException with the message, 'A certificate authority cannot be created in this region with the specified security standard.' For information about security standard support in various Regions, see Storage and security compliance of Amazon Web Services Private CA private keys (https://docs.aws.amazon.com/privateca/latest/userguide/data-protection.html#private-keys).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#key_storage_security_standard DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#key_storage_security_standard}
  */
  readonly keyStorageSecurityStandard?: string;
  /**
  * Contains information to enable Online Certificate Status Protocol (OCSP) support, to enable a certificate revocation list (CRL), to enable both, or to enable neither. The default is for both certificate validation mechanisms to be disabled. The following requirements apply to revocation configurations. * A configuration disabling CRLs or OCSP must contain only the Enabled=False parameter, and will fail if other parameters such as CustomCname or ExpirationInDays are included. * In a CRL configuration, the S3BucketName parameter must conform to Amazon S3 bucket naming rules (https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html). * A configuration containing a custom Canonical Name (CNAME) parameter for CRLs or OCSP must conform to RFC2396 (https://www.ietf.org/rfc/rfc2396.txt) restrictions on the use of special characters in a CNAME. * In a CRL or OCSP configuration, the value of a CNAME parameter must not include a protocol prefix such as 'http://' or 'https://'. For more information, see the OcspConfiguration (https://docs.aws.amazon.com/privateca/latest/APIReference/API_OcspConfiguration.html) and CrlConfiguration (https://docs.aws.amazon.com/privateca/latest/APIReference/API_CrlConfiguration.html) types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#revocation_configuration DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#revocation_configuration}
  */
  readonly revocationConfiguration?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfiguration;
  /**
  * Key-value pairs that will be attached to the new private CA. You can associate up to 50 tags with a private CA. For information using tags with IAM to manage permissions, see Controlling Access Using IAM Tags (https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#tags DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * The type of the certificate authority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#type DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * Specifies whether the CA issues general-purpose certificates that typically require a revocation mechanism, or short-lived certificates that may optionally omit revocation because they expire quickly. Short-lived certificate validity is limited to seven days. The default value is GENERAL_PURPOSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#usage_mode DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest#usage_mode}
  */
  readonly usageMode?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_authority_configuration: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationToTerraform(struct!.certificateAuthorityConfiguration),
    key_storage_security_standard: cdktf.stringToTerraform(struct!.keyStorageSecurityStandard),
    revocation_configuration: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationToTerraform(struct!.revocationConfiguration),
    tags: cdktf.listMapper(dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
    usage_mode: cdktf.stringToTerraform(struct!.usageMode),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_authority_configuration: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationToHclTerraform(struct!.certificateAuthorityConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfiguration",
    },
    key_storage_security_standard: {
      value: cdktf.stringToHclTerraform(struct!.keyStorageSecurityStandard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revocation_configuration: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationToHclTerraform(struct!.revocationConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfiguration",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecTagsList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usage_mode: {
      value: cdktf.stringToHclTerraform(struct!.usageMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateAuthorityConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityConfiguration = this._certificateAuthorityConfiguration?.internalValue;
    }
    if (this._keyStorageSecurityStandard !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStorageSecurityStandard = this._keyStorageSecurityStandard;
    }
    if (this._revocationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.revocationConfiguration = this._revocationConfiguration?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._usageMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.usageMode = this._usageMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateAuthorityConfiguration.internalValue = undefined;
      this._keyStorageSecurityStandard = undefined;
      this._revocationConfiguration.internalValue = undefined;
      this._tags.internalValue = undefined;
      this._type = undefined;
      this._usageMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateAuthorityConfiguration.internalValue = value.certificateAuthorityConfiguration;
      this._keyStorageSecurityStandard = value.keyStorageSecurityStandard;
      this._revocationConfiguration.internalValue = value.revocationConfiguration;
      this._tags.internalValue = value.tags;
      this._type = value.type;
      this._usageMode = value.usageMode;
    }
  }

  // certificate_authority_configuration - computed: false, optional: false, required: true
  private _certificateAuthorityConfiguration = new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfigurationOutputReference(this, "certificate_authority_configuration");
  public get certificateAuthorityConfiguration() {
    return this._certificateAuthorityConfiguration;
  }
  public putCertificateAuthorityConfiguration(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecCertificateAuthorityConfiguration) {
    this._certificateAuthorityConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityConfigurationInput() {
    return this._certificateAuthorityConfiguration.internalValue;
  }

  // key_storage_security_standard - computed: false, optional: true, required: false
  private _keyStorageSecurityStandard?: string; 
  public get keyStorageSecurityStandard() {
    return this.getStringAttribute('key_storage_security_standard');
  }
  public set keyStorageSecurityStandard(value: string) {
    this._keyStorageSecurityStandard = value;
  }
  public resetKeyStorageSecurityStandard() {
    this._keyStorageSecurityStandard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStorageSecurityStandardInput() {
    return this._keyStorageSecurityStandard;
  }

  // revocation_configuration - computed: false, optional: true, required: false
  private _revocationConfiguration = new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfigurationOutputReference(this, "revocation_configuration");
  public get revocationConfiguration() {
    return this._revocationConfiguration;
  }
  public putRevocationConfiguration(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecRevocationConfiguration) {
    this._revocationConfiguration.internalValue = value;
  }
  public resetRevocationConfiguration() {
    this._revocationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationConfigurationInput() {
    return this._revocationConfiguration.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // usage_mode - computed: false, optional: true, required: false
  private _usageMode?: string; 
  public get usageMode() {
    return this.getStringAttribute('usage_mode');
  }
  public set usageMode(value: string) {
    this._usageMode = value;
  }
  public resetUsageMode() {
    this._usageMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageModeInput() {
    return this._usageMode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest k8s_acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest}
*/
export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest k8s_acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_acmpca_services_k8s_aws_certificate_authority_v1alpha1_manifest',
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
  private _metadata = new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateAuthorityV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
