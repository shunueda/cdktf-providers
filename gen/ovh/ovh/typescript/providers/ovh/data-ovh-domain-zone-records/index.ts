// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/domain_zone_records
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhDomainZoneRecordsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Zone name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/domain_zone_records#zone_name DataOvhDomainZoneRecords#zone_name}
  */
  readonly zoneName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/domain_zone_records ovh_domain_zone_records}
*/
export class DataOvhDomainZoneRecords extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_domain_zone_records";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhDomainZoneRecords resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhDomainZoneRecords to import
  * @param importFromId The id of the existing DataOvhDomainZoneRecords that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/domain_zone_records#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhDomainZoneRecords to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_domain_zone_records", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/domain_zone_records ovh_domain_zone_records} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhDomainZoneRecordsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhDomainZoneRecordsConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_domain_zone_records',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._zoneName = config.zoneName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getNumberListAttribute('ids');
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      zone_name: cdktf.stringToTerraform(this._zoneName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
