// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_contract
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciEpgToContractConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_contract#application_epg_dn DataAciEpgToContract#application_epg_dn}
  */
  readonly applicationEpgDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_contract#contract_dn DataAciEpgToContract#contract_dn}
  */
  readonly contractDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_contract#contract_name DataAciEpgToContract#contract_name}
  */
  readonly contractName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_contract#contract_type DataAciEpgToContract#contract_type}
  */
  readonly contractType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_contract#id DataAciEpgToContract#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_contract aci_epg_to_contract}
*/
export class DataAciEpgToContract extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_epg_to_contract";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciEpgToContract resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciEpgToContract to import
  * @param importFromId The id of the existing DataAciEpgToContract that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_contract#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciEpgToContract to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_epg_to_contract", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_contract aci_epg_to_contract} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciEpgToContractConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciEpgToContractConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_epg_to_contract',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationEpgDn = config.applicationEpgDn;
    this._contractDn = config.contractDn;
    this._contractName = config.contractName;
    this._contractType = config.contractType;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: false, required: false
  public get annotation() {
    return this.getStringAttribute('annotation');
  }

  // application_epg_dn - computed: false, optional: false, required: true
  private _applicationEpgDn?: string; 
  public get applicationEpgDn() {
    return this.getStringAttribute('application_epg_dn');
  }
  public set applicationEpgDn(value: string) {
    this._applicationEpgDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationEpgDnInput() {
    return this._applicationEpgDn;
  }

  // contract_dn - computed: false, optional: true, required: false
  private _contractDn?: string; 
  public get contractDn() {
    return this.getStringAttribute('contract_dn');
  }
  public set contractDn(value: string) {
    this._contractDn = value;
  }
  public resetContractDn() {
    this._contractDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractDnInput() {
    return this._contractDn;
  }

  // contract_name - computed: false, optional: true, required: false
  private _contractName?: string; 
  public get contractName() {
    return this.getStringAttribute('contract_name');
  }
  public set contractName(value: string) {
    this._contractName = value;
  }
  public resetContractName() {
    this._contractName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractNameInput() {
    return this._contractName;
  }

  // contract_type - computed: false, optional: false, required: true
  private _contractType?: string; 
  public get contractType() {
    return this.getStringAttribute('contract_type');
  }
  public set contractType(value: string) {
    this._contractType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractTypeInput() {
    return this._contractType;
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

  // match_t - computed: true, optional: false, required: false
  public get matchT() {
    return this.getStringAttribute('match_t');
  }

  // prio - computed: true, optional: false, required: false
  public get prio() {
    return this.getStringAttribute('prio');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_epg_dn: cdktf.stringToTerraform(this._applicationEpgDn),
      contract_dn: cdktf.stringToTerraform(this._contractDn),
      contract_name: cdktf.stringToTerraform(this._contractName),
      contract_type: cdktf.stringToTerraform(this._contractType),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_epg_dn: {
        value: cdktf.stringToHclTerraform(this._applicationEpgDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract_dn: {
        value: cdktf.stringToHclTerraform(this._contractDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract_name: {
        value: cdktf.stringToHclTerraform(this._contractName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract_type: {
        value: cdktf.stringToHclTerraform(this._contractType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
