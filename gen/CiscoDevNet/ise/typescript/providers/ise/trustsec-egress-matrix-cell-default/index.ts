// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/trustsec_egress_matrix_cell_default
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrustsecEgressMatrixCellDefaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Can be used only if sgacls not specified. Final Catch All Rule
  *   - Choices: `NONE`, `DENY_IP`, `PERMIT_IP`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/trustsec_egress_matrix_cell_default#default_rule TrustsecEgressMatrixCellDefault#default_rule}
  */
  readonly defaultRule?: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/trustsec_egress_matrix_cell_default#description TrustsecEgressMatrixCellDefault#description}
  */
  readonly description?: string;
  /**
  * Matrix Cell Status
  *   - Choices: `DISABLED`, `ENABLED`, `MONITOR`
  *   - Default value: `DISABLED`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/trustsec_egress_matrix_cell_default#matrix_cell_status TrustsecEgressMatrixCellDefault#matrix_cell_status}
  */
  readonly matrixCellStatus?: string;
  /**
  * List of TrustSec Security Groups ACLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/trustsec_egress_matrix_cell_default#sgacls TrustsecEgressMatrixCellDefault#sgacls}
  */
  readonly sgacls?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/trustsec_egress_matrix_cell_default ise_trustsec_egress_matrix_cell_default}
*/
export class TrustsecEgressMatrixCellDefault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_trustsec_egress_matrix_cell_default";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrustsecEgressMatrixCellDefault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrustsecEgressMatrixCellDefault to import
  * @param importFromId The id of the existing TrustsecEgressMatrixCellDefault that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/trustsec_egress_matrix_cell_default#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrustsecEgressMatrixCellDefault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_trustsec_egress_matrix_cell_default", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/trustsec_egress_matrix_cell_default ise_trustsec_egress_matrix_cell_default} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrustsecEgressMatrixCellDefaultConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TrustsecEgressMatrixCellDefaultConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ise_trustsec_egress_matrix_cell_default',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.13',
        providerVersionConstraint: '0.2.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultRule = config.defaultRule;
    this._description = config.description;
    this._matrixCellStatus = config.matrixCellStatus;
    this._sgacls = config.sgacls;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_rule - computed: false, optional: true, required: false
  private _defaultRule?: string; 
  public get defaultRule() {
    return this.getStringAttribute('default_rule');
  }
  public set defaultRule(value: string) {
    this._defaultRule = value;
  }
  public resetDefaultRule() {
    this._defaultRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRuleInput() {
    return this._defaultRule;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // matrix_cell_status - computed: true, optional: true, required: false
  private _matrixCellStatus?: string; 
  public get matrixCellStatus() {
    return this.getStringAttribute('matrix_cell_status');
  }
  public set matrixCellStatus(value: string) {
    this._matrixCellStatus = value;
  }
  public resetMatrixCellStatus() {
    this._matrixCellStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matrixCellStatusInput() {
    return this._matrixCellStatus;
  }

  // sgacls - computed: false, optional: true, required: false
  private _sgacls?: string[]; 
  public get sgacls() {
    return cdktf.Fn.tolist(this.getListAttribute('sgacls'));
  }
  public set sgacls(value: string[]) {
    this._sgacls = value;
  }
  public resetSgacls() {
    this._sgacls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgaclsInput() {
    return this._sgacls;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_rule: cdktf.stringToTerraform(this._defaultRule),
      description: cdktf.stringToTerraform(this._description),
      matrix_cell_status: cdktf.stringToTerraform(this._matrixCellStatus),
      sgacls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sgacls),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_rule: {
        value: cdktf.stringToHclTerraform(this._defaultRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      matrix_cell_status: {
        value: cdktf.stringToHclTerraform(this._matrixCellStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sgacls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sgacls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
