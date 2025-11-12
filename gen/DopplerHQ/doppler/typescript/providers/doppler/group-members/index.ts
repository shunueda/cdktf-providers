// https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/group_members
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupMembersConfig extends cdktf.TerraformMetaArguments {
  /**
  * The slug of the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/group_members#group_slug GroupMembers#group_slug}
  */
  readonly groupSlug: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/group_members#id GroupMembers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of user slugs in the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/group_members#user_slugs GroupMembers#user_slugs}
  */
  readonly userSlugs: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/group_members doppler_group_members}
*/
export class GroupMembers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doppler_group_members";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupMembers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupMembers to import
  * @param importFromId The id of the existing GroupMembers that should be imported. Refer to the {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/group_members#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupMembers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doppler_group_members", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/group_members doppler_group_members} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupMembersConfig
  */
  public constructor(scope: Construct, id: string, config: GroupMembersConfig) {
    super(scope, id, {
      terraformResourceType: 'doppler_group_members',
      terraformGeneratorMetadata: {
        providerName: 'doppler',
        providerVersion: '1.21.0',
        providerVersionConstraint: '1.21.0'
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
    this._userSlugs = config.userSlugs;
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

  // user_slugs - computed: false, optional: false, required: true
  private _userSlugs?: string[]; 
  public get userSlugs() {
    return cdktf.Fn.tolist(this.getListAttribute('user_slugs'));
  }
  public set userSlugs(value: string[]) {
    this._userSlugs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userSlugsInput() {
    return this._userSlugs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_slug: cdktf.stringToTerraform(this._groupSlug),
      id: cdktf.stringToTerraform(this._id),
      user_slugs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userSlugs),
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
      user_slugs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userSlugs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
