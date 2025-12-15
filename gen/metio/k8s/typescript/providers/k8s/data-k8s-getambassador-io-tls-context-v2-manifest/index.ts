// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGetambassadorIoTlsContextV2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest#metadata DataK8SGetambassadorIoTlsContextV2Manifest#metadata}
  */
  readonly metadata: DataK8SGetambassadorIoTlsContextV2ManifestMetadata;
  /**
  * TLSContextSpec defines the desired state of TLSContext
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest#spec DataK8SGetambassadorIoTlsContextV2Manifest#spec}
  */
  readonly spec?: DataK8SGetambassadorIoTlsContextV2ManifestSpec;
}
export interface DataK8SGetambassadorIoTlsContextV2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest#annotations DataK8SGetambassadorIoTlsContextV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest#labels DataK8SGetambassadorIoTlsContextV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest#name DataK8SGetambassadorIoTlsContextV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest#namespace DataK8SGetambassadorIoTlsContextV2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGetambassadorIoTlsContextV2ManifestMetadataToTerraform(struct?: DataK8SGetambassadorIoTlsContextV2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SGetambassadorIoTlsContextV2ManifestMetadataToHclTerraform(struct?: DataK8SGetambassadorIoTlsContextV2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SGetambassadorIoTlsContextV2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoTlsContextV2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoTlsContextV2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SGetambassadorIoTlsContextV2ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest#alpn_protocols DataK8SGetambassadorIoTlsContextV2Manifest#alpn_protocols}
  */
  readonly alpnProtocols?: string;
  /**
  * AmbassadorID declares which Ambassador instances should pay attention to this resource. May either be a string or a list of strings. If no value is provided, the default is: ambassador_id: - 'default'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest#ambassador_id DataK8SGetambassadorIoTlsContextV2Manifest#ambassador_id}
  */
  readonly ambassadorId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest#ca_secret DataK8SGetambassadorIoTlsContextV2Manifest#ca_secret}
  */
  readonly caSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest#cacert_chain_file DataK8SGetambassadorIoTlsContextV2Manifest#cacert_chain_file}
  */
  readonly cacertChainFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest#cert_chain_file DataK8SGetambassadorIoTlsContextV2Manifest#cert_chain_file}
  */
  readonly certChainFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest#cert_required DataK8SGetambassadorIoTlsContextV2Manifest#cert_required}
  */
  readonly certRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest#cipher_suites DataK8SGetambassadorIoTlsContextV2Manifest#cipher_suites}
  */
  readonly cipherSuites?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest#ecdh_curves DataK8SGetambassadorIoTlsContextV2Manifest#ecdh_curves}
  */
  readonly ecdhCurves?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest#hosts DataK8SGetambassadorIoTlsContextV2Manifest#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest#max_tls_version DataK8SGetambassadorIoTlsContextV2Manifest#max_tls_version}
  */
  readonly maxTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest#min_tls_version DataK8SGetambassadorIoTlsContextV2Manifest#min_tls_version}
  */
  readonly minTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest#private_key_file DataK8SGetambassadorIoTlsContextV2Manifest#private_key_file}
  */
  readonly privateKeyFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest#redirect_cleartext_from DataK8SGetambassadorIoTlsContextV2Manifest#redirect_cleartext_from}
  */
  readonly redirectCleartextFrom?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest#secret DataK8SGetambassadorIoTlsContextV2Manifest#secret}
  */
  readonly secret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest#secret_namespacing DataK8SGetambassadorIoTlsContextV2Manifest#secret_namespacing}
  */
  readonly secretNamespacing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest#sni DataK8SGetambassadorIoTlsContextV2Manifest#sni}
  */
  readonly sni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest#v3_crl_secret DataK8SGetambassadorIoTlsContextV2Manifest#v3_crl_secret}
  */
  readonly v3CrlSecret?: string;
}

export function dataK8SGetambassadorIoTlsContextV2ManifestSpecToTerraform(struct?: DataK8SGetambassadorIoTlsContextV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alpn_protocols: cdktf.stringToTerraform(struct!.alpnProtocols),
    ambassador_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ambassadorId),
    ca_secret: cdktf.stringToTerraform(struct!.caSecret),
    cacert_chain_file: cdktf.stringToTerraform(struct!.cacertChainFile),
    cert_chain_file: cdktf.stringToTerraform(struct!.certChainFile),
    cert_required: cdktf.booleanToTerraform(struct!.certRequired),
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    ecdh_curves: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ecdhCurves),
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    max_tls_version: cdktf.stringToTerraform(struct!.maxTlsVersion),
    min_tls_version: cdktf.stringToTerraform(struct!.minTlsVersion),
    private_key_file: cdktf.stringToTerraform(struct!.privateKeyFile),
    redirect_cleartext_from: cdktf.numberToTerraform(struct!.redirectCleartextFrom),
    secret: cdktf.stringToTerraform(struct!.secret),
    secret_namespacing: cdktf.booleanToTerraform(struct!.secretNamespacing),
    sni: cdktf.stringToTerraform(struct!.sni),
    v3_crl_secret: cdktf.stringToTerraform(struct!.v3CrlSecret),
  }
}


