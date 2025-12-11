// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_identity_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BdsBdsInstanceIdentityConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_identity_configuration#activate_iam_user_sync_configuration_trigger BdsBdsInstanceIdentityConfiguration#activate_iam_user_sync_configuration_trigger}
  */
  readonly activateIamUserSyncConfigurationTrigger?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_identity_configuration#activate_upst_configuration_trigger BdsBdsInstanceIdentityConfiguration#activate_upst_configuration_trigger}
  */
  readonly activateUpstConfigurationTrigger?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_identity_configuration#bds_instance_id BdsBdsInstanceIdentityConfiguration#bds_instance_id}
  */
  readonly bdsInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_identity_configuration#cluster_admin_password BdsBdsInstanceIdentityConfiguration#cluster_admin_password}
  */
  readonly clusterAdminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_identity_configuration#confidential_application_id BdsBdsInstanceIdentityConfiguration#confidential_application_id}
  */
  readonly confidentialApplicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_identity_configuration#display_name BdsBdsInstanceIdentityConfiguration#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_identity_configuration#id BdsBdsInstanceIdentityConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_identity_configuration#identity_domain_id BdsBdsInstanceIdentityConfiguration#identity_domain_id}
  */
  readonly identityDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_identity_configuration#refresh_confidential_application_trigger BdsBdsInstanceIdentityConfiguration#refresh_confidential_application_trigger}
  */
  readonly refreshConfidentialApplicationTrigger?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_identity_configuration#refresh_upst_token_exchange_keytab_trigger BdsBdsInstanceIdentityConfiguration#refresh_upst_token_exchange_keytab_trigger}
  */
  readonly refreshUpstTokenExchangeKeytabTrigger?: string;
  /**
  * iam_user_sync_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_identity_configuration#iam_user_sync_configuration_details BdsBdsInstanceIdentityConfiguration#iam_user_sync_configuration_details}
  */
  readonly iamUserSyncConfigurationDetails?: BdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_identity_configuration#timeouts BdsBdsInstanceIdentityConfiguration#timeouts}
  */
  readonly timeouts?: BdsBdsInstanceIdentityConfigurationTimeouts;
  /**
  * upst_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_identity_configuration#upst_configuration_details BdsBdsInstanceIdentityConfiguration#upst_configuration_details}
  */
  readonly upstConfigurationDetails?: BdsBdsInstanceIdentityConfigurationUpstConfigurationDetails;
}
export interface BdsBdsInstanceIdentityConfigurationIamUserSyncConfiguration {
}

