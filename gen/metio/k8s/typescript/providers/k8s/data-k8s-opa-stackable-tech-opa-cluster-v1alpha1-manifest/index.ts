// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#metadata DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#spec DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpec;
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#annotations DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#labels DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#name DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#namespace DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendExperimentalXfscAas {
  /**
  * Hostname of the identity provider, e.g. 'my.aas.corp'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#hostname DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#hostname}
  */
  readonly hostname: string;
  /**
  * Port of the identity provider. Defaults to port 5000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#port DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendExperimentalXfscAasToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendExperimentalXfscAas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendExperimentalXfscAasToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendExperimentalXfscAas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
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

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendExperimentalXfscAasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendExperimentalXfscAas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendExperimentalXfscAas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._port = value.port;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServerCaCert {
  /**
  * Name of the [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass) which will provide the CA certificate. Note that a SecretClass does not need to have a key but can also work with just a CA certificate, so if you got provided with a CA cert but don't have access to the key you can still use this method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#secret_class DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#secret_class}
  */
  readonly secretClass?: string;
  /**
  * Use TLS and the CA certificates trusted by the common web browsers to verify the server. This can be useful when you e.g. use public AWS S3 or other public available services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#web_pki DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#web_pki}
  */
  readonly webPki?: { [key: string]: string };
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServerCaCertToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServerCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_class: cdktf.stringToTerraform(struct!.secretClass),
    web_pki: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.webPki),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServerCaCertToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServerCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_class: {
      value: cdktf.stringToHclTerraform(struct!.secretClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_pki: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.webPki),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServerCaCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServerCaCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretClass = this._secretClass;
    }
    if (this._webPki !== undefined) {
      hasAnyValues = true;
      internalValueResult.webPki = this._webPki;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServerCaCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretClass = undefined;
      this._webPki = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretClass = value.secretClass;
      this._webPki = value.webPki;
    }
  }

  // secret_class - computed: false, optional: true, required: false
  private _secretClass?: string; 
  public get secretClass() {
    return this.getStringAttribute('secret_class');
  }
  public set secretClass(value: string) {
    this._secretClass = value;
  }
  public resetSecretClass() {
    this._secretClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretClassInput() {
    return this._secretClass;
  }

  // web_pki - computed: false, optional: true, required: false
  private _webPki?: { [key: string]: string }; 
  public get webPki() {
    return this.getStringMapAttribute('web_pki');
  }
  public set webPki(value: { [key: string]: string }) {
    this._webPki = value;
  }
  public resetWebPki() {
    this._webPki = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webPkiInput() {
    return this._webPki;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServer {
  /**
  * CA cert to verify the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#ca_cert DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#ca_cert}
  */
  readonly caCert: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServerCaCert;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServerToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServerCaCertToTerraform(struct!.caCert),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServerToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServerCaCertToHclTerraform(struct!.caCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServerCaCert",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert.internalValue = value.caCert;
    }
  }

  // ca_cert - computed: false, optional: false, required: true
  private _caCert = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServerCaCertOutputReference(this, "ca_cert");
  public get caCert() {
    return this._caCert;
  }
  public putCaCert(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServerCaCert) {
    this._caCert.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert.internalValue;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerification {
  /**
  * Use TLS but don't verify certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#none DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#none}
  */
  readonly none?: { [key: string]: string };
  /**
  * Use TLS and a CA certificate to verify the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#server DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#server}
  */
  readonly server?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServer;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    none: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.none),
    server: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServerToTerraform(struct!.server),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    none: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.none),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    server: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServerToHclTerraform(struct!.server),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._none = undefined;
      this._server.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._none = value.none;
      this._server.internalValue = value.server;
    }
  }

  // none - computed: false, optional: true, required: false
  private _none?: { [key: string]: string }; 
  public get none() {
    return this.getStringMapAttribute('none');
  }
  public set none(value: { [key: string]: string }) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }

  // server - computed: false, optional: true, required: false
  private _server = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationServer) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTls {
  /**
  * The verification method used to verify the certificates of the server and/or the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#verification DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#verification}
  */
  readonly verification: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerification;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    verification: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationToTerraform(struct!.verification),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    verification: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationToHclTerraform(struct!.verification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerification",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._verification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verification = this._verification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._verification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._verification.internalValue = value.verification;
    }
  }

  // verification - computed: false, optional: false, required: true
  private _verification = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerificationOutputReference(this, "verification");
  public get verification() {
    return this._verification;
  }
  public putVerification(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsVerification) {
    this._verification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationInput() {
    return this._verification.internalValue;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloak {
  /**
  * The Keycloak realm that OPA's Keycloak account (as specified by 'credentialsSecretName' exists in). Typically 'master'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#admin_realm DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#admin_realm}
  */
  readonly adminRealm: string;
  /**
  * Name of a Secret that contains client credentials of a Keycloak account with permission to read user metadata. Must contain the fields 'clientId' and 'clientSecret'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#client_credentials_secret DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#client_credentials_secret}
  */
  readonly clientCredentialsSecret: string;
  /**
  * Hostname of the identity provider, e.g. 'my.keycloak.corp'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#hostname DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#hostname}
  */
  readonly hostname: string;
  /**
  * Port of the identity provider. If TLS is used defaults to '443', otherwise to '80'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#port DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Root HTTP path of the identity provider. Defaults to '/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#root_path DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#root_path}
  */
  readonly rootPath?: string;
  /**
  * Use a TLS connection. If not specified no TLS will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#tls DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTls;
  /**
  * The Keycloak realm that user metadata should be resolved from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#user_realm DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#user_realm}
  */
  readonly userRealm: string;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloak | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_realm: cdktf.stringToTerraform(struct!.adminRealm),
    client_credentials_secret: cdktf.stringToTerraform(struct!.clientCredentialsSecret),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    port: cdktf.numberToTerraform(struct!.port),
    root_path: cdktf.stringToTerraform(struct!.rootPath),
    tls: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsToTerraform(struct!.tls),
    user_realm: cdktf.stringToTerraform(struct!.userRealm),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloak | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_realm: {
      value: cdktf.stringToHclTerraform(struct!.adminRealm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_credentials_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientCredentialsSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
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
    root_path: {
      value: cdktf.stringToHclTerraform(struct!.rootPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTls",
    },
    user_realm: {
      value: cdktf.stringToHclTerraform(struct!.userRealm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloak | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminRealm !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminRealm = this._adminRealm;
    }
    if (this._clientCredentialsSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCredentialsSecret = this._clientCredentialsSecret;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._rootPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootPath = this._rootPath;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._userRealm !== undefined) {
      hasAnyValues = true;
      internalValueResult.userRealm = this._userRealm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloak | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminRealm = undefined;
      this._clientCredentialsSecret = undefined;
      this._hostname = undefined;
      this._port = undefined;
      this._rootPath = undefined;
      this._tls.internalValue = undefined;
      this._userRealm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminRealm = value.adminRealm;
      this._clientCredentialsSecret = value.clientCredentialsSecret;
      this._hostname = value.hostname;
      this._port = value.port;
      this._rootPath = value.rootPath;
      this._tls.internalValue = value.tls;
      this._userRealm = value.userRealm;
    }
  }

  // admin_realm - computed: false, optional: false, required: true
  private _adminRealm?: string; 
  public get adminRealm() {
    return this.getStringAttribute('admin_realm');
  }
  public set adminRealm(value: string) {
    this._adminRealm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminRealmInput() {
    return this._adminRealm;
  }

  // client_credentials_secret - computed: false, optional: false, required: true
  private _clientCredentialsSecret?: string; 
  public get clientCredentialsSecret() {
    return this.getStringAttribute('client_credentials_secret');
  }
  public set clientCredentialsSecret(value: string) {
    this._clientCredentialsSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCredentialsSecretInput() {
    return this._clientCredentialsSecret;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // root_path - computed: false, optional: true, required: false
  private _rootPath?: string; 
  public get rootPath() {
    return this.getStringAttribute('root_path');
  }
  public set rootPath(value: string) {
    this._rootPath = value;
  }
  public resetRootPath() {
    this._rootPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPathInput() {
    return this._rootPath;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // user_realm - computed: false, optional: false, required: true
  private _userRealm?: string; 
  public get userRealm() {
    return this.getStringAttribute('user_realm');
  }
  public set userRealm(value: string) {
    this._userRealm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userRealmInput() {
    return this._userRealm;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackend {
  /**
  * Backend that fetches user information from the Gaia-X Cross Federation Services Components (XFSC) Authentication & Authorization Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#experimental_xfsc_aas DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#experimental_xfsc_aas}
  */
  readonly experimentalXfscAas?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendExperimentalXfscAas;
  /**
  * Backend that fetches user information from Keycloak.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#keycloak DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#keycloak}
  */
  readonly keycloak?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloak;
  /**
  * Dummy backend that adds no extra user information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#none DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#none}
  */
  readonly none?: { [key: string]: string };
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    experimental_xfsc_aas: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendExperimentalXfscAasToTerraform(struct!.experimentalXfscAas),
    keycloak: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakToTerraform(struct!.keycloak),
    none: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.none),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    experimental_xfsc_aas: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendExperimentalXfscAasToHclTerraform(struct!.experimentalXfscAas),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendExperimentalXfscAas",
    },
    keycloak: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakToHclTerraform(struct!.keycloak),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloak",
    },
    none: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.none),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._experimentalXfscAas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.experimentalXfscAas = this._experimentalXfscAas?.internalValue;
    }
    if (this._keycloak?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keycloak = this._keycloak?.internalValue;
    }
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._experimentalXfscAas.internalValue = undefined;
      this._keycloak.internalValue = undefined;
      this._none = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._experimentalXfscAas.internalValue = value.experimentalXfscAas;
      this._keycloak.internalValue = value.keycloak;
      this._none = value.none;
    }
  }

  // experimental_xfsc_aas - computed: false, optional: true, required: false
  private _experimentalXfscAas = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendExperimentalXfscAasOutputReference(this, "experimental_xfsc_aas");
  public get experimentalXfscAas() {
    return this._experimentalXfscAas;
  }
  public putExperimentalXfscAas(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendExperimentalXfscAas) {
    this._experimentalXfscAas.internalValue = value;
  }
  public resetExperimentalXfscAas() {
    this._experimentalXfscAas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentalXfscAasInput() {
    return this._experimentalXfscAas.internalValue;
  }

  // keycloak - computed: false, optional: true, required: false
  private _keycloak = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloakOutputReference(this, "keycloak");
  public get keycloak() {
    return this._keycloak;
  }
  public putKeycloak(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendKeycloak) {
    this._keycloak.internalValue = value;
  }
  public resetKeycloak() {
    this._keycloak.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keycloakInput() {
    return this._keycloak.internalValue;
  }

  // none - computed: false, optional: true, required: false
  private _none?: { [key: string]: string }; 
  public get none() {
    return this.getStringMapAttribute('none');
  }
  public set none(value: { [key: string]: string }) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoCache {
  /**
  * How long metadata about each user should be cached for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#entry_time_to_live DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#entry_time_to_live}
  */
  readonly entryTimeToLive?: string;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoCacheToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_time_to_live: cdktf.stringToTerraform(struct!.entryTimeToLive),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoCacheToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_time_to_live: {
      value: cdktf.stringToHclTerraform(struct!.entryTimeToLive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoCache | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryTimeToLive !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryTimeToLive = this._entryTimeToLive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoCache | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entryTimeToLive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entryTimeToLive = value.entryTimeToLive;
    }
  }

  // entry_time_to_live - computed: false, optional: true, required: false
  private _entryTimeToLive?: string; 
  public get entryTimeToLive() {
    return this.getStringAttribute('entry_time_to_live');
  }
  public set entryTimeToLive(value: string) {
    this._entryTimeToLive = value;
  }
  public resetEntryTimeToLive() {
    this._entryTimeToLive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryTimeToLiveInput() {
    return this._entryTimeToLive;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfo {
  /**
  * The backend directory service to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#backend DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#backend}
  */
  readonly backend?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackend;
  /**
  * Caching configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#cache DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#cache}
  */
  readonly cache?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoCache;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendToTerraform(struct!.backend),
    cache: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoCacheToTerraform(struct!.cache),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendToHclTerraform(struct!.backend),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackend",
    },
    cache: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoCacheToHclTerraform(struct!.cache),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoCache",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backend = this._backend?.internalValue;
    }
    if (this._cache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backend.internalValue = undefined;
      this._cache.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backend.internalValue = value.backend;
      this._cache.internalValue = value.cache;
    }
  }

  // backend - computed: false, optional: true, required: false
  private _backend = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackendOutputReference(this, "backend");
  public get backend() {
    return this._backend;
  }
  public putBackend(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoBackend) {
    this._backend.internalValue = value;
  }
  public resetBackend() {
    this._backend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend.internalValue;
  }

  // cache - computed: false, optional: true, required: false
  private _cache = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoCacheOutputReference(this, "cache");
  public get cache() {
    return this._cache;
  }
  public putCache(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoCache) {
    this._cache.internalValue = value;
  }
  public resetCache() {
    this._cache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache.internalValue;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfig {
  /**
  * This field controls which type of Service the operator creates for this OpaCluster: * cluster-internal: Use a ClusterIP service * external-unstable: Use a NodePort service * external-stable: Use a LoadBalancer service This is a temporary solution with the goal to keep yaml manifests forward compatible. In the future, this setting will control which ListenerClass <https://docs.stackable.tech/home/stable/listener-operator/listenerclass.html> will be used to expose the service, and ListenerClass names will stay the same, allowing for a non-breaking change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#listener_class DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#listener_class}
  */
  readonly listenerClass?: string;
  /**
  * Configures how to fetch additional metadata about users (such as group memberships) from an external directory service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#user_info DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#user_info}
  */
  readonly userInfo?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfo;
  /**
  * Name of the Vector aggregator discovery ConfigMap. It must contain the key 'ADDRESS' with the address of the Vector aggregator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#vector_aggregator_config_map_name DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#vector_aggregator_config_map_name}
  */
  readonly vectorAggregatorConfigMapName?: string;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener_class: cdktf.stringToTerraform(struct!.listenerClass),
    user_info: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoToTerraform(struct!.userInfo),
    vector_aggregator_config_map_name: cdktf.stringToTerraform(struct!.vectorAggregatorConfigMapName),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listener_class: {
      value: cdktf.stringToHclTerraform(struct!.listenerClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_info: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoToHclTerraform(struct!.userInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfo",
    },
    vector_aggregator_config_map_name: {
      value: cdktf.stringToHclTerraform(struct!.vectorAggregatorConfigMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listenerClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerClass = this._listenerClass;
    }
    if (this._userInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInfo = this._userInfo?.internalValue;
    }
    if (this._vectorAggregatorConfigMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorAggregatorConfigMapName = this._vectorAggregatorConfigMapName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listenerClass = undefined;
      this._userInfo.internalValue = undefined;
      this._vectorAggregatorConfigMapName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listenerClass = value.listenerClass;
      this._userInfo.internalValue = value.userInfo;
      this._vectorAggregatorConfigMapName = value.vectorAggregatorConfigMapName;
    }
  }

  // listener_class - computed: false, optional: true, required: false
  private _listenerClass?: string; 
  public get listenerClass() {
    return this.getStringAttribute('listener_class');
  }
  public set listenerClass(value: string) {
    this._listenerClass = value;
  }
  public resetListenerClass() {
    this._listenerClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerClassInput() {
    return this._listenerClass;
  }

  // user_info - computed: false, optional: true, required: false
  private _userInfo = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfoOutputReference(this, "user_info");
  public get userInfo() {
    return this._userInfo;
  }
  public putUserInfo(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigUserInfo) {
    this._userInfo.internalValue = value;
  }
  public resetUserInfo() {
    this._userInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInfoInput() {
    return this._userInfo.internalValue;
  }

  // vector_aggregator_config_map_name - computed: false, optional: true, required: false
  private _vectorAggregatorConfigMapName?: string; 
  public get vectorAggregatorConfigMapName() {
    return this.getStringAttribute('vector_aggregator_config_map_name');
  }
  public set vectorAggregatorConfigMapName(value: string) {
    this._vectorAggregatorConfigMapName = value;
  }
  public resetVectorAggregatorConfigMapName() {
    this._vectorAggregatorConfigMapName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorAggregatorConfigMapNameInput() {
    return this._vectorAggregatorConfigMapName;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterOperation {
  /**
  * Flag to stop cluster reconciliation by the operator. This means that all changes in the custom resource spec are ignored until this flag is set to false or removed. The operator will however still watch the deployed resources at the time and update the custom resource status field. If applied at the same time with 'stopped', 'reconciliationPaused' will take precedence over 'stopped' and stop the reconciliation immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#reconciliation_paused DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#reconciliation_paused}
  */
  readonly reconciliationPaused?: boolean | cdktf.IResolvable;
  /**
  * Flag to stop the cluster. This means all deployed resources (e.g. Services, StatefulSets, ConfigMaps) are kept but all deployed Pods (e.g. replicas from a StatefulSet) are scaled to 0 and therefore stopped and removed. If applied at the same time with 'reconciliationPaused', the latter will pause reconciliation and 'stopped' will take no effect until 'reconciliationPaused' is set to false or removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#stopped DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#stopped}
  */
  readonly stopped?: boolean | cdktf.IResolvable;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterOperationToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reconciliation_paused: cdktf.booleanToTerraform(struct!.reconciliationPaused),
    stopped: cdktf.booleanToTerraform(struct!.stopped),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterOperationToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reconciliation_paused: {
      value: cdktf.booleanToHclTerraform(struct!.reconciliationPaused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stopped: {
      value: cdktf.booleanToHclTerraform(struct!.stopped),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reconciliationPaused !== undefined) {
      hasAnyValues = true;
      internalValueResult.reconciliationPaused = this._reconciliationPaused;
    }
    if (this._stopped !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopped = this._stopped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reconciliationPaused = undefined;
      this._stopped = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reconciliationPaused = value.reconciliationPaused;
      this._stopped = value.stopped;
    }
  }

  // reconciliation_paused - computed: false, optional: true, required: false
  private _reconciliationPaused?: boolean | cdktf.IResolvable; 
  public get reconciliationPaused() {
    return this.getBooleanAttribute('reconciliation_paused');
  }
  public set reconciliationPaused(value: boolean | cdktf.IResolvable) {
    this._reconciliationPaused = value;
  }
  public resetReconciliationPaused() {
    this._reconciliationPaused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconciliationPausedInput() {
    return this._reconciliationPaused;
  }

  // stopped - computed: false, optional: true, required: false
  private _stopped?: boolean | cdktf.IResolvable; 
  public get stopped() {
    return this.getBooleanAttribute('stopped');
  }
  public set stopped(value: boolean | cdktf.IResolvable) {
    this._stopped = value;
  }
  public resetStopped() {
    this._stopped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppedInput() {
    return this._stopped;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImagePullSecrets {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#name DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImagePullSecretsToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImagePullSecretsToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImagePullSecretsOutputReference {
    return new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImage {
  /**
  * Overwrite the docker image. Specify the full docker image name, e.g. 'docker.stackable.tech/stackable/superset:1.4.1-stackable2.1.0'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#custom DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: string;
  /**
  * Version of the product, e.g. '1.4.1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#product_version DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#product_version}
  */
  readonly productVersion?: string;
  /**
  * [Pull policy](https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy) used when pulling the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#pull_policy DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#pull_policy}
  */
  readonly pullPolicy?: string;
  /**
  * [Image pull secrets](https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod) to pull images from a private registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#pull_secrets DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#pull_secrets}
  */
  readonly pullSecrets?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Name of the docker repo, e.g. 'docker.stackable.tech/stackable'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#repo DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#repo}
  */
  readonly repo?: string;
  /**
  * Stackable version of the product, e.g. '23.4', '23.4.1' or '0.0.0-dev'. If not specified, the operator will use its own version, e.g. '23.4.1'. When using a nightly operator or a pr version, it will use the nightly '0.0.0-dev' image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#stackable_version DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#stackable_version}
  */
  readonly stackableVersion?: string;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImageToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: cdktf.stringToTerraform(struct!.custom),
    product_version: cdktf.stringToTerraform(struct!.productVersion),
    pull_policy: cdktf.stringToTerraform(struct!.pullPolicy),
    pull_secrets: cdktf.listMapper(dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImagePullSecretsToTerraform, false)(struct!.pullSecrets),
    repo: cdktf.stringToTerraform(struct!.repo),
    stackable_version: cdktf.stringToTerraform(struct!.stackableVersion),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImageToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom: {
      value: cdktf.stringToHclTerraform(struct!.custom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_version: {
      value: cdktf.stringToHclTerraform(struct!.productVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.pullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.pullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImagePullSecretsList",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stackable_version: {
      value: cdktf.stringToHclTerraform(struct!.stackableVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom;
    }
    if (this._productVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.productVersion = this._productVersion;
    }
    if (this._pullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullPolicy = this._pullPolicy;
    }
    if (this._pullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullSecrets = this._pullSecrets?.internalValue;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    if (this._stackableVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackableVersion = this._stackableVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._custom = undefined;
      this._productVersion = undefined;
      this._pullPolicy = undefined;
      this._pullSecrets.internalValue = undefined;
      this._repo = undefined;
      this._stackableVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._custom = value.custom;
      this._productVersion = value.productVersion;
      this._pullPolicy = value.pullPolicy;
      this._pullSecrets.internalValue = value.pullSecrets;
      this._repo = value.repo;
      this._stackableVersion = value.stackableVersion;
    }
  }

  // custom - computed: false, optional: true, required: false
  private _custom?: string; 
  public get custom() {
    return this.getStringAttribute('custom');
  }
  public set custom(value: string) {
    this._custom = value;
  }
  public resetCustom() {
    this._custom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom;
  }

  // product_version - computed: false, optional: true, required: false
  private _productVersion?: string; 
  public get productVersion() {
    return this.getStringAttribute('product_version');
  }
  public set productVersion(value: string) {
    this._productVersion = value;
  }
  public resetProductVersion() {
    this._productVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productVersionInput() {
    return this._productVersion;
  }

  // pull_policy - computed: false, optional: true, required: false
  private _pullPolicy?: string; 
  public get pullPolicy() {
    return this.getStringAttribute('pull_policy');
  }
  public set pullPolicy(value: string) {
    this._pullPolicy = value;
  }
  public resetPullPolicy() {
    this._pullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullPolicyInput() {
    return this._pullPolicy;
  }

  // pull_secrets - computed: false, optional: true, required: false
  private _pullSecrets = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImagePullSecretsList(this, "pull_secrets", false);
  public get pullSecrets() {
    return this._pullSecrets;
  }
  public putPullSecrets(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._pullSecrets.internalValue = value;
  }
  public resetPullSecrets() {
    this._pullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullSecretsInput() {
    return this._pullSecrets.internalValue;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // stackable_version - computed: false, optional: true, required: false
  private _stackableVersion?: string; 
  public get stackableVersion() {
    return this.getStringAttribute('stackable_version');
  }
  public set stackableVersion(value: string) {
    this._stackableVersion = value;
  }
  public resetStackableVersion() {
    this._stackableVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackableVersionInput() {
    return this._stackableVersion;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#node_affinity DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#node_selector DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#pod_affinity DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigAffinityToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeAffinity),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAffinity),
    pod_anti_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAntiAffinity),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigAffinityToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_anti_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAntiAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity;
    }
    if (this._podAntiAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity = undefined;
      this._nodeSelector = undefined;
      this._podAffinity = undefined;
      this._podAntiAffinity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity = value.nodeAffinity;
      this._nodeSelector = value.nodeSelector;
      this._podAffinity = value.podAffinity;
      this._podAntiAffinity = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity?: { [key: string]: string }; 
  public get nodeAffinity() {
    return this.getStringMapAttribute('node_affinity');
  }
  public set nodeAffinity(value: { [key: string]: string }) {
    this._nodeAffinity = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity?: { [key: string]: string }; 
  public get podAffinity() {
    return this.getStringMapAttribute('pod_affinity');
  }
  public set podAffinity(value: { [key: string]: string }) {
    this._podAffinity = value;
  }
  public resetPodAffinity() {
    this._podAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity?: { [key: string]: string }; 
  public get podAntiAffinity() {
    return this.getStringMapAttribute('pod_anti_affinity');
  }
  public set podAntiAffinity(value: { [key: string]: string }) {
    this._podAntiAffinity = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#level DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsoleToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#config_map DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustomToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: cdktf.stringToHclTerraform(struct!.configMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap = value.configMap;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap?: string; 
  public get configMap() {
    return this.getStringAttribute('config_map');
  }
  public set configMap(value: string) {
    this._configMap = value;
  }
  public resetConfigMap() {
    this._configMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#level DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFileToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFileToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#level DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggersToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#console DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#custom DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#file DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#loggers DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggers;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._console?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.console = this._console?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._loggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggers = this._loggers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._console.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._file.internalValue = undefined;
      this._loggers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._console.internalValue = value.console;
      this._custom.internalValue = value.custom;
      this._file.internalValue = value.file;
      this._loggers.internalValue = value.loggers;
    }
  }

  // console - computed: false, optional: true, required: false
  private _console = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersConsole) {
    this._console.internalValue = value;
  }
  public resetConsole() {
    this._console.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // loggers - computed: false, optional: true, required: false
  private _loggers = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersLoggers) {
    this._loggers.internalValue = value;
  }
  public resetLoggers() {
    this._loggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggersInput() {
    return this._loggers.internalValue;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#containers DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#enable_vector_agent DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainers",
    },
    enable_vector_agent: {
      value: cdktf.booleanToHclTerraform(struct!.enableVectorAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._enableVectorAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVectorAgent = this._enableVectorAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._enableVectorAgent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._enableVectorAgent = value.enableVectorAgent;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingContainers) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // enable_vector_agent - computed: false, optional: true, required: false
  private _enableVectorAgent?: boolean | cdktf.IResolvable; 
  public get enableVectorAgent() {
    return this.getBooleanAttribute('enable_vector_agent');
  }
  public set enableVectorAgent(value: boolean | cdktf.IResolvable) {
    this._enableVectorAgent = value;
  }
  public resetEnableVectorAgent() {
    this._enableVectorAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVectorAgentInput() {
    return this._enableVectorAgent;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#max DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#min DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesCpuToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesCpuToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#limit DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#runtime_limits DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesMemoryToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesMemoryToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.runtimeLimits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._runtimeLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeLimits = this._runtimeLimits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._runtimeLimits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._runtimeLimits = value.runtimeLimits;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // runtime_limits - computed: false, optional: true, required: false
  private _runtimeLimits?: { [key: string]: string }; 
  public get runtimeLimits() {
    return this.getStringMapAttribute('runtime_limits');
  }
  public set runtimeLimits(value: { [key: string]: string }) {
    this._runtimeLimits = value;
  }
  public resetRuntimeLimits() {
    this._runtimeLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeLimitsInput() {
    return this._runtimeLimits;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#cpu DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#memory DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#storage DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: { [key: string]: string };
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesMemoryToTerraform(struct!.memory),
    storage: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.storage),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesCpu",
    },
    memory: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesMemory",
    },
    storage: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.storage),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu.internalValue = value.cpu;
      this._memory.internalValue = value.memory;
      this._storage = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage?: { [key: string]: string }; 
  public get storage() {
    return this.getStringMapAttribute('storage');
  }
  public set storage(value: { [key: string]: string }) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#affinity DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigAffinity;
  /**
  * Time period Pods have to gracefully shut down, e.g. '30m', '1h' or '2d'. Consult the operator documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#graceful_shutdown_timeout DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#logging DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#resources DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResources;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigAffinityToTerraform(struct!.affinity),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    logging: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigAffinity",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLogging",
    },
    resources: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._gracefulShutdownTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulShutdownTimeout = this._gracefulShutdownTimeout;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._gracefulShutdownTimeout = undefined;
      this._logging.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._gracefulShutdownTimeout = value.gracefulShutdownTimeout;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // graceful_shutdown_timeout - computed: false, optional: true, required: false
  private _gracefulShutdownTimeout?: string; 
  public get gracefulShutdownTimeout() {
    return this.getStringAttribute('graceful_shutdown_timeout');
  }
  public set gracefulShutdownTimeout(value: string) {
    this._gracefulShutdownTimeout = value;
  }
  public resetGracefulShutdownTimeout() {
    this._gracefulShutdownTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulShutdownTimeoutInput() {
    return this._gracefulShutdownTimeout;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#node_affinity DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#node_selector DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#pod_affinity DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinityToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeAffinity),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAffinity),
    pod_anti_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAntiAffinity),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinityToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_anti_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAntiAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity;
    }
    if (this._podAntiAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity = undefined;
      this._nodeSelector = undefined;
      this._podAffinity = undefined;
      this._podAntiAffinity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity = value.nodeAffinity;
      this._nodeSelector = value.nodeSelector;
      this._podAffinity = value.podAffinity;
      this._podAntiAffinity = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity?: { [key: string]: string }; 
  public get nodeAffinity() {
    return this.getStringMapAttribute('node_affinity');
  }
  public set nodeAffinity(value: { [key: string]: string }) {
    this._nodeAffinity = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity?: { [key: string]: string }; 
  public get podAffinity() {
    return this.getStringMapAttribute('pod_affinity');
  }
  public set podAffinity(value: { [key: string]: string }) {
    this._podAffinity = value;
  }
  public resetPodAffinity() {
    this._podAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity?: { [key: string]: string }; 
  public get podAntiAffinity() {
    return this.getStringMapAttribute('pod_anti_affinity');
  }
  public set podAntiAffinity(value: { [key: string]: string }) {
    this._podAntiAffinity = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#level DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsoleToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#config_map DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustomToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: cdktf.stringToHclTerraform(struct!.configMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap = value.configMap;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap?: string; 
  public get configMap() {
    return this.getStringAttribute('config_map');
  }
  public set configMap(value: string) {
    this._configMap = value;
  }
  public resetConfigMap() {
    this._configMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#level DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFileToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFileToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#level DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggersToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#console DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#custom DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#file DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#loggers DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggers;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._console?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.console = this._console?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._loggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggers = this._loggers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._console.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._file.internalValue = undefined;
      this._loggers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._console.internalValue = value.console;
      this._custom.internalValue = value.custom;
      this._file.internalValue = value.file;
      this._loggers.internalValue = value.loggers;
    }
  }

  // console - computed: false, optional: true, required: false
  private _console = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersConsole) {
    this._console.internalValue = value;
  }
  public resetConsole() {
    this._console.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // loggers - computed: false, optional: true, required: false
  private _loggers = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersLoggers) {
    this._loggers.internalValue = value;
  }
  public resetLoggers() {
    this._loggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggersInput() {
    return this._loggers.internalValue;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#containers DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#enable_vector_agent DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainers",
    },
    enable_vector_agent: {
      value: cdktf.booleanToHclTerraform(struct!.enableVectorAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._enableVectorAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVectorAgent = this._enableVectorAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._enableVectorAgent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._enableVectorAgent = value.enableVectorAgent;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingContainers) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // enable_vector_agent - computed: false, optional: true, required: false
  private _enableVectorAgent?: boolean | cdktf.IResolvable; 
  public get enableVectorAgent() {
    return this.getBooleanAttribute('enable_vector_agent');
  }
  public set enableVectorAgent(value: boolean | cdktf.IResolvable) {
    this._enableVectorAgent = value;
  }
  public resetEnableVectorAgent() {
    this._enableVectorAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVectorAgentInput() {
    return this._enableVectorAgent;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#max DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#min DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpuToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpuToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#limit DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#runtime_limits DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemoryToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemoryToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.runtimeLimits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._runtimeLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeLimits = this._runtimeLimits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._runtimeLimits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._runtimeLimits = value.runtimeLimits;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // runtime_limits - computed: false, optional: true, required: false
  private _runtimeLimits?: { [key: string]: string }; 
  public get runtimeLimits() {
    return this.getStringMapAttribute('runtime_limits');
  }
  public set runtimeLimits(value: { [key: string]: string }) {
    this._runtimeLimits = value;
  }
  public resetRuntimeLimits() {
    this._runtimeLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeLimitsInput() {
    return this._runtimeLimits;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#cpu DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#memory DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#storage DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: { [key: string]: string };
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemoryToTerraform(struct!.memory),
    storage: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.storage),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpu",
    },
    memory: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemory",
    },
    storage: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.storage),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu.internalValue = value.cpu;
      this._memory.internalValue = value.memory;
      this._storage = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage?: { [key: string]: string }; 
  public get storage() {
    return this.getStringMapAttribute('storage');
  }
  public set storage(value: { [key: string]: string }) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#affinity DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinity;
  /**
  * Time period Pods have to gracefully shut down, e.g. '30m', '1h' or '2d'. Consult the operator documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#graceful_shutdown_timeout DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#logging DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#resources DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResources;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinityToTerraform(struct!.affinity),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    logging: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinity",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLogging",
    },
    resources: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._gracefulShutdownTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulShutdownTimeout = this._gracefulShutdownTimeout;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._gracefulShutdownTimeout = undefined;
      this._logging.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._gracefulShutdownTimeout = value.gracefulShutdownTimeout;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // graceful_shutdown_timeout - computed: false, optional: true, required: false
  private _gracefulShutdownTimeout?: string; 
  public get gracefulShutdownTimeout() {
    return this.getStringAttribute('graceful_shutdown_timeout');
  }
  public set gracefulShutdownTimeout(value: string) {
    this._gracefulShutdownTimeout = value;
  }
  public resetGracefulShutdownTimeout() {
    this._gracefulShutdownTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulShutdownTimeoutInput() {
    return this._gracefulShutdownTimeout;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#cli_overrides DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#config DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#config_overrides DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#env_overrides DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#pod_overrides DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#replicas DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cli_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cliOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfig",
    },
    config_overrides: {
      value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(struct!.configOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
    env_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cliOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliOverrides = this._cliOverrides;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._configOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.configOverrides = this._configOverrides;
    }
    if (this._envOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.envOverrides = this._envOverrides;
    }
    if (this._podOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.podOverrides = this._podOverrides;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cliOverrides = undefined;
      this._config.internalValue = undefined;
      this._configOverrides = undefined;
      this._envOverrides = undefined;
      this._podOverrides = undefined;
      this._replicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cliOverrides = value.cliOverrides;
      this._config.internalValue = value.config;
      this._configOverrides = value.configOverrides;
      this._envOverrides = value.envOverrides;
      this._podOverrides = value.podOverrides;
      this._replicas = value.replicas;
    }
  }

  // cli_overrides - computed: false, optional: true, required: false
  private _cliOverrides?: { [key: string]: string }; 
  public get cliOverrides() {
    return this.getStringMapAttribute('cli_overrides');
  }
  public set cliOverrides(value: { [key: string]: string }) {
    this._cliOverrides = value;
  }
  public resetCliOverrides() {
    this._cliOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliOverridesInput() {
    return this._cliOverrides;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // config_overrides - computed: false, optional: true, required: false
  private _configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get configOverrides() {
    return this.interpolationForAttribute('config_overrides');
  }
  public set configOverrides(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._configOverrides = value;
  }
  public resetConfigOverrides() {
    this._configOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOverridesInput() {
    return this._configOverrides;
  }

  // env_overrides - computed: false, optional: true, required: false
  private _envOverrides?: { [key: string]: string }; 
  public get envOverrides() {
    return this.getStringMapAttribute('env_overrides');
  }
  public set envOverrides(value: { [key: string]: string }) {
    this._envOverrides = value;
  }
  public resetEnvOverrides() {
    this._envOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envOverridesInput() {
    return this._envOverrides;
  }

  // pod_overrides - computed: false, optional: true, required: false
  private _podOverrides?: { [key: string]: string }; 
  public get podOverrides() {
    return this.getStringMapAttribute('pod_overrides');
  }
  public set podOverrides(value: { [key: string]: string }) {
    this._podOverrides = value;
  }
  public resetPodOverrides() {
    this._podOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podOverridesInput() {
    return this._podOverrides;
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
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#cli_overrides DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#config DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#config_overrides DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#env_overrides DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#pod_overrides DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * This is a product-agnostic RoleConfig, with nothing in it. It is used e.g. by products that have nothing configurable at role level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#role_config DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#role_config}
  */
  readonly roleConfig?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#role_groups DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#role_groups}
  */
  readonly roleGroups: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroups;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    role_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.roleConfig),
    role_groups: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsToTerraform(struct!.roleGroups),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cli_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cliOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfig",
    },
    config_overrides: {
      value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(struct!.configOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
    env_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    role_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.roleConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    role_groups: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsToHclTerraform(struct!.roleGroups),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroups",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cliOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliOverrides = this._cliOverrides;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._configOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.configOverrides = this._configOverrides;
    }
    if (this._envOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.envOverrides = this._envOverrides;
    }
    if (this._podOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.podOverrides = this._podOverrides;
    }
    if (this._roleConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleConfig = this._roleConfig;
    }
    if (this._roleGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleGroups = this._roleGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cliOverrides = undefined;
      this._config.internalValue = undefined;
      this._configOverrides = undefined;
      this._envOverrides = undefined;
      this._podOverrides = undefined;
      this._roleConfig = undefined;
      this._roleGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cliOverrides = value.cliOverrides;
      this._config.internalValue = value.config;
      this._configOverrides = value.configOverrides;
      this._envOverrides = value.envOverrides;
      this._podOverrides = value.podOverrides;
      this._roleConfig = value.roleConfig;
      this._roleGroups.internalValue = value.roleGroups;
    }
  }

  // cli_overrides - computed: false, optional: true, required: false
  private _cliOverrides?: { [key: string]: string }; 
  public get cliOverrides() {
    return this.getStringMapAttribute('cli_overrides');
  }
  public set cliOverrides(value: { [key: string]: string }) {
    this._cliOverrides = value;
  }
  public resetCliOverrides() {
    this._cliOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliOverridesInput() {
    return this._cliOverrides;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // config_overrides - computed: false, optional: true, required: false
  private _configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get configOverrides() {
    return this.interpolationForAttribute('config_overrides');
  }
  public set configOverrides(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._configOverrides = value;
  }
  public resetConfigOverrides() {
    this._configOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOverridesInput() {
    return this._configOverrides;
  }

  // env_overrides - computed: false, optional: true, required: false
  private _envOverrides?: { [key: string]: string }; 
  public get envOverrides() {
    return this.getStringMapAttribute('env_overrides');
  }
  public set envOverrides(value: { [key: string]: string }) {
    this._envOverrides = value;
  }
  public resetEnvOverrides() {
    this._envOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envOverridesInput() {
    return this._envOverrides;
  }

  // pod_overrides - computed: false, optional: true, required: false
  private _podOverrides?: { [key: string]: string }; 
  public get podOverrides() {
    return this.getStringMapAttribute('pod_overrides');
  }
  public set podOverrides(value: { [key: string]: string }) {
    this._podOverrides = value;
  }
  public resetPodOverrides() {
    this._podOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podOverridesInput() {
    return this._podOverrides;
  }

  // role_config - computed: false, optional: true, required: false
  private _roleConfig?: { [key: string]: string }; 
  public get roleConfig() {
    return this.getStringMapAttribute('role_config');
  }
  public set roleConfig(value: { [key: string]: string }) {
    this._roleConfig = value;
  }
  public resetRoleConfig() {
    this._roleConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleConfigInput() {
    return this._roleConfig;
  }

  // role_groups - computed: false, optional: false, required: true
  private _roleGroups = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroupsOutputReference(this, "role_groups");
  public get roleGroups() {
    return this._roleGroups;
  }
  public putRoleGroups(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersRoleGroups) {
    this._roleGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleGroupsInput() {
    return this._roleGroups.internalValue;
  }
}
export interface DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpec {
  /**
  * Global OPA cluster configuration that applies to all roles and role groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#cluster_config DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#cluster_config}
  */
  readonly clusterConfig?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfig;
  /**
  * Cluster operations like pause reconciliation or cluster stop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#cluster_operation DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#cluster_operation}
  */
  readonly clusterOperation?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterOperation;
  /**
  * The OPA image to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#image DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#image}
  */
  readonly image: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImage;
  /**
  * OPA server configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#servers DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest#servers}
  */
  readonly servers: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServers;
}

export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecToTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_config: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigToTerraform(struct!.clusterConfig),
    cluster_operation: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterOperationToTerraform(struct!.clusterOperation),
    image: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImageToTerraform(struct!.image),
    servers: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersToTerraform(struct!.servers),
  }
}


export function dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_config: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigToHclTerraform(struct!.clusterConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfig",
    },
    cluster_operation: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterOperationToHclTerraform(struct!.clusterOperation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterOperation",
    },
    image: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImage",
    },
    servers: {
      value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersToHclTerraform(struct!.servers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterConfig = this._clusterConfig?.internalValue;
    }
    if (this._clusterOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterOperation = this._clusterOperation?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._servers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterConfig.internalValue = undefined;
      this._clusterOperation.internalValue = undefined;
      this._image.internalValue = undefined;
      this._servers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterConfig.internalValue = value.clusterConfig;
      this._clusterOperation.internalValue = value.clusterOperation;
      this._image.internalValue = value.image;
      this._servers.internalValue = value.servers;
    }
  }

  // cluster_config - computed: false, optional: true, required: false
  private _clusterConfig = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  public resetClusterConfig() {
    this._clusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }

  // cluster_operation - computed: false, optional: true, required: false
  private _clusterOperation = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterOperationOutputReference(this, "cluster_operation");
  public get clusterOperation() {
    return this._clusterOperation;
  }
  public putClusterOperation(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecClusterOperation) {
    this._clusterOperation.internalValue = value;
  }
  public resetClusterOperation() {
    this._clusterOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterOperationInput() {
    return this._clusterOperation.internalValue;
  }

  // image - computed: false, optional: false, required: true
  private _image = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecImage) {
    this._image.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // servers - computed: false, optional: false, required: true
  private _servers = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServersOutputReference(this, "servers");
  public get servers() {
    return this._servers;
  }
  public putServers(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecServers) {
    this._servers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest k8s_opa_stackable_tech_opa_cluster_v1alpha1_manifest}
*/
export class DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_opa_stackable_tech_opa_cluster_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOpaStackableTechOpaClusterV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_opa_stackable_tech_opa_cluster_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/opa_stackable_tech_opa_cluster_v1alpha1_manifest k8s_opa_stackable_tech_opa_cluster_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_opa_stackable_tech_opa_cluster_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpec) {
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
      metadata: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOpaStackableTechOpaClusterV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
