import * as cdktf from 'cdktf';
import { DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesCertificates,
dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesCertificatesToTerraform,
dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesCertificatesToHclTerraform,
DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesCertificatesOutputReference,
DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesKeyless,
dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesKeylessToTerraform,
dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesKeylessToHclTerraform,
DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesKeylessOutputReference,
DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesKeys,
dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesKeysToTerraform,
dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesKeysToHclTerraform,
DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesKeysOutputReference,
DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateCel,
dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateCelToTerraform,
dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateCelToHclTerraform,
DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateCelOutputReference,
DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateDeny,
dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateDenyToTerraform,
dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateDenyToHclTerraform,
DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateDenyOutputReference,
DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateFailureActionOverrides,
dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateFailureActionOverridesToTerraform,
dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateFailureActionOverridesToHclTerraform,
DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateFailureActionOverridesList,
DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateForeach,
dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateForeachToTerraform,
dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateForeachToHclTerraform,
DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateForeachList,
DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesCelPreconditions,
dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesCelPreconditionsToTerraform,
dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesCelPreconditionsToHclTerraform,
DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesCelPreconditionsList,
DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesContext,
dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesContextToTerraform,
dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesContextToHclTerraform,
DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesContextList,
DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesExclude,
dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesExcludeToTerraform,
dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesExcludeToHclTerraform,
DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesExcludeOutputReference,
DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesGenerate,
dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesGenerateToTerraform,
dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesGenerateToHclTerraform,
DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesGenerateOutputReference,
DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesMatch,
dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesMatchToTerraform,
dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesMatchToHclTerraform,
DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesMatchOutputReference,
DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesMutate,
dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesMutateToTerraform,
dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesMutateToHclTerraform,
DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesMutateOutputReference } from './structs0'
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntries {
  /**
  * Annotations are used for image verification. Every specified key-value pair must exist and match in the verified payload. The payload may contain other key-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#annotations DataK8SKyvernoIoClusterPolicyV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Attestor is a nested set of Attestor used to specify a more complex set of match authorities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#attestor DataK8SKyvernoIoClusterPolicyV1Manifest#attestor}
  */
  readonly attestor?: { [key: string]: string };
  /**
  * Certificates specifies one or more certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#certificates DataK8SKyvernoIoClusterPolicyV1Manifest#certificates}
  */
  readonly certificates?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesCertificates;
  /**
  * Keyless is a set of attribute used to verify a Sigstore keyless attestor. See https://github.com/sigstore/cosign/blob/main/KEYLESS.md.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#keyless DataK8SKyvernoIoClusterPolicyV1Manifest#keyless}
  */
  readonly keyless?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesKeyless;
  /**
  * Keys specifies one or more public keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#keys DataK8SKyvernoIoClusterPolicyV1Manifest#keys}
  */
  readonly keys?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesKeys;
  /**
  * Repository is an optional alternate OCI repository to use for signatures and attestations that match this rule. If specified Repository will override other OCI image repository locations for this Attestor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#repository DataK8SKyvernoIoClusterPolicyV1Manifest#repository}
  */
  readonly repository?: string;
  /**
  * Specify signature algorithm for public keys. Supported values are sha224, sha256, sha384 and sha512.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#signature_algorithm DataK8SKyvernoIoClusterPolicyV1Manifest#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    attestor: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attestor),
    certificates: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesCertificatesToTerraform(struct!.certificates),
    keyless: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesKeylessToTerraform(struct!.keyless),
    keys: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesKeysToTerraform(struct!.keys),
    repository: cdktf.stringToTerraform(struct!.repository),
    signature_algorithm: cdktf.stringToTerraform(struct!.signatureAlgorithm),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntries | cdktf.IResolvable): any {
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
    attestor: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.attestor),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    certificates: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesCertificatesToHclTerraform(struct!.certificates),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesCertificates",
    },
    keyless: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesKeylessToHclTerraform(struct!.keyless),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesKeyless",
    },
    keys: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesKeysToHclTerraform(struct!.keys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesKeys",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.signatureAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._attestor !== undefined) {
      hasAnyValues = true;
      internalValueResult.attestor = this._attestor;
    }
    if (this._certificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificates = this._certificates?.internalValue;
    }
    if (this._keyless?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyless = this._keyless?.internalValue;
    }
    if (this._keys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys?.internalValue;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._signatureAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureAlgorithm = this._signatureAlgorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._attestor = undefined;
      this._certificates.internalValue = undefined;
      this._keyless.internalValue = undefined;
      this._keys.internalValue = undefined;
      this._repository = undefined;
      this._signatureAlgorithm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._attestor = value.attestor;
      this._certificates.internalValue = value.certificates;
      this._keyless.internalValue = value.keyless;
      this._keys.internalValue = value.keys;
      this._repository = value.repository;
      this._signatureAlgorithm = value.signatureAlgorithm;
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

  // attestor - computed: false, optional: true, required: false
  private _attestor?: { [key: string]: string }; 
  public get attestor() {
    return this.getStringMapAttribute('attestor');
  }
  public set attestor(value: { [key: string]: string }) {
    this._attestor = value;
  }
  public resetAttestor() {
    this._attestor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attestorInput() {
    return this._attestor;
  }

  // certificates - computed: false, optional: true, required: false
  private _certificates = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesCertificatesOutputReference(this, "certificates");
  public get certificates() {
    return this._certificates;
  }
  public putCertificates(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesCertificates) {
    this._certificates.internalValue = value;
  }
  public resetCertificates() {
    this._certificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates.internalValue;
  }

  // keyless - computed: false, optional: true, required: false
  private _keyless = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesKeylessOutputReference(this, "keyless");
  public get keyless() {
    return this._keyless;
  }
  public putKeyless(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesKeyless) {
    this._keyless.internalValue = value;
  }
  public resetKeyless() {
    this._keyless.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keylessInput() {
    return this._keyless.internalValue;
  }

  // keys - computed: false, optional: true, required: false
  private _keys = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesKeysOutputReference(this, "keys");
  public get keys() {
    return this._keys;
  }
  public putKeys(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesKeys) {
    this._keys.internalValue = value;
  }
  public resetKeys() {
    this._keys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys.internalValue;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // signature_algorithm - computed: false, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntries[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesOutputReference {
    return new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestors {
  /**
  * Count specifies the required number of entries that must match. If the count is null, all entries must match (a logical AND). If the count is 1, at least one entry must match (a logical OR). If the count contains a value N, then N must be less than or equal to the size of entries, and at least N entries must match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#count DataK8SKyvernoIoClusterPolicyV1Manifest#count}
  */
  readonly count?: number;
  /**
  * Entries contains the available attestors. An attestor can be a static key, attributes for keyless verification, or a nested attestor declaration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#entries DataK8SKyvernoIoClusterPolicyV1Manifest#entries}
  */
  readonly entries?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntries[] | cdktf.IResolvable;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    entries: cdktf.listMapper(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesToTerraform, false)(struct!.entries),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entries: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesToHclTerraform, false)(struct!.entries),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._entries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entries = this._entries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._entries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._entries.internalValue = value.entries;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // entries - computed: false, optional: true, required: false
  private _entries = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsOutputReference {
    return new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsDryRun {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#enable DataK8SKyvernoIoClusterPolicyV1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#namespace DataK8SKyvernoIoClusterPolicyV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsDryRunToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsDryRun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsDryRunToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsDryRun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsDryRunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsDryRun | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsDryRun | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._namespace = value.namespace;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsObjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#group DataK8SKyvernoIoClusterPolicyV1Manifest#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#kind DataK8SKyvernoIoClusterPolicyV1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#name DataK8SKyvernoIoClusterPolicyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#namespace DataK8SKyvernoIoClusterPolicyV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#version DataK8SKyvernoIoClusterPolicyV1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsObjectsToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsObjectsToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._version = value.version;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsObjectsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsObjects[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsObjectsOutputReference {
    return new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#fields DataK8SKyvernoIoClusterPolicyV1Manifest#fields}
  */
  readonly fields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#objects DataK8SKyvernoIoClusterPolicyV1Manifest#objects}
  */
  readonly objects?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsObjects[] | cdktf.IResolvable;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    objects: cdktf.listMapper(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsObjectsToTerraform, false)(struct!.objects),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    objects: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsObjectsToHclTerraform, false)(struct!.objects),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._objects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objects = this._objects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields = undefined;
      this._objects.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields = value.fields;
      this._objects.internalValue = value.objects;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // objects - computed: false, optional: true, required: false
  private _objects = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsObjectsList(this, "objects", false);
  public get objects() {
    return this._objects;
  }
  public putObjects(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsObjects[] | cdktf.IResolvable) {
    this._objects.internalValue = value;
  }
  public resetObjects() {
    this._objects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects.internalValue;
  }
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsOutputReference {
    return new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifests {
  /**
  * AnnotationDomain is custom domain of annotation for message and signature. Default is 'cosign.sigstore.dev'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#annotation_domain DataK8SKyvernoIoClusterPolicyV1Manifest#annotation_domain}
  */
  readonly annotationDomain?: string;
  /**
  * Attestors specified the required attestors (i.e. authorities)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#attestors DataK8SKyvernoIoClusterPolicyV1Manifest#attestors}
  */
  readonly attestors?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestors[] | cdktf.IResolvable;
  /**
  * DryRun configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#dry_run DataK8SKyvernoIoClusterPolicyV1Manifest#dry_run}
  */
  readonly dryRun?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsDryRun;
  /**
  * Fields which will be ignored while comparing manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#ignore_fields DataK8SKyvernoIoClusterPolicyV1Manifest#ignore_fields}
  */
  readonly ignoreFields?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFields[] | cdktf.IResolvable;
  /**
  * Repository is an optional alternate OCI repository to use for resource bundle reference. The repository can be overridden per Attestor or Attestation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#repository DataK8SKyvernoIoClusterPolicyV1Manifest#repository}
  */
  readonly repository?: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation_domain: cdktf.stringToTerraform(struct!.annotationDomain),
    attestors: cdktf.listMapper(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsToTerraform, false)(struct!.attestors),
    dry_run: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsDryRunToTerraform(struct!.dryRun),
    ignore_fields: cdktf.listMapper(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsToTerraform, false)(struct!.ignoreFields),
    repository: cdktf.stringToTerraform(struct!.repository),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation_domain: {
      value: cdktf.stringToHclTerraform(struct!.annotationDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attestors: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsToHclTerraform, false)(struct!.attestors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsList",
    },
    dry_run: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsDryRunToHclTerraform(struct!.dryRun),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsDryRun",
    },
    ignore_fields: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsToHclTerraform, false)(struct!.ignoreFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsList",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationDomain = this._annotationDomain;
    }
    if (this._attestors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attestors = this._attestors?.internalValue;
    }
    if (this._dryRun?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dryRun = this._dryRun?.internalValue;
    }
    if (this._ignoreFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreFields = this._ignoreFields?.internalValue;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotationDomain = undefined;
      this._attestors.internalValue = undefined;
      this._dryRun.internalValue = undefined;
      this._ignoreFields.internalValue = undefined;
      this._repository = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotationDomain = value.annotationDomain;
      this._attestors.internalValue = value.attestors;
      this._dryRun.internalValue = value.dryRun;
      this._ignoreFields.internalValue = value.ignoreFields;
      this._repository = value.repository;
    }
  }

  // annotation_domain - computed: false, optional: true, required: false
  private _annotationDomain?: string; 
  public get annotationDomain() {
    return this.getStringAttribute('annotation_domain');
  }
  public set annotationDomain(value: string) {
    this._annotationDomain = value;
  }
  public resetAnnotationDomain() {
    this._annotationDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationDomainInput() {
    return this._annotationDomain;
  }

  // attestors - computed: false, optional: true, required: false
  private _attestors = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestorsList(this, "attestors", false);
  public get attestors() {
    return this._attestors;
  }
  public putAttestors(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsAttestors[] | cdktf.IResolvable) {
    this._attestors.internalValue = value;
  }
  public resetAttestors() {
    this._attestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attestorsInput() {
    return this._attestors.internalValue;
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsDryRunOutputReference(this, "dry_run");
  public get dryRun() {
    return this._dryRun;
  }
  public putDryRun(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsDryRun) {
    this._dryRun.internalValue = value;
  }
  public resetDryRun() {
    this._dryRun.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun.internalValue;
  }

  // ignore_fields - computed: false, optional: true, required: false
  private _ignoreFields = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFieldsList(this, "ignore_fields", false);
  public get ignoreFields() {
    return this._ignoreFields;
  }
  public putIgnoreFields(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsIgnoreFields[] | cdktf.IResolvable) {
    this._ignoreFields.internalValue = value;
  }
  public resetIgnoreFields() {
    this._ignoreFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreFieldsInput() {
    return this._ignoreFields.internalValue;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurityExclude {
  /**
  * ControlName specifies the name of the Pod Security Standard control. See: https://kubernetes.io/docs/concepts/security/pod-security-standards/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#control_name DataK8SKyvernoIoClusterPolicyV1Manifest#control_name}
  */
  readonly controlName: string;
  /**
  * Images selects matching containers and applies the container level PSS. Each image is the image name consisting of the registry address, repository, image, and tag. Empty list matches no containers, PSS checks are applied at the pod level only. Wildcards ('*' and '?') are allowed. See: https://kubernetes.io/docs/concepts/containers/images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#images DataK8SKyvernoIoClusterPolicyV1Manifest#images}
  */
  readonly images?: string[];
  /**
  * RestrictedField selects the field for the given Pod Security Standard control. When not set, all restricted fields for the control are selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#restricted_field DataK8SKyvernoIoClusterPolicyV1Manifest#restricted_field}
  */
  readonly restrictedField?: string;
  /**
  * Values defines the allowed values that can be excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#values DataK8SKyvernoIoClusterPolicyV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurityExcludeToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurityExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_name: cdktf.stringToTerraform(struct!.controlName),
    images: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.images),
    restricted_field: cdktf.stringToTerraform(struct!.restrictedField),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurityExcludeToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurityExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_name: {
      value: cdktf.stringToHclTerraform(struct!.controlName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    images: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.images),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    restricted_field: {
      value: cdktf.stringToHclTerraform(struct!.restrictedField),
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

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurityExcludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurityExclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlName !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlName = this._controlName;
    }
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._restrictedField !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedField = this._restrictedField;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurityExclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controlName = undefined;
      this._images = undefined;
      this._restrictedField = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controlName = value.controlName;
      this._images = value.images;
      this._restrictedField = value.restrictedField;
      this._values = value.values;
    }
  }

  // control_name - computed: false, optional: false, required: true
  private _controlName?: string; 
  public get controlName() {
    return this.getStringAttribute('control_name');
  }
  public set controlName(value: string) {
    this._controlName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlNameInput() {
    return this._controlName;
  }

  // images - computed: false, optional: true, required: false
  private _images?: string[]; 
  public get images() {
    return this.getListAttribute('images');
  }
  public set images(value: string[]) {
    this._images = value;
  }
  public resetImages() {
    this._images = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
  }

  // restricted_field - computed: false, optional: true, required: false
  private _restrictedField?: string; 
  public get restrictedField() {
    return this.getStringAttribute('restricted_field');
  }
  public set restrictedField(value: string) {
    this._restrictedField = value;
  }
  public resetRestrictedField() {
    this._restrictedField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedFieldInput() {
    return this._restrictedField;
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

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurityExcludeList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurityExclude[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurityExcludeOutputReference {
    return new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurityExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurity {
  /**
  * Exclude specifies the Pod Security Standard controls to be excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#exclude DataK8SKyvernoIoClusterPolicyV1Manifest#exclude}
  */
  readonly exclude?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurityExclude[] | cdktf.IResolvable;
  /**
  * Level defines the Pod Security Standard level to be applied to workloads. Allowed values are privileged, baseline, and restricted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#level DataK8SKyvernoIoClusterPolicyV1Manifest#level}
  */
  readonly level?: string;
  /**
  * Version defines the Pod Security Standard versions that Kubernetes supports. Allowed values are v1.19, v1.20, v1.21, v1.22, v1.23, v1.24, v1.25, v1.26, v1.27, v1.28, v1.29, latest. Defaults to latest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#version DataK8SKyvernoIoClusterPolicyV1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurityToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurityExcludeToTerraform, false)(struct!.exclude),
    level: cdktf.stringToTerraform(struct!.level),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurityToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurityExcludeToHclTerraform, false)(struct!.exclude),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurityExcludeList",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude?.internalValue;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude.internalValue = undefined;
      this._level = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude.internalValue = value.exclude;
      this._level = value.level;
      this._version = value.version;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurityExcludeList(this, "exclude", false);
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurityExclude[] | cdktf.IResolvable) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidate {
  /**
  * AllowExistingViolations allows prexisting violating resources to continue violating a policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#allow_existing_violations DataK8SKyvernoIoClusterPolicyV1Manifest#allow_existing_violations}
  */
  readonly allowExistingViolations?: boolean | cdktf.IResolvable;
  /**
  * AnyPattern specifies list of validation patterns. At least one of the patterns must be satisfied for the validation rule to succeed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#any_pattern DataK8SKyvernoIoClusterPolicyV1Manifest#any_pattern}
  */
  readonly anyPattern?: { [key: string]: string };
  /**
  * Assert defines a kyverno-json assertion tree.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#assert DataK8SKyvernoIoClusterPolicyV1Manifest#assert}
  */
  readonly assert?: { [key: string]: string };
  /**
  * CEL allows validation checks using the Common Expression Language (https://kubernetes.io/docs/reference/using-api/cel/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#cel DataK8SKyvernoIoClusterPolicyV1Manifest#cel}
  */
  readonly cel?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateCel;
  /**
  * Deny defines conditions used to pass or fail a validation rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#deny DataK8SKyvernoIoClusterPolicyV1Manifest#deny}
  */
  readonly deny?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateDeny;
  /**
  * FailureAction defines if a validation policy rule violation should block the admission review request (Enforce), or allow (Audit) the admission review request and report an error in a policy report. Optional. Allowed values are Audit or Enforce.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#failure_action DataK8SKyvernoIoClusterPolicyV1Manifest#failure_action}
  */
  readonly failureAction?: string;
  /**
  * FailureActionOverrides is a Cluster Policy attribute that specifies FailureAction namespace-wise. It overrides FailureAction for the specified namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#failure_action_overrides DataK8SKyvernoIoClusterPolicyV1Manifest#failure_action_overrides}
  */
  readonly failureActionOverrides?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateFailureActionOverrides[] | cdktf.IResolvable;
  /**
  * ForEach applies validate rules to a list of sub-elements by creating a context for each entry in the list and looping over it to apply the specified logic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#foreach DataK8SKyvernoIoClusterPolicyV1Manifest#foreach}
  */
  readonly foreach?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateForeach[] | cdktf.IResolvable;
  /**
  * Manifest specifies conditions for manifest verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#manifests DataK8SKyvernoIoClusterPolicyV1Manifest#manifests}
  */
  readonly manifests?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifests;
  /**
  * Message specifies a custom message to be displayed on failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#message DataK8SKyvernoIoClusterPolicyV1Manifest#message}
  */
  readonly message?: string;
  /**
  * Pattern specifies an overlay-style pattern used to check resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#pattern DataK8SKyvernoIoClusterPolicyV1Manifest#pattern}
  */
  readonly pattern?: { [key: string]: string };
  /**
  * PodSecurity applies exemptions for Kubernetes Pod Security admission by specifying exclusions for Pod Security Standards controls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#pod_security DataK8SKyvernoIoClusterPolicyV1Manifest#pod_security}
  */
  readonly podSecurity?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurity;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_existing_violations: cdktf.booleanToTerraform(struct!.allowExistingViolations),
    any_pattern: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.anyPattern),
    assert: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.assert),
    cel: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateCelToTerraform(struct!.cel),
    deny: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateDenyToTerraform(struct!.deny),
    failure_action: cdktf.stringToTerraform(struct!.failureAction),
    failure_action_overrides: cdktf.listMapper(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateFailureActionOverridesToTerraform, false)(struct!.failureActionOverrides),
    foreach: cdktf.listMapper(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateForeachToTerraform, false)(struct!.foreach),
    manifests: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsToTerraform(struct!.manifests),
    message: cdktf.stringToTerraform(struct!.message),
    pattern: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.pattern),
    pod_security: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurityToTerraform(struct!.podSecurity),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_existing_violations: {
      value: cdktf.booleanToHclTerraform(struct!.allowExistingViolations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_pattern: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.anyPattern),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    assert: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.assert),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    cel: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateCelToHclTerraform(struct!.cel),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateCel",
    },
    deny: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateDenyToHclTerraform(struct!.deny),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateDeny",
    },
    failure_action: {
      value: cdktf.stringToHclTerraform(struct!.failureAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failure_action_overrides: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateFailureActionOverridesToHclTerraform, false)(struct!.failureActionOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateFailureActionOverridesList",
    },
    foreach: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateForeachToHclTerraform, false)(struct!.foreach),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateForeachList",
    },
    manifests: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsToHclTerraform(struct!.manifests),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifests",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.pattern),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_security: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurityToHclTerraform(struct!.podSecurity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowExistingViolations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowExistingViolations = this._allowExistingViolations;
    }
    if (this._anyPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyPattern = this._anyPattern;
    }
    if (this._assert !== undefined) {
      hasAnyValues = true;
      internalValueResult.assert = this._assert;
    }
    if (this._cel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cel = this._cel?.internalValue;
    }
    if (this._deny?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny?.internalValue;
    }
    if (this._failureAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureAction = this._failureAction;
    }
    if (this._failureActionOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureActionOverrides = this._failureActionOverrides?.internalValue;
    }
    if (this._foreach?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreach = this._foreach?.internalValue;
    }
    if (this._manifests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifests = this._manifests?.internalValue;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._podSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecurity = this._podSecurity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowExistingViolations = undefined;
      this._anyPattern = undefined;
      this._assert = undefined;
      this._cel.internalValue = undefined;
      this._deny.internalValue = undefined;
      this._failureAction = undefined;
      this._failureActionOverrides.internalValue = undefined;
      this._foreach.internalValue = undefined;
      this._manifests.internalValue = undefined;
      this._message = undefined;
      this._pattern = undefined;
      this._podSecurity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowExistingViolations = value.allowExistingViolations;
      this._anyPattern = value.anyPattern;
      this._assert = value.assert;
      this._cel.internalValue = value.cel;
      this._deny.internalValue = value.deny;
      this._failureAction = value.failureAction;
      this._failureActionOverrides.internalValue = value.failureActionOverrides;
      this._foreach.internalValue = value.foreach;
      this._manifests.internalValue = value.manifests;
      this._message = value.message;
      this._pattern = value.pattern;
      this._podSecurity.internalValue = value.podSecurity;
    }
  }

  // allow_existing_violations - computed: false, optional: true, required: false
  private _allowExistingViolations?: boolean | cdktf.IResolvable; 
  public get allowExistingViolations() {
    return this.getBooleanAttribute('allow_existing_violations');
  }
  public set allowExistingViolations(value: boolean | cdktf.IResolvable) {
    this._allowExistingViolations = value;
  }
  public resetAllowExistingViolations() {
    this._allowExistingViolations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowExistingViolationsInput() {
    return this._allowExistingViolations;
  }

  // any_pattern - computed: false, optional: true, required: false
  private _anyPattern?: { [key: string]: string }; 
  public get anyPattern() {
    return this.getStringMapAttribute('any_pattern');
  }
  public set anyPattern(value: { [key: string]: string }) {
    this._anyPattern = value;
  }
  public resetAnyPattern() {
    this._anyPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyPatternInput() {
    return this._anyPattern;
  }

  // assert - computed: false, optional: true, required: false
  private _assert?: { [key: string]: string }; 
  public get assert() {
    return this.getStringMapAttribute('assert');
  }
  public set assert(value: { [key: string]: string }) {
    this._assert = value;
  }
  public resetAssert() {
    this._assert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertInput() {
    return this._assert;
  }

  // cel - computed: false, optional: true, required: false
  private _cel = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateCelOutputReference(this, "cel");
  public get cel() {
    return this._cel;
  }
  public putCel(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateCel) {
    this._cel.internalValue = value;
  }
  public resetCel() {
    this._cel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get celInput() {
    return this._cel.internalValue;
  }

  // deny - computed: false, optional: true, required: false
  private _deny = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateDenyOutputReference(this, "deny");
  public get deny() {
    return this._deny;
  }
  public putDeny(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateDeny) {
    this._deny.internalValue = value;
  }
  public resetDeny() {
    this._deny.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny.internalValue;
  }

  // failure_action - computed: false, optional: true, required: false
  private _failureAction?: string; 
  public get failureAction() {
    return this.getStringAttribute('failure_action');
  }
  public set failureAction(value: string) {
    this._failureAction = value;
  }
  public resetFailureAction() {
    this._failureAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureActionInput() {
    return this._failureAction;
  }

  // failure_action_overrides - computed: false, optional: true, required: false
  private _failureActionOverrides = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateFailureActionOverridesList(this, "failure_action_overrides", false);
  public get failureActionOverrides() {
    return this._failureActionOverrides;
  }
  public putFailureActionOverrides(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateFailureActionOverrides[] | cdktf.IResolvable) {
    this._failureActionOverrides.internalValue = value;
  }
  public resetFailureActionOverrides() {
    this._failureActionOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureActionOverridesInput() {
    return this._failureActionOverrides.internalValue;
  }

  // foreach - computed: false, optional: true, required: false
  private _foreach = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateForeachList(this, "foreach", false);
  public get foreach() {
    return this._foreach;
  }
  public putForeach(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateForeach[] | cdktf.IResolvable) {
    this._foreach.internalValue = value;
  }
  public resetForeach() {
    this._foreach.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foreachInput() {
    return this._foreach.internalValue;
  }

  // manifests - computed: false, optional: true, required: false
  private _manifests = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifestsOutputReference(this, "manifests");
  public get manifests() {
    return this._manifests;
  }
  public putManifests(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateManifests) {
    this._manifests.internalValue = value;
  }
  public resetManifests() {
    this._manifests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestsInput() {
    return this._manifests.internalValue;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: { [key: string]: string }; 
  public get pattern() {
    return this.getStringMapAttribute('pattern');
  }
  public set pattern(value: { [key: string]: string }) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // pod_security - computed: false, optional: true, required: false
  private _podSecurity = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurityOutputReference(this, "pod_security");
  public get podSecurity() {
    return this._podSecurity;
  }
  public putPodSecurity(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidatePodSecurity) {
    this._podSecurity.internalValue = value;
  }
  public resetPodSecurity() {
    this._podSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityInput() {
    return this._podSecurity.internalValue;
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesCtlog {
  /**
  * IgnoreSCT defines whether to use the Signed Certificate Timestamp (SCT) log to check for a certificate timestamp. Default is false. Set to true if this was opted out during signing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#ignore_sct DataK8SKyvernoIoClusterPolicyV1Manifest#ignore_sct}
  */
  readonly ignoreSct?: boolean | cdktf.IResolvable;
  /**
  * PubKey, if set, is used to validate SCTs against a custom source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#pubkey DataK8SKyvernoIoClusterPolicyV1Manifest#pubkey}
  */
  readonly pubkey?: string;
  /**
  * TSACertChain, if set, is the PEM-encoded certificate chain file for the RFC3161 timestamp authority. Must contain the root CA certificate. Optionally may contain intermediate CA certificates, and may contain the leaf TSA certificate if not present in the timestamurce.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#tsa_cert_chain DataK8SKyvernoIoClusterPolicyV1Manifest#tsa_cert_chain}
  */
  readonly tsaCertChain?: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesCtlogToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesCtlog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_sct: cdktf.booleanToTerraform(struct!.ignoreSct),
    pubkey: cdktf.stringToTerraform(struct!.pubkey),
    tsa_cert_chain: cdktf.stringToTerraform(struct!.tsaCertChain),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesCtlogToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesCtlog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_sct: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSct),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pubkey: {
      value: cdktf.stringToHclTerraform(struct!.pubkey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsa_cert_chain: {
      value: cdktf.stringToHclTerraform(struct!.tsaCertChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesCtlogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesCtlog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreSct !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSct = this._ignoreSct;
    }
    if (this._pubkey !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubkey = this._pubkey;
    }
    if (this._tsaCertChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsaCertChain = this._tsaCertChain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesCtlog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreSct = undefined;
      this._pubkey = undefined;
      this._tsaCertChain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreSct = value.ignoreSct;
      this._pubkey = value.pubkey;
      this._tsaCertChain = value.tsaCertChain;
    }
  }

  // ignore_sct - computed: false, optional: true, required: false
  private _ignoreSct?: boolean | cdktf.IResolvable; 
  public get ignoreSct() {
    return this.getBooleanAttribute('ignore_sct');
  }
  public set ignoreSct(value: boolean | cdktf.IResolvable) {
    this._ignoreSct = value;
  }
  public resetIgnoreSct() {
    this._ignoreSct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSctInput() {
    return this._ignoreSct;
  }

  // pubkey - computed: false, optional: true, required: false
  private _pubkey?: string; 
  public get pubkey() {
    return this.getStringAttribute('pubkey');
  }
  public set pubkey(value: string) {
    this._pubkey = value;
  }
  public resetPubkey() {
    this._pubkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubkeyInput() {
    return this._pubkey;
  }

  // tsa_cert_chain - computed: false, optional: true, required: false
  private _tsaCertChain?: string; 
  public get tsaCertChain() {
    return this.getStringAttribute('tsa_cert_chain');
  }
  public set tsaCertChain(value: string) {
    this._tsaCertChain = value;
  }
  public resetTsaCertChain() {
    this._tsaCertChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsaCertChainInput() {
    return this._tsaCertChain;
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesRekor {
  /**
  * IgnoreTlog skips transparency log verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#ignore_tlog DataK8SKyvernoIoClusterPolicyV1Manifest#ignore_tlog}
  */
  readonly ignoreTlog?: boolean | cdktf.IResolvable;
  /**
  * RekorPubKey is an optional PEM-encoded public key to use for a custom Rekor. If set, this will be used to validate transparency log signatures from a custom Rekor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#pubkey DataK8SKyvernoIoClusterPolicyV1Manifest#pubkey}
  */
  readonly pubkey?: string;
  /**
  * URL is the address of the transparency log. Defaults to the public Rekor log instance https://rekor.sigstore.dev.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#url DataK8SKyvernoIoClusterPolicyV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesRekorToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesRekor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_tlog: cdktf.booleanToTerraform(struct!.ignoreTlog),
    pubkey: cdktf.stringToTerraform(struct!.pubkey),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesRekorToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesRekor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_tlog: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreTlog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pubkey: {
      value: cdktf.stringToHclTerraform(struct!.pubkey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesRekorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesRekor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreTlog !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTlog = this._ignoreTlog;
    }
    if (this._pubkey !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubkey = this._pubkey;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesRekor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreTlog = undefined;
      this._pubkey = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreTlog = value.ignoreTlog;
      this._pubkey = value.pubkey;
      this._url = value.url;
    }
  }

  // ignore_tlog - computed: false, optional: true, required: false
  private _ignoreTlog?: boolean | cdktf.IResolvable; 
  public get ignoreTlog() {
    return this.getBooleanAttribute('ignore_tlog');
  }
  public set ignoreTlog(value: boolean | cdktf.IResolvable) {
    this._ignoreTlog = value;
  }
  public resetIgnoreTlog() {
    this._ignoreTlog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTlogInput() {
    return this._ignoreTlog;
  }

  // pubkey - computed: false, optional: true, required: false
  private _pubkey?: string; 
  public get pubkey() {
    return this.getStringAttribute('pubkey');
  }
  public set pubkey(value: string) {
    this._pubkey = value;
  }
  public resetPubkey() {
    this._pubkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubkeyInput() {
    return this._pubkey;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificates {
  /**
  * Cert is an optional PEM-encoded public certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#cert DataK8SKyvernoIoClusterPolicyV1Manifest#cert}
  */
  readonly cert?: string;
  /**
  * CertChain is an optional PEM encoded set of certificates used to verify.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#cert_chain DataK8SKyvernoIoClusterPolicyV1Manifest#cert_chain}
  */
  readonly certChain?: string;
  /**
  * CTLog (certificate timestamp log) provides a configuration for validation of Signed Certificate Timestamps (SCTs). If the value is unset, the default behavior by Cosign is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#ctlog DataK8SKyvernoIoClusterPolicyV1Manifest#ctlog}
  */
  readonly ctlog?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesCtlog;
  /**
  * Rekor provides configuration for the Rekor transparency log service. If an empty object is provided the public instance of Rekor (https://rekor.sigstore.dev) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#rekor DataK8SKyvernoIoClusterPolicyV1Manifest#rekor}
  */
  readonly rekor?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesRekor;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    cert_chain: cdktf.stringToTerraform(struct!.certChain),
    ctlog: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesCtlogToTerraform(struct!.ctlog),
    rekor: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesRekorToTerraform(struct!.rekor),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_chain: {
      value: cdktf.stringToHclTerraform(struct!.certChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ctlog: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesCtlogToHclTerraform(struct!.ctlog),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesCtlog",
    },
    rekor: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesRekorToHclTerraform(struct!.rekor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesRekor",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._certChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.certChain = this._certChain;
    }
    if (this._ctlog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ctlog = this._ctlog?.internalValue;
    }
    if (this._rekor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rekor = this._rekor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cert = undefined;
      this._certChain = undefined;
      this._ctlog.internalValue = undefined;
      this._rekor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cert = value.cert;
      this._certChain = value.certChain;
      this._ctlog.internalValue = value.ctlog;
      this._rekor.internalValue = value.rekor;
    }
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // cert_chain - computed: false, optional: true, required: false
  private _certChain?: string; 
  public get certChain() {
    return this.getStringAttribute('cert_chain');
  }
  public set certChain(value: string) {
    this._certChain = value;
  }
  public resetCertChain() {
    this._certChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certChainInput() {
    return this._certChain;
  }

  // ctlog - computed: false, optional: true, required: false
  private _ctlog = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesCtlogOutputReference(this, "ctlog");
  public get ctlog() {
    return this._ctlog;
  }
  public putCtlog(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesCtlog) {
    this._ctlog.internalValue = value;
  }
  public resetCtlog() {
    this._ctlog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctlogInput() {
    return this._ctlog.internalValue;
  }

  // rekor - computed: false, optional: true, required: false
  private _rekor = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesRekorOutputReference(this, "rekor");
  public get rekor() {
    return this._rekor;
  }
  public putRekor(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesRekor) {
    this._rekor.internalValue = value;
  }
  public resetRekor() {
    this._rekor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rekorInput() {
    return this._rekor.internalValue;
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessCtlog {
  /**
  * IgnoreSCT defines whether to use the Signed Certificate Timestamp (SCT) log to check for a certificate timestamp. Default is false. Set to true if this was opted out during signing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#ignore_sct DataK8SKyvernoIoClusterPolicyV1Manifest#ignore_sct}
  */
  readonly ignoreSct?: boolean | cdktf.IResolvable;
  /**
  * PubKey, if set, is used to validate SCTs against a custom source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#pubkey DataK8SKyvernoIoClusterPolicyV1Manifest#pubkey}
  */
  readonly pubkey?: string;
  /**
  * TSACertChain, if set, is the PEM-encoded certificate chain file for the RFC3161 timestamp authority. Must contain the root CA certificate. Optionally may contain intermediate CA certificates, and may contain the leaf TSA certificate if not present in the timestamurce.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#tsa_cert_chain DataK8SKyvernoIoClusterPolicyV1Manifest#tsa_cert_chain}
  */
  readonly tsaCertChain?: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessCtlogToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessCtlog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_sct: cdktf.booleanToTerraform(struct!.ignoreSct),
    pubkey: cdktf.stringToTerraform(struct!.pubkey),
    tsa_cert_chain: cdktf.stringToTerraform(struct!.tsaCertChain),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessCtlogToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessCtlog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_sct: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSct),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pubkey: {
      value: cdktf.stringToHclTerraform(struct!.pubkey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsa_cert_chain: {
      value: cdktf.stringToHclTerraform(struct!.tsaCertChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessCtlogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessCtlog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreSct !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSct = this._ignoreSct;
    }
    if (this._pubkey !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubkey = this._pubkey;
    }
    if (this._tsaCertChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsaCertChain = this._tsaCertChain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessCtlog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreSct = undefined;
      this._pubkey = undefined;
      this._tsaCertChain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreSct = value.ignoreSct;
      this._pubkey = value.pubkey;
      this._tsaCertChain = value.tsaCertChain;
    }
  }

  // ignore_sct - computed: false, optional: true, required: false
  private _ignoreSct?: boolean | cdktf.IResolvable; 
  public get ignoreSct() {
    return this.getBooleanAttribute('ignore_sct');
  }
  public set ignoreSct(value: boolean | cdktf.IResolvable) {
    this._ignoreSct = value;
  }
  public resetIgnoreSct() {
    this._ignoreSct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSctInput() {
    return this._ignoreSct;
  }

  // pubkey - computed: false, optional: true, required: false
  private _pubkey?: string; 
  public get pubkey() {
    return this.getStringAttribute('pubkey');
  }
  public set pubkey(value: string) {
    this._pubkey = value;
  }
  public resetPubkey() {
    this._pubkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubkeyInput() {
    return this._pubkey;
  }

  // tsa_cert_chain - computed: false, optional: true, required: false
  private _tsaCertChain?: string; 
  public get tsaCertChain() {
    return this.getStringAttribute('tsa_cert_chain');
  }
  public set tsaCertChain(value: string) {
    this._tsaCertChain = value;
  }
  public resetTsaCertChain() {
    this._tsaCertChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsaCertChainInput() {
    return this._tsaCertChain;
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessRekor {
  /**
  * IgnoreTlog skips transparency log verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#ignore_tlog DataK8SKyvernoIoClusterPolicyV1Manifest#ignore_tlog}
  */
  readonly ignoreTlog?: boolean | cdktf.IResolvable;
  /**
  * RekorPubKey is an optional PEM-encoded public key to use for a custom Rekor. If set, this will be used to validate transparency log signatures from a custom Rekor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#pubkey DataK8SKyvernoIoClusterPolicyV1Manifest#pubkey}
  */
  readonly pubkey?: string;
  /**
  * URL is the address of the transparency log. Defaults to the public Rekor log instance https://rekor.sigstore.dev.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#url DataK8SKyvernoIoClusterPolicyV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessRekorToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessRekor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_tlog: cdktf.booleanToTerraform(struct!.ignoreTlog),
    pubkey: cdktf.stringToTerraform(struct!.pubkey),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessRekorToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessRekor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_tlog: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreTlog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pubkey: {
      value: cdktf.stringToHclTerraform(struct!.pubkey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessRekorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessRekor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreTlog !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTlog = this._ignoreTlog;
    }
    if (this._pubkey !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubkey = this._pubkey;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessRekor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreTlog = undefined;
      this._pubkey = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreTlog = value.ignoreTlog;
      this._pubkey = value.pubkey;
      this._url = value.url;
    }
  }

  // ignore_tlog - computed: false, optional: true, required: false
  private _ignoreTlog?: boolean | cdktf.IResolvable; 
  public get ignoreTlog() {
    return this.getBooleanAttribute('ignore_tlog');
  }
  public set ignoreTlog(value: boolean | cdktf.IResolvable) {
    this._ignoreTlog = value;
  }
  public resetIgnoreTlog() {
    this._ignoreTlog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTlogInput() {
    return this._ignoreTlog;
  }

  // pubkey - computed: false, optional: true, required: false
  private _pubkey?: string; 
  public get pubkey() {
    return this.getStringAttribute('pubkey');
  }
  public set pubkey(value: string) {
    this._pubkey = value;
  }
  public resetPubkey() {
    this._pubkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubkeyInput() {
    return this._pubkey;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeyless {
  /**
  * AdditionalExtensions are certificate-extensions used for keyless signing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#additional_extensions DataK8SKyvernoIoClusterPolicyV1Manifest#additional_extensions}
  */
  readonly additionalExtensions?: { [key: string]: string };
  /**
  * CTLog (certificate timestamp log) provides a configuration for validation of Signed Certificate Timestamps (SCTs). If the value is unset, the default behavior by Cosign is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#ctlog DataK8SKyvernoIoClusterPolicyV1Manifest#ctlog}
  */
  readonly ctlog?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessCtlog;
  /**
  * Issuer is the certificate issuer used for keyless signing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#issuer DataK8SKyvernoIoClusterPolicyV1Manifest#issuer}
  */
  readonly issuer?: string;
  /**
  * IssuerRegExp is the regular expression to match certificate issuer used for keyless signing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#issuer_reg_exp DataK8SKyvernoIoClusterPolicyV1Manifest#issuer_reg_exp}
  */
  readonly issuerRegExp?: string;
  /**
  * Rekor provides configuration for the Rekor transparency log service. If an empty object is provided the public instance of Rekor (https://rekor.sigstore.dev) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#rekor DataK8SKyvernoIoClusterPolicyV1Manifest#rekor}
  */
  readonly rekor?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessRekor;
  /**
  * Roots is an optional set of PEM encoded trusted root certificates. If not provided, the system roots are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#roots DataK8SKyvernoIoClusterPolicyV1Manifest#roots}
  */
  readonly roots?: string;
  /**
  * Subject is the verified identity used for keyless signing, for example the email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#subject DataK8SKyvernoIoClusterPolicyV1Manifest#subject}
  */
  readonly subject?: string;
  /**
  * SubjectRegExp is the regular expression to match identity used for keyless signing, for example the email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#subject_reg_exp DataK8SKyvernoIoClusterPolicyV1Manifest#subject_reg_exp}
  */
  readonly subjectRegExp?: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeyless | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_extensions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalExtensions),
    ctlog: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessCtlogToTerraform(struct!.ctlog),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    issuer_reg_exp: cdktf.stringToTerraform(struct!.issuerRegExp),
    rekor: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessRekorToTerraform(struct!.rekor),
    roots: cdktf.stringToTerraform(struct!.roots),
    subject: cdktf.stringToTerraform(struct!.subject),
    subject_reg_exp: cdktf.stringToTerraform(struct!.subjectRegExp),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeyless | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_extensions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalExtensions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ctlog: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessCtlogToHclTerraform(struct!.ctlog),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessCtlog",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_reg_exp: {
      value: cdktf.stringToHclTerraform(struct!.issuerRegExp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rekor: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessRekorToHclTerraform(struct!.rekor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessRekor",
    },
    roots: {
      value: cdktf.stringToHclTerraform(struct!.roots),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_reg_exp: {
      value: cdktf.stringToHclTerraform(struct!.subjectRegExp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeyless | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalExtensions = this._additionalExtensions;
    }
    if (this._ctlog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ctlog = this._ctlog?.internalValue;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._issuerRegExp !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerRegExp = this._issuerRegExp;
    }
    if (this._rekor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rekor = this._rekor?.internalValue;
    }
    if (this._roots !== undefined) {
      hasAnyValues = true;
      internalValueResult.roots = this._roots;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._subjectRegExp !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectRegExp = this._subjectRegExp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeyless | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalExtensions = undefined;
      this._ctlog.internalValue = undefined;
      this._issuer = undefined;
      this._issuerRegExp = undefined;
      this._rekor.internalValue = undefined;
      this._roots = undefined;
      this._subject = undefined;
      this._subjectRegExp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalExtensions = value.additionalExtensions;
      this._ctlog.internalValue = value.ctlog;
      this._issuer = value.issuer;
      this._issuerRegExp = value.issuerRegExp;
      this._rekor.internalValue = value.rekor;
      this._roots = value.roots;
      this._subject = value.subject;
      this._subjectRegExp = value.subjectRegExp;
    }
  }

  // additional_extensions - computed: false, optional: true, required: false
  private _additionalExtensions?: { [key: string]: string }; 
  public get additionalExtensions() {
    return this.getStringMapAttribute('additional_extensions');
  }
  public set additionalExtensions(value: { [key: string]: string }) {
    this._additionalExtensions = value;
  }
  public resetAdditionalExtensions() {
    this._additionalExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalExtensionsInput() {
    return this._additionalExtensions;
  }

  // ctlog - computed: false, optional: true, required: false
  private _ctlog = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessCtlogOutputReference(this, "ctlog");
  public get ctlog() {
    return this._ctlog;
  }
  public putCtlog(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessCtlog) {
    this._ctlog.internalValue = value;
  }
  public resetCtlog() {
    this._ctlog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctlogInput() {
    return this._ctlog.internalValue;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // issuer_reg_exp - computed: false, optional: true, required: false
  private _issuerRegExp?: string; 
  public get issuerRegExp() {
    return this.getStringAttribute('issuer_reg_exp');
  }
  public set issuerRegExp(value: string) {
    this._issuerRegExp = value;
  }
  public resetIssuerRegExp() {
    this._issuerRegExp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerRegExpInput() {
    return this._issuerRegExp;
  }

  // rekor - computed: false, optional: true, required: false
  private _rekor = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessRekorOutputReference(this, "rekor");
  public get rekor() {
    return this._rekor;
  }
  public putRekor(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessRekor) {
    this._rekor.internalValue = value;
  }
  public resetRekor() {
    this._rekor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rekorInput() {
    return this._rekor.internalValue;
  }

  // roots - computed: false, optional: true, required: false
  private _roots?: string; 
  public get roots() {
    return this.getStringAttribute('roots');
  }
  public set roots(value: string) {
    this._roots = value;
  }
  public resetRoots() {
    this._roots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootsInput() {
    return this._roots;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // subject_reg_exp - computed: false, optional: true, required: false
  private _subjectRegExp?: string; 
  public get subjectRegExp() {
    return this.getStringAttribute('subject_reg_exp');
  }
  public set subjectRegExp(value: string) {
    this._subjectRegExp = value;
  }
  public resetSubjectRegExp() {
    this._subjectRegExp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectRegExpInput() {
    return this._subjectRegExp;
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysCtlog {
  /**
  * IgnoreSCT defines whether to use the Signed Certificate Timestamp (SCT) log to check for a certificate timestamp. Default is false. Set to true if this was opted out during signing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#ignore_sct DataK8SKyvernoIoClusterPolicyV1Manifest#ignore_sct}
  */
  readonly ignoreSct?: boolean | cdktf.IResolvable;
  /**
  * PubKey, if set, is used to validate SCTs against a custom source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#pubkey DataK8SKyvernoIoClusterPolicyV1Manifest#pubkey}
  */
  readonly pubkey?: string;
  /**
  * TSACertChain, if set, is the PEM-encoded certificate chain file for the RFC3161 timestamp authority. Must contain the root CA certificate. Optionally may contain intermediate CA certificates, and may contain the leaf TSA certificate if not present in the timestamurce.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#tsa_cert_chain DataK8SKyvernoIoClusterPolicyV1Manifest#tsa_cert_chain}
  */
  readonly tsaCertChain?: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysCtlogToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysCtlog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_sct: cdktf.booleanToTerraform(struct!.ignoreSct),
    pubkey: cdktf.stringToTerraform(struct!.pubkey),
    tsa_cert_chain: cdktf.stringToTerraform(struct!.tsaCertChain),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysCtlogToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysCtlog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_sct: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSct),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pubkey: {
      value: cdktf.stringToHclTerraform(struct!.pubkey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsa_cert_chain: {
      value: cdktf.stringToHclTerraform(struct!.tsaCertChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysCtlogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysCtlog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreSct !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSct = this._ignoreSct;
    }
    if (this._pubkey !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubkey = this._pubkey;
    }
    if (this._tsaCertChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsaCertChain = this._tsaCertChain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysCtlog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreSct = undefined;
      this._pubkey = undefined;
      this._tsaCertChain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreSct = value.ignoreSct;
      this._pubkey = value.pubkey;
      this._tsaCertChain = value.tsaCertChain;
    }
  }

  // ignore_sct - computed: false, optional: true, required: false
  private _ignoreSct?: boolean | cdktf.IResolvable; 
  public get ignoreSct() {
    return this.getBooleanAttribute('ignore_sct');
  }
  public set ignoreSct(value: boolean | cdktf.IResolvable) {
    this._ignoreSct = value;
  }
  public resetIgnoreSct() {
    this._ignoreSct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSctInput() {
    return this._ignoreSct;
  }

  // pubkey - computed: false, optional: true, required: false
  private _pubkey?: string; 
  public get pubkey() {
    return this.getStringAttribute('pubkey');
  }
  public set pubkey(value: string) {
    this._pubkey = value;
  }
  public resetPubkey() {
    this._pubkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubkeyInput() {
    return this._pubkey;
  }

  // tsa_cert_chain - computed: false, optional: true, required: false
  private _tsaCertChain?: string; 
  public get tsaCertChain() {
    return this.getStringAttribute('tsa_cert_chain');
  }
  public set tsaCertChain(value: string) {
    this._tsaCertChain = value;
  }
  public resetTsaCertChain() {
    this._tsaCertChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsaCertChainInput() {
    return this._tsaCertChain;
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysRekor {
  /**
  * IgnoreTlog skips transparency log verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#ignore_tlog DataK8SKyvernoIoClusterPolicyV1Manifest#ignore_tlog}
  */
  readonly ignoreTlog?: boolean | cdktf.IResolvable;
  /**
  * RekorPubKey is an optional PEM-encoded public key to use for a custom Rekor. If set, this will be used to validate transparency log signatures from a custom Rekor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#pubkey DataK8SKyvernoIoClusterPolicyV1Manifest#pubkey}
  */
  readonly pubkey?: string;
  /**
  * URL is the address of the transparency log. Defaults to the public Rekor log instance https://rekor.sigstore.dev.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#url DataK8SKyvernoIoClusterPolicyV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysRekorToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysRekor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_tlog: cdktf.booleanToTerraform(struct!.ignoreTlog),
    pubkey: cdktf.stringToTerraform(struct!.pubkey),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysRekorToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysRekor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_tlog: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreTlog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pubkey: {
      value: cdktf.stringToHclTerraform(struct!.pubkey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysRekorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysRekor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreTlog !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTlog = this._ignoreTlog;
    }
    if (this._pubkey !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubkey = this._pubkey;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysRekor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreTlog = undefined;
      this._pubkey = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreTlog = value.ignoreTlog;
      this._pubkey = value.pubkey;
      this._url = value.url;
    }
  }

  // ignore_tlog - computed: false, optional: true, required: false
  private _ignoreTlog?: boolean | cdktf.IResolvable; 
  public get ignoreTlog() {
    return this.getBooleanAttribute('ignore_tlog');
  }
  public set ignoreTlog(value: boolean | cdktf.IResolvable) {
    this._ignoreTlog = value;
  }
  public resetIgnoreTlog() {
    this._ignoreTlog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTlogInput() {
    return this._ignoreTlog;
  }

  // pubkey - computed: false, optional: true, required: false
  private _pubkey?: string; 
  public get pubkey() {
    return this.getStringAttribute('pubkey');
  }
  public set pubkey(value: string) {
    this._pubkey = value;
  }
  public resetPubkey() {
    this._pubkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubkeyInput() {
    return this._pubkey;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysSecret {
  /**
  * Name of the secret. The provided secret must contain a key named cosign.pub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#name DataK8SKyvernoIoClusterPolicyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace name where the Secret exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#namespace DataK8SKyvernoIoClusterPolicyV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysSecretToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysSecretToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysSecret | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeys {
  /**
  * CTLog (certificate timestamp log) provides a configuration for validation of Signed Certificate Timestamps (SCTs). If the value is unset, the default behavior by Cosign is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#ctlog DataK8SKyvernoIoClusterPolicyV1Manifest#ctlog}
  */
  readonly ctlog?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysCtlog;
  /**
  * KMS provides the URI to the public key stored in a Key Management System. See: https://github.com/sigstore/cosign/blob/main/KMS.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#kms DataK8SKyvernoIoClusterPolicyV1Manifest#kms}
  */
  readonly kms?: string;
  /**
  * Keys is a set of X.509 public keys used to verify image signatures. The keys can be directly specified or can be a variable reference to a key specified in a ConfigMap (see https://kyverno.io/docs/writing-policies/variables/), or reference a standard Kubernetes Secret elsewhere in the cluster by specifying it in the format 'k8s://<namespace>/<secret_name>'. The named Secret must specify a key 'cosign.pub' containing the public key used for verification, (see https://github.com/sigstore/cosign/blob/main/KMS.md#kubernetes-secret). When multiple keys are specified each key is processed as a separate staticKey entry (.attestors[*].entries.keys) within the set of attestors and the count is applied across the keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#public_keys DataK8SKyvernoIoClusterPolicyV1Manifest#public_keys}
  */
  readonly publicKeys?: string;
  /**
  * Rekor provides configuration for the Rekor transparency log service. If an empty object is provided the public instance of Rekor (https://rekor.sigstore.dev) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#rekor DataK8SKyvernoIoClusterPolicyV1Manifest#rekor}
  */
  readonly rekor?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysRekor;
  /**
  * Reference to a Secret resource that contains a public key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#secret DataK8SKyvernoIoClusterPolicyV1Manifest#secret}
  */
  readonly secret?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysSecret;
  /**
  * Deprecated. Use attestor.signatureAlgorithm instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#signature_algorithm DataK8SKyvernoIoClusterPolicyV1Manifest#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ctlog: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysCtlogToTerraform(struct!.ctlog),
    kms: cdktf.stringToTerraform(struct!.kms),
    public_keys: cdktf.stringToTerraform(struct!.publicKeys),
    rekor: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysRekorToTerraform(struct!.rekor),
    secret: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysSecretToTerraform(struct!.secret),
    signature_algorithm: cdktf.stringToTerraform(struct!.signatureAlgorithm),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ctlog: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysCtlogToHclTerraform(struct!.ctlog),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysCtlog",
    },
    kms: {
      value: cdktf.stringToHclTerraform(struct!.kms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_keys: {
      value: cdktf.stringToHclTerraform(struct!.publicKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rekor: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysRekorToHclTerraform(struct!.rekor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysRekor",
    },
    secret: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysSecret",
    },
    signature_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.signatureAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ctlog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ctlog = this._ctlog?.internalValue;
    }
    if (this._kms !== undefined) {
      hasAnyValues = true;
      internalValueResult.kms = this._kms;
    }
    if (this._publicKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeys = this._publicKeys;
    }
    if (this._rekor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rekor = this._rekor?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._signatureAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureAlgorithm = this._signatureAlgorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ctlog.internalValue = undefined;
      this._kms = undefined;
      this._publicKeys = undefined;
      this._rekor.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._signatureAlgorithm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ctlog.internalValue = value.ctlog;
      this._kms = value.kms;
      this._publicKeys = value.publicKeys;
      this._rekor.internalValue = value.rekor;
      this._secret.internalValue = value.secret;
      this._signatureAlgorithm = value.signatureAlgorithm;
    }
  }

  // ctlog - computed: false, optional: true, required: false
  private _ctlog = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysCtlogOutputReference(this, "ctlog");
  public get ctlog() {
    return this._ctlog;
  }
  public putCtlog(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysCtlog) {
    this._ctlog.internalValue = value;
  }
  public resetCtlog() {
    this._ctlog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctlogInput() {
    return this._ctlog.internalValue;
  }

  // kms - computed: false, optional: true, required: false
  private _kms?: string; 
  public get kms() {
    return this.getStringAttribute('kms');
  }
  public set kms(value: string) {
    this._kms = value;
  }
  public resetKms() {
    this._kms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsInput() {
    return this._kms;
  }

  // public_keys - computed: false, optional: true, required: false
  private _publicKeys?: string; 
  public get publicKeys() {
    return this.getStringAttribute('public_keys');
  }
  public set publicKeys(value: string) {
    this._publicKeys = value;
  }
  public resetPublicKeys() {
    this._publicKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeysInput() {
    return this._publicKeys;
  }

  // rekor - computed: false, optional: true, required: false
  private _rekor = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysRekorOutputReference(this, "rekor");
  public get rekor() {
    return this._rekor;
  }
  public putRekor(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysRekor) {
    this._rekor.internalValue = value;
  }
  public resetRekor() {
    this._rekor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rekorInput() {
    return this._rekor.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // signature_algorithm - computed: false, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntries {
  /**
  * Annotations are used for image verification. Every specified key-value pair must exist and match in the verified payload. The payload may contain other key-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#annotations DataK8SKyvernoIoClusterPolicyV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Attestor is a nested set of Attestor used to specify a more complex set of match authorities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#attestor DataK8SKyvernoIoClusterPolicyV1Manifest#attestor}
  */
  readonly attestor?: { [key: string]: string };
  /**
  * Certificates specifies one or more certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#certificates DataK8SKyvernoIoClusterPolicyV1Manifest#certificates}
  */
  readonly certificates?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificates;
  /**
  * Keyless is a set of attribute used to verify a Sigstore keyless attestor. See https://github.com/sigstore/cosign/blob/main/KEYLESS.md.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#keyless DataK8SKyvernoIoClusterPolicyV1Manifest#keyless}
  */
  readonly keyless?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeyless;
  /**
  * Keys specifies one or more public keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#keys DataK8SKyvernoIoClusterPolicyV1Manifest#keys}
  */
  readonly keys?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeys;
  /**
  * Repository is an optional alternate OCI repository to use for signatures and attestations that match this rule. If specified Repository will override other OCI image repository locations for this Attestor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#repository DataK8SKyvernoIoClusterPolicyV1Manifest#repository}
  */
  readonly repository?: string;
  /**
  * Specify signature algorithm for public keys. Supported values are sha224, sha256, sha384 and sha512.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#signature_algorithm DataK8SKyvernoIoClusterPolicyV1Manifest#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    attestor: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attestor),
    certificates: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesToTerraform(struct!.certificates),
    keyless: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessToTerraform(struct!.keyless),
    keys: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysToTerraform(struct!.keys),
    repository: cdktf.stringToTerraform(struct!.repository),
    signature_algorithm: cdktf.stringToTerraform(struct!.signatureAlgorithm),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntries | cdktf.IResolvable): any {
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
    attestor: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.attestor),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    certificates: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesToHclTerraform(struct!.certificates),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificates",
    },
    keyless: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessToHclTerraform(struct!.keyless),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeyless",
    },
    keys: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysToHclTerraform(struct!.keys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeys",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.signatureAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._attestor !== undefined) {
      hasAnyValues = true;
      internalValueResult.attestor = this._attestor;
    }
    if (this._certificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificates = this._certificates?.internalValue;
    }
    if (this._keyless?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyless = this._keyless?.internalValue;
    }
    if (this._keys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys?.internalValue;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._signatureAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureAlgorithm = this._signatureAlgorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._attestor = undefined;
      this._certificates.internalValue = undefined;
      this._keyless.internalValue = undefined;
      this._keys.internalValue = undefined;
      this._repository = undefined;
      this._signatureAlgorithm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._attestor = value.attestor;
      this._certificates.internalValue = value.certificates;
      this._keyless.internalValue = value.keyless;
      this._keys.internalValue = value.keys;
      this._repository = value.repository;
      this._signatureAlgorithm = value.signatureAlgorithm;
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

  // attestor - computed: false, optional: true, required: false
  private _attestor?: { [key: string]: string }; 
  public get attestor() {
    return this.getStringMapAttribute('attestor');
  }
  public set attestor(value: { [key: string]: string }) {
    this._attestor = value;
  }
  public resetAttestor() {
    this._attestor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attestorInput() {
    return this._attestor;
  }

  // certificates - computed: false, optional: true, required: false
  private _certificates = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificatesOutputReference(this, "certificates");
  public get certificates() {
    return this._certificates;
  }
  public putCertificates(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesCertificates) {
    this._certificates.internalValue = value;
  }
  public resetCertificates() {
    this._certificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates.internalValue;
  }

  // keyless - computed: false, optional: true, required: false
  private _keyless = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeylessOutputReference(this, "keyless");
  public get keyless() {
    return this._keyless;
  }
  public putKeyless(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeyless) {
    this._keyless.internalValue = value;
  }
  public resetKeyless() {
    this._keyless.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keylessInput() {
    return this._keyless.internalValue;
  }

  // keys - computed: false, optional: true, required: false
  private _keys = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeysOutputReference(this, "keys");
  public get keys() {
    return this._keys;
  }
  public putKeys(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesKeys) {
    this._keys.internalValue = value;
  }
  public resetKeys() {
    this._keys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys.internalValue;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // signature_algorithm - computed: false, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntries[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesOutputReference {
    return new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestors {
  /**
  * Count specifies the required number of entries that must match. If the count is null, all entries must match (a logical AND). If the count is 1, at least one entry must match (a logical OR). If the count contains a value N, then N must be less than or equal to the size of entries, and at least N entries must match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#count DataK8SKyvernoIoClusterPolicyV1Manifest#count}
  */
  readonly count?: number;
  /**
  * Entries contains the available attestors. An attestor can be a static key, attributes for keyless verification, or a nested attestor declaration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#entries DataK8SKyvernoIoClusterPolicyV1Manifest#entries}
  */
  readonly entries?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntries[] | cdktf.IResolvable;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    entries: cdktf.listMapper(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesToTerraform, false)(struct!.entries),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entries: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesToHclTerraform, false)(struct!.entries),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._entries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entries = this._entries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._entries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._entries.internalValue = value.entries;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // entries - computed: false, optional: true, required: false
  private _entries = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsOutputReference {
    return new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAll {
  /**
  * Key is the context entry (using JMESPath) for conditional rule evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#key DataK8SKyvernoIoClusterPolicyV1Manifest#key}
  */
  readonly key?: { [key: string]: string };
  /**
  * Message is an optional display message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#message DataK8SKyvernoIoClusterPolicyV1Manifest#message}
  */
  readonly message?: string;
  /**
  * Operator is the conditional operation to perform. Valid operators are: Equals, NotEquals, In, AnyIn, AllIn, NotIn, AnyNotIn, AllNotIn, GreaterThanOrEquals, GreaterThan, LessThanOrEquals, LessThan, DurationGreaterThanOrEquals, DurationGreaterThan, DurationLessThanOrEquals, DurationLessThan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#operator DataK8SKyvernoIoClusterPolicyV1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Value is the conditional value, or set of values. The values can be fixed set or can be variables declared using JMESPath.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#value DataK8SKyvernoIoClusterPolicyV1Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAllToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.key),
    message: cdktf.stringToTerraform(struct!.message),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAllToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.key),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
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
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAll | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAll | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._message = undefined;
      this._operator = undefined;
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
      this._message = value.message;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: { [key: string]: string }; 
  public get key() {
    return this.getStringMapAttribute('key');
  }
  public set key(value: { [key: string]: string }) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

  // value - computed: false, optional: true, required: false
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
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

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAllList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAll[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAllOutputReference {
    return new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAny {
  /**
  * Key is the context entry (using JMESPath) for conditional rule evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#key DataK8SKyvernoIoClusterPolicyV1Manifest#key}
  */
  readonly key?: { [key: string]: string };
  /**
  * Message is an optional display message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#message DataK8SKyvernoIoClusterPolicyV1Manifest#message}
  */
  readonly message?: string;
  /**
  * Operator is the conditional operation to perform. Valid operators are: Equals, NotEquals, In, AnyIn, AllIn, NotIn, AnyNotIn, AllNotIn, GreaterThanOrEquals, GreaterThan, LessThanOrEquals, LessThan, DurationGreaterThanOrEquals, DurationGreaterThan, DurationLessThanOrEquals, DurationLessThan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#operator DataK8SKyvernoIoClusterPolicyV1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Value is the conditional value, or set of values. The values can be fixed set or can be variables declared using JMESPath.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#value DataK8SKyvernoIoClusterPolicyV1Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAnyToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.key),
    message: cdktf.stringToTerraform(struct!.message),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAnyToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.key),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
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
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAnyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAny | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAny | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._message = undefined;
      this._operator = undefined;
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
      this._message = value.message;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: { [key: string]: string }; 
  public get key() {
    return this.getStringMapAttribute('key');
  }
  public set key(value: { [key: string]: string }) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

  // value - computed: false, optional: true, required: false
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
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

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAnyList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAny[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAnyOutputReference {
    return new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAnyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditions {
  /**
  * AllConditions enable variable-based conditional rule execution. This is useful for finer control of when an rule is applied. A condition can reference object data using JMESPath notation. Here, all of the conditions need to pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#all DataK8SKyvernoIoClusterPolicyV1Manifest#all}
  */
  readonly all?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAll[] | cdktf.IResolvable;
  /**
  * AnyConditions enable variable-based conditional rule execution. This is useful for finer control of when an rule is applied. A condition can reference object data using JMESPath notation. Here, at least one of the conditions need to pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#any DataK8SKyvernoIoClusterPolicyV1Manifest#any}
  */
  readonly any?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAny[] | cdktf.IResolvable;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.listMapper(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAllToTerraform, false)(struct!.all),
    any: cdktf.listMapper(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAnyToTerraform, false)(struct!.any),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAllToHclTerraform, false)(struct!.all),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAllList",
    },
    any: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAnyToHclTerraform, false)(struct!.any),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAnyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    if (this._any?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._all.internalValue = undefined;
      this._any.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._all.internalValue = value.all;
      this._any.internalValue = value.any;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAllList(this, "all", false);
  public get all() {
    return this._all;
  }
  public putAll(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAll[] | cdktf.IResolvable) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }

  // any - computed: false, optional: true, required: false
  private _any = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAnyList(this, "any", false);
  public get any() {
    return this._any;
  }
  public putAny(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsAny[] | cdktf.IResolvable) {
    this._any.internalValue = value;
  }
  public resetAny() {
    this._any.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any.internalValue;
  }
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsOutputReference {
    return new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestations {
  /**
  * Attestors specify the required attestors (i.e. authorities).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#attestors DataK8SKyvernoIoClusterPolicyV1Manifest#attestors}
  */
  readonly attestors?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestors[] | cdktf.IResolvable;
  /**
  * Conditions are used to verify attributes within a Predicate. If no Conditions are specified the attestation check is satisfied as long there are predicates that match the predicate type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#conditions DataK8SKyvernoIoClusterPolicyV1Manifest#conditions}
  */
  readonly conditions?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditions[] | cdktf.IResolvable;
  /**
  * Name is the variable name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#name DataK8SKyvernoIoClusterPolicyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Deprecated in favour of 'Type', to be removed soon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#predicate_type DataK8SKyvernoIoClusterPolicyV1Manifest#predicate_type}
  */
  readonly predicateType?: string;
  /**
  * Type defines the type of attestation contained within the Statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#type DataK8SKyvernoIoClusterPolicyV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attestors: cdktf.listMapper(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsToTerraform, false)(struct!.attestors),
    conditions: cdktf.listMapper(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsToTerraform, false)(struct!.conditions),
    name: cdktf.stringToTerraform(struct!.name),
    predicate_type: cdktf.stringToTerraform(struct!.predicateType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attestors: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsToHclTerraform, false)(struct!.attestors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsList",
    },
    conditions: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    predicate_type: {
      value: cdktf.stringToHclTerraform(struct!.predicateType),
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

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attestors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attestors = this._attestors?.internalValue;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._predicateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicateType = this._predicateType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attestors.internalValue = undefined;
      this._conditions.internalValue = undefined;
      this._name = undefined;
      this._predicateType = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attestors.internalValue = value.attestors;
      this._conditions.internalValue = value.conditions;
      this._name = value.name;
      this._predicateType = value.predicateType;
      this._type = value.type;
    }
  }

  // attestors - computed: false, optional: true, required: false
  private _attestors = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestorsList(this, "attestors", false);
  public get attestors() {
    return this._attestors;
  }
  public putAttestors(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsAttestors[] | cdktf.IResolvable) {
    this._attestors.internalValue = value;
  }
  public resetAttestors() {
    this._attestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attestorsInput() {
    return this._attestors.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
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

  // predicate_type - computed: false, optional: true, required: false
  private _predicateType?: string; 
  public get predicateType() {
    return this.getStringAttribute('predicate_type');
  }
  public set predicateType(value: string) {
    this._predicateType = value;
  }
  public resetPredicateType() {
    this._predicateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateTypeInput() {
    return this._predicateType;
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

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsOutputReference {
    return new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesCtlog {
  /**
  * IgnoreSCT defines whether to use the Signed Certificate Timestamp (SCT) log to check for a certificate timestamp. Default is false. Set to true if this was opted out during signing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#ignore_sct DataK8SKyvernoIoClusterPolicyV1Manifest#ignore_sct}
  */
  readonly ignoreSct?: boolean | cdktf.IResolvable;
  /**
  * PubKey, if set, is used to validate SCTs against a custom source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#pubkey DataK8SKyvernoIoClusterPolicyV1Manifest#pubkey}
  */
  readonly pubkey?: string;
  /**
  * TSACertChain, if set, is the PEM-encoded certificate chain file for the RFC3161 timestamp authority. Must contain the root CA certificate. Optionally may contain intermediate CA certificates, and may contain the leaf TSA certificate if not present in the timestamurce.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#tsa_cert_chain DataK8SKyvernoIoClusterPolicyV1Manifest#tsa_cert_chain}
  */
  readonly tsaCertChain?: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesCtlogToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesCtlog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_sct: cdktf.booleanToTerraform(struct!.ignoreSct),
    pubkey: cdktf.stringToTerraform(struct!.pubkey),
    tsa_cert_chain: cdktf.stringToTerraform(struct!.tsaCertChain),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesCtlogToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesCtlog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_sct: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSct),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pubkey: {
      value: cdktf.stringToHclTerraform(struct!.pubkey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsa_cert_chain: {
      value: cdktf.stringToHclTerraform(struct!.tsaCertChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesCtlogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesCtlog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreSct !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSct = this._ignoreSct;
    }
    if (this._pubkey !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubkey = this._pubkey;
    }
    if (this._tsaCertChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsaCertChain = this._tsaCertChain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesCtlog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreSct = undefined;
      this._pubkey = undefined;
      this._tsaCertChain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreSct = value.ignoreSct;
      this._pubkey = value.pubkey;
      this._tsaCertChain = value.tsaCertChain;
    }
  }

  // ignore_sct - computed: false, optional: true, required: false
  private _ignoreSct?: boolean | cdktf.IResolvable; 
  public get ignoreSct() {
    return this.getBooleanAttribute('ignore_sct');
  }
  public set ignoreSct(value: boolean | cdktf.IResolvable) {
    this._ignoreSct = value;
  }
  public resetIgnoreSct() {
    this._ignoreSct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSctInput() {
    return this._ignoreSct;
  }

  // pubkey - computed: false, optional: true, required: false
  private _pubkey?: string; 
  public get pubkey() {
    return this.getStringAttribute('pubkey');
  }
  public set pubkey(value: string) {
    this._pubkey = value;
  }
  public resetPubkey() {
    this._pubkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubkeyInput() {
    return this._pubkey;
  }

  // tsa_cert_chain - computed: false, optional: true, required: false
  private _tsaCertChain?: string; 
  public get tsaCertChain() {
    return this.getStringAttribute('tsa_cert_chain');
  }
  public set tsaCertChain(value: string) {
    this._tsaCertChain = value;
  }
  public resetTsaCertChain() {
    this._tsaCertChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsaCertChainInput() {
    return this._tsaCertChain;
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesRekor {
  /**
  * IgnoreTlog skips transparency log verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#ignore_tlog DataK8SKyvernoIoClusterPolicyV1Manifest#ignore_tlog}
  */
  readonly ignoreTlog?: boolean | cdktf.IResolvable;
  /**
  * RekorPubKey is an optional PEM-encoded public key to use for a custom Rekor. If set, this will be used to validate transparency log signatures from a custom Rekor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#pubkey DataK8SKyvernoIoClusterPolicyV1Manifest#pubkey}
  */
  readonly pubkey?: string;
  /**
  * URL is the address of the transparency log. Defaults to the public Rekor log instance https://rekor.sigstore.dev.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#url DataK8SKyvernoIoClusterPolicyV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesRekorToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesRekor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_tlog: cdktf.booleanToTerraform(struct!.ignoreTlog),
    pubkey: cdktf.stringToTerraform(struct!.pubkey),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesRekorToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesRekor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_tlog: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreTlog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pubkey: {
      value: cdktf.stringToHclTerraform(struct!.pubkey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesRekorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesRekor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreTlog !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTlog = this._ignoreTlog;
    }
    if (this._pubkey !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubkey = this._pubkey;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesRekor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreTlog = undefined;
      this._pubkey = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreTlog = value.ignoreTlog;
      this._pubkey = value.pubkey;
      this._url = value.url;
    }
  }

  // ignore_tlog - computed: false, optional: true, required: false
  private _ignoreTlog?: boolean | cdktf.IResolvable; 
  public get ignoreTlog() {
    return this.getBooleanAttribute('ignore_tlog');
  }
  public set ignoreTlog(value: boolean | cdktf.IResolvable) {
    this._ignoreTlog = value;
  }
  public resetIgnoreTlog() {
    this._ignoreTlog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTlogInput() {
    return this._ignoreTlog;
  }

  // pubkey - computed: false, optional: true, required: false
  private _pubkey?: string; 
  public get pubkey() {
    return this.getStringAttribute('pubkey');
  }
  public set pubkey(value: string) {
    this._pubkey = value;
  }
  public resetPubkey() {
    this._pubkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubkeyInput() {
    return this._pubkey;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificates {
  /**
  * Cert is an optional PEM-encoded public certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#cert DataK8SKyvernoIoClusterPolicyV1Manifest#cert}
  */
  readonly cert?: string;
  /**
  * CertChain is an optional PEM encoded set of certificates used to verify.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#cert_chain DataK8SKyvernoIoClusterPolicyV1Manifest#cert_chain}
  */
  readonly certChain?: string;
  /**
  * CTLog (certificate timestamp log) provides a configuration for validation of Signed Certificate Timestamps (SCTs). If the value is unset, the default behavior by Cosign is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#ctlog DataK8SKyvernoIoClusterPolicyV1Manifest#ctlog}
  */
  readonly ctlog?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesCtlog;
  /**
  * Rekor provides configuration for the Rekor transparency log service. If an empty object is provided the public instance of Rekor (https://rekor.sigstore.dev) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#rekor DataK8SKyvernoIoClusterPolicyV1Manifest#rekor}
  */
  readonly rekor?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesRekor;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    cert_chain: cdktf.stringToTerraform(struct!.certChain),
    ctlog: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesCtlogToTerraform(struct!.ctlog),
    rekor: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesRekorToTerraform(struct!.rekor),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_chain: {
      value: cdktf.stringToHclTerraform(struct!.certChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ctlog: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesCtlogToHclTerraform(struct!.ctlog),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesCtlog",
    },
    rekor: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesRekorToHclTerraform(struct!.rekor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesRekor",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._certChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.certChain = this._certChain;
    }
    if (this._ctlog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ctlog = this._ctlog?.internalValue;
    }
    if (this._rekor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rekor = this._rekor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cert = undefined;
      this._certChain = undefined;
      this._ctlog.internalValue = undefined;
      this._rekor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cert = value.cert;
      this._certChain = value.certChain;
      this._ctlog.internalValue = value.ctlog;
      this._rekor.internalValue = value.rekor;
    }
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // cert_chain - computed: false, optional: true, required: false
  private _certChain?: string; 
  public get certChain() {
    return this.getStringAttribute('cert_chain');
  }
  public set certChain(value: string) {
    this._certChain = value;
  }
  public resetCertChain() {
    this._certChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certChainInput() {
    return this._certChain;
  }

  // ctlog - computed: false, optional: true, required: false
  private _ctlog = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesCtlogOutputReference(this, "ctlog");
  public get ctlog() {
    return this._ctlog;
  }
  public putCtlog(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesCtlog) {
    this._ctlog.internalValue = value;
  }
  public resetCtlog() {
    this._ctlog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctlogInput() {
    return this._ctlog.internalValue;
  }

  // rekor - computed: false, optional: true, required: false
  private _rekor = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesRekorOutputReference(this, "rekor");
  public get rekor() {
    return this._rekor;
  }
  public putRekor(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesRekor) {
    this._rekor.internalValue = value;
  }
  public resetRekor() {
    this._rekor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rekorInput() {
    return this._rekor.internalValue;
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessCtlog {
  /**
  * IgnoreSCT defines whether to use the Signed Certificate Timestamp (SCT) log to check for a certificate timestamp. Default is false. Set to true if this was opted out during signing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#ignore_sct DataK8SKyvernoIoClusterPolicyV1Manifest#ignore_sct}
  */
  readonly ignoreSct?: boolean | cdktf.IResolvable;
  /**
  * PubKey, if set, is used to validate SCTs against a custom source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#pubkey DataK8SKyvernoIoClusterPolicyV1Manifest#pubkey}
  */
  readonly pubkey?: string;
  /**
  * TSACertChain, if set, is the PEM-encoded certificate chain file for the RFC3161 timestamp authority. Must contain the root CA certificate. Optionally may contain intermediate CA certificates, and may contain the leaf TSA certificate if not present in the timestamurce.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#tsa_cert_chain DataK8SKyvernoIoClusterPolicyV1Manifest#tsa_cert_chain}
  */
  readonly tsaCertChain?: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessCtlogToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessCtlog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_sct: cdktf.booleanToTerraform(struct!.ignoreSct),
    pubkey: cdktf.stringToTerraform(struct!.pubkey),
    tsa_cert_chain: cdktf.stringToTerraform(struct!.tsaCertChain),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessCtlogToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessCtlog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_sct: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSct),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pubkey: {
      value: cdktf.stringToHclTerraform(struct!.pubkey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsa_cert_chain: {
      value: cdktf.stringToHclTerraform(struct!.tsaCertChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessCtlogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessCtlog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreSct !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSct = this._ignoreSct;
    }
    if (this._pubkey !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubkey = this._pubkey;
    }
    if (this._tsaCertChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsaCertChain = this._tsaCertChain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessCtlog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreSct = undefined;
      this._pubkey = undefined;
      this._tsaCertChain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreSct = value.ignoreSct;
      this._pubkey = value.pubkey;
      this._tsaCertChain = value.tsaCertChain;
    }
  }

  // ignore_sct - computed: false, optional: true, required: false
  private _ignoreSct?: boolean | cdktf.IResolvable; 
  public get ignoreSct() {
    return this.getBooleanAttribute('ignore_sct');
  }
  public set ignoreSct(value: boolean | cdktf.IResolvable) {
    this._ignoreSct = value;
  }
  public resetIgnoreSct() {
    this._ignoreSct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSctInput() {
    return this._ignoreSct;
  }

  // pubkey - computed: false, optional: true, required: false
  private _pubkey?: string; 
  public get pubkey() {
    return this.getStringAttribute('pubkey');
  }
  public set pubkey(value: string) {
    this._pubkey = value;
  }
  public resetPubkey() {
    this._pubkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubkeyInput() {
    return this._pubkey;
  }

  // tsa_cert_chain - computed: false, optional: true, required: false
  private _tsaCertChain?: string; 
  public get tsaCertChain() {
    return this.getStringAttribute('tsa_cert_chain');
  }
  public set tsaCertChain(value: string) {
    this._tsaCertChain = value;
  }
  public resetTsaCertChain() {
    this._tsaCertChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsaCertChainInput() {
    return this._tsaCertChain;
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessRekor {
  /**
  * IgnoreTlog skips transparency log verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#ignore_tlog DataK8SKyvernoIoClusterPolicyV1Manifest#ignore_tlog}
  */
  readonly ignoreTlog?: boolean | cdktf.IResolvable;
  /**
  * RekorPubKey is an optional PEM-encoded public key to use for a custom Rekor. If set, this will be used to validate transparency log signatures from a custom Rekor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#pubkey DataK8SKyvernoIoClusterPolicyV1Manifest#pubkey}
  */
  readonly pubkey?: string;
  /**
  * URL is the address of the transparency log. Defaults to the public Rekor log instance https://rekor.sigstore.dev.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#url DataK8SKyvernoIoClusterPolicyV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessRekorToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessRekor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_tlog: cdktf.booleanToTerraform(struct!.ignoreTlog),
    pubkey: cdktf.stringToTerraform(struct!.pubkey),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessRekorToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessRekor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_tlog: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreTlog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pubkey: {
      value: cdktf.stringToHclTerraform(struct!.pubkey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessRekorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessRekor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreTlog !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTlog = this._ignoreTlog;
    }
    if (this._pubkey !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubkey = this._pubkey;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessRekor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreTlog = undefined;
      this._pubkey = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreTlog = value.ignoreTlog;
      this._pubkey = value.pubkey;
      this._url = value.url;
    }
  }

  // ignore_tlog - computed: false, optional: true, required: false
  private _ignoreTlog?: boolean | cdktf.IResolvable; 
  public get ignoreTlog() {
    return this.getBooleanAttribute('ignore_tlog');
  }
  public set ignoreTlog(value: boolean | cdktf.IResolvable) {
    this._ignoreTlog = value;
  }
  public resetIgnoreTlog() {
    this._ignoreTlog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTlogInput() {
    return this._ignoreTlog;
  }

  // pubkey - computed: false, optional: true, required: false
  private _pubkey?: string; 
  public get pubkey() {
    return this.getStringAttribute('pubkey');
  }
  public set pubkey(value: string) {
    this._pubkey = value;
  }
  public resetPubkey() {
    this._pubkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubkeyInput() {
    return this._pubkey;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeyless {
  /**
  * AdditionalExtensions are certificate-extensions used for keyless signing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#additional_extensions DataK8SKyvernoIoClusterPolicyV1Manifest#additional_extensions}
  */
  readonly additionalExtensions?: { [key: string]: string };
  /**
  * CTLog (certificate timestamp log) provides a configuration for validation of Signed Certificate Timestamps (SCTs). If the value is unset, the default behavior by Cosign is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#ctlog DataK8SKyvernoIoClusterPolicyV1Manifest#ctlog}
  */
  readonly ctlog?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessCtlog;
  /**
  * Issuer is the certificate issuer used for keyless signing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#issuer DataK8SKyvernoIoClusterPolicyV1Manifest#issuer}
  */
  readonly issuer?: string;
  /**
  * IssuerRegExp is the regular expression to match certificate issuer used for keyless signing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#issuer_reg_exp DataK8SKyvernoIoClusterPolicyV1Manifest#issuer_reg_exp}
  */
  readonly issuerRegExp?: string;
  /**
  * Rekor provides configuration for the Rekor transparency log service. If an empty object is provided the public instance of Rekor (https://rekor.sigstore.dev) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#rekor DataK8SKyvernoIoClusterPolicyV1Manifest#rekor}
  */
  readonly rekor?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessRekor;
  /**
  * Roots is an optional set of PEM encoded trusted root certificates. If not provided, the system roots are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#roots DataK8SKyvernoIoClusterPolicyV1Manifest#roots}
  */
  readonly roots?: string;
  /**
  * Subject is the verified identity used for keyless signing, for example the email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#subject DataK8SKyvernoIoClusterPolicyV1Manifest#subject}
  */
  readonly subject?: string;
  /**
  * SubjectRegExp is the regular expression to match identity used for keyless signing, for example the email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#subject_reg_exp DataK8SKyvernoIoClusterPolicyV1Manifest#subject_reg_exp}
  */
  readonly subjectRegExp?: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeyless | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_extensions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalExtensions),
    ctlog: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessCtlogToTerraform(struct!.ctlog),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    issuer_reg_exp: cdktf.stringToTerraform(struct!.issuerRegExp),
    rekor: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessRekorToTerraform(struct!.rekor),
    roots: cdktf.stringToTerraform(struct!.roots),
    subject: cdktf.stringToTerraform(struct!.subject),
    subject_reg_exp: cdktf.stringToTerraform(struct!.subjectRegExp),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeyless | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_extensions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalExtensions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ctlog: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessCtlogToHclTerraform(struct!.ctlog),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessCtlog",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_reg_exp: {
      value: cdktf.stringToHclTerraform(struct!.issuerRegExp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rekor: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessRekorToHclTerraform(struct!.rekor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessRekor",
    },
    roots: {
      value: cdktf.stringToHclTerraform(struct!.roots),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_reg_exp: {
      value: cdktf.stringToHclTerraform(struct!.subjectRegExp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeyless | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalExtensions = this._additionalExtensions;
    }
    if (this._ctlog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ctlog = this._ctlog?.internalValue;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._issuerRegExp !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerRegExp = this._issuerRegExp;
    }
    if (this._rekor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rekor = this._rekor?.internalValue;
    }
    if (this._roots !== undefined) {
      hasAnyValues = true;
      internalValueResult.roots = this._roots;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._subjectRegExp !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectRegExp = this._subjectRegExp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeyless | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalExtensions = undefined;
      this._ctlog.internalValue = undefined;
      this._issuer = undefined;
      this._issuerRegExp = undefined;
      this._rekor.internalValue = undefined;
      this._roots = undefined;
      this._subject = undefined;
      this._subjectRegExp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalExtensions = value.additionalExtensions;
      this._ctlog.internalValue = value.ctlog;
      this._issuer = value.issuer;
      this._issuerRegExp = value.issuerRegExp;
      this._rekor.internalValue = value.rekor;
      this._roots = value.roots;
      this._subject = value.subject;
      this._subjectRegExp = value.subjectRegExp;
    }
  }

  // additional_extensions - computed: false, optional: true, required: false
  private _additionalExtensions?: { [key: string]: string }; 
  public get additionalExtensions() {
    return this.getStringMapAttribute('additional_extensions');
  }
  public set additionalExtensions(value: { [key: string]: string }) {
    this._additionalExtensions = value;
  }
  public resetAdditionalExtensions() {
    this._additionalExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalExtensionsInput() {
    return this._additionalExtensions;
  }

  // ctlog - computed: false, optional: true, required: false
  private _ctlog = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessCtlogOutputReference(this, "ctlog");
  public get ctlog() {
    return this._ctlog;
  }
  public putCtlog(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessCtlog) {
    this._ctlog.internalValue = value;
  }
  public resetCtlog() {
    this._ctlog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctlogInput() {
    return this._ctlog.internalValue;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // issuer_reg_exp - computed: false, optional: true, required: false
  private _issuerRegExp?: string; 
  public get issuerRegExp() {
    return this.getStringAttribute('issuer_reg_exp');
  }
  public set issuerRegExp(value: string) {
    this._issuerRegExp = value;
  }
  public resetIssuerRegExp() {
    this._issuerRegExp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerRegExpInput() {
    return this._issuerRegExp;
  }

  // rekor - computed: false, optional: true, required: false
  private _rekor = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessRekorOutputReference(this, "rekor");
  public get rekor() {
    return this._rekor;
  }
  public putRekor(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessRekor) {
    this._rekor.internalValue = value;
  }
  public resetRekor() {
    this._rekor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rekorInput() {
    return this._rekor.internalValue;
  }

  // roots - computed: false, optional: true, required: false
  private _roots?: string; 
  public get roots() {
    return this.getStringAttribute('roots');
  }
  public set roots(value: string) {
    this._roots = value;
  }
  public resetRoots() {
    this._roots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootsInput() {
    return this._roots;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // subject_reg_exp - computed: false, optional: true, required: false
  private _subjectRegExp?: string; 
  public get subjectRegExp() {
    return this.getStringAttribute('subject_reg_exp');
  }
  public set subjectRegExp(value: string) {
    this._subjectRegExp = value;
  }
  public resetSubjectRegExp() {
    this._subjectRegExp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectRegExpInput() {
    return this._subjectRegExp;
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysCtlog {
  /**
  * IgnoreSCT defines whether to use the Signed Certificate Timestamp (SCT) log to check for a certificate timestamp. Default is false. Set to true if this was opted out during signing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#ignore_sct DataK8SKyvernoIoClusterPolicyV1Manifest#ignore_sct}
  */
  readonly ignoreSct?: boolean | cdktf.IResolvable;
  /**
  * PubKey, if set, is used to validate SCTs against a custom source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#pubkey DataK8SKyvernoIoClusterPolicyV1Manifest#pubkey}
  */
  readonly pubkey?: string;
  /**
  * TSACertChain, if set, is the PEM-encoded certificate chain file for the RFC3161 timestamp authority. Must contain the root CA certificate. Optionally may contain intermediate CA certificates, and may contain the leaf TSA certificate if not present in the timestamurce.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#tsa_cert_chain DataK8SKyvernoIoClusterPolicyV1Manifest#tsa_cert_chain}
  */
  readonly tsaCertChain?: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysCtlogToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysCtlog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_sct: cdktf.booleanToTerraform(struct!.ignoreSct),
    pubkey: cdktf.stringToTerraform(struct!.pubkey),
    tsa_cert_chain: cdktf.stringToTerraform(struct!.tsaCertChain),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysCtlogToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysCtlog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_sct: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSct),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pubkey: {
      value: cdktf.stringToHclTerraform(struct!.pubkey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsa_cert_chain: {
      value: cdktf.stringToHclTerraform(struct!.tsaCertChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysCtlogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysCtlog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreSct !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSct = this._ignoreSct;
    }
    if (this._pubkey !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubkey = this._pubkey;
    }
    if (this._tsaCertChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsaCertChain = this._tsaCertChain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysCtlog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreSct = undefined;
      this._pubkey = undefined;
      this._tsaCertChain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreSct = value.ignoreSct;
      this._pubkey = value.pubkey;
      this._tsaCertChain = value.tsaCertChain;
    }
  }

  // ignore_sct - computed: false, optional: true, required: false
  private _ignoreSct?: boolean | cdktf.IResolvable; 
  public get ignoreSct() {
    return this.getBooleanAttribute('ignore_sct');
  }
  public set ignoreSct(value: boolean | cdktf.IResolvable) {
    this._ignoreSct = value;
  }
  public resetIgnoreSct() {
    this._ignoreSct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSctInput() {
    return this._ignoreSct;
  }

  // pubkey - computed: false, optional: true, required: false
  private _pubkey?: string; 
  public get pubkey() {
    return this.getStringAttribute('pubkey');
  }
  public set pubkey(value: string) {
    this._pubkey = value;
  }
  public resetPubkey() {
    this._pubkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubkeyInput() {
    return this._pubkey;
  }

  // tsa_cert_chain - computed: false, optional: true, required: false
  private _tsaCertChain?: string; 
  public get tsaCertChain() {
    return this.getStringAttribute('tsa_cert_chain');
  }
  public set tsaCertChain(value: string) {
    this._tsaCertChain = value;
  }
  public resetTsaCertChain() {
    this._tsaCertChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsaCertChainInput() {
    return this._tsaCertChain;
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysRekor {
  /**
  * IgnoreTlog skips transparency log verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#ignore_tlog DataK8SKyvernoIoClusterPolicyV1Manifest#ignore_tlog}
  */
  readonly ignoreTlog?: boolean | cdktf.IResolvable;
  /**
  * RekorPubKey is an optional PEM-encoded public key to use for a custom Rekor. If set, this will be used to validate transparency log signatures from a custom Rekor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#pubkey DataK8SKyvernoIoClusterPolicyV1Manifest#pubkey}
  */
  readonly pubkey?: string;
  /**
  * URL is the address of the transparency log. Defaults to the public Rekor log instance https://rekor.sigstore.dev.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#url DataK8SKyvernoIoClusterPolicyV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysRekorToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysRekor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_tlog: cdktf.booleanToTerraform(struct!.ignoreTlog),
    pubkey: cdktf.stringToTerraform(struct!.pubkey),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysRekorToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysRekor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_tlog: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreTlog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pubkey: {
      value: cdktf.stringToHclTerraform(struct!.pubkey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysRekorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysRekor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreTlog !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTlog = this._ignoreTlog;
    }
    if (this._pubkey !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubkey = this._pubkey;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysRekor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreTlog = undefined;
      this._pubkey = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreTlog = value.ignoreTlog;
      this._pubkey = value.pubkey;
      this._url = value.url;
    }
  }

  // ignore_tlog - computed: false, optional: true, required: false
  private _ignoreTlog?: boolean | cdktf.IResolvable; 
  public get ignoreTlog() {
    return this.getBooleanAttribute('ignore_tlog');
  }
  public set ignoreTlog(value: boolean | cdktf.IResolvable) {
    this._ignoreTlog = value;
  }
  public resetIgnoreTlog() {
    this._ignoreTlog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTlogInput() {
    return this._ignoreTlog;
  }

  // pubkey - computed: false, optional: true, required: false
  private _pubkey?: string; 
  public get pubkey() {
    return this.getStringAttribute('pubkey');
  }
  public set pubkey(value: string) {
    this._pubkey = value;
  }
  public resetPubkey() {
    this._pubkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubkeyInput() {
    return this._pubkey;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysSecret {
  /**
  * Name of the secret. The provided secret must contain a key named cosign.pub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#name DataK8SKyvernoIoClusterPolicyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace name where the Secret exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#namespace DataK8SKyvernoIoClusterPolicyV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysSecretToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysSecretToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysSecret | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeys {
  /**
  * CTLog (certificate timestamp log) provides a configuration for validation of Signed Certificate Timestamps (SCTs). If the value is unset, the default behavior by Cosign is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#ctlog DataK8SKyvernoIoClusterPolicyV1Manifest#ctlog}
  */
  readonly ctlog?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysCtlog;
  /**
  * KMS provides the URI to the public key stored in a Key Management System. See: https://github.com/sigstore/cosign/blob/main/KMS.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#kms DataK8SKyvernoIoClusterPolicyV1Manifest#kms}
  */
  readonly kms?: string;
  /**
  * Keys is a set of X.509 public keys used to verify image signatures. The keys can be directly specified or can be a variable reference to a key specified in a ConfigMap (see https://kyverno.io/docs/writing-policies/variables/), or reference a standard Kubernetes Secret elsewhere in the cluster by specifying it in the format 'k8s://<namespace>/<secret_name>'. The named Secret must specify a key 'cosign.pub' containing the public key used for verification, (see https://github.com/sigstore/cosign/blob/main/KMS.md#kubernetes-secret). When multiple keys are specified each key is processed as a separate staticKey entry (.attestors[*].entries.keys) within the set of attestors and the count is applied across the keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#public_keys DataK8SKyvernoIoClusterPolicyV1Manifest#public_keys}
  */
  readonly publicKeys?: string;
  /**
  * Rekor provides configuration for the Rekor transparency log service. If an empty object is provided the public instance of Rekor (https://rekor.sigstore.dev) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#rekor DataK8SKyvernoIoClusterPolicyV1Manifest#rekor}
  */
  readonly rekor?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysRekor;
  /**
  * Reference to a Secret resource that contains a public key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#secret DataK8SKyvernoIoClusterPolicyV1Manifest#secret}
  */
  readonly secret?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysSecret;
  /**
  * Deprecated. Use attestor.signatureAlgorithm instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#signature_algorithm DataK8SKyvernoIoClusterPolicyV1Manifest#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ctlog: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysCtlogToTerraform(struct!.ctlog),
    kms: cdktf.stringToTerraform(struct!.kms),
    public_keys: cdktf.stringToTerraform(struct!.publicKeys),
    rekor: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysRekorToTerraform(struct!.rekor),
    secret: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysSecretToTerraform(struct!.secret),
    signature_algorithm: cdktf.stringToTerraform(struct!.signatureAlgorithm),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ctlog: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysCtlogToHclTerraform(struct!.ctlog),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysCtlog",
    },
    kms: {
      value: cdktf.stringToHclTerraform(struct!.kms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_keys: {
      value: cdktf.stringToHclTerraform(struct!.publicKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rekor: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysRekorToHclTerraform(struct!.rekor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysRekor",
    },
    secret: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysSecret",
    },
    signature_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.signatureAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ctlog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ctlog = this._ctlog?.internalValue;
    }
    if (this._kms !== undefined) {
      hasAnyValues = true;
      internalValueResult.kms = this._kms;
    }
    if (this._publicKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeys = this._publicKeys;
    }
    if (this._rekor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rekor = this._rekor?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._signatureAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureAlgorithm = this._signatureAlgorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ctlog.internalValue = undefined;
      this._kms = undefined;
      this._publicKeys = undefined;
      this._rekor.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._signatureAlgorithm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ctlog.internalValue = value.ctlog;
      this._kms = value.kms;
      this._publicKeys = value.publicKeys;
      this._rekor.internalValue = value.rekor;
      this._secret.internalValue = value.secret;
      this._signatureAlgorithm = value.signatureAlgorithm;
    }
  }

  // ctlog - computed: false, optional: true, required: false
  private _ctlog = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysCtlogOutputReference(this, "ctlog");
  public get ctlog() {
    return this._ctlog;
  }
  public putCtlog(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysCtlog) {
    this._ctlog.internalValue = value;
  }
  public resetCtlog() {
    this._ctlog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctlogInput() {
    return this._ctlog.internalValue;
  }

  // kms - computed: false, optional: true, required: false
  private _kms?: string; 
  public get kms() {
    return this.getStringAttribute('kms');
  }
  public set kms(value: string) {
    this._kms = value;
  }
  public resetKms() {
    this._kms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsInput() {
    return this._kms;
  }

  // public_keys - computed: false, optional: true, required: false
  private _publicKeys?: string; 
  public get publicKeys() {
    return this.getStringAttribute('public_keys');
  }
  public set publicKeys(value: string) {
    this._publicKeys = value;
  }
  public resetPublicKeys() {
    this._publicKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeysInput() {
    return this._publicKeys;
  }

  // rekor - computed: false, optional: true, required: false
  private _rekor = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysRekorOutputReference(this, "rekor");
  public get rekor() {
    return this._rekor;
  }
  public putRekor(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysRekor) {
    this._rekor.internalValue = value;
  }
  public resetRekor() {
    this._rekor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rekorInput() {
    return this._rekor.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // signature_algorithm - computed: false, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntries {
  /**
  * Annotations are used for image verification. Every specified key-value pair must exist and match in the verified payload. The payload may contain other key-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#annotations DataK8SKyvernoIoClusterPolicyV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Attestor is a nested set of Attestor used to specify a more complex set of match authorities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#attestor DataK8SKyvernoIoClusterPolicyV1Manifest#attestor}
  */
  readonly attestor?: { [key: string]: string };
  /**
  * Certificates specifies one or more certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#certificates DataK8SKyvernoIoClusterPolicyV1Manifest#certificates}
  */
  readonly certificates?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificates;
  /**
  * Keyless is a set of attribute used to verify a Sigstore keyless attestor. See https://github.com/sigstore/cosign/blob/main/KEYLESS.md.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#keyless DataK8SKyvernoIoClusterPolicyV1Manifest#keyless}
  */
  readonly keyless?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeyless;
  /**
  * Keys specifies one or more public keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#keys DataK8SKyvernoIoClusterPolicyV1Manifest#keys}
  */
  readonly keys?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeys;
  /**
  * Repository is an optional alternate OCI repository to use for signatures and attestations that match this rule. If specified Repository will override other OCI image repository locations for this Attestor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#repository DataK8SKyvernoIoClusterPolicyV1Manifest#repository}
  */
  readonly repository?: string;
  /**
  * Specify signature algorithm for public keys. Supported values are sha224, sha256, sha384 and sha512.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#signature_algorithm DataK8SKyvernoIoClusterPolicyV1Manifest#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    attestor: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attestor),
    certificates: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesToTerraform(struct!.certificates),
    keyless: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessToTerraform(struct!.keyless),
    keys: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysToTerraform(struct!.keys),
    repository: cdktf.stringToTerraform(struct!.repository),
    signature_algorithm: cdktf.stringToTerraform(struct!.signatureAlgorithm),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntries | cdktf.IResolvable): any {
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
    attestor: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.attestor),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    certificates: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesToHclTerraform(struct!.certificates),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificates",
    },
    keyless: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessToHclTerraform(struct!.keyless),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeyless",
    },
    keys: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysToHclTerraform(struct!.keys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeys",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.signatureAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._attestor !== undefined) {
      hasAnyValues = true;
      internalValueResult.attestor = this._attestor;
    }
    if (this._certificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificates = this._certificates?.internalValue;
    }
    if (this._keyless?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyless = this._keyless?.internalValue;
    }
    if (this._keys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys?.internalValue;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._signatureAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureAlgorithm = this._signatureAlgorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._attestor = undefined;
      this._certificates.internalValue = undefined;
      this._keyless.internalValue = undefined;
      this._keys.internalValue = undefined;
      this._repository = undefined;
      this._signatureAlgorithm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._attestor = value.attestor;
      this._certificates.internalValue = value.certificates;
      this._keyless.internalValue = value.keyless;
      this._keys.internalValue = value.keys;
      this._repository = value.repository;
      this._signatureAlgorithm = value.signatureAlgorithm;
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

  // attestor - computed: false, optional: true, required: false
  private _attestor?: { [key: string]: string }; 
  public get attestor() {
    return this.getStringMapAttribute('attestor');
  }
  public set attestor(value: { [key: string]: string }) {
    this._attestor = value;
  }
  public resetAttestor() {
    this._attestor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attestorInput() {
    return this._attestor;
  }

  // certificates - computed: false, optional: true, required: false
  private _certificates = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificatesOutputReference(this, "certificates");
  public get certificates() {
    return this._certificates;
  }
  public putCertificates(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesCertificates) {
    this._certificates.internalValue = value;
  }
  public resetCertificates() {
    this._certificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates.internalValue;
  }

  // keyless - computed: false, optional: true, required: false
  private _keyless = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeylessOutputReference(this, "keyless");
  public get keyless() {
    return this._keyless;
  }
  public putKeyless(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeyless) {
    this._keyless.internalValue = value;
  }
  public resetKeyless() {
    this._keyless.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keylessInput() {
    return this._keyless.internalValue;
  }

  // keys - computed: false, optional: true, required: false
  private _keys = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeysOutputReference(this, "keys");
  public get keys() {
    return this._keys;
  }
  public putKeys(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesKeys) {
    this._keys.internalValue = value;
  }
  public resetKeys() {
    this._keys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys.internalValue;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // signature_algorithm - computed: false, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntries[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesOutputReference {
    return new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestors {
  /**
  * Count specifies the required number of entries that must match. If the count is null, all entries must match (a logical AND). If the count is 1, at least one entry must match (a logical OR). If the count contains a value N, then N must be less than or equal to the size of entries, and at least N entries must match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#count DataK8SKyvernoIoClusterPolicyV1Manifest#count}
  */
  readonly count?: number;
  /**
  * Entries contains the available attestors. An attestor can be a static key, attributes for keyless verification, or a nested attestor declaration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#entries DataK8SKyvernoIoClusterPolicyV1Manifest#entries}
  */
  readonly entries?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntries[] | cdktf.IResolvable;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    entries: cdktf.listMapper(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesToTerraform, false)(struct!.entries),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entries: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesToHclTerraform, false)(struct!.entries),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._entries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entries = this._entries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._entries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._entries.internalValue = value.entries;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // entries - computed: false, optional: true, required: false
  private _entries = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsOutputReference {
    return new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesImageRegistryCredentials {
  /**
  * AllowInsecureRegistry allows insecure access to a registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#allow_insecure_registry DataK8SKyvernoIoClusterPolicyV1Manifest#allow_insecure_registry}
  */
  readonly allowInsecureRegistry?: boolean | cdktf.IResolvable;
  /**
  * Providers specifies a list of OCI Registry names, whose authentication providers are provided. It can be of one of these values: default,google,azure,amazon,github.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#providers DataK8SKyvernoIoClusterPolicyV1Manifest#providers}
  */
  readonly providers?: string[];
  /**
  * Secrets specifies a list of secrets that are provided for credentials. Secrets must live in the Kyverno namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#secrets DataK8SKyvernoIoClusterPolicyV1Manifest#secrets}
  */
  readonly secrets?: string[];
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesImageRegistryCredentialsToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesImageRegistryCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure_registry: cdktf.booleanToTerraform(struct!.allowInsecureRegistry),
    providers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.providers),
    secrets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secrets),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesImageRegistryCredentialsToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesImageRegistryCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_insecure_registry: {
      value: cdktf.booleanToHclTerraform(struct!.allowInsecureRegistry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    providers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.providers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    secrets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secrets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesImageRegistryCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesImageRegistryCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecureRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecureRegistry = this._allowInsecureRegistry;
    }
    if (this._providers !== undefined) {
      hasAnyValues = true;
      internalValueResult.providers = this._providers;
    }
    if (this._secrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesImageRegistryCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowInsecureRegistry = undefined;
      this._providers = undefined;
      this._secrets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowInsecureRegistry = value.allowInsecureRegistry;
      this._providers = value.providers;
      this._secrets = value.secrets;
    }
  }

  // allow_insecure_registry - computed: false, optional: true, required: false
  private _allowInsecureRegistry?: boolean | cdktf.IResolvable; 
  public get allowInsecureRegistry() {
    return this.getBooleanAttribute('allow_insecure_registry');
  }
  public set allowInsecureRegistry(value: boolean | cdktf.IResolvable) {
    this._allowInsecureRegistry = value;
  }
  public resetAllowInsecureRegistry() {
    this._allowInsecureRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureRegistryInput() {
    return this._allowInsecureRegistry;
  }

  // providers - computed: false, optional: true, required: false
  private _providers?: string[]; 
  public get providers() {
    return this.getListAttribute('providers');
  }
  public set providers(value: string[]) {
    this._providers = value;
  }
  public resetProviders() {
    this._providers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providersInput() {
    return this._providers;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets?: string[]; 
  public get secrets() {
    return this.getListAttribute('secrets');
  }
  public set secrets(value: string[]) {
    this._secrets = value;
  }
  public resetSecrets() {
    this._secrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets;
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidateDeny {
  /**
  * Multiple conditions can be declared under an 'any' or 'all' statement. A direct list of conditions (without 'any' or 'all' statements) is also supported for backwards compatibility but will be deprecated in the next major release. See: https://kyverno.io/docs/writing-policies/validate/#deny-rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#conditions DataK8SKyvernoIoClusterPolicyV1Manifest#conditions}
  */
  readonly conditions?: { [key: string]: string };
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidateDenyToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidateDeny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.conditions),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidateDenyToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidateDeny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.conditions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidateDenyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidateDeny | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidateDeny | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions = value.conditions;
    }
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions?: { [key: string]: string }; 
  public get conditions() {
    return this.getStringMapAttribute('conditions');
  }
  public set conditions(value: { [key: string]: string }) {
    this._conditions = value;
  }
  public resetConditions() {
    this._conditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions;
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidate {
  /**
  * Deny defines conditions used to pass or fail a validation rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#deny DataK8SKyvernoIoClusterPolicyV1Manifest#deny}
  */
  readonly deny?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidateDeny;
  /**
  * Message specifies a custom message to be displayed on failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#message DataK8SKyvernoIoClusterPolicyV1Manifest#message}
  */
  readonly message?: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidateToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidateDenyToTerraform(struct!.deny),
    message: cdktf.stringToTerraform(struct!.message),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidateToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidateDenyToHclTerraform(struct!.deny),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidateDeny",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deny?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny?.internalValue;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny.internalValue = undefined;
      this._message = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deny.internalValue = value.deny;
      this._message = value.message;
    }
  }

  // deny - computed: false, optional: true, required: false
  private _deny = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidateDenyOutputReference(this, "deny");
  public get deny() {
    return this._deny;
  }
  public putDeny(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidateDeny) {
    this._deny.internalValue = value;
  }
  public resetDeny() {
    this._deny.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny.internalValue;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImages {
  /**
  * Deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#additional_extensions DataK8SKyvernoIoClusterPolicyV1Manifest#additional_extensions}
  */
  readonly additionalExtensions?: { [key: string]: string };
  /**
  * Deprecated. Use annotations per Attestor instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#annotations DataK8SKyvernoIoClusterPolicyV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Attestations are optional checks for signed in-toto Statements used to verify the image. See https://github.com/in-toto/attestation. Kyverno fetches signed attestations from the OCI registry and decodes them into a list of Statement declarations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#attestations DataK8SKyvernoIoClusterPolicyV1Manifest#attestations}
  */
  readonly attestations?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestations[] | cdktf.IResolvable;
  /**
  * Attestors specified the required attestors (i.e. authorities)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#attestors DataK8SKyvernoIoClusterPolicyV1Manifest#attestors}
  */
  readonly attestors?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestors[] | cdktf.IResolvable;
  /**
  * CosignOCI11 enables the experimental OCI 1.1 behaviour in cosign image verification. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#cosign_oci11 DataK8SKyvernoIoClusterPolicyV1Manifest#cosign_oci11}
  */
  readonly cosignOci11?: boolean | cdktf.IResolvable;
  /**
  * Allowed values are Audit or Enforce.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#failure_action DataK8SKyvernoIoClusterPolicyV1Manifest#failure_action}
  */
  readonly failureAction?: string;
  /**
  * Deprecated. Use ImageReferences instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#image DataK8SKyvernoIoClusterPolicyV1Manifest#image}
  */
  readonly image?: string;
  /**
  * ImageReferences is a list of matching image reference patterns. At least one pattern in the list must match the image for the rule to apply. Each image reference consists of a registry address (defaults to docker.io), repository, image, and tag (defaults to latest). Wildcards ('*' and '?') are allowed. See: https://kubernetes.io/docs/concepts/containers/images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#image_references DataK8SKyvernoIoClusterPolicyV1Manifest#image_references}
  */
  readonly imageReferences?: string[];
  /**
  * ImageRegistryCredentials provides credentials that will be used for authentication with registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#image_registry_credentials DataK8SKyvernoIoClusterPolicyV1Manifest#image_registry_credentials}
  */
  readonly imageRegistryCredentials?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesImageRegistryCredentials;
  /**
  * Deprecated. Use KeylessAttestor instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#issuer DataK8SKyvernoIoClusterPolicyV1Manifest#issuer}
  */
  readonly issuer?: string;
  /**
  * Deprecated. Use StaticKeyAttestor instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#key DataK8SKyvernoIoClusterPolicyV1Manifest#key}
  */
  readonly key?: string;
  /**
  * MutateDigest enables replacement of image tags with digests. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#mutate_digest DataK8SKyvernoIoClusterPolicyV1Manifest#mutate_digest}
  */
  readonly mutateDigest?: boolean | cdktf.IResolvable;
  /**
  * Repository is an optional alternate OCI repository to use for image signatures and attestations that match this rule. If specified Repository will override the default OCI image repository configured for the installation. The repository can also be overridden per Attestor or Attestation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#repository DataK8SKyvernoIoClusterPolicyV1Manifest#repository}
  */
  readonly repository?: string;
  /**
  * Required validates that images are verified i.e. have matched passed a signature or attestation check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#required DataK8SKyvernoIoClusterPolicyV1Manifest#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Deprecated. Use KeylessAttestor instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#roots DataK8SKyvernoIoClusterPolicyV1Manifest#roots}
  */
  readonly roots?: string;
  /**
  * SkipImageReferences is a list of matching image reference patterns that should be skipped. At least one pattern in the list must match the image for the rule to be skipped. Each image reference consists of a registry address (defaults to docker.io), repository, image, and tag (defaults to latest). Wildcards ('*' and '?') are allowed. See: https://kubernetes.io/docs/concepts/containers/images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#skip_image_references DataK8SKyvernoIoClusterPolicyV1Manifest#skip_image_references}
  */
  readonly skipImageReferences?: string[];
  /**
  * Deprecated. Use KeylessAttestor instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#subject DataK8SKyvernoIoClusterPolicyV1Manifest#subject}
  */
  readonly subject?: string;
  /**
  * Type specifies the method of signature validation. The allowed options are Cosign, Sigstore Bundle and Notary. By default Cosign is used if a type is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#type DataK8SKyvernoIoClusterPolicyV1Manifest#type}
  */
  readonly type?: string;
  /**
  * UseCache enables caching of image verify responses for this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#use_cache DataK8SKyvernoIoClusterPolicyV1Manifest#use_cache}
  */
  readonly useCache?: boolean | cdktf.IResolvable;
  /**
  * Validation checks conditions across multiple image verification attestations or context entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#validate DataK8SKyvernoIoClusterPolicyV1Manifest#validate}
  */
  readonly validate?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidate;
  /**
  * VerifyDigest validates that images have a digest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#verify_digest DataK8SKyvernoIoClusterPolicyV1Manifest#verify_digest}
  */
  readonly verifyDigest?: boolean | cdktf.IResolvable;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_extensions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalExtensions),
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    attestations: cdktf.listMapper(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsToTerraform, false)(struct!.attestations),
    attestors: cdktf.listMapper(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsToTerraform, false)(struct!.attestors),
    cosign_oci11: cdktf.booleanToTerraform(struct!.cosignOci11),
    failure_action: cdktf.stringToTerraform(struct!.failureAction),
    image: cdktf.stringToTerraform(struct!.image),
    image_references: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.imageReferences),
    image_registry_credentials: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesImageRegistryCredentialsToTerraform(struct!.imageRegistryCredentials),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    key: cdktf.stringToTerraform(struct!.key),
    mutate_digest: cdktf.booleanToTerraform(struct!.mutateDigest),
    repository: cdktf.stringToTerraform(struct!.repository),
    required: cdktf.booleanToTerraform(struct!.required),
    roots: cdktf.stringToTerraform(struct!.roots),
    skip_image_references: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.skipImageReferences),
    subject: cdktf.stringToTerraform(struct!.subject),
    type: cdktf.stringToTerraform(struct!.type),
    use_cache: cdktf.booleanToTerraform(struct!.useCache),
    validate: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidateToTerraform(struct!.validate),
    verify_digest: cdktf.booleanToTerraform(struct!.verifyDigest),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_extensions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalExtensions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    attestations: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsToHclTerraform, false)(struct!.attestations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsList",
    },
    attestors: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsToHclTerraform, false)(struct!.attestors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsList",
    },
    cosign_oci11: {
      value: cdktf.booleanToHclTerraform(struct!.cosignOci11),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failure_action: {
      value: cdktf.stringToHclTerraform(struct!.failureAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_references: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.imageReferences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image_registry_credentials: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesImageRegistryCredentialsToHclTerraform(struct!.imageRegistryCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesImageRegistryCredentials",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mutate_digest: {
      value: cdktf.booleanToHclTerraform(struct!.mutateDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    roots: {
      value: cdktf.stringToHclTerraform(struct!.roots),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_image_references: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.skipImageReferences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
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
    use_cache: {
      value: cdktf.booleanToHclTerraform(struct!.useCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validate: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidateToHclTerraform(struct!.validate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidate",
    },
    verify_digest: {
      value: cdktf.booleanToHclTerraform(struct!.verifyDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalExtensions = this._additionalExtensions;
    }
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._attestations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attestations = this._attestations?.internalValue;
    }
    if (this._attestors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attestors = this._attestors?.internalValue;
    }
    if (this._cosignOci11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosignOci11 = this._cosignOci11;
    }
    if (this._failureAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureAction = this._failureAction;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imageReferences !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageReferences = this._imageReferences;
    }
    if (this._imageRegistryCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageRegistryCredentials = this._imageRegistryCredentials?.internalValue;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mutateDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.mutateDigest = this._mutateDigest;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._roots !== undefined) {
      hasAnyValues = true;
      internalValueResult.roots = this._roots;
    }
    if (this._skipImageReferences !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipImageReferences = this._skipImageReferences;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCache = this._useCache;
    }
    if (this._validate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validate = this._validate?.internalValue;
    }
    if (this._verifyDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyDigest = this._verifyDigest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalExtensions = undefined;
      this._annotations = undefined;
      this._attestations.internalValue = undefined;
      this._attestors.internalValue = undefined;
      this._cosignOci11 = undefined;
      this._failureAction = undefined;
      this._image = undefined;
      this._imageReferences = undefined;
      this._imageRegistryCredentials.internalValue = undefined;
      this._issuer = undefined;
      this._key = undefined;
      this._mutateDigest = undefined;
      this._repository = undefined;
      this._required = undefined;
      this._roots = undefined;
      this._skipImageReferences = undefined;
      this._subject = undefined;
      this._type = undefined;
      this._useCache = undefined;
      this._validate.internalValue = undefined;
      this._verifyDigest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalExtensions = value.additionalExtensions;
      this._annotations = value.annotations;
      this._attestations.internalValue = value.attestations;
      this._attestors.internalValue = value.attestors;
      this._cosignOci11 = value.cosignOci11;
      this._failureAction = value.failureAction;
      this._image = value.image;
      this._imageReferences = value.imageReferences;
      this._imageRegistryCredentials.internalValue = value.imageRegistryCredentials;
      this._issuer = value.issuer;
      this._key = value.key;
      this._mutateDigest = value.mutateDigest;
      this._repository = value.repository;
      this._required = value.required;
      this._roots = value.roots;
      this._skipImageReferences = value.skipImageReferences;
      this._subject = value.subject;
      this._type = value.type;
      this._useCache = value.useCache;
      this._validate.internalValue = value.validate;
      this._verifyDigest = value.verifyDigest;
    }
  }

  // additional_extensions - computed: false, optional: true, required: false
  private _additionalExtensions?: { [key: string]: string }; 
  public get additionalExtensions() {
    return this.getStringMapAttribute('additional_extensions');
  }
  public set additionalExtensions(value: { [key: string]: string }) {
    this._additionalExtensions = value;
  }
  public resetAdditionalExtensions() {
    this._additionalExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalExtensionsInput() {
    return this._additionalExtensions;
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

  // attestations - computed: false, optional: true, required: false
  private _attestations = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestationsList(this, "attestations", false);
  public get attestations() {
    return this._attestations;
  }
  public putAttestations(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestations[] | cdktf.IResolvable) {
    this._attestations.internalValue = value;
  }
  public resetAttestations() {
    this._attestations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attestationsInput() {
    return this._attestations.internalValue;
  }

  // attestors - computed: false, optional: true, required: false
  private _attestors = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestorsList(this, "attestors", false);
  public get attestors() {
    return this._attestors;
  }
  public putAttestors(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesAttestors[] | cdktf.IResolvable) {
    this._attestors.internalValue = value;
  }
  public resetAttestors() {
    this._attestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attestorsInput() {
    return this._attestors.internalValue;
  }

  // cosign_oci11 - computed: false, optional: true, required: false
  private _cosignOci11?: boolean | cdktf.IResolvable; 
  public get cosignOci11() {
    return this.getBooleanAttribute('cosign_oci11');
  }
  public set cosignOci11(value: boolean | cdktf.IResolvable) {
    this._cosignOci11 = value;
  }
  public resetCosignOci11() {
    this._cosignOci11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosignOci11Input() {
    return this._cosignOci11;
  }

  // failure_action - computed: false, optional: true, required: false
  private _failureAction?: string; 
  public get failureAction() {
    return this.getStringAttribute('failure_action');
  }
  public set failureAction(value: string) {
    this._failureAction = value;
  }
  public resetFailureAction() {
    this._failureAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureActionInput() {
    return this._failureAction;
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

  // image_references - computed: false, optional: true, required: false
  private _imageReferences?: string[]; 
  public get imageReferences() {
    return this.getListAttribute('image_references');
  }
  public set imageReferences(value: string[]) {
    this._imageReferences = value;
  }
  public resetImageReferences() {
    this._imageReferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageReferencesInput() {
    return this._imageReferences;
  }

  // image_registry_credentials - computed: false, optional: true, required: false
  private _imageRegistryCredentials = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesImageRegistryCredentialsOutputReference(this, "image_registry_credentials");
  public get imageRegistryCredentials() {
    return this._imageRegistryCredentials;
  }
  public putImageRegistryCredentials(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesImageRegistryCredentials) {
    this._imageRegistryCredentials.internalValue = value;
  }
  public resetImageRegistryCredentials() {
    this._imageRegistryCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRegistryCredentialsInput() {
    return this._imageRegistryCredentials.internalValue;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
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

  // mutate_digest - computed: false, optional: true, required: false
  private _mutateDigest?: boolean | cdktf.IResolvable; 
  public get mutateDigest() {
    return this.getBooleanAttribute('mutate_digest');
  }
  public set mutateDigest(value: boolean | cdktf.IResolvable) {
    this._mutateDigest = value;
  }
  public resetMutateDigest() {
    this._mutateDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutateDigestInput() {
    return this._mutateDigest;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // roots - computed: false, optional: true, required: false
  private _roots?: string; 
  public get roots() {
    return this.getStringAttribute('roots');
  }
  public set roots(value: string) {
    this._roots = value;
  }
  public resetRoots() {
    this._roots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootsInput() {
    return this._roots;
  }

  // skip_image_references - computed: false, optional: true, required: false
  private _skipImageReferences?: string[]; 
  public get skipImageReferences() {
    return this.getListAttribute('skip_image_references');
  }
  public set skipImageReferences(value: string[]) {
    this._skipImageReferences = value;
  }
  public resetSkipImageReferences() {
    this._skipImageReferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipImageReferencesInput() {
    return this._skipImageReferences;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
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

  // use_cache - computed: false, optional: true, required: false
  private _useCache?: boolean | cdktf.IResolvable; 
  public get useCache() {
    return this.getBooleanAttribute('use_cache');
  }
  public set useCache(value: boolean | cdktf.IResolvable) {
    this._useCache = value;
  }
  public resetUseCache() {
    this._useCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCacheInput() {
    return this._useCache;
  }

  // validate - computed: false, optional: true, required: false
  private _validate = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidateOutputReference(this, "validate");
  public get validate() {
    return this._validate;
  }
  public putValidate(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesValidate) {
    this._validate.internalValue = value;
  }
  public resetValidate() {
    this._validate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate.internalValue;
  }

  // verify_digest - computed: false, optional: true, required: false
  private _verifyDigest?: boolean | cdktf.IResolvable; 
  public get verifyDigest() {
    return this.getBooleanAttribute('verify_digest');
  }
  public set verifyDigest(value: boolean | cdktf.IResolvable) {
    this._verifyDigest = value;
  }
  public resetVerifyDigest() {
    this._verifyDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyDigestInput() {
    return this._verifyDigest;
  }
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImages[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesOutputReference {
    return new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecRules {
  /**
  * CELPreconditions are used to determine if a policy rule should be applied by evaluating a set of CEL conditions. It can only be used with the validate.cel subrule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#cel_preconditions DataK8SKyvernoIoClusterPolicyV1Manifest#cel_preconditions}
  */
  readonly celPreconditions?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesCelPreconditions[] | cdktf.IResolvable;
  /**
  * Context defines variables and data sources that can be used during rule execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#context DataK8SKyvernoIoClusterPolicyV1Manifest#context}
  */
  readonly context?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesContext[] | cdktf.IResolvable;
  /**
  * ExcludeResources defines when this policy rule should not be applied. The exclude criteria can include resource information (e.g. kind, name, namespace, labels) and admission review request information like the name or role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#exclude DataK8SKyvernoIoClusterPolicyV1Manifest#exclude}
  */
  readonly exclude?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesExclude;
  /**
  * Generation is used to create new resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#generate DataK8SKyvernoIoClusterPolicyV1Manifest#generate}
  */
  readonly generate?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesGenerate;
  /**
  * ImageExtractors defines a mapping from kinds to ImageExtractorConfigs. This config is only valid for verifyImages rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#image_extractors DataK8SKyvernoIoClusterPolicyV1Manifest#image_extractors}
  */
  readonly imageExtractors?: { [key: string]: string };
  /**
  * MatchResources defines when this policy rule should be applied. The match criteria can include resource information (e.g. kind, name, namespace, labels) and admission review request information like the user name or role. At least one kind is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#match DataK8SKyvernoIoClusterPolicyV1Manifest#match}
  */
  readonly match: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesMatch;
  /**
  * Mutation is used to modify matching resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#mutate DataK8SKyvernoIoClusterPolicyV1Manifest#mutate}
  */
  readonly mutate?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesMutate;
  /**
  * Name is a label to identify the rule, It must be unique within the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#name DataK8SKyvernoIoClusterPolicyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Preconditions are used to determine if a policy rule should be applied by evaluating a set of conditions. The declaration can contain nested 'any' or 'all' statements. A direct list of conditions (without 'any' or 'all' statements is supported for backwards compatibility but will be deprecated in the next major release. See: https://kyverno.io/docs/writing-policies/preconditions/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#preconditions DataK8SKyvernoIoClusterPolicyV1Manifest#preconditions}
  */
  readonly preconditions?: { [key: string]: string };
  /**
  * ReportProperties are the additional properties from the rule that will be added to the policy report result
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#report_properties DataK8SKyvernoIoClusterPolicyV1Manifest#report_properties}
  */
  readonly reportProperties?: { [key: string]: string };
  /**
  * SkipBackgroundRequests bypasses admission requests that are sent by the background controller. The default value is set to 'true', it must be set to 'false' to apply generate and mutateExisting rules to those requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#skip_background_requests DataK8SKyvernoIoClusterPolicyV1Manifest#skip_background_requests}
  */
  readonly skipBackgroundRequests?: boolean | cdktf.IResolvable;
  /**
  * Validation is used to validate matching resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#validate DataK8SKyvernoIoClusterPolicyV1Manifest#validate}
  */
  readonly validate?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidate;
  /**
  * VerifyImages is used to verify image signatures and mutate them to add a digest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#verify_images DataK8SKyvernoIoClusterPolicyV1Manifest#verify_images}
  */
  readonly verifyImages?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImages[] | cdktf.IResolvable;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cel_preconditions: cdktf.listMapper(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesCelPreconditionsToTerraform, false)(struct!.celPreconditions),
    context: cdktf.listMapper(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesContextToTerraform, false)(struct!.context),
    exclude: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesExcludeToTerraform(struct!.exclude),
    generate: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesGenerateToTerraform(struct!.generate),
    image_extractors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.imageExtractors),
    match: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesMatchToTerraform(struct!.match),
    mutate: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesMutateToTerraform(struct!.mutate),
    name: cdktf.stringToTerraform(struct!.name),
    preconditions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.preconditions),
    report_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.reportProperties),
    skip_background_requests: cdktf.booleanToTerraform(struct!.skipBackgroundRequests),
    validate: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateToTerraform(struct!.validate),
    verify_images: cdktf.listMapper(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesToTerraform, false)(struct!.verifyImages),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cel_preconditions: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesCelPreconditionsToHclTerraform, false)(struct!.celPreconditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesCelPreconditionsList",
    },
    context: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesContextToHclTerraform, false)(struct!.context),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesContextList",
    },
    exclude: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesExcludeToHclTerraform(struct!.exclude),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesExclude",
    },
    generate: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesGenerateToHclTerraform(struct!.generate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesGenerate",
    },
    image_extractors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.imageExtractors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesMatch",
    },
    mutate: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesMutateToHclTerraform(struct!.mutate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesMutate",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preconditions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.preconditions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    report_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.reportProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    skip_background_requests: {
      value: cdktf.booleanToHclTerraform(struct!.skipBackgroundRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validate: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateToHclTerraform(struct!.validate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidate",
    },
    verify_images: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesToHclTerraform, false)(struct!.verifyImages),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._celPreconditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.celPreconditions = this._celPreconditions?.internalValue;
    }
    if (this._context?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context?.internalValue;
    }
    if (this._exclude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude?.internalValue;
    }
    if (this._generate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generate = this._generate?.internalValue;
    }
    if (this._imageExtractors !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageExtractors = this._imageExtractors;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._mutate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mutate = this._mutate?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._preconditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.preconditions = this._preconditions;
    }
    if (this._reportProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportProperties = this._reportProperties;
    }
    if (this._skipBackgroundRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipBackgroundRequests = this._skipBackgroundRequests;
    }
    if (this._validate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validate = this._validate?.internalValue;
    }
    if (this._verifyImages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyImages = this._verifyImages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._celPreconditions.internalValue = undefined;
      this._context.internalValue = undefined;
      this._exclude.internalValue = undefined;
      this._generate.internalValue = undefined;
      this._imageExtractors = undefined;
      this._match.internalValue = undefined;
      this._mutate.internalValue = undefined;
      this._name = undefined;
      this._preconditions = undefined;
      this._reportProperties = undefined;
      this._skipBackgroundRequests = undefined;
      this._validate.internalValue = undefined;
      this._verifyImages.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._celPreconditions.internalValue = value.celPreconditions;
      this._context.internalValue = value.context;
      this._exclude.internalValue = value.exclude;
      this._generate.internalValue = value.generate;
      this._imageExtractors = value.imageExtractors;
      this._match.internalValue = value.match;
      this._mutate.internalValue = value.mutate;
      this._name = value.name;
      this._preconditions = value.preconditions;
      this._reportProperties = value.reportProperties;
      this._skipBackgroundRequests = value.skipBackgroundRequests;
      this._validate.internalValue = value.validate;
      this._verifyImages.internalValue = value.verifyImages;
    }
  }

  // cel_preconditions - computed: false, optional: true, required: false
  private _celPreconditions = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesCelPreconditionsList(this, "cel_preconditions", false);
  public get celPreconditions() {
    return this._celPreconditions;
  }
  public putCelPreconditions(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesCelPreconditions[] | cdktf.IResolvable) {
    this._celPreconditions.internalValue = value;
  }
  public resetCelPreconditions() {
    this._celPreconditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get celPreconditionsInput() {
    return this._celPreconditions.internalValue;
  }

  // context - computed: false, optional: true, required: false
  private _context = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesContextList(this, "context", false);
  public get context() {
    return this._context;
  }
  public putContext(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesContext[] | cdktf.IResolvable) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesExcludeOutputReference(this, "exclude");
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesExclude) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // generate - computed: false, optional: true, required: false
  private _generate = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesGenerateOutputReference(this, "generate");
  public get generate() {
    return this._generate;
  }
  public putGenerate(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesGenerate) {
    this._generate.internalValue = value;
  }
  public resetGenerate() {
    this._generate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateInput() {
    return this._generate.internalValue;
  }

  // image_extractors - computed: false, optional: true, required: false
  private _imageExtractors?: { [key: string]: string }; 
  public get imageExtractors() {
    return this.getStringMapAttribute('image_extractors');
  }
  public set imageExtractors(value: { [key: string]: string }) {
    this._imageExtractors = value;
  }
  public resetImageExtractors() {
    this._imageExtractors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageExtractorsInput() {
    return this._imageExtractors;
  }

  // match - computed: false, optional: false, required: true
  private _match = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // mutate - computed: false, optional: true, required: false
  private _mutate = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesMutateOutputReference(this, "mutate");
  public get mutate() {
    return this._mutate;
  }
  public putMutate(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesMutate) {
    this._mutate.internalValue = value;
  }
  public resetMutate() {
    this._mutate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutateInput() {
    return this._mutate.internalValue;
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

  // preconditions - computed: false, optional: true, required: false
  private _preconditions?: { [key: string]: string }; 
  public get preconditions() {
    return this.getStringMapAttribute('preconditions');
  }
  public set preconditions(value: { [key: string]: string }) {
    this._preconditions = value;
  }
  public resetPreconditions() {
    this._preconditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preconditionsInput() {
    return this._preconditions;
  }

  // report_properties - computed: false, optional: true, required: false
  private _reportProperties?: { [key: string]: string }; 
  public get reportProperties() {
    return this.getStringMapAttribute('report_properties');
  }
  public set reportProperties(value: { [key: string]: string }) {
    this._reportProperties = value;
  }
  public resetReportProperties() {
    this._reportProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportPropertiesInput() {
    return this._reportProperties;
  }

  // skip_background_requests - computed: false, optional: true, required: false
  private _skipBackgroundRequests?: boolean | cdktf.IResolvable; 
  public get skipBackgroundRequests() {
    return this.getBooleanAttribute('skip_background_requests');
  }
  public set skipBackgroundRequests(value: boolean | cdktf.IResolvable) {
    this._skipBackgroundRequests = value;
  }
  public resetSkipBackgroundRequests() {
    this._skipBackgroundRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipBackgroundRequestsInput() {
    return this._skipBackgroundRequests;
  }

  // validate - computed: false, optional: true, required: false
  private _validate = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidateOutputReference(this, "validate");
  public get validate() {
    return this._validate;
  }
  public putValidate(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesValidate) {
    this._validate.internalValue = value;
  }
  public resetValidate() {
    this._validate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate.internalValue;
  }

  // verify_images - computed: false, optional: true, required: false
  private _verifyImages = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImagesList(this, "verify_images", false);
  public get verifyImages() {
    return this._verifyImages;
  }
  public putVerifyImages(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesVerifyImages[] | cdktf.IResolvable) {
    this._verifyImages.internalValue = value;
  }
  public resetVerifyImages() {
    this._verifyImages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyImagesInput() {
    return this._verifyImages.internalValue;
  }
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoClusterPolicyV1ManifestSpecRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesOutputReference {
    return new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#key DataK8SKyvernoIoClusterPolicyV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#operator DataK8SKyvernoIoClusterPolicyV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#values DataK8SKyvernoIoClusterPolicyV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
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

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#match_expressions DataK8SKyvernoIoClusterPolicyV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#match_labels DataK8SKyvernoIoClusterPolicyV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelectorToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelectorToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelectorMatchExpressionsList",
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

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverrides {
  /**
  * ValidationFailureAction defines the policy validation failure action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#action DataK8SKyvernoIoClusterPolicyV1Manifest#action}
  */
  readonly action?: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#namespace_selector DataK8SKyvernoIoClusterPolicyV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#namespaces DataK8SKyvernoIoClusterPolicyV1Manifest#namespaces}
  */
  readonly namespaces?: string[];
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    namespace_selector: dataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_selector: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverrides[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesOutputReference {
    return new DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfigurationMatchConditions {
  /**
  * Expression represents the expression which will be evaluated by CEL. Must evaluate to bool. CEL expressions have access to the contents of the AdmissionRequest and Authorizer, organized into CEL variables: 'object' - The object from the incoming request. The value is null for DELETE requests. 'oldObject' - The existing object. The value is null for CREATE requests. 'request' - Attributes of the admission request(/pkg/apis/admission/types.go#AdmissionRequest). 'authorizer' - A CEL Authorizer. May be used to perform authorization checks for the principal (user or service account) of the request. See https://pkg.go.dev/k8s.io/apiserver/pkg/cel/library#Authz 'authorizer.requestResource' - A CEL ResourceCheck constructed from the 'authorizer' and configured with the request resource. Documentation on CEL: https://kubernetes.io/docs/reference/using-api/cel/ Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#expression DataK8SKyvernoIoClusterPolicyV1Manifest#expression}
  */
  readonly expression: string;
  /**
  * Name is an identifier for this match condition, used for strategic merging of MatchConditions, as well as providing an identifier for logging purposes. A good name should be descriptive of the associated expression. Name must be a qualified name consisting of alphanumeric characters, '-', '_' or '.', and must start and end with an alphanumeric character (e.g. 'MyName', or 'my.name', or '123-abc', regex used for validation is '([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9]') with an optional DNS subdomain prefix and '/' (e.g. 'example.com/MyName') Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#name DataK8SKyvernoIoClusterPolicyV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfigurationMatchConditionsToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfigurationMatchConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfigurationMatchConditionsToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfigurationMatchConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
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

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfigurationMatchConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfigurationMatchConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfigurationMatchConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._name = value.name;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfigurationMatchConditionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfigurationMatchConditions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfigurationMatchConditionsOutputReference {
    return new DataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfigurationMatchConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfiguration {
  /**
  * FailurePolicy defines how unexpected policy errors and webhook response timeout errors are handled. Rules within the same policy share the same failure behavior. This field should not be accessed directly, instead 'GetFailurePolicy()' should be used. Allowed values are Ignore or Fail. Defaults to Fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#failure_policy DataK8SKyvernoIoClusterPolicyV1Manifest#failure_policy}
  */
  readonly failurePolicy?: string;
  /**
  * MatchCondition configures admission webhook matchConditions. Requires Kubernetes 1.27 or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#match_conditions DataK8SKyvernoIoClusterPolicyV1Manifest#match_conditions}
  */
  readonly matchConditions?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfigurationMatchConditions[] | cdktf.IResolvable;
  /**
  * TimeoutSeconds specifies the maximum time in seconds allowed to apply this policy. After the configured time expires, the admission request may fail, or may simply ignore the policy results, based on the failure policy. The default timeout is 10s, the value must be between 1 and 30 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#timeout_seconds DataK8SKyvernoIoClusterPolicyV1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfigurationToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_policy: cdktf.stringToTerraform(struct!.failurePolicy),
    match_conditions: cdktf.listMapper(dataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfigurationMatchConditionsToTerraform, false)(struct!.matchConditions),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfigurationToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_policy: {
      value: cdktf.stringToHclTerraform(struct!.failurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_conditions: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfigurationMatchConditionsToHclTerraform, false)(struct!.matchConditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfigurationMatchConditionsList",
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

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.failurePolicy = this._failurePolicy;
    }
    if (this._matchConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchConditions = this._matchConditions?.internalValue;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failurePolicy = undefined;
      this._matchConditions.internalValue = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failurePolicy = value.failurePolicy;
      this._matchConditions.internalValue = value.matchConditions;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // failure_policy - computed: false, optional: true, required: false
  private _failurePolicy?: string; 
  public get failurePolicy() {
    return this.getStringAttribute('failure_policy');
  }
  public set failurePolicy(value: string) {
    this._failurePolicy = value;
  }
  public resetFailurePolicy() {
    this._failurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failurePolicyInput() {
    return this._failurePolicy;
  }

  // match_conditions - computed: false, optional: true, required: false
  private _matchConditions = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfigurationMatchConditionsList(this, "match_conditions", false);
  public get matchConditions() {
    return this._matchConditions;
  }
  public putMatchConditions(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfigurationMatchConditions[] | cdktf.IResolvable) {
    this._matchConditions.internalValue = value;
  }
  public resetMatchConditions() {
    this._matchConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchConditionsInput() {
    return this._matchConditions.internalValue;
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
export interface DataK8SKyvernoIoClusterPolicyV1ManifestSpec {
  /**
  * Admission controls if rules are applied during admission. Optional. Default value is 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#admission DataK8SKyvernoIoClusterPolicyV1Manifest#admission}
  */
  readonly admission?: boolean | cdktf.IResolvable;
  /**
  * ApplyRules controls how rules in a policy are applied. Rule are processed in the order of declaration. When set to 'One' processing stops after a rule has been applied i.e. the rule matches and results in a pass, fail, or error. When set to 'All' all rules in the policy are processed. The default is 'All'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#apply_rules DataK8SKyvernoIoClusterPolicyV1Manifest#apply_rules}
  */
  readonly applyRules?: string;
  /**
  * Background controls if rules are applied to existing resources during a background scan. Optional. Default value is 'true'. The value must be set to 'false' if the policy rule uses variables that are only available in the admission review request (e.g. user name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#background DataK8SKyvernoIoClusterPolicyV1Manifest#background}
  */
  readonly background?: boolean | cdktf.IResolvable;
  /**
  * EmitWarning enables API response warnings for mutate policy rules or validate policy rules with validationFailureAction set to Audit. Enabling this option will extend admission request processing times. The default value is 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#emit_warning DataK8SKyvernoIoClusterPolicyV1Manifest#emit_warning}
  */
  readonly emitWarning?: boolean | cdktf.IResolvable;
  /**
  * Deprecated, use failurePolicy under the webhookConfiguration instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#failure_policy DataK8SKyvernoIoClusterPolicyV1Manifest#failure_policy}
  */
  readonly failurePolicy?: string;
  /**
  * Deprecated, use generateExisting under the generate rule instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#generate_existing DataK8SKyvernoIoClusterPolicyV1Manifest#generate_existing}
  */
  readonly generateExisting?: boolean | cdktf.IResolvable;
  /**
  * Deprecated, use generateExisting instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#generate_existing_on_policy_update DataK8SKyvernoIoClusterPolicyV1Manifest#generate_existing_on_policy_update}
  */
  readonly generateExistingOnPolicyUpdate?: boolean | cdktf.IResolvable;
  /**
  * Deprecated, use mutateExistingOnPolicyUpdate under the mutate rule instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#mutate_existing_on_policy_update DataK8SKyvernoIoClusterPolicyV1Manifest#mutate_existing_on_policy_update}
  */
  readonly mutateExistingOnPolicyUpdate?: boolean | cdktf.IResolvable;
  /**
  * Rules is a list of Rule instances. A Policy contains multiple rules and each rule can validate, mutate, or generate resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#rules DataK8SKyvernoIoClusterPolicyV1Manifest#rules}
  */
  readonly rules?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRules[] | cdktf.IResolvable;
  /**
  * Deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#schema_validation DataK8SKyvernoIoClusterPolicyV1Manifest#schema_validation}
  */
  readonly schemaValidation?: boolean | cdktf.IResolvable;
  /**
  * UseServerSideApply controls whether to use server-side apply for generate rules If is set to 'true' create & update for generate rules will use apply instead of create/update. Defaults to 'false' if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#use_server_side_apply DataK8SKyvernoIoClusterPolicyV1Manifest#use_server_side_apply}
  */
  readonly useServerSideApply?: boolean | cdktf.IResolvable;
  /**
  * Deprecated, use validationFailureAction under the validate rule instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#validation_failure_action DataK8SKyvernoIoClusterPolicyV1Manifest#validation_failure_action}
  */
  readonly validationFailureAction?: string;
  /**
  * Deprecated, use validationFailureActionOverrides under the validate rule instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#validation_failure_action_overrides DataK8SKyvernoIoClusterPolicyV1Manifest#validation_failure_action_overrides}
  */
  readonly validationFailureActionOverrides?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverrides[] | cdktf.IResolvable;
  /**
  * WebhookConfiguration specifies the custom configuration for Kubernetes admission webhookconfiguration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#webhook_configuration DataK8SKyvernoIoClusterPolicyV1Manifest#webhook_configuration}
  */
  readonly webhookConfiguration?: DataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfiguration;
  /**
  * Deprecated, use webhookTimeoutSeconds under webhookConfiguration instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kyverno_io_cluster_policy_v1_manifest#webhook_timeout_seconds DataK8SKyvernoIoClusterPolicyV1Manifest#webhook_timeout_seconds}
  */
  readonly webhookTimeoutSeconds?: number;
}

export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecToTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admission: cdktf.booleanToTerraform(struct!.admission),
    apply_rules: cdktf.stringToTerraform(struct!.applyRules),
    background: cdktf.booleanToTerraform(struct!.background),
    emit_warning: cdktf.booleanToTerraform(struct!.emitWarning),
    failure_policy: cdktf.stringToTerraform(struct!.failurePolicy),
    generate_existing: cdktf.booleanToTerraform(struct!.generateExisting),
    generate_existing_on_policy_update: cdktf.booleanToTerraform(struct!.generateExistingOnPolicyUpdate),
    mutate_existing_on_policy_update: cdktf.booleanToTerraform(struct!.mutateExistingOnPolicyUpdate),
    rules: cdktf.listMapper(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesToTerraform, false)(struct!.rules),
    schema_validation: cdktf.booleanToTerraform(struct!.schemaValidation),
    use_server_side_apply: cdktf.booleanToTerraform(struct!.useServerSideApply),
    validation_failure_action: cdktf.stringToTerraform(struct!.validationFailureAction),
    validation_failure_action_overrides: cdktf.listMapper(dataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesToTerraform, false)(struct!.validationFailureActionOverrides),
    webhook_configuration: dataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfigurationToTerraform(struct!.webhookConfiguration),
    webhook_timeout_seconds: cdktf.numberToTerraform(struct!.webhookTimeoutSeconds),
  }
}


export function dataK8SKyvernoIoClusterPolicyV1ManifestSpecToHclTerraform(struct?: DataK8SKyvernoIoClusterPolicyV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admission: {
      value: cdktf.booleanToHclTerraform(struct!.admission),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apply_rules: {
      value: cdktf.stringToHclTerraform(struct!.applyRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    background: {
      value: cdktf.booleanToHclTerraform(struct!.background),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    emit_warning: {
      value: cdktf.booleanToHclTerraform(struct!.emitWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failure_policy: {
      value: cdktf.stringToHclTerraform(struct!.failurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generate_existing: {
      value: cdktf.booleanToHclTerraform(struct!.generateExisting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    generate_existing_on_policy_update: {
      value: cdktf.booleanToHclTerraform(struct!.generateExistingOnPolicyUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mutate_existing_on_policy_update: {
      value: cdktf.booleanToHclTerraform(struct!.mutateExistingOnPolicyUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesList",
    },
    schema_validation: {
      value: cdktf.booleanToHclTerraform(struct!.schemaValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_server_side_apply: {
      value: cdktf.booleanToHclTerraform(struct!.useServerSideApply),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validation_failure_action: {
      value: cdktf.stringToHclTerraform(struct!.validationFailureAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation_failure_action_overrides: {
      value: cdktf.listMapperHcl(dataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesToHclTerraform, false)(struct!.validationFailureActionOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesList",
    },
    webhook_configuration: {
      value: dataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfigurationToHclTerraform(struct!.webhookConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfiguration",
    },
    webhook_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.webhookTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoClusterPolicyV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoClusterPolicyV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._admission !== undefined) {
      hasAnyValues = true;
      internalValueResult.admission = this._admission;
    }
    if (this._applyRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyRules = this._applyRules;
    }
    if (this._background !== undefined) {
      hasAnyValues = true;
      internalValueResult.background = this._background;
    }
    if (this._emitWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.emitWarning = this._emitWarning;
    }
    if (this._failurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.failurePolicy = this._failurePolicy;
    }
    if (this._generateExisting !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateExisting = this._generateExisting;
    }
    if (this._generateExistingOnPolicyUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateExistingOnPolicyUpdate = this._generateExistingOnPolicyUpdate;
    }
    if (this._mutateExistingOnPolicyUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.mutateExistingOnPolicyUpdate = this._mutateExistingOnPolicyUpdate;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._schemaValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaValidation = this._schemaValidation;
    }
    if (this._useServerSideApply !== undefined) {
      hasAnyValues = true;
      internalValueResult.useServerSideApply = this._useServerSideApply;
    }
    if (this._validationFailureAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationFailureAction = this._validationFailureAction;
    }
    if (this._validationFailureActionOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationFailureActionOverrides = this._validationFailureActionOverrides?.internalValue;
    }
    if (this._webhookConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookConfiguration = this._webhookConfiguration?.internalValue;
    }
    if (this._webhookTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookTimeoutSeconds = this._webhookTimeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._admission = undefined;
      this._applyRules = undefined;
      this._background = undefined;
      this._emitWarning = undefined;
      this._failurePolicy = undefined;
      this._generateExisting = undefined;
      this._generateExistingOnPolicyUpdate = undefined;
      this._mutateExistingOnPolicyUpdate = undefined;
      this._rules.internalValue = undefined;
      this._schemaValidation = undefined;
      this._useServerSideApply = undefined;
      this._validationFailureAction = undefined;
      this._validationFailureActionOverrides.internalValue = undefined;
      this._webhookConfiguration.internalValue = undefined;
      this._webhookTimeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._admission = value.admission;
      this._applyRules = value.applyRules;
      this._background = value.background;
      this._emitWarning = value.emitWarning;
      this._failurePolicy = value.failurePolicy;
      this._generateExisting = value.generateExisting;
      this._generateExistingOnPolicyUpdate = value.generateExistingOnPolicyUpdate;
      this._mutateExistingOnPolicyUpdate = value.mutateExistingOnPolicyUpdate;
      this._rules.internalValue = value.rules;
      this._schemaValidation = value.schemaValidation;
      this._useServerSideApply = value.useServerSideApply;
      this._validationFailureAction = value.validationFailureAction;
      this._validationFailureActionOverrides.internalValue = value.validationFailureActionOverrides;
      this._webhookConfiguration.internalValue = value.webhookConfiguration;
      this._webhookTimeoutSeconds = value.webhookTimeoutSeconds;
    }
  }

  // admission - computed: false, optional: true, required: false
  private _admission?: boolean | cdktf.IResolvable; 
  public get admission() {
    return this.getBooleanAttribute('admission');
  }
  public set admission(value: boolean | cdktf.IResolvable) {
    this._admission = value;
  }
  public resetAdmission() {
    this._admission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionInput() {
    return this._admission;
  }

  // apply_rules - computed: false, optional: true, required: false
  private _applyRules?: string; 
  public get applyRules() {
    return this.getStringAttribute('apply_rules');
  }
  public set applyRules(value: string) {
    this._applyRules = value;
  }
  public resetApplyRules() {
    this._applyRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyRulesInput() {
    return this._applyRules;
  }

  // background - computed: false, optional: true, required: false
  private _background?: boolean | cdktf.IResolvable; 
  public get background() {
    return this.getBooleanAttribute('background');
  }
  public set background(value: boolean | cdktf.IResolvable) {
    this._background = value;
  }
  public resetBackground() {
    this._background = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundInput() {
    return this._background;
  }

  // emit_warning - computed: false, optional: true, required: false
  private _emitWarning?: boolean | cdktf.IResolvable; 
  public get emitWarning() {
    return this.getBooleanAttribute('emit_warning');
  }
  public set emitWarning(value: boolean | cdktf.IResolvable) {
    this._emitWarning = value;
  }
  public resetEmitWarning() {
    this._emitWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emitWarningInput() {
    return this._emitWarning;
  }

  // failure_policy - computed: false, optional: true, required: false
  private _failurePolicy?: string; 
  public get failurePolicy() {
    return this.getStringAttribute('failure_policy');
  }
  public set failurePolicy(value: string) {
    this._failurePolicy = value;
  }
  public resetFailurePolicy() {
    this._failurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failurePolicyInput() {
    return this._failurePolicy;
  }

  // generate_existing - computed: false, optional: true, required: false
  private _generateExisting?: boolean | cdktf.IResolvable; 
  public get generateExisting() {
    return this.getBooleanAttribute('generate_existing');
  }
  public set generateExisting(value: boolean | cdktf.IResolvable) {
    this._generateExisting = value;
  }
  public resetGenerateExisting() {
    this._generateExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateExistingInput() {
    return this._generateExisting;
  }

  // generate_existing_on_policy_update - computed: false, optional: true, required: false
  private _generateExistingOnPolicyUpdate?: boolean | cdktf.IResolvable; 
  public get generateExistingOnPolicyUpdate() {
    return this.getBooleanAttribute('generate_existing_on_policy_update');
  }
  public set generateExistingOnPolicyUpdate(value: boolean | cdktf.IResolvable) {
    this._generateExistingOnPolicyUpdate = value;
  }
  public resetGenerateExistingOnPolicyUpdate() {
    this._generateExistingOnPolicyUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateExistingOnPolicyUpdateInput() {
    return this._generateExistingOnPolicyUpdate;
  }

  // mutate_existing_on_policy_update - computed: false, optional: true, required: false
  private _mutateExistingOnPolicyUpdate?: boolean | cdktf.IResolvable; 
  public get mutateExistingOnPolicyUpdate() {
    return this.getBooleanAttribute('mutate_existing_on_policy_update');
  }
  public set mutateExistingOnPolicyUpdate(value: boolean | cdktf.IResolvable) {
    this._mutateExistingOnPolicyUpdate = value;
  }
  public resetMutateExistingOnPolicyUpdate() {
    this._mutateExistingOnPolicyUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutateExistingOnPolicyUpdateInput() {
    return this._mutateExistingOnPolicyUpdate;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // schema_validation - computed: false, optional: true, required: false
  private _schemaValidation?: boolean | cdktf.IResolvable; 
  public get schemaValidation() {
    return this.getBooleanAttribute('schema_validation');
  }
  public set schemaValidation(value: boolean | cdktf.IResolvable) {
    this._schemaValidation = value;
  }
  public resetSchemaValidation() {
    this._schemaValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaValidationInput() {
    return this._schemaValidation;
  }

  // use_server_side_apply - computed: false, optional: true, required: false
  private _useServerSideApply?: boolean | cdktf.IResolvable; 
  public get useServerSideApply() {
    return this.getBooleanAttribute('use_server_side_apply');
  }
  public set useServerSideApply(value: boolean | cdktf.IResolvable) {
    this._useServerSideApply = value;
  }
  public resetUseServerSideApply() {
    this._useServerSideApply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useServerSideApplyInput() {
    return this._useServerSideApply;
  }

  // validation_failure_action - computed: false, optional: true, required: false
  private _validationFailureAction?: string; 
  public get validationFailureAction() {
    return this.getStringAttribute('validation_failure_action');
  }
  public set validationFailureAction(value: string) {
    this._validationFailureAction = value;
  }
  public resetValidationFailureAction() {
    this._validationFailureAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationFailureActionInput() {
    return this._validationFailureAction;
  }

  // validation_failure_action_overrides - computed: false, optional: true, required: false
  private _validationFailureActionOverrides = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverridesList(this, "validation_failure_action_overrides", false);
  public get validationFailureActionOverrides() {
    return this._validationFailureActionOverrides;
  }
  public putValidationFailureActionOverrides(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecValidationFailureActionOverrides[] | cdktf.IResolvable) {
    this._validationFailureActionOverrides.internalValue = value;
  }
  public resetValidationFailureActionOverrides() {
    this._validationFailureActionOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationFailureActionOverridesInput() {
    return this._validationFailureActionOverrides.internalValue;
  }

  // webhook_configuration - computed: false, optional: true, required: false
  private _webhookConfiguration = new DataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfigurationOutputReference(this, "webhook_configuration");
  public get webhookConfiguration() {
    return this._webhookConfiguration;
  }
  public putWebhookConfiguration(value: DataK8SKyvernoIoClusterPolicyV1ManifestSpecWebhookConfiguration) {
    this._webhookConfiguration.internalValue = value;
  }
  public resetWebhookConfiguration() {
    this._webhookConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookConfigurationInput() {
    return this._webhookConfiguration.internalValue;
  }

  // webhook_timeout_seconds - computed: false, optional: true, required: false
  private _webhookTimeoutSeconds?: number; 
  public get webhookTimeoutSeconds() {
    return this.getNumberAttribute('webhook_timeout_seconds');
  }
  public set webhookTimeoutSeconds(value: number) {
    this._webhookTimeoutSeconds = value;
  }
  public resetWebhookTimeoutSeconds() {
    this._webhookTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookTimeoutSecondsInput() {
    return this._webhookTimeoutSeconds;
  }
}
