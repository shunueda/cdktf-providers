// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_site_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdMultisiteSiteAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the site to which the associated site belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_site_association#associated_site_id DataVcdMultisiteSiteAssociation#associated_site_id}
  */
  readonly associatedSiteId?: string;
  /**
  * Name of the file filled with association data for this Site. Used when user doesn't have associated site ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_site_association#association_data_file DataVcdMultisiteSiteAssociation#association_data_file}
  */
  readonly associationDataFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_site_association#id DataVcdMultisiteSiteAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_site_association vcd_multisite_site_association}
*/
export class DataVcdMultisiteSiteAssociation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_multisite_site_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdMultisiteSiteAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdMultisiteSiteAssociation to import
  * @param importFromId The id of the existing DataVcdMultisiteSiteAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_site_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdMultisiteSiteAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_multisite_site_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_site_association vcd_multisite_site_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdMultisiteSiteAssociationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVcdMultisiteSiteAssociationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vcd_multisite_site_association',
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
    this._associatedSiteId = config.associatedSiteId;
    this._associationDataFile = config.associationDataFile;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_site_href - computed: true, optional: false, required: false
  public get associatedSiteHref() {
    return this.getStringAttribute('associated_site_href');
  }

  // associated_site_id - computed: false, optional: true, required: false
  private _associatedSiteId?: string; 
  public get associatedSiteId() {
    return this.getStringAttribute('associated_site_id');
  }
  public set associatedSiteId(value: string) {
    this._associatedSiteId = value;
  }
  public resetAssociatedSiteId() {
    this._associatedSiteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedSiteIdInput() {
    return this._associatedSiteId;
  }

  // associated_site_name - computed: true, optional: false, required: false
  public get associatedSiteName() {
    return this.getStringAttribute('associated_site_name');
  }

  // association_data_file - computed: false, optional: true, required: false
  private _associationDataFile?: string; 
  public get associationDataFile() {
    return this.getStringAttribute('association_data_file');
  }
  public set associationDataFile(value: string) {
    this._associationDataFile = value;
  }
  public resetAssociationDataFile() {
    this._associationDataFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationDataFileInput() {
    return this._associationDataFile;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_site_id: cdktf.stringToTerraform(this._associatedSiteId),
      association_data_file: cdktf.stringToTerraform(this._associationDataFile),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associated_site_id: {
        value: cdktf.stringToHclTerraform(this._associatedSiteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      association_data_file: {
        value: cdktf.stringToHclTerraform(this._associationDataFile),
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
