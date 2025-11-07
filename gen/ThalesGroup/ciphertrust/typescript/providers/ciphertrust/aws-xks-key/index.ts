// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsXksKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Input parameter. Alias assigned to the the XKS key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#alias AwsXksKey#alias}
  */
  readonly alias?: string[];
  /**
  * (Updateable) Enable AWS autorotation on the key. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#auto_rotate AwsXksKey#auto_rotate}
  */
  readonly autoRotate?: boolean | cdktf.IResolvable;
  /**
  * Bypass the AWS key policy lockout safety check. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#bypass_policy_lockout_safety_check AwsXksKey#bypass_policy_lockout_safety_check}
  */
  readonly bypassPolicyLockoutSafetyCheck?: boolean | cdktf.IResolvable;
  /**
  * Specifies a symmetric or asymmetric key and the encryption\signing algorithms the key supports. Valid values: SYMMETRIC_DEFAULT, RSA_2048, RSA_3072, RSA_4096, ECC_NIST_P256, ECC_NIST_P384, ECC_NIST_P521 and ECC_SECG_P256K1. Default is SYMMETRIC_DEFAULT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#customer_master_key_spec AwsXksKey#customer_master_key_spec}
  */
  readonly customerMasterKeySpec?: string;
  /**
  * Description of the AWS key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#description AwsXksKey#description}
  */
  readonly description?: string;
  /**
  * (Updateable) Enable or disable the key. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#enable_key AwsXksKey#enable_key}
  */
  readonly enableKey?: boolean | cdktf.IResolvable;
  /**
  * Specifies the intended use of the key. RSA key options: ENCRYPT_DECRYPT, SIGN_VERIFY. Default is ENCRYPT_DECRYPT. EC key options: SIGN_VERIFY. Default is SIGN_VERIFY. Symmetric key options: ENCRYPT_DECRYPT. Default is ENCRYPT_DECRYPT. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#key_usage AwsXksKey#key_usage}
  */
  readonly keyUsage?: string;
  /**
  * Key users - roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#key_users_roles AwsXksKey#key_users_roles}
  */
  readonly keyUsersRoles?: string[];
  /**
  * Name or ID of the kms. Required unless replicating a multi-user key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#kms AwsXksKey#kms}
  */
  readonly kms?: string;
  /**
  * Creates or identifies a multi-region key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#multi_region AwsXksKey#multi_region}
  */
  readonly multiRegion?: boolean | cdktf.IResolvable;
  /**
  * Source of the CMK's key material.  Options: AWS_KMS, EXTERNAL, EXTERNAL_KEY_STORE, AWS_CLOUDHSM. AWS_KMS will create a native AWS key and is the default for AWS native key creation. EXTERNAL will create an external AWS key and is the default for import operations. This parameter is not required for upload operations. Origin is EXTERNAL_KEY_STORE for XKS/HYOK key and AWS_CLOUDHSM for key in CloudHSM key store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#origin AwsXksKey#origin}
  */
  readonly origin?: string;
  /**
  * (Updateable) Update the primary region of a multi-region key. Can only be set for a primary key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#primary_region AwsXksKey#primary_region}
  */
  readonly primaryRegion?: string;
  /**
  * AWS region in which to create a XKS key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#region AwsXksKey#region}
  */
  readonly region?: string;
  /**
  * (Updateable) Waiting period after the key is destroyed before the key is deleted. Only relevant when the resource is destroyed. Default is 7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#schedule_for_deletion_days AwsXksKey#schedule_for_deletion_days}
  */
  readonly scheduleForDeletionDays?: number;
  /**
  * A list of tags assigned to the XKS key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#tags AwsXksKey#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * enable_rotation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#enable_rotation AwsXksKey#enable_rotation}
  */
  readonly enableRotation?: AwsXksKeyEnableRotation;
  /**
  * import_key_material block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#import_key_material AwsXksKey#import_key_material}
  */
  readonly importKeyMaterial?: AwsXksKeyImportKeyMaterial;
  /**
  * key_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#key_policy AwsXksKey#key_policy}
  */
  readonly keyPolicy?: AwsXksKeyKeyPolicy;
  /**
  * local_hosted_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#local_hosted_params AwsXksKey#local_hosted_params}
  */
  readonly localHostedParams?: AwsXksKeyLocalHostedParams[] | cdktf.IResolvable;
  /**
  * replicate_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#replicate_key AwsXksKey#replicate_key}
  */
  readonly replicateKey?: AwsXksKeyReplicateKey;
  /**
  * upload_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#upload_key AwsXksKey#upload_key}
  */
  readonly uploadKey?: AwsXksKeyUploadKey;
}
export interface AwsXksKeyEnableRotation {
  /**
  * (Updateable) Disable encryption on the old key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#disable_encrypt AwsXksKey#disable_encrypt}
  */
  readonly disableEncrypt?: boolean | cdktf.IResolvable;
  /**
  * (Updateable) DSM domain ID, required if key_source is dsm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#dsm_domain_id AwsXksKey#dsm_domain_id}
  */
  readonly dsmDomainId?: string;
  /**
  * (Updateable) HSM Luna partition ID, required if key_source is hsm-luna.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#hsm_partition_id AwsXksKey#hsm_partition_id}
  */
  readonly hsmPartitionId?: string;
  /**
  * (Updateable) ID of the scheduler job that will perform key rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#job_config_id AwsXksKey#job_config_id}
  */
  readonly jobConfigId: string;
  /**
  * (Updateable) Source of the key material. Options: dsm, ciphertrust, hsm-luna, local
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#key_source AwsXksKey#key_source}
  */
  readonly keySource: string;
}

