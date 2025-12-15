// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/data-sources/trustsec_egress_matrix_cell
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIseTrustsecEgressMatrixCellConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/data-sources/trustsec_egress_matrix_cell#id DataIseTrustsecEgressMatrixCell#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/data-sources/trustsec_egress_matrix_cell ise_trustsec_egress_matrix_cell}
*/
export class DataIseTrustsecEgressMatrixCell extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_trustsec_egress_matrix_cell";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIseTrustsecEgressMatrixCell resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIseTrustsecEgressMatrixCell to import
  * @param importFromId The id of the existing DataIseTrustsecEgressMatrixCell that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/data-sources/trustsec_egress_matrix_cell#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIseTrustsecEgressMatrixCell to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_trustsec_egress_matrix_cell", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/data-sources/trustsec_egress_matrix_cell ise_trustsec_egress_matrix_cell} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIseTrustsecEgressMatrixCellConfig
  */
  public constructor(scope: Construct, id: string, config: DataIseTrustsecEgressMatrixCellConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_trustsec_egress_matrix_cell',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_rule - computed: true, optional: false, required: false
  public get defaultRule() {
    return this.getStringAttribute('default_rule');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination_sgt_id - computed: true, optional: false, required: false
  public get destinationSgtId() {
    return this.getStringAttribute('destination_sgt_id');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // matrix_cell_status - computed: true, optional: false, required: false
  public get matrixCellStatus() {
    return this.getStringAttribute('matrix_cell_status');
  }

  // sgacls - computed: true, optional: false, required: false
  public get sgacls() {
    return cdktf.Fn.tolist(this.getListAttribute('sgacls'));
  }

  // source_sgt_id - computed: true, optional: false, required: false
  public get sourceSgtId() {
    return this.getStringAttribute('source_sgt_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
