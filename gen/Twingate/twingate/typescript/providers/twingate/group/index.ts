// https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines whether User assignments to this Group will override any existing assignments. Default is `true`. If set to `false`, assignments made outside of Terraform will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/group#is_authoritative Group#is_authoritative}
  */
  readonly isAuthoritative?: boolean | cdktf.IResolvable;
  /**
  * The name of the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Defines which Security Policy applies to this Group. The Security Policy ID can be obtained from the `twingate_security_policy` and `twingate_security_policies` data sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/group#security_policy_id Group#security_policy_id}
  */
  readonly securityPolicyId?: string;
  /**
  * List of User IDs that have permission to access the Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/group#user_ids Group#user_ids}
  */
  readonly userIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/group twingate_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twingate_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twingate_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/group twingate_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'twingate_group',
      terraformGeneratorMetadata: {
        providerName: 'twingate',
        providerVersion: '3.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._isAuthoritative = config.isAuthoritative;
    this._name = config.name;
    this._securityPolicyId = config.securityPolicyId;
    this._userIds = config.userIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_authoritative - computed: true, optional: true, required: false
  private _isAuthoritative?: boolean | cdktf.IResolvable; 
  public get isAuthoritative() {
    return this.getBooleanAttribute('is_authoritative');
  }
  public set isAuthoritative(value: boolean | cdktf.IResolvable) {
    this._isAuthoritative = value;
  }
  public resetIsAuthoritative() {
    this._isAuthoritative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAuthoritativeInput() {
    return this._isAuthoritative;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // security_policy_id - computed: true, optional: true, required: false
  private _securityPolicyId?: string; 
  public get securityPolicyId() {
    return this.getStringAttribute('security_policy_id');
  }
  public set securityPolicyId(value: string) {
    this._securityPolicyId = value;
  }
  public resetSecurityPolicyId() {
    this._securityPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyIdInput() {
    return this._securityPolicyId;
  }

  // user_ids - computed: false, optional: true, required: false
  private _userIds?: string[]; 
  public get userIds() {
    return cdktf.Fn.tolist(this.getListAttribute('user_ids'));
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
      is_authoritative: cdktf.booleanToTerraform(this._isAuthoritative),
      name: cdktf.stringToTerraform(this._name),
      security_policy_id: cdktf.stringToTerraform(this._securityPolicyId),
      user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      is_authoritative: {
        value: cdktf.booleanToHclTerraform(this._isAuthoritative),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_policy_id: {
        value: cdktf.stringToHclTerraform(this._securityPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
