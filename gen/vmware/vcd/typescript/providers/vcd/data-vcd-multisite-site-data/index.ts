// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_site_data
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdMultisiteSiteDataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the file to be filled with association data for this site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_site_data#download_to_file DataVcdMultisiteSiteData#download_to_file}
  */
  readonly downloadToFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_site_data#id DataVcdMultisiteSiteData#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_site_data vcd_multisite_site_data}
*/
export class DataVcdMultisiteSiteData extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_multisite_site_data";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdMultisiteSiteData resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdMultisiteSiteData to import
  * @param importFromId The id of the existing DataVcdMultisiteSiteData that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_site_data#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdMultisiteSiteData to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_multisite_site_data", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_site_data vcd_multisite_site_data} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdMultisiteSiteDataConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVcdMultisiteSiteDataConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vcd_multisite_site_data',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._downloadToFile = config.downloadToFile;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // association_data - computed: true, optional: false, required: false
  public get associationData() {
    return this.getStringAttribute('association_data');
  }

  // download_to_file - computed: false, optional: true, required: false
  private _downloadToFile?: string; 
  public get downloadToFile() {
    return this.getStringAttribute('download_to_file');
  }
  public set downloadToFile(value: string) {
    this._downloadToFile = value;
  }
  public resetDownloadToFile() {
    this._downloadToFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadToFileInput() {
    return this._downloadToFile;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      download_to_file: cdktf.stringToTerraform(this._downloadToFile),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      download_to_file: {
        value: cdktf.stringToHclTerraform(this._downloadToFile),
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
