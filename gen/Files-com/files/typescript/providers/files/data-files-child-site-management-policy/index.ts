// https://registry.terraform.io/providers/files-com/files/0.1.397/docs/data-sources/child_site_management_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesChildSiteManagementPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Policy ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/data-sources/child_site_management_policy#id DataFilesChildSiteManagementPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/data-sources/child_site_management_policy files_child_site_management_policy}
*/
export class DataFilesChildSiteManagementPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_child_site_management_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesChildSiteManagementPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesChildSiteManagementPolicy to import
  * @param importFromId The id of the existing DataFilesChildSiteManagementPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/data-sources/child_site_management_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesChildSiteManagementPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_child_site_management_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/data-sources/child_site_management_policy files_child_site_management_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesChildSiteManagementPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesChildSiteManagementPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'files_child_site_management_policy',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.397',
        providerVersionConstraint: '0.1.397'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applied_child_site_ids - computed: true, optional: false, required: false
  public get appliedChildSiteIds() {
    return this.getNumberListAttribute('applied_child_site_ids');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }

  // skip_child_site_ids - computed: true, optional: false, required: false
  public get skipChildSiteIds() {
    return this.getNumberListAttribute('skip_child_site_ids');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // value - computed: true, optional: false, required: false
  private _value = new cdktf.AnyMap(this, "value");
  public get value() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
