// https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/data-sources/role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSecureworkloadRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the root app scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/data-sources/role#app_scope_id DataSecureworkloadRole#app_scope_id}
  */
  readonly appScopeId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/data-sources/role secureworkload_role}
*/
export class DataSecureworkloadRole extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "secureworkload_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSecureworkloadRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSecureworkloadRole to import
  * @param importFromId The id of the existing DataSecureworkloadRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/data-sources/role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSecureworkloadRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "secureworkload_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/data-sources/role secureworkload_role} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSecureworkloadRoleConfig
  */
  public constructor(scope: Construct, id: string, config: DataSecureworkloadRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'secureworkload_role',
      terraformGeneratorMetadata: {
        providerName: 'secureworkload',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appScopeId = config.appScopeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_scope_id - computed: false, optional: false, required: true
  private _appScopeId?: string; 
  public get appScopeId() {
    return this.getStringAttribute('app_scope_id');
  }
  public set appScopeId(value: string) {
    this._appScopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appScopeIdInput() {
    return this._appScopeId;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_scope_id: cdktf.stringToTerraform(this._appScopeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_scope_id: {
        value: cdktf.stringToHclTerraform(this._appScopeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
