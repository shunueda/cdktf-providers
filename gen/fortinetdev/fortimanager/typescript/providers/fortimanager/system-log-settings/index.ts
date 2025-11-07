// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemLogSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#browse_max_logfiles SystemLogSettings#browse_max_logfiles}
  */
  readonly browseMaxLogfiles?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#device_auto_detect SystemLogSettings#device_auto_detect}
  */
  readonly deviceAutoDetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#dns_resolve_dstip SystemLogSettings#dns_resolve_dstip}
  */
  readonly dnsResolveDstip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#download_max_logs SystemLogSettings#download_max_logs}
  */
  readonly downloadMaxLogs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#fac_custom_field1 SystemLogSettings#fac_custom_field1}
  */
  readonly facCustomField1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#faz_custom_field1 SystemLogSettings#faz_custom_field1}
  */
  readonly fazCustomField1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#fch_custom_field1 SystemLogSettings#fch_custom_field1}
  */
  readonly fchCustomField1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#fct_custom_field1 SystemLogSettings#fct_custom_field1}
  */
  readonly fctCustomField1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#fdd_custom_field1 SystemLogSettings#fdd_custom_field1}
  */
  readonly fddCustomField1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#fgt_custom_field1 SystemLogSettings#fgt_custom_field1}
  */
  readonly fgtCustomField1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#fmg_custom_field1 SystemLogSettings#fmg_custom_field1}
  */
  readonly fmgCustomField1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#fml_custom_field1 SystemLogSettings#fml_custom_field1}
  */
  readonly fmlCustomField1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#fpx_custom_field1 SystemLogSettings#fpx_custom_field1}
  */
  readonly fpxCustomField1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#fsa_custom_field1 SystemLogSettings#fsa_custom_field1}
  */
  readonly fsaCustomField1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#fwb_custom_field1 SystemLogSettings#fwb_custom_field1}
  */
  readonly fwbCustomField1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#ha_auto_migrate SystemLogSettings#ha_auto_migrate}
  */
  readonly haAutoMigrate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#id SystemLogSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#import_max_logfiles SystemLogSettings#import_max_logfiles}
  */
  readonly importMaxLogfiles?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#keep_dev_logs SystemLogSettings#keep_dev_logs}
  */
  readonly keepDevLogs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#legacy_auth_mode SystemLogSettings#legacy_auth_mode}
  */
  readonly legacyAuthMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#log_file_archive_name SystemLogSettings#log_file_archive_name}
  */
  readonly logFileArchiveName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#log_interval_dev_no_logging SystemLogSettings#log_interval_dev_no_logging}
  */
  readonly logIntervalDevNoLogging?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#log_upload_interval_dev_no_logging SystemLogSettings#log_upload_interval_dev_no_logging}
  */
  readonly logUploadIntervalDevNoLogging?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#sync_search_timeout SystemLogSettings#sync_search_timeout}
  */
  readonly syncSearchTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#unencrypted_logging SystemLogSettings#unencrypted_logging}
  */
  readonly unencryptedLogging?: string;
  /**
  * rolling_analyzer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#rolling_analyzer SystemLogSettings#rolling_analyzer}
  */
  readonly rollingAnalyzer?: SystemLogSettingsRollingAnalyzer;
  /**
  * rolling_local block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#rolling_local SystemLogSettings#rolling_local}
  */
  readonly rollingLocal?: SystemLogSettingsRollingLocal;
  /**
  * rolling_regular block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#rolling_regular SystemLogSettings#rolling_regular}
  */
  readonly rollingRegular?: SystemLogSettingsRollingRegular;
}
export interface SystemLogSettingsRollingAnalyzer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#days SystemLogSettings#days}
  */
  readonly days?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#del_files SystemLogSettings#del_files}
  */
  readonly delFiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#directory SystemLogSettings#directory}
  */
  readonly directory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#file_size SystemLogSettings#file_size}
  */
  readonly fileSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#gzip_format SystemLogSettings#gzip_format}
  */
  readonly gzipFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#hour SystemLogSettings#hour}
  */
  readonly hour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#ip SystemLogSettings#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#ip2 SystemLogSettings#ip2}
  */
  readonly ip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#ip3 SystemLogSettings#ip3}
  */
  readonly ip3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#log_format SystemLogSettings#log_format}
  */
  readonly logFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#min SystemLogSettings#min}
  */
  readonly min?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#password SystemLogSettings#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#password2 SystemLogSettings#password2}
  */
  readonly password2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#password3 SystemLogSettings#password3}
  */
  readonly password3?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#port SystemLogSettings#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#port2 SystemLogSettings#port2}
  */
  readonly port2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#port3 SystemLogSettings#port3}
  */
  readonly port3?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#rolling_upgrade_status SystemLogSettings#rolling_upgrade_status}
  */
  readonly rollingUpgradeStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#server SystemLogSettings#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#server2 SystemLogSettings#server2}
  */
  readonly server2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#server3 SystemLogSettings#server3}
  */
  readonly server3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#server_type SystemLogSettings#server_type}
  */
  readonly serverType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#upload SystemLogSettings#upload}
  */
  readonly upload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#upload_hour SystemLogSettings#upload_hour}
  */
  readonly uploadHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#upload_mode SystemLogSettings#upload_mode}
  */
  readonly uploadMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#upload_trigger SystemLogSettings#upload_trigger}
  */
  readonly uploadTrigger?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#username SystemLogSettings#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#username2 SystemLogSettings#username2}
  */
  readonly username2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#username3 SystemLogSettings#username3}
  */
  readonly username3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#when SystemLogSettings#when}
  */
  readonly when?: string;
}

export function systemLogSettingsRollingAnalyzerToTerraform(struct?: SystemLogSettingsRollingAnalyzerOutputReference | SystemLogSettingsRollingAnalyzer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.days),
    del_files: cdktf.stringToTerraform(struct!.delFiles),
    directory: cdktf.stringToTerraform(struct!.directory),
    file_size: cdktf.numberToTerraform(struct!.fileSize),
    gzip_format: cdktf.stringToTerraform(struct!.gzipFormat),
    hour: cdktf.numberToTerraform(struct!.hour),
    ip: cdktf.stringToTerraform(struct!.ip),
    ip2: cdktf.stringToTerraform(struct!.ip2),
    ip3: cdktf.stringToTerraform(struct!.ip3),
    log_format: cdktf.stringToTerraform(struct!.logFormat),
    min: cdktf.numberToTerraform(struct!.min),
    password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.password),
    password2: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.password2),
    password3: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.password3),
    port: cdktf.numberToTerraform(struct!.port),
    port2: cdktf.numberToTerraform(struct!.port2),
    port3: cdktf.numberToTerraform(struct!.port3),
    rolling_upgrade_status: cdktf.numberToTerraform(struct!.rollingUpgradeStatus),
    server: cdktf.stringToTerraform(struct!.server),
    server2: cdktf.stringToTerraform(struct!.server2),
    server3: cdktf.stringToTerraform(struct!.server3),
    server_type: cdktf.stringToTerraform(struct!.serverType),
    upload: cdktf.stringToTerraform(struct!.upload),
    upload_hour: cdktf.numberToTerraform(struct!.uploadHour),
    upload_mode: cdktf.stringToTerraform(struct!.uploadMode),
    upload_trigger: cdktf.stringToTerraform(struct!.uploadTrigger),
    username: cdktf.stringToTerraform(struct!.username),
    username2: cdktf.stringToTerraform(struct!.username2),
    username3: cdktf.stringToTerraform(struct!.username3),
    when: cdktf.stringToTerraform(struct!.when),
  }
}


