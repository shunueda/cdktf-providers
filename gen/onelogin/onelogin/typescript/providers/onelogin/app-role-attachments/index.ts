// https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/app_role_attachments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppRoleAttachmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/app_role_attachments#app_id AppRoleAttachments#app_id}
  */
  readonly appId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/app_role_attachments#id AppRoleAttachments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/app_role_attachments#role_id AppRoleAttachments#role_id}
  */
  readonly roleId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/app_role_attachments onelogin_app_role_attachments}
*/
export class AppRoleAttachments extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "onelogin_app_role_attachments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppRoleAttachments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppRoleAttachments to import
  * @param importFromId The id of the existing AppRoleAttachments that should be imported. Refer to the {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/app_role_attachments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppRoleAttachments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "onelogin_app_role_attachments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/app_role_attachments onelogin_app_role_attachments} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppRoleAttachmentsConfig
  */
  public constructor(scope: Construct, id: string, config: AppRoleAttachmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'onelogin_app_role_attachments',
      terraformGeneratorMetadata: {
        providerName: 'onelogin',
        providerVersion: '0.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appId = config.appId;
    this._id = config.id;
    this._roleId = config.roleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId?: number; 
  public get appId() {
    return this.getNumberAttribute('app_id');
  }
  public set appId(value: number) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
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

  // role_id - computed: false, optional: false, required: true
  private _roleId?: number; 
  public get roleId() {
    return this.getNumberAttribute('role_id');
  }
  public set roleId(value: number) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.numberToTerraform(this._appId),
      id: cdktf.stringToTerraform(this._id),
      role_id: cdktf.numberToTerraform(this._roleId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.numberToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_id: {
        value: cdktf.numberToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
