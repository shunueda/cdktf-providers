// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Algorithm of the first version of the key and subsequent versions unless specified when adding versions. Options: RSA_SIGN_PSS_2048_SHA256, RSA_SIGN_PSS_3072_SHA256, RSA_SIGN_PSS_4096_SHA256, RSA_SIGN_PSS_4096_SHA512, RSA_SIGN_PKCS1_2048_SHA256, RSA_SIGN_PKCS1_3072_SHA256, RSA_SIGN_PKCS1_4096_SHA256, RSA_SIGN_PKCS1_4096_SHA512, EC_SIGN_P256_SHA256, EC_SIGN_P384_SHA384, EC_SIGN_SECP256K1_SHA256, RSA_DECRYPT_OAEP_2048_SHA256, RSA_DECRYPT_OAEP_3072_SHA256, RSA_DECRYPT_OAEP_4096_SHA256, RSA_DECRYPT_OAEP_4096_SHA512 and GOOGLE_SYMMETRIC_ENCRYPTION. Can be updated for asymmetric keys. EC_SIGN_SECP256K1_SHA256 is only valid if protection_level is HSM. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#algorithm GcpKey#algorithm}
  */
  readonly algorithm: string;
  /**
  * Disable all key versions. All versions can be disabled on create or update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#disable_all_versions GcpKey#disable_all_versions}
  */
  readonly disableAllVersions?: boolean | cdktf.IResolvable;
  /**
  * A list of version to disable. Versions that don't exist or are not enabled are ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#disable_versions GcpKey#disable_versions}
  */
  readonly disableVersions?: number[];
  /**
  * Enable all key versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#enable_all_versions GcpKey#enable_all_versions}
  */
  readonly enableAllVersions?: boolean | cdktf.IResolvable;
  /**
  * A list of versions to enable. Versions that don't exist or are not disabled are ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#enable_versions GcpKey#enable_versions}
  */
  readonly enableVersions?: number[];
  /**
  * A list of key:value pairs to assign to the Google Cloud key. Keys and values can contain only lowercase letters,  numeric characters, underscores, and dashes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#key_labels GcpKey#key_labels}
  */
  readonly keyLabels?: { [key: string]: string };
  /**
  * Terraform ID of the key ring on which to create the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#key_ring GcpKey#key_ring}
  */
  readonly keyRing: string;
  /**
  * Name of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#name GcpKey#name}
  */
  readonly name: string;
  /**
  * Time when the key will next be rotated by Google Cloud KMS. Can only be applied to symmetric keys. Must be formatted as per RFC3339. For example, 2022-07-31T17:18:37Z.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#next_rotation_time GcpKey#next_rotation_time}
  */
  readonly nextRotationTime?: string;
  /**
  * Update the primary version. Valid for symmetric keys only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#primary_version GcpKey#primary_version}
  */
  readonly primaryVersion?: number;
  /**
  * Protection level of the key. Options: SOFTWARE, HSM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#protection_level GcpKey#protection_level}
  */
  readonly protectionLevel?: string;
  /**
  * Purpose of the key. Required for asymmetric keys. Options: ENCRYPT_DECRYPT, ASYMMETRIC_SIGN, ASYMMETRIC_DECRYPT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#purpose GcpKey#purpose}
  */
  readonly purpose?: string;
  /**
  * Frequency at which the Google Cloud key will to be rotated by Google Cloud. Can only be applied to symmetric keys. Must be formatted as a duration in seconds terminated by 's'. For example, 360000s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#rotation_period GcpKey#rotation_period}
  */
  readonly rotationPeriod?: string;
  /**
  * A list of versions to destroy. Versions that don't exist or are already scheduled to be destroyed are ignored. If all the versions are destroyed the key is destroyed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#schedule_destroy_versions GcpKey#schedule_destroy_versions}
  */
  readonly scheduleDestroyVersions?: number[];
  /**
  * add_version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#add_version GcpKey#add_version}
  */
  readonly addVersion?: GcpKeyAddVersion[] | cdktf.IResolvable;
  /**
  * enable_rotation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#enable_rotation GcpKey#enable_rotation}
  */
  readonly enableRotation?: GcpKeyEnableRotation;
  /**
  * upload_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#upload_key GcpKey#upload_key}
  */
  readonly uploadKey?: GcpKeyUploadKey;
}
export interface GcpKeyKeyVersionsPublicKey {
}

