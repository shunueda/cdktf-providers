// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_users_affected_by_moving_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiIamUsersAffectedByMovingGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier for a group you're putting the other group into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_users_affected_by_moving_group#destination_group_id DataAkamaiIamUsersAffectedByMovingGroup#destination_group_id}
  */
  readonly destinationGroupId: number;
  /**
  * Unique identifier for a group you want to move.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_users_affected_by_moving_group#source_group_id DataAkamaiIamUsersAffectedByMovingGroup#source_group_id}
  */
  readonly sourceGroupId: number;
  /**
  * Filters the list by users who have lostAccess or the reverse gainAccess.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_users_affected_by_moving_group#user_type DataAkamaiIamUsersAffectedByMovingGroup#user_type}
  */
  readonly userType?: string;
}
export interface DataAkamaiIamUsersAffectedByMovingGroupUsers {
}

export function dataAkamaiIamUsersAffectedByMovingGroupUsersToTerraform(struct?: DataAkamaiIamUsersAffectedByMovingGroupUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiIamUsersAffectedByMovingGroupUsersToHclTerraform(struct?: DataAkamaiIamUsersAffectedByMovingGroupUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiIamUsersAffectedByMovingGroupUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiIamUsersAffectedByMovingGroupUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiIamUsersAffectedByMovingGroupUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // last_login_date - computed: true, optional: false, required: false
  public get lastLoginDate() {
    return this.getStringAttribute('last_login_date');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // ui_identity_id - computed: true, optional: false, required: false
  public get uiIdentityId() {
    return this.getStringAttribute('ui_identity_id');
  }

  // ui_username - computed: true, optional: false, required: false
  public get uiUsername() {
    return this.getStringAttribute('ui_username');
  }
}

export class DataAkamaiIamUsersAffectedByMovingGroupUsersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiIamUsersAffectedByMovingGroupUsersOutputReference {
    return new DataAkamaiIamUsersAffectedByMovingGroupUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_users_affected_by_moving_group akamai_iam_users_affected_by_moving_group}
*/
export class DataAkamaiIamUsersAffectedByMovingGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_iam_users_affected_by_moving_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiIamUsersAffectedByMovingGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiIamUsersAffectedByMovingGroup to import
  * @param importFromId The id of the existing DataAkamaiIamUsersAffectedByMovingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_users_affected_by_moving_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiIamUsersAffectedByMovingGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_iam_users_affected_by_moving_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_users_affected_by_moving_group akamai_iam_users_affected_by_moving_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiIamUsersAffectedByMovingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiIamUsersAffectedByMovingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_iam_users_affected_by_moving_group',
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
    this._destinationGroupId = config.destinationGroupId;
    this._sourceGroupId = config.sourceGroupId;
    this._userType = config.userType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_group_id - computed: false, optional: false, required: true
  private _destinationGroupId?: number; 
  public get destinationGroupId() {
    return this.getNumberAttribute('destination_group_id');
  }
  public set destinationGroupId(value: number) {
    this._destinationGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationGroupIdInput() {
    return this._destinationGroupId;
  }

  // source_group_id - computed: false, optional: false, required: true
  private _sourceGroupId?: number; 
  public get sourceGroupId() {
    return this.getNumberAttribute('source_group_id');
  }
  public set sourceGroupId(value: number) {
    this._sourceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceGroupIdInput() {
    return this._sourceGroupId;
  }

  // user_type - computed: false, optional: true, required: false
  private _userType?: string; 
  public get userType() {
    return this.getStringAttribute('user_type');
  }
  public set userType(value: string) {
    this._userType = value;
  }
  public resetUserType() {
    this._userType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeInput() {
    return this._userType;
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataAkamaiIamUsersAffectedByMovingGroupUsersList(this, "users", false);
  public get users() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_group_id: cdktf.numberToTerraform(this._destinationGroupId),
      source_group_id: cdktf.numberToTerraform(this._sourceGroupId),
      user_type: cdktf.stringToTerraform(this._userType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_group_id: {
        value: cdktf.numberToHclTerraform(this._destinationGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_group_id: {
        value: cdktf.numberToHclTerraform(this._sourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_type: {
        value: cdktf.stringToHclTerraform(this._userType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
