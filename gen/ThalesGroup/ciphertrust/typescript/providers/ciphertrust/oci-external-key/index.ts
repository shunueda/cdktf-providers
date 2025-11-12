// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OciExternalKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Updateable) If true, access to encrypt, decrypt and generate-random-bytes APIs is blocked. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_key#blocked OciExternalKey#blocked}
  */
  readonly blocked?: boolean | cdktf.IResolvable;
  /**
  * CipherTrust Manager vault ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_key#cckm_vault_id OciExternalKey#cckm_vault_id}
  */
  readonly cckmVaultId: string;
  /**
  * (Updateable) Unique name for the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_key#name OciExternalKey#name}
  */
  readonly name: string;
  /**
  * (Updateable) OCI policy string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_key#policy OciExternalKey#policy}
  */
  readonly policy?: string;
  /**
  * (Updateable) Path to a file containing the OCI policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_key#policy_file OciExternalKey#policy_file}
  */
  readonly policyFile?: string;
  /**
  * Source key ID. If not provided a key will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_key#source_key_id OciExternalKey#source_key_id}
  */
  readonly sourceKeyId: string;
  /**
  * Source of the key. Options: local, hsm-luna. Default is local.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_key#source_key_tier OciExternalKey#source_key_tier}
  */
  readonly sourceKeyTier?: string;
  /**
  * enable_rotation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_key#enable_rotation OciExternalKey#enable_rotation}
  */
  readonly enableRotation?: OciExternalKeyEnableRotation;
}
export interface OciExternalKeyVersions {
}

