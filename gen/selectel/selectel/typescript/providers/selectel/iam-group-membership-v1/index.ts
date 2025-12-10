// https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/iam_group_membership_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamGroupMembershipV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/iam_group_membership_v1#group_id IamGroupMembershipV1#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/iam_group_membership_v1#id IamGroupMembershipV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/iam_group_membership_v1#user_ids IamGroupMembershipV1#user_ids}
  */
  readonly userIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/iam_group_membership_v1 selectel_iam_group_membership_v1}
*/
export class IamGroupMembershipV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "selectel_iam_group_membership_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamGroupMembershipV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamGroupMembershipV1 to import
  * @param importFromId The id of the existing IamGroupMembershipV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/iam_group_membership_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamGroupMembershipV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "selectel_iam_group_membership_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/iam_group_membership_v1 selectel_iam_group_membership_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamGroupMembershipV1Config
  */
  public constructor(scope: Construct, id: string, config: IamGroupMembershipV1Config) {
    super(scope, id, {
      terraformResourceType: 'selectel_iam_group_membership_v1',
      terraformGeneratorMetadata: {
        providerName: 'selectel',
        providerVersion: '7.2.1',
        providerVersionConstraint: '7.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._id = config.id;
    this._userIds = config.userIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // user_ids - computed: false, optional: false, required: true
  private _userIds?: string[]; 
  public get userIds() {
    return this.getListAttribute('user_ids');
  }
  public set userIds(value: string[]) {
    this._userIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdsInput() {
    return this._userIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      user_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
