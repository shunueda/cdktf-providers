// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_radius_servers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthRadiusServersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_radius_servers#auth_type AuthRadiusServers#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_radius_servers#included_in_default_user_group AuthRadiusServers#included_in_default_user_group}
  */
  readonly includedInDefaultUserGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_radius_servers#primary_key AuthRadiusServers#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_radius_servers#primary_secret AuthRadiusServers#primary_secret}
  */
  readonly primarySecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_radius_servers#primary_server AuthRadiusServers#primary_server}
  */
  readonly primaryServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_radius_servers#secondary_secret AuthRadiusServers#secondary_secret}
  */
  readonly secondarySecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_radius_servers#secondary_server AuthRadiusServers#secondary_server}
  */
  readonly secondaryServer?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_radius_servers fortisase_auth_radius_servers}
*/
export class AuthRadiusServers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_auth_radius_servers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthRadiusServers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthRadiusServers to import
  * @param importFromId The id of the existing AuthRadiusServers that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_radius_servers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthRadiusServers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_auth_radius_servers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_radius_servers fortisase_auth_radius_servers} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthRadiusServersConfig
  */
  public constructor(scope: Construct, id: string, config: AuthRadiusServersConfig) {
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
    this._primarySecret = config.primarySecret;
    this._primaryServer = config.primaryServer;
    this._secondarySecret = config.secondarySecret;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // primary_secret - computed: true, optional: true, required: false
  private _primarySecret?: string; 
  public get primarySecret() {
    return this.getStringAttribute('primary_secret');
  }
  public set primarySecret(value: string) {
    this._primarySecret = value;
  }
  public resetPrimarySecret() {
    this._primarySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primarySecretInput() {
    return this._primarySecret;
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

  // secondary_secret - computed: true, optional: true, required: false
  private _secondarySecret?: string; 
  public get secondarySecret() {
    return this.getStringAttribute('secondary_secret');
  }
  public set secondarySecret(value: string) {
    this._secondarySecret = value;
  }
  public resetSecondarySecret() {
    this._secondarySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondarySecretInput() {
    return this._secondarySecret;
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
      primary_secret: cdktf.stringToTerraform(this._primarySecret),
      primary_server: cdktf.stringToTerraform(this._primaryServer),
      secondary_secret: cdktf.stringToTerraform(this._secondarySecret),
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
      primary_secret: {
        value: cdktf.stringToHclTerraform(this._primarySecret),
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
      secondary_secret: {
        value: cdktf.stringToHclTerraform(this._secondarySecret),
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
