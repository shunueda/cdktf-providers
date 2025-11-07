// https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/org_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBitwardenOrgGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter search results by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/org_group#filter_name DataBitwardenOrgGroup#filter_name}
  */
  readonly filterName?: string;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/org_group#id DataBitwardenOrgGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/org_group#organization_id DataBitwardenOrgGroup#organization_id}
  */
  readonly organizationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/org_group bitwarden_org_group}
*/
export class DataBitwardenOrgGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bitwarden_org_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBitwardenOrgGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBitwardenOrgGroup to import
  * @param importFromId The id of the existing DataBitwardenOrgGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/org_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBitwardenOrgGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bitwarden_org_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/org_group bitwarden_org_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBitwardenOrgGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataBitwardenOrgGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'bitwarden_org_group',
      terraformGeneratorMetadata: {
        providerName: 'bitwarden',
        providerVersion: '0.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filterName = config.filterName;
    this._id = config.id;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_name - computed: false, optional: true, required: false
  private _filterName?: string; 
  public get filterName() {
    return this.getStringAttribute('filter_name');
  }
  public set filterName(value: string) {
    this._filterName = value;
  }
  public resetFilterName() {
    this._filterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterNameInput() {
    return this._filterName;
  }

  // id - computed: false, optional: true, required: false
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_name: cdktf.stringToTerraform(this._filterName),
      id: cdktf.stringToTerraform(this._id),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_name: {
        value: cdktf.stringToHclTerraform(this._filterName),
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
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