export function bdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationToTerraform(struct?: BdsBdsInstanceIdentityConfigurationIamUserSyncConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationToHclTerraform(struct?: BdsBdsInstanceIdentityConfigurationIamUserSyncConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BdsBdsInstanceIdentityConfigurationIamUserSyncConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceIdentityConfigurationIamUserSyncConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_posix_attributes_addition_required - computed: true, optional: false, required: false
  public get isPosixAttributesAdditionRequired() {
    return this.getBooleanAttribute('is_posix_attributes_addition_required');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class BdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): BdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationOutputReference {
    return new BdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BdsBdsInstanceIdentityConfigurationUpstConfiguration {
}

export function bdsBdsInstanceIdentityConfigurationUpstConfigurationToTerraform(struct?: BdsBdsInstanceIdentityConfigurationUpstConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bdsBdsInstanceIdentityConfigurationUpstConfigurationToHclTerraform(struct?: BdsBdsInstanceIdentityConfigurationUpstConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BdsBdsInstanceIdentityConfigurationUpstConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BdsBdsInstanceIdentityConfigurationUpstConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceIdentityConfigurationUpstConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keytab_content - computed: true, optional: false, required: false
  public get keytabContent() {
    return this.getStringAttribute('keytab_content');
  }

  // master_encryption_key_id - computed: true, optional: false, required: false
  public get masterEncryptionKeyId() {
    return this.getStringAttribute('master_encryption_key_id');
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_token_exchange_keytab_last_refreshed - computed: true, optional: false, required: false
  public get timeTokenExchangeKeytabLastRefreshed() {
    return this.getStringAttribute('time_token_exchange_keytab_last_refreshed');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // token_exchange_principal_name - computed: true, optional: false, required: false
  public get tokenExchangePrincipalName() {
    return this.getStringAttribute('token_exchange_principal_name');
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
}

export class BdsBdsInstanceIdentityConfigurationUpstConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): BdsBdsInstanceIdentityConfigurationUpstConfigurationOutputReference {
    return new BdsBdsInstanceIdentityConfigurationUpstConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_identity_configuration#is_posix_attributes_addition_required BdsBdsInstanceIdentityConfiguration#is_posix_attributes_addition_required}
  */
  readonly isPosixAttributesAdditionRequired?: boolean | cdktf.IResolvable;
}

export function bdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetailsToTerraform(struct?: BdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetailsOutputReference | BdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_posix_attributes_addition_required: cdktf.booleanToTerraform(struct!.isPosixAttributesAdditionRequired),
  }
}


export function bdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetailsToHclTerraform(struct?: BdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetailsOutputReference | BdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_posix_attributes_addition_required: {
      value: cdktf.booleanToHclTerraform(struct!.isPosixAttributesAdditionRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isPosixAttributesAdditionRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPosixAttributesAdditionRequired = this._isPosixAttributesAdditionRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isPosixAttributesAdditionRequired = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isPosixAttributesAdditionRequired = value.isPosixAttributesAdditionRequired;
    }
  }

  // is_posix_attributes_addition_required - computed: true, optional: true, required: false
  private _isPosixAttributesAdditionRequired?: boolean | cdktf.IResolvable; 
  public get isPosixAttributesAdditionRequired() {
    return this.getBooleanAttribute('is_posix_attributes_addition_required');
  }
  public set isPosixAttributesAdditionRequired(value: boolean | cdktf.IResolvable) {
    this._isPosixAttributesAdditionRequired = value;
  }
  public resetIsPosixAttributesAdditionRequired() {
    this._isPosixAttributesAdditionRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPosixAttributesAdditionRequiredInput() {
    return this._isPosixAttributesAdditionRequired;
  }
}
export interface BdsBdsInstanceIdentityConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_identity_configuration#create BdsBdsInstanceIdentityConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_identity_configuration#delete BdsBdsInstanceIdentityConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_identity_configuration#update BdsBdsInstanceIdentityConfiguration#update}
  */
  readonly update?: string;
}

export function bdsBdsInstanceIdentityConfigurationTimeoutsToTerraform(struct?: BdsBdsInstanceIdentityConfigurationTimeouts | cdktf.IResolvable): any {
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


export function bdsBdsInstanceIdentityConfigurationTimeoutsToHclTerraform(struct?: BdsBdsInstanceIdentityConfigurationTimeouts | cdktf.IResolvable): any {
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

export class BdsBdsInstanceIdentityConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BdsBdsInstanceIdentityConfigurationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BdsBdsInstanceIdentityConfigurationTimeouts | cdktf.IResolvable | undefined) {
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
export interface BdsBdsInstanceIdentityConfigurationUpstConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_identity_configuration#master_encryption_key_id BdsBdsInstanceIdentityConfiguration#master_encryption_key_id}
  */
  readonly masterEncryptionKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_identity_configuration#vault_id BdsBdsInstanceIdentityConfiguration#vault_id}
  */
  readonly vaultId?: string;
}

export function bdsBdsInstanceIdentityConfigurationUpstConfigurationDetailsToTerraform(struct?: BdsBdsInstanceIdentityConfigurationUpstConfigurationDetailsOutputReference | BdsBdsInstanceIdentityConfigurationUpstConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    master_encryption_key_id: cdktf.stringToTerraform(struct!.masterEncryptionKeyId),
    vault_id: cdktf.stringToTerraform(struct!.vaultId),
  }
}


export function bdsBdsInstanceIdentityConfigurationUpstConfigurationDetailsToHclTerraform(struct?: BdsBdsInstanceIdentityConfigurationUpstConfigurationDetailsOutputReference | BdsBdsInstanceIdentityConfigurationUpstConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    master_encryption_key_id: {
      value: cdktf.stringToHclTerraform(struct!.masterEncryptionKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_id: {
      value: cdktf.stringToHclTerraform(struct!.vaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsInstanceIdentityConfigurationUpstConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsBdsInstanceIdentityConfigurationUpstConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._masterEncryptionKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterEncryptionKeyId = this._masterEncryptionKeyId;
    }
    if (this._vaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultId = this._vaultId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceIdentityConfigurationUpstConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._masterEncryptionKeyId = undefined;
      this._vaultId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._masterEncryptionKeyId = value.masterEncryptionKeyId;
      this._vaultId = value.vaultId;
    }
  }

  // master_encryption_key_id - computed: true, optional: true, required: false
  private _masterEncryptionKeyId?: string; 
  public get masterEncryptionKeyId() {
    return this.getStringAttribute('master_encryption_key_id');
  }
  public set masterEncryptionKeyId(value: string) {
    this._masterEncryptionKeyId = value;
  }
  public resetMasterEncryptionKeyId() {
    this._masterEncryptionKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterEncryptionKeyIdInput() {
    return this._masterEncryptionKeyId;
  }

  // vault_id - computed: true, optional: true, required: false
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  public resetVaultId() {
    this._vaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_identity_configuration oci_bds_bds_instance_identity_configuration}
*/
export class BdsBdsInstanceIdentityConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_bds_bds_instance_identity_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BdsBdsInstanceIdentityConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BdsBdsInstanceIdentityConfiguration to import
  * @param importFromId The id of the existing BdsBdsInstanceIdentityConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_identity_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BdsBdsInstanceIdentityConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_bds_bds_instance_identity_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_identity_configuration oci_bds_bds_instance_identity_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BdsBdsInstanceIdentityConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: BdsBdsInstanceIdentityConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_bds_bds_instance_identity_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activateIamUserSyncConfigurationTrigger = config.activateIamUserSyncConfigurationTrigger;
    this._activateUpstConfigurationTrigger = config.activateUpstConfigurationTrigger;
    this._bdsInstanceId = config.bdsInstanceId;
    this._clusterAdminPassword = config.clusterAdminPassword;
    this._confidentialApplicationId = config.confidentialApplicationId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._identityDomainId = config.identityDomainId;
    this._refreshConfidentialApplicationTrigger = config.refreshConfidentialApplicationTrigger;
    this._refreshUpstTokenExchangeKeytabTrigger = config.refreshUpstTokenExchangeKeytabTrigger;
    this._iamUserSyncConfigurationDetails.internalValue = config.iamUserSyncConfigurationDetails;
    this._timeouts.internalValue = config.timeouts;
    this._upstConfigurationDetails.internalValue = config.upstConfigurationDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activate_iam_user_sync_configuration_trigger - computed: false, optional: true, required: false
  private _activateIamUserSyncConfigurationTrigger?: string; 
  public get activateIamUserSyncConfigurationTrigger() {
    return this.getStringAttribute('activate_iam_user_sync_configuration_trigger');
  }
  public set activateIamUserSyncConfigurationTrigger(value: string) {
    this._activateIamUserSyncConfigurationTrigger = value;
  }
  public resetActivateIamUserSyncConfigurationTrigger() {
    this._activateIamUserSyncConfigurationTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateIamUserSyncConfigurationTriggerInput() {
    return this._activateIamUserSyncConfigurationTrigger;
  }

  // activate_upst_configuration_trigger - computed: false, optional: true, required: false
  private _activateUpstConfigurationTrigger?: string; 
  public get activateUpstConfigurationTrigger() {
    return this.getStringAttribute('activate_upst_configuration_trigger');
  }
  public set activateUpstConfigurationTrigger(value: string) {
    this._activateUpstConfigurationTrigger = value;
  }
  public resetActivateUpstConfigurationTrigger() {
    this._activateUpstConfigurationTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateUpstConfigurationTriggerInput() {
    return this._activateUpstConfigurationTrigger;
  }

  // bds_instance_id - computed: false, optional: false, required: true
  private _bdsInstanceId?: string; 
  public get bdsInstanceId() {
    return this.getStringAttribute('bds_instance_id');
  }
  public set bdsInstanceId(value: string) {
    this._bdsInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bdsInstanceIdInput() {
    return this._bdsInstanceId;
  }

  // cluster_admin_password - computed: false, optional: false, required: true
  private _clusterAdminPassword?: string; 
  public get clusterAdminPassword() {
    return this.getStringAttribute('cluster_admin_password');
  }
  public set clusterAdminPassword(value: string) {
    this._clusterAdminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAdminPasswordInput() {
    return this._clusterAdminPassword;
  }

  // confidential_application_id - computed: false, optional: false, required: true
  private _confidentialApplicationId?: string; 
  public get confidentialApplicationId() {
    return this.getStringAttribute('confidential_application_id');
  }
  public set confidentialApplicationId(value: string) {
    this._confidentialApplicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialApplicationIdInput() {
    return this._confidentialApplicationId;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // iam_user_sync_configuration - computed: true, optional: false, required: false
  private _iamUserSyncConfiguration = new BdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationList(this, "iam_user_sync_configuration", false);
  public get iamUserSyncConfiguration() {
    return this._iamUserSyncConfiguration;
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

  // identity_domain_id - computed: false, optional: false, required: true
  private _identityDomainId?: string; 
  public get identityDomainId() {
    return this.getStringAttribute('identity_domain_id');
  }
  public set identityDomainId(value: string) {
    this._identityDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityDomainIdInput() {
    return this._identityDomainId;
  }

  // refresh_confidential_application_trigger - computed: false, optional: true, required: false
  private _refreshConfidentialApplicationTrigger?: string; 
  public get refreshConfidentialApplicationTrigger() {
    return this.getStringAttribute('refresh_confidential_application_trigger');
  }
  public set refreshConfidentialApplicationTrigger(value: string) {
    this._refreshConfidentialApplicationTrigger = value;
  }
  public resetRefreshConfidentialApplicationTrigger() {
    this._refreshConfidentialApplicationTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshConfidentialApplicationTriggerInput() {
    return this._refreshConfidentialApplicationTrigger;
  }

  // refresh_upst_token_exchange_keytab_trigger - computed: false, optional: true, required: false
  private _refreshUpstTokenExchangeKeytabTrigger?: string; 
  public get refreshUpstTokenExchangeKeytabTrigger() {
    return this.getStringAttribute('refresh_upst_token_exchange_keytab_trigger');
  }
  public set refreshUpstTokenExchangeKeytabTrigger(value: string) {
    this._refreshUpstTokenExchangeKeytabTrigger = value;
  }
  public resetRefreshUpstTokenExchangeKeytabTrigger() {
    this._refreshUpstTokenExchangeKeytabTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshUpstTokenExchangeKeytabTriggerInput() {
    return this._refreshUpstTokenExchangeKeytabTrigger;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // upst_configuration - computed: true, optional: false, required: false
  private _upstConfiguration = new BdsBdsInstanceIdentityConfigurationUpstConfigurationList(this, "upst_configuration", false);
  public get upstConfiguration() {
    return this._upstConfiguration;
  }

  // iam_user_sync_configuration_details - computed: false, optional: true, required: false
  private _iamUserSyncConfigurationDetails = new BdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetailsOutputReference(this, "iam_user_sync_configuration_details");
  public get iamUserSyncConfigurationDetails() {
    return this._iamUserSyncConfigurationDetails;
  }
  public putIamUserSyncConfigurationDetails(value: BdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetails) {
    this._iamUserSyncConfigurationDetails.internalValue = value;
  }
  public resetIamUserSyncConfigurationDetails() {
    this._iamUserSyncConfigurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamUserSyncConfigurationDetailsInput() {
    return this._iamUserSyncConfigurationDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BdsBdsInstanceIdentityConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BdsBdsInstanceIdentityConfigurationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // upst_configuration_details - computed: false, optional: true, required: false
  private _upstConfigurationDetails = new BdsBdsInstanceIdentityConfigurationUpstConfigurationDetailsOutputReference(this, "upst_configuration_details");
  public get upstConfigurationDetails() {
    return this._upstConfigurationDetails;
  }
  public putUpstConfigurationDetails(value: BdsBdsInstanceIdentityConfigurationUpstConfigurationDetails) {
    this._upstConfigurationDetails.internalValue = value;
  }
  public resetUpstConfigurationDetails() {
    this._upstConfigurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstConfigurationDetailsInput() {
    return this._upstConfigurationDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activate_iam_user_sync_configuration_trigger: cdktf.stringToTerraform(this._activateIamUserSyncConfigurationTrigger),
      activate_upst_configuration_trigger: cdktf.stringToTerraform(this._activateUpstConfigurationTrigger),
      bds_instance_id: cdktf.stringToTerraform(this._bdsInstanceId),
      cluster_admin_password: cdktf.stringToTerraform(this._clusterAdminPassword),
      confidential_application_id: cdktf.stringToTerraform(this._confidentialApplicationId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      identity_domain_id: cdktf.stringToTerraform(this._identityDomainId),
      refresh_confidential_application_trigger: cdktf.stringToTerraform(this._refreshConfidentialApplicationTrigger),
      refresh_upst_token_exchange_keytab_trigger: cdktf.stringToTerraform(this._refreshUpstTokenExchangeKeytabTrigger),
      iam_user_sync_configuration_details: bdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetailsToTerraform(this._iamUserSyncConfigurationDetails.internalValue),
      timeouts: bdsBdsInstanceIdentityConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
      upst_configuration_details: bdsBdsInstanceIdentityConfigurationUpstConfigurationDetailsToTerraform(this._upstConfigurationDetails.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activate_iam_user_sync_configuration_trigger: {
        value: cdktf.stringToHclTerraform(this._activateIamUserSyncConfigurationTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      activate_upst_configuration_trigger: {
        value: cdktf.stringToHclTerraform(this._activateUpstConfigurationTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bds_instance_id: {
        value: cdktf.stringToHclTerraform(this._bdsInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_admin_password: {
        value: cdktf.stringToHclTerraform(this._clusterAdminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      confidential_application_id: {
        value: cdktf.stringToHclTerraform(this._confidentialApplicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_domain_id: {
        value: cdktf.stringToHclTerraform(this._identityDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_confidential_application_trigger: {
        value: cdktf.stringToHclTerraform(this._refreshConfidentialApplicationTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_upst_token_exchange_keytab_trigger: {
        value: cdktf.stringToHclTerraform(this._refreshUpstTokenExchangeKeytabTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_user_sync_configuration_details: {
        value: bdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetailsToHclTerraform(this._iamUserSyncConfigurationDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetailsList",
      },
      timeouts: {
        value: bdsBdsInstanceIdentityConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BdsBdsInstanceIdentityConfigurationTimeouts",
      },
      upst_configuration_details: {
        value: bdsBdsInstanceIdentityConfigurationUpstConfigurationDetailsToHclTerraform(this._upstConfigurationDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BdsBdsInstanceIdentityConfigurationUpstConfigurationDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
