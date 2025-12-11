// https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/organization_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAivenOrganizationUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/organization_user#id DataAivenOrganizationUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The unique organization ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/organization_user#organization_id DataAivenOrganizationUser#organization_id}
  */
  readonly organizationId: string;
  /**
  * This is a user email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/organization_user#user_email DataAivenOrganizationUser#user_email}
  */
  readonly userEmail?: string;
  /**
  * The unique organization user ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/organization_user#user_id DataAivenOrganizationUser#user_id}
  */
  readonly userId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/organization_user aiven_organization_user}
*/
export class DataAivenOrganizationUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_organization_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAivenOrganizationUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAivenOrganizationUser to import
  * @param importFromId The id of the existing DataAivenOrganizationUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/organization_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAivenOrganizationUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_organization_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/organization_user aiven_organization_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAivenOrganizationUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataAivenOrganizationUserConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_organization_user',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.48.0',
        providerVersionConstraint: '4.48.0'
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
    this._organizationId = config.organizationId;
    this._userEmail = config.userEmail;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // user_email - computed: false, optional: true, required: false
  private _userEmail?: string; 
  public get userEmail() {
    return this.getStringAttribute('user_email');
  }
  public set userEmail(value: string) {
    this._userEmail = value;
  }
  public resetUserEmail() {
    this._userEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEmailInput() {
    return this._userEmail;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
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
      id: cdktf.stringToTerraform(this._id),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      user_email: cdktf.stringToTerraform(this._userEmail),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_email: {
        value: cdktf.stringToHclTerraform(this._userEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
