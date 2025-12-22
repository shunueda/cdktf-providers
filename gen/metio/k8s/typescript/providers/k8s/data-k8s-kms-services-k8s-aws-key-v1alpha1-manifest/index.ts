// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kms_services_k8s_aws_key_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kms_services_k8s_aws_key_v1alpha1_manifest#metadata DataK8SKmsServicesK8SAwsKeyV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestMetadata;
  /**
  * KeySpec defines the desired state of Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kms_services_k8s_aws_key_v1alpha1_manifest#spec DataK8SKmsServicesK8SAwsKeyV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpec;
}
export interface DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kms_services_k8s_aws_key_v1alpha1_manifest#annotations DataK8SKmsServicesK8SAwsKeyV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kms_services_k8s_aws_key_v1alpha1_manifest#labels DataK8SKmsServicesK8SAwsKeyV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kms_services_k8s_aws_key_v1alpha1_manifest#name DataK8SKmsServicesK8SAwsKeyV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kms_services_k8s_aws_key_v1alpha1_manifest#namespace DataK8SKmsServicesK8SAwsKeyV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kms_services_k8s_aws_key_v1alpha1_manifest#tag_key DataK8SKmsServicesK8SAwsKeyV1Alpha1Manifest#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kms_services_k8s_aws_key_v1alpha1_manifest#tag_value DataK8SKmsServicesK8SAwsKeyV1Alpha1Manifest#tag_value}
  */
  readonly tagValue?: string;
}

