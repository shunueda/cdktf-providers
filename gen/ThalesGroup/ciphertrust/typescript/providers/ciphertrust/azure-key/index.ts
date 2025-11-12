// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Updateable) Date of key activation in UTC time in RFC3339 format. For example, 2021-07-03T14:24:30Z.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#activation_date AzureKey#activation_date}
  */
  readonly activationDate?: string;
  /**
  * Curve name for an EC or EC-HSM elliptical key. Options: P-256, P-384, P-521, SECP256K1. Default is P-256.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#curve AzureKey#curve}
  */
  readonly curve?: string;
  /**
  * (Updateable) Enable or disable the key. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#enable_key AzureKey#enable_key}
  */
  readonly enableKey?: boolean | cdktf.IResolvable;
  /**
  * (Updateable) Date of key expiry in UTC time in RFC3339 format. For example, 2022-07-03T14:24:00Z.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#expiration_date AzureKey#expiration_date}
  */
  readonly expirationDate?: string;
  /**
  * (Updateable) Allowed key operations. RSA/RSA-HSM key options: encrypt, decrypt, sign, verify, wrapKey, unwrapKey and import. EC/EC-HSM key options: sign and verify. Import is applicable only for RSA-HSM keys and mandatory to be set when creating a Key Encryption Key. Default for RSA keys is encrypt, decrypt, sign, verify, wrapKey and unwrapKey. Default for EC keys is sign and verify.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#key_ops AzureKey#key_ops}
  */
  readonly keyOps?: string[];
  /**
  * Size for RSA keys. Options: 2048, 3072, 4096. Default is 2048.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#key_size AzureKey#key_size}
  */
  readonly keySize?: number;
  /**
  * The type of key to create. EC      - Elliptic Curve key, RSA     - RSA key, EC-HSM  - Elliptic Curve key for premium and managed HSM key vaults only, RSA-HSM - RSA key for premium key and managed HSM vaults only. Keys created in managed HSM vaults must be RSA-HSM or EC-HSM. Default is RSA-HSM for managed HSM vaults otherwise RSA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#key_type AzureKey#key_type}
  */
  readonly keyType?: string;
  /**
  * (Updateable) Name for the key unless a key is being restored to a different vault. If the value of this parameter is changed, the current key will be destroyed and a new key created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#name AzureKey#name}
  */
  readonly name?: string;
  /**
  * CipherTrust key ID of a key to restore to the specified vault. Keys can be restored in the AVAILABLE, SOFT-DELETED or DELETED states. Restoring keys in the AVAILABLE or SOFT_DELETED state is only valid for CipherTrust Manager versions >= 2.17 and they must be restored to a different vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#restore_key_id AzureKey#restore_key_id}
  */
  readonly restoreKeyId?: string;
  /**
  * (Updateable) A list of key:value pairs to assign to the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#tags AzureKey#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Name or ID of the vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#vault AzureKey#vault}
  */
  readonly vault: string;
  /**
  * enable_rotation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#enable_rotation AzureKey#enable_rotation}
  */
  readonly enableRotation?: AzureKeyEnableRotation;
  /**
  * upload_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#upload_key AzureKey#upload_key}
  */
  readonly uploadKey?: AzureKeyUploadKey;
}
export interface AzureKeyEnableRotation {
  /**
  * (Updateable) ID of the domain in which DSM keys will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#dsm_domain_id AzureKey#dsm_domain_id}
  */
  readonly dsmDomainId?: string;
  /**
  * (Updateable) Enable the rotated key. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#enable_key AzureKey#enable_key}
  */
  readonly enableKey?: boolean | cdktf.IResolvable;
  /**
  * (Updateable) ID of the partition in which HSM keys will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#hsm_partition_id AzureKey#hsm_partition_id}
  */
  readonly hsmPartitionId?: string;
  /**
  * (Updateable) ID of the scheduler job that will perform key rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#job_config_id AzureKey#job_config_id}
  */
  readonly jobConfigId: string;
  /**
  * (Updateable) Source of the key material. Only native is valid for EC keys. Options: native, ciphertrust, dsm and hsm-luna.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#key_source AzureKey#key_source}
  */
  readonly keySource: string;
}

