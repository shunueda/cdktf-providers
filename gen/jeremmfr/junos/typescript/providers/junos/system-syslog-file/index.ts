// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSyslogFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Do not suppress the repeated message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#allow_duplicates SystemSyslogFile#allow_duplicates}
  */
  readonly allowDuplicates?: boolean | cdktf.IResolvable;
  /**
  * All facilities sseverity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#any_severity SystemSyslogFile#any_severity}
  */
  readonly anySeverity?: string;
  /**
  * Authorization system severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#authorization_severity SystemSyslogFile#authorization_severity}
  */
  readonly authorizationSeverity?: string;
  /**
  * Configuration change log severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#changelog_severity SystemSyslogFile#changelog_severity}
  */
  readonly changelogSeverity?: string;
  /**
  * Configuration conflict log severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#conflictlog_severity SystemSyslogFile#conflictlog_severity}
  */
  readonly conflictlogSeverity?: string;
  /**
  * Various system processes severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#daemon_severity SystemSyslogFile#daemon_severity}
  */
  readonly daemonSeverity?: string;
  /**
  * Dynamic flow capture severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#dfc_severity SystemSyslogFile#dfc_severity}
  */
  readonly dfcSeverity?: string;
  /**
  * Include priority and facility in messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#explicit_priority SystemSyslogFile#explicit_priority}
  */
  readonly explicitPriority?: boolean | cdktf.IResolvable;
  /**
  * Local external applications severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#external_severity SystemSyslogFile#external_severity}
  */
  readonly externalSeverity?: string;
  /**
  * Name of file in which to log data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#filename SystemSyslogFile#filename}
  */
  readonly filename: string;
  /**
  * Firewall filtering system severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#firewall_severity SystemSyslogFile#firewall_severity}
  */
  readonly firewallSeverity?: string;
  /**
  * FTP process severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#ftp_severity SystemSyslogFile#ftp_severity}
  */
  readonly ftpSeverity?: string;
  /**
  * Commands executed by the UI severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#interactivecommands_severity SystemSyslogFile#interactivecommands_severity}
  */
  readonly interactivecommandsSeverity?: string;
  /**
  * Kernel severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#kernel_severity SystemSyslogFile#kernel_severity}
  */
  readonly kernelSeverity?: string;
  /**
  * Regular expression for lines to be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#match SystemSyslogFile#match}
  */
  readonly match?: string;
  /**
  * Matching string(s) for lines to be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#match_strings SystemSyslogFile#match_strings}
  */
  readonly matchStrings?: string[];
  /**
  * NTP process severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#ntp_severity SystemSyslogFile#ntp_severity}
  */
  readonly ntpSeverity?: string;
  /**
  * Packet Forwarding Engine severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#pfe_severity SystemSyslogFile#pfe_severity}
  */
  readonly pfeSeverity?: string;
  /**
  * Security related severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#security_severity SystemSyslogFile#security_severity}
  */
  readonly securitySeverity?: string;
  /**
  * User processes severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#user_severity SystemSyslogFile#user_severity}
  */
  readonly userSeverity?: string;
  /**
  * archive block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#archive SystemSyslogFile#archive}
  */
  readonly archive?: SystemSyslogFileArchive;
  /**
  * structured_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#structured_data SystemSyslogFile#structured_data}
  */
  readonly structuredData?: SystemSyslogFileStructuredData;
}
export interface SystemSyslogFileArchiveSites {
  /**
  * Password for login into the archive site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#password SystemSyslogFile#password}
  */
  readonly password?: string;
  /**
  * Routing instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#routing_instance SystemSyslogFile#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Primary or failover URLs to receive archive files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#url SystemSyslogFile#url}
  */
  readonly url: string;
}

