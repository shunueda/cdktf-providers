// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/msp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSite24X7MspConfig extends cdktf.TerraformMetaArguments {
  /**
  * Regular expression denoting the name of the MSP customer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/msp#customer_name_regex DataSite24X7Msp#customer_name_regex}
  */
  readonly customerNameRegex: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/msp#id DataSite24X7Msp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/msp site24x7_msp}
*/
export class DataSite24X7Msp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_msp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSite24X7Msp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSite24X7Msp to import
  * @param importFromId The id of the existing DataSite24X7Msp that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/msp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSite24X7Msp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_msp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/msp site24x7_msp} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSite24X7MspConfig
  */
  public constructor(scope: Construct, id: string, config: DataSite24X7MspConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_msp',
      terraformGeneratorMetadata: {
        providerName: 'site24x7',
        providerVersion: '2.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customerNameRegex = config.customerNameRegex;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customer_name - computed: true, optional: false, required: false
  public get customerName() {
    return this.getStringAttribute('customer_name');
  }

  // customer_name_regex - computed: false, optional: false, required: true
  private _customerNameRegex?: string; 
  public get customerNameRegex() {
    return this.getStringAttribute('customer_name_regex');
  }
  public set customerNameRegex(value: string) {
    this._customerNameRegex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerNameRegexInput() {
    return this._customerNameRegex;
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

  // matching_zaaids - computed: true, optional: false, required: false
  public get matchingZaaids() {
    return this.getListAttribute('matching_zaaids');
  }

  // matching_zaaids_and_names - computed: true, optional: false, required: false
  public get matchingZaaidsAndNames() {
    return this.getListAttribute('matching_zaaids_and_names');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // zaaid - computed: true, optional: false, required: false
  public get zaaid() {
    return this.getStringAttribute('zaaid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customer_name_regex: cdktf.stringToTerraform(this._customerNameRegex),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      customer_name_regex: {
        value: cdktf.stringToHclTerraform(this._customerNameRegex),
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
