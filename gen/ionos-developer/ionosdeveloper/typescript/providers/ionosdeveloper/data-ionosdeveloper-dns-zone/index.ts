// https://registry.terraform.io/providers/ionos-developer/ionosdeveloper/0.0.1/docs/data-sources/dns_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIonosdeveloperDnsZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-developer/ionosdeveloper/0.0.1/docs/data-sources/dns_zone#name DataIonosdeveloperDnsZone#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ionos-developer/ionosdeveloper/0.0.1/docs/data-sources/dns_zone ionosdeveloper_dns_zone}
*/
export class DataIonosdeveloperDnsZone extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionosdeveloper_dns_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIonosdeveloperDnsZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIonosdeveloperDnsZone to import
  * @param importFromId The id of the existing DataIonosdeveloperDnsZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-developer/ionosdeveloper/0.0.1/docs/data-sources/dns_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIonosdeveloperDnsZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionosdeveloper_dns_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-developer/ionosdeveloper/0.0.1/docs/data-sources/dns_zone ionosdeveloper_dns_zone} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIonosdeveloperDnsZoneConfig
  */
  public constructor(scope: Construct, id: string, config: DataIonosdeveloperDnsZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'ionosdeveloper_dns_zone',
      terraformGeneratorMetadata: {
        providerName: 'ionosdeveloper',
        providerVersion: '0.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
