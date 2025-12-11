// https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BundleConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the clickwrap to use with this bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle#clickwrap_id Bundle#clickwrap_id}
  */
  readonly clickwrapId?: number;
  /**
  * Bundle code.  This code forms the end part of the Public URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle#code Bundle#code}
  */
  readonly code?: string;
  /**
  * If true, create a snapshot of this bundle's contents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle#create_snapshot Bundle#create_snapshot}
  */
  readonly createSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Public description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle#description Bundle#description}
  */
  readonly description?: string;
  /**
  * Do not create subfolders for files uploaded to this share. Note: there are subtle security pitfalls with allowing anonymous uploads from multiple users to live in the same folder. We strongly discourage use of this option unless absolutely required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle#dont_separate_submissions_by_folder Bundle#dont_separate_submissions_by_folder}
  */
  readonly dontSeparateSubmissionsByFolder?: boolean | cdktf.IResolvable;
  /**
  * Bundle expiration date/time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle#expires_at Bundle#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * If true, finalize the snapshot of this bundle's contents. Note that `create_snapshot` must also be true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle#finalize_snapshot Bundle#finalize_snapshot}
  */
  readonly finalizeSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Id of Form Field Set to use with this bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle#form_field_set_id Bundle#form_field_set_id}
  */
  readonly formFieldSetId?: number;
  /**
  * ID of the associated inbox, if available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle#inbox_id Bundle#inbox_id}
  */
  readonly inboxId?: number;
  /**
  * Maximum number of times bundle can be accessed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle#max_uses Bundle#max_uses}
  */
  readonly maxUses?: number;
  /**
  * Bundle internal note
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle#note Bundle#note}
  */
  readonly note?: string;
  /**
  * Password for this bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle#password Bundle#password}
  */
  readonly password?: string;
  /**
  * Template for creating submission subfolders. Can use the uploader's name, email address, ip, company, `strftime` directives, and any custom form data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle#path_template Bundle#path_template}
  */
  readonly pathTemplate?: string;
  /**
  * Timezone to use when rendering timestamps in path templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle#path_template_time_zone Bundle#path_template_time_zone}
  */
  readonly pathTemplateTimeZone?: string;
  /**
  * A list of paths in this bundle.  For performance reasons, this is not provided when listing bundles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle#paths Bundle#paths}
  */
  readonly paths: string[];
  /**
  * Permissions that apply to Folders in this Share Link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle#permissions Bundle#permissions}
  */
  readonly permissions?: string;
  /**
  * Show a registration page that captures the downloader's name and email address?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle#require_registration Bundle#require_registration}
  */
  readonly requireRegistration?: boolean | cdktf.IResolvable;
  /**
  * Only allow access to recipients who have explicitly received the share via an email sent through the Files.com UI?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle#require_share_recipient Bundle#require_share_recipient}
  */
  readonly requireShareRecipient?: boolean | cdktf.IResolvable;
  /**
  * Send delivery receipt to the uploader. Note: For writable share only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle#send_email_receipt_to_uploader Bundle#send_email_receipt_to_uploader}
  */
  readonly sendEmailReceiptToUploader?: boolean | cdktf.IResolvable;
  /**
  * BundleRegistrations can be saved without providing company?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle#skip_company Bundle#skip_company}
  */
  readonly skipCompany?: boolean | cdktf.IResolvable;
  /**
  * BundleRegistrations can be saved without providing email?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle#skip_email Bundle#skip_email}
  */
  readonly skipEmail?: boolean | cdktf.IResolvable;
  /**
  * BundleRegistrations can be saved without providing name?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle#skip_name Bundle#skip_name}
  */
  readonly skipName?: boolean | cdktf.IResolvable;
  /**
  * ID of the snapshot containing this bundle's contents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle#snapshot_id Bundle#snapshot_id}
  */
  readonly snapshotId?: number;
  /**
  * Date when share will start to be accessible. If `nil` access granted right after create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle#start_access_on_date Bundle#start_access_on_date}
  */
  readonly startAccessOnDate?: string;
  /**
  * Bundle creator user ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle#user_id Bundle#user_id}
  */
  readonly userId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle files_bundle}
