// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_backups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseBackupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_backups#backup_destination_type DataOciDatabaseBackups#backup_destination_type}
  */
  readonly backupDestinationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_backups#compartment_id DataOciDatabaseBackups#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_backups#database_id DataOciDatabaseBackups#database_id}
  */
  readonly databaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_backups#id DataOciDatabaseBackups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_backups#shape_family DataOciDatabaseBackups#shape_family}
  */
  readonly shapeFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_backups#state DataOciDatabaseBackups#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_backups#time_expiry_scheduled_greater_than_or_equal_to DataOciDatabaseBackups#time_expiry_scheduled_greater_than_or_equal_to}
  */
  readonly timeExpiryScheduledGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_backups#time_expiry_scheduled_less_than DataOciDatabaseBackups#time_expiry_scheduled_less_than}
  */
  readonly timeExpiryScheduledLessThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_backups#type DataOciDatabaseBackups#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_backups#version DataOciDatabaseBackups#version}
  */
  readonly version?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_backups#filter DataOciDatabaseBackups#filter}
  */
  readonly filter?: DataOciDatabaseBackupsFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseBackupsBackupsEncryptionKeyLocationDetails {
}

export function dataOciDatabaseBackupsBackupsEncryptionKeyLocationDetailsToTerraform(struct?: DataOciDatabaseBackupsBackupsEncryptionKeyLocationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseBackupsBackupsEncryptionKeyLocationDetailsToHclTerraform(struct?: DataOciDatabaseBackupsBackupsEncryptionKeyLocationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseBackupsBackupsEncryptionKeyLocationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseBackupsBackupsEncryptionKeyLocationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseBackupsBackupsEncryptionKeyLocationDetails | undefined) {
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

export class DataOciDatabaseBackupsBackupsEncryptionKeyLocationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseBackupsBackupsEncryptionKeyLocationDetailsOutputReference {
    return new DataOciDatabaseBackupsBackupsEncryptionKeyLocationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseBackupsBackups {
}

export function dataOciDatabaseBackupsBackupsToTerraform(struct?: DataOciDatabaseBackupsBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseBackupsBackupsToHclTerraform(struct?: DataOciDatabaseBackupsBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseBackupsBackupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseBackupsBackups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseBackupsBackups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

  // database_id - computed: true, optional: false, required: false
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }

  // database_size_in_gbs - computed: true, optional: false, required: false
  public get databaseSizeInGbs() {
    return this.getNumberAttribute('database_size_in_gbs');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // encryption_key_location_details - computed: true, optional: false, required: false
  private _encryptionKeyLocationDetails = new DataOciDatabaseBackupsBackupsEncryptionKeyLocationDetailsList(this, "encryption_key_location_details", false);
  public get encryptionKeyLocationDetails() {
    return this._encryptionKeyLocationDetails;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // retention_period_in_days - computed: true, optional: false, required: false
  public get retentionPeriodInDays() {
    return this.getNumberAttribute('retention_period_in_days');
  }

  // retention_period_in_years - computed: true, optional: false, required: false
  public get retentionPeriodInYears() {
    return this.getNumberAttribute('retention_period_in_years');
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
}

export class DataOciDatabaseBackupsBackupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseBackupsBackupsOutputReference {
    return new DataOciDatabaseBackupsBackupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseBackupsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_backups#name DataOciDatabaseBackups#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_backups#regex DataOciDatabaseBackups#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_backups#values DataOciDatabaseBackups#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseBackupsFilterToTerraform(struct?: DataOciDatabaseBackupsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciDatabaseBackupsFilterToHclTerraform(struct?: DataOciDatabaseBackupsFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataOciDatabaseBackupsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseBackupsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseBackupsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciDatabaseBackupsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseBackupsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseBackupsFilterOutputReference {
    return new DataOciDatabaseBackupsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_backups oci_database_backups}
*/
export class DataOciDatabaseBackups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_backups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseBackups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseBackups to import
  * @param importFromId The id of the existing DataOciDatabaseBackups that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_backups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseBackups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_backups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_backups oci_database_backups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseBackupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseBackupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_database_backups',
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
    this._backupDestinationType = config.backupDestinationType;
    this._compartmentId = config.compartmentId;
    this._databaseId = config.databaseId;
    this._id = config.id;
    this._shapeFamily = config.shapeFamily;
    this._state = config.state;
    this._timeExpiryScheduledGreaterThanOrEqualTo = config.timeExpiryScheduledGreaterThanOrEqualTo;
    this._timeExpiryScheduledLessThan = config.timeExpiryScheduledLessThan;
    this._type = config.type;
    this._version = config.version;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_destination_type - computed: false, optional: true, required: false
  private _backupDestinationType?: string; 
  public get backupDestinationType() {
    return this.getStringAttribute('backup_destination_type');
  }
  public set backupDestinationType(value: string) {
    this._backupDestinationType = value;
  }
  public resetBackupDestinationType() {
    this._backupDestinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDestinationTypeInput() {
    return this._backupDestinationType;
  }

  // backups - computed: true, optional: false, required: false
  private _backups = new DataOciDatabaseBackupsBackupsList(this, "backups", false);
  public get backups() {
    return this._backups;
  }

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // database_id - computed: false, optional: true, required: false
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  public resetDatabaseId() {
    this._databaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
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

  // shape_family - computed: false, optional: true, required: false
  private _shapeFamily?: string; 
  public get shapeFamily() {
    return this.getStringAttribute('shape_family');
  }
  public set shapeFamily(value: string) {
    this._shapeFamily = value;
  }
  public resetShapeFamily() {
    this._shapeFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeFamilyInput() {
    return this._shapeFamily;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // time_expiry_scheduled_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timeExpiryScheduledGreaterThanOrEqualTo?: string; 
  public get timeExpiryScheduledGreaterThanOrEqualTo() {
    return this.getStringAttribute('time_expiry_scheduled_greater_than_or_equal_to');
  }
  public set timeExpiryScheduledGreaterThanOrEqualTo(value: string) {
    this._timeExpiryScheduledGreaterThanOrEqualTo = value;
  }
  public resetTimeExpiryScheduledGreaterThanOrEqualTo() {
    this._timeExpiryScheduledGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeExpiryScheduledGreaterThanOrEqualToInput() {
    return this._timeExpiryScheduledGreaterThanOrEqualTo;
  }

  // time_expiry_scheduled_less_than - computed: false, optional: true, required: false
  private _timeExpiryScheduledLessThan?: string; 
  public get timeExpiryScheduledLessThan() {
    return this.getStringAttribute('time_expiry_scheduled_less_than');
  }
  public set timeExpiryScheduledLessThan(value: string) {
    this._timeExpiryScheduledLessThan = value;
  }
  public resetTimeExpiryScheduledLessThan() {
    this._timeExpiryScheduledLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeExpiryScheduledLessThanInput() {
    return this._timeExpiryScheduledLessThan;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatabaseBackupsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseBackupsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_destination_type: cdktf.stringToTerraform(this._backupDestinationType),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      database_id: cdktf.stringToTerraform(this._databaseId),
      id: cdktf.stringToTerraform(this._id),
      shape_family: cdktf.stringToTerraform(this._shapeFamily),
      state: cdktf.stringToTerraform(this._state),
      time_expiry_scheduled_greater_than_or_equal_to: cdktf.stringToTerraform(this._timeExpiryScheduledGreaterThanOrEqualTo),
      time_expiry_scheduled_less_than: cdktf.stringToTerraform(this._timeExpiryScheduledLessThan),
      type: cdktf.stringToTerraform(this._type),
      version: cdktf.stringToTerraform(this._version),
      filter: cdktf.listMapper(dataOciDatabaseBackupsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_destination_type: {
        value: cdktf.stringToHclTerraform(this._backupDestinationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_id: {
        value: cdktf.stringToHclTerraform(this._databaseId),
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
      shape_family: {
        value: cdktf.stringToHclTerraform(this._shapeFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_expiry_scheduled_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeExpiryScheduledGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_expiry_scheduled_less_than: {
        value: cdktf.stringToHclTerraform(this._timeExpiryScheduledLessThan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDatabaseBackupsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseBackupsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