export function awsXksKeyEnableRotationToTerraform(struct?: AwsXksKeyEnableRotationOutputReference | AwsXksKeyEnableRotation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_encrypt: cdktf.booleanToTerraform(struct!.disableEncrypt),
    dsm_domain_id: cdktf.stringToTerraform(struct!.dsmDomainId),
    hsm_partition_id: cdktf.stringToTerraform(struct!.hsmPartitionId),
    job_config_id: cdktf.stringToTerraform(struct!.jobConfigId),
    key_source: cdktf.stringToTerraform(struct!.keySource),
  }
}


export function awsXksKeyEnableRotationToHclTerraform(struct?: AwsXksKeyEnableRotationOutputReference | AwsXksKeyEnableRotation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_encrypt: {
      value: cdktf.booleanToHclTerraform(struct!.disableEncrypt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class AwsXksKeyEnableRotationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsXksKeyEnableRotation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableEncrypt !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableEncrypt = this._disableEncrypt;
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

  public set internalValue(value: AwsXksKeyEnableRotation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableEncrypt = undefined;
      this._dsmDomainId = undefined;
      this._hsmPartitionId = undefined;
      this._jobConfigId = undefined;
      this._keySource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableEncrypt = value.disableEncrypt;
      this._dsmDomainId = value.dsmDomainId;
      this._hsmPartitionId = value.hsmPartitionId;
      this._jobConfigId = value.jobConfigId;
      this._keySource = value.keySource;
    }
  }

  // disable_encrypt - computed: false, optional: true, required: false
  private _disableEncrypt?: boolean | cdktf.IResolvable; 
  public get disableEncrypt() {
    return this.getBooleanAttribute('disable_encrypt');
  }
  public set disableEncrypt(value: boolean | cdktf.IResolvable) {
    this._disableEncrypt = value;
  }
  public resetDisableEncrypt() {
    this._disableEncrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEncryptInput() {
    return this._disableEncrypt;
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
export interface AwsXksKeyImportKeyMaterial {
  /**
  * (Updateable) Domain for the DSM key. Required if source_key_tier is dsm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#dsm_domain_id AwsXksKey#dsm_domain_id}
  */
  readonly dsmDomainId?: string;
  /**
  * (Updateable) Partition for the HSM Luna key. Required if source_key_tier is hsm-luna.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#hsm_partition_id AwsXksKey#hsm_partition_id}
  */
  readonly hsmPartitionId?: string;
  /**
  * (Updateable) Enable key material expiration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#key_expiration AwsXksKey#key_expiration}
  */
  readonly keyExpiration?: boolean | cdktf.IResolvable;
  /**
  * Name of the key created for key material.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#source_key_name AwsXksKey#source_key_name}
  */
  readonly sourceKeyName: string;
  /**
  * Source of the key. Options: local, dsm, hsm-luna. Default is local.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#source_key_tier AwsXksKey#source_key_tier}
  */
  readonly sourceKeyTier?: string;
  /**
  * (Updateable) Date of key material expiry in UTC time in RFC3339 format. For example, 2022-07-03T14:24:00Z.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#valid_to AwsXksKey#valid_to}
  */
  readonly validTo?: string;
}

export function awsXksKeyImportKeyMaterialToTerraform(struct?: AwsXksKeyImportKeyMaterialOutputReference | AwsXksKeyImportKeyMaterial): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dsm_domain_id: cdktf.stringToTerraform(struct!.dsmDomainId),
    hsm_partition_id: cdktf.stringToTerraform(struct!.hsmPartitionId),
    key_expiration: cdktf.booleanToTerraform(struct!.keyExpiration),
    source_key_name: cdktf.stringToTerraform(struct!.sourceKeyName),
    source_key_tier: cdktf.stringToTerraform(struct!.sourceKeyTier),
    valid_to: cdktf.stringToTerraform(struct!.validTo),
  }
}


export function awsXksKeyImportKeyMaterialToHclTerraform(struct?: AwsXksKeyImportKeyMaterialOutputReference | AwsXksKeyImportKeyMaterial): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    key_expiration: {
      value: cdktf.booleanToHclTerraform(struct!.keyExpiration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_key_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceKeyName),
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
    valid_to: {
      value: cdktf.stringToHclTerraform(struct!.validTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsXksKeyImportKeyMaterialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsXksKeyImportKeyMaterial | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dsmDomainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsmDomainId = this._dsmDomainId;
    }
    if (this._hsmPartitionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsmPartitionId = this._hsmPartitionId;
    }
    if (this._keyExpiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyExpiration = this._keyExpiration;
    }
    if (this._sourceKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceKeyName = this._sourceKeyName;
    }
    if (this._sourceKeyTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceKeyTier = this._sourceKeyTier;
    }
    if (this._validTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.validTo = this._validTo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsXksKeyImportKeyMaterial | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dsmDomainId = undefined;
      this._hsmPartitionId = undefined;
      this._keyExpiration = undefined;
      this._sourceKeyName = undefined;
      this._sourceKeyTier = undefined;
      this._validTo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dsmDomainId = value.dsmDomainId;
      this._hsmPartitionId = value.hsmPartitionId;
      this._keyExpiration = value.keyExpiration;
      this._sourceKeyName = value.sourceKeyName;
      this._sourceKeyTier = value.sourceKeyTier;
      this._validTo = value.validTo;
    }
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

  // key_expiration - computed: false, optional: true, required: false
  private _keyExpiration?: boolean | cdktf.IResolvable; 
  public get keyExpiration() {
    return this.getBooleanAttribute('key_expiration');
  }
  public set keyExpiration(value: boolean | cdktf.IResolvable) {
    this._keyExpiration = value;
  }
  public resetKeyExpiration() {
    this._keyExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyExpirationInput() {
    return this._keyExpiration;
  }

  // source_key_name - computed: false, optional: false, required: true
  private _sourceKeyName?: string; 
  public get sourceKeyName() {
    return this.getStringAttribute('source_key_name');
  }
  public set sourceKeyName(value: string) {
    this._sourceKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKeyNameInput() {
    return this._sourceKeyName;
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

  // valid_to - computed: false, optional: true, required: false
  private _validTo?: string; 
  public get validTo() {
    return this.getStringAttribute('valid_to');
  }
  public set validTo(value: string) {
    this._validTo = value;
  }
  public resetValidTo() {
    this._validTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validToInput() {
    return this._validTo;
  }
}
export interface AwsXksKeyKeyPolicy {
  /**
  * (Updateable) Other AWS accounts that can access to the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#external_accounts AwsXksKey#external_accounts}
  */
  readonly externalAccounts?: string[];
  /**
  * (Updateable) Key administrators - users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#key_admins AwsXksKey#key_admins}
  */
  readonly keyAdmins?: string[];
  /**
  * (Updateable) Key administrators - roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#key_admins_roles AwsXksKey#key_admins_roles}
  */
  readonly keyAdminsRoles?: string[];
  /**
  * (Updateable) Key users - users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#key_users AwsXksKey#key_users}
  */
  readonly keyUsers?: string[];
  /**
  * (Updateable) Key users - roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#key_users_roles AwsXksKey#key_users_roles}
  */
  readonly keyUsersRoles?: string[];
  /**
  * (Updateable) AWS key policy json.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#policy AwsXksKey#policy}
  */
  readonly policy?: string;
  /**
  * (Updateable) CipherTrust policy template ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#policy_template AwsXksKey#policy_template}
  */
  readonly policyTemplate?: string;
}

export function awsXksKeyKeyPolicyToTerraform(struct?: AwsXksKeyKeyPolicyOutputReference | AwsXksKeyKeyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalAccounts),
    key_admins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyAdmins),
    key_admins_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyAdminsRoles),
    key_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyUsers),
    key_users_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyUsersRoles),
    policy: cdktf.stringToTerraform(struct!.policy),
    policy_template: cdktf.stringToTerraform(struct!.policyTemplate),
  }
}


export function awsXksKeyKeyPolicyToHclTerraform(struct?: AwsXksKeyKeyPolicyOutputReference | AwsXksKeyKeyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalAccounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_admins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyAdmins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_admins_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyAdminsRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_users_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyUsersRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_template: {
      value: cdktf.stringToHclTerraform(struct!.policyTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsXksKeyKeyPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsXksKeyKeyPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalAccounts = this._externalAccounts;
    }
    if (this._keyAdmins !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAdmins = this._keyAdmins;
    }
    if (this._keyAdminsRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAdminsRoles = this._keyAdminsRoles;
    }
    if (this._keyUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUsers = this._keyUsers;
    }
    if (this._keyUsersRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUsersRoles = this._keyUsersRoles;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._policyTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyTemplate = this._policyTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsXksKeyKeyPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalAccounts = undefined;
      this._keyAdmins = undefined;
      this._keyAdminsRoles = undefined;
      this._keyUsers = undefined;
      this._keyUsersRoles = undefined;
      this._policy = undefined;
      this._policyTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalAccounts = value.externalAccounts;
      this._keyAdmins = value.keyAdmins;
      this._keyAdminsRoles = value.keyAdminsRoles;
      this._keyUsers = value.keyUsers;
      this._keyUsersRoles = value.keyUsersRoles;
      this._policy = value.policy;
      this._policyTemplate = value.policyTemplate;
    }
  }

  // external_accounts - computed: true, optional: true, required: false
  private _externalAccounts?: string[]; 
  public get externalAccounts() {
    return this.getListAttribute('external_accounts');
  }
  public set externalAccounts(value: string[]) {
    this._externalAccounts = value;
  }
  public resetExternalAccounts() {
    this._externalAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAccountsInput() {
    return this._externalAccounts;
  }

  // key_admins - computed: true, optional: true, required: false
  private _keyAdmins?: string[]; 
  public get keyAdmins() {
    return this.getListAttribute('key_admins');
  }
  public set keyAdmins(value: string[]) {
    this._keyAdmins = value;
  }
  public resetKeyAdmins() {
    this._keyAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAdminsInput() {
    return this._keyAdmins;
  }

  // key_admins_roles - computed: true, optional: true, required: false
  private _keyAdminsRoles?: string[]; 
  public get keyAdminsRoles() {
    return this.getListAttribute('key_admins_roles');
  }
  public set keyAdminsRoles(value: string[]) {
    this._keyAdminsRoles = value;
  }
  public resetKeyAdminsRoles() {
    this._keyAdminsRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAdminsRolesInput() {
    return this._keyAdminsRoles;
  }

  // key_users - computed: true, optional: true, required: false
  private _keyUsers?: string[]; 
  public get keyUsers() {
    return this.getListAttribute('key_users');
  }
  public set keyUsers(value: string[]) {
    this._keyUsers = value;
  }
  public resetKeyUsers() {
    this._keyUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsersInput() {
    return this._keyUsers;
  }

  // key_users_roles - computed: true, optional: true, required: false
  private _keyUsersRoles?: string[]; 
  public get keyUsersRoles() {
    return this.getListAttribute('key_users_roles');
  }
  public set keyUsersRoles(value: string[]) {
    this._keyUsersRoles = value;
  }
  public resetKeyUsersRoles() {
    this._keyUsersRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsersRolesInput() {
    return this._keyUsersRoles;
  }

  // policy - computed: true, optional: true, required: false
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

  // policy_template - computed: true, optional: true, required: false
  private _policyTemplate?: string; 
  public get policyTemplate() {
    return this.getStringAttribute('policy_template');
  }
  public set policyTemplate(value: string) {
    this._policyTemplate = value;
  }
  public resetPolicyTemplate() {
    this._policyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTemplateInput() {
    return this._policyTemplate;
  }
}
export interface AwsXksKeyLocalHostedParams {
  /**
  * Parameter to indicate if AWS XKS key is blocked for any data plane operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#blocked AwsXksKey#blocked}
  */
  readonly blocked: boolean | cdktf.IResolvable;
  /**
  * ID of the custom keystore where xks key is to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#custom_key_store_id AwsXksKey#custom_key_store_id}
  */
  readonly customKeyStoreId?: string;
  /**
  * Parameter to indicate if AWS XKS key is linked with AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#linked AwsXksKey#linked}
  */
  readonly linked?: boolean | cdktf.IResolvable;
  /**
  * ID of the source key for AWS XKS key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#source_key_id AwsXksKey#source_key_id}
  */
  readonly sourceKeyId?: string;
  /**
  * Source key tier for AWS xks key - hsm-luna or local. Default is hsm-luna.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#source_key_tier AwsXksKey#source_key_tier}
  */
  readonly sourceKeyTier?: string;
}

export function awsXksKeyLocalHostedParamsToTerraform(struct?: AwsXksKeyLocalHostedParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocked: cdktf.booleanToTerraform(struct!.blocked),
    custom_key_store_id: cdktf.stringToTerraform(struct!.customKeyStoreId),
    linked: cdktf.booleanToTerraform(struct!.linked),
    source_key_id: cdktf.stringToTerraform(struct!.sourceKeyId),
    source_key_tier: cdktf.stringToTerraform(struct!.sourceKeyTier),
  }
}


export function awsXksKeyLocalHostedParamsToHclTerraform(struct?: AwsXksKeyLocalHostedParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocked: {
      value: cdktf.booleanToHclTerraform(struct!.blocked),
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
    linked: {
      value: cdktf.booleanToHclTerraform(struct!.linked),
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

export class AwsXksKeyLocalHostedParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsXksKeyLocalHostedParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blocked !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocked = this._blocked;
    }
    if (this._customKeyStoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customKeyStoreId = this._customKeyStoreId;
    }
    if (this._linked !== undefined) {
      hasAnyValues = true;
      internalValueResult.linked = this._linked;
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

  public set internalValue(value: AwsXksKeyLocalHostedParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blocked = undefined;
      this._customKeyStoreId = undefined;
      this._linked = undefined;
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
      this._blocked = value.blocked;
      this._customKeyStoreId = value.customKeyStoreId;
      this._linked = value.linked;
      this._sourceKeyId = value.sourceKeyId;
      this._sourceKeyTier = value.sourceKeyTier;
    }
  }

  // blocked - computed: false, optional: false, required: true
  private _blocked?: boolean | cdktf.IResolvable; 
  public get blocked() {
    return this.getBooleanAttribute('blocked');
  }
  public set blocked(value: boolean | cdktf.IResolvable) {
    this._blocked = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedInput() {
    return this._blocked;
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

  // linked - computed: false, optional: true, required: false
  private _linked?: boolean | cdktf.IResolvable; 
  public get linked() {
    return this.getBooleanAttribute('linked');
  }
  public set linked(value: boolean | cdktf.IResolvable) {
    this._linked = value;
  }
  public resetLinked() {
    this._linked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedInput() {
    return this._linked;
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

export class AwsXksKeyLocalHostedParamsList extends cdktf.ComplexList {
  public internalValue? : AwsXksKeyLocalHostedParams[] | cdktf.IResolvable

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
  public get(index: number): AwsXksKeyLocalHostedParamsOutputReference {
    return new AwsXksKeyLocalHostedParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsXksKeyReplicateKey {
  /**
  * Import key material to a replicated external key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#import_key_material AwsXksKey#import_key_material}
  */
  readonly importKeyMaterial?: boolean | cdktf.IResolvable;
  /**
  * Enable key expiration of the replicated key. Only applies to external keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#key_expiration AwsXksKey#key_expiration}
  */
  readonly keyExpiration?: boolean | cdktf.IResolvable;
  /**
  * CipherTrust key ID of the key to replicate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#key_id AwsXksKey#key_id}
  */
  readonly keyId: string;
  /**
  * Update the primary key region to the replicated key's region following replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#make_primary AwsXksKey#make_primary}
  */
  readonly makePrimary?: boolean | cdktf.IResolvable;
  /**
  * Date the key material of the replicated key expires. Only applies to external keys. Set as UTC time in RFC3339 format. For example, 2022-07-03T14:24:00Z. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#valid_to AwsXksKey#valid_to}
  */
  readonly validTo?: string;
}

export function awsXksKeyReplicateKeyToTerraform(struct?: AwsXksKeyReplicateKeyOutputReference | AwsXksKeyReplicateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    import_key_material: cdktf.booleanToTerraform(struct!.importKeyMaterial),
    key_expiration: cdktf.booleanToTerraform(struct!.keyExpiration),
    key_id: cdktf.stringToTerraform(struct!.keyId),
    make_primary: cdktf.booleanToTerraform(struct!.makePrimary),
    valid_to: cdktf.stringToTerraform(struct!.validTo),
  }
}


export function awsXksKeyReplicateKeyToHclTerraform(struct?: AwsXksKeyReplicateKeyOutputReference | AwsXksKeyReplicateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    import_key_material: {
      value: cdktf.booleanToHclTerraform(struct!.importKeyMaterial),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_expiration: {
      value: cdktf.booleanToHclTerraform(struct!.keyExpiration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    make_primary: {
      value: cdktf.booleanToHclTerraform(struct!.makePrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    valid_to: {
      value: cdktf.stringToHclTerraform(struct!.validTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsXksKeyReplicateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsXksKeyReplicateKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._importKeyMaterial !== undefined) {
      hasAnyValues = true;
      internalValueResult.importKeyMaterial = this._importKeyMaterial;
    }
    if (this._keyExpiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyExpiration = this._keyExpiration;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._makePrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.makePrimary = this._makePrimary;
    }
    if (this._validTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.validTo = this._validTo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsXksKeyReplicateKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._importKeyMaterial = undefined;
      this._keyExpiration = undefined;
      this._keyId = undefined;
      this._makePrimary = undefined;
      this._validTo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._importKeyMaterial = value.importKeyMaterial;
      this._keyExpiration = value.keyExpiration;
      this._keyId = value.keyId;
      this._makePrimary = value.makePrimary;
      this._validTo = value.validTo;
    }
  }

  // import_key_material - computed: false, optional: true, required: false
  private _importKeyMaterial?: boolean | cdktf.IResolvable; 
  public get importKeyMaterial() {
    return this.getBooleanAttribute('import_key_material');
  }
  public set importKeyMaterial(value: boolean | cdktf.IResolvable) {
    this._importKeyMaterial = value;
  }
  public resetImportKeyMaterial() {
    this._importKeyMaterial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importKeyMaterialInput() {
    return this._importKeyMaterial;
  }

  // key_expiration - computed: false, optional: true, required: false
  private _keyExpiration?: boolean | cdktf.IResolvable; 
  public get keyExpiration() {
    return this.getBooleanAttribute('key_expiration');
  }
  public set keyExpiration(value: boolean | cdktf.IResolvable) {
    this._keyExpiration = value;
  }
  public resetKeyExpiration() {
    this._keyExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyExpirationInput() {
    return this._keyExpiration;
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // make_primary - computed: false, optional: true, required: false
  private _makePrimary?: boolean | cdktf.IResolvable; 
  public get makePrimary() {
    return this.getBooleanAttribute('make_primary');
  }
  public set makePrimary(value: boolean | cdktf.IResolvable) {
    this._makePrimary = value;
  }
  public resetMakePrimary() {
    this._makePrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get makePrimaryInput() {
    return this._makePrimary;
  }

  // valid_to - computed: false, optional: true, required: false
  private _validTo?: string; 
  public get validTo() {
    return this.getStringAttribute('valid_to');
  }
  public set validTo(value: string) {
    this._validTo = value;
  }
  public resetValidTo() {
    this._validTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validToInput() {
    return this._validTo;
  }
}
export interface AwsXksKeyUploadKey {
  /**
  * Enable key expiration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#key_expiration AwsXksKey#key_expiration}
  */
  readonly keyExpiration?: boolean | cdktf.IResolvable;
  /**
  * DSM or CipherTrust key ID to upload to AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#source_key_identifier AwsXksKey#source_key_identifier}
  */
  readonly sourceKeyIdentifier: string;
  /**
  * Source of the key. Options: local, dsm and hsm-luna. Default is local.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#source_key_tier AwsXksKey#source_key_tier}
  */
  readonly sourceKeyTier?: string;
  /**
  * Date of key expiry in UTC time in RFC3339 format. For example, 2022-07-03T14:24:00Z.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#valid_to AwsXksKey#valid_to}
  */
  readonly validTo?: string;
}

export function awsXksKeyUploadKeyToTerraform(struct?: AwsXksKeyUploadKeyOutputReference | AwsXksKeyUploadKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_expiration: cdktf.booleanToTerraform(struct!.keyExpiration),
    source_key_identifier: cdktf.stringToTerraform(struct!.sourceKeyIdentifier),
    source_key_tier: cdktf.stringToTerraform(struct!.sourceKeyTier),
    valid_to: cdktf.stringToTerraform(struct!.validTo),
  }
}


export function awsXksKeyUploadKeyToHclTerraform(struct?: AwsXksKeyUploadKeyOutputReference | AwsXksKeyUploadKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_expiration: {
      value: cdktf.booleanToHclTerraform(struct!.keyExpiration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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
    valid_to: {
      value: cdktf.stringToHclTerraform(struct!.validTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsXksKeyUploadKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsXksKeyUploadKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyExpiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyExpiration = this._keyExpiration;
    }
    if (this._sourceKeyIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceKeyIdentifier = this._sourceKeyIdentifier;
    }
    if (this._sourceKeyTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceKeyTier = this._sourceKeyTier;
    }
    if (this._validTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.validTo = this._validTo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsXksKeyUploadKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyExpiration = undefined;
      this._sourceKeyIdentifier = undefined;
      this._sourceKeyTier = undefined;
      this._validTo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyExpiration = value.keyExpiration;
      this._sourceKeyIdentifier = value.sourceKeyIdentifier;
      this._sourceKeyTier = value.sourceKeyTier;
      this._validTo = value.validTo;
    }
  }

  // key_expiration - computed: false, optional: true, required: false
  private _keyExpiration?: boolean | cdktf.IResolvable; 
  public get keyExpiration() {
    return this.getBooleanAttribute('key_expiration');
  }
  public set keyExpiration(value: boolean | cdktf.IResolvable) {
    this._keyExpiration = value;
  }
  public resetKeyExpiration() {
    this._keyExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyExpirationInput() {
    return this._keyExpiration;
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

  // valid_to - computed: false, optional: true, required: false
  private _validTo?: string; 
  public get validTo() {
    return this.getStringAttribute('valid_to');
  }
  public set validTo(value: string) {
    this._validTo = value;
  }
  public resetValidTo() {
    this._validTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validToInput() {
    return this._validTo;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key ciphertrust_aws_xks_key}
*/
export class AwsXksKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_aws_xks_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsXksKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsXksKey to import
  * @param importFromId The id of the existing AwsXksKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsXksKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_aws_xks_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_xks_key ciphertrust_aws_xks_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsXksKeyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AwsXksKeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_aws_xks_key',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._autoRotate = config.autoRotate;
    this._bypassPolicyLockoutSafetyCheck = config.bypassPolicyLockoutSafetyCheck;
    this._customerMasterKeySpec = config.customerMasterKeySpec;
    this._description = config.description;
    this._enableKey = config.enableKey;
    this._keyUsage = config.keyUsage;
    this._keyUsersRoles = config.keyUsersRoles;
    this._kms = config.kms;
    this._multiRegion = config.multiRegion;
    this._origin = config.origin;
    this._primaryRegion = config.primaryRegion;
    this._region = config.region;
    this._scheduleForDeletionDays = config.scheduleForDeletionDays;
    this._tags = config.tags;
    this._enableRotation.internalValue = config.enableRotation;
    this._importKeyMaterial.internalValue = config.importKeyMaterial;
    this._keyPolicy.internalValue = config.keyPolicy;
    this._localHostedParams.internalValue = config.localHostedParams;
    this._replicateKey.internalValue = config.replicateKey;
    this._uploadKey.internalValue = config.uploadKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: true, required: false
  private _alias?: string[]; 
  public get alias() {
    return cdktf.Fn.tolist(this.getListAttribute('alias'));
  }
  public set alias(value: string[]) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_rotate - computed: false, optional: true, required: false
  private _autoRotate?: boolean | cdktf.IResolvable; 
  public get autoRotate() {
    return this.getBooleanAttribute('auto_rotate');
  }
  public set autoRotate(value: boolean | cdktf.IResolvable) {
    this._autoRotate = value;
  }
  public resetAutoRotate() {
    this._autoRotate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRotateInput() {
    return this._autoRotate;
  }

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // aws_custom_key_store_id - computed: true, optional: false, required: false
  public get awsCustomKeyStoreId() {
    return this.getStringAttribute('aws_custom_key_store_id');
  }

  // aws_key_id - computed: true, optional: false, required: false
  public get awsKeyId() {
    return this.getStringAttribute('aws_key_id');
  }

  // aws_xks_key_id - computed: true, optional: false, required: false
  public get awsXksKeyId() {
    return this.getStringAttribute('aws_xks_key_id');
  }

  // blocked - computed: true, optional: false, required: false
  public get blocked() {
    return this.getBooleanAttribute('blocked');
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

  // cloud_name - computed: true, optional: false, required: false
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_key_store_id - computed: true, optional: false, required: false
  public get customKeyStoreId() {
    return this.getStringAttribute('custom_key_store_id');
  }

  // customer_master_key_spec - computed: true, optional: true, required: false
  private _customerMasterKeySpec?: string; 
  public get customerMasterKeySpec() {
    return this.getStringAttribute('customer_master_key_spec');
  }
  public set customerMasterKeySpec(value: string) {
    this._customerMasterKeySpec = value;
  }
  public resetCustomerMasterKeySpec() {
    this._customerMasterKeySpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerMasterKeySpecInput() {
    return this._customerMasterKeySpec;
  }

  // deletion_date - computed: true, optional: false, required: false
  public get deletionDate() {
    return this.getStringAttribute('deletion_date');
  }

  // description - computed: true, optional: true, required: false
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

  // enable_key - computed: false, optional: true, required: false
  private _enableKey?: boolean | cdktf.IResolvable; 
  public get enableKey() {
    return this.getBooleanAttribute('enable_key');
  }
  public set enableKey(value: boolean | cdktf.IResolvable) {
    this._enableKey = value;
  }
  public resetEnableKey() {
    this._enableKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKeyInput() {
    return this._enableKey;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // encryption_algorithms - computed: true, optional: false, required: false
  public get encryptionAlgorithms() {
    return this.getListAttribute('encryption_algorithms');
  }

  // expiration_model - computed: true, optional: false, required: false
  public get expirationModel() {
    return this.getStringAttribute('expiration_model');
  }

  // external_accounts - computed: true, optional: false, required: false
  public get externalAccounts() {
    return this.getListAttribute('external_accounts');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_admins - computed: true, optional: false, required: false
  public get keyAdmins() {
    return this.getListAttribute('key_admins');
  }

  // key_admins_roles - computed: true, optional: false, required: false
  public get keyAdminsRoles() {
    return this.getListAttribute('key_admins_roles');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // key_manager - computed: true, optional: false, required: false
  public get keyManager() {
    return this.getStringAttribute('key_manager');
  }

  // key_material_origin - computed: true, optional: false, required: false
  public get keyMaterialOrigin() {
    return this.getStringAttribute('key_material_origin');
  }

  // key_rotation_enabled - computed: true, optional: false, required: false
  public get keyRotationEnabled() {
    return this.getBooleanAttribute('key_rotation_enabled');
  }

  // key_source - computed: true, optional: false, required: false
  public get keySource() {
    return this.getStringAttribute('key_source');
  }

  // key_source_container_id - computed: true, optional: false, required: false
  public get keySourceContainerId() {
    return this.getStringAttribute('key_source_container_id');
  }

  // key_source_container_name - computed: true, optional: false, required: false
  public get keySourceContainerName() {
    return this.getStringAttribute('key_source_container_name');
  }

  // key_state - computed: true, optional: false, required: false
  public get keyState() {
    return this.getStringAttribute('key_state');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // key_usage - computed: true, optional: true, required: false
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

  // key_users - computed: true, optional: false, required: false
  public get keyUsers() {
    return this.getListAttribute('key_users');
  }

  // key_users_roles - computed: true, optional: true, required: false
  private _keyUsersRoles?: string[]; 
  public get keyUsersRoles() {
    return this.getListAttribute('key_users_roles');
  }
  public set keyUsersRoles(value: string[]) {
    this._keyUsersRoles = value;
  }
  public resetKeyUsersRoles() {
    this._keyUsersRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsersRolesInput() {
    return this._keyUsersRoles;
  }

  // kms - computed: true, optional: true, required: false
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

  // kms_id - computed: true, optional: false, required: false
  public get kmsId() {
    return this.getStringAttribute('kms_id');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // linked - computed: true, optional: false, required: false
  public get linked() {
    return this.getBooleanAttribute('linked');
  }

  // local_key_id - computed: true, optional: false, required: false
  public get localKeyId() {
    return this.getStringAttribute('local_key_id');
  }

  // local_key_name - computed: true, optional: false, required: false
  public get localKeyName() {
    return this.getStringAttribute('local_key_name');
  }

  // multi_region - computed: true, optional: true, required: false
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

  // multi_region_key_type - computed: true, optional: false, required: false
  public get multiRegionKeyType() {
    return this.getStringAttribute('multi_region_key_type');
  }

  // multi_region_primary_key - computed: true, optional: false, required: false
  private _multiRegionPrimaryKey = new cdktf.StringMap(this, "multi_region_primary_key");
  public get multiRegionPrimaryKey() {
    return this._multiRegionPrimaryKey;
  }

  // multi_region_replica_keys - computed: true, optional: false, required: false
  private _multiRegionReplicaKeys = new cdktf.StringMapList(this, "multi_region_replica_keys", false);
  public get multiRegionReplicaKeys() {
    return this._multiRegionReplicaKeys;
  }

  // origin - computed: true, optional: true, required: false
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

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // policy_template_tag - computed: true, optional: false, required: false
  private _policyTemplateTag = new cdktf.StringMap(this, "policy_template_tag");
  public get policyTemplateTag() {
    return this._policyTemplateTag;
  }

  // primary_region - computed: false, optional: true, required: false
  private _primaryRegion?: string; 
  public get primaryRegion() {
    return this.getStringAttribute('primary_region');
  }
  public set primaryRegion(value: string) {
    this._primaryRegion = value;
  }
  public resetPrimaryRegion() {
    this._primaryRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryRegionInput() {
    return this._primaryRegion;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // replica_policy - computed: true, optional: false, required: false
  public get replicaPolicy() {
    return this.getStringAttribute('replica_policy');
  }

  // rotated_at - computed: true, optional: false, required: false
  public get rotatedAt() {
    return this.getStringAttribute('rotated_at');
  }

  // rotated_from - computed: true, optional: false, required: false
  public get rotatedFrom() {
    return this.getStringAttribute('rotated_from');
  }

  // rotated_to - computed: true, optional: false, required: false
  public get rotatedTo() {
    return this.getStringAttribute('rotated_to');
  }

  // rotation_status - computed: true, optional: false, required: false
  public get rotationStatus() {
    return this.getStringAttribute('rotation_status');
  }

  // schedule_for_deletion_days - computed: false, optional: true, required: false
  private _scheduleForDeletionDays?: number; 
  public get scheduleForDeletionDays() {
    return this.getNumberAttribute('schedule_for_deletion_days');
  }
  public set scheduleForDeletionDays(value: number) {
    this._scheduleForDeletionDays = value;
  }
  public resetScheduleForDeletionDays() {
    this._scheduleForDeletionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleForDeletionDaysInput() {
    return this._scheduleForDeletionDays;
  }

  // synced_at - computed: true, optional: false, required: false
  public get syncedAt() {
    return this.getStringAttribute('synced_at');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // valid_to - computed: true, optional: false, required: false
  public get validTo() {
    return this.getStringAttribute('valid_to');
  }

  // enable_rotation - computed: false, optional: true, required: false
  private _enableRotation = new AwsXksKeyEnableRotationOutputReference(this, "enable_rotation");
  public get enableRotation() {
    return this._enableRotation;
  }
  public putEnableRotation(value: AwsXksKeyEnableRotation) {
    this._enableRotation.internalValue = value;
  }
  public resetEnableRotation() {
    this._enableRotation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRotationInput() {
    return this._enableRotation.internalValue;
  }

  // import_key_material - computed: false, optional: true, required: false
  private _importKeyMaterial = new AwsXksKeyImportKeyMaterialOutputReference(this, "import_key_material");
  public get importKeyMaterial() {
    return this._importKeyMaterial;
  }
  public putImportKeyMaterial(value: AwsXksKeyImportKeyMaterial) {
    this._importKeyMaterial.internalValue = value;
  }
  public resetImportKeyMaterial() {
    this._importKeyMaterial.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importKeyMaterialInput() {
    return this._importKeyMaterial.internalValue;
  }

  // key_policy - computed: false, optional: true, required: false
  private _keyPolicy = new AwsXksKeyKeyPolicyOutputReference(this, "key_policy");
  public get keyPolicy() {
    return this._keyPolicy;
  }
  public putKeyPolicy(value: AwsXksKeyKeyPolicy) {
    this._keyPolicy.internalValue = value;
  }
  public resetKeyPolicy() {
    this._keyPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPolicyInput() {
    return this._keyPolicy.internalValue;
  }

  // local_hosted_params - computed: false, optional: true, required: false
  private _localHostedParams = new AwsXksKeyLocalHostedParamsList(this, "local_hosted_params", false);
  public get localHostedParams() {
    return this._localHostedParams;
  }
  public putLocalHostedParams(value: AwsXksKeyLocalHostedParams[] | cdktf.IResolvable) {
    this._localHostedParams.internalValue = value;
  }
  public resetLocalHostedParams() {
    this._localHostedParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localHostedParamsInput() {
    return this._localHostedParams.internalValue;
  }

  // replicate_key - computed: false, optional: true, required: false
  private _replicateKey = new AwsXksKeyReplicateKeyOutputReference(this, "replicate_key");
  public get replicateKey() {
    return this._replicateKey;
  }
  public putReplicateKey(value: AwsXksKeyReplicateKey) {
    this._replicateKey.internalValue = value;
  }
  public resetReplicateKey() {
    this._replicateKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicateKeyInput() {
    return this._replicateKey.internalValue;
  }

  // upload_key - computed: false, optional: true, required: false
  private _uploadKey = new AwsXksKeyUploadKeyOutputReference(this, "upload_key");
  public get uploadKey() {
    return this._uploadKey;
  }
  public putUploadKey(value: AwsXksKeyUploadKey) {
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
      alias: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alias),
      auto_rotate: cdktf.booleanToTerraform(this._autoRotate),
      bypass_policy_lockout_safety_check: cdktf.booleanToTerraform(this._bypassPolicyLockoutSafetyCheck),
      customer_master_key_spec: cdktf.stringToTerraform(this._customerMasterKeySpec),
      description: cdktf.stringToTerraform(this._description),
      enable_key: cdktf.booleanToTerraform(this._enableKey),
      key_usage: cdktf.stringToTerraform(this._keyUsage),
      key_users_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyUsersRoles),
      kms: cdktf.stringToTerraform(this._kms),
      multi_region: cdktf.booleanToTerraform(this._multiRegion),
      origin: cdktf.stringToTerraform(this._origin),
      primary_region: cdktf.stringToTerraform(this._primaryRegion),
      region: cdktf.stringToTerraform(this._region),
      schedule_for_deletion_days: cdktf.numberToTerraform(this._scheduleForDeletionDays),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      enable_rotation: awsXksKeyEnableRotationToTerraform(this._enableRotation.internalValue),
      import_key_material: awsXksKeyImportKeyMaterialToTerraform(this._importKeyMaterial.internalValue),
      key_policy: awsXksKeyKeyPolicyToTerraform(this._keyPolicy.internalValue),
      local_hosted_params: cdktf.listMapper(awsXksKeyLocalHostedParamsToTerraform, true)(this._localHostedParams.internalValue),
      replicate_key: awsXksKeyReplicateKeyToTerraform(this._replicateKey.internalValue),
      upload_key: awsXksKeyUploadKeyToTerraform(this._uploadKey.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alias),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auto_rotate: {
        value: cdktf.booleanToHclTerraform(this._autoRotate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bypass_policy_lockout_safety_check: {
        value: cdktf.booleanToHclTerraform(this._bypassPolicyLockoutSafetyCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      customer_master_key_spec: {
        value: cdktf.stringToHclTerraform(this._customerMasterKeySpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_key: {
        value: cdktf.booleanToHclTerraform(this._enableKey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_usage: {
        value: cdktf.stringToHclTerraform(this._keyUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_users_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keyUsersRoles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      kms: {
        value: cdktf.stringToHclTerraform(this._kms),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_region: {
        value: cdktf.booleanToHclTerraform(this._multiRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      origin: {
        value: cdktf.stringToHclTerraform(this._origin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_region: {
        value: cdktf.stringToHclTerraform(this._primaryRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_for_deletion_days: {
        value: cdktf.numberToHclTerraform(this._scheduleForDeletionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      enable_rotation: {
        value: awsXksKeyEnableRotationToHclTerraform(this._enableRotation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsXksKeyEnableRotationList",
      },
      import_key_material: {
        value: awsXksKeyImportKeyMaterialToHclTerraform(this._importKeyMaterial.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsXksKeyImportKeyMaterialList",
      },
      key_policy: {
        value: awsXksKeyKeyPolicyToHclTerraform(this._keyPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsXksKeyKeyPolicyList",
      },
      local_hosted_params: {
        value: cdktf.listMapperHcl(awsXksKeyLocalHostedParamsToHclTerraform, true)(this._localHostedParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsXksKeyLocalHostedParamsList",
      },
      replicate_key: {
        value: awsXksKeyReplicateKeyToHclTerraform(this._replicateKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsXksKeyReplicateKeyList",
      },
      upload_key: {
        value: awsXksKeyUploadKeyToHclTerraform(this._uploadKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsXksKeyUploadKeyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
