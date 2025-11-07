// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_fingerprint_databases
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseSecurityDlpFingerprintDatabasesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_fingerprint_databases#authentication DataFortisaseSecurityDlpFingerprintDatabases#authentication}
  */
  readonly authentication?: DataFortisaseSecurityDlpFingerprintDatabasesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_fingerprint_databases#file_pattern DataFortisaseSecurityDlpFingerprintDatabases#file_pattern}
  */
  readonly filePattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_fingerprint_databases#include_subdirectories DataFortisaseSecurityDlpFingerprintDatabases#include_subdirectories}
  */
  readonly includeSubdirectories?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_fingerprint_databases#keep_modified DataFortisaseSecurityDlpFingerprintDatabases#keep_modified}
  */
  readonly keepModified?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_fingerprint_databases#primary_key DataFortisaseSecurityDlpFingerprintDatabases#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_fingerprint_databases#remove_deleted_file_fingerprints DataFortisaseSecurityDlpFingerprintDatabases#remove_deleted_file_fingerprints}
  */
  readonly removeDeletedFileFingerprints?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_fingerprint_databases#scan_on_creation DataFortisaseSecurityDlpFingerprintDatabases#scan_on_creation}
  */
  readonly scanOnCreation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_fingerprint_databases#schedule DataFortisaseSecurityDlpFingerprintDatabases#schedule}
  */
  readonly schedule?: DataFortisaseSecurityDlpFingerprintDatabasesSchedule;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_fingerprint_databases#sensitivity DataFortisaseSecurityDlpFingerprintDatabases#sensitivity}
  */
  readonly sensitivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_fingerprint_databases#server DataFortisaseSecurityDlpFingerprintDatabases#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_fingerprint_databases#server_directory DataFortisaseSecurityDlpFingerprintDatabases#server_directory}
  */
  readonly serverDirectory?: string;
}
export interface DataFortisaseSecurityDlpFingerprintDatabasesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_fingerprint_databases#password DataFortisaseSecurityDlpFingerprintDatabases#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_fingerprint_databases#username DataFortisaseSecurityDlpFingerprintDatabases#username}
  */
  readonly username?: string;
}

export function dataFortisaseSecurityDlpFingerprintDatabasesAuthenticationToTerraform(struct?: DataFortisaseSecurityDlpFingerprintDatabasesAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataFortisaseSecurityDlpFingerprintDatabasesAuthenticationToHclTerraform(struct?: DataFortisaseSecurityDlpFingerprintDatabasesAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityDlpFingerprintDatabasesAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityDlpFingerprintDatabasesAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityDlpFingerprintDatabasesAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DataFortisaseSecurityDlpFingerprintDatabasesSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_fingerprint_databases#period DataFortisaseSecurityDlpFingerprintDatabases#period}
  */
  readonly period?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_fingerprint_databases#sync_day_of_the_month DataFortisaseSecurityDlpFingerprintDatabases#sync_day_of_the_month}
  */
  readonly syncDayOfTheMonth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_fingerprint_databases#sync_hour DataFortisaseSecurityDlpFingerprintDatabases#sync_hour}
  */
  readonly syncHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_fingerprint_databases#sync_minute DataFortisaseSecurityDlpFingerprintDatabases#sync_minute}
  */
  readonly syncMinute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_fingerprint_databases#weekday DataFortisaseSecurityDlpFingerprintDatabases#weekday}
  */
  readonly weekday?: string;
}

export function dataFortisaseSecurityDlpFingerprintDatabasesScheduleToTerraform(struct?: DataFortisaseSecurityDlpFingerprintDatabasesSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    period: cdktf.stringToTerraform(struct!.period),
    sync_day_of_the_month: cdktf.numberToTerraform(struct!.syncDayOfTheMonth),
    sync_hour: cdktf.numberToTerraform(struct!.syncHour),
    sync_minute: cdktf.numberToTerraform(struct!.syncMinute),
    weekday: cdktf.stringToTerraform(struct!.weekday),
  }
}


