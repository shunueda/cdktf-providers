// https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeeperEnforcementsVaultAConfig extends cdktf.TerraformMetaArguments {
  /**
  * # of days before deleted records are automatically cleared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_vault#days_before_deleted_records_auto_cleared DataKeeperEnforcementsVaultA#days_before_deleted_records_auto_cleared}
  */
  readonly daysBeforeDeletedRecordsAutoCleared?: number;
  /**
  * # of days before deleted records are automatically cleared permanently
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_vault#days_before_deleted_records_cleared_perm DataKeeperEnforcementsVaultA#days_before_deleted_records_cleared_perm}
  */
  readonly daysBeforeDeletedRecordsClearedPerm?: number;
  /**
  * Generated password complexity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_vault#generated_password_complexity DataKeeperEnforcementsVaultA#generated_password_complexity}
  */
  readonly generatedPasswordComplexity?: string;
  /**
  * Generated security question complexity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_vault#generated_security_question_complexity DataKeeperEnforcementsVaultA#generated_security_question_complexity}
  */
  readonly generatedSecurityQuestionComplexity?: string;
  /**
  * Mask custom fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_vault#mask_custom_fields DataKeeperEnforcementsVaultA#mask_custom_fields}
  */
  readonly maskCustomFields?: boolean | cdktf.IResolvable;
  /**
  * Mask notes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_vault#mask_notes DataKeeperEnforcementsVaultA#mask_notes}
  */
  readonly maskNotes?: boolean | cdktf.IResolvable;
  /**
  * Mask passwords while editing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_vault#mask_passwords_while_editing DataKeeperEnforcementsVaultA#mask_passwords_while_editing}
  */
  readonly maskPasswordsWhileEditing?: boolean | cdktf.IResolvable;
  /**
  * Restrict BreachWatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_vault#restrict_breach_watch DataKeeperEnforcementsVaultA#restrict_breach_watch}
  */
  readonly restrictBreachWatch?: boolean | cdktf.IResolvable;
  /**
  * Restrict creation of folders
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_vault#restrict_create_folder DataKeeperEnforcementsVaultA#restrict_create_folder}
  */
  readonly restrictCreateFolder?: boolean | cdktf.IResolvable;
  /**
  * Restrict creation of folders to within shared-folders only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_vault#restrict_create_folder_to_only_shared_folders DataKeeperEnforcementsVaultA#restrict_create_folder_to_only_shared_folders}
  */
  readonly restrictCreateFolderToOnlySharedFolders?: boolean | cdktf.IResolvable;
  /**
  * Restrict creation of identity payment records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_vault#restrict_create_identity_payment_records DataKeeperEnforcementsVaultA#restrict_create_identity_payment_records}
  */
  readonly restrictCreateIdentityPaymentRecords?: boolean | cdktf.IResolvable;
  /**
  * Restrict creation of records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_vault#restrict_create_record DataKeeperEnforcementsVaultA#restrict_create_record}
  */
  readonly restrictCreateRecord?: boolean | cdktf.IResolvable;
  /**
  * Restrict record creation within shared-folders
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_vault#restrict_create_record_to_shared_folders DataKeeperEnforcementsVaultA#restrict_create_record_to_shared_folders}
  */
  readonly restrictCreateRecordToSharedFolders?: boolean | cdktf.IResolvable;
  /**
  * Send BreachWatch events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_vault#send_breach_watch_events DataKeeperEnforcementsVaultA#send_breach_watch_events}
  */
  readonly sendBreachWatchEvents?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_vault keeper_enforcements_vault}
