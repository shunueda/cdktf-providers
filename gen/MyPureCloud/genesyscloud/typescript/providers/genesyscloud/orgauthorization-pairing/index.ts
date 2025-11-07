// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/orgauthorization_pairing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgauthorizationPairingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of trustee groups that are requesting access. If no groups are specified, at least one user is required. Changing the group_ids attribute will cause the orgauthorization_pairing resource to be dropped and recreated with a new ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/orgauthorization_pairing#group_ids OrgauthorizationPairing#group_ids}
  */
  readonly groupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/orgauthorization_pairing#id OrgauthorizationPairing#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The list of trustee users that are requesting access. If no users are specified, at least one group is required.  Changing the user_ids attribute will cause the orgauthorization_pairing resource to be dropped and recreated with a new ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/orgauthorization_pairing#user_ids OrgauthorizationPairing#user_ids}
  */
  readonly userIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/orgauthorization_pairing genesyscloud_orgauthorization_pairing}
*/
export class OrgauthorizationPairing extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_orgauthorization_pairing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgauthorizationPairing resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgauthorizationPairing to import
  * @param importFromId The id of the existing OrgauthorizationPairing that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/orgauthorization_pairing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgauthorizationPairing to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_orgauthorization_pairing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/orgauthorization_pairing genesyscloud_orgauthorization_pairing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgauthorizationPairingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OrgauthorizationPairingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_orgauthorization_pairing',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupIds = config.groupIds;
    this._id = config.id;
    this._userIds = config.userIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_ids - computed: false, optional: true, required: false
  private _groupIds?: string[]; 
  public get groupIds() {
    return this.getListAttribute('group_ids');
  }
  public set groupIds(value: string[]) {
    this._groupIds = value;
  }
  public resetGroupIds() {
    this._groupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
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

  // user_ids - computed: false, optional: true, required: false
  private _userIds?: string[]; 
  public get userIds() {
    return this.getListAttribute('user_ids');
  }
  public set userIds(value: string[]) {
    this._userIds = value;
  }
  public resetUserIds() {
    this._userIds = undefined;
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
      group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupIds),
      id: cdktf.stringToTerraform(this._id),
      user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
