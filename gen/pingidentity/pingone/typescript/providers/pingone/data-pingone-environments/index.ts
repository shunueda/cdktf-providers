// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/environments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingoneEnvironmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A SCIM filter to apply to the environment selection.  A SCIM filter offers the greatest flexibility in filtering environments.  SCIM operators can be used in the following ways: `sw` (starts with) supports the `name` attribute; `eq` (equal to) supports the `id`, `organization.id`, `license.id` attributes; `and` (logical AND) can be used to aggregate conditions.  For example, `(name sw "TEST-") AND (license.id eq "${var.license_id}")`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/environments#scim_filter DataPingoneEnvironments#scim_filter}
  */
  readonly scimFilter: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/environments pingone_environments}
*/
export class DataPingoneEnvironments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_environments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingoneEnvironments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingoneEnvironments to import
  * @param importFromId The id of the existing DataPingoneEnvironments that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/environments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingoneEnvironments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_environments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/environments pingone_environments} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingoneEnvironmentsConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingoneEnvironmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_environments',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._scimFilter = config.scimFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // scim_filter - computed: false, optional: false, required: true
  private _scimFilter?: string; 
  public get scimFilter() {
    return this.getStringAttribute('scim_filter');
  }
  public set scimFilter(value: string) {
    this._scimFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scimFilterInput() {
    return this._scimFilter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      scim_filter: cdktf.stringToTerraform(this._scimFilter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      scim_filter: {
        value: cdktf.stringToHclTerraform(this._scimFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
