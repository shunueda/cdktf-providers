// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_sandbox_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseEndpointSandboxProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_sandbox_profiles#authentication DataFortisaseEndpointSandboxProfiles#authentication}
  */
  readonly authentication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_sandbox_profiles#detection_verdict_level DataFortisaseEndpointSandboxProfiles#detection_verdict_level}
  */
  readonly detectionVerdictLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_sandbox_profiles#exceptions DataFortisaseEndpointSandboxProfiles#exceptions}
  */
  readonly exceptions?: DataFortisaseEndpointSandboxProfilesExceptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_sandbox_profiles#file_submission_options DataFortisaseEndpointSandboxProfiles#file_submission_options}
  */
  readonly fileSubmissionOptions?: DataFortisaseEndpointSandboxProfilesFileSubmissionOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_sandbox_profiles#host_name DataFortisaseEndpointSandboxProfiles#host_name}
  */
  readonly hostName?: string;
  /**
  * Integer representing how notifications should be handled on FortiSandbox file submission. 0 - display notification balloon when malware is detected in a submission. 1 - display a popup for all file submissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_sandbox_profiles#notification_type DataFortisaseEndpointSandboxProfiles#notification_type}
  */
  readonly notificationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_sandbox_profiles#password DataFortisaseEndpointSandboxProfiles#password}
  */
  readonly password?: string;
  /**
  * The primary key of the object. Can be found in the response from the get request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_sandbox_profiles#primary_key DataFortisaseEndpointSandboxProfiles#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_sandbox_profiles#remediation_actions DataFortisaseEndpointSandboxProfiles#remediation_actions}
  */
  readonly remediationActions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_sandbox_profiles#sandbox_mode DataFortisaseEndpointSandboxProfiles#sandbox_mode}
  */
  readonly sandboxMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_sandbox_profiles#timeout_awaiting_sandbox_results DataFortisaseEndpointSandboxProfiles#timeout_awaiting_sandbox_results}
  */
  readonly timeoutAwaitingSandboxResults?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_sandbox_profiles#username DataFortisaseEndpointSandboxProfiles#username}
  */
  readonly username?: string;
}
export interface DataFortisaseEndpointSandboxProfilesExceptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_sandbox_profiles#exclude_files_from_trusted_sources DataFortisaseEndpointSandboxProfiles#exclude_files_from_trusted_sources}
  */
  readonly excludeFilesFromTrustedSources?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_sandbox_profiles#files DataFortisaseEndpointSandboxProfiles#files}
  */
  readonly files?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_sandbox_profiles#folders DataFortisaseEndpointSandboxProfiles#folders}
  */
  readonly folders?: string[];
}

export function dataFortisaseEndpointSandboxProfilesExceptionsToTerraform(struct?: DataFortisaseEndpointSandboxProfilesExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_files_from_trusted_sources: cdktf.stringToTerraform(struct!.excludeFilesFromTrustedSources),
    files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.files),
    folders: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.folders),
  }
}


