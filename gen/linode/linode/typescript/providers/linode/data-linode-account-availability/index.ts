// https://registry.terraform.io/providers/linode/linode/3.5.1/docs/data-sources/account_availability
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLinodeAccountAvailabilityConfig extends cdktf.TerraformMetaArguments {
  /**
  * The region of this availability entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/data-sources/account_availability#region DataLinodeAccountAvailability#region}
  */
  readonly region: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/data-sources/account_availability linode_account_availability}
*/
export class DataLinodeAccountAvailability extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_account_availability";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLinodeAccountAvailability resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLinodeAccountAvailability to import
  * @param importFromId The id of the existing DataLinodeAccountAvailability that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/data-sources/account_availability#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLinodeAccountAvailability to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_account_availability", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/data-sources/account_availability linode_account_availability} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLinodeAccountAvailabilityConfig
  */
  public constructor(scope: Construct, id: string, config: DataLinodeAccountAvailabilityConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_account_availability',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.5.1',
        providerVersionConstraint: '3.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available - computed: true, optional: false, required: false
  public get available() {
    return cdktf.Fn.tolist(this.getListAttribute('available'));
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // unavailable - computed: true, optional: false, required: false
  public get unavailable() {
    return cdktf.Fn.tolist(this.getListAttribute('unavailable'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
