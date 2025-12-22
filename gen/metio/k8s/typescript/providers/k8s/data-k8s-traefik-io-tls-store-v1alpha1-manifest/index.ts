// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_tls_store_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STraefikIoTlsStoreV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_tls_store_v1alpha1_manifest#metadata DataK8STraefikIoTlsStoreV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8STraefikIoTlsStoreV1Alpha1ManifestMetadata;
  /**
  * TLSStoreSpec defines the desired state of a TLSStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_tls_store_v1alpha1_manifest#spec DataK8STraefikIoTlsStoreV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8STraefikIoTlsStoreV1Alpha1ManifestSpec;
}
export interface DataK8STraefikIoTlsStoreV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_tls_store_v1alpha1_manifest#annotations DataK8STraefikIoTlsStoreV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_tls_store_v1alpha1_manifest#labels DataK8STraefikIoTlsStoreV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_tls_store_v1alpha1_manifest#name DataK8STraefikIoTlsStoreV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_tls_store_v1alpha1_manifest#namespace DataK8STraefikIoTlsStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STraefikIoTlsStoreV1Alpha1ManifestMetadataToTerraform(struct?: DataK8STraefikIoTlsStoreV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STraefikIoTlsStoreV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8STraefikIoTlsStoreV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STraefikIoTlsStoreV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoTlsStoreV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STraefikIoTlsStoreV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecCertificates {
  /**
  * SecretName is the name of the referenced Kubernetes Secret to specify the certificate details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_tls_store_v1alpha1_manifest#secret_name DataK8STraefikIoTlsStoreV1Alpha1Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8STraefikIoTlsStoreV1Alpha1ManifestSpecCertificatesToTerraform(struct?: DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8STraefikIoTlsStoreV1Alpha1ManifestSpecCertificatesToHclTerraform(struct?: DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretName = value.secretName;
    }
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

export class DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecCertificatesList extends cdktf.ComplexList {
  public internalValue? : DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecCertificates[] | cdktf.IResolvable

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
  public get(index: number): DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecCertificatesOutputReference {
    return new DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultCertificate {
  /**
  * SecretName is the name of the referenced Kubernetes Secret to specify the certificate details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_tls_store_v1alpha1_manifest#secret_name DataK8STraefikIoTlsStoreV1Alpha1Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultCertificateToTerraform(struct?: DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultCertificateToHclTerraform(struct?: DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretName = value.secretName;
    }
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
export interface DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCertDomain {
  /**
  * Main defines the main domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_tls_store_v1alpha1_manifest#main DataK8STraefikIoTlsStoreV1Alpha1Manifest#main}
  */
  readonly main?: string;
  /**
  * SANs defines the subject alternative domain names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_tls_store_v1alpha1_manifest#sans DataK8STraefikIoTlsStoreV1Alpha1Manifest#sans}
  */
  readonly sans?: string[];
}

export function dataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCertDomainToTerraform(struct?: DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCertDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    main: cdktf.stringToTerraform(struct!.main),
    sans: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sans),
  }
}


export function dataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCertDomainToHclTerraform(struct?: DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCertDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    main: {
      value: cdktf.stringToHclTerraform(struct!.main),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sans: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sans),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCertDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCertDomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._main !== undefined) {
      hasAnyValues = true;
      internalValueResult.main = this._main;
    }
    if (this._sans !== undefined) {
      hasAnyValues = true;
      internalValueResult.sans = this._sans;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCertDomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._main = undefined;
      this._sans = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._main = value.main;
      this._sans = value.sans;
    }
  }

  // main - computed: false, optional: true, required: false
  private _main?: string; 
  public get main() {
    return this.getStringAttribute('main');
  }
  public set main(value: string) {
    this._main = value;
  }
  public resetMain() {
    this._main = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainInput() {
    return this._main;
  }

  // sans - computed: false, optional: true, required: false
  private _sans?: string[]; 
  public get sans() {
    return this.getListAttribute('sans');
  }
  public set sans(value: string[]) {
    this._sans = value;
  }
  public resetSans() {
    this._sans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sansInput() {
    return this._sans;
  }
}
export interface DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCert {
  /**
  * Domain is the domain definition for the DefaultCertificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_tls_store_v1alpha1_manifest#domain DataK8STraefikIoTlsStoreV1Alpha1Manifest#domain}
  */
  readonly domain?: DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCertDomain;
  /**
  * Resolver is the name of the resolver that will be used to issue the DefaultCertificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_tls_store_v1alpha1_manifest#resolver DataK8STraefikIoTlsStoreV1Alpha1Manifest#resolver}
  */
  readonly resolver?: string;
}

export function dataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCertToTerraform(struct?: DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: dataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCertDomainToTerraform(struct!.domain),
    resolver: cdktf.stringToTerraform(struct!.resolver),
  }
}