export function dataFortisaseEndpointSandboxProfilesExceptionsToHclTerraform(struct?: DataFortisaseEndpointSandboxProfilesExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_files_from_trusted_sources: {
      value: cdktf.stringToHclTerraform(struct!.excludeFilesFromTrustedSources),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.files),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    folders: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.folders),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointSandboxProfilesExceptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseEndpointSandboxProfilesExceptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeFilesFromTrustedSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeFilesFromTrustedSources = this._excludeFilesFromTrustedSources;
    }
    if (this._files !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files;
    }
    if (this._folders !== undefined) {
      hasAnyValues = true;
      internalValueResult.folders = this._folders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointSandboxProfilesExceptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeFilesFromTrustedSources = undefined;
      this._files = undefined;
      this._folders = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeFilesFromTrustedSources = value.excludeFilesFromTrustedSources;
      this._files = value.files;
      this._folders = value.folders;
    }
  }

  // exclude_files_from_trusted_sources - computed: true, optional: true, required: false
  private _excludeFilesFromTrustedSources?: string; 
  public get excludeFilesFromTrustedSources() {
    return this.getStringAttribute('exclude_files_from_trusted_sources');
  }
  public set excludeFilesFromTrustedSources(value: string) {
    this._excludeFilesFromTrustedSources = value;
  }
  public resetExcludeFilesFromTrustedSources() {
    this._excludeFilesFromTrustedSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFilesFromTrustedSourcesInput() {
    return this._excludeFilesFromTrustedSources;
  }

  // files - computed: true, optional: true, required: false
  private _files?: string[]; 
  public get files() {
    return cdktf.Fn.tolist(this.getListAttribute('files'));
  }
  public set files(value: string[]) {
    this._files = value;
  }
  public resetFiles() {
    this._files = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files;
  }

  // folders - computed: true, optional: true, required: false
  private _folders?: string[]; 
  public get folders() {
    return cdktf.Fn.tolist(this.getListAttribute('folders'));
  }
  public set folders(value: string[]) {
    this._folders = value;
  }
  public resetFolders() {
    this._folders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foldersInput() {
    return this._folders;
  }
}
export interface DataFortisaseEndpointSandboxProfilesFileSubmissionOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_sandbox_profiles#all_email_downloads DataFortisaseEndpointSandboxProfiles#all_email_downloads}
  */
  readonly allEmailDownloads?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_sandbox_profiles#all_files_mapped_network_drives DataFortisaseEndpointSandboxProfiles#all_files_mapped_network_drives}
  */
  readonly allFilesMappedNetworkDrives?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_sandbox_profiles#all_files_removable_media DataFortisaseEndpointSandboxProfiles#all_files_removable_media}
  */
  readonly allFilesRemovableMedia?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_sandbox_profiles#all_web_downloads DataFortisaseEndpointSandboxProfiles#all_web_downloads}
  */
  readonly allWebDownloads?: string;
}

export function dataFortisaseEndpointSandboxProfilesFileSubmissionOptionsToTerraform(struct?: DataFortisaseEndpointSandboxProfilesFileSubmissionOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_email_downloads: cdktf.stringToTerraform(struct!.allEmailDownloads),
    all_files_mapped_network_drives: cdktf.stringToTerraform(struct!.allFilesMappedNetworkDrives),
    all_files_removable_media: cdktf.stringToTerraform(struct!.allFilesRemovableMedia),
    all_web_downloads: cdktf.stringToTerraform(struct!.allWebDownloads),
  }
}