export function gcpKeyKeyVersionsPublicKeyToTerraform(struct?: GcpKeyKeyVersionsPublicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gcpKeyKeyVersionsPublicKeyToHclTerraform(struct?: GcpKeyKeyVersionsPublicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GcpKeyKeyVersionsPublicKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GcpKeyKeyVersionsPublicKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpKeyKeyVersionsPublicKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pem - computed: true, optional: false, required: false
  public get pem() {
    return this.getStringAttribute('pem');
  }
}

export class GcpKeyKeyVersionsPublicKeyList extends cdktf.ComplexList {

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
  public get(index: number): GcpKeyKeyVersionsPublicKeyOutputReference {
    return new GcpKeyKeyVersionsPublicKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GcpKeyKeyVersions {
}

export function gcpKeyKeyVersionsToTerraform(struct?: GcpKeyKeyVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gcpKeyKeyVersionsToHclTerraform(struct?: GcpKeyKeyVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GcpKeyKeyVersionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GcpKeyKeyVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpKeyKeyVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // is_primary - computed: true, optional: false, required: false
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }

  // local_key_id - computed: true, optional: false, required: false
  public get localKeyId() {
    return this.getStringAttribute('local_key_id');
  }

  // local_key_name - computed: true, optional: false, required: false
  public get localKeyName() {
    return this.getStringAttribute('local_key_name');
  }

  // public_key - computed: true, optional: false, required: false
  private _publicKey = new GcpKeyKeyVersionsPublicKeyList(this, "public_key", true);
  public get publicKey() {
    return this._publicKey;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // version_state - computed: true, optional: false, required: false
  public get versionState() {
    return this.getStringAttribute('version_state');
  }
}

export class GcpKeyKeyVersionsList extends cdktf.ComplexList {

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
  public get(index: number): GcpKeyKeyVersionsOutputReference {
    return new GcpKeyKeyVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GcpKeyAddVersion {
  /**
  * Algorithm of the version. Not valid if is_native is true. Options: RSA_SIGN_PSS_2048_SHA256, RSA_SIGN_PSS_3072_SHA256, RSA_SIGN_PSS_4096_SHA256, RSA_SIGN_PSS_4096_SHA512, RSA_SIGN_PKCS1_2048_SHA256, RSA_SIGN_PKCS1_3072_SHA256, RSA_SIGN_PKCS1_4096_SHA256, RSA_SIGN_PKCS1_4096_SHA512, EC_SIGN_P256_SHA256, EC_SIGN_P384_SHA384, EC_SIGN_SECP256K1_SHA256, RSA_DECRYPT_OAEP_2048_SHA256, RSA_DECRYPT_OAEP_3072_SHA256, RSA_DECRYPT_OAEP_4096_SHA256, RSA_DECRYPT_OAEP_4096_SHA512 and GOOGLE_SYMMETRIC_ENCRYPTION. EC_SIGN_SECP256K1_SHA256 is only valid if protection_level is HSM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#algorithm GcpKey#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Google Cloud will create the new version using the algorithm of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#is_native GcpKey#is_native}
  */
  readonly isNative: boolean | cdktf.IResolvable;
  /**
  * DSM, HSM or CipherTrust key ID. Not required if is_native is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#source_key_id GcpKey#source_key_id}
  */
  readonly sourceKeyId?: string;
  /**
  * Source of the key. Options: local, dsm and hsm-luna. Not required if is_native is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#source_key_tier GcpKey#source_key_tier}
  */
  readonly sourceKeyTier?: string;
}

export function gcpKeyAddVersionToTerraform(struct?: GcpKeyAddVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    is_native: cdktf.booleanToTerraform(struct!.isNative),
    source_key_id: cdktf.stringToTerraform(struct!.sourceKeyId),
    source_key_tier: cdktf.stringToTerraform(struct!.sourceKeyTier),
  }
}


export function gcpKeyAddVersionToHclTerraform(struct?: GcpKeyAddVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_native: {
      value: cdktf.booleanToHclTerraform(struct!.isNative),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_key_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_key_tier: {
      value: cdktf.stringToHclTerraform(struct!.sourceKeyTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpKeyAddVersionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GcpKeyAddVersion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._isNative !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNative = this._isNative;
    }
    if (this._sourceKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceKeyId = this._sourceKeyId;
    }
    if (this._sourceKeyTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceKeyTier = this._sourceKeyTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpKeyAddVersion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._isNative = undefined;
      this._sourceKeyId = undefined;
      this._sourceKeyTier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._isNative = value.isNative;
      this._sourceKeyId = value.sourceKeyId;
      this._sourceKeyTier = value.sourceKeyTier;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // is_native - computed: false, optional: false, required: true
  private _isNative?: boolean | cdktf.IResolvable; 
  public get isNative() {
    return this.getBooleanAttribute('is_native');
  }
  public set isNative(value: boolean | cdktf.IResolvable) {
    this._isNative = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isNativeInput() {
    return this._isNative;
  }

  // source_key_id - computed: false, optional: true, required: false
  private _sourceKeyId?: string; 
  public get sourceKeyId() {
    return this.getStringAttribute('source_key_id');
  }
  public set sourceKeyId(value: string) {
    this._sourceKeyId = value;
  }
  public resetSourceKeyId() {
    this._sourceKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKeyIdInput() {
    return this._sourceKeyId;
  }

  // source_key_tier - computed: false, optional: true, required: false
  private _sourceKeyTier?: string; 
  public get sourceKeyTier() {
    return this.getStringAttribute('source_key_tier');
  }
  public set sourceKeyTier(value: string) {
    this._sourceKeyTier = value;
  }
  public resetSourceKeyTier() {
    this._sourceKeyTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKeyTierInput() {
    return this._sourceKeyTier;
  }
}

export class GcpKeyAddVersionList extends cdktf.ComplexList {
  public internalValue? : GcpKeyAddVersion[] | cdktf.IResolvable

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
  public get(index: number): GcpKeyAddVersionOutputReference {
    return new GcpKeyAddVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GcpKeyEnableRotation {
  /**
  * Algorithm of the rotated key. Not valid if key_source is native.  Options: RSA_SIGN_PSS_2048_SHA256, RSA_SIGN_PSS_3072_SHA256, RSA_SIGN_PSS_4096_SHA256, RSA_SIGN_PSS_4096_SHA512, RSA_SIGN_PKCS1_2048_SHA256, RSA_SIGN_PKCS1_3072_SHA256, RSA_SIGN_PKCS1_4096_SHA256, RSA_SIGN_PKCS1_4096_SHA512, EC_SIGN_P256_SHA256, EC_SIGN_P384_SHA384, EC_SIGN_SECP256K1_SHA256, RSA_DECRYPT_OAEP_2048_SHA256, RSA_DECRYPT_OAEP_3072_SHA256, RSA_DECRYPT_OAEP_4096_SHA256, RSA_DECRYPT_OAEP_4096_SHA512 and GOOGLE_SYMMETRIC_ENCRYPTION. EC_SIGN_SECP256K1_SHA256 is only valid if protection_level is HSM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#algorithm GcpKey#algorithm}
  */
  readonly algorithm?: string;
  /**
  * ID of the domain in which DSM keys will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#dsm_domain_id GcpKey#dsm_domain_id}
  */
  readonly dsmDomainId?: string;
  /**
  * ID of the partition in which HSM keys will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#hsm_partition_id GcpKey#hsm_partition_id}
  */
  readonly hsmPartitionId?: string;
  /**
  * ID of the scheduler job that will perform key rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#job_config_id GcpKey#job_config_id}
  */
  readonly jobConfigId: string;
  /**
  * Source of the key material. Options: native, ciphertrust, dsm and hsm-luna.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#key_source GcpKey#key_source}
  */
  readonly keySource: string;
}

export function gcpKeyEnableRotationToTerraform(struct?: GcpKeyEnableRotationOutputReference | GcpKeyEnableRotation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    dsm_domain_id: cdktf.stringToTerraform(struct!.dsmDomainId),
    hsm_partition_id: cdktf.stringToTerraform(struct!.hsmPartitionId),
    job_config_id: cdktf.stringToTerraform(struct!.jobConfigId),
    key_source: cdktf.stringToTerraform(struct!.keySource),
  }
}


export function gcpKeyEnableRotationToHclTerraform(struct?: GcpKeyEnableRotationOutputReference | GcpKeyEnableRotation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dsm_domain_id: {
      value: cdktf.stringToHclTerraform(struct!.dsmDomainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hsm_partition_id: {
      value: cdktf.stringToHclTerraform(struct!.hsmPartitionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_config_id: {
      value: cdktf.stringToHclTerraform(struct!.jobConfigId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_source: {
      value: cdktf.stringToHclTerraform(struct!.keySource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpKeyEnableRotationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpKeyEnableRotation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._dsmDomainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsmDomainId = this._dsmDomainId;
    }
    if (this._hsmPartitionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsmPartitionId = this._hsmPartitionId;
    }
    if (this._jobConfigId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobConfigId = this._jobConfigId;
    }
    if (this._keySource !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySource = this._keySource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpKeyEnableRotation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._dsmDomainId = undefined;
      this._hsmPartitionId = undefined;
      this._jobConfigId = undefined;
      this._keySource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._dsmDomainId = value.dsmDomainId;
      this._hsmPartitionId = value.hsmPartitionId;
      this._jobConfigId = value.jobConfigId;
      this._keySource = value.keySource;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // dsm_domain_id - computed: false, optional: true, required: false
  private _dsmDomainId?: string; 
  public get dsmDomainId() {
    return this.getStringAttribute('dsm_domain_id');
  }
  public set dsmDomainId(value: string) {
    this._dsmDomainId = value;
  }
  public resetDsmDomainId() {
    this._dsmDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsmDomainIdInput() {
    return this._dsmDomainId;
  }

  // hsm_partition_id - computed: false, optional: true, required: false
  private _hsmPartitionId?: string; 
  public get hsmPartitionId() {
    return this.getStringAttribute('hsm_partition_id');
  }
  public set hsmPartitionId(value: string) {
    this._hsmPartitionId = value;
  }
  public resetHsmPartitionId() {
    this._hsmPartitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmPartitionIdInput() {
    return this._hsmPartitionId;
  }

  // job_config_id - computed: false, optional: false, required: true
  private _jobConfigId?: string; 
  public get jobConfigId() {
    return this.getStringAttribute('job_config_id');
  }
  public set jobConfigId(value: string) {
    this._jobConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobConfigIdInput() {
    return this._jobConfigId;
  }

  // key_source - computed: false, optional: false, required: true
  private _keySource?: string; 
  public get keySource() {
    return this.getStringAttribute('key_source');
  }
  public set keySource(value: string) {
    this._keySource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keySourceInput() {
    return this._keySource;
  }
}
export interface GcpKeyUploadKey {
  /**
  * DSM, HSM or CipherTrust key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#source_key_identifier GcpKey#source_key_identifier}
  */
  readonly sourceKeyIdentifier: string;
  /**
  * Source of the key. Options: local, dsm and hsm-luna. Default is local.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#source_key_tier GcpKey#source_key_tier}
  */
  readonly sourceKeyTier?: string;
}

export function gcpKeyUploadKeyToTerraform(struct?: GcpKeyUploadKeyOutputReference | GcpKeyUploadKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_key_identifier: cdktf.stringToTerraform(struct!.sourceKeyIdentifier),
    source_key_tier: cdktf.stringToTerraform(struct!.sourceKeyTier),
  }
}


export function gcpKeyUploadKeyToHclTerraform(struct?: GcpKeyUploadKeyOutputReference | GcpKeyUploadKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_key_identifier: {
      value: cdktf.stringToHclTerraform(struct!.sourceKeyIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_key_tier: {
      value: cdktf.stringToHclTerraform(struct!.sourceKeyTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpKeyUploadKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpKeyUploadKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceKeyIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceKeyIdentifier = this._sourceKeyIdentifier;
    }
    if (this._sourceKeyTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceKeyTier = this._sourceKeyTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpKeyUploadKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceKeyIdentifier = undefined;
      this._sourceKeyTier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceKeyIdentifier = value.sourceKeyIdentifier;
      this._sourceKeyTier = value.sourceKeyTier;
    }
  }

  // source_key_identifier - computed: false, optional: false, required: true
  private _sourceKeyIdentifier?: string; 
  public get sourceKeyIdentifier() {
    return this.getStringAttribute('source_key_identifier');
  }
  public set sourceKeyIdentifier(value: string) {
    this._sourceKeyIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKeyIdentifierInput() {
    return this._sourceKeyIdentifier;
  }

  // source_key_tier - computed: false, optional: true, required: false
  private _sourceKeyTier?: string; 
  public get sourceKeyTier() {
    return this.getStringAttribute('source_key_tier');
  }
  public set sourceKeyTier(value: string) {
    this._sourceKeyTier = value;
  }
  public resetSourceKeyTier() {
    this._sourceKeyTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKeyTierInput() {
    return this._sourceKeyTier;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key ciphertrust_gcp_key}
*/
export class GcpKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_gcp_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpKey to import
  * @param importFromId The id of the existing GcpKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_gcp_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_key ciphertrust_gcp_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpKeyConfig
  */
  public constructor(scope: Construct, id: string, config: GcpKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_gcp_key',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3',
        providerVersionConstraint: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithm = config.algorithm;
    this._disableAllVersions = config.disableAllVersions;
    this._disableVersions = config.disableVersions;
    this._enableAllVersions = config.enableAllVersions;
    this._enableVersions = config.enableVersions;
    this._keyLabels = config.keyLabels;
    this._keyRing = config.keyRing;
    this._name = config.name;
    this._nextRotationTime = config.nextRotationTime;
    this._primaryVersion = config.primaryVersion;
    this._protectionLevel = config.protectionLevel;
    this._purpose = config.purpose;
    this._rotationPeriod = config.rotationPeriod;
    this._scheduleDestroyVersions = config.scheduleDestroyVersions;
    this._addVersion.internalValue = config.addVersion;
    this._enableRotation.internalValue = config.enableRotation;
    this._uploadKey.internalValue = config.uploadKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // cloud_name - computed: true, optional: false, required: false
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }

  // create_status - computed: true, optional: false, required: false
  public get createStatus() {
    return this.getStringAttribute('create_status');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // disable_all_versions - computed: false, optional: true, required: false
  private _disableAllVersions?: boolean | cdktf.IResolvable; 
  public get disableAllVersions() {
    return this.getBooleanAttribute('disable_all_versions');
  }
  public set disableAllVersions(value: boolean | cdktf.IResolvable) {
    this._disableAllVersions = value;
  }
  public resetDisableAllVersions() {
    this._disableAllVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAllVersionsInput() {
    return this._disableAllVersions;
  }

  // disable_versions - computed: false, optional: true, required: false
  private _disableVersions?: number[]; 
  public get disableVersions() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('disable_versions')));
  }
  public set disableVersions(value: number[]) {
    this._disableVersions = value;
  }
  public resetDisableVersions() {
    this._disableVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVersionsInput() {
    return this._disableVersions;
  }

  // enable_all_versions - computed: false, optional: true, required: false
  private _enableAllVersions?: boolean | cdktf.IResolvable; 
  public get enableAllVersions() {
    return this.getBooleanAttribute('enable_all_versions');
  }
  public set enableAllVersions(value: boolean | cdktf.IResolvable) {
    this._enableAllVersions = value;
  }
  public resetEnableAllVersions() {
    this._enableAllVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAllVersionsInput() {
    return this._enableAllVersions;
  }

  // enable_versions - computed: false, optional: true, required: false
  private _enableVersions?: number[]; 
  public get enableVersions() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('enable_versions')));
  }
  public set enableVersions(value: number[]) {
    this._enableVersions = value;
  }
  public resetEnableVersions() {
    this._enableVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVersionsInput() {
    return this._enableVersions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // key_labels - computed: false, optional: true, required: false
  private _keyLabels?: { [key: string]: string }; 
  public get keyLabels() {
    return this.getStringMapAttribute('key_labels');
  }
  public set keyLabels(value: { [key: string]: string }) {
    this._keyLabels = value;
  }
  public resetKeyLabels() {
    this._keyLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyLabelsInput() {
    return this._keyLabels;
  }

  // key_ring - computed: false, optional: false, required: true
  private _keyRing?: string; 
  public get keyRing() {
    return this.getStringAttribute('key_ring');
  }
  public set keyRing(value: string) {
    this._keyRing = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRingInput() {
    return this._keyRing;
  }

  // key_ring_name - computed: true, optional: false, required: false
  public get keyRingName() {
    return this.getStringAttribute('key_ring_name');
  }

  // key_versions - computed: true, optional: false, required: false
  private _keyVersions = new GcpKeyKeyVersionsList(this, "key_versions", false);
  public get keyVersions() {
    return this._keyVersions;
  }

  // keyring_id - computed: true, optional: false, required: false
  public get keyringId() {
    return this.getStringAttribute('keyring_id');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // location_id - computed: true, optional: false, required: false
  public get locationId() {
    return this.getStringAttribute('location_id');
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

  // next_rotation_time - computed: false, optional: true, required: false
  private _nextRotationTime?: string; 
  public get nextRotationTime() {
    return this.getStringAttribute('next_rotation_time');
  }
  public set nextRotationTime(value: string) {
    this._nextRotationTime = value;
  }
  public resetNextRotationTime() {
    this._nextRotationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextRotationTimeInput() {
    return this._nextRotationTime;
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getStringAttribute('primary');
  }

  // primary_version - computed: false, optional: true, required: false
  private _primaryVersion?: number; 
  public get primaryVersion() {
    return this.getNumberAttribute('primary_version');
  }
  public set primaryVersion(value: number) {
    this._primaryVersion = value;
  }
  public resetPrimaryVersion() {
    this._primaryVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryVersionInput() {
    return this._primaryVersion;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // protection_level - computed: false, optional: true, required: false
  private _protectionLevel?: string; 
  public get protectionLevel() {
    return this.getStringAttribute('protection_level');
  }
  public set protectionLevel(value: string) {
    this._protectionLevel = value;
  }
  public resetProtectionLevel() {
    this._protectionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionLevelInput() {
    return this._protectionLevel;
  }

  // purpose - computed: true, optional: true, required: false
  private _purpose?: string; 
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string) {
    this._purpose = value;
  }
  public resetPurpose() {
    this._purpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose;
  }

  // rotation_period - computed: false, optional: true, required: false
  private _rotationPeriod?: string; 
  public get rotationPeriod() {
    return this.getStringAttribute('rotation_period');
  }
  public set rotationPeriod(value: string) {
    this._rotationPeriod = value;
  }
  public resetRotationPeriod() {
    this._rotationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPeriodInput() {
    return this._rotationPeriod;
  }

  // schedule_destroy_versions - computed: false, optional: true, required: false
  private _scheduleDestroyVersions?: number[]; 
  public get scheduleDestroyVersions() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('schedule_destroy_versions')));
  }
  public set scheduleDestroyVersions(value: number[]) {
    this._scheduleDestroyVersions = value;
  }
  public resetScheduleDestroyVersions() {
    this._scheduleDestroyVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleDestroyVersionsInput() {
    return this._scheduleDestroyVersions;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // add_version - computed: false, optional: true, required: false
  private _addVersion = new GcpKeyAddVersionList(this, "add_version", false);
  public get addVersion() {
    return this._addVersion;
  }
  public putAddVersion(value: GcpKeyAddVersion[] | cdktf.IResolvable) {
    this._addVersion.internalValue = value;
  }
  public resetAddVersion() {
    this._addVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addVersionInput() {
    return this._addVersion.internalValue;
  }

  // enable_rotation - computed: false, optional: true, required: false
  private _enableRotation = new GcpKeyEnableRotationOutputReference(this, "enable_rotation");
  public get enableRotation() {
    return this._enableRotation;
  }
  public putEnableRotation(value: GcpKeyEnableRotation) {
    this._enableRotation.internalValue = value;
  }
  public resetEnableRotation() {
    this._enableRotation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRotationInput() {
    return this._enableRotation.internalValue;
  }

  // upload_key - computed: false, optional: true, required: false
  private _uploadKey = new GcpKeyUploadKeyOutputReference(this, "upload_key");
  public get uploadKey() {
    return this._uploadKey;
  }
  public putUploadKey(value: GcpKeyUploadKey) {
    this._uploadKey.internalValue = value;
  }
  public resetUploadKey() {
    this._uploadKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadKeyInput() {
    return this._uploadKey.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.stringToTerraform(this._algorithm),
      disable_all_versions: cdktf.booleanToTerraform(this._disableAllVersions),
      disable_versions: cdktf.listMapper(cdktf.numberToTerraform, false)(this._disableVersions),
      enable_all_versions: cdktf.booleanToTerraform(this._enableAllVersions),
      enable_versions: cdktf.listMapper(cdktf.numberToTerraform, false)(this._enableVersions),
      key_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._keyLabels),
      key_ring: cdktf.stringToTerraform(this._keyRing),
      name: cdktf.stringToTerraform(this._name),
      next_rotation_time: cdktf.stringToTerraform(this._nextRotationTime),
      primary_version: cdktf.numberToTerraform(this._primaryVersion),
      protection_level: cdktf.stringToTerraform(this._protectionLevel),
      purpose: cdktf.stringToTerraform(this._purpose),
      rotation_period: cdktf.stringToTerraform(this._rotationPeriod),
      schedule_destroy_versions: cdktf.listMapper(cdktf.numberToTerraform, false)(this._scheduleDestroyVersions),
      add_version: cdktf.listMapper(gcpKeyAddVersionToTerraform, true)(this._addVersion.internalValue),
      enable_rotation: gcpKeyEnableRotationToTerraform(this._enableRotation.internalValue),
      upload_key: gcpKeyUploadKeyToTerraform(this._uploadKey.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_all_versions: {
        value: cdktf.booleanToHclTerraform(this._disableAllVersions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_versions: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._disableVersions),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      enable_all_versions: {
        value: cdktf.booleanToHclTerraform(this._enableAllVersions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_versions: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._enableVersions),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      key_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._keyLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      key_ring: {
        value: cdktf.stringToHclTerraform(this._keyRing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_rotation_time: {
        value: cdktf.stringToHclTerraform(this._nextRotationTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_version: {
        value: cdktf.numberToHclTerraform(this._primaryVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protection_level: {
        value: cdktf.stringToHclTerraform(this._protectionLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purpose: {
        value: cdktf.stringToHclTerraform(this._purpose),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation_period: {
        value: cdktf.stringToHclTerraform(this._rotationPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_destroy_versions: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._scheduleDestroyVersions),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      add_version: {
        value: cdktf.listMapperHcl(gcpKeyAddVersionToHclTerraform, true)(this._addVersion.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpKeyAddVersionList",
      },
      enable_rotation: {
        value: gcpKeyEnableRotationToHclTerraform(this._enableRotation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpKeyEnableRotationList",
      },
      upload_key: {
        value: gcpKeyUploadKeyToHclTerraform(this._uploadKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpKeyUploadKeyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
