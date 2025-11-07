// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_blocked_user_properties
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamBlockedUserPropertiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of properties to block for a user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_blocked_user_properties#blocked_properties IamBlockedUserProperties#blocked_properties}
  */
  readonly blockedProperties: number[];
  /**
  * A unique identifier for a group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_blocked_user_properties#group_id IamBlockedUserProperties#group_id}
  */
  readonly groupId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_blocked_user_properties#id IamBlockedUserProperties#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique identifier for a user's profile, which corresponds to a user's actual profile or client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_blocked_user_properties#identity_id IamBlockedUserProperties#identity_id}
  */
  readonly identityId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_blocked_user_properties akamai_iam_blocked_user_properties}
*/
export class IamBlockedUserProperties extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_iam_blocked_user_properties";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamBlockedUserProperties resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamBlockedUserProperties to import
  * @param importFromId The id of the existing IamBlockedUserProperties that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_blocked_user_properties#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamBlockedUserProperties to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_iam_blocked_user_properties", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_blocked_user_properties akamai_iam_blocked_user_properties} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamBlockedUserPropertiesConfig
  */
  public constructor(scope: Construct, id: string, config: IamBlockedUserPropertiesConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_iam_blocked_user_properties',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockedProperties = config.blockedProperties;
    this._groupId = config.groupId;
    this._id = config.id;
    this._identityId = config.identityId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blocked_properties - computed: false, optional: false, required: true
  private _blockedProperties?: number[]; 
  public get blockedProperties() {
    return this.getNumberListAttribute('blocked_properties');
  }
  public set blockedProperties(value: number[]) {
    this._blockedProperties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedPropertiesInput() {
    return this._blockedProperties;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
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

  // identity_id - computed: false, optional: false, required: true
  private _identityId?: string; 
  public get identityId() {
    return this.getStringAttribute('identity_id');
  }
  public set identityId(value: string) {
    this._identityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdInput() {
    return this._identityId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blocked_properties: cdktf.listMapper(cdktf.numberToTerraform, false)(this._blockedProperties),
      group_id: cdktf.numberToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      identity_id: cdktf.stringToTerraform(this._identityId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blocked_properties: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._blockedProperties),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
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
      identity_id: {
        value: cdktf.stringToHclTerraform(this._identityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
