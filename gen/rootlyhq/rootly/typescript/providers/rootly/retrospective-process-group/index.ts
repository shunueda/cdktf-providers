// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/retrospective_process_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RetrospectiveProcessGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/retrospective_process_group#id RetrospectiveProcessGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/retrospective_process_group#position RetrospectiveProcessGroup#position}
  */
  readonly position?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/retrospective_process_group#retrospective_process_id RetrospectiveProcessGroup#retrospective_process_id}
  */
  readonly retrospectiveProcessId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/retrospective_process_group#sub_status_id RetrospectiveProcessGroup#sub_status_id}
  */
  readonly subStatusId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/retrospective_process_group rootly_retrospective_process_group}
*/
export class RetrospectiveProcessGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_retrospective_process_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RetrospectiveProcessGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RetrospectiveProcessGroup to import
  * @param importFromId The id of the existing RetrospectiveProcessGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/retrospective_process_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RetrospectiveProcessGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_retrospective_process_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/retrospective_process_group rootly_retrospective_process_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RetrospectiveProcessGroupConfig
  */
  public constructor(scope: Construct, id: string, config: RetrospectiveProcessGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_retrospective_process_group',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.11',
        providerVersionConstraint: '4.3.11'
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
    this._position = config.position;
    this._retrospectiveProcessId = config.retrospectiveProcessId;
    this._subStatusId = config.subStatusId;
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

  // position - computed: true, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // retrospective_process_id - computed: true, optional: true, required: false
  private _retrospectiveProcessId?: string; 
  public get retrospectiveProcessId() {
    return this.getStringAttribute('retrospective_process_id');
  }
  public set retrospectiveProcessId(value: string) {
    this._retrospectiveProcessId = value;
  }
  public resetRetrospectiveProcessId() {
    this._retrospectiveProcessId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrospectiveProcessIdInput() {
    return this._retrospectiveProcessId;
  }

  // sub_status_id - computed: false, optional: false, required: true
  private _subStatusId?: string; 
  public get subStatusId() {
    return this.getStringAttribute('sub_status_id');
  }
  public set subStatusId(value: string) {
    this._subStatusId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subStatusIdInput() {
    return this._subStatusId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      position: cdktf.numberToTerraform(this._position),
      retrospective_process_id: cdktf.stringToTerraform(this._retrospectiveProcessId),
      sub_status_id: cdktf.stringToTerraform(this._subStatusId),
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
      position: {
        value: cdktf.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retrospective_process_id: {
        value: cdktf.stringToHclTerraform(this._retrospectiveProcessId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_status_id: {
        value: cdktf.stringToHclTerraform(this._subStatusId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
