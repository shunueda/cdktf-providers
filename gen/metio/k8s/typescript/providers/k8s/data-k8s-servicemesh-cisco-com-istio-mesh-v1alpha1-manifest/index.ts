// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#metadata DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#spec DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpec;
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#annotations DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#labels DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#name DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#namespace DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaTlsSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#ca_certificates DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#ca_certificates}
  */
  readonly caCertificates?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#client_certificate DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#credential_name DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#credential_name}
  */
  readonly credentialName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#insecure_skip_verify DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#mode DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#private_key DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#sni DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#sni}
  */
  readonly sni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#subject_alt_names DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#subject_alt_names}
  */
  readonly subjectAltNames?: string[];
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaTlsSettingsToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaTlsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificates: cdktf.stringToTerraform(struct!.caCertificates),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    credential_name: cdktf.stringToTerraform(struct!.credentialName),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    mode: cdktf.stringToTerraform(struct!.mode),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    sni: cdktf.stringToTerraform(struct!.sni),
    subject_alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectAltNames),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaTlsSettingsToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaTlsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificates: {
      value: cdktf.stringToHclTerraform(struct!.caCertificates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_name: {
      value: cdktf.stringToHclTerraform(struct!.credentialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni: {
      value: cdktf.stringToHclTerraform(struct!.sni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_alt_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjectAltNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaTlsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaTlsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificates = this._caCertificates;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._credentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialName = this._credentialName;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    if (this._subjectAltNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAltNames = this._subjectAltNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaTlsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificates = undefined;
      this._clientCertificate = undefined;
      this._credentialName = undefined;
      this._insecureSkipVerify = undefined;
      this._mode = undefined;
      this._privateKey = undefined;
      this._sni = undefined;
      this._subjectAltNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificates = value.caCertificates;
      this._clientCertificate = value.clientCertificate;
      this._credentialName = value.credentialName;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._mode = value.mode;
      this._privateKey = value.privateKey;
      this._sni = value.sni;
      this._subjectAltNames = value.subjectAltNames;
    }
  }

  // ca_certificates - computed: false, optional: true, required: false
  private _caCertificates?: string; 
  public get caCertificates() {
    return this.getStringAttribute('ca_certificates');
  }
  public set caCertificates(value: string) {
    this._caCertificates = value;
  }
  public resetCaCertificates() {
    this._caCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificatesInput() {
    return this._caCertificates;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // credential_name - computed: false, optional: true, required: false
  private _credentialName?: string; 
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }
  public set credentialName(value: string) {
    this._credentialName = value;
  }
  public resetCredentialName() {
    this._credentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialNameInput() {
    return this._credentialName;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // sni - computed: false, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // subject_alt_names - computed: false, optional: true, required: false
  private _subjectAltNames?: string[]; 
  public get subjectAltNames() {
    return this.getListAttribute('subject_alt_names');
  }
  public set subjectAltNames(value: string[]) {
    this._subjectAltNames = value;
  }
  public resetSubjectAltNames() {
    this._subjectAltNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltNamesInput() {
    return this._subjectAltNames;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#address DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#istiod_side DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#istiod_side}
  */
  readonly istiodSide?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#request_timeout DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#request_timeout}
  */
  readonly requestTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#tls_settings DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#tls_settings}
  */
  readonly tlsSettings?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaTlsSettings;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    istiod_side: cdktf.booleanToTerraform(struct!.istiodSide),
    request_timeout: cdktf.stringToTerraform(struct!.requestTimeout),
    tls_settings: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaTlsSettingsToTerraform(struct!.tlsSettings),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    istiod_side: {
      value: cdktf.booleanToHclTerraform(struct!.istiodSide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_timeout: {
      value: cdktf.stringToHclTerraform(struct!.requestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_settings: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaTlsSettingsToHclTerraform(struct!.tlsSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaTlsSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._istiodSide !== undefined) {
      hasAnyValues = true;
      internalValueResult.istiodSide = this._istiodSide;
    }
    if (this._requestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTimeout = this._requestTimeout;
    }
    if (this._tlsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSettings = this._tlsSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._istiodSide = undefined;
      this._requestTimeout = undefined;
      this._tlsSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._istiodSide = value.istiodSide;
      this._requestTimeout = value.requestTimeout;
      this._tlsSettings.internalValue = value.tlsSettings;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // istiod_side - computed: false, optional: true, required: false
  private _istiodSide?: boolean | cdktf.IResolvable; 
  public get istiodSide() {
    return this.getBooleanAttribute('istiod_side');
  }
  public set istiodSide(value: boolean | cdktf.IResolvable) {
    this._istiodSide = value;
  }
  public resetIstiodSide() {
    this._istiodSide = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istiodSideInput() {
    return this._istiodSide;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: string; 
  public get requestTimeout() {
    return this.getStringAttribute('request_timeout');
  }
  public set requestTimeout(value: string) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // tls_settings - computed: false, optional: true, required: false
  private _tlsSettings = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaTlsSettingsOutputReference(this, "tls_settings");
  public get tlsSettings() {
    return this._tlsSettings;
  }
  public putTlsSettings(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaTlsSettings) {
    this._tlsSettings.internalValue = value;
  }
  public resetTlsSettings() {
    this._tlsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSettingsInput() {
    return this._tlsSettings.internalValue;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#cert_signers DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#cert_signers}
  */
  readonly certSigners?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#pem DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#pem}
  */
  readonly pem?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#spiffe_bundle_url DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#spiffe_bundle_url}
  */
  readonly spiffeBundleUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#trust_domains DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#trust_domains}
  */
  readonly trustDomains?: string[];
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaCertificatesToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_signers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certSigners),
    pem: cdktf.stringToTerraform(struct!.pem),
    spiffe_bundle_url: cdktf.stringToTerraform(struct!.spiffeBundleUrl),
    trust_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trustDomains),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaCertificatesToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_signers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certSigners),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pem: {
      value: cdktf.stringToHclTerraform(struct!.pem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spiffe_bundle_url: {
      value: cdktf.stringToHclTerraform(struct!.spiffeBundleUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.trustDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certSigners !== undefined) {
      hasAnyValues = true;
      internalValueResult.certSigners = this._certSigners;
    }
    if (this._pem !== undefined) {
      hasAnyValues = true;
      internalValueResult.pem = this._pem;
    }
    if (this._spiffeBundleUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.spiffeBundleUrl = this._spiffeBundleUrl;
    }
    if (this._trustDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustDomains = this._trustDomains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certSigners = undefined;
      this._pem = undefined;
      this._spiffeBundleUrl = undefined;
      this._trustDomains = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certSigners = value.certSigners;
      this._pem = value.pem;
      this._spiffeBundleUrl = value.spiffeBundleUrl;
      this._trustDomains = value.trustDomains;
    }
  }

  // cert_signers - computed: false, optional: true, required: false
  private _certSigners?: string[]; 
  public get certSigners() {
    return this.getListAttribute('cert_signers');
  }
  public set certSigners(value: string[]) {
    this._certSigners = value;
  }
  public resetCertSigners() {
    this._certSigners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certSignersInput() {
    return this._certSigners;
  }

  // pem - computed: false, optional: true, required: false
  private _pem?: string; 
  public get pem() {
    return this.getStringAttribute('pem');
  }
  public set pem(value: string) {
    this._pem = value;
  }
  public resetPem() {
    this._pem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemInput() {
    return this._pem;
  }

  // spiffe_bundle_url - computed: false, optional: true, required: false
  private _spiffeBundleUrl?: string; 
  public get spiffeBundleUrl() {
    return this.getStringAttribute('spiffe_bundle_url');
  }
  public set spiffeBundleUrl(value: string) {
    this._spiffeBundleUrl = value;
  }
  public resetSpiffeBundleUrl() {
    this._spiffeBundleUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spiffeBundleUrlInput() {
    return this._spiffeBundleUrl;
  }

  // trust_domains - computed: false, optional: true, required: false
  private _trustDomains?: string[]; 
  public get trustDomains() {
    return this.getListAttribute('trust_domains');
  }
  public set trustDomains(value: string[]) {
    this._trustDomains = value;
  }
  public resetTrustDomains() {
    this._trustDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustDomainsInput() {
    return this._trustDomains;
  }
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaCertificatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaCertificates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaCertificatesOutputReference {
    return new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#dns_names DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#dns_names}
  */
  readonly dnsNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#secret_name DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCertificatesToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsNames),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCertificatesToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNames = this._dnsNames;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsNames = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsNames = value.dnsNames;
      this._secretName = value.secretName;
    }
  }

  // dns_names - computed: false, optional: true, required: false
  private _dnsNames?: string[]; 
  public get dnsNames() {
    return this.getListAttribute('dns_names');
  }
  public set dnsNames(value: string[]) {
    this._dnsNames = value;
  }
  public resetDnsNames() {
    this._dnsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNamesInput() {
    return this._dnsNames;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCertificatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCertificates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCertificatesOutputReference {
    return new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSourcesTlsSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#ca_certificates DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#ca_certificates}
  */
  readonly caCertificates?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#client_certificate DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#credential_name DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#credential_name}
  */
  readonly credentialName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#insecure_skip_verify DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#mode DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#private_key DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#sni DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#sni}
  */
  readonly sni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#subject_alt_names DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#subject_alt_names}
  */
  readonly subjectAltNames?: string[];
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSourcesTlsSettingsToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSourcesTlsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificates: cdktf.stringToTerraform(struct!.caCertificates),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    credential_name: cdktf.stringToTerraform(struct!.credentialName),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    mode: cdktf.stringToTerraform(struct!.mode),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    sni: cdktf.stringToTerraform(struct!.sni),
    subject_alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectAltNames),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSourcesTlsSettingsToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSourcesTlsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificates: {
      value: cdktf.stringToHclTerraform(struct!.caCertificates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_name: {
      value: cdktf.stringToHclTerraform(struct!.credentialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni: {
      value: cdktf.stringToHclTerraform(struct!.sni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_alt_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjectAltNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSourcesTlsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSourcesTlsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificates = this._caCertificates;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._credentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialName = this._credentialName;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    if (this._subjectAltNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAltNames = this._subjectAltNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSourcesTlsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificates = undefined;
      this._clientCertificate = undefined;
      this._credentialName = undefined;
      this._insecureSkipVerify = undefined;
      this._mode = undefined;
      this._privateKey = undefined;
      this._sni = undefined;
      this._subjectAltNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificates = value.caCertificates;
      this._clientCertificate = value.clientCertificate;
      this._credentialName = value.credentialName;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._mode = value.mode;
      this._privateKey = value.privateKey;
      this._sni = value.sni;
      this._subjectAltNames = value.subjectAltNames;
    }
  }

  // ca_certificates - computed: false, optional: true, required: false
  private _caCertificates?: string; 
  public get caCertificates() {
    return this.getStringAttribute('ca_certificates');
  }
  public set caCertificates(value: string) {
    this._caCertificates = value;
  }
  public resetCaCertificates() {
    this._caCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificatesInput() {
    return this._caCertificates;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // credential_name - computed: false, optional: true, required: false
  private _credentialName?: string; 
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }
  public set credentialName(value: string) {
    this._credentialName = value;
  }
  public resetCredentialName() {
    this._credentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialNameInput() {
    return this._credentialName;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // sni - computed: false, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // subject_alt_names - computed: false, optional: true, required: false
  private _subjectAltNames?: string[]; 
  public get subjectAltNames() {
    return this.getListAttribute('subject_alt_names');
  }
  public set subjectAltNames(value: string[]) {
    this._subjectAltNames = value;
  }
  public resetSubjectAltNames() {
    this._subjectAltNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltNamesInput() {
    return this._subjectAltNames;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#address DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#subscribed_resources DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#subscribed_resources}
  */
  readonly subscribedResources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#tls_settings DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#tls_settings}
  */
  readonly tlsSettings?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSourcesTlsSettings;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSourcesToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    subscribed_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subscribedResources),
    tls_settings: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSourcesTlsSettingsToTerraform(struct!.tlsSettings),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSourcesToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscribed_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subscribedResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls_settings: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSourcesTlsSettingsToHclTerraform(struct!.tlsSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSourcesTlsSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._subscribedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscribedResources = this._subscribedResources;
    }
    if (this._tlsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSettings = this._tlsSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._subscribedResources = undefined;
      this._tlsSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._subscribedResources = value.subscribedResources;
      this._tlsSettings.internalValue = value.tlsSettings;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // subscribed_resources - computed: false, optional: true, required: false
  private _subscribedResources?: string[]; 
  public get subscribedResources() {
    return this.getListAttribute('subscribed_resources');
  }
  public set subscribedResources(value: string[]) {
    this._subscribedResources = value;
  }
  public resetSubscribedResources() {
    this._subscribedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribedResourcesInput() {
    return this._subscribedResources;
  }

  // tls_settings - computed: false, optional: true, required: false
  private _tlsSettings = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSourcesTlsSettingsOutputReference(this, "tls_settings");
  public get tlsSettings() {
    return this._tlsSettings;
  }
  public putTlsSettings(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSourcesTlsSettings) {
    this._tlsSettings.internalValue = value;
  }
  public resetTlsSettings() {
    this._tlsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSettingsInput() {
    return this._tlsSettings.internalValue;
  }
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSourcesOutputReference {
    return new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTcpKeepalive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#interval DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#probes DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#probes}
  */
  readonly probes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#time DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#time}
  */
  readonly time?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTcpKeepaliveToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTcpKeepalive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    probes: cdktf.numberToTerraform(struct!.probes),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTcpKeepaliveToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTcpKeepalive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probes: {
      value: cdktf.numberToHclTerraform(struct!.probes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTcpKeepaliveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTcpKeepalive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._probes !== undefined) {
      hasAnyValues = true;
      internalValueResult.probes = this._probes;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTcpKeepalive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._probes = undefined;
      this._time = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._probes = value.probes;
      this._time = value.time;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // probes - computed: false, optional: true, required: false
  private _probes?: number; 
  public get probes() {
    return this.getNumberAttribute('probes');
  }
  public set probes(value: number) {
    this._probes = value;
  }
  public resetProbes() {
    this._probes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probesInput() {
    return this._probes;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTlsSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#ca_certificates DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#ca_certificates}
  */
  readonly caCertificates?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#client_certificate DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#credential_name DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#credential_name}
  */
  readonly credentialName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#insecure_skip_verify DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#mode DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#private_key DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#sni DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#sni}
  */
  readonly sni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#subject_alt_names DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#subject_alt_names}
  */
  readonly subjectAltNames?: string[];
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTlsSettingsToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTlsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificates: cdktf.stringToTerraform(struct!.caCertificates),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    credential_name: cdktf.stringToTerraform(struct!.credentialName),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    mode: cdktf.stringToTerraform(struct!.mode),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    sni: cdktf.stringToTerraform(struct!.sni),
    subject_alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectAltNames),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTlsSettingsToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTlsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificates: {
      value: cdktf.stringToHclTerraform(struct!.caCertificates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_name: {
      value: cdktf.stringToHclTerraform(struct!.credentialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni: {
      value: cdktf.stringToHclTerraform(struct!.sni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_alt_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjectAltNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTlsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTlsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificates = this._caCertificates;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._credentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialName = this._credentialName;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    if (this._subjectAltNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAltNames = this._subjectAltNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTlsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificates = undefined;
      this._clientCertificate = undefined;
      this._credentialName = undefined;
      this._insecureSkipVerify = undefined;
      this._mode = undefined;
      this._privateKey = undefined;
      this._sni = undefined;
      this._subjectAltNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificates = value.caCertificates;
      this._clientCertificate = value.clientCertificate;
      this._credentialName = value.credentialName;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._mode = value.mode;
      this._privateKey = value.privateKey;
      this._sni = value.sni;
      this._subjectAltNames = value.subjectAltNames;
    }
  }

  // ca_certificates - computed: false, optional: true, required: false
  private _caCertificates?: string; 
  public get caCertificates() {
    return this.getStringAttribute('ca_certificates');
  }
  public set caCertificates(value: string) {
    this._caCertificates = value;
  }
  public resetCaCertificates() {
    this._caCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificatesInput() {
    return this._caCertificates;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // credential_name - computed: false, optional: true, required: false
  private _credentialName?: string; 
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }
  public set credentialName(value: string) {
    this._credentialName = value;
  }
  public resetCredentialName() {
    this._credentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialNameInput() {
    return this._credentialName;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // sni - computed: false, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // subject_alt_names - computed: false, optional: true, required: false
  private _subjectAltNames?: string[]; 
  public get subjectAltNames() {
    return this.getListAttribute('subject_alt_names');
  }
  public set subjectAltNames(value: string[]) {
    this._subjectAltNames = value;
  }
  public resetSubjectAltNames() {
    this._subjectAltNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltNamesInput() {
    return this._subjectAltNames;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#address DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#tcp_keepalive DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#tcp_keepalive}
  */
  readonly tcpKeepalive?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTcpKeepalive;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#tls_settings DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#tls_settings}
  */
  readonly tlsSettings?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTlsSettings;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    tcp_keepalive: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTcpKeepaliveToTerraform(struct!.tcpKeepalive),
    tls_settings: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTlsSettingsToTerraform(struct!.tlsSettings),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_keepalive: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTcpKeepaliveToHclTerraform(struct!.tcpKeepalive),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTcpKeepalive",
    },
    tls_settings: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTlsSettingsToHclTerraform(struct!.tlsSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTlsSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._tcpKeepalive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpKeepalive = this._tcpKeepalive?.internalValue;
    }
    if (this._tlsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSettings = this._tlsSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._tcpKeepalive.internalValue = undefined;
      this._tlsSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._tcpKeepalive.internalValue = value.tcpKeepalive;
      this._tlsSettings.internalValue = value.tlsSettings;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // tcp_keepalive - computed: false, optional: true, required: false
  private _tcpKeepalive = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTcpKeepaliveOutputReference(this, "tcp_keepalive");
  public get tcpKeepalive() {
    return this._tcpKeepalive;
  }
  public putTcpKeepalive(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTcpKeepalive) {
    this._tcpKeepalive.internalValue = value;
  }
  public resetTcpKeepalive() {
    this._tcpKeepalive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpKeepaliveInput() {
    return this._tcpKeepalive.internalValue;
  }

  // tls_settings - computed: false, optional: true, required: false
  private _tlsSettings = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTlsSettingsOutputReference(this, "tls_settings");
  public get tlsSettings() {
    return this._tlsSettings;
  }
  public putTlsSettings(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceTlsSettings) {
    this._tlsSettings.internalValue = value;
  }
  public resetTlsSettings() {
    this._tlsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSettingsInput() {
    return this._tlsSettings.internalValue;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTcpKeepalive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#interval DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#probes DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#probes}
  */
  readonly probes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#time DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#time}
  */
  readonly time?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTcpKeepaliveToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTcpKeepalive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    probes: cdktf.numberToTerraform(struct!.probes),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTcpKeepaliveToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTcpKeepalive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probes: {
      value: cdktf.numberToHclTerraform(struct!.probes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTcpKeepaliveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTcpKeepalive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._probes !== undefined) {
      hasAnyValues = true;
      internalValueResult.probes = this._probes;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTcpKeepalive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._probes = undefined;
      this._time = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._probes = value.probes;
      this._time = value.time;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // probes - computed: false, optional: true, required: false
  private _probes?: number; 
  public get probes() {
    return this.getNumberAttribute('probes');
  }
  public set probes(value: number) {
    this._probes = value;
  }
  public resetProbes() {
    this._probes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probesInput() {
    return this._probes;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTlsSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#ca_certificates DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#ca_certificates}
  */
  readonly caCertificates?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#client_certificate DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#credential_name DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#credential_name}
  */
  readonly credentialName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#insecure_skip_verify DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#mode DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#private_key DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#sni DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#sni}
  */
  readonly sni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#subject_alt_names DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#subject_alt_names}
  */
  readonly subjectAltNames?: string[];
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTlsSettingsToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTlsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificates: cdktf.stringToTerraform(struct!.caCertificates),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    credential_name: cdktf.stringToTerraform(struct!.credentialName),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    mode: cdktf.stringToTerraform(struct!.mode),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    sni: cdktf.stringToTerraform(struct!.sni),
    subject_alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectAltNames),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTlsSettingsToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTlsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificates: {
      value: cdktf.stringToHclTerraform(struct!.caCertificates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_name: {
      value: cdktf.stringToHclTerraform(struct!.credentialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni: {
      value: cdktf.stringToHclTerraform(struct!.sni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_alt_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjectAltNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTlsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTlsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificates = this._caCertificates;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._credentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialName = this._credentialName;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    if (this._subjectAltNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAltNames = this._subjectAltNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTlsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificates = undefined;
      this._clientCertificate = undefined;
      this._credentialName = undefined;
      this._insecureSkipVerify = undefined;
      this._mode = undefined;
      this._privateKey = undefined;
      this._sni = undefined;
      this._subjectAltNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificates = value.caCertificates;
      this._clientCertificate = value.clientCertificate;
      this._credentialName = value.credentialName;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._mode = value.mode;
      this._privateKey = value.privateKey;
      this._sni = value.sni;
      this._subjectAltNames = value.subjectAltNames;
    }
  }

  // ca_certificates - computed: false, optional: true, required: false
  private _caCertificates?: string; 
  public get caCertificates() {
    return this.getStringAttribute('ca_certificates');
  }
  public set caCertificates(value: string) {
    this._caCertificates = value;
  }
  public resetCaCertificates() {
    this._caCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificatesInput() {
    return this._caCertificates;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // credential_name - computed: false, optional: true, required: false
  private _credentialName?: string; 
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }
  public set credentialName(value: string) {
    this._credentialName = value;
  }
  public resetCredentialName() {
    this._credentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialNameInput() {
    return this._credentialName;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // sni - computed: false, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // subject_alt_names - computed: false, optional: true, required: false
  private _subjectAltNames?: string[]; 
  public get subjectAltNames() {
    return this.getListAttribute('subject_alt_names');
  }
  public set subjectAltNames(value: string[]) {
    this._subjectAltNames = value;
  }
  public resetSubjectAltNames() {
    this._subjectAltNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltNamesInput() {
    return this._subjectAltNames;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#address DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#tcp_keepalive DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#tcp_keepalive}
  */
  readonly tcpKeepalive?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTcpKeepalive;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#tls_settings DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#tls_settings}
  */
  readonly tlsSettings?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTlsSettings;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    tcp_keepalive: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTcpKeepaliveToTerraform(struct!.tcpKeepalive),
    tls_settings: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTlsSettingsToTerraform(struct!.tlsSettings),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_keepalive: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTcpKeepaliveToHclTerraform(struct!.tcpKeepalive),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTcpKeepalive",
    },
    tls_settings: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTlsSettingsToHclTerraform(struct!.tlsSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTlsSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._tcpKeepalive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpKeepalive = this._tcpKeepalive?.internalValue;
    }
    if (this._tlsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSettings = this._tlsSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._tcpKeepalive.internalValue = undefined;
      this._tlsSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._tcpKeepalive.internalValue = value.tcpKeepalive;
      this._tlsSettings.internalValue = value.tlsSettings;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // tcp_keepalive - computed: false, optional: true, required: false
  private _tcpKeepalive = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTcpKeepaliveOutputReference(this, "tcp_keepalive");
  public get tcpKeepalive() {
    return this._tcpKeepalive;
  }
  public putTcpKeepalive(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTcpKeepalive) {
    this._tcpKeepalive.internalValue = value;
  }
  public resetTcpKeepalive() {
    this._tcpKeepalive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpKeepaliveInput() {
    return this._tcpKeepalive.internalValue;
  }

  // tls_settings - computed: false, optional: true, required: false
  private _tlsSettings = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTlsSettingsOutputReference(this, "tls_settings");
  public get tlsSettings() {
    return this._tlsSettings;
  }
  public putTlsSettings(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceTlsSettings) {
    this._tlsSettings.internalValue = value;
  }
  public resetTlsSettings() {
    this._tlsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSettingsInput() {
    return this._tlsSettings.internalValue;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigGatewayTopology {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#forward_client_cert_details DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#forward_client_cert_details}
  */
  readonly forwardClientCertDetails?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#num_trusted_proxies DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#num_trusted_proxies}
  */
  readonly numTrustedProxies?: number;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigGatewayTopologyToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigGatewayTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_client_cert_details: cdktf.stringToTerraform(struct!.forwardClientCertDetails),
    num_trusted_proxies: cdktf.numberToTerraform(struct!.numTrustedProxies),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigGatewayTopologyToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigGatewayTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_client_cert_details: {
      value: cdktf.stringToHclTerraform(struct!.forwardClientCertDetails),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_trusted_proxies: {
      value: cdktf.numberToHclTerraform(struct!.numTrustedProxies),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigGatewayTopologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigGatewayTopology | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardClientCertDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardClientCertDetails = this._forwardClientCertDetails;
    }
    if (this._numTrustedProxies !== undefined) {
      hasAnyValues = true;
      internalValueResult.numTrustedProxies = this._numTrustedProxies;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigGatewayTopology | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forwardClientCertDetails = undefined;
      this._numTrustedProxies = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forwardClientCertDetails = value.forwardClientCertDetails;
      this._numTrustedProxies = value.numTrustedProxies;
    }
  }

  // forward_client_cert_details - computed: false, optional: true, required: false
  private _forwardClientCertDetails?: string; 
  public get forwardClientCertDetails() {
    return this.getStringAttribute('forward_client_cert_details');
  }
  public set forwardClientCertDetails(value: string) {
    this._forwardClientCertDetails = value;
  }
  public resetForwardClientCertDetails() {
    this._forwardClientCertDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardClientCertDetailsInput() {
    return this._forwardClientCertDetails;
  }

  // num_trusted_proxies - computed: false, optional: true, required: false
  private _numTrustedProxies?: number; 
  public get numTrustedProxies() {
    return this.getNumberAttribute('num_trusted_proxies');
  }
  public set numTrustedProxies(value: number) {
    this._numTrustedProxies = value;
  }
  public resetNumTrustedProxies() {
    this._numTrustedProxies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numTrustedProxiesInput() {
    return this._numTrustedProxies;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#image_type DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#image_type}
  */
  readonly imageType?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigImageToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_type: cdktf.stringToTerraform(struct!.imageType),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigImageToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_type: {
      value: cdktf.stringToHclTerraform(struct!.imageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageType = value.imageType;
    }
  }

  // image_type - computed: false, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderCryptomb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#poll_delay DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#poll_delay}
  */
  readonly pollDelay?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderCryptombToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderCryptomb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    poll_delay: cdktf.stringToTerraform(struct!.pollDelay),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderCryptombToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderCryptomb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    poll_delay: {
      value: cdktf.stringToHclTerraform(struct!.pollDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderCryptombOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderCryptomb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pollDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollDelay = this._pollDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderCryptomb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pollDelay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pollDelay = value.pollDelay;
    }
  }

  // poll_delay - computed: false, optional: true, required: false
  private _pollDelay?: string; 
  public get pollDelay() {
    return this.getStringAttribute('poll_delay');
  }
  public set pollDelay(value: string) {
    this._pollDelay = value;
  }
  public resetPollDelay() {
    this._pollDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollDelayInput() {
    return this._pollDelay;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderQat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#poll_delay DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#poll_delay}
  */
  readonly pollDelay?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderQatToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderQat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    poll_delay: cdktf.stringToTerraform(struct!.pollDelay),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderQatToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderQat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    poll_delay: {
      value: cdktf.stringToHclTerraform(struct!.pollDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderQatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderQat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pollDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollDelay = this._pollDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderQat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pollDelay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pollDelay = value.pollDelay;
    }
  }

  // poll_delay - computed: false, optional: true, required: false
  private _pollDelay?: string; 
  public get pollDelay() {
    return this.getStringAttribute('poll_delay');
  }
  public set pollDelay(value: string) {
    this._pollDelay = value;
  }
  public resetPollDelay() {
    this._pollDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollDelayInput() {
    return this._pollDelay;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#cryptomb DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#cryptomb}
  */
  readonly cryptomb?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderCryptomb;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#qat DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#qat}
  */
  readonly qat?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderQat;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cryptomb: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderCryptombToTerraform(struct!.cryptomb),
    qat: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderQatToTerraform(struct!.qat),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cryptomb: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderCryptombToHclTerraform(struct!.cryptomb),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderCryptomb",
    },
    qat: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderQatToHclTerraform(struct!.qat),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderQat",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cryptomb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptomb = this._cryptomb?.internalValue;
    }
    if (this._qat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qat = this._qat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cryptomb.internalValue = undefined;
      this._qat.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cryptomb.internalValue = value.cryptomb;
      this._qat.internalValue = value.qat;
    }
  }

  // cryptomb - computed: false, optional: true, required: false
  private _cryptomb = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderCryptombOutputReference(this, "cryptomb");
  public get cryptomb() {
    return this._cryptomb;
  }
  public putCryptomb(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderCryptomb) {
    this._cryptomb.internalValue = value;
  }
  public resetCryptomb() {
    this._cryptomb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptombInput() {
    return this._cryptomb.internalValue;
  }

  // qat - computed: false, optional: true, required: false
  private _qat = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderQatOutputReference(this, "qat");
  public get qat() {
    return this._qat;
  }
  public putQat(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderQat) {
    this._qat.internalValue = value;
  }
  public resetQat() {
    this._qat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qatInput() {
    return this._qat.internalValue;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigProxyStatsMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#inclusion_prefixes DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#inclusion_prefixes}
  */
  readonly inclusionPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#inclusion_regexps DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#inclusion_regexps}
  */
  readonly inclusionRegexps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#inclusion_suffixes DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#inclusion_suffixes}
  */
  readonly inclusionSuffixes?: string[];
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigProxyStatsMatcherToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigProxyStatsMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inclusion_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inclusionPrefixes),
    inclusion_regexps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inclusionRegexps),
    inclusion_suffixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inclusionSuffixes),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigProxyStatsMatcherToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigProxyStatsMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inclusion_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inclusionPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    inclusion_regexps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inclusionRegexps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    inclusion_suffixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inclusionSuffixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigProxyStatsMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigProxyStatsMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inclusionPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionPrefixes = this._inclusionPrefixes;
    }
    if (this._inclusionRegexps !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionRegexps = this._inclusionRegexps;
    }
    if (this._inclusionSuffixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionSuffixes = this._inclusionSuffixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigProxyStatsMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inclusionPrefixes = undefined;
      this._inclusionRegexps = undefined;
      this._inclusionSuffixes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inclusionPrefixes = value.inclusionPrefixes;
      this._inclusionRegexps = value.inclusionRegexps;
      this._inclusionSuffixes = value.inclusionSuffixes;
    }
  }

  // inclusion_prefixes - computed: false, optional: true, required: false
  private _inclusionPrefixes?: string[]; 
  public get inclusionPrefixes() {
    return this.getListAttribute('inclusion_prefixes');
  }
  public set inclusionPrefixes(value: string[]) {
    this._inclusionPrefixes = value;
  }
  public resetInclusionPrefixes() {
    this._inclusionPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionPrefixesInput() {
    return this._inclusionPrefixes;
  }

  // inclusion_regexps - computed: false, optional: true, required: false
  private _inclusionRegexps?: string[]; 
  public get inclusionRegexps() {
    return this.getListAttribute('inclusion_regexps');
  }
  public set inclusionRegexps(value: string[]) {
    this._inclusionRegexps = value;
  }
  public resetInclusionRegexps() {
    this._inclusionRegexps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionRegexpsInput() {
    return this._inclusionRegexps;
  }

  // inclusion_suffixes - computed: false, optional: true, required: false
  private _inclusionSuffixes?: string[]; 
  public get inclusionSuffixes() {
    return this.getListAttribute('inclusion_suffixes');
  }
  public set inclusionSuffixes(value: string[]) {
    this._inclusionSuffixes = value;
  }
  public resetInclusionSuffixes() {
    this._inclusionSuffixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionSuffixesInput() {
    return this._inclusionSuffixes;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeExec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#command DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeExecToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeExecToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGetHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#name DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#value DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#host DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#http_headers DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#path DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#port DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#scheme DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGetToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGetToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGet | cdktf.IResolvable): any {
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
    http_headers: {
      value: cdktf.listMapperHcl(dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGetHttpHeadersList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._httpHeaders.internalValue = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._httpHeaders.internalValue = value.httpHeaders;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeTcpSocket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#host DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#port DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#port}
  */
  readonly port: number;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeTcpSocketToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeTcpSocketToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeTcpSocket | cdktf.IResolvable): any {
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

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeTcpSocket | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeTcpSocket | cdktf.IResolvable | undefined) {
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

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
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
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#exec DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#exec}
  */
  readonly exec?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeExec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#failure_threshold DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#http_get DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#http_get}
  */
  readonly httpGet?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#initial_delay_seconds DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#period_seconds DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#success_threshold DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#tcp_socket DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeTcpSocket;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#timeout_seconds DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    http_get: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeTcpSocketToTerraform(struct!.tcpSocket),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_get: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGet",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_socket: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeTcpSocket",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._failureThreshold = undefined;
      this._httpGet.internalValue = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._tcpSocket.internalValue = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._failureThreshold = value.failureThreshold;
      this._httpGet.internalValue = value.httpGet;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._tcpSocket.internalValue = value.tcpSocket;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeTcpSocket) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigSds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#enabled DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#k8s_sa_jwt_path DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#k8s_sa_jwt_path}
  */
  readonly k8SSaJwtPath?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigSdsToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigSds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    k8s_sa_jwt_path: cdktf.stringToTerraform(struct!.k8SSaJwtPath),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigSdsToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigSds | cdktf.IResolvable): any {
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
    k8s_sa_jwt_path: {
      value: cdktf.stringToHclTerraform(struct!.k8SSaJwtPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigSdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigSds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._k8SSaJwtPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SSaJwtPath = this._k8SSaJwtPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigSds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._k8SSaJwtPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._k8SSaJwtPath = value.k8SSaJwtPath;
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

  // k8s_sa_jwt_path - computed: false, optional: true, required: false
  private _k8SSaJwtPath?: string; 
  public get k8SSaJwtPath() {
    return this.getStringAttribute('k8s_sa_jwt_path');
  }
  public set k8SSaJwtPath(value: string) {
    this._k8SSaJwtPath = value;
  }
  public resetK8SSaJwtPath() {
    this._k8SSaJwtPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SSaJwtPathInput() {
    return this._k8SSaJwtPath;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsEnvironment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#default_value DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#name DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsEnvironmentToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsEnvironmentToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
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

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsEnvironment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsEnvironment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._name = value.name;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#default_value DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#name DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsHeaderToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsHeaderToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
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

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._name = value.name;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsLiteral {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#value DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsLiteralToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsLiteral | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsLiteralToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsLiteral | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsLiteralOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsLiteral | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsLiteral | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
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
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#environment DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#environment}
  */
  readonly environment?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsEnvironment;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#header DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#header}
  */
  readonly header?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsHeader;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#literal DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#literal}
  */
  readonly literal?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsLiteral;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsEnvironmentToTerraform(struct!.environment),
    header: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsHeaderToTerraform(struct!.header),
    literal: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsLiteralToTerraform(struct!.literal),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsEnvironmentToHclTerraform(struct!.environment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsEnvironment",
    },
    header: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsHeaderToHclTerraform(struct!.header),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsHeader",
    },
    literal: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsLiteralToHclTerraform(struct!.literal),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsLiteral",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._literal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environment.internalValue = undefined;
      this._header.internalValue = undefined;
      this._literal.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environment.internalValue = value.environment;
      this._header.internalValue = value.header;
      this._literal.internalValue = value.literal;
    }
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsEnvironment) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsHeader) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // literal - computed: false, optional: true, required: false
  private _literal = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsLiteralOutputReference(this, "literal");
  public get literal() {
    return this._literal;
  }
  public putLiteral(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsLiteral) {
    this._literal.internalValue = value;
  }
  public resetLiteral() {
    this._literal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal.internalValue;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingDatadog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#address DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#address}
  */
  readonly address?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingDatadogToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingDatadog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingDatadogToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingDatadog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingDatadogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingDatadog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingDatadog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingLightstep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#access_token DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#address DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#address}
  */
  readonly address?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingLightstepToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingLightstep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingLightstepToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingLightstep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: cdktf.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingLightstepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingLightstep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingLightstep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken = undefined;
      this._address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken = value.accessToken;
      this._address = value.address;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingOpenCensusAgent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#address DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#context DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#context}
  */
  readonly context?: string[];
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingOpenCensusAgentToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingOpenCensusAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    context: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.context),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingOpenCensusAgentToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingOpenCensusAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.context),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingOpenCensusAgentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingOpenCensusAgent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingOpenCensusAgent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._context = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._context = value.context;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // context - computed: false, optional: true, required: false
  private _context?: string[]; 
  public get context() {
    return this.getListAttribute('context');
  }
  public set context(value: string[]) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingStackdriver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#debug DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#max_number_of_annotations DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#max_number_of_annotations}
  */
  readonly maxNumberOfAnnotations?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#max_number_of_attributes DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#max_number_of_attributes}
  */
  readonly maxNumberOfAttributes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#max_number_of_message_events DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#max_number_of_message_events}
  */
  readonly maxNumberOfMessageEvents?: number;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingStackdriverToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingStackdriver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug: cdktf.booleanToTerraform(struct!.debug),
    max_number_of_annotations: cdktf.numberToTerraform(struct!.maxNumberOfAnnotations),
    max_number_of_attributes: cdktf.numberToTerraform(struct!.maxNumberOfAttributes),
    max_number_of_message_events: cdktf.numberToTerraform(struct!.maxNumberOfMessageEvents),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingStackdriverToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingStackdriver | cdktf.IResolvable): any {
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
    max_number_of_annotations: {
      value: cdktf.numberToHclTerraform(struct!.maxNumberOfAnnotations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_number_of_attributes: {
      value: cdktf.numberToHclTerraform(struct!.maxNumberOfAttributes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_number_of_message_events: {
      value: cdktf.numberToHclTerraform(struct!.maxNumberOfMessageEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingStackdriverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingStackdriver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
    }
    if (this._maxNumberOfAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberOfAnnotations = this._maxNumberOfAnnotations;
    }
    if (this._maxNumberOfAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberOfAttributes = this._maxNumberOfAttributes;
    }
    if (this._maxNumberOfMessageEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberOfMessageEvents = this._maxNumberOfMessageEvents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingStackdriver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._debug = undefined;
      this._maxNumberOfAnnotations = undefined;
      this._maxNumberOfAttributes = undefined;
      this._maxNumberOfMessageEvents = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._debug = value.debug;
      this._maxNumberOfAnnotations = value.maxNumberOfAnnotations;
      this._maxNumberOfAttributes = value.maxNumberOfAttributes;
      this._maxNumberOfMessageEvents = value.maxNumberOfMessageEvents;
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

  // max_number_of_annotations - computed: false, optional: true, required: false
  private _maxNumberOfAnnotations?: number; 
  public get maxNumberOfAnnotations() {
    return this.getNumberAttribute('max_number_of_annotations');
  }
  public set maxNumberOfAnnotations(value: number) {
    this._maxNumberOfAnnotations = value;
  }
  public resetMaxNumberOfAnnotations() {
    this._maxNumberOfAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfAnnotationsInput() {
    return this._maxNumberOfAnnotations;
  }

  // max_number_of_attributes - computed: false, optional: true, required: false
  private _maxNumberOfAttributes?: number; 
  public get maxNumberOfAttributes() {
    return this.getNumberAttribute('max_number_of_attributes');
  }
  public set maxNumberOfAttributes(value: number) {
    this._maxNumberOfAttributes = value;
  }
  public resetMaxNumberOfAttributes() {
    this._maxNumberOfAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfAttributesInput() {
    return this._maxNumberOfAttributes;
  }

  // max_number_of_message_events - computed: false, optional: true, required: false
  private _maxNumberOfMessageEvents?: number; 
  public get maxNumberOfMessageEvents() {
    return this.getNumberAttribute('max_number_of_message_events');
  }
  public set maxNumberOfMessageEvents(value: number) {
    this._maxNumberOfMessageEvents = value;
  }
  public resetMaxNumberOfMessageEvents() {
    this._maxNumberOfMessageEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfMessageEventsInput() {
    return this._maxNumberOfMessageEvents;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingTlsSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#ca_certificates DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#ca_certificates}
  */
  readonly caCertificates?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#client_certificate DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#credential_name DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#credential_name}
  */
  readonly credentialName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#insecure_skip_verify DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#mode DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#private_key DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#sni DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#sni}
  */
  readonly sni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#subject_alt_names DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#subject_alt_names}
  */
  readonly subjectAltNames?: string[];
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingTlsSettingsToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingTlsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificates: cdktf.stringToTerraform(struct!.caCertificates),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    credential_name: cdktf.stringToTerraform(struct!.credentialName),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    mode: cdktf.stringToTerraform(struct!.mode),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    sni: cdktf.stringToTerraform(struct!.sni),
    subject_alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectAltNames),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingTlsSettingsToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingTlsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificates: {
      value: cdktf.stringToHclTerraform(struct!.caCertificates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_name: {
      value: cdktf.stringToHclTerraform(struct!.credentialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni: {
      value: cdktf.stringToHclTerraform(struct!.sni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_alt_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjectAltNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingTlsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingTlsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificates = this._caCertificates;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._credentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialName = this._credentialName;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    if (this._subjectAltNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAltNames = this._subjectAltNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingTlsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificates = undefined;
      this._clientCertificate = undefined;
      this._credentialName = undefined;
      this._insecureSkipVerify = undefined;
      this._mode = undefined;
      this._privateKey = undefined;
      this._sni = undefined;
      this._subjectAltNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificates = value.caCertificates;
      this._clientCertificate = value.clientCertificate;
      this._credentialName = value.credentialName;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._mode = value.mode;
      this._privateKey = value.privateKey;
      this._sni = value.sni;
      this._subjectAltNames = value.subjectAltNames;
    }
  }

  // ca_certificates - computed: false, optional: true, required: false
  private _caCertificates?: string; 
  public get caCertificates() {
    return this.getStringAttribute('ca_certificates');
  }
  public set caCertificates(value: string) {
    this._caCertificates = value;
  }
  public resetCaCertificates() {
    this._caCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificatesInput() {
    return this._caCertificates;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // credential_name - computed: false, optional: true, required: false
  private _credentialName?: string; 
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }
  public set credentialName(value: string) {
    this._credentialName = value;
  }
  public resetCredentialName() {
    this._credentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialNameInput() {
    return this._credentialName;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // sni - computed: false, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // subject_alt_names - computed: false, optional: true, required: false
  private _subjectAltNames?: string[]; 
  public get subjectAltNames() {
    return this.getListAttribute('subject_alt_names');
  }
  public set subjectAltNames(value: string[]) {
    this._subjectAltNames = value;
  }
  public resetSubjectAltNames() {
    this._subjectAltNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltNamesInput() {
    return this._subjectAltNames;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingZipkin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#address DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#address}
  */
  readonly address?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingZipkinToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingZipkin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingZipkinToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingZipkin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingZipkinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingZipkin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingZipkin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#custom_tags DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#custom_tags}
  */
  readonly customTags?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTags;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#datadog DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#datadog}
  */
  readonly datadog?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingDatadog;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#lightstep DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#lightstep}
  */
  readonly lightstep?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingLightstep;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#max_path_tag_length DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#max_path_tag_length}
  */
  readonly maxPathTagLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#open_census_agent DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#open_census_agent}
  */
  readonly openCensusAgent?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingOpenCensusAgent;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#sampling DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#sampling}
  */
  readonly sampling?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#stackdriver DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#stackdriver}
  */
  readonly stackdriver?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingStackdriver;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#tls_settings DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#tls_settings}
  */
  readonly tlsSettings?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingTlsSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#zipkin DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#zipkin}
  */
  readonly zipkin?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingZipkin;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_tags: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsToTerraform(struct!.customTags),
    datadog: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingDatadogToTerraform(struct!.datadog),
    lightstep: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingLightstepToTerraform(struct!.lightstep),
    max_path_tag_length: cdktf.numberToTerraform(struct!.maxPathTagLength),
    open_census_agent: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingOpenCensusAgentToTerraform(struct!.openCensusAgent),
    sampling: cdktf.numberToTerraform(struct!.sampling),
    stackdriver: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingStackdriverToTerraform(struct!.stackdriver),
    tls_settings: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingTlsSettingsToTerraform(struct!.tlsSettings),
    zipkin: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingZipkinToTerraform(struct!.zipkin),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_tags: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsToHclTerraform(struct!.customTags),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTags",
    },
    datadog: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingDatadogToHclTerraform(struct!.datadog),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingDatadog",
    },
    lightstep: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingLightstepToHclTerraform(struct!.lightstep),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingLightstep",
    },
    max_path_tag_length: {
      value: cdktf.numberToHclTerraform(struct!.maxPathTagLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    open_census_agent: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingOpenCensusAgentToHclTerraform(struct!.openCensusAgent),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingOpenCensusAgent",
    },
    sampling: {
      value: cdktf.numberToHclTerraform(struct!.sampling),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stackdriver: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingStackdriverToHclTerraform(struct!.stackdriver),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingStackdriver",
    },
    tls_settings: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingTlsSettingsToHclTerraform(struct!.tlsSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingTlsSettings",
    },
    zipkin: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingZipkinToHclTerraform(struct!.zipkin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingZipkin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTags = this._customTags?.internalValue;
    }
    if (this._datadog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadog = this._datadog?.internalValue;
    }
    if (this._lightstep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lightstep = this._lightstep?.internalValue;
    }
    if (this._maxPathTagLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPathTagLength = this._maxPathTagLength;
    }
    if (this._openCensusAgent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openCensusAgent = this._openCensusAgent?.internalValue;
    }
    if (this._sampling !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampling = this._sampling;
    }
    if (this._stackdriver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackdriver = this._stackdriver?.internalValue;
    }
    if (this._tlsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSettings = this._tlsSettings?.internalValue;
    }
    if (this._zipkin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipkin = this._zipkin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customTags.internalValue = undefined;
      this._datadog.internalValue = undefined;
      this._lightstep.internalValue = undefined;
      this._maxPathTagLength = undefined;
      this._openCensusAgent.internalValue = undefined;
      this._sampling = undefined;
      this._stackdriver.internalValue = undefined;
      this._tlsSettings.internalValue = undefined;
      this._zipkin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customTags.internalValue = value.customTags;
      this._datadog.internalValue = value.datadog;
      this._lightstep.internalValue = value.lightstep;
      this._maxPathTagLength = value.maxPathTagLength;
      this._openCensusAgent.internalValue = value.openCensusAgent;
      this._sampling = value.sampling;
      this._stackdriver.internalValue = value.stackdriver;
      this._tlsSettings.internalValue = value.tlsSettings;
      this._zipkin.internalValue = value.zipkin;
    }
  }

  // custom_tags - computed: false, optional: true, required: false
  private _customTags = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTagsOutputReference(this, "custom_tags");
  public get customTags() {
    return this._customTags;
  }
  public putCustomTags(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingCustomTags) {
    this._customTags.internalValue = value;
  }
  public resetCustomTags() {
    this._customTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags.internalValue;
  }

  // datadog - computed: false, optional: true, required: false
  private _datadog = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingDatadogOutputReference(this, "datadog");
  public get datadog() {
    return this._datadog;
  }
  public putDatadog(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingDatadog) {
    this._datadog.internalValue = value;
  }
  public resetDatadog() {
    this._datadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog.internalValue;
  }

  // lightstep - computed: false, optional: true, required: false
  private _lightstep = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingLightstepOutputReference(this, "lightstep");
  public get lightstep() {
    return this._lightstep;
  }
  public putLightstep(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingLightstep) {
    this._lightstep.internalValue = value;
  }
  public resetLightstep() {
    this._lightstep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightstepInput() {
    return this._lightstep.internalValue;
  }

  // max_path_tag_length - computed: false, optional: true, required: false
  private _maxPathTagLength?: number; 
  public get maxPathTagLength() {
    return this.getNumberAttribute('max_path_tag_length');
  }
  public set maxPathTagLength(value: number) {
    this._maxPathTagLength = value;
  }
  public resetMaxPathTagLength() {
    this._maxPathTagLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPathTagLengthInput() {
    return this._maxPathTagLength;
  }

  // open_census_agent - computed: false, optional: true, required: false
  private _openCensusAgent = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingOpenCensusAgentOutputReference(this, "open_census_agent");
  public get openCensusAgent() {
    return this._openCensusAgent;
  }
  public putOpenCensusAgent(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingOpenCensusAgent) {
    this._openCensusAgent.internalValue = value;
  }
  public resetOpenCensusAgent() {
    this._openCensusAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openCensusAgentInput() {
    return this._openCensusAgent.internalValue;
  }

  // sampling - computed: false, optional: true, required: false
  private _sampling?: number; 
  public get sampling() {
    return this.getNumberAttribute('sampling');
  }
  public set sampling(value: number) {
    this._sampling = value;
  }
  public resetSampling() {
    this._sampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingInput() {
    return this._sampling;
  }

  // stackdriver - computed: false, optional: true, required: false
  private _stackdriver = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingStackdriverOutputReference(this, "stackdriver");
  public get stackdriver() {
    return this._stackdriver;
  }
  public putStackdriver(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingStackdriver) {
    this._stackdriver.internalValue = value;
  }
  public resetStackdriver() {
    this._stackdriver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackdriverInput() {
    return this._stackdriver.internalValue;
  }

  // tls_settings - computed: false, optional: true, required: false
  private _tlsSettings = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingTlsSettingsOutputReference(this, "tls_settings");
  public get tlsSettings() {
    return this._tlsSettings;
  }
  public putTlsSettings(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingTlsSettings) {
    this._tlsSettings.internalValue = value;
  }
  public resetTlsSettings() {
    this._tlsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSettingsInput() {
    return this._tlsSettings.internalValue;
  }

  // zipkin - computed: false, optional: true, required: false
  private _zipkin = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingZipkinOutputReference(this, "zipkin");
  public get zipkin() {
    return this._zipkin;
  }
  public putZipkin(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingZipkin) {
    this._zipkin.internalValue = value;
  }
  public resetZipkin() {
    this._zipkin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipkinInput() {
    return this._zipkin.internalValue;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#availability_zone DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#binary_path DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#binary_path}
  */
  readonly binaryPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#ca_certificates_pem DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#ca_certificates_pem}
  */
  readonly caCertificatesPem?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#concurrency DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#config_path DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#config_path}
  */
  readonly configPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#control_plane_auth_policy DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#control_plane_auth_policy}
  */
  readonly controlPlaneAuthPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#custom_config_file DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#custom_config_file}
  */
  readonly customConfigFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#discovery_address DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#discovery_address}
  */
  readonly discoveryAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#discovery_refresh_delay DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#discovery_refresh_delay}
  */
  readonly discoveryRefreshDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#drain_duration DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#drain_duration}
  */
  readonly drainDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#envoy_access_log_service DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#envoy_access_log_service}
  */
  readonly envoyAccessLogService?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogService;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#envoy_metrics_service DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#envoy_metrics_service}
  */
  readonly envoyMetricsService?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsService;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#envoy_metrics_service_address DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#envoy_metrics_service_address}
  */
  readonly envoyMetricsServiceAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#extra_stat_tags DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#extra_stat_tags}
  */
  readonly extraStatTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#gateway_topology DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#gateway_topology}
  */
  readonly gatewayTopology?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigGatewayTopology;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#hold_application_until_proxy_starts DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#hold_application_until_proxy_starts}
  */
  readonly holdApplicationUntilProxyStarts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#image DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#image}
  */
  readonly image?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigImage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#interception_mode DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#interception_mode}
  */
  readonly interceptionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#mesh_id DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#mesh_id}
  */
  readonly meshId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#private_key_provider DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#private_key_provider}
  */
  readonly privateKeyProvider?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#proxy_admin_port DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#proxy_admin_port}
  */
  readonly proxyAdminPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#proxy_bootstrap_template_path DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#proxy_bootstrap_template_path}
  */
  readonly proxyBootstrapTemplatePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#proxy_metadata DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#proxy_metadata}
  */
  readonly proxyMetadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#proxy_stats_matcher DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#proxy_stats_matcher}
  */
  readonly proxyStatsMatcher?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigProxyStatsMatcher;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#readiness_probe DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#readiness_probe}
  */
  readonly readinessProbe?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#runtime_values DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#runtime_values}
  */
  readonly runtimeValues?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#sds DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#sds}
  */
  readonly sds?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigSds;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#service_cluster DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#service_cluster}
  */
  readonly serviceCluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#stat_name_length DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#stat_name_length}
  */
  readonly statNameLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#statsd_udp_address DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#statsd_udp_address}
  */
  readonly statsdUdpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#status_port DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#status_port}
  */
  readonly statusPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#termination_drain_duration DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#termination_drain_duration}
  */
  readonly terminationDrainDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#tracing DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#tracing}
  */
  readonly tracing?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracing;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#tracing_service_name DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#tracing_service_name}
  */
  readonly tracingServiceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#zipkin_address DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#zipkin_address}
  */
  readonly zipkinAddress?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    binary_path: cdktf.stringToTerraform(struct!.binaryPath),
    ca_certificates_pem: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.caCertificatesPem),
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    config_path: cdktf.stringToTerraform(struct!.configPath),
    control_plane_auth_policy: cdktf.stringToTerraform(struct!.controlPlaneAuthPolicy),
    custom_config_file: cdktf.stringToTerraform(struct!.customConfigFile),
    discovery_address: cdktf.stringToTerraform(struct!.discoveryAddress),
    discovery_refresh_delay: cdktf.stringToTerraform(struct!.discoveryRefreshDelay),
    drain_duration: cdktf.stringToTerraform(struct!.drainDuration),
    envoy_access_log_service: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceToTerraform(struct!.envoyAccessLogService),
    envoy_metrics_service: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceToTerraform(struct!.envoyMetricsService),
    envoy_metrics_service_address: cdktf.stringToTerraform(struct!.envoyMetricsServiceAddress),
    extra_stat_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraStatTags),
    gateway_topology: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigGatewayTopologyToTerraform(struct!.gatewayTopology),
    hold_application_until_proxy_starts: cdktf.booleanToTerraform(struct!.holdApplicationUntilProxyStarts),
    image: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigImageToTerraform(struct!.image),
    interception_mode: cdktf.stringToTerraform(struct!.interceptionMode),
    mesh_id: cdktf.stringToTerraform(struct!.meshId),
    private_key_provider: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderToTerraform(struct!.privateKeyProvider),
    proxy_admin_port: cdktf.numberToTerraform(struct!.proxyAdminPort),
    proxy_bootstrap_template_path: cdktf.stringToTerraform(struct!.proxyBootstrapTemplatePath),
    proxy_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.proxyMetadata),
    proxy_stats_matcher: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigProxyStatsMatcherToTerraform(struct!.proxyStatsMatcher),
    readiness_probe: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeToTerraform(struct!.readinessProbe),
    runtime_values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeValues),
    sds: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigSdsToTerraform(struct!.sds),
    service_cluster: cdktf.stringToTerraform(struct!.serviceCluster),
    stat_name_length: cdktf.numberToTerraform(struct!.statNameLength),
    statsd_udp_address: cdktf.stringToTerraform(struct!.statsdUdpAddress),
    status_port: cdktf.numberToTerraform(struct!.statusPort),
    termination_drain_duration: cdktf.stringToTerraform(struct!.terminationDrainDuration),
    tracing: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingToTerraform(struct!.tracing),
    tracing_service_name: cdktf.stringToTerraform(struct!.tracingServiceName),
    zipkin_address: cdktf.stringToTerraform(struct!.zipkinAddress),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    binary_path: {
      value: cdktf.stringToHclTerraform(struct!.binaryPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_certificates_pem: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.caCertificatesPem),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    concurrency: {
      value: cdktf.numberToHclTerraform(struct!.concurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    config_path: {
      value: cdktf.stringToHclTerraform(struct!.configPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    control_plane_auth_policy: {
      value: cdktf.stringToHclTerraform(struct!.controlPlaneAuthPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_config_file: {
      value: cdktf.stringToHclTerraform(struct!.customConfigFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discovery_address: {
      value: cdktf.stringToHclTerraform(struct!.discoveryAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discovery_refresh_delay: {
      value: cdktf.stringToHclTerraform(struct!.discoveryRefreshDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drain_duration: {
      value: cdktf.stringToHclTerraform(struct!.drainDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    envoy_access_log_service: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceToHclTerraform(struct!.envoyAccessLogService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogService",
    },
    envoy_metrics_service: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceToHclTerraform(struct!.envoyMetricsService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsService",
    },
    envoy_metrics_service_address: {
      value: cdktf.stringToHclTerraform(struct!.envoyMetricsServiceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_stat_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraStatTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gateway_topology: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigGatewayTopologyToHclTerraform(struct!.gatewayTopology),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigGatewayTopology",
    },
    hold_application_until_proxy_starts: {
      value: cdktf.booleanToHclTerraform(struct!.holdApplicationUntilProxyStarts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigImage",
    },
    interception_mode: {
      value: cdktf.stringToHclTerraform(struct!.interceptionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mesh_id: {
      value: cdktf.stringToHclTerraform(struct!.meshId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_provider: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderToHclTerraform(struct!.privateKeyProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProvider",
    },
    proxy_admin_port: {
      value: cdktf.numberToHclTerraform(struct!.proxyAdminPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_bootstrap_template_path: {
      value: cdktf.stringToHclTerraform(struct!.proxyBootstrapTemplatePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.proxyMetadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    proxy_stats_matcher: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigProxyStatsMatcherToHclTerraform(struct!.proxyStatsMatcher),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigProxyStatsMatcher",
    },
    readiness_probe: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeToHclTerraform(struct!.readinessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbe",
    },
    runtime_values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.runtimeValues),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    sds: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigSdsToHclTerraform(struct!.sds),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigSds",
    },
    service_cluster: {
      value: cdktf.stringToHclTerraform(struct!.serviceCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stat_name_length: {
      value: cdktf.numberToHclTerraform(struct!.statNameLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    statsd_udp_address: {
      value: cdktf.stringToHclTerraform(struct!.statsdUdpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_port: {
      value: cdktf.numberToHclTerraform(struct!.statusPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    termination_drain_duration: {
      value: cdktf.stringToHclTerraform(struct!.terminationDrainDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracing: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingToHclTerraform(struct!.tracing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracing",
    },
    tracing_service_name: {
      value: cdktf.stringToHclTerraform(struct!.tracingServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zipkin_address: {
      value: cdktf.stringToHclTerraform(struct!.zipkinAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._binaryPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryPath = this._binaryPath;
    }
    if (this._caCertificatesPem !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificatesPem = this._caCertificatesPem;
    }
    if (this._concurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency;
    }
    if (this._configPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.configPath = this._configPath;
    }
    if (this._controlPlaneAuthPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneAuthPolicy = this._controlPlaneAuthPolicy;
    }
    if (this._customConfigFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConfigFile = this._customConfigFile;
    }
    if (this._discoveryAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryAddress = this._discoveryAddress;
    }
    if (this._discoveryRefreshDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryRefreshDelay = this._discoveryRefreshDelay;
    }
    if (this._drainDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainDuration = this._drainDuration;
    }
    if (this._envoyAccessLogService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envoyAccessLogService = this._envoyAccessLogService?.internalValue;
    }
    if (this._envoyMetricsService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envoyMetricsService = this._envoyMetricsService?.internalValue;
    }
    if (this._envoyMetricsServiceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.envoyMetricsServiceAddress = this._envoyMetricsServiceAddress;
    }
    if (this._extraStatTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraStatTags = this._extraStatTags;
    }
    if (this._gatewayTopology?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayTopology = this._gatewayTopology?.internalValue;
    }
    if (this._holdApplicationUntilProxyStarts !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdApplicationUntilProxyStarts = this._holdApplicationUntilProxyStarts;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._interceptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.interceptionMode = this._interceptionMode;
    }
    if (this._meshId !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshId = this._meshId;
    }
    if (this._privateKeyProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyProvider = this._privateKeyProvider?.internalValue;
    }
    if (this._proxyAdminPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAdminPort = this._proxyAdminPort;
    }
    if (this._proxyBootstrapTemplatePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyBootstrapTemplatePath = this._proxyBootstrapTemplatePath;
    }
    if (this._proxyMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyMetadata = this._proxyMetadata;
    }
    if (this._proxyStatsMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyStatsMatcher = this._proxyStatsMatcher?.internalValue;
    }
    if (this._readinessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbe = this._readinessProbe?.internalValue;
    }
    if (this._runtimeValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeValues = this._runtimeValues;
    }
    if (this._sds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sds = this._sds?.internalValue;
    }
    if (this._serviceCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCluster = this._serviceCluster;
    }
    if (this._statNameLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.statNameLength = this._statNameLength;
    }
    if (this._statsdUdpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.statsdUdpAddress = this._statsdUdpAddress;
    }
    if (this._statusPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusPort = this._statusPort;
    }
    if (this._terminationDrainDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationDrainDuration = this._terminationDrainDuration;
    }
    if (this._tracing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracing = this._tracing?.internalValue;
    }
    if (this._tracingServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingServiceName = this._tracingServiceName;
    }
    if (this._zipkinAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipkinAddress = this._zipkinAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._binaryPath = undefined;
      this._caCertificatesPem = undefined;
      this._concurrency = undefined;
      this._configPath = undefined;
      this._controlPlaneAuthPolicy = undefined;
      this._customConfigFile = undefined;
      this._discoveryAddress = undefined;
      this._discoveryRefreshDelay = undefined;
      this._drainDuration = undefined;
      this._envoyAccessLogService.internalValue = undefined;
      this._envoyMetricsService.internalValue = undefined;
      this._envoyMetricsServiceAddress = undefined;
      this._extraStatTags = undefined;
      this._gatewayTopology.internalValue = undefined;
      this._holdApplicationUntilProxyStarts = undefined;
      this._image.internalValue = undefined;
      this._interceptionMode = undefined;
      this._meshId = undefined;
      this._privateKeyProvider.internalValue = undefined;
      this._proxyAdminPort = undefined;
      this._proxyBootstrapTemplatePath = undefined;
      this._proxyMetadata = undefined;
      this._proxyStatsMatcher.internalValue = undefined;
      this._readinessProbe.internalValue = undefined;
      this._runtimeValues = undefined;
      this._sds.internalValue = undefined;
      this._serviceCluster = undefined;
      this._statNameLength = undefined;
      this._statsdUdpAddress = undefined;
      this._statusPort = undefined;
      this._terminationDrainDuration = undefined;
      this._tracing.internalValue = undefined;
      this._tracingServiceName = undefined;
      this._zipkinAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
      this._binaryPath = value.binaryPath;
      this._caCertificatesPem = value.caCertificatesPem;
      this._concurrency = value.concurrency;
      this._configPath = value.configPath;
      this._controlPlaneAuthPolicy = value.controlPlaneAuthPolicy;
      this._customConfigFile = value.customConfigFile;
      this._discoveryAddress = value.discoveryAddress;
      this._discoveryRefreshDelay = value.discoveryRefreshDelay;
      this._drainDuration = value.drainDuration;
      this._envoyAccessLogService.internalValue = value.envoyAccessLogService;
      this._envoyMetricsService.internalValue = value.envoyMetricsService;
      this._envoyMetricsServiceAddress = value.envoyMetricsServiceAddress;
      this._extraStatTags = value.extraStatTags;
      this._gatewayTopology.internalValue = value.gatewayTopology;
      this._holdApplicationUntilProxyStarts = value.holdApplicationUntilProxyStarts;
      this._image.internalValue = value.image;
      this._interceptionMode = value.interceptionMode;
      this._meshId = value.meshId;
      this._privateKeyProvider.internalValue = value.privateKeyProvider;
      this._proxyAdminPort = value.proxyAdminPort;
      this._proxyBootstrapTemplatePath = value.proxyBootstrapTemplatePath;
      this._proxyMetadata = value.proxyMetadata;
      this._proxyStatsMatcher.internalValue = value.proxyStatsMatcher;
      this._readinessProbe.internalValue = value.readinessProbe;
      this._runtimeValues = value.runtimeValues;
      this._sds.internalValue = value.sds;
      this._serviceCluster = value.serviceCluster;
      this._statNameLength = value.statNameLength;
      this._statsdUdpAddress = value.statsdUdpAddress;
      this._statusPort = value.statusPort;
      this._terminationDrainDuration = value.terminationDrainDuration;
      this._tracing.internalValue = value.tracing;
      this._tracingServiceName = value.tracingServiceName;
      this._zipkinAddress = value.zipkinAddress;
    }
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // binary_path - computed: false, optional: true, required: false
  private _binaryPath?: string; 
  public get binaryPath() {
    return this.getStringAttribute('binary_path');
  }
  public set binaryPath(value: string) {
    this._binaryPath = value;
  }
  public resetBinaryPath() {
    this._binaryPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryPathInput() {
    return this._binaryPath;
  }

  // ca_certificates_pem - computed: false, optional: true, required: false
  private _caCertificatesPem?: string[]; 
  public get caCertificatesPem() {
    return this.getListAttribute('ca_certificates_pem');
  }
  public set caCertificatesPem(value: string[]) {
    this._caCertificatesPem = value;
  }
  public resetCaCertificatesPem() {
    this._caCertificatesPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificatesPemInput() {
    return this._caCertificatesPem;
  }

  // concurrency - computed: false, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
  }

  // config_path - computed: false, optional: true, required: false
  private _configPath?: string; 
  public get configPath() {
    return this.getStringAttribute('config_path');
  }
  public set configPath(value: string) {
    this._configPath = value;
  }
  public resetConfigPath() {
    this._configPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configPathInput() {
    return this._configPath;
  }

  // control_plane_auth_policy - computed: false, optional: true, required: false
  private _controlPlaneAuthPolicy?: string; 
  public get controlPlaneAuthPolicy() {
    return this.getStringAttribute('control_plane_auth_policy');
  }
  public set controlPlaneAuthPolicy(value: string) {
    this._controlPlaneAuthPolicy = value;
  }
  public resetControlPlaneAuthPolicy() {
    this._controlPlaneAuthPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneAuthPolicyInput() {
    return this._controlPlaneAuthPolicy;
  }

  // custom_config_file - computed: false, optional: true, required: false
  private _customConfigFile?: string; 
  public get customConfigFile() {
    return this.getStringAttribute('custom_config_file');
  }
  public set customConfigFile(value: string) {
    this._customConfigFile = value;
  }
  public resetCustomConfigFile() {
    this._customConfigFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigFileInput() {
    return this._customConfigFile;
  }

  // discovery_address - computed: false, optional: true, required: false
  private _discoveryAddress?: string; 
  public get discoveryAddress() {
    return this.getStringAttribute('discovery_address');
  }
  public set discoveryAddress(value: string) {
    this._discoveryAddress = value;
  }
  public resetDiscoveryAddress() {
    this._discoveryAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryAddressInput() {
    return this._discoveryAddress;
  }

  // discovery_refresh_delay - computed: false, optional: true, required: false
  private _discoveryRefreshDelay?: string; 
  public get discoveryRefreshDelay() {
    return this.getStringAttribute('discovery_refresh_delay');
  }
  public set discoveryRefreshDelay(value: string) {
    this._discoveryRefreshDelay = value;
  }
  public resetDiscoveryRefreshDelay() {
    this._discoveryRefreshDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryRefreshDelayInput() {
    return this._discoveryRefreshDelay;
  }

  // drain_duration - computed: false, optional: true, required: false
  private _drainDuration?: string; 
  public get drainDuration() {
    return this.getStringAttribute('drain_duration');
  }
  public set drainDuration(value: string) {
    this._drainDuration = value;
  }
  public resetDrainDuration() {
    this._drainDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainDurationInput() {
    return this._drainDuration;
  }

  // envoy_access_log_service - computed: false, optional: true, required: false
  private _envoyAccessLogService = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogServiceOutputReference(this, "envoy_access_log_service");
  public get envoyAccessLogService() {
    return this._envoyAccessLogService;
  }
  public putEnvoyAccessLogService(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyAccessLogService) {
    this._envoyAccessLogService.internalValue = value;
  }
  public resetEnvoyAccessLogService() {
    this._envoyAccessLogService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envoyAccessLogServiceInput() {
    return this._envoyAccessLogService.internalValue;
  }

  // envoy_metrics_service - computed: false, optional: true, required: false
  private _envoyMetricsService = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsServiceOutputReference(this, "envoy_metrics_service");
  public get envoyMetricsService() {
    return this._envoyMetricsService;
  }
  public putEnvoyMetricsService(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigEnvoyMetricsService) {
    this._envoyMetricsService.internalValue = value;
  }
  public resetEnvoyMetricsService() {
    this._envoyMetricsService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envoyMetricsServiceInput() {
    return this._envoyMetricsService.internalValue;
  }

  // envoy_metrics_service_address - computed: false, optional: true, required: false
  private _envoyMetricsServiceAddress?: string; 
  public get envoyMetricsServiceAddress() {
    return this.getStringAttribute('envoy_metrics_service_address');
  }
  public set envoyMetricsServiceAddress(value: string) {
    this._envoyMetricsServiceAddress = value;
  }
  public resetEnvoyMetricsServiceAddress() {
    this._envoyMetricsServiceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envoyMetricsServiceAddressInput() {
    return this._envoyMetricsServiceAddress;
  }

  // extra_stat_tags - computed: false, optional: true, required: false
  private _extraStatTags?: string[]; 
  public get extraStatTags() {
    return this.getListAttribute('extra_stat_tags');
  }
  public set extraStatTags(value: string[]) {
    this._extraStatTags = value;
  }
  public resetExtraStatTags() {
    this._extraStatTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraStatTagsInput() {
    return this._extraStatTags;
  }

  // gateway_topology - computed: false, optional: true, required: false
  private _gatewayTopology = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigGatewayTopologyOutputReference(this, "gateway_topology");
  public get gatewayTopology() {
    return this._gatewayTopology;
  }
  public putGatewayTopology(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigGatewayTopology) {
    this._gatewayTopology.internalValue = value;
  }
  public resetGatewayTopology() {
    this._gatewayTopology.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayTopologyInput() {
    return this._gatewayTopology.internalValue;
  }

  // hold_application_until_proxy_starts - computed: false, optional: true, required: false
  private _holdApplicationUntilProxyStarts?: boolean | cdktf.IResolvable; 
  public get holdApplicationUntilProxyStarts() {
    return this.getBooleanAttribute('hold_application_until_proxy_starts');
  }
  public set holdApplicationUntilProxyStarts(value: boolean | cdktf.IResolvable) {
    this._holdApplicationUntilProxyStarts = value;
  }
  public resetHoldApplicationUntilProxyStarts() {
    this._holdApplicationUntilProxyStarts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdApplicationUntilProxyStartsInput() {
    return this._holdApplicationUntilProxyStarts;
  }

  // image - computed: false, optional: true, required: false
  private _image = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // interception_mode - computed: false, optional: true, required: false
  private _interceptionMode?: string; 
  public get interceptionMode() {
    return this.getStringAttribute('interception_mode');
  }
  public set interceptionMode(value: string) {
    this._interceptionMode = value;
  }
  public resetInterceptionMode() {
    this._interceptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interceptionModeInput() {
    return this._interceptionMode;
  }

  // mesh_id - computed: false, optional: true, required: false
  private _meshId?: string; 
  public get meshId() {
    return this.getStringAttribute('mesh_id');
  }
  public set meshId(value: string) {
    this._meshId = value;
  }
  public resetMeshId() {
    this._meshId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshIdInput() {
    return this._meshId;
  }

  // private_key_provider - computed: false, optional: true, required: false
  private _privateKeyProvider = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProviderOutputReference(this, "private_key_provider");
  public get privateKeyProvider() {
    return this._privateKeyProvider;
  }
  public putPrivateKeyProvider(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigPrivateKeyProvider) {
    this._privateKeyProvider.internalValue = value;
  }
  public resetPrivateKeyProvider() {
    this._privateKeyProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyProviderInput() {
    return this._privateKeyProvider.internalValue;
  }

  // proxy_admin_port - computed: false, optional: true, required: false
  private _proxyAdminPort?: number; 
  public get proxyAdminPort() {
    return this.getNumberAttribute('proxy_admin_port');
  }
  public set proxyAdminPort(value: number) {
    this._proxyAdminPort = value;
  }
  public resetProxyAdminPort() {
    this._proxyAdminPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAdminPortInput() {
    return this._proxyAdminPort;
  }

  // proxy_bootstrap_template_path - computed: false, optional: true, required: false
  private _proxyBootstrapTemplatePath?: string; 
  public get proxyBootstrapTemplatePath() {
    return this.getStringAttribute('proxy_bootstrap_template_path');
  }
  public set proxyBootstrapTemplatePath(value: string) {
    this._proxyBootstrapTemplatePath = value;
  }
  public resetProxyBootstrapTemplatePath() {
    this._proxyBootstrapTemplatePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyBootstrapTemplatePathInput() {
    return this._proxyBootstrapTemplatePath;
  }

  // proxy_metadata - computed: false, optional: true, required: false
  private _proxyMetadata?: { [key: string]: string }; 
  public get proxyMetadata() {
    return this.getStringMapAttribute('proxy_metadata');
  }
  public set proxyMetadata(value: { [key: string]: string }) {
    this._proxyMetadata = value;
  }
  public resetProxyMetadata() {
    this._proxyMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyMetadataInput() {
    return this._proxyMetadata;
  }

  // proxy_stats_matcher - computed: false, optional: true, required: false
  private _proxyStatsMatcher = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigProxyStatsMatcherOutputReference(this, "proxy_stats_matcher");
  public get proxyStatsMatcher() {
    return this._proxyStatsMatcher;
  }
  public putProxyStatsMatcher(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigProxyStatsMatcher) {
    this._proxyStatsMatcher.internalValue = value;
  }
  public resetProxyStatsMatcher() {
    this._proxyStatsMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyStatsMatcherInput() {
    return this._proxyStatsMatcher.internalValue;
  }

  // readiness_probe - computed: false, optional: true, required: false
  private _readinessProbe = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbeOutputReference(this, "readiness_probe");
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigReadinessProbe) {
    this._readinessProbe.internalValue = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe.internalValue;
  }

  // runtime_values - computed: false, optional: true, required: false
  private _runtimeValues?: { [key: string]: string }; 
  public get runtimeValues() {
    return this.getStringMapAttribute('runtime_values');
  }
  public set runtimeValues(value: { [key: string]: string }) {
    this._runtimeValues = value;
  }
  public resetRuntimeValues() {
    this._runtimeValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeValuesInput() {
    return this._runtimeValues;
  }

  // sds - computed: false, optional: true, required: false
  private _sds = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigSdsOutputReference(this, "sds");
  public get sds() {
    return this._sds;
  }
  public putSds(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigSds) {
    this._sds.internalValue = value;
  }
  public resetSds() {
    this._sds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsInput() {
    return this._sds.internalValue;
  }

  // service_cluster - computed: false, optional: true, required: false
  private _serviceCluster?: string; 
  public get serviceCluster() {
    return this.getStringAttribute('service_cluster');
  }
  public set serviceCluster(value: string) {
    this._serviceCluster = value;
  }
  public resetServiceCluster() {
    this._serviceCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceClusterInput() {
    return this._serviceCluster;
  }

  // stat_name_length - computed: false, optional: true, required: false
  private _statNameLength?: number; 
  public get statNameLength() {
    return this.getNumberAttribute('stat_name_length');
  }
  public set statNameLength(value: number) {
    this._statNameLength = value;
  }
  public resetStatNameLength() {
    this._statNameLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statNameLengthInput() {
    return this._statNameLength;
  }

  // statsd_udp_address - computed: false, optional: true, required: false
  private _statsdUdpAddress?: string; 
  public get statsdUdpAddress() {
    return this.getStringAttribute('statsd_udp_address');
  }
  public set statsdUdpAddress(value: string) {
    this._statsdUdpAddress = value;
  }
  public resetStatsdUdpAddress() {
    this._statsdUdpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsdUdpAddressInput() {
    return this._statsdUdpAddress;
  }

  // status_port - computed: false, optional: true, required: false
  private _statusPort?: number; 
  public get statusPort() {
    return this.getNumberAttribute('status_port');
  }
  public set statusPort(value: number) {
    this._statusPort = value;
  }
  public resetStatusPort() {
    this._statusPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusPortInput() {
    return this._statusPort;
  }

  // termination_drain_duration - computed: false, optional: true, required: false
  private _terminationDrainDuration?: string; 
  public get terminationDrainDuration() {
    return this.getStringAttribute('termination_drain_duration');
  }
  public set terminationDrainDuration(value: string) {
    this._terminationDrainDuration = value;
  }
  public resetTerminationDrainDuration() {
    this._terminationDrainDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationDrainDurationInput() {
    return this._terminationDrainDuration;
  }

  // tracing - computed: false, optional: true, required: false
  private _tracing = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracingOutputReference(this, "tracing");
  public get tracing() {
    return this._tracing;
  }
  public putTracing(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigTracing) {
    this._tracing.internalValue = value;
  }
  public resetTracing() {
    this._tracing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingInput() {
    return this._tracing.internalValue;
  }

  // tracing_service_name - computed: false, optional: true, required: false
  private _tracingServiceName?: string; 
  public get tracingServiceName() {
    return this.getStringAttribute('tracing_service_name');
  }
  public set tracingServiceName(value: string) {
    this._tracingServiceName = value;
  }
  public resetTracingServiceName() {
    this._tracingServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingServiceNameInput() {
    return this._tracingServiceName;
  }

  // zipkin_address - computed: false, optional: true, required: false
  private _zipkinAddress?: string; 
  public get zipkinAddress() {
    return this.getStringAttribute('zipkin_address');
  }
  public set zipkinAddress(value: string) {
    this._zipkinAddress = value;
  }
  public resetZipkinAddress() {
    this._zipkinAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipkinAddressInput() {
    return this._zipkinAddress;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultHttpRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#attempts DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#attempts}
  */
  readonly attempts: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#per_try_timeout DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#per_try_timeout}
  */
  readonly perTryTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#retry_on DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#retry_on}
  */
  readonly retryOn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#retry_remote_localities DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#retry_remote_localities}
  */
  readonly retryRemoteLocalities?: boolean | cdktf.IResolvable;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultHttpRetryPolicyToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultHttpRetryPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attempts: cdktf.numberToTerraform(struct!.attempts),
    per_try_timeout: cdktf.stringToTerraform(struct!.perTryTimeout),
    retry_on: cdktf.stringToTerraform(struct!.retryOn),
    retry_remote_localities: cdktf.booleanToTerraform(struct!.retryRemoteLocalities),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultHttpRetryPolicyToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultHttpRetryPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attempts: {
      value: cdktf.numberToHclTerraform(struct!.attempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_try_timeout: {
      value: cdktf.stringToHclTerraform(struct!.perTryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_on: {
      value: cdktf.stringToHclTerraform(struct!.retryOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_remote_localities: {
      value: cdktf.booleanToHclTerraform(struct!.retryRemoteLocalities),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultHttpRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultHttpRetryPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.attempts = this._attempts;
    }
    if (this._perTryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.perTryTimeout = this._perTryTimeout;
    }
    if (this._retryOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryOn = this._retryOn;
    }
    if (this._retryRemoteLocalities !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryRemoteLocalities = this._retryRemoteLocalities;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultHttpRetryPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attempts = undefined;
      this._perTryTimeout = undefined;
      this._retryOn = undefined;
      this._retryRemoteLocalities = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attempts = value.attempts;
      this._perTryTimeout = value.perTryTimeout;
      this._retryOn = value.retryOn;
      this._retryRemoteLocalities = value.retryRemoteLocalities;
    }
  }

  // attempts - computed: false, optional: false, required: true
  private _attempts?: number; 
  public get attempts() {
    return this.getNumberAttribute('attempts');
  }
  public set attempts(value: number) {
    this._attempts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptsInput() {
    return this._attempts;
  }

  // per_try_timeout - computed: false, optional: true, required: false
  private _perTryTimeout?: string; 
  public get perTryTimeout() {
    return this.getStringAttribute('per_try_timeout');
  }
  public set perTryTimeout(value: string) {
    this._perTryTimeout = value;
  }
  public resetPerTryTimeout() {
    this._perTryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTryTimeoutInput() {
    return this._perTryTimeout;
  }

  // retry_on - computed: false, optional: true, required: false
  private _retryOn?: string; 
  public get retryOn() {
    return this.getStringAttribute('retry_on');
  }
  public set retryOn(value: string) {
    this._retryOn = value;
  }
  public resetRetryOn() {
    this._retryOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnInput() {
    return this._retryOn;
  }

  // retry_remote_localities - computed: false, optional: true, required: false
  private _retryRemoteLocalities?: boolean | cdktf.IResolvable; 
  public get retryRemoteLocalities() {
    return this.getBooleanAttribute('retry_remote_localities');
  }
  public set retryRemoteLocalities(value: boolean | cdktf.IResolvable) {
    this._retryRemoteLocalities = value;
  }
  public resetRetryRemoteLocalities() {
    this._retryRemoteLocalities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryRemoteLocalitiesInput() {
    return this._retryRemoteLocalities;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultProviders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#access_logging DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#access_logging}
  */
  readonly accessLogging?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#metrics DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#metrics}
  */
  readonly metrics?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#tracing DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#tracing}
  */
  readonly tracing?: string[];
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultProvidersToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_logging: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessLogging),
    metrics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metrics),
    tracing: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tracing),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultProvidersToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_logging: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessLogging),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metrics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.metrics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tracing: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tracing),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultProvidersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLogging = this._accessLogging;
    }
    if (this._metrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics;
    }
    if (this._tracing !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracing = this._tracing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLogging = undefined;
      this._metrics = undefined;
      this._tracing = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLogging = value.accessLogging;
      this._metrics = value.metrics;
      this._tracing = value.tracing;
    }
  }

  // access_logging - computed: false, optional: true, required: false
  private _accessLogging?: string[]; 
  public get accessLogging() {
    return this.getListAttribute('access_logging');
  }
  public set accessLogging(value: string[]) {
    this._accessLogging = value;
  }
  public resetAccessLogging() {
    this._accessLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLoggingInput() {
    return this._accessLogging;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics?: string[]; 
  public get metrics() {
    return this.getListAttribute('metrics');
  }
  public set metrics(value: string[]) {
    this._metrics = value;
  }
  public resetMetrics() {
    this._metrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics;
  }

  // tracing - computed: false, optional: true, required: false
  private _tracing?: string[]; 
  public get tracing() {
    return this.getListAttribute('tracing');
  }
  public set tracing(value: string[]) {
    this._tracing = value;
  }
  public resetTracing() {
    this._tracing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingInput() {
    return this._tracing;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#key DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#operator DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#values DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsMatchExpressionsToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsMatchExpressionsToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsMatchExpressionsOutputReference {
    return new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#match_expressions DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#match_labels DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsOutputReference {
    return new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersDatadog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#max_tag_length DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#max_tag_length}
  */
  readonly maxTagLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#port DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#service DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersDatadogToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersDatadog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_tag_length: cdktf.numberToTerraform(struct!.maxTagLength),
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersDatadogToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersDatadog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_tag_length: {
      value: cdktf.numberToHclTerraform(struct!.maxTagLength),
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
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersDatadogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersDatadog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxTagLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTagLength = this._maxTagLength;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersDatadog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxTagLength = undefined;
      this._port = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxTagLength = value.maxTagLength;
      this._port = value.port;
      this._service = value.service;
    }
  }

  // max_tag_length - computed: false, optional: true, required: false
  private _maxTagLength?: number; 
  public get maxTagLength() {
    return this.getNumberAttribute('max_tag_length');
  }
  public set maxTagLength(value: number) {
    this._maxTagLength = value;
  }
  public resetMaxTagLength() {
    this._maxTagLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTagLengthInput() {
    return this._maxTagLength;
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpcIncludeRequestBodyInCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#allow_partial_message DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#allow_partial_message}
  */
  readonly allowPartialMessage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#max_request_bytes DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#max_request_bytes}
  */
  readonly maxRequestBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#pack_as_bytes DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#pack_as_bytes}
  */
  readonly packAsBytes?: boolean | cdktf.IResolvable;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpcIncludeRequestBodyInCheckToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpcIncludeRequestBodyInCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_partial_message: cdktf.booleanToTerraform(struct!.allowPartialMessage),
    max_request_bytes: cdktf.numberToTerraform(struct!.maxRequestBytes),
    pack_as_bytes: cdktf.booleanToTerraform(struct!.packAsBytes),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpcIncludeRequestBodyInCheckToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpcIncludeRequestBodyInCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_partial_message: {
      value: cdktf.booleanToHclTerraform(struct!.allowPartialMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_request_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pack_as_bytes: {
      value: cdktf.booleanToHclTerraform(struct!.packAsBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpcIncludeRequestBodyInCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpcIncludeRequestBodyInCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPartialMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPartialMessage = this._allowPartialMessage;
    }
    if (this._maxRequestBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestBytes = this._maxRequestBytes;
    }
    if (this._packAsBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.packAsBytes = this._packAsBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpcIncludeRequestBodyInCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPartialMessage = undefined;
      this._maxRequestBytes = undefined;
      this._packAsBytes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPartialMessage = value.allowPartialMessage;
      this._maxRequestBytes = value.maxRequestBytes;
      this._packAsBytes = value.packAsBytes;
    }
  }

  // allow_partial_message - computed: false, optional: true, required: false
  private _allowPartialMessage?: boolean | cdktf.IResolvable; 
  public get allowPartialMessage() {
    return this.getBooleanAttribute('allow_partial_message');
  }
  public set allowPartialMessage(value: boolean | cdktf.IResolvable) {
    this._allowPartialMessage = value;
  }
  public resetAllowPartialMessage() {
    this._allowPartialMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPartialMessageInput() {
    return this._allowPartialMessage;
  }

  // max_request_bytes - computed: false, optional: true, required: false
  private _maxRequestBytes?: number; 
  public get maxRequestBytes() {
    return this.getNumberAttribute('max_request_bytes');
  }
  public set maxRequestBytes(value: number) {
    this._maxRequestBytes = value;
  }
  public resetMaxRequestBytes() {
    this._maxRequestBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestBytesInput() {
    return this._maxRequestBytes;
  }

  // pack_as_bytes - computed: false, optional: true, required: false
  private _packAsBytes?: boolean | cdktf.IResolvable; 
  public get packAsBytes() {
    return this.getBooleanAttribute('pack_as_bytes');
  }
  public set packAsBytes(value: boolean | cdktf.IResolvable) {
    this._packAsBytes = value;
  }
  public resetPackAsBytes() {
    this._packAsBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packAsBytesInput() {
    return this._packAsBytes;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#fail_open DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#fail_open}
  */
  readonly failOpen?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#include_request_body_in_check DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#include_request_body_in_check}
  */
  readonly includeRequestBodyInCheck?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpcIncludeRequestBodyInCheck;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#port DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#service DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#status_on_error DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#status_on_error}
  */
  readonly statusOnError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#timeout DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpcToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_open: cdktf.booleanToTerraform(struct!.failOpen),
    include_request_body_in_check: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpcIncludeRequestBodyInCheckToTerraform(struct!.includeRequestBodyInCheck),
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
    status_on_error: cdktf.stringToTerraform(struct!.statusOnError),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpcToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_open: {
      value: cdktf.booleanToHclTerraform(struct!.failOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_request_body_in_check: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpcIncludeRequestBodyInCheckToHclTerraform(struct!.includeRequestBodyInCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpcIncludeRequestBodyInCheck",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_on_error: {
      value: cdktf.stringToHclTerraform(struct!.statusOnError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOpen = this._failOpen;
    }
    if (this._includeRequestBodyInCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRequestBodyInCheck = this._includeRequestBodyInCheck?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._statusOnError !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusOnError = this._statusOnError;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failOpen = undefined;
      this._includeRequestBodyInCheck.internalValue = undefined;
      this._port = undefined;
      this._service = undefined;
      this._statusOnError = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failOpen = value.failOpen;
      this._includeRequestBodyInCheck.internalValue = value.includeRequestBodyInCheck;
      this._port = value.port;
      this._service = value.service;
      this._statusOnError = value.statusOnError;
      this._timeout = value.timeout;
    }
  }

  // fail_open - computed: false, optional: true, required: false
  private _failOpen?: boolean | cdktf.IResolvable; 
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }
  public set failOpen(value: boolean | cdktf.IResolvable) {
    this._failOpen = value;
  }
  public resetFailOpen() {
    this._failOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOpenInput() {
    return this._failOpen;
  }

  // include_request_body_in_check - computed: false, optional: true, required: false
  private _includeRequestBodyInCheck = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpcIncludeRequestBodyInCheckOutputReference(this, "include_request_body_in_check");
  public get includeRequestBodyInCheck() {
    return this._includeRequestBodyInCheck;
  }
  public putIncludeRequestBodyInCheck(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpcIncludeRequestBodyInCheck) {
    this._includeRequestBodyInCheck.internalValue = value;
  }
  public resetIncludeRequestBodyInCheck() {
    this._includeRequestBodyInCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRequestBodyInCheckInput() {
    return this._includeRequestBodyInCheck.internalValue;
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // status_on_error - computed: false, optional: true, required: false
  private _statusOnError?: string; 
  public get statusOnError() {
    return this.getStringAttribute('status_on_error');
  }
  public set statusOnError(value: string) {
    this._statusOnError = value;
  }
  public resetStatusOnError() {
    this._statusOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusOnErrorInput() {
    return this._statusOnError;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttpIncludeRequestBodyInCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#allow_partial_message DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#allow_partial_message}
  */
  readonly allowPartialMessage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#max_request_bytes DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#max_request_bytes}
  */
  readonly maxRequestBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#pack_as_bytes DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#pack_as_bytes}
  */
  readonly packAsBytes?: boolean | cdktf.IResolvable;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttpIncludeRequestBodyInCheckToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttpIncludeRequestBodyInCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_partial_message: cdktf.booleanToTerraform(struct!.allowPartialMessage),
    max_request_bytes: cdktf.numberToTerraform(struct!.maxRequestBytes),
    pack_as_bytes: cdktf.booleanToTerraform(struct!.packAsBytes),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttpIncludeRequestBodyInCheckToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttpIncludeRequestBodyInCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_partial_message: {
      value: cdktf.booleanToHclTerraform(struct!.allowPartialMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_request_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pack_as_bytes: {
      value: cdktf.booleanToHclTerraform(struct!.packAsBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttpIncludeRequestBodyInCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttpIncludeRequestBodyInCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPartialMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPartialMessage = this._allowPartialMessage;
    }
    if (this._maxRequestBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestBytes = this._maxRequestBytes;
    }
    if (this._packAsBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.packAsBytes = this._packAsBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttpIncludeRequestBodyInCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPartialMessage = undefined;
      this._maxRequestBytes = undefined;
      this._packAsBytes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPartialMessage = value.allowPartialMessage;
      this._maxRequestBytes = value.maxRequestBytes;
      this._packAsBytes = value.packAsBytes;
    }
  }

  // allow_partial_message - computed: false, optional: true, required: false
  private _allowPartialMessage?: boolean | cdktf.IResolvable; 
  public get allowPartialMessage() {
    return this.getBooleanAttribute('allow_partial_message');
  }
  public set allowPartialMessage(value: boolean | cdktf.IResolvable) {
    this._allowPartialMessage = value;
  }
  public resetAllowPartialMessage() {
    this._allowPartialMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPartialMessageInput() {
    return this._allowPartialMessage;
  }

  // max_request_bytes - computed: false, optional: true, required: false
  private _maxRequestBytes?: number; 
  public get maxRequestBytes() {
    return this.getNumberAttribute('max_request_bytes');
  }
  public set maxRequestBytes(value: number) {
    this._maxRequestBytes = value;
  }
  public resetMaxRequestBytes() {
    this._maxRequestBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestBytesInput() {
    return this._maxRequestBytes;
  }

  // pack_as_bytes - computed: false, optional: true, required: false
  private _packAsBytes?: boolean | cdktf.IResolvable; 
  public get packAsBytes() {
    return this.getBooleanAttribute('pack_as_bytes');
  }
  public set packAsBytes(value: boolean | cdktf.IResolvable) {
    this._packAsBytes = value;
  }
  public resetPackAsBytes() {
    this._packAsBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packAsBytesInput() {
    return this._packAsBytes;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#fail_open DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#fail_open}
  */
  readonly failOpen?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#headers_to_downstream_on_allow DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#headers_to_downstream_on_allow}
  */
  readonly headersToDownstreamOnAllow?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#headers_to_downstream_on_deny DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#headers_to_downstream_on_deny}
  */
  readonly headersToDownstreamOnDeny?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#headers_to_upstream_on_allow DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#headers_to_upstream_on_allow}
  */
  readonly headersToUpstreamOnAllow?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#include_additional_headers_in_check DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#include_additional_headers_in_check}
  */
  readonly includeAdditionalHeadersInCheck?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#include_headers_in_check DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#include_headers_in_check}
  */
  readonly includeHeadersInCheck?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#include_request_body_in_check DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#include_request_body_in_check}
  */
  readonly includeRequestBodyInCheck?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttpIncludeRequestBodyInCheck;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#include_request_headers_in_check DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#include_request_headers_in_check}
  */
  readonly includeRequestHeadersInCheck?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#path_prefix DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#path_prefix}
  */
  readonly pathPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#port DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#service DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#status_on_error DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#status_on_error}
  */
  readonly statusOnError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#timeout DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttpToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_open: cdktf.booleanToTerraform(struct!.failOpen),
    headers_to_downstream_on_allow: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headersToDownstreamOnAllow),
    headers_to_downstream_on_deny: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headersToDownstreamOnDeny),
    headers_to_upstream_on_allow: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headersToUpstreamOnAllow),
    include_additional_headers_in_check: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.includeAdditionalHeadersInCheck),
    include_headers_in_check: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeHeadersInCheck),
    include_request_body_in_check: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttpIncludeRequestBodyInCheckToTerraform(struct!.includeRequestBodyInCheck),
    include_request_headers_in_check: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeRequestHeadersInCheck),
    path_prefix: cdktf.stringToTerraform(struct!.pathPrefix),
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
    status_on_error: cdktf.stringToTerraform(struct!.statusOnError),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttpToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_open: {
      value: cdktf.booleanToHclTerraform(struct!.failOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headers_to_downstream_on_allow: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headersToDownstreamOnAllow),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    headers_to_downstream_on_deny: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headersToDownstreamOnDeny),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    headers_to_upstream_on_allow: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headersToUpstreamOnAllow),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_additional_headers_in_check: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.includeAdditionalHeadersInCheck),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    include_headers_in_check: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeHeadersInCheck),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_request_body_in_check: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttpIncludeRequestBodyInCheckToHclTerraform(struct!.includeRequestBodyInCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttpIncludeRequestBodyInCheck",
    },
    include_request_headers_in_check: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeRequestHeadersInCheck),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path_prefix: {
      value: cdktf.stringToHclTerraform(struct!.pathPrefix),
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
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_on_error: {
      value: cdktf.stringToHclTerraform(struct!.statusOnError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOpen = this._failOpen;
    }
    if (this._headersToDownstreamOnAllow !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersToDownstreamOnAllow = this._headersToDownstreamOnAllow;
    }
    if (this._headersToDownstreamOnDeny !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersToDownstreamOnDeny = this._headersToDownstreamOnDeny;
    }
    if (this._headersToUpstreamOnAllow !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersToUpstreamOnAllow = this._headersToUpstreamOnAllow;
    }
    if (this._includeAdditionalHeadersInCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAdditionalHeadersInCheck = this._includeAdditionalHeadersInCheck;
    }
    if (this._includeHeadersInCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeHeadersInCheck = this._includeHeadersInCheck;
    }
    if (this._includeRequestBodyInCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRequestBodyInCheck = this._includeRequestBodyInCheck?.internalValue;
    }
    if (this._includeRequestHeadersInCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRequestHeadersInCheck = this._includeRequestHeadersInCheck;
    }
    if (this._pathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefix = this._pathPrefix;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._statusOnError !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusOnError = this._statusOnError;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failOpen = undefined;
      this._headersToDownstreamOnAllow = undefined;
      this._headersToDownstreamOnDeny = undefined;
      this._headersToUpstreamOnAllow = undefined;
      this._includeAdditionalHeadersInCheck = undefined;
      this._includeHeadersInCheck = undefined;
      this._includeRequestBodyInCheck.internalValue = undefined;
      this._includeRequestHeadersInCheck = undefined;
      this._pathPrefix = undefined;
      this._port = undefined;
      this._service = undefined;
      this._statusOnError = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failOpen = value.failOpen;
      this._headersToDownstreamOnAllow = value.headersToDownstreamOnAllow;
      this._headersToDownstreamOnDeny = value.headersToDownstreamOnDeny;
      this._headersToUpstreamOnAllow = value.headersToUpstreamOnAllow;
      this._includeAdditionalHeadersInCheck = value.includeAdditionalHeadersInCheck;
      this._includeHeadersInCheck = value.includeHeadersInCheck;
      this._includeRequestBodyInCheck.internalValue = value.includeRequestBodyInCheck;
      this._includeRequestHeadersInCheck = value.includeRequestHeadersInCheck;
      this._pathPrefix = value.pathPrefix;
      this._port = value.port;
      this._service = value.service;
      this._statusOnError = value.statusOnError;
      this._timeout = value.timeout;
    }
  }

  // fail_open - computed: false, optional: true, required: false
  private _failOpen?: boolean | cdktf.IResolvable; 
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }
  public set failOpen(value: boolean | cdktf.IResolvable) {
    this._failOpen = value;
  }
  public resetFailOpen() {
    this._failOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOpenInput() {
    return this._failOpen;
  }

  // headers_to_downstream_on_allow - computed: false, optional: true, required: false
  private _headersToDownstreamOnAllow?: string[]; 
  public get headersToDownstreamOnAllow() {
    return this.getListAttribute('headers_to_downstream_on_allow');
  }
  public set headersToDownstreamOnAllow(value: string[]) {
    this._headersToDownstreamOnAllow = value;
  }
  public resetHeadersToDownstreamOnAllow() {
    this._headersToDownstreamOnAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersToDownstreamOnAllowInput() {
    return this._headersToDownstreamOnAllow;
  }

  // headers_to_downstream_on_deny - computed: false, optional: true, required: false
  private _headersToDownstreamOnDeny?: string[]; 
  public get headersToDownstreamOnDeny() {
    return this.getListAttribute('headers_to_downstream_on_deny');
  }
  public set headersToDownstreamOnDeny(value: string[]) {
    this._headersToDownstreamOnDeny = value;
  }
  public resetHeadersToDownstreamOnDeny() {
    this._headersToDownstreamOnDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersToDownstreamOnDenyInput() {
    return this._headersToDownstreamOnDeny;
  }

  // headers_to_upstream_on_allow - computed: false, optional: true, required: false
  private _headersToUpstreamOnAllow?: string[]; 
  public get headersToUpstreamOnAllow() {
    return this.getListAttribute('headers_to_upstream_on_allow');
  }
  public set headersToUpstreamOnAllow(value: string[]) {
    this._headersToUpstreamOnAllow = value;
  }
  public resetHeadersToUpstreamOnAllow() {
    this._headersToUpstreamOnAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersToUpstreamOnAllowInput() {
    return this._headersToUpstreamOnAllow;
  }

  // include_additional_headers_in_check - computed: false, optional: true, required: false
  private _includeAdditionalHeadersInCheck?: { [key: string]: string }; 
  public get includeAdditionalHeadersInCheck() {
    return this.getStringMapAttribute('include_additional_headers_in_check');
  }
  public set includeAdditionalHeadersInCheck(value: { [key: string]: string }) {
    this._includeAdditionalHeadersInCheck = value;
  }
  public resetIncludeAdditionalHeadersInCheck() {
    this._includeAdditionalHeadersInCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAdditionalHeadersInCheckInput() {
    return this._includeAdditionalHeadersInCheck;
  }

  // include_headers_in_check - computed: false, optional: true, required: false
  private _includeHeadersInCheck?: string[]; 
  public get includeHeadersInCheck() {
    return this.getListAttribute('include_headers_in_check');
  }
  public set includeHeadersInCheck(value: string[]) {
    this._includeHeadersInCheck = value;
  }
  public resetIncludeHeadersInCheck() {
    this._includeHeadersInCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHeadersInCheckInput() {
    return this._includeHeadersInCheck;
  }

  // include_request_body_in_check - computed: false, optional: true, required: false
  private _includeRequestBodyInCheck = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttpIncludeRequestBodyInCheckOutputReference(this, "include_request_body_in_check");
  public get includeRequestBodyInCheck() {
    return this._includeRequestBodyInCheck;
  }
  public putIncludeRequestBodyInCheck(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttpIncludeRequestBodyInCheck) {
    this._includeRequestBodyInCheck.internalValue = value;
  }
  public resetIncludeRequestBodyInCheck() {
    this._includeRequestBodyInCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRequestBodyInCheckInput() {
    return this._includeRequestBodyInCheck.internalValue;
  }

  // include_request_headers_in_check - computed: false, optional: true, required: false
  private _includeRequestHeadersInCheck?: string[]; 
  public get includeRequestHeadersInCheck() {
    return this.getListAttribute('include_request_headers_in_check');
  }
  public set includeRequestHeadersInCheck(value: string[]) {
    this._includeRequestHeadersInCheck = value;
  }
  public resetIncludeRequestHeadersInCheck() {
    this._includeRequestHeadersInCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRequestHeadersInCheckInput() {
    return this._includeRequestHeadersInCheck;
  }

  // path_prefix - computed: false, optional: true, required: false
  private _pathPrefix?: string; 
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }
  public set pathPrefix(value: string) {
    this._pathPrefix = value;
  }
  public resetPathPrefix() {
    this._pathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixInput() {
    return this._pathPrefix;
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // status_on_error - computed: false, optional: true, required: false
  private _statusOnError?: string; 
  public get statusOnError() {
    return this.getStringAttribute('status_on_error');
  }
  public set statusOnError(value: string) {
    this._statusOnError = value;
  }
  public resetStatusOnError() {
    this._statusOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusOnErrorInput() {
    return this._statusOnError;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLogLogFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#labels DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#text DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLogLogFormatToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLogLogFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLogLogFormatToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLogLogFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLogLogFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLogLogFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLogLogFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._text = value.text;
    }
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

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#log_format DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#log_format}
  */
  readonly logFormat?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLogLogFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#path DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLogToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_format: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLogLogFormatToTerraform(struct!.logFormat),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLogToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_format: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLogLogFormatToHclTerraform(struct!.logFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLogLogFormat",
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

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logFormat.internalValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logFormat.internalValue = value.logFormat;
      this._path = value.path;
    }
  }

  // log_format - computed: false, optional: true, required: false
  private _logFormat = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLogLogFormatOutputReference(this, "log_format");
  public get logFormat() {
    return this._logFormat;
  }
  public putLogFormat(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLogLogFormat) {
    this._logFormat.internalValue = value;
  }
  public resetLogFormat() {
    this._logFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyHttpAls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#additional_request_headers_to_log DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#additional_request_headers_to_log}
  */
  readonly additionalRequestHeadersToLog?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#additional_response_headers_to_log DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#additional_response_headers_to_log}
  */
  readonly additionalResponseHeadersToLog?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#additional_response_trailers_to_log DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#additional_response_trailers_to_log}
  */
  readonly additionalResponseTrailersToLog?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#filter_state_objects_to_log DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#filter_state_objects_to_log}
  */
  readonly filterStateObjectsToLog?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#log_name DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#log_name}
  */
  readonly logName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#port DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#service DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyHttpAlsToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyHttpAls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_request_headers_to_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalRequestHeadersToLog),
    additional_response_headers_to_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalResponseHeadersToLog),
    additional_response_trailers_to_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalResponseTrailersToLog),
    filter_state_objects_to_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterStateObjectsToLog),
    log_name: cdktf.stringToTerraform(struct!.logName),
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyHttpAlsToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyHttpAls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_request_headers_to_log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalRequestHeadersToLog),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    additional_response_headers_to_log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalResponseHeadersToLog),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    additional_response_trailers_to_log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalResponseTrailersToLog),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_state_objects_to_log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterStateObjectsToLog),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    log_name: {
      value: cdktf.stringToHclTerraform(struct!.logName),
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
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyHttpAlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyHttpAls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRequestHeadersToLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRequestHeadersToLog = this._additionalRequestHeadersToLog;
    }
    if (this._additionalResponseHeadersToLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalResponseHeadersToLog = this._additionalResponseHeadersToLog;
    }
    if (this._additionalResponseTrailersToLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalResponseTrailersToLog = this._additionalResponseTrailersToLog;
    }
    if (this._filterStateObjectsToLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterStateObjectsToLog = this._filterStateObjectsToLog;
    }
    if (this._logName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logName = this._logName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyHttpAls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalRequestHeadersToLog = undefined;
      this._additionalResponseHeadersToLog = undefined;
      this._additionalResponseTrailersToLog = undefined;
      this._filterStateObjectsToLog = undefined;
      this._logName = undefined;
      this._port = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalRequestHeadersToLog = value.additionalRequestHeadersToLog;
      this._additionalResponseHeadersToLog = value.additionalResponseHeadersToLog;
      this._additionalResponseTrailersToLog = value.additionalResponseTrailersToLog;
      this._filterStateObjectsToLog = value.filterStateObjectsToLog;
      this._logName = value.logName;
      this._port = value.port;
      this._service = value.service;
    }
  }

  // additional_request_headers_to_log - computed: false, optional: true, required: false
  private _additionalRequestHeadersToLog?: string[]; 
  public get additionalRequestHeadersToLog() {
    return this.getListAttribute('additional_request_headers_to_log');
  }
  public set additionalRequestHeadersToLog(value: string[]) {
    this._additionalRequestHeadersToLog = value;
  }
  public resetAdditionalRequestHeadersToLog() {
    this._additionalRequestHeadersToLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRequestHeadersToLogInput() {
    return this._additionalRequestHeadersToLog;
  }

  // additional_response_headers_to_log - computed: false, optional: true, required: false
  private _additionalResponseHeadersToLog?: string[]; 
  public get additionalResponseHeadersToLog() {
    return this.getListAttribute('additional_response_headers_to_log');
  }
  public set additionalResponseHeadersToLog(value: string[]) {
    this._additionalResponseHeadersToLog = value;
  }
  public resetAdditionalResponseHeadersToLog() {
    this._additionalResponseHeadersToLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalResponseHeadersToLogInput() {
    return this._additionalResponseHeadersToLog;
  }

  // additional_response_trailers_to_log - computed: false, optional: true, required: false
  private _additionalResponseTrailersToLog?: string[]; 
  public get additionalResponseTrailersToLog() {
    return this.getListAttribute('additional_response_trailers_to_log');
  }
  public set additionalResponseTrailersToLog(value: string[]) {
    this._additionalResponseTrailersToLog = value;
  }
  public resetAdditionalResponseTrailersToLog() {
    this._additionalResponseTrailersToLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalResponseTrailersToLogInput() {
    return this._additionalResponseTrailersToLog;
  }

  // filter_state_objects_to_log - computed: false, optional: true, required: false
  private _filterStateObjectsToLog?: string[]; 
  public get filterStateObjectsToLog() {
    return this.getListAttribute('filter_state_objects_to_log');
  }
  public set filterStateObjectsToLog(value: string[]) {
    this._filterStateObjectsToLog = value;
  }
  public resetFilterStateObjectsToLog() {
    this._filterStateObjectsToLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterStateObjectsToLogInput() {
    return this._filterStateObjectsToLog;
  }

  // log_name - computed: false, optional: true, required: false
  private _logName?: string; 
  public get logName() {
    return this.getStringAttribute('log_name');
  }
  public set logName(value: string) {
    this._logName = value;
  }
  public resetLogName() {
    this._logName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logNameInput() {
    return this._logName;
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAlsLogFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#labels DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#text DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAlsLogFormatToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAlsLogFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAlsLogFormatToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAlsLogFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAlsLogFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAlsLogFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAlsLogFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._text = value.text;
    }
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

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#log_format DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#log_format}
  */
  readonly logFormat?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAlsLogFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#log_name DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#log_name}
  */
  readonly logName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#port DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#service DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAlsToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_format: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAlsLogFormatToTerraform(struct!.logFormat),
    log_name: cdktf.stringToTerraform(struct!.logName),
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAlsToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_format: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAlsLogFormatToHclTerraform(struct!.logFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAlsLogFormat",
    },
    log_name: {
      value: cdktf.stringToHclTerraform(struct!.logName),
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
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat?.internalValue;
    }
    if (this._logName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logName = this._logName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logFormat.internalValue = undefined;
      this._logName = undefined;
      this._port = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logFormat.internalValue = value.logFormat;
      this._logName = value.logName;
      this._port = value.port;
      this._service = value.service;
    }
  }

  // log_format - computed: false, optional: true, required: false
  private _logFormat = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAlsLogFormatOutputReference(this, "log_format");
  public get logFormat() {
    return this._logFormat;
  }
  public putLogFormat(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAlsLogFormat) {
    this._logFormat.internalValue = value;
  }
  public resetLogFormat() {
    this._logFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat.internalValue;
  }

  // log_name - computed: false, optional: true, required: false
  private _logName?: string; 
  public get logName() {
    return this.getStringAttribute('log_name');
  }
  public set logName(value: string) {
    this._logName = value;
  }
  public resetLogName() {
    this._logName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logNameInput() {
    return this._logName;
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyTcpAls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#filter_state_objects_to_log DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#filter_state_objects_to_log}
  */
  readonly filterStateObjectsToLog?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#log_name DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#log_name}
  */
  readonly logName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#port DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#service DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyTcpAlsToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyTcpAls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_state_objects_to_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterStateObjectsToLog),
    log_name: cdktf.stringToTerraform(struct!.logName),
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyTcpAlsToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyTcpAls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_state_objects_to_log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterStateObjectsToLog),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    log_name: {
      value: cdktf.stringToHclTerraform(struct!.logName),
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
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyTcpAlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyTcpAls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterStateObjectsToLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterStateObjectsToLog = this._filterStateObjectsToLog;
    }
    if (this._logName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logName = this._logName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyTcpAls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterStateObjectsToLog = undefined;
      this._logName = undefined;
      this._port = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterStateObjectsToLog = value.filterStateObjectsToLog;
      this._logName = value.logName;
      this._port = value.port;
      this._service = value.service;
    }
  }

  // filter_state_objects_to_log - computed: false, optional: true, required: false
  private _filterStateObjectsToLog?: string[]; 
  public get filterStateObjectsToLog() {
    return this.getListAttribute('filter_state_objects_to_log');
  }
  public set filterStateObjectsToLog(value: string[]) {
    this._filterStateObjectsToLog = value;
  }
  public resetFilterStateObjectsToLog() {
    this._filterStateObjectsToLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterStateObjectsToLogInput() {
    return this._filterStateObjectsToLog;
  }

  // log_name - computed: false, optional: true, required: false
  private _logName?: string; 
  public get logName() {
    return this.getStringAttribute('log_name');
  }
  public set logName(value: string) {
    this._logName = value;
  }
  public resetLogName() {
    this._logName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logNameInput() {
    return this._logName;
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersLightstep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#access_token DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#max_tag_length DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#max_tag_length}
  */
  readonly maxTagLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#port DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#service DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersLightstepToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersLightstep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    max_tag_length: cdktf.numberToTerraform(struct!.maxTagLength),
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersLightstepToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersLightstep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: cdktf.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_tag_length: {
      value: cdktf.numberToHclTerraform(struct!.maxTagLength),
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
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersLightstepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersLightstep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._maxTagLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTagLength = this._maxTagLength;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersLightstep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken = undefined;
      this._maxTagLength = undefined;
      this._port = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken = value.accessToken;
      this._maxTagLength = value.maxTagLength;
      this._port = value.port;
      this._service = value.service;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // max_tag_length - computed: false, optional: true, required: false
  private _maxTagLength?: number; 
  public get maxTagLength() {
    return this.getNumberAttribute('max_tag_length');
  }
  public set maxTagLength(value: number) {
    this._maxTagLength = value;
  }
  public resetMaxTagLength() {
    this._maxTagLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTagLengthInput() {
    return this._maxTagLength;
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpencensus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#context DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#context}
  */
  readonly context?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#max_tag_length DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#max_tag_length}
  */
  readonly maxTagLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#port DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#service DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpencensusToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpencensus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.context),
    max_tag_length: cdktf.numberToTerraform(struct!.maxTagLength),
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpencensusToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpencensus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.context),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_tag_length: {
      value: cdktf.numberToHclTerraform(struct!.maxTagLength),
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
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpencensusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpencensus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._maxTagLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTagLength = this._maxTagLength;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpencensus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._maxTagLength = undefined;
      this._port = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._maxTagLength = value.maxTagLength;
      this._port = value.port;
      this._service = value.service;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string[]; 
  public get context() {
    return this.getListAttribute('context');
  }
  public set context(value: string[]) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // max_tag_length - computed: false, optional: true, required: false
  private _maxTagLength?: number; 
  public get maxTagLength() {
    return this.getNumberAttribute('max_tag_length');
  }
  public set maxTagLength(value: number) {
    this._maxTagLength = value;
  }
  public resetMaxTagLength() {
    this._maxTagLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTagLengthInput() {
    return this._maxTagLength;
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpentelemetry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#max_tag_length DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#max_tag_length}
  */
  readonly maxTagLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#port DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#service DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpentelemetryToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpentelemetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_tag_length: cdktf.numberToTerraform(struct!.maxTagLength),
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpentelemetryToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpentelemetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_tag_length: {
      value: cdktf.numberToHclTerraform(struct!.maxTagLength),
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
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpentelemetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpentelemetry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxTagLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTagLength = this._maxTagLength;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpentelemetry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxTagLength = undefined;
      this._port = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxTagLength = value.maxTagLength;
      this._port = value.port;
      this._service = value.service;
    }
  }

  // max_tag_length - computed: false, optional: true, required: false
  private _maxTagLength?: number; 
  public get maxTagLength() {
    return this.getNumberAttribute('max_tag_length');
  }
  public set maxTagLength(value: number) {
    this._maxTagLength = value;
  }
  public resetMaxTagLength() {
    this._maxTagLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTagLengthInput() {
    return this._maxTagLength;
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersSkywalking {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#access_token DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#port DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#service DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersSkywalkingToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersSkywalking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersSkywalkingToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersSkywalking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: cdktf.stringToHclTerraform(struct!.accessToken),
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
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersSkywalkingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersSkywalking | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersSkywalking | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken = undefined;
      this._port = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken = value.accessToken;
      this._port = value.port;
      this._service = value.service;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriverLogging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#labels DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriverLoggingToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriverLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriverLoggingToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriverLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriverLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriverLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriverLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
    }
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
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#debug DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#logging DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriverLogging;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#max_number_of_annotations DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#max_number_of_annotations}
  */
  readonly maxNumberOfAnnotations?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#max_number_of_attributes DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#max_number_of_attributes}
  */
  readonly maxNumberOfAttributes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#max_number_of_message_events DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#max_number_of_message_events}
  */
  readonly maxNumberOfMessageEvents?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#max_tag_length DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#max_tag_length}
  */
  readonly maxTagLength?: number;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriverToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug: cdktf.booleanToTerraform(struct!.debug),
    logging: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriverLoggingToTerraform(struct!.logging),
    max_number_of_annotations: cdktf.numberToTerraform(struct!.maxNumberOfAnnotations),
    max_number_of_attributes: cdktf.numberToTerraform(struct!.maxNumberOfAttributes),
    max_number_of_message_events: cdktf.numberToTerraform(struct!.maxNumberOfMessageEvents),
    max_tag_length: cdktf.numberToTerraform(struct!.maxTagLength),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriverToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriver | cdktf.IResolvable): any {
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
    logging: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriverLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriverLogging",
    },
    max_number_of_annotations: {
      value: cdktf.numberToHclTerraform(struct!.maxNumberOfAnnotations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_number_of_attributes: {
      value: cdktf.numberToHclTerraform(struct!.maxNumberOfAttributes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_number_of_message_events: {
      value: cdktf.numberToHclTerraform(struct!.maxNumberOfMessageEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_tag_length: {
      value: cdktf.numberToHclTerraform(struct!.maxTagLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._maxNumberOfAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberOfAnnotations = this._maxNumberOfAnnotations;
    }
    if (this._maxNumberOfAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberOfAttributes = this._maxNumberOfAttributes;
    }
    if (this._maxNumberOfMessageEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberOfMessageEvents = this._maxNumberOfMessageEvents;
    }
    if (this._maxTagLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTagLength = this._maxTagLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._debug = undefined;
      this._logging.internalValue = undefined;
      this._maxNumberOfAnnotations = undefined;
      this._maxNumberOfAttributes = undefined;
      this._maxNumberOfMessageEvents = undefined;
      this._maxTagLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._debug = value.debug;
      this._logging.internalValue = value.logging;
      this._maxNumberOfAnnotations = value.maxNumberOfAnnotations;
      this._maxNumberOfAttributes = value.maxNumberOfAttributes;
      this._maxNumberOfMessageEvents = value.maxNumberOfMessageEvents;
      this._maxTagLength = value.maxTagLength;
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

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriverLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriverLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // max_number_of_annotations - computed: false, optional: true, required: false
  private _maxNumberOfAnnotations?: number; 
  public get maxNumberOfAnnotations() {
    return this.getNumberAttribute('max_number_of_annotations');
  }
  public set maxNumberOfAnnotations(value: number) {
    this._maxNumberOfAnnotations = value;
  }
  public resetMaxNumberOfAnnotations() {
    this._maxNumberOfAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfAnnotationsInput() {
    return this._maxNumberOfAnnotations;
  }

  // max_number_of_attributes - computed: false, optional: true, required: false
  private _maxNumberOfAttributes?: number; 
  public get maxNumberOfAttributes() {
    return this.getNumberAttribute('max_number_of_attributes');
  }
  public set maxNumberOfAttributes(value: number) {
    this._maxNumberOfAttributes = value;
  }
  public resetMaxNumberOfAttributes() {
    this._maxNumberOfAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfAttributesInput() {
    return this._maxNumberOfAttributes;
  }

  // max_number_of_message_events - computed: false, optional: true, required: false
  private _maxNumberOfMessageEvents?: number; 
  public get maxNumberOfMessageEvents() {
    return this.getNumberAttribute('max_number_of_message_events');
  }
  public set maxNumberOfMessageEvents(value: number) {
    this._maxNumberOfMessageEvents = value;
  }
  public resetMaxNumberOfMessageEvents() {
    this._maxNumberOfMessageEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfMessageEventsInput() {
    return this._maxNumberOfMessageEvents;
  }

  // max_tag_length - computed: false, optional: true, required: false
  private _maxTagLength?: number; 
  public get maxTagLength() {
    return this.getNumberAttribute('max_tag_length');
  }
  public set maxTagLength(value: number) {
    this._maxTagLength = value;
  }
  public resetMaxTagLength() {
    this._maxTagLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTagLengthInput() {
    return this._maxTagLength;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersZipkin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#max_tag_length DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#max_tag_length}
  */
  readonly maxTagLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#port DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#service DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersZipkinToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersZipkin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_tag_length: cdktf.numberToTerraform(struct!.maxTagLength),
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersZipkinToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersZipkin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_tag_length: {
      value: cdktf.numberToHclTerraform(struct!.maxTagLength),
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
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersZipkinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersZipkin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxTagLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTagLength = this._maxTagLength;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersZipkin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxTagLength = undefined;
      this._port = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxTagLength = value.maxTagLength;
      this._port = value.port;
      this._service = value.service;
    }
  }

  // max_tag_length - computed: false, optional: true, required: false
  private _maxTagLength?: number; 
  public get maxTagLength() {
    return this.getNumberAttribute('max_tag_length');
  }
  public set maxTagLength(value: number) {
    this._maxTagLength = value;
  }
  public resetMaxTagLength() {
    this._maxTagLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTagLengthInput() {
    return this._maxTagLength;
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProviders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#datadog DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#datadog}
  */
  readonly datadog?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersDatadog;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#envoy_ext_authz_grpc DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#envoy_ext_authz_grpc}
  */
  readonly envoyExtAuthzGrpc?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#envoy_ext_authz_http DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#envoy_ext_authz_http}
  */
  readonly envoyExtAuthzHttp?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#envoy_file_access_log DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#envoy_file_access_log}
  */
  readonly envoyFileAccessLog?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLog;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#envoy_http_als DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#envoy_http_als}
  */
  readonly envoyHttpAls?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyHttpAls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#envoy_otel_als DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#envoy_otel_als}
  */
  readonly envoyOtelAls?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#envoy_tcp_als DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#envoy_tcp_als}
  */
  readonly envoyTcpAls?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyTcpAls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#lightstep DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#lightstep}
  */
  readonly lightstep?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersLightstep;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#name DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#opencensus DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#opencensus}
  */
  readonly opencensus?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpencensus;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#opentelemetry DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#opentelemetry}
  */
  readonly opentelemetry?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpentelemetry;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#prometheus DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#prometheus}
  */
  readonly prometheus?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#skywalking DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#skywalking}
  */
  readonly skywalking?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersSkywalking;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#stackdriver DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#stackdriver}
  */
  readonly stackdriver?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriver;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#zipkin DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#zipkin}
  */
  readonly zipkin?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersZipkin;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datadog: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersDatadogToTerraform(struct!.datadog),
    envoy_ext_authz_grpc: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpcToTerraform(struct!.envoyExtAuthzGrpc),
    envoy_ext_authz_http: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttpToTerraform(struct!.envoyExtAuthzHttp),
    envoy_file_access_log: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLogToTerraform(struct!.envoyFileAccessLog),
    envoy_http_als: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyHttpAlsToTerraform(struct!.envoyHttpAls),
    envoy_otel_als: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAlsToTerraform(struct!.envoyOtelAls),
    envoy_tcp_als: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyTcpAlsToTerraform(struct!.envoyTcpAls),
    lightstep: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersLightstepToTerraform(struct!.lightstep),
    name: cdktf.stringToTerraform(struct!.name),
    opencensus: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpencensusToTerraform(struct!.opencensus),
    opentelemetry: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpentelemetryToTerraform(struct!.opentelemetry),
    prometheus: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.prometheus),
    skywalking: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersSkywalkingToTerraform(struct!.skywalking),
    stackdriver: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriverToTerraform(struct!.stackdriver),
    zipkin: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersZipkinToTerraform(struct!.zipkin),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datadog: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersDatadogToHclTerraform(struct!.datadog),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersDatadog",
    },
    envoy_ext_authz_grpc: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpcToHclTerraform(struct!.envoyExtAuthzGrpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpc",
    },
    envoy_ext_authz_http: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttpToHclTerraform(struct!.envoyExtAuthzHttp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttp",
    },
    envoy_file_access_log: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLogToHclTerraform(struct!.envoyFileAccessLog),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLog",
    },
    envoy_http_als: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyHttpAlsToHclTerraform(struct!.envoyHttpAls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyHttpAls",
    },
    envoy_otel_als: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAlsToHclTerraform(struct!.envoyOtelAls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAls",
    },
    envoy_tcp_als: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyTcpAlsToHclTerraform(struct!.envoyTcpAls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyTcpAls",
    },
    lightstep: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersLightstepToHclTerraform(struct!.lightstep),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersLightstep",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opencensus: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpencensusToHclTerraform(struct!.opencensus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpencensus",
    },
    opentelemetry: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpentelemetryToHclTerraform(struct!.opentelemetry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpentelemetry",
    },
    prometheus: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.prometheus),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    skywalking: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersSkywalkingToHclTerraform(struct!.skywalking),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersSkywalking",
    },
    stackdriver: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriverToHclTerraform(struct!.stackdriver),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriver",
    },
    zipkin: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersZipkinToHclTerraform(struct!.zipkin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersZipkin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datadog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadog = this._datadog?.internalValue;
    }
    if (this._envoyExtAuthzGrpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envoyExtAuthzGrpc = this._envoyExtAuthzGrpc?.internalValue;
    }
    if (this._envoyExtAuthzHttp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envoyExtAuthzHttp = this._envoyExtAuthzHttp?.internalValue;
    }
    if (this._envoyFileAccessLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envoyFileAccessLog = this._envoyFileAccessLog?.internalValue;
    }
    if (this._envoyHttpAls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envoyHttpAls = this._envoyHttpAls?.internalValue;
    }
    if (this._envoyOtelAls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envoyOtelAls = this._envoyOtelAls?.internalValue;
    }
    if (this._envoyTcpAls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envoyTcpAls = this._envoyTcpAls?.internalValue;
    }
    if (this._lightstep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lightstep = this._lightstep?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._opencensus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opencensus = this._opencensus?.internalValue;
    }
    if (this._opentelemetry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opentelemetry = this._opentelemetry?.internalValue;
    }
    if (this._prometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus;
    }
    if (this._skywalking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.skywalking = this._skywalking?.internalValue;
    }
    if (this._stackdriver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackdriver = this._stackdriver?.internalValue;
    }
    if (this._zipkin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipkin = this._zipkin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datadog.internalValue = undefined;
      this._envoyExtAuthzGrpc.internalValue = undefined;
      this._envoyExtAuthzHttp.internalValue = undefined;
      this._envoyFileAccessLog.internalValue = undefined;
      this._envoyHttpAls.internalValue = undefined;
      this._envoyOtelAls.internalValue = undefined;
      this._envoyTcpAls.internalValue = undefined;
      this._lightstep.internalValue = undefined;
      this._name = undefined;
      this._opencensus.internalValue = undefined;
      this._opentelemetry.internalValue = undefined;
      this._prometheus = undefined;
      this._skywalking.internalValue = undefined;
      this._stackdriver.internalValue = undefined;
      this._zipkin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datadog.internalValue = value.datadog;
      this._envoyExtAuthzGrpc.internalValue = value.envoyExtAuthzGrpc;
      this._envoyExtAuthzHttp.internalValue = value.envoyExtAuthzHttp;
      this._envoyFileAccessLog.internalValue = value.envoyFileAccessLog;
      this._envoyHttpAls.internalValue = value.envoyHttpAls;
      this._envoyOtelAls.internalValue = value.envoyOtelAls;
      this._envoyTcpAls.internalValue = value.envoyTcpAls;
      this._lightstep.internalValue = value.lightstep;
      this._name = value.name;
      this._opencensus.internalValue = value.opencensus;
      this._opentelemetry.internalValue = value.opentelemetry;
      this._prometheus = value.prometheus;
      this._skywalking.internalValue = value.skywalking;
      this._stackdriver.internalValue = value.stackdriver;
      this._zipkin.internalValue = value.zipkin;
    }
  }

  // datadog - computed: false, optional: true, required: false
  private _datadog = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersDatadogOutputReference(this, "datadog");
  public get datadog() {
    return this._datadog;
  }
  public putDatadog(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersDatadog) {
    this._datadog.internalValue = value;
  }
  public resetDatadog() {
    this._datadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog.internalValue;
  }

  // envoy_ext_authz_grpc - computed: false, optional: true, required: false
  private _envoyExtAuthzGrpc = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpcOutputReference(this, "envoy_ext_authz_grpc");
  public get envoyExtAuthzGrpc() {
    return this._envoyExtAuthzGrpc;
  }
  public putEnvoyExtAuthzGrpc(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzGrpc) {
    this._envoyExtAuthzGrpc.internalValue = value;
  }
  public resetEnvoyExtAuthzGrpc() {
    this._envoyExtAuthzGrpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envoyExtAuthzGrpcInput() {
    return this._envoyExtAuthzGrpc.internalValue;
  }

  // envoy_ext_authz_http - computed: false, optional: true, required: false
  private _envoyExtAuthzHttp = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttpOutputReference(this, "envoy_ext_authz_http");
  public get envoyExtAuthzHttp() {
    return this._envoyExtAuthzHttp;
  }
  public putEnvoyExtAuthzHttp(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyExtAuthzHttp) {
    this._envoyExtAuthzHttp.internalValue = value;
  }
  public resetEnvoyExtAuthzHttp() {
    this._envoyExtAuthzHttp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envoyExtAuthzHttpInput() {
    return this._envoyExtAuthzHttp.internalValue;
  }

  // envoy_file_access_log - computed: false, optional: true, required: false
  private _envoyFileAccessLog = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLogOutputReference(this, "envoy_file_access_log");
  public get envoyFileAccessLog() {
    return this._envoyFileAccessLog;
  }
  public putEnvoyFileAccessLog(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyFileAccessLog) {
    this._envoyFileAccessLog.internalValue = value;
  }
  public resetEnvoyFileAccessLog() {
    this._envoyFileAccessLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envoyFileAccessLogInput() {
    return this._envoyFileAccessLog.internalValue;
  }

  // envoy_http_als - computed: false, optional: true, required: false
  private _envoyHttpAls = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyHttpAlsOutputReference(this, "envoy_http_als");
  public get envoyHttpAls() {
    return this._envoyHttpAls;
  }
  public putEnvoyHttpAls(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyHttpAls) {
    this._envoyHttpAls.internalValue = value;
  }
  public resetEnvoyHttpAls() {
    this._envoyHttpAls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envoyHttpAlsInput() {
    return this._envoyHttpAls.internalValue;
  }

  // envoy_otel_als - computed: false, optional: true, required: false
  private _envoyOtelAls = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAlsOutputReference(this, "envoy_otel_als");
  public get envoyOtelAls() {
    return this._envoyOtelAls;
  }
  public putEnvoyOtelAls(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyOtelAls) {
    this._envoyOtelAls.internalValue = value;
  }
  public resetEnvoyOtelAls() {
    this._envoyOtelAls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envoyOtelAlsInput() {
    return this._envoyOtelAls.internalValue;
  }

  // envoy_tcp_als - computed: false, optional: true, required: false
  private _envoyTcpAls = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyTcpAlsOutputReference(this, "envoy_tcp_als");
  public get envoyTcpAls() {
    return this._envoyTcpAls;
  }
  public putEnvoyTcpAls(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersEnvoyTcpAls) {
    this._envoyTcpAls.internalValue = value;
  }
  public resetEnvoyTcpAls() {
    this._envoyTcpAls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envoyTcpAlsInput() {
    return this._envoyTcpAls.internalValue;
  }

  // lightstep - computed: false, optional: true, required: false
  private _lightstep = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersLightstepOutputReference(this, "lightstep");
  public get lightstep() {
    return this._lightstep;
  }
  public putLightstep(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersLightstep) {
    this._lightstep.internalValue = value;
  }
  public resetLightstep() {
    this._lightstep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightstepInput() {
    return this._lightstep.internalValue;
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

  // opencensus - computed: false, optional: true, required: false
  private _opencensus = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpencensusOutputReference(this, "opencensus");
  public get opencensus() {
    return this._opencensus;
  }
  public putOpencensus(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpencensus) {
    this._opencensus.internalValue = value;
  }
  public resetOpencensus() {
    this._opencensus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opencensusInput() {
    return this._opencensus.internalValue;
  }

  // opentelemetry - computed: false, optional: true, required: false
  private _opentelemetry = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpentelemetryOutputReference(this, "opentelemetry");
  public get opentelemetry() {
    return this._opentelemetry;
  }
  public putOpentelemetry(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOpentelemetry) {
    this._opentelemetry.internalValue = value;
  }
  public resetOpentelemetry() {
    this._opentelemetry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opentelemetryInput() {
    return this._opentelemetry.internalValue;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus?: { [key: string]: string }; 
  public get prometheus() {
    return this.getStringMapAttribute('prometheus');
  }
  public set prometheus(value: { [key: string]: string }) {
    this._prometheus = value;
  }
  public resetPrometheus() {
    this._prometheus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus;
  }

  // skywalking - computed: false, optional: true, required: false
  private _skywalking = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersSkywalkingOutputReference(this, "skywalking");
  public get skywalking() {
    return this._skywalking;
  }
  public putSkywalking(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersSkywalking) {
    this._skywalking.internalValue = value;
  }
  public resetSkywalking() {
    this._skywalking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skywalkingInput() {
    return this._skywalking.internalValue;
  }

  // stackdriver - computed: false, optional: true, required: false
  private _stackdriver = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriverOutputReference(this, "stackdriver");
  public get stackdriver() {
    return this._stackdriver;
  }
  public putStackdriver(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersStackdriver) {
    this._stackdriver.internalValue = value;
  }
  public resetStackdriver() {
    this._stackdriver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackdriverInput() {
    return this._stackdriver.internalValue;
  }

  // zipkin - computed: false, optional: true, required: false
  private _zipkin = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersZipkinOutputReference(this, "zipkin");
  public get zipkin() {
    return this._zipkin;
  }
  public putZipkin(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersZipkin) {
    this._zipkin.internalValue = value;
  }
  public resetZipkin() {
    this._zipkin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipkinInput() {
    return this._zipkin.internalValue;
  }
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersList extends cdktf.ComplexList {
  public internalValue? : DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProviders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOutputReference {
    return new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingDistribute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#from DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#to DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#to}
  */
  readonly to?: { [key: string]: string };
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingDistributeToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingDistribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.to),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingDistributeToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingDistribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.to),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingDistributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingDistribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingDistribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: { [key: string]: string }; 
  public get to() {
    return this.getStringMapAttribute('to');
  }
  public set to(value: { [key: string]: string }) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingDistributeList extends cdktf.ComplexList {
  public internalValue? : DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingDistribute[] | cdktf.IResolvable

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
  public get(index: number): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingDistributeOutputReference {
    return new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingDistributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingFailover {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#from DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#to DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#to}
  */
  readonly to?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingFailoverToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingFailover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingFailoverToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingFailover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingFailoverOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingFailover | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingFailover | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingFailoverList extends cdktf.ComplexList {
  public internalValue? : DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingFailover[] | cdktf.IResolvable

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
  public get(index: number): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingFailoverOutputReference {
    return new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingFailoverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#distribute DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#distribute}
  */
  readonly distribute?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingDistribute[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#enabled DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#failover DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#failover}
  */
  readonly failover?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingFailover[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#failover_priority DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#failover_priority}
  */
  readonly failoverPriority?: string[];
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute: cdktf.listMapper(dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingDistributeToTerraform, false)(struct!.distribute),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    failover: cdktf.listMapper(dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingFailoverToTerraform, false)(struct!.failover),
    failover_priority: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.failoverPriority),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distribute: {
      value: cdktf.listMapperHcl(dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingDistributeToHclTerraform, false)(struct!.distribute),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingDistributeList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failover: {
      value: cdktf.listMapperHcl(dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingFailoverToHclTerraform, false)(struct!.failover),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingFailoverList",
    },
    failover_priority: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.failoverPriority),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distribute = this._distribute?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._failover?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failover = this._failover?.internalValue;
    }
    if (this._failoverPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverPriority = this._failoverPriority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distribute.internalValue = undefined;
      this._enabled = undefined;
      this._failover.internalValue = undefined;
      this._failoverPriority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distribute.internalValue = value.distribute;
      this._enabled = value.enabled;
      this._failover.internalValue = value.failover;
      this._failoverPriority = value.failoverPriority;
    }
  }

  // distribute - computed: false, optional: true, required: false
  private _distribute = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingDistributeList(this, "distribute", false);
  public get distribute() {
    return this._distribute;
  }
  public putDistribute(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingDistribute[] | cdktf.IResolvable) {
    this._distribute.internalValue = value;
  }
  public resetDistribute() {
    this._distribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeInput() {
    return this._distribute.internalValue;
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

  // failover - computed: false, optional: true, required: false
  private _failover = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingFailoverList(this, "failover", false);
  public get failover() {
    return this._failover;
  }
  public putFailover(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingFailover[] | cdktf.IResolvable) {
    this._failover.internalValue = value;
  }
  public resetFailover() {
    this._failover.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverInput() {
    return this._failover.internalValue;
  }

  // failover_priority - computed: false, optional: true, required: false
  private _failoverPriority?: string[]; 
  public get failoverPriority() {
    return this.getListAttribute('failover_priority');
  }
  public set failoverPriority(value: string[]) {
    this._failoverPriority = value;
  }
  public resetFailoverPriority() {
    this._failoverPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverPriorityInput() {
    return this._failoverPriority;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigMeshMtls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#min_protocol_version DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#min_protocol_version}
  */
  readonly minProtocolVersion?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigMeshMtlsToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigMeshMtls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_protocol_version: cdktf.stringToTerraform(struct!.minProtocolVersion),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigMeshMtlsToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigMeshMtls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.minProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigMeshMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigMeshMtls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minProtocolVersion = this._minProtocolVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigMeshMtls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minProtocolVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minProtocolVersion = value.minProtocolVersion;
    }
  }

  // min_protocol_version - computed: false, optional: true, required: false
  private _minProtocolVersion?: string; 
  public get minProtocolVersion() {
    return this.getStringAttribute('min_protocol_version');
  }
  public set minProtocolVersion(value: string) {
    this._minProtocolVersion = value;
  }
  public resetMinProtocolVersion() {
    this._minProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minProtocolVersionInput() {
    return this._minProtocolVersion;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigOutboundTrafficPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#mode DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#mode}
  */
  readonly mode?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigOutboundTrafficPolicyToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigOutboundTrafficPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigOutboundTrafficPolicyToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigOutboundTrafficPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigOutboundTrafficPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigOutboundTrafficPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigOutboundTrafficPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigPathNormalization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#normalization DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#normalization}
  */
  readonly normalization?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigPathNormalizationToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigPathNormalization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    normalization: cdktf.stringToTerraform(struct!.normalization),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigPathNormalizationToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigPathNormalization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    normalization: {
      value: cdktf.stringToHclTerraform(struct!.normalization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigPathNormalizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigPathNormalization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._normalization !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalization = this._normalization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigPathNormalization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._normalization = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._normalization = value.normalization;
    }
  }

  // normalization - computed: false, optional: true, required: false
  private _normalization?: string; 
  public get normalization() {
    return this.getStringAttribute('normalization');
  }
  public set normalization(value: string) {
    this._normalization = value;
  }
  public resetNormalization() {
    this._normalization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalizationInput() {
    return this._normalization;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettingsSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#cluster_local DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#cluster_local}
  */
  readonly clusterLocal?: boolean | cdktf.IResolvable;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettingsSettingsToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettingsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_local: cdktf.booleanToTerraform(struct!.clusterLocal),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettingsSettingsToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettingsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_local: {
      value: cdktf.booleanToHclTerraform(struct!.clusterLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettingsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettingsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterLocal = this._clusterLocal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettingsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterLocal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterLocal = value.clusterLocal;
    }
  }

  // cluster_local - computed: false, optional: true, required: false
  private _clusterLocal?: boolean | cdktf.IResolvable; 
  public get clusterLocal() {
    return this.getBooleanAttribute('cluster_local');
  }
  public set clusterLocal(value: boolean | cdktf.IResolvable) {
    this._clusterLocal = value;
  }
  public resetClusterLocal() {
    this._clusterLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLocalInput() {
    return this._clusterLocal;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#hosts DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#settings DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#settings}
  */
  readonly settings?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettingsSettings;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettingsToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    settings: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettingsSettingsToTerraform(struct!.settings),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettingsToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    settings: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettingsSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettingsSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hosts = undefined;
      this._settings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hosts = value.hosts;
      this._settings.internalValue = value.settings;
    }
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

  // settings - computed: false, optional: true, required: false
  private _settings = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettingsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettingsSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettingsOutputReference {
    return new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigTcpKeepalive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#interval DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#probes DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#probes}
  */
  readonly probes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#time DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#time}
  */
  readonly time?: string;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigTcpKeepaliveToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigTcpKeepalive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    probes: cdktf.numberToTerraform(struct!.probes),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigTcpKeepaliveToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigTcpKeepalive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probes: {
      value: cdktf.numberToHclTerraform(struct!.probes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigTcpKeepaliveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigTcpKeepalive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._probes !== undefined) {
      hasAnyValues = true;
      internalValueResult.probes = this._probes;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigTcpKeepalive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._probes = undefined;
      this._time = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._probes = value.probes;
      this._time = value.time;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // probes - computed: false, optional: true, required: false
  private _probes?: number; 
  public get probes() {
    return this.getNumberAttribute('probes');
  }
  public set probes(value: number) {
    this._probes = value;
  }
  public resetProbes() {
    this._probes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probesInput() {
    return this._probes;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#access_log_encoding DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#access_log_encoding}
  */
  readonly accessLogEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#access_log_file DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#access_log_file}
  */
  readonly accessLogFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#access_log_format DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#access_log_format}
  */
  readonly accessLogFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#ca DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#ca}
  */
  readonly ca?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCa;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#ca_certificates DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#ca_certificates}
  */
  readonly caCertificates?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaCertificates[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#certificates DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#certificates}
  */
  readonly certificates?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCertificates[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#config_sources DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#config_sources}
  */
  readonly configSources?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSources[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#connect_timeout DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#connect_timeout}
  */
  readonly connectTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#default_config DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#default_config}
  */
  readonly defaultConfig?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#default_destination_rule_export_to DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#default_destination_rule_export_to}
  */
  readonly defaultDestinationRuleExportTo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#default_http_retry_policy DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#default_http_retry_policy}
  */
  readonly defaultHttpRetryPolicy?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultHttpRetryPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#default_providers DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#default_providers}
  */
  readonly defaultProviders?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultProviders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#default_service_export_to DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#default_service_export_to}
  */
  readonly defaultServiceExportTo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#default_virtual_service_export_to DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#default_virtual_service_export_to}
  */
  readonly defaultVirtualServiceExportTo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#disable_envoy_listener_log DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#disable_envoy_listener_log}
  */
  readonly disableEnvoyListenerLog?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#discovery_selectors DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#discovery_selectors}
  */
  readonly discoverySelectors?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectors[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#dns_refresh_rate DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#dns_refresh_rate}
  */
  readonly dnsRefreshRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#enable_auto_mtls DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#enable_auto_mtls}
  */
  readonly enableAutoMtls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#enable_envoy_access_log_service DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#enable_envoy_access_log_service}
  */
  readonly enableEnvoyAccessLogService?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#enable_prometheus_merge DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#enable_prometheus_merge}
  */
  readonly enablePrometheusMerge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#enable_tracing DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#enable_tracing}
  */
  readonly enableTracing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#extension_providers DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#extension_providers}
  */
  readonly extensionProviders?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProviders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#h2_upgrade_policy DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#h2_upgrade_policy}
  */
  readonly h2UpgradePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#inbound_cluster_stat_name DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#inbound_cluster_stat_name}
  */
  readonly inboundClusterStatName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#ingress_class DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#ingress_class}
  */
  readonly ingressClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#ingress_controller_mode DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#ingress_controller_mode}
  */
  readonly ingressControllerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#ingress_selector DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#ingress_selector}
  */
  readonly ingressSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#ingress_service DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#ingress_service}
  */
  readonly ingressService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#locality_lb_setting DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#locality_lb_setting}
  */
  readonly localityLbSetting?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSetting;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#mesh_mtls DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#mesh_mtls}
  */
  readonly meshMtls?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigMeshMtls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#outbound_cluster_stat_name DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#outbound_cluster_stat_name}
  */
  readonly outboundClusterStatName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#outbound_traffic_policy DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#outbound_traffic_policy}
  */
  readonly outboundTrafficPolicy?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigOutboundTrafficPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#path_normalization DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#path_normalization}
  */
  readonly pathNormalization?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigPathNormalization;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#protocol_detection_timeout DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#protocol_detection_timeout}
  */
  readonly protocolDetectionTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#proxy_http_port DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#proxy_http_port}
  */
  readonly proxyHttpPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#proxy_listen_port DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#proxy_listen_port}
  */
  readonly proxyListenPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#root_namespace DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#root_namespace}
  */
  readonly rootNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#service_settings DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#service_settings}
  */
  readonly serviceSettings?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettings[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#tcp_keepalive DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#tcp_keepalive}
  */
  readonly tcpKeepalive?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigTcpKeepalive;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#trust_domain DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#trust_domain}
  */
  readonly trustDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#trust_domain_aliases DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#trust_domain_aliases}
  */
  readonly trustDomainAliases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#verify_certificate_at_client DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#verify_certificate_at_client}
  */
  readonly verifyCertificateAtClient?: boolean | cdktf.IResolvable;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_log_encoding: cdktf.stringToTerraform(struct!.accessLogEncoding),
    access_log_file: cdktf.stringToTerraform(struct!.accessLogFile),
    access_log_format: cdktf.stringToTerraform(struct!.accessLogFormat),
    ca: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaToTerraform(struct!.ca),
    ca_certificates: cdktf.listMapper(dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaCertificatesToTerraform, false)(struct!.caCertificates),
    certificates: cdktf.listMapper(dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCertificatesToTerraform, false)(struct!.certificates),
    config_sources: cdktf.listMapper(dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSourcesToTerraform, false)(struct!.configSources),
    connect_timeout: cdktf.stringToTerraform(struct!.connectTimeout),
    default_config: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigToTerraform(struct!.defaultConfig),
    default_destination_rule_export_to: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultDestinationRuleExportTo),
    default_http_retry_policy: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultHttpRetryPolicyToTerraform(struct!.defaultHttpRetryPolicy),
    default_providers: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultProvidersToTerraform(struct!.defaultProviders),
    default_service_export_to: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultServiceExportTo),
    default_virtual_service_export_to: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultVirtualServiceExportTo),
    disable_envoy_listener_log: cdktf.booleanToTerraform(struct!.disableEnvoyListenerLog),
    discovery_selectors: cdktf.listMapper(dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsToTerraform, false)(struct!.discoverySelectors),
    dns_refresh_rate: cdktf.stringToTerraform(struct!.dnsRefreshRate),
    enable_auto_mtls: cdktf.booleanToTerraform(struct!.enableAutoMtls),
    enable_envoy_access_log_service: cdktf.booleanToTerraform(struct!.enableEnvoyAccessLogService),
    enable_prometheus_merge: cdktf.booleanToTerraform(struct!.enablePrometheusMerge),
    enable_tracing: cdktf.booleanToTerraform(struct!.enableTracing),
    extension_providers: cdktf.listMapper(dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersToTerraform, false)(struct!.extensionProviders),
    h2_upgrade_policy: cdktf.stringToTerraform(struct!.h2UpgradePolicy),
    inbound_cluster_stat_name: cdktf.stringToTerraform(struct!.inboundClusterStatName),
    ingress_class: cdktf.stringToTerraform(struct!.ingressClass),
    ingress_controller_mode: cdktf.stringToTerraform(struct!.ingressControllerMode),
    ingress_selector: cdktf.stringToTerraform(struct!.ingressSelector),
    ingress_service: cdktf.stringToTerraform(struct!.ingressService),
    locality_lb_setting: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingToTerraform(struct!.localityLbSetting),
    mesh_mtls: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigMeshMtlsToTerraform(struct!.meshMtls),
    outbound_cluster_stat_name: cdktf.stringToTerraform(struct!.outboundClusterStatName),
    outbound_traffic_policy: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigOutboundTrafficPolicyToTerraform(struct!.outboundTrafficPolicy),
    path_normalization: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigPathNormalizationToTerraform(struct!.pathNormalization),
    protocol_detection_timeout: cdktf.stringToTerraform(struct!.protocolDetectionTimeout),
    proxy_http_port: cdktf.numberToTerraform(struct!.proxyHttpPort),
    proxy_listen_port: cdktf.numberToTerraform(struct!.proxyListenPort),
    root_namespace: cdktf.stringToTerraform(struct!.rootNamespace),
    service_settings: cdktf.listMapper(dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettingsToTerraform, false)(struct!.serviceSettings),
    tcp_keepalive: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigTcpKeepaliveToTerraform(struct!.tcpKeepalive),
    trust_domain: cdktf.stringToTerraform(struct!.trustDomain),
    trust_domain_aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trustDomainAliases),
    verify_certificate_at_client: cdktf.booleanToTerraform(struct!.verifyCertificateAtClient),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_log_encoding: {
      value: cdktf.stringToHclTerraform(struct!.accessLogEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_log_file: {
      value: cdktf.stringToHclTerraform(struct!.accessLogFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_log_format: {
      value: cdktf.stringToHclTerraform(struct!.accessLogFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCa",
    },
    ca_certificates: {
      value: cdktf.listMapperHcl(dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaCertificatesToHclTerraform, false)(struct!.caCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaCertificatesList",
    },
    certificates: {
      value: cdktf.listMapperHcl(dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCertificatesToHclTerraform, false)(struct!.certificates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCertificatesList",
    },
    config_sources: {
      value: cdktf.listMapperHcl(dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSourcesToHclTerraform, false)(struct!.configSources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSourcesList",
    },
    connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_config: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigToHclTerraform(struct!.defaultConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfig",
    },
    default_destination_rule_export_to: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultDestinationRuleExportTo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_http_retry_policy: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultHttpRetryPolicyToHclTerraform(struct!.defaultHttpRetryPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultHttpRetryPolicy",
    },
    default_providers: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultProvidersToHclTerraform(struct!.defaultProviders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultProviders",
    },
    default_service_export_to: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultServiceExportTo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_virtual_service_export_to: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultVirtualServiceExportTo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disable_envoy_listener_log: {
      value: cdktf.booleanToHclTerraform(struct!.disableEnvoyListenerLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    discovery_selectors: {
      value: cdktf.listMapperHcl(dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsToHclTerraform, false)(struct!.discoverySelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsList",
    },
    dns_refresh_rate: {
      value: cdktf.stringToHclTerraform(struct!.dnsRefreshRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_auto_mtls: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoMtls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_envoy_access_log_service: {
      value: cdktf.booleanToHclTerraform(struct!.enableEnvoyAccessLogService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_prometheus_merge: {
      value: cdktf.booleanToHclTerraform(struct!.enablePrometheusMerge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_tracing: {
      value: cdktf.booleanToHclTerraform(struct!.enableTracing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extension_providers: {
      value: cdktf.listMapperHcl(dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersToHclTerraform, false)(struct!.extensionProviders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersList",
    },
    h2_upgrade_policy: {
      value: cdktf.stringToHclTerraform(struct!.h2UpgradePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound_cluster_stat_name: {
      value: cdktf.stringToHclTerraform(struct!.inboundClusterStatName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_class: {
      value: cdktf.stringToHclTerraform(struct!.ingressClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_controller_mode: {
      value: cdktf.stringToHclTerraform(struct!.ingressControllerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_selector: {
      value: cdktf.stringToHclTerraform(struct!.ingressSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_service: {
      value: cdktf.stringToHclTerraform(struct!.ingressService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locality_lb_setting: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingToHclTerraform(struct!.localityLbSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSetting",
    },
    mesh_mtls: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigMeshMtlsToHclTerraform(struct!.meshMtls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigMeshMtls",
    },
    outbound_cluster_stat_name: {
      value: cdktf.stringToHclTerraform(struct!.outboundClusterStatName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound_traffic_policy: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigOutboundTrafficPolicyToHclTerraform(struct!.outboundTrafficPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigOutboundTrafficPolicy",
    },
    path_normalization: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigPathNormalizationToHclTerraform(struct!.pathNormalization),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigPathNormalization",
    },
    protocol_detection_timeout: {
      value: cdktf.stringToHclTerraform(struct!.protocolDetectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_http_port: {
      value: cdktf.numberToHclTerraform(struct!.proxyHttpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_listen_port: {
      value: cdktf.numberToHclTerraform(struct!.proxyListenPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    root_namespace: {
      value: cdktf.stringToHclTerraform(struct!.rootNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_settings: {
      value: cdktf.listMapperHcl(dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettingsToHclTerraform, false)(struct!.serviceSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettingsList",
    },
    tcp_keepalive: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigTcpKeepaliveToHclTerraform(struct!.tcpKeepalive),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigTcpKeepalive",
    },
    trust_domain: {
      value: cdktf.stringToHclTerraform(struct!.trustDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_domain_aliases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.trustDomainAliases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verify_certificate_at_client: {
      value: cdktf.booleanToHclTerraform(struct!.verifyCertificateAtClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLogEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLogEncoding = this._accessLogEncoding;
    }
    if (this._accessLogFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLogFile = this._accessLogFile;
    }
    if (this._accessLogFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLogFormat = this._accessLogFormat;
    }
    if (this._ca?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca?.internalValue;
    }
    if (this._caCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificates = this._caCertificates?.internalValue;
    }
    if (this._certificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificates = this._certificates?.internalValue;
    }
    if (this._configSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configSources = this._configSources?.internalValue;
    }
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._defaultConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultConfig = this._defaultConfig?.internalValue;
    }
    if (this._defaultDestinationRuleExportTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDestinationRuleExportTo = this._defaultDestinationRuleExportTo;
    }
    if (this._defaultHttpRetryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultHttpRetryPolicy = this._defaultHttpRetryPolicy?.internalValue;
    }
    if (this._defaultProviders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultProviders = this._defaultProviders?.internalValue;
    }
    if (this._defaultServiceExportTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultServiceExportTo = this._defaultServiceExportTo;
    }
    if (this._defaultVirtualServiceExportTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultVirtualServiceExportTo = this._defaultVirtualServiceExportTo;
    }
    if (this._disableEnvoyListenerLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableEnvoyListenerLog = this._disableEnvoyListenerLog;
    }
    if (this._discoverySelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoverySelectors = this._discoverySelectors?.internalValue;
    }
    if (this._dnsRefreshRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRefreshRate = this._dnsRefreshRate;
    }
    if (this._enableAutoMtls !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoMtls = this._enableAutoMtls;
    }
    if (this._enableEnvoyAccessLogService !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEnvoyAccessLogService = this._enableEnvoyAccessLogService;
    }
    if (this._enablePrometheusMerge !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrometheusMerge = this._enablePrometheusMerge;
    }
    if (this._enableTracing !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTracing = this._enableTracing;
    }
    if (this._extensionProviders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionProviders = this._extensionProviders?.internalValue;
    }
    if (this._h2UpgradePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.h2UpgradePolicy = this._h2UpgradePolicy;
    }
    if (this._inboundClusterStatName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundClusterStatName = this._inboundClusterStatName;
    }
    if (this._ingressClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressClass = this._ingressClass;
    }
    if (this._ingressControllerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressControllerMode = this._ingressControllerMode;
    }
    if (this._ingressSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressSelector = this._ingressSelector;
    }
    if (this._ingressService !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressService = this._ingressService;
    }
    if (this._localityLbSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localityLbSetting = this._localityLbSetting?.internalValue;
    }
    if (this._meshMtls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshMtls = this._meshMtls?.internalValue;
    }
    if (this._outboundClusterStatName !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundClusterStatName = this._outboundClusterStatName;
    }
    if (this._outboundTrafficPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundTrafficPolicy = this._outboundTrafficPolicy?.internalValue;
    }
    if (this._pathNormalization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathNormalization = this._pathNormalization?.internalValue;
    }
    if (this._protocolDetectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolDetectionTimeout = this._protocolDetectionTimeout;
    }
    if (this._proxyHttpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHttpPort = this._proxyHttpPort;
    }
    if (this._proxyListenPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyListenPort = this._proxyListenPort;
    }
    if (this._rootNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootNamespace = this._rootNamespace;
    }
    if (this._serviceSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSettings = this._serviceSettings?.internalValue;
    }
    if (this._tcpKeepalive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpKeepalive = this._tcpKeepalive?.internalValue;
    }
    if (this._trustDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustDomain = this._trustDomain;
    }
    if (this._trustDomainAliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustDomainAliases = this._trustDomainAliases;
    }
    if (this._verifyCertificateAtClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCertificateAtClient = this._verifyCertificateAtClient;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLogEncoding = undefined;
      this._accessLogFile = undefined;
      this._accessLogFormat = undefined;
      this._ca.internalValue = undefined;
      this._caCertificates.internalValue = undefined;
      this._certificates.internalValue = undefined;
      this._configSources.internalValue = undefined;
      this._connectTimeout = undefined;
      this._defaultConfig.internalValue = undefined;
      this._defaultDestinationRuleExportTo = undefined;
      this._defaultHttpRetryPolicy.internalValue = undefined;
      this._defaultProviders.internalValue = undefined;
      this._defaultServiceExportTo = undefined;
      this._defaultVirtualServiceExportTo = undefined;
      this._disableEnvoyListenerLog = undefined;
      this._discoverySelectors.internalValue = undefined;
      this._dnsRefreshRate = undefined;
      this._enableAutoMtls = undefined;
      this._enableEnvoyAccessLogService = undefined;
      this._enablePrometheusMerge = undefined;
      this._enableTracing = undefined;
      this._extensionProviders.internalValue = undefined;
      this._h2UpgradePolicy = undefined;
      this._inboundClusterStatName = undefined;
      this._ingressClass = undefined;
      this._ingressControllerMode = undefined;
      this._ingressSelector = undefined;
      this._ingressService = undefined;
      this._localityLbSetting.internalValue = undefined;
      this._meshMtls.internalValue = undefined;
      this._outboundClusterStatName = undefined;
      this._outboundTrafficPolicy.internalValue = undefined;
      this._pathNormalization.internalValue = undefined;
      this._protocolDetectionTimeout = undefined;
      this._proxyHttpPort = undefined;
      this._proxyListenPort = undefined;
      this._rootNamespace = undefined;
      this._serviceSettings.internalValue = undefined;
      this._tcpKeepalive.internalValue = undefined;
      this._trustDomain = undefined;
      this._trustDomainAliases = undefined;
      this._verifyCertificateAtClient = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLogEncoding = value.accessLogEncoding;
      this._accessLogFile = value.accessLogFile;
      this._accessLogFormat = value.accessLogFormat;
      this._ca.internalValue = value.ca;
      this._caCertificates.internalValue = value.caCertificates;
      this._certificates.internalValue = value.certificates;
      this._configSources.internalValue = value.configSources;
      this._connectTimeout = value.connectTimeout;
      this._defaultConfig.internalValue = value.defaultConfig;
      this._defaultDestinationRuleExportTo = value.defaultDestinationRuleExportTo;
      this._defaultHttpRetryPolicy.internalValue = value.defaultHttpRetryPolicy;
      this._defaultProviders.internalValue = value.defaultProviders;
      this._defaultServiceExportTo = value.defaultServiceExportTo;
      this._defaultVirtualServiceExportTo = value.defaultVirtualServiceExportTo;
      this._disableEnvoyListenerLog = value.disableEnvoyListenerLog;
      this._discoverySelectors.internalValue = value.discoverySelectors;
      this._dnsRefreshRate = value.dnsRefreshRate;
      this._enableAutoMtls = value.enableAutoMtls;
      this._enableEnvoyAccessLogService = value.enableEnvoyAccessLogService;
      this._enablePrometheusMerge = value.enablePrometheusMerge;
      this._enableTracing = value.enableTracing;
      this._extensionProviders.internalValue = value.extensionProviders;
      this._h2UpgradePolicy = value.h2UpgradePolicy;
      this._inboundClusterStatName = value.inboundClusterStatName;
      this._ingressClass = value.ingressClass;
      this._ingressControllerMode = value.ingressControllerMode;
      this._ingressSelector = value.ingressSelector;
      this._ingressService = value.ingressService;
      this._localityLbSetting.internalValue = value.localityLbSetting;
      this._meshMtls.internalValue = value.meshMtls;
      this._outboundClusterStatName = value.outboundClusterStatName;
      this._outboundTrafficPolicy.internalValue = value.outboundTrafficPolicy;
      this._pathNormalization.internalValue = value.pathNormalization;
      this._protocolDetectionTimeout = value.protocolDetectionTimeout;
      this._proxyHttpPort = value.proxyHttpPort;
      this._proxyListenPort = value.proxyListenPort;
      this._rootNamespace = value.rootNamespace;
      this._serviceSettings.internalValue = value.serviceSettings;
      this._tcpKeepalive.internalValue = value.tcpKeepalive;
      this._trustDomain = value.trustDomain;
      this._trustDomainAliases = value.trustDomainAliases;
      this._verifyCertificateAtClient = value.verifyCertificateAtClient;
    }
  }

  // access_log_encoding - computed: false, optional: true, required: false
  private _accessLogEncoding?: string; 
  public get accessLogEncoding() {
    return this.getStringAttribute('access_log_encoding');
  }
  public set accessLogEncoding(value: string) {
    this._accessLogEncoding = value;
  }
  public resetAccessLogEncoding() {
    this._accessLogEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogEncodingInput() {
    return this._accessLogEncoding;
  }

  // access_log_file - computed: false, optional: true, required: false
  private _accessLogFile?: string; 
  public get accessLogFile() {
    return this.getStringAttribute('access_log_file');
  }
  public set accessLogFile(value: string) {
    this._accessLogFile = value;
  }
  public resetAccessLogFile() {
    this._accessLogFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogFileInput() {
    return this._accessLogFile;
  }

  // access_log_format - computed: false, optional: true, required: false
  private _accessLogFormat?: string; 
  public get accessLogFormat() {
    return this.getStringAttribute('access_log_format');
  }
  public set accessLogFormat(value: string) {
    this._accessLogFormat = value;
  }
  public resetAccessLogFormat() {
    this._accessLogFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogFormatInput() {
    return this._accessLogFormat;
  }

  // ca - computed: false, optional: true, required: false
  private _ca = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCa) {
    this._ca.internalValue = value;
  }
  public resetCa() {
    this._ca.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }

  // ca_certificates - computed: false, optional: true, required: false
  private _caCertificates = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaCertificatesList(this, "ca_certificates", false);
  public get caCertificates() {
    return this._caCertificates;
  }
  public putCaCertificates(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCaCertificates[] | cdktf.IResolvable) {
    this._caCertificates.internalValue = value;
  }
  public resetCaCertificates() {
    this._caCertificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificatesInput() {
    return this._caCertificates.internalValue;
  }

  // certificates - computed: false, optional: true, required: false
  private _certificates = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
  }
  public putCertificates(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigCertificates[] | cdktf.IResolvable) {
    this._certificates.internalValue = value;
  }
  public resetCertificates() {
    this._certificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates.internalValue;
  }

  // config_sources - computed: false, optional: true, required: false
  private _configSources = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSourcesList(this, "config_sources", false);
  public get configSources() {
    return this._configSources;
  }
  public putConfigSources(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigConfigSources[] | cdktf.IResolvable) {
    this._configSources.internalValue = value;
  }
  public resetConfigSources() {
    this._configSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSourcesInput() {
    return this._configSources.internalValue;
  }

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: string; 
  public get connectTimeout() {
    return this.getStringAttribute('connect_timeout');
  }
  public set connectTimeout(value: string) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // default_config - computed: false, optional: true, required: false
  private _defaultConfig = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfigOutputReference(this, "default_config");
  public get defaultConfig() {
    return this._defaultConfig;
  }
  public putDefaultConfig(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultConfig) {
    this._defaultConfig.internalValue = value;
  }
  public resetDefaultConfig() {
    this._defaultConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultConfigInput() {
    return this._defaultConfig.internalValue;
  }

  // default_destination_rule_export_to - computed: false, optional: true, required: false
  private _defaultDestinationRuleExportTo?: string[]; 
  public get defaultDestinationRuleExportTo() {
    return this.getListAttribute('default_destination_rule_export_to');
  }
  public set defaultDestinationRuleExportTo(value: string[]) {
    this._defaultDestinationRuleExportTo = value;
  }
  public resetDefaultDestinationRuleExportTo() {
    this._defaultDestinationRuleExportTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDestinationRuleExportToInput() {
    return this._defaultDestinationRuleExportTo;
  }

  // default_http_retry_policy - computed: false, optional: true, required: false
  private _defaultHttpRetryPolicy = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultHttpRetryPolicyOutputReference(this, "default_http_retry_policy");
  public get defaultHttpRetryPolicy() {
    return this._defaultHttpRetryPolicy;
  }
  public putDefaultHttpRetryPolicy(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultHttpRetryPolicy) {
    this._defaultHttpRetryPolicy.internalValue = value;
  }
  public resetDefaultHttpRetryPolicy() {
    this._defaultHttpRetryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHttpRetryPolicyInput() {
    return this._defaultHttpRetryPolicy.internalValue;
  }

  // default_providers - computed: false, optional: true, required: false
  private _defaultProviders = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultProvidersOutputReference(this, "default_providers");
  public get defaultProviders() {
    return this._defaultProviders;
  }
  public putDefaultProviders(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDefaultProviders) {
    this._defaultProviders.internalValue = value;
  }
  public resetDefaultProviders() {
    this._defaultProviders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultProvidersInput() {
    return this._defaultProviders.internalValue;
  }

  // default_service_export_to - computed: false, optional: true, required: false
  private _defaultServiceExportTo?: string[]; 
  public get defaultServiceExportTo() {
    return this.getListAttribute('default_service_export_to');
  }
  public set defaultServiceExportTo(value: string[]) {
    this._defaultServiceExportTo = value;
  }
  public resetDefaultServiceExportTo() {
    this._defaultServiceExportTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultServiceExportToInput() {
    return this._defaultServiceExportTo;
  }

  // default_virtual_service_export_to - computed: false, optional: true, required: false
  private _defaultVirtualServiceExportTo?: string[]; 
  public get defaultVirtualServiceExportTo() {
    return this.getListAttribute('default_virtual_service_export_to');
  }
  public set defaultVirtualServiceExportTo(value: string[]) {
    this._defaultVirtualServiceExportTo = value;
  }
  public resetDefaultVirtualServiceExportTo() {
    this._defaultVirtualServiceExportTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVirtualServiceExportToInput() {
    return this._defaultVirtualServiceExportTo;
  }

  // disable_envoy_listener_log - computed: false, optional: true, required: false
  private _disableEnvoyListenerLog?: boolean | cdktf.IResolvable; 
  public get disableEnvoyListenerLog() {
    return this.getBooleanAttribute('disable_envoy_listener_log');
  }
  public set disableEnvoyListenerLog(value: boolean | cdktf.IResolvable) {
    this._disableEnvoyListenerLog = value;
  }
  public resetDisableEnvoyListenerLog() {
    this._disableEnvoyListenerLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEnvoyListenerLogInput() {
    return this._disableEnvoyListenerLog;
  }

  // discovery_selectors - computed: false, optional: true, required: false
  private _discoverySelectors = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectorsList(this, "discovery_selectors", false);
  public get discoverySelectors() {
    return this._discoverySelectors;
  }
  public putDiscoverySelectors(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigDiscoverySelectors[] | cdktf.IResolvable) {
    this._discoverySelectors.internalValue = value;
  }
  public resetDiscoverySelectors() {
    this._discoverySelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverySelectorsInput() {
    return this._discoverySelectors.internalValue;
  }

  // dns_refresh_rate - computed: false, optional: true, required: false
  private _dnsRefreshRate?: string; 
  public get dnsRefreshRate() {
    return this.getStringAttribute('dns_refresh_rate');
  }
  public set dnsRefreshRate(value: string) {
    this._dnsRefreshRate = value;
  }
  public resetDnsRefreshRate() {
    this._dnsRefreshRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRefreshRateInput() {
    return this._dnsRefreshRate;
  }

  // enable_auto_mtls - computed: false, optional: true, required: false
  private _enableAutoMtls?: boolean | cdktf.IResolvable; 
  public get enableAutoMtls() {
    return this.getBooleanAttribute('enable_auto_mtls');
  }
  public set enableAutoMtls(value: boolean | cdktf.IResolvable) {
    this._enableAutoMtls = value;
  }
  public resetEnableAutoMtls() {
    this._enableAutoMtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoMtlsInput() {
    return this._enableAutoMtls;
  }

  // enable_envoy_access_log_service - computed: false, optional: true, required: false
  private _enableEnvoyAccessLogService?: boolean | cdktf.IResolvable; 
  public get enableEnvoyAccessLogService() {
    return this.getBooleanAttribute('enable_envoy_access_log_service');
  }
  public set enableEnvoyAccessLogService(value: boolean | cdktf.IResolvable) {
    this._enableEnvoyAccessLogService = value;
  }
  public resetEnableEnvoyAccessLogService() {
    this._enableEnvoyAccessLogService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEnvoyAccessLogServiceInput() {
    return this._enableEnvoyAccessLogService;
  }

  // enable_prometheus_merge - computed: false, optional: true, required: false
  private _enablePrometheusMerge?: boolean | cdktf.IResolvable; 
  public get enablePrometheusMerge() {
    return this.getBooleanAttribute('enable_prometheus_merge');
  }
  public set enablePrometheusMerge(value: boolean | cdktf.IResolvable) {
    this._enablePrometheusMerge = value;
  }
  public resetEnablePrometheusMerge() {
    this._enablePrometheusMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrometheusMergeInput() {
    return this._enablePrometheusMerge;
  }

  // enable_tracing - computed: false, optional: true, required: false
  private _enableTracing?: boolean | cdktf.IResolvable; 
  public get enableTracing() {
    return this.getBooleanAttribute('enable_tracing');
  }
  public set enableTracing(value: boolean | cdktf.IResolvable) {
    this._enableTracing = value;
  }
  public resetEnableTracing() {
    this._enableTracing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTracingInput() {
    return this._enableTracing;
  }

  // extension_providers - computed: false, optional: true, required: false
  private _extensionProviders = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProvidersList(this, "extension_providers", false);
  public get extensionProviders() {
    return this._extensionProviders;
  }
  public putExtensionProviders(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigExtensionProviders[] | cdktf.IResolvable) {
    this._extensionProviders.internalValue = value;
  }
  public resetExtensionProviders() {
    this._extensionProviders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionProvidersInput() {
    return this._extensionProviders.internalValue;
  }

  // h2_upgrade_policy - computed: false, optional: true, required: false
  private _h2UpgradePolicy?: string; 
  public get h2UpgradePolicy() {
    return this.getStringAttribute('h2_upgrade_policy');
  }
  public set h2UpgradePolicy(value: string) {
    this._h2UpgradePolicy = value;
  }
  public resetH2UpgradePolicy() {
    this._h2UpgradePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h2UpgradePolicyInput() {
    return this._h2UpgradePolicy;
  }

  // inbound_cluster_stat_name - computed: false, optional: true, required: false
  private _inboundClusterStatName?: string; 
  public get inboundClusterStatName() {
    return this.getStringAttribute('inbound_cluster_stat_name');
  }
  public set inboundClusterStatName(value: string) {
    this._inboundClusterStatName = value;
  }
  public resetInboundClusterStatName() {
    this._inboundClusterStatName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundClusterStatNameInput() {
    return this._inboundClusterStatName;
  }

  // ingress_class - computed: false, optional: true, required: false
  private _ingressClass?: string; 
  public get ingressClass() {
    return this.getStringAttribute('ingress_class');
  }
  public set ingressClass(value: string) {
    this._ingressClass = value;
  }
  public resetIngressClass() {
    this._ingressClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressClassInput() {
    return this._ingressClass;
  }

  // ingress_controller_mode - computed: false, optional: true, required: false
  private _ingressControllerMode?: string; 
  public get ingressControllerMode() {
    return this.getStringAttribute('ingress_controller_mode');
  }
  public set ingressControllerMode(value: string) {
    this._ingressControllerMode = value;
  }
  public resetIngressControllerMode() {
    this._ingressControllerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressControllerModeInput() {
    return this._ingressControllerMode;
  }

  // ingress_selector - computed: false, optional: true, required: false
  private _ingressSelector?: string; 
  public get ingressSelector() {
    return this.getStringAttribute('ingress_selector');
  }
  public set ingressSelector(value: string) {
    this._ingressSelector = value;
  }
  public resetIngressSelector() {
    this._ingressSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressSelectorInput() {
    return this._ingressSelector;
  }

  // ingress_service - computed: false, optional: true, required: false
  private _ingressService?: string; 
  public get ingressService() {
    return this.getStringAttribute('ingress_service');
  }
  public set ingressService(value: string) {
    this._ingressService = value;
  }
  public resetIngressService() {
    this._ingressService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressServiceInput() {
    return this._ingressService;
  }

  // locality_lb_setting - computed: false, optional: true, required: false
  private _localityLbSetting = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSettingOutputReference(this, "locality_lb_setting");
  public get localityLbSetting() {
    return this._localityLbSetting;
  }
  public putLocalityLbSetting(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigLocalityLbSetting) {
    this._localityLbSetting.internalValue = value;
  }
  public resetLocalityLbSetting() {
    this._localityLbSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityLbSettingInput() {
    return this._localityLbSetting.internalValue;
  }

  // mesh_mtls - computed: false, optional: true, required: false
  private _meshMtls = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigMeshMtlsOutputReference(this, "mesh_mtls");
  public get meshMtls() {
    return this._meshMtls;
  }
  public putMeshMtls(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigMeshMtls) {
    this._meshMtls.internalValue = value;
  }
  public resetMeshMtls() {
    this._meshMtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshMtlsInput() {
    return this._meshMtls.internalValue;
  }

  // outbound_cluster_stat_name - computed: false, optional: true, required: false
  private _outboundClusterStatName?: string; 
  public get outboundClusterStatName() {
    return this.getStringAttribute('outbound_cluster_stat_name');
  }
  public set outboundClusterStatName(value: string) {
    this._outboundClusterStatName = value;
  }
  public resetOutboundClusterStatName() {
    this._outboundClusterStatName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundClusterStatNameInput() {
    return this._outboundClusterStatName;
  }

  // outbound_traffic_policy - computed: false, optional: true, required: false
  private _outboundTrafficPolicy = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigOutboundTrafficPolicyOutputReference(this, "outbound_traffic_policy");
  public get outboundTrafficPolicy() {
    return this._outboundTrafficPolicy;
  }
  public putOutboundTrafficPolicy(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigOutboundTrafficPolicy) {
    this._outboundTrafficPolicy.internalValue = value;
  }
  public resetOutboundTrafficPolicy() {
    this._outboundTrafficPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundTrafficPolicyInput() {
    return this._outboundTrafficPolicy.internalValue;
  }

  // path_normalization - computed: false, optional: true, required: false
  private _pathNormalization = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigPathNormalizationOutputReference(this, "path_normalization");
  public get pathNormalization() {
    return this._pathNormalization;
  }
  public putPathNormalization(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigPathNormalization) {
    this._pathNormalization.internalValue = value;
  }
  public resetPathNormalization() {
    this._pathNormalization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathNormalizationInput() {
    return this._pathNormalization.internalValue;
  }

  // protocol_detection_timeout - computed: false, optional: true, required: false
  private _protocolDetectionTimeout?: string; 
  public get protocolDetectionTimeout() {
    return this.getStringAttribute('protocol_detection_timeout');
  }
  public set protocolDetectionTimeout(value: string) {
    this._protocolDetectionTimeout = value;
  }
  public resetProtocolDetectionTimeout() {
    this._protocolDetectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolDetectionTimeoutInput() {
    return this._protocolDetectionTimeout;
  }

  // proxy_http_port - computed: false, optional: true, required: false
  private _proxyHttpPort?: number; 
  public get proxyHttpPort() {
    return this.getNumberAttribute('proxy_http_port');
  }
  public set proxyHttpPort(value: number) {
    this._proxyHttpPort = value;
  }
  public resetProxyHttpPort() {
    this._proxyHttpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHttpPortInput() {
    return this._proxyHttpPort;
  }

  // proxy_listen_port - computed: false, optional: true, required: false
  private _proxyListenPort?: number; 
  public get proxyListenPort() {
    return this.getNumberAttribute('proxy_listen_port');
  }
  public set proxyListenPort(value: number) {
    this._proxyListenPort = value;
  }
  public resetProxyListenPort() {
    this._proxyListenPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyListenPortInput() {
    return this._proxyListenPort;
  }

  // root_namespace - computed: false, optional: true, required: false
  private _rootNamespace?: string; 
  public get rootNamespace() {
    return this.getStringAttribute('root_namespace');
  }
  public set rootNamespace(value: string) {
    this._rootNamespace = value;
  }
  public resetRootNamespace() {
    this._rootNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootNamespaceInput() {
    return this._rootNamespace;
  }

  // service_settings - computed: false, optional: true, required: false
  private _serviceSettings = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettingsList(this, "service_settings", false);
  public get serviceSettings() {
    return this._serviceSettings;
  }
  public putServiceSettings(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigServiceSettings[] | cdktf.IResolvable) {
    this._serviceSettings.internalValue = value;
  }
  public resetServiceSettings() {
    this._serviceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSettingsInput() {
    return this._serviceSettings.internalValue;
  }

  // tcp_keepalive - computed: false, optional: true, required: false
  private _tcpKeepalive = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigTcpKeepaliveOutputReference(this, "tcp_keepalive");
  public get tcpKeepalive() {
    return this._tcpKeepalive;
  }
  public putTcpKeepalive(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigTcpKeepalive) {
    this._tcpKeepalive.internalValue = value;
  }
  public resetTcpKeepalive() {
    this._tcpKeepalive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpKeepaliveInput() {
    return this._tcpKeepalive.internalValue;
  }

  // trust_domain - computed: false, optional: true, required: false
  private _trustDomain?: string; 
  public get trustDomain() {
    return this.getStringAttribute('trust_domain');
  }
  public set trustDomain(value: string) {
    this._trustDomain = value;
  }
  public resetTrustDomain() {
    this._trustDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustDomainInput() {
    return this._trustDomain;
  }

  // trust_domain_aliases - computed: false, optional: true, required: false
  private _trustDomainAliases?: string[]; 
  public get trustDomainAliases() {
    return this.getListAttribute('trust_domain_aliases');
  }
  public set trustDomainAliases(value: string[]) {
    this._trustDomainAliases = value;
  }
  public resetTrustDomainAliases() {
    this._trustDomainAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustDomainAliasesInput() {
    return this._trustDomainAliases;
  }

  // verify_certificate_at_client - computed: false, optional: true, required: false
  private _verifyCertificateAtClient?: boolean | cdktf.IResolvable; 
  public get verifyCertificateAtClient() {
    return this.getBooleanAttribute('verify_certificate_at_client');
  }
  public set verifyCertificateAtClient(value: boolean | cdktf.IResolvable) {
    this._verifyCertificateAtClient = value;
  }
  public resetVerifyCertificateAtClient() {
    this._verifyCertificateAtClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertificateAtClientInput() {
    return this._verifyCertificateAtClient;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#config DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfig;
}

export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigToTerraform(struct!.config),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest k8s_servicemesh_cisco_com_istio_mesh_v1alpha1_manifest}
*/
export class DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_servicemesh_cisco_com_istio_mesh_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SServicemeshCiscoComIstioMeshV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_servicemesh_cisco_com_istio_mesh_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/servicemesh_cisco_com_istio_mesh_v1alpha1_manifest k8s_servicemesh_cisco_com_istio_mesh_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_servicemesh_cisco_com_istio_mesh_v1alpha1_manifest',
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
  private _metadata = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpec) {
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
      metadata: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SServicemeshCiscoComIstioMeshV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
