// https://registry.terraform.io/providers/files-com/files/0.1.398/docs/resources/bundle_notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BundleNotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bundle ID to notify on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.398/docs/resources/bundle_notification#bundle_id BundleNotification#bundle_id}
  */
  readonly bundleId: number;
  /**
  * Triggers bundle notification when a registration action occurs for it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.398/docs/resources/bundle_notification#notify_on_registration BundleNotification#notify_on_registration}
  */
  readonly notifyOnRegistration?: boolean | cdktf.IResolvable;
  /**
  * Triggers bundle notification when a upload action occurs for it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.398/docs/resources/bundle_notification#notify_on_upload BundleNotification#notify_on_upload}
  */
  readonly notifyOnUpload?: boolean | cdktf.IResolvable;
  /**
  * The id of the user to notify.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.398/docs/resources/bundle_notification#notify_user_id BundleNotification#notify_user_id}
  */
  readonly notifyUserId?: number;
  /**
  * User ID.  Provide a value of `0` to operate the current session's user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.398/docs/resources/bundle_notification#user_id BundleNotification#user_id}
  */
  readonly userId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.398/docs/resources/bundle_notification files_bundle_notification}
*/
export class BundleNotification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_bundle_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BundleNotification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BundleNotification to import
  * @param importFromId The id of the existing BundleNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.398/docs/resources/bundle_notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BundleNotification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_bundle_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.398/docs/resources/bundle_notification files_bundle_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BundleNotificationConfig
  */
  public constructor(scope: Construct, id: string, config: BundleNotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'files_bundle_notification',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.398',
        providerVersionConstraint: '0.1.398'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bundleId = config.bundleId;
    this._notifyOnRegistration = config.notifyOnRegistration;
    this._notifyOnUpload = config.notifyOnUpload;
    this._notifyUserId = config.notifyUserId;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bundle_id - computed: false, optional: false, required: true
  private _bundleId?: number; 
  public get bundleId() {
    return this.getNumberAttribute('bundle_id');
  }
  public set bundleId(value: number) {
    this._bundleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // notify_on_registration - computed: true, optional: true, required: false
  private _notifyOnRegistration?: boolean | cdktf.IResolvable; 
  public get notifyOnRegistration() {
    return this.getBooleanAttribute('notify_on_registration');
  }
  public set notifyOnRegistration(value: boolean | cdktf.IResolvable) {
    this._notifyOnRegistration = value;
  }
  public resetNotifyOnRegistration() {
    this._notifyOnRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnRegistrationInput() {
    return this._notifyOnRegistration;
  }

  // notify_on_upload - computed: true, optional: true, required: false
  private _notifyOnUpload?: boolean | cdktf.IResolvable; 
  public get notifyOnUpload() {
    return this.getBooleanAttribute('notify_on_upload');
  }
  public set notifyOnUpload(value: boolean | cdktf.IResolvable) {
    this._notifyOnUpload = value;
  }
  public resetNotifyOnUpload() {
    this._notifyOnUpload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnUploadInput() {
    return this._notifyOnUpload;
  }

  // notify_user_id - computed: true, optional: true, required: false
  private _notifyUserId?: number; 
  public get notifyUserId() {
    return this.getNumberAttribute('notify_user_id');
  }
  public set notifyUserId(value: number) {
    this._notifyUserId = value;
  }
  public resetNotifyUserId() {
    this._notifyUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyUserIdInput() {
    return this._notifyUserId;
  }

  // user_id - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bundle_id: cdktf.numberToTerraform(this._bundleId),
      notify_on_registration: cdktf.booleanToTerraform(this._notifyOnRegistration),
      notify_on_upload: cdktf.booleanToTerraform(this._notifyOnUpload),
      notify_user_id: cdktf.numberToTerraform(this._notifyUserId),
      user_id: cdktf.numberToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bundle_id: {
        value: cdktf.numberToHclTerraform(this._bundleId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notify_on_registration: {
        value: cdktf.booleanToHclTerraform(this._notifyOnRegistration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notify_on_upload: {
        value: cdktf.booleanToHclTerraform(this._notifyOnUpload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notify_user_id: {
        value: cdktf.numberToHclTerraform(this._notifyUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
