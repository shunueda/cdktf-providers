// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_backup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseBackupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_backup#database_id DatabaseBackup#database_id}
  */
  readonly databaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_backup#display_name DatabaseBackup#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_backup#id DatabaseBackup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_backup#retention_period_in_days DatabaseBackup#retention_period_in_days}
  */
  readonly retentionPeriodInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_backup#retention_period_in_years DatabaseBackup#retention_period_in_years}
  */
  readonly retentionPeriodInYears?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_backup#timeouts DatabaseBackup#timeouts}
  */
  readonly timeouts?: DatabaseBackupTimeouts;
}
export interface DatabaseBackupEncryptionKeyLocationDetails {
}

export function databaseBackupEncryptionKeyLocationDetailsToTerraform(struct?: DatabaseBackupEncryptionKeyLocationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseBackupEncryptionKeyLocationDetailsToHclTerraform(struct?: DatabaseBackupEncryptionKeyLocationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseBackupEncryptionKeyLocationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseBackupEncryptionKeyLocationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseBackupEncryptionKeyLocationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_encryption_key_id - computed: true, optional: false, required: false
  public get awsEncryptionKeyId() {
    return this.getStringAttribute('aws_encryption_key_id');
  }

  // azure_encryption_key_id - computed: true, optional: false, required: false
  public get azureEncryptionKeyId() {
    return this.getStringAttribute('azure_encryption_key_id');
  }

  // google_cloud_provider_encryption_key_id - computed: true, optional: false, required: false
  public get googleCloudProviderEncryptionKeyId() {
    return this.getStringAttribute('google_cloud_provider_encryption_key_id');
  }

  // hsm_password - computed: true, optional: false, required: false
  public get hsmPassword() {
    return this.getStringAttribute('hsm_password');
  }

  // provider_type - computed: true, optional: false, required: false
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
}

export class DatabaseBackupEncryptionKeyLocationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseBackupEncryptionKeyLocationDetailsOutputReference {
    return new DatabaseBackupEncryptionKeyLocationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseBackupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_backup#create DatabaseBackup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_backup#delete DatabaseBackup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_backup#update DatabaseBackup#update}
  */
  readonly update?: string;
}

export function databaseBackupTimeoutsToTerraform(struct?: DatabaseBackupTimeouts | cdktf.IResolvable): any {
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


export function databaseBackupTimeoutsToHclTerraform(struct?: DatabaseBackupTimeouts | cdktf.IResolvable): any {
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

export class DatabaseBackupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseBackupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseBackupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_backup oci_database_backup}
*/
export class DatabaseBackup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_backup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseBackup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseBackup to import
  * @param importFromId The id of the existing DatabaseBackup that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_backup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseBackup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_backup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_backup oci_database_backup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseBackupConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseBackupConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_backup',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._databaseId = config.databaseId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._retentionPeriodInDays = config.retentionPeriodInDays;
    this._retentionPeriodInYears = config.retentionPeriodInYears;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // backup_destination_type - computed: true, optional: false, required: false
  public get backupDestinationType() {
    return this.getStringAttribute('backup_destination_type');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // database_edition - computed: true, optional: false, required: false
  public get databaseEdition() {
    return this.getStringAttribute('database_edition');
  }

  // database_id - computed: false, optional: false, required: true
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // database_size_in_gbs - computed: true, optional: false, required: false
  public get databaseSizeInGbs() {
    return this.getNumberAttribute('database_size_in_gbs');
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

  // encryption_key_location_details - computed: true, optional: false, required: false
  private _encryptionKeyLocationDetails = new DatabaseBackupEncryptionKeyLocationDetailsList(this, "encryption_key_location_details", false);
  public get encryptionKeyLocationDetails() {
    return this._encryptionKeyLocationDetails;
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

  // is_using_oracle_managed_keys - computed: true, optional: false, required: false
  public get isUsingOracleManagedKeys() {
    return this.getBooleanAttribute('is_using_oracle_managed_keys');
  }

  // key_store_id - computed: true, optional: false, required: false
  public get keyStoreId() {
    return this.getStringAttribute('key_store_id');
  }

  // key_store_wallet_name - computed: true, optional: false, required: false
  public get keyStoreWalletName() {
    return this.getStringAttribute('key_store_wallet_name');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // kms_key_version_id - computed: true, optional: false, required: false
  public get kmsKeyVersionId() {
    return this.getStringAttribute('kms_key_version_id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // retention_period_in_days - computed: true, optional: true, required: false
  private _retentionPeriodInDays?: number; 
  public get retentionPeriodInDays() {
    return this.getNumberAttribute('retention_period_in_days');
  }
  public set retentionPeriodInDays(value: number) {
    this._retentionPeriodInDays = value;
  }
  public resetRetentionPeriodInDays() {
    this._retentionPeriodInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInDaysInput() {
    return this._retentionPeriodInDays;
  }

  // retention_period_in_years - computed: true, optional: true, required: false
  private _retentionPeriodInYears?: number; 
  public get retentionPeriodInYears() {
    return this.getNumberAttribute('retention_period_in_years');
  }
  public set retentionPeriodInYears(value: number) {
    this._retentionPeriodInYears = value;
  }
  public resetRetentionPeriodInYears() {
    this._retentionPeriodInYears = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInYearsInput() {
    return this._retentionPeriodInYears;
  }

  // secondary_kms_key_ids - computed: true, optional: false, required: false
  public get secondaryKmsKeyIds() {
    return this.getListAttribute('secondary_kms_key_ids');
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_ended - computed: true, optional: false, required: false
  public get timeEnded() {
    return this.getStringAttribute('time_ended');
  }

  // time_expiry_scheduled - computed: true, optional: false, required: false
  public get timeExpiryScheduled() {
    return this.getStringAttribute('time_expiry_scheduled');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseBackupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseBackupTimeouts) {
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
      database_id: cdktf.stringToTerraform(this._databaseId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      retention_period_in_days: cdktf.numberToTerraform(this._retentionPeriodInDays),
      retention_period_in_years: cdktf.numberToTerraform(this._retentionPeriodInYears),
      timeouts: databaseBackupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_id: {
        value: cdktf.stringToHclTerraform(this._databaseId),
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
      retention_period_in_days: {
        value: cdktf.numberToHclTerraform(this._retentionPeriodInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retention_period_in_years: {
        value: cdktf.numberToHclTerraform(this._retentionPeriodInYears),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: databaseBackupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseBackupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
