// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/rbac_group_access_account_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RbacGroupAccessAccountAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access account name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/rbac_group_access_account_attachment#access_account_name RbacGroupAccessAccountAttachment#access_account_name}
  */
  readonly accessAccountName: string;
  /**
  * RBAC permission group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/rbac_group_access_account_attachment#group_name RbacGroupAccessAccountAttachment#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/rbac_group_access_account_attachment#id RbacGroupAccessAccountAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/rbac_group_access_account_attachment aviatrix_rbac_group_access_account_attachment}
*/
export class RbacGroupAccessAccountAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_rbac_group_access_account_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RbacGroupAccessAccountAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RbacGroupAccessAccountAttachment to import
  * @param importFromId The id of the existing RbacGroupAccessAccountAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/rbac_group_access_account_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RbacGroupAccessAccountAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_rbac_group_access_account_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/rbac_group_access_account_attachment aviatrix_rbac_group_access_account_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RbacGroupAccessAccountAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: RbacGroupAccessAccountAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_rbac_group_access_account_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10',
        providerVersionConstraint: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessAccountName = config.accessAccountName;
    this._groupName = config.groupName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_account_name - computed: false, optional: false, required: true
  private _accessAccountName?: string; 
  public get accessAccountName() {
    return this.getStringAttribute('access_account_name');
  }
  public set accessAccountName(value: string) {
    this._accessAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAccountNameInput() {
    return this._accessAccountName;
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_account_name: cdktf.stringToTerraform(this._accessAccountName),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_account_name: {
        value: cdktf.stringToHclTerraform(this._accessAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