export function ociExternalKeyVersionsToTerraform(struct?: OciExternalKeyVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ociExternalKeyVersionsToHclTerraform(struct?: OciExternalKeyVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OciExternalKeyVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OciExternalKeyVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OciExternalKeyVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cckm_version_id - computed: true, optional: false, required: false
  public get cckmVersionId() {
    return this.getStringAttribute('cckm_version_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // source_key_id - computed: true, optional: false, required: false
  public get sourceKeyId() {
    return this.getStringAttribute('source_key_id');
  }

  // source_key_name - computed: true, optional: false, required: false
  public get sourceKeyName() {
    return this.getStringAttribute('source_key_name');
  }

  // source_key_tier - computed: true, optional: false, required: false
  public get sourceKeyTier() {
    return this.getStringAttribute('source_key_tier');
  }
}

export class OciExternalKeyVersionsList extends cdktf.ComplexList {

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
  public get(index: number): OciExternalKeyVersionsOutputReference {
    return new OciExternalKeyVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OciExternalKeyEnableRotation {
  /**
  * (Updateable) ID of the partition in which HSM keys will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_key#hsm_partition_id OciExternalKey#hsm_partition_id}
  */
  readonly hsmPartitionId?: string;
  /**
  * (Updateable) ID of the scheduler job that will perform key rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_key#job_config_id OciExternalKey#job_config_id}
  */
  readonly jobConfigId: string;
  /**
  * (Updateable) Source of the key material. Options: ciphertrust, hsm-luna. Default is ciphertrust
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_key#key_source OciExternalKey#key_source}
  */
  readonly keySource?: string;
}

export function ociExternalKeyEnableRotationToTerraform(struct?: OciExternalKeyEnableRotationOutputReference | OciExternalKeyEnableRotation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hsm_partition_id: cdktf.stringToTerraform(struct!.hsmPartitionId),
    job_config_id: cdktf.stringToTerraform(struct!.jobConfigId),
    key_source: cdktf.stringToTerraform(struct!.keySource),
  }
}


export function ociExternalKeyEnableRotationToHclTerraform(struct?: OciExternalKeyEnableRotationOutputReference | OciExternalKeyEnableRotation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class OciExternalKeyEnableRotationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OciExternalKeyEnableRotation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: OciExternalKeyEnableRotation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hsmPartitionId = undefined;
      this._jobConfigId = undefined;
      this._keySource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hsmPartitionId = value.hsmPartitionId;
      this._jobConfigId = value.jobConfigId;
      this._keySource = value.keySource;
    }
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

  // key_source - computed: false, optional: true, required: false
  private _keySource?: string; 
  public get keySource() {
    return this.getStringAttribute('key_source');
  }
  public set keySource(value: string) {
    this._keySource = value;
  }
  public resetKeySource() {
    this._keySource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySourceInput() {
    return this._keySource;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_key ciphertrust_oci_external_key}
*/
export class OciExternalKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_oci_external_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OciExternalKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OciExternalKey to import
  * @param importFromId The id of the existing OciExternalKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OciExternalKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_oci_external_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_key ciphertrust_oci_external_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OciExternalKeyConfig
  */
  public constructor(scope: Construct, id: string, config: OciExternalKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_oci_external_key',
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
    this._blocked = config.blocked;
    this._cckmVaultId = config.cckmVaultId;
    this._name = config.name;
    this._policy = config.policy;
    this._policyFile = config.policyFile;
    this._sourceKeyId = config.sourceKeyId;
    this._sourceKeyTier = config.sourceKeyTier;
    this._enableRotation.internalValue = config.enableRotation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // blocked - computed: true, optional: true, required: false
  private _blocked?: boolean | cdktf.IResolvable; 
  public get blocked() {
    return this.getBooleanAttribute('blocked');
  }
  public set blocked(value: boolean | cdktf.IResolvable) {
    this._blocked = value;
  }
  public resetBlocked() {
    this._blocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedInput() {
    return this._blocked;
  }

  // cckm_vault_id - computed: false, optional: false, required: true
  private _cckmVaultId?: string; 
  public get cckmVaultId() {
    return this.getStringAttribute('cckm_vault_id');
  }
  public set cckmVaultId(value: string) {
    this._cckmVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cckmVaultIdInput() {
    return this._cckmVaultId;
  }

  // cckm_vault_name - computed: true, optional: false, required: false
  public get cckmVaultName() {
    return this.getStringAttribute('cckm_vault_name');
  }

  // cloud_name - computed: true, optional: false, required: false
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_length - computed: true, optional: false, required: false
  public get keyLength() {
    return this.getNumberAttribute('key_length');
  }

  // key_material_origin - computed: true, optional: false, required: false
  public get keyMaterialOrigin() {
    return this.getStringAttribute('key_material_origin');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // linked_state - computed: true, optional: false, required: false
  public get linkedState() {
    return this.getBooleanAttribute('linked_state');
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

  // policy_file - computed: false, optional: true, required: false
  private _policyFile?: string; 
  public get policyFile() {
    return this.getStringAttribute('policy_file');
  }
  public set policyFile(value: string) {
    this._policyFile = value;
  }
  public resetPolicyFile() {
    this._policyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyFileInput() {
    return this._policyFile;
  }

  // source_key_id - computed: false, optional: false, required: true
  private _sourceKeyId?: string; 
  public get sourceKeyId() {
    return this.getStringAttribute('source_key_id');
  }
  public set sourceKeyId(value: string) {
    this._sourceKeyId = value;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tenancy - computed: true, optional: false, required: false
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // versions - computed: true, optional: false, required: false
  private _versions = new OciExternalKeyVersionsList(this, "versions", false);
  public get versions() {
    return this._versions;
  }

  // enable_rotation - computed: false, optional: true, required: false
  private _enableRotation = new OciExternalKeyEnableRotationOutputReference(this, "enable_rotation");
  public get enableRotation() {
    return this._enableRotation;
  }
  public putEnableRotation(value: OciExternalKeyEnableRotation) {
    this._enableRotation.internalValue = value;
  }
  public resetEnableRotation() {
    this._enableRotation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRotationInput() {
    return this._enableRotation.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blocked: cdktf.booleanToTerraform(this._blocked),
      cckm_vault_id: cdktf.stringToTerraform(this._cckmVaultId),
      name: cdktf.stringToTerraform(this._name),
      policy: cdktf.stringToTerraform(this._policy),
      policy_file: cdktf.stringToTerraform(this._policyFile),
      source_key_id: cdktf.stringToTerraform(this._sourceKeyId),
      source_key_tier: cdktf.stringToTerraform(this._sourceKeyTier),
      enable_rotation: ociExternalKeyEnableRotationToTerraform(this._enableRotation.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blocked: {
        value: cdktf.booleanToHclTerraform(this._blocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cckm_vault_id: {
        value: cdktf.stringToHclTerraform(this._cckmVaultId),
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
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_file: {
        value: cdktf.stringToHclTerraform(this._policyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_key_id: {
        value: cdktf.stringToHclTerraform(this._sourceKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_key_tier: {
        value: cdktf.stringToHclTerraform(this._sourceKeyTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_rotation: {
        value: ociExternalKeyEnableRotationToHclTerraform(this._enableRotation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OciExternalKeyEnableRotationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