*/
export class Bundle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_bundle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Bundle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Bundle to import
  * @param importFromId The id of the existing Bundle that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Bundle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_bundle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/bundle files_bundle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BundleConfig
  */
  public constructor(scope: Construct, id: string, config: BundleConfig) {
    super(scope, id, {
      terraformResourceType: 'files_bundle',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.409',
        providerVersionConstraint: '0.1.409'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clickwrapId = config.clickwrapId;
    this._code = config.code;
    this._createSnapshot = config.createSnapshot;
    this._description = config.description;
    this._dontSeparateSubmissionsByFolder = config.dontSeparateSubmissionsByFolder;
    this._expiresAt = config.expiresAt;
    this._finalizeSnapshot = config.finalizeSnapshot;
    this._formFieldSetId = config.formFieldSetId;
    this._inboxId = config.inboxId;
    this._maxUses = config.maxUses;
    this._note = config.note;
    this._password = config.password;
    this._pathTemplate = config.pathTemplate;
    this._pathTemplateTimeZone = config.pathTemplateTimeZone;
    this._paths = config.paths;
    this._permissions = config.permissions;
    this._requireRegistration = config.requireRegistration;
    this._requireShareRecipient = config.requireShareRecipient;
    this._sendEmailReceiptToUploader = config.sendEmailReceiptToUploader;
    this._skipCompany = config.skipCompany;
    this._skipEmail = config.skipEmail;
    this._skipName = config.skipName;
    this._snapshotId = config.snapshotId;
    this._startAccessOnDate = config.startAccessOnDate;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bundlepaths - computed: true, optional: false, required: false
  private _bundlepaths = new cdktf.AnyMap(this, "bundlepaths");
  public get bundlepaths() {
    return this._bundlepaths;
  }

  // clickwrap_body - computed: true, optional: false, required: false
  public get clickwrapBody() {
    return this.getStringAttribute('clickwrap_body');
  }

  // clickwrap_id - computed: true, optional: true, required: false
  private _clickwrapId?: number; 
  public get clickwrapId() {
    return this.getNumberAttribute('clickwrap_id');
  }
  public set clickwrapId(value: number) {
    this._clickwrapId = value;
  }
  public resetClickwrapId() {
    this._clickwrapId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickwrapIdInput() {
    return this._clickwrapId;
  }

  // code - computed: true, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // color_left - computed: true, optional: false, required: false
  public get colorLeft() {
    return this.getStringAttribute('color_left');
  }

  // color_link - computed: true, optional: false, required: false
  public get colorLink() {
    return this.getStringAttribute('color_link');
  }

  // color_text - computed: true, optional: false, required: false
  public get colorText() {
    return this.getStringAttribute('color_text');
  }

  // color_top - computed: true, optional: false, required: false
  public get colorTop() {
    return this.getStringAttribute('color_top');
  }

  // color_top_text - computed: true, optional: false, required: false
  public get colorTopText() {
    return this.getStringAttribute('color_top_text');
  }

  // create_snapshot - computed: false, optional: true, required: false
  private _createSnapshot?: boolean | cdktf.IResolvable; 
  public get createSnapshot() {
    return this.getBooleanAttribute('create_snapshot');
  }
  public set createSnapshot(value: boolean | cdktf.IResolvable) {
    this._createSnapshot = value;
  }
  public resetCreateSnapshot() {
    this._createSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createSnapshotInput() {
    return this._createSnapshot;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
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

  // dont_allow_folders_in_uploads - computed: true, optional: false, required: false
  public get dontAllowFoldersInUploads() {
    return this.getBooleanAttribute('dont_allow_folders_in_uploads');
  }

  // dont_separate_submissions_by_folder - computed: true, optional: true, required: false
  private _dontSeparateSubmissionsByFolder?: boolean | cdktf.IResolvable; 
  public get dontSeparateSubmissionsByFolder() {
    return this.getBooleanAttribute('dont_separate_submissions_by_folder');
  }
  public set dontSeparateSubmissionsByFolder(value: boolean | cdktf.IResolvable) {
    this._dontSeparateSubmissionsByFolder = value;
  }
  public resetDontSeparateSubmissionsByFolder() {
    this._dontSeparateSubmissionsByFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dontSeparateSubmissionsByFolderInput() {
    return this._dontSeparateSubmissionsByFolder;
  }

  // expires_at - computed: true, optional: true, required: false
  private _expiresAt?: string; 
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
  public set expiresAt(value: string) {
    this._expiresAt = value;
  }
  public resetExpiresAt() {
    this._expiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
  }

  // finalize_snapshot - computed: false, optional: true, required: false
  private _finalizeSnapshot?: boolean | cdktf.IResolvable; 
  public get finalizeSnapshot() {
    return this.getBooleanAttribute('finalize_snapshot');
  }
  public set finalizeSnapshot(value: boolean | cdktf.IResolvable) {
    this._finalizeSnapshot = value;
  }
  public resetFinalizeSnapshot() {
    this._finalizeSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizeSnapshotInput() {
    return this._finalizeSnapshot;
  }

  // form_field_set - computed: true, optional: false, required: false
  public get formFieldSet() {
    return this.getStringAttribute('form_field_set');
  }

  // form_field_set_id - computed: false, optional: true, required: false
  private _formFieldSetId?: number; 
  public get formFieldSetId() {
    return this.getNumberAttribute('form_field_set_id');
  }
  public set formFieldSetId(value: number) {
    this._formFieldSetId = value;
  }
  public resetFormFieldSetId() {
    this._formFieldSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formFieldSetIdInput() {
    return this._formFieldSetId;
  }

  // has_inbox - computed: true, optional: false, required: false
  public get hasInbox() {
    return this.getBooleanAttribute('has_inbox');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // inbox_id - computed: true, optional: true, required: false
  private _inboxId?: number; 
  public get inboxId() {
    return this.getNumberAttribute('inbox_id');
  }
  public set inboxId(value: number) {
    this._inboxId = value;
  }
  public resetInboxId() {
    this._inboxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboxIdInput() {
    return this._inboxId;
  }

  // max_uses - computed: true, optional: true, required: false
  private _maxUses?: number; 
  public get maxUses() {
    return this.getNumberAttribute('max_uses');
  }
  public set maxUses(value: number) {
    this._maxUses = value;
  }
  public resetMaxUses() {
    this._maxUses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUsesInput() {
    return this._maxUses;
  }

  // note - computed: true, optional: true, required: false
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  public resetNote() {
    this._note = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
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

  // password_protected - computed: true, optional: false, required: false
  public get passwordProtected() {
    return this.getBooleanAttribute('password_protected');
  }

  // path_template - computed: true, optional: true, required: false
  private _pathTemplate?: string; 
  public get pathTemplate() {
    return this.getStringAttribute('path_template');
  }
  public set pathTemplate(value: string) {
    this._pathTemplate = value;
  }
  public resetPathTemplate() {
    this._pathTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathTemplateInput() {
    return this._pathTemplate;
  }

  // path_template_time_zone - computed: true, optional: true, required: false
  private _pathTemplateTimeZone?: string; 
  public get pathTemplateTimeZone() {
    return this.getStringAttribute('path_template_time_zone');
  }
  public set pathTemplateTimeZone(value: string) {
    this._pathTemplateTimeZone = value;
  }
  public resetPathTemplateTimeZone() {
    this._pathTemplateTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathTemplateTimeZoneInput() {
    return this._pathTemplateTimeZone;
  }

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // permissions - computed: true, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // preview_only - computed: true, optional: false, required: false
  public get previewOnly() {
    return this.getBooleanAttribute('preview_only');
  }

  // require_logout - computed: true, optional: false, required: false
  public get requireLogout() {
    return this.getBooleanAttribute('require_logout');
  }

  // require_registration - computed: true, optional: true, required: false
  private _requireRegistration?: boolean | cdktf.IResolvable; 
  public get requireRegistration() {
    return this.getBooleanAttribute('require_registration');
  }
  public set requireRegistration(value: boolean | cdktf.IResolvable) {
    this._requireRegistration = value;
  }
  public resetRequireRegistration() {
    this._requireRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireRegistrationInput() {
    return this._requireRegistration;
  }

  // require_share_recipient - computed: true, optional: true, required: false
  private _requireShareRecipient?: boolean | cdktf.IResolvable; 
  public get requireShareRecipient() {
    return this.getBooleanAttribute('require_share_recipient');
  }
  public set requireShareRecipient(value: boolean | cdktf.IResolvable) {
    this._requireShareRecipient = value;
  }
  public resetRequireShareRecipient() {
    this._requireShareRecipient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireShareRecipientInput() {
    return this._requireShareRecipient;
  }

  // send_email_receipt_to_uploader - computed: true, optional: true, required: false
  private _sendEmailReceiptToUploader?: boolean | cdktf.IResolvable; 
  public get sendEmailReceiptToUploader() {
    return this.getBooleanAttribute('send_email_receipt_to_uploader');
  }
  public set sendEmailReceiptToUploader(value: boolean | cdktf.IResolvable) {
    this._sendEmailReceiptToUploader = value;
  }
  public resetSendEmailReceiptToUploader() {
    this._sendEmailReceiptToUploader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendEmailReceiptToUploaderInput() {
    return this._sendEmailReceiptToUploader;
  }

  // skip_company - computed: true, optional: true, required: false
  private _skipCompany?: boolean | cdktf.IResolvable; 
  public get skipCompany() {
    return this.getBooleanAttribute('skip_company');
  }
  public set skipCompany(value: boolean | cdktf.IResolvable) {
    this._skipCompany = value;
  }
  public resetSkipCompany() {
    this._skipCompany = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCompanyInput() {
    return this._skipCompany;
  }

  // skip_email - computed: true, optional: true, required: false
  private _skipEmail?: boolean | cdktf.IResolvable; 
  public get skipEmail() {
    return this.getBooleanAttribute('skip_email');
  }
  public set skipEmail(value: boolean | cdktf.IResolvable) {
    this._skipEmail = value;
  }
  public resetSkipEmail() {
    this._skipEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipEmailInput() {
    return this._skipEmail;
  }

  // skip_name - computed: true, optional: true, required: false
  private _skipName?: boolean | cdktf.IResolvable; 
  public get skipName() {
    return this.getBooleanAttribute('skip_name');
  }
  public set skipName(value: boolean | cdktf.IResolvable) {
    this._skipName = value;
  }
  public resetSkipName() {
    this._skipName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipNameInput() {
    return this._skipName;
  }

  // snapshot_id - computed: true, optional: true, required: false
  private _snapshotId?: number; 
  public get snapshotId() {
    return this.getNumberAttribute('snapshot_id');
  }
  public set snapshotId(value: number) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // start_access_on_date - computed: true, optional: true, required: false
  private _startAccessOnDate?: string; 
  public get startAccessOnDate() {
    return this.getStringAttribute('start_access_on_date');
  }
  public set startAccessOnDate(value: string) {
    this._startAccessOnDate = value;
  }
  public resetStartAccessOnDate() {
    this._startAccessOnDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startAccessOnDateInput() {
    return this._startAccessOnDate;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // watermark_attachment - computed: true, optional: false, required: false
  public get watermarkAttachment() {
    return this.getStringAttribute('watermark_attachment');
  }

  // watermark_value - computed: true, optional: false, required: false
  private _watermarkValue = new cdktf.AnyMap(this, "watermark_value");
  public get watermarkValue() {
    return this._watermarkValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clickwrap_id: cdktf.numberToTerraform(this._clickwrapId),
      code: cdktf.stringToTerraform(this._code),
      create_snapshot: cdktf.booleanToTerraform(this._createSnapshot),
      description: cdktf.stringToTerraform(this._description),
      dont_separate_submissions_by_folder: cdktf.booleanToTerraform(this._dontSeparateSubmissionsByFolder),
      expires_at: cdktf.stringToTerraform(this._expiresAt),
      finalize_snapshot: cdktf.booleanToTerraform(this._finalizeSnapshot),
      form_field_set_id: cdktf.numberToTerraform(this._formFieldSetId),
      inbox_id: cdktf.numberToTerraform(this._inboxId),
      max_uses: cdktf.numberToTerraform(this._maxUses),
      note: cdktf.stringToTerraform(this._note),
      password: cdktf.stringToTerraform(this._password),
      path_template: cdktf.stringToTerraform(this._pathTemplate),
      path_template_time_zone: cdktf.stringToTerraform(this._pathTemplateTimeZone),
      paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._paths),
      permissions: cdktf.stringToTerraform(this._permissions),
      require_registration: cdktf.booleanToTerraform(this._requireRegistration),
      require_share_recipient: cdktf.booleanToTerraform(this._requireShareRecipient),
      send_email_receipt_to_uploader: cdktf.booleanToTerraform(this._sendEmailReceiptToUploader),
      skip_company: cdktf.booleanToTerraform(this._skipCompany),
      skip_email: cdktf.booleanToTerraform(this._skipEmail),
      skip_name: cdktf.booleanToTerraform(this._skipName),
      snapshot_id: cdktf.numberToTerraform(this._snapshotId),
      start_access_on_date: cdktf.stringToTerraform(this._startAccessOnDate),
      user_id: cdktf.numberToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clickwrap_id: {
        value: cdktf.numberToHclTerraform(this._clickwrapId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      code: {
        value: cdktf.stringToHclTerraform(this._code),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_snapshot: {
        value: cdktf.booleanToHclTerraform(this._createSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dont_separate_submissions_by_folder: {
        value: cdktf.booleanToHclTerraform(this._dontSeparateSubmissionsByFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expires_at: {
        value: cdktf.stringToHclTerraform(this._expiresAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      finalize_snapshot: {
        value: cdktf.booleanToHclTerraform(this._finalizeSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      form_field_set_id: {
        value: cdktf.numberToHclTerraform(this._formFieldSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inbox_id: {
        value: cdktf.numberToHclTerraform(this._inboxId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_uses: {
        value: cdktf.numberToHclTerraform(this._maxUses),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      note: {
        value: cdktf.stringToHclTerraform(this._note),
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
      path_template: {
        value: cdktf.stringToHclTerraform(this._pathTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_template_time_zone: {
        value: cdktf.stringToHclTerraform(this._pathTemplateTimeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._paths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      permissions: {
        value: cdktf.stringToHclTerraform(this._permissions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_registration: {
        value: cdktf.booleanToHclTerraform(this._requireRegistration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_share_recipient: {
        value: cdktf.booleanToHclTerraform(this._requireShareRecipient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_email_receipt_to_uploader: {
        value: cdktf.booleanToHclTerraform(this._sendEmailReceiptToUploader),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_company: {
        value: cdktf.booleanToHclTerraform(this._skipCompany),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_email: {
        value: cdktf.booleanToHclTerraform(this._skipEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_name: {
        value: cdktf.booleanToHclTerraform(this._skipName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snapshot_id: {
        value: cdktf.numberToHclTerraform(this._snapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start_access_on_date: {
        value: cdktf.stringToHclTerraform(this._startAccessOnDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.numberToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
