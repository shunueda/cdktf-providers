// https://registry.terraform.io/providers/files-com/files/0.1.411/docs/data-sources/bundle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesBundleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bundle ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.411/docs/data-sources/bundle#id DataFilesBundle#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.411/docs/data-sources/bundle files_bundle}
*/
export class DataFilesBundle extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_bundle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesBundle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesBundle to import
  * @param importFromId The id of the existing DataFilesBundle that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.411/docs/data-sources/bundle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesBundle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_bundle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.411/docs/data-sources/bundle files_bundle} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesBundleConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesBundleConfig) {
    super(scope, id, {
      terraformResourceType: 'files_bundle',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.411',
        providerVersionConstraint: '0.1.411'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
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

  // clickwrap_id - computed: true, optional: false, required: false
  public get clickwrapId() {
    return this.getNumberAttribute('clickwrap_id');
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dont_allow_folders_in_uploads - computed: true, optional: false, required: false
  public get dontAllowFoldersInUploads() {
    return this.getBooleanAttribute('dont_allow_folders_in_uploads');
  }

  // dont_separate_submissions_by_folder - computed: true, optional: false, required: false
  public get dontSeparateSubmissionsByFolder() {
    return this.getBooleanAttribute('dont_separate_submissions_by_folder');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // form_field_set - computed: true, optional: false, required: false
  public get formFieldSet() {
    return this.getStringAttribute('form_field_set');
  }

  // has_inbox - computed: true, optional: false, required: false
  public get hasInbox() {
    return this.getBooleanAttribute('has_inbox');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inbox_id - computed: true, optional: false, required: false
  public get inboxId() {
    return this.getNumberAttribute('inbox_id');
  }

  // max_uses - computed: true, optional: false, required: false
  public get maxUses() {
    return this.getNumberAttribute('max_uses');
  }

  // note - computed: true, optional: false, required: false
  public get note() {
    return this.getStringAttribute('note');
  }

  // password_protected - computed: true, optional: false, required: false
  public get passwordProtected() {
    return this.getBooleanAttribute('password_protected');
  }

  // path_template - computed: true, optional: false, required: false
  public get pathTemplate() {
    return this.getStringAttribute('path_template');
  }

  // path_template_time_zone - computed: true, optional: false, required: false
  public get pathTemplateTimeZone() {
    return this.getStringAttribute('path_template_time_zone');
  }

  // paths - computed: true, optional: false, required: false
  public get paths() {
    return this.getListAttribute('paths');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getStringAttribute('permissions');
  }

  // preview_only - computed: true, optional: false, required: false
  public get previewOnly() {
    return this.getBooleanAttribute('preview_only');
  }

  // require_logout - computed: true, optional: false, required: false
  public get requireLogout() {
    return this.getBooleanAttribute('require_logout');
  }

  // require_registration - computed: true, optional: false, required: false
  public get requireRegistration() {
    return this.getBooleanAttribute('require_registration');
  }

  // require_share_recipient - computed: true, optional: false, required: false
  public get requireShareRecipient() {
    return this.getBooleanAttribute('require_share_recipient');
  }

  // send_email_receipt_to_uploader - computed: true, optional: false, required: false
  public get sendEmailReceiptToUploader() {
    return this.getBooleanAttribute('send_email_receipt_to_uploader');
  }

  // skip_company - computed: true, optional: false, required: false
  public get skipCompany() {
    return this.getBooleanAttribute('skip_company');
  }

  // skip_email - computed: true, optional: false, required: false
  public get skipEmail() {
    return this.getBooleanAttribute('skip_email');
  }

  // skip_name - computed: true, optional: false, required: false
  public get skipName() {
    return this.getBooleanAttribute('skip_name');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getNumberAttribute('snapshot_id');
  }

  // start_access_on_date - computed: true, optional: false, required: false
  public get startAccessOnDate() {
    return this.getStringAttribute('start_access_on_date');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getNumberAttribute('user_id');
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
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
