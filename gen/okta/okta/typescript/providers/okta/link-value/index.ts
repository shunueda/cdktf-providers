// https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/link_value
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LinkValueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set of User IDs or login values of the users to be assigned the `associated` relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/link_value#associated_user_ids LinkValue#associated_user_ids}
  */
  readonly associatedUserIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/link_value#id LinkValue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the `primary` relationship being assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/link_value#primary_name LinkValue#primary_name}
  */
  readonly primaryName: string;
  /**
  * User ID to be assigned to `primary` for the 'associated' user in the specified relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/link_value#primary_user_id LinkValue#primary_user_id}
  */
  readonly primaryUserId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/link_value okta_link_value}
*/
export class LinkValue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_link_value";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LinkValue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LinkValue to import
  * @param importFromId The id of the existing LinkValue that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/link_value#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LinkValue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_link_value", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/link_value okta_link_value} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LinkValueConfig
  */
  public constructor(scope: Construct, id: string, config: LinkValueConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_link_value',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.0',
        providerVersionConstraint: '6.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._associatedUserIds = config.associatedUserIds;
    this._id = config.id;
    this._primaryName = config.primaryName;
    this._primaryUserId = config.primaryUserId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_user_ids - computed: false, optional: true, required: false
  private _associatedUserIds?: string[]; 
  public get associatedUserIds() {
    return cdktf.Fn.tolist(this.getListAttribute('associated_user_ids'));
  }
  public set associatedUserIds(value: string[]) {
    this._associatedUserIds = value;
  }
  public resetAssociatedUserIds() {
    this._associatedUserIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedUserIdsInput() {
    return this._associatedUserIds;
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

  // primary_name - computed: false, optional: false, required: true
  private _primaryName?: string; 
  public get primaryName() {
    return this.getStringAttribute('primary_name');
  }
  public set primaryName(value: string) {
    this._primaryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryNameInput() {
    return this._primaryName;
  }

  // primary_user_id - computed: false, optional: false, required: true
  private _primaryUserId?: string; 
  public get primaryUserId() {
    return this.getStringAttribute('primary_user_id');
  }
  public set primaryUserId(value: string) {
    this._primaryUserId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryUserIdInput() {
    return this._primaryUserId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._associatedUserIds),
      id: cdktf.stringToTerraform(this._id),
      primary_name: cdktf.stringToTerraform(this._primaryName),
      primary_user_id: cdktf.stringToTerraform(this._primaryUserId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associated_user_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._associatedUserIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_name: {
        value: cdktf.stringToHclTerraform(this._primaryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_user_id: {
        value: cdktf.stringToHclTerraform(this._primaryUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
