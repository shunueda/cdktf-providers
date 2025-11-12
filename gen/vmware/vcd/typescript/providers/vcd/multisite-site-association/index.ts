// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/multisite_site_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MultisiteSiteAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data needed to associate this site to another
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/multisite_site_association#association_data MultisiteSiteAssociation#association_data}
  */
  readonly associationData?: string;
  /**
  * Name of the file to be filled with association data for this site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/multisite_site_association#association_data_file MultisiteSiteAssociation#association_data_file}
  */
  readonly associationDataFile?: string;
  /**
  * How many minutes to keep checking for connection (0=no check)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/multisite_site_association#connection_timeout_mins MultisiteSiteAssociation#connection_timeout_mins}
  */
  readonly connectionTimeoutMins?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/multisite_site_association#id MultisiteSiteAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/multisite_site_association vcd_multisite_site_association}
*/
export class MultisiteSiteAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_multisite_site_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MultisiteSiteAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MultisiteSiteAssociation to import
  * @param importFromId The id of the existing MultisiteSiteAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/multisite_site_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MultisiteSiteAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_multisite_site_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/multisite_site_association vcd_multisite_site_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MultisiteSiteAssociationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MultisiteSiteAssociationConfig = {}) {
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
    this._associationData = config.associationData;
    this._associationDataFile = config.associationDataFile;
    this._connectionTimeoutMins = config.connectionTimeoutMins;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_site_href - computed: true, optional: false, required: false
  public get associatedSiteHref() {
    return this.getStringAttribute('associated_site_href');
  }

  // associated_site_id - computed: true, optional: false, required: false
  public get associatedSiteId() {
    return this.getStringAttribute('associated_site_id');
  }

  // associated_site_name - computed: true, optional: false, required: false
  public get associatedSiteName() {
    return this.getStringAttribute('associated_site_name');
  }

  // association_data - computed: false, optional: true, required: false
  private _associationData?: string; 
  public get associationData() {
    return this.getStringAttribute('association_data');
  }
  public set associationData(value: string) {
    this._associationData = value;
  }
  public resetAssociationData() {
    this._associationData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationDataInput() {
    return this._associationData;
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

  // connection_timeout_mins - computed: false, optional: true, required: false
  private _connectionTimeoutMins?: number; 
  public get connectionTimeoutMins() {
    return this.getNumberAttribute('connection_timeout_mins');
  }
  public set connectionTimeoutMins(value: number) {
    this._connectionTimeoutMins = value;
  }
  public resetConnectionTimeoutMins() {
    this._connectionTimeoutMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutMinsInput() {
    return this._connectionTimeoutMins;
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
      association_data: cdktf.stringToTerraform(this._associationData),
      association_data_file: cdktf.stringToTerraform(this._associationDataFile),
      connection_timeout_mins: cdktf.numberToTerraform(this._connectionTimeoutMins),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      association_data: {
        value: cdktf.stringToHclTerraform(this._associationData),
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
      connection_timeout_mins: {
        value: cdktf.numberToHclTerraform(this._connectionTimeoutMins),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
