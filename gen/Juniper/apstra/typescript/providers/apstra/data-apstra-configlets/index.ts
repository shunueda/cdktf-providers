// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/configlets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraConfigletsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configlets which do not support each of the specified platforms will be filtered out of the results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/configlets#supported_platforms DataApstraConfiglets#supported_platforms}
  */
  readonly supportedPlatforms?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/configlets apstra_configlets}
*/
export class DataApstraConfiglets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_configlets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraConfiglets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraConfiglets to import
  * @param importFromId The id of the existing DataApstraConfiglets that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/configlets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraConfiglets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_configlets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/configlets apstra_configlets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraConfigletsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApstraConfigletsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apstra_configlets',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._supportedPlatforms = config.supportedPlatforms;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
      supported_platforms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._supportedPlatforms),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