export function systemSyslogFileArchiveSitesToTerraform(struct?: SystemSyslogFileArchiveSites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    routing_instance: cdktf.stringToTerraform(struct!.routingInstance),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function systemSyslogFileArchiveSitesToHclTerraform(struct?: SystemSyslogFileArchiveSites | cdktf.IResolvable): any {
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
    routing_instance: {
      value: cdktf.stringToHclTerraform(struct!.routingInstance),
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

export class SystemSyslogFileArchiveSitesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSyslogFileArchiveSites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._routingInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingInstance = this._routingInstance;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSyslogFileArchiveSites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._routingInstance = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._routingInstance = value.routingInstance;
      this._url = value.url;
    }
  }

  // password - computed: false, optional: true, required: false
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

  // routing_instance - computed: false, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class SystemSyslogFileArchiveSitesList extends cdktf.ComplexList {
  public internalValue? : SystemSyslogFileArchiveSites[] | cdktf.IResolvable

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
  public get(index: number): SystemSyslogFileArchiveSitesOutputReference {
    return new SystemSyslogFileArchiveSitesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemSyslogFileArchive {
  /**
  * Mark file as if it contains binary data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#binary_data SystemSyslogFile#binary_data}
  */
  readonly binaryData?: boolean | cdktf.IResolvable;
  /**
  * Number of files to be archived.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#files SystemSyslogFile#files}
  */
  readonly files?: number;
  /**
  * Don't mark file as if it contains binary data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#no_binary_data SystemSyslogFile#no_binary_data}
  */
  readonly noBinaryData?: boolean | cdktf.IResolvable;
  /**
  * Don't allow any user to read the log file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#no_world_readable SystemSyslogFile#no_world_readable}
  */
  readonly noWorldReadable?: boolean | cdktf.IResolvable;
  /**
  * Size of files to be archived (bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#size SystemSyslogFile#size}
  */
  readonly size?: number;
  /**
  * Start time for file transmission (YYYY-MM-DD.HH:MM:SS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#start_time SystemSyslogFile#start_time}
  */
  readonly startTime?: string;
  /**
  * Frequency at which to transfer files to archive sites (minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#transfer_interval SystemSyslogFile#transfer_interval}
  */
  readonly transferInterval?: number;
  /**
  * Allow any user to read the log file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#world_readable SystemSyslogFile#world_readable}
  */
  readonly worldReadable?: boolean | cdktf.IResolvable;
  /**
  * sites block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#sites SystemSyslogFile#sites}
  */
  readonly sites?: SystemSyslogFileArchiveSites[] | cdktf.IResolvable;
}

export function systemSyslogFileArchiveToTerraform(struct?: SystemSyslogFileArchive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_data: cdktf.booleanToTerraform(struct!.binaryData),
    files: cdktf.numberToTerraform(struct!.files),
    no_binary_data: cdktf.booleanToTerraform(struct!.noBinaryData),
    no_world_readable: cdktf.booleanToTerraform(struct!.noWorldReadable),
    size: cdktf.numberToTerraform(struct!.size),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    transfer_interval: cdktf.numberToTerraform(struct!.transferInterval),
    world_readable: cdktf.booleanToTerraform(struct!.worldReadable),
    sites: cdktf.listMapper(systemSyslogFileArchiveSitesToTerraform, true)(struct!.sites),
  }
}


export function systemSyslogFileArchiveToHclTerraform(struct?: SystemSyslogFileArchive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binary_data: {
      value: cdktf.booleanToHclTerraform(struct!.binaryData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    files: {
      value: cdktf.numberToHclTerraform(struct!.files),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_binary_data: {
      value: cdktf.booleanToHclTerraform(struct!.noBinaryData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_world_readable: {
      value: cdktf.booleanToHclTerraform(struct!.noWorldReadable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transfer_interval: {
      value: cdktf.numberToHclTerraform(struct!.transferInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    world_readable: {
      value: cdktf.booleanToHclTerraform(struct!.worldReadable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sites: {
      value: cdktf.listMapperHcl(systemSyslogFileArchiveSitesToHclTerraform, true)(struct!.sites),
      isBlock: true,
      type: "list",
      storageClassType: "SystemSyslogFileArchiveSitesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSyslogFileArchiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemSyslogFileArchive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binaryData !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryData = this._binaryData;
    }
    if (this._files !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files;
    }
    if (this._noBinaryData !== undefined) {
      hasAnyValues = true;
      internalValueResult.noBinaryData = this._noBinaryData;
    }
    if (this._noWorldReadable !== undefined) {
      hasAnyValues = true;
      internalValueResult.noWorldReadable = this._noWorldReadable;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._transferInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferInterval = this._transferInterval;
    }
    if (this._worldReadable !== undefined) {
      hasAnyValues = true;
      internalValueResult.worldReadable = this._worldReadable;
    }
    if (this._sites?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sites = this._sites?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSyslogFileArchive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._binaryData = undefined;
      this._files = undefined;
      this._noBinaryData = undefined;
      this._noWorldReadable = undefined;
      this._size = undefined;
      this._startTime = undefined;
      this._transferInterval = undefined;
      this._worldReadable = undefined;
      this._sites.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._binaryData = value.binaryData;
      this._files = value.files;
      this._noBinaryData = value.noBinaryData;
      this._noWorldReadable = value.noWorldReadable;
      this._size = value.size;
      this._startTime = value.startTime;
      this._transferInterval = value.transferInterval;
      this._worldReadable = value.worldReadable;
      this._sites.internalValue = value.sites;
    }
  }

  // binary_data - computed: false, optional: true, required: false
  private _binaryData?: boolean | cdktf.IResolvable; 
  public get binaryData() {
    return this.getBooleanAttribute('binary_data');
  }
  public set binaryData(value: boolean | cdktf.IResolvable) {
    this._binaryData = value;
  }
  public resetBinaryData() {
    this._binaryData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryDataInput() {
    return this._binaryData;
  }

  // files - computed: false, optional: true, required: false
  private _files?: number; 
  public get files() {
    return this.getNumberAttribute('files');
  }
  public set files(value: number) {
    this._files = value;
  }
  public resetFiles() {
    this._files = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files;
  }

  // no_binary_data - computed: false, optional: true, required: false
  private _noBinaryData?: boolean | cdktf.IResolvable; 
  public get noBinaryData() {
    return this.getBooleanAttribute('no_binary_data');
  }
  public set noBinaryData(value: boolean | cdktf.IResolvable) {
    this._noBinaryData = value;
  }
  public resetNoBinaryData() {
    this._noBinaryData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noBinaryDataInput() {
    return this._noBinaryData;
  }

  // no_world_readable - computed: false, optional: true, required: false
  private _noWorldReadable?: boolean | cdktf.IResolvable; 
  public get noWorldReadable() {
    return this.getBooleanAttribute('no_world_readable');
  }
  public set noWorldReadable(value: boolean | cdktf.IResolvable) {
    this._noWorldReadable = value;
  }
  public resetNoWorldReadable() {
    this._noWorldReadable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noWorldReadableInput() {
    return this._noWorldReadable;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // transfer_interval - computed: false, optional: true, required: false
  private _transferInterval?: number; 
  public get transferInterval() {
    return this.getNumberAttribute('transfer_interval');
  }
  public set transferInterval(value: number) {
    this._transferInterval = value;
  }
  public resetTransferInterval() {
    this._transferInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferIntervalInput() {
    return this._transferInterval;
  }

  // world_readable - computed: false, optional: true, required: false
  private _worldReadable?: boolean | cdktf.IResolvable; 
  public get worldReadable() {
    return this.getBooleanAttribute('world_readable');
  }
  public set worldReadable(value: boolean | cdktf.IResolvable) {
    this._worldReadable = value;
  }
  public resetWorldReadable() {
    this._worldReadable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get worldReadableInput() {
    return this._worldReadable;
  }

  // sites - computed: false, optional: true, required: false
  private _sites = new SystemSyslogFileArchiveSitesList(this, "sites", false);
  public get sites() {
    return this._sites;
  }
  public putSites(value: SystemSyslogFileArchiveSites[] | cdktf.IResolvable) {
    this._sites.internalValue = value;
  }
  public resetSites() {
    this._sites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitesInput() {
    return this._sites.internalValue;
  }
}
export interface SystemSyslogFileStructuredData {
  /**
  * Omit English-language text from end of logged message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#brief SystemSyslogFile#brief}
  */
  readonly brief?: boolean | cdktf.IResolvable;
}

export function systemSyslogFileStructuredDataToTerraform(struct?: SystemSyslogFileStructuredData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    brief: cdktf.booleanToTerraform(struct!.brief),
  }
}


export function systemSyslogFileStructuredDataToHclTerraform(struct?: SystemSyslogFileStructuredData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    brief: {
      value: cdktf.booleanToHclTerraform(struct!.brief),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSyslogFileStructuredDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemSyslogFileStructuredData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brief !== undefined) {
      hasAnyValues = true;
      internalValueResult.brief = this._brief;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSyslogFileStructuredData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._brief = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._brief = value.brief;
    }
  }

  // brief - computed: false, optional: true, required: false
  private _brief?: boolean | cdktf.IResolvable; 
  public get brief() {
    return this.getBooleanAttribute('brief');
  }
  public set brief(value: boolean | cdktf.IResolvable) {
    this._brief = value;
  }
  public resetBrief() {
    this._brief = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get briefInput() {
    return this._brief;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file junos_system_syslog_file}
*/
export class SystemSyslogFile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_system_syslog_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSyslogFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSyslogFile to import
  * @param importFromId The id of the existing SystemSyslogFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSyslogFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_system_syslog_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_syslog_file junos_system_syslog_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSyslogFileConfig
  */
  public constructor(scope: Construct, id: string, config: SystemSyslogFileConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_system_syslog_file',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowDuplicates = config.allowDuplicates;
    this._anySeverity = config.anySeverity;
    this._authorizationSeverity = config.authorizationSeverity;
    this._changelogSeverity = config.changelogSeverity;
    this._conflictlogSeverity = config.conflictlogSeverity;
    this._daemonSeverity = config.daemonSeverity;
    this._dfcSeverity = config.dfcSeverity;
    this._explicitPriority = config.explicitPriority;
    this._externalSeverity = config.externalSeverity;
    this._filename = config.filename;
    this._firewallSeverity = config.firewallSeverity;
    this._ftpSeverity = config.ftpSeverity;
    this._interactivecommandsSeverity = config.interactivecommandsSeverity;
    this._kernelSeverity = config.kernelSeverity;
    this._match = config.match;
    this._matchStrings = config.matchStrings;
    this._ntpSeverity = config.ntpSeverity;
    this._pfeSeverity = config.pfeSeverity;
    this._securitySeverity = config.securitySeverity;
    this._userSeverity = config.userSeverity;
    this._archive.internalValue = config.archive;
    this._structuredData.internalValue = config.structuredData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_duplicates - computed: false, optional: true, required: false
  private _allowDuplicates?: boolean | cdktf.IResolvable; 
  public get allowDuplicates() {
    return this.getBooleanAttribute('allow_duplicates');
  }
  public set allowDuplicates(value: boolean | cdktf.IResolvable) {
    this._allowDuplicates = value;
  }
  public resetAllowDuplicates() {
    this._allowDuplicates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDuplicatesInput() {
    return this._allowDuplicates;
  }

  // any_severity - computed: false, optional: true, required: false
  private _anySeverity?: string; 
  public get anySeverity() {
    return this.getStringAttribute('any_severity');
  }
  public set anySeverity(value: string) {
    this._anySeverity = value;
  }
  public resetAnySeverity() {
    this._anySeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anySeverityInput() {
    return this._anySeverity;
  }

  // authorization_severity - computed: false, optional: true, required: false
  private _authorizationSeverity?: string; 
  public get authorizationSeverity() {
    return this.getStringAttribute('authorization_severity');
  }
  public set authorizationSeverity(value: string) {
    this._authorizationSeverity = value;
  }
  public resetAuthorizationSeverity() {
    this._authorizationSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationSeverityInput() {
    return this._authorizationSeverity;
  }

  // changelog_severity - computed: false, optional: true, required: false
  private _changelogSeverity?: string; 
  public get changelogSeverity() {
    return this.getStringAttribute('changelog_severity');
  }
  public set changelogSeverity(value: string) {
    this._changelogSeverity = value;
  }
  public resetChangelogSeverity() {
    this._changelogSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changelogSeverityInput() {
    return this._changelogSeverity;
  }

  // conflictlog_severity - computed: false, optional: true, required: false
  private _conflictlogSeverity?: string; 
  public get conflictlogSeverity() {
    return this.getStringAttribute('conflictlog_severity');
  }
  public set conflictlogSeverity(value: string) {
    this._conflictlogSeverity = value;
  }
  public resetConflictlogSeverity() {
    this._conflictlogSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictlogSeverityInput() {
    return this._conflictlogSeverity;
  }

  // daemon_severity - computed: false, optional: true, required: false
  private _daemonSeverity?: string; 
  public get daemonSeverity() {
    return this.getStringAttribute('daemon_severity');
  }
  public set daemonSeverity(value: string) {
    this._daemonSeverity = value;
  }
  public resetDaemonSeverity() {
    this._daemonSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonSeverityInput() {
    return this._daemonSeverity;
  }

  // dfc_severity - computed: false, optional: true, required: false
  private _dfcSeverity?: string; 
  public get dfcSeverity() {
    return this.getStringAttribute('dfc_severity');
  }
  public set dfcSeverity(value: string) {
    this._dfcSeverity = value;
  }
  public resetDfcSeverity() {
    this._dfcSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfcSeverityInput() {
    return this._dfcSeverity;
  }

  // explicit_priority - computed: false, optional: true, required: false
  private _explicitPriority?: boolean | cdktf.IResolvable; 
  public get explicitPriority() {
    return this.getBooleanAttribute('explicit_priority');
  }
  public set explicitPriority(value: boolean | cdktf.IResolvable) {
    this._explicitPriority = value;
  }
  public resetExplicitPriority() {
    this._explicitPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitPriorityInput() {
    return this._explicitPriority;
  }

  // external_severity - computed: false, optional: true, required: false
  private _externalSeverity?: string; 
  public get externalSeverity() {
    return this.getStringAttribute('external_severity');
  }
  public set externalSeverity(value: string) {
    this._externalSeverity = value;
  }
  public resetExternalSeverity() {
    this._externalSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSeverityInput() {
    return this._externalSeverity;
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // firewall_severity - computed: false, optional: true, required: false
  private _firewallSeverity?: string; 
  public get firewallSeverity() {
    return this.getStringAttribute('firewall_severity');
  }
  public set firewallSeverity(value: string) {
    this._firewallSeverity = value;
  }
  public resetFirewallSeverity() {
    this._firewallSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallSeverityInput() {
    return this._firewallSeverity;
  }

  // ftp_severity - computed: false, optional: true, required: false
  private _ftpSeverity?: string; 
  public get ftpSeverity() {
    return this.getStringAttribute('ftp_severity');
  }
  public set ftpSeverity(value: string) {
    this._ftpSeverity = value;
  }
  public resetFtpSeverity() {
    this._ftpSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpSeverityInput() {
    return this._ftpSeverity;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interactivecommands_severity - computed: false, optional: true, required: false
  private _interactivecommandsSeverity?: string; 
  public get interactivecommandsSeverity() {
    return this.getStringAttribute('interactivecommands_severity');
  }
  public set interactivecommandsSeverity(value: string) {
    this._interactivecommandsSeverity = value;
  }
  public resetInteractivecommandsSeverity() {
    this._interactivecommandsSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interactivecommandsSeverityInput() {
    return this._interactivecommandsSeverity;
  }

  // kernel_severity - computed: false, optional: true, required: false
  private _kernelSeverity?: string; 
  public get kernelSeverity() {
    return this.getStringAttribute('kernel_severity');
  }
  public set kernelSeverity(value: string) {
    this._kernelSeverity = value;
  }
  public resetKernelSeverity() {
    this._kernelSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelSeverityInput() {
    return this._kernelSeverity;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // match_strings - computed: false, optional: true, required: false
  private _matchStrings?: string[]; 
  public get matchStrings() {
    return this.getListAttribute('match_strings');
  }
  public set matchStrings(value: string[]) {
    this._matchStrings = value;
  }
  public resetMatchStrings() {
    this._matchStrings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStringsInput() {
    return this._matchStrings;
  }

  // ntp_severity - computed: false, optional: true, required: false
  private _ntpSeverity?: string; 
  public get ntpSeverity() {
    return this.getStringAttribute('ntp_severity');
  }
  public set ntpSeverity(value: string) {
    this._ntpSeverity = value;
  }
  public resetNtpSeverity() {
    this._ntpSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpSeverityInput() {
    return this._ntpSeverity;
  }

  // pfe_severity - computed: false, optional: true, required: false
  private _pfeSeverity?: string; 
  public get pfeSeverity() {
    return this.getStringAttribute('pfe_severity');
  }
  public set pfeSeverity(value: string) {
    this._pfeSeverity = value;
  }
  public resetPfeSeverity() {
    this._pfeSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfeSeverityInput() {
    return this._pfeSeverity;
  }

  // security_severity - computed: false, optional: true, required: false
  private _securitySeverity?: string; 
  public get securitySeverity() {
    return this.getStringAttribute('security_severity');
  }
  public set securitySeverity(value: string) {
    this._securitySeverity = value;
  }
  public resetSecuritySeverity() {
    this._securitySeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySeverityInput() {
    return this._securitySeverity;
  }

  // user_severity - computed: false, optional: true, required: false
  private _userSeverity?: string; 
  public get userSeverity() {
    return this.getStringAttribute('user_severity');
  }
  public set userSeverity(value: string) {
    this._userSeverity = value;
  }
  public resetUserSeverity() {
    this._userSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSeverityInput() {
    return this._userSeverity;
  }

  // archive - computed: false, optional: true, required: false
  private _archive = new SystemSyslogFileArchiveOutputReference(this, "archive");
  public get archive() {
    return this._archive;
  }
  public putArchive(value: SystemSyslogFileArchive) {
    this._archive.internalValue = value;
  }
  public resetArchive() {
    this._archive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveInput() {
    return this._archive.internalValue;
  }

  // structured_data - computed: false, optional: true, required: false
  private _structuredData = new SystemSyslogFileStructuredDataOutputReference(this, "structured_data");
  public get structuredData() {
    return this._structuredData;
  }
  public putStructuredData(value: SystemSyslogFileStructuredData) {
    this._structuredData.internalValue = value;
  }
  public resetStructuredData() {
    this._structuredData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get structuredDataInput() {
    return this._structuredData.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_duplicates: cdktf.booleanToTerraform(this._allowDuplicates),
      any_severity: cdktf.stringToTerraform(this._anySeverity),
      authorization_severity: cdktf.stringToTerraform(this._authorizationSeverity),
      changelog_severity: cdktf.stringToTerraform(this._changelogSeverity),
      conflictlog_severity: cdktf.stringToTerraform(this._conflictlogSeverity),
      daemon_severity: cdktf.stringToTerraform(this._daemonSeverity),
      dfc_severity: cdktf.stringToTerraform(this._dfcSeverity),
      explicit_priority: cdktf.booleanToTerraform(this._explicitPriority),
      external_severity: cdktf.stringToTerraform(this._externalSeverity),
      filename: cdktf.stringToTerraform(this._filename),
      firewall_severity: cdktf.stringToTerraform(this._firewallSeverity),
      ftp_severity: cdktf.stringToTerraform(this._ftpSeverity),
      interactivecommands_severity: cdktf.stringToTerraform(this._interactivecommandsSeverity),
      kernel_severity: cdktf.stringToTerraform(this._kernelSeverity),
      match: cdktf.stringToTerraform(this._match),
      match_strings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchStrings),
      ntp_severity: cdktf.stringToTerraform(this._ntpSeverity),
      pfe_severity: cdktf.stringToTerraform(this._pfeSeverity),
      security_severity: cdktf.stringToTerraform(this._securitySeverity),
      user_severity: cdktf.stringToTerraform(this._userSeverity),
      archive: systemSyslogFileArchiveToTerraform(this._archive.internalValue),
      structured_data: systemSyslogFileStructuredDataToTerraform(this._structuredData.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_duplicates: {
        value: cdktf.booleanToHclTerraform(this._allowDuplicates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      any_severity: {
        value: cdktf.stringToHclTerraform(this._anySeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_severity: {
        value: cdktf.stringToHclTerraform(this._authorizationSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      changelog_severity: {
        value: cdktf.stringToHclTerraform(this._changelogSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conflictlog_severity: {
        value: cdktf.stringToHclTerraform(this._conflictlogSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      daemon_severity: {
        value: cdktf.stringToHclTerraform(this._daemonSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dfc_severity: {
        value: cdktf.stringToHclTerraform(this._dfcSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      explicit_priority: {
        value: cdktf.booleanToHclTerraform(this._explicitPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_severity: {
        value: cdktf.stringToHclTerraform(this._externalSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filename: {
        value: cdktf.stringToHclTerraform(this._filename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_severity: {
        value: cdktf.stringToHclTerraform(this._firewallSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftp_severity: {
        value: cdktf.stringToHclTerraform(this._ftpSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interactivecommands_severity: {
        value: cdktf.stringToHclTerraform(this._interactivecommandsSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kernel_severity: {
        value: cdktf.stringToHclTerraform(this._kernelSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match: {
        value: cdktf.stringToHclTerraform(this._match),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_strings: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchStrings),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ntp_severity: {
        value: cdktf.stringToHclTerraform(this._ntpSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pfe_severity: {
        value: cdktf.stringToHclTerraform(this._pfeSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_severity: {
        value: cdktf.stringToHclTerraform(this._securitySeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_severity: {
        value: cdktf.stringToHclTerraform(this._userSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      archive: {
        value: systemSyslogFileArchiveToHclTerraform(this._archive.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemSyslogFileArchive",
      },
      structured_data: {
        value: systemSyslogFileStructuredDataToHclTerraform(this._structuredData.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemSyslogFileStructuredData",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
