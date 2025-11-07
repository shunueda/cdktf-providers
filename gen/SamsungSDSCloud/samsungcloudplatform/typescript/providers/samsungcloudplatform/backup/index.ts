// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/backup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Multi AZ Code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/backup#az_code Backup#az_code}
  */
  readonly azCode?: string;
  /**
  * Backup(DR) Service Zone Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/backup#backup_dr_zone_id Backup#backup_dr_zone_id}
  */
  readonly backupDrZoneId?: string;
  /**
  * Backup Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/backup#backup_name Backup#backup_name}
  */
  readonly backupName: string;
  /**
  * Backup Policy Type Category (VM, FILESYSTEM)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/backup#backup_policy_type_category Backup#backup_policy_type_category}
  */
  readonly backupPolicyTypeCategory: string;
  /**
  * Backup Repository (SD_STORAGE)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/backup#backup_repository Backup#backup_repository}
  */
  readonly backupRepository: string;
  /**
  * Multi AZ(DR) Code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/backup#dr_az_code Backup#dr_az_code}
  */
  readonly drAzCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/backup#id Backup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Incremental Backup Retention Period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/backup#incremental_retention_period Backup#incremental_retention_period}
  */
  readonly incrementalRetentionPeriod?: string;
  /**
  * IF 'Y', Destroy DR replica together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/backup#is_backup_dr_destroy_enabled Backup#is_backup_dr_destroy_enabled}
  */
  readonly isBackupDrDestroyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Backup(DR) Activation (If 'Y', Backup(DR) will be activated)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/backup#is_backup_dr_enabled Backup#is_backup_dr_enabled}
  */
  readonly isBackupDrEnabled?: string;
  /**
  * Backup Object ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/backup#object_id Backup#object_id}
  */
  readonly objectId: string;
  /**
  * Backup Object Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/backup#object_type Backup#object_type}
  */
  readonly objectType: string;
  /**
  * Backup Policy Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/backup#policy_type Backup#policy_type}
  */
  readonly policyType: string;
  /**
  * Product Names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/backup#product_names Backup#product_names}
  */
  readonly productNames: string[];
  /**
  * Full Backup Retention Period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/backup#retention_period Backup#retention_period}
  */
  readonly retentionPeriod?: string;
  /**
  * Service Zone ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/backup#service_zone_id Backup#service_zone_id}
  */
  readonly serviceZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/backup#tags Backup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * schedules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/backup#schedules Backup#schedules}
  */
  readonly schedules: BackupSchedules[] | cdktf.IResolvable;
}
export interface BackupSchedules {
  /**
  * Backup Schedule Frequency (MONTHLY, WEEKLY, DAYS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/backup#schedule_frequency Backup#schedule_frequency}
  */
  readonly scheduleFrequency: string;
  /**
  * Backup Schedule Frequency details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/backup#schedule_frequency_detail Backup#schedule_frequency_detail}
  */
  readonly scheduleFrequencyDetail: string;
  /**
  * Backup Schedule Type (FULL, INCREMENTAL)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/backup#schedule_type Backup#schedule_type}
  */
  readonly scheduleType: string;
  /**
  * Backup Start Time (format:HH:mm±hh:mm)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/backup#start_time Backup#start_time}
  */
  readonly startTime: string;
}

