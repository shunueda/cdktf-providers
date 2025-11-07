// https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_record_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeeperEnforcementsRecordTypesAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Restrict record-types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_record_types#restrict_record_types DataKeeperEnforcementsRecordTypesA#restrict_record_types}
  */
  readonly restrictRecordTypes?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_record_types keeper_enforcements_record_types}
*/
export class DataKeeperEnforcementsRecordTypesA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keeper_enforcements_record_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeeperEnforcementsRecordTypesA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeeperEnforcementsRecordTypesA to import
  * @param importFromId The id of the existing DataKeeperEnforcementsRecordTypesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_record_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeeperEnforcementsRecordTypesA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keeper_enforcements_record_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_record_types keeper_enforcements_record_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeeperEnforcementsRecordTypesAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataKeeperEnforcementsRecordTypesAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'keeper_enforcements_record_types',
      terraformGeneratorMetadata: {
        providerName: 'keeper',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._restrictRecordTypes = config.restrictRecordTypes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // restrict_record_types - computed: false, optional: true, required: false
  private _restrictRecordTypes?: string[]; 
  public get restrictRecordTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('restrict_record_types'));
  }
  public set restrictRecordTypes(value: string[]) {
    this._restrictRecordTypes = value;
  }
  public resetRestrictRecordTypes() {
    this._restrictRecordTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictRecordTypesInput() {
    return this._restrictRecordTypes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      restrict_record_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._restrictRecordTypes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      restrict_record_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._restrictRecordTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
