// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/multisite_org_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MultisiteOrgAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the associated Organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/multisite_org_association#associated_org_id MultisiteOrgAssociation#associated_org_id}
  */
  readonly associatedOrgId?: string;
  /**
  * Data needed to associate this Organization to another
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/multisite_org_association#association_data MultisiteOrgAssociation#association_data}
  */
  readonly associationData?: string;
  /**
  * Name of the file filled with association data for this Org
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/multisite_org_association#association_data_file MultisiteOrgAssociation#association_data_file}
  */
  readonly associationDataFile?: string;
  /**
  * How many minutes to keep checking for connection (0=no check)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/multisite_org_association#connection_timeout_mins MultisiteOrgAssociation#connection_timeout_mins}
  */
  readonly connectionTimeoutMins?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/multisite_org_association#id MultisiteOrgAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/multisite_org_association#org_id MultisiteOrgAssociation#org_id}
  */
  readonly orgId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/multisite_org_association vcd_multisite_org_association}
*/
export class MultisiteOrgAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_multisite_org_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MultisiteOrgAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MultisiteOrgAssociation to import
  * @param importFromId The id of the existing MultisiteOrgAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/multisite_org_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MultisiteOrgAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_multisite_org_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/multisite_org_association vcd_multisite_org_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MultisiteOrgAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: MultisiteOrgAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_multisite_org_association',
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
    this._associatedOrgId = config.associatedOrgId;
    this._associationData = config.associationData;
    this._associationDataFile = config.associationDataFile;
    this._connectionTimeoutMins = config.connectionTimeoutMins;
    this._id = config.id;
    this._orgId = config.orgId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_org_id - computed: true, optional: true, required: false
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
      association_data: cdktf.stringToTerraform(this._associationData),
      association_data_file: cdktf.stringToTerraform(this._associationDataFile),
      connection_timeout_mins: cdktf.numberToTerraform(this._connectionTimeoutMins),
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
