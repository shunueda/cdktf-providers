// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/auth_radius_servers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseAuthRadiusServersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/auth_radius_servers#auth_type DataFortisaseAuthRadiusServers#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/auth_radius_servers#included_in_default_user_group DataFortisaseAuthRadiusServers#included_in_default_user_group}
  */
  readonly includedInDefaultUserGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/auth_radius_servers#primary_key DataFortisaseAuthRadiusServers#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/auth_radius_servers#primary_server DataFortisaseAuthRadiusServers#primary_server}
  */
  readonly primaryServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/auth_radius_servers#secondary_server DataFortisaseAuthRadiusServers#secondary_server}
  */
  readonly secondaryServer?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/auth_radius_servers fortisase_auth_radius_servers}
*/
export class DataFortisaseAuthRadiusServers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_auth_radius_servers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseAuthRadiusServers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseAuthRadiusServers to import
  * @param importFromId The id of the existing DataFortisaseAuthRadiusServers that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/auth_radius_servers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseAuthRadiusServers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_auth_radius_servers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/auth_radius_servers fortisase_auth_radius_servers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseAuthRadiusServersConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseAuthRadiusServersConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_auth_radius_servers',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authType = config.authType;
    this._includedInDefaultUserGroup = config.includedInDefaultUserGroup;
    this._primaryKey = config.primaryKey;
    this._primaryServer = config.primaryServer;
    this._secondaryServer = config.secondaryServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // included_in_default_user_group - computed: true, optional: true, required: false
  private _includedInDefaultUserGroup?: boolean | cdktf.IResolvable; 
  public get includedInDefaultUserGroup() {
    return this.getBooleanAttribute('included_in_default_user_group');
  }
  public set includedInDefaultUserGroup(value: boolean | cdktf.IResolvable) {
    this._includedInDefaultUserGroup = value;
  }
  public resetIncludedInDefaultUserGroup() {
    this._includedInDefaultUserGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedInDefaultUserGroupInput() {
    return this._includedInDefaultUserGroup;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // primary_server - computed: true, optional: true, required: false
  private _primaryServer?: string; 
  public get primaryServer() {
    return this.getStringAttribute('primary_server');
  }
  public set primaryServer(value: string) {
    this._primaryServer = value;
  }
  public resetPrimaryServer() {
    this._primaryServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryServerInput() {
    return this._primaryServer;
  }

  // secondary_server - computed: true, optional: true, required: false
  private _secondaryServer?: string; 
  public get secondaryServer() {
    return this.getStringAttribute('secondary_server');
  }
  public set secondaryServer(value: string) {
    this._secondaryServer = value;
  }
  public resetSecondaryServer() {
    this._secondaryServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryServerInput() {
    return this._secondaryServer;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_type: cdktf.stringToTerraform(this._authType),
      included_in_default_user_group: cdktf.booleanToTerraform(this._includedInDefaultUserGroup),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      primary_server: cdktf.stringToTerraform(this._primaryServer),
      secondary_server: cdktf.stringToTerraform(this._secondaryServer),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      included_in_default_user_group: {
        value: cdktf.booleanToHclTerraform(this._includedInDefaultUserGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_server: {
        value: cdktf.stringToHclTerraform(this._primaryServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_server: {
        value: cdktf.stringToHclTerraform(this._secondaryServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
