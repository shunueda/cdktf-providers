// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNexusSecurityRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_role#roleid DataNexusSecurityRole#roleid}
  */
  readonly roleid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_role nexus_security_role}
*/
export class DataNexusSecurityRole extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus_security_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNexusSecurityRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNexusSecurityRole to import
  * @param importFromId The id of the existing DataNexusSecurityRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNexusSecurityRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus_security_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_role nexus_security_role} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNexusSecurityRoleConfig
  */
  public constructor(scope: Construct, id: string, config: DataNexusSecurityRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'nexus_security_role',
      terraformGeneratorMetadata: {
        providerName: 'nexus',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._roleid = config.roleid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // privileges - computed: true, optional: false, required: false
  public get privileges() {
    return cdktf.Fn.tolist(this.getListAttribute('privileges'));
  }

  // roleid - computed: false, optional: false, required: true
  private _roleid?: string; 
  public get roleid() {
    return this.getStringAttribute('roleid');
  }
  public set roleid(value: string) {
    this._roleid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleidInput() {
    return this._roleid;
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      roleid: cdktf.stringToTerraform(this._roleid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      roleid: {
        value: cdktf.stringToHclTerraform(this._roleid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
