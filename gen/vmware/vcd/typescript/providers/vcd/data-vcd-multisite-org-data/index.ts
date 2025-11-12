// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_org_data
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdMultisiteOrgDataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the file to be filled with association data for this Org
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_org_data#download_to_file DataVcdMultisiteOrgData#download_to_file}
  */
  readonly downloadToFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_org_data#id DataVcdMultisiteOrgData#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_org_data#org_id DataVcdMultisiteOrgData#org_id}
  */
  readonly orgId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_org_data vcd_multisite_org_data}
*/
export class DataVcdMultisiteOrgData extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_multisite_org_data";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdMultisiteOrgData resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdMultisiteOrgData to import
  * @param importFromId The id of the existing DataVcdMultisiteOrgData that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_org_data#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdMultisiteOrgData to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_multisite_org_data", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_org_data vcd_multisite_org_data} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdMultisiteOrgDataConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdMultisiteOrgDataConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_multisite_org_data',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
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
    this._orgId = config.orgId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // association_data - computed: true, optional: false, required: false
  public get associationData() {
    return this.getStringAttribute('association_data');
  }

  // associations - computed: true, optional: false, required: false
  public get associations() {
    return this.getListAttribute('associations');
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

  // number_of_associations - computed: true, optional: false, required: false
  public get numberOfAssociations() {
    return this.getNumberAttribute('number_of_associations');
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      download_to_file: cdktf.stringToTerraform(this._downloadToFile),
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
