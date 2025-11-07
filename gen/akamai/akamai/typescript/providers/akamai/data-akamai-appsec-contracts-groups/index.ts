// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_contracts_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiAppsecContractsGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of an Akamai contract
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_contracts_groups#contractid DataAkamaiAppsecContractsGroups#contractid}
  */
  readonly contractid?: string;
  /**
  * Unique identifier of a contract group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_contracts_groups#groupid DataAkamaiAppsecContractsGroups#groupid}
  */
  readonly groupid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_contracts_groups#id DataAkamaiAppsecContractsGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_contracts_groups akamai_appsec_contracts_groups}
*/
export class DataAkamaiAppsecContractsGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_appsec_contracts_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiAppsecContractsGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiAppsecContractsGroups to import
  * @param importFromId The id of the existing DataAkamaiAppsecContractsGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_contracts_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiAppsecContractsGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_appsec_contracts_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_contracts_groups akamai_appsec_contracts_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiAppsecContractsGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiAppsecContractsGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akamai_appsec_contracts_groups',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contractid = config.contractid;
    this._groupid = config.groupid;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contractid - computed: false, optional: true, required: false
  private _contractid?: string; 
  public get contractid() {
    return this.getStringAttribute('contractid');
  }
  public set contractid(value: string) {
    this._contractid = value;
  }
  public resetContractid() {
    this._contractid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractidInput() {
    return this._contractid;
  }

  // default_contractid - computed: true, optional: false, required: false
  public get defaultContractid() {
    return this.getStringAttribute('default_contractid');
  }

  // default_groupid - computed: true, optional: false, required: false
  public get defaultGroupid() {
    return this.getNumberAttribute('default_groupid');
  }

  // groupid - computed: false, optional: true, required: false
  private _groupid?: number; 
  public get groupid() {
    return this.getNumberAttribute('groupid');
  }
  public set groupid(value: number) {
    this._groupid = value;
  }
  public resetGroupid() {
    this._groupid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupidInput() {
    return this._groupid;
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

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // output_text - computed: true, optional: false, required: false
  public get outputText() {
    return this.getStringAttribute('output_text');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contractid: cdktf.stringToTerraform(this._contractid),
      groupid: cdktf.numberToTerraform(this._groupid),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contractid: {
        value: cdktf.stringToHclTerraform(this._contractid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groupid: {
        value: cdktf.numberToHclTerraform(this._groupid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
