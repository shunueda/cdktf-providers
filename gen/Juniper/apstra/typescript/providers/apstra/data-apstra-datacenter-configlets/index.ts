// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_configlets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraDatacenterConfigletsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Blueprint ID. Used to identify the Blueprint that the Configlet belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_configlets#blueprint_id DataApstraDatacenterConfiglets#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Configlets which do not support each of the specified platforms will be filtered out of the results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_configlets#supported_platforms DataApstraDatacenterConfiglets#supported_platforms}
  */
  readonly supportedPlatforms?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_configlets apstra_datacenter_configlets}
*/
export class DataApstraDatacenterConfiglets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_configlets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraDatacenterConfiglets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraDatacenterConfiglets to import
  * @param importFromId The id of the existing DataApstraDatacenterConfiglets that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_configlets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraDatacenterConfiglets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_configlets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_configlets apstra_datacenter_configlets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraDatacenterConfigletsConfig
  */
  public constructor(scope: Construct, id: string, config: DataApstraDatacenterConfigletsConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_configlets',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.1',
        providerVersionConstraint: '0.95.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprintId = config.blueprintId;
    this._supportedPlatforms = config.supportedPlatforms;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }

  // supported_platforms - computed: false, optional: true, required: false
  private _supportedPlatforms?: string[]; 
  public get supportedPlatforms() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_platforms'));
  }
  public set supportedPlatforms(value: string[]) {
    this._supportedPlatforms = value;
  }
  public resetSupportedPlatforms() {
    this._supportedPlatforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedPlatformsInput() {
    return this._supportedPlatforms;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      supported_platforms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._supportedPlatforms),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supported_platforms: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._supportedPlatforms),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
