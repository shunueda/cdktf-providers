// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_contract_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciEpgToContractInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_contract_interface#annotation DataAciEpgToContractInterface#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_contract_interface#application_epg_dn DataAciEpgToContractInterface#application_epg_dn}
  */
  readonly applicationEpgDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_contract_interface#contract_interface_dn DataAciEpgToContractInterface#contract_interface_dn}
  */
  readonly contractInterfaceDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_contract_interface#description DataAciEpgToContractInterface#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_contract_interface#id DataAciEpgToContractInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_contract_interface#name_alias DataAciEpgToContractInterface#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_contract_interface#prio DataAciEpgToContractInterface#prio}
  */
  readonly prio?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_contract_interface aci_epg_to_contract_interface}
*/
export class DataAciEpgToContractInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_epg_to_contract_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciEpgToContractInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciEpgToContractInterface to import
  * @param importFromId The id of the existing DataAciEpgToContractInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_contract_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciEpgToContractInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_epg_to_contract_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_contract_interface aci_epg_to_contract_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciEpgToContractInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciEpgToContractInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_epg_to_contract_interface',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._applicationEpgDn = config.applicationEpgDn;
    this._contractInterfaceDn = config.contractInterfaceDn;
    this._description = config.description;
    this._id = config.id;
    this._nameAlias = config.nameAlias;
    this._prio = config.prio;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
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

  // contract_interface_dn - computed: false, optional: false, required: true
  private _contractInterfaceDn?: string; 
  public get contractInterfaceDn() {
    return this.getStringAttribute('contract_interface_dn');
  }
  public set contractInterfaceDn(value: string) {
    this._contractInterfaceDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractInterfaceDnInput() {
    return this._contractInterfaceDn;
  }

  // description - computed: true, optional: true, required: false
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // prio - computed: true, optional: true, required: false
  private _prio?: string; 
  public get prio() {
    return this.getStringAttribute('prio');
  }
  public set prio(value: string) {
    this._prio = value;
  }
  public resetPrio() {
    this._prio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioInput() {
    return this._prio;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      application_epg_dn: cdktf.stringToTerraform(this._applicationEpgDn),
      contract_interface_dn: cdktf.stringToTerraform(this._contractInterfaceDn),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      prio: cdktf.stringToTerraform(this._prio),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_epg_dn: {
        value: cdktf.stringToHclTerraform(this._applicationEpgDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract_interface_dn: {
        value: cdktf.stringToHclTerraform(this._contractInterfaceDn),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prio: {
        value: cdktf.stringToHclTerraform(this._prio),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
