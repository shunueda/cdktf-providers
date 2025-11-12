// https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/team_role_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamRoleMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * A set of custom role keys to assign to the team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/team_role_mapping#custom_role_keys TeamRoleMapping#custom_role_keys}
  */
  readonly customRoleKeys: string[];
  /**
  * The LaunchDarkly team key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/team_role_mapping#team_key TeamRoleMapping#team_key}
  */
  readonly teamKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/team_role_mapping launchdarkly_team_role_mapping}
*/
export class TeamRoleMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "launchdarkly_team_role_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeamRoleMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamRoleMapping to import
  * @param importFromId The id of the existing TeamRoleMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/team_role_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamRoleMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "launchdarkly_team_role_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/team_role_mapping launchdarkly_team_role_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamRoleMappingConfig
  */
  public constructor(scope: Construct, id: string, config: TeamRoleMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'launchdarkly_team_role_mapping',
      terraformGeneratorMetadata: {
        providerName: 'launchdarkly',
        providerVersion: '2.26.0',
        providerVersionConstraint: '2.26.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customRoleKeys = config.customRoleKeys;
    this._teamKey = config.teamKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_role_keys - computed: false, optional: false, required: true
  private _customRoleKeys?: string[]; 
  public get customRoleKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_role_keys'));
  }
  public set customRoleKeys(value: string[]) {
    this._customRoleKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customRoleKeysInput() {
    return this._customRoleKeys;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // team_key - computed: false, optional: false, required: true
  private _teamKey?: string; 
  public get teamKey() {
    return this.getStringAttribute('team_key');
  }
  public set teamKey(value: string) {
    this._teamKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamKeyInput() {
    return this._teamKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_role_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customRoleKeys),
      team_key: cdktf.stringToTerraform(this._teamKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_role_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customRoleKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      team_key: {
        value: cdktf.stringToHclTerraform(this._teamKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
