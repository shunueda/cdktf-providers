// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNexusSecurityUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The userid which is required for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_user#userid DataNexusSecurityUser#userid}
  */
  readonly userid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_user nexus_security_user}
*/
export class DataNexusSecurityUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus_security_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNexusSecurityUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNexusSecurityUser to import
  * @param importFromId The id of the existing DataNexusSecurityUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNexusSecurityUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus_security_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_user nexus_security_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNexusSecurityUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataNexusSecurityUserConfig) {
    super(scope, id, {
      terraformResourceType: 'nexus_security_user',
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
    this._userid = config.userid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // firstname - computed: true, optional: false, required: false
  public get firstname() {
    return this.getStringAttribute('firstname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lastname - computed: true, optional: false, required: false
  public get lastname() {
    return this.getStringAttribute('lastname');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // userid - computed: false, optional: false, required: true
  private _userid?: string; 
  public get userid() {
    return this.getStringAttribute('userid');
  }
  public set userid(value: string) {
    this._userid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useridInput() {
    return this._userid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      userid: cdktf.stringToTerraform(this._userid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      userid: {
        value: cdktf.stringToHclTerraform(this._userid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
