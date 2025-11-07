// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/domain_zone_import
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainZoneImportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Zone file that will be imported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/domain_zone_import#zone_file DomainZoneImport#zone_file}
  */
  readonly zoneFile: string;
  /**
  * Zone name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/domain_zone_import#zone_name DomainZoneImport#zone_name}
  */
  readonly zoneName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/domain_zone_import ovh_domain_zone_import}
*/
export class DomainZoneImport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_domain_zone_import";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DomainZoneImport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DomainZoneImport to import
  * @param importFromId The id of the existing DomainZoneImport that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/domain_zone_import#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DomainZoneImport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_domain_zone_import", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/domain_zone_import ovh_domain_zone_import} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainZoneImportConfig
  */
  public constructor(scope: Construct, id: string, config: DomainZoneImportConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_domain_zone_import',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._zoneFile = config.zoneFile;
    this._zoneName = config.zoneName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exported_content - computed: true, optional: false, required: false
  public get exportedContent() {
    return this.getStringAttribute('exported_content');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // zone_file - computed: false, optional: false, required: true
  private _zoneFile?: string; 
  public get zoneFile() {
    return this.getStringAttribute('zone_file');
  }
  public set zoneFile(value: string) {
    this._zoneFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneFileInput() {
    return this._zoneFile;
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
      zone_file: cdktf.stringToTerraform(this._zoneFile),
      zone_name: cdktf.stringToTerraform(this._zoneName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      zone_file: {
        value: cdktf.stringToHclTerraform(this._zoneFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
