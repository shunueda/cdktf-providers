// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/certificates_k8s_io_certificate_signing_request_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/certificates_k8s_io_certificate_signing_request_v1_manifest#metadata DataK8SCertificatesK8SIoCertificateSigningRequestV1Manifest#metadata}
  */
  readonly metadata: DataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestMetadata;
  /**
  * CertificateSigningRequestSpec contains the certificate request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/certificates_k8s_io_certificate_signing_request_v1_manifest#spec DataK8SCertificatesK8SIoCertificateSigningRequestV1Manifest#spec}
  */
  readonly spec: DataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestSpec;
}
export interface DataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/certificates_k8s_io_certificate_signing_request_v1_manifest#annotations DataK8SCertificatesK8SIoCertificateSigningRequestV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/certificates_k8s_io_certificate_signing_request_v1_manifest#labels DataK8SCertificatesK8SIoCertificateSigningRequestV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/certificates_k8s_io_certificate_signing_request_v1_manifest#name DataK8SCertificatesK8SIoCertificateSigningRequestV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestMetadataToTerraform(struct?: DataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestMetadataToHclTerraform(struct?: DataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestSpec {
  /**
  * expirationSeconds is the requested duration of validity of the issued certificate. The certificate signer may issue a certificate with a different validity duration so a client must check the delta between the notBefore and and notAfter fields in the issued certificate to determine the actual duration. The v1.22+ in-tree implementations of the well-known Kubernetes signers will honor this field as long as the requested duration is not greater than the maximum duration they will honor per the --cluster-signing-duration CLI flag to the Kubernetes controller manager. Certificate signers may not honor this field for various reasons: 1. Old signer that is unaware of the field (such as the in-tree implementations prior to v1.22) 2. Signer whose configured maximum is shorter than the requested duration 3. Signer whose configured minimum is longer than the requested duration The minimum valid value for expirationSeconds is 600, i.e. 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/certificates_k8s_io_certificate_signing_request_v1_manifest#expiration_seconds DataK8SCertificatesK8SIoCertificateSigningRequestV1Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * extra contains extra attributes of the user that created the CertificateSigningRequest. Populated by the API server on creation and immutable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/certificates_k8s_io_certificate_signing_request_v1_manifest#extra DataK8SCertificatesK8SIoCertificateSigningRequestV1Manifest#extra}
  */
  readonly extra?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * groups contains group membership of the user that created the CertificateSigningRequest. Populated by the API server on creation and immutable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/certificates_k8s_io_certificate_signing_request_v1_manifest#groups DataK8SCertificatesK8SIoCertificateSigningRequestV1Manifest#groups}
  */
  readonly groups?: string[];
  /**
  * request contains an x509 certificate signing request encoded in a 'CERTIFICATE REQUEST' PEM block. When serialized as JSON or YAML, the data is additionally base64-encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/certificates_k8s_io_certificate_signing_request_v1_manifest#request DataK8SCertificatesK8SIoCertificateSigningRequestV1Manifest#request}
  */
  readonly request: string;
  /**
  * signerName indicates the requested signer, and is a qualified name. List/watch requests for CertificateSigningRequests can filter on this field using a 'spec.signerName=NAME' fieldSelector. Well-known Kubernetes signers are: 1. 'kubernetes.io/kube-apiserver-client': issues client certificates that can be used to authenticate to kube-apiserver. Requests for this signer are never auto-approved by kube-controller-manager, can be issued by the 'csrsigning' controller in kube-controller-manager. 2. 'kubernetes.io/kube-apiserver-client-kubelet': issues client certificates that kubelets use to authenticate to kube-apiserver. Requests for this signer can be auto-approved by the 'csrapproving' controller in kube-controller-manager, and can be issued by the 'csrsigning' controller in kube-controller-manager. 3. 'kubernetes.io/kubelet-serving' issues serving certificates that kubelets use to serve TLS endpoints, which kube-apiserver can connect to securely. Requests for this signer are never auto-approved by kube-controller-manager, and can be issued by the 'csrsigning' controller in kube-controller-manager. More details are available at https://k8s.io/docs/reference/access-authn-authz/certificate-signing-requests/#kubernetes-signers Custom signerNames can also be specified. The signer defines: 1. Trust distribution: how trust (CA bundles) are distributed. 2. Permitted subjects: and behavior when a disallowed subject is requested. 3. Required, permitted, or forbidden x509 extensions in the request (including whether subjectAltNames are allowed, which types, restrictions on allowed values) and behavior when a disallowed extension is requested. 4. Required, permitted, or forbidden key usages / extended key usages. 5. Expiration/certificate lifetime: whether it is fixed by the signer, configurable by the admin. 6. Whether or not requests for CA certificates are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/certificates_k8s_io_certificate_signing_request_v1_manifest#signer_name DataK8SCertificatesK8SIoCertificateSigningRequestV1Manifest#signer_name}
  */
  readonly signerName: string;
  /**
  * uid contains the uid of the user that created the CertificateSigningRequest. Populated by the API server on creation and immutable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/certificates_k8s_io_certificate_signing_request_v1_manifest#uid DataK8SCertificatesK8SIoCertificateSigningRequestV1Manifest#uid}
  */
  readonly uid?: string;
  /**
  * usages specifies a set of key usages requested in the issued certificate. Requests for TLS client certificates typically request: 'digital signature', 'key encipherment', 'client auth'. Requests for TLS serving certificates typically request: 'key encipherment', 'digital signature', 'server auth'. Valid values are: 'signing', 'digital signature', 'content commitment', 'key encipherment', 'key agreement', 'data encipherment', 'cert sign', 'crl sign', 'encipher only', 'decipher only', 'any', 'server auth', 'client auth', 'code signing', 'email protection', 's/mime', 'ipsec end system', 'ipsec tunnel', 'ipsec user', 'timestamping', 'ocsp signing', 'microsoft sgc', 'netscape sgc'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/certificates_k8s_io_certificate_signing_request_v1_manifest#usages DataK8SCertificatesK8SIoCertificateSigningRequestV1Manifest#usages}
  */
  readonly usages?: string[];
  /**
  * username contains the name of the user that created the CertificateSigningRequest. Populated by the API server on creation and immutable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/certificates_k8s_io_certificate_signing_request_v1_manifest#username DataK8SCertificatesK8SIoCertificateSigningRequestV1Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestSpecToTerraform(struct?: DataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_seconds: cdktf.numberToTerraform(struct!.expirationSeconds),
    extra: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.extra),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    request: cdktf.stringToTerraform(struct!.request),
    signer_name: cdktf.stringToTerraform(struct!.signerName),
    uid: cdktf.stringToTerraform(struct!.uid),
    usages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usages),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestSpecToHclTerraform(struct?: DataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.expirationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extra: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.extra),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signer_name: {
      value: cdktf.stringToHclTerraform(struct!.signerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.usages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationSeconds = this._expirationSeconds;
    }
    if (this._extra !== undefined) {
      hasAnyValues = true;
      internalValueResult.extra = this._extra;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._signerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.signerName = this._signerName;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    if (this._usages !== undefined) {
      hasAnyValues = true;
      internalValueResult.usages = this._usages;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expirationSeconds = undefined;
      this._extra = undefined;
      this._groups = undefined;
      this._request = undefined;
      this._signerName = undefined;
      this._uid = undefined;
      this._usages = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expirationSeconds = value.expirationSeconds;
      this._extra = value.extra;
      this._groups = value.groups;
      this._request = value.request;
      this._signerName = value.signerName;
      this._uid = value.uid;
      this._usages = value.usages;
      this._username = value.username;
    }
  }

  // expiration_seconds - computed: false, optional: true, required: false
  private _expirationSeconds?: number; 
  public get expirationSeconds() {
    return this.getNumberAttribute('expiration_seconds');
  }
  public set expirationSeconds(value: number) {
    this._expirationSeconds = value;
  }
  public resetExpirationSeconds() {
    this._expirationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationSecondsInput() {
    return this._expirationSeconds;
  }

  // extra - computed: false, optional: true, required: false
  private _extra?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get extra() {
    return this.interpolationForAttribute('extra');
  }
  public set extra(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._extra = value;
  }
  public resetExtra() {
    this._extra = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraInput() {
    return this._extra;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // request - computed: false, optional: false, required: true
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }

  // signer_name - computed: false, optional: false, required: true
  private _signerName?: string; 
  public get signerName() {
    return this.getStringAttribute('signer_name');
  }
  public set signerName(value: string) {
    this._signerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signerNameInput() {
    return this._signerName;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // usages - computed: false, optional: true, required: false
  private _usages?: string[]; 
  public get usages() {
    return this.getListAttribute('usages');
  }
  public set usages(value: string[]) {
    this._usages = value;
  }
  public resetUsages() {
    this._usages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usagesInput() {
    return this._usages;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/certificates_k8s_io_certificate_signing_request_v1_manifest k8s_certificates_k8s_io_certificate_signing_request_v1_manifest}
*/
export class DataK8SCertificatesK8SIoCertificateSigningRequestV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_certificates_k8s_io_certificate_signing_request_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCertificatesK8SIoCertificateSigningRequestV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCertificatesK8SIoCertificateSigningRequestV1Manifest to import
  * @param importFromId The id of the existing DataK8SCertificatesK8SIoCertificateSigningRequestV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/certificates_k8s_io_certificate_signing_request_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCertificatesK8SIoCertificateSigningRequestV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_certificates_k8s_io_certificate_signing_request_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/certificates_k8s_io_certificate_signing_request_v1_manifest k8s_certificates_k8s_io_certificate_signing_request_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_certificates_k8s_io_certificate_signing_request_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestSpec) {
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
      metadata: dataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCertificatesK8SIoCertificateSigningRequestV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
