// https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/account_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the account group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/account_group#account_group_name AccountGroup#account_group_name}
  */
  readonly accountGroupName: string;
  /**
  * To grant access to enterprise agents, specify the agent list. Note that this is not an additive list - the full list must be specified if changing access to agents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/account_group#agents AccountGroup#agents}
  */
  readonly agents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/account_group#id AccountGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/account_group thousandeyes_account_group}
*/
export class AccountGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thousandeyes_account_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccountGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountGroup to import
  * @param importFromId The id of the existing AccountGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/account_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thousandeyes_account_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/account_group thousandeyes_account_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AccountGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'thousandeyes_account_group',
      terraformGeneratorMetadata: {
        providerName: 'thousandeyes',
        providerVersion: '3.1.4',
        providerVersionConstraint: '3.1.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountGroupName = config.accountGroupName;
    this._agents = config.agents;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_group_name - computed: false, optional: false, required: true
  private _accountGroupName?: string; 
  public get accountGroupName() {
    return this.getStringAttribute('account_group_name');
  }
  public set accountGroupName(value: string) {
    this._accountGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountGroupNameInput() {
    return this._accountGroupName;
  }

  // account_token - computed: true, optional: false, required: false
  public get accountToken() {
    return this.getStringAttribute('account_token');
  }

  // agents - computed: false, optional: true, required: false
  private _agents?: string[]; 
  public get agents() {
    return cdktf.Fn.tolist(this.getListAttribute('agents'));
  }
  public set agents(value: string[]) {
    this._agents = value;
  }
  public resetAgents() {
    this._agents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentsInput() {
    return this._agents;
  }

  // aid - computed: true, optional: false, required: false
  public get aid() {
    return this.getStringAttribute('aid');
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

  // is_current_account_group - computed: true, optional: false, required: false
  public get isCurrentAccountGroup() {
    return this.getBooleanAttribute('is_current_account_group');
  }

  // is_default_account_group - computed: true, optional: false, required: false
  public get isDefaultAccountGroup() {
    return this.getBooleanAttribute('is_default_account_group');
  }

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // organization_name - computed: true, optional: false, required: false
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_group_name: cdktf.stringToTerraform(this._accountGroupName),
      agents: cdktf.listMapper(cdktf.stringToTerraform, false)(this._agents),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_group_name: {
        value: cdktf.stringToHclTerraform(this._accountGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agents: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._agents),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
