// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CteProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Updateable) Whether to allow concise logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#concise_logging CteProfile#concise_logging}
  */
  readonly conciseLogging?: boolean | cdktf.IResolvable;
  /**
  * (Updateable) Connect timeout in seconds. Valid values are 5 to 150.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#connect_timeout CteProfile#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * (Updateable) This is the description of the  profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#description CteProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#id CteProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Updateable) Whether to allow CPU allocation for Quality of Service (QoS) capabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#ldt_qos_cap_cpu_allocation CteProfile#ldt_qos_cap_cpu_allocation}
  */
  readonly ldtQosCapCpuAllocation?: boolean | cdktf.IResolvable;
  /**
  * (Updateable) CPU application percentage if ldt_qos_cap_cpu_allocation is true. Valid values are 0 to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#ldt_qos_cpu_percent CteProfile#ldt_qos_cpu_percent}
  */
  readonly ldtQosCpuPercent?: number;
  /**
  * (Updateable) Rekey option and applicable options are RekeyRate and CPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#ldt_qos_rekey_option CteProfile#ldt_qos_rekey_option}
  */
  readonly ldtQosRekeyOption?: string;
  /**
  * (Updateable) Rekey rate in terms of MB/s. Valid values are 0 to 32767.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#ldt_qos_rekey_rate CteProfile#ldt_qos_rekey_rate}
  */
  readonly ldtQosRekeyRate?: number;
  /**
  * (Updateable) Type of QoS schedule. Valid values are: CUSTOM CUSTOM_WITH_OVERWRITE ANY_TIME WEEKNIGHTS WEEKENDS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#ldt_qos_schedule CteProfile#ldt_qos_schedule}
  */
  readonly ldtQosSchedule?: string;
  /**
  * (Updateable) Frequency to check and update the LDT status on the CipherTrust Manager. The valid value ranges from 600 to 86400 seconds. The default value is 3600 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#ldt_qos_status_check_rate CteProfile#ldt_qos_status_check_rate}
  */
  readonly ldtQosStatusCheckRate?: number;
  /**
  * (Updateable) Time interval in seconds to scan files under the GuardPoint. The default value is 600.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#metadata_scan_interval CteProfile#metadata_scan_interval}
  */
  readonly metadataScanInterval?: number;
  /**
  * (Updateable) ID of the user set to be exempted from MFA. MFA will not be enforced on the users of this set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#mfa_exempt_user_set_id CteProfile#mfa_exempt_user_set_id}
  */
  readonly mfaExemptUserSetId?: string;
  /**
  * This is the name of the  profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#name CteProfile#name}
  */
  readonly name: string;
  /**
  * (Updateable) ID of the OIDC connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#oidc_connection_id CteProfile#oidc_connection_id}
  */
  readonly oidcConnectionId?: string;
  /**
  * (Updateable) Applicable to the Ransomware clients only. The valid values are permit(for Audit) and deny(for Block). The default value is permit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#rwp_operation CteProfile#rwp_operation}
  */
  readonly rwpOperation?: string;
  /**
  * (Updateable) ID of the process set to be whitelisted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#rwp_process_set CteProfile#rwp_process_set}
  */
  readonly rwpProcessSet?: string;
  /**
  * cache_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#cache_settings CteProfile#cache_settings}
  */
  readonly cacheSettings?: CteProfileCacheSettings[] | cdktf.IResolvable;
  /**
  * client_logging_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#client_logging_configuration CteProfile#client_logging_configuration}
  */
  readonly clientLoggingConfiguration?: CteProfileClientLoggingConfiguration[] | cdktf.IResolvable;
  /**
  * duplicate_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#duplicate_settings CteProfile#duplicate_settings}
  */
  readonly duplicateSettings?: CteProfileDuplicateSettings[] | cdktf.IResolvable;
  /**
  * file_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#file_settings CteProfile#file_settings}
  */
  readonly fileSettings?: CteProfileFileSettings[] | cdktf.IResolvable;
  /**
  * qos_schedules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#qos_schedules CteProfile#qos_schedules}
  */
  readonly qosSchedules?: CteProfileQosSchedules[] | cdktf.IResolvable;
  /**
  * server_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#server_settings CteProfile#server_settings}
  */
  readonly serverSettings?: CteProfileServerSettings[] | cdktf.IResolvable;
  /**
  * syslog_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#syslog_settings CteProfile#syslog_settings}
  */
  readonly syslogSettings?: CteProfileSyslogSettings[] | cdktf.IResolvable;
  /**
  * upload_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#upload_settings CteProfile#upload_settings}
  */
  readonly uploadSettings?: CteProfileUploadSettings[] | cdktf.IResolvable;
}
export interface CteProfileCacheSettings {
  /**
  * (Updateable) Maximum number of files. Minimum values is 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#max_files CteProfile#max_files}
  */
  readonly maxFiles?: number;
  /**
  * (Updateable) Max Space. Minimum values is 100 MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#max_space CteProfile#max_space}
  */
  readonly maxSpace?: number;
}

export function cteProfileCacheSettingsToTerraform(struct?: CteProfileCacheSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_files: cdktf.numberToTerraform(struct!.maxFiles),
    max_space: cdktf.numberToTerraform(struct!.maxSpace),
  }
}


