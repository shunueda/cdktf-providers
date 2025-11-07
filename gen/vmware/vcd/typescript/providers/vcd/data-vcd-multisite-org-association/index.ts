// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_org_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdMultisiteOrgAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the associated Organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_org_association#associated_org_id DataVcdMultisiteOrgAssociation#associated_org_id}
  */
  readonly associatedOrgId?: string;
  /**
  * Name of the file filled with association data for this Org. Used when user doesn't have associated org ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_org_association#association_data_file DataVcdMultisiteOrgAssociation#association_data_file}
  */
  readonly associationDataFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_org_association#id DataVcdMultisiteOrgAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_org_association#org_id DataVcdMultisiteOrgAssociation#org_id}
  */
  readonly orgId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_org_association vcd_multisite_org_association}
*/
export class DataVcdMultisiteOrgAssociation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_multisite_org_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdMultisiteOrgAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdMultisiteOrgAssociation to import
  * @param importFromId The id of the existing DataVcdMultisiteOrgAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_org_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdMultisiteOrgAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_multisite_org_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/multisite_org_association vcd_multisite_org_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdMultisiteOrgAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdMultisiteOrgAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_multisite_org_association',
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
    this._associatedOrgId = config.associatedOrgId;
    this._associationDataFile = config.associationDataFile;
    this._id = config.id;
    this._orgId = config.orgId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_org_id - computed: false, optional: true, required: false
  private _associatedOrgId?: string; 
  public get associatedOrgId() {
    return this.getStringAttribute('associated_org_id');
  }
  public set associatedOrgId(value: string) {
    this._associatedOrgId = value;
  }
  public resetAssociatedOrgId() {
    this._associatedOrgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedOrgIdInput() {
    return this._associatedOrgId;
  }

  // associated_org_name - computed: true, optional: false, required: false
  public get associatedOrgName() {
    return this.getStringAttribute('associated_org_name');
  }

  // associated_site_id - computed: true, optional: false, required: false
  public get associatedSiteId() {
    return this.getStringAttribute('associated_site_id');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_org_id: cdktf.stringToTerraform(this._associatedOrgId),
      association_data_file: cdktf.stringToTerraform(this._associationDataFile),
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associated_org_id: {
        value: cdktf.stringToHclTerraform(this._associatedOrgId),
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