export function dataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function dataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpec {
  /**
  * A flag to indicate whether to bypass the key policy lockout safety check. Setting this value to true increases the risk that the KMS key becomes unmanageable. Do not set this value to true indiscriminately. For more information, refer to the scenario in the Default Key Policy (https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam) section in the Key Management Service Developer Guide . Use this parameter only when you include a policy in the request and you intend to prevent the principal that is making the request from making a subsequent PutKeyPolicy request on the KMS key. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kms_services_k8s_aws_key_v1alpha1_manifest#bypass_policy_lockout_safety_check DataK8SKmsServicesK8SAwsKeyV1Alpha1Manifest#bypass_policy_lockout_safety_check}
  */
  readonly bypassPolicyLockoutSafetyCheck?: boolean | cdktf.IResolvable;
  /**
  * Creates the KMS key in the specified custom key store (https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html) and the key material in its associated CloudHSM cluster. To create a KMS key in a custom key store, you must also specify the Origin parameter with a value of AWS_CLOUDHSM. The CloudHSM cluster that is associated with the custom key store must have at least two active HSMs, each in a different Availability Zone in the Region. This parameter is valid only for symmetric encryption KMS keys in a single Region. You cannot create any other type of KMS key in a custom key store. To find the ID of a custom key store, use the DescribeCustomKeyStores operation. The response includes the custom key store ID and the ID of the CloudHSM cluster. This operation is part of the custom key store feature (https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html) feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a single-tenant key store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kms_services_k8s_aws_key_v1alpha1_manifest#custom_key_store_id DataK8SKmsServicesK8SAwsKeyV1Alpha1Manifest#custom_key_store_id}
  */
  readonly customKeyStoreId?: string;
  /**
  * A description of the KMS key. Use a description that helps you decide whether the KMS key is appropriate for a task. The default value is an empty string (no description). To set or change the description after the key is created, use UpdateKeyDescription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kms_services_k8s_aws_key_v1alpha1_manifest#description DataK8SKmsServicesK8SAwsKeyV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kms_services_k8s_aws_key_v1alpha1_manifest#enable_key_rotation DataK8SKmsServicesK8SAwsKeyV1Alpha1Manifest#enable_key_rotation}
  */
  readonly enableKeyRotation?: boolean | cdktf.IResolvable;
  /**
  * Specifies the type of KMS key to create. The default value, SYMMETRIC_DEFAULT, creates a KMS key with a 256-bit AES-GCM key that is used for encryption and decryption, except in China Regions, where it creates a 128-bit symmetric key that uses SM4 encryption. For help choosing a key spec for your KMS key, see Choosing a KMS key type (https://docs.aws.amazon.com/kms/latest/developerguide/key-types.html#symm-asymm-choose) in the Key Management Service Developer Guide . The KeySpec determines whether the KMS key contains a symmetric key or an asymmetric key pair. It also determines the cryptographic algorithms that the KMS key supports. You can't change the KeySpec after the KMS key is created. To further restrict the algorithms that can be used with the KMS key, use a condition key in its key policy or IAM policy. For more information, see kms:EncryptionAlgorithm (https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-algorithm), kms:MacAlgorithm (https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-mac-algorithm) or kms:Signing Algorithm (https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-signing-algorithm) in the Key Management Service Developer Guide . Amazon Web Services services that are integrated with KMS (http://aws.amazon.com/kms/features/#AWS_Service_Integration) use symmetric encryption KMS keys to protect your data. These services do not support asymmetric KMS keys or HMAC KMS keys. KMS supports the following key specs for KMS keys: * Symmetric encryption key (default) SYMMETRIC_DEFAULT * HMAC keys (symmetric) HMAC_224 HMAC_256 HMAC_384 HMAC_512 * Asymmetric RSA key pairs RSA_2048 RSA_3072 RSA_4096 * Asymmetric NIST-recommended elliptic curve key pairs ECC_NIST_P256 (secp256r1) ECC_NIST_P384 (secp384r1) ECC_NIST_P521 (secp521r1) * Other asymmetric elliptic curve key pairs ECC_SECG_P256K1 (secp256k1), commonly used for cryptocurrencies. * SM2 key pairs (China Regions only) SM2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kms_services_k8s_aws_key_v1alpha1_manifest#key_spec DataK8SKmsServicesK8SAwsKeyV1Alpha1Manifest#key_spec}
  */
  readonly keySpec?: string;
  /**
  * Determines the cryptographic operations (https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations) for which you can use the KMS key. The default value is ENCRYPT_DECRYPT. This parameter is optional when you are creating a symmetric encryption KMS key; otherwise, it is required. You can't change the KeyUsage value after the KMS key is created. Select only one valid value. * For symmetric encryption KMS keys, omit the parameter or specify ENCRYPT_DECRYPT. * For HMAC KMS keys (symmetric), specify GENERATE_VERIFY_MAC. * For asymmetric KMS keys with RSA key material, specify ENCRYPT_DECRYPT or SIGN_VERIFY. * For asymmetric KMS keys with ECC key material, specify SIGN_VERIFY. * For asymmetric KMS keys with SM2 key material (China Regions only), specify ENCRYPT_DECRYPT or SIGN_VERIFY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kms_services_k8s_aws_key_v1alpha1_manifest#key_usage DataK8SKmsServicesK8SAwsKeyV1Alpha1Manifest#key_usage}
  */
  readonly keyUsage?: string;
  /**
  * Creates a multi-Region primary key that you can replicate into other Amazon Web Services Regions. You cannot change this value after you create the KMS key. For a multi-Region key, set this parameter to True. For a single-Region KMS key, omit this parameter or set it to False. The default value is False. This operation supports multi-Region keys, an KMS feature that lets you create multiple interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see Multi-Region keys in KMS (https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the Key Management Service Developer Guide. This value creates a primary key, not a replica. To create a replica key, use the ReplicateKey operation. You can create a multi-Region version of a symmetric encryption KMS key, an HMAC KMS key, an asymmetric KMS key, or a KMS key with imported key material. However, you cannot create a multi-Region key in a custom key store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kms_services_k8s_aws_key_v1alpha1_manifest#multi_region DataK8SKmsServicesK8SAwsKeyV1Alpha1Manifest#multi_region}
  */
  readonly multiRegion?: boolean | cdktf.IResolvable;
  /**
  * The source of the key material for the KMS key. You cannot change the origin after you create the KMS key. The default is AWS_KMS, which means that KMS creates the key material. To create a KMS key with no key material (for imported key material), set the value to EXTERNAL. For more information about importing key material into KMS, see Importing Key Material (https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html) in the Key Management Service Developer Guide. This value is valid only for symmetric encryption KMS keys. To create a KMS key in an KMS custom key store (https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html) and create its key material in the associated CloudHSM cluster, set this value to AWS_CLOUDHSM. You must also use the CustomKeyStoreId parameter to identify the custom key store. This value is valid only for symmetric encryption KMS keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kms_services_k8s_aws_key_v1alpha1_manifest#origin DataK8SKmsServicesK8SAwsKeyV1Alpha1Manifest#origin}
  */
  readonly origin?: string;
  /**
  * The key policy to attach to the KMS key. If you do not specify a key policy, KMS attaches a default key policy to the KMS key. For more information, see Default key policy (https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default) in the Key Management Service Developer Guide. If you provide a key policy, it must meet the following criteria: * If you don't set BypassPolicyLockoutSafetyCheck to True, the key policy must allow the principal that is making the CreateKey request to make a subsequent PutKeyPolicy request on the KMS key. This reduces the risk that the KMS key becomes unmanageable. For more information, refer to the scenario in the Default Key Policy (https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam) section of the Key Management Service Developer Guide . * Each statement in the key policy must contain one or more principals. The principals in the key policy must exist and be visible to KMS. When you create a new Amazon Web Services principal (for example, an IAM user or role), you might need to enforce a delay before including the new principal in a key policy because the new principal might not be immediately visible to KMS. For more information, see Changes that I make are not always immediately visible (https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_eventual-consistency) in the Amazon Web Services Identity and Access Management User Guide. A key policy document can include only the following characters: * Printable ASCII characters from the space character (u0020) through the end of the ASCII character range. * Printable characters in the Basic Latin and Latin-1 Supplement character set (through u00FF). * The tab (u0009), line feed (u000A), and carriage return (u000D) special characters For information about key policies, see Key policies in KMS (https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html) in the Key Management Service Developer Guide. For help writing and formatting a JSON policy document, see the IAM JSON Policy Reference (https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html) in the Identity and Access Management User Guide .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kms_services_k8s_aws_key_v1alpha1_manifest#policy DataK8SKmsServicesK8SAwsKeyV1Alpha1Manifest#policy}
  */
  readonly policy?: string;
  /**
  * Assigns one or more tags to the KMS key. Use this parameter to tag the KMS key when it is created. To tag an existing KMS key, use the TagResource operation. Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see ABAC in KMS (https://docs.aws.amazon.com/kms/latest/developerguide/abac.html) in the Key Management Service Developer Guide. To use this parameter, you must have kms:TagResource (https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) permission in an IAM policy. Each tag consists of a tag key and a tag value. Both the tag key and the tag value are required, but the tag value can be an empty (null) string. You cannot have more than one tag on a KMS key with the same tag key. If you specify an existing tag key with a different tag value, KMS replaces the current tag value with the specified one. When you add tags to an Amazon Web Services resource, Amazon Web Services generates a cost allocation report with usage and costs aggregated by tags. Tags can also be used to control access to a KMS key. For details, see Tagging Keys (https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kms_services_k8s_aws_key_v1alpha1_manifest#tags DataK8SKmsServicesK8SAwsKeyV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
}

export function dataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass_policy_lockout_safety_check: cdktf.booleanToTerraform(struct!.bypassPolicyLockoutSafetyCheck),
    custom_key_store_id: cdktf.stringToTerraform(struct!.customKeyStoreId),
    description: cdktf.stringToTerraform(struct!.description),
    enable_key_rotation: cdktf.booleanToTerraform(struct!.enableKeyRotation),
    key_spec: cdktf.stringToTerraform(struct!.keySpec),
    key_usage: cdktf.stringToTerraform(struct!.keyUsage),
    multi_region: cdktf.booleanToTerraform(struct!.multiRegion),
    origin: cdktf.stringToTerraform(struct!.origin),
    policy: cdktf.stringToTerraform(struct!.policy),
    tags: cdktf.listMapper(dataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
  }
}


export function dataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass_policy_lockout_safety_check: {
      value: cdktf.booleanToHclTerraform(struct!.bypassPolicyLockoutSafetyCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_key_store_id: {
      value: cdktf.stringToHclTerraform(struct!.customKeyStoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_key_rotation: {
      value: cdktf.booleanToHclTerraform(struct!.enableKeyRotation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_spec: {
      value: cdktf.stringToHclTerraform(struct!.keySpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_usage: {
      value: cdktf.stringToHclTerraform(struct!.keyUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_region: {
      value: cdktf.booleanToHclTerraform(struct!.multiRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpecTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypassPolicyLockoutSafetyCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassPolicyLockoutSafetyCheck = this._bypassPolicyLockoutSafetyCheck;
    }
    if (this._customKeyStoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customKeyStoreId = this._customKeyStoreId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enableKeyRotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableKeyRotation = this._enableKeyRotation;
    }
    if (this._keySpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySpec = this._keySpec;
    }
    if (this._keyUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUsage = this._keyUsage;
    }
    if (this._multiRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiRegion = this._multiRegion;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bypassPolicyLockoutSafetyCheck = undefined;
      this._customKeyStoreId = undefined;
      this._description = undefined;
      this._enableKeyRotation = undefined;
      this._keySpec = undefined;
      this._keyUsage = undefined;
      this._multiRegion = undefined;
      this._origin = undefined;
      this._policy = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bypassPolicyLockoutSafetyCheck = value.bypassPolicyLockoutSafetyCheck;
      this._customKeyStoreId = value.customKeyStoreId;
      this._description = value.description;
      this._enableKeyRotation = value.enableKeyRotation;
      this._keySpec = value.keySpec;
      this._keyUsage = value.keyUsage;
      this._multiRegion = value.multiRegion;
      this._origin = value.origin;
      this._policy = value.policy;
      this._tags.internalValue = value.tags;
    }
  }

  // bypass_policy_lockout_safety_check - computed: false, optional: true, required: false
  private _bypassPolicyLockoutSafetyCheck?: boolean | cdktf.IResolvable; 
  public get bypassPolicyLockoutSafetyCheck() {
    return this.getBooleanAttribute('bypass_policy_lockout_safety_check');
  }
  public set bypassPolicyLockoutSafetyCheck(value: boolean | cdktf.IResolvable) {
    this._bypassPolicyLockoutSafetyCheck = value;
  }
  public resetBypassPolicyLockoutSafetyCheck() {
    this._bypassPolicyLockoutSafetyCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassPolicyLockoutSafetyCheckInput() {
    return this._bypassPolicyLockoutSafetyCheck;
  }

  // custom_key_store_id - computed: false, optional: true, required: false
  private _customKeyStoreId?: string; 
  public get customKeyStoreId() {
    return this.getStringAttribute('custom_key_store_id');
  }
  public set customKeyStoreId(value: string) {
    this._customKeyStoreId = value;
  }
  public resetCustomKeyStoreId() {
    this._customKeyStoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customKeyStoreIdInput() {
    return this._customKeyStoreId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enable_key_rotation - computed: false, optional: true, required: false
  private _enableKeyRotation?: boolean | cdktf.IResolvable; 
  public get enableKeyRotation() {
    return this.getBooleanAttribute('enable_key_rotation');
  }
  public set enableKeyRotation(value: boolean | cdktf.IResolvable) {
    this._enableKeyRotation = value;
  }
  public resetEnableKeyRotation() {
    this._enableKeyRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKeyRotationInput() {
    return this._enableKeyRotation;
  }

  // key_spec - computed: false, optional: true, required: false
  private _keySpec?: string; 
  public get keySpec() {
    return this.getStringAttribute('key_spec');
  }
  public set keySpec(value: string) {
    this._keySpec = value;
  }
  public resetKeySpec() {
    this._keySpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySpecInput() {
    return this._keySpec;
  }

  // key_usage - computed: false, optional: true, required: false
  private _keyUsage?: string; 
  public get keyUsage() {
    return this.getStringAttribute('key_usage');
  }
  public set keyUsage(value: string) {
    this._keyUsage = value;
  }
  public resetKeyUsage() {
    this._keyUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage;
  }

  // multi_region - computed: false, optional: true, required: false
  private _multiRegion?: boolean | cdktf.IResolvable; 
  public get multiRegion() {
    return this.getBooleanAttribute('multi_region');
  }
  public set multiRegion(value: boolean | cdktf.IResolvable) {
    this._multiRegion = value;
  }
  public resetMultiRegion() {
    this._multiRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiRegionInput() {
    return this._multiRegion;
  }

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kms_services_k8s_aws_key_v1alpha1_manifest k8s_kms_services_k8s_aws_key_v1alpha1_manifest}
*/
export class DataK8SKmsServicesK8SAwsKeyV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kms_services_k8s_aws_key_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKmsServicesK8SAwsKeyV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKmsServicesK8SAwsKeyV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKmsServicesK8SAwsKeyV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kms_services_k8s_aws_key_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKmsServicesK8SAwsKeyV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kms_services_k8s_aws_key_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kms_services_k8s_aws_key_v1alpha1_manifest k8s_kms_services_k8s_aws_key_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kms_services_k8s_aws_key_v1alpha1_manifest',
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
  private _metadata = new DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKmsServicesK8SAwsKeyV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
