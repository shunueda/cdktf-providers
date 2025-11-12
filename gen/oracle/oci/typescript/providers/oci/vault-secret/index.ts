// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#compartment_id VaultSecret#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#defined_tags VaultSecret#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#description VaultSecret#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#enable_auto_generation VaultSecret#enable_auto_generation}
  */
  readonly enableAutoGeneration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#freeform_tags VaultSecret#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#id VaultSecret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#key_id VaultSecret#key_id}
  */
  readonly keyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#metadata VaultSecret#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#secret_name VaultSecret#secret_name}
  */
  readonly secretName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#vault_id VaultSecret#vault_id}
  */
  readonly vaultId: string;
  /**
  * replication_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#replication_config VaultSecret#replication_config}
  */
  readonly replicationConfig?: VaultSecretReplicationConfig;
  /**
  * rotation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#rotation_config VaultSecret#rotation_config}
  */
  readonly rotationConfig?: VaultSecretRotationConfig;
  /**
  * secret_content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#secret_content VaultSecret#secret_content}
  */
  readonly secretContent?: VaultSecretSecretContent;
  /**
  * secret_generation_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#secret_generation_context VaultSecret#secret_generation_context}
  */
  readonly secretGenerationContext?: VaultSecretSecretGenerationContext;
  /**
  * secret_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#secret_rules VaultSecret#secret_rules}
  */
  readonly secretRules?: VaultSecretSecretRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#timeouts VaultSecret#timeouts}
  */
  readonly timeouts?: VaultSecretTimeouts;
}
export interface VaultSecretSourceRegionInformation {
}

