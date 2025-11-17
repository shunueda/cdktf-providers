// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/projectcontour_io_tls_certificate_delegation_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/projectcontour_io_tls_certificate_delegation_v1_manifest#metadata DataK8SProjectcontourIoTlsCertificateDelegationV1Manifest#metadata}
  */
  readonly metadata: DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestMetadata;
  /**
  * TLSCertificateDelegationSpec defines the spec of the CRD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/projectcontour_io_tls_certificate_delegation_v1_manifest#spec DataK8SProjectcontourIoTlsCertificateDelegationV1Manifest#spec}
  */
  readonly spec: DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpec;
}
export interface DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/projectcontour_io_tls_certificate_delegation_v1_manifest#annotations DataK8SProjectcontourIoTlsCertificateDelegationV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/projectcontour_io_tls_certificate_delegation_v1_manifest#labels DataK8SProjectcontourIoTlsCertificateDelegationV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/projectcontour_io_tls_certificate_delegation_v1_manifest#name DataK8SProjectcontourIoTlsCertificateDelegationV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/projectcontour_io_tls_certificate_delegation_v1_manifest#namespace DataK8SProjectcontourIoTlsCertificateDelegationV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SProjectcontourIoTlsCertificateDelegationV1ManifestMetadataToTerraform(struct?: DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SProjectcontourIoTlsCertificateDelegationV1ManifestMetadataToHclTerraform(struct?: DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpecDelegations {
  /**
  * required, the name of a secret in the current namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/projectcontour_io_tls_certificate_delegation_v1_manifest#secret_name DataK8SProjectcontourIoTlsCertificateDelegationV1Manifest#secret_name}
  */
  readonly secretName: string;
  /**
  * required, the namespaces the authority to reference the secret will be delegated to. If TargetNamespaces is nil or empty, the CertificateDelegation' is ignored. If the TargetNamespace list contains the character, '*' the secret will be delegated to all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/projectcontour_io_tls_certificate_delegation_v1_manifest#target_namespaces DataK8SProjectcontourIoTlsCertificateDelegationV1Manifest#target_namespaces}
  */
  readonly targetNamespaces: string[];
}

export function dataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpecDelegationsToTerraform(struct?: DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpecDelegations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    target_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetNamespaces),
  }
}


export function dataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpecDelegationsToHclTerraform(struct?: DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpecDelegations | cdktf.IResolvable): any {
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
    target_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpecDelegationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpecDelegations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._targetNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNamespaces = this._targetNamespaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpecDelegations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretName = undefined;
      this._targetNamespaces = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretName = value.secretName;
      this._targetNamespaces = value.targetNamespaces;
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

  // target_namespaces - computed: false, optional: false, required: true
  private _targetNamespaces?: string[]; 
  public get targetNamespaces() {
    return this.getListAttribute('target_namespaces');
  }
  public set targetNamespaces(value: string[]) {
    this._targetNamespaces = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNamespacesInput() {
    return this._targetNamespaces;
  }
}

export class DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpecDelegationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpecDelegations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpecDelegationsOutputReference {
    return new DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpecDelegationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/projectcontour_io_tls_certificate_delegation_v1_manifest#delegations DataK8SProjectcontourIoTlsCertificateDelegationV1Manifest#delegations}
  */
  readonly delegations: DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpecDelegations[] | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpecToTerraform(struct?: DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delegations: cdktf.listMapper(dataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpecDelegationsToTerraform, false)(struct!.delegations),
  }
}


export function dataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpecToHclTerraform(struct?: DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delegations: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpecDelegationsToHclTerraform, false)(struct!.delegations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpecDelegationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delegations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegations = this._delegations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delegations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delegations.internalValue = value.delegations;
    }
  }

  // delegations - computed: false, optional: false, required: true
  private _delegations = new DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpecDelegationsList(this, "delegations", false);
  public get delegations() {
    return this._delegations;
  }
  public putDelegations(value: DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpecDelegations[] | cdktf.IResolvable) {
    this._delegations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delegationsInput() {
    return this._delegations.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/projectcontour_io_tls_certificate_delegation_v1_manifest k8s_projectcontour_io_tls_certificate_delegation_v1_manifest}
*/
export class DataK8SProjectcontourIoTlsCertificateDelegationV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_projectcontour_io_tls_certificate_delegation_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SProjectcontourIoTlsCertificateDelegationV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SProjectcontourIoTlsCertificateDelegationV1Manifest to import
  * @param importFromId The id of the existing DataK8SProjectcontourIoTlsCertificateDelegationV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/projectcontour_io_tls_certificate_delegation_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SProjectcontourIoTlsCertificateDelegationV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_projectcontour_io_tls_certificate_delegation_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/projectcontour_io_tls_certificate_delegation_v1_manifest k8s_projectcontour_io_tls_certificate_delegation_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_projectcontour_io_tls_certificate_delegation_v1_manifest',
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
  private _metadata = new DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpec) {
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
      metadata: dataK8SProjectcontourIoTlsCertificateDelegationV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SProjectcontourIoTlsCertificateDelegationV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestMetadata",
      },
      spec: {
        value: dataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SProjectcontourIoTlsCertificateDelegationV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