export function dataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCertToHclTerraform(struct?: DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: dataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCertDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCertDomain",
    },
    resolver: {
      value: cdktf.stringToHclTerraform(struct!.resolver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._resolver !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolver = this._resolver;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain.internalValue = undefined;
      this._resolver = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain.internalValue = value.domain;
      this._resolver = value.resolver;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain = new DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCertDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCertDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // resolver - computed: false, optional: true, required: false
  private _resolver?: string; 
  public get resolver() {
    return this.getStringAttribute('resolver');
  }
  public set resolver(value: string) {
    this._resolver = value;
  }
  public resetResolver() {
    this._resolver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverInput() {
    return this._resolver;
  }
}
export interface DataK8STraefikIoTlsStoreV1Alpha1ManifestSpec {
  /**
  * Certificates is a list of secret names, each secret holding a key/certificate pair to add to the store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_tls_store_v1alpha1_manifest#certificates DataK8STraefikIoTlsStoreV1Alpha1Manifest#certificates}
  */
  readonly certificates?: DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecCertificates[] | cdktf.IResolvable;
  /**
  * DefaultCertificate defines the default certificate configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_tls_store_v1alpha1_manifest#default_certificate DataK8STraefikIoTlsStoreV1Alpha1Manifest#default_certificate}
  */
  readonly defaultCertificate?: DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultCertificate;
  /**
  * DefaultGeneratedCert defines the default generated certificate configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_tls_store_v1alpha1_manifest#default_generated_cert DataK8STraefikIoTlsStoreV1Alpha1Manifest#default_generated_cert}
  */
  readonly defaultGeneratedCert?: DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCert;
}

export function dataK8STraefikIoTlsStoreV1Alpha1ManifestSpecToTerraform(struct?: DataK8STraefikIoTlsStoreV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificates: cdktf.listMapper(dataK8STraefikIoTlsStoreV1Alpha1ManifestSpecCertificatesToTerraform, false)(struct!.certificates),
    default_certificate: dataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultCertificateToTerraform(struct!.defaultCertificate),
    default_generated_cert: dataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCertToTerraform(struct!.defaultGeneratedCert),
  }
}


export function dataK8STraefikIoTlsStoreV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8STraefikIoTlsStoreV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificates: {
      value: cdktf.listMapperHcl(dataK8STraefikIoTlsStoreV1Alpha1ManifestSpecCertificatesToHclTerraform, false)(struct!.certificates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecCertificatesList",
    },
    default_certificate: {
      value: dataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultCertificateToHclTerraform(struct!.defaultCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultCertificate",
    },
    default_generated_cert: {
      value: dataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCertToHclTerraform(struct!.defaultGeneratedCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCert",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoTlsStoreV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificates = this._certificates?.internalValue;
    }
    if (this._defaultCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCertificate = this._defaultCertificate?.internalValue;
    }
    if (this._defaultGeneratedCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGeneratedCert = this._defaultGeneratedCert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoTlsStoreV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificates.internalValue = undefined;
      this._defaultCertificate.internalValue = undefined;
      this._defaultGeneratedCert.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificates.internalValue = value.certificates;
      this._defaultCertificate.internalValue = value.defaultCertificate;
      this._defaultGeneratedCert.internalValue = value.defaultGeneratedCert;
    }
  }

  // certificates - computed: false, optional: true, required: false
  private _certificates = new DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
  }
  public putCertificates(value: DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecCertificates[] | cdktf.IResolvable) {
    this._certificates.internalValue = value;
  }
  public resetCertificates() {
    this._certificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates.internalValue;
  }

  // default_certificate - computed: false, optional: true, required: false
  private _defaultCertificate = new DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultCertificateOutputReference(this, "default_certificate");
  public get defaultCertificate() {
    return this._defaultCertificate;
  }
  public putDefaultCertificate(value: DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultCertificate) {
    this._defaultCertificate.internalValue = value;
  }
  public resetDefaultCertificate() {
    this._defaultCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCertificateInput() {
    return this._defaultCertificate.internalValue;
  }

  // default_generated_cert - computed: false, optional: true, required: false
  private _defaultGeneratedCert = new DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCertOutputReference(this, "default_generated_cert");
  public get defaultGeneratedCert() {
    return this._defaultGeneratedCert;
  }
  public putDefaultGeneratedCert(value: DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecDefaultGeneratedCert) {
    this._defaultGeneratedCert.internalValue = value;
  }
  public resetDefaultGeneratedCert() {
    this._defaultGeneratedCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGeneratedCertInput() {
    return this._defaultGeneratedCert.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_tls_store_v1alpha1_manifest k8s_traefik_io_tls_store_v1alpha1_manifest}
*/
export class DataK8STraefikIoTlsStoreV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_traefik_io_tls_store_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STraefikIoTlsStoreV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STraefikIoTlsStoreV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8STraefikIoTlsStoreV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_tls_store_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STraefikIoTlsStoreV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_traefik_io_tls_store_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_tls_store_v1alpha1_manifest k8s_traefik_io_tls_store_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STraefikIoTlsStoreV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STraefikIoTlsStoreV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_traefik_io_tls_store_v1alpha1_manifest',
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
  private _metadata = new DataK8STraefikIoTlsStoreV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STraefikIoTlsStoreV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8STraefikIoTlsStoreV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STraefikIoTlsStoreV1Alpha1ManifestSpec) {
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
      metadata: dataK8STraefikIoTlsStoreV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STraefikIoTlsStoreV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STraefikIoTlsStoreV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STraefikIoTlsStoreV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8STraefikIoTlsStoreV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STraefikIoTlsStoreV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