*/
export class DataKeeperEnforcementsVaultA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keeper_enforcements_vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeeperEnforcementsVaultA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeeperEnforcementsVaultA to import
  * @param importFromId The id of the existing DataKeeperEnforcementsVaultA that should be imported. Refer to the {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_vault#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeeperEnforcementsVaultA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keeper_enforcements_vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_vault keeper_enforcements_vault} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeeperEnforcementsVaultAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataKeeperEnforcementsVaultAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'keeper_enforcements_vault',
      terraformGeneratorMetadata: {
        providerName: 'keeper',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._daysBeforeDeletedRecordsAutoCleared = config.daysBeforeDeletedRecordsAutoCleared;
    this._daysBeforeDeletedRecordsClearedPerm = config.daysBeforeDeletedRecordsClearedPerm;
    this._generatedPasswordComplexity = config.generatedPasswordComplexity;
    this._generatedSecurityQuestionComplexity = config.generatedSecurityQuestionComplexity;
    this._maskCustomFields = config.maskCustomFields;
    this._maskNotes = config.maskNotes;
    this._maskPasswordsWhileEditing = config.maskPasswordsWhileEditing;
    this._restrictBreachWatch = config.restrictBreachWatch;
    this._restrictCreateFolder = config.restrictCreateFolder;
    this._restrictCreateFolderToOnlySharedFolders = config.restrictCreateFolderToOnlySharedFolders;
    this._restrictCreateIdentityPaymentRecords = config.restrictCreateIdentityPaymentRecords;
    this._restrictCreateRecord = config.restrictCreateRecord;
    this._restrictCreateRecordToSharedFolders = config.restrictCreateRecordToSharedFolders;
    this._sendBreachWatchEvents = config.sendBreachWatchEvents;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // days_before_deleted_records_auto_cleared - computed: false, optional: true, required: false
  private _daysBeforeDeletedRecordsAutoCleared?: number; 
  public get daysBeforeDeletedRecordsAutoCleared() {
    return this.getNumberAttribute('days_before_deleted_records_auto_cleared');
  }
  public set daysBeforeDeletedRecordsAutoCleared(value: number) {
    this._daysBeforeDeletedRecordsAutoCleared = value;
  }
  public resetDaysBeforeDeletedRecordsAutoCleared() {
    this._daysBeforeDeletedRecordsAutoCleared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysBeforeDeletedRecordsAutoClearedInput() {
    return this._daysBeforeDeletedRecordsAutoCleared;
  }

  // days_before_deleted_records_cleared_perm - computed: false, optional: true, required: false
  private _daysBeforeDeletedRecordsClearedPerm?: number; 
  public get daysBeforeDeletedRecordsClearedPerm() {
    return this.getNumberAttribute('days_before_deleted_records_cleared_perm');
  }
  public set daysBeforeDeletedRecordsClearedPerm(value: number) {
    this._daysBeforeDeletedRecordsClearedPerm = value;
  }
  public resetDaysBeforeDeletedRecordsClearedPerm() {
    this._daysBeforeDeletedRecordsClearedPerm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysBeforeDeletedRecordsClearedPermInput() {
    return this._daysBeforeDeletedRecordsClearedPerm;
  }

  // generated_password_complexity - computed: false, optional: true, required: false
  private _generatedPasswordComplexity?: string; 
  public get generatedPasswordComplexity() {
    return this.getStringAttribute('generated_password_complexity');
  }
  public set generatedPasswordComplexity(value: string) {
    this._generatedPasswordComplexity = value;
  }
  public resetGeneratedPasswordComplexity() {
    this._generatedPasswordComplexity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedPasswordComplexityInput() {
    return this._generatedPasswordComplexity;
  }

  // generated_security_question_complexity - computed: false, optional: true, required: false
  private _generatedSecurityQuestionComplexity?: string; 
  public get generatedSecurityQuestionComplexity() {
    return this.getStringAttribute('generated_security_question_complexity');
  }
  public set generatedSecurityQuestionComplexity(value: string) {
    this._generatedSecurityQuestionComplexity = value;
  }
  public resetGeneratedSecurityQuestionComplexity() {
    this._generatedSecurityQuestionComplexity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedSecurityQuestionComplexityInput() {
    return this._generatedSecurityQuestionComplexity;
  }

  // mask_custom_fields - computed: false, optional: true, required: false
  private _maskCustomFields?: boolean | cdktf.IResolvable; 
  public get maskCustomFields() {
    return this.getBooleanAttribute('mask_custom_fields');
  }
  public set maskCustomFields(value: boolean | cdktf.IResolvable) {
    this._maskCustomFields = value;
  }
  public resetMaskCustomFields() {
    this._maskCustomFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskCustomFieldsInput() {
    return this._maskCustomFields;
  }

  // mask_notes - computed: false, optional: true, required: false
  private _maskNotes?: boolean | cdktf.IResolvable; 
  public get maskNotes() {
    return this.getBooleanAttribute('mask_notes');
  }
  public set maskNotes(value: boolean | cdktf.IResolvable) {
    this._maskNotes = value;
  }
  public resetMaskNotes() {
    this._maskNotes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskNotesInput() {
    return this._maskNotes;
  }

  // mask_passwords_while_editing - computed: false, optional: true, required: false
  private _maskPasswordsWhileEditing?: boolean | cdktf.IResolvable; 
  public get maskPasswordsWhileEditing() {
    return this.getBooleanAttribute('mask_passwords_while_editing');
  }
  public set maskPasswordsWhileEditing(value: boolean | cdktf.IResolvable) {
    this._maskPasswordsWhileEditing = value;
  }
  public resetMaskPasswordsWhileEditing() {
    this._maskPasswordsWhileEditing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskPasswordsWhileEditingInput() {
    return this._maskPasswordsWhileEditing;
  }

  // restrict_breach_watch - computed: false, optional: true, required: false
  private _restrictBreachWatch?: boolean | cdktf.IResolvable; 
  public get restrictBreachWatch() {
    return this.getBooleanAttribute('restrict_breach_watch');
  }
  public set restrictBreachWatch(value: boolean | cdktf.IResolvable) {
    this._restrictBreachWatch = value;
  }
  public resetRestrictBreachWatch() {
    this._restrictBreachWatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictBreachWatchInput() {
    return this._restrictBreachWatch;
  }

  // restrict_create_folder - computed: false, optional: true, required: false
  private _restrictCreateFolder?: boolean | cdktf.IResolvable; 
  public get restrictCreateFolder() {
    return this.getBooleanAttribute('restrict_create_folder');
  }
  public set restrictCreateFolder(value: boolean | cdktf.IResolvable) {
    this._restrictCreateFolder = value;
  }
  public resetRestrictCreateFolder() {
    this._restrictCreateFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictCreateFolderInput() {
    return this._restrictCreateFolder;
  }

  // restrict_create_folder_to_only_shared_folders - computed: false, optional: true, required: false
  private _restrictCreateFolderToOnlySharedFolders?: boolean | cdktf.IResolvable; 
  public get restrictCreateFolderToOnlySharedFolders() {
    return this.getBooleanAttribute('restrict_create_folder_to_only_shared_folders');
  }
  public set restrictCreateFolderToOnlySharedFolders(value: boolean | cdktf.IResolvable) {
    this._restrictCreateFolderToOnlySharedFolders = value;
  }
  public resetRestrictCreateFolderToOnlySharedFolders() {
    this._restrictCreateFolderToOnlySharedFolders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictCreateFolderToOnlySharedFoldersInput() {
    return this._restrictCreateFolderToOnlySharedFolders;
  }

  // restrict_create_identity_payment_records - computed: false, optional: true, required: false
  private _restrictCreateIdentityPaymentRecords?: boolean | cdktf.IResolvable; 
  public get restrictCreateIdentityPaymentRecords() {
    return this.getBooleanAttribute('restrict_create_identity_payment_records');
  }
  public set restrictCreateIdentityPaymentRecords(value: boolean | cdktf.IResolvable) {
    this._restrictCreateIdentityPaymentRecords = value;
  }
  public resetRestrictCreateIdentityPaymentRecords() {
    this._restrictCreateIdentityPaymentRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictCreateIdentityPaymentRecordsInput() {
    return this._restrictCreateIdentityPaymentRecords;
  }

  // restrict_create_record - computed: false, optional: true, required: false
  private _restrictCreateRecord?: boolean | cdktf.IResolvable; 
  public get restrictCreateRecord() {
    return this.getBooleanAttribute('restrict_create_record');
  }
  public set restrictCreateRecord(value: boolean | cdktf.IResolvable) {
    this._restrictCreateRecord = value;
  }
  public resetRestrictCreateRecord() {
    this._restrictCreateRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictCreateRecordInput() {
    return this._restrictCreateRecord;
  }

  // restrict_create_record_to_shared_folders - computed: false, optional: true, required: false
  private _restrictCreateRecordToSharedFolders?: boolean | cdktf.IResolvable; 
  public get restrictCreateRecordToSharedFolders() {
    return this.getBooleanAttribute('restrict_create_record_to_shared_folders');
  }
  public set restrictCreateRecordToSharedFolders(value: boolean | cdktf.IResolvable) {
    this._restrictCreateRecordToSharedFolders = value;
  }
  public resetRestrictCreateRecordToSharedFolders() {
    this._restrictCreateRecordToSharedFolders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictCreateRecordToSharedFoldersInput() {
    return this._restrictCreateRecordToSharedFolders;
  }

  // send_breach_watch_events - computed: false, optional: true, required: false
  private _sendBreachWatchEvents?: boolean | cdktf.IResolvable; 
  public get sendBreachWatchEvents() {
    return this.getBooleanAttribute('send_breach_watch_events');
  }
  public set sendBreachWatchEvents(value: boolean | cdktf.IResolvable) {
    this._sendBreachWatchEvents = value;
  }
  public resetSendBreachWatchEvents() {
    this._sendBreachWatchEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendBreachWatchEventsInput() {
    return this._sendBreachWatchEvents;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      days_before_deleted_records_auto_cleared: cdktf.numberToTerraform(this._daysBeforeDeletedRecordsAutoCleared),
      days_before_deleted_records_cleared_perm: cdktf.numberToTerraform(this._daysBeforeDeletedRecordsClearedPerm),
      generated_password_complexity: cdktf.stringToTerraform(this._generatedPasswordComplexity),
      generated_security_question_complexity: cdktf.stringToTerraform(this._generatedSecurityQuestionComplexity),
      mask_custom_fields: cdktf.booleanToTerraform(this._maskCustomFields),
      mask_notes: cdktf.booleanToTerraform(this._maskNotes),
      mask_passwords_while_editing: cdktf.booleanToTerraform(this._maskPasswordsWhileEditing),
      restrict_breach_watch: cdktf.booleanToTerraform(this._restrictBreachWatch),
      restrict_create_folder: cdktf.booleanToTerraform(this._restrictCreateFolder),
      restrict_create_folder_to_only_shared_folders: cdktf.booleanToTerraform(this._restrictCreateFolderToOnlySharedFolders),
      restrict_create_identity_payment_records: cdktf.booleanToTerraform(this._restrictCreateIdentityPaymentRecords),
      restrict_create_record: cdktf.booleanToTerraform(this._restrictCreateRecord),
      restrict_create_record_to_shared_folders: cdktf.booleanToTerraform(this._restrictCreateRecordToSharedFolders),
      send_breach_watch_events: cdktf.booleanToTerraform(this._sendBreachWatchEvents),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      days_before_deleted_records_auto_cleared: {
        value: cdktf.numberToHclTerraform(this._daysBeforeDeletedRecordsAutoCleared),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      days_before_deleted_records_cleared_perm: {
        value: cdktf.numberToHclTerraform(this._daysBeforeDeletedRecordsClearedPerm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      generated_password_complexity: {
        value: cdktf.stringToHclTerraform(this._generatedPasswordComplexity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generated_security_question_complexity: {
        value: cdktf.stringToHclTerraform(this._generatedSecurityQuestionComplexity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mask_custom_fields: {
        value: cdktf.booleanToHclTerraform(this._maskCustomFields),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mask_notes: {
        value: cdktf.booleanToHclTerraform(this._maskNotes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mask_passwords_while_editing: {
        value: cdktf.booleanToHclTerraform(this._maskPasswordsWhileEditing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_breach_watch: {
        value: cdktf.booleanToHclTerraform(this._restrictBreachWatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_create_folder: {
        value: cdktf.booleanToHclTerraform(this._restrictCreateFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_create_folder_to_only_shared_folders: {
        value: cdktf.booleanToHclTerraform(this._restrictCreateFolderToOnlySharedFolders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_create_identity_payment_records: {
        value: cdktf.booleanToHclTerraform(this._restrictCreateIdentityPaymentRecords),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_create_record: {
        value: cdktf.booleanToHclTerraform(this._restrictCreateRecord),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_create_record_to_shared_folders: {
        value: cdktf.booleanToHclTerraform(this._restrictCreateRecordToSharedFolders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_breach_watch_events: {
        value: cdktf.booleanToHclTerraform(this._sendBreachWatchEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