export function vaultSecretSourceRegionInformationToTerraform(struct?: VaultSecretSourceRegionInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vaultSecretSourceRegionInformationToHclTerraform(struct?: VaultSecretSourceRegionInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VaultSecretSourceRegionInformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VaultSecretSourceRegionInformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSecretSourceRegionInformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_key_id - computed: true, optional: false, required: false
  public get sourceKeyId() {
    return this.getStringAttribute('source_key_id');
  }

  // source_region - computed: true, optional: false, required: false
  public get sourceRegion() {
    return this.getStringAttribute('source_region');
  }

  // source_vault_id - computed: true, optional: false, required: false
  public get sourceVaultId() {
    return this.getStringAttribute('source_vault_id');
  }
}

export class VaultSecretSourceRegionInformationList extends cdktf.ComplexList {

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
  public get(index: number): VaultSecretSourceRegionInformationOutputReference {
    return new VaultSecretSourceRegionInformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VaultSecretReplicationConfigReplicationTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#target_key_id VaultSecret#target_key_id}
  */
  readonly targetKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#target_region VaultSecret#target_region}
  */
  readonly targetRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#target_vault_id VaultSecret#target_vault_id}
  */
  readonly targetVaultId: string;
}

export function vaultSecretReplicationConfigReplicationTargetsToTerraform(struct?: VaultSecretReplicationConfigReplicationTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_key_id: cdktf.stringToTerraform(struct!.targetKeyId),
    target_region: cdktf.stringToTerraform(struct!.targetRegion),
    target_vault_id: cdktf.stringToTerraform(struct!.targetVaultId),
  }
}


export function vaultSecretReplicationConfigReplicationTargetsToHclTerraform(struct?: VaultSecretReplicationConfigReplicationTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_key_id: {
      value: cdktf.stringToHclTerraform(struct!.targetKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_region: {
      value: cdktf.stringToHclTerraform(struct!.targetRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_vault_id: {
      value: cdktf.stringToHclTerraform(struct!.targetVaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultSecretReplicationConfigReplicationTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VaultSecretReplicationConfigReplicationTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetKeyId = this._targetKeyId;
    }
    if (this._targetRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRegion = this._targetRegion;
    }
    if (this._targetVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetVaultId = this._targetVaultId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSecretReplicationConfigReplicationTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetKeyId = undefined;
      this._targetRegion = undefined;
      this._targetVaultId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetKeyId = value.targetKeyId;
      this._targetRegion = value.targetRegion;
      this._targetVaultId = value.targetVaultId;
    }
  }

  // target_key_id - computed: false, optional: false, required: true
  private _targetKeyId?: string; 
  public get targetKeyId() {
    return this.getStringAttribute('target_key_id');
  }
  public set targetKeyId(value: string) {
    this._targetKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetKeyIdInput() {
    return this._targetKeyId;
  }

  // target_region - computed: false, optional: false, required: true
  private _targetRegion?: string; 
  public get targetRegion() {
    return this.getStringAttribute('target_region');
  }
  public set targetRegion(value: string) {
    this._targetRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRegionInput() {
    return this._targetRegion;
  }

  // target_vault_id - computed: false, optional: false, required: true
  private _targetVaultId?: string; 
  public get targetVaultId() {
    return this.getStringAttribute('target_vault_id');
  }
  public set targetVaultId(value: string) {
    this._targetVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVaultIdInput() {
    return this._targetVaultId;
  }
}

export class VaultSecretReplicationConfigReplicationTargetsList extends cdktf.ComplexList {
  public internalValue? : VaultSecretReplicationConfigReplicationTargets[] | cdktf.IResolvable

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
  public get(index: number): VaultSecretReplicationConfigReplicationTargetsOutputReference {
    return new VaultSecretReplicationConfigReplicationTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VaultSecretReplicationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#is_write_forward_enabled VaultSecret#is_write_forward_enabled}
  */
  readonly isWriteForwardEnabled?: boolean | cdktf.IResolvable;
  /**
  * replication_targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#replication_targets VaultSecret#replication_targets}
  */
  readonly replicationTargets: VaultSecretReplicationConfigReplicationTargets[] | cdktf.IResolvable;
}

export function vaultSecretReplicationConfigToTerraform(struct?: VaultSecretReplicationConfigOutputReference | VaultSecretReplicationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_write_forward_enabled: cdktf.booleanToTerraform(struct!.isWriteForwardEnabled),
    replication_targets: cdktf.listMapper(vaultSecretReplicationConfigReplicationTargetsToTerraform, true)(struct!.replicationTargets),
  }
}


export function vaultSecretReplicationConfigToHclTerraform(struct?: VaultSecretReplicationConfigOutputReference | VaultSecretReplicationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_write_forward_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isWriteForwardEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replication_targets: {
      value: cdktf.listMapperHcl(vaultSecretReplicationConfigReplicationTargetsToHclTerraform, true)(struct!.replicationTargets),
      isBlock: true,
      type: "list",
      storageClassType: "VaultSecretReplicationConfigReplicationTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultSecretReplicationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VaultSecretReplicationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isWriteForwardEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isWriteForwardEnabled = this._isWriteForwardEnabled;
    }
    if (this._replicationTargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationTargets = this._replicationTargets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSecretReplicationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isWriteForwardEnabled = undefined;
      this._replicationTargets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isWriteForwardEnabled = value.isWriteForwardEnabled;
      this._replicationTargets.internalValue = value.replicationTargets;
    }
  }

  // is_write_forward_enabled - computed: false, optional: true, required: false
  private _isWriteForwardEnabled?: boolean | cdktf.IResolvable; 
  public get isWriteForwardEnabled() {
    return this.getBooleanAttribute('is_write_forward_enabled');
  }
  public set isWriteForwardEnabled(value: boolean | cdktf.IResolvable) {
    this._isWriteForwardEnabled = value;
  }
  public resetIsWriteForwardEnabled() {
    this._isWriteForwardEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isWriteForwardEnabledInput() {
    return this._isWriteForwardEnabled;
  }

  // replication_targets - computed: false, optional: false, required: true
  private _replicationTargets = new VaultSecretReplicationConfigReplicationTargetsList(this, "replication_targets", false);
  public get replicationTargets() {
    return this._replicationTargets;
  }
  public putReplicationTargets(value: VaultSecretReplicationConfigReplicationTargets[] | cdktf.IResolvable) {
    this._replicationTargets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationTargetsInput() {
    return this._replicationTargets.internalValue;
  }
}
export interface VaultSecretRotationConfigTargetSystemDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#adb_id VaultSecret#adb_id}
  */
  readonly adbId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#function_id VaultSecret#function_id}
  */
  readonly functionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#target_system_type VaultSecret#target_system_type}
  */
  readonly targetSystemType: string;
}

export function vaultSecretRotationConfigTargetSystemDetailsToTerraform(struct?: VaultSecretRotationConfigTargetSystemDetailsOutputReference | VaultSecretRotationConfigTargetSystemDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adb_id: cdktf.stringToTerraform(struct!.adbId),
    function_id: cdktf.stringToTerraform(struct!.functionId),
    target_system_type: cdktf.stringToTerraform(struct!.targetSystemType),
  }
}


export function vaultSecretRotationConfigTargetSystemDetailsToHclTerraform(struct?: VaultSecretRotationConfigTargetSystemDetailsOutputReference | VaultSecretRotationConfigTargetSystemDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adb_id: {
      value: cdktf.stringToHclTerraform(struct!.adbId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_id: {
      value: cdktf.stringToHclTerraform(struct!.functionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_system_type: {
      value: cdktf.stringToHclTerraform(struct!.targetSystemType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultSecretRotationConfigTargetSystemDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VaultSecretRotationConfigTargetSystemDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adbId !== undefined) {
      hasAnyValues = true;
      internalValueResult.adbId = this._adbId;
    }
    if (this._functionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionId = this._functionId;
    }
    if (this._targetSystemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSystemType = this._targetSystemType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSecretRotationConfigTargetSystemDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adbId = undefined;
      this._functionId = undefined;
      this._targetSystemType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adbId = value.adbId;
      this._functionId = value.functionId;
      this._targetSystemType = value.targetSystemType;
    }
  }

  // adb_id - computed: true, optional: true, required: false
  private _adbId?: string; 
  public get adbId() {
    return this.getStringAttribute('adb_id');
  }
  public set adbId(value: string) {
    this._adbId = value;
  }
  public resetAdbId() {
    this._adbId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adbIdInput() {
    return this._adbId;
  }

  // function_id - computed: true, optional: true, required: false
  private _functionId?: string; 
  public get functionId() {
    return this.getStringAttribute('function_id');
  }
  public set functionId(value: string) {
    this._functionId = value;
  }
  public resetFunctionId() {
    this._functionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionIdInput() {
    return this._functionId;
  }

  // target_system_type - computed: false, optional: false, required: true
  private _targetSystemType?: string; 
  public get targetSystemType() {
    return this.getStringAttribute('target_system_type');
  }
  public set targetSystemType(value: string) {
    this._targetSystemType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSystemTypeInput() {
    return this._targetSystemType;
  }
}
export interface VaultSecretRotationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#is_scheduled_rotation_enabled VaultSecret#is_scheduled_rotation_enabled}
  */
  readonly isScheduledRotationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#rotation_interval VaultSecret#rotation_interval}
  */
  readonly rotationInterval?: string;
  /**
  * target_system_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#target_system_details VaultSecret#target_system_details}
  */
  readonly targetSystemDetails: VaultSecretRotationConfigTargetSystemDetails;
}

export function vaultSecretRotationConfigToTerraform(struct?: VaultSecretRotationConfigOutputReference | VaultSecretRotationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_scheduled_rotation_enabled: cdktf.booleanToTerraform(struct!.isScheduledRotationEnabled),
    rotation_interval: cdktf.stringToTerraform(struct!.rotationInterval),
    target_system_details: vaultSecretRotationConfigTargetSystemDetailsToTerraform(struct!.targetSystemDetails),
  }
}


export function vaultSecretRotationConfigToHclTerraform(struct?: VaultSecretRotationConfigOutputReference | VaultSecretRotationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_scheduled_rotation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isScheduledRotationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rotation_interval: {
      value: cdktf.stringToHclTerraform(struct!.rotationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_system_details: {
      value: vaultSecretRotationConfigTargetSystemDetailsToHclTerraform(struct!.targetSystemDetails),
      isBlock: true,
      type: "list",
      storageClassType: "VaultSecretRotationConfigTargetSystemDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultSecretRotationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VaultSecretRotationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isScheduledRotationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isScheduledRotationEnabled = this._isScheduledRotationEnabled;
    }
    if (this._rotationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationInterval = this._rotationInterval;
    }
    if (this._targetSystemDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSystemDetails = this._targetSystemDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSecretRotationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isScheduledRotationEnabled = undefined;
      this._rotationInterval = undefined;
      this._targetSystemDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isScheduledRotationEnabled = value.isScheduledRotationEnabled;
      this._rotationInterval = value.rotationInterval;
      this._targetSystemDetails.internalValue = value.targetSystemDetails;
    }
  }

  // is_scheduled_rotation_enabled - computed: true, optional: true, required: false
  private _isScheduledRotationEnabled?: boolean | cdktf.IResolvable; 
  public get isScheduledRotationEnabled() {
    return this.getBooleanAttribute('is_scheduled_rotation_enabled');
  }
  public set isScheduledRotationEnabled(value: boolean | cdktf.IResolvable) {
    this._isScheduledRotationEnabled = value;
  }
  public resetIsScheduledRotationEnabled() {
    this._isScheduledRotationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isScheduledRotationEnabledInput() {
    return this._isScheduledRotationEnabled;
  }

  // rotation_interval - computed: true, optional: true, required: false
  private _rotationInterval?: string; 
  public get rotationInterval() {
    return this.getStringAttribute('rotation_interval');
  }
  public set rotationInterval(value: string) {
    this._rotationInterval = value;
  }
  public resetRotationInterval() {
    this._rotationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationIntervalInput() {
    return this._rotationInterval;
  }

  // target_system_details - computed: false, optional: false, required: true
  private _targetSystemDetails = new VaultSecretRotationConfigTargetSystemDetailsOutputReference(this, "target_system_details");
  public get targetSystemDetails() {
    return this._targetSystemDetails;
  }
  public putTargetSystemDetails(value: VaultSecretRotationConfigTargetSystemDetails) {
    this._targetSystemDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSystemDetailsInput() {
    return this._targetSystemDetails.internalValue;
  }
}
export interface VaultSecretSecretContent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#content VaultSecret#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#content_type VaultSecret#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#name VaultSecret#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#stage VaultSecret#stage}
  */
  readonly stage?: string;
}

export function vaultSecretSecretContentToTerraform(struct?: VaultSecretSecretContentOutputReference | VaultSecretSecretContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    name: cdktf.stringToTerraform(struct!.name),
    stage: cdktf.stringToTerraform(struct!.stage),
  }
}


export function vaultSecretSecretContentToHclTerraform(struct?: VaultSecretSecretContentOutputReference | VaultSecretSecretContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
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
    stage: {
      value: cdktf.stringToHclTerraform(struct!.stage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultSecretSecretContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VaultSecretSecretContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._stage !== undefined) {
      hasAnyValues = true;
      internalValueResult.stage = this._stage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSecretSecretContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._contentType = undefined;
      this._name = undefined;
      this._stage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._contentType = value.contentType;
      this._name = value.name;
      this._stage = value.stage;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
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

  // stage - computed: true, optional: true, required: false
  private _stage?: string; 
  public get stage() {
    return this.getStringAttribute('stage');
  }
  public set stage(value: string) {
    this._stage = value;
  }
  public resetStage() {
    this._stage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage;
  }
}
export interface VaultSecretSecretGenerationContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#generation_template VaultSecret#generation_template}
  */
  readonly generationTemplate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#generation_type VaultSecret#generation_type}
  */
  readonly generationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#passphrase_length VaultSecret#passphrase_length}
  */
  readonly passphraseLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#secret_template VaultSecret#secret_template}
  */
  readonly secretTemplate?: string;
}

export function vaultSecretSecretGenerationContextToTerraform(struct?: VaultSecretSecretGenerationContextOutputReference | VaultSecretSecretGenerationContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generation_template: cdktf.stringToTerraform(struct!.generationTemplate),
    generation_type: cdktf.stringToTerraform(struct!.generationType),
    passphrase_length: cdktf.numberToTerraform(struct!.passphraseLength),
    secret_template: cdktf.stringToTerraform(struct!.secretTemplate),
  }
}


export function vaultSecretSecretGenerationContextToHclTerraform(struct?: VaultSecretSecretGenerationContextOutputReference | VaultSecretSecretGenerationContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generation_template: {
      value: cdktf.stringToHclTerraform(struct!.generationTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generation_type: {
      value: cdktf.stringToHclTerraform(struct!.generationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase_length: {
      value: cdktf.numberToHclTerraform(struct!.passphraseLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_template: {
      value: cdktf.stringToHclTerraform(struct!.secretTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultSecretSecretGenerationContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VaultSecretSecretGenerationContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generationTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationTemplate = this._generationTemplate;
    }
    if (this._generationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationType = this._generationType;
    }
    if (this._passphraseLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphraseLength = this._passphraseLength;
    }
    if (this._secretTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretTemplate = this._secretTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSecretSecretGenerationContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._generationTemplate = undefined;
      this._generationType = undefined;
      this._passphraseLength = undefined;
      this._secretTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._generationTemplate = value.generationTemplate;
      this._generationType = value.generationType;
      this._passphraseLength = value.passphraseLength;
      this._secretTemplate = value.secretTemplate;
    }
  }

  // generation_template - computed: false, optional: false, required: true
  private _generationTemplate?: string; 
  public get generationTemplate() {
    return this.getStringAttribute('generation_template');
  }
  public set generationTemplate(value: string) {
    this._generationTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get generationTemplateInput() {
    return this._generationTemplate;
  }

  // generation_type - computed: false, optional: false, required: true
  private _generationType?: string; 
  public get generationType() {
    return this.getStringAttribute('generation_type');
  }
  public set generationType(value: string) {
    this._generationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get generationTypeInput() {
    return this._generationType;
  }

  // passphrase_length - computed: false, optional: true, required: false
  private _passphraseLength?: number; 
  public get passphraseLength() {
    return this.getNumberAttribute('passphrase_length');
  }
  public set passphraseLength(value: number) {
    this._passphraseLength = value;
  }
  public resetPassphraseLength() {
    this._passphraseLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseLengthInput() {
    return this._passphraseLength;
  }

  // secret_template - computed: false, optional: true, required: false
  private _secretTemplate?: string; 
  public get secretTemplate() {
    return this.getStringAttribute('secret_template');
  }
  public set secretTemplate(value: string) {
    this._secretTemplate = value;
  }
  public resetSecretTemplate() {
    this._secretTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTemplateInput() {
    return this._secretTemplate;
  }
}
export interface VaultSecretSecretRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#is_enforced_on_deleted_secret_versions VaultSecret#is_enforced_on_deleted_secret_versions}
  */
  readonly isEnforcedOnDeletedSecretVersions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#is_secret_content_retrieval_blocked_on_expiry VaultSecret#is_secret_content_retrieval_blocked_on_expiry}
  */
  readonly isSecretContentRetrievalBlockedOnExpiry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#rule_type VaultSecret#rule_type}
  */
  readonly ruleType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#secret_version_expiry_interval VaultSecret#secret_version_expiry_interval}
  */
  readonly secretVersionExpiryInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#time_of_absolute_expiry VaultSecret#time_of_absolute_expiry}
  */
  readonly timeOfAbsoluteExpiry?: string;
}

export function vaultSecretSecretRulesToTerraform(struct?: VaultSecretSecretRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enforced_on_deleted_secret_versions: cdktf.booleanToTerraform(struct!.isEnforcedOnDeletedSecretVersions),
    is_secret_content_retrieval_blocked_on_expiry: cdktf.booleanToTerraform(struct!.isSecretContentRetrievalBlockedOnExpiry),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
    secret_version_expiry_interval: cdktf.stringToTerraform(struct!.secretVersionExpiryInterval),
    time_of_absolute_expiry: cdktf.stringToTerraform(struct!.timeOfAbsoluteExpiry),
  }
}


export function vaultSecretSecretRulesToHclTerraform(struct?: VaultSecretSecretRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enforced_on_deleted_secret_versions: {
      value: cdktf.booleanToHclTerraform(struct!.isEnforcedOnDeletedSecretVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_secret_content_retrieval_blocked_on_expiry: {
      value: cdktf.booleanToHclTerraform(struct!.isSecretContentRetrievalBlockedOnExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_version_expiry_interval: {
      value: cdktf.stringToHclTerraform(struct!.secretVersionExpiryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_of_absolute_expiry: {
      value: cdktf.stringToHclTerraform(struct!.timeOfAbsoluteExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultSecretSecretRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VaultSecretSecretRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnforcedOnDeletedSecretVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnforcedOnDeletedSecretVersions = this._isEnforcedOnDeletedSecretVersions;
    }
    if (this._isSecretContentRetrievalBlockedOnExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSecretContentRetrievalBlockedOnExpiry = this._isSecretContentRetrievalBlockedOnExpiry;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    if (this._secretVersionExpiryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersionExpiryInterval = this._secretVersionExpiryInterval;
    }
    if (this._timeOfAbsoluteExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfAbsoluteExpiry = this._timeOfAbsoluteExpiry;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSecretSecretRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnforcedOnDeletedSecretVersions = undefined;
      this._isSecretContentRetrievalBlockedOnExpiry = undefined;
      this._ruleType = undefined;
      this._secretVersionExpiryInterval = undefined;
      this._timeOfAbsoluteExpiry = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnforcedOnDeletedSecretVersions = value.isEnforcedOnDeletedSecretVersions;
      this._isSecretContentRetrievalBlockedOnExpiry = value.isSecretContentRetrievalBlockedOnExpiry;
      this._ruleType = value.ruleType;
      this._secretVersionExpiryInterval = value.secretVersionExpiryInterval;
      this._timeOfAbsoluteExpiry = value.timeOfAbsoluteExpiry;
    }
  }

  // is_enforced_on_deleted_secret_versions - computed: true, optional: true, required: false
  private _isEnforcedOnDeletedSecretVersions?: boolean | cdktf.IResolvable; 
  public get isEnforcedOnDeletedSecretVersions() {
    return this.getBooleanAttribute('is_enforced_on_deleted_secret_versions');
  }
  public set isEnforcedOnDeletedSecretVersions(value: boolean | cdktf.IResolvable) {
    this._isEnforcedOnDeletedSecretVersions = value;
  }
  public resetIsEnforcedOnDeletedSecretVersions() {
    this._isEnforcedOnDeletedSecretVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnforcedOnDeletedSecretVersionsInput() {
    return this._isEnforcedOnDeletedSecretVersions;
  }

  // is_secret_content_retrieval_blocked_on_expiry - computed: true, optional: true, required: false
  private _isSecretContentRetrievalBlockedOnExpiry?: boolean | cdktf.IResolvable; 
  public get isSecretContentRetrievalBlockedOnExpiry() {
    return this.getBooleanAttribute('is_secret_content_retrieval_blocked_on_expiry');
  }
  public set isSecretContentRetrievalBlockedOnExpiry(value: boolean | cdktf.IResolvable) {
    this._isSecretContentRetrievalBlockedOnExpiry = value;
  }
  public resetIsSecretContentRetrievalBlockedOnExpiry() {
    this._isSecretContentRetrievalBlockedOnExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSecretContentRetrievalBlockedOnExpiryInput() {
    return this._isSecretContentRetrievalBlockedOnExpiry;
  }

  // rule_type - computed: false, optional: false, required: true
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // secret_version_expiry_interval - computed: true, optional: true, required: false
  private _secretVersionExpiryInterval?: string; 
  public get secretVersionExpiryInterval() {
    return this.getStringAttribute('secret_version_expiry_interval');
  }
  public set secretVersionExpiryInterval(value: string) {
    this._secretVersionExpiryInterval = value;
  }
  public resetSecretVersionExpiryInterval() {
    this._secretVersionExpiryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionExpiryIntervalInput() {
    return this._secretVersionExpiryInterval;
  }

  // time_of_absolute_expiry - computed: true, optional: true, required: false
  private _timeOfAbsoluteExpiry?: string; 
  public get timeOfAbsoluteExpiry() {
    return this.getStringAttribute('time_of_absolute_expiry');
  }
  public set timeOfAbsoluteExpiry(value: string) {
    this._timeOfAbsoluteExpiry = value;
  }
  public resetTimeOfAbsoluteExpiry() {
    this._timeOfAbsoluteExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfAbsoluteExpiryInput() {
    return this._timeOfAbsoluteExpiry;
  }
}

export class VaultSecretSecretRulesList extends cdktf.ComplexList {
  public internalValue? : VaultSecretSecretRules[] | cdktf.IResolvable

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
  public get(index: number): VaultSecretSecretRulesOutputReference {
    return new VaultSecretSecretRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VaultSecretTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#create VaultSecret#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#delete VaultSecret#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#update VaultSecret#update}
  */
  readonly update?: string;
}

export function vaultSecretTimeoutsToTerraform(struct?: VaultSecretTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function vaultSecretTimeoutsToHclTerraform(struct?: VaultSecretTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultSecretTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSecretTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSecretTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret oci_vault_secret}
*/
export class VaultSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_vault_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VaultSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultSecret to import
  * @param importFromId The id of the existing VaultSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_vault_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/vault_secret oci_vault_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultSecretConfig
  */
  public constructor(scope: Construct, id: string, config: VaultSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_vault_secret',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._enableAutoGeneration = config.enableAutoGeneration;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._keyId = config.keyId;
    this._metadata = config.metadata;
    this._secretName = config.secretName;
    this._vaultId = config.vaultId;
    this._replicationConfig.internalValue = config.replicationConfig;
    this._rotationConfig.internalValue = config.rotationConfig;
    this._secretContent.internalValue = config.secretContent;
    this._secretGenerationContext.internalValue = config.secretGenerationContext;
    this._secretRules.internalValue = config.secretRules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // current_version_number - computed: true, optional: false, required: false
  public get currentVersionNumber() {
    return this.getStringAttribute('current_version_number');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
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

  // enable_auto_generation - computed: false, optional: true, required: false
  private _enableAutoGeneration?: boolean | cdktf.IResolvable; 
  public get enableAutoGeneration() {
    return this.getBooleanAttribute('enable_auto_generation');
  }
  public set enableAutoGeneration(value: boolean | cdktf.IResolvable) {
    this._enableAutoGeneration = value;
  }
  public resetEnableAutoGeneration() {
    this._enableAutoGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoGenerationInput() {
    return this._enableAutoGeneration;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_auto_generation_enabled - computed: true, optional: false, required: false
  public get isAutoGenerationEnabled() {
    return this.getBooleanAttribute('is_auto_generation_enabled');
  }

  // is_replica - computed: true, optional: false, required: false
  public get isReplica() {
    return this.getBooleanAttribute('is_replica');
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

  // last_rotation_time - computed: true, optional: false, required: false
  public get lastRotationTime() {
    return this.getStringAttribute('last_rotation_time');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // next_rotation_time - computed: true, optional: false, required: false
  public get nextRotationTime() {
    return this.getStringAttribute('next_rotation_time');
  }

  // rotation_status - computed: true, optional: false, required: false
  public get rotationStatus() {
    return this.getStringAttribute('rotation_status');
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

  // source_region_information - computed: true, optional: false, required: false
  private _sourceRegionInformation = new VaultSecretSourceRegionInformationList(this, "source_region_information", false);
  public get sourceRegionInformation() {
    return this._sourceRegionInformation;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_of_current_version_expiry - computed: true, optional: false, required: false
  public get timeOfCurrentVersionExpiry() {
    return this.getStringAttribute('time_of_current_version_expiry');
  }

  // time_of_deletion - computed: true, optional: false, required: false
  public get timeOfDeletion() {
    return this.getStringAttribute('time_of_deletion');
  }

  // vault_id - computed: false, optional: false, required: true
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }

  // replication_config - computed: false, optional: true, required: false
  private _replicationConfig = new VaultSecretReplicationConfigOutputReference(this, "replication_config");
  public get replicationConfig() {
    return this._replicationConfig;
  }
  public putReplicationConfig(value: VaultSecretReplicationConfig) {
    this._replicationConfig.internalValue = value;
  }
  public resetReplicationConfig() {
    this._replicationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationConfigInput() {
    return this._replicationConfig.internalValue;
  }

  // rotation_config - computed: false, optional: true, required: false
  private _rotationConfig = new VaultSecretRotationConfigOutputReference(this, "rotation_config");
  public get rotationConfig() {
    return this._rotationConfig;
  }
  public putRotationConfig(value: VaultSecretRotationConfig) {
    this._rotationConfig.internalValue = value;
  }
  public resetRotationConfig() {
    this._rotationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationConfigInput() {
    return this._rotationConfig.internalValue;
  }

  // secret_content - computed: false, optional: true, required: false
  private _secretContent = new VaultSecretSecretContentOutputReference(this, "secret_content");
  public get secretContent() {
    return this._secretContent;
  }
  public putSecretContent(value: VaultSecretSecretContent) {
    this._secretContent.internalValue = value;
  }
  public resetSecretContent() {
    this._secretContent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretContentInput() {
    return this._secretContent.internalValue;
  }

  // secret_generation_context - computed: false, optional: true, required: false
  private _secretGenerationContext = new VaultSecretSecretGenerationContextOutputReference(this, "secret_generation_context");
  public get secretGenerationContext() {
    return this._secretGenerationContext;
  }
  public putSecretGenerationContext(value: VaultSecretSecretGenerationContext) {
    this._secretGenerationContext.internalValue = value;
  }
  public resetSecretGenerationContext() {
    this._secretGenerationContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretGenerationContextInput() {
    return this._secretGenerationContext.internalValue;
  }

  // secret_rules - computed: false, optional: true, required: false
  private _secretRules = new VaultSecretSecretRulesList(this, "secret_rules", false);
  public get secretRules() {
    return this._secretRules;
  }
  public putSecretRules(value: VaultSecretSecretRules[] | cdktf.IResolvable) {
    this._secretRules.internalValue = value;
  }
  public resetSecretRules() {
    this._secretRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRulesInput() {
    return this._secretRules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VaultSecretTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VaultSecretTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      enable_auto_generation: cdktf.booleanToTerraform(this._enableAutoGeneration),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      key_id: cdktf.stringToTerraform(this._keyId),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      secret_name: cdktf.stringToTerraform(this._secretName),
      vault_id: cdktf.stringToTerraform(this._vaultId),
      replication_config: vaultSecretReplicationConfigToTerraform(this._replicationConfig.internalValue),
      rotation_config: vaultSecretRotationConfigToTerraform(this._rotationConfig.internalValue),
      secret_content: vaultSecretSecretContentToTerraform(this._secretContent.internalValue),
      secret_generation_context: vaultSecretSecretGenerationContextToTerraform(this._secretGenerationContext.internalValue),
      secret_rules: cdktf.listMapper(vaultSecretSecretRulesToTerraform, true)(this._secretRules.internalValue),
      timeouts: vaultSecretTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_auto_generation: {
        value: cdktf.booleanToHclTerraform(this._enableAutoGeneration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      secret_name: {
        value: cdktf.stringToHclTerraform(this._secretName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_id: {
        value: cdktf.stringToHclTerraform(this._vaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_config: {
        value: vaultSecretReplicationConfigToHclTerraform(this._replicationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VaultSecretReplicationConfigList",
      },
      rotation_config: {
        value: vaultSecretRotationConfigToHclTerraform(this._rotationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VaultSecretRotationConfigList",
      },
      secret_content: {
        value: vaultSecretSecretContentToHclTerraform(this._secretContent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VaultSecretSecretContentList",
      },
      secret_generation_context: {
        value: vaultSecretSecretGenerationContextToHclTerraform(this._secretGenerationContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VaultSecretSecretGenerationContextList",
      },
      secret_rules: {
        value: cdktf.listMapperHcl(vaultSecretSecretRulesToHclTerraform, true)(this._secretRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VaultSecretSecretRulesList",
      },
      timeouts: {
        value: vaultSecretTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSecretTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