export function azureKeyEnableRotationToTerraform(struct?: AzureKeyEnableRotationOutputReference | AzureKeyEnableRotation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dsm_domain_id: cdktf.stringToTerraform(struct!.dsmDomainId),
    enable_key: cdktf.booleanToTerraform(struct!.enableKey),
    hsm_partition_id: cdktf.stringToTerraform(struct!.hsmPartitionId),
    job_config_id: cdktf.stringToTerraform(struct!.jobConfigId),
    key_source: cdktf.stringToTerraform(struct!.keySource),
  }
}


export function azureKeyEnableRotationToHclTerraform(struct?: AzureKeyEnableRotationOutputReference | AzureKeyEnableRotation): any {
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
    enable_key: {
      value: cdktf.booleanToHclTerraform(struct!.enableKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class AzureKeyEnableRotationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureKeyEnableRotation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dsmDomainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsmDomainId = this._dsmDomainId;
    }
    if (this._enableKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableKey = this._enableKey;
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

  public set internalValue(value: AzureKeyEnableRotation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dsmDomainId = undefined;
      this._enableKey = undefined;
      this._hsmPartitionId = undefined;
      this._jobConfigId = undefined;
      this._keySource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dsmDomainId = value.dsmDomainId;
      this._enableKey = value.enableKey;
      this._hsmPartitionId = value.hsmPartitionId;
      this._jobConfigId = value.jobConfigId;
      this._keySource = value.keySource;
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
export interface AzureKeyUploadKey {
  /**
  * DSM key ID to upload to Azure. Required if source_key_tier is dsm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#dsm_key_id AzureKey#dsm_key_id}
  */
  readonly dsmKeyId?: string;
  /**
  * Make the private key exportable from Azure. Currently only supported for premium vaults and managed-hsm vaults when the key is uploaded from hsm-luna.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#exportable AzureKey#exportable}
  */
  readonly exportable?: boolean | cdktf.IResolvable;
  /**
  * Premium vaults support hsm-backed keys. Set to true to use this option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#hsm AzureKey#hsm}
  */
  readonly hsm?: boolean | cdktf.IResolvable;
  /**
  * Luna-HSM key identifier of the key to be uploaded to Azure. Required if source_key_tier is hsm-luna
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#hsm_key_id AzureKey#hsm_key_id}
  */
  readonly hsmKeyId?: string;
  /**
  * Identifier of an Azure key encrypting key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#kek_kid AzureKey#kek_kid}
  */
  readonly kekKid?: string;
  /**
  * CCKM key identifier of the key uploaded to Azure. Required if source_key_tier is local.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#local_key_id AzureKey#local_key_id}
  */
  readonly localKeyId?: string;
  /**
  * Pfx file to upload. Required if source_key_tier is pfx.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#pfx AzureKey#pfx}
  */
  readonly pfx?: string;
  /**
  * PFX password. Specify only if the PFX certificate is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#pfx_password AzureKey#pfx_password}
  */
  readonly pfxPassword?: string;
  /**
  * Exportable keys require a release policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#release_policy AzureKey#release_policy}
  */
  readonly releasePolicy?: string;
  /**
  * Options: local, pfx, dsm and hsm-luna. Default is local.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#source_key_tier AzureKey#source_key_tier}
  */
  readonly sourceKeyTier?: string;
}

export function azureKeyUploadKeyToTerraform(struct?: AzureKeyUploadKeyOutputReference | AzureKeyUploadKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dsm_key_id: cdktf.stringToTerraform(struct!.dsmKeyId),
    exportable: cdktf.booleanToTerraform(struct!.exportable),
    hsm: cdktf.booleanToTerraform(struct!.hsm),
    hsm_key_id: cdktf.stringToTerraform(struct!.hsmKeyId),
    kek_kid: cdktf.stringToTerraform(struct!.kekKid),
    local_key_id: cdktf.stringToTerraform(struct!.localKeyId),
    pfx: cdktf.stringToTerraform(struct!.pfx),
    pfx_password: cdktf.stringToTerraform(struct!.pfxPassword),
    release_policy: cdktf.stringToTerraform(struct!.releasePolicy),
    source_key_tier: cdktf.stringToTerraform(struct!.sourceKeyTier),
  }
}


export function azureKeyUploadKeyToHclTerraform(struct?: AzureKeyUploadKeyOutputReference | AzureKeyUploadKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dsm_key_id: {
      value: cdktf.stringToHclTerraform(struct!.dsmKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exportable: {
      value: cdktf.booleanToHclTerraform(struct!.exportable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hsm: {
      value: cdktf.booleanToHclTerraform(struct!.hsm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hsm_key_id: {
      value: cdktf.stringToHclTerraform(struct!.hsmKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kek_kid: {
      value: cdktf.stringToHclTerraform(struct!.kekKid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_key_id: {
      value: cdktf.stringToHclTerraform(struct!.localKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pfx: {
      value: cdktf.stringToHclTerraform(struct!.pfx),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pfx_password: {
      value: cdktf.stringToHclTerraform(struct!.pfxPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    release_policy: {
      value: cdktf.stringToHclTerraform(struct!.releasePolicy),
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

export class AzureKeyUploadKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureKeyUploadKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dsmKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsmKeyId = this._dsmKeyId;
    }
    if (this._exportable !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportable = this._exportable;
    }
    if (this._hsm !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsm = this._hsm;
    }
    if (this._hsmKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsmKeyId = this._hsmKeyId;
    }
    if (this._kekKid !== undefined) {
      hasAnyValues = true;
      internalValueResult.kekKid = this._kekKid;
    }
    if (this._localKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.localKeyId = this._localKeyId;
    }
    if (this._pfx !== undefined) {
      hasAnyValues = true;
      internalValueResult.pfx = this._pfx;
    }
    if (this._pfxPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.pfxPassword = this._pfxPassword;
    }
    if (this._releasePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.releasePolicy = this._releasePolicy;
    }
    if (this._sourceKeyTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceKeyTier = this._sourceKeyTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureKeyUploadKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dsmKeyId = undefined;
      this._exportable = undefined;
      this._hsm = undefined;
      this._hsmKeyId = undefined;
      this._kekKid = undefined;
      this._localKeyId = undefined;
      this._pfx = undefined;
      this._pfxPassword = undefined;
      this._releasePolicy = undefined;
      this._sourceKeyTier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dsmKeyId = value.dsmKeyId;
      this._exportable = value.exportable;
      this._hsm = value.hsm;
      this._hsmKeyId = value.hsmKeyId;
      this._kekKid = value.kekKid;
      this._localKeyId = value.localKeyId;
      this._pfx = value.pfx;
      this._pfxPassword = value.pfxPassword;
      this._releasePolicy = value.releasePolicy;
      this._sourceKeyTier = value.sourceKeyTier;
    }
  }

  // dsm_key_id - computed: false, optional: true, required: false
  private _dsmKeyId?: string; 
  public get dsmKeyId() {
    return this.getStringAttribute('dsm_key_id');
  }
  public set dsmKeyId(value: string) {
    this._dsmKeyId = value;
  }
  public resetDsmKeyId() {
    this._dsmKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsmKeyIdInput() {
    return this._dsmKeyId;
  }

  // exportable - computed: false, optional: true, required: false
  private _exportable?: boolean | cdktf.IResolvable; 
  public get exportable() {
    return this.getBooleanAttribute('exportable');
  }
  public set exportable(value: boolean | cdktf.IResolvable) {
    this._exportable = value;
  }
  public resetExportable() {
    this._exportable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportableInput() {
    return this._exportable;
  }

  // hsm - computed: false, optional: true, required: false
  private _hsm?: boolean | cdktf.IResolvable; 
  public get hsm() {
    return this.getBooleanAttribute('hsm');
  }
  public set hsm(value: boolean | cdktf.IResolvable) {
    this._hsm = value;
  }
  public resetHsm() {
    this._hsm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmInput() {
    return this._hsm;
  }

  // hsm_key_id - computed: false, optional: true, required: false
  private _hsmKeyId?: string; 
  public get hsmKeyId() {
    return this.getStringAttribute('hsm_key_id');
  }
  public set hsmKeyId(value: string) {
    this._hsmKeyId = value;
  }
  public resetHsmKeyId() {
    this._hsmKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmKeyIdInput() {
    return this._hsmKeyId;
  }

  // kek_kid - computed: false, optional: true, required: false
  private _kekKid?: string; 
  public get kekKid() {
    return this.getStringAttribute('kek_kid');
  }
  public set kekKid(value: string) {
    this._kekKid = value;
  }
  public resetKekKid() {
    this._kekKid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kekKidInput() {
    return this._kekKid;
  }

  // local_key_id - computed: true, optional: true, required: false
  private _localKeyId?: string; 
  public get localKeyId() {
    return this.getStringAttribute('local_key_id');
  }
  public set localKeyId(value: string) {
    this._localKeyId = value;
  }
  public resetLocalKeyId() {
    this._localKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localKeyIdInput() {
    return this._localKeyId;
  }

  // pfx - computed: false, optional: true, required: false
  private _pfx?: string; 
  public get pfx() {
    return this.getStringAttribute('pfx');
  }
  public set pfx(value: string) {
    this._pfx = value;
  }
  public resetPfx() {
    this._pfx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfxInput() {
    return this._pfx;
  }

  // pfx_password - computed: false, optional: true, required: false
  private _pfxPassword?: string; 
  public get pfxPassword() {
    return this.getStringAttribute('pfx_password');
  }
  public set pfxPassword(value: string) {
    this._pfxPassword = value;
  }
  public resetPfxPassword() {
    this._pfxPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfxPasswordInput() {
    return this._pfxPassword;
  }

  // release_policy - computed: false, optional: true, required: false
  private _releasePolicy?: string; 
  public get releasePolicy() {
    return this.getStringAttribute('release_policy');
  }
  public set releasePolicy(value: string) {
    this._releasePolicy = value;
  }
  public resetReleasePolicy() {
    this._releasePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releasePolicyInput() {
    return this._releasePolicy;
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
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key ciphertrust_azure_key}
*/
export class AzureKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_azure_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureKey to import
  * @param importFromId The id of the existing AzureKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_azure_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_key ciphertrust_azure_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureKeyConfig
  */
  public constructor(scope: Construct, id: string, config: AzureKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_azure_key',
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
    this._activationDate = config.activationDate;
    this._curve = config.curve;
    this._enableKey = config.enableKey;
    this._expirationDate = config.expirationDate;
    this._keyOps = config.keyOps;
    this._keySize = config.keySize;
    this._keyType = config.keyType;
    this._name = config.name;
    this._restoreKeyId = config.restoreKeyId;
    this._tags = config.tags;
    this._vault = config.vault;
    this._enableRotation.internalValue = config.enableRotation;
    this._uploadKey.internalValue = config.uploadKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_date - computed: false, optional: true, required: false
  private _activationDate?: string; 
  public get activationDate() {
    return this.getStringAttribute('activation_date');
  }
  public set activationDate(value: string) {
    this._activationDate = value;
  }
  public resetActivationDate() {
    this._activationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationDateInput() {
    return this._activationDate;
  }

  // azure_key_id - computed: true, optional: false, required: false
  public get azureKeyId() {
    return this.getStringAttribute('azure_key_id');
  }

  // backup - computed: true, optional: false, required: false
  public get backup() {
    return this.getStringAttribute('backup');
  }

  // backup_at - computed: true, optional: false, required: false
  public get backupAt() {
    return this.getStringAttribute('backup_at');
  }

  // cloud_name - computed: true, optional: false, required: false
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curve - computed: true, optional: true, required: false
  private _curve?: string; 
  public get curve() {
    return this.getStringAttribute('curve');
  }
  public set curve(value: string) {
    this._curve = value;
  }
  public resetCurve() {
    this._curve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curveInput() {
    return this._curve;
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
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

  // expiration_date - computed: true, optional: true, required: false
  private _expirationDate?: string; 
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }
  public set expirationDate(value: string) {
    this._expirationDate = value;
  }
  public resetExpirationDate() {
    this._expirationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDateInput() {
    return this._expirationDate;
  }

  // exportable - computed: true, optional: false, required: false
  public get exportable() {
    return this.getBooleanAttribute('exportable');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // key_material_origin - computed: true, optional: false, required: false
  public get keyMaterialOrigin() {
    return this.getStringAttribute('key_material_origin');
  }

  // key_ops - computed: true, optional: true, required: false
  private _keyOps?: string[]; 
  public get keyOps() {
    return this.getListAttribute('key_ops');
  }
  public set keyOps(value: string[]) {
    this._keyOps = value;
  }
  public resetKeyOps() {
    this._keyOps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOpsInput() {
    return this._keyOps;
  }

  // key_size - computed: true, optional: true, required: false
  private _keySize?: number; 
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }
  public set keySize(value: number) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
  }

  // key_soft_deleted_in_azure - computed: true, optional: false, required: false
  public get keySoftDeletedInAzure() {
    return this.getBooleanAttribute('key_soft_deleted_in_azure');
  }

  // key_type - computed: true, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // key_vault - computed: true, optional: false, required: false
  public get keyVault() {
    return this.getStringAttribute('key_vault');
  }

  // key_vault_id - computed: true, optional: false, required: false
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // local_key_id - computed: true, optional: false, required: false
  public get localKeyId() {
    return this.getStringAttribute('local_key_id');
  }

  // local_key_name - computed: true, optional: false, required: false
  public get localKeyName() {
    return this.getStringAttribute('local_key_name');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // name - computed: true, optional: true, required: false
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

  // recovery_level - computed: true, optional: false, required: false
  public get recoveryLevel() {
    return this.getStringAttribute('recovery_level');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // release_policy - computed: true, optional: false, required: false
  public get releasePolicy() {
    return this.getStringAttribute('release_policy');
  }

  // restore_key_id - computed: false, optional: true, required: false
  private _restoreKeyId?: string; 
  public get restoreKeyId() {
    return this.getStringAttribute('restore_key_id');
  }
  public set restoreKeyId(value: string) {
    this._restoreKeyId = value;
  }
  public resetRestoreKeyId() {
    this._restoreKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreKeyIdInput() {
    return this._restoreKeyId;
  }

  // soft_delete_enabled - computed: true, optional: false, required: false
  public get softDeleteEnabled() {
    return this.getBooleanAttribute('soft_delete_enabled');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // synced_at - computed: true, optional: false, required: false
  public get syncedAt() {
    return this.getStringAttribute('synced_at');
  }

  // tags - computed: true, optional: true, required: false
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

  // tenant - computed: true, optional: false, required: false
  public get tenant() {
    return this.getStringAttribute('tenant');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // vault - computed: false, optional: false, required: true
  private _vault?: string; 
  public get vault() {
    return this.getStringAttribute('vault');
  }
  public set vault(value: string) {
    this._vault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultInput() {
    return this._vault;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // version_count - computed: true, optional: false, required: false
  public get versionCount() {
    return this.getNumberAttribute('version_count');
  }

  // enable_rotation - computed: false, optional: true, required: false
  private _enableRotation = new AzureKeyEnableRotationOutputReference(this, "enable_rotation");
  public get enableRotation() {
    return this._enableRotation;
  }
  public putEnableRotation(value: AzureKeyEnableRotation) {
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
  private _uploadKey = new AzureKeyUploadKeyOutputReference(this, "upload_key");
  public get uploadKey() {
    return this._uploadKey;
  }
  public putUploadKey(value: AzureKeyUploadKey) {
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
      activation_date: cdktf.stringToTerraform(this._activationDate),
      curve: cdktf.stringToTerraform(this._curve),
      enable_key: cdktf.booleanToTerraform(this._enableKey),
      expiration_date: cdktf.stringToTerraform(this._expirationDate),
      key_ops: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyOps),
      key_size: cdktf.numberToTerraform(this._keySize),
      key_type: cdktf.stringToTerraform(this._keyType),
      name: cdktf.stringToTerraform(this._name),
      restore_key_id: cdktf.stringToTerraform(this._restoreKeyId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vault: cdktf.stringToTerraform(this._vault),
      enable_rotation: azureKeyEnableRotationToTerraform(this._enableRotation.internalValue),
      upload_key: azureKeyUploadKeyToTerraform(this._uploadKey.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activation_date: {
        value: cdktf.stringToHclTerraform(this._activationDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      curve: {
        value: cdktf.stringToHclTerraform(this._curve),
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
      expiration_date: {
        value: cdktf.stringToHclTerraform(this._expirationDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_ops: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keyOps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      key_size: {
        value: cdktf.numberToHclTerraform(this._keySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_type: {
        value: cdktf.stringToHclTerraform(this._keyType),
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
      restore_key_id: {
        value: cdktf.stringToHclTerraform(this._restoreKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vault: {
        value: cdktf.stringToHclTerraform(this._vault),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_rotation: {
        value: azureKeyEnableRotationToHclTerraform(this._enableRotation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureKeyEnableRotationList",
      },
      upload_key: {
        value: azureKeyUploadKeyToHclTerraform(this._uploadKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureKeyUploadKeyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