export function dataFortisaseEndpointSandboxProfilesFileSubmissionOptionsToHclTerraform(struct?: DataFortisaseEndpointSandboxProfilesFileSubmissionOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_email_downloads: {
      value: cdktf.stringToHclTerraform(struct!.allEmailDownloads),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    all_files_mapped_network_drives: {
      value: cdktf.stringToHclTerraform(struct!.allFilesMappedNetworkDrives),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    all_files_removable_media: {
      value: cdktf.stringToHclTerraform(struct!.allFilesRemovableMedia),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    all_web_downloads: {
      value: cdktf.stringToHclTerraform(struct!.allWebDownloads),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointSandboxProfilesFileSubmissionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseEndpointSandboxProfilesFileSubmissionOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allEmailDownloads !== undefined) {
      hasAnyValues = true;
      internalValueResult.allEmailDownloads = this._allEmailDownloads;
    }
    if (this._allFilesMappedNetworkDrives !== undefined) {
      hasAnyValues = true;
      internalValueResult.allFilesMappedNetworkDrives = this._allFilesMappedNetworkDrives;
    }
    if (this._allFilesRemovableMedia !== undefined) {
      hasAnyValues = true;
      internalValueResult.allFilesRemovableMedia = this._allFilesRemovableMedia;
    }
    if (this._allWebDownloads !== undefined) {
      hasAnyValues = true;
      internalValueResult.allWebDownloads = this._allWebDownloads;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointSandboxProfilesFileSubmissionOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allEmailDownloads = undefined;
      this._allFilesMappedNetworkDrives = undefined;
      this._allFilesRemovableMedia = undefined;
      this._allWebDownloads = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allEmailDownloads = value.allEmailDownloads;
      this._allFilesMappedNetworkDrives = value.allFilesMappedNetworkDrives;
      this._allFilesRemovableMedia = value.allFilesRemovableMedia;
      this._allWebDownloads = value.allWebDownloads;
    }
  }

  // all_email_downloads - computed: true, optional: true, required: false
  private _allEmailDownloads?: string; 
  public get allEmailDownloads() {
    return this.getStringAttribute('all_email_downloads');
  }
  public set allEmailDownloads(value: string) {
    this._allEmailDownloads = value;
  }
  public resetAllEmailDownloads() {
    this._allEmailDownloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allEmailDownloadsInput() {
    return this._allEmailDownloads;
  }

  // all_files_mapped_network_drives - computed: true, optional: true, required: false
  private _allFilesMappedNetworkDrives?: string; 
  public get allFilesMappedNetworkDrives() {
    return this.getStringAttribute('all_files_mapped_network_drives');
  }
  public set allFilesMappedNetworkDrives(value: string) {
    this._allFilesMappedNetworkDrives = value;
  }
  public resetAllFilesMappedNetworkDrives() {
    this._allFilesMappedNetworkDrives = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allFilesMappedNetworkDrivesInput() {
    return this._allFilesMappedNetworkDrives;
  }

  // all_files_removable_media - computed: true, optional: true, required: false
  private _allFilesRemovableMedia?: string; 
  public get allFilesRemovableMedia() {
    return this.getStringAttribute('all_files_removable_media');
  }
  public set allFilesRemovableMedia(value: string) {
    this._allFilesRemovableMedia = value;
  }
  public resetAllFilesRemovableMedia() {
    this._allFilesRemovableMedia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allFilesRemovableMediaInput() {
    return this._allFilesRemovableMedia;
  }

  // all_web_downloads - computed: true, optional: true, required: false
  private _allWebDownloads?: string; 
  public get allWebDownloads() {
    return this.getStringAttribute('all_web_downloads');
  }
  public set allWebDownloads(value: string) {
    this._allWebDownloads = value;
  }
  public resetAllWebDownloads() {
    this._allWebDownloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allWebDownloadsInput() {
    return this._allWebDownloads;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_sandbox_profiles fortisase_endpoint_sandbox_profiles}
*/
export class DataFortisaseEndpointSandboxProfiles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_endpoint_sandbox_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseEndpointSandboxProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseEndpointSandboxProfiles to import
  * @param importFromId The id of the existing DataFortisaseEndpointSandboxProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_sandbox_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseEndpointSandboxProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_endpoint_sandbox_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_sandbox_profiles fortisase_endpoint_sandbox_profiles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseEndpointSandboxProfilesConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseEndpointSandboxProfilesConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_endpoint_sandbox_profiles',
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
    this._authentication = config.authentication;
    this._detectionVerdictLevel = config.detectionVerdictLevel;
    this._exceptions.internalValue = config.exceptions;
    this._fileSubmissionOptions.internalValue = config.fileSubmissionOptions;
    this._hostName = config.hostName;
    this._notificationType = config.notificationType;
    this._password = config.password;
    this._primaryKey = config.primaryKey;
    this._remediationActions = config.remediationActions;
    this._sandboxMode = config.sandboxMode;
    this._timeoutAwaitingSandboxResults = config.timeoutAwaitingSandboxResults;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication - computed: true, optional: true, required: false
  private _authentication?: boolean | cdktf.IResolvable; 
  public get authentication() {
    return this.getBooleanAttribute('authentication');
  }
  public set authentication(value: boolean | cdktf.IResolvable) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // detection_verdict_level - computed: true, optional: true, required: false
  private _detectionVerdictLevel?: string; 
  public get detectionVerdictLevel() {
    return this.getStringAttribute('detection_verdict_level');
  }
  public set detectionVerdictLevel(value: string) {
    this._detectionVerdictLevel = value;
  }
  public resetDetectionVerdictLevel() {
    this._detectionVerdictLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionVerdictLevelInput() {
    return this._detectionVerdictLevel;
  }

  // exceptions - computed: true, optional: true, required: false
  private _exceptions = new DataFortisaseEndpointSandboxProfilesExceptionsOutputReference(this, "exceptions");
  public get exceptions() {
    return this._exceptions;
  }
  public putExceptions(value: DataFortisaseEndpointSandboxProfilesExceptions) {
    this._exceptions.internalValue = value;
  }
  public resetExceptions() {
    this._exceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionsInput() {
    return this._exceptions.internalValue;
  }

  // file_submission_options - computed: true, optional: true, required: false
  private _fileSubmissionOptions = new DataFortisaseEndpointSandboxProfilesFileSubmissionOptionsOutputReference(this, "file_submission_options");
  public get fileSubmissionOptions() {
    return this._fileSubmissionOptions;
  }
  public putFileSubmissionOptions(value: DataFortisaseEndpointSandboxProfilesFileSubmissionOptions) {
    this._fileSubmissionOptions.internalValue = value;
  }
  public resetFileSubmissionOptions() {
    this._fileSubmissionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSubmissionOptionsInput() {
    return this._fileSubmissionOptions.internalValue;
  }

  // host_name - computed: true, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // notification_type - computed: true, optional: true, required: false
  private _notificationType?: string; 
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }
  public set notificationType(value: string) {
    this._notificationType = value;
  }
  public resetNotificationType() {
    this._notificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTypeInput() {
    return this._notificationType;
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

  // remediation_actions - computed: true, optional: true, required: false
  private _remediationActions?: string; 
  public get remediationActions() {
    return this.getStringAttribute('remediation_actions');
  }
  public set remediationActions(value: string) {
    this._remediationActions = value;
  }
  public resetRemediationActions() {
    this._remediationActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationActionsInput() {
    return this._remediationActions;
  }

  // sandbox_mode - computed: true, optional: true, required: false
  private _sandboxMode?: string; 
  public get sandboxMode() {
    return this.getStringAttribute('sandbox_mode');
  }
  public set sandboxMode(value: string) {
    this._sandboxMode = value;
  }
  public resetSandboxMode() {
    this._sandboxMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxModeInput() {
    return this._sandboxMode;
  }

  // timeout_awaiting_sandbox_results - computed: true, optional: true, required: false
  private _timeoutAwaitingSandboxResults?: number; 
  public get timeoutAwaitingSandboxResults() {
    return this.getNumberAttribute('timeout_awaiting_sandbox_results');
  }
  public set timeoutAwaitingSandboxResults(value: number) {
    this._timeoutAwaitingSandboxResults = value;
  }
  public resetTimeoutAwaitingSandboxResults() {
    this._timeoutAwaitingSandboxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutAwaitingSandboxResultsInput() {
    return this._timeoutAwaitingSandboxResults;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication: cdktf.booleanToTerraform(this._authentication),
      detection_verdict_level: cdktf.stringToTerraform(this._detectionVerdictLevel),
      exceptions: dataFortisaseEndpointSandboxProfilesExceptionsToTerraform(this._exceptions.internalValue),
      file_submission_options: dataFortisaseEndpointSandboxProfilesFileSubmissionOptionsToTerraform(this._fileSubmissionOptions.internalValue),
      host_name: cdktf.stringToTerraform(this._hostName),
      notification_type: cdktf.stringToTerraform(this._notificationType),
      password: cdktf.stringToTerraform(this._password),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      remediation_actions: cdktf.stringToTerraform(this._remediationActions),
      sandbox_mode: cdktf.stringToTerraform(this._sandboxMode),
      timeout_awaiting_sandbox_results: cdktf.numberToTerraform(this._timeoutAwaitingSandboxResults),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication: {
        value: cdktf.booleanToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      detection_verdict_level: {
        value: cdktf.stringToHclTerraform(this._detectionVerdictLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exceptions: {
        value: dataFortisaseEndpointSandboxProfilesExceptionsToHclTerraform(this._exceptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseEndpointSandboxProfilesExceptions",
      },
      file_submission_options: {
        value: dataFortisaseEndpointSandboxProfilesFileSubmissionOptionsToHclTerraform(this._fileSubmissionOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseEndpointSandboxProfilesFileSubmissionOptions",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_type: {
        value: cdktf.stringToHclTerraform(this._notificationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
      remediation_actions: {
        value: cdktf.stringToHclTerraform(this._remediationActions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sandbox_mode: {
        value: cdktf.stringToHclTerraform(this._sandboxMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout_awaiting_sandbox_results: {
        value: cdktf.numberToHclTerraform(this._timeoutAwaitingSandboxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
