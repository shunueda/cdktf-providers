// https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/group_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * The slug of the Doppler group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/group_member#group_slug GroupMember#group_slug}
  */
  readonly groupSlug: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/group_member#id GroupMember#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The slug of the Doppler workplace user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/group_member#user_slug GroupMember#user_slug}
  */
  readonly userSlug: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/group_member doppler_group_member}
*/
export class GroupMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doppler_group_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupMember to import
  * @param importFromId The id of the existing GroupMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/group_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doppler_group_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/group_member doppler_group_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupMemberConfig
  */
  public constructor(scope: Construct, id: string, config: GroupMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'doppler_group_member',
      terraformGeneratorMetadata: {
        providerName: 'doppler',
        providerVersion: '1.21.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupSlug = config.groupSlug;
    this._id = config.id;
    this._userSlug = config.userSlug;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_slug - computed: false, optional: false, required: true
  private _groupSlug?: string; 
  public get groupSlug() {
    return this.getStringAttribute('group_slug');
  }
  public set groupSlug(value: string) {
    this._groupSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSlugInput() {
    return this._groupSlug;
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

  // user_slug - computed: false, optional: false, required: true
  private _userSlug?: string; 
  public get userSlug() {
    return this.getStringAttribute('user_slug');
  }
  public set userSlug(value: string) {
    this._userSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userSlugInput() {
    return this._userSlug;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_slug: cdktf.stringToTerraform(this._groupSlug),
      id: cdktf.stringToTerraform(this._id),
      user_slug: cdktf.stringToTerraform(this._userSlug),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_slug: {
        value: cdktf.stringToHclTerraform(this._groupSlug),
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
      user_slug: {
        value: cdktf.stringToHclTerraform(this._userSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
