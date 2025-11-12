// https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/resources/team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/resources/team#id Team#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/resources/team#members Team#members}
  */
  readonly members?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/resources/team#owners Team#owners}
  */
  readonly owners?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/resources/team#pipeline_operators Team#pipeline_operators}
  */
  readonly pipelineOperators?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/resources/team#team_name Team#team_name}
  */
  readonly teamName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/resources/team#viewers Team#viewers}
  */
  readonly viewers?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/resources/team concourse_team}
*/
export class Team extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "concourse_team";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Team to import
  * @param importFromId The id of the existing Team that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/resources/team#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Team to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "concourse_team", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/resources/team concourse_team} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamConfig
  */
  public constructor(scope: Construct, id: string, config: TeamConfig) {
    super(scope, id, {
      terraformResourceType: 'concourse_team',
      terraformGeneratorMetadata: {
        providerName: 'concourse',
        providerVersion: '8.0.1',
        providerVersionConstraint: '8.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._members = config.members;
    this._owners = config.owners;
    this._pipelineOperators = config.pipelineOperators;
    this._teamName = config.teamName;
    this._viewers = config.viewers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // members - computed: false, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return cdktf.Fn.tolist(this.getListAttribute('members'));
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

  // owners - computed: false, optional: true, required: false
  private _owners?: string[]; 
  public get owners() {
    return cdktf.Fn.tolist(this.getListAttribute('owners'));
  }
  public set owners(value: string[]) {
    this._owners = value;
  }
  public resetOwners() {
    this._owners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners;
  }

  // pipeline_operators - computed: false, optional: true, required: false
  private _pipelineOperators?: string[]; 
  public get pipelineOperators() {
    return cdktf.Fn.tolist(this.getListAttribute('pipeline_operators'));
  }
  public set pipelineOperators(value: string[]) {
    this._pipelineOperators = value;
  }
  public resetPipelineOperators() {
    this._pipelineOperators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineOperatorsInput() {
    return this._pipelineOperators;
  }

  // team_name - computed: false, optional: false, required: true
  private _teamName?: string; 
  public get teamName() {
    return this.getStringAttribute('team_name');
  }
  public set teamName(value: string) {
    this._teamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamNameInput() {
    return this._teamName;
  }

  // viewers - computed: false, optional: true, required: false
  private _viewers?: string[]; 
  public get viewers() {
    return cdktf.Fn.tolist(this.getListAttribute('viewers'));
  }
  public set viewers(value: string[]) {
    this._viewers = value;
  }
  public resetViewers() {
    this._viewers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewersInput() {
    return this._viewers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._members),
      owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owners),
      pipeline_operators: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pipelineOperators),
      team_name: cdktf.stringToTerraform(this._teamName),
      viewers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._viewers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._members),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      owners: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._owners),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      pipeline_operators: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pipelineOperators),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      team_name: {
        value: cdktf.stringToHclTerraform(this._teamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      viewers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._viewers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