export function dataK8SGetambassadorIoTlsContextV2ManifestSpecToHclTerraform(struct?: DataK8SGetambassadorIoTlsContextV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alpn_protocols: {
      value: cdktf.stringToHclTerraform(struct!.alpnProtocols),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ambassador_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ambassadorId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ca_secret: {
      value: cdktf.stringToHclTerraform(struct!.caSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cacert_chain_file: {
      value: cdktf.stringToHclTerraform(struct!.cacertChainFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_chain_file: {
      value: cdktf.stringToHclTerraform(struct!.certChainFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_required: {
      value: cdktf.booleanToHclTerraform(struct!.certRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ecdh_curves: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ecdhCurves),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_tls_version: {
      value: cdktf.stringToHclTerraform(struct!.maxTlsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_tls_version: {
      value: cdktf.stringToHclTerraform(struct!.minTlsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_file: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_cleartext_from: {
      value: cdktf.numberToHclTerraform(struct!.redirectCleartextFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_namespacing: {
      value: cdktf.booleanToHclTerraform(struct!.secretNamespacing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sni: {
      value: cdktf.stringToHclTerraform(struct!.sni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_crl_secret: {
      value: cdktf.stringToHclTerraform(struct!.v3CrlSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoTlsContextV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoTlsContextV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alpnProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.alpnProtocols = this._alpnProtocols;
    }
    if (this._ambassadorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ambassadorId = this._ambassadorId;
    }
    if (this._caSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.caSecret = this._caSecret;
    }
    if (this._cacertChainFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacertChainFile = this._cacertChainFile;
    }
    if (this._certChainFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certChainFile = this._certChainFile;
    }
    if (this._certRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.certRequired = this._certRequired;
    }
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._ecdhCurves !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecdhCurves = this._ecdhCurves;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._maxTlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTlsVersion = this._maxTlsVersion;
    }
    if (this._minTlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTlsVersion = this._minTlsVersion;
    }
    if (this._privateKeyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyFile = this._privateKeyFile;
    }
    if (this._redirectCleartextFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectCleartextFrom = this._redirectCleartextFrom;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._secretNamespacing !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretNamespacing = this._secretNamespacing;
    }
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    if (this._v3CrlSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3CrlSecret = this._v3CrlSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoTlsContextV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alpnProtocols = undefined;
      this._ambassadorId = undefined;
      this._caSecret = undefined;
      this._cacertChainFile = undefined;
      this._certChainFile = undefined;
      this._certRequired = undefined;
      this._cipherSuites = undefined;
      this._ecdhCurves = undefined;
      this._hosts = undefined;
      this._maxTlsVersion = undefined;
      this._minTlsVersion = undefined;
      this._privateKeyFile = undefined;
      this._redirectCleartextFrom = undefined;
      this._secret = undefined;
      this._secretNamespacing = undefined;
      this._sni = undefined;
      this._v3CrlSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alpnProtocols = value.alpnProtocols;
      this._ambassadorId = value.ambassadorId;
      this._caSecret = value.caSecret;
      this._cacertChainFile = value.cacertChainFile;
      this._certChainFile = value.certChainFile;
      this._certRequired = value.certRequired;
      this._cipherSuites = value.cipherSuites;
      this._ecdhCurves = value.ecdhCurves;
      this._hosts = value.hosts;
      this._maxTlsVersion = value.maxTlsVersion;
      this._minTlsVersion = value.minTlsVersion;
      this._privateKeyFile = value.privateKeyFile;
      this._redirectCleartextFrom = value.redirectCleartextFrom;
      this._secret = value.secret;
      this._secretNamespacing = value.secretNamespacing;
      this._sni = value.sni;
      this._v3CrlSecret = value.v3CrlSecret;
    }
  }

  // alpn_protocols - computed: false, optional: true, required: false
  private _alpnProtocols?: string; 
  public get alpnProtocols() {
    return this.getStringAttribute('alpn_protocols');
  }
  public set alpnProtocols(value: string) {
    this._alpnProtocols = value;
  }
  public resetAlpnProtocols() {
    this._alpnProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alpnProtocolsInput() {
    return this._alpnProtocols;
  }

  // ambassador_id - computed: false, optional: true, required: false
  private _ambassadorId?: string[]; 
  public get ambassadorId() {
    return this.getListAttribute('ambassador_id');
  }
  public set ambassadorId(value: string[]) {
    this._ambassadorId = value;
  }
  public resetAmbassadorId() {
    this._ambassadorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ambassadorIdInput() {
    return this._ambassadorId;
  }

  // ca_secret - computed: false, optional: true, required: false
  private _caSecret?: string; 
  public get caSecret() {
    return this.getStringAttribute('ca_secret');
  }
  public set caSecret(value: string) {
    this._caSecret = value;
  }
  public resetCaSecret() {
    this._caSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caSecretInput() {
    return this._caSecret;
  }

  // cacert_chain_file - computed: false, optional: true, required: false
  private _cacertChainFile?: string; 
  public get cacertChainFile() {
    return this.getStringAttribute('cacert_chain_file');
  }
  public set cacertChainFile(value: string) {
    this._cacertChainFile = value;
  }
  public resetCacertChainFile() {
    this._cacertChainFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertChainFileInput() {
    return this._cacertChainFile;
  }

  // cert_chain_file - computed: false, optional: true, required: false
  private _certChainFile?: string; 
  public get certChainFile() {
    return this.getStringAttribute('cert_chain_file');
  }
  public set certChainFile(value: string) {
    this._certChainFile = value;
  }
  public resetCertChainFile() {
    this._certChainFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certChainFileInput() {
    return this._certChainFile;
  }

  // cert_required - computed: false, optional: true, required: false
  private _certRequired?: boolean | cdktf.IResolvable; 
  public get certRequired() {
    return this.getBooleanAttribute('cert_required');
  }
  public set certRequired(value: boolean | cdktf.IResolvable) {
    this._certRequired = value;
  }
  public resetCertRequired() {
    this._certRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certRequiredInput() {
    return this._certRequired;
  }

  // cipher_suites - computed: false, optional: true, required: false
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  public resetCipherSuites() {
    this._cipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // ecdh_curves - computed: false, optional: true, required: false
  private _ecdhCurves?: string[]; 
  public get ecdhCurves() {
    return this.getListAttribute('ecdh_curves');
  }
  public set ecdhCurves(value: string[]) {
    this._ecdhCurves = value;
  }
  public resetEcdhCurves() {
    this._ecdhCurves = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecdhCurvesInput() {
    return this._ecdhCurves;
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

  // max_tls_version - computed: false, optional: true, required: false
  private _maxTlsVersion?: string; 
  public get maxTlsVersion() {
    return this.getStringAttribute('max_tls_version');
  }
  public set maxTlsVersion(value: string) {
    this._maxTlsVersion = value;
  }
  public resetMaxTlsVersion() {
    this._maxTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTlsVersionInput() {
    return this._maxTlsVersion;
  }

  // min_tls_version - computed: false, optional: true, required: false
  private _minTlsVersion?: string; 
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }
  public set minTlsVersion(value: string) {
    this._minTlsVersion = value;
  }
  public resetMinTlsVersion() {
    this._minTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTlsVersionInput() {
    return this._minTlsVersion;
  }

  // private_key_file - computed: false, optional: true, required: false
  private _privateKeyFile?: string; 
  public get privateKeyFile() {
    return this.getStringAttribute('private_key_file');
  }
  public set privateKeyFile(value: string) {
    this._privateKeyFile = value;
  }
  public resetPrivateKeyFile() {
    this._privateKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyFileInput() {
    return this._privateKeyFile;
  }

  // redirect_cleartext_from - computed: false, optional: true, required: false
  private _redirectCleartextFrom?: number; 
  public get redirectCleartextFrom() {
    return this.getNumberAttribute('redirect_cleartext_from');
  }
  public set redirectCleartextFrom(value: number) {
    this._redirectCleartextFrom = value;
  }
  public resetRedirectCleartextFrom() {
    this._redirectCleartextFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectCleartextFromInput() {
    return this._redirectCleartextFrom;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // secret_namespacing - computed: false, optional: true, required: false
  private _secretNamespacing?: boolean | cdktf.IResolvable; 
  public get secretNamespacing() {
    return this.getBooleanAttribute('secret_namespacing');
  }
  public set secretNamespacing(value: boolean | cdktf.IResolvable) {
    this._secretNamespacing = value;
  }
  public resetSecretNamespacing() {
    this._secretNamespacing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNamespacingInput() {
    return this._secretNamespacing;
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

  // v3_crl_secret - computed: false, optional: true, required: false
  private _v3CrlSecret?: string; 
  public get v3CrlSecret() {
    return this.getStringAttribute('v3_crl_secret');
  }
  public set v3CrlSecret(value: string) {
    this._v3CrlSecret = value;
  }
  public resetV3CrlSecret() {
    this._v3CrlSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3CrlSecretInput() {
    return this._v3CrlSecret;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest k8s_getambassador_io_tls_context_v2_manifest}
*/
export class DataK8SGetambassadorIoTlsContextV2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_getambassador_io_tls_context_v2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGetambassadorIoTlsContextV2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGetambassadorIoTlsContextV2Manifest to import
  * @param importFromId The id of the existing DataK8SGetambassadorIoTlsContextV2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGetambassadorIoTlsContextV2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_getambassador_io_tls_context_v2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_tls_context_v2_manifest k8s_getambassador_io_tls_context_v2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGetambassadorIoTlsContextV2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGetambassadorIoTlsContextV2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_getambassador_io_tls_context_v2_manifest',
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
  private _metadata = new DataK8SGetambassadorIoTlsContextV2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGetambassadorIoTlsContextV2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SGetambassadorIoTlsContextV2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGetambassadorIoTlsContextV2ManifestSpec) {
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
      metadata: dataK8SGetambassadorIoTlsContextV2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGetambassadorIoTlsContextV2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGetambassadorIoTlsContextV2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGetambassadorIoTlsContextV2ManifestMetadata",
      },
      spec: {
        value: dataK8SGetambassadorIoTlsContextV2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGetambassadorIoTlsContextV2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