export function dataFortisaseSecurityDlpFingerprintDatabasesScheduleToHclTerraform(struct?: DataFortisaseSecurityDlpFingerprintDatabasesSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_day_of_the_month: {
      value: cdktf.numberToHclTerraform(struct!.syncDayOfTheMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_hour: {
      value: cdktf.numberToHclTerraform(struct!.syncHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_minute: {
      value: cdktf.numberToHclTerraform(struct!.syncMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weekday: {
      value: cdktf.stringToHclTerraform(struct!.weekday),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityDlpFingerprintDatabasesScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityDlpFingerprintDatabasesSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._syncDayOfTheMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncDayOfTheMonth = this._syncDayOfTheMonth;
    }
    if (this._syncHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncHour = this._syncHour;
    }
    if (this._syncMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncMinute = this._syncMinute;
    }
    if (this._weekday !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekday = this._weekday;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityDlpFingerprintDatabasesSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._period = undefined;
      this._syncDayOfTheMonth = undefined;
      this._syncHour = undefined;
      this._syncMinute = undefined;
      this._weekday = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._period = value.period;
      this._syncDayOfTheMonth = value.syncDayOfTheMonth;
      this._syncHour = value.syncHour;
      this._syncMinute = value.syncMinute;
      this._weekday = value.weekday;
    }
  }

  // period - computed: true, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // sync_day_of_the_month - computed: true, optional: true, required: false
  private _syncDayOfTheMonth?: number; 
  public get syncDayOfTheMonth() {
    return this.getNumberAttribute('sync_day_of_the_month');
  }
  public set syncDayOfTheMonth(value: number) {
    this._syncDayOfTheMonth = value;
  }
  public resetSyncDayOfTheMonth() {
    this._syncDayOfTheMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncDayOfTheMonthInput() {
    return this._syncDayOfTheMonth;
  }

  // sync_hour - computed: true, optional: true, required: false
  private _syncHour?: number; 
  public get syncHour() {
    return this.getNumberAttribute('sync_hour');
  }
  public set syncHour(value: number) {
    this._syncHour = value;
  }
  public resetSyncHour() {
    this._syncHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncHourInput() {
    return this._syncHour;
  }

  // sync_minute - computed: true, optional: true, required: false
  private _syncMinute?: number; 
  public get syncMinute() {
    return this.getNumberAttribute('sync_minute');
  }
  public set syncMinute(value: number) {
    this._syncMinute = value;
  }
  public resetSyncMinute() {
    this._syncMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncMinuteInput() {
    return this._syncMinute;
  }

  // weekday - computed: true, optional: true, required: false
  private _weekday?: string; 
  public get weekday() {
    return this.getStringAttribute('weekday');
  }
  public set weekday(value: string) {
    this._weekday = value;
  }
  public resetWeekday() {
    this._weekday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdayInput() {
    return this._weekday;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_fingerprint_databases fortisase_security_dlp_fingerprint_databases}
*/
export class DataFortisaseSecurityDlpFingerprintDatabases extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_security_dlp_fingerprint_databases";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseSecurityDlpFingerprintDatabases resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseSecurityDlpFingerprintDatabases to import
  * @param importFromId The id of the existing DataFortisaseSecurityDlpFingerprintDatabases that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_fingerprint_databases#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseSecurityDlpFingerprintDatabases to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_security_dlp_fingerprint_databases", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_fingerprint_databases fortisase_security_dlp_fingerprint_databases} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseSecurityDlpFingerprintDatabasesConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseSecurityDlpFingerprintDatabasesConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_security_dlp_fingerprint_databases',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authentication.internalValue = config.authentication;
    this._filePattern = config.filePattern;
    this._includeSubdirectories = config.includeSubdirectories;
    this._keepModified = config.keepModified;
    this._primaryKey = config.primaryKey;
    this._removeDeletedFileFingerprints = config.removeDeletedFileFingerprints;
    this._scanOnCreation = config.scanOnCreation;
    this._schedule.internalValue = config.schedule;
    this._sensitivity = config.sensitivity;
    this._server = config.server;
    this._serverDirectory = config.serverDirectory;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication - computed: true, optional: true, required: false
  private _authentication = new DataFortisaseSecurityDlpFingerprintDatabasesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataFortisaseSecurityDlpFingerprintDatabasesAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // file_pattern - computed: true, optional: true, required: false
  private _filePattern?: string; 
  public get filePattern() {
    return this.getStringAttribute('file_pattern');
  }
  public set filePattern(value: string) {
    this._filePattern = value;
  }
  public resetFilePattern() {
    this._filePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePatternInput() {
    return this._filePattern;
  }

  // include_subdirectories - computed: true, optional: true, required: false
  private _includeSubdirectories?: string; 
  public get includeSubdirectories() {
    return this.getStringAttribute('include_subdirectories');
  }
  public set includeSubdirectories(value: string) {
    this._includeSubdirectories = value;
  }
  public resetIncludeSubdirectories() {
    this._includeSubdirectories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubdirectoriesInput() {
    return this._includeSubdirectories;
  }

  // keep_modified - computed: true, optional: true, required: false
  private _keepModified?: string; 
  public get keepModified() {
    return this.getStringAttribute('keep_modified');
  }
  public set keepModified(value: string) {
    this._keepModified = value;
  }
  public resetKeepModified() {
    this._keepModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepModifiedInput() {
    return this._keepModified;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // remove_deleted_file_fingerprints - computed: true, optional: true, required: false
  private _removeDeletedFileFingerprints?: string; 
  public get removeDeletedFileFingerprints() {
    return this.getStringAttribute('remove_deleted_file_fingerprints');
  }
  public set removeDeletedFileFingerprints(value: string) {
    this._removeDeletedFileFingerprints = value;
  }
  public resetRemoveDeletedFileFingerprints() {
    this._removeDeletedFileFingerprints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeDeletedFileFingerprintsInput() {
    return this._removeDeletedFileFingerprints;
  }

  // scan_on_creation - computed: true, optional: true, required: false
  private _scanOnCreation?: string; 
  public get scanOnCreation() {
    return this.getStringAttribute('scan_on_creation');
  }
  public set scanOnCreation(value: string) {
    this._scanOnCreation = value;
  }
  public resetScanOnCreation() {
    this._scanOnCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanOnCreationInput() {
    return this._scanOnCreation;
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule = new DataFortisaseSecurityDlpFingerprintDatabasesScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: DataFortisaseSecurityDlpFingerprintDatabasesSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // sensitivity - computed: true, optional: true, required: false
  private _sensitivity?: string; 
  public get sensitivity() {
    return this.getStringAttribute('sensitivity');
  }
  public set sensitivity(value: string) {
    this._sensitivity = value;
  }
  public resetSensitivity() {
    this._sensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity;
  }

  // server - computed: true, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // server_directory - computed: true, optional: true, required: false
  private _serverDirectory?: string; 
  public get serverDirectory() {
    return this.getStringAttribute('server_directory');
  }
  public set serverDirectory(value: string) {
    this._serverDirectory = value;
  }
  public resetServerDirectory() {
    this._serverDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverDirectoryInput() {
    return this._serverDirectory;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication: dataFortisaseSecurityDlpFingerprintDatabasesAuthenticationToTerraform(this._authentication.internalValue),
      file_pattern: cdktf.stringToTerraform(this._filePattern),
      include_subdirectories: cdktf.stringToTerraform(this._includeSubdirectories),
      keep_modified: cdktf.stringToTerraform(this._keepModified),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      remove_deleted_file_fingerprints: cdktf.stringToTerraform(this._removeDeletedFileFingerprints),
      scan_on_creation: cdktf.stringToTerraform(this._scanOnCreation),
      schedule: dataFortisaseSecurityDlpFingerprintDatabasesScheduleToTerraform(this._schedule.internalValue),
      sensitivity: cdktf.stringToTerraform(this._sensitivity),
      server: cdktf.stringToTerraform(this._server),
      server_directory: cdktf.stringToTerraform(this._serverDirectory),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication: {
        value: dataFortisaseSecurityDlpFingerprintDatabasesAuthenticationToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseSecurityDlpFingerprintDatabasesAuthentication",
      },
      file_pattern: {
        value: cdktf.stringToHclTerraform(this._filePattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_subdirectories: {
        value: cdktf.stringToHclTerraform(this._includeSubdirectories),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keep_modified: {
        value: cdktf.stringToHclTerraform(this._keepModified),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_deleted_file_fingerprints: {
        value: cdktf.stringToHclTerraform(this._removeDeletedFileFingerprints),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_on_creation: {
        value: cdktf.stringToHclTerraform(this._scanOnCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: dataFortisaseSecurityDlpFingerprintDatabasesScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseSecurityDlpFingerprintDatabasesSchedule",
      },
      sensitivity: {
        value: cdktf.stringToHclTerraform(this._sensitivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_directory: {
        value: cdktf.stringToHclTerraform(this._serverDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
