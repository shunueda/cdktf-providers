// https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/c2c_ip_ranges
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZpaC2CIpRangesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/c2c_ip_ranges#id DataZpaC2CIpRanges#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/c2c_ip_ranges#name DataZpaC2CIpRanges#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/c2c_ip_ranges zpa_c2c_ip_ranges}
*/
export class DataZpaC2CIpRanges extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_c2c_ip_ranges";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZpaC2CIpRanges resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZpaC2CIpRanges to import
  * @param importFromId The id of the existing DataZpaC2CIpRanges that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/c2c_ip_ranges#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZpaC2CIpRanges to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_c2c_ip_ranges", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/c2c_ip_ranges zpa_c2c_ip_ranges} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZpaC2CIpRangesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZpaC2CIpRangesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa_c2c_ip_ranges',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.2'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_ips - computed: true, optional: false, required: false
  public get availableIps() {
    return this.getStringAttribute('available_ips');
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // customer_id - computed: true, optional: false, required: false
  public get customerId() {
    return this.getStringAttribute('customer_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: false, optional: true, required: false
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

  // ip_range_begin - computed: true, optional: false, required: false
  public get ipRangeBegin() {
    return this.getStringAttribute('ip_range_begin');
  }

  // ip_range_end - computed: true, optional: false, required: false
  public get ipRangeEnd() {
    return this.getStringAttribute('ip_range_end');
  }

  // is_deleted - computed: true, optional: false, required: false
  public get isDeleted() {
    return this.getStringAttribute('is_deleted');
  }

  // latitude_in_db - computed: true, optional: false, required: false
  public get latitudeInDb() {
    return this.getStringAttribute('latitude_in_db');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // location_hint - computed: true, optional: false, required: false
  public get locationHint() {
    return this.getStringAttribute('location_hint');
  }

  // longitude_in_db - computed: true, optional: false, required: false
  public get longitudeInDb() {
    return this.getStringAttribute('longitude_in_db');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // sccm_flag - computed: true, optional: false, required: false
  public get sccmFlag() {
    return this.getBooleanAttribute('sccm_flag');
  }

  // subnet_cidr - computed: true, optional: false, required: false
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }

  // total_ips - computed: true, optional: false, required: false
  public get totalIps() {
    return this.getStringAttribute('total_ips');
  }

  // used_ips - computed: true, optional: false, required: false
  public get usedIps() {
    return this.getStringAttribute('used_ips');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