export function systemLogSettingsRollingAnalyzerToHclTerraform(struct?: SystemLogSettingsRollingAnalyzerOutputReference | SystemLogSettingsRollingAnalyzer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    del_files: {
      value: cdktf.stringToHclTerraform(struct!.delFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_size: {
      value: cdktf.numberToHclTerraform(struct!.fileSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gzip_format: {
      value: cdktf.stringToHclTerraform(struct!.gzipFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip2: {
      value: cdktf.stringToHclTerraform(struct!.ip2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip3: {
      value: cdktf.stringToHclTerraform(struct!.ip3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_format: {
      value: cdktf.stringToHclTerraform(struct!.logFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.password),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    password2: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.password2),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    password3: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.password3),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port2: {
      value: cdktf.numberToHclTerraform(struct!.port2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port3: {
      value: cdktf.numberToHclTerraform(struct!.port3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rolling_upgrade_status: {
      value: cdktf.numberToHclTerraform(struct!.rollingUpgradeStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server2: {
      value: cdktf.stringToHclTerraform(struct!.server2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server3: {
      value: cdktf.stringToHclTerraform(struct!.server3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_type: {
      value: cdktf.stringToHclTerraform(struct!.serverType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload: {
      value: cdktf.stringToHclTerraform(struct!.upload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload_hour: {
      value: cdktf.numberToHclTerraform(struct!.uploadHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upload_mode: {
      value: cdktf.stringToHclTerraform(struct!.uploadMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload_trigger: {
      value: cdktf.stringToHclTerraform(struct!.uploadTrigger),
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
    username2: {
      value: cdktf.stringToHclTerraform(struct!.username2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username3: {
      value: cdktf.stringToHclTerraform(struct!.username3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    when: {
      value: cdktf.stringToHclTerraform(struct!.when),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemLogSettingsRollingAnalyzerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemLogSettingsRollingAnalyzer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._delFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.delFiles = this._delFiles;
    }
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._fileSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSize = this._fileSize;
    }
    if (this._gzipFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzipFormat = this._gzipFormat;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ip2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip2 = this._ip2;
    }
    if (this._ip3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip3 = this._ip3;
    }
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._password2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.password2 = this._password2;
    }
    if (this._password3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.password3 = this._password3;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._port2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.port2 = this._port2;
    }
    if (this._port3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.port3 = this._port3;
    }
    if (this._rollingUpgradeStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpgradeStatus = this._rollingUpgradeStatus;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._server2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.server2 = this._server2;
    }
    if (this._server3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.server3 = this._server3;
    }
    if (this._serverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverType = this._serverType;
    }
    if (this._upload !== undefined) {
      hasAnyValues = true;
      internalValueResult.upload = this._upload;
    }
    if (this._uploadHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadHour = this._uploadHour;
    }
    if (this._uploadMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadMode = this._uploadMode;
    }
    if (this._uploadTrigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadTrigger = this._uploadTrigger;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._username2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.username2 = this._username2;
    }
    if (this._username3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.username3 = this._username3;
    }
    if (this._when !== undefined) {
      hasAnyValues = true;
      internalValueResult.when = this._when;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemLogSettingsRollingAnalyzer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._delFiles = undefined;
      this._directory = undefined;
      this._fileSize = undefined;
      this._gzipFormat = undefined;
      this._hour = undefined;
      this._ip = undefined;
      this._ip2 = undefined;
      this._ip3 = undefined;
      this._logFormat = undefined;
      this._min = undefined;
      this._password = undefined;
      this._password2 = undefined;
      this._password3 = undefined;
      this._port = undefined;
      this._port2 = undefined;
      this._port3 = undefined;
      this._rollingUpgradeStatus = undefined;
      this._server = undefined;
      this._server2 = undefined;
      this._server3 = undefined;
      this._serverType = undefined;
      this._upload = undefined;
      this._uploadHour = undefined;
      this._uploadMode = undefined;
      this._uploadTrigger = undefined;
      this._username = undefined;
      this._username2 = undefined;
      this._username3 = undefined;
      this._when = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._delFiles = value.delFiles;
      this._directory = value.directory;
      this._fileSize = value.fileSize;
      this._gzipFormat = value.gzipFormat;
      this._hour = value.hour;
      this._ip = value.ip;
      this._ip2 = value.ip2;
      this._ip3 = value.ip3;
      this._logFormat = value.logFormat;
      this._min = value.min;
      this._password = value.password;
      this._password2 = value.password2;
      this._password3 = value.password3;
      this._port = value.port;
      this._port2 = value.port2;
      this._port3 = value.port3;
      this._rollingUpgradeStatus = value.rollingUpgradeStatus;
      this._server = value.server;
      this._server2 = value.server2;
      this._server3 = value.server3;
      this._serverType = value.serverType;
      this._upload = value.upload;
      this._uploadHour = value.uploadHour;
      this._uploadMode = value.uploadMode;
      this._uploadTrigger = value.uploadTrigger;
      this._username = value.username;
      this._username2 = value.username2;
      this._username3 = value.username3;
      this._when = value.when;
    }
  }

  // days - computed: true, optional: true, required: false
  private _days?: string[]; 
  public get days() {
    return cdktf.Fn.tolist(this.getListAttribute('days'));
  }
  public set days(value: string[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // del_files - computed: true, optional: true, required: false
  private _delFiles?: string; 
  public get delFiles() {
    return this.getStringAttribute('del_files');
  }
  public set delFiles(value: string) {
    this._delFiles = value;
  }
  public resetDelFiles() {
    this._delFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delFilesInput() {
    return this._delFiles;
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // file_size - computed: true, optional: true, required: false
  private _fileSize?: number; 
  public get fileSize() {
    return this.getNumberAttribute('file_size');
  }
  public set fileSize(value: number) {
    this._fileSize = value;
  }
  public resetFileSize() {
    this._fileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSizeInput() {
    return this._fileSize;
  }

  // gzip_format - computed: true, optional: true, required: false
  private _gzipFormat?: string; 
  public get gzipFormat() {
    return this.getStringAttribute('gzip_format');
  }
  public set gzipFormat(value: string) {
    this._gzipFormat = value;
  }
  public resetGzipFormat() {
    this._gzipFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipFormatInput() {
    return this._gzipFormat;
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip2 - computed: true, optional: true, required: false
  private _ip2?: string; 
  public get ip2() {
    return this.getStringAttribute('ip2');
  }
  public set ip2(value: string) {
    this._ip2 = value;
  }
  public resetIp2() {
    this._ip2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip2Input() {
    return this._ip2;
  }

  // ip3 - computed: true, optional: true, required: false
  private _ip3?: string; 
  public get ip3() {
    return this.getStringAttribute('ip3');
  }
  public set ip3(value: string) {
    this._ip3 = value;
  }
  public resetIp3() {
    this._ip3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip3Input() {
    return this._ip3;
  }

  // log_format - computed: true, optional: true, required: false
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password2 - computed: true, optional: true, required: false
  private _password2?: string[]; 
  public get password2() {
    return cdktf.Fn.tolist(this.getListAttribute('password2'));
  }
  public set password2(value: string[]) {
    this._password2 = value;
  }
  public resetPassword2() {
    this._password2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get password2Input() {
    return this._password2;
  }

  // password3 - computed: true, optional: true, required: false
  private _password3?: string[]; 
  public get password3() {
    return cdktf.Fn.tolist(this.getListAttribute('password3'));
  }
  public set password3(value: string[]) {
    this._password3 = value;
  }
  public resetPassword3() {
    this._password3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get password3Input() {
    return this._password3;
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

  // port2 - computed: false, optional: true, required: false
  private _port2?: number; 
  public get port2() {
    return this.getNumberAttribute('port2');
  }
  public set port2(value: number) {
    this._port2 = value;
  }
  public resetPort2() {
    this._port2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port2Input() {
    return this._port2;
  }

  // port3 - computed: false, optional: true, required: false
  private _port3?: number; 
  public get port3() {
    return this.getNumberAttribute('port3');
  }
  public set port3(value: number) {
    this._port3 = value;
  }
  public resetPort3() {
    this._port3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port3Input() {
    return this._port3;
  }

  // rolling_upgrade_status - computed: false, optional: true, required: false
  private _rollingUpgradeStatus?: number; 
  public get rollingUpgradeStatus() {
    return this.getNumberAttribute('rolling_upgrade_status');
  }
  public set rollingUpgradeStatus(value: number) {
    this._rollingUpgradeStatus = value;
  }
  public resetRollingUpgradeStatus() {
    this._rollingUpgradeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpgradeStatusInput() {
    return this._rollingUpgradeStatus;
  }

  // server - computed: false, optional: true, required: false
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

  // server2 - computed: false, optional: true, required: false
  private _server2?: string; 
  public get server2() {
    return this.getStringAttribute('server2');
  }
  public set server2(value: string) {
    this._server2 = value;
  }
  public resetServer2() {
    this._server2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get server2Input() {
    return this._server2;
  }

  // server3 - computed: false, optional: true, required: false
  private _server3?: string; 
  public get server3() {
    return this.getStringAttribute('server3');
  }
  public set server3(value: string) {
    this._server3 = value;
  }
  public resetServer3() {
    this._server3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get server3Input() {
    return this._server3;
  }

  // server_type - computed: true, optional: true, required: false
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  public resetServerType() {
    this._serverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // upload - computed: true, optional: true, required: false
  private _upload?: string; 
  public get upload() {
    return this.getStringAttribute('upload');
  }
  public set upload(value: string) {
    this._upload = value;
  }
  public resetUpload() {
    this._upload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadInput() {
    return this._upload;
  }

  // upload_hour - computed: false, optional: true, required: false
  private _uploadHour?: number; 
  public get uploadHour() {
    return this.getNumberAttribute('upload_hour');
  }
  public set uploadHour(value: number) {
    this._uploadHour = value;
  }
  public resetUploadHour() {
    this._uploadHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadHourInput() {
    return this._uploadHour;
  }

  // upload_mode - computed: true, optional: true, required: false
  private _uploadMode?: string; 
  public get uploadMode() {
    return this.getStringAttribute('upload_mode');
  }
  public set uploadMode(value: string) {
    this._uploadMode = value;
  }
  public resetUploadMode() {
    this._uploadMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadModeInput() {
    return this._uploadMode;
  }

  // upload_trigger - computed: true, optional: true, required: false
  private _uploadTrigger?: string; 
  public get uploadTrigger() {
    return this.getStringAttribute('upload_trigger');
  }
  public set uploadTrigger(value: string) {
    this._uploadTrigger = value;
  }
  public resetUploadTrigger() {
    this._uploadTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadTriggerInput() {
    return this._uploadTrigger;
  }

  // username - computed: false, optional: true, required: false
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

  // username2 - computed: false, optional: true, required: false
  private _username2?: string; 
  public get username2() {
    return this.getStringAttribute('username2');
  }
  public set username2(value: string) {
    this._username2 = value;
  }
  public resetUsername2() {
    this._username2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get username2Input() {
    return this._username2;
  }

  // username3 - computed: false, optional: true, required: false
  private _username3?: string; 
  public get username3() {
    return this.getStringAttribute('username3');
  }
  public set username3(value: string) {
    this._username3 = value;
  }
  public resetUsername3() {
    this._username3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get username3Input() {
    return this._username3;
  }

  // when - computed: true, optional: true, required: false
  private _when?: string; 
  public get when() {
    return this.getStringAttribute('when');
  }
  public set when(value: string) {
    this._when = value;
  }
  public resetWhen() {
    this._when = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenInput() {
    return this._when;
  }
}
export interface SystemLogSettingsRollingLocal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#days SystemLogSettings#days}
  */
  readonly days?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#del_files SystemLogSettings#del_files}
  */
  readonly delFiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#directory SystemLogSettings#directory}
  */
  readonly directory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#file_size SystemLogSettings#file_size}
  */
  readonly fileSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#gzip_format SystemLogSettings#gzip_format}
  */
  readonly gzipFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#hour SystemLogSettings#hour}
  */
  readonly hour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#ip SystemLogSettings#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#ip2 SystemLogSettings#ip2}
  */
  readonly ip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#ip3 SystemLogSettings#ip3}
  */
  readonly ip3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#log_format SystemLogSettings#log_format}
  */
  readonly logFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#min SystemLogSettings#min}
  */
  readonly min?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#password SystemLogSettings#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#password2 SystemLogSettings#password2}
  */
  readonly password2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#password3 SystemLogSettings#password3}
  */
  readonly password3?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#port SystemLogSettings#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#port2 SystemLogSettings#port2}
  */
  readonly port2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#port3 SystemLogSettings#port3}
  */
  readonly port3?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#rolling_upgrade_status SystemLogSettings#rolling_upgrade_status}
  */
  readonly rollingUpgradeStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#server SystemLogSettings#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#server2 SystemLogSettings#server2}
  */
  readonly server2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#server3 SystemLogSettings#server3}
  */
  readonly server3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#server_type SystemLogSettings#server_type}
  */
  readonly serverType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#upload SystemLogSettings#upload}
  */
  readonly upload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#upload_hour SystemLogSettings#upload_hour}
  */
  readonly uploadHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#upload_mode SystemLogSettings#upload_mode}
  */
  readonly uploadMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#upload_trigger SystemLogSettings#upload_trigger}
  */
  readonly uploadTrigger?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#username SystemLogSettings#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#username2 SystemLogSettings#username2}
  */
  readonly username2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#username3 SystemLogSettings#username3}
  */
  readonly username3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#when SystemLogSettings#when}
  */
  readonly when?: string;
}

export function systemLogSettingsRollingLocalToTerraform(struct?: SystemLogSettingsRollingLocalOutputReference | SystemLogSettingsRollingLocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.days),
    del_files: cdktf.stringToTerraform(struct!.delFiles),
    directory: cdktf.stringToTerraform(struct!.directory),
    file_size: cdktf.numberToTerraform(struct!.fileSize),
    gzip_format: cdktf.stringToTerraform(struct!.gzipFormat),
    hour: cdktf.numberToTerraform(struct!.hour),
    ip: cdktf.stringToTerraform(struct!.ip),
    ip2: cdktf.stringToTerraform(struct!.ip2),
    ip3: cdktf.stringToTerraform(struct!.ip3),
    log_format: cdktf.stringToTerraform(struct!.logFormat),
    min: cdktf.numberToTerraform(struct!.min),
    password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.password),
    password2: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.password2),
    password3: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.password3),
    port: cdktf.numberToTerraform(struct!.port),
    port2: cdktf.numberToTerraform(struct!.port2),
    port3: cdktf.numberToTerraform(struct!.port3),
    rolling_upgrade_status: cdktf.numberToTerraform(struct!.rollingUpgradeStatus),
    server: cdktf.stringToTerraform(struct!.server),
    server2: cdktf.stringToTerraform(struct!.server2),
    server3: cdktf.stringToTerraform(struct!.server3),
    server_type: cdktf.stringToTerraform(struct!.serverType),
    upload: cdktf.stringToTerraform(struct!.upload),
    upload_hour: cdktf.numberToTerraform(struct!.uploadHour),
    upload_mode: cdktf.stringToTerraform(struct!.uploadMode),
    upload_trigger: cdktf.stringToTerraform(struct!.uploadTrigger),
    username: cdktf.stringToTerraform(struct!.username),
    username2: cdktf.stringToTerraform(struct!.username2),
    username3: cdktf.stringToTerraform(struct!.username3),
    when: cdktf.stringToTerraform(struct!.when),
  }
}


export function systemLogSettingsRollingLocalToHclTerraform(struct?: SystemLogSettingsRollingLocalOutputReference | SystemLogSettingsRollingLocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    del_files: {
      value: cdktf.stringToHclTerraform(struct!.delFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_size: {
      value: cdktf.numberToHclTerraform(struct!.fileSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gzip_format: {
      value: cdktf.stringToHclTerraform(struct!.gzipFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip2: {
      value: cdktf.stringToHclTerraform(struct!.ip2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip3: {
      value: cdktf.stringToHclTerraform(struct!.ip3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_format: {
      value: cdktf.stringToHclTerraform(struct!.logFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.password),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    password2: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.password2),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    password3: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.password3),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port2: {
      value: cdktf.numberToHclTerraform(struct!.port2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port3: {
      value: cdktf.numberToHclTerraform(struct!.port3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rolling_upgrade_status: {
      value: cdktf.numberToHclTerraform(struct!.rollingUpgradeStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server2: {
      value: cdktf.stringToHclTerraform(struct!.server2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server3: {
      value: cdktf.stringToHclTerraform(struct!.server3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_type: {
      value: cdktf.stringToHclTerraform(struct!.serverType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload: {
      value: cdktf.stringToHclTerraform(struct!.upload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload_hour: {
      value: cdktf.numberToHclTerraform(struct!.uploadHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upload_mode: {
      value: cdktf.stringToHclTerraform(struct!.uploadMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload_trigger: {
      value: cdktf.stringToHclTerraform(struct!.uploadTrigger),
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
    username2: {
      value: cdktf.stringToHclTerraform(struct!.username2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username3: {
      value: cdktf.stringToHclTerraform(struct!.username3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    when: {
      value: cdktf.stringToHclTerraform(struct!.when),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemLogSettingsRollingLocalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemLogSettingsRollingLocal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._delFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.delFiles = this._delFiles;
    }
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._fileSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSize = this._fileSize;
    }
    if (this._gzipFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzipFormat = this._gzipFormat;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ip2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip2 = this._ip2;
    }
    if (this._ip3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip3 = this._ip3;
    }
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._password2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.password2 = this._password2;
    }
    if (this._password3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.password3 = this._password3;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._port2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.port2 = this._port2;
    }
    if (this._port3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.port3 = this._port3;
    }
    if (this._rollingUpgradeStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpgradeStatus = this._rollingUpgradeStatus;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._server2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.server2 = this._server2;
    }
    if (this._server3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.server3 = this._server3;
    }
    if (this._serverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverType = this._serverType;
    }
    if (this._upload !== undefined) {
      hasAnyValues = true;
      internalValueResult.upload = this._upload;
    }
    if (this._uploadHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadHour = this._uploadHour;
    }
    if (this._uploadMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadMode = this._uploadMode;
    }
    if (this._uploadTrigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadTrigger = this._uploadTrigger;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._username2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.username2 = this._username2;
    }
    if (this._username3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.username3 = this._username3;
    }
    if (this._when !== undefined) {
      hasAnyValues = true;
      internalValueResult.when = this._when;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemLogSettingsRollingLocal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._delFiles = undefined;
      this._directory = undefined;
      this._fileSize = undefined;
      this._gzipFormat = undefined;
      this._hour = undefined;
      this._ip = undefined;
      this._ip2 = undefined;
      this._ip3 = undefined;
      this._logFormat = undefined;
      this._min = undefined;
      this._password = undefined;
      this._password2 = undefined;
      this._password3 = undefined;
      this._port = undefined;
      this._port2 = undefined;
      this._port3 = undefined;
      this._rollingUpgradeStatus = undefined;
      this._server = undefined;
      this._server2 = undefined;
      this._server3 = undefined;
      this._serverType = undefined;
      this._upload = undefined;
      this._uploadHour = undefined;
      this._uploadMode = undefined;
      this._uploadTrigger = undefined;
      this._username = undefined;
      this._username2 = undefined;
      this._username3 = undefined;
      this._when = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._delFiles = value.delFiles;
      this._directory = value.directory;
      this._fileSize = value.fileSize;
      this._gzipFormat = value.gzipFormat;
      this._hour = value.hour;
      this._ip = value.ip;
      this._ip2 = value.ip2;
      this._ip3 = value.ip3;
      this._logFormat = value.logFormat;
      this._min = value.min;
      this._password = value.password;
      this._password2 = value.password2;
      this._password3 = value.password3;
      this._port = value.port;
      this._port2 = value.port2;
      this._port3 = value.port3;
      this._rollingUpgradeStatus = value.rollingUpgradeStatus;
      this._server = value.server;
      this._server2 = value.server2;
      this._server3 = value.server3;
      this._serverType = value.serverType;
      this._upload = value.upload;
      this._uploadHour = value.uploadHour;
      this._uploadMode = value.uploadMode;
      this._uploadTrigger = value.uploadTrigger;
      this._username = value.username;
      this._username2 = value.username2;
      this._username3 = value.username3;
      this._when = value.when;
    }
  }

  // days - computed: true, optional: true, required: false
  private _days?: string[]; 
  public get days() {
    return cdktf.Fn.tolist(this.getListAttribute('days'));
  }
  public set days(value: string[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // del_files - computed: true, optional: true, required: false
  private _delFiles?: string; 
  public get delFiles() {
    return this.getStringAttribute('del_files');
  }
  public set delFiles(value: string) {
    this._delFiles = value;
  }
  public resetDelFiles() {
    this._delFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delFilesInput() {
    return this._delFiles;
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // file_size - computed: true, optional: true, required: false
  private _fileSize?: number; 
  public get fileSize() {
    return this.getNumberAttribute('file_size');
  }
  public set fileSize(value: number) {
    this._fileSize = value;
  }
  public resetFileSize() {
    this._fileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSizeInput() {
    return this._fileSize;
  }

  // gzip_format - computed: true, optional: true, required: false
  private _gzipFormat?: string; 
  public get gzipFormat() {
    return this.getStringAttribute('gzip_format');
  }
  public set gzipFormat(value: string) {
    this._gzipFormat = value;
  }
  public resetGzipFormat() {
    this._gzipFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipFormatInput() {
    return this._gzipFormat;
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip2 - computed: true, optional: true, required: false
  private _ip2?: string; 
  public get ip2() {
    return this.getStringAttribute('ip2');
  }
  public set ip2(value: string) {
    this._ip2 = value;
  }
  public resetIp2() {
    this._ip2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip2Input() {
    return this._ip2;
  }

  // ip3 - computed: true, optional: true, required: false
  private _ip3?: string; 
  public get ip3() {
    return this.getStringAttribute('ip3');
  }
  public set ip3(value: string) {
    this._ip3 = value;
  }
  public resetIp3() {
    this._ip3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip3Input() {
    return this._ip3;
  }

  // log_format - computed: true, optional: true, required: false
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password2 - computed: true, optional: true, required: false
  private _password2?: string[]; 
  public get password2() {
    return cdktf.Fn.tolist(this.getListAttribute('password2'));
  }
  public set password2(value: string[]) {
    this._password2 = value;
  }
  public resetPassword2() {
    this._password2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get password2Input() {
    return this._password2;
  }

  // password3 - computed: true, optional: true, required: false
  private _password3?: string[]; 
  public get password3() {
    return cdktf.Fn.tolist(this.getListAttribute('password3'));
  }
  public set password3(value: string[]) {
    this._password3 = value;
  }
  public resetPassword3() {
    this._password3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get password3Input() {
    return this._password3;
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

  // port2 - computed: false, optional: true, required: false
  private _port2?: number; 
  public get port2() {
    return this.getNumberAttribute('port2');
  }
  public set port2(value: number) {
    this._port2 = value;
  }
  public resetPort2() {
    this._port2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port2Input() {
    return this._port2;
  }

  // port3 - computed: false, optional: true, required: false
  private _port3?: number; 
  public get port3() {
    return this.getNumberAttribute('port3');
  }
  public set port3(value: number) {
    this._port3 = value;
  }
  public resetPort3() {
    this._port3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port3Input() {
    return this._port3;
  }

  // rolling_upgrade_status - computed: false, optional: true, required: false
  private _rollingUpgradeStatus?: number; 
  public get rollingUpgradeStatus() {
    return this.getNumberAttribute('rolling_upgrade_status');
  }
  public set rollingUpgradeStatus(value: number) {
    this._rollingUpgradeStatus = value;
  }
  public resetRollingUpgradeStatus() {
    this._rollingUpgradeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpgradeStatusInput() {
    return this._rollingUpgradeStatus;
  }

  // server - computed: false, optional: true, required: false
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

  // server2 - computed: false, optional: true, required: false
  private _server2?: string; 
  public get server2() {
    return this.getStringAttribute('server2');
  }
  public set server2(value: string) {
    this._server2 = value;
  }
  public resetServer2() {
    this._server2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get server2Input() {
    return this._server2;
  }

  // server3 - computed: false, optional: true, required: false
  private _server3?: string; 
  public get server3() {
    return this.getStringAttribute('server3');
  }
  public set server3(value: string) {
    this._server3 = value;
  }
  public resetServer3() {
    this._server3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get server3Input() {
    return this._server3;
  }

  // server_type - computed: true, optional: true, required: false
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  public resetServerType() {
    this._serverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // upload - computed: true, optional: true, required: false
  private _upload?: string; 
  public get upload() {
    return this.getStringAttribute('upload');
  }
  public set upload(value: string) {
    this._upload = value;
  }
  public resetUpload() {
    this._upload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadInput() {
    return this._upload;
  }

  // upload_hour - computed: false, optional: true, required: false
  private _uploadHour?: number; 
  public get uploadHour() {
    return this.getNumberAttribute('upload_hour');
  }
  public set uploadHour(value: number) {
    this._uploadHour = value;
  }
  public resetUploadHour() {
    this._uploadHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadHourInput() {
    return this._uploadHour;
  }

  // upload_mode - computed: true, optional: true, required: false
  private _uploadMode?: string; 
  public get uploadMode() {
    return this.getStringAttribute('upload_mode');
  }
  public set uploadMode(value: string) {
    this._uploadMode = value;
  }
  public resetUploadMode() {
    this._uploadMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadModeInput() {
    return this._uploadMode;
  }

  // upload_trigger - computed: true, optional: true, required: false
  private _uploadTrigger?: string; 
  public get uploadTrigger() {
    return this.getStringAttribute('upload_trigger');
  }
  public set uploadTrigger(value: string) {
    this._uploadTrigger = value;
  }
  public resetUploadTrigger() {
    this._uploadTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadTriggerInput() {
    return this._uploadTrigger;
  }

  // username - computed: false, optional: true, required: false
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

  // username2 - computed: false, optional: true, required: false
  private _username2?: string; 
  public get username2() {
    return this.getStringAttribute('username2');
  }
  public set username2(value: string) {
    this._username2 = value;
  }
  public resetUsername2() {
    this._username2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get username2Input() {
    return this._username2;
  }

  // username3 - computed: false, optional: true, required: false
  private _username3?: string; 
  public get username3() {
    return this.getStringAttribute('username3');
  }
  public set username3(value: string) {
    this._username3 = value;
  }
  public resetUsername3() {
    this._username3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get username3Input() {
    return this._username3;
  }

  // when - computed: true, optional: true, required: false
  private _when?: string; 
  public get when() {
    return this.getStringAttribute('when');
  }
  public set when(value: string) {
    this._when = value;
  }
  public resetWhen() {
    this._when = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenInput() {
    return this._when;
  }
}
export interface SystemLogSettingsRollingRegular {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#days SystemLogSettings#days}
  */
  readonly days?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#del_files SystemLogSettings#del_files}
  */
  readonly delFiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#directory SystemLogSettings#directory}
  */
  readonly directory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#file_size SystemLogSettings#file_size}
  */
  readonly fileSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#gzip_format SystemLogSettings#gzip_format}
  */
  readonly gzipFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#hour SystemLogSettings#hour}
  */
  readonly hour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#ip SystemLogSettings#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#ip2 SystemLogSettings#ip2}
  */
  readonly ip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#ip3 SystemLogSettings#ip3}
  */
  readonly ip3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#log_format SystemLogSettings#log_format}
  */
  readonly logFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#min SystemLogSettings#min}
  */
  readonly min?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#password SystemLogSettings#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#password2 SystemLogSettings#password2}
  */
  readonly password2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#password3 SystemLogSettings#password3}
  */
  readonly password3?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#port SystemLogSettings#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#port2 SystemLogSettings#port2}
  */
  readonly port2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#port3 SystemLogSettings#port3}
  */
  readonly port3?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#rolling_upgrade_status SystemLogSettings#rolling_upgrade_status}
  */
  readonly rollingUpgradeStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#server SystemLogSettings#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#server2 SystemLogSettings#server2}
  */
  readonly server2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#server3 SystemLogSettings#server3}
  */
  readonly server3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#server_type SystemLogSettings#server_type}
  */
  readonly serverType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#upload SystemLogSettings#upload}
  */
  readonly upload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#upload_hour SystemLogSettings#upload_hour}
  */
  readonly uploadHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#upload_mode SystemLogSettings#upload_mode}
  */
  readonly uploadMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#upload_trigger SystemLogSettings#upload_trigger}
  */
  readonly uploadTrigger?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#username SystemLogSettings#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#username2 SystemLogSettings#username2}
  */
  readonly username2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#username3 SystemLogSettings#username3}
  */
  readonly username3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#when SystemLogSettings#when}
  */
  readonly when?: string;
}

export function systemLogSettingsRollingRegularToTerraform(struct?: SystemLogSettingsRollingRegularOutputReference | SystemLogSettingsRollingRegular): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.days),
    del_files: cdktf.stringToTerraform(struct!.delFiles),
    directory: cdktf.stringToTerraform(struct!.directory),
    file_size: cdktf.numberToTerraform(struct!.fileSize),
    gzip_format: cdktf.stringToTerraform(struct!.gzipFormat),
    hour: cdktf.numberToTerraform(struct!.hour),
    ip: cdktf.stringToTerraform(struct!.ip),
    ip2: cdktf.stringToTerraform(struct!.ip2),
    ip3: cdktf.stringToTerraform(struct!.ip3),
    log_format: cdktf.stringToTerraform(struct!.logFormat),
    min: cdktf.numberToTerraform(struct!.min),
    password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.password),
    password2: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.password2),
    password3: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.password3),
    port: cdktf.numberToTerraform(struct!.port),
    port2: cdktf.numberToTerraform(struct!.port2),
    port3: cdktf.numberToTerraform(struct!.port3),
    rolling_upgrade_status: cdktf.numberToTerraform(struct!.rollingUpgradeStatus),
    server: cdktf.stringToTerraform(struct!.server),
    server2: cdktf.stringToTerraform(struct!.server2),
    server3: cdktf.stringToTerraform(struct!.server3),
    server_type: cdktf.stringToTerraform(struct!.serverType),
    upload: cdktf.stringToTerraform(struct!.upload),
    upload_hour: cdktf.numberToTerraform(struct!.uploadHour),
    upload_mode: cdktf.stringToTerraform(struct!.uploadMode),
    upload_trigger: cdktf.stringToTerraform(struct!.uploadTrigger),
    username: cdktf.stringToTerraform(struct!.username),
    username2: cdktf.stringToTerraform(struct!.username2),
    username3: cdktf.stringToTerraform(struct!.username3),
    when: cdktf.stringToTerraform(struct!.when),
  }
}


export function systemLogSettingsRollingRegularToHclTerraform(struct?: SystemLogSettingsRollingRegularOutputReference | SystemLogSettingsRollingRegular): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    del_files: {
      value: cdktf.stringToHclTerraform(struct!.delFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_size: {
      value: cdktf.numberToHclTerraform(struct!.fileSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gzip_format: {
      value: cdktf.stringToHclTerraform(struct!.gzipFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip2: {
      value: cdktf.stringToHclTerraform(struct!.ip2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip3: {
      value: cdktf.stringToHclTerraform(struct!.ip3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_format: {
      value: cdktf.stringToHclTerraform(struct!.logFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.password),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    password2: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.password2),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    password3: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.password3),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port2: {
      value: cdktf.numberToHclTerraform(struct!.port2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port3: {
      value: cdktf.numberToHclTerraform(struct!.port3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rolling_upgrade_status: {
      value: cdktf.numberToHclTerraform(struct!.rollingUpgradeStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server2: {
      value: cdktf.stringToHclTerraform(struct!.server2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server3: {
      value: cdktf.stringToHclTerraform(struct!.server3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_type: {
      value: cdktf.stringToHclTerraform(struct!.serverType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload: {
      value: cdktf.stringToHclTerraform(struct!.upload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload_hour: {
      value: cdktf.numberToHclTerraform(struct!.uploadHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upload_mode: {
      value: cdktf.stringToHclTerraform(struct!.uploadMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload_trigger: {
      value: cdktf.stringToHclTerraform(struct!.uploadTrigger),
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
    username2: {
      value: cdktf.stringToHclTerraform(struct!.username2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username3: {
      value: cdktf.stringToHclTerraform(struct!.username3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    when: {
      value: cdktf.stringToHclTerraform(struct!.when),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemLogSettingsRollingRegularOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemLogSettingsRollingRegular | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._delFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.delFiles = this._delFiles;
    }
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._fileSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSize = this._fileSize;
    }
    if (this._gzipFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzipFormat = this._gzipFormat;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ip2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip2 = this._ip2;
    }
    if (this._ip3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip3 = this._ip3;
    }
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._password2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.password2 = this._password2;
    }
    if (this._password3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.password3 = this._password3;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._port2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.port2 = this._port2;
    }
    if (this._port3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.port3 = this._port3;
    }
    if (this._rollingUpgradeStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpgradeStatus = this._rollingUpgradeStatus;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._server2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.server2 = this._server2;
    }
    if (this._server3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.server3 = this._server3;
    }
    if (this._serverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverType = this._serverType;
    }
    if (this._upload !== undefined) {
      hasAnyValues = true;
      internalValueResult.upload = this._upload;
    }
    if (this._uploadHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadHour = this._uploadHour;
    }
    if (this._uploadMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadMode = this._uploadMode;
    }
    if (this._uploadTrigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadTrigger = this._uploadTrigger;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._username2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.username2 = this._username2;
    }
    if (this._username3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.username3 = this._username3;
    }
    if (this._when !== undefined) {
      hasAnyValues = true;
      internalValueResult.when = this._when;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemLogSettingsRollingRegular | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._delFiles = undefined;
      this._directory = undefined;
      this._fileSize = undefined;
      this._gzipFormat = undefined;
      this._hour = undefined;
      this._ip = undefined;
      this._ip2 = undefined;
      this._ip3 = undefined;
      this._logFormat = undefined;
      this._min = undefined;
      this._password = undefined;
      this._password2 = undefined;
      this._password3 = undefined;
      this._port = undefined;
      this._port2 = undefined;
      this._port3 = undefined;
      this._rollingUpgradeStatus = undefined;
      this._server = undefined;
      this._server2 = undefined;
      this._server3 = undefined;
      this._serverType = undefined;
      this._upload = undefined;
      this._uploadHour = undefined;
      this._uploadMode = undefined;
      this._uploadTrigger = undefined;
      this._username = undefined;
      this._username2 = undefined;
      this._username3 = undefined;
      this._when = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._delFiles = value.delFiles;
      this._directory = value.directory;
      this._fileSize = value.fileSize;
      this._gzipFormat = value.gzipFormat;
      this._hour = value.hour;
      this._ip = value.ip;
      this._ip2 = value.ip2;
      this._ip3 = value.ip3;
      this._logFormat = value.logFormat;
      this._min = value.min;
      this._password = value.password;
      this._password2 = value.password2;
      this._password3 = value.password3;
      this._port = value.port;
      this._port2 = value.port2;
      this._port3 = value.port3;
      this._rollingUpgradeStatus = value.rollingUpgradeStatus;
      this._server = value.server;
      this._server2 = value.server2;
      this._server3 = value.server3;
      this._serverType = value.serverType;
      this._upload = value.upload;
      this._uploadHour = value.uploadHour;
      this._uploadMode = value.uploadMode;
      this._uploadTrigger = value.uploadTrigger;
      this._username = value.username;
      this._username2 = value.username2;
      this._username3 = value.username3;
      this._when = value.when;
    }
  }

  // days - computed: true, optional: true, required: false
  private _days?: string[]; 
  public get days() {
    return cdktf.Fn.tolist(this.getListAttribute('days'));
  }
  public set days(value: string[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // del_files - computed: true, optional: true, required: false
  private _delFiles?: string; 
  public get delFiles() {
    return this.getStringAttribute('del_files');
  }
  public set delFiles(value: string) {
    this._delFiles = value;
  }
  public resetDelFiles() {
    this._delFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delFilesInput() {
    return this._delFiles;
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // file_size - computed: true, optional: true, required: false
  private _fileSize?: number; 
  public get fileSize() {
    return this.getNumberAttribute('file_size');
  }
  public set fileSize(value: number) {
    this._fileSize = value;
  }
  public resetFileSize() {
    this._fileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSizeInput() {
    return this._fileSize;
  }

  // gzip_format - computed: true, optional: true, required: false
  private _gzipFormat?: string; 
  public get gzipFormat() {
    return this.getStringAttribute('gzip_format');
  }
  public set gzipFormat(value: string) {
    this._gzipFormat = value;
  }
  public resetGzipFormat() {
    this._gzipFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipFormatInput() {
    return this._gzipFormat;
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip2 - computed: true, optional: true, required: false
  private _ip2?: string; 
  public get ip2() {
    return this.getStringAttribute('ip2');
  }
  public set ip2(value: string) {
    this._ip2 = value;
  }
  public resetIp2() {
    this._ip2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip2Input() {
    return this._ip2;
  }

  // ip3 - computed: true, optional: true, required: false
  private _ip3?: string; 
  public get ip3() {
    return this.getStringAttribute('ip3');
  }
  public set ip3(value: string) {
    this._ip3 = value;
  }
  public resetIp3() {
    this._ip3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip3Input() {
    return this._ip3;
  }

  // log_format - computed: true, optional: true, required: false
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password2 - computed: true, optional: true, required: false
  private _password2?: string[]; 
  public get password2() {
    return cdktf.Fn.tolist(this.getListAttribute('password2'));
  }
  public set password2(value: string[]) {
    this._password2 = value;
  }
  public resetPassword2() {
    this._password2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get password2Input() {
    return this._password2;
  }

  // password3 - computed: true, optional: true, required: false
  private _password3?: string[]; 
  public get password3() {
    return cdktf.Fn.tolist(this.getListAttribute('password3'));
  }
  public set password3(value: string[]) {
    this._password3 = value;
  }
  public resetPassword3() {
    this._password3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get password3Input() {
    return this._password3;
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

  // port2 - computed: false, optional: true, required: false
  private _port2?: number; 
  public get port2() {
    return this.getNumberAttribute('port2');
  }
  public set port2(value: number) {
    this._port2 = value;
  }
  public resetPort2() {
    this._port2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port2Input() {
    return this._port2;
  }

  // port3 - computed: false, optional: true, required: false
  private _port3?: number; 
  public get port3() {
    return this.getNumberAttribute('port3');
  }
  public set port3(value: number) {
    this._port3 = value;
  }
  public resetPort3() {
    this._port3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port3Input() {
    return this._port3;
  }

  // rolling_upgrade_status - computed: false, optional: true, required: false
  private _rollingUpgradeStatus?: number; 
  public get rollingUpgradeStatus() {
    return this.getNumberAttribute('rolling_upgrade_status');
  }
  public set rollingUpgradeStatus(value: number) {
    this._rollingUpgradeStatus = value;
  }
  public resetRollingUpgradeStatus() {
    this._rollingUpgradeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpgradeStatusInput() {
    return this._rollingUpgradeStatus;
  }

  // server - computed: false, optional: true, required: false
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

  // server2 - computed: false, optional: true, required: false
  private _server2?: string; 
  public get server2() {
    return this.getStringAttribute('server2');
  }
  public set server2(value: string) {
    this._server2 = value;
  }
  public resetServer2() {
    this._server2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get server2Input() {
    return this._server2;
  }

  // server3 - computed: false, optional: true, required: false
  private _server3?: string; 
  public get server3() {
    return this.getStringAttribute('server3');
  }
  public set server3(value: string) {
    this._server3 = value;
  }
  public resetServer3() {
    this._server3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get server3Input() {
    return this._server3;
  }

  // server_type - computed: true, optional: true, required: false
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  public resetServerType() {
    this._serverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // upload - computed: true, optional: true, required: false
  private _upload?: string; 
  public get upload() {
    return this.getStringAttribute('upload');
  }
  public set upload(value: string) {
    this._upload = value;
  }
  public resetUpload() {
    this._upload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadInput() {
    return this._upload;
  }

  // upload_hour - computed: false, optional: true, required: false
  private _uploadHour?: number; 
  public get uploadHour() {
    return this.getNumberAttribute('upload_hour');
  }
  public set uploadHour(value: number) {
    this._uploadHour = value;
  }
  public resetUploadHour() {
    this._uploadHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadHourInput() {
    return this._uploadHour;
  }

  // upload_mode - computed: true, optional: true, required: false
  private _uploadMode?: string; 
  public get uploadMode() {
    return this.getStringAttribute('upload_mode');
  }
  public set uploadMode(value: string) {
    this._uploadMode = value;
  }
  public resetUploadMode() {
    this._uploadMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadModeInput() {
    return this._uploadMode;
  }

  // upload_trigger - computed: true, optional: true, required: false
  private _uploadTrigger?: string; 
  public get uploadTrigger() {
    return this.getStringAttribute('upload_trigger');
  }
  public set uploadTrigger(value: string) {
    this._uploadTrigger = value;
  }
  public resetUploadTrigger() {
    this._uploadTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadTriggerInput() {
    return this._uploadTrigger;
  }

  // username - computed: false, optional: true, required: false
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

  // username2 - computed: false, optional: true, required: false
  private _username2?: string; 
  public get username2() {
    return this.getStringAttribute('username2');
  }
  public set username2(value: string) {
    this._username2 = value;
  }
  public resetUsername2() {
    this._username2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get username2Input() {
    return this._username2;
  }

  // username3 - computed: false, optional: true, required: false
  private _username3?: string; 
  public get username3() {
    return this.getStringAttribute('username3');
  }
  public set username3(value: string) {
    this._username3 = value;
  }
  public resetUsername3() {
    this._username3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get username3Input() {
    return this._username3;
  }

  // when - computed: true, optional: true, required: false
  private _when?: string; 
  public get when() {
    return this.getStringAttribute('when');
  }
  public set when(value: string) {
    this._when = value;
  }
  public resetWhen() {
    this._when = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenInput() {
    return this._when;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings fortimanager_system_log_settings}
*/
export class SystemLogSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_log_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemLogSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemLogSettings to import
  * @param importFromId The id of the existing SystemLogSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemLogSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_log_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings fortimanager_system_log_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemLogSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemLogSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_log_settings',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._browseMaxLogfiles = config.browseMaxLogfiles;
    this._deviceAutoDetect = config.deviceAutoDetect;
    this._dnsResolveDstip = config.dnsResolveDstip;
    this._downloadMaxLogs = config.downloadMaxLogs;
    this._facCustomField1 = config.facCustomField1;
    this._fazCustomField1 = config.fazCustomField1;
    this._fchCustomField1 = config.fchCustomField1;
    this._fctCustomField1 = config.fctCustomField1;
    this._fddCustomField1 = config.fddCustomField1;
    this._fgtCustomField1 = config.fgtCustomField1;
    this._fmgCustomField1 = config.fmgCustomField1;
    this._fmlCustomField1 = config.fmlCustomField1;
    this._fpxCustomField1 = config.fpxCustomField1;
    this._fsaCustomField1 = config.fsaCustomField1;
    this._fwbCustomField1 = config.fwbCustomField1;
    this._haAutoMigrate = config.haAutoMigrate;
    this._id = config.id;
    this._importMaxLogfiles = config.importMaxLogfiles;
    this._keepDevLogs = config.keepDevLogs;
    this._legacyAuthMode = config.legacyAuthMode;
    this._logFileArchiveName = config.logFileArchiveName;
    this._logIntervalDevNoLogging = config.logIntervalDevNoLogging;
    this._logUploadIntervalDevNoLogging = config.logUploadIntervalDevNoLogging;
    this._syncSearchTimeout = config.syncSearchTimeout;
    this._unencryptedLogging = config.unencryptedLogging;
    this._rollingAnalyzer.internalValue = config.rollingAnalyzer;
    this._rollingLocal.internalValue = config.rollingLocal;
    this._rollingRegular.internalValue = config.rollingRegular;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // browse_max_logfiles - computed: true, optional: true, required: false
  private _browseMaxLogfiles?: number; 
  public get browseMaxLogfiles() {
    return this.getNumberAttribute('browse_max_logfiles');
  }
  public set browseMaxLogfiles(value: number) {
    this._browseMaxLogfiles = value;
  }
  public resetBrowseMaxLogfiles() {
    this._browseMaxLogfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browseMaxLogfilesInput() {
    return this._browseMaxLogfiles;
  }

  // device_auto_detect - computed: true, optional: true, required: false
  private _deviceAutoDetect?: string; 
  public get deviceAutoDetect() {
    return this.getStringAttribute('device_auto_detect');
  }
  public set deviceAutoDetect(value: string) {
    this._deviceAutoDetect = value;
  }
  public resetDeviceAutoDetect() {
    this._deviceAutoDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceAutoDetectInput() {
    return this._deviceAutoDetect;
  }

  // dns_resolve_dstip - computed: true, optional: true, required: false
  private _dnsResolveDstip?: string; 
  public get dnsResolveDstip() {
    return this.getStringAttribute('dns_resolve_dstip');
  }
  public set dnsResolveDstip(value: string) {
    this._dnsResolveDstip = value;
  }
  public resetDnsResolveDstip() {
    this._dnsResolveDstip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolveDstipInput() {
    return this._dnsResolveDstip;
  }

  // download_max_logs - computed: true, optional: true, required: false
  private _downloadMaxLogs?: number; 
  public get downloadMaxLogs() {
    return this.getNumberAttribute('download_max_logs');
  }
  public set downloadMaxLogs(value: number) {
    this._downloadMaxLogs = value;
  }
  public resetDownloadMaxLogs() {
    this._downloadMaxLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadMaxLogsInput() {
    return this._downloadMaxLogs;
  }

  // fac_custom_field1 - computed: false, optional: true, required: false
  private _facCustomField1?: string; 
  public get facCustomField1() {
    return this.getStringAttribute('fac_custom_field1');
  }
  public set facCustomField1(value: string) {
    this._facCustomField1 = value;
  }
  public resetFacCustomField1() {
    this._facCustomField1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facCustomField1Input() {
    return this._facCustomField1;
  }

  // faz_custom_field1 - computed: false, optional: true, required: false
  private _fazCustomField1?: string; 
  public get fazCustomField1() {
    return this.getStringAttribute('faz_custom_field1');
  }
  public set fazCustomField1(value: string) {
    this._fazCustomField1 = value;
  }
  public resetFazCustomField1() {
    this._fazCustomField1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fazCustomField1Input() {
    return this._fazCustomField1;
  }

  // fch_custom_field1 - computed: false, optional: true, required: false
  private _fchCustomField1?: string; 
  public get fchCustomField1() {
    return this.getStringAttribute('fch_custom_field1');
  }
  public set fchCustomField1(value: string) {
    this._fchCustomField1 = value;
  }
  public resetFchCustomField1() {
    this._fchCustomField1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fchCustomField1Input() {
    return this._fchCustomField1;
  }

  // fct_custom_field1 - computed: false, optional: true, required: false
  private _fctCustomField1?: string; 
  public get fctCustomField1() {
    return this.getStringAttribute('fct_custom_field1');
  }
  public set fctCustomField1(value: string) {
    this._fctCustomField1 = value;
  }
  public resetFctCustomField1() {
    this._fctCustomField1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fctCustomField1Input() {
    return this._fctCustomField1;
  }

  // fdd_custom_field1 - computed: false, optional: true, required: false
  private _fddCustomField1?: string; 
  public get fddCustomField1() {
    return this.getStringAttribute('fdd_custom_field1');
  }
  public set fddCustomField1(value: string) {
    this._fddCustomField1 = value;
  }
  public resetFddCustomField1() {
    this._fddCustomField1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fddCustomField1Input() {
    return this._fddCustomField1;
  }

  // fgt_custom_field1 - computed: false, optional: true, required: false
  private _fgtCustomField1?: string; 
  public get fgtCustomField1() {
    return this.getStringAttribute('fgt_custom_field1');
  }
  public set fgtCustomField1(value: string) {
    this._fgtCustomField1 = value;
  }
  public resetFgtCustomField1() {
    this._fgtCustomField1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtCustomField1Input() {
    return this._fgtCustomField1;
  }

  // fmg_custom_field1 - computed: false, optional: true, required: false
  private _fmgCustomField1?: string; 
  public get fmgCustomField1() {
    return this.getStringAttribute('fmg_custom_field1');
  }
  public set fmgCustomField1(value: string) {
    this._fmgCustomField1 = value;
  }
  public resetFmgCustomField1() {
    this._fmgCustomField1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgCustomField1Input() {
    return this._fmgCustomField1;
  }

  // fml_custom_field1 - computed: false, optional: true, required: false
  private _fmlCustomField1?: string; 
  public get fmlCustomField1() {
    return this.getStringAttribute('fml_custom_field1');
  }
  public set fmlCustomField1(value: string) {
    this._fmlCustomField1 = value;
  }
  public resetFmlCustomField1() {
    this._fmlCustomField1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmlCustomField1Input() {
    return this._fmlCustomField1;
  }

  // fpx_custom_field1 - computed: false, optional: true, required: false
  private _fpxCustomField1?: string; 
  public get fpxCustomField1() {
    return this.getStringAttribute('fpx_custom_field1');
  }
  public set fpxCustomField1(value: string) {
    this._fpxCustomField1 = value;
  }
  public resetFpxCustomField1() {
    this._fpxCustomField1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpxCustomField1Input() {
    return this._fpxCustomField1;
  }

  // fsa_custom_field1 - computed: false, optional: true, required: false
  private _fsaCustomField1?: string; 
  public get fsaCustomField1() {
    return this.getStringAttribute('fsa_custom_field1');
  }
  public set fsaCustomField1(value: string) {
    this._fsaCustomField1 = value;
  }
  public resetFsaCustomField1() {
    this._fsaCustomField1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsaCustomField1Input() {
    return this._fsaCustomField1;
  }

  // fwb_custom_field1 - computed: false, optional: true, required: false
  private _fwbCustomField1?: string; 
  public get fwbCustomField1() {
    return this.getStringAttribute('fwb_custom_field1');
  }
  public set fwbCustomField1(value: string) {
    this._fwbCustomField1 = value;
  }
  public resetFwbCustomField1() {
    this._fwbCustomField1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwbCustomField1Input() {
    return this._fwbCustomField1;
  }

  // ha_auto_migrate - computed: true, optional: true, required: false
  private _haAutoMigrate?: string; 
  public get haAutoMigrate() {
    return this.getStringAttribute('ha_auto_migrate');
  }
  public set haAutoMigrate(value: string) {
    this._haAutoMigrate = value;
  }
  public resetHaAutoMigrate() {
    this._haAutoMigrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haAutoMigrateInput() {
    return this._haAutoMigrate;
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

  // import_max_logfiles - computed: true, optional: true, required: false
  private _importMaxLogfiles?: number; 
  public get importMaxLogfiles() {
    return this.getNumberAttribute('import_max_logfiles');
  }
  public set importMaxLogfiles(value: number) {
    this._importMaxLogfiles = value;
  }
  public resetImportMaxLogfiles() {
    this._importMaxLogfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importMaxLogfilesInput() {
    return this._importMaxLogfiles;
  }

  // keep_dev_logs - computed: true, optional: true, required: false
  private _keepDevLogs?: string; 
  public get keepDevLogs() {
    return this.getStringAttribute('keep_dev_logs');
  }
  public set keepDevLogs(value: string) {
    this._keepDevLogs = value;
  }
  public resetKeepDevLogs() {
    this._keepDevLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepDevLogsInput() {
    return this._keepDevLogs;
  }

  // legacy_auth_mode - computed: true, optional: true, required: false
  private _legacyAuthMode?: string; 
  public get legacyAuthMode() {
    return this.getStringAttribute('legacy_auth_mode');
  }
  public set legacyAuthMode(value: string) {
    this._legacyAuthMode = value;
  }
  public resetLegacyAuthMode() {
    this._legacyAuthMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyAuthModeInput() {
    return this._legacyAuthMode;
  }

  // log_file_archive_name - computed: true, optional: true, required: false
  private _logFileArchiveName?: string; 
  public get logFileArchiveName() {
    return this.getStringAttribute('log_file_archive_name');
  }
  public set logFileArchiveName(value: string) {
    this._logFileArchiveName = value;
  }
  public resetLogFileArchiveName() {
    this._logFileArchiveName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFileArchiveNameInput() {
    return this._logFileArchiveName;
  }

  // log_interval_dev_no_logging - computed: true, optional: true, required: false
  private _logIntervalDevNoLogging?: number; 
  public get logIntervalDevNoLogging() {
    return this.getNumberAttribute('log_interval_dev_no_logging');
  }
  public set logIntervalDevNoLogging(value: number) {
    this._logIntervalDevNoLogging = value;
  }
  public resetLogIntervalDevNoLogging() {
    this._logIntervalDevNoLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIntervalDevNoLoggingInput() {
    return this._logIntervalDevNoLogging;
  }

  // log_upload_interval_dev_no_logging - computed: true, optional: true, required: false
  private _logUploadIntervalDevNoLogging?: number; 
  public get logUploadIntervalDevNoLogging() {
    return this.getNumberAttribute('log_upload_interval_dev_no_logging');
  }
  public set logUploadIntervalDevNoLogging(value: number) {
    this._logUploadIntervalDevNoLogging = value;
  }
  public resetLogUploadIntervalDevNoLogging() {
    this._logUploadIntervalDevNoLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logUploadIntervalDevNoLoggingInput() {
    return this._logUploadIntervalDevNoLogging;
  }

  // sync_search_timeout - computed: true, optional: true, required: false
  private _syncSearchTimeout?: number; 
  public get syncSearchTimeout() {
    return this.getNumberAttribute('sync_search_timeout');
  }
  public set syncSearchTimeout(value: number) {
    this._syncSearchTimeout = value;
  }
  public resetSyncSearchTimeout() {
    this._syncSearchTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSearchTimeoutInput() {
    return this._syncSearchTimeout;
  }

  // unencrypted_logging - computed: true, optional: true, required: false
  private _unencryptedLogging?: string; 
  public get unencryptedLogging() {
    return this.getStringAttribute('unencrypted_logging');
  }
  public set unencryptedLogging(value: string) {
    this._unencryptedLogging = value;
  }
  public resetUnencryptedLogging() {
    this._unencryptedLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unencryptedLoggingInput() {
    return this._unencryptedLogging;
  }

  // rolling_analyzer - computed: false, optional: true, required: false
  private _rollingAnalyzer = new SystemLogSettingsRollingAnalyzerOutputReference(this, "rolling_analyzer");
  public get rollingAnalyzer() {
    return this._rollingAnalyzer;
  }
  public putRollingAnalyzer(value: SystemLogSettingsRollingAnalyzer) {
    this._rollingAnalyzer.internalValue = value;
  }
  public resetRollingAnalyzer() {
    this._rollingAnalyzer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingAnalyzerInput() {
    return this._rollingAnalyzer.internalValue;
  }

  // rolling_local - computed: false, optional: true, required: false
  private _rollingLocal = new SystemLogSettingsRollingLocalOutputReference(this, "rolling_local");
  public get rollingLocal() {
    return this._rollingLocal;
  }
  public putRollingLocal(value: SystemLogSettingsRollingLocal) {
    this._rollingLocal.internalValue = value;
  }
  public resetRollingLocal() {
    this._rollingLocal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingLocalInput() {
    return this._rollingLocal.internalValue;
  }

  // rolling_regular - computed: false, optional: true, required: false
  private _rollingRegular = new SystemLogSettingsRollingRegularOutputReference(this, "rolling_regular");
  public get rollingRegular() {
    return this._rollingRegular;
  }
  public putRollingRegular(value: SystemLogSettingsRollingRegular) {
    this._rollingRegular.internalValue = value;
  }
  public resetRollingRegular() {
    this._rollingRegular.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingRegularInput() {
    return this._rollingRegular.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      browse_max_logfiles: cdktf.numberToTerraform(this._browseMaxLogfiles),
      device_auto_detect: cdktf.stringToTerraform(this._deviceAutoDetect),
      dns_resolve_dstip: cdktf.stringToTerraform(this._dnsResolveDstip),
      download_max_logs: cdktf.numberToTerraform(this._downloadMaxLogs),
      fac_custom_field1: cdktf.stringToTerraform(this._facCustomField1),
      faz_custom_field1: cdktf.stringToTerraform(this._fazCustomField1),
      fch_custom_field1: cdktf.stringToTerraform(this._fchCustomField1),
      fct_custom_field1: cdktf.stringToTerraform(this._fctCustomField1),
      fdd_custom_field1: cdktf.stringToTerraform(this._fddCustomField1),
      fgt_custom_field1: cdktf.stringToTerraform(this._fgtCustomField1),
      fmg_custom_field1: cdktf.stringToTerraform(this._fmgCustomField1),
      fml_custom_field1: cdktf.stringToTerraform(this._fmlCustomField1),
      fpx_custom_field1: cdktf.stringToTerraform(this._fpxCustomField1),
      fsa_custom_field1: cdktf.stringToTerraform(this._fsaCustomField1),
      fwb_custom_field1: cdktf.stringToTerraform(this._fwbCustomField1),
      ha_auto_migrate: cdktf.stringToTerraform(this._haAutoMigrate),
      id: cdktf.stringToTerraform(this._id),
      import_max_logfiles: cdktf.numberToTerraform(this._importMaxLogfiles),
      keep_dev_logs: cdktf.stringToTerraform(this._keepDevLogs),
      legacy_auth_mode: cdktf.stringToTerraform(this._legacyAuthMode),
      log_file_archive_name: cdktf.stringToTerraform(this._logFileArchiveName),
      log_interval_dev_no_logging: cdktf.numberToTerraform(this._logIntervalDevNoLogging),
      log_upload_interval_dev_no_logging: cdktf.numberToTerraform(this._logUploadIntervalDevNoLogging),
      sync_search_timeout: cdktf.numberToTerraform(this._syncSearchTimeout),
      unencrypted_logging: cdktf.stringToTerraform(this._unencryptedLogging),
      rolling_analyzer: systemLogSettingsRollingAnalyzerToTerraform(this._rollingAnalyzer.internalValue),
      rolling_local: systemLogSettingsRollingLocalToTerraform(this._rollingLocal.internalValue),
      rolling_regular: systemLogSettingsRollingRegularToTerraform(this._rollingRegular.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      browse_max_logfiles: {
        value: cdktf.numberToHclTerraform(this._browseMaxLogfiles),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_auto_detect: {
        value: cdktf.stringToHclTerraform(this._deviceAutoDetect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_resolve_dstip: {
        value: cdktf.stringToHclTerraform(this._dnsResolveDstip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      download_max_logs: {
        value: cdktf.numberToHclTerraform(this._downloadMaxLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fac_custom_field1: {
        value: cdktf.stringToHclTerraform(this._facCustomField1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      faz_custom_field1: {
        value: cdktf.stringToHclTerraform(this._fazCustomField1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fch_custom_field1: {
        value: cdktf.stringToHclTerraform(this._fchCustomField1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fct_custom_field1: {
        value: cdktf.stringToHclTerraform(this._fctCustomField1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fdd_custom_field1: {
        value: cdktf.stringToHclTerraform(this._fddCustomField1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fgt_custom_field1: {
        value: cdktf.stringToHclTerraform(this._fgtCustomField1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fmg_custom_field1: {
        value: cdktf.stringToHclTerraform(this._fmgCustomField1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fml_custom_field1: {
        value: cdktf.stringToHclTerraform(this._fmlCustomField1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fpx_custom_field1: {
        value: cdktf.stringToHclTerraform(this._fpxCustomField1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fsa_custom_field1: {
        value: cdktf.stringToHclTerraform(this._fsaCustomField1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwb_custom_field1: {
        value: cdktf.stringToHclTerraform(this._fwbCustomField1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_auto_migrate: {
        value: cdktf.stringToHclTerraform(this._haAutoMigrate),
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
      import_max_logfiles: {
        value: cdktf.numberToHclTerraform(this._importMaxLogfiles),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keep_dev_logs: {
        value: cdktf.stringToHclTerraform(this._keepDevLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      legacy_auth_mode: {
        value: cdktf.stringToHclTerraform(this._legacyAuthMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_file_archive_name: {
        value: cdktf.stringToHclTerraform(this._logFileArchiveName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_interval_dev_no_logging: {
        value: cdktf.numberToHclTerraform(this._logIntervalDevNoLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_upload_interval_dev_no_logging: {
        value: cdktf.numberToHclTerraform(this._logUploadIntervalDevNoLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sync_search_timeout: {
        value: cdktf.numberToHclTerraform(this._syncSearchTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unencrypted_logging: {
        value: cdktf.stringToHclTerraform(this._unencryptedLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rolling_analyzer: {
        value: systemLogSettingsRollingAnalyzerToHclTerraform(this._rollingAnalyzer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemLogSettingsRollingAnalyzerList",
      },
      rolling_local: {
        value: systemLogSettingsRollingLocalToHclTerraform(this._rollingLocal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemLogSettingsRollingLocalList",
      },
      rolling_regular: {
        value: systemLogSettingsRollingRegularToHclTerraform(this._rollingRegular.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemLogSettingsRollingRegularList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