export function cteProfileCacheSettingsToHclTerraform(struct?: CteProfileCacheSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_files: {
      value: cdktf.numberToHclTerraform(struct!.maxFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_space: {
      value: cdktf.numberToHclTerraform(struct!.maxSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CteProfileCacheSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CteProfileCacheSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFiles = this._maxFiles;
    }
    if (this._maxSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSpace = this._maxSpace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CteProfileCacheSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxFiles = undefined;
      this._maxSpace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxFiles = value.maxFiles;
      this._maxSpace = value.maxSpace;
    }
  }

  // max_files - computed: false, optional: true, required: false
  private _maxFiles?: number; 
  public get maxFiles() {
    return this.getNumberAttribute('max_files');
  }
  public set maxFiles(value: number) {
    this._maxFiles = value;
  }
  public resetMaxFiles() {
    this._maxFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFilesInput() {
    return this._maxFiles;
  }

  // max_space - computed: false, optional: true, required: false
  private _maxSpace?: number; 
  public get maxSpace() {
    return this.getNumberAttribute('max_space');
  }
  public set maxSpace(value: number) {
    this._maxSpace = value;
  }
  public resetMaxSpace() {
    this._maxSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSpaceInput() {
    return this._maxSpace;
  }
}

export class CteProfileCacheSettingsList extends cdktf.ComplexList {
  public internalValue? : CteProfileCacheSettings[] | cdktf.IResolvable

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
  public get(index: number): CteProfileCacheSettingsOutputReference {
    return new CteProfileCacheSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CteProfileClientLoggingConfiguration {
  /**
  * (Updateable) Control duplicate entries, ALLOW or SUPPRESS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#duplicates CteProfile#duplicates}
  */
  readonly duplicates?: string;
  /**
  * (Updateable) Whether to enable file upload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#file_enabled CteProfile#file_enabled}
  */
  readonly fileEnabled?: boolean | cdktf.IResolvable;
  /**
  * (Updateable) Whether to enable support for the Syslog server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#syslog_enabled CteProfile#syslog_enabled}
  */
  readonly syslogEnabled?: boolean | cdktf.IResolvable;
  /**
  * (Updateable) Applicable file threshold. Valid values are: DEBUG INFO WARN ERROR FATAL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#threshold CteProfile#threshold}
  */
  readonly threshold?: string;
  /**
  * (Updateable) Whether to enable log upload to the URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#upload_enabled CteProfile#upload_enabled}
  */
  readonly uploadEnabled?: boolean | cdktf.IResolvable;
}

export function cteProfileClientLoggingConfigurationToTerraform(struct?: CteProfileClientLoggingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duplicates: cdktf.stringToTerraform(struct!.duplicates),
    file_enabled: cdktf.booleanToTerraform(struct!.fileEnabled),
    syslog_enabled: cdktf.booleanToTerraform(struct!.syslogEnabled),
    threshold: cdktf.stringToTerraform(struct!.threshold),
    upload_enabled: cdktf.booleanToTerraform(struct!.uploadEnabled),
  }
}


export function cteProfileClientLoggingConfigurationToHclTerraform(struct?: CteProfileClientLoggingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duplicates: {
      value: cdktf.stringToHclTerraform(struct!.duplicates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.fileEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    syslog_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.syslogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.uploadEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CteProfileClientLoggingConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CteProfileClientLoggingConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duplicates !== undefined) {
      hasAnyValues = true;
      internalValueResult.duplicates = this._duplicates;
    }
    if (this._fileEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileEnabled = this._fileEnabled;
    }
    if (this._syslogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogEnabled = this._syslogEnabled;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._uploadEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadEnabled = this._uploadEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CteProfileClientLoggingConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duplicates = undefined;
      this._fileEnabled = undefined;
      this._syslogEnabled = undefined;
      this._threshold = undefined;
      this._uploadEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duplicates = value.duplicates;
      this._fileEnabled = value.fileEnabled;
      this._syslogEnabled = value.syslogEnabled;
      this._threshold = value.threshold;
      this._uploadEnabled = value.uploadEnabled;
    }
  }

  // duplicates - computed: false, optional: true, required: false
  private _duplicates?: string; 
  public get duplicates() {
    return this.getStringAttribute('duplicates');
  }
  public set duplicates(value: string) {
    this._duplicates = value;
  }
  public resetDuplicates() {
    this._duplicates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicatesInput() {
    return this._duplicates;
  }

  // file_enabled - computed: false, optional: true, required: false
  private _fileEnabled?: boolean | cdktf.IResolvable; 
  public get fileEnabled() {
    return this.getBooleanAttribute('file_enabled');
  }
  public set fileEnabled(value: boolean | cdktf.IResolvable) {
    this._fileEnabled = value;
  }
  public resetFileEnabled() {
    this._fileEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileEnabledInput() {
    return this._fileEnabled;
  }

  // syslog_enabled - computed: false, optional: true, required: false
  private _syslogEnabled?: boolean | cdktf.IResolvable; 
  public get syslogEnabled() {
    return this.getBooleanAttribute('syslog_enabled');
  }
  public set syslogEnabled(value: boolean | cdktf.IResolvable) {
    this._syslogEnabled = value;
  }
  public resetSyslogEnabled() {
    this._syslogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogEnabledInput() {
    return this._syslogEnabled;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // upload_enabled - computed: false, optional: true, required: false
  private _uploadEnabled?: boolean | cdktf.IResolvable; 
  public get uploadEnabled() {
    return this.getBooleanAttribute('upload_enabled');
  }
  public set uploadEnabled(value: boolean | cdktf.IResolvable) {
    this._uploadEnabled = value;
  }
  public resetUploadEnabled() {
    this._uploadEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadEnabledInput() {
    return this._uploadEnabled;
  }
}

export class CteProfileClientLoggingConfigurationList extends cdktf.ComplexList {
  public internalValue? : CteProfileClientLoggingConfiguration[] | cdktf.IResolvable

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
  public get(index: number): CteProfileClientLoggingConfigurationOutputReference {
    return new CteProfileClientLoggingConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CteProfileDuplicateSettings {
  /**
  * (Updateable) Suppress interval in seconds. Valid values are 1 to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#suppress_interval CteProfile#suppress_interval}
  */
  readonly suppressInterval?: number;
  /**
  * (Updateable) Suppress threshold. Valid values are 1 to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#suppress_threshold CteProfile#suppress_threshold}
  */
  readonly suppressThreshold?: number;
}

export function cteProfileDuplicateSettingsToTerraform(struct?: CteProfileDuplicateSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    suppress_interval: cdktf.numberToTerraform(struct!.suppressInterval),
    suppress_threshold: cdktf.numberToTerraform(struct!.suppressThreshold),
  }
}


export function cteProfileDuplicateSettingsToHclTerraform(struct?: CteProfileDuplicateSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    suppress_interval: {
      value: cdktf.numberToHclTerraform(struct!.suppressInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    suppress_threshold: {
      value: cdktf.numberToHclTerraform(struct!.suppressThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CteProfileDuplicateSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CteProfileDuplicateSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._suppressInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressInterval = this._suppressInterval;
    }
    if (this._suppressThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressThreshold = this._suppressThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CteProfileDuplicateSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._suppressInterval = undefined;
      this._suppressThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._suppressInterval = value.suppressInterval;
      this._suppressThreshold = value.suppressThreshold;
    }
  }

  // suppress_interval - computed: false, optional: true, required: false
  private _suppressInterval?: number; 
  public get suppressInterval() {
    return this.getNumberAttribute('suppress_interval');
  }
  public set suppressInterval(value: number) {
    this._suppressInterval = value;
  }
  public resetSuppressInterval() {
    this._suppressInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressIntervalInput() {
    return this._suppressInterval;
  }

  // suppress_threshold - computed: false, optional: true, required: false
  private _suppressThreshold?: number; 
  public get suppressThreshold() {
    return this.getNumberAttribute('suppress_threshold');
  }
  public set suppressThreshold(value: number) {
    this._suppressThreshold = value;
  }
  public resetSuppressThreshold() {
    this._suppressThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressThresholdInput() {
    return this._suppressThreshold;
  }
}

export class CteProfileDuplicateSettingsList extends cdktf.ComplexList {
  public internalValue? : CteProfileDuplicateSettings[] | cdktf.IResolvable

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
  public get(index: number): CteProfileDuplicateSettingsOutputReference {
    return new CteProfileDuplicateSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CteProfileFileSettings {
  /**
  * (Updateable) Allow purge(true or false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#allow_purge CteProfile#allow_purge}
  */
  readonly allowPurge?: boolean | cdktf.IResolvable;
  /**
  * (Updateable) Applicable file threshold. Valid values are: DEBUG INFO WARN ERROR FATAL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#file_threshold CteProfile#file_threshold}
  */
  readonly fileThreshold?: string;
  /**
  * (Updateable) Maximum file size(bytes) 1,000 - 1,000,000,000 (1KB to 1GB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#max_file_size CteProfile#max_file_size}
  */
  readonly maxFileSize?: number;
  /**
  * (Updateable) Maximum number of old files allowed. Valid values are 1 to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#max_old_files CteProfile#max_old_files}
  */
  readonly maxOldFiles?: number;
}

export function cteProfileFileSettingsToTerraform(struct?: CteProfileFileSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_purge: cdktf.booleanToTerraform(struct!.allowPurge),
    file_threshold: cdktf.stringToTerraform(struct!.fileThreshold),
    max_file_size: cdktf.numberToTerraform(struct!.maxFileSize),
    max_old_files: cdktf.numberToTerraform(struct!.maxOldFiles),
  }
}


export function cteProfileFileSettingsToHclTerraform(struct?: CteProfileFileSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_purge: {
      value: cdktf.booleanToHclTerraform(struct!.allowPurge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_threshold: {
      value: cdktf.stringToHclTerraform(struct!.fileThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_file_size: {
      value: cdktf.numberToHclTerraform(struct!.maxFileSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_old_files: {
      value: cdktf.numberToHclTerraform(struct!.maxOldFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CteProfileFileSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CteProfileFileSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPurge = this._allowPurge;
    }
    if (this._fileThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileThreshold = this._fileThreshold;
    }
    if (this._maxFileSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFileSize = this._maxFileSize;
    }
    if (this._maxOldFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOldFiles = this._maxOldFiles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CteProfileFileSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPurge = undefined;
      this._fileThreshold = undefined;
      this._maxFileSize = undefined;
      this._maxOldFiles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPurge = value.allowPurge;
      this._fileThreshold = value.fileThreshold;
      this._maxFileSize = value.maxFileSize;
      this._maxOldFiles = value.maxOldFiles;
    }
  }

  // allow_purge - computed: false, optional: true, required: false
  private _allowPurge?: boolean | cdktf.IResolvable; 
  public get allowPurge() {
    return this.getBooleanAttribute('allow_purge');
  }
  public set allowPurge(value: boolean | cdktf.IResolvable) {
    this._allowPurge = value;
  }
  public resetAllowPurge() {
    this._allowPurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPurgeInput() {
    return this._allowPurge;
  }

  // file_threshold - computed: false, optional: true, required: false
  private _fileThreshold?: string; 
  public get fileThreshold() {
    return this.getStringAttribute('file_threshold');
  }
  public set fileThreshold(value: string) {
    this._fileThreshold = value;
  }
  public resetFileThreshold() {
    this._fileThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileThresholdInput() {
    return this._fileThreshold;
  }

  // max_file_size - computed: false, optional: true, required: false
  private _maxFileSize?: number; 
  public get maxFileSize() {
    return this.getNumberAttribute('max_file_size');
  }
  public set maxFileSize(value: number) {
    this._maxFileSize = value;
  }
  public resetMaxFileSize() {
    this._maxFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFileSizeInput() {
    return this._maxFileSize;
  }

  // max_old_files - computed: false, optional: true, required: false
  private _maxOldFiles?: number; 
  public get maxOldFiles() {
    return this.getNumberAttribute('max_old_files');
  }
  public set maxOldFiles(value: number) {
    this._maxOldFiles = value;
  }
  public resetMaxOldFiles() {
    this._maxOldFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOldFilesInput() {
    return this._maxOldFiles;
  }
}

export class CteProfileFileSettingsList extends cdktf.ComplexList {
  public internalValue? : CteProfileFileSettings[] | cdktf.IResolvable

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
  public get(index: number): CteProfileFileSettingsOutputReference {
    return new CteProfileFileSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CteProfileQosSchedules {
  /**
  * (Updateable) QoS end hour. Valid values are 1 to 23.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#end_time_hour CteProfile#end_time_hour}
  */
  readonly endTimeHour?: number;
  /**
  * (Updateable) QoS end hour. Valid values are 1 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#end_time_min CteProfile#end_time_min}
  */
  readonly endTimeMin?: number;
  /**
  * (Updateable) QoS end day. Valid values are: Sunday Monday Tuesday Wednesday Thursday Friday Saturday.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#end_weekday CteProfile#end_weekday}
  */
  readonly endWeekday?: string;
  /**
  * (Updateable) QoS start hour. Valid values are 1 to 23.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#start_time_hour CteProfile#start_time_hour}
  */
  readonly startTimeHour?: number;
  /**
  * (Updateable) QoS start hour. Valid values are 1 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#start_time_min CteProfile#start_time_min}
  */
  readonly startTimeMin?: number;
  /**
  * (Updateable) QoS start day. Valid values are: Sunday Monday Tuesday Wednesday Thursday Friday Saturday.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#start_weekday CteProfile#start_weekday}
  */
  readonly startWeekday?: string;
}

export function cteProfileQosSchedulesToTerraform(struct?: CteProfileQosSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time_hour: cdktf.numberToTerraform(struct!.endTimeHour),
    end_time_min: cdktf.numberToTerraform(struct!.endTimeMin),
    end_weekday: cdktf.stringToTerraform(struct!.endWeekday),
    start_time_hour: cdktf.numberToTerraform(struct!.startTimeHour),
    start_time_min: cdktf.numberToTerraform(struct!.startTimeMin),
    start_weekday: cdktf.stringToTerraform(struct!.startWeekday),
  }
}


export function cteProfileQosSchedulesToHclTerraform(struct?: CteProfileQosSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time_hour: {
      value: cdktf.numberToHclTerraform(struct!.endTimeHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_time_min: {
      value: cdktf.numberToHclTerraform(struct!.endTimeMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_weekday: {
      value: cdktf.stringToHclTerraform(struct!.endWeekday),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time_hour: {
      value: cdktf.numberToHclTerraform(struct!.startTimeHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time_min: {
      value: cdktf.numberToHclTerraform(struct!.startTimeMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_weekday: {
      value: cdktf.stringToHclTerraform(struct!.startWeekday),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CteProfileQosSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CteProfileQosSchedules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTimeHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTimeHour = this._endTimeHour;
    }
    if (this._endTimeMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTimeMin = this._endTimeMin;
    }
    if (this._endWeekday !== undefined) {
      hasAnyValues = true;
      internalValueResult.endWeekday = this._endWeekday;
    }
    if (this._startTimeHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeHour = this._startTimeHour;
    }
    if (this._startTimeMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeMin = this._startTimeMin;
    }
    if (this._startWeekday !== undefined) {
      hasAnyValues = true;
      internalValueResult.startWeekday = this._startWeekday;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CteProfileQosSchedules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTimeHour = undefined;
      this._endTimeMin = undefined;
      this._endWeekday = undefined;
      this._startTimeHour = undefined;
      this._startTimeMin = undefined;
      this._startWeekday = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTimeHour = value.endTimeHour;
      this._endTimeMin = value.endTimeMin;
      this._endWeekday = value.endWeekday;
      this._startTimeHour = value.startTimeHour;
      this._startTimeMin = value.startTimeMin;
      this._startWeekday = value.startWeekday;
    }
  }

  // end_time_hour - computed: false, optional: true, required: false
  private _endTimeHour?: number; 
  public get endTimeHour() {
    return this.getNumberAttribute('end_time_hour');
  }
  public set endTimeHour(value: number) {
    this._endTimeHour = value;
  }
  public resetEndTimeHour() {
    this._endTimeHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeHourInput() {
    return this._endTimeHour;
  }

  // end_time_min - computed: false, optional: true, required: false
  private _endTimeMin?: number; 
  public get endTimeMin() {
    return this.getNumberAttribute('end_time_min');
  }
  public set endTimeMin(value: number) {
    this._endTimeMin = value;
  }
  public resetEndTimeMin() {
    this._endTimeMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeMinInput() {
    return this._endTimeMin;
  }

  // end_weekday - computed: false, optional: true, required: false
  private _endWeekday?: string; 
  public get endWeekday() {
    return this.getStringAttribute('end_weekday');
  }
  public set endWeekday(value: string) {
    this._endWeekday = value;
  }
  public resetEndWeekday() {
    this._endWeekday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endWeekdayInput() {
    return this._endWeekday;
  }

  // start_time_hour - computed: false, optional: true, required: false
  private _startTimeHour?: number; 
  public get startTimeHour() {
    return this.getNumberAttribute('start_time_hour');
  }
  public set startTimeHour(value: number) {
    this._startTimeHour = value;
  }
  public resetStartTimeHour() {
    this._startTimeHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeHourInput() {
    return this._startTimeHour;
  }

  // start_time_min - computed: false, optional: true, required: false
  private _startTimeMin?: number; 
  public get startTimeMin() {
    return this.getNumberAttribute('start_time_min');
  }
  public set startTimeMin(value: number) {
    this._startTimeMin = value;
  }
  public resetStartTimeMin() {
    this._startTimeMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeMinInput() {
    return this._startTimeMin;
  }

  // start_weekday - computed: false, optional: true, required: false
  private _startWeekday?: string; 
  public get startWeekday() {
    return this.getStringAttribute('start_weekday');
  }
  public set startWeekday(value: string) {
    this._startWeekday = value;
  }
  public resetStartWeekday() {
    this._startWeekday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startWeekdayInput() {
    return this._startWeekday;
  }
}

export class CteProfileQosSchedulesList extends cdktf.ComplexList {
  public internalValue? : CteProfileQosSchedules[] | cdktf.IResolvable

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
  public get(index: number): CteProfileQosSchedulesOutputReference {
    return new CteProfileQosSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CteProfileServerSettings {
  /**
  * (Updateable) Host name of the cluster node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#hostname CteProfile#hostname}
  */
  readonly hostname?: string;
  /**
  * (Updateable) Priority of the cluster node. Valid values are 1 to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#priority CteProfile#priority}
  */
  readonly priority?: number;
}

export function cteProfileServerSettingsToTerraform(struct?: CteProfileServerSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function cteProfileServerSettingsToHclTerraform(struct?: CteProfileServerSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CteProfileServerSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CteProfileServerSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CteProfileServerSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._priority = value.priority;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class CteProfileServerSettingsList extends cdktf.ComplexList {
  public internalValue? : CteProfileServerSettings[] | cdktf.IResolvable

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
  public get(index: number): CteProfileServerSettingsOutputReference {
    return new CteProfileServerSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CteProfileSyslogSettingsServers {
  /**
  * (Updateable) CA certificate for syslog application provided by the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#cacertificate CteProfile#cacertificate}
  */
  readonly cacertificate?: string;
  /**
  * (Updateable) Client certificate for syslog application provided by the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#certificate CteProfile#certificate}
  */
  readonly certificate?: string;
  /**
  * (Updateable) Format of the message on the Syslog server. Valid values are: CEF LEEF RFC5424 PLAIN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#message_format CteProfile#message_format}
  */
  readonly messageFormat?: string;
  /**
  * (Updateable) Name of the Syslog server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#name CteProfile#name}
  */
  readonly name: string;
  /**
  * (Updateable) Port for syslog server. Valid values are 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#port CteProfile#port}
  */
  readonly port?: number;
  /**
  * (Updateable) Client certificate for syslog application provided by the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#privatekey CteProfile#privatekey}
  */
  readonly privatekey?: string;
  /**
  * (Updateable) Protocol of the Syslog server, TCP, UDP and TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#protocol CteProfile#protocol}
  */
  readonly protocol?: string;
}

export function cteProfileSyslogSettingsServersToTerraform(struct?: CteProfileSyslogSettingsServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cacertificate: cdktf.stringToTerraform(struct!.cacertificate),
    certificate: cdktf.stringToTerraform(struct!.certificate),
    message_format: cdktf.stringToTerraform(struct!.messageFormat),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    privatekey: cdktf.stringToTerraform(struct!.privatekey),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function cteProfileSyslogSettingsServersToHclTerraform(struct?: CteProfileSyslogSettingsServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cacertificate: {
      value: cdktf.stringToHclTerraform(struct!.cacertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_format: {
      value: cdktf.stringToHclTerraform(struct!.messageFormat),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    privatekey: {
      value: cdktf.stringToHclTerraform(struct!.privatekey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CteProfileSyslogSettingsServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CteProfileSyslogSettingsServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacertificate = this._cacertificate;
    }
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._messageFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageFormat = this._messageFormat;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._privatekey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privatekey = this._privatekey;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CteProfileSyslogSettingsServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacertificate = undefined;
      this._certificate = undefined;
      this._messageFormat = undefined;
      this._name = undefined;
      this._port = undefined;
      this._privatekey = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacertificate = value.cacertificate;
      this._certificate = value.certificate;
      this._messageFormat = value.messageFormat;
      this._name = value.name;
      this._port = value.port;
      this._privatekey = value.privatekey;
      this._protocol = value.protocol;
    }
  }

  // cacertificate - computed: false, optional: true, required: false
  private _cacertificate?: string; 
  public get cacertificate() {
    return this.getStringAttribute('cacertificate');
  }
  public set cacertificate(value: string) {
    this._cacertificate = value;
  }
  public resetCacertificate() {
    this._cacertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertificateInput() {
    return this._cacertificate;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // message_format - computed: false, optional: true, required: false
  private _messageFormat?: string; 
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }
  public set messageFormat(value: string) {
    this._messageFormat = value;
  }
  public resetMessageFormat() {
    this._messageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFormatInput() {
    return this._messageFormat;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // privatekey - computed: false, optional: true, required: false
  private _privatekey?: string; 
  public get privatekey() {
    return this.getStringAttribute('privatekey');
  }
  public set privatekey(value: string) {
    this._privatekey = value;
  }
  public resetPrivatekey() {
    this._privatekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatekeyInput() {
    return this._privatekey;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class CteProfileSyslogSettingsServersList extends cdktf.ComplexList {
  public internalValue? : CteProfileSyslogSettingsServers[] | cdktf.IResolvable

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
  public get(index: number): CteProfileSyslogSettingsServersOutputReference {
    return new CteProfileSyslogSettingsServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CteProfileSyslogSettings {
  /**
  * (Updateable) Whether the Syslog server is local.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#local CteProfile#local}
  */
  readonly local?: boolean | cdktf.IResolvable;
  /**
  * (Updateable) Applicable file threshold. Valid values are: DEBUG INFO WARN ERROR FATAL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#syslog_threshold CteProfile#syslog_threshold}
  */
  readonly syslogThreshold?: string;
  /**
  * servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#servers CteProfile#servers}
  */
  readonly servers?: CteProfileSyslogSettingsServers[] | cdktf.IResolvable;
}

export function cteProfileSyslogSettingsToTerraform(struct?: CteProfileSyslogSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local: cdktf.booleanToTerraform(struct!.local),
    syslog_threshold: cdktf.stringToTerraform(struct!.syslogThreshold),
    servers: cdktf.listMapper(cteProfileSyslogSettingsServersToTerraform, true)(struct!.servers),
  }
}


export function cteProfileSyslogSettingsToHclTerraform(struct?: CteProfileSyslogSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local: {
      value: cdktf.booleanToHclTerraform(struct!.local),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    syslog_threshold: {
      value: cdktf.stringToHclTerraform(struct!.syslogThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servers: {
      value: cdktf.listMapperHcl(cteProfileSyslogSettingsServersToHclTerraform, true)(struct!.servers),
      isBlock: true,
      type: "list",
      storageClassType: "CteProfileSyslogSettingsServersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CteProfileSyslogSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CteProfileSyslogSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._local !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local;
    }
    if (this._syslogThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogThreshold = this._syslogThreshold;
    }
    if (this._servers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CteProfileSyslogSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._local = undefined;
      this._syslogThreshold = undefined;
      this._servers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._local = value.local;
      this._syslogThreshold = value.syslogThreshold;
      this._servers.internalValue = value.servers;
    }
  }

  // local - computed: false, optional: true, required: false
  private _local?: boolean | cdktf.IResolvable; 
  public get local() {
    return this.getBooleanAttribute('local');
  }
  public set local(value: boolean | cdktf.IResolvable) {
    this._local = value;
  }
  public resetLocal() {
    this._local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local;
  }

  // syslog_threshold - computed: false, optional: true, required: false
  private _syslogThreshold?: string; 
  public get syslogThreshold() {
    return this.getStringAttribute('syslog_threshold');
  }
  public set syslogThreshold(value: string) {
    this._syslogThreshold = value;
  }
  public resetSyslogThreshold() {
    this._syslogThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogThresholdInput() {
    return this._syslogThreshold;
  }

  // servers - computed: false, optional: true, required: false
  private _servers = new CteProfileSyslogSettingsServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: CteProfileSyslogSettingsServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  public resetServers() {
    this._servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }
}

export class CteProfileSyslogSettingsList extends cdktf.ComplexList {
  public internalValue? : CteProfileSyslogSettings[] | cdktf.IResolvable

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
  public get(index: number): CteProfileSyslogSettingsOutputReference {
    return new CteProfileSyslogSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CteProfileUploadSettings {
  /**
  * (Updateable) Connection timeout value. Valid value are from 1 to 60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#connection_timeout CteProfile#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * (Updateable) Whether to drop the log upload if the server is busy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#drop_if_busy CteProfile#drop_if_busy}
  */
  readonly dropIfBusy?: boolean | cdktf.IResolvable;
  /**
  * (Updateable) Job completion timeout value. Valid values are 1 to 900.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#job_completion_timeout CteProfile#job_completion_timeout}
  */
  readonly jobCompletionTimeout?: number;
  /**
  * (Updateable) Maximum interval value. Valid values are 1 to 120.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#max_interval CteProfile#max_interval}
  */
  readonly maxInterval?: number;
  /**
  * (Updateable) Maximum number of messages allowed. Valid values are 100 to 10000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#max_messages CteProfile#max_messages}
  */
  readonly maxMessages?: number;
  /**
  * (Updateable) Minimum interval value. Valid values are 1 to 30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#min_interval CteProfile#min_interval}
  */
  readonly minInterval?: number;
  /**
  * (Updateable) Applicable file threshold. Valid values are: DEBUG INFO WARN ERROR FATAL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#upload_threshold CteProfile#upload_threshold}
  */
  readonly uploadThreshold?: string;
  /**
  * (Updateable) URL for log file/directory.Ex: /logupload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#url CteProfile#url}
  */
  readonly url?: string;
}

export function cteProfileUploadSettingsToTerraform(struct?: CteProfileUploadSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_timeout: cdktf.numberToTerraform(struct!.connectionTimeout),
    drop_if_busy: cdktf.booleanToTerraform(struct!.dropIfBusy),
    job_completion_timeout: cdktf.numberToTerraform(struct!.jobCompletionTimeout),
    max_interval: cdktf.numberToTerraform(struct!.maxInterval),
    max_messages: cdktf.numberToTerraform(struct!.maxMessages),
    min_interval: cdktf.numberToTerraform(struct!.minInterval),
    upload_threshold: cdktf.stringToTerraform(struct!.uploadThreshold),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function cteProfileUploadSettingsToHclTerraform(struct?: CteProfileUploadSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_if_busy: {
      value: cdktf.booleanToHclTerraform(struct!.dropIfBusy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    job_completion_timeout: {
      value: cdktf.numberToHclTerraform(struct!.jobCompletionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_interval: {
      value: cdktf.numberToHclTerraform(struct!.maxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_messages: {
      value: cdktf.numberToHclTerraform(struct!.maxMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_interval: {
      value: cdktf.numberToHclTerraform(struct!.minInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upload_threshold: {
      value: cdktf.stringToHclTerraform(struct!.uploadThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CteProfileUploadSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CteProfileUploadSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionTimeout = this._connectionTimeout;
    }
    if (this._dropIfBusy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropIfBusy = this._dropIfBusy;
    }
    if (this._jobCompletionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobCompletionTimeout = this._jobCompletionTimeout;
    }
    if (this._maxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInterval = this._maxInterval;
    }
    if (this._maxMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMessages = this._maxMessages;
    }
    if (this._minInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInterval = this._minInterval;
    }
    if (this._uploadThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadThreshold = this._uploadThreshold;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CteProfileUploadSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionTimeout = undefined;
      this._dropIfBusy = undefined;
      this._jobCompletionTimeout = undefined;
      this._maxInterval = undefined;
      this._maxMessages = undefined;
      this._minInterval = undefined;
      this._uploadThreshold = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionTimeout = value.connectionTimeout;
      this._dropIfBusy = value.dropIfBusy;
      this._jobCompletionTimeout = value.jobCompletionTimeout;
      this._maxInterval = value.maxInterval;
      this._maxMessages = value.maxMessages;
      this._minInterval = value.minInterval;
      this._uploadThreshold = value.uploadThreshold;
      this._url = value.url;
    }
  }

  // connection_timeout - computed: false, optional: true, required: false
  private _connectionTimeout?: number; 
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }
  public set connectionTimeout(value: number) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // drop_if_busy - computed: false, optional: true, required: false
  private _dropIfBusy?: boolean | cdktf.IResolvable; 
  public get dropIfBusy() {
    return this.getBooleanAttribute('drop_if_busy');
  }
  public set dropIfBusy(value: boolean | cdktf.IResolvable) {
    this._dropIfBusy = value;
  }
  public resetDropIfBusy() {
    this._dropIfBusy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropIfBusyInput() {
    return this._dropIfBusy;
  }

  // job_completion_timeout - computed: false, optional: true, required: false
  private _jobCompletionTimeout?: number; 
  public get jobCompletionTimeout() {
    return this.getNumberAttribute('job_completion_timeout');
  }
  public set jobCompletionTimeout(value: number) {
    this._jobCompletionTimeout = value;
  }
  public resetJobCompletionTimeout() {
    this._jobCompletionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobCompletionTimeoutInput() {
    return this._jobCompletionTimeout;
  }

  // max_interval - computed: false, optional: true, required: false
  private _maxInterval?: number; 
  public get maxInterval() {
    return this.getNumberAttribute('max_interval');
  }
  public set maxInterval(value: number) {
    this._maxInterval = value;
  }
  public resetMaxInterval() {
    this._maxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIntervalInput() {
    return this._maxInterval;
  }

  // max_messages - computed: false, optional: true, required: false
  private _maxMessages?: number; 
  public get maxMessages() {
    return this.getNumberAttribute('max_messages');
  }
  public set maxMessages(value: number) {
    this._maxMessages = value;
  }
  public resetMaxMessages() {
    this._maxMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessagesInput() {
    return this._maxMessages;
  }

  // min_interval - computed: false, optional: true, required: false
  private _minInterval?: number; 
  public get minInterval() {
    return this.getNumberAttribute('min_interval');
  }
  public set minInterval(value: number) {
    this._minInterval = value;
  }
  public resetMinInterval() {
    this._minInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIntervalInput() {
    return this._minInterval;
  }

  // upload_threshold - computed: false, optional: true, required: false
  private _uploadThreshold?: string; 
  public get uploadThreshold() {
    return this.getStringAttribute('upload_threshold');
  }
  public set uploadThreshold(value: string) {
    this._uploadThreshold = value;
  }
  public resetUploadThreshold() {
    this._uploadThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadThresholdInput() {
    return this._uploadThreshold;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class CteProfileUploadSettingsList extends cdktf.ComplexList {
  public internalValue? : CteProfileUploadSettings[] | cdktf.IResolvable

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
  public get(index: number): CteProfileUploadSettingsOutputReference {
    return new CteProfileUploadSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile ciphertrust_cte_profile}
*/
export class CteProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_cte_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CteProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CteProfile to import
  * @param importFromId The id of the existing CteProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CteProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_cte_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_profile ciphertrust_cte_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CteProfileConfig
  */
  public constructor(scope: Construct, id: string, config: CteProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_cte_profile',
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
    this._conciseLogging = config.conciseLogging;
    this._connectTimeout = config.connectTimeout;
    this._description = config.description;
    this._id = config.id;
    this._ldtQosCapCpuAllocation = config.ldtQosCapCpuAllocation;
    this._ldtQosCpuPercent = config.ldtQosCpuPercent;
    this._ldtQosRekeyOption = config.ldtQosRekeyOption;
    this._ldtQosRekeyRate = config.ldtQosRekeyRate;
    this._ldtQosSchedule = config.ldtQosSchedule;
    this._ldtQosStatusCheckRate = config.ldtQosStatusCheckRate;
    this._metadataScanInterval = config.metadataScanInterval;
    this._mfaExemptUserSetId = config.mfaExemptUserSetId;
    this._name = config.name;
    this._oidcConnectionId = config.oidcConnectionId;
    this._rwpOperation = config.rwpOperation;
    this._rwpProcessSet = config.rwpProcessSet;
    this._cacheSettings.internalValue = config.cacheSettings;
    this._clientLoggingConfiguration.internalValue = config.clientLoggingConfiguration;
    this._duplicateSettings.internalValue = config.duplicateSettings;
    this._fileSettings.internalValue = config.fileSettings;
    this._qosSchedules.internalValue = config.qosSchedules;
    this._serverSettings.internalValue = config.serverSettings;
    this._syslogSettings.internalValue = config.syslogSettings;
    this._uploadSettings.internalValue = config.uploadSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // concise_logging - computed: false, optional: true, required: false
  private _conciseLogging?: boolean | cdktf.IResolvable; 
  public get conciseLogging() {
    return this.getBooleanAttribute('concise_logging');
  }
  public set conciseLogging(value: boolean | cdktf.IResolvable) {
    this._conciseLogging = value;
  }
  public resetConciseLogging() {
    this._conciseLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conciseLoggingInput() {
    return this._conciseLogging;
  }

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // description - computed: false, optional: true, required: false
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

  // ldt_qos_cap_cpu_allocation - computed: false, optional: true, required: false
  private _ldtQosCapCpuAllocation?: boolean | cdktf.IResolvable; 
  public get ldtQosCapCpuAllocation() {
    return this.getBooleanAttribute('ldt_qos_cap_cpu_allocation');
  }
  public set ldtQosCapCpuAllocation(value: boolean | cdktf.IResolvable) {
    this._ldtQosCapCpuAllocation = value;
  }
  public resetLdtQosCapCpuAllocation() {
    this._ldtQosCapCpuAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldtQosCapCpuAllocationInput() {
    return this._ldtQosCapCpuAllocation;
  }

  // ldt_qos_cpu_percent - computed: false, optional: true, required: false
  private _ldtQosCpuPercent?: number; 
  public get ldtQosCpuPercent() {
    return this.getNumberAttribute('ldt_qos_cpu_percent');
  }
  public set ldtQosCpuPercent(value: number) {
    this._ldtQosCpuPercent = value;
  }
  public resetLdtQosCpuPercent() {
    this._ldtQosCpuPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldtQosCpuPercentInput() {
    return this._ldtQosCpuPercent;
  }

  // ldt_qos_rekey_option - computed: false, optional: true, required: false
  private _ldtQosRekeyOption?: string; 
  public get ldtQosRekeyOption() {
    return this.getStringAttribute('ldt_qos_rekey_option');
  }
  public set ldtQosRekeyOption(value: string) {
    this._ldtQosRekeyOption = value;
  }
  public resetLdtQosRekeyOption() {
    this._ldtQosRekeyOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldtQosRekeyOptionInput() {
    return this._ldtQosRekeyOption;
  }

  // ldt_qos_rekey_rate - computed: false, optional: true, required: false
  private _ldtQosRekeyRate?: number; 
  public get ldtQosRekeyRate() {
    return this.getNumberAttribute('ldt_qos_rekey_rate');
  }
  public set ldtQosRekeyRate(value: number) {
    this._ldtQosRekeyRate = value;
  }
  public resetLdtQosRekeyRate() {
    this._ldtQosRekeyRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldtQosRekeyRateInput() {
    return this._ldtQosRekeyRate;
  }

  // ldt_qos_schedule - computed: false, optional: true, required: false
  private _ldtQosSchedule?: string; 
  public get ldtQosSchedule() {
    return this.getStringAttribute('ldt_qos_schedule');
  }
  public set ldtQosSchedule(value: string) {
    this._ldtQosSchedule = value;
  }
  public resetLdtQosSchedule() {
    this._ldtQosSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldtQosScheduleInput() {
    return this._ldtQosSchedule;
  }

  // ldt_qos_status_check_rate - computed: false, optional: true, required: false
  private _ldtQosStatusCheckRate?: number; 
  public get ldtQosStatusCheckRate() {
    return this.getNumberAttribute('ldt_qos_status_check_rate');
  }
  public set ldtQosStatusCheckRate(value: number) {
    this._ldtQosStatusCheckRate = value;
  }
  public resetLdtQosStatusCheckRate() {
    this._ldtQosStatusCheckRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldtQosStatusCheckRateInput() {
    return this._ldtQosStatusCheckRate;
  }

  // metadata_scan_interval - computed: false, optional: true, required: false
  private _metadataScanInterval?: number; 
  public get metadataScanInterval() {
    return this.getNumberAttribute('metadata_scan_interval');
  }
  public set metadataScanInterval(value: number) {
    this._metadataScanInterval = value;
  }
  public resetMetadataScanInterval() {
    this._metadataScanInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataScanIntervalInput() {
    return this._metadataScanInterval;
  }

  // mfa_exempt_user_set_id - computed: false, optional: true, required: false
  private _mfaExemptUserSetId?: string; 
  public get mfaExemptUserSetId() {
    return this.getStringAttribute('mfa_exempt_user_set_id');
  }
  public set mfaExemptUserSetId(value: string) {
    this._mfaExemptUserSetId = value;
  }
  public resetMfaExemptUserSetId() {
    this._mfaExemptUserSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaExemptUserSetIdInput() {
    return this._mfaExemptUserSetId;
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

  // oidc_connection_id - computed: false, optional: true, required: false
  private _oidcConnectionId?: string; 
  public get oidcConnectionId() {
    return this.getStringAttribute('oidc_connection_id');
  }
  public set oidcConnectionId(value: string) {
    this._oidcConnectionId = value;
  }
  public resetOidcConnectionId() {
    this._oidcConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcConnectionIdInput() {
    return this._oidcConnectionId;
  }

  // rwp_operation - computed: false, optional: true, required: false
  private _rwpOperation?: string; 
  public get rwpOperation() {
    return this.getStringAttribute('rwp_operation');
  }
  public set rwpOperation(value: string) {
    this._rwpOperation = value;
  }
  public resetRwpOperation() {
    this._rwpOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rwpOperationInput() {
    return this._rwpOperation;
  }

  // rwp_process_set - computed: false, optional: true, required: false
  private _rwpProcessSet?: string; 
  public get rwpProcessSet() {
    return this.getStringAttribute('rwp_process_set');
  }
  public set rwpProcessSet(value: string) {
    this._rwpProcessSet = value;
  }
  public resetRwpProcessSet() {
    this._rwpProcessSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rwpProcessSetInput() {
    return this._rwpProcessSet;
  }

  // cache_settings - computed: false, optional: true, required: false
  private _cacheSettings = new CteProfileCacheSettingsList(this, "cache_settings", false);
  public get cacheSettings() {
    return this._cacheSettings;
  }
  public putCacheSettings(value: CteProfileCacheSettings[] | cdktf.IResolvable) {
    this._cacheSettings.internalValue = value;
  }
  public resetCacheSettings() {
    this._cacheSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSettingsInput() {
    return this._cacheSettings.internalValue;
  }

  // client_logging_configuration - computed: false, optional: true, required: false
  private _clientLoggingConfiguration = new CteProfileClientLoggingConfigurationList(this, "client_logging_configuration", false);
  public get clientLoggingConfiguration() {
    return this._clientLoggingConfiguration;
  }
  public putClientLoggingConfiguration(value: CteProfileClientLoggingConfiguration[] | cdktf.IResolvable) {
    this._clientLoggingConfiguration.internalValue = value;
  }
  public resetClientLoggingConfiguration() {
    this._clientLoggingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientLoggingConfigurationInput() {
    return this._clientLoggingConfiguration.internalValue;
  }

  // duplicate_settings - computed: false, optional: true, required: false
  private _duplicateSettings = new CteProfileDuplicateSettingsList(this, "duplicate_settings", false);
  public get duplicateSettings() {
    return this._duplicateSettings;
  }
  public putDuplicateSettings(value: CteProfileDuplicateSettings[] | cdktf.IResolvable) {
    this._duplicateSettings.internalValue = value;
  }
  public resetDuplicateSettings() {
    this._duplicateSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicateSettingsInput() {
    return this._duplicateSettings.internalValue;
  }

  // file_settings - computed: false, optional: true, required: false
  private _fileSettings = new CteProfileFileSettingsList(this, "file_settings", false);
  public get fileSettings() {
    return this._fileSettings;
  }
  public putFileSettings(value: CteProfileFileSettings[] | cdktf.IResolvable) {
    this._fileSettings.internalValue = value;
  }
  public resetFileSettings() {
    this._fileSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSettingsInput() {
    return this._fileSettings.internalValue;
  }

  // qos_schedules - computed: false, optional: true, required: false
  private _qosSchedules = new CteProfileQosSchedulesList(this, "qos_schedules", false);
  public get qosSchedules() {
    return this._qosSchedules;
  }
  public putQosSchedules(value: CteProfileQosSchedules[] | cdktf.IResolvable) {
    this._qosSchedules.internalValue = value;
  }
  public resetQosSchedules() {
    this._qosSchedules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosSchedulesInput() {
    return this._qosSchedules.internalValue;
  }

  // server_settings - computed: false, optional: true, required: false
  private _serverSettings = new CteProfileServerSettingsList(this, "server_settings", false);
  public get serverSettings() {
    return this._serverSettings;
  }
  public putServerSettings(value: CteProfileServerSettings[] | cdktf.IResolvable) {
    this._serverSettings.internalValue = value;
  }
  public resetServerSettings() {
    this._serverSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSettingsInput() {
    return this._serverSettings.internalValue;
  }

  // syslog_settings - computed: false, optional: true, required: false
  private _syslogSettings = new CteProfileSyslogSettingsList(this, "syslog_settings", false);
  public get syslogSettings() {
    return this._syslogSettings;
  }
  public putSyslogSettings(value: CteProfileSyslogSettings[] | cdktf.IResolvable) {
    this._syslogSettings.internalValue = value;
  }
  public resetSyslogSettings() {
    this._syslogSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogSettingsInput() {
    return this._syslogSettings.internalValue;
  }

  // upload_settings - computed: false, optional: true, required: false
  private _uploadSettings = new CteProfileUploadSettingsList(this, "upload_settings", false);
  public get uploadSettings() {
    return this._uploadSettings;
  }
  public putUploadSettings(value: CteProfileUploadSettings[] | cdktf.IResolvable) {
    this._uploadSettings.internalValue = value;
  }
  public resetUploadSettings() {
    this._uploadSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadSettingsInput() {
    return this._uploadSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      concise_logging: cdktf.booleanToTerraform(this._conciseLogging),
      connect_timeout: cdktf.numberToTerraform(this._connectTimeout),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ldt_qos_cap_cpu_allocation: cdktf.booleanToTerraform(this._ldtQosCapCpuAllocation),
      ldt_qos_cpu_percent: cdktf.numberToTerraform(this._ldtQosCpuPercent),
      ldt_qos_rekey_option: cdktf.stringToTerraform(this._ldtQosRekeyOption),
      ldt_qos_rekey_rate: cdktf.numberToTerraform(this._ldtQosRekeyRate),
      ldt_qos_schedule: cdktf.stringToTerraform(this._ldtQosSchedule),
      ldt_qos_status_check_rate: cdktf.numberToTerraform(this._ldtQosStatusCheckRate),
      metadata_scan_interval: cdktf.numberToTerraform(this._metadataScanInterval),
      mfa_exempt_user_set_id: cdktf.stringToTerraform(this._mfaExemptUserSetId),
      name: cdktf.stringToTerraform(this._name),
      oidc_connection_id: cdktf.stringToTerraform(this._oidcConnectionId),
      rwp_operation: cdktf.stringToTerraform(this._rwpOperation),
      rwp_process_set: cdktf.stringToTerraform(this._rwpProcessSet),
      cache_settings: cdktf.listMapper(cteProfileCacheSettingsToTerraform, true)(this._cacheSettings.internalValue),
      client_logging_configuration: cdktf.listMapper(cteProfileClientLoggingConfigurationToTerraform, true)(this._clientLoggingConfiguration.internalValue),
      duplicate_settings: cdktf.listMapper(cteProfileDuplicateSettingsToTerraform, true)(this._duplicateSettings.internalValue),
      file_settings: cdktf.listMapper(cteProfileFileSettingsToTerraform, true)(this._fileSettings.internalValue),
      qos_schedules: cdktf.listMapper(cteProfileQosSchedulesToTerraform, true)(this._qosSchedules.internalValue),
      server_settings: cdktf.listMapper(cteProfileServerSettingsToTerraform, true)(this._serverSettings.internalValue),
      syslog_settings: cdktf.listMapper(cteProfileSyslogSettingsToTerraform, true)(this._syslogSettings.internalValue),
      upload_settings: cdktf.listMapper(cteProfileUploadSettingsToTerraform, true)(this._uploadSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      concise_logging: {
        value: cdktf.booleanToHclTerraform(this._conciseLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connect_timeout: {
        value: cdktf.numberToHclTerraform(this._connectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      ldt_qos_cap_cpu_allocation: {
        value: cdktf.booleanToHclTerraform(this._ldtQosCapCpuAllocation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ldt_qos_cpu_percent: {
        value: cdktf.numberToHclTerraform(this._ldtQosCpuPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ldt_qos_rekey_option: {
        value: cdktf.stringToHclTerraform(this._ldtQosRekeyOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldt_qos_rekey_rate: {
        value: cdktf.numberToHclTerraform(this._ldtQosRekeyRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ldt_qos_schedule: {
        value: cdktf.stringToHclTerraform(this._ldtQosSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldt_qos_status_check_rate: {
        value: cdktf.numberToHclTerraform(this._ldtQosStatusCheckRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metadata_scan_interval: {
        value: cdktf.numberToHclTerraform(this._metadataScanInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mfa_exempt_user_set_id: {
        value: cdktf.stringToHclTerraform(this._mfaExemptUserSetId),
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
      oidc_connection_id: {
        value: cdktf.stringToHclTerraform(this._oidcConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rwp_operation: {
        value: cdktf.stringToHclTerraform(this._rwpOperation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rwp_process_set: {
        value: cdktf.stringToHclTerraform(this._rwpProcessSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_settings: {
        value: cdktf.listMapperHcl(cteProfileCacheSettingsToHclTerraform, true)(this._cacheSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CteProfileCacheSettingsList",
      },
      client_logging_configuration: {
        value: cdktf.listMapperHcl(cteProfileClientLoggingConfigurationToHclTerraform, true)(this._clientLoggingConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CteProfileClientLoggingConfigurationList",
      },
      duplicate_settings: {
        value: cdktf.listMapperHcl(cteProfileDuplicateSettingsToHclTerraform, true)(this._duplicateSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CteProfileDuplicateSettingsList",
      },
      file_settings: {
        value: cdktf.listMapperHcl(cteProfileFileSettingsToHclTerraform, true)(this._fileSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CteProfileFileSettingsList",
      },
      qos_schedules: {
        value: cdktf.listMapperHcl(cteProfileQosSchedulesToHclTerraform, true)(this._qosSchedules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CteProfileQosSchedulesList",
      },
      server_settings: {
        value: cdktf.listMapperHcl(cteProfileServerSettingsToHclTerraform, true)(this._serverSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CteProfileServerSettingsList",
      },
      syslog_settings: {
        value: cdktf.listMapperHcl(cteProfileSyslogSettingsToHclTerraform, true)(this._syslogSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CteProfileSyslogSettingsList",
      },
      upload_settings: {
        value: cdktf.listMapperHcl(cteProfileUploadSettingsToHclTerraform, true)(this._uploadSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CteProfileUploadSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
