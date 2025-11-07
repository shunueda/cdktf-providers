// https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the group. This name must be unique. There are certain restrictions on the group name. Refer to the How To > User Management section in the Management Console documentation for the details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_group#group_name IamGroup#group_name}
  */
  readonly groupName: string;
  /**
  * Whether group membership is synced when a user logs in. The default is to sync group membership.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_group#sync_membership_on_user_login IamGroup#sync_membership_on_user_login}
  */
  readonly syncMembershipOnUserLogin?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_group cdp_iam_group}
*/
export class IamGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdp_iam_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamGroup to import
  * @param importFromId The id of the existing IamGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdp_iam_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_group cdp_iam_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamGroupConfig
  */
  public constructor(scope: Construct, id: string, config: IamGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'cdp_iam_group',
      terraformGeneratorMetadata: {
        providerName: 'cdp',
        providerVersion: '0.10.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupName = config.groupName;
    this._syncMembershipOnUserLogin = config.syncMembershipOnUserLogin;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // crn - computed: true, optional: false, required: false
  public get crn() {
    return this.getStringAttribute('crn');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // sync_membership_on_user_login - computed: true, optional: true, required: false
  private _syncMembershipOnUserLogin?: boolean | cdktf.IResolvable; 
  public get syncMembershipOnUserLogin() {
    return this.getBooleanAttribute('sync_membership_on_user_login');
  }
  public set syncMembershipOnUserLogin(value: boolean | cdktf.IResolvable) {
    this._syncMembershipOnUserLogin = value;
  }
  public resetSyncMembershipOnUserLogin() {
    this._syncMembershipOnUserLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncMembershipOnUserLoginInput() {
    return this._syncMembershipOnUserLogin;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_name: cdktf.stringToTerraform(this._groupName),
      sync_membership_on_user_login: cdktf.booleanToTerraform(this._syncMembershipOnUserLogin),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_membership_on_user_login: {
        value: cdktf.booleanToHclTerraform(this._syncMembershipOnUserLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