export function backupSchedulesToTerraform(struct?: BackupSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedule_frequency: cdktf.stringToTerraform(struct!.scheduleFrequency),
    schedule_frequency_detail: cdktf.stringToTerraform(struct!.scheduleFrequencyDetail),
    schedule_type: cdktf.stringToTerraform(struct!.scheduleType),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function backupSchedulesToHclTerraform(struct?: BackupSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schedule_frequency: {
      value: cdktf.stringToHclTerraform(struct!.scheduleFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_frequency_detail: {
      value: cdktf.stringToHclTerraform(struct!.scheduleFrequencyDetail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_type: {
      value: cdktf.stringToHclTerraform(struct!.scheduleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackupSchedules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scheduleFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleFrequency = this._scheduleFrequency;
    }
    if (this._scheduleFrequencyDetail !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleFrequencyDetail = this._scheduleFrequencyDetail;
    }
    if (this._scheduleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleType = this._scheduleType;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupSchedules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scheduleFrequency = undefined;
      this._scheduleFrequencyDetail = undefined;
      this._scheduleType = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scheduleFrequency = value.scheduleFrequency;
      this._scheduleFrequencyDetail = value.scheduleFrequencyDetail;
      this._scheduleType = value.scheduleType;
      this._startTime = value.startTime;
    }
  }

  // schedule_frequency - computed: false, optional: false, required: true
  private _scheduleFrequency?: string; 
  public get scheduleFrequency() {
    return this.getStringAttribute('schedule_frequency');
  }
  public set scheduleFrequency(value: string) {
    this._scheduleFrequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleFrequencyInput() {
    return this._scheduleFrequency;
  }

  // schedule_frequency_detail - computed: false, optional: false, required: true
  private _scheduleFrequencyDetail?: string; 
  public get scheduleFrequencyDetail() {
    return this.getStringAttribute('schedule_frequency_detail');
  }
  public set scheduleFrequencyDetail(value: string) {
    this._scheduleFrequencyDetail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleFrequencyDetailInput() {
    return this._scheduleFrequencyDetail;
  }

  // schedule_id - computed: true, optional: false, required: false
  public get scheduleId() {
    return this.getStringAttribute('schedule_id');
  }

  // schedule_name - computed: true, optional: false, required: false
  public get scheduleName() {
    return this.getStringAttribute('schedule_name');
  }

  // schedule_type - computed: false, optional: false, required: true
  private _scheduleType?: string; 
  public get scheduleType() {
    return this.getStringAttribute('schedule_type');
  }
  public set scheduleType(value: string) {
    this._scheduleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTypeInput() {
    return this._scheduleType;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class BackupSchedulesList extends cdktf.ComplexList {
  public internalValue? : BackupSchedules[] | cdktf.IResolvable

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
  public get(index: number): BackupSchedulesOutputReference {
    return new BackupSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/backup samsungcloudplatform_backup}
*/
export class Backup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_backup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Backup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Backup to import
  * @param importFromId The id of the existing Backup that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/backup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Backup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_backup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/backup samsungcloudplatform_backup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupConfig
  */
  public constructor(scope: Construct, id: string, config: BackupConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_backup',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._azCode = config.azCode;
    this._backupDrZoneId = config.backupDrZoneId;
    this._backupName = config.backupName;
    this._backupPolicyTypeCategory = config.backupPolicyTypeCategory;
    this._backupRepository = config.backupRepository;
    this._drAzCode = config.drAzCode;
    this._id = config.id;
    this._incrementalRetentionPeriod = config.incrementalRetentionPeriod;
    this._isBackupDrDestroyEnabled = config.isBackupDrDestroyEnabled;
    this._isBackupDrEnabled = config.isBackupDrEnabled;
    this._objectId = config.objectId;
    this._objectType = config.objectType;
    this._policyType = config.policyType;
    this._productNames = config.productNames;
    this._retentionPeriod = config.retentionPeriod;
    this._serviceZoneId = config.serviceZoneId;
    this._tags = config.tags;
    this._schedules.internalValue = config.schedules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // az_code - computed: false, optional: true, required: false
  private _azCode?: string; 
  public get azCode() {
    return this.getStringAttribute('az_code');
  }
  public set azCode(value: string) {
    this._azCode = value;
  }
  public resetAzCode() {
    this._azCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azCodeInput() {
    return this._azCode;
  }

  // backup_dr_id - computed: true, optional: false, required: false
  public get backupDrId() {
    return this.getStringAttribute('backup_dr_id');
  }

  // backup_dr_zone_id - computed: false, optional: true, required: false
  private _backupDrZoneId?: string; 
  public get backupDrZoneId() {
    return this.getStringAttribute('backup_dr_zone_id');
  }
  public set backupDrZoneId(value: string) {
    this._backupDrZoneId = value;
  }
  public resetBackupDrZoneId() {
    this._backupDrZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDrZoneIdInput() {
    return this._backupDrZoneId;
  }

  // backup_name - computed: false, optional: false, required: true
  private _backupName?: string; 
  public get backupName() {
    return this.getStringAttribute('backup_name');
  }
  public set backupName(value: string) {
    this._backupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupNameInput() {
    return this._backupName;
  }

  // backup_policy_type_category - computed: false, optional: false, required: true
  private _backupPolicyTypeCategory?: string; 
  public get backupPolicyTypeCategory() {
    return this.getStringAttribute('backup_policy_type_category');
  }
  public set backupPolicyTypeCategory(value: string) {
    this._backupPolicyTypeCategory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyTypeCategoryInput() {
    return this._backupPolicyTypeCategory;
  }

  // backup_repository - computed: false, optional: false, required: true
  private _backupRepository?: string; 
  public get backupRepository() {
    return this.getStringAttribute('backup_repository');
  }
  public set backupRepository(value: string) {
    this._backupRepository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRepositoryInput() {
    return this._backupRepository;
  }

  // dr_az_code - computed: false, optional: true, required: false
  private _drAzCode?: string; 
  public get drAzCode() {
    return this.getStringAttribute('dr_az_code');
  }
  public set drAzCode(value: string) {
    this._drAzCode = value;
  }
  public resetDrAzCode() {
    this._drAzCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drAzCodeInput() {
    return this._drAzCode;
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

  // incremental_retention_period - computed: false, optional: true, required: false
  private _incrementalRetentionPeriod?: string; 
  public get incrementalRetentionPeriod() {
    return this.getStringAttribute('incremental_retention_period');
  }
  public set incrementalRetentionPeriod(value: string) {
    this._incrementalRetentionPeriod = value;
  }
  public resetIncrementalRetentionPeriod() {
    this._incrementalRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalRetentionPeriodInput() {
    return this._incrementalRetentionPeriod;
  }

  // is_backup_dr_deleted - computed: true, optional: false, required: false
  public get isBackupDrDeleted() {
    return this.getStringAttribute('is_backup_dr_deleted');
  }

  // is_backup_dr_destroy_enabled - computed: false, optional: true, required: false
  private _isBackupDrDestroyEnabled?: boolean | cdktf.IResolvable; 
  public get isBackupDrDestroyEnabled() {
    return this.getBooleanAttribute('is_backup_dr_destroy_enabled');
  }
  public set isBackupDrDestroyEnabled(value: boolean | cdktf.IResolvable) {
    this._isBackupDrDestroyEnabled = value;
  }
  public resetIsBackupDrDestroyEnabled() {
    this._isBackupDrDestroyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBackupDrDestroyEnabledInput() {
    return this._isBackupDrDestroyEnabled;
  }

  // is_backup_dr_enabled - computed: false, optional: true, required: false
  private _isBackupDrEnabled?: string; 
  public get isBackupDrEnabled() {
    return this.getStringAttribute('is_backup_dr_enabled');
  }
  public set isBackupDrEnabled(value: string) {
    this._isBackupDrEnabled = value;
  }
  public resetIsBackupDrEnabled() {
    this._isBackupDrEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBackupDrEnabledInput() {
    return this._isBackupDrEnabled;
  }

  // object_id - computed: false, optional: false, required: true
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // object_type - computed: false, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // policy_type - computed: false, optional: false, required: true
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // product_names - computed: false, optional: false, required: true
  private _productNames?: string[]; 
  public get productNames() {
    return this.getListAttribute('product_names');
  }
  public set productNames(value: string[]) {
    this._productNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productNamesInput() {
    return this._productNames;
  }

  // retention_period - computed: false, optional: true, required: false
  private _retentionPeriod?: string; 
  public get retentionPeriod() {
    return this.getStringAttribute('retention_period');
  }
  public set retentionPeriod(value: string) {
    this._retentionPeriod = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }

  // service_zone_id - computed: false, optional: false, required: true
  private _serviceZoneId?: string; 
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }
  public set serviceZoneId(value: string) {
    this._serviceZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceZoneIdInput() {
    return this._serviceZoneId;
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

  // schedules - computed: false, optional: false, required: true
  private _schedules = new BackupSchedulesList(this, "schedules", false);
  public get schedules() {
    return this._schedules;
  }
  public putSchedules(value: BackupSchedules[] | cdktf.IResolvable) {
    this._schedules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulesInput() {
    return this._schedules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      az_code: cdktf.stringToTerraform(this._azCode),
      backup_dr_zone_id: cdktf.stringToTerraform(this._backupDrZoneId),
      backup_name: cdktf.stringToTerraform(this._backupName),
      backup_policy_type_category: cdktf.stringToTerraform(this._backupPolicyTypeCategory),
      backup_repository: cdktf.stringToTerraform(this._backupRepository),
      dr_az_code: cdktf.stringToTerraform(this._drAzCode),
      id: cdktf.stringToTerraform(this._id),
      incremental_retention_period: cdktf.stringToTerraform(this._incrementalRetentionPeriod),
      is_backup_dr_destroy_enabled: cdktf.booleanToTerraform(this._isBackupDrDestroyEnabled),
      is_backup_dr_enabled: cdktf.stringToTerraform(this._isBackupDrEnabled),
      object_id: cdktf.stringToTerraform(this._objectId),
      object_type: cdktf.stringToTerraform(this._objectType),
      policy_type: cdktf.stringToTerraform(this._policyType),
      product_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._productNames),
      retention_period: cdktf.stringToTerraform(this._retentionPeriod),
      service_zone_id: cdktf.stringToTerraform(this._serviceZoneId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      schedules: cdktf.listMapper(backupSchedulesToTerraform, true)(this._schedules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      az_code: {
        value: cdktf.stringToHclTerraform(this._azCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_dr_zone_id: {
        value: cdktf.stringToHclTerraform(this._backupDrZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_name: {
        value: cdktf.stringToHclTerraform(this._backupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_policy_type_category: {
        value: cdktf.stringToHclTerraform(this._backupPolicyTypeCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_repository: {
        value: cdktf.stringToHclTerraform(this._backupRepository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dr_az_code: {
        value: cdktf.stringToHclTerraform(this._drAzCode),
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
      incremental_retention_period: {
        value: cdktf.stringToHclTerraform(this._incrementalRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_backup_dr_destroy_enabled: {
        value: cdktf.booleanToHclTerraform(this._isBackupDrDestroyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_backup_dr_enabled: {
        value: cdktf.stringToHclTerraform(this._isBackupDrEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_id: {
        value: cdktf.stringToHclTerraform(this._objectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_type: {
        value: cdktf.stringToHclTerraform(this._objectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_type: {
        value: cdktf.stringToHclTerraform(this._policyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._productNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      retention_period: {
        value: cdktf.stringToHclTerraform(this._retentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_zone_id: {
        value: cdktf.stringToHclTerraform(this._serviceZoneId),
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
      schedules: {
        value: cdktf.listMapperHcl(backupSchedulesToHclTerraform, true)(this._schedules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BackupSchedulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
