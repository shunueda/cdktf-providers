// https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/quality_gate_selection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QualityGateSelectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the quality gate that is selected for the project(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/quality_gate_selection#gate_id QualityGateSelection#gate_id}
  */
  readonly gateId: string;
  /**
  * The Keys of the projects which have been selected on the referenced quality gate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/quality_gate_selection#project_keys QualityGateSelection#project_keys}
  */
  readonly projectKeys: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/quality_gate_selection sonarcloud_quality_gate_selection}
*/
export class QualityGateSelection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarcloud_quality_gate_selection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QualityGateSelection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QualityGateSelection to import
  * @param importFromId The id of the existing QualityGateSelection that should be imported. Refer to the {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/quality_gate_selection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QualityGateSelection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarcloud_quality_gate_selection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/quality_gate_selection sonarcloud_quality_gate_selection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QualityGateSelectionConfig
  */
  public constructor(scope: Construct, id: string, config: QualityGateSelectionConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarcloud_quality_gate_selection',
      terraformGeneratorMetadata: {
        providerName: 'sonarcloud',
        providerVersion: '0.5.2',
        providerVersionConstraint: '0.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gateId = config.gateId;
    this._projectKeys = config.projectKeys;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gate_id - computed: false, optional: false, required: true
  private _gateId?: string; 
  public get gateId() {
    return this.getStringAttribute('gate_id');
  }
  public set gateId(value: string) {
    this._gateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gateIdInput() {
    return this._gateId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project_keys - computed: false, optional: false, required: true
  private _projectKeys?: string[]; 
  public get projectKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('project_keys'));
  }
  public set projectKeys(value: string[]) {
    this._projectKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeysInput() {
    return this._projectKeys;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gate_id: cdktf.stringToTerraform(this._gateId),
      project_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectKeys),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gate_id: {
        value: cdktf.stringToHclTerraform(this._gateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
