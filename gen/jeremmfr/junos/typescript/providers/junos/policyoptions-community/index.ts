// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/policyoptions_community
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyoptionsCommunityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Object may exist in dynamic database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/policyoptions_community#dynamic_db PolicyoptionsCommunity#dynamic_db}
  */
  readonly dynamicDb?: boolean | cdktf.IResolvable;
  /**
  * Invert the result of the community expression matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/policyoptions_community#invert_match PolicyoptionsCommunity#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Community members.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/policyoptions_community#members PolicyoptionsCommunity#members}
  */
  readonly members?: string[];
  /**
  * Name to identify BGP community.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/policyoptions_community#name PolicyoptionsCommunity#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/policyoptions_community junos_policyoptions_community}
*/
export class PolicyoptionsCommunity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_policyoptions_community";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyoptionsCommunity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyoptionsCommunity to import
  * @param importFromId The id of the existing PolicyoptionsCommunity that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/policyoptions_community#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyoptionsCommunity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_policyoptions_community", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/policyoptions_community junos_policyoptions_community} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyoptionsCommunityConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyoptionsCommunityConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_policyoptions_community',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dynamicDb = config.dynamicDb;
    this._invertMatch = config.invertMatch;
    this._members = config.members;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dynamic_db - computed: false, optional: true, required: false
  private _dynamicDb?: boolean | cdktf.IResolvable; 
  public get dynamicDb() {
    return this.getBooleanAttribute('dynamic_db');
  }
  public set dynamicDb(value: boolean | cdktf.IResolvable) {
    this._dynamicDb = value;
  }
  public resetDynamicDb() {
    this._dynamicDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicDbInput() {
    return this._dynamicDb;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
  }

  // members - computed: false, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return this.getListAttribute('members');
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_db: cdktf.booleanToTerraform(this._dynamicDb),
      invert_match: cdktf.booleanToTerraform(this._invertMatch),
      members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._members),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_db: {
        value: cdktf.booleanToHclTerraform(this._dynamicDb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      invert_match: {
        value: cdktf.booleanToHclTerraform(this._invertMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._members),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
